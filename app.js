const express = require('express')
const boddParser = require('body-parser')
const  leaveAPI = require('./routes/requestleave')
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}



const app = express()
const port = 5001;



// parse applicaton form=urlencoded
app.use(boddParser.urlencoded({extended:false}))
//parse application json
app.use(boddParser.json())
app.use(cors(corsOptions)) 

app.use('/',leaveAPI);



//listener
app.listen(port,()=>{
    console.log('the server is running ' +port)
})