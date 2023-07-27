#!/bin/bash

# system
# Network File Tools/System Events
echo -e "\e[1;34m*******************************"
echo "Installing network File Tools/System Events"
echo "*******************************\e[0m"
sudo xbps-install -Sy dialog 
sudo xbps-install -Sy mtools 
sudo xbps-install -Sy dosfstools 
sudo xbps-install -Sy avahi 
sudo xbps-install -Sy upower 
sudo xbps-install -Sy acpid 
sudo xbps-install -Sy gvfs

# audio
echo -e "\e[1;34m*******************************"
echo "Installing audio packages"
echo -e "*******************************\e[0m"
sudo xbps-install -Sy pulseaudio 
sudo xbps-install -Sy pavucontrol

# microcode for amd | intel | nvidia
echo -e "\e[1;34m*******************************"
echo "Installing cpu microcode"
echo -e "*******************************\e[0m"
sudo xbps-install -Sy amd-ucode

# install basic packages
echo -e "\e[1;34m*******************************"
echo "Installing important packages"
echo -e "*******************************\e[0m"
sudo xbps-install -Sy curl
sudo xbps-install -Sy wget
sudo xbps-install -Sy make
sudo xbps-install -Sy base-devel
sudo xbps-install -Sy gcc 
sudo xbps-install -Sy libXext-devel 
sudo xbps-install -Sy libXft-devel
sudo xbps-install -Sy libX11-devel
sudo xbps-install -Sy xorg-server-devel
sudo xbps-install -Sy mesa
sudo xbps-install -Sy coreutils

# pip 3 install
echo -e "\e[1;34m*******************************"
echo "Installing pip3"
echo -e "*******************************\e[0m"
sudo xbps-install -Sy python3-pip

# importing dotfiles
echo -e "\e[1;34m*******************************"
echo "Importing important dotfiles"
echo "*******************************\e[0m"
sudo xbps-install -Sy stow
#stow alacritty dunst neofetch picom polybar rofi themes vifm redshift user-dirs X zsh gitconf
stow X gitconf user-dirs

# network manager
echo -e "\e[1;34m*******************************"
echo "Installing network-manager applet"
echo -e "*******************************\e[0m"
sudo xbps-install -Sy network-manager-applet

# xorg display server
echo -e "\e[1;34m*******************************"
echo "Installing xorg"
echo -e "*******************************\e[0m"
sudo xbps-install -Sy xorg 
sudo xbps-install -Sy xorg-server 
sudo xbps-install -Sy xorg-xinit 
sudo xbps-install -Sy mesa

# i3 base
echo -e "\e[1;34m*******************************"
echo "Installing i3 essential packages"
echo -e "*******************************\e[0m"
sudo xbps-install -Sy i3 
sudo xbps-install -Sy i3status 
sudo xbps-install -Sy polybar 
sudo xbps-install -Sy dmenu 
sudo xbps-install -Sy picom 
sudo xbps-install -Sy rofi 
sudo xbps-install -Sy dunst 
sudo xbps-install -Sy arandr 
sudo xbps-install -Sy unzip 
sudo xbps-install -Sy vim

# appearance
echo -e "\e[1;34m*******************************"
echo "Installing lxappearance and qt5ct"
echo -e "*******************************\e[0m"
sudo xbps-install -Sy lxappearance 
sudo xbps-install -Sy qt5ct

# other tools
echo -e "\e[1;34m*******************************"
echo "Installing useful tools (lxinput, gparted, copyq, flameshot)"
echo -e "*******************************\e[0m"
sudo xbps-install -Sy lxinput 
sudo xbps-install -Sy gparted
sudo xbps-install -Sy flameshot
sudo xbps-install -Sy exa
sudo xbps-install -Sy bat

# file manager
echo -e "\e[1;34m*******************************"
echo "Installing nemo and vifm"
echo -e "*******************************\e[0m"
sudo xbps-install -Sy nemo 
sudo xbps-install -Sy vifm

