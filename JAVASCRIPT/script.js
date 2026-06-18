// let x = 10;
// let y = 5;
// if (x > y && y < x) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// let isadmin = 4;
// let key = 12;
// if (isadmin * 3 == key || key / 4 == isadmin) {
//   console.log("access-granted");
// } else {
//   console.log("access-denied");
// }

// let temperature = 24;

// if (temperature > 30) {
//   console.log("hot");
// } else {
//   console.log("warm");
// }

// // 35 < 30 = false

// let points = 110;
// let status = points > 105 ? "gold" : points > 80 ? "silver" : "bronze";

// console.log(status);

// let passmarks = 39;
// let total = passmarks > 27 ? "pass" : "fail";
// console.log(total);

// let jjk = "death";
// let mha = "minors" + jjk ? "hell no" : "helll yeaa";
// console.log(mha);

// let isLoggedin = false;
// let hasToken = false;

// let access = isLoggedin && hasToken ? "allow" : "deny";
// console.log(access);

// let a = 7;
// a++;
// console.log(a);

// let b = 30;
// ++b;
// console.log(b);

// let y = 30;
// let x = y++;

// console.log(x, y);

// let n = 5;
// let result = n++ + ++n; //n1 = 5, once it's registered as 5, it turns 6 as per the code. then n2, which has already turned 6 with respect to the previous n, itll turn 7 as its got ++ before it. 5 + 7 = 12
// console.log(result);

// let likes = 50;

// function likepost() {
//   return ++likes;
// }
// console.log(likepost());
// console.log(likes);

// let count = 5;
// if (count-- === 5) {
//   console.log("matched");
// } else {
//   console.log("mismatched");
// }

// function GetVal(Val) {
//   if (Val < 55) return "D";
//   else if (Val < 60) return "C";
//   else if (Val < 75) return "B";
//   else return "A";
// }

// let h = 3;

// switch (h) {
//   case 2:
//     console.log("two");
//     break;

//   case 3:
//     console.log("three");
//     break;
// }

// for (let i = 3; i < 300; i+i) {
//   console.log(i);
// }
// for(let i = 1; i<21; i++){
//     console.log(i)
// }

// let i = 11
// while( --i){
//     console.log(i)
// }

// for (let i = 2; i < 21; i = i + 2) {
//   console.log(i);
// }

// let i = 1;
// while (i < 16) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
//   i++;
// }

// for (let i = 1; i < 51; i++) {
//   console.log(`5 * ${i} = ${5*i}` );

// }
// let sum = 0;
// for (let i = 1; i < 101; i++) {
//   sum = sum + i;

// }
// console.log(sum)

// for (let i = 1; i < 51; i++) {

//   if (i%3 === 0) {
//     console.log(i);
//   }
// }

// let val= prmpt ("Enter a number");
// for(let i = 1; i <=val; i++){
//   if( i%2===0){
//     console.log(`${i} is even`)
//   }
//   else{
//     console.log(`${i} is odd`)
//   }
// }

// for (let i = 1; i < 101; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i < 101; i++) {
//   console.log(i)
//   if (i % 7 === 0) break;
//
// }

// for (let i = 1; i < 41; i++) {
//   if (i % 3 === 0) continue;
//   console.log(i);
// }

// let count = 0;
// for (let i = 1; i < 101; i++) {
//   if (i % 2 === 1) {
//     count++;
//     console.log(i);
//   }
//   if (count === 5) break;
// }

// let name = "akshat goswami"
// console.log(name)

// let age = 18
// console.log( `i am ${age} years old`)

// let a = 32;
// let b = 34;
// sum = a + b;
// sub = a - b;
// mul = a * b;
// div = a / b;
// console.log("sum:", sum);
// console.log("sub:", sub);
// console.log("mul:", mul);
// console.log("div:", div);

// let a = 3;
// let b = 6;
// let temp = a
// a = b;
// b = temp;
// console.log(a, b);

// let a =7
// let b = 2
// rem= a % b
// console.log(rem)

// ----------------even odd checker---------------------
// let val = prompt("enter a number");
// if (val % 2 === 0) {
//   console.log("even");
// }
// if (val % 2 === 1) {
//   console.log("odd");
// }

// ----------------eligibility verifier------------------
// let age = prompt ("enter your age")
// if(age >= 18){
//   console.log("eligible")
// }
// else{
//   console.log("not eligible")
// }

//-------------leap year tracker-------------
// let year = prompt("enter the year");
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log(`${year} is leap year`);
// } else {
//   console.log(`${year} is normal year`);
// }

