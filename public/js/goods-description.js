// ==============================第一部分===========================
//设置图片对应关系
$(".img1").mouseenter(function () {
    $(".sec1-left img").attr("src","../images/lmy6.jpg");
});
$(".img2").mouseenter(function () {
    $(".sec1-left img").attr("src","../images/lmy10.jpg");
});
$(".img3").mouseenter(function () {
    $(".sec1-left img").attr("src","../images/lmy8.jpg");
});

//设置三张小图片移入时有边框
$(".sec1-right li img").mouseenter(function () {
    $(this).css({
        outline:"1px solid #c69c6d"
    });
    $(this).parent().siblings().children().css({
        outline:"none"
    })
});



// ================================第二部分===========================



//设置不同磅数显示不同内容
$(".bt1").click(function () {
    // console.log(parseInt($(this).text()));
    $(".sec2-tl img").attr("src","../images/lmy95.jpg");
    $(".time span").text("最早今天 20:30配送");
    $(".price span:nth-of-type(1)").text("¥198.00");
    $(".price span:nth-of-type(2)").text("/1.0磅");
    $(".size i").css("display","inline-block");
    $(".people").css("display","block");
    $(".tool").css("display","block");
    $(".time").css("display","block");
    $(".price span:nth-of-type(1)").css("display","inline-block");
    $(".price span:nth-of-type(2)").css("display","inline-block");
    $(".bottom button:nth-of-type(1),.bottom2 button:nth-of-type(1)").css({
        "background":"#F4F4F4",
        "color": "#7A5844",
        "cursor":"pointer"
    });
    $(".bottom button:nth-of-type(2),.bottom2 button:nth-of-type(2)").css({
        "background": "#684029",
        "color": "#fff",
        "cursor":"pointer"
    });
    $(".daohangRight i").css("display","inline-block");
    // console.log($(".left-content1 span").text());
    $.ajax({
        type:"post",
        url:"/bt1.do",
        data:{
            bt1:parseInt($(this).text()),
        },
        success:function (data) {
            $(".size span").text(data[0].spec_size);
            $(".people span").text(data[0].spec_person);
            $(".tool span").text(data[0].spec_tools);
        }

    })
});
$(".bt2").click(function () {
    // console.log(parseInt($(this).text()));
    $(".sec2-tl img").attr("src","../images/lmy94.jpg");
    $(".time span").text("最早今天 20:30配送");
    $(".price span:nth-of-type(1)").text("¥258.00");
    $(".price span:nth-of-type(2)").text("/2.0磅");
    $(".size i").css("display","block");
    $(".size i").css("display","inline-block");
    $(".people").css("display","block");
    $(".tool").css("display","block");
    $(".time").css("display","block");
    $(".price span:nth-of-type(1)").css("display","block");
    $(".price span:nth-of-type(2)").css("display","block");
    $(".price span:nth-of-type(1)").css("display","inline-block");
    $(".price span:nth-of-type(2)").css("display","inline-block");
    $(".bottom button:nth-of-type(1),.bottom2 button:nth-of-type(1)").css({
        "background":"#F4F4F4",
        "color": "#7A5844",
        "cursor":"pointer"
    });
    $(".bottom button:nth-of-type(2),.bottom2 button:nth-of-type(2)").css({
        "background": "#684029",
        "color": "#fff",
        "cursor":"pointer"
    });
    $(".daohangRight i").css("display","inline-block");
    $.ajax({
        type:"post",
        url:"/bt1.do",
        data:{
            bt1:parseInt($(this).text())
        },
        success:function (data) {
            $(".size span").text(data[0].spec_size);
            $(".people span").text(data[0].spec_person);
            $(".tool span").text(data[0].spec_tools);
        }
    })
});
$(".bt3").click(function () {
    // console.log(parseInt($(this).text()));
    $(".sec2-tl img").attr("src","../images/lmy18.jpg");
    $(".time span").text("最早今天 20:30配送");
    $(".price span:nth-of-type(1)").text("¥298.00");
    $(".price span:nth-of-type(2)").text("/3.0磅");
    $(".size i").css("display","block");
    $(".size i").css("display","inline-block");
    $(".people").css("display","block");
    $(".tool").css("display","block");
    $(".time").css("display","block");
    $(".price span:nth-of-type(1)").css("display","block");
    $(".price span:nth-of-type(2)").css("display","block");
    $(".price span:nth-of-type(1)").css("display","inline-block");
    $(".price span:nth-of-type(2)").css("display","inline-block");
    $(".bottom button:nth-of-type(1),.bottom2 button:nth-of-type(1)").css({
        "background":"#F4F4F4",
        "color": "#7A5844",
        "cursor":"pointer"
    });
    $(".bottom button:nth-of-type(2),.bottom2 button:nth-of-type(2)").css({
        "background": "#684029",
        "color": "#fff",
        "cursor":"pointer"
    });
    $(".daohangRight i").css("display","inline-block");
    $.ajax({
        type:"post",
        url:"/bt1.do",
        data:{
            bt1:parseInt($(this).text())
        },
        success:function (data) {
            $(".size span").text(data[0].spec_size);
            $(".people span").text(data[0].spec_person);
            $(".tool span").text(data[0].spec_tools);
        }
    })
});
$(".bt4").click(function () {
    // console.log(parseInt($(this).text()));
    $(".sec2-tl img").attr("src","../images/lmy93.jpg");;
    $(".time span").text("最早今天 20:30配送");
    $(".price span:nth-of-type(1)").text("¥458.00");
    $(".price span:nth-of-type(2)").text("/4.0磅");
    $(".size i").css("display","block");
    $(".size i").css("display","inline-block");
    $(".people").css("display","block");
    $(".tool").css("display","block");
    $(".time").css("display","block");
    $(".price span:nth-of-type(1)").css("display","block");
    $(".price span:nth-of-type(2)").css("display","block");
    $(".price span:nth-of-type(1)").css("display","inline-block");
    $(".price span:nth-of-type(2)").css("display","inline-block");
    $(".bottom button:nth-of-type(1),.bottom2 button:nth-of-type(1)").css({
        "background":"#F4F4F4",
        "color": "#7A5844",
        "cursor":"pointer"
    });
    $(".bottom button:nth-of-type(2),.bottom2 button:nth-of-type(2)").css({
        "background": "#684029",
        "color": "#fff",
        "cursor":"pointer"
    });
    $(".daohangRight i").css("display","inline-block");
    $.ajax({
        type:"post",
        url:"/bt1.do",
        data:{
            bt1:parseInt($(this).text())
        },
        success:function (data) {
            $(".size span").text(data[0].spec_size);
            $(".people span").text(data[0].spec_person);
            $(".tool span").text(data[0].spec_tools);
        }
    })
});
$(".bt5").click(function () {
    // console.log($(this).index());
    $(".sec2-tl img").attr("src","../images/lmy92.jpg");
    $(".time span").text("最早明天 09:30配送");
    $(".price span:nth-of-type(1)").text("¥750.00");
    $(".price span:nth-of-type(2)").text("/5.0磅");
    $(".size i").css("display","block");
    $(".size i").css("display","inline-block");
    $(".people").css("display","block");
    $(".tool").css("display","block");
    $(".time").css("display","block");
    $(".price span:nth-of-type(1)").css("display","block");
    $(".price span:nth-of-type(2)").css("display","block");
    $(".price span:nth-of-type(1)").css("display","inline-block");
    $(".price span:nth-of-type(2)").css("display","inline-block");
    $(".bottom button:nth-of-type(1),.bottom2 button:nth-of-type(1)").css({
        "background":"#F4F4F4",
        "color": "#7A5844",
        "cursor":"pointer"
    });
    $(".bottom button:nth-of-type(2),.bottom2 button:nth-of-type(2)").css({
        "background": "#684029",
        "color": "#fff",
        "cursor":"pointer"
    });
    $(".daohangRight i").css("display","inline-block");
    $.ajax({
        type:"post",
        url:"/bt1.do",
        data:{
            bt1:parseInt($(this).text())
        },
        success:function (data) {
            $(".size span").text(data[0].spec_size);
            $(".people span").text(data[0].spec_person);
            $(".tool span").text(data[0].spec_tools);
        }
    })
});
$(".bt6").click(function () {
    $(".sec2-tl img").attr("src","../images/lmy91.jpg");
    $(".size span").text("需订购“更多磅数”，请与客服人员联系。\n" +
        "订购电话：400 650 2121").css({
        width:"170px"
    }).addClass("more");
    $(".size i").css("display","none");
    $(".people").css("display","none");
    $(".tool").css("display","none");
    $(".time").css("display","none");
    $(".price span:nth-of-type(1)").text("");
    // $(".price span:nth-of-type(1)").css("display","none");
    $(".price span:nth-of-type(2)").text("");
    // $(".price span:nth-of-type(2)").css("display","none");
    $(".bottom button:nth-of-type(1),.bottom2 button:nth-of-type(1)").css({
        "color": "#b6b6b6",
        "background": "#F4F4F4",
        "cursor": "not-allowed"
    });
    $(".bottom button:nth-of-type(2),.bottom2 button:nth-of-type(2)").css({
        "color": "#fff",
        "background":"#b6b6b6",
        "cursor": "not-allowed"
    })
    $(".daohangRight i").css("display","none");
});


