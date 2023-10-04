//Http Server

let http=require("http")

let server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("<h1>http server is running</h1>");
    res.end()
});

server.listen(8080)
console.log("server is listening at 8080")