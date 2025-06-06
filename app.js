const express = require('express')
const env =require('dotenv').config()
const db = require('./config/db')

const app = express()

db()

app.listen(process.env.PORT,()=>{
    console.log("Server started..")
})

module.exports = app