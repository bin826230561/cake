
// date框的类型转换
$("#dateBirth").on("focus",function () {
    $("#dateBirth").attr("type","date")

}).on("blur",function () {
    $("#dateBirth").attr("type","")
});


// 电话号码框的正则表达式
$("#telphone").on("blur",function () {
    var telphone=document.getElementById("telphone").value;
    var reg=/^[0-9]{11}$/;
    if(reg.test(telphone)==false){
        document.getElementById("append").innerHTML="请输入正确的电话号码";
    }
});



// 第一个密码的正则表达式
$("#password").on("focus",function () {
    var telphone=document.getElementById("telphone").value;
    if (telphone==""){
        document.getElementById("append").innerHTML="请输入正确的电话号码";
    }

}).on("blur",function () {
    // var reg=/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/;
    var reg=/^[0-9]{1,16}$/;
    var password=document.getElementById("password").value;
    if(reg.test(password)==false){
        document.getElementById("append").innerHTML="密码由1-16位数字组成";
    }
});

// 第二个密码框的确认密码一致
$("#surePassword").on("blur",function (e) {
    var password=document.getElementById("password").value;
    var surePassword=document.getElementById("surePassword").value;
    if (surePassword=="") {
        document.getElementById("append").innerHTML="密码由1-16位数字组成";
    }
    if (password!=surePassword){
        document.getElementById("append").innerHTML="两次密码输入不一致";
    }else if (password==surePassword){
        document.getElementById("append").innerHTML="";
    }
    if (e.relatedTarget==document.getElementById("password")) {
        if (surePassword=="") {
            document.getElementById("append").innerHTML="密码由1-16位数字组成";
        }

    }
});

// 短信验证码正则
$(".msg").on("focus",function () {
    var telphone=document.getElementById("telphone").value;
    if (telphone==""){
        document.getElementById("append").innerHTML="请输入正确的电话号码";
    }
}).on("blur",function () {
    var msg=$("#msg")[0].value;
    if (msg==""){
        document.getElementById("append").innerHTML="短信验证码不能为空";
    }
});

// 图片验证码正则
$("#imgShua").on("focus",function () {
    var telphone=document.getElementById("telphone").value;
    if (telphone==""){
        document.getElementById("append").innerHTML="请输入正确的电话号码";
    }
}).on("blur",function () {
var imgShua=$("#imgShua")[0].value;
    if (imgShua==""){
        document.getElementById("append").innerHTML="图形验证码不能为空";
    }
});


// 获取短信验证码
$(".msgBtn").on("click",function () {
    $.ajax({
        url:"/sendCode.do",
        type:"post",
        data:{
            telphone:$("#telphone").val()
        },
        success:function (data) {
            document.getElementById("append").innerHTML=data;
        }

    })
});




const APP_ID="nxwlBnrzylXjFkXPfEUpxJdm-gzGzoHsz";
const APP_KEY="FB97POlEDjRlyCwtocA3pQNm";

AV.init({
    appId:APP_ID,
    appKey:APP_KEY
});

// AV.Captcha.request() 默认生成一个 85x30px 的 AV.Captcha 实例
AV.Captcha.request().then(function(captcha) {
    //在浏览器中，可以直接使用 captcha.bind 方法将验证码与 DOM 元素绑定：
    captcha.bind({
        textInput:    'telphone',  // the id for textInput
        image:        'img', // the id for image element
        verifyButton: 'refresh',        // the id for verify button
    }, {
        success: function(validateCode) {
            var phoneNumber = document.getElementById('phone').value;
            console.log('验证成功，下一步 send sms to phone:' + phoneNumber);
            AV.Cloud.requestSmsCode({
                mobilePhoneNumber: phoneNumber,
                name: '应用名称',
                validate_token: validateCode,
                op: '某种操作',
                ttl: 10
            }).then(function(){
                //发送成功
                console.log('发送成功')
            }, function(err){
                //发送失败
                console.log('发送失败。' + err.message)
            });
        },
        error: function(error) {
            console.error(error.message)
        },
    });
});



// 注册按钮点击

$(".submit").on("click",function () {

    var reg=/^[0-9]{11}$/;   //电话号码正则
    //var reg1=/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/;   //密码正则6-16位
    var reg1=/^[0-9]{1,16}$/;
    var reg2=/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{4}$/;   //图片验证码正则
    var reg3=/^[0-9]{6}$/;  /*短信验证码正则*/


    var telphone=document.getElementById("telphone").value;
    var password=document.getElementById("password").value;
    var surePassword=document.getElementById("surePassword").value;
    var imgShua=document.getElementById("imgShua").value;
    var dateBirth=document.getElementById("dateBirth").value;
    var msg=document.getElementById("msg").value;
    if (telphone==""){
        document.getElementById("append").innerHTML="请输入电话号码";
    }else if(telphone!=""){
        if(reg.test(telphone)==false){
            document.getElementById("append").innerHTML="请输入正确的电话号码";
        }else if(reg.test(telphone)!=false){
            if(password==""){
                document.getElementById("append").innerHTML="请输入密码";
            }else if(password!=""){
                if(reg1.test(password)==false){
                    document.getElementById("append").innerHTML="密码由1-6位数字组成";
                }else if(reg1.test(password)!=false){
                    if(surePassword==""){
                        document.getElementById("append").innerHTML="请确认密码";
                    }else if(surePassword!=""){
                        if (password!=surePassword){
                            document.getElementById("append").innerHTML="两次密码不一致";
                        } else if(password==surePassword){
                             if (imgShua==""){
                                 document.getElementById("append").innerHTML="请输入图片验证码";
                             }else if(imgShua!=""){
                                 if (reg2.test(imgShua)==false){
                                     document.getElementById("append").innerHTML="图片验证码输入不正确";
                                 } else if(reg2.test(imgShua)!=false){
                                    if (msg==""){
                                        document.getElementById("append").innerHTML="请输入短信验证码";
                                    } else{
                                        if(reg3.test(msg)==false){
                                            document.getElementById("append").innerHTML="短信验证码不正确";
                                        }else{
                                            if(dateBirth==""){
                                                document.getElementById("append").innerHTML="请选择生日";
                                            }else{
                                                $.ajax({
                                                    url:"/verifyCode.do",
                                                    type:"post",
                                                    data:{
                                                        phone:telphone,
                                                        code:msg,
                                                        password:password,
                                                        dateBirth:dateBirth
                                                    },
                                                    success:function (data) {
                                                        document.getElementById("append").innerHTML=data;
                                                    },
                                                    err:function (data) {

                                                    }
                                                })
                                            }
                                        }
                                    }
                                 }
                             }
                        }
                    }
                }
            }
        }
    }
});




























