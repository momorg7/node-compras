// packages
const express = require('express');

const usersRouter = require('./routes/users');
const db = require('./databaseConnection/mongoConnection');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(bodyParser.json());
app.use(db, ()=>{});
app.use('/users', usersRouter);

app.get('/', (req, res)=>{
    res.json('TA PEGANDO MANO');
});

// init the server...
const port = 8000;
app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
});