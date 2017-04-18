# darren-super-calculator

** Description ** <br>
darren-super-calculator is a library to use to make calculation easier.

** Installation **
```
npm install darren-super-calculator --save
```

** Usage ** <br>
** calculator(whatTodo) ** <br>
  The parameter whatTodo is a string, you can enter one or more function from above, and if you use more than one function, you have to use 'zidane:' as separation :
* p(stringNumberCommaSeparated)<br>
  This is to sum calculation
* m(stringNumberCommaSeparated)<br>
    This is to substract calculation
* x(stringNumberCommaSeparated)<br>
    This is to multiply calculation
* d(stringNumberCommaSeparated)<br>
  This is to divide calculation

** Example of usage **
```javascript
let result = calculator('x(10,3)zidane:m(2,8)zidane:d(2,3)');
```
