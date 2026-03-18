# 🌟 Dotfiles — Arch Linux + Hyprland

Setup completo de um desktop Hyprland com Neovim, Yazi, Zsh, Waybar, Rofi e muito mais.

---

## 🚀 Instalação do Zero (Recomendado)

Numa instalação limpa do Arch Linux, rode **um único comando**:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/wheslancardoso/dotfiles_/feature/hyprland-bootstrap/install-full.sh)
```

Isso vai:
1. Instalar o **Hyprland via JaKooLit** (instalador interativo — responda as perguntas de GPU, AUR helper, etc.)
2. Clonar este repositório
3. Agendar o setup completo de dotfiles para rodar automaticamente na **primeira sessão** do Hyprland após o reboot
4. Perguntar se deseja reiniciar

Após o reboot e o setup automático, reinicie a sessão mais uma vez. Pronto.

---

## ⚡ Instalação Rápida (Hyprland já instalado)

Se você já tem o Hyprland instalado e só quer aplicar os dotfiles:

```bash
git clone https://github.com/wheslancardoso/dotfiles_.git ~/dotfiles_
cd ~/dotfiles_
git checkout feature/hyprland-bootstrap
bash setup-hyprland.sh
```

---

## 📦 O que é instalado

### Pacotes (pacman)
`kitty` `neovim` `lazygit` `yazi` `copyq` `zathura` `fzf` `lsd` `zoxide`
`waybar` `rofi` `dunst` `swaync` `swappy` `btop` `fastfetch` `mpv`
`xdg-desktop-portal` `xdg-desktop-portal-hyprland` `gnome-keyring`
`ttf-nerd-fonts-symbols` e mais...

### AUR
`xdg-desktop-portal-termfilechooser-hunkyburrito-git`

### Shell
- **Zsh** com Oh-My-Zsh
- Plugins: `zsh-autosuggestions`, `zsh-syntax-highlighting`, `zsh-history-substring-search`, `vi-mode`, `fzf`
- Tema: `agnosterzak`
- **Mise** (runtime manager)

---

## 🔧 Scripts

| Script | Descrição |
|---|---|
| `install-full.sh` | Instalação completa do zero (JaKooLit + dotfiles) |
| `setup-hyprland.sh` | Instala pacotes + aplica dotfiles (Hyprland já instalado) |
| `stow-hyprland.sh` | Só aplica os links simbólicos via Stow |
| `stow-it.sh` | Stow geral (todos os pacotes, incluindo i3) |
| `nerdfontinstall.sh` | Instala Nerd Fonts manualmente |

---

## 📁 Pacotes Stow (Hyprland)

`btop` `dunst` `fastfetch` `fish` `ghostty` `git` `gtk` `hypr` `ideavim`
`kitty` `Kvantum` `mpv` `nvim` `qt5ct` `rofi` `swappy` `swaync` `themes`
`tridactyl` `user-dirs` `vim` `wallpapers` `wallust` `waybar` `xdg-portal` `yazi` `zsh`

> Pacotes i3/X11 (`polybar`, `picom`, `nitrogen`, etc.) são ignorados automaticamente.

---

## 🔗 Pós-instalação

Após o setup, faça manualmente no Firefox/LibreWolf:

```
about:config → widget.use-xdg-desktop-portal.file-picker = 1
```

Isso habilita o **Yazi como seletor de arquivos** do browser.

---

## ⌨️ Atalhos Principais

| Atalho | Ação |
|---|---|
| `$mod + E` | Yazi (gerenciador de arquivos) |
| `Alt + V` | CopyQ (histórico de clipboard) |
| `$mod + D` | Rofi (lançador) |
| `$mod + W` | Selecionar Wallpaper (Otimizado p/ 1366x768) |

---

## 📖 Documentação

- `docs/system_setup.md` — Configuração de sudo, keyring e Zsh
- `docs/yazi_portal_setup.md` — Yazi como file picker do browser
- `docs/clipboard_setup.md` — CopyQ e gerenciamento de clipboard
- `guia_integracao_yazi_tridactyl.md` — Integração Yazi + Tridactyl + browser
