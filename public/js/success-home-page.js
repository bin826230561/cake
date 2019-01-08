/*导航栏部分开始*/
$(function () {
    $("#header .show-children").each(function (index, element) {
        $(element).on("mouseenter", function () {
            $(this).children("div").stop().slideDown(300);
            $(this).siblings().children("div").stop().slideUp(100)
        }).mouseleave(function () {
            $(this).children("div").stop().slideUp(200);
        })
    });


    //导航栏购物车处数字显示
    var $numText = $("#header .nav-function li .num").text();
    if ($numText != "") {
        $("#header .nav-function li .num").show();
    } else {
        $("#header .nav-function li .num").hide();
    }

    //导航栏处地址选择
    $("#header .nav-function .address-chose a").each(function (index, element) {
        $(element).click(function () {
            $("#header .nav-function .address-chose-default").text($(this).text());
        })
    });

    //移入/选中 导航栏标签变化
    var $navLi = $("#header .nav-centerContent li");
    $navLi.each(function (index, element) {
        $(element).mouseenter(function () {
            $(this).children("a").css({
                color: "#bb9772",
                transaction: "all .3s"
            });
            $(this).siblings().children("a").css({
                color: "#684029",
                transaction: "all .3s"
            });
            $(this).children("span").stop().fadeIn(300);
            $(this).siblings().children("span").stop().fadeOut(300);
        });
        /*找到有变化类的位置，然后作为参数进行改变样式*/
        $("#header .nav-centerContent").mouseleave(function () {
            var $defaultNum = $(this).children().children().children(".showSpan").parent().index();
            if ($defaultNum != -1) {
                $("#header .nav-centerContent li").eq($defaultNum).children("a").css({
                    color: "#bb9772",
                    transaction: "all .3s"
                });
                $("#header .nav-centerContent li").eq($defaultNum).siblings().children("a").css({
                    color: "#684029",
                    transaction: "all .3s"
                });
                $("#header .nav-centerContent li").eq($defaultNum).children("span").stop().fadeIn(300);
                $("#header .nav-centerContent li").eq($defaultNum).siblings().children("span").stop().fadeOut(300);
            } else if ($defaultNum == -1) {
                $("#header .nav-centerContent li").children("a").css({
                    color: "#684029",
                    transaction: "all .3s"
                });
                $("#header .nav-centerContent li").children("span").stop().fadeOut(300);
            }

        });

    })


});
/*导航栏部分结束*/


/*轮播图开始*/
/*将背景图片存在数组中*/
$(function () {
    var arr = ["../images/banner-1.jpg", "../images/banner-2.jpg", "../images/banner-3.jpg", "../images/banner-4.jpg", "../images/banner-5.jpg"];
    for (var i = 0; i < arr.length; i++) {
        $(".broadCast-imgBox>.broadCast-img").eq(i).css({
            "background": "url(" + arr[i] + ")",
            "backgroundPosition": "center center"
        });
    }

    $(".broadCast-imgBox>ul>li").each(function (index, element) {
        $(element).on("mouseenter", function () {
            $(this).addClass("black").siblings("li").removeClass("black");
            $(".broadCast-imgBox>.broadCast-img").eq(index).stop().fadeIn(1000).siblings(".broadCast-imgBox>.broadCast-img").stop().fadeOut(600);
        })
    });

    /*自动轮播定时器*/
    var inx = 0;
    var time = setInterval(ziDongLunBo, 5000);

    function ziDongLunBo() {
        inx++;
        if (inx == 5) {
            inx = 0;
        }
        /*分页器*/
        var $li = $(".broadCast-imgBox>ul>li");
        for (var i = 0; i < $li.length; i++) {
            if (i == inx) {
                $li.eq(i).addClass("black").siblings("li").removeClass("black");
            }
        }

        /*换背景图*/
        $(".broadCast-imgBox>.broadCast-img").eq(inx).stop().fadeIn(1000).siblings(".broadCast-imgBox>.broadCast-img").stop().fadeOut(600);
    }

    /*鼠标移入清理定时器*/
    var $ul = $(".broadCast-imgBox");
    $ul.mouseenter(function () {
        clearInterval(time);
    }).mouseleave(function () {
        time = setInterval(ziDongLunBo, 5000)
    });
})


/*轮播图结束*/

