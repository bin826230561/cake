const express = require("express");//加载express模块

const goodsController = require("../constroller/21cakeController");//引入自己的控制模块
const goodsController5 = require("../constroller/21cakeController5");//引入自己的控制模块
const orderCenter=require("../constroller/orderCenter-2");

const bulletin_controller = require("../constroller/bulletin_controller_5");

const router = express.Router();//获取路由对象

router.get("/home",goodsController.getGoods);
router.get("/shopCar",goodsController5.shopCar);
router.get("/low",goodsController5.low);
router.get("/send",goodsController5.send);
router.get("/designer",goodsController5.designer);
router.get("/acquaintance",goodsController5.acquaintance);
router.get("/zhiFuFangShi",goodsController5.zhiFuFangShi);
router.get("/goPay",goodsController5.goPay);
router.get("/logistics",goodsController5.logistics);

/*================后台==================*/
/*请求加载公告*/
router.get("/loadBulletin.do", bulletin_controller.loadBulletin);
/*请求删除公告*/
router.get("/delBulletin.do", bulletin_controller.delBulletin);
/*请求增加公告*/
router.get("/addBulletin.do", bulletin_controller.addBulletin);
/*批量删除公告*/
router.post("/deleteBulletin.do", bulletin_controller.deleteBulletin);



router.get("/downloadTrad",goodsController5.downloadTrad);

/*=====================全国送页面加载====================*/
router.post("/loadOrd.do",goodsController5.loadOrd);

router.post("/sendGoods.do",goodsController5.sendGoods);

module.exports = router;//暴露路由对象,以便上级获取