#!/bin/bash

# /* ---- 💫 https://github.com/JaKooLit 💫 ---- */
# Script para configurar Yazi como Seletor de Arquivos Flutuante e integração com Zathura
# Desenvolvido para sistemas baseados em Arch com JaKooLit Hyprland

set -e

# Cores para o output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

printf "${BLUE}Linkando configurações do Yazi Portal...${NC}\n"

# 1. Verificar AUR Helper
if command -v yay >/dev/null 2>&1; then
    AUR_HELPER="yay"
elif command -v paru >/dev/null 2>&1; then
    AUR_HELPER="paru"
else
    printf "${YELLOW}Nenhum AUR helper (yay/paru) encontrado. Instale um para continuar.${NC}\n"
    exit 1
fi

# 2. Instalar Pacotes Necessários
printf "${GREEN}Instalando dependências...${NC}\n"
$AUR_HELPER -S --needed --noconfirm \
    yazi \
    kitty \
    xdg-desktop-portal \
    xdg-desktop-portal-hyprland \
    xdg-desktop-portal-termfilechooser-hunkyburrito-git \
    zathura \
    zathura-pdf-mupdf

# 3. Criar diretórios de configuração
mkdir -p ~/.config/xdg-desktop-portal
mkdir -p ~/.config/xdg-desktop-portal-termfilechooser

# 4. Configurar Portals Prioridade (~/.config/xdg-desktop-portal/hyprland-portals.conf)
printf "${GREEN}Configurando prioridade do portal...${NC}\n"
cat <<EOF > ~/.config/xdg-desktop-portal/hyprland-portals.conf
[preferred]
default=hyprland;gtk
org.freedesktop.impl.portal.FileChooser=termfilechooser
EOF

# 5. Configurar Backend Termfilechooser (~/.config/xdg-desktop-portal-termfilechooser/config)
printf "${GREEN}Configurando backend do termfilechooser...${NC}\n"
cat <<EOF > ~/.config/xdg-desktop-portal-termfilechooser/config
[filechooser]
cmd=/usr/share/xdg-desktop-portal-termfilechooser/yazi-wrapper.sh
default_dir=\$HOME
env=TERMCMD=/usr/bin/kitty --class floating_yazi --title termfilechooser -e
open_mode=suggested
save_mode=suggested
EOF

# 6. Adicionar Regra de Janela no Hyprland
WIN_RULES="$HOME/.config/hypr/UserConfigs/WindowRules.conf"
if ! grep -q "floating_yazi" "$WIN_RULES"; then
    printf "${GREEN}Adicionando regra de janela flutuante...${NC}\n"
    echo -e "\n# Regra para o Yazi do Portal (Flutuante)\nwindowrule = match:class ^(floating_yazi)$, float on, center on, size 1000 600" >> "$WIN_RULES"
fi

# 7. Adicionar Variável de Ambiente
ENVS="$HOME/.config/hypr/UserConfigs/ENVariables.conf"
if ! grep -q "GTK_USE_PORTAL" "$ENVS"; then
    printf "${GREEN}Adicionando GTK_USE_PORTAL=1...${NC}\n"
    echo -e "\n# Forçar uso do portal XDG em apps GTK\nenv = GTK_USE_PORTAL,1" >> "$ENVS"
fi

# 8. Adicionar Comando de Inicialização do DBus
STARTUP="$HOME/.config/hypr/UserConfigs/Startup_Apps.conf"
if ! grep -q "dbus-update-activation-environment" "$STARTUP"; then
    printf "${GREEN}Adicionando ativação de ambiente DBus no startup...${NC}\n"
    echo -e "\n# Garantir que o Portal tenha acesso às variáveis da sessão\nexec-once = dbus-update-activation-environment --systemd WAYLAND_DISPLAY XDG_CURRENT_DESKTOP GTK_USE_PORTAL" >> "$STARTUP"
fi

# 9. Configurar Zathura como Default
printf "${GREEN}Definindo Zathura como leitor de PDF padrão...${NC}\n"
xdg-mime default org.pwmt.zathura.desktop application/pdf

# 10. Reiniciar Serviços
printf "${YELLOW}Reiniciando serviços de portal...${NC}\n"
systemctl --user restart xdg-desktop-portal xdg-desktop-portal-hyprland xdg-desktop-portal-termfilechooser || true

printf "${GREEN}Configuração concluída com sucesso!${NC}\n"
printf "${YELLOW}NOTA: Verifique se 'widget.use-xdg-desktop-portal.file-picker' está como 1 no about:config do Firefox.${NC}\n"
printf "${BLUE}Você pode precisar reiniciar o computador para que todas as mudanças surtam efeito definitivo.${NC}\n"
