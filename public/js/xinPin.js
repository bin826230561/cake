/*隐藏为空的标签*/
let mya=$(".dangao-li .biaoqian a");
// console.log(mya.innerText);
for (i=0;i<mya.length;i++) {
    if (mya[i].innerText==""){
        $(mya[i]).css({
            display:"none"
        })
    }
}
/*==========================加入购物车==================================*/
$(".xin-gouWuChe").on({
    "click":function () {
        $(".dangao-li").after("<div class=\"inner-addBuy\">\n" +
            "                        <div class=\"inner-addBuy-title\">￥"+qiancao*2*0.75+".00</div>\n" +
            "                        <p class=\"inner-addBuy-title2\">商品规格</p>\n" +
            "                        <div class=\"inner-addBuy-chose clearfix\">\n" +
            "                            <a href=\"javascript:void(0);\" class=\"border btn1\">\n" +
            "                                <i></i>1.0磅\n" +
            "                            </a>\n" +
            "                            <a href=\"javascript:void(0);\" class=\"border btn2\">\n" +
            "                                <i></i>1.5磅\n" +
            "                            </a>\n" +
            "                            <a href=\"javascript:void(0);\" class=\"border btn3 quan\">\n" +
            "                                <i></i>2.0磅\n" +
            "                                <!--<i class=\"iconfont showI\">&#xe615;</i>-->\n" +
            "                            </a>\n" +
            "                            <a href=\"javascript:void(0);\" class=\"border btn4\">\n" +
            "                                <i></i>3.0磅\n" +
            "                                <!--<i class=\"iconfont\">&#xe615;</i>-->\n" +
            "                            </a>\n" +
            "                            <a href=\"javascript:void(0);\" class=\"border btn5\">\n" +
            "                                <i></i>5.0磅\n" +
            "                                <!--<i class=\"iconfont\">&#xe615;</i>-->\n" +
            "                            </a>\n" +
            "                        </div>\n" +
            "                        <div class=\"inner-addBuy-btn\">\n" +
            "                            <button type=\"button\">\n" +
            "                                <a href=\"../pages/shopsCart.html\">立即购买</a>\n" +
            "                            </button>\n" +
            "                            <button type=\"button\" class=\"addGoods\"  name='true'><a href=\"javascript:void(0);\">加入购物车</a></button>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    <!--加入购物车成功-->\n" +
            "                    <div class=\"inner-addBuySuccess\">\n" +
            "                        <div>\n" +
            "                            <p><i class=\"iconfont\"></i>成功加入购物车</p>\n" +
            "                        </div>\n" +
            "                        <a  href=\"/shopCar\"><button>查看购物车</button></a>\n" +
            "                    </div>");
    }
});
$("body").on("click",".border",function () {
    $(this).addClass("quan");
    $(this).find("i").css({
        display:"block"
    });
    $(this).siblings().removeClass("quan");
    $(this).siblings().find("i").css({ display:"none"});
});

$("body").on("click",".btn1",function () {
        $(".inner-addBuy-title").text("￥"+qiancao+".00")
    }
);
$("body").on("click",".btn2",function () {
        $(".inner-addBuy-title").text("￥"+parseInt(qiancao*1.29)+".00")
    }
);
$("body").on(
    "click",".btn3",function () {
        $(".inner-addBuy-title").text("￥"+qiancao*2*0.75+".00")
    }
);
$("body").on(
    "click",".btn4",function () {
        $(".inner-addBuy-title").text("￥"+parseInt(qiancao*3*0.75)+".00")
    }
);
$("body").on(
    "click",".btn5",function () {
        $(".inner-addBuy-title").text("￥"+parseInt(qiancao*5*0.75)+".00")
    }
);

