#!/bin/bash

# stow-it.sh - Helper script to manage dotfiles with GNU Stow

# Ensure stow is installed
if ! command -v stow &> /dev/null; then
    echo "Error: GNU Stow is not installed. Please install it first."
    exit 1
fi

DOTFILES_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DOTFILES_DIR" || exit 1

# List of packages to manage
PACKAGES=(
    alacritty
    bash
    btop
    dunst
    fastfetch
    fish
    git
    ghostty
    gtk
    hypr
    i3
    ideavim
    kitty
    Kvantum
    lvim
    mpv
    neofetch
    nitrogen
    nvim
    p10k
    picom
    polybar
    qt5ct
    redshift
    rofi
    swappy
    swaync
    themes
    tridactyl
    user-dirs
    vifm
    vim
    wallpapers
    wallust
    waybar
    X
    xdg-portal
    zsh
)

usage() {
    echo "Usage: $0 [all|package_name] [-D|--delete] [-a|--adopt]"
    echo "Example: $0 all           # Stow all packages"
    echo "         $0 nvim          # Stow only nvim"
    echo "         $0 all -D        # Unstow all packages"
    echo "         $0 all --adopt   # Adopt existing files into the stow link"
    exit 1
}

stow_pkg() {
    local action=$1
    local pkg=$2
    echo "Processing package: $pkg ($action)"
    stow $action -t "$HOME" "$pkg"
}

if [[ $# -eq 0 ]]; then
    usage
fi

ACTION="-R" # Default to restow
# Parse options
for arg in "$@"; do
    case $arg in
        -D|--delete)
            ACTION="-D"
            shift
            ;;
        -a|--adopt)
            ACTION="--adopt -R"
            shift
            ;;
    esac
done

TARGET=$1

if [[ "$TARGET" == "all" ]]; then
    for pkg in "${PACKAGES[@]}"; do
        if [[ -d "$pkg" ]]; then
            stow_pkg "$ACTION" "$pkg"
        fi
    done
elif [[ -d "$TARGET" ]]; then
    stow_pkg "$ACTION" "$TARGET"
else
    echo "Error: Package '$TARGET' not found."
    usage
fi

echo "Done!"
