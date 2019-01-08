const express = require("express");//加载express模块

const goodsController = require("../constroller/21cakeController");//引入自己的控制模块
const cakeController = require("../constroller/21cakeController-6");//引入自己的控制模块


const router = express.Router();//获取路由对象

router.get("/cake",cakeController.mycake);
router.get("/caketext-1",cakeController.mycake1);
router.get("/caketext-2",cakeController.mycake2);
router.get("/caketext-3",cakeController.mycake3);
router.get("/caketext-4",cakeController.mycake4);
router.get("/address",cakeController.myaddress);
router.get("/birthday",cakeController.mybirthday);
router.get("/child",cakeController.mychild);
router.get("/party",cakeController.myparty);
router.get("/getdelete.do",cakeController.deleteadd);
router.get("/getadd.do",cakeController.tianjia);
router.post("/bjadd.do",cakeController.bianji);
router.post("/changeadmin.do",cakeController.bj);
router.get("/loadadmin.do",cakeController.loadAdmin);
router.post("/changepassword.do",cakeController.changepassword);
router.post("/changeQuanNews.do",cakeController.changeQuanNews);
router.get("/getpldelete.do",cakeController.pldeleteadd);



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

router.get("/home",goodsController.getGoods);



module.exports = router;//暴露路由对象,以便上级获取