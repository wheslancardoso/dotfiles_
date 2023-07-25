#!/bin/bash
mkdir ~/.local
mkdir ~/.local/share
mkdir ~/.local/share/fonts

cd /tmp
fonts=( 
"3270"
"Agave"
"AnonymousPro"
"Arimo"
"AurelentSansMono"
"BigBlueTerminal"
"BitstreamVeraSansMono"
"CascadiaCode"
"CodeNewRoman"
"ComicShannsMono"
"Cousine"
"DaddyTimeMono"
"DejaVuSansMono"
"DroidSansMono"
"EnvyCodeR"
"FantasqueSansMono"
"Fira Mono"
"FontPatcher"
"Gohu"
"Hasklig"
"HeavyData"
"Hermit"
"iA-Writer"
"IBMPlexMono"
"IncosolataGo"
"IncosolataLGC"
"IosevkaTerm"
"Lekton"
"LiberationMono"
"Lilex"
"Meslo"
"Monofur"
"Monoid"
"Mononoki"
"MPlus"
"NerdFontsSymbolsOnly"
"Noto"
"OpenDyslexic"
"Overpass"
"Profont"
"ProggyClean"
"Terminus"
"Tinos"
"Ubuntu"
"UbuntuMono"
"VictorMono"
#
"FiraCode" 
"Go-Mono" 
"Hack" 
"Inconsolata" 
"Iosevka" 
"JetBrainsMono" 
"Mononoki" 
"RobotoMono" 
"SourceCodePro" 
"ShareTechMono"
)

for font in ${fonts[@]}
do
    wget https://github.com/ryanoasis/nerd-fonts/releases/download/v3.0.2/$font.zip
    unzip $font.zip -d $HOME/.local/share/fonts/$font/
    rm $font.zip
done
fc-cache
