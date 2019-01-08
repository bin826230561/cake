/*引入==============数据库================模块*/
const mysql = require("mysql");
const dbPool = {
    pool: {},
    config: {
        host: "localhost",//主机地址
        port: "3306",//端口号
        user: "root",//数据库用户
        password: "root",//数据库密码
        database: "21cake1" //表文件名(表的最外面)
    },
    create() {
        this.pool = mysql.createPool(this.config)
    },
    connect(sql, arr, fn) {//sql语句，参数，回调函数
        this.pool.getConnection((err, connection) => {
            connection.query(sql, arr, fn);
            connection.release();
        })
    }
};
dbPool.create();
module.exports = dbPool;