const mongoose = require('mongoose')
// const { string } = require('zod')

mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.1')
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo = mongoose.model('todos',todoSchema);
module.exports = {
    todo
}