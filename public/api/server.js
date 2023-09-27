const express = require('express')
const app = express()
const port = 3001
const requestHandler = require('./handlers')

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);

app.get('/api/v1/get-items', requestHandler.getItems())
app.put('/api/v1/add-items', requestHandler.addItem());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})