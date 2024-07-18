// array
//let x = 10
//console.log(x)

// array

let numbers = [11,22,33,44,55]
let cities = ["nagpur","pune","chennai","kolkata"]
let canDrive = [true, false, true, false] 
let info = ["om","bhagwan","mohite",7709449617]


// program 1
//               0        1         2         3
let fruits = ["apple", "mango", "banana", "orange"]
let a = fruits.length
console.log(a)
console.log(typeof a)
console.log(fruits[3])
console.log(fruits[1])


// program 2
//                0       1            2          3
let country = ["india","pakistan","srilanka","bangladesh"]
let b = country.length
console.log(b)
console.log(typeof b)
console.log(country[0])
console.log(country[3])
console.log(country[2])


// for loop
//                   0         1         2           3
let vegetables = ["tamato","potato","cauliflower","brinjal"]
for(let i = 0 ; i < 4 ; i++){
    //console.log(vegetables[i])
    console.log(i)
}

//               0       1        2       3        4
let flowers = ["rose","lily","jasmine","lotus","marrygold"]
for(let i = 0 ; i < flowers.length ; i++){
   // console.log(i)
   console.log(flowers[i])
}

// reverse with for loop
// length -1 is always the last index
//                 0      1       2        3        4
let flowers2 = ["rose","lily","jasmine","lotus","marrygold"]

for(let i = flowers2.length - 1 ; i >= 0 ; i--){
    //console.log(i)
    console.log(flowers2[i])
}

// program 3 
// while loop
//            0   1   2   3   4   5
let marks = [11, 22, 33, 44, 55, 66]

let i1 = 0
while(i1 <= 5){
    //console.log(i1)
    //console.log(marks[i1])
    i1 = i1 +1
}

// reverse with while loop
let i2 = 5
while(i2 >= 0){
    //console.log(i2)
    console.log(marks[i2])
    i2 = i2 -1
}















