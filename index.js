// 1. Find the last element of the arrays
let arr1 = [3, 7, 34, 90, 12];
let arr2 = [true, "green", "where", 12, 56];

console.log("Last element of arr1:", arr1[arr1.length - 1]); 
console.log("Last element of arr2:", arr2[arr2.length - 1]); 

// 2. Joining array elements into a string
let myPets = ["Cow", "Bird", "Snake", "Dog"];
let petsString = myPets.join(", "); 
console.log({petsString}); 

// 3. Sorting the array
let arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
arr3.sort((a, b) => a - b); 
console.log({arr3});

// 4. Removing duplicates and finding duplicates
let arr = ["boy", "man", "girl", "school", "girl", "woman"];
let uniqueArr = [];
let duplicatesArr = [];

for (let item of arr) {
  if (uniqueArr.includes(item)) {
    duplicatesArr.push(item);
  } else {
    uniqueArr.push(item);
  }
}

console.log("Array without duplicates:", uniqueArr); 
console.log("Duplicates array:", duplicatesArr); 

// 5. Searching for "food" in the array
let arr5 = ["the", "way", "x", 4];


if (arr5.includes("food")) {
  console.log("food");
} else {
  console.log("the search word was not found");
}

// 6. Sorting the string
let word = "renniw";
let sortedWord = word.split("").sort().join("");
console.log("Sorted word:", sortedWord); 

// 7. Inserting "Tomato" at the 5th index
let fruits = new Array(10); 
fruits[4] = "Tomato"; 
console.log("Fruits array:", fruits);

//dUPLICATES IN ARR
let array = ["boy", "man", "girl", "school", "girl", "woman"];
function removeDuplicate(text){
return text.filter((value,index) => text.indexOf(value)===index)
}
console.log(removeDuplicate(array));
//Get Duplicates
function getDuplicates(text){
return text.filter((value,index) => text.indexOf(value)!==index)
}
console.log(getDuplicates(arr));

let meals = ["Githeri","Mokimo","Rice"];
let newArr = meals.push("Matoke");
console.log(meals);



