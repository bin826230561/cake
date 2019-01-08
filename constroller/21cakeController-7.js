//从demoDao.js中引入demoModel
const goodsModel = require("../dao/21cake_dao-7");
const goodsController2 = {
    getGoods2(req,res){
        goodsModel.model_21cake2([])
            .then(function (data) {
                res.render("nianhuomaizeng",{
                    mydata:data,
                });
            });
    },
    getGoods3(req,res){
        goodsModel.model_21cake3([])
            .then(function (data) {
                res.render("qiYeDingZhi",{
                    mydata:data
                });
                console.log(data);
            });
    },
    getGoods4(req,res){
        goodsModel.model_21cake4([])
            .then(function (data) {
                res.render("xinPin",{
                    mydata:data
                });
            });
    },
    getGoods5(req,res){
        goodsModel.model_21cake5([])
            .then(function (data) {
                res.render("yirenfen",{
                    mydata:data
                });
            });
    },
    getGoods6(req,res){
        goodsModel.model_21cake6([])
            .then(function (data) {
                res.render("baiSeQingRenJie",{
                    mydata:data
                });
            });
    },
    getGoods7(req,res){
        goodsModel.model_21cake7([])
            .then(function (data) {
                res.render("qingLv",{
                    mydata:data
                });
            });
    },
    getGoods8(req,res){
        goodsModel.model_21cake8([])
            .then(function (data) {
                res.render("renqi",{
                    mydata:data
                });
            });
    },
    getGoods9(req,res){
        goodsModel.model_21cake9([])
            .then(function (data) {
                res.render("mianbao",{
                    mydata:data
                });
            });
    },
    getGoods10(req,res){
        goodsModel.model_21cake10([])
            .then(function (data) {
                res.render("marry",{
                    mydata:data
                });
            });
    },
    getGoods11(req,res){
        goodsModel.model_21cake11([])
            .then(function (data) {
                res.render("fit",{
                    mydata:data
                });
            });
    },



    kehubiao(req,res){
        goodsModel.dao_loadGoods2()
            .then(function (data) {
                res.send(data);
            })
            .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
                res.send(err)
            })
    },
    biangeren(req,res){
        var id=req.query.id;
        var phone=req.query.phone;
        var vip=req.query.vip;
        var dizhi=req.query.dizhi;
        console.log(id);
        console.log(phone);
        console.log(vip);
        console.log(dizhi);
        goodsModel.dao_loadGoods3([phone,vip,dizhi,id])
            .then(function (data) {
                res.send(data);
            })
            .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
                res.send(err)
            })

    },
    youhuijuan(req,res){
        goodsModel.dao_loadGoods4()
            .then(function (data) {
                res.send(data);
            })
            .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
                res.send(err)
            })
    },
    youhuijuan2(req,res){
        goodsModel.dao_loadGoods5()
            .then(function (data) {
                res.send(data);
            })
            .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
                res.send(err)
            })
    },
};
module.exports = goodsController2;//暴露对象,以便上级获取