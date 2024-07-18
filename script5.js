// ternary operator

// expression?StatementOne:Statement2

// a > b ? console.log("a is greater") : console.log("b is greater")

// let age = 17
// let e = age >= 18 ? "candrive" : "cannot drive"
// console.log(e)

// switch without break statement

// let city = "pune"

// switch(city){
//     case "pune":
//         console.log("MH")
//     case "jaipur":
//         console.log("RJ")
//     case "indore":
//         console.log("MP")
//     default:
//         console.log("Incorrect city name")
// }

// let city2 = "Jaipur"

// switch(city2){
//     case "pune":
//         console.log("MH")
//         break
//     case "jaipur":
//         console.log("RJ")
//         break
//     case "indore":
//         console.log("MP")
//         break
//     default:
//         console.log("Incorrect city2 name")
// }

// switch multiple case

// let city3 = "udaypur"
// switch(city3){
//     case "pune":
//     case "satara":
//         console.log("MH")
//         break
//     case "jaipur":
//     case "udaypur":
//         console.log("RJ")
//         break
//     case "indore":
//     case "bhopal":
//         console.log("MP")
//         break
//     default:
//         console.log("Incorrect city3 name")
// }

let x1 = 100
let x2 = 80
let x3 = 40
let biggest = true

switch (biggest){

    case x1 > x2 && x1 > x3:
        console.log("x1 is greater")
        break
    case x2 > x1 && x2 > x3:
        console.log("x2 is greater")
        break
    default:
        console.log("x3 is greater")
}