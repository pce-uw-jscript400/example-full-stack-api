const mongoose = require('mongoose')
const studentSchema = require('./student')

const schema = new mongoose.Schema({
  name: String,
  start_date: Date,
  end_date: Date,
  students: [studentSchema]
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

// export a model
module.exports = mongoose.model('Course', schema)