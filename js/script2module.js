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

// task 1

// const add = function (x, y) {
//   //   console.log(x);
//   //   console.log(y);
//   console.log('multiply my number');
//   return x * y;
// };

// console.log(add(1, 3));
// console.log(add(3, 3));
// console.log(add(5, 3));

// ____________________________________

// const multiply = function (a, b) {
//   return 2 * b;
// };
// console.log(multiply());

// ................................................
// task 2

// const carts = [54, 28, 105, 70, 92, 17, 120];
// let totalCarts = 0;
//
// for (let value of carts) {
//   totalCarts += value;
// }

// console.log('Total: ', totalCarts);

// const calculateTotalPrice = function (items) {
//   console.log(items);
//   let total = 0;

//   for (let item of items) {
//     total += item;
//   }

//   return total;
// };

// console.log(calculateTotalPrice([1, 2, 3]));
// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([100, 200, 300]));
// ...............................................
// task 3

// Напиши функцию logItems(items) для перебора и логирования массива

// const logItems = function (items) {

//   for (const item of items) {
//     console.log(item);
//   }
// };

// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавиатура', 'наушники', 'часы']);

// ...............................................
// task 4
// * Напиши функцию findLogin(allLogins, login) для поиска логина
//  * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
//  * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'k1widab3st';

// const message = logins.includes(loginToFind)
//   ? `User ${loginToFind} are find.`
//   : `User ${loginToFind} are not find.`;

// console.log(message);

// ____________________________________

// const findLogin = function (allLogins, loginToFind) {

//   for (const login of logins) {
//     if (login === loginToFind) {
//       return `User ${loginToFind} are find.`;
//     }
//   }

//   return `User ${loginToFind} are not find.`;
// };

// const findLogin = function (allLogins, loginToFind) {
//   return logins.includes(loginToFind)
//     ? `User ${loginToFind} are find.`
//     : `User ${loginToFind} are not find.`;
// };

// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));

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
// ____________________________________

// const findSmallestNumber = function (numbers) {
//   let smallestNumber = numbers[0];
//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }

//   return smallestNumber;
// };

// console.log(findSmallestNumber([3, 8, 12, -2, 15]));
// console.log(findSmallestNumber([100, 54, 8, 12, 2]));
// console.log(findSmallestNumber([7, 1, 84, 15, 4]));
// ...............................................
// task 6
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
// console.log(invertedString);

// const changeCase = function (string) {
//   const letters = string.split('');
//   let invertedString = '';

//   for (const letter of letters) {
//     const isInLowerCase = letter === letter.toLowerCase();

//     invertedString += isInLowerCase
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
//   }

//   return invertedString;
// };

// console.log(changeCase('JavaScript'));
// console.log(changeCase('AnastasiiaTatarova'));
// ...............................................
// task 7

// const slugify = function (string) {
//   const slug1 = string.toLowerCase().split(' ').join('-');

//   return slug1;
// };

// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('Azure Static Web Apps are Awesome'));
// console.log(slugify('Technical writing tips for non-native English speakers'));
// ...............................................
// task 8

// const fn = function (...args) {
//   console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// ...............................................
// task 9

// const add = function (...numbers) {
//   let totalNumbers = 0;
//   for (const number of numbers) {
//     totalNumbers += number;
//   }

//   console.log(numbers);
//   return totalNumbers;
// };

// console.log('your total number is ', add(100, 200, 300));
// console.log('your total number is ', add(100, 200, 300, 400));
// ...............................................
// task 10

// const filterNumbers = function (array, ...args) {
//   console.log('array:', array);
//   console.log('args:', args);
//   const uniqueElements = [];

//   for (const element of array) {
//     if (args.includes(element)) {
//       uniqueElements.push(element);

//       console.log(`${element} are everywhere`);
//     }
//   }

//   return uniqueElements;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));

// ...............................................
