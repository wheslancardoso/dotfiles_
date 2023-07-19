#!/bin/sh

# Configurações de inicialização do X11
xrdb -merge ~/.Xresources

# Configurações de teclado
setxkbmap -layout br-abnt2 -option caps:swapescape

# Configurações de exibição
xrandr --auto

# Configurações do compositor de janelas
picom &

# Iniciar o CopyQ (gerenciador de área de transferência)
copyq &

# Iniciar o Flameshot (ferramenta de captura de tela)
flameshot &

# Iniciar o i3 Window Manager
exec i3

