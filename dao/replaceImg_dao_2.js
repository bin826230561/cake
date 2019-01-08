/*引入==============dbPool(连接池用)================模块*/
const dbPool = require("../config/dbpoolconfig");//连接数据库

const replaceImg_model={
// 查询图片是否为空
    selectImg(params){
    return new Promise(function (resolve,reject) {//resolve成功，reject失败
        dbPool.connect("select u_img from users where u_phone=?",
            params,(err,data)=>{//data是查询回来的结果
                if (!err){
                    resolve(data);
                } else{
                    reject(err)
                }
            })
    })
},
    // 保存图片路径
    changeImg1(params){
        return new Promise(function (resolve,reject) {//resolve成功，reject失败
            dbPool.connect("update users set u_img=? where u_phone=?",
                params,(err,data)=>{//data是查询回来的结果
                    if (!err){
                        resolve(data);
                    } else{
                        reject(err)
                    }
                })
        })
    },
    // 查询图片路径
    showFace(params){
        return new Promise(function (resolve,reject) {
            dbPool.connect("select * from users where u_phone=?",
                params,(err,data)=>{
                    if (!err){
                        resolve(data);
                    } else{
                        reject(err)
                    }
                })
        })
    },
};
module.exports=replaceImg_model;