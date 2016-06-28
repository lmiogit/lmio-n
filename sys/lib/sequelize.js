var Sequelize = require('sequelize');
var config = require('../config/datebase');

var sequelize = new Sequelize(config.database, config.user, config.pwd,config.detail);

module.exports = sequelize;

