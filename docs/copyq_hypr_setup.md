# Walkthrough - CopyQ Centered Setup

I have configured **CopyQ** to be your primary clipboard manager on Hyprland, opening in a centered, floating window.

## Changes Made

### 1. Hyprland Configuration
- **Startup**: Disabled `cliphist` and added `copyq` to [Startup_Apps.conf](file:///home/lan/.config/hypr/configs/Startup_Apps.conf).
- **Keybinds**: Changed `Alt+V` to execute `copyq show` in [Keybinds.conf](file:///home/lan/.config/hypr/configs/Keybinds.conf).
- **Window Rules**: Added a rule to [WindowRules.conf](file:///home/lan/.config/hypr/configs/WindowRules.conf) to make CopyQ floating and centered.

### 2. Dotfiles Synchronization
- All changes have been mirrored to your [dotfiles_](file:///home/lan/dotfiles_/hypr/.config/hypr/configs/) directory for persistence.

## Verification

### 1. Open CopyQ
Press **Alt + V**. The CopyQ window should appear:
- **Floating** (not tiled).
- **Centered** on your screen.

### 2. Clipboard Tracking
Copy any text and verify it appears in the CopyQ list.

### 3. Startup
The next time you log in, CopyQ will start automatically instead of `cliphist`.

> [!TIP]
> If you want to use Vim-style navigation within CopyQ itself, you can enable it in `CopyQ Settings -> Shortcuts`.