//设置选择磅数当前选中和其他的边框
$(".mid button").click(function () {
    var index=$(this).index();
    $(".mid button:nth-of-type("+index+")").addClass('addClass').siblings().removeClass("addClass");

    $(".shopSize").css("outline","none");
    $(".mid button:nth-of-type("+index+")").children().css("display","block");
    $(".mid button:nth-of-type("+index+")").siblings().children().css("display","none");
    $(".mid3 span").css("outline","none");

    //把价格导入顶部导航栏
    var h=$(".price span:nth-of-type(1)").text();
    var k=$(".price span:nth-of-type(2)").text();
    // if()
    $(".daohangRight span").text(h+k);
});

    //设置页面加载时2.0被选中状态
    $(".mid button:nth-of-type(3)").addClass('addClass').children().css("display","block");
    $(".sec1-right li:nth-of-type(1) img").css({
        outline:"1px solid #c69c6d"
    });
    //设置糕点名字下面的标签为空时隐藏
    var btArry=[];
    var c=$(".left-content2 button").length;
    // console.log(c);
    for(var i=0;i<c;i++){
        var b="";
        var m=i+1;
        b=$(".left-content2 button:nth-of-type("+m+")").text();
        //  .log(b);
        btArry.push(b)
    }
    // console.log(btArry);
    for(var k=0;k<btArry.length;k++){
        var m=k+1;
        if(btArry[k]==""){
            // console.log(btArry[k]);
            $(".left-content2 button:nth-of-type("+m+")").css("display","none");
        }
    }
    $.ajax({
        style:"get",
        url:"/begin.do",
        data:{
            name:$(".left-content1 span").text(),
        },
        success:function (data) {
            $(".left-content1 span").text(data[0].goods_id)
        }
    });


