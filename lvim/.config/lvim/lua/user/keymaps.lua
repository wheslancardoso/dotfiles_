vim.leader = "space"
--lvim.keys.insert_mode["jk"] = "<Esc>"

-- Map Ctrl + s on normal and insert mode
lvim.keys.normal_mode["<C-s>"] = ":update<cr>"
lvim.keys.insert_mode["<C-s>"] = "<Esc>:update<CR>"
lvim.keys.visual_mode["<C-s>"] = "<Esc>:update<CR>v"
lvim.keys.normal_mode["<C-z>"] = ":undo<cr>"
