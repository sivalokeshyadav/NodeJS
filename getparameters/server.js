let express=require("express")

let app=express()

//authorization
let auth=(req,res,next)=>{
    let allHeaders=req.headers;
    if(allHeaders.token==="ashokIT"){
        next()//indicates authorization is success
    }else{
        res.status(500).json({auth:"fail"})
    }
}


//http://localhost:8080/login?uname="admin"&upwd="admin"
//get request
app.get("/login",[auth],(req,res)=>{
    if(req.query.uname==="admin" && req.query.upwd==="admin"){
        res.status(200).json({login:"success"})
    }else{
        res.status(400).json({login:"failed"})
    }
})


//default request

app.get("/",(req,res)=>{
    res.sendFile("C:/Users/siva lokesh yadav/Desktop/NodeJs/NodeJS/getparameters/index.html")
})

app.listen(8080,()=>{
    console.log("server started")
})