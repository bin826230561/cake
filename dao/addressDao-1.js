/*引入==============dbPool(连接池用)================模块*/
const dbPool = require("../config/dbpoolconfig");//连接数据库

const addressModel = {
    /*添加新地址*/
    model_address(params) {
        return new Promise(function (resolve, reject) {
            dbPool.connect("INSERT INTO address VALUES (?,?,?,?,?,?)", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })

    },
    /*删除地址状态列*/
    model_deleteAddressZt(params) {
        return new Promise(function (resolve, reject) {
            dbPool.connect("ALTER TABLE address DROP COLUMN defaultaddressZT", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })

    },
    /*删除地址状态列*/
    model_addDressZt(params) {
        return new Promise(function (resolve, reject) {
            dbPool.connect("ALTER TABLE address ADD defaultaddressZT VARCHAR(10) DEFAULT 'false'", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })

    },
    /*删除地址状态列*/
    model_defaultAddress(params) {
        return new Promise(function (resolve, reject) {
            dbPool.connect("UPDATE address SET defaultaddressZT='true' WHERE address_id=?", params,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                })
        })

    },
    /*删除地址状态列*/
    model_changeAddressZT(params) {
        return new Promise(function (resolve, reject) {
            dbPool.connect("UPDATE address SET defaultaddressZT='false'", params,
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
module.exports = addressModel;