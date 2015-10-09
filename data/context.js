/* global self */

self.on('click', function (node, lenny) {
  if (node.hasAttribute('contentEditable')) {
    if (node.classList.contains('composer_rich_textarea')) { // telegram
      node.insertAdjacentHTML('beforeend', lenny)
    }
  } else {
    insertText(node, lenny)
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

  // put the cursor after the inserted text
  element.setSelectionRange(selectionEnd, selectionEnd)
}
