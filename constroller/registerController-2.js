const registerDao=require("../dao/registerDao-2");
const AV=require("leancloud-storage");
const APP_ID="nxwlBnrzylXjFkXPfEUpxJdm-gzGzoHsz";
const APP_KEY="FB97POlEDjRlyCwtocA3pQNm";

AV.init({
    appId:APP_ID,
    appKey:APP_KEY
});


const registerController2={
    // 导航栏a标签跳转页面
    render(res,resp){
        resp.render("register")
    },
    // 获取短信验证码
    // 发送验证码
    smgController(req,resp){
        AV.Cloud.requestSmsCode({
            mobilePhoneNumber:req.body.telphone,//发送的号码
            name:"短信",  //正在使用什么服务
            op:"注册", //进行什么操作,登录，注册，重置
            ttl:15  //验证码有效时间
        }).then(function () {
            // 调用成功
            resp.send("验证码发送成功");
        },function(err){
            resp.send("验证码发送失败")
        })

    },
    // 验证码验证
    verifyCode(req,resp){
        let phone=req.body.phone; //电话号码
        let password=req.body.password; //密码
        let  code=req.body.code; //验证码
        let  dateBirth=req.body.dateBirth;

       AV.Cloud.verifySmsCode(code,phone)
           .then(function () {
               registerDao.register([null,null,password,null,dateBirth,null,phone,null,"block/none"]).then(
                   function (data) {
                       resp.send("注册成功，可点击右上角登录按钮进行登录")

                   })

               },function (err) {
               resp.send(err);
           })

    },
};
module.exports=registerController2;