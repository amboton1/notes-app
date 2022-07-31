const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        reqired: [true, 'Please add an email']
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Users', userSchema);
