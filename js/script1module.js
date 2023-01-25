
// 1 case
// let brand = 'saMsuNg';

// let brand = prompt('Enter your brand');

// let brand1 = brand[0].toLocaleUpperCase();
// brand = brand.slice(1).toLowerCase();
// console.log(brand1 + brand);

// ............................................................
// 2 case
// const spamWord = 'spam';
// const string = prompt('Enter your comment').toLowerCase();
// let result = string.includes(spamWord);
// console.log(result);
// ............................................................  
// 3 case
// const x1 = 10;
// const x2 = 30;
// const number = 25;

// console.log(`Число ${number} попадает в отрезок до ${x1}? `, number < x1);

// console.log(`Число ${number} попадает в отрезок после ${x2}? `, number > x2);
// let res1 = number > x1 && number <x2;
// console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}? `, res1);
// let res2 = number < x1 || number > x2;
// console.log(`Число ${number} попадает в отрезок до ${x1} или после ${x2}? `, res2);

/*
 * Напиши скрипт проверки подписки пользователя при доступе к контенту
 * - Есть три типа подписки: free, pro и vip.
 * - Получить доступ могут только пользователи pro и vip
 */

// const sub = 'vip';


// const canAccessContent = sub === 'pro' || sub === 'vip';
// console.log('Have access to content?', canAccessContent);

// если пользователь pro или пользователь vip тогда есть доступ
// ............................................................
// 4 case
// const balance = 700;
// let message;

// if (balance > 0 && balance < 500) {
//   console.log(message = 'mid bal.');
// } else if (balance > 500 && balance < 1000 ){
//     console.log(message = 'norm bal.');
// } else {
//     console.log(message = 'high bal.');
// }

// Ternarnui op

// let message = (balance > 0 && balance < 500) ? 'mid bal.' : 'norm bal.';

// console.log(message);
// ............................................................
// 5 case

// let balance = 10000;
// const payment = 2000;
// let checkBalance;
// let message;
// console.log(`total order price ${payment}. check your balance`)

// if (payment <= balance) {
//     console.log(`perfect, wait please, your paying is almost complete:) `)
//     console.log(message = `now - your balance ${balance - payment}`)
// } else {
//     console.log(message = 'not enoght credit on your balance ')
// }

// console.log(message = 'Operation is done')
// ............................................................
// 6 case

// const balance = 'user';
// let message;

//     switch (balance) {
//         case 'pro':
//             message = 'mid bal.';
//             break;

//         case 'vip':
//             message = 'high bal.';
//             break;

//         case 'free':
//             message = 'highest bal.';
//             break;

//         default:
//             console.log('nothing to compare');
//     }

//     console.log(message);
// ............................................................
// 7 case

// let option = prompt('write number of option');
// let message;

//     switch (option) {
//         case '1':
//             message = 'take your order at our office';
//             break;

//         case '2':
//             message = 'we will delivery your order tomorrow';
//             break;

//         case '3':
//             message = 'we will sent your order today';
//             break;

//         default:
//             message = 'our manager call you later';
//     }

//     console.log(message);
// ............................................................
// 8 case

// for (let i = 0; i <+ 100; i += 5) {
//     console.log (i);
// }

// console.log('Done')

// ------------------------------------------------------------------
// const employes = prompt('Enter amount of your stuff');
// let totalSalary = 0;
// const min = 500;
// const max = 5000;


// for (let i = 1; i <= employes; i += 1) {
//     const oneEmplSalary = Math.round(Math.random()*(max-min)+min);

//     console.log(`Salary of employer ${i} - ${oneEmplSalary}`);

//     totalSalary += oneEmplSalary;
// }

// console.log(`Total Sum of employers Salary is ${totalSalary}`);
// ------------------------------------------------------------------

// const min = 1;
// const max = 20;
// let totalSum = 0;

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 !== 0) {
//         continue;
//     }   
//     console.log(i);
//     totalSum += i;
// }
    
// console.log(`Sum of all even number is ${totalSum}`)
   
// ............................................................
// 9 case

// let totalSpent = 10000;
// let payment = 1000;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log(`Your discount 2%, its ${discount = (payment*0.02)} credits`)
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log(`Your discount 5%, its ${discount = (payment*0.05)} credits`)
// }else if (totalSpent >= 5000) {
//     console.log(`Your discount 10%, its ${discount = (payment*0.1)} credits`)
// } else {
//     console.log(`You are not a partner, sorry you dont have discount`)
// }
//     console.log(`Your total payment ${payment - discount} credits`)

//     totalSpent += payment - discount;
//     console.log(`Your total balance in our network is ${totalSpent} credits`);
//     console.log(`Thanks for your order! Have a nice day:)`)
