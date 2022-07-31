const Users = require('../models/users');

const createUser = async (req, res) => {
    if (!req.body.name || !req.body.email) {
        res.status(400).json({ message: 'Missing field or both fields' })
    }

    const note = await Users.create({
        name: req.body.name,
        email: req.body.email,
    });

    res.status(201).json({ message: 'User successfully created', note });
}

const deleteUser = async (req, res) => {
    const user = Users.findById(req.params.id);

    if (!user) {
        res.status(404).send(`User with id: ${req.params.id} was not found!`);
        throw new Error('User not found');
    }

    await user.deleteOne();

    res.status(200).json({ id: req.params.id })
}

module.exports = { createUser, deleteUser };
