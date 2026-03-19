# 📦 Guia: Extração e Compactação Inteligente no Yazi

Este guia explica como implementar o mecanismo de manipulação de arquivos comprimidos (zip, rar, tar, etc.) de forma inteligente no gerenciador de arquivos **Yazi**.

---

## 🛠️ 1. Requisitos do Sistema

Para que todos os formatos funcionem, certifique-se de ter as ferramentas instaladas:

```bash
# No Arch Linux
sudo pacman -S p7zip unrar unzip tar gzip bzip2 xz zstd
```

---

## 📜 2. O Script Inteligente (`arquivo.sh`)

Crie um script que detecte o formato e execute a ferramenta correta.  
Local sugerido: `~/.config/yazi/scripts/arquivo.sh`

```bash
#!/usr/bin/env bash
set -euo pipefail

ACAO="$1"  # "extrair" ou "compactar"
shift

# Resto do script (logica de case para extensões...)
# Verifique o arquivo original em: yazi/.config/yazi/scripts/arquivo.sh
```

---

## ⌨️ 3. Configuração de Atalhos (`keymap.toml`)

Adicione os mapeamentos na seção `[mgr]` para evitar conflitos com teclas nativas.  
Arquivo: `~/.config/yazi/keymap.toml`

```toml
[[mgr.prepend_keymap]]
on   = [ "a", "e" ]
run  = 'shell -- $HOME/.config/yazi/scripts/arquivo.sh extrair %s'
desc = "Extrair arquivo(s)"

[[mgr.prepend_keymap]]
on   = [ "a", "c" ]
run  = 'shell -- $HOME/.config/yazi/scripts/arquivo.sh compactar %s'
desc = "Compactar arquivo(s)"
```

**Por que `a, e`?**
- `a` (de Arquivo) serve como um prefixo de comando.
- Evita conflitos com o `c` (Copy) e `E` (nativo do Yazi).

---

## 🚀 4. Como Usar

1. Abra o **Yazi**.
2. Navegue até um arquivo comprimido ou selecione vários usando `Space`.
3. Pressione a sequência:
   - **`a` depois `e`**: Para extrair tudo no diretório atual.
   - **`a` depois `c`**: Para abrir o menu de compactação e escolher um formato.

---

## 🔄 5. Manutenção

Se você adicionar um novo formato (ex: `.zst`), basta atualizar o bloco `case` no script `arquivo.sh` dentro dos seus dotfiles.
