'use strict'

class Calculator {
  //write your code here
  constructor (angka) {
    this.angka = angka;
  }
  add (angTambah) {
    this.angka += angTambah;
    return this;
  }
  substract (angKurang) {
    this.angka -= angKurang;
    return this;
  }
  multiply (angKali) {
    this.angka *= angKali;
    return this;
  }
  divide (angBagi) {
    this.angka /= angBagi;
    return this;
  }
  power (angPangkat) {
    this.angka = Math.pow(this.angka, angPangkat);
    return this;
  }
  squareRoot (angAkar) {
    this.angka = Math.sqrt(this.angka);
    return this;
  }
}

var calAdd = (number, numberToAdd) => {
  let cal = new Calculator(number);
  let hasil = cal.add(numberToAdd);
  return hasil.angka;
}

var calSub = (number, numberToSubstract) => {
  let cal = new Calculator(number);
  let hasil = cal.substract(numberToSubstract);
  return hasil.angka;
}

var calMultiply = (number, numberToMultiply) => {
  let cal = new Calculator(number);
  let hasil = cal.multiply(numberToMultiply);
  return hasil.angka;
}

var calDivide = (number, numberToDivide) => {
  let cal = new Calculator(number);
  let hasil = cal.divide(numberToDivide);
  return hasil.angka;
}

var calPower = (number, numberToPower) => {
  let cal = new Calculator(number);
  let hasil = cal.power(numberToPower);
  return hasil.angka;
}

var calSquareRoot = (numberToSquareRoot) => {
  let cal = new Calculator(numberToSquareRoot);
  let hasil = cal.squareRoot(numberToSquareRoot);
  return hasil.angka;
}

module.exports = {
  calAdd,
  calSub,
  calMultiply,
  calDivide,
  calPower,
  calSquareRoot
}
