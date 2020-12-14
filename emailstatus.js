const mongoose = require("./database")
let rett = {};

//ngebikin struktur tabelnya
const emailStatusSchema = mongoose.Schema({
    Id_Email:String,
    Username:String,
    Status:String
})

//isi parameter: <nama tabel>, <skema tabel>
const EmailStatus = mongoose.model("EmailStatus",emailStatusSchema)

//Add
rett.insertEmailStatus = (id,username,status)=>{
    return EmailStatus.create({
        Id_Email:id,
        Username:username,
        Status:status
    });
}

//Delete
rett.deleteEmailStatus = (idmail, username)=>{
    return EmailStatus.deleteOne({ //atau delete Many
        Id_Email:idmail,
        Username:username
    })
}

//Update
rett.updateEmailStatus = (idmail,username,status) => {
    return EmailStatus.updateOne( 
        {
            Id_Email:idmail,
            Username:username
        },{
            Status:status
        }
    );
}