// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

/* Pseudocode: For the test we invoke the describe/it method with secretCode as the argument. In plain words we explain what the function does, takes the given string and returns a coded message in a string. We then provide an argument for the function to call on. Using toEqual we then chain it with the expected output. 
 */

describe("secretCode", () => {
    it("Takes the given string and returns a coded message in a string.", () => {
        expect(secretCode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(secretCode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(secretCode(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// b) Create the function that makes the test pass.
/*Pseudocode: Create a function called secretCode that takes in a string as its argument. We then create a variable word1 thats gonna equal the string and use .replace to replace the given words to the given numbers within the string(remember to also include the capital E for the 3d word) . 
*/

const secretCode = (string) => {
    var word1 = string.replace(/a/g, 4).replace(/e/g, 3).replace(/i/g, 1).replace(/o/g, 0).replace(/E/g, 3)
        return word1
}    


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

/* Pseudocode: For the test we invoke the describe/it method with letterContainer as the argument. In plain words we explain what the function does, takes in an array of words and returns and array of words containing the particular letter. We then provide an argument for the function to call on. Using toEqual we then chain it with the expected output with the array containing elements from the original array.
 */ 

describe("letterContainer", () => {
    it("takes in an array of words and returns and array of words containing the particular letter.", () => {
    expect(letterContainer(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
    expect(letterContainer(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})


// b) Create the function that makes the test pass.

/*Pseudocode: create a high order function named letterContainer that takes in array and letter as its arguments. We then return the array with .filter to filter the words that include a or e. Since every word is capitalized we use .includes twice, one regular and the other one with .toUpperCase, divided by the OR boolean.*/

const letterContainer = (array, letter) => {
    return array.filter(value => value.includes(letter) || value.includes(letter.toUpperCase()))
}


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

/* Pseudocode: For the test we invoke the describe/it method with secretCode as the argument. In plain words we explain what the function does, it takes in an array of 5 numbers and determines wether its a full house. We then provide an argument for the function to call on. Using toEqual we then chain it with the expected output to be a boolean. 
 */

describe("fullHouse", () => {
    it("takes in an array of 5 numbers and determines wether its a full house", () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)
    })
})

// // b) Create the function that makes the test pass.
/*Pseudocode: We create a function called fullHouse. Using .sort we sort the array in ascending order. We then run a for loop and set the condition to true if the first three numbers are equal and the last 2 numbers are equal. We also do an else if for the first 2 numbers to be equal and the last 3 numbers to be equal. If these two conditions do not meet then we do an else and return false. Thank you for not including suits. 
 */

const fullHouse = ( array ) => {
    let check = array.sort()
    for (let i = 0;i < check.length; i++){
        if(check[0] === check[1] && check[1] === check[2] && check[3] === check[4]){
            return true
        }else if(check[0] === check[1] && check[2] === check[3] && check[2] === check[4]){
            return true
        }else 
        return false
    }
}

