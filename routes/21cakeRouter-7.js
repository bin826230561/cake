const express = require("express");//加载express模块

const goodsController2 = require("../constroller/21cakeController-7");//引入自己的控制模块

const router= express.Router();//获取路由对象


// router.get("/lingo",function (req,res) {
//    res.render("index",{
//        username:"小花"
//    })
// });

/*===================首页(home-page)===================*/
// router.get("/home",function (req,res) {
//     res.render("home-page",{
//         username:"小花"
//     })
// });
router.get("/nianhuomaizeng",goodsController2.getGoods2);
router.get("/qiYeDingZhi",goodsController2.getGoods3);
router.get("/xinPin",goodsController2.getGoods4);
router.get("/yirenfen",goodsController2.getGoods5);
router.get("/baiSeQingRenJie",goodsController2.getGoods6);
router.get("/qingLv",goodsController2.getGoods7);
router.get("/renqi",goodsController2.getGoods8);
router.get("/mianbao",goodsController2.getGoods9);
router.get("/marry",goodsController2.getGoods10);
router.get("/fit",goodsController2.getGoods11);

router.get("/kehubiao.do", goodsController2.kehubiao);
router.get("/biangeren.do",goodsController2.biangeren);
router.get("/youhuijuan.do",goodsController2.youhuijuan);
router.get("/youhuijuan2.do",goodsController2.youhuijuan2);


module.exports = router;//暴露路由对象,以便上级获取