# alacritty install
echo -e "\e[1;34m*******************************"
echo "Installing Alacritty"
echo -e "*******************************\e[0m"
cd
git clone https://github.com/alacritty/alacritty.git
cd alacritty
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source "$HOME/.cargo/env"
source ~/.bashrc
rustup override set stable
rustup update stable
xbps-install -Sy cmake freetype-devel expat-devel fontconfig-devel libxcb-devel pkg-config python3
cargo build --release
sudo tic -xe alacritty,alacritty-direct extra/alacritty.info
sudo cp -r target/release/alacritty /usr/local/bin # or anywhere else in $PATH
sudo cp -r extra/logo/alacritty-term.svg /usr/share/pixmaps/Alacritty.svg
sudo desktop-file-install extra/linux/Alacritty.desktop
sudo update-desktop-database
cd
rm -rf alacritty

echo -e "\e[1;34m*******************************"
echo "Installing Flatpak"
echo -e "*******************************\e[0m"
sudo ln -s /etc/sv/dbus /var/service/
sudo sv restart dbus
sudo groupadd -r dbus
sudo usermod -aG dbus $USER
sudo xbps-install -Sy flatpak
sudo flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo

# browser install
echo -e "\e[1;34m*******************************"
echo "Installing Browser"
echo -e "*******************************\e[0m"
sudo flatpak install flathub com.brave.Browser

# neofetch/htop
echo -e "\e[1;34m*******************************"
echo "Installing neofetch and htop"
echo -e "*******************************\e[0m"
sudo xbps-install -Sy neofetch 
sudo xbps-install -Sy htop

# background handler
echo -e "\e[1;34m*******************************"
echo "Installing nitrogen"
echo -e "*******************************\e[0m"
sudo xbps-install -Sy nitrogen

# create folders in user directories
echo -e "\e[1;34m*******************************"
echo "Updating home user directories"
echo -e "*******************************\e[0m"
cd
sudo xbps-install -Sy xdg-user-dirs
mkdir ~/desktop
mkdir ~/downloads
mkdir ~/docs
mkdir ~/templates
mkdir ~/public
mkdir ~/music
mkdir ~/pics
mkdir ~/videos
sudo xdg-user-dirs-update

# Install Ly Console Display Manager
echo -e "\e[1;34m*******************************"
echo "Installing Ly Display Manager"
echo -e "*******************************\e[0m"
cd 
cd downloads
git clone --recurse-submodules https://github.com/fairyglade/ly
cd ly/
make
sudo make installrunit
sudo ln -s /etc/sv/ly /var/service/

# ... (remaining script content)

# Install ACPI Wake Service Script
echo -e "\e[1;34m*******************************"
echo "Installing ACPI Wake Service Script"
echo -e "*******************************\e[0m"

sudo mkdir -p /etc/sv/acpi-wake

sudo echo '#!/bin/sh
for i in $(cat /proc/acpi/wakeup | grep enabled | awk '\''{print $1}'\''); do
  [ $i != PBTN ] && echo $i > /proc/acpi/wakeup
done' | sudo tee /etc/sv/acpi-wake/run
sudo chmod +x /etc/sv/acpi-wake/run
sudo ln -s /etc/sv/acpi-wake /var/service/

# source ~/dotfiles_/nerdfontinstall.sh

# ... (remaining script content)
# não instalou
# curl
# make 
# wget
# base-devel e não base-devel-void
# libXext-devel
# libXft-devel
# base-devel
# xorg-server-devel
# mesa
# xinput (lxinput também pode ser instalado)

# gparted
# flameshot
# exa (pode ser instalado)
# bat (pode ser instalado)
# nemo (pode ser instalado) alternativa ao thunar
# vifm

# para instalar o flatpak:
# sudo ln -s /etc/sv/dbus /var/service/
# sudo sv restart dbus
# sudo groupadd -r dbus
# sudo usermod -aG dbus cj
# sudo xbps-install -Sy flatpak
# sudo flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
# e então instale o brave:
# flatpak install flathub com.brave.Browser