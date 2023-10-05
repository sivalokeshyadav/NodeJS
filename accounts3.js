let express=require("express")


let accounts=express.Router();

accounts.get("/",(req,res)=>{
    res.status(200).json({"msg":"erlcome to account"})
})

accounts.post("/",(req,res)=>{
    res.status(200).json({"msg":"account will add soon"})
})

module.exports=accounts