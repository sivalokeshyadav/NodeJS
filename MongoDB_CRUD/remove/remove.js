let express=require("express")

let mongodb=require("mongodb")

let remove=express.Router().delete("/",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin@miniProjectdb.nzphu.mongodb.net/ashokit_nodejs?writes=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            let db=connection.db("ashokit_nodejs");
            db.collection("products").deleteOne({"id":req.body.id},(err,array)=>{
                if(err) throw err;
                else{
                    res.send(200).json({msg:`${req.body.id} record deleted`})
                }
            })
        }
    })
})

export default remove