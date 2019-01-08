const dbpool=require("../config/dbpoolconfig");
const forgetDao={
    forgetUser(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select * from users where u_phone=?",params,
                (err,data)=>{
                    if (!err){
                        resolve(data)
                    }else{
                        reject(err)
                    }

                })
        })
    },
    register(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("update users set u_pwd=? where u_phone=?",params,
                (err,data)=>{
                    if (!err){
                        resolve(data)
                    }else{
                        reject(err)
                    }

                })
        })
    },
    loginSucc(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select * from users where u_phone=?",params,
                (err,data)=>{
                    if (!err){
                        resolve(data)
                    }else{
                        reject(err)
                    }

                })
        })
    }
};
module.exports=forgetDao;