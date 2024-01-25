const { Router } = require('express');
const presenceModel = require('../models/presence');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const presences = await presenceModel.find({});

        res.status(200).json(presences);
    } catch(error) {
        res.status(400).json({error: error.message });
    }
});

router.get('/:studentId', async (req, res) => {
    const studentId = parseInt(req.params.studentId);

    try {
        const student = await presenceModel.findOne({ studentId: studentId });

        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({error: 'Student not found.' });
        }
    } catch(error) {
        res.status(400).json({error: error.message})
    }
});

router.post('/', async (req, res) => {
    const presence = req.body;

    const newPresence = new presenceModel({
        studentId: presence.studentId,
        present: presence.present
    });

    try {
        await newPresence.save();

        res.status(201).json(newPresence);
    } catch(error) {
        res.status(400).json({error: error.message})
    }
});

router.put('/update/:studentId', async (req, res) => {
    const studentId = parseInt(req.params.studentId);
    const isPresent = req.body.present;

    try {
        const student = await presenceModel.findOne({ studentId: studentId });

        student.present = isPresent;

        await presenceModel.updateOne({ studentId: studentId }, { $set: student });

        res.status(200).json(student);
    } catch(error) {
        res.status(400).json({error: error.message})
    }
});

router.delete('/:studentId', async (req, res) => {
    const studentId = parseInt(req.params.studentId);

    try {
        await presenceModel.findOneAndDelete({ studentId: studentId });

        res.status(200).json('User deleted successfully');
    } catch(error) {
        res.status(400).json({error: error.message})
    }
});

module.exports = router;