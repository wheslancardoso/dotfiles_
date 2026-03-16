# Guia Definitivo: Integração Yazi + Tridactyl + Firefox no Hyprland 🏹

Este documento detalha cada etapa necessária para transformar a navegação e o gerenciamento de arquivos no seu Linux em uma experiência puramente baseada em Vim, utilizando o terminal Kitty, o gerenciador de arquivos Yazi e a extensão Tridactyl no Firefox/LibreWolf.

---

# Instalação Completa do Ecossistema Vim

Abaixo estão todos os pacotes que compõem sua experiência de desktop focada em Vim. No Arch Linux (CachyOS), você pode instalar todos com estes comandos:

```bash
# Core: Terminal, Editor e File Manager
sudo pacman -S kitty neovim yazi

# Utilitários de Visualização e Git (Estilo Vim)
sudo pacman -S zathura zathura-pdf-mupdf lazygit

# Dependências do Yazi para Previews (Imagens, PDF, Pesquisa)
sudo pacman -S ffmpeg7 p7zip jq poppler fd ripgrep fzf zoxide imagemagick

# Fontes (Essencial para ícones no Yazi e Kitty)
sudo pacman -S ttf-nerd-fonts-symbols ttf-nerd-fonts-symbols-common

# Portal de Arquivos (AUR) - O segredo para integrar o Yazi ao sistema
yay -S xdg-desktop-portal-termfilechooser-hunkyburrito-git

# Gerenciamento de Dotfiles
sudo pacman -S stow
```

---

## 📦 1.1 Gerenciando com GNU Stow

Agora todas as configurações acima são gerenciadas pelo `stow`. Isso permite que você mantenha seus arquivos organizados no repositório de dotfiles e crie links simbólicos automaticamente para sua pasta home.

### Passo 1.1.1: Usando o script automatizado
Na raiz do seu repositório de dotfiles, você encontrará o script `stow-it.sh`.

```bash
# Para aplicar todas as configurações (Stow all)
./stow-it.sh all

# Para aplicar apenas uma configuração específica (ex: nvim)
./stow-it.sh nvim

# Na primeira vez, se houver conflitos com arquivos existentes, use --adopt:
# CUIDADO: Isso substituirá o conteúdo do repositório pelo conteúdo da sua home
./stow-it.sh all --adopt
```

---

## 📂 2. Configurando o Yazi e o Shell

O Yazi é extremamente rápido, mas ganha superpoderes com algumas configurações.

### Passo 2.1: Criar Pastas de Configuração
Se a pasta ainda não existir, crie-a:
```bash
mkdir -p ~/.config/yazi
```

### Passo 2.2: O Truque do "CD on Exit" (Shell Wrapper)
Por padrão, ao sair do Yazi, o seu terminal continua na pasta onde você começou. Para que o terminal "siga" o Yazi, adicione isto ao seu `~/.zshrc` ou `~/.bashrc`:

```bash
# Função para o Yazi mudar o diretório do shell ao sair
function y() {
	local tmp="$(mktemp -t "yazi-cwd.XXXXXX")"
	yazi "$@" --cwd-file="$tmp"
	if cwd="$(cat -- "$tmp")" && [ -n "$cwd" ] && [ "$cwd" != "$PWD" ]; then
		cd -- "$cwd"
	fi
	rm -f -- "$tmp"
}
```
*Agora você pode usar apenas `y` no terminal para abrir o Yazi e ele "teletransportará" você para a pasta onde você sair.*

### Passo 2.3: Configurações Básicas (`yazi.toml`)
Você pode gerar o arquivo padrão para customizar:
```bash
yazi --print-default-config > ~/.config/yazi/yazi.toml
```
No `yazi.toml`, você pode configurar visualização de imagens, ordenação e muito mais.

---

## 🪟 3. Configuração do Hyprland (Janelas Flutuantes)

Para que o Yazi e o Neovim abram como pop-ups por cima do navegador, precisamos de regras de janela específicas.

**Arquivo:** `~/.config/hypr/UserConfigs/WindowRules.conf` (ou seu arquivo de regras principal)

```hyprlang
# Define que janelas com a classe 'floating_yazi' devem flutuar
windowrule = float 1, match:class floating_yazi
windowrule = center 1, match:class floating_yazi
windowrule = size 1000 600, match:class floating_yazi
```

> [!NOTE]
> Usamos a classe customizada `floating_yazi` para não afetar as janelas normais do Kitty ou do Yazi que você abre manualmente.

---

## 🦊 4. Configuração do Firefox (LibreWolf)

Por padrão, o Firefox ignora os portais do sistema em favor do seletor GTK nativo. Precisamos forçar o uso do XDG Portal.

1. Abra o Firefox e acesse `about:config`.
2. Pesquise por: `widget.use-xdg-desktop-portal.file-picker`.
3. Altere o valor para `1`.
4. Reinicie o navegador.

---

## ⌨️ 5. Configuração do Tridactyl

