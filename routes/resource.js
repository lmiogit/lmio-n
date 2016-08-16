var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.render('resource/index');
});

router.get('/playlist', function (req, res, next) {
    res.send({
        name: 'TestList',
        tags: [{
            name: 'jazz'
        }, {
            name: 'new-age'
        }],
        content: [{
            name: 'After Altale',
            author: 'Sakuzyo',
            lrc: '',
            src: '/audio/0001.mp3'
        }]
    });
});

router.get('/song', function (req, res, next) {
});

router.post('/song', function (req, res, next) {
    console.log(req.body);
});

module.exports = router;