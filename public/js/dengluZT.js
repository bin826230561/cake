$(function () {

    /*============登录用=============*/
    $("#loginAndReg").css({
        display: localStorage.getItem("myZT1")
    });
    $(".dengLu-success").css({
        display: localStorage.getItem("myZT2")
    });
    $(".redDian").css({
        display: localStorage.getItem("myZT2")
    });
    $(".user").children().eq(4).click(function () {
        localStorage.clear();
        window.location.href="/home";
        $.ajax({
            url: "/deleteLogin.do",
        })
    });

});