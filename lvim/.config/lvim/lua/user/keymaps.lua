local kind = require('user.kind')
--lvim.keys.insert_mode["jk"] = "<Esc>"
-- local opts = { noremap = true, silent = true }
-- local map = lvim.keys
-- -- Map Ctrl + s on normal and insert mode
-- lvim.keys.normal_mode["<C-s>"] = ":update<cr>"
-- lvim.keys.insert_mode["<C-s>"] = "<Esc>:update<CR>"
-- lvim.keys.visual_mode["<C-s>"] = "<Esc>:update<CR>v"
-- lvim.keys.normal_mode["<C-z>"] = ":undo<cr>"
--lvim.keys.normal_mode["jk"] = "<Esc>:"

lvim.keys.normal_mode["<C-s>"] = ":w!<cr>"
lvim.keys.normal_mode["<S-l>"] = ":BufferLineCycleNext<CR>"
lvim.keys.normal_mode["<S-h>"] = ":BufferLineCyclePrev<CR>"

lvim.keys.normal_mode["<S-x>"] = ":BufferKill<CR>"
lvim.keys.normal_mode["<C-d>"] = "<C-d>zz"
lvim.keys.normal_mode["<C-u>"] = "<C-u>zz"
lvim.keys.normal_mode["<C-a>"] = "ggVG"

-- lvim.keys.normal_mode["<leader>nh"] = ":nohl<CR>" -- This command clears any highlighting of previous search matches in the editor by turning off the "hlsearch" option.

-- Remap "p" in visual mode to delete the selected text and paste from the unnamed register (equivalent to "_dP)
lvim.keys.visual_mode["p"] = {"\"_dP", opts}

-- Remove the Ctrl-\ for the terminal
lvim.builtin.terminal.open_mapping = "<c-t>"
-- Enable the use of C-l to clean the terminal
lvim.keys.term_mode = { ["<C-l>"] = false }


vim.keymap.set('n', 'gn', ":tabe %<CR>")
lvim.lsp.buffer_mappings.normal_mode["gr"] = {
  ":lua require'telescope.builtin'.lsp_references()<cr>",
  kind.cmp_kind.Reference .. " Find references"
}

lvim.lsp.buffer_mappings.normal_mode["gd"] = {
  ":lua vim.lsp.buf.definition()<cr>",
  -- ":lua require'telescope.builtin'.lsp_definitions()<cr>",
  kind.cmp_kind.Reference .. " Definitions"
}

lvim.lsp.buffer_mappings.normal_mode["gD"] = {
  ":lua vim.lsp.buf.type_definition()<cr>",
  kind.cmp_kind.Reference .. " Type Definition"
}

lvim.lsp.buffer_mappings.normal_mode["gf"] = {
  ":Telescope frecency<cr>",
  kind.cmp_kind.Reference .. " Telescope Frecency"
}
