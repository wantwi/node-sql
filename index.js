const express = require('express')
const cors = require('cors')

const app = express()

let corsOption ={
    origin:'https://localhost:8081'
}



app.use(cors(corsOption))
app.use(express.json())

app.use(express.urlencoded({extended:true}))

const router = require("./routes/productRouter.js")

app.use("/api",router)

app.get("/", (req,res)=>{
    res.json({message:"Hello api!!"})
})


const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`server running on port: ${PORT}`);
})