
//-----------------------------------------------SECATION--1---------------------------------
// Create a variable using var with value 50.
// Change it to 100 and print final value in console.

let a=50;
a=100;
console.log("value od a :-" +a);   //output:value od a :-100

//-----------------------------------------------SECATION--2---------------------------------
// 🔹 Task 2: Let Variable Math
// Create let marks = 80
// Add 10 marks and print result.


let marks=80;

marks +=10;
console.log("total Marks: " +marks); 


//output: total Marks: 90
 
//-----------------------------------------------SECATION--3---------------------------------

// 🔹 Task 3: Const Value
// Create const price = 500
// Create another variable finalPrice = price + 100
// Print finalPrice

const price=500;
finalprice= price+100;
console.log("final price is : " +finalprice);


//output :final price is : 600

//-----------------------------------------------SECATION--4---------------------------------
// 🔹 Task 4: Printing Statements
// Print the following in console:
// "Welcome Team"
// 2026
// true


console.log("Welcome Team");
console.log(2026);
console.log(true);



//output:

// Welcome Team
// Task-4.js:9 2026
// Task-4.js:10 true

//-----------------------------------------------SECATION--5---------------------------------
// 🔹 Task 5: Datatype Check
// Check datatype of:
// "JavaScript"
// 250
// false
// Use typeof


console.log(typeof("JavaScript"));
console.log(typeof(250));
console.log(typeof(false));


//output:
// string
// number
// boolean
 

//-----------------------------------------------SECATION--6---------------------------------

// 🔹 Task 6: Array Task
// Create array with 5 fruits.
// Print:
// Full array
// First fruit
// Last fruit
// only banana mongo grapes


let fruit =["apple", "banana", "mongo", "grapes", "Orange"];

console.log(fruit); //output:  ['apple', 'banana', 'mongo', 'grapes', 'Orange']
console.log(fruit[0]);  //output:apple
console.log(fruit[fruit.length-1]);     //output: Orange
console.log(fruit.slice(1,4));  //output:  ['banana', 'mongo', 'grapes'

//-----------------------------------------------SECATION--7---------------------------------
// Create object:
// student = {
//  name: "Naveen",
//  age: 20,
//  course: "MERN"
// }
// Print:
// name
// age


let student = {
    Name:"aniket",
    Age:24,
    coures:"java full stack developer"
}

console.log("Name of the student: " +student.Name);
console.log("Age of the student: " +student.Age);


//output:
// Name of the student: aniket
// Age of the student: 24

//-----------------------------------------------SECATION-8-----------------------------------
// 🔹 Task 8: Arithmetic Operators
// Print result:
// 20 + 10
// 50 - 25
// 5 * 5
// 100 / 4
// 20 % 3



console.log("sum of the numbers:" +(20+10));  //output : 30
console.log("sub of the numbers " +(50-25));    //25
console.log("multi of the number: " +(5*5));       //25
console.log("div of the number : " +(100/4));       //25
console.log("mod of the numbers: " +(20%3));    //2




//-----------------------------------------------SECATION--9---------------------------------
// 🔹 Task 9: Increment / Decrement
// let x = 5;
// x++;
// console.log(x);
// Then:
// let y = 10;
// y--;
// console.log(y);


let x=5;
x++;
console.log(x);  //output:6


let y=10;
y--;
console.log(y);  //output: 9

//-----------------------------------------------SECATION--10---------------------------------

// 🔹 Task 10: Comparison Operators
// Print answers:
// 10 > 5
// 5 < 2
// 20 == "20"
// 15 === "15"
// 10 != 8


console.log(10>5);      //true
console.log(5<2);       //false
console.log(20 == "20");  // true
console.log(15 === "15"); //false
console.log(10 != 8);    //true

//-----------------------------------------------SECATION--11---------------------------------

// 🔹 Task 11: Logical Operators
// Print result:
// 5 > 2 && 10 > 3
// 7 < 5 || 8 > 2
// !(10 > 5)


console.log(5>2 && 10>3);  //true
console.log(7<5 || 8>2);  //true
console.log(!(10>5));   //false

//-----------------------------------------------SECATION--12---------------------------------
// 🔹 Task 12: Ternary Operator
// Check age:
// let age = 18;
// If age >= 18 print "Eligible" else "Not Eligible"


// let age=prompt();

// if (age >=18){
//     console.log("Eligible");
//     alert("Eligible");
// }
// else{
//     console.log("Not Eligible");
//     alert("Not Eligible")
    
// }


let age=prompt();
let result = (age >=18) ? "Eligible" :" Not Eligible";
console.log(result);
alert(result);









