const dbpool=require("../config/dbpoolconfig");
const orderDao= {
    addDing(params) {
        return new Promise((resolve, reject) => {
            dbpool.connect("insert into ords values(?,(SELECT u_id FROM users WHERE u_phone=?),?,(SELECT address_id FROM  address WHERE address_user=?),?,?,?)", params,
                (err, data) => {
                    if (!err) {
                        resolve(data)
                    } else {
                        reject(err)
                    }

                })
        })
    },
    selectShop(params){
        return new Promise((resolve, reject) => {
            dbpool.connect("select * from shopcar where u_id=(select u_id from users where u_phone=?)" ,params,
                (err, data) => {
                    if (!err) {
                        resolve(data)
                    } else {
                        reject(err)
                    }

                })
        })
    },
    addShop(params){
        return new Promise((resolve, reject) => {
            dbpool.connect("insert into shop_ord values(?,(select max(ords_id) from ords),?,?,?,?)", params,
                (err, data) => {
                    if (!err) {
                        resolve(data)
                    } else {
                        reject(err)
                    }

                })
        })
    },
    deleteShop(params){
        return new Promise((resolve, reject) => {
            dbpool.connect("delete from shopcar where u_id=(select u_id from users where u_phone=?)", params,
                (err, data) => {
                    if (!err) {
                        resolve(data)
                    } else {
                        reject(err)
                    }

                })
        })
    },

    // 加载数据在页面
    localShop(params){
       return new Promise((resolve,reject)=>{
           dbpool.connect(
   "SELECT * FROM ords AS t1 JOIN address AS t2 ON t1.address_id=t2.address_id  JOIN state AS t3 ON t1.state_id=t3.state_id WHERE t1.u_id=(SELECT u_id FROM users WHERE u_phone=?) ORDER BY t1.ords_id DESC",params,
               (err,data)=>{
                   if (!err) {
                       resolve(data)
                   } else {
                       reject(err)
                   }
               })
       })
    },
    // 查找订单号
    searchDan(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM ords AS t1 JOIN address AS t2 ON t1.address_id=t2.address_id JOIN state AS t3 ON t1.state_id=t3.state_id WHERE t1.u_id=(SELECT u_id FROM users WHERE u_phone=?) AND t1.ords_num LIKE '%?%' ORDER BY t1.ords_id DESC",params,
                (err,data)=>{
                    if (!err) {
                        resolve(data)
                    } else {
                        reject(err)
                    }
                })
        })
    },
    detailInput(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM ords AS t1 JOIN shop_ord AS t2 ON t1.ords_id=t2.ord_id JOIN state AS t3 ON t1.state_id=t3.state_id JOIN goods AS t4 ON t2.goods_id=t4.goods_id  JOIN address AS t5 ON t1.address_id=t5.address_id JOIN shop_address AS t6 ON t6.shop_id=t4.goods_id WHERE  t1.ords_num LIKE '%?%' AND t1.u_id=(SELECT u_id FROM users WHERE u_phone =?) ORDER BY t1.ords_id DESC",params,
                (err,data)=>{
                    if (!err) {
                        resolve(data)
                    } else {
                        reject(err)
                    }
                })
        })
    },
   // 未完成订单
    noFinish(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM ords AS t1 JOIN address AS t2 ON t1.address_id=t2.address_id JOIN state AS t3 ON t1.state_id=t3.state_id WHERE t1.u_id=(SELECT u_id FROM users WHERE u_phone=?) AND t1.state_id =(SELECT state_id FROM state WHERE state_id=2) ORDER BY t1.ords_id DESC",params,
                (err,data)=>{
                    if (!err) {
                        resolve(data)
                    } else {
                        reject(err)
                    }
                })
        })
    },
    // 未完成订单详情
    nodetail(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM ords AS t1 JOIN shop_ord AS t2 ON t1.ords_id=t2.ord_id JOIN state AS t3 ON t1.state_id=t3.state_id JOIN goods AS t4 ON t2.goods_id=t4.goods_id JOIN address AS t5 ON t1.address_id=t5.address_id JOIN shop_address AS t6 ON t6.shop_id=t4.goods_id  WHERE  t1.state_id=2 AND t1.u_id=(SELECT u_id FROM users WHERE u_phone =?)  ORDER BY t1.ords_id DESC ",params,
                (err,data)=>{
                    if (!err) {
                        resolve(data)
                    } else {
                        reject(err)
                    }
                })
        })
    },
    // 加载订单详情
    detailCheck(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM ords AS t1 JOIN shop_ord AS t2 ON t1.ords_id=t2.ord_id JOIN state AS t3 ON t1.state_id=t3.state_id JOIN goods AS t4 ON t2.goods_id=t4.goods_id JOIN address AS t5 ON t1.address_id=t5.address_id JOIN shop_address AS t6 ON t6.shop_id=t4.goods_id WHERE t1.u_id=(SELECT u_id FROM users WHERE u_phone =?) ORDER BY t1.ords_id DESC",params,
                (err,data)=>{
                    if (!err) {
                        resolve(data)
                    } else {
                        reject(err)
                    }
                })
        })
    },
    // 删除订单
    deleteDingD(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("DELETE FROM shop_ord WHERE ord_id=(SELECT ords_id FROM ords WHERE ords_num=?)",params,
                (err,data)=>{
                    if (!err) {
                        resolve(data)
                    } else {
                        reject(err)
                    }
                })
        })
    },
    // 删除发票号
    deleteinvoice(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("delete from invoice where ords_id=(select ords_id from ords where ords_num=?)",params,
                (err,data)=>{
                    if (!err) {
                        resolve(data)
                    } else {
                        reject(err)
                    }
                })
        })
    },
    // 删除订单号
    delete(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("delete from ords where ords_num=?",params,
                (err,data)=>{
                    if (!err) {
                        resolve(data)
                    } else {
                        reject(err)
                    }
                })
        })
    },
    // 近一个月订单
    nearTime(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM ords AS t1 JOIN address AS t2 ON t1.address_id=t2.address_id JOIN state AS t3 ON t1.state_id=t3.state_id WHERE  DATE_SUB(CURDATE(), INTERVAL 30 DAY) <= DATE(t1.ords_tiime) AND t1.u_id=(SELECT u_id FROM users WHERE u_phone=?)ORDER BY t1.ords_id DESC",params,
                (err,data)=>{
                    if (!err) {
                        resolve(data)
                    } else {
                        reject(err)
                    }
                })
        })
    },
    // 加载近一个月订单详情
    neardetail(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM ords AS t1 JOIN shop_ord AS t2 ON t1.ords_id=t2.ord_id JOIN state AS t3 ON t1.state_id=t3.state_id JOIN goods AS t4 ON t2.goods_id=t4.goods_id JOIN address AS t5 ON t1.address_id=t5.address_id JOIN shop_address AS t6 ON t6.shop_id=t4.goods_id WHERE  DATE_SUB(CURDATE(), INTERVAL 30 DAY) <= DATE(t1.ords_tiime) AND t1.u_id=(SELECT u_id FROM users WHERE u_phone =?)ORDER BY t1.ords_id DESC",params,
                (err,data)=>{
                    if (!err) {
                        resolve(data)
                    } else {
                        reject(err)
                    }
                })
        })
    },
    // ==================================================订单详情页
    dingDandetail(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM ords AS t1 JOIN shop_ord AS t2 ON t1.ords_id=t2.ord_id JOIN state AS t3 ON t1.state_id=t3.state_id JOIN goods AS t4 ON t2.goods_id=t4.goods_id JOIN address AS t5 ON t1.address_id=t5.address_id JOIN shop_address AS t6 ON t6.shop_id=t4.goods_id WHERE  t1.ords_num=?",params,
                (err,data)=>{
                    if (!err) {
                        resolve(data)
                    } else {
                        reject(err)
                    }
                })
        })
    },
// 发票信息
    faPiao(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("insert into invoice values(null,(select ords_id from ords where ords_num=?),?,?,?,?,?,?)",params,
                (err,data)=>{
                    if (!err) {
                        resolve(data)
                    } else {
                        reject(err)
                    }
                })
        })
    },
};
module.exports=orderDao;