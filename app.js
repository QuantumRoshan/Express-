const express=require('express');
const app=express()
const Authorized=require('./middleware')

app.use(Authorized)

app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/login',(req,res)=>{
    res.send('Welcome Roshan')
    console.log(req.user);
})

app.listen(5000,()=>{
    console.log('Server is running')
})