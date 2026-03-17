# Zathura Integration Guide

This document explains how Zathura is integrated into your workflow as the default PDF viewer.

## System-wide Defaults

Zathura is set as the default application for PDF files (`application/pdf`) at the desktop level.
- **Desktop Entry**: `org.pwmt.zathura.desktop`
- **Command**: `xdg-mime default org.pwmt.zathura.desktop application/pdf`

## Yazi Integration

Yazi has been configured to use Zathura specifically for PDFs, ensuring a non-blocking terminal experience when viewing files.
- **Config Folder**: `~/.config/yazi/`
- **Rule**: Associates `mime = "application/pdf"` with the `zathura` opener.

## Tridactyl / Browser Integration

To open links or PDFs in Zathura from the browser, you can use the `;y` shortcut to find the file and open it, or configure specific Tridactyl bindings if needed.

## Installation

The `dotsinstall.sh` script installs the necessary packages:
- `zathura`
- `zathura-pdf-mupdf` (for PDF rendering)

To apply the configuration using stow:
```bash
stow yazi
```
