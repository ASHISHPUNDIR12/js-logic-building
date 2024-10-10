
// Q1 --Write a function that checks whether a given number is even or odd.
// const evenOddChecker = (num)=>{
//     return num%2===0? console.log("even"): console.log("odd") ; 
// }

// evenOddChecker(6)
// q2 -- Write a function to compute the factorial of a number.
// const factorial = (n)=>{
//   if (n==1 || n==0) {return 1 ; }
//   else  return n * factorial(n-1)
    
// }
// console.log(factorial(5))

// q3 - Write a function that checks whether a string is a palindrome.

// const palidromeCheck = (str )=>{
//    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '') ; 
//    return cleanStr === cleanStr.split('').reverse().join(''); 

// }
// console.log(palidromeCheck("racecar"))


// q4 -- Write a function to generate the first N numbers of the Fibonacci sequence.


// function generateFibonacci(n) {

//     const fibSequence = [0, 1];

//     for (let i = 2; i < n; i++) {
//       fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
//     }
  
//     return fibSequence.slice(0, n);
//   }


// console.log(  generateFibonacci(9))


// Write a function to reverse a given string.

// const reverseString = (str)=>{
//   const StringArr = str.split('')
//   const reversearr = StringArr.reverse(); 
//   const reverseString = reversearr.join('')
//   return reverseString


// }

// console.log(reverseString("ashish"))




// q7 - // Write a function that takes an array of numbers and returns the sum of all elements.
// const sumOfArrelement = (arr)=>{
//   let sum = 0 ;
//   for( let i = 0 ; i<arr.length ; i++ ){
//     sum = sum + arr[i]
//   }
//   return sum ; 

// }
// const arr = [1, 2 ,3 ,4 , 5]
// console.log(sumOfArrelement(arr))

// Write a function that finds the maximum element in an array.

// const maxminumElement = (arr)=>{
//  let maxelem = arr[0]
//  for( let i = 0 ; i<arr.length ; i++){
//   if(arr[i]>maxelem){
//     maxelem = arr[i]

//   }
//  }
//  return maxelem ; 

// }
// const arr = [1, 2 ,3 ,4 ,8 , 5]
// console.log(maxminumElement(arr))


// Write a function that calculates the average of numbers in an array.

const avgOfArr = (arr)=>{
  let sum = 0 ; 
  for(let i = 0 ; i<arr.length ; i++){
    sum+=arr[i];
  }

  const  avg = sum/arr.length ;
  return avg.toFixed(2) 

}
const arr = [1, 2 ,3 ,4 ,8 , 5]
console.log(avgOfArr(arr)) ;