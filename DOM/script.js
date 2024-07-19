//<h2 id = "two" class = "three" name = "four">Learning</h2>

// selecting the element

let byTagName = document.querySelector('h2')
console.log(byTagName)

let byclassName = document.querySelector('.three')
console.log(byclassName)

let byId = document.querySelector('#two')
console.log(byId)

// tagName[attr='val']
let byAttr = document.querySelector(h2['name ="four"'])
console.log(byAttr)