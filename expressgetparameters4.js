let express=require("express")

let app=express()

app.get("/sample/user/:uname/pwd/:upwd",(req,res)=>{

    if(req.params.uname==="ashokit"&&req.params.upwd==="ashokit"){
        res.send({login:"success"})
    }else{
        res.send({login:"fail"})
    }
})


app.get("/login",(req,res)=>{
    if(req.query.uname==="admin"&&req.query.upwd==="admin"){
        res.status(200).json({"login":"success"})
    }else{
        res.status(400).json({"login":"failed"})

    }
})

app.listen(8080,()=>{
    console.log("server started")
})