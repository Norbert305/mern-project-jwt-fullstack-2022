const path = require('path')
const express = require('express');//back-end web-framework
const colors =require('colors')
const connectDB = require('./config/connectDB')
const dotenv = require('dotenv').config()//allows to use dotenv
const {errorHandler} = require('./middleware/errorMiddleware')
const app = express() 
const port = process.env.PORT || 5000 
const cors = require("cors")

connectDB()


app.use(cors());
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}))
//middleware
app.use('/api/jobs', require('./routes/jobRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

//Server frontend
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))

    app.get('*', (req, res)=>res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html')))
} else {
    app.get('/', (req,res)=>res.send('Please send to production'))
}

app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Our server port ${port} is running!!!!`)})