// 01 write a function to find a maximum element in the array
// function findMaxNumber (newArr)
// {
//     let max = newArr[0];
//     for (let x = 1; x < newArr.length; i++) {
//         if (newArr[x] > max) {
//             max = newArr[x];
//             }
//             }
//             return max;

// }
// const arr = [100, 150 , 50 , 300,1000]
// console.log(findMaxNumber(arr));


// 02 reverse an array without using the builtin  reverse method
// function reverseArray(arr)
// {
//     let left = 0;
//     let right = arr.length - 1;
//     while (left < right) {
//         let temp = arr[left];
//         arr[left] = arr[right];
//         arr[right] = temp;
//         left++;
//         right--;
//         }
//         return arr;
//         }
//          const newarr = [1, 2, 3, 4, 5];
//          console.log(reverseArray(newarr));

//03 use map method to square the elements of an array 
// function squareElements(arr) {
//     let arr2 = arr.map(function(num1) {
//       return num1 * num1;
//     });

//     console.log(arr2);
//   }

//   let numbers = [6, 2, 7, 4, 9];
//   squareElements(numbers); 


// 04 function that uses the filter method to remove all even numbers from the array 
// function removeEvenNumbers(arr) {
//     let newArr = arr.filter(function(num) {
//         return num % 2 !== 0;
//         });
//         return newArr;
//         }
//         const number = [1, 2, 3, 4, 5,6,7,8,9,10,11];
//         console.log(removeEvenNumbers(number));

// 05 use the reduce method to calculate the the sum of all elements in an array 
// let add = [1, 2, 3, 4, 5, 6 ,7 ];
// const sum = add.reduce((a, b) => a + b, 0);
// console.log(sum);

// 06 Write a function that uses map to extract the names of all users from an array of user objects (each user object contains name and age properties).
// function extractNames(arr) {
//     let newArr = arr.map(function(user1) {
//         return user1.name;
//     });
//     return newArr;
// }
// let user1 = [
//     {name: 'minhaj', age: 25},
//     {name: 'faiz', age: 30},
//     {name: 'haris', age: 35}
// ];
// console.log(extractNames(user1));


// 07 Write a function that uses filter to get all the users older than 30 from an array of user objects.
// function getOlderUsers(arr) {
//     let newArr = arr.filter(function(user) {
//         return user.age > 30;
//         });
//         return newArr;
//         }
//         let users = [
//             {name: 'minhaj', age: 26},
//             {name: 'ahmed', age: 30},
//             {name: 'moiz', age: 35},
//             {name: 'jalil', age: 30},
//             {name: 'shakir', age: 39}];
//  console.log(getOlderUsers(users));

// 08 Use reduce to create an object that contains the counts of each unique element in an array

// let numbers = [1, 2, 2, 3, 3, 4, 4, 4];

// let num1 = numbers.reduce((a, b) => {
//   if (a[b]) {
//     a[b]++;
//   } else {
//     a[b] = 1;
//   }
//   return a;
// }, {});
// console.log(num1); 


// 09 Use filter and map together to get an array of names of users older than 30 from an array of user objects
// const users = [
//     { name: "minhaj", 
//         age: 25 },
//     { name: "faiz",
//          age: 32 },
//     { name: "haris",
//          age: 40 },
//     { name: "mujaba",
//          age: 28 },
//     { name: "ahmed",
//          age: 35 }
//   ];

//   const usersOlderThan30 = users.filter(user => user.age > 30);

//   const names = usersOlderThan30.map(user => user.name);

//   console.log(names); 


// 10 write a function to check  if a given object is empty 
// true


//11  Create an object with property name, age, and occupation, and write a function to print each property and its value.

// var person = {
//   name: "minhaj",
//   age: 22,
//   occupation: "Software Engineer"
// };

// function createAndPrintObject(person) {
//     console.log("name: " + person.name);
//     console.log("age: " + person.age);
//     console.log("occupation: " + person.occupation);
//   }

//   createAndPrintObject(person);

