const logger=(req,res,next)=>{
    const{name}=req.query
    if(name==='Roshan'){
        req.user={name:`${name}`,id:1}
        next()
    }
    else{
        res.status(401).send('You are not roshan')
    }
}

module.exports=logger