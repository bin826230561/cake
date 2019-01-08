/*引入==============dbPool(连接池用)================模块*/
const dbPool = require("../config/dbpoolconfig");//连接数据库
const goodsModel={
    model_21cake2(params){
        return new Promise(function (resolve, reject) {
            dbPool.connect("SELECT * FROM goods", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    },
    model_21cake3(params){
        return new Promise(function (resolve, reject) {
            dbPool.connect("SELECT * FROM goods a JOIN guige b ON a.goods_id=b.goods_id JOIN spec c ON c.spec_id=b.spec_id", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    },
    model_21cake4(params){
        return new Promise(function (resolve, reject) {
            dbPool.connect("select * from goods", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    },
    model_21cake5(params){
        return new Promise(function (resolve, reject) {
            dbPool.connect("select * from goods", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    },
    model_21cake6(params){
        return new Promise(function (resolve, reject) {
            dbPool.connect("select * from goods", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    },
    model_21cake7(params){
        return new Promise(function (resolve, reject) {
            dbPool.connect("select * from goods", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    },
    model_21cake8(params){
        return new Promise(function (resolve, reject) {
            dbPool.connect("select * from goods", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    },
    model_21cake9(params){
        return new Promise(function (resolve, reject) {
            dbPool.connect("select * from goods", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    },
    model_21cake10(params){
        return new Promise(function (resolve, reject) {
            dbPool.connect("select * from goods", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    },
    model_21cake11(params){
        return new Promise(function (resolve, reject) {
            dbPool.connect("select * from goods", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    },




    dao_loadGoods2(params){
        return new Promise(function (resolve,reject) {//resolve成功，reject失败
            dbPool.connect("SELECT * FROM users a JOIN memorial b ON a.u_id=b.u_id",
                params,(err,data)=>{//data是查询回来的结果
                    if (!err){
                        resolve(data);
                    } else{
                        reject(err)
                    }
                })
        })
    },
    dao_loadGoods3(params){
        return new Promise(function (resolve,reject) {//resolve成功，reject失败
            // console.log(params);
            dbPool.connect("UPDATE users SET u_phone=?,u_vip=?,u_dizhi=? WHERE u_id=?",
                params,(err,data)=>{//data是查询回来的结果
                    if (!err){
                        resolve(data);
                    } else{
                        reject(err)
                    }
                })
        })
    },
    dao_loadGoods4(params){
        return new Promise(function (resolve,reject) {//resolve成功，reject失败
            dbPool.connect("SELECT * FROM users a JOIN quan b ON a.u_id=b.u_id",
                params,(err,data)=>{//data是查询回来的结果
                    if (!err){
                        resolve(data);
                    } else{
                        reject(err)
                    }
                })
        })
    },
    dao_loadGoods5(params){
        return new Promise(function (resolve,reject) {//resolve成功，reject失败
            dbPool.connect("SELECT * FROM users a JOIN quan b ON a.u_id=b.u_id",
                params,(err,data)=>{//data是查询回来的结果
                    if (!err){
                        resolve(data);
                    } else{
                        reject(err)
                    }
                })
        })
    },
};
module.exports=goodsModel;