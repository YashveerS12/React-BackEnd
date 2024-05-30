const express=require("express");
const app=express();

app.get('/api', (req, res) => {
    res.json({ message: 'Hello I am Yashveer Singh from Backend !!!'});
});

app.listen(8080,()=>{
    console.log("Server is listening");
})