lvim.plugins = {
  { 'jose-elias-alvarez/typescript.nvim'}, -- This plugin provides better support for TypeScript language files in Neovim.
  { 'lunarvim/lunar.nvim'}, -- This plugin is part of LunarVim and provides several features like a built-in dashboard, keybindings, and more. 

  -- THEMES --
  { "morhetz/gruvbox" },
  { "sainnhe/gruvbox-material" },
  { "sainnhe/sonokai" },
  { "sainnhe/edge" },
  { "lunarvim/horizon.nvim" },
  { "tomasr/molokai" },
  { "ayu-theme/ayu-vim" },
  { "Mofiqul/dracula.nvim"},
  { "tiagovla/tokyodark.nvim"},
  
  { "folke/trouble.nvim",
    cmd = "TroubleToggle",
  }, -- This plugin provides an interface for quickly navigating and managing errors, warnings, and other diagnostic messages.

  {
    "folke/todo-comments.nvim",
    event = "BufRead",
    config = function()
      require("todo-comments").setup()
    end
  }, -- This plugin highlights TODO comments in code and provides quick navigation to them.

--  {
--    "folke/persistence.nvim",
--    event = "BuffReadPre",
--    config = function()
--      require("persistence").setup({
--        dir = vim.fn.expand(vim.fn.stdpath "state" .. "/sessions/"),
--        options = {"buffers", "curdir", "tabpages", "winsize"}
--      })
--    end
--  }, -- This plugin provides an easy way to save and restore Neovim sessions.  

  { "christoomey/vim-tmux-navigator" }, -- This plugin allows easy navigation between Neovim panes and Tmux panes.
  { "tpope/vim-surround"}, -- This plugin provides shortcuts for surrounding text with quotes, parens, brackets, etc.
--  { "felipec/vim-sangex", event = "BufRead"}, -- This plugin improves the behavior of the gx command (opening URLs in web browsers).
  {
    "windwp/nvim-ts-autotag",
    config = function()
    require("nvim-ts-autotag").setup()
    end,
  }, -- This plugin automatically adds closing tags when editing HTML/XML files.

  { "tpope/vim-repeat"}, --  This plugin allows repeating various commands with the "." key.
  { "ThePrimeagen/harpoon"}, -- This plugin provides a quick and easy way to navigate between project files.

  {
    'phaazon/hop.nvim',
    branch = 'v2',
    config = function()
      require('hop').setup()
    end
  }, -- This plugin provides a fast way to jump between words in a document.

  {
    'nvim-telescope/telescope-frecency.nvim',
    dependencies = { 'nvim-telescope/telescope.nvim', 'kkharji/sqlite.lua' },
  }, -- This plugin provides a "frecency" sorter for the Telescope fuzzy finder, which sorts results based on how frequently they've been accessed.

   {
    'AckslD/nvim-trevJ.lua',
    config = 'require("trevj").setup()',
    init = function()
      vim.keymap.set('n', '<leader>j', function()
        require('trevj').format_at_cursor()
      end)
    end,
  }, -- This plugin provides a way to format JSON files in Neovim.
}

lvim.builtin.telescope.on_config_done = function(telescope)
  pcall(telescope.load_extension, "frecency")
end
