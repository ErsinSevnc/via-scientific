const app = require('express')();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;
const DB = process.env.MONGO_URL;

mongoose
    .connect(DB)
    .then(() => console.log('Database conntected'))
    .catch(error => consolelog(error));

app.listen(PORT, () => {
    console.log(`Server Listening on port: ${PORT}`)
})