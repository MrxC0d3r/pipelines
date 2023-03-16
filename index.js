const express = require('express');
const app = express();

const PORT = 4001;

// addtwo number

const add = (a,b) => {
    return a+b;
}

var password = "EFarfsrwrfg#fsgsg"

app.listen(PORT, ()=> {
    console.log(`Server running on port: ${PORT}`)
})