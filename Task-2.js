//_______________________________________________TAsk-2___________________________________________________
// 1️⃣ Createing Student Data

let students = [
 {id:1, name:"Naveen", mark:85, course:"MERN"},
 {id:2, name:"John", mark:45, course:"Python"},
 {id:3, name:"Priya", mark:72, course:"Java"},
 {id:4, name:"Arun", mark:95, course:"React"}
]

//-----------------------------------secation-1----------------------------------------------------

// 📌 Task 1: Print All Students
// Use loop and print:
// 1 Naveen 85 MERN
// 2 John 45 Python

console.log("----------task-1-------------------------");

for(let i=0; i<students.length; i++){
    let s=students[i];
    console.log(s.id , s.name, s.mark, s.course);
}

//using the for of 
for(let a of students){
    console.log(a.id, a.name, a.mark, a.course);
    
}

//-----------------------------------secation-2----------------------------------------------------
// 📌 Task 2: Pass / Fail
// Condition:
// mark >= 50 → Pass
// Below 50 → Fail
// Output:
// Naveen - Pass
// John - Fail
console.log("----------task-2-------------------------");


for(let a of students){
    if(a.mark >= 50){
        console.log(a.name +" pass..........");
    }else{
        console.log(a.name +" Fail........");
    }
}

//using the ternery operator

for(let a of students){
    let result = (a.mark >=50) ? "pass" : "Fail";
    console.log(a.name +" " +result);
}

//-----------------------------------secation-2----------------------------------------------------
//    Task 3: Grade System
// 90+ = A Grade
// 75+ = B Grade
// 50+ = C Grade
// Below 50 = Fail
console.log("----------task-3-------------------------");


for(let s of students){
    let grade;

    if(s.mark >=90){
        grade= "A Grade";
    }else if(s.mark >=75){
        grade= "B Grade"
    }else if(s.mark >=50){
        grade= "C Grade";
    }else{
        grade ="Fail";
    }

    console.log(s.name + " " +grade);
    
}

//-----------------------------------secation-4----------------------------------------------------
// Find highest mark student.
// Output:
// Topper is Arun - 95
console.log("----------task-4-------------------------");
let topstd=students[0];

for(let s of students){
    if(s.mark > topstd.mark){
        topstd=s;
    }
}
console.log("Topper Student is " +topstd.name + ":-" + topstd.mark);

//-----------------------------------secation-5----------------------------------------------------
// 📌 Task 5: Course Search
// If course = React print student details.
console.log("----------task-5-------------------------");

let searchcourse=prompt("enter the course name:-");

for(let s of students){
    if(s.course.toLowerCase() === searchcourse.toLowerCase()){
        console.log(s.id, s.name, s.mark, s.course);
    }
    
}

//-----------------------------------secation-6----------------------------------------------------
// 📌 Task 6: Add New Student
// Add:
// {id:5,name:"Rahul",mark:88,course:"Node JS"}
// Then print all data.
console.log("----------task-6-------------------------");

students.push({
    id:5,
    name:"Rahul",
    mark:88,
    course:"Node JS"
})

for(let s of students){
    console.log(s.id, s.name, s.mark, s.course);
}

//-----------------------------------secation-7----------------------------------------------------
// 📌 Task 7: Attendance System
// Use switch:
// status = "present"
// Output:
// present → Welcome
// absent → Mark Absent
// leave → Approved Leave

console.log("----------task-7-------------------------");

let status= "present";

switch(status){
    case "present":
        console.log("Welcome");
        break;
    case "absent":
        console.log("Mark Absent");
       break;
    case "leave":
        console.log("Approved Leave");
    default:
        console.log("give the proper input");
             
}

//-----------------------------------secation-7----------------------------------------------------
// 📌 Task 8: Login System
// username = "admin"
// password = "1234"
// If correct:
// Login Success
// Else:
// Invalid User
console.log("----------task-8-------------------------");

let username=prompt("Enter the User Name:--");
let password=prompt("Enter the Password:--");

if(username==="admin" && password==="1234"){
    console.log("Login Sucess..");
    alert("Login Sucess")
    
}else{
    console.log("Invalid User");
    alert("Invalid User");
}



