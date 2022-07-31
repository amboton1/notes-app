const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { connectDB } = require('./config/db');
const port = process.env.PORT || 5000;

const app = express();

connectDB();

/* app.use(cors({
    origin: '*',
    credentials: true
})); */

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/notes', require('./routes/routes'));

app.listen(port, () => console.log(`Server is running on port ${port}`));