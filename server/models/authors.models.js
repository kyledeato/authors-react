const mongoose = require('mongoose')

const AuthorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must at least be 3 characters long"]
    }
    
}, {timestamps:true})

module.exports.Author = mongoose.model("Author", AuthorsSchema)