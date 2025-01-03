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



function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0;
    let j = 0;
    arr1.sort((a,b)=>a-b);
    arr2.sort((a,b)=>a-b)
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    // Append remaining elements from arr1
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    // Append remaining elements from arr2
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }
    return merged;
}
const arr1 = [1,4,2,7,5];
const arr2  = [9,1,6,4,6,2,12];
const mergedArray = mergeSortedArrays(arr1, arr2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

















