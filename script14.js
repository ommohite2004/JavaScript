// join()
let info = ["om","mohite",7709449617]
let a = info.join("-")
console.log(a)
let b = info.join("@")
console.log(b)

//concat()
let numbers = [11,22,33,44,55]
let numbersB = [66,77,88,99,100]
let c = numbers.concat(numbersB)
console.log(c)

//slice()
//             0    1      2     3      4        5
let names = ["om","sai","ram","sham","saish","sahil"]
//           -6    -5    -4      -3     -2     -1

let d = names.slice(1,4)
console.log(d)
console.log(names.slice(0,3))
console.log(names.slice(-5,-2))
console.log(names.slice(-1,-5))

//splice()
//                0         1           2           3
let countries = ["india","pakistan","bangladesh","shrilanka"]

countries.splice(3)
console.log(countries)

countries.splice(2,3,"chin","japan")
console.log(countries)

//flat()
//                     0                  1                    2
//               0         1         0         1          0          1
let state = [["nagpur","mumbai"],["kanpur","lucknow"],["jaipur","udaipur"]]
console.log(state[0])
console.log(state[2][1])
console.log(state[0][1])
console.log(state[1][1])

// indexof // at
//               0  1  2  3
let numbers1 = [11,22,33,44]
console.log(numbers1.at(2))
console.log(numbers1.indexOf(44))
console.log(numbers1.indexOf(66))

//reverse()
let countries5 = ["india","pakistan","bangladesh","shrilanka"]
console.log(countries5.reverse())

//sort()
console.log(countries5.sort())

//fill() 
//               0  1  2  3  4  5  6  7  8  9
let numbers2 = [11,22,33,44,55,66,77,88,99,100]
let h = numbers2.fill(undefined,1,6)
console.log(h)
let j = numbers2.fill(undefined,1,8)
console.log(j)






