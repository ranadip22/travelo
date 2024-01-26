const express = require('express')
const app = express()

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