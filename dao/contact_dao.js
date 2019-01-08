/*引入==============dbPool(连接池用)================模块*/
const dbPool = require("../config/dbpoolconfig");//连接数据库

const contact_model={
  /*企业信息加载*/
  dao_contact1(params){
    return new Promise(function (resolve,reject) {//resolve成功，reject失败
      dbPool.connect("SELECT * FROM business",
        params,(err,data)=>{//data是查询回来的结果
          if (!err){
            resolve(data);
          } else{
            reject(err)
          }
        })
    })
  },
  delete_contact(params){
    return new Promise(function(resolve,reject){
      dbPool.connect("DELETE FROM business WHERE b_id=?",
        params,(err,data)=>{
          if(!err){
            resolve(data);
          }else{
            reject(err)
          }
        })
    })
    // console.log("3333")
  },
  /*批量删除*/
  delete_contact_all(params){
    console.log(params);
    let b="?";
    for(let i=0;i<params.length-1;i++){
      b+=",?"
    }
    console.log(b);
    return new Promise(function(resolve,reject){
      dbPool.connect("DELETE FROM business WHERE b_id IN ("+b+")",
        params,(err,data)=>{
          if(!err){
            resolve(data);
          }else{
            reject(err)
          }
        })
    })
  },
  /*编辑企业信息*/
  contactEdit(params){
    return new Promise(function(resolve,reject){
      dbPool.connect("update business set b_name=?,b_address=?,b_contact=?,b_phone=? where b_id=?",
        params,(err,data)=>{
          if(!err){
            resolve(data);
          }else{
            reject(err)
          }
        })
    })
  },
  /*添加*/
  addContact(params){
    return new Promise(function (resolve,reject) {//resolve成功，reject失败
      dbPool.connect("INSERT INTO business VALUES (?,?,?,?,?,?)",
        params,(err,data)=>{//data是查询回来的结果
          if (!err){
            resolve(data);
          } else{
            reject(err)
          }
        })
    })
  },
  /*编辑图片*/
  changePic(params){
    return new Promise(function (resolve,reject) {//resolve成功，reject失败
      dbPool.connect("UPDATE business SET b_prove=? WHERE b_id=?",
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
module.exports=contact_model;