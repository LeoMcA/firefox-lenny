var cm = require('sdk/context-menu')

cm.Item({
  label: '( ͡° ͜ʖ ͡°)',
  context: cm.SelectorContext('input, textarea, [contentEditable]'),
  contentScriptFile: './context.js'
})
