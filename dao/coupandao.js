/** Created by LIU on 2018/12/9.*/
const dbpool=require("../config/dbpoolconfig");
const coupanDao={
    searchCoupan(params){
        return new Promise((resolve, reject) => {
            dbpool.connect("SELECT * FROM  quan WHERE u_id=(SELECT u_id FROM users WHERE u_phone=?)" ,params,
                (err, data) => {
                    if (!err) {
                        resolve(data)
                    } else {
                        reject(err)
                    }

                })
        })
    },
};

module.exports=coupanDao;