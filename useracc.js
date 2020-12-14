const mongoose = require("./database")
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

//note kalo insert musti ada semua varinya minimal koosngin aja paling

//isi parameter: <nama tabel>, <skema tabel>
const UserAcc = mongoose.model("UserAccount",userAccSchema)

rett.getAllAcc = () => {
    return UserAcc.find({
    });
}
rett.delAllAcc = ()=> {
    return UserAcc.deleteMany({
    });
}

//login
rett.getUserAcc = (usern) => {
    return UserAcc.findOne({
        Username:usern
    },"Username Display_Pic Background_Pic Display_Name");
}

//get password
rett.getUserPass = (Username) => {
    return UserAcc.findOne({
            Username:Username
        },"Password");
}
//disini artinya itu kalo di sql
//kita select password dari db
//wherenya itu username
//tes

//forgot
rett.forgetUserAcc = (usern, altermail) => {
    return UserAcc.find({
        Username:usern,
        Alt_Email:altermail
    });
}

//register
rett.insertUserAcc = (altermail, usern, pass) => {
    return UserAcc.create({
        Alt_Email:altermail,
        Username:usern,
        Password:pass,
        Display_Pic:'',
        Background_Pic:'',
        Display_Name:usern
    });
}

//update pass
rett.updateUserAcc = (usern, pass) => {
    return UserAcc.updateOne( 
        {
            Username:usern
        },{
            Password:pass
        }
    );
}

//update username
rett.updateUserAcc = (usern,newusern) => {
    return UserAcc.updateOne( 
        {
            Username:usern
        },{
            Username:newusern
        }
    );
}

//update picture
rett.updateUserAccPicture = (oldpic, newpic) => {
    return UserAcc.updateOne(
        {
            Display_Pic: oldpic
        },{
            Display_Pic: newpic
        }
    );
}

//update background
rett.updateUserAccBackground = (oldback, newback) => {
    return UserAcc.updateOne(
        {
            Background_Pic: oldback
        },{
            Background_Pic: newback
        }
    );
}

module.exports =  rett;
