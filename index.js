


function calculateDifference(argument1, argument2){
    return argument1 - argument2;
}
let result = calculateDifference(100,70)
document.getElementById("calculateDifferenceAnswer").innerHTML = `<h3>The result is:  ${result} </h3>`


 function isOdd(number){
    if(number %2 ===0){
        return true
    }
    else {
        return false
    }
 }
let oddOrEven = isOdd(120)
document.getElementById("calculateOddOrEven").innerHTML = `<h3>The number is: ${oddOrEven} </h3>`



function findMin(array) {
    let min = array[0]
  for (let i = 1; i <=array.length; i++){
      if(array[i]<min){
          min = array[i]
          return min
      }
  }
}
let arrMin= [10,25,3,36,85];
let min =  findMin(arrMin)
document.getElementById("ArrayMinimum").innerHTML = `<h3>The minimum number is: ${min} </h3>`




function filterEvenNumbers(array) {
    let resultEvenNumbers = []
    for (let i = 0 ;i <array.length;i++){
        if(array[i] %2 === 0){
            resultEvenNumbers.push(array[i])

        }
    }
    return resultEvenNumbers
}
let arrEven= [10,20,33,40,55,98,5,2];
let even =  filterEvenNumbers(arrEven)

document.getElementById("filterEvenNumbers").innerHTML = `<h3>The Even Numbers are: ${even} </h3>`


function sortArrayDescending(array) {
    let descendingNumbers = []
    for (let i = 0 ;i <array.length;i++){
        let temp = array[i]
        descendingNumbers.push(temp)

    }
    return descendingNumbers
}
let sortArray= [10,20,33,40,55,98,5,2];
let sorted =  sortArrayDescending(sortArray)

document.getElementById("sortArrayDescending").innerHTML =
    `<h3>The numbers in a descending order are: ${sorted.sort(function(a, b){return b-a})} </h3>`




function lowercaseFirstLetter (char){
    return char[0].toLowerCase() + char.slice(1)

}
let theString = lowercaseFirstLetter ("MINHAZ")
document.getElementById("lowercaseFirstLetter").innerHTML = `<h3>The first letter in lowercase: ${theString} </h3>`




function countVowels (vowels){
    let count = 0;
    for (let i = 0;i<vowels.length;i++){
        if( vowels[i].toLowerCase() === 'a' || vowels[i].toLowerCase() === 'e' || vowels[i].toLowerCase() === 'i' ||
            vowels[i].toLowerCase()=== 'o' || vowels[i].toLowerCase() === 'u'){
            count++
        }
    }
    return count
}

let vowel = countVowels ("vowelArray")
document.getElementById("lowercaseFirstLetter").innerHTML = `<h3>The number of the vowel in the string: ${vowel} </h3>`




function findAverage(arr) {
    let sum = 0;
    for (let i = 0 ;i <arr.length;i++){
        sum = sum + arr[i];
    }
    let result = sum/arr.length
    return result
}
let arrAverage= [10,20,30,5,2.5,3.6];
let Avg =  findAverage(arrAverage)

document.getElementById("findAverage").innerHTML = `<h3>The Average is ${Avg} </h3>`


