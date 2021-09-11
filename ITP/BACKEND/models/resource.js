const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceSchema = new Schema({

    bookID : {
        type : String,
        
    },

    subject : {
        type : String,
        
    },

    title : {
        type : String,
        
    },

    auther : {
        type : String,
        
    },

    edition : {
        type : Number,
    },

    file  : {
        type : String,

    },




})

const Resource = mongoose.model("Resource",resourceSchema);

module.exports = Resource;