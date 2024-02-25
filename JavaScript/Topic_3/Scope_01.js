// We now that there have basically two type of scope Gloabal and Local Scope

function one(){
    let usrName = 'Hitsh Choudhary'

    function two(){
        let age = 35;
        console.log(usrName)
        console.log(age)
    }
    console.log(usrName)
    // console.log(age)
    two()
}
// one()

console.log(third(5))

function third(num){
    return num + 1;
}

