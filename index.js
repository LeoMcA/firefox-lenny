var cm = require('sdk/context-menu')

cm.Menu({
  label: '( ͡° ͜ʖ ͡°)',
  context: cm.SelectorContext('input, textarea, [contentEditable]'),
  contentScriptFile: './context.js',
  items: [
    cm.Item({
      label: '( ͡° ͜ʖ ͡°)',
      data: '( ͡° ͜ʖ ͡°)'
    }),
    cm.Item({
      label: '¯\\_(ツ)_/¯',
      data: '¯\\_(ツ)_/¯'
    })
  ]
})
