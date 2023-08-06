#!/bin/bash

mkdir ~/.config
echo -e "\e[1;34m*******************************"
echo "Installing zsh"
echo -e "*******************************\e[0m"
cd
sudo nala install -y zsh
zsh <(curl -s https://raw.githubusercontent.com/zap-zsh/zap/master/install.zsh) --branch release-v1
sudo rm -rf ~/.zshrc
cd ~/dotfiles_/
stow zsh
cd

# Verifica se o Zsh já está listado no arquivo /etc/shells
if ! grep -Fxq "/usr/bin/zsh" /etc/shells; then
    # Adiciona o Zsh ao arquivo /etc/shells
    echo "/usr/bin/zsh" | sudo tee -a /etc/shells
fi

# Define o Zsh como o shell padrão para o usuário atual
chsh -s /usr/bin/zsh


echo -e "\e[1;34m*******************************"
echo "Installing Neovim and Astronvim"
echo -e "*******************************\e[0m"
cd
sudo nala install ninja-build gettext cmake unzip curl
git clone https://github.com/neovim/neovim
cd neovim
git checkout stable
make CMAKE_BUILD_TYPE=RelWithDebInfo
sudo make install
cd

sudo nala install rustc -y

sudo nala install ripgrep -y 

echo -e "\e[1;34m*******************************"
echo "Installing lazygit"
echo -e "*******************************\e[0m"
LAZYGIT_VERSION=$(curl -s "https://api.github.com/repos/jesseduffield/lazygit/releases/latest" | grep -Po '"tag_name": "v\K[^"]*')
curl -Lo lazygit.tar.gz "https://github.com/jesseduffield/lazygit/releases/latest/download/lazygit_${LAZYGIT_VERSION}_Linux_x86_64.tar.gz"
tar xf lazygit.tar.gz lazygit
sudo install lazygit /usr/local/bin

git clone --depth 1 https://github.com/AstroNvim/AstroNvim ~/.config/nvim
git clone https://github.com/wheslancardoso/astronvim.git ~/.config/nvim/lua/user

echo -e "\e[1;34m*******************************"
echo "Removing installed configs"
echo -e "*******************************\e[0m"
rm -rf ~/.config/i3
rm -rf ~/.config/gtk-*
rm -rf ~/.config/neofetch
rm -rf ~/.config/nitrogen
rm -rf ~/.config/picom
rm -rf ~/.config/polybar
rm -rf ~/.config/qt5ct
rm -rf ~/.config/rofi
rm -rf ~/.config/dunst
rm -rf ~/.config/alacritty
rm -rf ~/.vimrc
rm -rf ~/.p10k.zsh

cd ~/dotfiles_/
stow i3 gtk* neofetch picom polybar qt5ct redshift rofi dunst alacritty themes vim vifm mpv lvim ideavim


echo -e "\e[1;34m*******************************"
echo "Setting up polkit"
echo -e "*******************************\e[0m"

sudo usermod -aG sudo $USER
sudo nala install -y policykit-1
sudo systemctl start polkit

echo 'polkit.addRule(function(action, subject) {
  if (subject.isInGroup("sudo")) {
    return polkit.Result.YES;
  }
});' | sudo tee /etc/polkit-1/rules.d/99-custom.rules

