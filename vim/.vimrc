set clipboard=unnamed
set number      " Mostra o número de linha
set tabstop=4   " Define o tamanho da tabulação como 4 espaços
set softtabstop=4 " Define o número de espaços inseridos por uma tecla TAB
set expandtab   " Converte tabs em espaços
set shiftwidth=4 " Define a largura da tabulação à esquerda ou à direita
set smartindent " Usa indentação inteligente
set autoindent  " Usa a mesma indentação da linha anterior
set hlsearch    " Realça a pesquisa
set incsearch   " Ativa pesquisa incremental
set cursorline  " Realça a linha atual
set showmatch   " Realça o parêntese correspondente
set ignorecase  " Ignora diferenças de caixa na pesquisa
set smartcase   " Ignora diferenças de caixa se a pesquisa for toda minúscula
set guicursor=n-v-c:ver25-iCursor-blinkwait300-blinkon175-blinkoff150


call plug#begin()
Plug 'dracula/vim', { 'as': 'dracula' }
call plug#end()
colorscheme dracula

syntax on

set termguicolors
set background=dark
highlight Normal guifg=#f8f8f2 guibg=#282a36
