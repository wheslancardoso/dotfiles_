--lvim.keys.insert_mode["jk"] = "<Esc>"
local opts = { noremap = true, silent = true }
local map = lvim.keys
-- Map Ctrl + s on normal and insert mode
lvim.keys.normal_mode["<C-s>"] = ":update<cr>"
lvim.keys.insert_mode["<C-s>"] = "<Esc>:update<CR>"
lvim.keys.visual_mode["<C-s>"] = "<Esc>:update<CR>v"
lvim.keys.normal_mode["<C-z>"] = ":undo<cr>"
--lvim.keys.normal_mode["jk"] = "<Esc>:"
lvim.keys.normal_mode["<leader>nh"] = ":nohl<CR>" -- This command clears any highlighting of previous search matches in the editor by turning off the "hlsearch" option.

-- Remap "p" in visual mode to delete the selected text and paste from the unnamed register (equivalent to "_dP)
map.visual_mode["p"] = {"\"_dP", opts}

-- Remove the Ctrl-\ for the terminal
lvim.builtin.terminal.open_mapping = "<c-t>"
-- Enable the use of C-l to clean the terminal
lvim.keys.term_mode = { ["<C-l>"] = false }
