const speedurl = "mongodb+srv://application:speedwagonemail@cluster0.yonf1.mongodb.net/speedwagonmail?retryWrites=true&w=majority"
const mongoose = require("mongoose")
mongoose.connect(speedurl, {useNewUrlParser: true, useUnifiedTopology: true,socketTimeoutMS:10*1000})
const db = mongoose.connection;
db.once('open',()=>{console.log("Connected")})

let rett = {};

//ngebikin struktur tabelnya
const userAccSchema = mongoose.Schema({
    Username:String, //kolom 1
    Password:String, //kolom 2
    Alt_Email:String, //kolom 3
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
rett.insertUserAcc = (uname, password)=>{
    return UserAcc.create({
        Username:uname,
        Password:password,
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
rett.deleteUserAcc = (uname)=>{
    return UserAcc.deleteOne({ //atau delete Many
        //where disini
        Username: uname
    })
}

module.exports =  rett;