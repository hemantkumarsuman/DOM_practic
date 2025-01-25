// function changeContent(){
//     let h1 = document.getElementById('origin');
//     h1.textContent='changed text';
// }


// function changeColour(){
//     let box=document.getElementById('box');
//     box.style.backgroundColor='blue'
// }


// function toggleHighlight() {
//     // Get the <p> element by its ID
//     const paragraph = document.getElementById("text");

//     // Add an event listener for the 'click' event
//     paragraph.addEventListener("click", function () {
//         // Toggle the "highlight" class on the element
//         paragraph.classList.toggle("highlight");
//     });
// }

// // Call the function to initialize the event listener
// toggleHighlight();

// highlight();


// $$$$$$$  Write a JavaScript function that calculates the sum of two numbers  $$$$$$$$

// function sum(a, b) {
//     return a + b;
// }
// const num1 = 10;
// const num2 = 20;
// const result = sum(num1, num2);
// console.log("The sum of", num1, "and", num2, "is", result);

// Write a JavaScript program to reverse the given string

// function reverse(str){
//     if(str===''){
//         console.log('Enter string');
//         return '';
//     }

//     let strArr = str.split('');
//     let len = strArr.length;

//     for(let i=0;i<len/2;i++){
//         let temp = strArr[i];
//         strArr[i]=strArr[len-1-i];
//         strArr[len-1-i]=temp;
//     }

//     return strArr.join('');
// }

// let s = 'Hemant';
// let ans = reverse(s);
// console.log(ans);



// Write a JavaScript function that finds the maximum number in an array

// function findMax(arr){
//     let max = arr[0];

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }

//     return max;
// }

// let arr = [1,2,10,16,8];
// let ans = findMax(arr);
// console.log(ans);



// Write a JavaScript program that calculates the factorial of a number

// function fact(num){
//     if(num === 0 || num === 1){
//         return 1;
//     }

//     //return num*fact(num-1);

//     let res = 1;
//     while(num>1){
//         res = res*num;
//         num--;
//     }

//     return res;

    
// }

// let n = 4;
// let ans = fact(n);
// console.log(ans);


// Prime number Or Not
// function isPrime(number) {
//     if (number <= 1) {
//         return false; // Numbers less than or equal to 1 are not prime
//     }
//     for (let i = 2; i * i <= number; i++) {
//         if (number % i === 0) {
//             return false; // If divisible by any number between 2 and the square root of a number, it's not prime
//         }
//     }
//     return true; // If the loop completes without finding a divisor, the number is prime
// }
// const num = 17;
// const isPrimeResult = isPrime(num);
// if (isPrimeResult) {
//     console.log(num, "is a prime number.");
// } else {
//     console.log(num, "is not a prime number.");
// }




// Write a JavaScript function that uses an array of numbers and only gives a new array with even numbers
// function evennum(arr){
//     let newArr=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2===0){
//             newArr.push(arr[i]);
//         }
//     }

//     return newArr;
// }

// let arr = [11,21,34,4,5,6];

// let res = evennum(arr);
// console.log(res);



// %%%%%%%%%%%%% Write a JavaScript program to change the string to title (first letter of every word should be in upper case) %%%%%%%%%%%%

// function stringToTitle(str){
//     const words  = str.split(' ');
//     console.log(words);
    

//     const capitalWords = words.map(word=>{
//         let ans = word.charAt(0).toUpperCase() + word.slice(1);  
//         return ans;

//         // // // word.charAt(0):
//         // // // Extracts the first character of the string.
        
//         // // // .toUpperCase():
//         // // // Converts the extracted first character to uppercase.
        
//         // // // word.slice(1):
//         // // // Extracts the substring starting from the second character (index 1) to the end of the string.
        
//         // // // + (String Concatenation):
//         // // // Combines the uppercase first character with the rest of the string.
        
//     })

//     return capitalWords.join(' ')
// }

// let str = 'happy new year'
// let res = stringToTitle(str);
// console.log(res);



// $$$$$$$$$$$$$$$ Fibonacci sequence to a specified number $$$$$$$$$$$$$$$$$$$$

// function fibonnaci(n){
//     if(n===0){
//         return;
//     }

//     if(n===1){
//         return 0;
//     }

//     const seq = [0,1];

//     for(let i=2;i<n;i++){
//         seq.push(seq[i-1]+seq[i-2]);
//     }

//     return seq;
// }

// let num = 10;
// let res = fibonnaci(num);
// console.log(res);




// %%%%%%%%%%%%%%% ANAGRAM OR NOT %%%%%%%%%%%%%%%%%%

// function anagram(str1,str2){
//     if(str1.length!==str2.length){
//         return false;
//     }

