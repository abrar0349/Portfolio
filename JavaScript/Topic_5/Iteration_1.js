// Loop mean reduce the repitation. There have some kind of loop for, while,  do while, For-of For-in and Infinite Loop. 

// for(let i = 0; i <= 10; i++){
//     const element = i;
//     if(element == 5){
//         console.log('Now condition is meet',element)
//         continue
//     }
//     console.log(element)
// }

// let i = 0;

// while(i <= 10){
//     console.log(`That is outer loop ${i}`)
//     i++
//     for(let j = 0; j <= 10; j++){
//         console.log(`That is inner loop i is ${i} and j is${j}`)
//     }
// }

let arr = ["khan",'pakistan','TajMir']
 
let i = 0;
while(i <= arr.length -1){
    console.log('outer',arr[i])
    i++
    let j = 0;
    while(j <= arr.length -1){
        console.log(arr[j])
        j++
    }
}

// There is also come concept continous and break continous take a value and left other values and break detect the value and stop the condition