// let sum = 0;
// for (let i = 1; i < 101; i++) {
//   sum = i + sum;
// }
// console.log(sum);

// -----------7 mul table---------
// for (let i = 1; i < 21; i++) {
//   console.log(`7 x ${i} = ${7 * i}`);
// }

/ --------------total digit counter---------/;

// let num = prompt("Enter your number");
// let count = 0;
// if( isNaN(num)) {
//   console.log("please select a number");
// } else{

// while (num > 0) {
//   count++;
//   num = Math.floor(num / 10);
// }
// console.log(`total digits are ${count}`);

// }

/ calculates all sums of number up to that number /;

// let fnc = prompt("enter a number");
// let sum = 0;
// for (let i = 1; i <= fnc; i++) {
//   sum = sum + i;
// }
// console.log(sum);

//
//

// let fnc = function(player){
//   console.log(`${player} has won`)
// }
// console.log(ghoda)

//
//

//  function player(p1){
//   console.log(`${p1} has won`)
// }

// player("ghoda")
// player("gadha")
// player("apple")
// player("DOMPointReadOnly")

//

//

// function add(v1, v2, v3){
//   console.log(v1 + v2 + v3);
// }

// add(1, 2, 3)
// add(4, 5, 6)
// add(7, 8, 9)

//
//

// function dub(a, b, c, ...val) {
//   console.log(a, b, c, val);
// }

// dub(1, 2, 8, 3, 7, 59, 8, 7, 6, 5, 5, 4, 3);

//
//

// function hello(v){
//     return 69 + v;
// }
// let val = hello(31)
// console.log(val)

//

//
// let a = 12
// let b = 2
// let multiply = (a, b) => {
//   return a * b;
// };

//

//

// function greeting(name = "akshat"){
//     console.log("hello", name)
// }
// greeting()

//

//

// total value

// function GetScore(...score) {
//   let total = 0;
//   score.forEach(function (val) {
//     total = total + val;
//   });
//   return total;
// }

// console.log(GetScore(1,2,3,4,5, 100));

//

//

//
// let input = Number(prompt("enter your age"));
// function checkAge(age) {
//   if (age > 120) {
//     return "how did you survive this long?";
//   }
//   if (age > 18) {
//     return "eligible";
//   }

//   return "not eligible";
// }

// console.log(checkAge(input));

//

//

//

// getnum = function (val1, val2, val3) {
//  let total = 0;
//   total = val1 + val2 + val3;
//   return total;
// };
//  let num1 = Number(prompt("enter first number"));
//  let num2 = Number(prompt("enter second number"));
//  let num3 = Number(prompt("enter third number"));
//  console.log(getnum(num1, num2, num3));

//

//

//

//bmi calculator

// function bmi(weight, height) {
//   return weight / (height * height);
// }
// console.log(bmi(51, 1.8).toFixed(2));

//

//

//
// discount calculator
// function discountCalc(discount) {
//   return function (price) {
//     return price - price * (discount / 100);
//   };
// }
// let ten = discountCalc(10);
// let twenty = discountCalc(20);
// let thirty = discountCalc(30);
// let forty = discountCalc(40);
// let fifty = discountCalc(50);
// let sixty = discountCalc(60);
// let seventy = discountCalc(70);
// let eighty = discountCalc(80);
// let ninty = discountCalc(90);

// console.log(ten(1200));

//

//

//

//

//counter using closures
// function counter() {
//   count = 0;
//   return function () {
//     count++ + count;
//     return count;
//   };
// }
// let c = counter();
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());

//

//

//

//value doubler

// let input = Number(prompt("enter a number"));
// function pure(val) {
//   return function () {
//     total = val * 2;
//     return total;
//   };
// }
// //or we can directly return val * 2 for simplicity

// let double = pure(input);
// console.log(double());

//

//

//

// (function () {
//   let user = "akshat";
//   const password = `${user}.234.login-authenticated`;
//   console.log(password);
// })();

// let input = String(prompt("Emter your key"));
// function access() {
//   return function () {
//     if ((input === "key.js")) return "access granted. You may log in now";
//     else return "wrong key; access denied. try contacting the admin of this site to ask for key";
//   };
// }
// let type = access(input);
// console.log(type());

//

//

//
// let arr = [1, 2, 3, 4, 5, 6];
// let newarr = arr.slice(2, 5);

//

//

//

//ascending order sort
// let arr = [2, 34, 76, 48, 7, 43, 5, 54, 232];
// arr.sort(function (a, b) {
//   return a - b;
// });

//

//descending order sort
// let arr = [2, 34, 76, 48, 7, 43, 5, 54, 232];
// arr.sort(function (a, b) {
//   return b - a;
// });
//

