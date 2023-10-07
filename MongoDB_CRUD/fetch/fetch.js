let express=require("express")

let mongodb=require("mongodb")



let ashokIT=mongodb.MongoClient


let fetch=express.Router().get("/",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin@miniProjectdb.nzphu.mongodb.net/ashokit_nodejs?writes=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            let db=connection.db("ashokit_nodejs");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array)
                }
            })
        }
    })
})

export default fetch;