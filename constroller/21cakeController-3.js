const goodsModel = require("../dao/21cake_dao-3");
const AV=require("leancloud-storage");


const goodsController = {

  thirdPage(req,resp){
    goodsModel.model_21cake_goods([]).then(function (data) {
      resp.render("thirdPage",{
        goodsname01:data[14].goods_name,
        goodsprice01:data[14].goods_price,
        goodsimg01:data[14].goods_img,
        goodsname02:data[21].goods_name,
        goodsprice02:data[21].goods_price,
        goodsimg02:data[21].goods_img,
        goodsname03:data[5].goods_name,
        goodsprice03:data[5].goods_price,
        goodsimg03:data[5].goods_img,
        goodsname04:data[4].goods_name,
        goodsprice04:data[4].goods_price,
        goodsimg04:data[4].goods_img,
        goodsname05:data[13].goods_name,
        goodsprice05:data[13].goods_price,
        goodsimg05:data[13].goods_img,
        goodsname06:data[15].goods_name,
        goodsprice06:data[15].goods_price,
        goodsimg06:data[15].goods_img,
        goodsname07:data[23].goods_name,
        goodsprice07:data[23].goods_price,
        goodsimg07:data[23].goods_img,
        goodsname08:data[9].goods_name,
        goodsprice08:data[9].goods_price,
        goodsimg08:data[9].goods_img,
        goodsname09:data[0].goods_name,
        goodsprice09:data[0].goods_price,
        goodsimg09:data[0].goods_img,
        goodsname10:data[1].goods_name,
        goodsprice10:data[1].goods_price,
        goodsimg10:data[1].goods_img,
        goodsname11:data[33].goods_name,
        goodsprice11:data[33].goods_price,
        goodsimg11:data[33].goods_img,
        goodsname12:data[39].goods_name,
        goodsprice12:data[39].goods_price,
        goodsimg12:data[39].goods_img,
        goodsname13:data[46].goods_name,
        goodsprice13:data[46].goods_price,
        goodsimg13:data[46].goods_img,
        goodsname14:data[42].goods_name,
        goodsprice14:data[42].goods_price,
        goodsimg14:data[42].goods_img,
        goodsname15:data[38].goods_name,
        goodsprice15:data[38].goods_price,
        goodsimg15:data[38].goods_img,
        goodsname16:data[43].goods_name,
        goodsprice16:data[43].goods_price,
        goodsimg16:data[43].goods_img,
      })
    })
  },
  enterprise(req,resp){
    resp.render("enterprise-zone")
  },
  // Personnal3(req,resp){
  //   goodsModel.getUserDate().then(function (data) {
  //     resp.render("Personnal-center", {
  //       userName:data[0].u_name,
  //       userPhone:data[0].u_phone,
  //       userEmail:data[0].u_email,
  //       userId:data[0].u_id,
  //       })
  //     // console.log(data)
  //
  //   })
  // },
  Pay3(req,resp){
      resp.render("Pay")
  },
 addGoods(req,resp){
   let goods_price=req.query.goods_price;
   let goods_name=req.query.goods_name;
   let goods_name2=req.query.goods_name2;
   goodsModel.addgoods([goods_name,1,goods_price,goods_name2]).then(function (data) {
     resp.send(data)
   })
 },
  Pay31(req,resp){
     goodsModel.Pay31([]).then(function (data) {
       resp.render("PayAgain",{
           goods_name:data[data.length-1].goods_name,
           goods_count:data[data.length-1].goods_count,
           goods_price:data[data.length-1].goods_price,
           goods_name2:data[data.length-1].goods_eng_name,
       })
       // console.log(data[data.length-1])
     })
  },

  secondPage(req,resp){
    resp.render("secondPage")
  },
  fourthPage(req,resp){
    resp.render("fourthPage")
  },

  /*个人中心*/
  Pcenter(req,resp){
    resp.render("Personnal-center")
  },

  Pcenter2(req,resp){
     let num=req.query.num
    // console.log(num)
    goodsModel.Pcenter2([num]).then(function (data) {
      resp.send(data)
      // console.log(num)
    })
  },

  changeuser(req,resp){
    let username=req.body.username
    let useremail=req.body.useremail
    let birthday=req.body.birthday
    let sex=req.body.sex
    // console.log(birthday)
    let phone=req.body.phone
    // console.log(req.query)
    goodsModel.changeuser([username,sex,birthday,useremail,phone]).then(function (data) {
      resp.send(data)

    })
  },

  /*短信验证*/
  msgCode(req,resp){
    console.log("输出的点护士"+req.body.mobile)
    AV.Cloud.requestSmsCode({
      mobilePhoneNumber:req.body.mobile,//发送的号码
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



  checkCode(req,resp){
    let mobile=req.body.mobile; //电话号码
    let password=req.body.password; //密码
    let  msg=req.body.msg; //验证码
    let  phone=req.body.phone; //原始号码

    AV.Cloud.verifySmsCode(msg,mobile)
      .then(function () {
        goodsModel.checkCode([mobile,password,phone]).then(
          function (data) {
            resp.send("修改成功")
          })

      },function (err) {
        resp.send(err);
      })

  },
};
module.exports = goodsController;//暴露对象,以便上级获取
