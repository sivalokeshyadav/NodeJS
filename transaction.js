let express=require("express")

let transaction=express.Router()


transaction.get("/",(req,res)=>{
    res.status(200).json({"msg":"transaction from siva"})
})

transaction.get("/pierre",(req,res)=>{
    res.status(200).json({"msg":"transaction from pierre"})
})

module.exports=transaction