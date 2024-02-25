import express from 'express';
import cors from 'cors';  // Cross-Origin Resource Shairing is help us to use our backend code for use every browser mean I can access our website by any person browser if I didn't use then when I comminicate with our backend with our frontend then I not connected reseaon of security issue 


const app = express()

//Middle ware 
app.use(cors())

app.use(express.json()) // it's help us to convert data from json to it's original structure and from original structure to json not fonfirm yet 

//Middle ware is running before the route mean first middle ware running then other work done

app.get('/khan' , (req , res) => {
    res.send('khan from another file')
})

app.listen(3004 , () => {
    console.log("Server is Started")
})