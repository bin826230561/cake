function popupDiv(contentText, confirm, cancel, myWidth, myHeight) {
    //模态窗口的点击
    //模态窗口的内容
    var appends = '<div id="pop-div" style="overflow: hidden;" class="pop-box">' +
        '    <div class="pop-box-body">' +
        '        <p class="contentText">' + contentText + '</p>' +
        '    </div>' +
        '    <div id="buttonPanel" style="text-align: center">' +
        '        <input type="button" value="' + confirm + '" id="confirm"/>' +
        '        <input type="button" value="' + cancel + '" id="cancel"/>' +
        '    </div>' +
        '</div>';
    $("body").append(appends);
    // 获取传入的DIV
    var $div_obj = $("#pop-div");
    // 计算机屏幕高度
    var windowWidth = "100%";
    // 计算机屏幕长度
    var bodyHeight = $("body").height();
    // 添加并显示遮罩层
    $("<div id='bg'></div>").width(windowWidth * 1)
        .height(bodyHeight * 1).click(function () {
        //hideDiv(div_id);
    }).appendTo("body");
    // 显示弹出的DIV
    $div_obj.css({
        "position": "fixed",
        "display": "block",
        "left": "0",
        "right": "0",
        "top": "50%",
        "margin": "auto",
        "transform": "translateY(-50%)"
    });

    //取消
    $(".pop-box").on("click", "#cancel", function () {
        hideDiv("pop-div");
    });
    //确认
    $(".pop-box").on("click", "#confirm", function () {
        // f1();
    });
    // 取得传入DIV的高度
    var popupHeight = $div_obj.height(myHeight);
    // 取得传入DIV的长度
    var popupWidth = $div_obj.width(myWidth);
    //盒子居中显示
    $(".pop-box").css({
        "width": windowWidth - popupWidth * 0.2 + "px",
        // "top": (windowHeight - popupHeight) / 2 + "px"
        "boxSizing": "borderBox"
    });

    //bottom部分排版判断
    if (cancel == "" && confirm == "") {
        $("#buttonPanel").hide();
    }
    else if (cancel == "") {
        $("#cancel").hide();
        $("#confirm").css({
            "width": "60%",
            "text-align": "center"
        });
    } else if (confirm == "") {
        $("#confirm").hide();
        $("#cancel").css({
            "width": "60%",
            "text-align": "center",
            "margin-right": "0px"
        });
    }
}

/*隐藏弹出DIV*/
function hideDiv(div_id) {
    $("#bg").remove();
    $("#" + div_id).remove()
}

