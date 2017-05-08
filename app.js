const express = require('express')
const app = express()
const query = require('./db/query')
const bodyParser = require('body-parser')
const pg = require('./db/knex')
const hbs = require('hbs')
const port = process.env.PORT || 3000

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use('/', express.static('public'))

app.get('/', (req, res) => {
  query.getData()
  .then(data => {
    console.log(data);
    res.render('index', {data})
  })
})




app.listen(port, () => {
  console.log(`listening on ${port}`)
})
