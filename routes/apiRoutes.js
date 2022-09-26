const path = require('path');
const router = require('express').Router();
const fs = require('fs');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8")) || [];
const { notes } = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');
const { DefaultDeserializer } = require('v8');



router.get('/notes', (req, res) => {
    res.send(data);
});

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


router.delete(`/notes/:id`, (req, res) => {
    const id = req.params.id;
    for(var i = 0; i < data.length; i++) {
        if(data[i].id === id) {
            data.splice(i, 1);
            break
        }
    }
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(data), null, 2);
});

module.exports = router;