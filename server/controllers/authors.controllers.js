const { request, response } = require("express");
const { Author } = require("../models/authors.models");
//create
module.exports.createAuthor = (request, response) => {
    const {name} = request.body;
    Author.create({
      name 
    })
    .then(author=>response.json(author))
    .catch(err=>response.status(400).json(err))
}

// get all
module.exports.getAllAuthors = (request, response) => {
    Author.find({})
        .then(authors => response.json(authors))
        .catch(err=>response.json(err))
}

// get one
module.exports.getAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(author=> response.json(author))
        .catch(err=>response.json(err))
}

//update
module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id:request.params.id}, request.body, {new:true, runValidators: true})
        .then(updatedAuthor=>response.json(updatedAuthor))
        .catch(err=>response.status(400).json(err))
}

//delete
module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirm => response.json(deleteConfirm))
        .catch(err=> response.json(err))
}