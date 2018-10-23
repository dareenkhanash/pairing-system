const mongoose = require('mongoose');

var StudentsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    level: {
        type: Number
    }
});

module.exports = mongoose.model('Student', StudentsSchema);
