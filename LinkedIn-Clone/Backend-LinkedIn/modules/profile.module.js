const mongoose = require("mongoose");
const profileSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    headline : {
        type : String,
    },
    summary : {
        type : String
    },
    experiances : [{
        companyName : String,
        joiningDate : Date,
        lastDate : Date,
        description : String 
    }],
    skills : {
        type : [String]
    },
    education : [{
        schoolName : String,
        session : String,
        
    }]
})