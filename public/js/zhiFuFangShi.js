$(function () {
    $(".liJiZhiFu").click(function () {
        var contentText = "<div class=\"zhiFu_contents\">\n" +
            "    <h5>请在<span>30</span>分钟内完成付款,否则订单会被系统取消</h5>\n" +
            "    <div class=\"contents_center clearfix\">\n" +
            "        <div class=\"zhiFu_contents_common zhiFu_contents_left floatL\">\n" +
            "            <h6>支付成功请点击</h6>\n" +
            "            <button class=\"look_success\">查看订单</button>\n" +
            "        </div>\n" +
            "        <div class=\"zhiFu_contents_common zhiFu_contents_right floatR\">\n" +
            "            <h6>遇到问题请点击</h6>\n" +
            "            <button class=\"look_problem\">重新付款</button>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "    <p>注:重新付款前,请关闭之前的付款页面</p>\n" +
            "</div>";//传入内容content部分
        var confirm = "";//按键名字自定义，如果不要按钮传入空值("")即可。
        var cancel = "";//按键名字自定义，如果不要按钮传入空值("")即可。
        popupDiv(contentText, confirm, cancel, 580, 320);
        $("#pop-div").css({
            padding: "60px 60px",
        });

        $(".zhiFu_contents").css({
            textAlign: "center"
        });
        $(".zhiFu_contents h5").css({
            fontSize: "14px",
            color: "#442818",
        });
        $(".zhiFu_contents h5 span").css({
            color: "#ff8e59",
        });

        $(".zhiFu_contents p").css({
            fontSize: "14px",
            color: "#b3b3b3",
            marginTop: "50px"
        });

        $(".zhiFu_contents .contents_center").css({
            marginTop: "65px"
        });
        $(".zhiFu_contents_common").css({
            width: "289px",
            height: "90px",
            textAlign: "center"
        });
        $(".zhiFu_contents_common h6").css({
            fontSize: "14px",
            color: "#442818",
        });

        $(".zhiFu_contents_common button").css({
            width: "190px",
            height: "40px",
            outline: "none",
            border: "0",
            marginTop: "30px"
        });
        $(".zhiFu_contents_common:nth-of-type(2)").css({
            borderLeft: "1px solid #b3b3b3"
        });
        $(".zhiFu_contents_common:nth-of-type(2) button").css({
            background: "#442818",
            color: "#fff",
        });

        setTimeout(function () {
            hideDiv("pop-div");
            /*先设置属性再自动访问*/
            $(this).parent("a").prop("href","/Pay.do");
            window.location.href="/Pay.do";
        }, 1000);


    });
    
    /*=====支付页面倒计时=====*/
    var maxtime = 30 * 60 - 1;
    setInterval(function () {
        if (maxtime >= 0) {
            minutes = Math.floor(maxtime / 60);
            seconds = Math.floor(maxtime % 60);
            $(".timePay span").text(minutes + "分" + seconds + "秒")
            --maxtime;
        }
    }, 1000)
});

