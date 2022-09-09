import express from 'express'

const usersRouter = express.Router()

usersRouter.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

usersRouter.get('/vidinfo', (req, res) => {
    res.send('Here is your info!')
})


export { usersRouter }
