const mongoose =require('mongoose');

const newsSchema = mongoose.Schema({
    name: {type: String,require:true},
    title: {type: String,require:true},
    message: {type: String,require:true},
    category: {type: String,require:true},
    newsDate: {type: Date,require:true}, 
},{timestamp:true});

module.exports = mongoose.model('News',newsSchema);