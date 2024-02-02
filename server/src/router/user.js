import { Router } from 'express'
import { requireEmailUnicity } from '../middleware/user.js'
import {
    login,
    register
} from '../controller/user.js'

const writter = Router()
const customer = Router()
const admin = Router()
const user = Router()

user.post('/register',
    requireEmailUnicity,
    register)

user.post('/login',
    login)

user.put('/update/password')
user.put('/update/username')
user.put('/update/email')

// writter.get('/orders')
// writter.get('/')
user.use('/writter', writter)
user.use('/customer', customer)
user.use('/admin', admin)

export default user
