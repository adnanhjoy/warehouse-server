const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const recentPost = require('./data/recent.json');

app.use(cors());

app.get('/recent-post', (req, res) => {
    res.send(recentPost)
})

app.get('/', (req, res) => {
    res.send('Server is Running');
})

app.listen(port, () => {
    console.log('Server Runnig Port', port)
})