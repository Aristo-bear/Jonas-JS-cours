// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// function logger() {
//   console.log('my name is Jonas')
// }
// logger();
// logger();
// logger();

// function foodProcessor(apples, oranges) {
//   console.log(apples, oranges)
//   const juise = `Juise with ${apples} apples and ${oranges} oranges.`;
//   return juise;
// }
// const appleJuise = foodProcessor(5, 0);
// console.log(appleJuise);

// const appleOrangeJuise = foodProcessor(4, 2);
// console.log(appleOrangeJuise);

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);


// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);


// arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetairement = birthYear => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// }
// console.log(yearsUntilRetairement(1991));


// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function foodProcessor(apples, oranges) {
//   const applePiees = cutFruitPieces(apples);
//   const orangePiece = cutFruitPieces(oranges);
//   console.log(apples, oranges)
//   const juise = `Juise with ${applePiees}} piece of apple and ${orangePiees} pies of orange.`;
//   return juise;
// }
// console.log(foodProcessor(2, 3));

/*const calcAge = function (birthYear) {
  return 2037 - birthYear;
}
  const yearsUntilRetairement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
      return retirement;
    } else {
      return -1;
    }
  }
console.log(yearsUntilRetairement(1991, 'Jonas'));
  console.log(yearsUntilRetairement(1950, 'Mike'));
  */

  /*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/
// let c = 9;
// function count() {
  
//   c++;
//   console.log(c)
// }
// count();
// count();
// count();
// count();


// 

// let a = 6;
// let b = 'Hello';

// console.log(a);
// let inputIn = document.querySelector('.input-in');
// let button = document.querySelector('button');

// button, onclick = function () {
//   console.log('Its Works!!!');
//   console.log(inputIn.value);
// }


// При нажатии кнопки.b - 1 срабатывает функция f1.
// Функция должна прочитать содержимое.i - 1 и сравнить
//  его с числом 4(сравнение ==).Результат
// сравнения - true или false выведите в.out - 1.

// const b1 = document.querySelector('go');
// const i = document.querySelector('.input');
// button, onclick = function () {
//   console.log(i == 4);
// }

// const friends = ['Michaele', 'Stiven', 'Piter'];
// console.log(friends)
// const year = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[2] = 'Jay';
// console.log(friends);
// const firstName = 'Jonas';
// const Jonas = [firstName, 'Shmedtmann', 2037 - 1991, 'Teacher', friends];
// console.log(Jonas);

// const calcAge = function (birthYear) {
//    return 2037 - birthYear;
//  }
// const years = [1990, 1967, 2002, 2010, 2018];
// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// const friends = ['Michaele', 'Stiven', 'Piter'];
// friends.push('Jay')
// console.log(friends);
// friends.unshift('jon');
// console.log(friends);
// friends.pop();
// console.log(friends);
// friends.shift();
// console.log(friends);
// console.log(friends.indexOf('Stiven'));

// if (friends.includes('Stiven')) {
//   console.log('You have a friend called Stiven');
// }

const Jonas = {
  firstName: 'Jonas',
  lastName: 'Shmedtmaan',
  age: 2037 - 1991,
  job: 'Teacher',
  friends: ['Michael', 'Peter','Steven']
};
console.log(Jonas);
console.log(Jonas.lastName);
console.log(Jonas['lastName']);

const nameKey = 'Name';
console.log(Jonas['first' + nameKey]);
console.log(Jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');


if (Jonas[interestedIn]) {
  console.log(Jonas[interestedIn]);
} else {
  console.log('wrong reqest! Choose between firstName, lastName, age, job and friends');
};

Jonas.location = 'Portugal';
Jonas['twitter'] = '@jonashmedtmann';
console.log(Jonas);

console.log('${Jonas.firstName} has ${Jonas.friends.lenght} and his best friend called ${Jonas.friends[0]}');
