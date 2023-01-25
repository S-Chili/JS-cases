// task 1

// const fruits = ['mango', 'banana', 'apple', 'orange']
// console.log(fruits);
// const lastIndex = fruits.length - 1;

// for (let i = 0; i <= lastIndex; i += 1) {
//     fruits[i] += '-1';
// }

// console.log(fruits);
// ____________________________________________

// for (const fruit of fruits) {
//     console.log(fruit);
// }
// ................................................
// task 2

// const carts = [54, 28, 105, 70, 92, 17, 120];
// const lastIndex = carts.length - 1;
// let totalCarts = 0;

// for (let i = 0; i <= lastIndex; i += 1) {
//         totalCarts += carts[i];
//     }
    
//     console.log('Total: ', totalCarts);

    ///////////// another path:
    // ____________________________________

// for (let value of carts) {
//     totalCarts += value; 
// }
// console.log('Total: ', totalCarts);

// ...............................................
// task 3

// const carts = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let totalCarts = 0;

// for (let i = 0; i < carts.length; i += 1) {
//     if (carts[i] % 2 === 0) {
//         console.log(carts[i])
//         totalCarts += carts[i];
//     }
// }
//     console.log('Total: ', totalCarts);

       ///////////// another path:
       // ____________________________________

// for (const cart of carts) {
//     if (cart % 2 === 0) {
//         console.log(cart)
//         totalCarts += cart;
//     }
// }
//     console.log('Total: ', totalCarts);

// ...............................................
// task 4

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'k1widab3st';
// let message = '';

// for (let i = 0; i < logins.length; i += 1) {
//     console.log(logins[i]);

//     if (logins[i] === loginToFind) {
//         message = `login ${loginToFind} was found`;
//         break;
//     }
//     message = `login ${loginToFind} not found`;
// }
//     console.log(message);

        //////////// another path: for of
           // ____________________________________

// for (const login of logins) {
//     if (login === loginToFind) {
//     message = `login ${loginToFind} was found`;
//     break;
//     }
//     message = `login ${loginToFind} not found`;
// }
//     console.log(message);

            ///////////// another path: Includes. Тернарний оператор
       // ____________________________________

// const message = logins.includes(loginToFind) 
//   ? `login ${loginToFind} was found` 
//   : `login ${loginToFind} not found`;
// console.log(message);
// ...............................................
// task 5

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

//     for (const number of numbers) {
//         console.log(number);

//         if (number < smallestNumber) {
//             smallestNumber = number;
//         }
//     } 
//     console.log('Smallest number: ', smallestNumber);

   ///////////// another path: For of.
       // ____________________________________

// let biggestNumber = numbers[0];
//     for (const number of numbers) {
//         if (number > biggestNumber) {
//             biggestNumber = number
//         }
//     }
//     console.log('Biggest number: ', biggestNumber);
// ...............................................
// task 6

// let friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// const string = friends.join(', ');
// friends = string;
// console.log(friends);

// ...............................................
// task 7

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);

//     if (letter === letter.toLowerCase()) {
//         console.log('little letter - ', letter)

//         invertedString += letter.toUpperCase();
//     } else {
//         console.log('bigger letter - ', letter)

//         invertedString += letter.toLowerCase(); 
//     }
// }
//     console.log(invertedString);
// ...............................................
// task 8


// ...............................................
// task 9


// ...............................................
// task 10


// ...............................................
// task 11


// ...............................................
// task 12


// ...............................................
// task 13