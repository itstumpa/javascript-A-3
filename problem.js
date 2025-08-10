/** Problem -01 ( Divide the Asset ) */
//write your code here

var area = 800;
eachBroShare = area / 2;

console.log(eachBroShare);    




/** Problem -02 ( Cycle or Laptop ) */
//write your code here


var money = 10000;

console.log(
  money >= 25000 ? 'Laptop' :
  money >= 10000 ? 'Cycle' :
      'Chocolate'
)


/** Problem -03 ( Medicine Planner ) */
//write your code here

var lastDay = 11;

for (let i = 1; i <= lastDay; i++) {
      if(i % 3 === 0) {
console.log(i + ' - medicine');
      } else{
            console.log(i + ' - rest');
      }
      
}


/** Problem 04 - (Delete / Store) */
//write your code here


var fileName = "slipdf.txt";
console.log(
  fileName.startsWith('#') || fileName.endsWith('.pdf') || fileName.endsWith('.docx') ? 'Store' : 'Delete'
);


/** Problem 05 - ( PH Email Generator )  */
//write your code here


var student = { name: "jhankar", roll: 1014, department: "cse" }

var email = student.name + student.roll + "." + student.department + "@ph.ac.bd";

  console.log(email);




/** Problem 06 :  (Current Salary )  */
//write your code here


var experience = 30;
var startingSalary = 45000;

var currentSalary = startingSalary;

for (var i = 1; i <= experience; i++) {
    currentSalary = currentSalary * 1.05;
}

console.log(currentSalary.toFixed(2));