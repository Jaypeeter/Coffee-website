const express = require('express')

const path = require('path')

const server = express()

server.use(express.static('./public'))

server.get('/home.html',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./home.html"))
})

server.get('/about.html',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./about.html"))
})
server.get('/numbers.html',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./numbers.html"))
})
server.get('/contact-us.html',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./contact-us.html"))
})

server.all('*', (req,res)=>{
    res.send("<h1>Page not found!</h1>")
})


server.listen(5000,()=>{
    console.log("Listening to port 5000")
})