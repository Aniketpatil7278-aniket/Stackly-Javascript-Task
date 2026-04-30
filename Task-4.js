//_______________________________________________TAsk-4___________________________________________________
// ***************************************LEVEL 1 (Basic Practice)*************************************
//------------------------------QUE-1----------------------------------------------------

// Task 1: Array Basics
// let arr = [10, 20, 30, 40, 50];
//  Print:
// First element
// Last element
// Total length

let arr = [10, 20, 30, 40, 50];
console.log(arr[0]);
console.log(arr[arr.length - 1]);
console.log(arr.length);

//------------------------------QUE-2----------------------------------------------------
//  Task 2: Push & Pop
// let arr = [1,2,3];
// Add 4,5 at end
// Remove last element
// Final output should be: [1,2,3,4]

let arr1 = [1, 2, 3];
arr1.push(4, 5);
console.log(arr1);
arr1.pop();
console.log(arr1);

//------------------------------QUE-3----------------------------------------------------
// Task 3: Includes Check
// Check if "javascript" exists in:
// let arr = ["html","css","javascript","react"];

let arr3 = ["html", "css", "javascript", "react"];

let includesvalue = arr3.includes("javascript");
console.log(includesvalue);

// *************************************** LEVEL 2 (Intermediate)*************************************
//------------------------------QUE-4----------------------------------------------------
//  Task 4: Filter Salaries
// let emp = [
//   {name:"A", salary:10000},
//   {name:"B", salary:50000},
//   {name:"C", salary:30000}
// ];

//  Get employees with salary greater than 20000

let emp = [
  { name: "A", salary: 10000 },
  { name: "B", salary: 50000 },
  { name: "C", salary: 30000 },
];

let checksalary = emp.filter((c, i, t) => {
  return c.salary > 20000;
});

console.log(checksalary);
//------------------------------QUE-5----------------------------------------------------

//  Task 5: Map Names
// From above array, return only:
// ["A","B","C"]

let onlyname = emp.map((c, i, t) => {
  console.log(c.name);
});

let onlyname1 = emp.map((e) => e.name);
console.log(onlyname1);

//------------------------------QUE-6----------------------------------------------------
// 🔹 Task 6: Reduce Sum
// 👉 Find total salary using reduce()

let totalsalary = emp.reduce((amount, c, i, t) => {
  return amount + c.salary;
}, 0);
console.log(totalsalary);

// *************************************** 🥋 LEVEL 3 (Logic Building)*************************************
//------------------------------QUE-7----------------------------------------------------
// 🔹 Task 7: Remove Duplicates
// let arr = [1,2,2,3,4,4,5];
// 👉 Output: [1,2,3,4,5]

let arr7 = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(arr7)]; //set is the object that store oinly the unique values

console.log(unique);

//------------------------------QUE-8----------------------------------------------------

//   Task 8: Find Largest Number
// let arr = [10, 200, 5, 90];
// 👉 Output: 200

let arr8 = [10, 200, 5, 90];

console.log("Max value:", Math.max(...arr8));
console.log("Min Value:", Math.min(...arr8));

//or without useing the math function

let max = arr8[0];
for (let n of arr8) {
  if (n > max) {
    max = n;
  }
}
console.log("using for loop max value:", max);

//------------------------------QUE-9----------------------------------------------------
// 🔹 Task 9: Reverse String WITHOUT reverse()
// let str = "hello";
// 👉 Output: "olleh

let str = "hello";
let res = "";

for (let i = str.length - 1; i >= 0; i--) {
  res += str[i];
}
console.log(res);

//or for...of  useing loop
let res1 = "";
for (let s of str) {
  res1 = s + res1;
}
console.log(res1);

// ***************************************🥋 LEVEL 4 (Advanced Thinking)*************************************
//------------------------------QUE-10----------------------------------------------------

// 🔹 Task 10: Group by Salary
// let emp = [
//   {name:"A", salary:10000},
//   {name:"B", salary:50000},
//   {name:"C", salary:10000}
// ];
// 👉 Output:
// {
//   10000: ["A","C"],
//   50000: ["B"]
// }

let emp1 = [
  { name: "A", salary: 10000 },
  { name: "B", salary: 50000 },
  { name: "C", salary: 10000 },
];

let result = {};
for (let e of emp1) {
  if (!result[e.salary]) {
    result[e.salary] = [];
  }
  result[e.salary].push(e.name);
}
console.log(result);

//------------------------------QUE-11----------------------------------------------------
//  Task 11: Flatten Array (without flat)
// let arr = [1,[2,[3,[4]]]];
// 👉 Output: [1,2,3,4]
let Flatten = (arr) =>
  arr.reduce((a, b) => a.concat(Array.isArray(b) ? Flatten(b) : b), []);

console.log(Flatten([1, [2, [3, [4]]]]));

//------------------------------QUE-12----------------------------------------------------
// 🔹 Task 12: Custom Sort (Descending)
// let arr = [5,2,9,1];
// 👉 Output: [9,5,2,1]

let arr12 = [5, 2, 9, 1];
let sortvalue = arr12.sort((a, b) => {
  return b - a;
});
console.log(sortvalue);

//------------------------------BONUS  que-13 ----------------------------------------------------
// 🔹 Task 13: Find Second Largest
// let arr = [10, 50, 20, 40];
// 👉 Output: 40

let arr13 = [10, 50, 20, 40];

let secandhigh = arr13.sort((a, b) => {
  return b - a;
});

console.log(arr13[1]);

//------------------------------BONUS que-14----------------------------------------------------
// 🔹 Task 14: Count Characters
// let str = "aabbccdde";
// 👉 Output:
// {a:2, b:2, c:2, d:2, e:1}

let str14 = "aabbccdde";
let count = {};
for (let ch of str14) {
  if (count[ch]) {
    count[ch]++;
  } else {
    count[ch] = 1;
  }
}
console.log(count);
