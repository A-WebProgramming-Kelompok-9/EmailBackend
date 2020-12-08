const express = require("express");
const app = express();
const port =  3000;
const db = require("./database")

const cors = require("cors")
const bodyParser = require("body-parser")
app.use(cors())
app.use(bodyParser.json())

app.listen(port || process.env.PORT, () => {
    console.log("Running on: http://localhost:" + port);
})

app.get("/", (req, res) => {
    db.getUserAcc().then((ress, err) => {
        res.json(ress)
    });
})

app.get("/account/forget", (req, res) => {
    db.forgetUserAcc(req.body.usern,req.body.altermail).then((ress, err) => {
        res.send(ress)
    });
})

app.get("/account/add", (req, res) => {
    db.insertUserAcc(req.body.altermail,req.body.usern,req.body.pass).then((ress, err) => {
        res.send(ress)
    });
})

app.get("/account/update/password", (req, res) => {
    db.updateUserAcc(req.body.usern,req.body.pass).then((ress, err) => {
        res.send(ress)
    });
})

app.get("/account/update/username", (req, res) => {
    db.updateUserAcc(req.body.usern,req.body.newusern).then((ress, err) => {
        res.send(ress)
    });
})

app.get("/account/update/pic", (req, res) => {
    db.updateUserAccPicture(req.body.oldpic,req.body.newpic).then((ress, err) => {
        res.send(ress)
    });
})

app.get("/account/update/backpic", (req, res) => {
    db.updateUserAccBackground(req.body.oldback,req.body.newback).then((ress, err) => {
        res.send(ress)
    });
})

app.get("/email", (req, res) => {
    db.getAllEmail().then((ress, err) => {
        res.send(ress)
    });
})

app.get("/email/find", (req, res) => {
    db.getEmail(req.body.id).then((ress, err) => {
        res.send(ress)
    });
})


app.get("/email/add", (req, res) => {
    db.insertEmail(req.body.username,req.body.receiver,req.body.title
        ,req.body.content,req.body.attachment).then((ress, err) => {
        res.send(ress)
    });
})

app.get("/email/del", (req, res) => {
    db.deleteEmail(req.body.id).then((ress, err) => {
        res.send(ress)
    });
})


app.get("/del", (req, res) => {
    db.deleteUserAcc().then((ress, err) => {
        res.send(ress)
    })
})

app.get("/insert", (req, res) => {
    db.insertUserAcc().then((ress, err) => {
        res.send(ress)
    })
})


app.post("/", (req, res) => {
    db.insertUserAcc(req.body.username, req.body.password).then((ress, err) => {
        res.send(ress)
    })
})

app.post("/del", (req, res) => {
    db.deleteUserAcc(req.body.content).then((ress, err) => {
        res.send(ress)
    })
})

app.get("/log",(req,res)=>{
    db.getSupport().then((ress,err)=>{
        res.send(ress)
    })
})