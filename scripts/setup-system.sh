#!/bin/bash

# setup-system.sh - Automate passwordless sudo and keyring setup
# This script is part of the dotfiles repository.

set -e

# --- Configuration ---
SUDOERS_FILE="/etc/sudoers.d/$USER-nopasswd"
KEYRING_DAEMON="gnome-keyring-daemon"

# --- Functions ---

log() {
    echo -e "\033[1;32m[INFO]\033[0m $1"
}

warn() {
    echo -e "\033[1;33m[WARN]\033[0m $1"
}

setup_sudo() {
    if [ -f "$SUDOERS_FILE" ]; then
        log "Passwordless sudo already configured for $USER."
    else
        log "Configuring passwordless sudo for $USER..."
        echo "$USER ALL=(ALL) NOPASSWD: ALL" | sudo tee "$SUDOERS_FILE" > /dev/null
        sudo chmod 440 "$SUDOERS_FILE"
        log "Passwordless sudo configured successfully."
    fi
}

setup_keyring() {
    log "Checking for $KEYRING_DAEMON..."
    if ! command -v "$KEYRING_DAEMON" &> /dev/null; then
        warn "$KEYRING_DAEMON not found. You might need to install 'gnome-keyring'."
    else
        log "$KEYRING_DAEMON is installed."
    fi

    # Note: Environment variables are handled in .zshrc and Startup_Apps.conf
    # which are managed via Stow in this repo.
}

# --- Main ---

log "Starting system setup..."

# 1. Setup Passwordless Sudo
setup_sudo

# 2. Setup Keyring (Validation)
setup_keyring

log "System setup complete!"
log "Note: Ensure you have linked your dotfiles using stow to apply shell and desktop configurations."
