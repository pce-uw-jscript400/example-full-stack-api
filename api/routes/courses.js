const router = require('express').Router()
const Course = require('../models/course')

// GET ALL
router.get('/', (req, res, next) => {
  const status = 200
  Course.find().then(response => {
    res.json({ status, response })
  })
})

// CREATE
router.post('/', (req, res, next) => {
  const status = 201
  Course.create(req.body).then(response => {
    throw 'everything is broken'
    res.status(status).json({ status, response })
  }).catch(error => {
    console.error(error)
    const err = new Error('Validation problem. Add a useful message.')
    err.status = 400
    next(err)
  })
})

module.exports = router