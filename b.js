const express= require('express')
const app=express();

const data=require('./data');

app.get('/',(req,res)=>{
    res.json(data.products)
})
app.get('/select',(req,res)=>{
    const few=data.products.map((p)=>{
        const {id,name,price}=p
        return {id,name,price}
    })
    res.json(few)
})

app.get('/:ID',(req,res)=>{
    const Id=req.params.ID
    const single=data.products.find((p)=> p.id===Number(Id))
    if(!single){
        return res.status(404).send(`<H1>Page Not Found</H1><br><a href='/'>Move to Home Page</a>`)
    }
    else{
        res.json(single)
    }
})
app.listen(5000,()=>{
    console.log('Server is running...');
})