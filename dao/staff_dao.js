/*引入==============dbPool(连接池用)================模块*/
const dbPool = require("../config/dbpoolconfig");//连接数据库

const staff_model={
    /*加载员工*/
    dao_loadStaff(params){
        return new Promise(function (resolve,reject) {//resolve成功，reject失败
            dbPool.connect("SELECT * FROM employee",
                params,(err,data)=>{//data是查询回来的结果
                    if (!err){
                        resolve(data);
                    } else{
                        reject(err)
                    }
                })
        })
    },
    /*删除员工*/
    dao_dellStaff(params){
        return new Promise(function(resolve,reject){
            dbPool.connect("DELETE FROM employee WHERE e_id=?",
                params,(err,data)=>{
                if(!err){
                    resolve(data);
                }else{
                    reject(err)
                }
            })
        })
    },
    /*批量删除*/
    dao_handleDelete(params){
        console.log(params);
        let b="?";
        for(let i=0;i<params.length-1;i++){
            b+=",?"
        }
        console.log(b);
        return new Promise(function(resolve,reject){
            dbPool.connect("DELETE FROM employee WHERE e_id IN ("+b+")",
                params,(err,data)=>{
                if(!err){
                    resolve(data);
                }else{
                    reject(err)
                }
            })
        })
    },
    //编辑员工
    dao_changeStaffNews(params){
        return new Promise(function (resolve,reject) {//resolve成功，reject失败
            dbPool.connect("UPDATE employee SET e_name=?,e_sex=?,e_address=?,e_phone=?,e_state=?,e_job=? WHERE e_id=?",
                params,(err,data)=>{//data是查询回来的结果
                    if (!err){
                        resolve(data);
                        console.log(data)
                    } else{
                        reject(err)
                    }
                })
        })
    },
    //添加员工
    dao_addStaffNews(params){
        console.log(params)
        return new Promise(function (resolve,reject) {//resolve成功，reject失败
            dbPool.connect("INSERT INTO employee VALUES (null,?,?,?,?,?,?)",
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
module.exports=staff_model;