const express=require('express');
const router=express.Router();
const {getPeople,createPeople,addPeople,updatePeople,deletePeople}=require('../controller/people')

// router.get('/',getPeople)
// router.post('/',createPeople)
// router.post('/postname',addPeople)
// router.put('/:id',updatePeople)
// router.delete('/:id',deletePeople)

router.route('/').get(getPeople).post(createPeople);
router.route('/postname').post(addPeople);
router.route('/:id').put(updatePeople).delete(deletePeople);

module.exports=router