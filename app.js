const express=require('express');
const app=express();

const router=require('./routes/people')
const login=require('./routes/login')

app.use(express.static('./methods-public'))
app.use(express.urlencoded());
app.use(express.json())

app.use('/api/people',router);
app.use('/login',login);


app.all('*',(req,res)=>{
    res.status(404).send('Error')
})

app.listen(5000,()=>{
    console.log('Server is running');
})
