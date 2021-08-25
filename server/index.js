const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const allPosts = require('./routes/posts');

const app = express();
app.use(cors());
app.use(bodyParser.json({extended: true,limit:"30mb"}));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));

mongoose.connect("mongodb://localhost/posts")
    .then(() => { console.log("database connected") })
.catch(err => { console.log(err) })

app.use("/",allPosts)
app.listen("5000", () => {
    console.log("server running on port 5000");
});