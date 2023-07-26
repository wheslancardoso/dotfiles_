#!/bin/bash

echo -e "\e[1;34m*******************************"
echo "Setting up Pacman"
echo "*******************************\e[0m"
sudo vim /etc/pacman.conf
#descomment color, set parallel downloads to 10 and add ILoveCandy bellow
sudo pacman -Sy

# System
echo -e "\e[1;34m*******************************"
echo "Installing essential system packages"
echo "*******************************\e[0m"
sudo pacman -S --noconfirm dialog mtools dosfstools avahi acpi acpid gvfs gvfs-smb tar 

# Basic packages
echo -e "\e[1;34m*******************************"
echo "Installing basic packages"
echo "*******************************\e[0m"
sudo pacman -S --noconfirm base-devel curl make wget

echo -e "\e[1;34m*******************************"
echo "Ordering Mirrors"
echo "*******************************\e[0m"
sudo pacman -Syu --noconfirm reflector
sudo reflector --verbose --latest 10 --sort rate --save /etc/pacman.d/mirrorlist
sudo pacman -Syyu

echo -e "\e[1;34m*******************************"
echo "Installing yay"
echo "*******************************\e[0m"
cd ~
git clone https://aur.archlinux.org/yay.git
cd yay/
makepkg -si

# Audio
echo -e "\e[1;34m*******************************"
echo "Installing audio packages"
echo "*******************************\e[0m"
sudo pacman -S --noconfirm pulseaudio pavucontrol

# CPU microcode for AMD
echo -e "\e[1;34m*******************************"
echo "Installing CPU microcode"
echo "*******************************\e[0m"
sudo pacman -S --noconfirm amd-ucode
sudo pacman -S xf86-video-amdgpu

# Pip3 install
echo -e "\e[1;34m*******************************"
echo "Installing pip3"
echo "*******************************\e[0m"
sudo pacman -S --noconfirm python-pip

# Importing dotfiles
echo -e "\e[1;34m*******************************"
echo "Importing important dotfiles"
echo "*******************************\e[0m"
cd
cd dotfiles_/
sudo pacman -S --noconfirm stow
stow X gitconf user-dirs

# Network manager
echo -e "\e[1;34m*******************************"
echo "Installing NetworkManager applet"
echo "*******************************\e[0m"
sudo pacman -S --noconfirm network-manager-applet

# Xorg display server
echo -e "\e[1;34m*******************************"
echo "Installing Xorg"
echo "*******************************\e[0m"
sudo pacman -S --noconfirm xorg

# i3 base
echo -e "\e[1;34m*******************************"
echo "Installing i3 essential packages"
echo "*******************************\e[0m"
sudo pacman -S --noconfirm i3 i3status polybar dmenu picom rofi dunst arandr unzip vim

# Appearance
echo -e "\e[1;34m*******************************"
echo "Installing lxappearance and qt5ct"
echo "*******************************\e[0m"
sudo pacman -S --noconfirm lxappearance qt5ct

# Other tools
echo -e "\e[1;34m*******************************"
echo "Installing useful tools (lxinput, gparted, copyq, flameshot)"
echo "*******************************\e[0m"
sudo pacman -S --noconfirm lxinput gparted copyq flameshot exa bat

# File manager
echo -e "\e[1;34m*******************************"
echo "Installing thunar and vifm"
echo "*******************************\e[0m"
sudo pacman -S --noconfirm thunar vifm

# Alacritty install
echo -e "\e[1;34m*******************************"
echo "Installing Alacritty"
echo "*******************************\e[0m"
sudo pacman -S --noconfirm alacritty

echo -e "\e[1;34m*******************************"
echo "Installing brave"
echo "*******************************\e[0m"
yay -S brave-bin

# Background handler
echo -e "\e[1;34m*******************************"
echo "Installing nitrogen"
echo "*******************************\e[0m"
sudo pacman -S --noconfirm nitrogen

echo -e "\e[1;34m*******************************"
echo "Installing Flatpak"
echo "*******************************\e[0m"
sudo pacman -S --noconfirm flatpak

# Create folders in user directories
echo -e "\e[1;34m*******************************"
echo "Updating home user directories"
echo "*******************************\e[0m"
sudo pacman -S --noconfirm xdg-user-dirs
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
echo "*******************************\e[0m"
#git clone --recurse-submodules https://github.com/fairyglade/ly
#cd ly/
#make
#sudo make install install-systemd
sudo pacman -S --noconfirm ly
sudo systemctl enable ly.service

# XSessions and i3.desktop
echo -e "\e[1;34m*******************************"
echo "Configuring XSessions"
echo "*******************************\e[0m"
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

echo -e "\e[1;34m*******************************"
echo "Instaling ACPI Wake Service Script"
echo -e "*******************************\e[0m"

sudo echo '[Unit]
Description=ACPI Wake Service

[Service]
Type=oneshot
ExecStart=/bin/sh -c "for i in $(cat /proc/acpi/wakeup | grep enabled | awk '\''{print $1}'\'' | xargs); do [ $i != PBTN ] && echo $i | tee /proc/acpi/wakeup; done"

[Install]
WantedBy=multi-user.target
' | sudo tee /etc/systemd/system/acpi-wake.service
systemctl start acpi-wake.service
systemctl start enable acpi-wake.service

source ~/dotfiles_/nerdfontinstall.sh
