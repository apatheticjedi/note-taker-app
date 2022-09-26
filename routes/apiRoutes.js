const path = require('path');
const router = require('express').Router();
const fs = require('fs');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8")) || [];
const { notes } = require('../db/db.json');


router.get('/notes', (req, res) => {
    res.send(data);
});

// router.post('/notes', (req, res) => {
//     req.body.id = notes.length.toString();
//     if (!title || !text) {
//         res.status(400).send('The note is not properly formatted.');
//     } else {
//         const note = createNewNote(req.body, notes);
//         res.json(note);
//     }
// });

module.exports = router;