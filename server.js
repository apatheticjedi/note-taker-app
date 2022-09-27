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

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});