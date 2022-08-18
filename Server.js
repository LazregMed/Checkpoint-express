const express = require('express');
const Userlist = require('./UserList');
const app = express();
const Port = 8000;
const AuthMiddleWare = (req, res, next) => {
      const d = new Date()
      if (d.getDay() === 6 || d.getDay() === 7 || d.getHours() > 17 || d.getHours() < 9) {
            res.send('<h1> The web application is only available during working hours (Monday to Friday,  from 9 to 17). </h1>')
      }
      else { res.send('You are not authorized') }
}
app.use(AuthMiddleWare)
app.get('/', (red, res) => {
      res.sendFile(__dirname + '/views/Home page.html')

})

app.get('/Contact', (red, res) => {
      res.sendFile(__dirname + '/views/Contact us.html')

})
app.get('/Services', (red, res) => {
      res.sendFile(__dirname + '/views/Our Services.html')

})
app.listen(Port, err => err ? console.log(err) : console.log(`server is running  ${Port}`))
