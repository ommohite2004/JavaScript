let country = ["india", "pakistan", "bangladesh", "shrilanka"]
let e = country.length
console.log(e)
console.log(typeof e)
console.log(country[0])

let cities = ["pune", "sangamner", "nagpur", "nashik"]
for(let i = 0 ; i < cities.length ; i++){
    //console.log(i)
    console.log(cities[i])
}

let fruits = ["mango", "banana", "chiku", "apple"]
for(let i = 0 ; i < fruits.length ; i++){
    console.log(i)
    console.log(fruits[i])
}

let i1 = 0
while(i1 < fruits.length){
    //console.log(i1)
    console.log(fruits[i1])
    i1 = i1 +1
}


let i2 = fruits.length -1
while(i2 >= 0){
    //console.log(i2)
    console.log(fruits[i2])
    i2 = i2 -1
}

let marks = [11, 22, 33 , 44, 55]
for(let i = 0 ; i < marks.length ; i++){
    //console.log(i)
    console.log(marks[i])
}

let vegetables = ["potato", "tomato", "cauliflawer", "mirchi"]

for(let i = 0 ; i < vegetables.length ; i++){
    console.log(i)
    console.log(vegetables[i])
}

let cities2 = ["pune", "nagpur", "mumbai", "sangamer"]
let q1 = cities2.unshift("nashik")
console.log(cities2)
console.log(q1)

let names = ["om","sai","ram","saish"]
let q2 = names.push("devansh")
console.log(names)
console.log(q2)


let countrys = ["india","pakistan","shrialnka","bangladesh"]
let q3 = countrys.pop()
console.log(countrys)
console.log(q3)














