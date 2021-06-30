const prompt = require('prompt-sync')();
const number = prompt('Enter number ');
for (var i = 0; i <= number; i++) {
    console.log(2 ** i);
}