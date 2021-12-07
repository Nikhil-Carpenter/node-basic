const express = require('express')
const app = express()
const port = 3000;

 //get apis
app.get('/', function (req, res) {
  res.send('Hello World ')
})
app.get('/login/', function (req, res) {
  res.send('welcome to login page ')
})
app.get('/admin/', function (req, res) {
  res.send('welcome to adminpanel ')
})

// post apis

app.post('/', function (req, res) {
  res.send('Hello World post')
})
app.post('/login/', function (req, res) {
  res.send('welcome to login page post')
})
app.post('/admin/', function (req, res) {
  res.send('welcome to admin panel post ')
})


 
app.listen(port,displayMessage)

function displayMessage(){
  console.log("My project is running......")
}
