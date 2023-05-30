const express = require('express'); //initialize the  express server
const bodyParser = require('body-parser'); //initialize the  body parser

const PORT = 3000; // add port number

const api = require('./routes/api');//here im using api module

const app = express();  // now we can use express server

app.use(bodyParser.json());// now with help of app we can use body server

app.use('/api',api);// here im using route module with help of express server

app.get('/', (req,res) => {
  res.send('Hi im from the server....!');
})

app.listen(PORT, function(){
   console.log('SERVER is running at port number == ' + PORT);
})

