#!/bin/sh

# Configurações de inicialização do X11
xrdb -merge ~/.Xresources

# Configurações de teclado
setxkbmap -layout br -variant abnt2 
setxkbmap -option caps:swapescape

# Configurações de exibição
xrandr --auto

# Iniciar o i3 Window Manager
exec i3

# Iniciar o CopyQ (gerenciador de área de transferência)
copyq &

# Iniciar o Flameshot (ferramenta de captura de tela)
flameshot &

# Configurações do compositor de janelas
picom &

# Iniciar o redshift
exec redshift -m randr -O 2600:1900
