const express = require('express'); 
const mongoose = require('mongoose');
const bodyparser = require('body-parser')
const app = express(); 

mongoose.connect('mongodb://localhost/1stmenttore', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyparser.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server is runnimg om port ${port}`);
}); 

const crudRoutes = require('./routes/crud');

app.use('/cruds', crudRoutes)