/*section内容区开始*/
$(function () {
    //标签显示与隐藏
    var $home_a1 = $("#home-contents .inner-label a");
    for (var i = 0; i < $home_a1.length; i++) {
        if ($($home_a1[i]).text() != "") {
            $($home_a1[i]).show();
        } else {
            $($home_a1[i]).hide();
        }
    }

    //规格选择和隐藏
    var $home_a2 = $("#home-contents .inner-addBuy-chose a");
    for (var i = 0; i < $home_a2.length; i++) {
        if ($($home_a2[i]).text() != "") {
            $($home_a2[i]).show();
        } else {
            $($home_a2[i]).hide();
        }
    }

    //选择规格

    $(".contents-common").each(function (index, element) {
        var $element_a = $(element).children().children().children().children().children().children("a")
        $element_a.each(function (index2, element2) {
            $(element2).click(function () {
                // console.log(index2)
                $(this).addClass("border").siblings().removeClass("border");
                $(this).children("i").addClass("showI").parent().siblings().children("i").removeClass("showI");
                if (index == 0) {
                    if (index2 == 0) {
                        $(this).parent().prev().text("￥198.00/1.0磅")
                    } else if (index2 == 1) {
                        $(this).parent().prev().text("￥298.00/2.0磅")
                    } else if (index2 == 2) {
                        $(this).parent().prev().text("￥458.00/3.0磅")
                    } else if (index2 == 3) {
                        $(this).parent().prev().text("￥750.00/5.0磅")
                    } else if (index2 == 4) {
                        $(this).parent().prev().text("￥238.00/1.0磅")
                    } else if (index2 == 5) {
                        $(this).parent().prev().text("￥358.00/2.0磅")
                    } else if (index2 == 6) {
                        $(this).parent().prev().text("￥568.00/3.0磅")
                    } else if (index2 == 8) {
                        $(this).parent().prev().text("￥198.00/5.0磅")
                    } else if (index2 == 9) {
                        $(this).parent().prev().text("￥298.00/5.0磅")
                    } else if (index2 == 10) {
                        $(this).parent().prev().text("￥458.00/5.0磅")
                    } else if (index2 == 11) {
                        $(this).parent().prev().text("￥750.00/5.0磅")
                    } else if (index2 == 12) {
                        $(this).parent().prev().text("￥198.00/5.0磅")
                    } else if (index2 == 13) {
                        $(this).parent().prev().text("￥298.00/5.0磅")
                    } else if (index2 == 14) {
                        $(this).parent().prev().text("￥458.00/5.0磅")
                    } else if (index2 == 15) {
                        $(this).parent().prev().text("￥750.00/5.0磅")
                    }
                } else if (index == 1) {
                    if (index2 == 0) {
                        $(this).parent().prev().text("￥198.00/1.0磅")
                    } else if (index2 == 1) {
                        $(this).parent().prev().text("￥298.00/2.0磅")
                    } else if (index2 == 2) {
                        $(this).parent().prev().text("￥458.00/3.0磅")
                    } else if (index2 == 3) {
                        $(this).parent().prev().text("￥750.00/5.0磅")
                    } else if (index2 == 4) {
                        $(this).parent().prev().text("￥238.00/1.0磅")
                    } else if (index2 == 5) {
                        $(this).parent().prev().text("￥358.00/2.0磅")
                    } else if (index2 == 6) {
                        $(this).parent().prev().text("￥568.00/3.0磅")
                    } else if (index2 == 8) {
                        $(this).parent().prev().text("￥198.00/5.0磅")
                    } else if (index2 == 9) {
                        $(this).parent().prev().text("￥298.00/5.0磅")
                    } else if (index2 == 10) {
                        $(this).parent().prev().text("￥458.00/5.0磅")
                    } else if (index2 == 11) {
                        $(this).parent().prev().text("￥750.00/5.0磅")
                    } else if (index2 == 12) {
                        $(this).parent().prev().text("￥198.00/5.0磅")
                    } else if (index2 == 13) {
                        $(this).parent().prev().text("￥298.00/5.0磅")
                    } else if (index2 == 14) {
                        $(this).parent().prev().text("￥458.00/5.0磅")
                    } else if (index2 == 15) {
                        $(this).parent().prev().text("￥750.00/5.0磅")
                    }
                } else if (index == 2) {
                    if (index2 == 0) {
                        $(this).parent().prev().text("￥198.00/1.0磅")
                    } else if (index2 == 1) {
                        $(this).parent().prev().text("￥298.00/2.0磅")
                    } else if (index2 == 2) {
                        $(this).parent().prev().text("￥458.00/3.0磅")
                    } else if (index2 == 3) {
                        $(this).parent().prev().text("￥750.00/5.0磅")
                    } else if (index2 == 4) {
                        $(this).parent().prev().text("￥238.00/1.0磅")
                    } else if (index2 == 5) {
                        $(this).parent().prev().text("￥358.00/2.0磅")
                    } else if (index2 == 6) {
                        $(this).parent().prev().text("￥568.00/3.0磅")
                    } else if (index2 == 8) {
                        $(this).parent().prev().text("￥198.00/5.0磅")
                    } else if (index2 == 9) {
                        $(this).parent().prev().text("￥298.00/5.0磅")
                    } else if (index2 == 10) {
                        $(this).parent().prev().text("￥458.00/5.0磅")
                    } else if (index2 == 11) {
                        $(this).parent().prev().text("￥750.00/5.0磅")
                    } else if (index2 == 12) {
                        $(this).parent().prev().text("￥198.00/5.0磅")
                    } else if (index2 == 13) {
                        $(this).parent().prev().text("￥298.00/5.0磅")
                    } else if (index2 == 14) {
                        $(this).parent().prev().text("￥458.00/5.0磅")
                    } else if (index2 == 15) {
                        $(this).parent().prev().text("￥750.00/5.0磅")
                    }
                } else if (index == 3) {
                    if (index2 == 0) {
                        $(this).parent().prev().text("￥198.00/1.0磅")
                    } else if (index2 == 1) {
                        $(this).parent().prev().text("￥298.00/2.0磅")
                    } else if (index2 == 2) {
                        $(this).parent().prev().text("￥458.00/3.0磅")
                    } else if (index2 == 3) {
                        $(this).parent().prev().text("￥750.00/5.0磅")
                    } else if (index2 == 4) {
                        $(this).parent().prev().text("￥238.00/1.0磅")
                    } else if (index2 == 5) {
                        $(this).parent().prev().text("￥358.00/2.0磅")
                    } else if (index2 == 6) {
                        $(this).parent().prev().text("￥568.00/3.0磅")
                    } else if (index2 == 8) {
                        $(this).parent().prev().text("￥198.00/5.0磅")
                    } else if (index2 == 9) {
                        $(this).parent().prev().text("￥298.00/5.0磅")
                    } else if (index2 == 10) {
                        $(this).parent().prev().text("￥458.00/5.0磅")
                    } else if (index2 == 11) {
                        $(this).parent().prev().text("￥750.00/5.0磅")
                    } else if (index2 == 12) {
                        $(this).parent().prev().text("￥198.00/5.0磅")
                    } else if (index2 == 13) {
                        $(this).parent().prev().text("￥298.00/5.0磅")
                    } else if (index2 == 14) {
                        $(this).parent().prev().text("￥458.00/5.0磅")
                    } else if (index2 == 15) {
                        $(this).parent().prev().text("￥750.00/5.0磅")
                    }
                }
            })
        });
    });


    //加入购物车
    $(".add_cart").each(function (index, element) {
        $(element).on("click", function () {
            $(this).parent().next(".inner-addBuy").slideDown().parent().siblings().children(".inner-addBuy").slideUp();
            $(this).parent().next(".inner-addBuy").children(".inner-addBuy-chose").children("a").eq(1).addClass("border").siblings().removeClass("border");
            $(this).parent().next(".inner-addBuy").children(".inner-addBuy-chose").children("a").eq(1).children().addClass("showI").parent().siblings().children("i").removeClass("showI");
            $(this).parent().next(".inner-addBuy").children(".inner-addBuy-title").text("￥298.00/2.0磅");
        });
    });

    $("body").on("click", function (e) {
        var $target = $(e.target);
        if (!$target.is('.inner-addBuy') && !$target.is('.add_cart')
            && !$target.is('.inner-addBuy-title') && !$target.is('.inner-addBuy-chose a')
            && !$target.is('.inner-addBuy-chose') && !$target.is('.inner-addBuy-btn button')) {
            if ($(".inner-addBuy").is(':visible')) {
                $("#home-contents .inner-addBuy").slideUp();
            }
        }
    });

    //加入购物车后显示
    $("#home-contents .inner-addBuy-btn .addGoods").each(function (index, element) {
        $(element).click(function () {
            $(this).parent().parent().slideUp();
            $(this).parent().parent().next().slideDown();
            $(this).parent().parent().next().delay(2000).slideUp();
        })
    })




});


/*section内容区结束*/


