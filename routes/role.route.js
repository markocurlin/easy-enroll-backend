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

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const role = await roleModel.findById(id);

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

router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        await roleModel.findByIdAndDelete(id);

        res.status(200).json('Role deleted successfully');
    } catch(error) {
        res.status(400).json({error: error.message})
    }
});

module.exports = router;