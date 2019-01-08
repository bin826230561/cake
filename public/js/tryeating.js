$("#input").change(function () {
    $("#texts").val($("#input").val());
});

/*========模态框===================*/
//模态框提示函数

function textAndPwd_prompt_model() {
    var contentText = "<p>申请成功</p><p>请注意短信查收</p>\n"
    var confirm = "";//按键名字自定义，如果不要按钮传入空值("")即可。
    var cancel = "";//按键名字自定义，如果不要按钮传入空值("")即可。
    popupDiv(contentText, confirm, cancel, 120, 60);//方法传入值popupDiv[0]是点击触发按钮，后参接上即可。

    $("#pop-div").css({
        backgroundColor: "#6f5343",
        padding: "20px",
        textAlign: "center",
        width: "240px",
        height: "89px"
    });
    $("#pop-div p").css({
        fontSize: "14px",
        color: "#fff",
    });
    $("#pop-div p:first-child").css({
        marginTop: "8px"
    });

    //提示模态框1s后消失，并返回之前的页面
    setTimeout(function () {
        hideDiv("pop-div");
    }, 1500);
}


