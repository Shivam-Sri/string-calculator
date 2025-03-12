const { add } = require('./stringCalculator');
   
// Examples
console.log(add('1,2,3')); // Output: 6
console.log(add('//;\n1;2;3')); // Output: 6
console.log(add('//[***]\n1***2***3')); // Output: 6