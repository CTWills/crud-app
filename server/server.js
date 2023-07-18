const express = require('express');
const cors = require('cors');
const knex = require('knex')(require('./knexfile.js').development)
const port = 8080;
const app = express();

app.use(cors());
app.use(express.json())


//all CRUD endpoints for users
app.get('/users', (req, res) => {
    knex.select('*')
        .from('users')
        .then(data => res.status(200).json(data))
})

app.listen(port, () => console.log(`Listening on port: ${port}`));