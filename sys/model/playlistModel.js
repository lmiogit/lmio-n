var Sequelize = require('sequelize');
var sequelize = require('../lib/sequelize');

var playlistModel = sequelize.define('playlist', {
    id: {type: Sequelize.UUIDV4, primaryKey: true, defaultValue: Sequelize.UUIDV4},
    name: {type: Sequelize.STRING, allowNull: false},
    user_id: {type: Sequelize.UUIDV4, allowNull: false},
    desc: {type: Sequelize.STRING, allowNull: true},
    ct: {type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW},
    ut: {type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW},
    is_invalid: {type: Sequelize.ENUM('true', 'false'), allowNull: false, defaultValue: 'true'}
}, {});

module.exports = playlistModel;