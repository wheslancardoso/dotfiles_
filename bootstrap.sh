#!/bin/bash

# bootstrap.sh - Quick setup script for dotfiles

set -e

DOTFILES_REP="https://github.com/wheslancardoso/dotfiles_.git"
DOTFILES_DIR="$HOME/dotfiles_"

echo "🚀 Iniciando setup dos dotfiles..."

# 1. Verificar dependências essenciais
echo "📦 Verificando pacotes básicos..."
if ! command -v git &> /dev/null; then
    sudo pacman -S --noconfirm git
fi

if ! command -v stow &> /dev/null; then
    sudo pacman -S --noconfirm stow
fi

# 2. Clonar repositório se não existir
if [ ! -d "$DOTFILES_DIR" ]; then
    echo "📥 Clonando repositório em $DOTFILES_DIR..."
    git clone "$DOTFILES_REP" "$DOTFILES_DIR"
fi

cd "$DOTFILES_DIR"

# 3. Aplicar dotfiles via stow-it.sh
if [ -f "./stow-it.sh" ]; then
    echo "🔗 Aplicando links simbólicos..."
    chmod +x ./stow-it.sh
    ./stow-it.sh all --adopt
else
    echo "❌ Erro: stow-it.sh não encontrado no repositório."
    exit 1
fi

echo "✅ Dotfiles aplicados com sucesso!"
echo "💡 Lembre-se de instalar os pacotes mencionados no guia_integracao."
