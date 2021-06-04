const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const views = path.join(__dirname, 'views');

app.use(express.static(path.join(__dirname, '/public')));

app.listen(port, () => console.log(`servidor alojado en http://localhost:${port}`));

app.get('/', (req, res) => res.sendFile(path.join(views, '/home.html')));