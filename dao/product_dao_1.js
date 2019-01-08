/*引入==============dbPool(连接池用)================模块*/
const dbPool = require("../config/dbpoolconfig");//连接数据库

const product_model={
    /*登录请求*/
    dao_loadGoods(params){
        return new Promise(function (resolve,reject) {//resolve成功，reject失败
            dbPool.connect("SELECT * FROM goods",
                params,(err,data)=>{//data是查询回来的结果
                    if (!err){
                        resolve(data);
                    } else{
                        reject(err)
                    }
                })
        })
    },
    /*请求加载标签*/
    dao_loadTag(params){
        return new Promise(function (resolve,reject) {//resolve成功，reject失败
            dbPool.connect("SELECT * FROM tp",
                params,(err,data)=>{//data是查询回来的结果
                    if (!err){
                        resolve(data);
                    } else{
                        reject(err)
                    }
                })
        })
    },
    /*下拉菜单筛选连接数据*/
    dao_goodsChange(params){
        return new Promise(function (resolve,reject) {//resolve成功，reject失败
            dbPool.connect("SELECT * FROM goods WHERE tp_id=?",
                params,(err,data)=>{//data是查询回来的结果
                    if (!err){
                        resolve(data);
                    } else{
                        reject(err)
                    }
                })
        })
    },
    //图片上传
    dao_upload(params){
        return new Promise(function (resolve,reject) {//resolve成功，reject失败
            dbPool.connect("INSERT INTO goods VALUES (?,?,?,?,?,?,?)",
                params,(err,data)=>{//data是查询回来的结果
                    if (!err){
                        resolve(data);
                    } else{
                        reject(err)
                    }
                })
        })
    },
    //编辑商品
    dao_changeGoodsNews(params){
        return new Promise(function (resolve,reject) {//resolve成功，reject失败
            dbPool.connect("UPDATE goods SET goods_name=?,goods_description=?,goods_price=?,tp_id=? WHERE goods_id=?",
                params,(err,data)=>{//data是查询回来的结果
                    if (!err){
                        resolve(data);
                    } else{
                        reject(err)
                    }
                })
        })
    },
    //修改图片
    dao_changeImg(params){
        return new Promise(function (resolve,reject) {//resolve成功，reject失败
            dbPool.connect("UPDATE goods SET goods_img=? WHERE goods_id=?",
                params,(err,data)=>{//data是查询回来的结果
                    if (!err){
                        resolve(data);
                    } else{
                        reject(err)
                    }
                })
        })
    },
    //删除商品
    dao_deleteProduct(params){
        return new Promise(function (resolve,reject) {//resolve成功，reject失败
            dbPool.connect("DELETE FROM goods WHERE goods_id=?",
                params,(err,data)=>{//data是查询回来的结果
                    if (!err){
                        resolve(data);
                    } else{
                        reject(err)
                    }
                })
        })
    },
    //批量删除商品
    dao_deleteProducts(params){
        return new Promise(function (resolve,reject) {//resolve成功，reject失败
            dbPool.connect("DELETE FROM goods WHERE goods_id=?",
                params,(err,data)=>{//data是查询回来的结果
                    if (!err){
                        resolve(data);
                    } else{
                        reject(err)
                    }
                })
        })
    },
    //加载购物车商品
    dao_loadShopCarNews(params){
        return new Promise(function (resolve,reject) {//resolve成功，reject失败
            dbPool.connect("SELECT t1.goods_id,t3.goods_name,t3.goods_img,t1.goods_bang,t1.goods_price,t1.goods_count,t1.shopcar_num,t2.u_id,t2.u_name FROM shopcar AS t1 JOIN users AS t2 ON t1.u_id=t2.u_id JOIN goods AS t3 ON t1.goods_id=t3.goods_id ORDER BY goods_count DESC",
                params,(err,data)=>{//data是查询回来的结果
                    if (!err){
                        resolve(data);
                    } else{
                        reject(err)
                    }
                })
        })
    },
    //编辑购物车价格
    dao_changeShopNews(params){
        return new Promise(function (resolve,reject) {//resolve成功，reject失败
            dbPool.connect("UPDATE shopcar SET goods_count=? WHERE goods_id=? AND u_id=?",
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
module.exports=product_model;