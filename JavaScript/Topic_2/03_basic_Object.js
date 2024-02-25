// singleton object which I isn't study yet

// object literals is starting from here

const Sym = Symbol('Hi')

const obj1 = {
    name : 'khan',
    fullName : 'Abrar khan',
    [Sym] : 'keySym',
    age : 24,
    location : 'Karachi',
    isLoggedIn : false
}

// console.log(obj1.name)
// console.log(obj1['fullName'])
// console.log(obj1[Sym])

// obj1.location = 'Lahore';
// console.log(obj1)

Object.freeze(obj1);
obj1.isLoggedIn = true;
// console.log(obj1)

// Following code is working on browser Envirment

obj1.greeting = function(){
    console.log('Hello bro')
}

obj1.greeting2 = function(){
    console.log(`Hello ${this.fullName}`)
}

// obj1.greeting()
obj1.greeting2()