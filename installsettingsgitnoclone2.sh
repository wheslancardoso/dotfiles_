#!/bin/bash

# system
# Network File Tools/System Events
echo "Installing network File Tools/System Events"
sudo apt install -y dialog mtools dosfstools avahi-daemon acpi acpid gvfs-backends gvfs-fuse

# install nala (alternative to apt)
echo "Installing nala"
sudo apt install -y nala

# audio
echo "Installing audio packages"
sudo nala install -y pulseaudio pavucontrol

# microcode for amd | intel | nvidia
# sudo nala install -y intel-microcode
echo "Installing cpu microcode"
sudo nala install -y amd64-microcode

# install basic packages
echo "Installing basic packages"
sudo nala install -y build-essential curl make libpam0g-dev libxcb-xkb-dev

# pip 3 install
echo "Installing pip3"
sudo apt -y install python3-pip

# importing dotfiles
echo "Importing dotfiles"
sudo nala install -y stow
echo "Stowing dotfiles"
stow alacritty dunst gtk-2.0 gtk-3.0 i3 neofetch nitrogen picom polybar rofi themes vifm redshift user-dirs gtkrc-2.0 p10k X zsh gitconf 

# network manager
echo "Installing network-manager applet"
sudo nala install -y network-manager-gnome

# xorg display server 
echo "Installing xorg"
sudo nala install -y xorg

# i3 base
echo "Instaling i3 essential packages"
sudo nala install -y i3 i3status polybar dmenu picom rofi dunst arandr unzip vim 

# apperancy 
echo "Installing lxappearance"
sudo nala install -y lxappearance

# other tools
echo "Installing useful tools (lxinput, gparted, copyq, flameshot)"
sudo nala install -y lxinput gparted copyq flameshot

# file manager
echo "Installing thunar and vifm"
sudo nala install -y thunar vifm

# terminal
# sudo nala install -y xfce4-terminal
echo "Installing zsh"
sudo nala install -y zsh

# alacritty install
echo "Installing Alacritty"
cd
git clone https://github.com/alacritty/alacritty.git
cd alacritty
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source "$HOME/.cargo/env"
source ~/.bashrc
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
echo "Installing Brave"
sudo curl -fsSLo /usr/share/keyrings/brave-browser-archive-keyring.gpg https://brave-browser-apt-release.s3.brave.com/brave-browser-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/brave-browser-archive-keyring.gpg] https://brave-browser-apt-release.s3.brave.com/ stable main"|sudo tee /etc/apt/sources.list.d/brave-browser-release.list
sudo apt update
sudo apt install brave-browser

# neofetch/htop
echo "Installing neofetch and htop"
sudo nala install -y neofetch htop

# background handler
echo "Installing nitrogen"
sudo nala install -y nitrogen

# create folders in user directories
echo "Updating home user directories"
sudo xdg-user-dirs-update

# Install Ly Console Display Manager
echo "Installing Ly Display Manager"
cd 
cd downloads
git clone --recurse-submodules https://github.com/fairyglade/ly
cd ly/
make
sudo make install installsystemd
sudo systemctl enable ly.service

# XSessions and i3.desktop
echo "Configuring XSessions"
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
