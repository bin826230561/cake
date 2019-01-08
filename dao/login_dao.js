/*引入==============dbPool(连接池用)================模块*/
const dbPool = require("../config/dbpoolconfig");//连接数据库

const loginModel={
    /*登录*/
    model_login(params){
        return new Promise(function (resolve, reject) {
            dbPool.connect("SELECT * FROM users where u_phone=? and u_pwd=?", params,
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
module.exports=loginModel;