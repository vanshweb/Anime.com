const express = require("express");
const app = express();
const path = require('path')
const port = 3000;
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const fs = require("fs");
const bodyparser = require('body-parser');

// useing static
app.use('/static', express.static('static'))

// useing hbs
app.set("view engine" , "hbs")

// using views dir
app.set("../views", path.join(__dirname, "Views"))

// endpoints
app.get("/", (req, res)=>{
    res.status(200).render("index.hbs")
})
app.get("/about", (req, res)=>{
    res.status(200).render("about.hbs")
})
app.get("/newanime", (req, res)=>{
    res.status(200).render("newanime.hbs")
})
app.get("/singin", (req, res)=>{
    res.status(200).render("singin.hbs")
})



  // saving data
  main().catch(err => console.log(err));

  async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/dance');
    
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
  
  const dance = new mongoose.Schema({
      name: String,
      phone: String,
      gender: String,
      email: String,
      address: String
      
    });
    const Contact = mongoose.model('Kitten', dance);
  
    app.post('/', (req, res)=>{
      var myData = new Contact(req.body);
      myData.save().then(()=>{
      res.render('db.hbs')
      }).catch(()=>{
      res.status(400).send('item was not saved to the databse')
  })})
  
// starting server
app.listen(port, ()=>{
    console.log(`App is started on port 3000`);
})


// for help use map.txt 
