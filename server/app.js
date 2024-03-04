const express = require('express')
const mongoose = require('mongoose');
const app = express()
mongoose.connect("mongodb://localhost:27017/travelo")
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: Number,
    address: String,
    city: String,
})

const UserModel = mongoose.model('User', userSchema)

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})

app.get('/about', (req, res) => {
    res.send('about page')
})

app.get('/contact', (req, res) => {
    res.send('contact page')
})

app.get('/services', (req, res) => {
    res.send('services page')
})

app.get('/login', (req, res) => {
    res.send('login page')
})

app.get('/regsiter', (req, res) => {
    res.send('register page')
})