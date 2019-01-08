$(function () {
    /*加载用户信息*/
    $("#section .important_day_title span").eq(2).text(localStorage.getItem("u_phone"));

    /*添加紀念日模态框*/
    function addJNRData() {
        var contentText = "<div class=\"add-contents\">\n" +
            "    <h4>添加纪念日</h4>\n" +
            "    <form action=\"#\">\n" +
            "        <label for=\"\">纪念日:</label>\n" +
            "        <select name=\"important_day\" id=\"important_day\">\n" +
            "            <option value=\"0\">请选择</option>\n" +
            "            <option value=\"1\">生日</option>\n" +
            "            <option value=\"2\">结婚</option>\n" +
            "            <option value=\"3\">相识</option>\n" +
            "            <option value=\"4\">自定义</option>\n" +
            "        </select>\n" +
            "         <input type='text' name='important_day' id=\"important_day2\" class=\"important_day2\" placeholder =\"自定义(最多输入10个汉字)\">\n" +
            "         <div class='quXiao'>取消</div>\n" +
            "        <br>\n" +
            "        <label for=\"\">关系:</label>\n" +
            "        <select name=\"relationship\" id=\"relationship\">\n" +
            "            <option value=\"0\">请选择</option>\n" +
            "            <option value=\"1\">妻子</option>\n" +
            "            <option value=\"2\">丈夫</option>\n" +
            "            <option value=\"3\">父亲</option>\n" +
            "            <option value=\"4\">母亲</option>\n" +
            "            <option value=\"5\">同事</option>\n" +
            "            <option value=\"6\">挚友</option>\n" +
            "            <option value=\"7\">亲戚</option>\n" +
            "            <option value=\"8\">自定义</option>\n" +
            "        </select>\n" +
            "        <input type='text' name='relationship' id=\"relationship2\" class=\"relationship2\" placeholder =\"自定义(最多输入10个汉字)\">\n" +
            "        <div class='quXiao2'>取消</div>\n" +
            "        <br>\n" +
            "        <label for=\"\">日期:</label>\n" +
            "        <input type=\"date\" name=\"date\" id=\"date\">\n" +
            "        <br>\n" +
            "        <label for=\"\">对方手机号:</label>\n" +
            "        <input type=\"text\" name=\"tel\" id=\"tel\" placeholder =\"请输入对方手机号码\">\n" +
            "        <br>\n" +
            "        <label for=\"\">短信提示:</label>\n" +
            "        <input type=\"checkbox\" name=\"message\" id=\"message\">\n" +
            "        <div class='promptText'></div>\n" +
            "    </form>\n" +
            "</div>";//传入内容content部分
        var confirm = "确认";//按键名字自定义，如果不要按钮传入空值("")即可。
        var cancel = "取消";//按键名字自定义，如果不要按钮传入空值("")即可。
        popupDiv(contentText, confirm, cancel, 500, 510);
        model_style();

        function model_style() {
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
                padding: "120px",
                border: "4px solid rgba(0,0,0,0.16)"
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
            $(".add-contents #important_day").css({
                width: "285px",
                height: "30px",
                marginBottom: "20px",
                marginLeft: "40px",
                outline: "none"
            });

            $(".add-contents #relationship").css({
                width: "285px",
                height: "30px",
                marginBottom: "20px",
                marginLeft: "53px",
                outline: "none"
            });
            $(".add-contents #date").css({
                width: "281px",
                height: "30px",
                marginBottom: "20px",
                marginLeft: "53px",
                outline: "none"
            });
            $(".add-contents #tel").css({
                width: "281px",
                height: "30px",
                marginLeft: "14px",
                marginBottom: "20px",
                outline: "none"
            });

            $(".add-contents #message").css({
                width: "20px",
                height: "20px",
                marginLeft: "26px",
                verticalAlign: "middle"
            });
            $("#confirm").css({
                width: "130px",
                height: "40px",
                borderRadius: "0",
                backgroundColor: "#442818",
                marginTop: "30px",
                float: "right"
            });
            $("#cancel").css({
                width: "130px",
                height: "40px",
                borderRadius: "0",
                border: "1px solid #e1e1e1",
                float: "right",
                marginRight: "27px",
                marginTop: "30px"

            });

            $(".promptText").css({
                color: "#FF714D",
                paddingLeft: "180px",
                fontSize: "13px"
            });


            /*自定义1*/
            $(".important_day2").css({
                position: "absolute",
                height: "26px",
                width: "281px",
                right: "121px",
                top: "120px",
                outline: "none",
                display: "none"
            });
            $(".quXiao").css({
                position: "absolute",
                height: "18px",
                width: "35px",
                right: "126px",
                top: "125px",
                border: "1px solid #e1e1e1",
                fontSize: "12px",
                lineHeight: "18px",
                textAlign: "center",
                cursor: "pointer",
                display: "none"
            });

            /*自定义2*/
            $(".relationship2").css({
                position: "absolute",
                height: "26px",
                width: "281px",
                right: "121px",
                top: "170px",
                outline: "none",
                display: "none"
            });
            $(".quXiao2").css({
                position: "absolute",
                height: "18px",
                width: "35px",
                right: "126px",
                top: "175px",
                border: "1px solid #e1e1e1",
                fontSize: "12px",
                lineHeight: "18px",
                textAlign: "center",
                cursor: "pointer",
                display: "none"
            });


            //自定义选项1
            $("#important_day").on("change", function () {
                var $selectedText = $(this).children("option:selected").text();
                if ($selectedText == "自定义") {
                    $(".important_day2").css({
                        display: "block"
                    });
                    $(".quXiao").css({
                        display: "block"
                    })
                }
            });
            $(".quXiao").click(function () {
                $(this).prev().prev().val("0")
                $(".important_day2").css({
                    display: "none"
                });
                $(".quXiao").css({
                    display: "none"
                })
            });

            //自定义选项2
            $("#relationship").on("change", function () {
                var $selectedText = $(this).children("option:selected").text();
                if ($selectedText == "自定义") {
                    $(".relationship2").css({
                        display: "block"
                    });
                    $(".quXiao2").css({
                        display: "block"
                    })
                }
            });
            $(".quXiao2").click(function () {
                $(this).prev().prev().val("0");
                $(".relationship2").css({
                    display: "none"
                });
                $(".quXiao2").css({
                    display: "none"
                })
            });
        }
    }

    /*调模态框*/
    $("#section .important_day_button").click(function () {
        addJNRData();
        //确认添加
        $("#confirm").click(function () {
            // 纪念日：
            var $value_important_day = $("#important_day option:selected").text();
            var $value_important_day_value = $("#important_day option:selected").val();
            //关系：
            var $value_relationship = $("#relationship option:selected").text();
            var $value_relationship_value = $("#relationship option:selected").val();

            //日期
            var $value_date = $("#date").val();

            //电话
            var $value_tel = $("#tel").val();

            if ($value_important_day == "请选择" && $value_relationship == "请选择" &&
                $value_date == "" && $value_tel == "") {
                $(".promptText").text("请选择纪念日");
                return false;
            } else if ($value_important_day != "请选择" && $value_relationship == "请选择" &&
                $value_date == "" && $value_tel == "") {
                $(".promptText").text("请选择关系");
                return false;
            } else if ($value_important_day != "请选择" && $value_relationship != "请选择" &&
                $value_date == "" && $value_tel == "") {
                $(".promptText").text("请选择日期");
                return false;
            } else if ($value_important_day != "请选择" && $value_relationship != "请选择" &&
                $value_date != "" && $value_tel == "") {
                $(".promptText").text("请填电话号码");
                return false;
            } else if ($value_important_day != "请选择" && $value_relationship != "请选择" &&
                $value_date != "" && $value_tel != "") {
                /*正则判断电话号码是否是11位*/
                var tel_reg = /^[0-9]{11}$/;
                var result = tel_reg.test($value_tel);
                if (result != true) {
                    $(".promptText").text("请填入正确的电话号码");
                    return false;
                } else {
                    $(".promptText").text("");
                }
            }

            if ($value_important_day == "自定义") {
                var $value_important_day = $("#important_day2").val();
            }

            if ($value_relationship == "自定义") {
                var $value_relationship = $("#relationship2").val();
            }

            //复选框是否选中
            var $trueAndFalse = $("input[type='checkbox']").is(':checked');
            if ($trueAndFalse == true) {
                var $zt = "true";
            }

            /*操作数据库*/
            $.ajax({
                type: "post",
                url: "addMyJN.do",
                data: {
                    jinianri: $value_important_day,
                    guanxi: $value_relationship,
                    date: $value_date,
                    tel: $value_tel,
                    zt: $zt,
                    u_id: localStorage.getItem("u_id")
                },
                success: function (data) {
                    hideDiv("pop-div");
                    history.go(0);
                }
            });
        });
    });

    //删除操作
    $(".deleteContents").each(function (index, element) {
        $(element).on("click", function () {
            $(this).next().next().fadeIn(200);
            $(this).parent().parent().siblings("tr").children().children(".small_model").hide();

            /*取消按钮*/
            var $no_del = $(this).next().next().children(".no_del");
            $no_del.click(function () {
                $(this).parent().fadeOut(200);
            });

            /*确认按钮*/
            var $yes_del = $(this).next().next().children(".yes_del");
            $yes_del.click(function () {
                var del_id = parseInt($(this).parent().prev().prev().attr("del_id"));
                /*删除数据库*/
                $.ajax({
                    url: "/deleteMyJN.do",
                    data: {
                        del_id: del_id
                    },
                    success: function (data) {
                        // hideDiv("pop-div");
                        history.go(0);
                        $(this).parent().hide();
                    }
                });

            });
        })
    });

    //编辑操作
    $(".changeContents").each(function (index, element) {
        $(element).on("click", function () {
            addJNRData();
            $(".add-contents h4").text("编辑纪念日");


            /*紀念日在编辑栏显示*/
            var $value_name = $(this).parent().prev().prev().prev().prev().text();
            $("#important_day option").eq(0).text($value_name);
            for (var i = 1; i < $("#important_day option").length; i++) {
                if ($("#important_day option").eq(i).text() == $value_name) {
                    $("#important_day option").eq(i).remove();
                }
            }

            /*關係在编辑栏显示*/
            var $value_gx = $(this).parent().prev().prev().prev().text();
            $("#relationship option").eq(0).text($value_gx);
            for (var i = 1; i < $("#relationship option").length; i++) {
                if ($("#relationship option").eq(i).text() == $value_gx) {
                    $("#relationship option").eq(i).remove();
                }
            }

            /*日期在编辑栏显示*/
            var $value_date = $(this).parent().prev().prev().text();
            $("#date").get(0).defaultValue = $value_date;

            /*手机号在编辑栏显示*/
            var $value_phone = $(this).parent().prev().text();
            $("#tel").val($value_phone);

            var change_id = parseInt($(this).attr("change_id"));
            //确认添加
            $("#confirm").click(function () {
                // 纪念日：
                var $value_important_day = $("#important_day option:selected").text();
                var $value_important_day_value = $("#important_day option:selected").val();
                //关系：
                var $value_relationship = $("#relationship option:selected").text();
                var $value_relationship_value = $("#relationship option:selected").val();

                //日期
                var $value_date = $("#date").val();

                //电话
                var $value_tel = $("#tel").val();

                if ($value_important_day == "请选择" && $value_relationship == "请选择" &&
                    $value_date == "" && $value_tel == "") {
                    $(".promptText").text("请选择纪念日");
                    return false;
                } else if ($value_important_day != "请选择" && $value_relationship == "请选择" &&
                    $value_date == "" && $value_tel == "") {
                    $(".promptText").text("请选择关系");
                    return false;
                } else if ($value_important_day != "请选择" && $value_relationship != "请选择" &&
                    $value_date == "" && $value_tel == "") {
                    $(".promptText").text("请选择日期");
                    return false;
                } else if ($value_important_day != "请选择" && $value_relationship != "请选择" &&
                    $value_date != "" && $value_tel == "") {
                    $(".promptText").text("请填电话号码");
                    return false;
                } else if ($value_important_day != "请选择" && $value_relationship != "请选择" &&
                    $value_date != "" && $value_tel != "") {
                    /*正则判断电话号码是否是11位*/
                    var tel_reg = /^[0-9]{11}$/;
                    var result = tel_reg.test($value_tel);
                    if (result != true) {
                        $(".promptText").text("请填入正确的电话号码");
                        return false;
                    } else {
                        $(".promptText").text("");
                    }
                }

                if ($value_important_day == "自定义") {
                    var $value_important_day = $("#important_day2").val();
                }

                if ($value_relationship == "自定义") {
                    var $value_relationship = $("#relationship2").val();
                }

                //复选框是否选中
                var $trueAndFalse = $("input[type='checkbox']").is(':checked');
                if ($trueAndFalse == true) {
                    var $zt = "true";
                }else{
                    var $zt = "false";
                }
                /*操作数据库*/
                $.ajax({
                    type: "post",
                    url: "changeMyJN.do",
                    data: {
                        change_id: change_id,
                        jinianri: $value_important_day,
                        guanxi: $value_relationship,
                        date: $value_date,
                        tel: $value_tel,
                        zt: $zt,
                        u_id: localStorage.getItem("u_id")
                    },
                    success: function (data) {
                        hideDiv("pop-div");
                        history.go(0);
                    }
                });

            });
        })
    });
});