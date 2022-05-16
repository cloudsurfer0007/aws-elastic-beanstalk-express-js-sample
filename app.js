const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! I am Sarthak abd this is my code after changing and creating my first AWS Pipeline.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
