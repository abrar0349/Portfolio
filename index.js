import express from 'express'  // To use this line first add this'"    "type": "module",   "'in package.json file another wise use this const express require('express); remmember that you use only one thing from them

const app = express()

// I simply start server by use command "node index.js" but with it have issue we need to run it again and again mean that when ever I change in file I need to use this command again and again to solve this issue by installing nodemon and use "npx nodemon index.js" I add this command in package.json file so I didn't need to use it again and again

app.get('/get', (req , res) => {
res.json('khan is khan')    
})


app.post('/post', (req , res) => {
    req.body
    res.json('khan is khan')    
    })

app.put('/put', (req , res) => {
        req.body
        res.json('khan is khan')    
        })   

app.delete('/delete', (req , res) => {
            req.body
            res.json('khan is khan')    
            })

app.listen(3005 , () => {
    console.log("Server is Started")
})