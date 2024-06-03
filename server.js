const express =require('express');
const bcrypt=require('bcrypt');
const app =express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Welcome to Home Page.");
})

app.post('/register',(req,res)=>{
    const saltround=10;
    bcrypt.genSalt(saltround,function(err,salt){ //ye salt generate krta h (random strings.)
       const plainTextPassword='hero';
        bcrypt.hash(plainTextPassword,salt,function(err,hash){  //ye plain text me salt add krke, password ki hashing krega.
            if(err)return res.send(err);
            return res.send(hash);
        }) 
    })
})

app.post('/login',function(req,res){

    // const plainPass1='herrro';
    const plainPass='hero';
    const hashedSavedPass='$2b$10$3vtm.c7jouPwEK7o4gjy8uW/WdYfjcGqwxnOKleimoTLWZcS9knUi';

    bcrypt.compare(plainPass,hashedSavedPass,(err,result)=>{
        if(err)return res.send(err);
        res.send(result);
    })
})



app.listen(3000,()=>{
    console.log("Node server is running on port 3000.");
})
