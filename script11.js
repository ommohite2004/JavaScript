let x = 10
console.log(x)


// array 
 
let numbers = [11, 22, 33, 44, 55]
let cities = ["nagpur","pune","chennai","kolkata"]
let canDrive = [true, false, true, false]
let info = ["om", "bhagwan", "mohite", 7709449617]


// program 1
//                0         1          2           3
let country = ["india","pakistan","srilanka","bangladesh"]
console.log(country[0])
console.log(country[3])
 
// object --- properties and method
// Array  --- obkect  ---- properties and method

// program 2
//               0        1       2       3
let fruits = ["apple","banana","mango","chiku"]
let a = fruits.length
console.log(a)
console.log(typeof a)

// for loop
//                   0         1          2           3
let vegetables = ["tomato","potato","cauliflower","brinjal"]
for(let i = 0 ; i < vegetables.length ; i++){
    //console.log(i)
    console.log(vegetables[i])
}


let fruits2 = ["apple","banana","chiku","papai"]
for(let i = 0 ; i < fruits2.length ; i++){
    //console.log(i)
    console.log(fruits2[i])
}

for(let i = fruits2.length -1 ; i >=0 ; i--){
    //console.log(i)
    console.log(fruits2[i])
}

let i1 = 0
while(i1 < fruits2.length){
    //console.log(i1)
    console.log(fruits2[i1])
    i1 = i1 +1
}

let i2 = fruits2.length -1
while(i2 >= 0){
    console.log(i2)
    console.log(fruits2[i2])
    i2 = i2 -1
}

let marks = [11, 22 , 33, 44, 55]

let i3 = 0
while(i3 < marks.length){
    //console.log(i3)
    console.log(marks[i3])
    i3 = i3 +1
}

let i4 = marks.length -1
while(i4 >= 0){
    //console.log(i4)
    console.log(marks[i4])
    i4 = i4 -1
}





