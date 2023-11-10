const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
    {
message: {
    type: String,
    require: true,
},
author: {
    type: String,
    require: true
},
student: {
    type : String,
    age : 20 ,
    firstName: String,
    lastName: String
},
    },
{
timestamps: true,
},

);

module.exports = mongoose.model('post', postSchema);