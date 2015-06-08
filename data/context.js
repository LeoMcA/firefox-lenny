self.on('click', function (node) {
  console.error('( ͡° ͜ʖ ͡°)')
  if (node.hasAttribute('contentEditable')) {
    node.insertAdjacentHTML('beforeend', '( ͡° ͜ʖ ͡°)')
  } else {
    insertText(node, '( ͡° ͜ʖ ͡°)')
  }
})

// Thanks https://developer.mozilla.org/en-US/Add-ons/Code_snippets/Miscellaneous#Inserting_text_at_the_cursor
function insertText (element, snippet) {
  var selectionEnd = element.selectionStart + snippet.length
  var currentValue = element.value

  var beforeText = currentValue.substring(0, element.selectionStart)
  var afterText = currentValue.substring(element.selectionEnd, currentValue.length)

  element.value = beforeText + snippet + afterText
  element.focus()

  //put the cursor after the inserted text
  element.setSelectionRange(selectionEnd, selectionEnd)
}