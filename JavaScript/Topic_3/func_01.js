function addTwoNo(first , two){

    let result = first + two;
    return result

    // Not running more code bottom of in return statement meant after return statement more code is not working.
}

let result = addTwoNo(1,2)
// console.log('Result is :',result )

function LogInFunc(userName){
    if(!userName){
        console.log("Please First Logged In")
    } else {
        console.log(`Welcome ${userName}`)
    }
}

// LogInFunc('Abrar khan')

function CardPrice(...val){  // Rest paramenters is used in function defination In my point of view
    console.log(typeof val)
    const newRes =  val.reduce( (prev , newVal) => {
        return prev + newVal
    })
    console.log(newRes)
}

// CardPrice(1,2,3,4,5)

const user = {
    username: "hitesh",
    prices: 199
}
function handleObj(anyObject){
    console.log(`UserName is ${anyObject.username}`)
}

// handleObj({username : 'Abrar khan'})

function ReturnArray(anyArray){
    return anyArray[1]
}

console.log(ReturnArray([0,1,2,3,4]))