//设置换购商品部分的内容
var a=1;
$(".mid1 img").click(function () {
    $(".mid1 i").toggle();
    if(a==0){
        $(".exchangeImg").css("outline","none");
        a=1;
    }else if(a==1){
        $(".exchangeImg").css("outline"," 1px solid #684029");
        a=0;
    };
    $(".exchangeText").toggle();
});



// 设置移入商品推荐部分的效果
$(".floatL1").mouseenter(function () {
        $(this).children(0).children(1).fadeIn(500);
}).mouseleave(function () {
    $(this).children(0).find(".hidden").css("display","none");
});


// 设置点击商品推荐部分购物车图片效果
$(".hidden i").bind("click",textAndPwd_prompt_model);

//设置点击加入购物车时的效果
$(".sec2-right .bottom button:nth-of-type(2)").click(function () {
    $(".sec2-right .shopMall").fadeIn(500);
    $(".sec2-right .shopMall i").fadeIn(500);
    setTimeout(function () {
        $(".sec2-right .shopMall").fadeOut(500);
        $(".sec2-right .shopMall i").fadeOut(500);
    },4000)
    var clickTime=1;
    var $index = $(".left-content1 span").text();
    var $price =$(".price span:nth-of-type(1)").text();
    var $bang =$(".mid3 .addClass").text().substr(0,4);
    var $allPrice=$price;
    $.ajax({
        type:"post",
        url:"/addGoods.do",
        data:{
            goods_id: $index,//商品ID
            goods_bang: $bang,//商品规格
            goods_price: $price,//商品单价
            goods_num: clickTime,//商品数量
            goods_count: $allPrice,//商品总价
        }
    });
});

$(".sec2-right2 .bottom2 button:nth-of-type(2)").click(function () {
    $(".sec2-right2").css("display","none");
    $(" .shopMall2").slideDown(500);
    setTimeout(function () {
        $(".shopMall2").slideUp(500);
    },4000)
    var clickTime=1;
    var $index = $(".left-content1 span").text();
    var $price =$(".price span:nth-of-type(1)").text();
    var $bang =$(".mid3 .addClass").text().substr(0,4);
    var $allPrice=$price;
    $.ajax({
        type:"post",
        url:"/addGoods.do",
        data:{
            goods_id: $index,//商品ID
            goods_bang: $bang,//商品规格
            goods_price: $price,//商品单价
            goods_num: clickTime,//商品数量
            goods_count: $allPrice,//商品总价
        }
    });
});



//设置蛋糕名字下面小标签链接
$(".left-content2 button").click(function(){
    window.location.href=("child.html");
});

//设置直接购买的链接
$(".bottom button:nth-of-type(1)").click(function () {
    window.location.href = ("shopsCart.html");
});

//设置加入购物车时弹框里面的加入购物车链接
$(".shopMall button").click(function () {

});


//设置滚动条事件
$(document).scroll(function() {   //页面加载时，获取滚动条初始高度
    var distance = $(document).scrollTop();  //获取滚动条初始高度的值 ：0
    // console.log(distance); //打印滚动条不同高度的位置的值
    if(distance>889){
        $(".header-fixed").css("display","none");
        $(".daohanglan").css("display","block");
    }else if(distance<=889||distance==""){
        $(".daohanglan").css("display","none");
        $(".header-fixed").css("display","block");
    }
});

// 设置第二个导航栏下面选择部分的显示效果
$(".daohangRight span,.sec2-right2").mouseenter(function () {
    clearTimeout(a);
    $(".sec2-right2").slideDown(200);

});
var a;
$(".daohanglan,.sec2-right2").mouseleave(function () {
    a=setTimeout(hide,500);
});

function hide() {
    $(".sec2-right2").slideUp(200);
};

$(".daohangRight i,.sec2-right2 .bottom2:button:nth-of-type(2)").click(function () {
    $(".sec2-right2").hide();
    $(".shopMall2").slideDown();
    setTimeout(function () {
        $(".shopMall2").slideUp();
    },2000)
})

$(".shopMall2 button:nth-of-type(2)").click(function () {
    window.location.href=("shopCar.html");
})

//模态框提示函数
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