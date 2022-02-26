//Import a http module
const http=require('http')

//create a server
const server=http.createServer((req,res)=>
{
console.log(req.url)
//Request from http://localhost:8080/
if (req.url == '/'){
    res.write('Welcome to Home')
}
//Request from http://localhost:8080/about
else if(req.url == "/about")
{
    res.write("Welcome to About")
}
// Request from unknow URL endpoint
else{
    res.write("URL Not Found")
}
res.end()
})

// Assigning a port number to server
server.listen(8080,()=>
{
    console.log("Sercer is running")
})