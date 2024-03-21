// Chaper no 2

// Question 1
let username;

// Question 2
let myName = "Syed Abrar Ahmed Tirmizi";

// Question 3
let message = "Hello World";
alert(message);

// Question 4
let name = prompt("What is Your Name");
alert("Welcom " + name);
console.log(name);

let age = prompt("What is Your Age");
alert(age + " year old");
console.log(age);

let course = prompt("Which Course You Are Enrolled");
alert(course);
console.log(course);

// Question 5
alert("PIZZA\nPIZZ\nPIZ\nPI\nP");

// Question 6
let email = "saylani@gmail.com";
alert("My email address is " + email);

// Question 7
let book = "A Smarter way to Learn JavaScript";
alert("I'm trying to learn from the Book " + book);

// Question 8
document.getElementById("write").innerHTML =
  "Yah! I can write HTML content throught JavaScript";

// Question 9
let design = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(design);

// Chapter no 4

// Question 1
let string = "Name",
  num = 10,
  boolean = false;

// Question 2
//   LEGAL VARIABLES
let name;
let myName;
let $name;
let name1;
let my_name;

// ILLEGAL VARIABLES
// let Name
// let My-Name
// let NaMe's
// let Name,125
// let My Name

// Question 3


document.getElementById("heading").innerHTML =
  "“Rules for naming JS variables”";


document.getElementById("B").innerHTML =
  "Variable names can only contain , numbers, S and _ . For example : $my_1stVariable";


document.getElementById("C").innerHTML =
  "Variables must begin with a letter, $ or _ . For example : $name, _name or name";


document.getElementById("D").innerHTML = "Variable names are case sensitive";


document.getElementById("E").innerHTML =
  "Variable names should not be JS keywords";

// Chapter no 5

let str1 = "Saleem"
let str2 = " Raza"
let str3 = str1.concat(str2)
console.log(str3);






  // Cost of one movie ticket is 600 PKR
  let ticketPrice = 600;

  // Number of tickets to buy
  let numberOfTickets = 5;

  // Calculate the total cost
  let totalCost = ticketPrice * numberOfTickets;

  // Output the result
  console.log(`Cost of one movie ticket is  ${ ticketPrice } `);
  console.log(`Cost of buying  ${numberOfTickets} tickets to a movie is ${ totalCost} `);

  // Chapter no 6

  // Question 1 
let number = 10;
document.write("The result value of a is: " + number + "<br/><br/>");

++number;
document.write("The value of ++a is: " + number + "<br/>");
document.write("Now the value of a is: " + number + "<br/><br/>");

number++;
document.write("The value of a++ is: 11 <br/>");
document.write("Now the value of a is: " + number + "<br/><br/>");

--number;
document.write("The value of --a is: " + number + "<br/>");
document.write("Now the value of a is: " + number + "<br/><br/>");

number--;
document.write("The value of a-- is: 11 <br/>");
document.write("Now the value of a is: " + number + "<br/><br/>");

//  Question 2 
let a = 2;
let b = 1;
--a;
--a - --b;
--a - --b + ++b;
document.write("a is = " + a + "<br/>");
document.write("b is = " + b + "<br/>");
//--a - --b | || b | b--; 