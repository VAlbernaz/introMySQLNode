const express = require('express')
const getRouter = express.Router()
const connection = require('../dbconnect.js')

getRouter.get('/', function(req,response){
    connection.query("SELECT * FROM city", (err,result)=>{
       if(err){
           console.log(err)
          console.log('Deu m****')
       }else{
          response.json(result)
       }
    })
})

module.exports = getRouter 
