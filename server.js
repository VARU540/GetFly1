
require('dotenv').config()
const express = require('express')
const cors = require('cors')

const authRoutes = require('./routes/authRoutes')
const projectRoutes = require('./routes/projectRoutes')
const dprRoutes = require('./routes/dprRoutes')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/auth',authRoutes)
app.use('/projects',projectRoutes)
app.use('/projects',dprRoutes)

app.get('/',(req,res)=>{
res.json({message:"Backend API Running"})
})

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
