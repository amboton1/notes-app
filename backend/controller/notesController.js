const Notes = require("../models/notes");

const getAllNotes = async (req, res) => {
    const notes = await Notes.find({}).exec();
    
    return res.status(200).send(notes);
}

const getNote = async (req, res) => {
    const note = await Notes.findById(req.params.id);

    if (!note) {
        res.status(404).send(`Note with id: ${req.params.id} was not found!`)
        throw new Error('Note doesnt exist')
    }

    res.status(200).json({
        title: note.title,
        description: note.description
    });
}

const createNote = async (req, res) => {
    if (!req.body.title || !req.body.description) {
        res.status(400).json({ message: 'Missing text field' })
    }

    const note = await Notes.create({
        title: req.body.title,
        description: req.body.description,
        clientId: req.client.clientId
    });

    res.status(201).json({ message: 'Note successfully created', note });
}

const updateNote = async (req, res) => {
    const note = Notes.findById(req.params.id);

    if (!note) {
        res.status(400).json({ message: 'Missing body fields' });
        throw new Error('Note not found');
    }

    const updatedNote = await Notes.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(204).json(updatedNote);
}

const deleteNote = async (req, res) => {
    const note = Notes.findById(req.params.id);

    if (!note) {
        res.status(404).send(`Note with id: ${req.params.id} was not found!`);
        throw new Error('Note not found');
    }

    await note.deleteOne();

    res.status(200).json({ id: req.params.id });
}

module.exports = { getAllNotes, getNote, createNote, updateNote, deleteNote }