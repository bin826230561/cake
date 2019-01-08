$(function () {
    $("#section .news-hd ul li").each(function (index, element) {
        $(element).on("click", function () {
            if (index == 0) {
                $(this).css("color", "#71442A");
                $(this).siblings().css("color", "#D5BFA7");
                $(this).children("span").css({
                    background: "url('../images/L-tongzhi-1.png') no-repeat",
                });
                $(this).siblings().eq(0).children("span").css({
                    background: "url('../images/L-wuliu-0.png') no-repeat",
                });
                $(this).siblings().eq(1).children("span").css({
                    background: "url('../images/L-kefu-0.png') no-repeat",
                });
                $(".news-bd-tongZhi").addClass("show");
                $(".news-bd-wuLiu").removeClass("show");
            } else if (index == 1) {
                $(this).css("color", "#71442A");
                $(this).siblings().css("color", "#D5BFA7");
                $(this).children("span").css({
                    background: "url('../images/L-wuliu.png') no-repeat",
                });
                $(this).siblings().eq(0).children("span").css({
                    background: "url('../images/L-tongzhi-0.png') no-repeat",
                });
                $(this).siblings().eq(1).children("span").css({
                    background: "url('../images/L-kefu-0.png') no-repeat",
                });
                $(".news-bd-wuLiu").addClass("show");
                $(".news-bd-tongZhi").removeClass("show");
            } else {
                $(this).css("color", "#71442A");
                $(this).siblings().css("color", "#D5BFA7");
                $(this).children("span").css({
                    background: "url('../images/L-kefu-1.png') no-repeat",
                });
                $(this).siblings().eq(0).children("span").css({
                    background: "url('../images/L-tongzhi-0.png') no-repeat",
                });
                $(this).siblings().eq(1).children("span").css({
                    background: "url('../images/L-wuliu-0.png') no-repeat",
                });
            }
        })
    })
});