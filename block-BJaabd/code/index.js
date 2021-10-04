// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/

let age = Number(prompt('Enter Age'));
if(age>12 && age<55)
console.log("You can participate in the marathon");
else if(age>4 && age<11)
console.log("You are too young to participate in the marathon");
else if(age<4)
console.log("Hey Kiddo! Can You Walk ?");
else if(age>55)
console.log("You are too old to participate in the marthon");
else
console.log("Enter valid age");

// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/

let n = Number(prompt('Enter value of n'));
let e = '';
for(i=1; i<=n; i++)
{
  e = e + 'e';
}
console.log(`h${e}llo`);
/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/

let n = Number(prompt('Enter the value of n'));
let i=1, sum=0;
while(i<=n)
{
  sum = sum + i;
  i++;
}
alert(sum);

/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/

let num = Number(prompt('Enter the number'));
switch(num){
  case 1: alert('ONE')
  break;
  case 2: alert('TWO')
  break;
  case 3: alert('THREE')
  break;
  case 4: alert('FOUR')
  break;
  case 5: alert('FIVE')
  break;
  case 6: alert('SIX')
  break;
  case 7: alert('SEVEN')
  break;
  case 8: alert('EIGHT')
  break;
  case 9: alert('NINE')
  break;
  default: alert('PLEASE TRY AGAIN');
}


/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

let marks = Number(prompt('Enter marks(0-100)'));
switch(true){
  case marks>90 : alert('AA');
  break;
  case marks>80 && marks<90 : alert('AB')
  break;
  case marks>70 && marks<80 : alert('BB')
  break;
  case marks>60 && marks<70 : alert('BC')
  break;
  case marks>50 && marks<60 : alert('CC')
  break;
  case marks>40 && marks<50 : alert('CD')
  break;
  case marks>30 && marks<40 : alert('DD')
  break;
  case  marks<30 : alert('FF')
  break;
  default: alert('Invalid marks');
}


/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/

let number1 = Number(prompt('Enter number 1'));
let number2 = Number(prompt('Enter number 2'));
if(number1>number2)
alert(number1);
else
alert(number2);


/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/

let num1 = Number(prompt('Enter number 1'));
let num2 = Number(prompt('Enter number 2'));
let num3 = Number(prompt('Enter number 3'));
let product = num1*num2*num3;
alert(product);


/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

let number1 = Number(prompt('Enter number 1'));
let number2 = Number(prompt('Enter number 2'));
let operation = prompt('Enter operation');
if(operation == 'add')
alert(number1+number2);
else if(operation == 'sub')
{
  if(number2>number1)
  alert('Number Two is larger then Number one');
  else
  alert(number1-number2);
}
else if(operation == 'mul')
alert(number1*number2);
else if(operation == 'div')
{
  if(number2>number1)
  alert('Number Two is larger then Number one');
  else
  alert(number1/number2);
}
else
alert('Invalid operation');
