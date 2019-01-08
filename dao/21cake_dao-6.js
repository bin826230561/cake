/*引入==============dbPool(连接池用)================模块*/
const dbPool = require("../config/dbpoolconfig");//连接数据库

const goodsModel={
    model_21cake(params){
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
    model_add(params){
        return new Promise(function (resolve, reject) {
            dbPool.connect("select * from address", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    },
    dao_loadAdmin(params){
        return new Promise(function (resolve,reject) {//resolve成功，reject失败
            dbPool.connect("SELECT * FROM admin where a_id=?",
                params,(err,data)=>{//data是查询回来的结果
                    if (!err){
                        resolve(data);
                    } else{
                        reject(err)
                    }
                })
        })
    },
    model_plsc(params){
        return new Promise(function (resolve,reject) {//resolve成功，reject失败
            dbPool.connect("DELETE FROM address WHERE address_id=?",
                params,(err,data)=>{//data是查询回来的结果
                    if (!err){
                        resolve(data);
                    } else{
                        reject(err)
                    }
                })
        })
    }

};
module.exports=goodsModel;
