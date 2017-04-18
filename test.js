'use strict'
var calculator = require('./index.js')
/*
Usage:
  - adding number    : calculator.calAdd(number, numberToAdd)
  - substract number : calculator.calSub(number, numberToSubstract)
  - multiply number  : calculator.calMultiply(number, numberToMultiply)
  - divide number    : calculator.calDivide(number, numberToDivide)
  - square number    : calculator.calSquare(number, numberToSquare)
  - squareRoot number: calculator.calSquareRoot(number)
*/

console.log('4 + 5 = '+calculator.calAdd(4,5));
console.log('5 - 4 = '+calculator.calSub(5,4));
console.log('5 * 4 =  '+calculator.calMultiply(5,4));
console.log('10 / 2 = '+calculator.calDivide(10,2));
console.log('10 ^ 2 = '+calculator.calPower(10,2));
console.log('SquareRoot 4 = '+calculator.calSquareRoot(4));
