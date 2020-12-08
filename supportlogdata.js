const speedurl = "mongodb+srv://application:speedwagonemail@cluster0.yonf1.mongodb.net/speedwagonmail?retryWrites=true&w=majority"

const mongoose = require("mongoose")
mongoose.connect(speedurl, {useNewUrlParser: true, useUnifiedTopology: true,socketTimeoutMS:10*1000})
const db = mongoose.connection;
db.once('open',()=>{console.log("Connected")})
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