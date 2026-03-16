# System Setup Documentation

This guide documents the core system configurations for this persistent environment, focused on automation and security.

## 1. Passwordless Sudo
We have enabled passwordless `sudo` for the user `lan`. This allows automation scripts and tools like Antigravity to perform administrative tasks without interactive interruptions.

### Configuration
- **File**: `/etc/sudoers.d/lan-nopasswd`
- **Content**: `lan ALL=(ALL) NOPASSWD: ALL`
- **Automation**: Use `scripts/setup-system.sh` to apply this on a fresh install.

---

## 2. Keyring (Secrets Management)
To persist session data and conversation history, we use `gnome-keyring`.

### Key Components
1. **Startup**: Managed in `hypr/.config/hypr/configs/Startup_Apps.conf`
   ```bash
   exec-once = gnome-keyring-daemon --start --components=secrets
   ```
2. **Environment Variables**: Managed in `zsh/.zshrc` (standardized across the session).
   ```bash
   eval $(gnome-keyring-daemon --start)
   export SSH_AUTH_SOCK
   ```

### Troubleshooting
- **Missing Conversations**: Ensure the keyring is unlocked. On the first login after install, set the keyring password to match your login password for automatic unlocking.
- **Changes not applying**: If edits in `~/dotfiles_` don't take effect (e.g., atalhos do Hyprland), ensure the files are correctly linked. Use:
  ```bash
  cd ~/dotfiles_
  bash stow-it.sh -a all
  hyprctl reload
  ```

---

## 3. Vim & Yazi Integration
Achieving a "Full Vim" experience by integrating Yazi (File Manager) with Librewolf (via Tridactyl).

### Key Features
- **Floating terminal Yazi**: Launch Yazi in a floating window for quick file management.
- **Keybind**: `$mod + E` is now configured to launch Yazi in a terminal (Kitty).
- **Tridactyl Bindings**:
    - `;y`: Open Yazi in a floating terminal.
    - `d`: Scroll down (half page).
    - `u`: Scroll up (half page).
    - `q`: Close current tab (mapped to `tabclose`).
    - `m`: Record macro (moved from `q`).
    - `U`: Undo (reopen closed tab).
    - Custom commands in `.tridactylrc` to bridge the browser and file manager.

---

## 4. Shell Optimization (Zsh)
We've transformed the terminal into a modal environment.

### Key Features
- **VI Mode**: Press `ESC` in the terminal to enter Command Mode. Use `h/j/k/l`, `w`, `b`, `x`, `r`, etc., to edit your command line.
- **FZF (Fuzzy Finder)**: 
    - `CTRL+R`: Fuzzy search history.
    - `CTRL+T`: Fuzzy search files.
    - `ALT+C`: Fuzzy cd into subdirectories.
- **History Substring Search**: Type part of a command and use **Up/Down arrows** (or `j/k` in VI command mode) to cycle through matching history items.
- **Sudo Shortcut**: Press `ESC` twice to automatically prefix the current command with `sudo`.

---

## 5. Automation Workflow: Fresh Install & Replication
Para replicar este setup em uma nova máquina ou instalação, siga estes passos:

### Passo 1: Preparação
Certifique-se de que o `git`, `stow` e `zsh` estão instalados no sistema.
```bash
# Exemplo (Arch Linux):
sudo pacman -S git stow zsh
```

### Passo 2: Clonar e Configurar Sudo
Clone o repositório e execute o script de sistema:
```bash
git clone <url_do_seu_repo> ~/dotfiles_
cd ~/dotfiles_
bash scripts/setup-system.sh
```

### Passo 3: Sincronizar Arquivos (Substituindo Configurações Existentes)
Se a nova máquina já tiver arquivos de configuração (como um `.zshrc` padrão), você tem duas opções ao usar o `stow-it.sh`:

1. **Estratégia de Adoção (Recomendada)**: 
   Usa o comando abaixo para "adotar" os arquivos locais existentes. O Stow criará o link e moverá o conteúdo local para dentro da pasta `dotfiles_`.
   ```bash
   bash stow-it.sh all -a
   ```
   *Nota: Após isso, use `git restore .` se quiser descartar as mudanças locais e manter exatamente o que estava no repositório.*

2. **Estratégia de Sobrescrita**:
   Se você sabe que não quer nada do que está na máquina nova, pode forçar a criação dos links (o script tentará fazer o `-R` / restow). Se houver conflitos, o Stow avisará e você poderá remover os arquivos locais conflitantes manualmente antes de rodar o script novamente.

---

## 6. Verificação Final após Replicação
- Reinicie a sessão (Logout/Login) para carregar o Hyprland e o Keyring.
- Abra o terminal para verificar se o `vi-mode` e o `fzf` estão ativos.
- Teste o atalho `$mod + E` para abrir o Yazi.
