$("#telPhone").on("click",function () {
        $("#email").css("display","none");
        $("#phone").css("display","block");
});


// 点击邮箱进行邮箱验证
$("#emailClick").on("click",function () {
    $("#phone").css("display","none");
    $("#email").css("display","block")

});


// 电话号码框的正则表达式
$("#passport").on("blur",function () {
    var passport=document.getElementById("passport").value;
    var reg=/^[0-9]{11}$/;

    if (passport=="") {
        document.getElementById("append").innerHTML="请输入电话号码";
    }else{
        if(reg.test(passport)==false){
            document.getElementById("append").innerHTML="请输入正确的电话号码";
        }
    }

});

// 图形验证码框的验证
// 图片验证码正则
$("#passImg").on("focus",function () {
    var passport=document.getElementById("passport").value;
    var reg=/^[0-9]{11}$/;
    if (passport==""){
        document.getElementById("append").innerHTML="请输入电话号码";
    }else {
        if (reg.test(passport) == false) {
            document.getElementById("append").innerHTML = "请输入正确的电话号码";
        }else{
            AV.Captcha.request().then(function (captcha) {
                //在浏览器中，可以直接使用 captcha.bind 方法将验证码与 DOM 元素绑定：
                captcha.bind({
                    textInput: 'passImg',  // the id for textInput
                    image: 'image', // the id for image element
                    verifyButton: 'next',        // the id for verify button
                }, {
                    success: function (validateCode) {

                        localStorage.setItem("passport",passport);
                        $.ajax({
                            url: "/passport.do",
                            type: "post",
                            data: {
                                phone: passport,
                            },
                            success: function (data) {
                                    // document.getElementById("append").innerHTML = "该用户不存在";
                               if (data=="该用户不存在") {
                                   document.getElementById("append").innerHTML = "该用户不存在";
                               }else{
                                   $("#aaaa").attr("href","/verification.do");
                                   window.location.href="/verification.do"
                               }
                            },
                            err: function (data) {

                            }
                        })
                    },
                    error: function (error) {
                        document.getElementById("append").innerHTML = "验证码不匹配";
                    },
                });
            });
        }
    }
}).on("blur",function () {
    var passImg=$("#passImg")[0].value;
    if(passImg==""){
        document.getElementById("append").innerHTML="请输入图形验证码";
    }

});






const APP_ID="nxwlBnrzylXjFkXPfEUpxJdm-gzGzoHsz";
const APP_KEY="FB97POlEDjRlyCwtocA3pQNm";

AV.init({
    appId:APP_ID,
    appKey:APP_KEY
});
AV.Captcha.request().then(function(captcha) {
    //在浏览器中，可以直接使用 captcha.bind 方法将验证码与 DOM 元素绑定：
    captcha.bind({
        textInput:    'passImg',  // the id for textInput
        image:        'image1', // the id for image element
        verifyButton: 'refresh',        // the id for verify button
    }, {
        success: function(validateCode) {
            var phoneNumber = document.getElementById('phone').value;
            console.log('验证成功，下一步 send sms to phone:');
        },
        error: function(error) {
            console.error(error.message)
        },
    });
});



// 点击下一步
$("#next").on("click",function () {
    var passport=document.getElementById("passport").value;
    var reg=/^[0-9]{11}$/;
    var passImg=$("#passImg")[0].value;


    if (passport=="") {
        document.getElementById("append").innerHTML="请输入电话号码";
    }else{
        if(reg.test(passport)==false){
            document.getElementById("append").innerHTML="请输入正确的电话号码";
        }else if(reg.test(passport)!=false){
            if(passImg==""){
                document.getElementById("append").innerHTML="请输入图形验证码";
// 图形验证
                AV.Captcha.request().then(function(captcha) {
                    //在浏览器中，可以直接使用 captcha.bind 方法将验证码与 DOM 元素绑定：
                    captcha.bind({
                        textInput:    'passImg',  // the id for textInput
                        image:        'image', // the id for image element
                        verifyButton: 'next',        // the id for verify button
                    }, {
                        success: function(validateCode) {
                            $.ajax({
                                url:"/passport.do",
                                type:"post",
                                data:{
                                    phone:passport,
                                },
                                success:function (data) {
                                    localStorage.setItem("passport",passport);
                                    // document.getElementById("append").innerHTML = "该用户不存在";
                                    if (data=="该用户不存在") {
                                        document.getElementById("append").innerHTML = "该用户不存在";
                                    }else{
                                        $("#aaaa").attr("href","/verification.do");
                                        window.location.href="/verification.do"
                                    }
                                },
                                err:function (data) {

                                }
                            })
                        },
                        error: function(error) {
                            document.getElementById("append").innerHTML="验证码不匹配";
                        },
                    });
                });

            }
            }
    }
});