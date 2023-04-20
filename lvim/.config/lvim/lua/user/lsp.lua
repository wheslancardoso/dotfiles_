local lvim_lsp = require('lvim.lsp') -- This loads the LunarVim LSP module.
local ts = require('typescript') -- This loads the typescript module.

-- This line sets a variable to the formatters module of the null-ls plugin, which is used to format code.
local formatters = require "lvim.lsp.null-ls.formatters"
formatters.setup({
  {
    command = "prettierd",
    filetypes = {
      "javascript",
      "javascriptreact",
      "typescript",
      "typescriptreact",
      "vue",
      "css",
      "scss",
      "less",
      "html",
      "yaml",
      "markdown",
      "markdown.mdx",
      "graphql",
      "handlebars",
      "json",
    }
  },
})


local linters = require "lvim.lsp.null-ls.linters" -- This line sets a variable to the linters module of the null-ls plugin, which is used for linting code.
linters.setup({
  {
    command = "eslint_d",
    filetypes = { "javascript", "typescript", "typescriptreact", "json" }
  },
}) -- This sets up the eslint_d linter for various filetypes.
