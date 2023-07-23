#!/bin/bash

# system
# Network File Tools/System Events
echo -e "\e[1;34m*******************************"
echo "Installing network File Tools/System Events"
echo "*******************************\e[0m"
sudo apt install -y dialog mtools dosfstools avahi-daemon acpi acpid gvfs-backends gvfs-fuse

# install nala (alternative to apt)
echo -e "\e[1;34m*******************************"
echo "Installing nala"
echo -e "*******************************\e[0m"
sudo apt install -y nala
sudo nala fetch

# audio
echo -e "\e[1;34m*******************************"
echo "Installing audio packages"
echo -e "*******************************\e[0m"
sudo nala install -y pulseaudio pavucontrol

# microcode for amd | intel | nvidia
# sudo nala install -y intel-microcode
echo -e "\e[1;34m*******************************"
echo "Installing cpu microcode"
echo -e "*******************************\e[0m"
sudo nala install -y amd64-microcode

# install basic packages
echo -e "\e[1;34m*******************************"
echo "Installing basic packages"
echo -e "*******************************\e[0m"
sudo nala install -y build-essential curl make libpam0g-dev libxcb-xkb-dev

# pip 3 install
echo -e "\e[1;34m*******************************"
echo "Installing pip3"
echo -e "*******************************\e[0m"
sudo apt -y install python3-pip

# importing dotfiles
echo -e "\e[1;34m*******************************"
echo "Importing dotfiles"
echo "*******************************\e[0m"
sudo nala install -y stow
echo -e "\e[1;34m*******************************"
echo "Stowing dotfiles"
echo -e "*******************************\e[0m"
stow alacritty dunst i3 neofetch nitrogen picom polybar rofi themes vifm redshift user-dirs X zsh gitconf

# network manager
echo -e "\e[1;34m*******************************"
echo "Installing network-manager applet"
echo -e "*******************************\e[0m"
sudo nala install -y network-manager-gnome

# xorg display server
echo -e "\e[1;34m*******************************"
echo "Installing xorg"
echo -e "*******************************\e[0m"
sudo nala install -y xorg

# i3 base
echo -e "\e[1;34m*******************************"
echo "Instaling i3 essential packages"
echo -e "*******************************\e[0m"
sudo nala install -y i3 i3status polybar dmenu picom rofi dunst arandr unzip vim

# apperancy
echo -e "\e[1;34m*******************************"
echo "Installing lxappearance"
echo -e "*******************************\e[0m"
sudo nala install -y lxappearance

# other tools
echo -e "\e[1;34m*******************************"
echo "Installing useful tools (lxinput, gparted, copyq, flameshot)"
echo -e "*******************************\e[0m"
sudo nala install -y lxinput gparted copyq flameshot

# file manager
echo -e "\e[1;34m*******************************"
echo "Installing thunar and vifm"
echo -e "*******************************\e[0m"
sudo nala install -y thunar vifm

# terminal
# sudo nala install -y xfce4-terminal
echo -e "\e[1;34m*******************************"
echo "Installing zsh"
echo -e "*******************************\e[0m"
sudo nala install -y zsh
zsh <(curl -s https://raw.githubusercontent.com/zap-zsh/zap/master/install.zsh) --branch release-v1
sudo rm -rf ~/.zshrc
mv ~/.zshrc* ./.zshrc

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
sudo nala install -y cmake pkg-config libfreetype6-dev libfontconfig1-dev libxcb-xfixes0-dev libxkbcommon-dev python3
cargo build --release
sudo tic -xe alacritty,alacritty-direct extra/alacritty.info
sudo cp -r target/release/alacritty /usr/local/bin # or anywhere else in $PATH
sudo cp -r extra/logo/alacritty-term.svg /usr/share/pixmaps/Alacritty.svg
sudo desktop-file-install extra/linux/Alacritty.desktop
sudo update-desktop-database

# browser install
echo -e "\e[1;34m*******************************"
echo "Installing Brave"
echo -e "*******************************\e[0m"
sudo curl -fsSLo /usr/share/keyrings/brave-browser-archive-keyring.gpg https://brave-browser-apt-release.s3.brave.com/brave-browser-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/brave-browser-archive-keyring.gpg] https://brave-browser-apt-release.s3.brave.com/ stable main"|sudo tee /etc/apt/sources.list.d/brave-browser-release.list
sudo apt update
sudo apt install brave-browser

# neofetch/htop
echo -e "\e[1;34m*******************************"
echo "Installing neofetch and htop"
echo -e "*******************************\e[0m"
sudo nala install -y neofetch htop

# background handler
echo -e "\e[1;34m*******************************"
echo "Installing nitrogen"
echo -e "*******************************\e[0m"
sudo nala install -y nitrogen

# create folders in user directories
echo -e "\e[1;34m*******************************"
echo "Updating home user directories"
echo -e "*******************************\e[0m"
cd
sudo nala install -y xdg-user-dirs
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
sudo make install installsystemd
sudo systemctl enable ly.service

# XSessions and i3.desktop
echo -e "\e[1;34m*******************************"
echo "Configuring XSessions"
echo -e "*******************************\e[0m"
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

# Verifica se o Zsh já está listado no arquivo /etc/shells
if ! grep -Fxq "/usr/bin/zsh" /etc/shells; then
    # Adiciona o Zsh ao arquivo /etc/shells
    echo "/usr/bin/zsh" | sudo tee -a /etc/shells
fi

# Define o Zsh como o shell padrão para o usuário atual
chsh -s /usr/bin/zsh
logout
