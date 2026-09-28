// Variables with three different types
const userName = "Daisy";      // string
let age = 29;                  // number
let isStudent = true;          // boolean

// Review the values in the browser console (right-click > Inspect > Console)
console.log("Name:", userName, "| type:", typeof userName);
console.log("Age:", age, "| type:", typeof age);
console.log("Is student:", isStudent, "| type:", typeof isStudent);

// Display the values on the page using ids
document.getElementById("name").textContent = userName;
document.getElementById("name-output").textContent = userName;
document.getElementById("age-output").textContent = age;
document.getElementById("student-output").textContent = isStudent;
document.getElementById("message").textContent =
  userName + " is " + age + " years old.";
