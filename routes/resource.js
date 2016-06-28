var express = require('express');
var router = express.Router();
var playlistModel = require('../sys/model/playlistModel');


router.get('/', function (req, res, next) {
    res.render('resource/index');
});

router.get('/playlist', function (req, res, next) {
    playlistModel.getOneById(0, function () {
    });
});

router.get('/song', function (req, res, next) {
});

router.post('/song', function (req, res, next) {
    console.log(req.body);
});

module.exports = router;