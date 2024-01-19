/*
const { Router } = require('express');
const roleModel = require('../models/role');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const roles = await roleModel.find({});

        res.status(200).json(roles);
    } catch(error) {
        res.status(400).json({error: error.message });
    }
});

router.get('/:name', async (req, res) => {
    const name = req.params.name;

    try {
        const role = await roleModel.findOne({ name: name });

        if (role) {
            res.status(200).json(role);
        } else {
            res.status(404).json({error: 'Role not found.' });
        }
    } catch(error) {
        res.status(400).json({error: error.message})
    }
});

router.post('/', async (req, res) => {
    const role = req.body;

    const newRole = new roleModel({
        name: role.name
    });

    try {
        await newRole.save().then(savedRole => {
            console.log('Role saved:', savedRole);
        })

        res.status(201).json(newRole);
    } catch(error) {
        res.status(400).json({error: error.message})
    }
});

router.delete('/:name', async (req, res) => {
    const name = req.params.name;

    try {
        await roleModel.findOneAndDelete({ name: name });

        res.status(200).json('Role deleted successfully');
    } catch(error) {
        res.status(400).json({error: error.message})
    }
});

module.exports = router;*/