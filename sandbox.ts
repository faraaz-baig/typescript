//explicit types
let character: string
let age: number
let isLoggedIn: boolean



//arrays
let ninjas: string[] =[]

ninjas = ['yoshi', 'faraaz']
ninjas.push('ayman')
ninjas.pop()

// union types

let mixed: (string|number|boolean)[] =[]
mixed.push(20)
mixed.push(false)
mixed.push('faraaz')
console.log(mixed)

let uid: string|number|boolean

// objects

let ninjaOne: object
ninjaOne = { name: 'yoshi', age: 30 }


let ninjaTwo: {
    name: string,
    age: number,
    belt: string
}