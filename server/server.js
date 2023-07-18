const express = require('express');
const cors = require('cors');
const knex = require('knex')(require('./knexfile.js').development)
const port = 8080;
const app = express();

app.use(cors());
app.use(express.json())


//all CRUD endpoints for users
//CREATE
app.post('/users', (req, res) => {
    let userToAdd = req.body;
    knex('users')
        .insert(userToAdd)
        .then(() => res.status(201).send({message: `Profile has been created for: ${userToAdd.first_name} ${userToAdd.last_name}`}))
})
//READ
app.get('/users', (req, res) => {
    knex.select('*')
        .from('users')
        .then(data => res.status(200).json(data))
})
//UPDATE
app.patch('/users/:id', (req, res) => {
    let { id } = req.params;
    let updateInfo = req.body;
    knex('users')
        .where({'id': id})
        .update(updateInfo)
        .then(() => res.status(201).send({message: `Profile has been updated!`}))
})
//DELETE
app.delete('/users/:id', (req, res) => {
    let { id } = req.params;
    knex('items')
        .where({'items.users_id': id})
        .del()
        .then(() => {
            knex('users')
                .where({'users.id': id})
                .del()
                .then(() => res.status(200).send({message: `User has been deleted as well as all the items they inputed!`}))
        })
})

//all CRUD endpoints for items
//CREATE
app.post('/items', (req, res) => {
    let newItem = req.body;
    knex('items')
        .insert(newItem)
        .then(() => res.status(201).send({message: `${newItem.item_name} has been added to the inventory!`}))
})
//READ
app.get('/items', (req, res) => {
    knex.select('*')
        .from('items')
        .then(data => res.status(200).send(data))
})
//UPDATE
app.patch('/items/:id', (req, res) => {
    let { id } = req.params;
    let updateInfo = req.body;
    knex('items')
        .where({'id': id})
        .update(updateInfo)
        .then(() => res.status(201).send({message: `Item has been updated!`}))
})
//DELETE
app.delete('/items/:id', (req, res) => {
    let { id } = req.params;
    knex('items')
        .where({'id': id})
        .del()
        .then(() => res.status(200).send({message: `Item has been deleted!`}))
})

app.listen(port, () => console.log(`Listening on port: ${port}`));