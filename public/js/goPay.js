/**
 * Created by lsdn on 2018/11/5.
 */
$(".select-coupons-title .active1").click(function () {
    $(".use-coupons").css({
        "display": "none",
    });
    $(".add-coupons").css({
        "display": "block",
    });
    $(".select-coupons-title .active1").css({
        "border": "1px solid #e1e1e1",
        "borderBottom": "1px solid #fafafa",
        "color": "#80695b"
    });
    $(".select-coupons-title .active").css({
        "border": "none"
    })
});

$(".select-coupons-title .active").click(function () {
    $(".use-coupons").css({
        "display": "block",
    });
    $(".add-coupons").css({
        "display": "none",
    });
    $(".select-coupons-title .active").css({
        "border": "1px solid #e1e1e1",
        "borderBottom": "1px solid #fafafa",
        "color": "#80695b"
    });
    $(".select-coupons-title .active1").css({
        "border": "none"
    })
});

$(".fruit-coin span").click(function () {
    if ($(".fruit-coin-show").is(":hidden")) {
        $(".fruit-coin-show").show()
    } else {
        $(".fruit-coin-show").hide()
    }

    $(".fruit-coin span").css({
        "backgroundPosition": "-152px -102px"
    });
    $(".fruit-coin span").attr("class", "minus");
    $(".fruit-coin .minus").click(function () {


        $(".fruit-coin span").css({
            "backgroundPosition": "-172px -96px"
        });
        $(".fruit-coin .minus").removeClass("minus");
    });
});

$(".behalf-gold span").click(function () {
    if ($(".behalf-gold-show").is(":hidden")) {
        $(".behalf-gold-show").show()
    } else {
        $(".behalf-gold-show").hide()
    }

    $(".behalf-gold span").css({
        "backgroundPosition": "-152px -102px"
    });
    $(".behalf-gold span").attr("class", "minus");
    $(".behalf-gold .minus").click(function () {


        $(".behalf-gold span").css({
            "backgroundPosition": "-172px -96px"
        });
        $(".behalf-gold .minus").removeClass("minus");
    });
});

$('#input-invoice').change(function () {
    var isChecked = $('#input-invoice').is(":checked");
    if (isChecked == true) {
        $(".invoice-show").css({
            "display": "block"
        });
    }
    else {
        $(".invoice-show").css({
            "display": "none"
        });
    }
});


