$(function () {
    /*当前页面默认的导航栏导航文字和标记显示*/
    $("#header .nav-centerContent li a").eq(6).addClass("changeColor");
    $("#header .nav-centerContent li a").eq(6).next().addClass("showSpan");
})

/*===============================联系我们的选择城市=====================================*/
$("#chooseCity").change(function () {
    var phone1 = "021-54259599";
    var phone2 = "010-65503218";
    var phone3 = "022-58192287";
    var phone4 = "0571-88801221";
    var phone5 = "0510-85219010";
    var phone6 = "0510-85219010";
    var phone7 = "020-38390503-805";
    var phone8 = "0755-23480031";

    var city = $(this).val();

    if (city == 1) {
        $("#phone").text(phone1)
    }
    if (city == 2) {
        $("#phone").text(phone2)
    }
    if (city == 3) {
        $("#phone").text(phone3)
    }
    if (city == 4) {
        $("#phone").text(phone4)
    }
    if (city == 5) {
        $("#phone").text(phone5)
    }
    if (city == 6) {
        $("#phone").text(phone6)
    }
    if (city == 7) {
        $("#phone").text(phone7)
    }
    if (city == 8) {
        $("#phone").text(phone8)
    }

})

/*===============================/联系我们的选择城市=====================================*/

/*================输入框为空=====================*/
$("#over").click(function () {
    var input1 = $("#input-1").val()
    var input2 = $("#input-2").val()
    var input3 = $("#input-3").val()
    var input4 = $("#input-4").val()
    var input5 = $("#input-5").val()
    console.log(typeof "")
    if (input1 == "" || input2 == "" || input3 == "" || input4 == "" || input5 == "") {
        $(".error span").show()
    }
    else{
      $(".yinying").show();
      $(".overshow").show();
      setTimeout(function () {
        window.location.reload()
      },1000)
    }
})
/*================/输入框为空=====================*/


/*================================留言框的选择城市====================================*/
$("#city-1").click(function () {
    $("#cityli").toggle();
})

function changeCity(obj) {
    var cityNmae = $(obj).text()
    $("#cityName").text(cityNmae);
    $("#cityli").hide();
}

/*================================/留言框的选择城市====================================*/

/*===================查看FAQ======================*/
$("#seeFAQ").click(function () {
    $("#tk2").show();
    $(".yinying").show();
})
$(".close").click(function () {
    $("#tk2").hide();
    $(".yinying").hide();
})

$("#seeGet").click(function () {
  $("#tk1").show();
  $(".yinying").show();
})
$(".close").click(function () {
  $("#tk1").hide();
  $(".yinying").hide();
})
/*===================/查看FAQ======================*/


/*================加载模态框========================*/
$(function () {
    //传入参数
    var contentText = "<div class=\"model-contents\">\n" +
        "    <h1>兑换月饼须知</h1>\n" +
        "    <p>\n" +
        "        如果配送地址在北京、上海、广州、深圳、杭州、天津、苏州、无锡以外的其他城市或超过\n" +
        "        八地常规配送区域的用户需要兑换月饼，请通过全国客户服务热线：400-650-2121（\n" +
        "        服务时间 08:00–22:00）进行预约下单，预约下单后2-3天内顺丰快递发货。\n" +
        "    </p>\n" +
        "</div>";//传入内容content部分
    var confirm = "";//按键名字自定义，如果不要按钮传入空值("")即可。
    var cancel = "确定";//按键名字自定义，如果不要按钮传入空值("")即可。
    popupDiv(contentText, confirm, cancel, 280, 260);//方法传入值popupDiv[0]是点击触发按钮，后参接上即可。
    $(".model-contents h1").css({
        textAlign: "center"
    });
    $(".model-contents h1").css({
        color: "#442818",
        fontSize: "20px",
        borderBottom: "1px dashed #D5BFA7",
        paddingBottom: "18px"
    });
    $(".model-contents p").css({
        color: "#D5BFA7",
        lineHeight: "18px",
        fontSize: "13px",
        marginTop: "7px"
    });
    $("#cancel").css({
        backgroundColor: "#673F2B",
        width: "200px",
        height: "40px",
        border: "0",
        borderRadius: "0",
        color: "#fff",
        marginTop: "50px"
    })

});