$("body").on(
    "click",".xin-gouWuChe",function () {
        // console.log($(".zhanShi").is( $(this).parent().next().siblings()));
        // console.log($(this).parent().parent().siblings().children(".inner-addBuy"))
        $(this).parent().next().slideDown(600);
        $(this).parent().parent().siblings().children(".inner-addBuy").slideUp(600)
    }
);
$("body").on(
    "click",".addGoods",function () {
var inner=$(this).parent().parent().next();
        $(this).parent().parent().next().slideDown(600);
        function qwe(){
            inner.slideUp(600)
        }
        setTimeout(qwe,2000);
        $(this).parent().parent().slideUp(600)
    }
);
/*==================================企业定制============================*/
/*=========蛋糕规格=========*/
$(".active").bind("click",function () {
    var index=$(this).index();
    var m=index+1;
    // console.log($(".active:nth-of-type("+m+")"));
    $(".active:nth-of-type("+m+") a").css({
        border:"1px solid #684029",
    }).find("i").css({ display:"block"}).parent().parent().siblings().find("a").css({border:"1px solid #e7e0dd"
    }).find("i").css({ display:"none"})
});
/*===================点击变幻字体======================*/
$(".active01").bind("click",function () {
    for (var i=0;i<$(".qiyedz-4-2-3").length;i++) {
        $(".qiyedz-4-1")[0].innerHTML="";
        $(".product-price")[0].innerHTML=" <a class=\"add-cart\">\n" +
            "                        <i></i>\n" +
            "                    </a>¥<span>"+jiage+".00</span>/"+bang10+".0磅";
        $(".qiyedz-4-1")[0].innerHTML="¥<span>"+jiage+".00</span>/"+bang10+".0磅";
        $(".qiyedz-4-2-3")[i].innerHTML="";
        $(".qiyedz-4-2-3")[i].innerHTML=" <li class=\"qiyedz-4-2-3one\">\n" +
            "                                    <i></i>"+daxiao35+"\n" +
            "                                </li>\n" +
            "                                <li class=\"qiyedz-4-2-3two\">\n" +
            "                                    <i></i>"+fenxiang30+"\n" +
            "                                </li>\n" +
            "                                <li class=\"qiyedz-4-2-3three\">\n" +
            "                                    <i></i>"+canju40+"\n" +
            "                                </li>\n" +
            "                                <li class=\"qiyedz-4-2-3four\">\n" +
            "                                    <i></i>最早2018-11-08 10:00配送\n" +
            "                                </li>";
    }
    $(".gouWuAnNiu-gouWuC").css({
        backgroundColor:"#684029",
        cursor:"pointer",
        color:"#fff"
    });
    $(".gouWuAnNiu-gouMai").css({
        backgroundColor:"#F4F4F4",
        cursor:"pointer",
        color:"#7A5844"
    })
});
$(".active02").bind("click",function () {
    console.log($(".qiyedz-4-1"));
    for (var i=0;i<$(".qiyedz-4-2-3").length;i++) {
        $(".qiyedz-4-1")[0].innerHTML="";
        $(".product-price")[0].innerHTML=" <a class=\"add-cart\">\n" +
            "                        <i></i>\n" +
            "                    </a>¥<span>3000.00</span>/20.0磅";
        $(".qiyedz-4-1")[0].innerHTML="¥<span>3000.00</span>/20.0磅";
        $(".qiyedz-4-2-3")[i].innerHTML="";
        $(".qiyedz-4-2-3")[i].innerHTML=" <li class=\"qiyedz-4-2-3one\">\n" +
            "                                    <i></i>约55x55cm\n" +
            "                                </li>\n" +
            "                                <li class=\"qiyedz-4-2-3two\">\n" +
            "                                    <i></i>适合70-80人享用\n" +
            "                                </li>\n" +
            "                                <li class=\"qiyedz-4-2-3three\">\n" +
            "                                    <i></i>含80套餐具\n" +
            "                                </li>\n" +
            "                                <li class=\"qiyedz-4-2-3four\">\n" +
            "                                    <i></i>最早2018-11-08 10:00配送\n" +
            "                                </li>";
    }

    $(".gouWuAnNiu-gouWuC").css({
        backgroundColor:"#684029",
        cursor:"pointer",
        color:"#fff"
    });
    $(".gouWuAnNiu-gouMai").css({
        backgroundColor:"#F4F4F4",
        cursor:"pointer",
        color:"#7A5844"
    })
});

