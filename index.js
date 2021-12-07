const express = require('express')
const app = express()
const port = 3000;
 
app.get('/', function (req, res) {
  res.send('Hello World i am Nikhil carpenter and hey')
})
 
app.listen(port,displayMessage)

function displayMessage(){
  console.log("My project is running......")
}
