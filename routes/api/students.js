const express = require('express');

const router = express.Router();
const Student = require('../../models/Students');
// @route    GET api/test/Students
// @desc     Test users route
// @access   Public 
router.get('/test', (req, res) => res.json({ msg: 'students work' }));
//add student
router.post('/add', (req, res) => {
    console.log(req.Body);
    Student.findOne({ name: req.body.name }).then(student => {
        if (student) {
            errors.name = 'student already exists';
            return res.status(400).json(errors);
        } else {
            const newStudent = new Student({
                name: req.body.name,
                level: req.body.level
            });
            newStudent.save()
                .then(student => res.json(student))
                .catch(err => console.log(err));
        }
    });
});

//get alll students
router.get('/', (req, res) => {
    Student.find()
        .sort({ data: -1 })
        .then(students => res.json(students))
        .catch(err => res.status(404).json({ nostudent: 'No students found' }));
});

router.delete('/delete', (req, res) => {
    Student.findOne({ name: req.body.name }).then(students => {
        if (students) {
            Student.deleteOne({ name: req.body.name })
                .then(student => {
                    res.send(student.name + " has been deleted");
                })
                .catch(err => res.status(404).json(err));

        } else {
            res.send(req.body.name + " is not exist");
        }
    }).catch(err => res.status(404).json(err))
}
);
router.post('/update', (req, res) => {
    Student.findOne({ name: req.body.name }).then(students => {
        if (students) {
            Student.findOneAndUpdate(
                { name: req.body.name },
                { $set: { level: req.body.level } })
                .then(student => res.json(student))
                .catch(err => res.status(404).json(err));

        } else {
            res.send(req.body.name + " is not exist");
        }
    }).catch(err => res.status(404).json(err))
}
);

module.exports = router;