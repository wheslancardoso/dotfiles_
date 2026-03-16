# Yazi File Manager Setup

This document explains the custom configurations and scripts for **Yazi** in this environment.

## Directory Persistence (Shell Wrapper)

A shell function `y()` is provided in `.zshrc` that allows the terminal to automatically change its working directory to the last directory visited in Yazi upon exit.

### How it works
1. It creates a temporary file to store the current working directory.
2. It launches Yazi with the `--cwd-file` flag pointing to that temporary file.
3. Upon Yazi's exit, it reads the path from the file and performs a `builtin cd` to that path.
4. It cleans up the temporary file.

### Usage
Instead of typing `yazi`, simply type:
```bash
y
```

## Integration with Tridactyl

(If applicable) Yazi is also configured to be launched from LibreWolf via Tridactyl for file selection. See [guia_integracao_yazi_tridactyl.md](file:///home/lan/dotfiles_/guia_integracao_yazi_tridactyl.md) for details.
