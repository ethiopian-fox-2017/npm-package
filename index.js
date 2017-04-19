const accounting = require('accounting')
const axios = require('axios')

// Define var
let fixer = 'http://api.fixer.io/latest'

// functions
module.exports = {

  convert(value, from, to, callback) {

    // Validate input
    if(typeof value !== 'number' || value == void 0 || value == null) {
      return 'Input a number / integer'
    }
    if(typeof from !== 'string' || from == void 0 || from == '') {
      return 'Input a valid currency A'
    }
    if(typeof to !== 'string' || to == void 0 || to == '') {
      return 'Input a valid currency B'
    }

    // get rates from fixer.io
    axios.get(`${fixer}?base=${from}`)
      .then((res)=> {

        let rates = res.data.rates,
            currencyRate = 0

        for(let rate in rates) {
          if(rate == to)
            currencyRate = rates[rate]
        }

        callback(accounting.formatMoney((value * currencyRate), `${to} `, 2))
      })
      .catch((err)=> {
        callback(err)
      })
  }
}