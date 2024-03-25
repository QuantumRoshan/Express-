const {people}=require('../data')

const getPeople=(req,res)=>{
    res.status(200).json({Sucess:true,data:people})
}
const createPeople=(req,res)=>{
    const {name}=req.body
    // console.log(name);
    res.status(201).json({Sucess:true,person:name})
}

const addPeople=(req,res)=>{
    const {name}=req.body
    res.status(200).json({sucess:true,data:[...people,name]})
}

const updatePeople=(req,res)=>{
    const {name}=req.body
    const {id}=req.params
    // console.log(name,id);
    const person=people.find((person)=>person.id===Number(id))
    // console.log(person);
    if(!person){
        // console.log(person);
        return res.status(404).send('Person not found')
    }
    const newPerson=people.map((person)=>{
        if(person.id===Number(id)){
            person.name=name
        }
        return person
    })
    res.status(200).json({Sucess:true, Data:newPerson})
}

const deletePeople=(req,res)=>{
    const {id}=req.params
    const person=people.find((p)=>{
        return p.id===Number(id)
    })
    if(!person){
        return res.status(404).send("Id doesn't exists")
    }
    const newPeople=people.filter((people)=> people.id!==Number(id))
    return res.status(200).json({Sucess:true,Data:newPeople})
}

module.exports={
    getPeople,
    createPeople,
    addPeople,
    updatePeople,
    deletePeople
}