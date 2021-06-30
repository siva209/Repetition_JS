const prompt = require('prompt-sync')();
const num = prompt('Enter number :  ');
var factorial = 1 ;
for(var i = num ; i >= 1 ; i--){
    factorial *= i ;
}
console.log("Factorial of " + num + " is " + factorial);