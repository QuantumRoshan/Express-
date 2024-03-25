const app=require('express');
const router=app.Router();

router.post('/',(req,res)=>{
    let {name}=req.body
    res.status(201).send(`Welcome ${name}<br><a href='/'>Return Home</a>`)
})


module.exports=router