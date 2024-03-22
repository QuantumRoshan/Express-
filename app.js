const express=require('express');
const app= express();
const logger=require('./middleware')

app.use(logger)

app.get('/',(req,res)=>{
    res.status(200).send('Home Page')
})
app.get('/about',(req,res)=>{
    res.status(200).send('About Page')
})
app.get('/api/a',(req,res)=>{
    res.status(200).send('a')
})
app.get('/api/b',(req,res)=>{
    res.status(200).send('b')
})
app.all('*',(req,res)=>{
    res.status(404).send('Page Not Found')
})


app.listen(5000,()=>{
    console.log('Server is running....');
})