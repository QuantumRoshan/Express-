const express= require('express');
const app= express()

const {products}= require('./data')

const newProducts=products.map((product)=>{
    const {id,name,price}=product;
    return {id,name,price}
})

app.get('/',(req,res)=>{
    res.json(newProducts)
})
app.get('/:Id',(req,res)=>{
    console.log(req.params);
    // const {id}=req.params.Id;
    // console.log(id);
    res.json(newProducts.find((product)=> product.id===1))
})

app.listen(5000)