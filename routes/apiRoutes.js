const path = require('path');
const router = require('express').Router();
const fs = require('fs');
const { notes } = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');
let data = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8")) || [];

// populate notes.html page with notes stored in db.json
router.get('/notes', (req, res) => {
    res.send(data);
});

// add new note to db.json
router.post('/notes', (req, res) => {
    const { title, text } = req.body;
        const newNote = {
            title,
            text, 
            id: uuidv4()
        };
        data.push(newNote);
        fs.writeFileSync(
            path.join(__dirname, '../db/db.json'),
            JSON.stringify(data), null, 2);
});

// delete note by id from db.json
router.delete(`/notes/:id`, (req, res) => {
    const id = req.params.id;

    data = data.filter(element => element.id !== id);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(data), null, 2);
});

module.exports = router;