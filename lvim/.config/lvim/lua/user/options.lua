local options = {
  termguicolors = true
}
vim.opt.cursorcolumn = false -- This sets the 'cursorcolumn' option to true, which enables highlighting of the current cursor column.
vim.opt.relativenumber = true -- This sets the 'relativenumber' option to true, which displays line numbers relative to the current line.
vim.opt.showcmd = true -- This sets the 'showcmd' option to true, which displays incomplete commands on the last line of the screen.
vim.g["VM_mouse_mappings"] = 1 -- This enables mouse support for the Visual Multi plugin.
vim.opt.shell = "/bin/zsh" -- sets the shell for the terminal emulator to Zsh.
vim.o.linebreak = true -- enables line wrapping at specified characters instead of breaking words in text with spaces.
vim.o.wrap = false -- disables automatic line wrapping
vim.o.sessionoptions = "blank,buffers,curdir,folds,help,tabpages,winsize,winpos,terminal,localoptions" -- configures what should be saved in the session file when the editor is closed.

lvim.log.level = "warn" -- This sets the log level to 'warn', which will only display warning messages or higher.
lvim.format_on_save.enabled = false -- This disables automatic formatting of code on save.
lvim.colorscheme = "dracula" -- This sets the color scheme.
lvim.builtin.terminal.direction = "horizontal" -- This sets the direction of the built-in terminal window to be horizontal.
lvim.lsp.diagnostics.virtual_text = false -- This disables virtual text for LSP diagnostics.
lvim.builtin.treesitter.ensure_installed = {
  "bash",
  "c",
  "javascript",
  "json",
  "lua",
  "python",
  "typescript",
  "tsx",
  "css",
  "rust",
  "java",
  "yaml",
} -- specifies the list of languages that should have their syntax highlighting enabled.

lvim.builtin.treesitter.highlight.enabled = true -- enables syntax highlighting using Treesitter.
lvim.builtin.project.detection_methods = { "lsp", "pattern" } -- specifies the methods that will be used to detect the project root. In this case, both LSP (Language Server Protocol) and pattern-based detection are enabled.
lvim.builtin.project.patterns = {
  ".git",
  "package-lock.json",
  "yarn.lock",
  "package.json",
  "requirements.txt",
} -- specifies the file patterns that should be considered when detecting the project root.

lvim.builtin.telescope.defaults.path_display = {
  shorten = 4,
} -- sets the display format for paths in Telescope, a built-in plugin for searching files and other resources.
