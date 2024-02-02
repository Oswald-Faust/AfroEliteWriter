import express from 'express'
import cors from 'cors'
import mongoose from './src/config/data-base.js'
import user from './src/router/user.js'

function launchServer()
{
    console.log('server start successfully')
    console.log(`local address: http://localhost:${process.env.PORT}`)
    console.log(`hosted at: ${process.env.DOMAIN}`)
}

const app = express()

app.use(express.json())
app.use(cors)
app.use('/user', user)
mongoose.connect(process.env.DB_URL)
app.listen(process.env.PORT, launchServer)
