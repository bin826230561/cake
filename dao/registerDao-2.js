const dbpool=require("../config/dbpoolconfig");
const registerDao={
    register(params){
        return new Promise(function (resolve,reject) {

            dbpool.connect("insert into users values(?,?,?,?,?,?,?,?,?)",params,(err,data)=>{
              if(!err){
                  resolve(data);
              }else{
                  reject(err);
              }
            })
        })
    }
};
module.exports=registerDao;