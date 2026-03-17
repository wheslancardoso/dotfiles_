#!/bin/bash

# /* ---- 💫 https://github.com/JaKooLit 💫 ---- */
# Master Installation Script - Dotfiles & Personal Integrations
# Use este script APÓS instalar o JaKooLit Arch Hyprland.

set -e

GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

printf "${BLUE}Iniciando Instalação Master dos Dotfiles...${NC}\n"

# 1. Configurar Sudo sem Senha (se necessário)
if [ ! -f /etc/sudoers.d/lan-nopasswd ]; then
    printf "${YELLOW}Configurando sudo sem senha para automation...${NC}\n"
    bash scripts/setup-system.sh
fi

# 2. Sincronizar Dotfiles (Usando o Script Stow-it)
printf "${GREEN}Linkando arquivos com GNU Stow...${NC}\n"
# -a (all) -S (stow) -f (force/resolve conflicts)
bash stow-it.sh all -S

# 3. Chamar scripts de integração específicos
printf "${GREEN}Executando scripts de integração...${NC}\n"

# Configuração do Yazi Portal + Zathura
if [ -f scripts/setup_yazi_portal.sh ]; then
    printf "${BLUE}Executando setup_yazi_portal.sh...${NC}\n"
    bash scripts/setup_yazi_portal.sh
fi

# Configuração do CopyQ (se existir script separado, ou via stow)
# printf "${BLUE}Configurando CopyQ...${NC}\n"
# bash scripts/setup_copyq.sh

# 4. Verificação Final
printf "${GREEN}=== INSTALAÇÃO CONCLUÍDA ===${NC}\n"
printf "${YELLOW}Ações recomendadas:${NC}\n"
printf "1. Reinicie a sessão (Logout/Login).\n"
printf "2. Verifique o manual em docs/system_setup.md.\n"
printf "3. No Firefox, coloque 'widget.use-xdg-desktop-portal.file-picker' como 1 em about:config.\n"

printf "${BLUE}Aproveite seu Full Vim Desktop! 🚀${NC}\n"
