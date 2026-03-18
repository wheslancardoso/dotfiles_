#!/bin/bash

# stow-hyprland.sh - Aplica dotfiles apenas para Hyprland (sem i3/X11)

if ! command -v stow &>/dev/null; then
    echo "Erro: GNU Stow não está instalado."
    exit 1
fi

DOTFILES_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DOTFILES_DIR" || exit 1

PACKAGES=(
    btop
    dunst
    fastfetch
    fish
    ghostty
    git
    gtk
    hypr
    ideavim
    kitty
    Kvantum
    mpv
    nvim
    qt5ct
    rofi
    swappy
    swaync
    themes
    tridactyl
    user-dirs
    vim
    wallpapers
    wallust
    waybar
    xdg-portal
    yazi
    zsh
)

usage() {
    echo "Uso: $0 [all|pacote] [-D|--delete] [-a|--adopt]"
    echo "Exemplo: $0 all           # Stow todos os pacotes Hyprland"
    echo "         $0 nvim          # Stow apenas nvim"
    echo "         $0 all -D        # Unstow todos"
    echo "         $0 all --adopt   # Adopt existentes"
    exit 1
}

stow_pkg() {
    local action=$1
    local pkg=$2
    echo "Processando: $pkg ($action)"
    stow $action -t "$HOME" "$pkg"
}

if [[ $# -eq 0 ]]; then
    usage
fi

ACTION="-R"
for arg in "$@"; do
    case $arg in
        -D|--delete) ACTION="-D"; shift ;;
        -a|--adopt)  ACTION="--adopt -R"; shift ;;
        -S|--stow)   ACTION="-S"; shift ;;
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
    echo "Erro: Pacote '$TARGET' não encontrado."
    usage
fi

echo "Concluído!"
