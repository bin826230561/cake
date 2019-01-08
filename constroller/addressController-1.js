const addressModel = require("../dao/addressDao-1");
const addressController = {

    // /*登录获取用户信息，并存入session中*/
    // login(req, res) {
    //     let username = req.body.username;
    //     let password = req.body.password;
    //     loginModel.model_login([username, password])
    //         .then(function (data) {
    //             res.send(data);
    //             req.session.userID = data[0].u_id;//存储用户名ID
    //             req.session.userName = data[0].u_phone;//存储用户名
    //         }).catch(function (err) {
    //     })
    // },
    /*添加地址*/
    addAddress(req, res) {
        let people = req.body.people;
        let phone = req.body.phone;
        let address = req.body.address;
        let zt = req.body.zt;
        addressModel.model_address([null,1, people,address,phone,zt])
            .then(function (data) {
                res.send(data);
                console.log(data)
            }).catch(function (err) {
        })
    },
    /*删除地址状态列*/
    deleteAddressZt(req, res) {
        addressModel.model_deleteAddressZt([])
            .then(function (data) {
                res.send(data);
            }).catch(function (err) {
        })
    },
    /*增加地址状态列*/
    addDressZt(req, res) {
        addressModel.model_addDressZt([])
            .then(function (data) {
                res.send(data);
            }).catch(function (err) {
        })
    },

    /*修改当前选中的为默认地址*/
    defaultAddress(req, res) {
        let address_id = req.query.address_id;
        console.log(address_id)
        addressModel.model_defaultAddress([address_id])
            .then(function (data) {
                res.send(data);
            }).catch(function (err) {
        })
    },
    /*修改地址状态*/
    changeAddressZT(req, res) {
        addressModel.model_changeAddressZT([])
            .then(function (data) {
                res.send(data);
            }).catch(function (err) {
        })
    },


};

module.exports = addressController;//暴露对象,以便上级获取