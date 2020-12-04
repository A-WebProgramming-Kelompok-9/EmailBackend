const speedurl = "mongodb+srv://application:speedwagonemail@cluster0.yonf1.mongodb.net/speedwagonmail?retryWrites=true&w=majority"

const mongoose = require("mongoose")
mongoose.connect(speedurl, {useNewUrlParser: true, useUnifiedTopology: true,socketTimeoutMS:10*1000})
const db = mongoose.connection;
db.once('open',()=>{console.log("Connected")})
let rett = {};

//ngebikin struktur tabelnya
const userAccSchema = mongoose.Schema({
    Username:String,
    Password:String,
    Alt_Email:String,
    Display_Name:String,
    Display_Pic:String,
    Background_Pic:String
})

//isi parameter: <nama tabel>, <skema tabel>
const UserAcc = mongoose.model("UserAccount",userAccSchema)

//select
rett.getUserAcc = ()=>{
    return UserAcc.find({
        //where disini
    });
}


//insert
rett.insertUserAcc = ()=>{
    return UserAcc.create({
        Username:"Yuriko192",
        Password:"Password123",
        Alt_Email:"Email123@gmail.com",
        Display_Name:"Yuriko",
        Display_Pic:"image.png",
        Background_Pic:"bg.png"
    });
}

//update
rett.updateUserAcc = ()=>{
    return UserAcc.updateOne( //atau updateMany
        {
            //where disini
        },{
            //set disini
        }
    );
}

//delete
rett.deleteUserAcc = ()=>{
    return UserAcc.deleteOne({ //atau delete Many
        Username: "Yuriko192"
    })
}

module.exports =  rett;