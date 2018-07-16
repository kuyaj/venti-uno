

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

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 500);
}

// window.onload = function () {
//     var fiveMinutes = 60 * 10,
//         display = document.querySelector('#time');
//     startTimer(fiveMinutes, display);
// };
