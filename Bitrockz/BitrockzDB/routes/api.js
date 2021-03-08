const express = require('express')
const jwt = require('../node_modules/jsonwebtoken')
const router = express.Router()
const User = require('../models/user')
const News = require('../models/news')

const mongoose = require('mongoose')
mongoose.connect("mongodb://usermayur:pwdmayur1@ds131676.mlab.com:31676/bitrockz", {useNewUrlParser : true}, err =>{
    if(err){
        console.log("Error in connecting MongoDB")
    }else{
        console.log("connected to MongoDB")
    }
})

mongoose.set('useFindAndModify', false);

router.get('/', (req,res) =>{
    res.send("hello From Api")
})

router.post('/register', (req,res) =>{
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) =>{
        if(error){
            console.log("Error")
        }else{
            let payload = { subject : registeredUser._id}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
        }
    }) 
})

router.post('/login', (req,res) =>{
    let userData = req.body

    User.findOne({email: userData.email}, (error,user) =>{
        if(error){
            console.log("Error")
        }else{
            if(!user){
                res.status(401).send("Invalid Email")
            }else{
                if( userData.password !== user.password ){
                    res.status(401).send("Invalid Password")
                }else{
                    let payload = { subject : user._id}
                    let token = jwt.sign(payload, 'secretKey')
                    res.status(200).send({token})
                }
            }
        }
    })
})

router.get('/news', (req,res) =>{
    console.log("For All News")
    News.find({})
        .exec((err, news) =>{
            if(err){
                console.log("Error loading news" +err)
            }else{
                res.status(200).send(news)
            }
        })
})

router.get('/news/:id', (req,res) =>{
    console.log("For single news")
    News.findById(req.params.id)
        .exec((err, news) =>{
            if(err){
                console.log("Error loading news" +err)
            }else{
                res.status(200).send(news)
            }
        })
})

router.post('/news', (req,res) =>{
    console.log("Posting a News")
    let newsData = req.body
    let news = new News(newsData)
    news.save((err, inserteNews) =>{
        if(err){
            console.log("Error in posting News" +err)
        }else{
            res.status(200).send(inserteNews)
        }
    })
})

router.put('/news/:id', (req,res) =>{
    console.log("Updated an News")
    News.findByIdAndUpdate(
        req.params.id,
        {
            $set : {title : req.body.title, url : req.body.url, description : req.body.description}
        },
        {
            new : true
        },
        (err, updatedNews) =>{
            if(err){
                console.log("Error Updating News")
            }else{
                res.status(200).send(updatedNews)
            }
        }
    )
})

router.delete('/news/:id', (req,res) =>{
    console.log("deleted one News")
    News.findByIdAndRemove(req.params.id, (err,deletedNews) =>{
        if(err){
            console.log("Error deleting News")
        }else{
            res.status(200).send(deletedNews)
        }
    })
})

module.exports = router