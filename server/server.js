const express = require('express')
const cors = require('cors')
const app = express();

require('./configs/mongoose.config')

//connect between front end and back end
app.use(cors())
// to use post request
app.use(express.json())
app.use(express.urlencoded({extended:true}))

require('./routes/authors.routes')(app)
app.listen(8000, ()=>{
    console.log("You are now listening to port 8000");
})