//

//

// let arr = [2, 34, 76, 48, 7, 43, 5, 54, 232];
// let newarr = arr.map(function (val) {
//   if (val > 5) {
//     return val;
//   }
// });

//

//

//
// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 21, 22, 23, 24, 43];
// let newarr = arr.filter(function(val){
//   if ( val %2 === 0){
//     return true
//   }
// })

// let arr = [1, 2, 4];
// let ans = arr.reduce(function (accumulator, val) {
//   return accumulator * val;
// }, 1);

//

//

//

// //
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let New = arr.every(function (val) {
//   return val < 10;
// });

//

//

//
// let fruit = ["apple", "mango", "banana"];
// fruit[1]; //index

//

//

// let fruits = ["apple", "banana"];
// fruits.push("mango");
// fruits.unshift("pineapple");

//

//

//

// let fruits = ["Apple", "Banana"]
// fruits.pop()
// fruits.push("kiwi")

//

//

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// numbers.pop()
// console.log(numbers)

//

//

//

//

// let colors = [ "Green", "yellow"]
// colors.splice (1 , 0 , "red" , "blue")

//

//
// let items = [1, 2, 3, 4, 5, 6];
// let newarr = items.slice(1, 4);

//

//

//

//
// let names = ["harshita", "palak", "nastya", "taqi"];
// names.sort().reverse();

//

//

//

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let newarr = arr.map(function (val) {
//   return val * val;
// });

//

//

//

// let arr = [21, 34, 5, 1, 23, 5, 54, 765, 23];
// let newarr = arr.filter(val => val > 20);

// let arr = [10, 20, 30];
// let newarr = arr.reduce((acc, val) => acc + val, 0);

//

//

// let arr = [12, 9  , 54, 4, 46, 6];
// let newarr = arr.find(val => val < 10);

//

//

//

// let arr = [100, 29, 43, 654, 32, 45, 46];
// let ans = arr.some(val => val < 35)

//

//

// let arr = [2, 4, 64, 46, 4, 44, 76];
// let ans = arr.every((val) => val % 2 === 0);

//

//

//
// let FullName = ["Akshat", "Goswami"];
// let [FirstName, LastName] = FullName;

//

//

//

//merge 2 arrays using spread operators
// let a = [1, 3, 5];
// let b = [2, 4, 6];
// let merged = [...a, ...b];
// let sorted = [...merged].sort((a, b) => a - b);

//

//

//

// let countries =[ 'USA', "INDIA", "CANADA", "GERMANY"]
// countries = ["JAPAN", ...countries]

//

//

//

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr2 = [...arr];

//

//

// Objects =>

// let obj = {
//   Name: "Akshat",
//   Occupation: "student",
//   lastName: "Goswami",
//   email: "akshatgoswami036@gmail.com",
// };
// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// let obj = {
//   Name: "Akshat",
//   Occupation: "student",
//   lastName: "Goswami",
//   email: "akshatgoswami036@gmail.com",
//   location: {
//     City: "Ujjain",
//     Currently: "Dewas"
//   }
// };
// let obj2 = JSON.parse(JSON.stringify(obj)); //deep cloning

//

//

// let obj = {
//   "first-name": "Akshat",
//   age: 18,
//   isEnrolled: true,
// };

//

//

// let key = "age";
// let user = {
//   age: 18,
// };

//

//

//

// const locations = {
//   city: "bhopal",
//   coordinates: {
//     lat: 23.8,
//     lng: 28.2,
//   },
// };

//

//
// let locations = {
//   city: "ujjain",
//   coordinates: {
//     lat: 3290,
//     lng: 93.2,
//   },
// };

// let { city } = locations;
// let { lng } = locations.coordinates;

//

//
// const user = {
//   "first-name": "akshat",
// };

// let firstname = user["first-name"];
// let { "first-name": firstname } = user;

//

//

// const course = {
//   title: "javascript",
//   duration: "4 weeks",
//   Name: "Akshat",
//   Occupation: "student",
//   lastName: "Goswami",
//   email: "akshatgoswami036@gmail.com",
// };

// Object.entries(course).forEach(function (val) {
//   console.log(val[0] + " : " + val[1]);
// });

//

//

// const obj1 = {
//   info: {
//     score: 80,
//   },
// };
// let newobj = JSON.parse(JSON.stringify(obj1));
// newobj.info.score = 100;

//

//
// const person = {};
// console.log(person?.profile?.name);

//

//

// const key = "role";
// let obj = {
//   name: "harsh",
//   [key]: "admin",
// };