/*添加地址模态框*/
$(function () {
    var contentText = "<div class=\"add-contents\">\n" +
        "    <h4>添加地址</h4>\n" +
        "    <form action=\"#\">\n" +
        "        <label for=\"\">收货人:</label>\n" +
        "         <input type='text' name='receiver' id=\"receiver\" class=\"receiver\" placeholder =\"收货人姓名\">\n" +
        "        <br>\n" +
        "        <label for=\"\">联系方式:</label>\n" +
        "        <input type='text' name='phoneNumber' id=\"phoneNumber\" class=\"phoneNumber\" placeholder =\"收货人电话号码\">\n" +
        "        <br>\n" +
        "        <label for=\"\">城市:</label>\n" +
        "        <select name=\"city\" id=\"city\">\n" +
        "            <option value=\"0\">成都</option>\n" +
        "            <option value=\"1\">上海</option>\n" +
        "            <option value=\"2\">西安</option>\n" +
        "            <option value=\"3\">重庆</option>\n" +
        "        </select>\n" +
        "        <br>\n" +
        "        <label for=\"\">位置:</label>\n" +
        "        <input type=\"text\" name=\"address\" id=\"address\" placeholder =\"路号/写字楼/小区\">\n" +
        "        <br>\n" +
        "        <label for=\"\">详细地址:</label>\n" +
        "        <input type=\"text\" name=\"minute_address\" id=\"minute_address\" placeholder =\"楼号/门牌号\">\n" +
        "        <br>\n" +
        "        <input type=\"checkbox\" name=\"default_address\" id=\"default_address\">\n" +
        "        <label for=\"\">设置为默认地址</label>\n" +
        "        <div class='promptText'></div>\n" +
        "    </form>\n" +
        "</div>";//传入内容content部分

    /*=====添加新地址1=====*/
    $("#cart-address-button").click(function () {
        addNewAddress1();
        function addNewAddress1() {
            var confirm = "确认";//按键名字自定义，如果不要按钮传入空值("")即可。
            var cancel = "取消";//按键名字自定义，如果不要按钮传入空值("")即可。
            popupDiv(contentText, confirm, cancel, 500, 510);
            $("<i class=\"iconfont closeDiv\">&#xe628;</i>").appendTo("#pop-div");

            /*正则判断*/
            $("#confirm").click(function () {
                var phoneNumber = /^[0-9]{11}$/;  //电话号码规则
                if ($("#receiver").val() == "") {
                    $(".promptText").text("请输入收货人");
                } else if (phoneNumber.test($("#phoneNumber").val()) != true && $("#phoneNumber").val() != "") {
                    $(".promptText").text("请输入正确的电话号码");
                } else if ($("#phoneNumber").val() == "") {
                    $(".promptText").text("请输入电话号码");
                } else if ($("#address").val() == "") {
                    $(".promptText").text("请填写你的地址");
                } else if ($("#default_address").val() == "") {
                    $(".promptText").text("请填写详细地址");
                }
            })

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
            $("#pop-div").css({
                padding: "80px 120px",
                border: "4px solid rgba(0,0,0,0.16)",
                background: "#fafafa"
            });
            $(".add-contents h4").css({
                position: "absolute",
                top: "12px",
                left: "12px",
                color: "#b3b3b3",
                fontSize: "13px"
            });

            $(".add-contents label").css({
                color: "#b3b3b3",
                fontSize: "13px"
            });
            $(".add-contents #receiver").css({
                width: "280px",
                height: "30px",
                marginBottom: "20px",
                marginLeft: "40px",
                outline: "none"
            });
            $(".add-contents #phoneNumber").css({
                width: "280px",
                height: "30px",
                marginBottom: "20px",
                marginLeft: "26px",
                outline: "none"
            });
            $(".add-contents #city").css({
                width: "284px",
                height: "36px",
                marginBottom: "20px",
                marginLeft: "52px",
                outline: "none"
            });
            $(".add-contents #address").css({
                width: "280px",
                height: "30px",
                marginBottom: "20px",
                marginLeft: "52px",
                outline: "none"
            });
            $(".add-contents #minute_address").css({
                width: "280px",
                height: "30px",
                marginBottom: "20px",
                marginLeft: "26px",
                outline: "none"
            });
            $(".add-contents #default_address").css({
                width: "15px",
                height: "15px",
                marginLeft: "85px",
                verticalAlign: "middle"
            });
            $(".add-contents .promptText").css({
                marginTop: "10px"
            });
            $("#confirm").css({
                width: "130px",
                height: "40px",
                borderRadius: "0",
                backgroundColor: "#442818",
                marginTop: "15px",
                float: "left",
                marginLeft: "60px"
            });
            $("#cancel").css({
                width: "130px",
                height: "40px",
                borderRadius: "0",
                border: "1px solid #e1e1e1",
                marginRight: "27px",
                float: "left",
                marginTop: "15px",
                marginLeft: "20px"

            });

            $(".promptText").css({
                color: "#FF714D",
                textAlign: "center",
                fontSize: "13px"
            });

            /*=========获取值========*/
            /*添加地址*/
            $("#confirm").click(function () {
                /*正则判断*/
                var phoneNumber = /^[0-9]{11}$/;  //电话号码规则
                if ($("#receiver").val() == "") {
                    $(".promptText").text("请输入收货人");
                    return;
                } else if (phoneNumber.test($("#phoneNumber").val()) != true && $("#phoneNumber").val() != "") {
                    $(".promptText").text("请输入正确的电话号码");
                    return;
                } else if ($("#phoneNumber").val() == "") {
                    $(".promptText").text("请输入电话号码");
                    return;
                } else if ($("#address").val() == "") {
                    $(".promptText").text("请填写你的地址");
                    return;
                } else if ($("#default_address").val() == "" ) {
                    $(".promptText").text("请填写详细地址");
                    return;
                }else{
                    var people = $("#receiver").val();
                    var phone = $("#phoneNumber").val();
                    var city = $("#city option:selected").text();
                    var address = $("#address").val();
                    var minute_address = $("#minute_address").val();
                    var address = city + address + minute_address;
                    var zt = $("#default_address:checked").length;
                    if (zt == 0) {
                        zt = false;
                    } else {
                        zt = true;
                    }
                    $.ajax({
                        type: "post",
                        url: "/addAddress.do",
                        data: {
                            people: people,
                            phone: phone,
                            address: address,
                            zt: true
                        },
                        success: function (data) {
                            history.go(0);
                            hideDiv("pop-div");
                        }
                    })


                }
            });
        }
    });

    /*=====添加新地址2=====*/
    $("#add-address-btn2").click(function () {
        addNewAddress2();
        function addNewAddress2() {
            var confirm = "确认";//按键名字自定义，如果不要按钮传入空值("")即可。
            var cancel = "取消";//按键名字自定义，如果不要按钮传入空值("")即可。
            popupDiv(contentText, confirm, cancel, 500, 510);
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
            $("#pop-div").css({
                padding: "80px 120px",
                border: "4px solid rgba(0,0,0,0.16)",
                background: "#fafafa"
            });
            $(".add-contents h4").css({
                position: "absolute",
                top: "12px",
                left: "12px",
                color: "#b3b3b3",
                fontSize: "13px"
            });

            $(".add-contents label").css({
                color: "#b3b3b3",
                fontSize: "13px"
            });
            $(".add-contents #receiver").css({
                width: "280px",
                height: "30px",
                marginBottom: "20px",
                marginLeft: "40px",
                outline: "none"
            });
            $(".add-contents #phoneNumber").css({
                width: "280px",
                height: "30px",
                marginBottom: "20px",
                marginLeft: "26px",
                outline: "none"
            });
            $(".add-contents #city").css({
                width: "284px",
                height: "36px",
                marginBottom: "20px",
                marginLeft: "52px",
                outline: "none"
            });
            $(".add-contents #address").css({
                width: "280px",
                height: "30px",
                marginBottom: "20px",
                marginLeft: "52px",
                outline: "none"
            });
            $(".add-contents #minute_address").css({
                width: "280px",
                height: "30px",
                marginBottom: "20px",
                marginLeft: "26px",
                outline: "none"
            });
            $(".add-contents #default_address").css({
                width: "15px",
                height: "15px",
                marginLeft: "85px",
                verticalAlign: "middle"
            });
            $(".add-contents .promptText").css({
                marginTop: "10px"
            });
            $("#confirm").css({
                width: "130px",
                height: "40px",
                borderRadius: "0",
                backgroundColor: "#442818",
                marginTop: "15px",
                float: "left",
                marginLeft: "60px"
            });
            $("#cancel").css({
                width: "130px",
                height: "40px",
                borderRadius: "0",
                border: "1px solid #e1e1e1",
                marginRight: "27px",
                float: "left",
                marginTop: "15px",
                marginLeft: "20px"

            });

            $(".promptText").css({
                color: "#FF714D",
                textAlign: "center",
                fontSize: "13px"
            });
            /*=========获取值========*/
            /*添加地址*/
            $("#confirm").click(function () {
                /*正则判断*/
                var phoneNumber = /^[0-9]{11}$/;  //电话号码规则
                if ($("#receiver").val() == "") {
                    $(".promptText").text("请输入收货人");
                    return;
                } else if (phoneNumber.test($("#phoneNumber").val()) != true && $("#phoneNumber").val() != "") {
                    $(".promptText").text("请输入正确的电话号码");
                    return;
                } else if ($("#phoneNumber").val() == "") {
                    $(".promptText").text("请输入电话号码");
                    return;
                } else if ($("#address").val() == "") {
                    $(".promptText").text("请填写你的地址");
                    return;
                } else if ($("#default_address").val() == "" ) {
                    $(".promptText").text("请填写详细地址");
                    return;
                }else{
                    var people = $("#receiver").val();
                    var phone = $("#phoneNumber").val();
                    var city = $("#city option:selected").text();
                    var address = $("#address").val();
                    var minute_address = $("#minute_address").val();
                    var address = city + address + minute_address;
                    var zt = $("#default_address:checked").length;
                    if (zt == 0) {
                        zt = false;
                        $.ajax({
                            type: "post",
                            url: "/addAddress.do",
                            data: {
                                people: people,
                                phone: phone,
                                address: address,
                                zt: zt
                            },
                            success: function (data) {
                                history.go(0);
                                hideDiv("pop-div");
                            }
                        })
                    } else {
                        zt = true;
                        $.ajax({
                            type: "post",
                            url: "/changeAddressZT.do",
                            success: function (data) {
                                $.ajax({
                                    type: "post",
                                    url: "/addAddress.do",
                                    data: {
                                        people: people,
                                        phone: phone,
                                        address: address,
                                        zt: zt
                                    },
                                    success: function (data) {
                                        history.go(0);
                                        hideDiv("pop-div");
                                    }
                                })

                            }
                        })
                    }


                }
            });
        }

    })
});



