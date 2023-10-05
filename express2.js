let express=require("express")

let app=express()


app.get("/",(req,res)=>{
    res.status(200).json({"message":"default get"});
})

app.get("/demo",(req,res)=>{
    res.status(200).json({"message":"default get mongodb"});
})

app.post("/",(req,res)=>{
    res.status(200).json({"message":"default post"});
})


app.post("/demo",(req,res)=>{
    res.status(200).json({"message":"default post sqlite"});
})


app.listen(8080,()=>{
    console.log("server staarted")
})