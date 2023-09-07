#!/bin/bash

echo -e "\e[1;34m*******************************"
echo "Setting up Pacman"
echo "*******************************\e[0m"
sudo vim /etc/pacman.conf
#descomment color, set parallel downloads to 10 and add ILoveCandy bellow
sudo pacman -Sy

echo -e "\e[1;34m*******************************"
echo "Ordering Mirrors"
echo "*******************************\e[0m"
sudo pacman -Syu --noconfirm reflector
sudo reflector --verbose --latest 10 --sort rate --save /etc/pacman.d/mirrorlist
sudo pacman -Syyu

# System
echo -e "\e[1;34m*******************************"
echo "Installing essential system packages"
echo "*******************************\e[0m"
sudo pacman -S --noconfirm dialog 
sudo pacman -S --noconfirm mtools 
sudo pacman -S --noconfirm dosfstools 
sudo pacman -S --noconfirm avahi 
sudo pacman -S --noconfirm acpi 
sudo pacman -S --noconfirm acpid 
sudo pacman -S --noconfirm gvfs 
sudo pacman -S --noconfirm gvfs-smb 
sudo pacman -S --noconfirm tar 

# Basic packages
echo -e "\e[1;34m*******************************"
echo "Installing basic packages"
echo "*******************************\e[0m"
sudo pacman -S --noconfirm base-devel 
sudo pacman -S --noconfirm curl 
sudo pacman -S --noconfirm make 
sudo pacman -S --noconfirm wget

# caso não queira instalar comente  daqui...
echo -e "\e[1;34m*******************************"
echo "Installing X-system packages"
echo "*******************************\e[0m"
sudo pacman -S --noconfirm libwnck3
sudo pacman -S --noconfirm mesa-utils
sudo pacman -S --noconfirm xf86-input-Iibinput
sudo pacman -S --noconfirm xorg-xdpyinfo
sudo pacman -S --noconfirm xorg-server
sudo pacman -S --noconfirm xorg-xinit
sudo pacman -S --noconfirm xorg-xinput
sudo pacman -S --noconfirm xorg-xkill
sudo pacman -S --noconfirm xorg-xrandr

echo -e "\e[1;34m*******************************"
echo "Installing GPU-Drivers"
echo "*******************************\e[0m"
sudo pacman -S --noconfirm xf86-video-amdgpu
sudo pacman -S --noconfirm xf86-video-ati

echo -e "\e[1;34m*******************************"
echo "Installing network packages"
echo "*******************************\e[0m"
sudo pacman -S --noconfirm b43-fwcutter
sudo pacman -S --noconfirm broadcom-wl-dkms
sudo pacman -S --noconfirm dhclient
sudo pacman -S --noconfirm bind-tools
sudo pacman -S --noconfirm ethtool
sudo pacman -S --noconfirm iwd
sudo pacman -S --noconfirm modemmanager
sudo pacman -S --noconfirm networkmanager
sudo pacman -S --noconfirm networkmanager-openconnect
sudo pacman -S --noconfirm networkmanager-openvpn
sudo pacman -S --noconfirm nss-mdns
sudo pacman -S --noconfirm openssh
#sudo pacman -S --noconfirm usb 
#sudo pacman -S --noconfirm modeswitch
sudo pacman -S --noconfirm wpa_supplicant
sudo pacman -S --noconfirm xl2tpd

echo -e "\e[1;34m*******************************"
echo "Installing package tools"
echo "*******************************\e[0m"
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
yay -S downgrade
sudo pacman -S pacman-contrib
sudo pacman -S pkgfile
sudo pacman -S --noconfirm accountsservice
sudo pacman -S --noconfirm bash-completion
#sudo pacman -S --noconfirm bluez #opcional
#sudo pacman -S --noconfirm bluez-utils #opcional
sudo pacman -S --noconfirm ffmpegthumbnailer
sudo pacman -S --noconfirm gst-libav
sudo pacman -S --noconfirm gst-plugin-pipewire
#sudo pacman -S --noconfirm gst-plugins-bad #opcional
#sudo pacman -S --noconfirm gst-plugins-ugly #opcional
#sudo pacman -S --noconfirm libdvdcss #opcional
sudo pacman -S --noconfirm libgsf
sudo pacman -S --noconfirm libopenraw
sudo pacman -S --noconfirm mlocate
sudo pacman -S --noconfirm poppler-glib
sudo pacman -S --noconfirm xdg-user-dirs
sudo pacman -S --noconfirm xdg-utils

echo -e "\e[1;34m*******************************"
echo "Installing filesystem and apps packages"
echo "*******************************\e[0m"
sudo pacman -S --noconfirm efitools
sudo pacman -S --noconfirm haveged
sudo pacman -S --noconfirm nfs-utils
sudo pacman -S --noconfirm nilfs-utils
sudo pacman -S --noconfirm ntp
sudo pacman -S --noconfirm smartmontools
sudo pacman -S --noconfirm unrar
sudo pacman -S --noconfirm unzip

echo -e "\e[1;34m*******************************"
echo "Installing fonts"
echo "*******************************\e[0m"
yay -S adobe-source-han-sans-cn-fonts
yay -S adobe-source-han-sans-jp-fonts
yay -S adobe-source-han-sans-kr-fonts
sudo pacman -S --noconfirm cantarell-fonts
sudo pacman -S --noconfirm freetype2
sudo pacman -S --noconfirm noto-fonts
sudo pacman -S --noconfirm ttf-bitstream-vera
sudo pacman -S --noconfirm ttf-dejavu
sudo pacman -S --noconfirm ttf-liberation
sudo pacman -S --noconfirm ttf-opensans

