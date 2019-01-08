const express = require("express");//加载express模块

const goodsController = require("../constroller/21cakeController-4");//引入自己的控制模块
const product_controller = require("../constroller/staff_controller");

const router = express.Router();//获取路由对象

router.get("/goods-description.do",goodsController.cakeData1);
router.get("/bailitianqingren.do",goodsController.cakeData1);
router.get("/qiancao.do",goodsController.cakeData2);
router.get("/liulianpiaopiao.do",goodsController.cakeData1);
router.get("/haizeiwang.do",goodsController.cakeData2);
router.get("/heibaiqiaokeli.do",goodsController.cakeData1);
router.post("/bt1.do",goodsController.cakeData);//查询点击bt1的路由
router.get("/begin.do",goodsController.searchId);
// // router.get("/langmu.do",goodsController.langmu);

router.get("/yuanweiniurubingqilin.do",goodsController.cakeData3);
router.get("/lizhibingqilin.do",goodsController.cakeData3);
router.get("/xiaribingqilin.do",goodsController.cakeData3);
router.get("/guaercafei.do",goodsController.cakeData3);
router.get("/yejiacafei.do",goodsController.cakeData3);
router.get("/babuyacafei.do",goodsController.cakeData3);
router.get("/xidacafei.do",goodsController.cakeData3);
router.get("/zhenzimianbao.do",goodsController.cakeData3);
router.get("/hongtangmianbao.do",goodsController.cakeData3);
router.get("/beihaidaomianbao.do",goodsController.cakeData3);



/*请求加载员工*/
router.get("/loadStaff.do",product_controller.loadStaff);
/*删除员工*/
router.get("/dellStaff.do",product_controller.dellStaff);
/*批量删除*/
router.get("/handleDelete.do",product_controller.handleDelete);
/*编辑员工*/
router.post("/changeStaffNews.do", product_controller.changeStaffNews);
/*添加员工*/
router.post("/addStaffNews.do", product_controller.addStaffNews);

module.exports = router;//暴露路由对象,以便上级获取