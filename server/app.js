// const express = require('express')
// const mongoose = require('mongoose')
// const app = express()
// mongoose.connect("mongodb://localhost:27017/travelo")
//     .then(() => console.log('MongoDB Connected'))
//     .catch((err) => console.log(err))

// const userSchema = new mongoose.Schema({
//     fname: String,
//     lname: String,
//     date: Date,
//     gender: String,
//     email: String,
//     password: String,
//     phone: Number,
// })

// const UserModel = mongoose.model('User', userSchema)

// app.get('/', (req, res) => {
//     res.send('hello world')
// })

// app.listen(3001, () => {
//     console.log('server is running')
// })

// app.get('/about', (req, res) => {
//     res.send('about page')
// })

// app.get('/contact', (req, res) => {
//     res.send('contact page')
// })

// app.get('/services', (req, res) => {
//     res.send('services page')
// })

// app.get('/login', (req, res) => {
//     res.send('login page')
// })

// app.get('/regsiter', (req, res) => {
//     res.send('register page')
// })

// server.js

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/myapp')
.then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// User Model
const User = mongoose.model('User', {
    fname: String,
    lname: String,
    date: Date,
    gender: String,
    phone: String,
    email: String,
    username: String,
    password: String
});

// Middleware
app.use(bodyParser.json());

// Registration Route
app.post('/register', async (req, res) => {
    try {
        const { fname, lname, date, gender, phone, email, username, password } = req.body;
        const newUser = new User({ fname, lname, date, gender, phone, email, username, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
