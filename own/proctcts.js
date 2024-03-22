const express= require('express')
const app=express();

const data=require('./data');

app.get('/',(req,res)=>{
    res.json(data)
})
app.get('/products',(req,res)=>{
    res.json(data.products)
})
app.get('/people',(req,res)=>{
    res.json(data.people)
})
app.get('/products/search', (req, res) => {
    // console.log('Query parameter:', req.query);
    // res.send('Search request received');
    let Productss=[...data.products]
    const {search,limit}=req.query
    console.log(search,limit);
    if(search){
        Productss=Productss.filter((p)=>{
           return p.name.startsWith(search)
        })
    }
    if(limit){
        Productss= Productss.slice(0,Number(limit))
    }
    if(Productss.length < 1){
    return res.json({//we can not send 2 res one after aonther in same request and return stops javascript to read further so we need to pass return before res
            value:'true',
            data:'[]'
        })
    }
    res.status(200).json(Productss)
    console.log('hello World');

});


app.get('/products/select',(req,res)=>{
    const few=data.products.map((p)=>{
        const {id,name,price}=p
        return {id,name,price}
    })
    res.json(few)
    // console.log('Query parameter:', req.query);
})

app.get('/products/:ID',(req,res)=>{
    const Id=req.params.ID
    const single=data.products.find((p)=> p.id===Number(Id))
    if(!single){
        return res.status(404).send(`<H1>Page Not Found</H1><br><a href='/'>Move to Home Page</a>`)
    }
    else{
        res.json(single)
    }
})
// app.get('/search',(req,res)=>{
//     console.log(req.query.search);
// })

app.listen(5000,()=>{
    console.log('Server is running...');
})