$(function () {
    $(".div2-type").click(function () {
        var contentText = "<div class=\"model-contents\">\n" +
            "    <h2>代金卡-使用流程</h2>\n" +
            "    <div class=\"model-imgBox\">\n" +
            "        <div class=\"model-imgBox-inner\"></div>\n" +
            "        <div class=\"model-imgBox-inner\"></div>\n" +
            "        <div class=\"model-imgBox-inner\"></div>\n" +
            "        <div class=\"model-imgBox-inner\"></div>\n" +
            "        <div class=\"model-imgBox-inner\"></div>\n" +
            "    </div>\n" +
            "    <h5>Step1 - 登录/注册“21cake”</h5>\n" +
            "    <i class=\"backAndNext black-left\"></i>\n" +
            "    <i class=\"backAndNext next-right\"></i>\n" +
            "</div>";//传入内容content部分
        var confirm = "";//按键名字自定义，如果不要按钮传入空值("")即可。
        var cancel = "";//按键名字自定义，如果不要按钮传入空值("")即可。
        popupDiv(contentText, confirm, cancel, 805, 540);

        $("<i class=\"iconfont closeDiv\">&#xe628;</i>").appendTo("#pop-div");
        $(".closeDiv").css({
            fontSize: "20px",
            fontWeight: "700",
            color: "#9e9e9e",
            position: "absolute",
            top: "12px",
            right: "12px",
            cursor: "pointer"
        });
        $(".closeDiv").click(function () {
            hideDiv("pop-div");
        });

        $(".model-imgBox").css({
            width: "665px",
            height: "355px",
            border: "1px solid #dbd1c7",
            margin: "30px auto"
        });

        $(".model-contents h2").css({
            textAlign: "center",
            marginTop: "10px",
            fontSize: "14px",
            color: "#684029"
        });

        $(".model-contents h5").css({
            textAlign: "center",
            fontSize: "14px",
            color: "#73472E",
            marginTop: "50px"
        });

        $(".model-contents .backAndNext").css({
            width: "20px",
            height: "34px",
            backgroundColor: "green",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)"
        });

        $(".model-contents .black-left").css({
            left: "70px",
            background: "url('../images/back-left-1.png')",
            cursor: "pointer"
        })
        $(".model-contents .next-right").css({
            right: "70px",
            background: "url('../images/next-right-1.png')",
            cursor: "pointer"
        });
        $(".model-contents>.model-imgBox>.model-imgBox-inner").css({
            width: "665px",
            height: "355px",
            position: "absolute",
            display: "none"
        });

        $(".model-contents>.model-imgBox>.model-imgBox-inner").eq(0).css({
            display: "block"
        });

        var arr = ["../images/mothod-01.png", "../images/mothod-02.png", "../images/mothod-03.png", "../images/mothod-04.png", "../images/mothod-05.png"];
        var arr2 = ["Step1 - 登录/注册 21cake", "Step2 - 选择蛋糕进入购物车结算", "Step3 - 点击“使用代金卡”并添加", "Step4 - 输入代金卡卡号密码，添加成功后点击使用", "Step5 - 完成订购"];
        for (var i = 0; i < arr.length; i++) {
            $(".model-contents>.model-imgBox>.model-imgBox-inner").eq(i).css({
                "background": "url(" + arr[i] + ")",
            });
        }

        //右边点击开始轮播
        var count = 0;
        $(".model-contents .next-right").click(function () {
            count++;
            if (count > 0) {
                $(".model-contents .black-left").css({
                    background: "url('../images/back-left.png')",
                })
            }
            if (count > 3) {
                $(".model-contents .next-right").css({
                    background: "url('../images/next-right.png')",
                });
            }

            if (count > 4) {
                count = 4;
            }
            $(".model-contents h5").text(arr2[count]);
            $(".model-contents>.model-imgBox>.model-imgBox-inner").eq(count).fadeIn(500).siblings(".model-contents>.model-imgBox>.model-imgBox-inner").fadeOut(500);
        })

        //左边点击轮播
        $(".model-contents .black-left").click(function () {
            count--;
            if (count < 0) {
                count = 0;
            }
            if (count < 1) {
                $(".model-contents .black-left").css({
                    background: "url('../images/back-left-1.png')"
                })
            }

            if (count < 4) {
                $(".model-contents .next-right").css({
                    background: "url('../images/next-right-1.png')",
                });
            }
            $(".model-contents h5").text(arr2[count]);
            $(".model-contents>.model-imgBox>.model-imgBox-inner").eq(count).fadeIn(500).siblings(".model-contents>.model-imgBox>.model-imgBox-inner").fadeOut(500);

        });


    })


});

