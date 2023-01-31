const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>res.send('hello0'))
app.listen(port,()=>console.log('app'))