//从demoDao.js中引入demoModel
const goodsModel = require("../dao/21cake_dao");
const goodsController = {
    /*首页加载商品*/
    getGoods(req, res) {
        goodsModel.model_21cake([])
            .then(function (data) {
                res.render("home-page", {myGoods: data});
            });
    },
    /*加入购物车*/
    addGoods(req, res) {
        let u_id = req.body.u_id;
        let goods_id = req.body.goods_id;
        let goods_bang = req.body.goods_bang;
        let goods_price = req.body.goods_price;
        let goods_num = req.body.goods_num;
        let goods_count = req.body.goods_count;
        if (u_id==""){
            u_id=null;
        }
        goodsModel.model_addGoods([null, goods_id, goods_bang, goods_price, goods_num, goods_count, u_id])
            .then(function (data) {
                res.send(data)
            });
    },
    /*加入购物车后的数量*/
    getCount(req, res) {
        goodsModel.model_getCount([])
            .then(function (data) {
                req.session.goodsCount=data[0].num;
                res.send(data);
            });
    },
    /*修改购物车商品数量*/
    changeGoodsNum(req, res) {
        let goods_id=req.body.goods_id;
        let goods_num=req.body.goods_num;
        let goods_count=req.body.goods_count;
        goodsModel.model_changeGoodsNum([goods_num,goods_count,goods_id])
            .then(function (data) {
                res.send(data);
            });
    },
    /*增加购物车商品数量*/
    addGoodsLoad_return(req, res) {
        let thisGoodsId=req.body.thisGoodsId;
        let shopCar_num=req.body.shopCar_num;
        let goods_count=req.body.goods_count;
        goodsModel.model_changeAddGoodsNumAndPrice([shopCar_num,goods_count,thisGoodsId])
            .then(function (data) {
                res.send(data);
            });
    },
    /*加载配件商品*/
    smallGoods(req, res) {
        goodsModel.model_smallGoods([])
            .then(function (data) {
                res.send(data);
                // console.log(data[56])
            });
    },

    /*减少购物车商品数量*/
    reduceGoodsLoad_return(req, res) {
        let thisGoodsId=req.body.thisGoodsId;
        let shopCar_num=req.body.shopCar_num;
        let goods_count=req.body.goods_count;
        goodsModel.model_changeReduceGoodsNumAndPrice([shopCar_num,goods_count,thisGoodsId])
            .then(function (data) {
                res.send(data);
            });
    },
    /*删除购物车商品数量*/
    deleteGoodsLoad_return(req, res) {
        let thisGoodsId=req.body.thisGoodsId;
        goodsModel.model_deleteGoodsLoad_return([thisGoodsId])
            .then(function (data) {
                res.send(data);
            });
    },

    /*清除所有购物车商品*/
    deleteAllGoods(req, res) {
        goodsModel.model_deleteAllGoods([])
            .then(function (data) {
                res.send(data);
            });
    },
    /*购物车页面加载*/
    loadGoodsCar(req, res) {
        goodsModel.model_getGoods([])
            .then(function (data) {
                res.send(data);
            });
    },
    /*支付方式页面加载*/
    loadSendCar(req, res) {
        let u_id=req.body.u_id;
        goodsModel.model_loadSendCar([u_id])
            .then(function (data) {
                res.send(data);
                // console.log(data)
            });
    },

};

module.exports = goodsController;//暴露对象,以便上级获取