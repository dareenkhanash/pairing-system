const express = require('express');

const router = express.Router();
const Pairing = require('../../models/Pairing');
router.post('/add', (req, res) => {
    console.log(req.body);
    const students = [];
    req.body.table.map(pair => {

        students.push(pair);
    })
    const pairing = new Pairing({
        table: students
    });

    pairing.save()
        .then(student => res.json(student))
        .catch(err => console.log(err));


});
module.exports = router;