const prompt = require('prompt-sync')();
const num = prompt('Enter number :  ');
var i = 0;
while(i <= num || 2**i == 256){
    console.log(2**i);
    i++;
}