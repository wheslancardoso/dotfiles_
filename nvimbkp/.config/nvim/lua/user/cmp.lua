local cmp_status_ok, cmp = pcall(require, "cmp")
if not cmp_status_ok then
  return
end

local snip_status_ok, luasnip = pcall(require, "luasnip")
if not snip_status_ok then
  return
end

require("luasnip/loaders/from_vscode").lazy_load() -- carrega snippets do VSCode para o luasnip. Ele permite que você use os mesmos snippets que você tinha no VSCode no Neovim com o plugin luasnip.

local check_backspace = function()
  local col = vim.fn.col "." - 1
  return col == 0 or vim.fn.getline("."):sub(col, col):match "%s"
end

--   פּ ﯟ   some other good icons
local kind_icons = {
  Text = "󰊄",
  Method = "m",
  Function = "󰊕",
  Constructor = "",
  Field = "",
  Variable = "󰫧",
  Class = "",
  Interface = "",
  Module = "",
  Property = "",
  Unit = "",
  Value = "",
  Enum = "",
  Keyword = "󰌆",
  Snippet = "",
  Color = "",
  File = "",
  Reference = "",
  Folder = "",
  EnumMember = "",
  Constant = "",
  Struct = "",
  Event = "",
  Operator = "",
  TypeParameter = "󰉺",
}
-- find more here: https://www.nerdfonts.com/cheat-sheet

-- Configura o comportamento do nvim-cmp no Neovim com várias opções. Vamos explicar algumas configurações específicas:
-- snippet.expand: Define como expandir os snippets ao pressionar a tecla de tabulação <Tab> durante a edição. Neste caso, os snippets do luasnip serão expandidos.
-- mapping: Mapeia teclas específicas para ações de autocompletar e navegação na interface de autocompletar.
-- formatting: Define o formato de exibição dos itens de conclusão na interface de autocompletar, incluindo os ícones do kind_icons mencionados anteriormente.
-- sources: Especifica as fontes de onde os itens de conclusão serão obtidos. Neste caso, ele usa o luasnip, os buffers e os caminhos do projeto.
cmp.setup {
  snippet = {
    expand = function(args)
      luasnip.lsp_expand(args.body) -- For `luasnip` users.
    end,
  },
  mapping = {
    ["<C-k>"] = cmp.mapping.select_prev_item(), -- Navegam entre os itens de conclusão na interface de autocompletar.
		["<C-j>"] = cmp.mapping.select_next_item(),
    ["<C-b>"] = cmp.mapping(cmp.mapping.scroll_docs(-1), { "i", "c" }), --  Rolam a lista de itens de conclusão para cima e para baixo na interface de autocompletar.
    ["<C-f>"] = cmp.mapping(cmp.mapping.scroll_docs(1), { "i", "c" }),
    ["<C-Space>"] = cmp.mapping(cmp.mapping.complete(), { "i", "c" }), -- <C-Space>: Aciona a interface de autocompletar.
    ["<C-y>"] = cmp.config.disable, -- Specify `cmp.config.disable` if you want to remove the default `<C-y>` mapping.
    ["<C-e>"] = cmp.mapping { -- Cancela a seleção de um item de conclusão.
      i = cmp.mapping.abort(),
      c = cmp.mapping.close(),
    },
    -- Accept currently selected item. If none selected, `select` first item.
    -- Set `select` to `false` to only confirm explicitly selected items.
    -- Em modo de inserção, navega para trás entre os itens de conclusão ou salta para a posição de expansão de um snippet do luasnip se disponível.
    ["<CR>"] = cmp.mapping.confirm { select = true }, 
    -- Em modo de inserção, navega para trás entre os itens de conclusão ou salta para a posição de expansão de um snippet do luasnip se disponível.
    ["<Tab>"] = cmp.mapping(function(fallback) 
      if cmp.visible() then
        cmp.select_next_item()
      elseif luasnip.expandable() then
        luasnip.expand()
      elseif luasnip.expand_or_jumpable() then
        luasnip.expand_or_jump()
      elseif check_backspace() then
        fallback()
      else
        fallback()
      end
    end, {
      "i",
      "s",
    }),
    -- Em modo de inserção, navega para trás entre os itens de conclusão ou salta para a posição de expansão de um snippet do luasnip se disponível.
    ["<S-Tab>"] = cmp.mapping(function(fallback)
      if cmp.visible() then
        cmp.select_prev_item()
      elseif luasnip.jumpable(-1) then
        luasnip.jump(-1)
      else
        fallback()
      end
    end, {
      "i",
      "s",
    }),
  },
  -- Define o formato de exibição dos itens de conclusão na interface de autocompletar. Aqui, é usado o kind_icons para associar um ícone ao tipo de item de conclusão.
  formatting = {
    fields = { "kind", "abbr", "menu" },
    format = function(entry, vim_item)
      -- Kind icons
      vim_item.kind = string.format("%s", kind_icons[vim_item.kind])
      -- vim_item.kind = string.format('%s %s', kind_icons[vim_item.kind], vim_item.kind) -- This concatonates the icons with the name of the item kind
      vim_item.menu = ({
        luasnip = "[Snippet]",
        buffer = "[Buffer]",
        path = "[Path]",
      })[entry.source.name]
      return vim_item
    end,
  },
  -- Define as fontes de onde os itens de conclusão serão obtidos. Neste caso, são usados os itens do luasnip, buffers e caminhos do projeto.
  sources = {
    { name = "nvim_lsp"},
    { name = "nvim_lua"},
    { name = "luasnip" },
    { name = "buffer" },
    { name = "path" },
  },
  confirm_opts = {
    behavior = cmp.ConfirmBehavior.Replace,
    select = false,
  },
  window = {
    documentation = cmp.config.window.bordered(),
  },
  experimental = {
    ghost_text = false,
    native_menu = false,
  },
}
