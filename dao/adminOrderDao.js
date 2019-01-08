/** Created by LIU on 2018/12/6.*/

const dbpool=require("../config/dbpoolconfig");

const adminOrderDao={
    // 查询所有订单
    loadOrder(params) {
        return new Promise((resolve, reject) => {
            dbpool.connect(" SELECT * FROM ords AS t1 JOIN state AS t2 ON t1.state_id=t2.state_id JOIN address AS t3 ON t1.address_id=t3.address_id JOIN users AS t4 ON t1.u_id=t4.u_id", params,
                (err, data) => {
                    if (!err) {
                        resolve(data)
                    } else {
                        reject(err)
                    }

                })
        })
    },
    // 修改订单状态
    stateId(params) {
        return new Promise((resolve, reject) => {
            dbpool.connect("update ords set state_id=1 where ords_num=?", params,
                (err, data) => {
                    if (!err) {
                        resolve(data)
                    } else {
                        reject(err)
                    }

                })
        })
    },
    // 查看订单
    lookOrder(params) {
        return new Promise((resolve, reject) => {
            dbpool.connect(" SELECT * FROM ords AS t1 JOIN address AS t2 ON t1.address_id=t2.address_id JOIN shop_ord AS t3 ON t1.ords_id=t3.ord_id JOIN goods AS t4 ON t3.goods_id=t4.goods_id where ords_num=?", params,
                (err, data) => {
                    if (!err) {
                        resolve(data)
                    } else {
                        reject(err)
                    }

                })
        })
    },
    // 编辑订单
    // changeOrder(params) {
    //     return new Promise((resolve, reject) => {
    //         dbpool.connect("UPDATE address SET  address_user=?,address_place=?,address_phone=? WHERE address_id=(select address_id from ords where ords_num=?) ", params,
    //             (err, data) => {
    //                 if (!err) {
    //                     resolve(data)
    //                 } else {
    //                     reject(err)
    //                 }
    //
    //             })
    //     })
    // },
    // 今日订单
    todayOrders(params) {
        return new Promise((resolve, reject) => {
            dbpool.connect("SELECT * FROM ords AS t1 JOIN state AS t2 ON t1.state_id=t2.state_id JOIN address AS t3 ON t1.address_id=t3.address_id JOIN users AS t4 ON t1.u_id=t4.u_id where t1.ords_tiime = to_days(now())", params,
                (err, data) => {
                    if (!err) {
                        resolve(data)
                    } else {
                        reject(err)
                    }

                })
        })
    },
    // 近七天订单
    weekOrders(params) {
        return new Promise((resolve, reject) => {
            dbpool.connect("SELECT * FROM ords AS t1 JOIN state AS t2 ON t1.state_id=t2.state_id JOIN address AS t3 ON t1.address_id=t3.address_id JOIN users AS t4 ON t1.u_id=t4.u_id where DATE_SUB(CURDATE(), INTERVAL 7 DAY) <= date(t1.ords_tiime)", params,
                (err, data) => {
                    if (!err) {
                        resolve(data)
                    } else {
                        reject(err)
                    }

                })
        })
    },
    // 近七天订单
    monthOrders(params) {
        return new Promise((resolve, reject) => {
            dbpool.connect("SELECT * FROM ords AS t1 JOIN state AS t2 ON t1.state_id=t2.state_id JOIN address AS t3 ON t1.address_id=t3.address_id JOIN users AS t4 ON t1.u_id=t4.u_id where DATE_SUB(CURDATE(), INTERVAL 30 DAY) <= date(t1.ords_tiime)", params,
                (err, data) => {
                    if (!err) {
                        resolve(data)
                    } else {
                        reject(err)
                    }

                })
        })
    },
    // 未完成订单
    noFinishOrders(params) {
        return new Promise((resolve, reject) => {
            dbpool.connect("SELECT * FROM ords AS t1 JOIN state AS t2 ON t1.state_id=t2.state_id JOIN address AS t3 ON t1.address_id=t3.address_id JOIN users AS t4 ON t1.u_id=t4.u_id where t2.state_id=2", params,
                (err, data) => {
                    if (!err) {
                        resolve(data)
                    } else {
                        reject(err)
                    }

                })
        })
    },
    // 已完成订单
    finishOrders(params) {
        return new Promise((resolve, reject) => {
            dbpool.connect("SELECT * FROM ords AS t1 JOIN state AS t2 ON t1.state_id=t2.state_id JOIN address AS t3 ON t1.address_id=t3.address_id JOIN users AS t4 ON t1.u_id=t4.u_id where t2.state_id=1", params,
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

module.exports=adminOrderDao;