# number-to-words-rupiah

This npm package will convert numbers to words in Indonesian Rupiah (IDR) format. With a **minimum** number of 0 and **maximum** number of 999999999999999.


#### Installation
```
npm install --save number-to-words-rupiah
```


#### Usage
```javascript
var convertToRupiah = require('number-to-words-rupiah')

console.log(convertToRupiah(1900817));
//will return: Satu Juta Sembilan Ratus Ribu Delapan Ratus Tujuh Belas Rupiah

console.log(convertToRupiah(9999999999999999));
//will return: Input number is out of scope, maximum number is 999999999999999, minimum number is 0

```