$(".active03").bind("click",function () {
    for (var i=0;i<$(".qiyedz-4-2-3").length;i++) {
        $(".qiyedz-4-1")[0].innerHTML="";
        $(".product-price")[0].innerHTML=" <a class=\"add-cart\">\n" +
            "                        <i></i>\n" +
            "                    </a>¥<span>4500.00</span>/30.0磅";
        $(".qiyedz-4-1")[0].innerHTML="¥<span>4500.00</span>/30.0磅";
        $(".qiyedz-4-2-3")[i].innerHTML="";
        $(".qiyedz-4-2-3")[i].innerHTML=" <li class=\"qiyedz-4-2-3one\">\n" +
            "                                    <i></i>约70x70cm\n" +
            "                                </li>\n" +
            "                                <li class=\"qiyedz-4-2-3two\">\n" +
            "                                    <i></i>适合100-120人享用\n" +
            "                                </li>\n" +
            "                                <li class=\"qiyedz-4-2-3three\">\n" +
            "                                    <i></i>含120套餐具\n" +
            "                                </li>\n" +
            "                                <li class=\"qiyedz-4-2-3four\">\n" +
            "                                    <i></i>最早2018-11-08 10:00配送\n" +
            "                                </li>";
    }

    $(".gouWuAnNiu-gouWuC").css({
        backgroundColor:"#684029",
        cursor:"pointer",
        color:"#fff"
    });
    $(".gouWuAnNiu-gouMai").css({
        backgroundColor:"#F4F4F4",
        cursor:"pointer",
        color:"#7A5844"
    })
});
$(".active04").bind("click",function () {
    for (var i=0;i<$(".qiyedz-4-2-3").length;i++){
        $(".qiyedz-4-1")[0].innerHTML="";
        $(".product-price")[0].innerHTML=" <a class=\"add-cart\">\n" +
            "                        <i></i>\n" +
            "                    </a>";
        $(".qiyedz-4-2-3")[i].innerHTML="";
        $(".qiyedz-4-2-3")[i].innerHTML="需订购“更多磅数”，请与客服人员联系。<br><span>订购电话：400 650 2121</span>";
    }
    $(".gouWuAnNiu-gouWuC").css({
        backgroundColor:"#b6b6b6",
        cursor:"not-allowed",
        color:"#fff"
    });
    $(".gouWuAnNiu-gouMai").css({
        backgroundColor:"#F4F4F4",
        cursor:"not-allowed",
        color:"#b6b6b6"
    })
});
/*鼠标移入移出*/
$(".product-price").bind({
    "mouseenter":function () {
        $(".daogou0").slideDown(600)
    },
});
$(".details-nav").bind({
    "mouseleave":function () {
        $(".daogou0").slideUp(600)
    },
});
/*===============================加入购物车===========================*/
$("#gouWuAnNiu-gouWuC").bind("click",function () {
    $(".tianjia").css({
        display:"block"
    });
    function xiaoshi() {
        $(".tianjia").css({
            display:"none"
        });
    }
    setTimeout(xiaoshi,3000)
});
/*======================+-号隐藏显示===========================*/
var jian=$(".sec5 h2 span");
jian.bind(
    "click",function () {
        if (jian[0].innerHTML=="-") {
            $(".recommend-list").slideUp(600);
            jian[0].innerHTML = "";
            jian[0].innerHTML = "+";
        }else {
            $(".recommend-list").slideDown(600);
            jian[0].innerHTML = "";
            jian[0].innerHTML = "-";
        }
    });
/*===========================================滚动条事件===============================*/
$(document).scroll(function() {   //页面加载时，获取滚动条初始高度
    var distance = $(document).scrollTop();  //获取滚动条初始高度的值 ：0
    // console.log(distance); //打印滚动条不同高度的位置的值
    if(distance>889){
        $(".header-fixed").css("display","none");
        $(".details-nav").css("display","block");
    }else if(distance<=889||distance==""){
        $(".details-nav").css("display","none");
        $(".header-fixed").css("display","block");
    }
});
/*===========================购物车加入成功==================*/
    $(".gouWuAnNiu-gouWuC2").bind("click",function () {
        $(".detailscart").slideDown(50);
        function xiao() {
            $(".detailscart").slideUp(50)
        }
        setTimeout(xiao,3000);
    });
$(".details-nav div a i").click(function () {
    $(".detailscart").slideDown(50);
    function xiao() {
        $(".detailscart").slideUp(50)
    }
    setTimeout(xiao,3000);
});
/*==================================================模态框===================================*/
//模态框提示函数
$(".textAndPwd_prompt_model").bind({
    "click":textAndPwd_prompt_model
});
function textAndPwd_prompt_model() {
    var contentText = "<p>加入成功</p>\n"
    var confirm = "";//按键名字自定义，如果不要按钮传入空值("")即可。
    var cancel = "";//按键名字自定义，如果不要按钮传入空值("")即可。
    popupDiv(contentText, confirm, cancel, 120, 60);//方法传入值popupDiv[0]是点击触发按钮，后参接上即可。

    $("#pop-div").css({
        backgroundColor: "#6f5343",
        padding: "20px",
        textAlign: "center",
        width:"240px",
        height:"80px"
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
/*===============================================点击空白处消失===============================*/
$("body").on("click", function (e) {
    var $target = $(e.target);
    // console.log($(e.target)[0]);
    if (!$target.is('.inner-addBuy') && !$target.is('.xin-gouWuChe')
        && !$target.is('.inner-addBuy-title') && !$target.is('.inner-addBuy-chose a')
        && !$target.is('.inner-addBuy-chose') && !$target.is('.inner-addBuy-btn button')) {
        if ($(".inner-addBuy").is(':visible')) {
            $(".inner-addBuy").slideUp();
        }
    }
});


