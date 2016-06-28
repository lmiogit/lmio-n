var mysql = require('mysql');
var config = require('../config/datebase');

function MysqlC(cfg) {
    this.pool = mysql.createPool(cfg);
}

MysqlC.prototype.query = function (sqlStr, callback) {
    this.pool.query(sqlStr, function (err, rows) {
        if (err) throw err;
        callback(rows);
    });
};

var MysqlC = new MysqlC(config.mysql);
module.exports = MysqlC;