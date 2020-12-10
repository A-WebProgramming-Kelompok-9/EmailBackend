const mongoose = require("./database")
let rett = {};

//ngebikin struktur tabelnya
const emailSchema = mongoose.Schema({
    Send_Date:Date,
    Sender_Username:String,
    Receiver_List:String,
    Title:String,
    Content:String,
    Attachment_List:String
})

//isi parameter: <nama tabel>, <skema tabel>
const Email = mongoose.model("Email",emailSchema)

//select one
rett.getEmail = (id)=>{
    return Email.findOne({
        _id:id
    });
}


//select all
rett.getAllEmail = (userid,page)=>{
    return Email.find({
        Receiver_List:{ $regex: ".*" + userid + ".*"}
    },
        '_id Sender_Username Title Send_Date'
    ).skip(parseInt(page)*20).limit(20);
}
rett.getAllEmail2 = ()=>{
    return Email.find({
    }).limit(20);
}


//insert
rett.insertEmail = (username, receiver, title, content, attachment)=>{
    return Email.create({
        Send_Date:Date.now(),
        Sender_Username:username,
        Receiver_List:receiver,
        Title:title,
        Content:content,
        Attachment_List:attachment
    });
}


//delete
rett.deleteEmail = (id)=>{
    return Email.deleteOne({ //atau delete Many
        _id:id
    })
}

module.exports =  rett;