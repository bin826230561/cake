/*引入==============dbPool(连接池用)================模块*/
const dbPool = require("../config/dbpoolconfig");//连接数据库
const goodsDao={
   searchCake(params){
       return new Promise(function (resolve,reject) {
           dbPool.connect("select * from spec  where spec_name=?",params,(err,data)=>{
               if(!err){
                   resolve(data);
                   // console.log(data)
               }else{
                   reject(err);
               }
            })
        })
    },
    searchId(params){
        return new Promise(function (resolve,reject) {
            dbPool.connect("select goods_id from goods  where goods_name=?",params,(err,data)=>{
                if(!err){
                    resolve(data);
                    // console.log(data)
                }else{
                    reject(err);
                }
            })
        })
    },
};
module.exports=goodsDao;