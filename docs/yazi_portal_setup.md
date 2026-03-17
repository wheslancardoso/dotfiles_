# Yazi Floating File Picker (XDG Portal Integration)

Este guia documenta como configurar o **Yazi** para funcionar como o seletor de arquivos de sistema (upload/download) em janelas flutuantes no Hyprland.

## 1. Dependências Necessárias

Para que a integração funcione, você precisa dos seguintes pacotes:
- `yazi`: O gerenciador de arquivos.
- `kitty`: O terminal usado (configurado para usar classes CSS).
- `xdg-desktop-portal`: O serviço de portal do desktop.
- `xdg-desktop-portal-termfilechooser-hunkyburrito-git`: O backend que permite usar terminais como seletor de arquivos (disponível no AUR).
- `xdg-desktop-portal-hyprland`: Backend específico do Hyprland.

## 2. Estrutura de Configuração

### A. Configuração do Portal (`~/.config/xdg-desktop-portal/hyprland-portals.conf`)
Este arquivo diz ao Hyprland para priorizar o `termfilechooser` para diálogos de arquivos.

```ini
[preferred]
default=hyprland;gtk
org.freedesktop.impl.portal.FileChooser=termfilechooser
```

### B. Configuração do Backend (`~/.config/xdg-desktop-portal-termfilechooser/config`)
Define como o terminal será invocado. É **CRÍTICO** usar o formato exato abaixo para evitar erros de "invalid section":

```ini
[filechooser]
cmd=/usr/share/xdg-desktop-portal-termfilechooser/yazi-wrapper.sh
default_dir=$HOME
# O segredo para flutuar está na classe 'floating_yazi'
env=TERMCMD=/usr/bin/kitty --class floating_yazi --title termfilechooser -e
open_mode=suggested
save_mode=suggested
```

### C. Regras de Janela no Hyprland (`~/.config/hypr/UserConfigs/WindowRules.conf`)
Adicione estas regras para garantir que a janela com a classe especificada abra flutuando e centralizada:

```hyprlang
# Regra para o Yazi do Portal
windowrule = match:class ^(floating_yazi)$, float on, center on, size 1000 600
```

## 3. Variáveis de Ambiente e Inicialização

O navegador e os serviços de portal precisam saber que devem usar o protocolo XDG.

### ENVs (`~/.config/hypr/UserConfigs/ENVariables.conf`)
```bash
env = GTK_USE_PORTAL,1
```

### Script de Inicialização (`~/.config/hypr/UserConfigs/Startup_Apps.conf`)
É necessário forçar a atualização do ambiente D-Bus no início da sessão:
```bash
exec-once = dbus-update-activation-environment --systemd WAYLAND_DISPLAY XDG_CURRENT_DESKTOP GTK_USE_PORTAL
```

## 4. Configuração no Navegador (Firefox/LibreWolf)

Abra o `about:config` e garanta que:
- `widget.use-xdg-desktop-portal.file-picker` está definido como `1`.

## 5. Como usar o seletar para "Salvar Como" (Download)

O portal de terminal funciona de forma diferente de um seletor gráfico. Ele te dá um arquivo temporário que você deve mover para o destino final:

1.  **Recorte (Cut)** o arquivo temporário (geralmente com nome longo do portal) apertando `x`.
2.  **Navegue** até a pasta onde deseja salvar o download.
3.  **Cole (Paste)** o arquivo apertando `p`.
4.  **Renomeie (Rename)** o arquivo para o nome desejado apertando `r`.
5.  **Confirme** selecionando o arquivo renomeado e apertando `Enter`.

## 6. Como Testar e Diagnosticar

Se o seletor não abrir, você pode forçar um gatilho manual via terminal para ver os erros:

```bash
# Simula um pedido de abertura de arquivo
gdbus call --session --dest org.freedesktop.portal.Desktop --object-path /org/freedesktop/portal/desktop --method org.freedesktop.portal.FileChooser.OpenFile "" "Teste" "{'multiple': <false>}"

# Verifique os logs se falhar:
journalctl --user -u xdg-desktop-portal-termfilechooser
```
