#!/bin/bash

# install git
sudo apt install git

# git clone dotfiles
git clone https://github.com/wheslancardoso/dotfiles_.git

# pip 3 install
sudo apt -y install python3-pip

# install nala (alternative to apt)
sudo apt install -y nala

# install basic packages
sudo nala install -y build-essential curl

# system
# Network File Tools/System Events
sudo apt install -y dialog mtools dosfstools avahi-daemon acpi acpid gvfs-backends gvfs-fuse

# audio
sudo nala install -y pulseaudio pavucontrol

# microcode for amd | intel | nvidia
# sudo nala install -y intel-microcode
sudo nala install -y amd64-microcode

# network manager
sudo nala install -y network-manager-gnome

# xorg display server 
sudo nala install -y xorg

# i3 base
sudo nala install -y i3 i3status polybar dmenu picom rofi dunst arandr rar unrar unzip vim 

# apperancy 
sudo nala install -y lxappearance

# other tools
sudo nala install -y lxinput gparted copyq flameshot

# file manager
sudo nala install -y thunar vifm

# terminal
sudo nala install -y xfce4-terminal

# alacritty install
cd
git clone https://github.com/alacritty/alacritty.git
cd alacritty
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
rustup override set stable
rustup update stable
sudo nala install -y cmake pkg-config libfreetype6-dev libfontconfig1-dev libxcb-xfixes0-dev libxkbcommon-dev python3
cargo build --release
sudo tic -xe alacritty,alacritty-direct extra/alacritty.info
sudo cp -r target/release/alacritty /usr/local/bin # or anywhere else in $PATH
sudo cp -r extra/logo/alacritty-term.svg /usr/share/pixmaps/Alacritty.svg
sudo desktop-file-install extra/linux/Alacritty.desktop
sudo update-desktop-database

# browser install
sudo curl -fsSLo /usr/share/keyrings/brave-browser-archive-keyring.gpg https://brave-browser-apt-release.s3.brave.com/brave-browser-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/brave-browser-archive-keyring.gpg] https://brave-browser-apt-release.s3.brave.com/ stable main"|sudo tee /etc/apt/sources.list.d/brave-browser-release.list
sudo nala update -y
sudo nala install -y brave-browser

# neofetch/htop
sudo nala install -y neofetch htop

# background handler
sudo nala install -y nitrogen

# create folders in user directories
sudo xdg-user-dirs-update

# Install Ly Console Display Manager
cd 
cd Downloads
git clone --recurse-submodules https://github.com/fairyglade/ly
cd ly/
make
sudo make install installsystemd
sudo systemctl enable ly.service

# XSessions and i3.desktop
if [[ ! -d /usr/share/xsessions ]]; then
    sudo mkdir /usr/share/xsessions
fi

cat > ./temp << "EOF"
[Desktop Entry]
Encoding=UTF-8
Name=i3
Comment=Dynamic window manager
Exec=i3
Icon=i3
Type=XSession
EOF
sudo cp ./temp /usr/share/xsessions/i3.desktop;rm ./temp
