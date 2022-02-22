const bcryptjs = require('bcryptjs');
const bodyParser = require('body-parser');
const express=require('express');
const { default: mongoose } = require('mongoose');
const User = require("./model/users");



mongoose.connect('mongodb+srv://mrkhan04:Taha%40786@cluster0.hep2d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const app=express();
app.use(bodyParser.json());



app.post('/signup',async (req,res)=>{
    const {email,password:plaintext}=req.body;
    const password=await bcryptjs.hash(plaintext,10);
    
    try {
       await User.create({
            email,
            password
        })
        return res.json({status : 'ok'})
    } catch (error) {
        return res.json({status : 'error'})
    }

})

app.post('/signin',async (req,res)=>{
    const {email,password:plaintext}=req.body;
    const user=await User.findOne({email}).lean();

    if(!user){
        return res.json({status:"error", error:"user not exist"})
    }

    if(await bcryptjs.compare(plaintext,user.password)){
        return res.json({status:"ok", error:"login successfull"})
    }

})

app.listen(3001,()=>{
    console.log("Server is working");

})
    