const mongojs = require('mongojs');

const db = mongojs('mongodb://localhost:27017/shop');
db.on('error', function (err) {
    console.log('[mongojs] database error', err)
})

db.on('connect', function () {
    console.log('[mongojs] database connected')
})

module.exports = db;

