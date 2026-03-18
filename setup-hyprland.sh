#!/bin/bash

# ============================================================================
# 🚀 Setup Completo - Arch Linux + Hyprland (JaKooLit)
# ============================================================================
# Script one-prompt para configurar completamente um desktop Hyprland
# a partir de uma instalação limpa do Arch Linux com Hyprland já instalado.
#
# USO:
#   curl -fsSL https://raw.githubusercontent.com/wheslancardoso/dotfiles_/feature/hyprland-bootstrap/setup-hyprland.sh | bash
#   -- OU --
#   git clone https://github.com/wheslancardoso/dotfiles_.git ~/dotfiles_ && cd ~/dotfiles_ && bash setup-hyprland.sh
# ============================================================================

set -e

# --- Cores ---
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BOLD='\033[1m'
NC='\033[0m'

# --- Helpers ---
info()  { printf "${BLUE}[INFO]${NC} %s\n" "$1"; }
ok()    { printf "${GREEN}[  OK]${NC} %s\n" "$1"; }
warn()  { printf "${YELLOW}[WARN]${NC} %s\n" "$1"; }
erro()  { printf "${RED}[ERRO]${NC} %s\n" "$1"; exit 1; }
step()  { printf "\n${BOLD}${GREEN}══════════════════════════════════════${NC}\n"; printf "${BOLD}${GREEN}  %s${NC}\n" "$1"; printf "${BOLD}${GREEN}══════════════════════════════════════${NC}\n"; }

DOTFILES_REPO="https://github.com/wheslancardoso/dotfiles_.git"
DOTFILES_DIR="$HOME/dotfiles_"
USER_NAME="$(whoami)"

