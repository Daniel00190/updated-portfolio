const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use('/css', express.static(path.join(__dirname, 'views/css')));
app.use('/images', express.static(path.join(__dirname, 'views/images')));
app.use('/javascript', express.static(path.join(__dirname, 'views/javascript')));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
});

