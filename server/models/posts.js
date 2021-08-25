const mongoose = require('mongoose');

const PostMessage = mongoose.Schema({
    title: String,
    message: String,
    name: String,
})

module.exports = mongoose.model('PostMessage', PostMessage);
