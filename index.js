const express = require("express");
const app = express();
const port = 3000;
const db = require("./database")

app.listen(port, () => {
    console.log("Running on: http://localhost:" + port);
})

app.get("/", (req, res) => {
    db.getUserAcc().then((ress, err) => {
        res.send(ress)
    });
})

app.get("/del", (req, res) => {
    db.deleteUserAcc().then((ress, err) => {
        res.send(ress)
    })
})

app.get("/log",(req,res)=>{
    db.getSupport().then((ress,err)=>{
        res.send(ress)
    })
})