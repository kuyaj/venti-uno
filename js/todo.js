

var nodelist = getItemByTag('li')
for (var i in nodelist) {
  var span = create('span')
  setClass(span, 'close')
  pushIn(span, createText("\u00D7"))
  pushIn(nodelist[i], span)
}

// Create a new list item when clicking on the "Add" button
function addTodo() {
  var li = create('li') 
  getValue('item') === '' ? console.log("write something") :  pushTo('list', li)
  pushIn(li, createText(getValue('item')))  
  setValue('item', '')
  
  var span = create('span')
  setClass(span, "close")
  pushIn(span, createText("\u00D7"))
  pushIn(li, span)
  
  var close = getItemByClass('close')
  for (var i in close) {
    close[i].addEventListener('click', function() { this.parentElement.style.display = "none"})
   }
 
}


