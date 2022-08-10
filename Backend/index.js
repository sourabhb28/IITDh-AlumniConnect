const express = require('express');
const mongoose = require('mongoose');
const alumini = require('./routes/alumini');
const students = require('./routes/students');

var cors = require('cors');

const app = express()
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the IIT DHARWAD Alumini Website');
});
app.use(cors());
app.use('/api/alumini', alumini);
app.use('/api/students', students);

require('dotenv').config();

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017')
.then(result => {
    app.listen(port,()=> console.log(`Server is running on ${port}`))
})
.catch(err=>console.log((err)))
