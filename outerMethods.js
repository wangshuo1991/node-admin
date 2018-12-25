const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users');
const Schema = mongoose.Schema;

let membersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    gender: {
        type: Number,
        enum: [0,1],
        default: 0
    },
    from: {
        type: String
    },
    position: {
        type: String
    }
});

module.exports = mongoose.model('man',membersSchema);