Esta é a parte que conecta o teclado ao sistema.

### Passo 4.1: Instalar o Native Messenger
O Tridactyl precisa de uma "ponte" para rodar comandos no seu sistema (como abrir o terminal).

Rode no terminal:
```bash
curl -fsSl https://raw.githubusercontent.com/tridactyl/native_messenger/master/installers/install.sh -o /tmp/trinativeinstall.sh && sh /tmp/trinativeinstall.sh 1.24.5
```

Se estiver usando **LibreWolf**, crie o link simbólico:
```bash
mkdir -p ~/.librewolf/native-messaging-hosts
ln -sf ~/.mozilla/native-messaging-hosts/tridactyl.json ~/.librewolf/native-messaging-hosts/tridactyl.json
```

### Passo 4.2: O Arquivo de Configuração ([.tridactylrc](file:///home/lan/.tridactylrc))
Crie ou edite o arquivo `~/.tridactylrc` com o conteúdo abaixo:

```tridactylrc
" /* ---- 💫 Tridactyl Configuration 💫 ---- */

" Define o Neovim no Kitty como editor padrão para textareas (aperte Ctrl+i para usar)
set editorcmd kitty --class floating_yazi -e nvim

" Atalho ;y para abrir o Yazi flutuante (Navegação livre)
" Utilizamos '!' como alias para 'native run' para máxima compatibilidade
bind ;y ! kitty --class floating_yazi -e yazi

" Atalho ;u para uploads manuais (Manual: abre Yazi, copia o caminho, cola)
bind ;u ! kitty --class floating_yazi -e yazi

" Configurações estéticas
set theme dark
set smoothscroll true
```

---

## 📂 6. O Seletor de Arquivos Mágico (XDG Portal)

Isso faz com que, ao clicar em "Upload" em qualquer site, o Yazi abra em vez da janela cinza comum do sistema.

### Passo 5.1: Configuração do Portal Terminal
**Arquivo:** `~/.config/xdg-desktop-portal-termfilechooser/config`

```ini
[general]
command = kitty --class floating_yazi -e yazi %f
output_path = /tmp/xdg-desktop-portal-termfilechooser-output
```

### Passo 5.2: Prioridade dos Portais
**Arquivo:** `~/.config/xdg-desktop-portal/portals.conf`

```ini
[preferred]
default=hyprland;gtk
org.freedesktop.impl.portal.FileChooser=termfilechooser
```

---

## 🛠️ 7. Troubleshooting (Solução de Problemas)

### O erro "Not an excmd: shell" ou "Not an excmd: run"
Algumas versões do Tridactyl não possuem os aliases padrão. 
- **Solução:** Use o prefixo de exclamação (`!`) antes do comando, como fizemos no [.tridactylrc](file:///home/lan/.tridactylrc) final.

### O atalho não funciona após mudar o arquivo
- **Solução:** No navegador, digite `:source` e dê Enter. Se não resolver, feche e abra o Firefox.

### O messenger não é encontrado
- **Solução:** Digite `:native` para checar. Se der erro, verifique se os arquivos [.json](file:///home/lan/.mozilla/native-messaging-hosts/tridactyl.json) estão nas pastas corretas (`~/.mozilla/native-messaging-hosts/`).

---

## 🚀 8. Como Usar no Dia a Dia

- **Upload no Drive:** Basta clicar no botão de upload. O Yazi abrirá. Navegue até o arquivo, selecione-o e feche o Yazi com `q` (ou confirme conforme as configurações do seu portal).
- **Navegação Rápida:** Aperte `;y` em qualquer site para abrir seus arquivos sem sair do browser.
- **Edição de Texto:** Clique em um campo de comentário (como no GitHub ou Reddit) e aperte `Ctrl + i`. O Neovim abrirá. Escreva seu texto, salve e saia (`:wq`), e o texto aparecerá magicamente no navegador.

## 🏁 9. Variáveis de Sistema (O Toque Final)

Para que todos os programas do terminal saibam que você usa o Neovim como base, adicione isto ao seu `~/.zshrc` ou `~/.bashrc`:

```bash
# Define o Neovim como editor padrão do sistema
export EDITOR='nvim'
export VISUAL='nvim'
export PAGER='less'

# Alias para facilitar o uso dos novos brinquedos
alias lg='lazygit'
alias z='zathura'
```

---

## 💎 10. Outras Ferramentas do Ecossistema

Para complementar sua vida no terminal, aqui estão as ferramentas que instalamos:

- **LazyGit (`lg`):** A melhor interface TUI para Git. Com o comando `lg`, você gerencia commits e branches com a velocidade do teclado.
- **Zathura:** Um leitor de PDF minimalista que usa os atalhos do Vim (`j`, `k`, `/` para busca). Perfeito para ler documentação sem tirar a mão do teclado.

---
*Este guia completo foi gerado para documentar a configuração estável alcançada em 16 de março de 2026. Aproveite seu ambiente ultra-produtivo!*
