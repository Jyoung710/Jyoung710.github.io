const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, function() {
    console.log('sever start');
});

app.get('/comp',(req, res) => {
    res.sendFile(__dirname + '/html/index.html') 
});
