var Sequelize = require('sequelize');
var sequelize = require('../lib/sequelize');

var playlistModel = sequelize.define('playlist', {
    id: {type: Sequelize.UUIDV4, primaryKey: true, defaultValue: Sequelize.UUIDV4},
    name: {type: Sequelize.STRING(12), allowNull: false},
    user_id: {type: Sequelize.UUIDV4, allowNull: false},
    desc:{type:Sequelize.STRING(50),allowNull:true},
    ct:{type:Sequelize.DATE}

});

var playlist = {};


module.exports = playlistModel;