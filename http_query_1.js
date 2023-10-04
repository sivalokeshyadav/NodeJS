//http://localhost:8080/?uname="ashokit"&upwd="ashokit"
let http=require("http")
let url=require("url")

let server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    let obj=url.parse(req.url,true).query;
    if(obj.uname==="ashokit"&&obj.upwd==="ashokit"){
        res.write("<h1>Login Success</h1>")
    
    }else{
        res.write("<h1>Login Failed</h1>")
    }
    res.end()
})

server.listen(8080)
console.log("server is listening in port 8080")

