const mongoose = require('mongoose');
const { Schema } = mongoose;
var PairingSchema = mongoose.Schema({
    table: [{
        student1: {
            type: Schema.Types.ObjectId,
            ref: 'Student'
        },
        student2: {
            type: Schema.Types.ObjectId,
            ref: 'Student'
        }
    }]
});
//db.contacts.find().Count()+1
module.exports = mongoose.model('Pairing', PairingSchema);