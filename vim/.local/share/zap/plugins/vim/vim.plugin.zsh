#!/bin/sh
bindkey -v
export KEYTIMEOUT=1

if [[ -o menucomplete ]]; then 
  # Use vim keys in tab complete menu:
  bindkey -M menuselect '^h' vi-backward-char
  bindkey -M menuselect '^k' vi-up-line-or-history
  bindkey -M menuselect '^l' vi-forward-char
  bindkey -M menuselect '^j' vi-down-line-or-history
  bindkey -M menuselect '^[[Z' vi-up-line-or-history
fi

bindkey -v '^?' backward-delete-char

# Change cursor shape for different vi modes.
function zle-keymap-select () {
    case $KEYMAP in
        vicmd|viins|main) echo -ne '\e[2 q';; # Block em todos os modos do Vim
    esac
}
zle -N zle-keymap-select

zle-line-init() {
    zle -K viins # Inicia `vi insert` como o keymap (pode ser removido se `bindkey -V` for definido em outro lugar)
    echo -ne "\e[2 q"
}
zle -N zle-line-init
echo -ne '\e[2 q' # Use block na forma de cursor no início.
preexec() { echo -ne '\e[2 q' ;} # Use block na forma de cursor para cada novo prompt.

# Função para definir o cursor como block em todos os modos do Vim
function set_vim_cursor_block() {
    zle -N zle-keymap-select
    zle -N zle-line-init
    echo -ne '\e[2 q' # Block na forma de cursor.
}


# emacs like keybindings
bindkey -M viins '^A' beginning-of-line 
bindkey -M viins '^E' end-of-line 
