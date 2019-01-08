const express = require("express");//加载express模块
const upload=require("../config/uploadconfig");  //上传文件模块

const registController=require("../constroller/registerController-2");  //注册
const forget=require("../constroller/forgetController2");  //忘记密码
const jnController=require("../constroller/jnController-2");
const orderCenter=require("../constroller/orderCenter-2");//订单系列
const coupan=require("../constroller/coupan"); //优惠券管理
const  replaceTou=require("../constroller/replaceTouxiang"); //个人中心更换头像

// ==============================后台管理系统订单管理
const adminOrder=require("../constroller/adminOrderController");//订单系列


const router = express.Router();//获取路由对象

// 加载页面
router.get("/register.do",registController.render);
// 获取短信验证码
router.post("/sendCode.do",registController.smgController);
router.post("/verifyCode.do",registController.verifyCode);

// 新客专享
router.get("/guest.do",function (req,resp) {
    resp.render("guest")
});
// 课程页面
router.get("/courserPages.do",function (req,resp) {
    resp.render("courserPages")
});

// 去注册页面
router.get("/register.do",function (req,resp) {
    resp.render("register")
});
// 忘记密码页面
router.get("/forget.do",function (req,resp) {
    resp.render("passport")
});

// 忘记密码图片验证码页面
router.post("/passport.do",forget.forgetUser);

router.get("/verification.do",function (req,resp) {
    resp.render("verification",{telphoneT:req.session.telphone})
});

// 忘记密码获取短信验证码
router.post("/sendMsg.do",forget.forgetSmg);
router.post("/submitMsg.do",forget.verifySmg);
router.post("/sPassword.do",forget.sPassword);

router.get("/windowL.do",function (req,resp) {
    resp.render("surePassword")
});

router.get("/controgin.do",function (req,resp) {
    resp.render("controgin")
});

// 个人中心
router.get("/personalCenter.do",function (req,resp) {
    resp.render("personalCenter")
});
// 更换头像
router.post("/touXiang.do",upload.single("file"),replaceTou.replaceTou);
// 显示头像
router.post("/showFace.do",replaceTou.showFace);



// 优惠券
router.get("/liucoupan.do",coupan.loadcoupan);

router.post("/loadCoupan.do",coupan.coupan);


// 我的纪念日
// router.get("/my-jinianri.do",function (req,resp) {
//     resp.render("my-jinianri")
// });
router.get("/my-jinianri.do",jnController.loadJiNr);

// 代金卡
router.get("/goldCode.do",function (req,resp) {
    resp.render("goldCode")
});
// 个人中心了解更多
router.get("/21cakeBulletin.do",function (req,resp) {
    resp.render("21cakeBulletin")
});

// 关于21cake联系我们
router.get("/contact.do",function (req,resp) {
    resp.render("contact")
});

// 21cake企业合作
router.get("/cooperate.do",function (req,resp) {
    resp.render("cooperate")
});
// 21cake品牌历史
router.get("/history.do",function (req,resp) {
    resp.render("history")
});
// 21cake产品理念
router.get("/productIdea.do",function (req,resp) {
    resp.render("productIdea")
});
// 21cake隐私保护
router.get("/privacy.do",function (req,resp) {
    resp.render("privacy")
});
// 21cake会员注册
router.get("/vip.do",function (req,resp) {
    resp.render("vip")
});

// 21cake蛋糕预定
router.get("/instruction.do",function (req,resp) {
    resp.render("instruction")
});
// 21cake会员体系
router.get("/faq.do",function (req,resp) {
    resp.render("faq")
});
// 21cake代金卡
router.get("/card.do",function (req,resp) {
    resp.render("card")
});

// 21cake优惠券
router.get("/coupon.do",function (req,resp) {
    resp.render("coupon")
});

// 21cake发票
router.get("/information.do",function (req,resp) {
    resp.render("information")
});
// 21cake订单修改
router.get("/alter.do",function (req,resp) {
    resp.render("alter")
});
// 21cake配送范围
router.get("/order.do",function (req,resp) {
    resp.render("order")
});
// 21cake生产经营资质
router.get("/product.do",function (req,resp) {
    resp.render("product")
});
// 果实币
router.get("/records.do",function (req,resp) {
    resp.render("records")
});
// 购买果实币
router.get("/invest.do",function (req,resp) {
    resp.render("invest")
});

// 公告专区
router.get("/bulletin.do",function (req,resp) {
    resp.render("bulletin")
});
// 企业试吃
router.get("/tryeating.do",function (req,resp) {
    resp.render("tryeating")
});
// 短信验证码登录
router.post("/loginss.do",forget.loginss);
// 发送短信验证码
router.post("/loginMsg.do",forget.loginSX);
router.post("/loginsmgs.do",forget.loginSM);

// 个人中心修改密码
router.get("/xgmima.do",function (req,resp){
    resp.render("xgmima")
});
 router.get("/wjmima.do",function (req,resp) {
     resp.render("wjmima")
 });

 // 订单管理
router.get("/my-dingDan.do",orderCenter.forDing);

// 订单
router.post("/dingDan.do", orderCenter.addDing);
router.post("/loadDing.do", orderCenter.loadDing);

// 查找订单号
router.post("/searchD.do", orderCenter.searchD);
router.post("/detailInput.do", orderCenter.detailInput);

// 近一个月订单
router.post("/nearTime.do",orderCenter.nearTime);
router.post("/neardetail.do",orderCenter.neardetail);

// 未完成订单
router.post("/noFinish.do",orderCenter.noFinish);
router.post("/nodetail.do",orderCenter.nodetail);
// 加载订单详情表
router.post("/detailCheck.do",orderCenter.detailCheck);

// 删除订单
router.post("/deleteDingdan.do",orderCenter.deleteDingD);

// 订单详情页
router.get("/dingDandetail.do",orderCenter.dingDandetail);
// 发票
router.post("/faPiao.do",orderCenter.faPiao);

//支付方式
router.get("/zhiFuFangShi.do",orderCenter.zhiFu);




// =========================================后台管理系统页面=============================
// 加载订单在页面
router.get("/loadOrders.do",adminOrder.loadOrders);

// 修改订单状态
router.post("/stateId.do",adminOrder.stateId);
// 看看订单详情
router.post("/lookOrder.do",adminOrder.lookOrder);
// 编辑订单
// router.post("/changeOrder.do",adminOrder.changeOrder);

// 下拉框选择
// 当日订单
router.get("/todayOrders.do",adminOrder.todayOrders);
// 近一周订单
router.get("/weekOrders.do",adminOrder.weekOrders);
// 近一个月订单
router.get("/monthOrders.do",adminOrder.monthOrders);
// 未完成订单
router.get("/noFinishOrders.do",adminOrder.noFinishOrders);
// 已完成订单
router.get("/finishOrders.do",adminOrder.finishOrders);



// 判断用户是否存在
// router.post("/selectPhone.do",registController.selectPhone);
module.exports = router;//暴露路由对象,以便上级获取