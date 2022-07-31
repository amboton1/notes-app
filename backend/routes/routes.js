const express = require('express');
const { getAllNotes, getNote, createNote, updateNote, deleteNote } = require('../controller/notesController');
const { createUser, deleteUser } = require('../controller/usersController');

const router = express.Router();

router.get('/', getAllNotes);

router.get('/:id', getNote);

router.post('/createNote', createNote);

router.put('/:id', updateNote);

router.delete('/:id', deleteNote);

router.post('/createUser', createUser);

router.delete('/deleteUser/:id', deleteUser);

module.exports = router;
