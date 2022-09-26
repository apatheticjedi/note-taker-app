const express = require('express');
const HTML = require('./routes/htmlRoutes');
const data = require('./routes/apiRoutes');
const app = express();
const PORT = process.env.PORT || 3001;
const { notes } = require('./db/db.json');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', data);
app.use('/', HTML);


// app.get('/api/notes', (req, res) => {

//     console.log('hello');
//     res.json(notes);
// });

// app.post('api/notes', (req, res) => {
//     req.body.id = notes.length.toString();
//     if (!title || !text) {
//         res.status(400).send('The note is not properly formatted.');
//     } else {
//         const note = createNewNote(req.body, notes);
//         res.json(note);
//     }
// });

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});