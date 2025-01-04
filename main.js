// const num = [1, 2, 3, 4, 5];
// const i = num.length;
// console.log(i);
// console.log(num);
//////////Task2///////////
// const num = [1, 2, 3, 4, 5];
// for (const result of num) {
//     console.log(result);
// }
///////////Task3///////////
// const num = [1, 2, 3, 4, 5];
// for (const index in num) {
//     console.log(num [index]);
// }
//////////Task4///////////
// const isArray = Array.isArray([1, 2, 3, 4, 5]);
// console.log(isArray);
//////////Task5///////////
// const alphabet = {0: "a" , 1: "b", 2: "c", length: 3};
// const num = Array.from(alphabet);
// console.log(num);
//////////Task6///////////
// const num = [1, 2, 3, 4, 5, 6];
// num.forEach(element => {
//     console.log(element);
// }
// )
//////////Task7///////////
// const num1 = [1, 2, 3,];
// const num2 = [4, 5, 6];
// const combinedArray = num1.concat(num2);
// console.log(combinedArray);
//////////Task8///////////
// const num = [1, 2, 3, 4, 5];
// const index = num.indexOf(3);
// console.log(index);
//////////Task9///////////
// let num = [1, 2, 3, 4, 5, 6];
// let first = 2;
// let last = 4;
// let before = array.slice(0, first); 
// let after = array.slice(last);    
// let result = before.concat(after);
// console.log(result);
//////////Task10///////////
// let num = [1, 2, 3, 4, 5];
// let indexToRemove = 3;
// let removedElements = num.splice(indexToRemove, 1);
// console.log(removedElements[0]);
// console.log(num);
// //////////Task11///////////
// const num = [1, 2, 3, 4, 5];
// const numString = num.join(',');
// console.log(numString);
//////////Task12///////////
// const num = "1,2,3,4,5";
// const numArray = num.split(',');
// console.log(numArray);
//////////Task13///////////
// const num = Array.of(1, 2, 3);
// console.log(num);
//////////Task14///////////
// const num = [1, 2, 3, 4, 5];
// num.fill(0, 0, 3);
// console.log(num);
//////////Task15///////////
// let num = [1, 2, 3, 4, 5];
// num.fill(1, 1, 3);
// console.log(num);
///////////Task16///////////
// let fruits = ["banana", "cherry", "apple"];
// let result = fruits.sort();
// console.log(result);
//////////Task17///////////
// let fruits = ["banana", "cherry", "apple"];
// let result = fruits.reverse();
// console.log(result);
//////////Task18///////////
// const numm = [1, 2, 3, 4, 5];
// const squaredNumbers = numm.map(num => num * 2);
// console.log(squaredNumbers);
//////////Task19///////////
// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);
//////////Task20///////////
// const num = [1, 2, 3, 4, 5];
// const sum = num.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum);
//////////Task21///////////
// function findSmallest(num) {
//     return Math.min(...num);
// }
// console.log(findSmallest([30, 45, 60, 7]));
//////////Task22///////////
// function AlphabeticalOrder(str) {
//     return str.split('').sort().join('');
// }
// console.log(AlphabeticalOrder('hello'));
//////////Task23///////////
// function oddOrEven(num) {
//     return num % 2 === 0 ? "Even" : "Odd";
// }

// console.log(oddOrEven(9));
//////////Task24///////////
// function evenNum(arr) {
//     return arr.filter(num => num % 2 === 0);
// }
// console.log(evenNum([1, 2, 3, 4, 5, 6, 7, 8, 9]));
//////////Task25///////////
// function getAbsSum(arr) {
//     return arr.reduce((accumulator, currentValue) => accumulator + Math.abs(currentValue), 0);
// }
// console.log(getAbsSum([-1, -3, -5, -4, -10, 0]));
//////////Task26///////////
// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
// console.log(factorial(8));
//////////Task27///////////
// function numbersOnly(arr) {
//     return arr.filter(element => typeof element !== 'string');
// }
// console.log(numbersOnly(['Ayham', 3, 7, 'Alaa', 13, 'coding']));
//////////Task28///////////
// function addUp(n) {
//     if (n === 0) {
//         return 0;
//     }
//     return n + addUp(n - 1);
// }
// console.log(addUp(8));
//////////Task29///////////
// function minMaxLengthAverage(arr) {
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);
//     const length = arr.length;
//     const average = arr.reduce((sum, num) => sum + num, 0) / length;
//     return [min, max, length, average];
// }
// console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));
//////////Task30///////////
// function romanNumbers(num) {
//     const romanNumerals = [
//         { value: 1000, numeral: 'M' },
//         { value: 900, numeral: 'CM' },
//         { value: 500, numeral: 'D' },
//         { value: 400, numeral: 'CD' },
//         { value: 100, numeral: 'C' },
//         { value: 90, numeral: 'XC' },
//         { value: 50, numeral: 'L' },
//         { value: 40, numeral: 'XL' },
//         { value: 10, numeral: 'X' },
//         { value: 9, numeral: 'IX' },
//         { value: 5, numeral: 'V' },
//         { value: 4, numeral: 'IV' },
//         { value: 1, numeral: 'I' }
//     ];

//     let result = '';
//     for (const { value, numeral } of romanNumerals) {
//         while (num >= value) {
//             result += numeral;
//             num -= value;
//         }
//     }
//     return result;
// }
// console.log(romanNumbers(1989));
//////////Task31///////////
// function countWords(str) {
//     return str.split(' ').length;
// }
// console.log(countWords('hello from CodingAcademy!'));
//////////Task32///////////
// function MultiplyByLength(arr) {
//     const length = arr.length;
//     return arr.map(num => num * length);
// }
// console.log(MultiplyByLength([4, 2, 5]));
//////////Task33///////////
// function checkEnding(str1, str2) {
//     return str1.endsWith(str2);
// }
// console.log(checkEnding("CodingSchool", "Ac"));
// console.log(checkEnding("CodingSchool", "School"));
//////////Task34///////////
// function doubleChar(str) {
//     return str.split('').map(char => char + char).join('');
// }
// console.log(doubleChar('Coding'));
//////////Task35///////////
// function findIndex(arr, element) {
//     return arr.indexOf(element);
// }
// console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali'));