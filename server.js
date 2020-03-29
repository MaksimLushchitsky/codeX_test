const express = require('express');

const app = express();

const cors = require('cors');

app.use(cors());

app.get('/api/input', (req, res) => {
    let fs = require('fs');
    let line = fs.readFileSync('input.txt', 'utf-8');
    res.json(line);
});

const port = 8000;

app.listen(port, () => console.log(`Server started on port ${port}`));
