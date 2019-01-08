/*引入==============dbPool(连接池用)================模块*/
const dbPool = require("../config/dbpoolconfig");//连接数据库

const bulletin_model={
    /*查询请求*/
    dao_loadBulletin(params){
        return new Promise(function (resolve,reject) {//resolve成功，reject失败
            dbPool.connect("SELECT * FROM bulletin",
                params,(err,data)=>{//data是查询回来的结果
                    if (!err){
                        resolve(data);
                    } else{
                        reject(err)
                    }
                })
        })
    },
    /*请求加载标签*/
    dao_loadTag(params){
        return new Promise(function (resolve,reject) {//resolve成功，reject失败
            dbPool.connect("SELECT * FROM tp",
                params,(err,data)=>{//data是查询回来的结果
                    if (!err){
                        resolve(data);
                    } else{
                        reject(err)
                    }
                })
        })
    },
    /*删除请求*/
    dao_delBulletin(params){
        return new Promise(function (resolve,reject) {//resolve成功，reject失败
            dbPool.connect("DELETE FROM bulletin WHERE b_id=?",
                params,(err,data)=>{//data是查询回来的结果
                    if (!err){
                        resolve(data);
                    } else{
                        reject(err)
                    }
                })
        })
    },
    /*新增请求*/
    dao_addBulletin(params){
        console.log(555)
        return new Promise(function (resolve,reject) {//resolve成功，reject失败
            dbPool.connect("INSERT INTO bulletin VALUES(NULL,?,?,?,?)",
                params, (err,data)=>{//data是查询回来的结果
                    if (!err){
                        resolve(data);
                    } else{
                        reject(err)
                    }
                })
        })
    },
    // dao_bulletinChange(params){
    //     return new Promise(function (resolve,reject) {//resolve成功，reject失败
    //         dbPool.connect("SELECT * FROM bulletin WHERE b_id=?",
    //             params,(err,data)=>{//data是查询回来的结果
    //                 if (!err){
    //                     resolve(data);
    //                 } else{
    //                     reject(err)
    //                 }
    //             })
    //     })
    // },
    //批量删除公告
    dao_deleteBulletin(params){
        return new Promise(function (resolve,reject) {//resolve成功，reject失败
            dbPool.connect("DELETE FROM bulletin WHERE b_id=?",
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
module.exports=bulletin_model;