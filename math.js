
function myEvenNumbers(Array){
    let sum = 0;
 for(let i = 0; i < Array.length; i++){
    if(Array[i] % 2 === 0){
       sum += Array[i]
    }
}
 return sum
}
const Array=[1,2,3,4,5,6,7];
console.log(myEvenNumbers(Array));

function myOddNumbers(array){
    let sum = 0;
    for(let x = 0; x < array.length; x++){
        if(array[x] % 2 !== 0){
            sum += array[x];
        }
    }
    return sum
}
const array=[1,2,3,4,5,6,7];
console.log(myOddNumbers(array));

// let arr = ["boy", "man", "girl", "school", "girl", "woman"];
// let unique = [];
// let duplicates = [];

// for(let item of arr){
//     if(unique.includes(item)){
//         duplicates.push(item)
//     }else{
//         unique.push(item)
//     }
// }
// console.log({unique});
// console.log({duplicates});

// let array = ["Cow", "Boy", "Girl", "Girl"];
// function removeDuplicates(array){
//     return array.filter((value,index) => array.indexOf(value)===index)

// }console.log(removeDuplicates(array));

// // function getDuplicates(array){
// //     return array.filter((value,index) => array.indexOf(value)!==index)

// // }console.log(getDuplicates(array))

// // function reverseArr(array){
// // let left = 0
// // let right = array.length -1

// // while(left < right){
// //     [array[left], array[right]] = [array[right], array[left]]
// //     left++;
// //     right--;
// // }

// // return array

// // }
// // const original = [1,2,3,4];
// // console.log(reverseArr(original));

// // // function returnMinMax(arr){
// // //     if (arr.length===0)
// //         let min = max = arr[0];
    
// //     for(let num of arr){
// //         if (num < min) min = num;
// //         if (num > max) max = num;
// //     }
// //     return{ min, max }
// // }

// // const arr = ["Me", "You", "Us"];
// // console.log(returnMinMax(arr));

// // function cleanedFormattedName(name){
// //  const cleanedName = name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase();

// //  return `Welcome ${cleanedName}`
// // }

// // console.log(cleanedFormattedName("AliCe"));
// // console.log(cleanedFormattedName("MR."));

// // function removeDuplicates(array){
// //     return array.filter((value,index) => array.indexOf(value)===index)
// // }

// // function gettDuplicates(array){
// //     return array.filter((value,index) => array.indexOf(value)!==index)
// // }
// // const array = ["Banana", "Orange", "Mango", "Peach", "Mango", "Guava", "Grapes", "Kiwi", "Pineapple"]
// // console.log(removeDuplicates(array));
// // console.log(gettDuplicates(array));


// // //reversing an array withoutusing the reversed()


// function reverse(Arr){
//     let left = 0
//     let right =Arr.length -1

//     while(left<right){
//         [Arr[left], Arr[right]] = [Arr[right], Arr[left]]
//         left++;
//         right--;
//     }return Arr
// }
// let Arr = ["Amour","school","Js"]
// console.log(reverse(Arr))

// function returnMinmax(array){
//     if (!Array.isArray(array) || array.length === 0){
//         return { min: null, max: null };
//     }
//     let min = max  = array[0]
//     for(let num of array){
//         if (num < min) min = num;
//         if (num > max) max = num
//     }return {min, max}
    
// } const array = returnMinmax[1,2,5,9,-17]
// console.log(returnMinmax(array));


// function myEvenNumbers(arr){
//     let sum = 0;
//  for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//        sum += arr[i] 
//     }
// }
//  return sum
// }
// const arr =[1,2,3,4,5,6,7];
// console.log(myEvenNumbers(arr));

// function cleanedFormattedName(input){
//     const cleanedName = input.trim().charAt(0).toUpperCase() + input.trim().slice(1).toLowerCase();
// return `Welome, ${cleanedName}`
// }

// let input = "alicE"                           
// console.log(cleanedFormattedName(input));
 
// let arr1 = [" Hi"," Hello", " Whatsup"];
// let arr2 = [" You", " Him", " Them"];
// let arr3 = arr1 + " " + arr2;
// console.log(arr3);


// // function myName(str){
// //     const countVowels = str.match(/[aeiou]/gi)
// //     return countVowels ? countVowels.length: 0;
// // } 


// // const words = "ThE mother of that young baby went to the market last week, friday."
// // console.log(`There are ${myName(words)} vowels in my text`);

// function myHome(str){
//     const findHowMany =  str.match(/[aeiou]/gi,"")
//     return findHowMany ? findHowMany.length:0;
// }

// const output = "Dandora";
// console.log(`My home is ${myHome(output)}`);

//    function replaceHome(address){
//     return address.replace(/[aeiou]/gi, "")
//    }
//    const slang = "Kilimani Estate";
//    console.log(`My home is ${replaceHome(slang)} and I am so proud of it. Indeed i have come so far`);
   
function isPalindrome(input){
    return input == input.split('').reverse().join('')
}
const word = "madam";
const wordB = "racecar"
console.log(isPalindrome(word));
console.log(isPalindrome());


//

// //(Pro Search

// Sources
// 24
// Certainly! Here are some practice questions to help you reinforce your understanding of JavaScript arrays and strings:

// Array Practice Questions
// Write a function that takes an array of numbers and returns the sum of all even numbers in the array.

// Create a function that removes all duplicate elements from an array and returns a new array with unique elements.

// Implement a function that reverses an array in place without using the built-in reverse() method.

// Write a function that finds the largest and smallest numbers in an array and returns them as an object with 'max' and 'min' properties.

// Create a function that takes two arrays and returns a new array containing elements that are present in both input arrays.)


 

         

                              






