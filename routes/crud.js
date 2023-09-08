const express = require('express');
const router = require.Router();
const Crud = require('../models/crud')

//create

router.post('/', async (req,res) => {
    try{
     const crud =  new Crud(req.body)
     const savedCurd = await crud.save()
     res.status(201).json(savedCurd);
    } catch(err) {
       res.statu(400).json({ error: err.message});
    }
});

//single task by id

router.get('/:id', async(req,res) => {
    try{
      const crud  = await Crud.findById(req.params.id);
      if(!crud) {
        return res.status(404).json({ message: 'Crud not found'})
      }
      res.staus(200).json(crud);
    } catch (err) {
        res.status(500).json({error : err.message})
    }
});


// updateby id

router.put(':id', async (req,res) => {
  try {
    const crud = await Crud.findByIdAndUpdate(req.params.id, req.body, { new: true});
    if(!crud) {
        return res.status(404).json({ message: 'crud not found'})
    }
    res.status(200).json(task);

  } catch (err) {
    res.status(500).json({ err: error.message})
  }   
});


//delate 

router.delate('/:id', async(req,res) => {
    try{
        const crud = await Crud.findByIdAndRemove(req.params.id);
        if(!crud) {
            return res.status(404).json({ message: 'Curd not found'})
        }
        res.status(204).send();
    } catch(error) {
        res.status(500).json({ error: error.message})
    }
});


module.export = router;


















