const { urlencoded } = require('body-parser');
const { userInfo } = require('os');
const { doesNotMatch } = require('assert');
const news = require('./../models/news');
const { assert } = require('console');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

class adminController{
    register_news(req,res){
        //console.log(req.body);
    const newNews = new news({
        
        name: req.body.name,
        title: req.body.newsTitle,
        message: req.body.editorData,
        category: req.body.newsCategory,
        newsDate: req.body.newsDate, 
    });
    newNews.save().then(function(){
        assert(newNews.isNew === false);
        try{
             done(null,newNews);
             res(200);
        }catch{}
     });
    }

    show_news(req,res){
        const filter ={};
        news.find(filter,function(error,arrayofResults){
            if(error){}
            else{
                res.json(arrayofResults);
            }
        });
    }

    deleteNews (req,res){
        //console.log(req.params.id);
        let result;
        news.findByIdAndRemove(req.params.id, (r =>{
            result = "خطایی رخ داده است";
            //res.json(result);
        }));
        res.json(result = "رکورد مورد نظر با موفقیت حذف شد");
    }
    
   
}
module.exports = new adminController();
