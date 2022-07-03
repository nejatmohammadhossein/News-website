const { urlencoded } = require('body-parser');
const { userInfo } = require('os');
const { doesNotMatch } = require('assert');
const user = require('./../models/user');
const news = require("./../models/news");
const { assert } = require('console');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

class userController{
    register(req,res){
        console.log(req.body);

    const newUser = new user({
        name:req.body.name,
        userId:req.body.userName,
        password:req.body.password,
        role:0
    });
    newUser.save().then(function(){
        assert(newUser.isNew === false);
        try{
            done(null,newUser);
            res(200);
        }catch{

        }

      
    });
    }
    login(req,res){
        console.log(req.body);
        const loginUser = new user({
        userId:req.body.userName,
        password: req.body.password
        });
        user.findOne({
        userId:loginUser.userId
        },(err,obj)=>{
        if(err){
            return res.json({name:"false", message:"Incorrect userName or password"});
        }
        if(!obj || !obj.comparePassword(loginUser.password)){
            return res.json({name:"false", message:"Incorrect userName or password"});
        }else{
            var id=obj.userId;
            var role=obj.role;
            var token = jwt.sign({id},'123');
            res.json({name:id ,token, role});
        }
    })
    }
    showNews(req,res){
        const filter ={};
        news.find(filter, function (error,arrayOfResults){
            if(error){}
            else{
                res.json(arrayOfResults);
            }
        })
        
    }
    showSelectedNews(req, res){
        //console.log(req.body.data)
        const filter ={_id:req.body.data};
        news.find(filter, function (error,arrayOfResults){
            if(error){}
            else{
                res.json(arrayOfResults);
            }
        }) 
    }
}
module.exports = new userController();
