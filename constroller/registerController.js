const registerDao=require("../dao/registerDao");
const AV=require("leancloud-storage");
const APP_ID="nxwlBnrzylXjFkXPfEUpxJdm-gzGzoHsz";
const APP_KEY="FB97POlEDjRlyCwtocA3pQNm";

AV.init({
    appId:APP_ID,
    appKey:APP_KEY
});


const registerController={
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
            console.log(err);
            resp.send("验证码发送失败")
        })

    }

};
module.exports=registerController;