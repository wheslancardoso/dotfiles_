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
- **Tridactyl Bindings**: Custom commands in `.tridactylrc` to bridge the browser and file manager.

---

## 4. Automation Workflow
1. Clone dotfiles: `git clone <repo_url> ~/dotfiles_`
2. Run system setup: `bash ~/dotfiles_/scripts/setup-system.sh`
3. Link configurations: `bash ~/dotfiles_/stow-it.sh`
