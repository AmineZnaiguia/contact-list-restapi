const express = require('express');

const {MongoClient, ObjectID} = require('mongodb')

const assert = require("assert")
const app = express();
app.use(express.json())

const mongo_url = "mongodb://localhost:27017";
const dataBase = "contactList";


MongoClient.connect(mongo_url,{ useUnifiedTopology: true }, (err,client)=>{
    assert.equal(err,null,'dataBase connexion failed');
    const db = client.db(dataBase);

    app.post("/addcontact", (req,res)=>{
        let newContact = req.body;
        db.collection("contacts").insertOne(newContact, (err, data)=>{
            if (err) res.send('can not add new contact');
            else res.send('new contact added')
        })
    });

    app.get("/contacts", (req,res)=>{
        db.collection("contacts").find().toArray((err, data)=>{
            if(err) res.send("cant not get contacts list")
            else res.send(data)
        })
    });

    app.get("/contact/:id", (req,res)=>{
        db.collection("contacts").findOne({_id : ObjectID(req.params.id)},(err,data)=>{
            if(err) res.send("can not get data")
            else res.send (data)
        })
    })

    app.delete("/deletecontact/:id", (req,res)=>{
        db.collection("contacts").findOneAndDelete({_id : ObjectID(req.params.id)},(err,data)=>{
            if(err) res.send("can not delete contact");
            else res.send("contact is deletetd")
        })
    })

    app.put("/modifiycont/:id", (req,res)=>{
        db.collection("contacts").findOneAndUpdate({_id : ObjectID(req.params.id)}, {$set : {...req.body}}, (err,data)=>{
            if(err) res.send("can not modify contact");
            else res.send("contact modified")
        })
    });

    







})


const port = process.env.PORT || 7000;
app.listen(port, err=>{
    if (err) console.log("server is not runnig");
    else console.log(`server is runnig on port ${port}`)
})