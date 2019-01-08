/**
 * Created by lsdn on 2018/11/8.
 */
const goodsModel = require("../dao/21cake_dao5");

const goodsController5 = {
    shopCar(req, res) {
        goodsModel.model_21cake([])
            .then(function (data) {
                res.render("shopCar", {myshopCar: data});
            });
    },
    low(req, res) {
        goodsModel.model_21cake([])
            .then(function (data) {
                res.render("low", {myshopCar: data});
            });
    },
    send(req, res) {
        goodsModel.model_21cake([])
            .then(function (data) {
                res.render("send", {myshopCar: data});
            });
    },
    designer(req, res) {
        goodsModel.model_21cake([])
            .then(function (data) {
                res.render("designer", {myshopCar: data});
            });
    },
    acquaintance(req, res) {
        goodsModel.model_21cake([])
            .then(function (data) {
                // console.log(localStorage.getItem("u_phone"))
                res.render("acquaintance", {myshopCar: data});
            });
    },
    logistics(req, res) {
        goodsModel.model_21cake([])
            .then(function (data) {
                res.render("logistics", {myshopCar: data})
            });
    },
    goPay(req, res) {
        console.log("点击下单结算" + req.query.username)
        goodsModel.update([req.query.username])
            .then(function (data) {
                console.log("11")
            }, function (err) {
                console.log(err)
            });
        goodsModel.model_goPay([])
            .then(function (data) {
                res.render("goPay", {myGoPay: data});
            });
    },
    downloadTrad(req, res) {
        goodsModel.model_21cake([])
            .then(function (data) {
                res.render("downloadTrad", {myshopCar: data});
            });
    },
    sendGoods(req, res) {
        let s_counts = req.body.s_count;
        goodsModel.model_sendGoods([null, s_counts])
            .then(function (data) {
                res.send(data)
            });
    },
    /*支付页面加载*/
    zhiFuFangShi(req, res) {
        res.render("zhiFuFangShi");
    },

    loadOrd(req, res) {
        goodsModel.model_21cake1([req.body.orderNum])
            .then(function (data) {
                res.send(data);
                console.log(data)
            });
    }

};

module.exports = goodsController5;//暴露对象,以便上级获取