# Pacotes stow exclusivos para Hyprland (sem nada de i3/X11)
HYPRLAND_PACKAGES=(
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

# ============================================================================
# 1. PRÉ-REQUISITOS
# ============================================================================
step "1/8 — Verificando pré-requisitos"

# Verificar se estamos no Arch
if ! command -v pacman &>/dev/null; then
    erro "Este script é exclusivo para Arch Linux (pacman não encontrado)."
fi

# Verificar se git está instalado
if ! command -v git &>/dev/null; then
    info "Instalando git..."
    sudo pacman -S --noconfirm git
fi

# Verificar se stow está instalado
if ! command -v stow &>/dev/null; then
    info "Instalando stow..."
    sudo pacman -S --noconfirm stow
fi

ok "Pré-requisitos verificados."

# ============================================================================
# 2. SUDO SEM SENHA
# ============================================================================
step "2/8 — Configurando sudo sem senha"

SUDOERS_FILE="/etc/sudoers.d/${USER_NAME}-nopasswd"
if [ -f "$SUDOERS_FILE" ]; then
    ok "Sudo sem senha já configurado para ${USER_NAME}."
else
    info "Configurando sudo sem senha para ${USER_NAME}..."
    echo "${USER_NAME} ALL=(ALL) NOPASSWD: ALL" | sudo tee "$SUDOERS_FILE" > /dev/null
    sudo chmod 440 "$SUDOERS_FILE"
    ok "Sudo sem senha configurado."
fi

# ============================================================================
# 3. INSTALAR YAY (AUR Helper)
# ============================================================================
step "3/8 — Verificando AUR Helper (yay)"

if command -v yay &>/dev/null; then
    ok "yay já está instalado."
elif command -v paru &>/dev/null; then
    ok "paru encontrado, será usado como AUR helper."
    AUR_CMD="paru"
else
    info "Instalando yay..."
    sudo pacman -S --needed --noconfirm base-devel
    TMPDIR_YAY=$(mktemp -d)
    git clone https://aur.archlinux.org/yay.git "$TMPDIR_YAY/yay"
    (cd "$TMPDIR_YAY/yay" && makepkg -si --noconfirm)
    rm -rf "$TMPDIR_YAY"
    ok "yay instalado com sucesso."
fi

AUR_CMD="${AUR_CMD:-yay}"

# ============================================================================
# 4. INSTALAR PACOTES
# ============================================================================
step "4/8 — Instalando pacotes (pacman + AUR)"

# --- Pacman ---
PACMAN_PKGS=(
    # Ferramentas essenciais
    stow git zsh curl wget base-devel

    # Terminal & Shell
    kitty lsd fzf zoxide

    # Editores & Ferramentas Dev
    neovim lazygit jq

    # Gerenciador de Arquivos
    yazi ffmpeg p7zip

    # Busca & Filtros
    fd ripgrep poppler imagemagick

    # Clipboard & Screenshot
    copyq swappy

    # PDF
    zathura zathura-pdf-mupdf

    # Monitoramento
    btop fastfetch

    # Hyprland Ecosystem
    dunst rofi waybar swaync
    xdg-desktop-portal xdg-desktop-portal-hyprland
    xdg-user-dirs

    # Media
    mpv

    # Fontes
    ttf-nerd-fonts-symbols ttf-nerd-fonts-symbols-common

    # Keyring
    gnome-keyring

    # Tema/Aparência
    kvantum qt5ct
)

info "Instalando pacotes via pacman..."
sudo pacman -S --needed --noconfirm "${PACMAN_PKGS[@]}"
ok "Pacotes pacman instalados."

# --- AUR ---
AUR_PKGS=(
    xdg-desktop-portal-termfilechooser-hunkyburrito-git
)

info "Instalando pacotes via AUR ($AUR_CMD)..."
$AUR_CMD -S --needed --noconfirm "${AUR_PKGS[@]}"
ok "Pacotes AUR instalados."

# ============================================================================
# 5. OH-MY-ZSH + PLUGINS
# ============================================================================
step "5/8 — Instalando Oh-My-Zsh e plugins"

if [ -d "$HOME/.oh-my-zsh" ]; then
    ok "Oh-My-Zsh já instalado."
else
    info "Instalando Oh-My-Zsh..."
    RUNZSH=no KEEP_ZSHRC=yes sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
    ok "Oh-My-Zsh instalado."
fi

# Plugins
ZSH_CUSTOM="${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}"

declare -A ZSH_PLUGINS=(
    ["zsh-autosuggestions"]="https://github.com/zsh-users/zsh-autosuggestions"
    ["zsh-syntax-highlighting"]="https://github.com/zsh-users/zsh-syntax-highlighting"
    ["zsh-history-substring-search"]="https://github.com/zsh-users/zsh-history-substring-search"
)

for plugin in "${!ZSH_PLUGINS[@]}"; do
    PLUGIN_DIR="$ZSH_CUSTOM/plugins/$plugin"
    if [ -d "$PLUGIN_DIR" ]; then
        ok "Plugin $plugin já existe."
    else
        info "Clonando plugin $plugin..."
        git clone "${ZSH_PLUGINS[$plugin]}" "$PLUGIN_DIR"
        ok "Plugin $plugin instalado."
    fi
done

# Tema agnosterzak
THEME_DIR="$ZSH_CUSTOM/themes"
if [ ! -f "$THEME_DIR/agnosterzak.zsh-theme" ]; then
    info "Instalando tema agnosterzak..."
    mkdir -p "$THEME_DIR"
    curl -fsSL https://raw.githubusercontent.com/zakaziko99/agnosterzak-ohmyzsh-theme/master/agnosterzak.zsh-theme \
        -o "$THEME_DIR/agnosterzak.zsh-theme"
    ok "Tema agnosterzak instalado."
else
    ok "Tema agnosterzak já existe."
fi

# ============================================================================
# 6. MISE (runtime manager)
# ============================================================================
info "Verificando Mise..."
if command -v mise &>/dev/null; then
    ok "Mise já instalado."
else
    info "Instalando Mise..."
    curl https://mise.run | sh
    ok "Mise instalado."
fi

# ============================================================================
# 7. CLONAR E APLICAR DOTFILES
# ============================================================================
step "6/8 — Clonando e aplicando dotfiles via Stow"

if [ ! -d "$DOTFILES_DIR" ]; then
    info "Clonando repositório dos dotfiles..."
    git clone "$DOTFILES_REPO" "$DOTFILES_DIR"
    ok "Repositório clonado em $DOTFILES_DIR"
else
    ok "Repositório já existe em $DOTFILES_DIR"
fi

cd "$DOTFILES_DIR"

# Remover configs conflitantes antes do stow
info "Removendo configurações conflitantes..."
CONFLITOS=(
    "$HOME/.zshrc"
    "$HOME/.config/btop"
    "$HOME/.config/dunst"
    "$HOME/.config/fastfetch"
    "$HOME/.config/fish"
    "$HOME/.config/ghostty"
    "$HOME/.config/gtk-3.0"
    "$HOME/.config/gtk-4.0"
    "$HOME/.config/hypr/UserConfigs"
    "$HOME/.config/hypr/UserScripts"
    "$HOME/.config/ideavim"
    "$HOME/.config/kitty"
    "$HOME/.config/Kvantum"
    "$HOME/.config/mpv"
    "$HOME/.config/nvim"
    "$HOME/.config/qt5ct"
    "$HOME/.config/rofi"
    "$HOME/.config/swappy"
    "$HOME/.config/swaync"
    "$HOME/.config/tridactyl"
    "$HOME/.config/user-dirs.dirs"
    "$HOME/.config/wallust"
    "$HOME/.config/waybar"
    "$HOME/.config/xdg-desktop-portal"
    "$HOME/.config/yazi"
    "$HOME/.vimrc"
    "$HOME/.tridactylrc"
)

for item in "${CONFLITOS[@]}"; do
    if [ -e "$item" ] && [ ! -L "$item" ]; then
        warn "Removendo conflito: $item"
        rm -rf "$item"
    fi
done

# Aplicar stow
info "Aplicando links simbólicos com GNU Stow..."
for pkg in "${HYPRLAND_PACKAGES[@]}"; do
    if [ -d "$DOTFILES_DIR/$pkg" ]; then
        stow -d "$DOTFILES_DIR" -t "$HOME" -R "$pkg" 2>/dev/null && \
            ok "Stow: $pkg" || \
            warn "Stow falhou para $pkg (possível conflito remanescente)"
    else
        warn "Pacote stow '$pkg' não encontrado no repositório."
    fi
done

ok "Dotfiles aplicados via Stow."

# ============================================================================
# 8. CONFIGURAÇÕES EXTRAS
# ============================================================================
step "7/8 — Configurações extras (Yazi Portal, Zathura, Shell)"

# --- Zsh como shell padrão ---
CURRENT_SHELL=$(getent passwd "$USER_NAME" | cut -d: -f7)
if [ "$CURRENT_SHELL" != "/usr/bin/zsh" ]; then
    info "Definindo Zsh como shell padrão..."
    if ! grep -Fxq "/usr/bin/zsh" /etc/shells; then
        echo "/usr/bin/zsh" | sudo tee -a /etc/shells > /dev/null
    fi
    chsh -s /usr/bin/zsh
    ok "Zsh definido como shell padrão."
else
    ok "Zsh já é o shell padrão."
fi

# --- Zathura como leitor PDF padrão ---
info "Definindo Zathura como leitor PDF padrão..."
xdg-mime default org.pwmt.zathura.desktop application/pdf 2>/dev/null || true
ok "Zathura configurado."

# --- Criar diretórios do usuário ---
info "Criando diretórios padrão do usuário..."
mkdir -p ~/desktop ~/downloads ~/docs ~/templates ~/public ~/music ~/pics ~/videos
xdg-user-dirs-update 2>/dev/null || true
ok "Diretórios criados."

# --- Reiniciar serviços de portal ---
info "Reiniciando serviços de portal XDG..."
systemctl --user restart xdg-desktop-portal xdg-desktop-portal-hyprland xdg-desktop-portal-termfilechooser 2>/dev/null || true
ok "Serviços reiniciados."

# ============================================================================
# CONCLUÍDO
# ============================================================================
step "8/8 — Instalação Concluída! 🎉"

printf "${GREEN}Tudo pronto! Seu desktop Hyprland está configurado.${NC}\n\n"
printf "${YELLOW}Ações pós-instalação recomendadas:${NC}\n"
printf "  1. ${BOLD}Reinicie a sessão${NC} (logout/login) para carregar Hyprland + Keyring\n"
printf "  2. No Firefox/LibreWolf, em about:config, defina:\n"
printf "     ${BOLD}widget.use-xdg-desktop-portal.file-picker = 1${NC}\n"
printf "  3. Verifique se o terminal abre com Zsh e vi-mode ativo\n"
printf "  4. Teste ${BOLD}\$mod + E${NC} para abrir o Yazi\n"
printf "  5. Teste ${BOLD}Alt + V${NC} para abrir o CopyQ\n\n"
printf "${BLUE}Aproveite seu Full Vim Desktop! 🚀${NC}\n"
