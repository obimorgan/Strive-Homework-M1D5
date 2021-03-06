/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
const area = function (l1, l2) {
    return l1 * l2
}

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function(num1,num2) {
    if (num1 !== num2) {
        return  num1 + num2
    } else {
        return (num1 + num2) * 3
    }
}
console.log(crazySum(1,2))
/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function(num) {
    if (num > 19) {
        return Maths.abs(num - 19) * 3
    } else {
        return Maths.abs(num - 19)
    }
}

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

const boundary = function (n) {
    if ((n > 20 && n <= 100) || n === 400) {
        return true
    } else {
        return false
    }
}
console.log(boundary(21))

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function (str) {
    if (str.startsWith("Strive")) {
        return str
    } else {
        return "Strive" + str
    }
}

console.log(strivify("lkjshfduih jhfjkdhf uihfhfuek hdippeh"))

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

const check3and7 = function (possitiveNumber) {
    if (possitiveNumber % 3 === 0 || possitiveNumber % 7 === 0) {
        return true
    }else {
        return false
    }
}
console.log(check3and7(-1))

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/
const reverseString = function(str) {
    let newString = ""
    for (i = str.length - 1; i >= 0; i--) {
        newString += str[i]
    }
    return newString
}  // I'm using the for loop to iterate the string in reverese.

    //However using this(from the solution) is more simplified:
   
    //const reverseString = function(str) {
    //  return str.split("").reverse("").join("") }

    

console.log(reverseString("hello Wrold"))


/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

// const upperFirst = function(str) {
//     let arrayString = str.split(" ")
//     for (i = 0; i < arrayString.length; i++) {
//         arrayString[i] = arrayString[i].charAt(0).toUpperCase() +arrayString[i].slice(1)
//         return arrayString.join(" ")
//     }
// }

const upperFirst = function(str) {
    let arrayStriing = str.split(" ")
    let newString = [ ]
    for (let i = 0; i < arrayStriing.length; i ++) {
        let capitalChar = arrayStriing[i].charAt(0).toUpperCase()
        let sliceChar = arrayStriing[i].slice()
        let resultChar = capitalChar + sliceChar
        newString.push(resultChar)
    }
    console.log(newString.join(" "))
}
console.log(upperFirst("hjkj hk abcdefg hhijklmnio zrstuvqx")) 

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

const cutString = function (str) {
    let newString = str.slice(1, -1) 
    return newString
}
console.log(cutString("abcd efg hijkl mnop qrstuv wxyz"))

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
const giveMeRandom = function (n) {
    let arr = []
    for (i = 0 ; i <= n; i++) {
        arr.push(Math.floor(Math.random() * 10)) // generates whole numbers to pushed into the array
    }
    return arr
}

console.log(giveMeRandom(6))



/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/