// packages
const express = require('express');

const app = express();

const port = 8000;

app.get('/', (req, res)=>{
    res.json('TA PEGANDO MANO');
});

// init the server...
app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
});