# Clipboard Manager with Vim-Style Navigation

This document explains the unified clipboard management setup for this system, integrated with **Rofi** and supporting **Vim-style** keyboard navigation.

## Overview

The system uses different backends depending on the environment but a common **Rofi** interface for interaction:
- **i3 (X11)**: Uses `greenclip` daemon.
- **Hyprland (Wayland)**: Uses `cliphist`.

All interactions are handled via the shortcut `Alt + V` (or `$mod + V` in i3).

## Keybindings

The following keybindings have been added to **Rofi** to provide a "Full Vim" experience.

### Global Rofi Navigation
These work in **any** Rofi menu (Application Launcher, Window Switcher, etc.):
- `Ctrl + j`: Move selection down
- `Ctrl + k`: Move selection up
- `Ctrl + l`: Accept selection (Enter)
- `Ctrl + h`: Backspace (Delete character)

### Clipboard-Specific "Vim Mode"
When opening the Clipboard Manager specifically (`Alt + V`), the following **plain keys** are enabled for direct navigation:
- `j`: Move down
- `k`: Move up
- `l`: Accept selection (Enter)
- `h`: Backspace / Delete character

> [!NOTE]
> Since `j`, `k`, `l`, `h` are used for navigation in the clipboard menu, they cannot be used for searching. To search while in the clipboard menu, use the standard navigation keys or disable these shortcuts in `config-clipboard.rasi`.

## Configuration Files

The relevant configuration files in the dotfiles repository are:
1. `rofi/.config/rofi/config.rasi`: Global navigation and unbinding of conflicting defaults.
2. `rofi/.config/rofi/config-clipboard.rasi`: Clipboard-specific Vim-mode and selection behavior (`hover-select: true`).
3. `i3/.config/i3/config`: i3 startup and keybindings for `greenclip`.
4. `hypr/.config/hypr/configs/Startup_Apps.conf`: Hyprland startup for `cliphist`.

## Maintenance

If you need to change these keybindings or add new ones, always look at the `configuration {}` block in the `.rasi` files mentioned above. To unbind a default Rofi key that is conflicting, set its value to an empty string (e.g., `kb-mode-complete: "";`).
