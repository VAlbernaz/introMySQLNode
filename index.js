const express = require('express')
const app = express()
const  path = require('path')
//!!!!!!!!!!!!!!!IMPORTANTE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
app.use('/city', require('./routes/getCitiesRoute.js'))

app.use(express.static('./public'))


app.get('/', (req,response)=> {
   response.sendFile(path.join(__dirname, '/public.index.html'))
})



const port=3000
app.listen(port, function(){
   console.log("Listenning on port: ",port)
})  

