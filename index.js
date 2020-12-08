const express = require("express");
const app = express();
const port =  3000;
const emaildb = require("./email")
const supportdb = require("./supportlogdata")
const useraccdb = require("./useracc")

const cors = require("cors")
const bodyParser = require("body-parser")
app.use(cors())
app.use(bodyParser.json())

app.listen(process.env.PORT||port , () => {
    console.log("Running on: http://localhost:" + port);
})

app.get("/account", (req, res) => {
    useraccdb.getUserAcc(req.body.usern,req.body.pass).then((ress, err) => {
        res.json(ress)
    });
})

app.get("/account/forget", (req, res) => {
    useraccdb.forgetUserAcc(req.body.usern,req.body.altermail).then((ress, err) => {
        res.send(ress)
    });
})

app.get("/account/add", (req, res) => {
    useraccdb.insertUserAcc(req.body.altermail,req.body.usern,req.body.pass).then((ress, err) => {
        res.send(ress)
    });
})

app.get("/account/update/password", (req, res) => {
    useraccdb.updateUserAcc(req.body.usern,req.body.pass).then((ress, err) => {
        res.send(ress)
    });
})

app.get("/account/update/username", (req, res) => {
    useraccdb.updateUserAcc(req.body.usern,req.body.newusern).then((ress, err) => {
        res.send(ress)
    });
})

app.get("/account/update/pic", (req, res) => {
    useraccdb.updateUserAccPicture(req.body.oldpic,req.body.newpic).then((ress, err) => {
        res.send(ress)
    });
})

app.get("/account/update/backpic", (req, res) => {
    useraccdb.updateUserAccBackground(req.body.oldback,req.body.newback).then((ress, err) => {
        res.send(ress)
    });
})

app.get("/email", (req, res) => {
    emaildb.getAllEmail().then((ress, err) => {
        res.send(ress)
    });
})

app.get("/email/find", (req, res) => {
    emaildb.getEmail(req.body.id).then((ress, err) => {
        res.send(ress)
    });
})


app.get("/email/add", (req, res) => {
    emaildb.insertEmail(req.body.username,req.body.receiver,req.body.title
        ,req.body.content,req.body.attachment).then((ress, err) => {
        res.send(ress)
    });
})

app.get("/email/del", (req, res) => {
    emaildb.deleteEmail(req.body.id).then((ress, err) => {
        res.send(ress)
    });
})


app.get("/del", (req, res) => {
    useraccdb.deleteUserAcc().then((ress, err) => {
        res.send(ress)
    })
})

app.get("/insert", (req, res) => {
    useraccdb.insertUserAcc().then((ress, err) => {
        res.send(ress)
    })
})

app.get("/log",(req,res)=>{
    supportdb.getSupport().then((ress,err)=>{
        res.send(ress)
    })
})