for(let i = 1 ; i <= 5 ; i++){ // 1 // 2
    if(i == 3){
        break
    }
    console.log(i) // 2 // 3
}

for(let i = 1 ; i <= 5 ; i++){
    console.log(i)
    if(i == 3){
        break
    }
}


let i1 = 1
while(i1 <= 5){
    if(i1 == 3){
        break
    }
    console.log(i1)
    i1 = i1 +1
}

let i2 = 1 
while(i2 <= 5){
    console.log(i2)
    if(i2 == 3){
        break
    }
    i2 = i2 +1
}

for(let i = 1 ; i <= 5 ; i++){
    if(i == 3){
        continue
    }
    console.log(i)
}

for(let i = 5 ; i >= 1 ; i--){
    if(i == 3){
        break
    }
    console.log(i)
}

for(let i = 5 ; i >= 1 ; i--){
    console.log(i)
    if(i == 3){
        break
    }
}

let i3 = 5
while(i3 >= 1){
    if(i3 == 3){
        break
    }
    console.log(i3)
    i3 = i3 -1
}

let i4 = 5
while(i4 >= 1){
    console.log(i4)
    if(i4 == 3){
        break
    }
    i4 = i4 -1
}

let i5 = 1
while(i5 <= 5){
    if(i5 == 3){
        i5 ++
        continue
    }
    console.log(i5)
    i5 = i5 +1
}

for(let i = 5 ; i >= 1 ; i--){
    if(i == 3){
        continue
    }
    console.log(i)
}

let i10 = 1
while(i10 <= 5){
    if(i10 == 3){
        i10 ++
        continue
    }
    console.log(i10)
    i10 = i10 +1
}









