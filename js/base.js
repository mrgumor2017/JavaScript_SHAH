//alert("Hello Java Script!!!")
console.log("Hello JS from console")

let number = 10.35;
let email = "lena@gmail.com";
let flag = true;
console.log(number);
console.log(typeof(number));
console.log(`Number = ${number}, type : ${typeof(number)}`);
console.log(`Email = ${email}, type : ${typeof(email)}`);
console.log(`Flag = ${flag}, type : ${typeof(flag)}`);

number = 'hello';
email = false;
console.log(`Number = ${number}, type : ${typeof(number)}`);
console.log(`Email = ${email}, type : ${typeof(email)}`);

let empty;//undefined
let nullObject = null;//null
console.log(`Empty = ${empty}, type : ${typeof(empty)}`);
console.log(`Null Object = ${nullObject}, type : ${typeof(nullObject)}`);

let array = [1,2,3]
console.log(`array = ${array}, type : ${typeof(array)}`);

let summ = function(a,b){console.log(`${a} + ${b} = ${a+b}`)}
array = [10 ,57 ,'red','green', true, false,[11,21,111],summ]
console.log(`array = ${array}, type : ${typeof(array)}`);
console.log(`summ = ${summ}, type : ${typeof(summ)}`);
console.log(array[3])
console.log(array[6][1])
summ(5,7)
array[7](3,5)

const numbers = [11,5,74,8,6,3];
for (let i = 0; i < numbers.length; i++) {
    console.log(`[${i}] - ${numbers[i]}`)
}
numbers[0] = 100
//numbers = [1,2,3]
for (let i = 0; i < numbers.length; i++) {
    console.log(`[${i}] - ${numbers[i]}`)
}

console.log("Value : " + 333 + 100 + "!!!")
console.log(`Value : ${333 + 100} !!!`)
//forof + get all elements in array
for (const element of numbers) {
    console.log(element)
}
//forin - get all indexes
for (const index in numbers) {
    console.log(index)
}

console.log("Array lenght : " + numbers.length)
numbers[20] = 55
for (const element of numbers) {
    console.log(element)
}
console.log("Array lenght : " + numbers.length)
for (const index in numbers) {
    console.log(index)
}

console.log("Hello Js")
console.warn("Some warning!!!")
console.error("Some error!!!")

if (2> 4)
    console.log("True...")
else
    console.log("False...")

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
let message = (3 > 2)? "bigger": "less";

function divide(a,b)
{
    if(b==0){
        console.error("You can't divide by zero...")
        return;
    }
    return a/b;
}
function summa(a,b)
{
    return a+b;
}

//alert("Result : " + divide(10,3))

//let numA = +prompt("Enter your number A :")
//let numB = +prompt("Enter your number B :")
//alert("Result : " + divide(numA,numB))
//alert("Result : " + summa(numA,numB))

let num = +prompt("Введіть число:");
alert("Квадрат числа: " + num ** 2);

let num1 = +prompt("Введіть перше число:");
let num2 = +prompt("Введіть друге число:");
alert("Середнє арифметичне: " + (num1 + num2) / 2);

let side = +prompt("Введіть довжину сторони квадрата:");
alert("Площа квадрата: " + side ** 2);

let kilometers = +prompt("Введіть кількість кілометрів:");
alert(kilometers + " км = " + (kilometers *0.621371) + " миль");

let a = +prompt("Введіть перше число:");
let b = +prompt("Введіть друге число:");
alert(
  "Сума: " + (a + b) + 
  "\nРізниця: " + (a - b) +
  "\nДобуток: " + (a * b) +
  "\nЧастка: " + (a / b)
);

let a2 = +prompt("Введіть значення a:");
let b2 = +prompt("Введіть значення b:");
alert("Розв'язок рівняння: x = " + (-b2 / a2));

let hours = +prompt("Введіть поточну годину (0-23):");
let minutes = +prompt("Введіть поточні хвилини (0-59):");
let minutes2 = (23 - hours) * 60 + (60 - minutes);
alert("Залишилося часу: " + Math.floor(minutes2 / 60) + " годин і " + (minutes2 % 60) + " хвилин");

let number8 = +prompt("Введіть трицифрове число:");
alert("Друга цифра: " + Math.floor((number8 % 100) / 10));

let num9 = +prompt("Введіть п'ятизначне число:");
let lastDigit = num9 % 10; 
let restOfNum = Math.floor(num9 / 10); 
let result = lastDigit * 10000 + restOfNum; 
alert("Результат: " + result);


let salary = 250;
let rate = 0.1;
let sales = +prompt("Введіть загальну суму продажу:");
let totalSalary = salary + sales * rate;
alert("Зарплата працівника: $" + totalSalary);
