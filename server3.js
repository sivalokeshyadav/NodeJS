let transaction=require("./transaction")

let accounts =require("./accounts3")



let express=require("express")

let app=express()

app.use("/module1",transaction)
app.use("/module2",accounts)


app.listen(8080,()=>{
    console.log("server started")
})

