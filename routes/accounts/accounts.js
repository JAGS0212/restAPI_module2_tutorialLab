const express = require('express');

const router = express.Router();


router.get('/',(req,res)=>{
    res.status(200).send(req.store.accounts);
})

router.post('/',(req,res)=>{
    let newAccount = req.body;
    let id = req.store.accounts.length;
    req.store.accounts.push(newAccount);
    res.status(201).send({id:id});
})

router.put('/:id',(req,res)=>{
    req.store.accounts[req.params.id] = req.body;
    res.status(200).send(req.store.accounts[req.params.id]);
})

router.delete('/:id',(req,res)=>{
    req.store.accounts.splice(req.params.id,1);
    res.status(204).send();
})

module.exports = router;