//     if(str1.split('').sort().join('')===str2.split('').sort().join('')){
//         return true;
//     }
//     else return false;
// }

// let str1 = 'angrama';
// let str2 = 'gnaamra';
// let res = anagram(str1,str2);
// if(res){
//     console.log('Anagram');
    
// }
// else{
//     console.log('Not Anagram');
    
// }



//&&&&&&&&&&&&&&& functions that use two sorted arrays and merge them into one array &&&&&&&&&&&



// function mergeSortedArrays(arr1, arr2) {
//     let merged = [];
//     let i = 0;
//     let j = 0;
//     arr1.sort((a,b)=>a-b);
//     arr2.sort((a,b)=>a-b)
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] <= arr2[j]) {
//             merged.push(arr1[i]);
//             i++;
//         } else {
//             merged.push(arr2[j]);
//             j++;
//         }
//     }
//     // Append remaining elements from arr1
//     while (i < arr1.length) {
//         merged.push(arr1[i]);
//         i++;
//     }
//     // Append remaining elements from arr2
//     while (j < arr2.length) {
//         merged.push(arr2[j]);
//         j++;
//     }
//     return merged;
// }
// const arr1 = [1,4,2,7,5];
// const arr2  = [9,1,6,4,6,2,12];
// const mergedArray = mergeSortedArrays(arr1, arr2);
// console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]


//%%%%%%%%%%%%%% function that removes the duplicates from an array %%%%%%%%%%%%%%

// function removeDuplicate(arr){

//     let remove = [];

//     for(let i=0;i<arr.length;i++){
//         if(!remove.includes(arr[i])){
//             remove.push(arr[i]);
//         }
//     }

//     return remove;

// }

// let arr = [1,1,2,3,33,4,33,5,5,6,7];
// const res = removeDuplicate(arr);
// console.log(res);





//************** function that counts the occurrences of each character in the given string *************
// function countOccurence(str){

//     let countChar = {};

//     for(let i=0;i<str.length;i++){
//         let char = str[i];

//         countChar[char] = (countChar[char] || 0) + 1;

//     }

//     return countChar;

// }

// let str = 'Hello World';
// const res = countOccurence(str);
// console.log(res);




//************ function that categorizes an array of numbers in ascending order ***********

// function ascending(arr){
//     let res = arr.sort((a,b)=>a-b);
//     return res;
// }

// const arr = [12,3,1,4,5,6,45,43];
// const res = ascending(arr);
// console.log(res);



//************** Write a function to find the largest and smallest numbers in the array from the set of a given array of numbers ************
// function largestSmallest(arr){
//     let largest = arr[0];
//     let smallest = arr[0];

//     for(let i=0;i<arr.length;i++){
//         if(arr[i] > largest){
//             largest = arr[i];
//         }

//         else if(arr[i] < smallest){
//             smallest = arr[i];
//         }
//     }

//     return {largest,smallest}
// }

// const arr = [1,2,3,4,5,6];
// const res = largestSmallest(arr);
// console.log(res);



//&&&&&&&&&&&&&&& write a program that reverses the order of words in a sentence &&&&&&&&&&&&
// function reverseWord(str){
//     let word = str.split(' ');
//     for(let i=0;i<word.length/2;i++){
//         let temp = word[i];
//         word[i]=word[word.length - 1 - i];
//         word[word.length - 1 - i] = temp;
//     }

//     return word;
// }

// const str = 'How are you';
// const res = reverseWord(str);
// console.log(res);


//&&&&&&&&& Write a program that uses the array of integers, resulting in the most significant difference between any two numbers &&&&&&&&&&

// function significantDifference(num){
//     let largestDiff = 0;
//     for(let i=0;i<num.length;i++){
//         for(let j=i+1;j<num.length;j++){
//             let currentDiff = Math.abs(num[i] - num[j]);
//             if(currentDiff > largestDiff){
//                 largestDiff = currentDiff;
//             }
//         }
//     }

//     return largestDiff;
// }
// const numbers = [10, 5, 25, 8, 15];
// const res = significantDifference(numbers);
// console.log(res);



//%%%%%%Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.&&&&
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';


// function camelStr(str){

//     //convert str in array
//     let arr = str.split('-');
        
//     let ans = arr.map((element,index)=>
//         index == 0 ? element : element[0].toUpperCase() + element.slice(1)
//     )    
    
//     return ans.join('');
    
// }

// let str = 'background-color'
// const ans = camelStr(str);
// console.log(ans);




// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a
// and lower or equal to b and return a result as an array.

function filterRange(arr,a,b){
    return arr.filter((item)=>(item>=a && item<=b))
}
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered);// 3,1 (matching values)

console.log( arr ); // 5,3,8,1 (not modified)


























