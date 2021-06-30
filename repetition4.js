const prompt = require('prompt-sync')();
const num1 = prompt('Enter number :  ');
const num2= prompt("Enter number :  ")
var myArray = new Array();
for (var i = num1; i <= num2; i++) {
    if (isPrime(i)) {
        myArray.push(i);
    }
}
for (let i of myArray) {
    console.log(i);
}
function isPrime(num) {
    if (num == 1) {
        return false;
    }
    else if (num == 2) {
        return true;
    }
    else {
        for (var i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}