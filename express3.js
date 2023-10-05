let express=require("express")

let app=express()


app.get("/ashokit",(req,res)=>{
    res.status(200).json({"msg":"welcome to js with nodejs"})
})


app.listen(8080,()=>{
    console.log("server started")
})