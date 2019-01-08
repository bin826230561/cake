$(".changephone").click(function () {
  $(".yinying").show();
  $(".address-phone").show();
});
$(".close").click(function () {
  $(".yinying").hide();
  $(".address-phone").hide();
})
$(".cancel").click(function () {
  $(".yinying").hide();
  $(".address-phone").hide();
})
// 电话号码框的正则表达式
$("#mobile").on("blur",function () {
  var telphone=$("#mobile").val()
  console.log(telphone)
  var reg=/^[0-9]{11}$/;
  if(reg.test(telphone)==false){
    $(".error-mobile").text("请输入正确的电话号码")
    $("#i-phone").hide()
  }else {
    $("#i-phone").show()
    $(".error-mobile").text("")
  }
});
//密码正则

$("#password").on("blur",function () {
  var telphone=$("#password").val()
  console.log(telphone)
  var reg2=/^[0-9]{1,16}$/;
  if(reg2.test(telphone)==false){
    $(".error-mobile").text("请输入1-16位数字密码")
    $("#i-pwd").hide()
  }else {
    $("#i-pwd").show()
    $(".error-mobile").text("")
  }
});
// console.log(localStorage.getItem("u_phone"))




// const APP_ID="nxwlBnrzylXjFkXPfEUpxJdm-gzGzoHsz";
// const APP_KEY="FB97POlEDjRlyCwtocA3pQNm";
//
// AV.init({
//   appId:APP_ID,
//   appKey:APP_KEY
// });
//
// // AV.Captcha.request() 默认生成一个 85x30px 的 AV.Captcha 实例
// AV.Captcha.request().then(function(captcha) {
//   //在浏览器中，可以直接使用 captcha.bind 方法将验证码与 DOM 元素绑定：
//   captcha.bind({
//     textInput:    'pic-code',  // the id for textInput
//     image:        'picture', // the id for image element
//     verifyButton: 'sureChange',        // the id for verify button
//   }, {
//     success: function(validateCode) {
//       console.log('验证成功，下一步 send sms to phone:')
//
//     },
//     error: function(error) {
//       // console.error(error.message)
//       $(".error-mobile").text("验证码不匹配")
//
//     },
//   });
// });
//

