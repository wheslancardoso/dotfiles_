# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# Created by Zap installer
[ -f "${XDG_DATA_HOME:-$HOME/.local/share}/zap/zap.zsh" ] && source "${XDG_DATA_HOME:-$HOME/.local/share}/zap/zap.zsh"
plug "zsh-users/zsh-autosuggestions"
plug "zap-zsh/sudo"
plug "zap-zsh/supercharge"
plug "zap-zsh/zap-prompt"
plug "zsh-users/zsh-syntax-highlighting"
plug "romkatv/powerlevel10k"
plug "hlissner/zsh-autopair"
plug "zsh-users/zsh-history-substring-search"
plug "MichaelAquilina/zsh-you-should-use"
plug "zap-zsh/vim"

# Load and initialise completion system
autoload -Uz compinit
compinit

# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

# BINDKEYS
bindkey -M vicmd 'k' history-substring-search-up
bindkey -M vicmd 'j' history-substring-search-down

# EXEC
#exec setxkbmap -option caps:swapescape

# PATHS
export PATH="$HOME/.local/bin:$PATH"
export PATH="$PATH:/usr/lib/xdg-utils"
export PATH="$PATH:/.local/bin"
#export PATH="$PATH:$HOME/.cargo/bin"
#export PATH=$PATH:/usr/bin/ruby
#eval "$(perl -I$HOME/perl5/lib/perl5 -Mlocal::lib)"
export PATH="/var/lib/flatpak/exports/bin:$PATH"
export PATH="$HOME/.dotdrop:$PATH"
export QT_QPA_PLATFORMTHEME=qt5ct

# ALIASES
alias rl1='i3-msg "workspace 1; append_layout ~/.config/i3/layout.json"'

# Package manager
alias apti="sudo nala install -y "
alias aptu="sudo nala update"
alias aptg="sudo nala update && sudo nala upgrade"

# Confs
alias i3conf="vim ~/.config/i3/config"

# Git
alias gs="git status"
alias ga="git add"
alias gc="git commit"
alias gp="git pull"
alias gl="git log --oneline --all --graph"

# Docker
alias dps='docker ps'
alias dlogs='docker logs'
alias dstopall='docker stop $(docker ps -aq)'
alias drmiall='docker rm $(docker ps -aq)'
alias drmall='docker rm -f $(docker ps -aq)'
alias dimages='docker images'
alias drmallimages='docker rmi $(docker images -q)'

# Node.js
alias npmi='npm install'
alias npmig='npm install -g'
alias npms='npm start'
alias npmt='npm test'

# ls with all the flags and bat
alias ls="exa --icons -lah"
alias bat="bat --simple=auto"

# cd up to directories
alias .1="cd .."
alias .2="cd ../.."
alias .3="cd ../../.."

# mkdir create parents
alias mkdir="mkdir -pv"

# zsh
alias zshconf="lvim ~/.zshrc" # open .zshrc to edit
alias zshreload="source ~/.zshrc" # reload .zshrc to apply changes

# video 
alias playavi="vlc *.avi"
alias playmp4="vlc *.mp4"
alias playmkv="vlc *.mkv"

# flatpaks 
alias vlc="flatpak run org.videolan.VLC"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
