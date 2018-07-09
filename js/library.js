let addClass = (id, klass) => {
    let klas = document.getElementById(id).getAttribute('class').concat(" ").concat(klass)
    return document.getElementById(id).className = klas;
}
let removeClass = (id, klass) => {
    let klas = document.getElementById(id).getAttribute('class').replace(klass, '')
    return document.getElementById(id).className = klas;
}

let addKlass = (id, klass) => document.getElementById(id).className += "".concat(klass);   
let innerHtml = (id, value) => document.getElementById(id).innerHTML = value;
let getValue = id => document.getElementById(id).value
let setValue = (id, value) => document.getElementById(id).value = value;
let create = tag => document.createElement(tag)
let createText = val => document.createTextNode(val)
let pushIn = (parent, child) => parent.appendChild(child)
let pushTo = (id, child) => document.getElementById(id).appendChild(child)
let setClass = (tag, klass) => tag.className = klass;
let getItemByClass = klass => document.getElementsByClassName(klass)
let getItemByTag = tag => document.getElementsByTagName(tag)
let getItem = tag => document.querySelector(tag)

let setText = (tag, val, i) => getItemByTag(tag)[i].innerText = val;    
