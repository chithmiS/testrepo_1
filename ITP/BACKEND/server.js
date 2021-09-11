const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const fileRoute = require('./routes/file');





const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads',express.static('uploads'))
app.use(fileRoute);

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false


});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection Success!");
})







app.listen(PORT, () => {
   
   console.log(`Server is up and running on port number: ${PORT}`)
})


