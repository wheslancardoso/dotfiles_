#!/bin/bash

mkdir ~/.config
echo -e "\e[1;34m*******************************"
echo "Installing zsh"
echo -e "*******************************\e[0m"
cd
sudo xbps-install -Sy zsh
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

echo -e "\e[1;34m*******************************"
echo "Stowing Dotfiles"
echo -e "*******************************\e[0m"
cd ~/dotfiles_/
stow i3 gtk* neofetch picom polybar qt5ct redshift rofi dunst alacritty themes vim vifm mpv lvim ideavim

echo -e "\e[1;34m*******************************"
echo "Setting up polkit"
echo -e "*******************************\e[0m"

sudo usermod -aG wheel cj
sudo xbps-install -Sy polkit
sudo ln -s /etc/sv/polkit /var/service/

echo 'polkit.addRule(function(action, subject) {
  if (subject.isInGroup("wheel")) {
    return polkit.Result.YES;
  }
});' | sudo tee /etc/polkit-1/rules.d/99-custom.rules