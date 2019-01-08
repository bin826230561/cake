/*引入==============dbPool(连接池用)================模块*/
const dbPool = require("../config/dbpoolconfig");//连接数据库

const goodsModel = {
    /*首页加载商品*/
    model_21cake(params) {
        return new Promise(function (resolve, reject) {
            dbPool.connect("SELECT * FROM goods", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    },
    /*加入购物车*/
    model_addGoods(params) {
        return new Promise(function (resolve, reject) {
            dbPool.connect("INSERT INTO shopcar VALUES (?,?,?,?,?,?,?)", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    },
    /*加入购物车商品的数量*/
    model_getCount(params) {
        return new Promise(function (resolve, reject) {
            dbPool.connect("SELECT COUNT(*) AS num FROM shopcar", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    },

    /*修改购物车商品数量*/
    model_changeGoodsNum(params) {
        return new Promise(function (resolve, reject) {
            dbPool.connect("UPDATE shopcar SET shopcar_num=?,goods_count=? WHERE goods_id=?", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    },
    /*增加购物车商品数量*/
    model_changeAddGoodsNumAndPrice(params) {
        return new Promise(function (resolve, reject) {
            dbPool.connect("UPDATE shopcar SET shopcar_num=?,goods_count=? WHERE goods_id=?", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    },
    /*加载配件商品*/
    model_smallGoods(params) {
        return new Promise(function (resolve, reject) {
            dbPool.connect("SELECT * FROM goods", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    },
    /*减少购物车商品数量*/
    model_changeReduceGoodsNumAndPrice(params) {
        return new Promise(function (resolve, reject) {
            dbPool.connect("UPDATE shopcar SET shopcar_num=?,goods_count=? WHERE goods_id=?", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    },
    /*删除购物车商品数量*/
    model_deleteGoodsLoad_return(params) {
        return new Promise(function (resolve, reject) {
            dbPool.connect("DELETE FROM shopcar WHERE goods_id=?", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    },

    /*清除所有购物车商品*/
    model_deleteAllGoods(params) {
        return new Promise(function (resolve, reject) {
            dbPool.connect("TRUNCATE TABLE shopcar", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    },
    /*购物车界面显示*/
    model_getGoods(params) {
        return new Promise(function (resolve, reject) {
            dbPool.connect("SELECT DISTINCT t2.goods_id,t2.goods_name,t1.goods_bang,t2.goods_img,t1.goods_price,t1.shopcar_num,t1.goods_count FROM shopcar AS t1 JOIN goods AS t2 ON t1.goods_id=t2.goods_id", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    },
    /*支付方式页面加载*/
    model_loadSendCar(params) {
        return new Promise(function (resolve, reject) {
            dbPool.connect("SELECT * FROM ords AS t1 JOIN shop_ord AS t2 ON t1.ords_id=t2.ord_id  JOIN goods AS t3 ON t2.goods_id=t3.goods_id\n", params,
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
module.exports = goodsModel;