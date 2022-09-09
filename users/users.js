import express from 'express'
import { metadata } from 'youtube-metadata-from-url';
const url = 'https://youtu.be/8mJyNs5U-Xo';

const usersRouter = express.Router()

usersRouter.use((req, res, next) => {
    console.log(metadata(url).then(function(json) {
        console.log(json);
    }, function(err){
        console.log(err);
    }))
    next()
})

usersRouter.get('/vidinfo', (req, res) => {
    res.send('Here is your info!')
})


export { usersRouter }
