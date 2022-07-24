const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();

app.use(cors({
    origin: '*',
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/api/notes', (req, res) => {
    res.status(200).json({message: 'Get notes'})
})

app.listen(port, () => console.log(`Server is running on port ${port}`));