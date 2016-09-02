const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    date:{
        date: Date
    },
    url: {
        type: String,
        required: true,
        unique: true
    }
});

const Articles = mongoose.model('Articles', ArticleSchema);
module.exports = Articles;