const mongoose = require('mongoose');
const {Schema} = require('mongoose');

// Student Schema
const userSchema = new Schema({
    name: String,
    age: Number,
    grade: String,
  });
  
  const Student = mongoose.model('Student', userSchema);

  module.exports = Student;