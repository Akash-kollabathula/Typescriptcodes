// ts coding questions basic to medium level questions 
//question 1: Write a TypeScript function that takes an array of numbers and returns a new array containing only the even numbers from the original array.
function findevenNumbers(arr:number[]):number[]{
    const evenNumbers:number[]=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

//console.log(findevenNumbers([1,2,3,4,5,6,7,8,9,10]));
//question 2: Write a TypeScript function that takes an array of numbers and returns the largest number in the array. If the array is empty, return null.
function largestnumber(arr:number[]):number|null{
    if(arr.length==0){
        return null;
    }
    let largest=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
    }
    return largest;
}

// console.log(largestnumber([1,2,3,4,5,6,7,8,9,10]));
// console.log(largestnumber([]));
// console.log(largestnumber([-1,-2,-3,-4,-5]));

//question 3: Write a TypeScript function that takes an array of numbers and returns the sum of all the numbers in the array.
function sumOfArray(arr:number[]):number{
    let sum=0;
    for(const num of arr){
        sum+=num;
    }
    return sum;
}

//console.log(sumOfArray([1,2,3,4,5]));
//question 4Count positive, negative, and zero values

function countValues(arr:number[]):{postive:number,negative:number,zero:number}{
    let postive=0;
    let negative=0;
    let zero=0;
    for(const num of arr){
        if(num>0){
            postive++;
        } else if(num<0){
            negative++;
        } else {
            zero++;
        }
    }
    return {postive, negative, zero};
}
//console.log(countValues([1,-2,3,0,-5,6,0,-8,9]));
//question 5: Write a TypeScript function that takes an array of numbers and returns a new array with the elements in reverse order.
function reverseArray(arr:number[]):number[]{
    const reversed:number[]=[];
    for(let i=arr.length-1;i>=0;i--){
        reversed.push(arr[i]);

    }
    return reversed;
}

//console.log(reverseArray([1,2,3,4,5]));
//question 6: Write a TypeScript function that takes an array of numbers and returns the first duplicate number in the array. If there are no duplicates, return null.
function fistDuplicate(arr:number[]):number|null{
    const seen=new Set<number>();
    for(const num of arr){
        if(seen.has(num)){
            return num ;
        }{
            seen.add(num);
        }
    }
    return null;
}
//console.log(fistDuplicate([1,2,3,4,5,2,7,8,9,10]));
//question 7: Write a TypeScript function that takes an array of numbers and returns the second largest number in the array. If the array has less than two unique numbers, return null.
function findSecindLargest(arr:number[]):number|null{
    if(arr.length<2){
        return null;
    }
    let Largest=arr[0];
    let secondLargest=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>Largest){
            secondLargest=Largest;
            Largest=arr[i];
        } else if(arr[i]>secondLargest && arr[i]!=Largest){
            secondLargest=arr[i];
        }
    }
    return secondLargest;
}

// console.log(findSecindLargest([1,2,3,4,5,6,7,8,9,10]));
// console.log(findSecindLargest([1,1,1,1,1]));
// console.log(findSecindLargest([-10,9,8,-7,6,-5]));


//question 8: Write a TypeScript function that takes a string and returns a new string with all the vowels removed.
function coutcharactersfrequnecy(str:string):Map<string,number>{
    const mp=new Map<string,number>();

  for (const char of str) {
        mp.set(char, (mp.get(char) ?? 0) + 1);
    }  
    return mp;
}

//console.log(coutcharactersfrequnecy("hello world"));
//question 9: Write a TypeScript function that takes a string and returns the first non-repeating character in the string. If all characters are repeating, return null.
function fistNonRepeatingCharacter(str:string):string|null{
 const mp=new Map<string,number>();
  for (const char of str) {
        mp.set(char, (mp.get(char) ?? 0) + 1);
    }
    for (const char of str) {
        if (mp.get(char) === 1) {
            return char;
        }
    }
    return null;
}

//console.log(fistNonRepeatingCharacter("swiss"));
//question 10: Write a TypeScript function that takes a string and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise.
function checkPalindrome(str:string):boolean{
    const reversed=str.split("").reverse().join("");
    return str===reversed;
}
console.log(checkPalindrome("racecar"));
//question 10: Write a TypeScript function that takes a string and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise.
function checkPalindromeloop(str: string): boolean {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}
console.log(checkPalindromeloop("racecar"));

//question 11: Write a TypeScript function that takes an array of numbers and returns the missing number in the array. The array contains numbers from 1 to n, with one number missing.
function findMissingNumber(arr: number[], n: number): number {
    const expectedSum = (n * (n + 1)) / 2;

    let actualSum = 0;

    for (const num of arr) {
        actualSum += num;
    }

    return expectedSum - actualSum;
}


console.log(findMissingNumber([1, 2, 4, 5], 5));

