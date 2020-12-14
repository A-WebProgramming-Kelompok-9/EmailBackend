const bcrypt = require('bcryptjs');
const express = require("express");
const app = express();
const port = 3000;
const emaildb = require("./email")
const supportdb = require("./supportlogdata")
const useraccdb = require("./useracc")

const cors = require("cors")
const bodyParser = require("body-parser")
app.use(cors())
app.use(bodyParser.json())

app.listen(process.env.PORT || port, () => {
    console.log("Running on: http://localhost:" + port);
})

app.get("/", (req, res) => {
    useraccdb.getAllAcc().then((ress, err) => {
        if (!err) {
            return res.json({status: "OK", content: ress})
        } else {
            return res.json({status: "Error"})
        }
    });
})

app.get("/email", (req, res) => {
    emaildb.getAllEmail2().then((ress, err) => {
        if (!err) {
            return res.json({status: "OK", content: ress})
        } else {
            return res.json({status: "Error"})
        }
    });
})

app.get("/delall", (req, res) => {
    useraccdb.delAllAcc().then((ress, err) => {
        if (!err) {
            return res.json({status: "OK", content: ress})
        } else {
            return res.json({status: "Error"})
        }
    });
})


app.get("/delallmail", (req, res) => {
    emaildb.deleteAllEmail().then((ress, err) => {
        if (!err) {
            return res.json({status: "OK", content: ress})
        } else {
            return res.json({status: "Error"})
        }
    });
})

app.post("/account", (req, res) => {
    useraccdb.getUserPass(req.body.usern).then((ress, err) => {
        if (ress == null) {
            return res.json({status: "Error"})
        }
        if (bcrypt.compareSync(req.body.pass, ress.Password)) {
            useraccdb.getUserAcc(req.body.usern).then((ress, err) => {
                if (!err) {
                    return res.json({status: "OK", content: ress})
                } else {
                    return res.json({status: "Error"})
                }
            });
        } else {
            return res.json({status: "Error"})
        }
    })

})

app.post("/account/forget", (req, res) => {
    useraccdb.forgetUserAcc(req.body.usern, req.body.altermail).then((ress, err) => {
        if (!err) {
            return res.json({status: "OK", content: ress})
        } else {
            return res.json({status: "Error"})
        }
    });
})

app.post("/account/add", (req, res) => {
    let salt = bcrypt.genSaltSync(10);
    let password = bcrypt.hashSync(req.body.pass, salt);
    useraccdb.getUserAcc(req.body.usern).then((ress)=>{
        if(ress == null){
            useraccdb.insertUserAcc(req.body.altermail, req.body.usern, password).then((ress, err) => {
                if (!err) {
                    return res.json({status: "OK", content: ress})
                } else {
                    return res.json({status: "Error"})
                }
            });
        }else {
            return res.json({status: "Error"})
        }
    });
})

app.post("/account/update/password", (req, res) => {
    let salt = bcrypt.genSaltSync(10);
    let password = bcrypt.hashSync(req.body.pass, salt);
    useraccdb.updateUserAcc(req.body.usern, password).then((ress, err) => {
        if (!err) {
            return res.json({status: "OK", content: ress})
        } else {
            return res.json({status: "Error"})
        }
    });
})

app.post("/account/update/username", (req, res) => {
    useraccdb.updateUserAcc(req.body.usern, req.body.newusern).then((ress, err) => {
        if (!err) {
            return res.json({status: "OK", content: ress})
        } else {
            return res.json({status: "Error"})
        }
    });
})

app.post("/account/update/pic", (req, res) => {
    useraccdb.updateUserAccPicture(req.body.oldpic, req.body.newpic).then((ress, err) => {
        if (!err) {
            return res.json({status: "OK", content: ress})
        } else {
            return res.json({status: "Error"})
        }
    });
})

app.post("/account/update/backpic", (req, res) => {
    useraccdb.updateUserAccBackground(req.body.oldback, req.body.newback).then((ress, err) => {
        if (!err) {
            return res.json({status: "OK", content: ress})
        } else {
            return res.json({status: "Error"})
        }
    });
})

app.post("/email", (req, res) => {
    emaildb.getAllEmail(req.body.username, req.body.page).then((ress, err) => {
        if (!err) {
            return res.json({status: "OK", content: ress})
        } else {
            return res.json({status: "Error"})
        }
    });
})

app.post("/email/find", (req, res) => {
    emaildb.getEmail(req.body.id).then((ress, err) => {
        if (!err) {
            return res.json({status: "OK", content: ress})
        } else {
            return res.json({status: "Error"})
        }
    });
})


app.post("/email/add", (req, res) => {
    emaildb.insertEmail(req.body.username, req.body.receiver, req.body.title
        , req.body.content, req.body.attachment).then((ress, err) => {
        if (!err) {
            return res.json({status: "OK", content: ress})
        } else {
            return res.json({status: "Error"})
        }
    });
})

app.post("/email/del", (req, res) => {
    emaildb.deleteEmail(req.body.id).then((ress, err) => {
        if (!err) {
            return res.json({status: "OK", content: ress})
        } else {
            return res.json({status: "Error"})
        }
    });
})


app.post("/del", (req, res) => {
    useraccdb.deleteUserAcc().then((ress, err) => {
        if (!err) {
            return res.json({status: "OK", content: ress})
        } else {
            return res.json({status: "Error"})
        }
    })
})

app.post("/insert", (req, res) => {
    useraccdb.insertUserAcc().then((ress, err) => {
        if (!err) {
            return res.json({status: "OK", content: ress})
        } else {
            return res.json({status: "Error"})
        }
    })
})

app.post("/log", (req, res) => {
    supportdb.getSupport().then((ress, err) => {
        if (!err) {
            return res.json({status: "OK", content: ress})
        } else {
            return res.json({status: "Error"})
        }
    })
})