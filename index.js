const express = require("express")

const app = express()

app.get('/', (req, res)=>{
    res.send("<h1>Welcome to the node JS app</h1>")
})

app.get('/about', (req, res)=>{
    console.log("About Page logged inthe logs")
    res.send("<h1>This is about page***</h1>")
})

app.listen(3000);