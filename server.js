const express = require('express')
const bodyParser = require('body-parser')
const mustacheExpress = require('mustache-express')
const dal = require('./dal')
const roboties = dal.getRobot()

// const url =


// console.log(dal);
let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
    console.log("roboties", roboties)
    res.render('index', {roboties: roboties})
})

app.listen(3000, function(){
  console.log('Server started on port: 3000')
})
