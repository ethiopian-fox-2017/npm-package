# Easy email

### install
```
npm install easygmail
```

### example - step 1
first thing first, create your app.js and run it, to get query for token. if you dont set your callback url yet, go to your Google API manager, and set your callback url.
if you already got the token, you can skip this step, and jump to step 3
```
var express = require('express')
var app = express()


app.use('<your-callback-url>', function(req,res) {
  res.json('Code: '+req.query.code)
})

```
### example - step 2
run the app.js file and follow the instruction. Code will be sent to your callback url. and use it to generate token file

```
node app.js
```


### example - step 3
you can get the client_secret.json file from Google API Manager
```
var ezemail = require('easygmail');

var SCOPES = ['https://www.googleapis.com/auth/gmail.compose'],
    TOKEN_DIR = '/home/user/Documents/path/to/your/token/',
    TOKEN_PATH = TOKEN_DIR + 'gmail-nodejs-quickstart.json',
    client_secret_dir = 'path/to/your/client_secret.json'

var youremail = {
  from: 'anthonyjuan95@gmail.com',
  to: 'anthonyjuan95@gmail.com',
  title: 'wassup dude',
  content: 'wassaaaah dude'
}

ezemail.sendEmail(TOKEN_PATH,SCOPES,client_secret_dir,youremail);
```





