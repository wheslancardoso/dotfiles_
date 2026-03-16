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

## 5. Automation Workflow
1. Clone dotfiles: `git clone <repo_url> ~/dotfiles_`
2. Run system setup: `bash ~/dotfiles_/scripts/setup-system.sh`
3. Link configurations: `bash ~/dotfiles_/stow-it.sh`
