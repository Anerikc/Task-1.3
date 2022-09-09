import express from 'express'

const usersRouter = express.Router()

usersRouter.get('/vidinfo', (req, res) => {
    res.send('Here is your info!')
})


export { usersRouter }
