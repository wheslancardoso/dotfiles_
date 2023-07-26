#!/bin/bash

# system
# Network File Tools/System Events
echo -e "\e[1;34m*******************************"
echo "Installing network File Tools/System Events"
echo "*******************************\e[0m"
sudo xbps-install -Sy dialog mtools dosfstools avahi upower acpid gvfs

# audio
echo -e "\e[1;34m*******************************"
echo "Installing audio packages"
echo -e "*******************************\e[0m"
sudo xbps-install -Sy pulseaudio pavucontrol

# microcode for amd | intel | nvidia
echo -e "\e[1;34m*******************************"
echo "Installing cpu microcode"
echo -e "*******************************\e[0m"
sudo xbps-install -Sy amd-ucode

# install basic packages
echo -e "\e[1;34m*******************************"
echo "Installing basic packages"
echo -e "*******************************\e[0m"
sudo xbps-install -Sy base-devel-void curl make libpam-devel libxcb-devel
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
sudo xbps-install -Sy xorg xorg-server xorg-xinit mesa

# i3 base
echo -e "\e[1;34m*******************************"
echo "Installing i3 essential packages"
echo -e "*******************************\e[0m"
sudo xbps-install -Sy i3 i3status polybar dmenu picom rofi dunst arandr unzip vim

# appearance
echo -e "\e[1;34m*******************************"
echo "Installing lxappearance and qt5ct"
echo -e "*******************************\e[0m"
sudo xbps-install -Sy lxappearance qt5ct

# other tools
echo -e "\e[1;34m*******************************"
echo "Installing useful tools (lxinput, gparted, copyq, flameshot)"
echo -e "*******************************\e[0m"
sudo xbps-install -Sy xinput gparted copyq flameshot lsd

# file manager
echo -e "\e[1;34m*******************************"
echo "Installing thunar and vifm"
echo -e "*******************************\e[0m"
sudo xbps-install -Sy thunar vifm

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
sudo xbps-install -Sy flatpak
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo

# browser install
echo -e "\e[1;34m*******************************"
echo "Installing Browser"
echo -e "*******************************\e[0m"
sudo xbps-install -Sy firefox
flatpak install flathub com.brave.Browser

# neofetch/htop
echo -e "\e[1;34m*******************************"
echo "Installing neofetch and htop"
echo -e "*******************************\e[0m"
sudo xbps-install -Sy neofetch htop

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