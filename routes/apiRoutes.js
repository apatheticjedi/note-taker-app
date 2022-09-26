const path = require('path');
const router = require('express').Router();
const fs = require('fs');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8")) || [];
const { notes } = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');


router.get('/notes', (req, res) => {
    res.send(data);
    console.log(data);
});

router.post('/notes', (req, res) => {
    console.log(req.body);
    const { title, text } = req.body;
    if (title && text) {
        const newNote = {
            title,
            text, 
            id: uuidv4()
        }
        data.push(newNote)
        console.log(data);
        fs.writeFileSync(
            path.join(__dirname, '../db/db.json'),
            JSON.stringify(data), null, 2);
    }
    
});


module.exports = router;