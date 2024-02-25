import express from 'express';


const app = express()


app.listen(3003, () => {
    console.log('Server Started Now')
})

console.log(process.env.PORT)

import mongoose from 'mongoose';  //mongoose is library which help us to connect with mongodb we will study about it

mongoose.connect(url)

const dataBase = mongoose.connection;