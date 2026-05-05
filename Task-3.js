//_______________________________________________TAsk-3___________________________________________________
// ***************************************Level 1 – Functions Basics*************************************

//------------------------------QUE-1----------------------------------------------------
// Task 1: Student Form Function
// Create a function studentForm(name, age, course) and print:
// Name: Naveen
// Age: 22
// Course: MERN

function studentForm(name, age, coures) {
  console.log("Name: ", name);
  console.log("Age: ", age);
  console.log("Courese: ", coures);
}

studentForm("Aniket", 24, "MERN");

//------------------------------QUE-2----------------------------------------------------
// Task 2: Calculator Function
// Create function calc(a,b):
// print addition
// print subtraction
// print multiplication

function calc(a, b) {
  console.log("Addition: ", a + b);
  console.log("Subtraction: ", a - b);
  console.log("Multiplication: ", a * b);
  console.log("Division: ", a / b);
}

calc(20, 10);

//------------------------------QUE-3----------------------------------------------------
// Task 3: Reusable Greeting
// Call same function for 3 users:
// Hello Kamal
// Hello Praveen
// Hello Sai

let user = (name) => {
  console.log("Hello ", name);
};

user("Aniket");
user("Praveen");
user("Komal");

// *************************************** Level 2 – Return & Scope*************************************
//------------------------------QUE-4----------------------------------------------------
// Create function square(num)
// Return square value.
// Example:
// square(5) // 25

let square1 = (num) => {
  return num * num;
};
console.log(square1(5));

//------------------------------QUE-5----------------------------------------------------
// Task 5: Scope Check
// Inside function:
// let secret = "javascript"
// Try printing outside function.
// Observe what happens.
// Explain why.

function Testscope() {
  let secret = "javascript";
  console.log("function inside data printing", secret);
}
Testscope();

// console.log("Outer side call the data :", secret);    //showing the ReferenceError error
//ans:----> secret is the declared useing the let inside the Testscope funcation. this is the function scope that mean they can only bve accessible in that funaction. and the outerside function secret variable is not accessible

// *************************************** Level 3 – Spread / Rest*************************************

//------------------------------QUE-6----------------------------------------------------
// Task 6: Merge Arrays
// let boys = ["car","bike"]
// let girls = ["doll","teddy"]
// Use spread operator and make:
// ["car","bike","doll","teddy"]

let boys = ["car", "bike"];
let girls = ["doll", "teddy"];

let merge = [...boys, ...girls];
console.log(merge);

//------------------------------QUE-7----------------------------------------------------
// Create function:
// sumAll(...nums)
// Pass:
// sumAll(10,20,30,40)
// Output:
// 100

function Sumall(...num) {
  let sum = 0;
  for (let n of num) {
    sum += n;
  }
  return sum;
}

console.log(Sumall(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); //output=55

// ***************************************  Level 4 – Destructuring*************************************

//------------------------------QUE-8--------------------
// Task 8: Array Destructuring
// let colors = ["red","green","blue"]
// Store into:
// c1 c2 c3
// Print all.

let colors = ["red", "green", "blue"];

let [c1, c2, c3] = colors;
console.log("c1 color: ", c1);
console.log("c2 color: ", c2);
console.log("c3 color: ", c3);

//------------------------------QUE-9--------------------
// Task 9: Object Destructuring
// let emp = {
//  name:"Naveen",
//  role:"Developer",
//  salary:"5LPA"
// }
// Destructure and print:
// Naveen Developer

let emp = {
  name: "Naveen",
  role: "Developer",
  salary: "5LPA",
};

let { name, role } = emp;
console.log(name, role);

// *************************************** Level 5 – Real-Time Logic************************************

//------------------------------QUE-10--------------------
// Task 10: Offer Generator
// Use generator function.
// Each next() should give:
// 10% cashback
// 20% cashback
// 50% cashback
// Try again
// After completed:
// No more offers

function* offergenerator() {
  yield "10% cashback";
  yield "20% cashback";
  yield "50% cashback";
  yield "Try Again";
}

let offers = offergenerator();

console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);

console.log(offers.next().value || "NO more offers");

// ***************************************  Level 6 – Advanced************************************

//------------------------------QUE-11--------------------
// Task 11: Curry Function
// Make:
// add(10)(20)(30)
// Output:
// 60

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(10)(20)(30));

//using arroy function type

let addarroy = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};
console.log(addarroy(10)(20)(30));

//------------------------------QUE-12--------------------
// Task 12: Student Marks Analyzer
// Create function:
// marks(...nums)
// Input:
// marks(80,90,70,60)
// Output:
// Total = 300
// Average = 75

let marks = (...nums) => {
  let total = 0;
  for (let n of nums) {
    total += n;
  }
  let avg = total / nums.length;
  console.log("total:", total);
  console.log("Average:", avg);
};
console.log(marks(80, 90, 70, 60));

// *************************************** Challenge Task (Real Company Level)************************************

// Create employee registration system:
// register(name, role, ...skills)
// Example:
// register("Naveen","Frontend","HTML","CSS","JS","React")
// Output:
// Name: Naveen
// Role: Frontend
// Skills: HTML CSS JS React

let register = (name, role, ...skills) => {
  console.log("Name:", name);
  console.log("Role:", role);
  console.log("Skills:", skills.join(" "));
};

console.log(
  register("Aniket", "java Developer", "java", "HTML", "CSS", "js", "React"),
);
