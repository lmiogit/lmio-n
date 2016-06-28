var config = {
    detail: {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    },
    database: 'lmio',
    user: 'root',
    pwd: '123456'
};

module.exports = config;