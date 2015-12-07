var cm = require('sdk/context-menu')

var lennies = ['( ͡° ͜ʖ ͡°)', '¯\\_(ツ)_/¯', 'ಠ_ಠ']

var items = []
lennies.forEach(function (lenny) {
  var item = cm.Item({
    label: lenny,
    data: lenny
  })
  items.push(item)
})

cm.Menu({
  label: '( ͡° ͜ʖ ͡°)',
  context: cm.SelectorContext('input, textarea, [contentEditable]'),
  contentScriptFile: './context.js',
  items: items
})