//   write a function to clone an object.
//   var person = {
//     name: "minhaj",
//     age: 22,
//     occupation: "Software Engineer"
//   };
//   function clone(person) {
//     return Object.assign({}, person);
//   }
//   var personClone = clone(person);
//   console.log(personClone);
//   console.log(personClone === person);


// 12 Write a function to merge two objects

// function mergeObjects(obj1, obj2) {
//     const merged = Object.assign({}, obj1, obj2);
//     console.log(merged);
// }

// const user1 = {
//     1: "a",
//     2: "b"
// };
// const user2 = {
//     3: "c",
//     4: "d"
// };
// mergeObjects(user1, user2);



// 13 Write a function that takes an object and returns an array of its keys.

// const person = {
//     name: "Alice",
//     age: 30,
//     city: "Wonderland"
// };
// console.log(Object.keys(person));

// function getObjectKeys(obj) {
//     return Object.keys(obj);
// }


// const user1 = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// const kArray = getObjectKeys(user1);
// console.log(kArray); 


// 14 Write a function that takes an object and returns an array of its values.


// function getObjectKeys(obj) {
//     return Object.values(obj);
// }


// const user1 = {

//         1: "a",
//         2: "b"

// };

// const kArray = getObjectKeys(user1);
// console.log(kArray); 

// 15 Write a function that takes an object and returns an array of key-value pairs.

// function getObjectKeys(obj1 ,obj2) {
//     return Object.assign({},obj1,obj2);
// }


// const user1 = {

//         1: "a",
//         2: "b"

// };
// const user2 = {

//         3: "c",
//         4: "d"

// };

// const kArray = getObjectKeys(user1,user2);
// console.log(kArray); 


// 16 Write a function to update the properties of an object using another object.
// as studied object.assign copies the values of a source tp target 

// function updateObject(obj1,obj2)
// {
//     Object.assign(obj1 , obj2);

// }

// let user1 = {

//     name: "minhaj",
//     age: 25,
//     city: "azad kashmir"

// };
// let user2 = {
//   name:"naqvi",
//     age: 35,
//     city: "gilgit",

// };

// updateObject(user1,user2);
// console.log(user1);

// 17 Write a function that takes an array of objects and returns an object where the keys are the values of a specified property from each object, and the values are arrays of the remaining properties.


//18 Write a function to deeply merge two nested objects.


// 20 Write a function to check if a number is prime.
// function chkPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(chkPrime(7));
// console.log(chkPrime(1));
// console.log(chkPrime(8));
// console.log(chkPrime(11));
// console.log(chkPrime(9));

//19 Write a function that returns the factorial of a number.
// function calculateFact(num)
// {

// let factorial = 1;

// if (num<0)
// {
//     console.log("sorry ! fctorial doesnot exists ")
// }
// else if(num === 0)
// {
//     console.log("factorial of 0 is 1");
// }
// else
// {
//     for(let i=1 ;i<=num; i++)
//     {
//         factorial = factorial * i;
//     }
// }

// console.log(`the factorial of ${num} is ${factorial}`);

// }
// calculateFact(5);
// calculateFact(2);
// calculateFact(8);
// calculateFact(12);

//20 Write a function that takes a string and returns it with the first letter of each word capitalized.

// function capString(str) {
//     let str1 = str.toLowerCase();
    
//     let words = str1.split(' ');
    
//     let capWords = words.map(word => 
//         word.charAt(0).toUpperCase() + word.slice(1)
//     );
//         let result = capWords.join(' ');
    
//     return result;
// }

// console.log(capString("my name is minhaj")); 

//21 Write a function that takes another function as an argument and runs it after a specified delay.
//22 - *Medium*: Write a function that takes an array of numbers and returns a new array with each element doubled, but only if the original element was greater than 10.


// 23 Write a function that takes an array of objects and returns an object where the keys are the values of a specified property from each object, and the values are arrays of the remaining properties.

// 24 Write a function to deeply merge two nested objects.

 //25 Write a function to flatten a nested array using the reduce method.












            
