const mongoose = require('mongoose');

// Defining Schema for User

const UserSchema = mongoose.Schema({

    first_name :{
        type : String,
        length : 10
    },
    middle_name :{
        type : String,
        length : 10
    },
    last_name :{
        type : String,
        length : 10
    },
    contact_number :{
        type : String,
        length : 10
    },

});

// Exporting User Schema

module.exports = mongoose.model('Users', UserSchema);