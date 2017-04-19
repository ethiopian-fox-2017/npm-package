# convert-your-currency

> A simple currency async converter using fixer.io API to get rates

### Install

```
$ npm install --save convert-your-currency
```

### Usage

```javascript
let currency = require('convert-your-currency')

/*
  @Param
    - amount / value in number
    - base currency needed to convert
    - target converted currency
*/

converter.convert(1000, 'USD', 'AUD', (data)=> {
  // your function here
  // console.log(data) ==> AUD 1,319.60 (or different value depends on current rate)
})


```

### License

MIT