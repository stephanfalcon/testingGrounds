const express = require("express")
const app = express()

const port = process.env.PORT || 80

app.use(express.static("./build"))

app.get("/",(req,res)=>{
    express.send
})

app.listen(port,()=>{
    console.log("application running on port:" + port)
})