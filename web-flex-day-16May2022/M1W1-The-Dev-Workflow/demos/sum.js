// I want to take node arguments
// ( they have to be numbers )
// and then I want to add each number and return the sum
// I want to ignore anything thats not a whole number

// take node arguments (WELL WHAT IS THAT???!?!)
// how do i check if number??
// might use an array?
// use a loop
// how to check if its a whole number???

// Write a node program that takes in an unlimited number 
// of command line arguments, goes through each and prints out the sum of them. 
// If any argument is not a whole number, skip it. Do support negative numbers though.

// create function
// name

let myArgs = process.argv.slice(2)

// 1 == "1" //true
// 1 === "1" //false

// slice first 2 indeces
// console.log(myArgs)

// grab data type
// add the numbers

//  c style for loop - access to index
//  for of loop - acces to index

// for(let i = 0: )
// let sumCount = 0
// for (let item of myArgs){
//     // converted to int
//     let convertedNum = parseInt(item)
//     // console.log(convertedNum)
//     sumCount += convertedNum
//     // console.log(typeof Number(item))
// }

// console.log(sumCount)

function sum(mycomArgs){
    let sumCount = 0
    for (let item of mycomArgs){
        let convertedNum = parseInt(item)
        // console.log(typeof item)
        sumCount += convertedNum
    }
    return sumCount
}

let result = sum(myArgs)

console.log(result)

// reduce

// DO NOT DO THIS!!! THIS IS TOO MUCH TO REFACTOR AFTER OR EDIT !!!!!!! BAAAAAAAAAAAAAAAAAD!!!!
// const sumArray = arr => arr.map(e => Number(e)).reduce((total, num) => Number(num) % 1 === 0 ? total += Number(num) : total += 0);
