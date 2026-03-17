# Clipboard Manager Setup (CopyQ)

This document explains the unified clipboard management setup using **CopyQ** across both i3 and Hyprland.

## Overview

We have unified the clipboard management to use **CopyQ** for a consistent experience:
- **i3 (X11)**: CopyQ is started in the background.
- **Hyprland (Wayland)**: CopyQ is started in the background (replacing `cliphist`).

All interactions are handled via the shortcut **Alt + V** (Hyprland) or **$mod + V** (i3).

## Features

- **Floating & Centered**: On both environments, the clipboard window is configured to appear floating and centered on the screen.
- **Clipboard History**: Tracks text, images, and other formats.

## Configuration Files

The relevant configuration files in the dotfiles repository are:
1. `i3/.config/i3/config`: Keybinding `$mod+v` and startup for CopyQ. Includes a `for_window` rule for floating/centering.
2. `hypr/.config/hypr/configs/Startup_Apps.conf`: Startup for CopyQ (replaces cliphist).
3. `hypr/.config/hypr/configs/Keybinds.conf`: Keybinding `Alt+V` for `copyq show`.
4. `hypr/.config/hypr/configs/WindowRules.conf`: Window rules for floating and centering CopyQ on Hyprland.

## Installation

To ensure CopyQ is installed in a new system:
- The `dotsinstall.sh` script includes `sudo pacman -S copyq`.
- Running `stow` on the `i3`, `rofi`, and `hypr` directories will apply the necessary configurations.

## Maintenance

If you need to adjust the window size or position:
- **i3**: Edit the `for_window [class="copyq"]` rule in `i3/config`.
- **Hyprland**: Edit the `windowrule` entries for `com.github.hluk.copyq` in `WindowRules.conf`.
