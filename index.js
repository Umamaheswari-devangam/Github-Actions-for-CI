const express = require('express');
const app = express();
const PORT = 3003;

app.get('/', (req,res) => res.send("Hello World"));

app.listen(3003, () => console.log("App running on port 3003"));