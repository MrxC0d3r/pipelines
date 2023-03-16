const express = require('express');
const app = express();

const PORT = 4001;

// Code commit

app.listen(PORT, ()=> {
    console.log(`Server running on port: ${PORT}`)
})