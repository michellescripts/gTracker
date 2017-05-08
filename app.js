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

app.get('/', function (req, res) {
  var cohort
  pg('cohort').select().then(function (ret) {
    cohort = ret
    return pg('instructor').select()
  }).then(function (instructor) {
    res.render('index', {
      instructor: instructor,
      cohort: cohort
    })
  })
})

app.post('/instructor', (req, res) => {
  query.getCohortInst(req.body.id)
  .then(function (data) {
    res.render('data', {data})
  })
})

app.post('/cohort', (req, res) => {
  console.log('id:')
  console.log(req.body.id)
  query.getCohort(req.body.id)
  .then(function (data) {
    console.log('data:')
    console.log(data)
    res.render('cohort', {data})
  })
})

app.post('/addCohort', (req, res) => {
  console.log(req.body)
  pg('cohort')
        .insert(req.body)
        .then(() => {
          res.redirect('/')
        })
})

app.post('/addInstructor', (req, res) => {
  console.log(req.body)
  pg('instructor')
        .insert(req.body)
        .then(() => {
          res.redirect('/')
        })
})

app.post('/addJoin', (req, res) => {
  req.body.cohort_id = +req.body.cohort_id
  req.body.instructor_id = +req.body.instructor_id
  console.log(req.body)
  pg('cohort_instructor')
    .insert(req.body)
    .then(() => {
      res.redirect('/')
    })
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})
