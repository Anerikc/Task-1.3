import express from 'express'
import { usersRouter } from './users/users.js'

const PORT = 3000
const app = express()

app.get('/', (req, res) => {
    res.send('Hello BRO!')
})

app.use('/', usersRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


