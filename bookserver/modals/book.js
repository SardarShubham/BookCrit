const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const book = new Schema({
    name : {
        type : String
    },
    description : {
        type : String
    }
})

bookSchema = mongoose.model('book', book);
module.exports = bookSchema;