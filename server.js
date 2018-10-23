const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const students = require('./routes/api/students');
const app = express();
// db config
const db = require('./config/keys').mongoURI;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('mongodb connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('hello!'));

//use Routes
app.use('/api/students', students);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));