const express = require("express");//加载express模块

const goodsController = require("../constroller/21cakeController-3");//引入自己的控制模块
const contact_controller = require("../constroller/contact_controller");//引入自己的控制模块
const upload=require("../config/uploadconfig");

const router = express.Router();//获取路由对象
router.get("/thirdPage.do",goodsController.thirdPage)
router.get("/enterprise-zone.do",goodsController.enterprise)
router.get("/Personnal-center.do",goodsController.Pcenter)
router.get("/Personnal-center2.do",goodsController.Pcenter2)
router.get("/Pay.do",goodsController.Pay3)
router.get("/addgoods.do",goodsController.addGoods)

router.get("/PayAgain.do",goodsController.Pay31)
router.get("/secondPage.do",goodsController.secondPage)
router.get("/fourthPage.do",goodsController.fourthPage)

router.post("/changeuser.do",goodsController.changeuser)

/*短信验证*/
router.post("/sendMsgCode.do",goodsController.msgCode)
router.post("/checkCode.do",goodsController.checkCode)



/*请求加载企业信息*/
router.get("/contact1.do", contact_controller.contact1)
/*删除企业信息*/
router.get("/delete_contact.do",contact_controller.delete_contact)
/*编辑企业信息*/
router.get("/contactEdit.do",contact_controller.contactEdit)
/*批量删除企业信息*/
router.get("/delete_contact_all.do",contact_controller.delete_contact_all)
/*新增企业信息*/
router.post("/addContact.do",upload.single("file"),contact_controller.addContact)
/*修改图片*/
router.post("/changePic.do",upload.single("file"),contact_controller.changePic)
module.exports = router;//暴露路由对象,以便上级获取