'use strict'

let result = 0;

let p = function(n){
  let array = n.split(',');
  if(array.length == 1) result += Number(array[0]);
  else {
    let sum = array.reduce((pv, cv) => Number(pv)+Number(cv), 0);
    result += sum;
  }
}

let m = function(n){
  let array = n.split(',');
  if(array.length == 1) result -= Number(array[0]);
  else {
    let deduction = array.reduce((pv, cv) => Number(pv)-Number(cv), 0);
    result += deduction;
  }
}

let x = function(n){
  let array = n.split(',');
  if(array.length == 1) result *= Number(array[0]);
  else {
    let multiply = array.reduce((pv, cv) => Number(pv)*Number(cv), 1);
    result += multiply;
  }
}

let d = function(n){
  let array = n.split(',');
  if(array.length == 1) result /= Number(array[0]);
  else {
    let divide = array.reduce((pv, cv) => Number(pv)/Number(cv), 1);
    result *= divide;
  }
}

let calculator = function (whatTodo){
  result = 0;
  let array = whatTodo.split('zidane:');
  for(let i=0;i<array.length;i++){
    let funct = array[i][0];
    let param = array[i].slice(2,array[i].length-1);
    switch (funct) {
      case 'p':
        p(param);
        console.log(result);
        break;
      case 'm':
        m(param);
        console.log(result);
        break;
      case 'x':
        x(param);
        console.log(result);
        break;
      case 'd':
        d(param);
        console.log(result);
        break;
      default:

    }
  }
  return result;
}

module.exports = {
  calculator
}
