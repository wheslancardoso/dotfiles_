lvim.plugins = {

  --------------------------------------
  ------------ COLORSCHEMES ------------
  --------------------------------------

  { "morhetz/gruvbox" },
  { "sainnhe/gruvbox-material" },
  { "sainnhe/sonokai" },
  { "sainnhe/edge" },
  { "lunarvim/horizon.nvim" },
  { "tomasr/molokai" },
  { "ayu-theme/ayu-vim" },
  { "Mofiqul/dracula.nvim"},
  { "tiagovla/tokyodark.nvim"},

  -- highlight colors like  #ffcc00
  { "norcalli/nvim-colorizer.lua"},


  ------------------------------------
  ------------ NAVIGATION ------------
  ------------------------------------

  -- This plugin provides a fast way to jump between words in a document.
  -- hit s on normal mode to hop
  {
    "phaazon/hop.nvim",
    event = "BufRead",
    config = function()
      require("hop").setup()
      vim.api.nvim_set_keymap("n", "s", ":HopChar2<cr>", { silent = true })
      vim.api.nvim_set_keymap("n", "S", ":HopWord<cr>", { silent = true })
    end,
  },

  -- This plugin provides a quick and easy way to navigate between project files.
  { "ThePrimeagen/harpoon"},

  -- This plugin allows easy navigation between Neovim panes and Tmux panes.
  { "christoomey/vim-tmux-navigator" },


  ---------------------------------
  ------------ GENERAL ------------
  ---------------------------------

  -- This plugin provides a linetrack of the divs for example like vscode
  { "michaeljsmith/vim-indent-object"},

  { "mg979/vim-visual-multi"},

  -- This plugin highlights TODO comments in code and provides quick navigation to them.
  {
    "folke/todo-comments.nvim",
    event = "BufRead",
    config = function()
      require("todo-comments").setup()
    end
  },

  -- underlines the word under the cursor
  {
    "itchyny/vim-cursorword",
      event = {"BufEnter", "BufNewFile"},
      config = function()
        vim.api.nvim_command("augroup user_plugin_cursorword")
        vim.api.nvim_command("autocmd!")
        vim.api.nvim_command("autocmd FileType NvimTree,lspsagafinder,dashboard,vista let b:cursorword = 0")
        vim.api.nvim_command("autocmd WinEnter * if &diff || &pvw | let b:cursorword = 0 | endif")
        vim.api.nvim_command("autocmd InsertEnter * let b:cursorword = 0")
        vim.api.nvim_command("autocmd InsertLeave * let b:cursorword = 1")
        vim.api.nvim_command("augroup END")
        end
  },

  --  This plugin allows repeating various commands with the . key.
  --  ysiw + what you want. ex: '' - add surrounding
  --  ds + '' or "" to delete
  --  cs + what you want to change + change
  { "tpope/vim-repeat"},

  -- This plugin provides shortcuts for surrounding text with quotes, parens, brackets, etc.
  { "tpope/vim-surround"},


   ------------------------------------
   ------------ TS-PLUGINS ------------
   ------------------------------------

  -- This plugin automatically adds closing tags when editing HTML/XML files.
  {
    "windwp/nvim-ts-autotag",
    config = function()
    require("nvim-ts-autotag").setup()
    end,
  },

  { "mrjones2014/nvim-ts-rainbow", },


  -------------------------------------
  ------------ LSP-PLUGINS ------------
  -------------------------------------

  -- This plugin that provides a signature help popup for functions and methods while typing. It helps improve productivity by giving a quick view of the parameters expected by the functions.
  {
    "ray-x/lsp_signature.nvim",
    event = "BufRead",
    config = function() require"lsp_signature".on_attach() end,
  },

  -- This plugin provides an interface for quickly navigating and managing errors, warnings, and other diagnostic messages.
  { "folke/trouble.nvim",
    cmd = "TroubleToggle",
  },

  -- This plugin provides better support for TypeScript language files in Neovim.
  { 'jose-elias-alvarez/typescript.nvim'},


  -----------------------------
  ------------ GIT ------------
  -----------------------------

  -- git diff in a single tabpage
  -- {
  --   "sindrets/diffview.nvim",
  --   event = "BuffRead",
  -- },


  --------------------------------
  ------------ OTHERS ------------
  --------------------------------

  -- This plugin is part of LunarVim and provides several features like a built-in dashboard, keybindings, and more.
  { 'lunarvim/lunar.nvim'},

  -- This plugin provides a "frecency" sorter for the Telescope fuzzy finder, which sorts results based on how frequently they've been accessed.
  {
    'nvim-telescope/telescope-frecency.nvim',
    dependencies = { 'nvim-telescope/telescope.nvim', 'kkharji/sqlite.lua' },
  },

  -- This plugin provides a way to format JSON files in Neovim.
   {
    'AckslD/nvim-trevJ.lua',
    config = 'require("trevj").setup()',
    init = function()
      vim.keymap.set('n', '<leader>j', function()
        require('trevj').format_at_cursor()
      end)
    end,
  },

  -- live edit html, css, and javascript
  {
    "turbio/bracey.vim",
    cmd = {"Bracey", "BracyStop", "BraceyReload", "BraceyEval"},
    build = "npm install --prefix server",
  },
}

lvim.builtin.telescope.on_config_done = function(telescope)
  pcall(telescope.load_extension, "frecency")
end

lvim.builtin.treesitter.rainbow.enable = true
