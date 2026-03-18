#!/bin/bash

# ============================================================================
# 🚀 Instalação Completa — Arch Linux + Hyprland + Dotfiles
# ============================================================================
# Script de entrada único para configurar do ZERO:
#   1. Instala JaKooLit Arch-Hyprland (interativo)
#   2. Clona os dotfiles e roda o setup completo
#
# USO (numa instalação limpa do Arch Linux, como usuário normal):
#
#   bash <(curl -fsSL https://raw.githubusercontent.com/wheslancardoso/dotfiles_/feature/hyprland-bootstrap/install-full.sh)
#
# ATENÇÃO: O instalador do JaKooLit é INTERATIVO — você vai responder
# perguntas na tela sobre qual hardware/features quer. Após concluir,
# o PC reinicia e o script de dotfiles roda automaticamente no próximo login.
# ============================================================================

set -e

# --- Cores ---
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BOLD='\033[1m'
NC='\033[0m'

info()  { printf "${BLUE}[INFO]${NC} %s\n" "$1"; }
ok()    { printf "${GREEN}[  OK]${NC} %s\n" "$1"; }
warn()  { printf "${YELLOW}[WARN]${NC} %s\n" "$1"; }
erro()  { printf "${RED}[ERRO]${NC} %s\n" "$1"; exit 1; }
step()  { printf "\n${BOLD}${GREEN}══════════════════════════════════════${NC}\n"; printf "${BOLD}${GREEN}  %s${NC}\n" "$1"; printf "${BOLD}${GREEN}══════════════════════════════════════${NC}\n"; }

DOTFILES_REPO="https://github.com/wheslancardoso/dotfiles_.git"
DOTFILES_BRANCH="feature/hyprland-bootstrap"
DOTFILES_DIR="$HOME/dotfiles_"
JAKOOLIT_DIR="$HOME/Arch-Hyprland"

# ============================================================================
# VERIFICAÇÕES INICIAIS
# ============================================================================
step "Verificando ambiente"

if ! command -v pacman &>/dev/null; then
    erro "Este script é exclusivo para Arch Linux."
fi

if [ "$EUID" -eq 0 ]; then
    erro "Não rode este script como root. Use um usuário normal com sudo."
fi

if ! command -v git &>/dev/null; then
    info "Instalando git..."
    sudo pacman -S --noconfirm git
fi

ok "Ambiente verificado."

# ============================================================================
# PASSO 1 — JAKOOLIT HYPRLAND
# ============================================================================
step "1/2 — Instalando JaKooLit Arch-Hyprland"

printf "${YELLOW}O instalador do JaKooLit é INTERATIVO.${NC}\n"
printf "Você vai responder perguntas sobre GPU, aurhelper, apps, etc.\n"
printf "Responda normalmente. Após finalizar, volte aqui.\n\n"
read -rp "Pressione ENTER para iniciar o instalador do JaKooLit..."

if [ -d "$JAKOOLIT_DIR" ]; then
    warn "Diretório $JAKOOLIT_DIR já existe. Atualizando..."
    git -C "$JAKOOLIT_DIR" pull
else
    info "Clonando Arch-Hyprland..."
    git clone --depth=1 https://github.com/JaKooLit/Arch-Hyprland.git "$JAKOOLIT_DIR"
fi

cd "$JAKOOLIT_DIR"
chmod +x install.sh
./install.sh

ok "JaKooLit instalado."

# ============================================================================
# PASSO 2 — AGENDAR DOTFILES NO PRÓXIMO LOGIN
# ============================================================================
step "2/2 — Agendando setup dos dotfiles para após o reboot"

# Clona os dotfiles já (antes do reboot, enquanto tem internet)
if [ ! -d "$DOTFILES_DIR" ]; then
    info "Clonando dotfiles..."
    git clone "$DOTFILES_REPO" "$DOTFILES_DIR"
    git -C "$DOTFILES_DIR" checkout "$DOTFILES_BRANCH"
    ok "Dotfiles clonados em $DOTFILES_DIR"
else
    ok "Dotfiles já existem em $DOTFILES_DIR"
fi

# Cria um serviço one-shot que roda o setup-hyprland.sh na próxima sessão
AUTOSTART_FILE="$HOME/.config/autostart/dotfiles-setup.desktop"
mkdir -p "$HOME/.config/autostart"

cat > "$AUTOSTART_FILE" << EOF
[Desktop Entry]
Type=Application
Name=Dotfiles Setup
Exec=bash -c 'cd $DOTFILES_DIR && bash setup-hyprland.sh 2>&1 | tee /tmp/dotfiles-setup.log; rm -f $AUTOSTART_FILE'
Terminal=true
Hidden=false
X-GNOME-Autostart-enabled=true
EOF

ok "Setup agendado para rodar automaticamente na primeira sessão do Hyprland."

# ============================================================================
# CONCLUÍDO
# ============================================================================
printf "\n${BOLD}${GREEN}══════════════════════════════════════${NC}\n"
printf "${BOLD}${GREEN}  ✅ Tudo pronto para o reboot!${NC}\n"
printf "${BOLD}${GREEN}══════════════════════════════════════${NC}\n\n"
printf "${YELLOW}O que vai acontecer:${NC}\n"
printf "  1. Reinicie o PC agora\n"
printf "  2. Faça login no Hyprland\n"
printf "  3. Um terminal vai abrir automaticamente com o setup dos dotfiles\n"
printf "  4. Após concluir, reinicie a sessão mais uma vez\n\n"
printf "${YELLOW}Se preferir rodar manualmente após o reboot:${NC}\n"
printf "  ${BOLD}cd ~/dotfiles_ && bash setup-hyprland.sh${NC}\n\n"
printf "${YELLOW}Log disponível em:${NC} /tmp/dotfiles-setup.log\n\n"

read -rp "Deseja reiniciar agora? [s/N] " RESPOSTA
if [[ "$RESPOSTA" =~ ^[Ss]$ ]]; then
    info "Reiniciando..."
    sudo reboot
else
    warn "Reinicie manualmente quando estiver pronto."
fi
