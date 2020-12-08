const mongoose = require("./database")

let rett = {};

const supportSchema = mongoose.Schema({
    ID:String,
    Username:String,
    Date_added:String,
    Status:String
})

const Support = mongoose.model("SupportLog",supportSchema)

rett.getSupport = ()=>{
    return Support.find({
    });
}

module.exports = rett;