const converter = require('./index')

converter.convert(1000, 'USD', 'AUD', (data)=> {
  console.log(data)
})
