/**
 * Created by lsdn on 2018/11/8.
 */
/*引入==============dbPool(连接池用)================模块*/
const dbPool = require("../config/dbpoolconfig");//连接数据库

const goodsModel={
    /*初始购物车*/
    model_21cake(params){
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
    /*获取地址表数据*/
    model_goPay(params){
        return new Promise(function (resolve, reject) {
            dbPool.connect("SELECT * FROM address", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    },

    /*加入全国送数据*/
    model_sendGoods(params){
        return new Promise(function (resolve, reject) {
            dbPool.connect("INSERT INTO send VALUES (?,?)", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    },

    model_21cake1(params) {
        return new Promise(function (resolve, reject) {
            dbPool.connect("SELECT * FROM ords AS t1 JOIN shop_ord AS t2 ON t1.ords_id=t2.ord_id  JOIN goods AS t3 ON t2.goods_id=t3.goods_id WHERE t1.ords_num=?", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    },
    update(params){
        return new Promise(function (resolve, reject) {
            dbPool.connect("UPDATE shopcar SET u_id=(SELECT u_id FROM users WHERE u_phone=?)", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })
    }
};

module.exports=goodsModel;