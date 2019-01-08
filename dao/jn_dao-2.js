/*引入==============dbPool(连接池用)================模块*/
const dbPool = require("../config/dbpoolconfig");//连接数据库

const jnModel={
    /*进入页面加载数据库中的信息*/
    model_jn(params){
        return new Promise(function (resolve, reject) {
            dbPool.connect("SELECT * FROM memorial", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    },
    /*添加纪念日*/
    model_addMyJN(params){
        return new Promise(function (resolve, reject) {
            dbPool.connect("INSERT INTO memorial VALUES (?,?,?,?,?,?,?)", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    },
    /*删除纪念日*/
    model_deleteMyJN(params){
        return new Promise(function (resolve, reject) {
            dbPool.connect("DELETE FROM memorial WHERE memorial_id=?", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    },
    /*编辑纪念日*/
    model_changeMyJN(params){
        return new Promise(function (resolve, reject) {
            dbPool.connect("UPDATE memorial SET  memorial_name=?,memorial_relative=?,memorial_date=?,memorial_phone=?,memorial_zt=? WHERE memorial_id=? AND u_id=?;", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    },
};
module.exports=jnModel;