// string
const my_string = "I am a string"
console.log(`mystring is a ${typeof my_string}`)

// number
const my_number = 35
console.log(`my_number is a ${typeof my_number}`)

// bigint
// const my_bigint = 1n
const my_bigint = BigInt(Number.MAX_SAFE_INTEGER)
console.log(`my_bigint is a ${typeof my_bigint}`)

// boolean
const my_bool = false
console.log(`my_bool is a ${typeof my_bool}`)


// symbol
const my_symbol = Symbol("lovej")
const my_symbol2 = Symbol("lovej")
console.log(`my_symbol is a ${typeof my_symbol}`)


console.log(my_symbol === my_symbol2) //false

// null
const my_null = null
console.log(`my_null is an ${typeof my_null}`)

// undefined
let my_undefined
console.log(`my_undefined is ${typeof my_undefined}`)