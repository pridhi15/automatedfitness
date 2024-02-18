const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.use(bodyParser.json());

const mongoUrl = 'mongodb+srv://pridhis22:pridhis22@cluster0.xlwfgc3.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(mongoUrl)
.then(() => {
    app.listen(5000, () => {
      console.log("Server started !! ");
    })
    console.log("Connected to database !");
}).catch((err) => {
    console.log(err);
})

const User = require("./Schema/UserDetails");

app.post("/", (req, res) => {
    const { username, email, password, city, country, address, phonenumber } = req.body;
  
       User.findOne({ username })
      .then((oldUser) => {
        if (oldUser) {
          return res.json({ error: "User exists" });
        }
        return User.create({
          username,
          email,
          password,
          phonenumber,
          address,
          city,
          country,
        });
      })
      .then(() => {
        res.send({ status: "saved" });
      })
      .catch((error) => {
        res.send({ status: "something went wrong" });
      });
  });


// app.post('/', (req,res) => {
//     const {username, password} = req.body;
//     User.findOne({username})
//     .then((user) => {
//         if(!user){
//             return res.json({ error : "user not found !"})
//         }
//         if(password === user.password){
//             if(res.status(201)) {
//                 return res.json({status: "ok", data: user});
//             }else return res.json({error: "error"});
//         }
//         return res.json({status: "error", error: "invalid password"});
//     })
// });

