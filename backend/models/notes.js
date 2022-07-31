const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        reqired: [true, 'Please add a title']
    },
    description: {
        type: String,
        reqired: [true, 'Please add a description']
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Notes', notesSchema);
