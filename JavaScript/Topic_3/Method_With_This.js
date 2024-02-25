const first = {

    usrName : 'khan',

    WelComeSms(){
        console.log(`Welcome Mr.${this.usrName}`)
        console.log(this)
    }
}

// first.WelComeSms()
// console.log(first.usrName)

function khan(){
    let usrName = 'khan'
    console.log(this.usrName)
}

// khan()

const third = function(){
    let usrName = 'Abrar'
    console.log(usrName)
}

// third()

const four = () => {
    let usrName = 'khan sahab'
    console.log(this)
}
// four()

// const addTwoNo = (num1 , num2) => num1 + num2
// const addTwoNo = (num1 , num2) => (num1 + num2)
// const addTwoNo = (num1 , num2) => {key : 'value'}
// console.log(addTwoNo(25,50)) 
// let arr1 = [1,2,3,4,5]
// arr1.forEach( (itm) => {
//     console.log(itm)
// })