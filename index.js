const express = require('express')
const mysql = require('mysql2')
const app = express()
const  path = require('path')
require('dotenv').config()

app.use(express.static('./public'))

const connection = mysql.createConnection({
   host:process.env._HOST,
   user:process.env._USERNAME,
   password:process.env._PASSWORD,
   database:process.env._DATABASE,
   port:process.env._PORT
})

connection.connect(function(err){
   if(err){
      console.log(err)
      throw  err
   }else{
      console.log("MySQL connected " + process.env._DATABASE)
   }
})

app.get('/', (req,response)=> {
   response.sendFile(path.join(__dirname, '/public.index.html'))
})

app.get('/city', function(req,response){
   connection.query("SELECT * FROM city", (err,result)=>{
      if(err){
         console.log('Deu m****')
      }else{
         response.json(result)
      }
   })
})

const port=4000
app.listen(port, function(){
   console.log("Listenning on port: ",port)
})  