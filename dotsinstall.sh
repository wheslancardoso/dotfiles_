mkdir ~/.config
echo -e "\e[1;34m*******************************"
echo "Installing my apps"
echo -e "*******************************\e[0m"
cd

sudo pacman -S --noconfirm neovim
sudo pacman -S --noconfirm rustup
rustup-init
cargo install tree-sitter-cli
sudo pacman -S --noconfirm ripgrep
sudo pacman -S --noconfirm lazygit
git clone --depth 1 https://github.com/AstroNvim/AstroNvim ~/.config/nvim
git clone https://github.com/wheslancardoso/astronvim.git ~/.config/nvim/lua/user

sudo pacman -S --noconfirm zsh
zsh <(curl -s https://raw.githubusercontent.com/zap-zsh/zap/master/install.zsh) --branch release-v1
sudo pacman -S --noconfirm neofetch
sudo pacman -S --noconfirm htop
sudo pacman -S --noconfirm copyq
sudo pacman -S --noconfirm flameshot
sudo pacman -S --noconfirm exa
sudo pacman -S --noconfirm bat
sudo pacman -S --noconfirm alacritty
sudo pacman -S --noconfirm i3
sudo pacman -S --noconfirm i3status
sudo pacman -S --noconfirm polybar
sudo pacman -S --noconfirm dmenu
sudo pacman -S --noconfirm picom
sudo pacman -S --noconfirm rofi
sudo pacman -S --noconfirm rofi
sudo pacman -S --noconfirm dunst
sudo pacman -S --noconfirm arandr
sudo pacman -S --noconfirm unzip
sudo pacman -S --noconfirm zip
sudo pacman -S --noconfirm tar
sudo pacman -S --noconfirm xdg-user-dirs
sudo pacman -S --noconfirm stow

if ! grep -Fxq "/usr/bin/zsh" /etc/shells; then
	# adiciona o zsh ao arquivo /etc/shells
	echo "/usr/bin/zsh" | sudo tee -a /etc/shells
fi

# Define o zhs como shell padrao para o usuario atual
chsh -s /usr/bin/zsh

git clone https://aur.archlinux.org/yay.git
cd yay/
makepkg -si

yay -S brave-bin

echo -e "\e[1;34m*******************************"
echo "Removing installed configs"
echo -e "*******************************\e[0m"
rm -rf ~/.config/i3
#rm -rf ~/.config/gtk-*
rm -rf ~/.config/neofetch
rm -rf ~/.config/nitrogen
rm -rf ~/.config/picom
rm -rf ~/.config/polybar
#rm -rf ~/.config/qt5ct
rm -rf ~/.config/rofi
rm -rf ~/.config/dunst
rm -rf ~/.config/alacritty
rm -rf ~/.vimrc
rm -rf ~/.p10k.zsh
rm -rf ~/.zshrc
rm -rf ~/.config/user-dirs.dirs

cd ~/dotfiles_/
stow i3 X neofetch nitrogen picom polybar rofi dunst alacritty p10k zsh user-dirs themes vim mpv lvim ideavim

mkdir ~/desktop
mkdir ~/downloads
mkdir ~/docs
mkdir ~/templates
mkdir ~/public
mkdir ~/music
mkdir ~/pics
mkdir ~/videos
sudo xdg-user-dirs-update

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

cat > ./temp << "EOF"
[Desktop Entry]
Version=1.0
Type=Application
Name=XFCE
Comment=XFCE Desktop Environment
Exec=startxfce4
Icon=xfce4-panel
Terminal=false
Categories=System;
EOF
sudo cp ./temp /usr/share/xsessions/xfce.desktop;rm ./temp

