var cm = require('sdk/context-menu')

var lennys = ['( ͡° ͜ʖ ͡°)', '¯\\_(ツ)_/¯']

var items = []
lennys.forEach(function (lenny) {
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
