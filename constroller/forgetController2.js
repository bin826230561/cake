const forgetDao=require("../dao/forgetDao-2");
const AV=require("leancloud-storage");
// const APP_ID="nxwlBnrzylXjFkXPfEUpxJdm-gzGzoHsz";
// const APP_KEY="FB97POlEDjRlyCwtocA3pQNm";


const forget={
    forgetUser(req,resp){
        let passport=req.body.phone;
        forgetDao.forgetUser([passport])
            .then(function (data) {
                console.log(data);
                if (data.length==0) {
                    resp.send("该用户不存在")
                    console.log("数组长度0")
                } else if(data.length!=0){
                    req.session.telphone=data[0].u_phone;
                    console.log("session为"+ req.session.telphone);
                    resp.render("verification",{telphoneT:req.session.telphone})

                }

            },function (err) {
                console.log(err);
            })
    },
    // 获取验证码
    forgetSmg(req,resp){
        AV.Cloud.requestSmsCode({
            mobilePhoneNumber:req.session.telphone,//发送的号码
            name:"短信",  //正在使用什么服务
            op:"修改密码操作", //进行什么操作,登录，注册，重置
            ttl:15  //验证码有效时间
        }).then(function () {
            // 调用成功
            resp.send("验证码发送成功");
        },function(err){
            resp.send("验证码发送失败")
        })

    },
    verifySmg(req,resp){
        let phone=req.session.telphone; //电话号码
        let code=req.body.code; //验证码

        console.log(phone+"+"+code);
        AV.Cloud.verifySmsCode(code,phone)
            .then(function () {
              resp.send("验证成功")
            },function (err) {
                resp.send("验证失败");
            })
    },
    sPassword(req,resp){
        let phone=req.body.phone;
        let  password=req.body.password;
        forgetDao.register([password,phone]).then(
            function (data) {
                resp.send("修改成功")
            },function (err) {
                resp.send("修改失败")
        })
    },
    loginss(req,resp){
        let telphonee=req.body.telphonee;
        forgetDao.loginSucc([telphonee])
            .then(function (data) {
             resp.send(data);
            },function (err) {
                console.log(err);
            })
    },
    loginSX(req,resp){
        let telphonee=req.body.telphonee;
        AV.Cloud.requestSmsCode({
            mobilePhoneNumber:telphonee,//发送的号码
            name:"短信",  //正在使用什么服务
            op:"登录操作", //进行什么操作,登录，注册，重置
            ttl:15  //验证码有效时间
        }).then(function () {
            // 调用成功
            resp.send("验证码发送成功");
        },function(err){
            resp.send("验证码发送失败")
        })

    },
    loginSM(req,resp){
        let telphonee=req.body.telphonee;
        let code=req.body.code;
        AV.Cloud.verifySmsCode(code,telphonee)
            .then(function () {
                resp.send("验证成功")
            },function (err) {
                resp.send("验证失败");
            })
    }
};
module.exports=forget;