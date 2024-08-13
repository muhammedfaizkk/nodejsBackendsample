const express = require('express');
const cors = require("cors");
const app = express(); 

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));

app.use((err, req, res, next) => {
    res.send(err.message);
});

module.exports = app; 