echo -e "\e[1;34m*******************************"
echo "Installing audio packages"
echo "*******************************\e[0m"
sudo pacman -S --noconfirm alsa-firmware
sudo pacman -S --noconfirm alsa-plugins
sudo pacman -S --noconfirm alsa-utils
sudo pacman -S --noconfirm pavucontrol
sudo pacman -S --noconfirm pipewire-pulse
sudo pacman -S --noconfirm wireplumber
sudo pacman -S --noconfirm pipewire-alsa
sudo pacman -S --noconfirm pipewire-jack
sudo pacman -S --noconfirm rtkit

echo -e "\e[1;34m*******************************"
echo "Installing hardware packages"
echo "*******************************\e[0m"
sudo pacman -S --noconfirm dmidecode
sudo pacman -S --noconfirm hdparm
sudo pacman -S --noconfirm iscsi-initiator-utils
sudo pacman -S --noconfirm mtools
sudo pacman -S --noconfirm sg3_utils
sudo pacman -S --noconfirm sof-firmware

echo -e "\e[1;34m*******************************"
echo "Installing power packages"
echo "*******************************\e[0m"
sudo pacman -S power-profiles-daemon
sudo pacman -S upower

# ate aqui

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
sudo pacman -S --noconfirm pulseaudio 
sudo pacman -S --noconfirm pavucontrol

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
sudo pacman -S --noconfirm stow
cd
cd dotfiles_/
sudo rm -rf ~/.config/user-dirs.dirs
sudo rm -rf ~/.xinitrc
sudo rm -rf ~/.xprofile
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
sudo pacman -S --noconfirm xorg-server xorg-xinit mesa

# i3 base
echo -e "\e[1;34m*******************************"
echo "Installing i3 essential packages"
echo "*******************************\e[0m"
sudo pacman -S --noconfirm i3 
sudo pacman -S --noconfirm i3status 
sudo pacman -S --noconfirm polybar 
sudo pacman -S --noconfirm dmenu 
sudo pacman -S --noconfirm picom 
sudo pacman -S --noconfirm rofi 
sudo pacman -S --noconfirm dunst 
sudo pacman -S --noconfirm arandr 
sudo pacman -S --noconfirm unzip 
sudo pacman -S --noconfirm vim

# Appearance
echo -e "\e[1;34m*******************************"
echo "Installing lxappearance and qt5ct"
echo "*******************************\e[0m"
sudo pacman -S --noconfirm lxappearance 
sudo pacman -S --noconfirm qt5ct

# Other tools
echo -e "\e[1;34m*******************************"
echo "Installing useful tools (lxinput, gparted, copyq, flameshot)"
echo "*******************************\e[0m"
sudo pacman -S --noconfirm lxinput 
sudo pacman -S --noconfirm gparted 
sudo pacman -S --noconfirm copyq 
sudo pacman -S --noconfirm flameshot 
sudo pacman -S --noconfirm exa 
sudo pacman -S --noconfirm bat

# File manager
echo -e "\e[1;34m*******************************"
echo "Installing thunar and vifm"
echo "*******************************\e[0m"
sudo pacman -S --noconfirm thunar 
sudo pacman -S --noconfirm vifm

# Alacritty install
echo -e "\e[1;34m*******************************"
echo "Installing Alacritty"
echo "*******************************\e[0m"
sudo pacman -S --noconfirm alacritty

# neofetch/htop
echo -e "\e[1;34m*******************************"
echo "Installing neofetch and htop"
echo -e "*******************************\e[0m"
sudo pacman -S --noconfirm neofetch 
sudo pacman -S --noconfirm btop

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
#echo -e "\e[1;34m*******************************"
#echo "Configuring XSessions"
#echo "*******************************\e[0m"
#if [[ ! -d /usr/share/xsessions ]]; then
#    sudo mkdir /usr/share/xsessions
#fi
#
#cat > ./temp << "EOF"
#[Desktop Entry]
#Encoding=UTF-8
#Name=i3
#Comment=Dynamic window manager
#Exec=i3
#Icon=i3
#Type=XSession
#EOF
#sudo cp ./temp /usr/share/xsessions/i3.desktop;rm ./temp
#
#echo -e "\e[1;34m*******************************"
#echo "Configuring XSessions"
#echo "*******************************\e[0m"
#if [[ ! -d /usr/share/xsessions ]]; then
#    sudo mkdir /usr/share/xsessions
#fi

# Cria a entrada de desktop para o i3
cat > ./temp_i3 << "EOF"
[Desktop Entry]
Encoding=UTF-8
Name=i3
Comment=Dynamic window manager
Exec=i3
Icon=i3
Type=XSession
EOF
sudo cp ./temp_i3 /usr/share/xsessions/i3.desktop
rm ./temp_i3

# Cria a entrada de desktop para o XFCE
cat > ./temp_xfce << "EOF"
[Desktop Entry]
Encoding=UTF-8
Name=XFCE
Comment=XFCE Desktop Environment
Exec=startxfce4
Icon=xfce4
Type=XSession
EOF
sudo cp ./temp_xfce /usr/share/xsessions/xfce.desktop
rm ./temp_xfce


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

cd 
cd dotfiles_/
./nerdfontinstall.sh
