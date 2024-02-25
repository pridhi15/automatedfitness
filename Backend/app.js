const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.use(bodyParser.json());


// const mongoUrl = 'mongodb+srv://pridhis22:pridhis22@cluster0.xlwfgc3.mongodb.net/?retryWrites=true&w=majority';
const mongoUrl = 'mongodb+srv://nayan2002:nayan2002@cluster2.i9xe0pd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2';

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
const Contact = require('./Schema/ContactDetails');

app.post("/signup", (req, res) => {
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
        // res.redirect('/');
      })
      .catch((error) => {
        res.send({ status: "something went wrong" });
      });
  });

app.post("/get-user", (req,res) => {
  const username = req.body;
  User.findOne({username})
  .then(user => {
    if(!user) {
      return res.json({ error: "User not found"});
    }
    return user;
  }).then(user => {
    return user.json();
  }).catch(err => {
    console.log(err);
  })
})

app.post('/contactpage', (req,res) => {
  const { username, email, mobilenumber, query } = req.body;
  Contact.findOne({username})
  .then(oldUser => {
    if(oldUser) {
      oldUser.queries.push({query});
      return oldUser.save();
    }else{
      const newQuery = new Contact({
        username,
        email,
        mobilenumber,
        queries: [{query}],
      })
      return newQuery.save();
    }
  }).then(() => {
    res.send({ saved : "saved" });
  }).catch(err => {
    res.send({ status: "something went wrong" });
  });
})


app.post('/login', (req,res) => {
    const {username, password} = req.body;
    User.findOne({username})
    .then((user) => {
        if(!user){
            return res.json({ error : "user not found !"})
        }
        if(password === user.password){
            if(res.status(201)) {
              res.redirect('/')
                return res.json({status: "ok", data: user});
            }else return res.json({error: "error"});
        }
        return res.json({status: "error", error: "invalid password"});
    }).catch(err => console.log(err));
});

