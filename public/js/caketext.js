
var dg1=$(".dg");
var g10=$(".g10");
var cw=$(".cw");
var a1=$(".a1");
var a2=document.getElementsByClassName("a2");
var a3=document.getElementsByClassName("a3");
var a4=document.getElementsByClassName("a4");
var a5=document.getElementsByClassName("a5");
var a6=document.getElementsByClassName("a6");
var a7=document.getElementsByClassName("a7");
var a8=document.getElementsByClassName("a8");
var a9=document.getElementsByClassName("a9");
var a10=document.getElementsByClassName("a10");
console.log(a2);
// var zdc=$("zdc");
// console.log(g10);
var zt=0;
function dgfl() {
    for (i=0;i<=dg1.length;i++){
        // console.log(dg1[0])
        $("#tj1").append(dg1[i]);
    }
}
//蛋糕

function dangao() {
    $("#tj1 li").remove();
    $(".zdc").css({
        display:"none"
    });
    $(".openme").css({
        display:"none"
    });
    hfbd();

    $(".one li a").css({
        color:"#684029"
    });
    $(".dgsz").css({
        color:"#bb9772"
    });

    $(".dg").css({
        display:"block",
        // float:"left"
    });

    dgfl();

    $(".py").css({
        display:"none"
    });
    $(".g10").css({
        display:"none"
    })
    $(".cw").css({
        display:"none"
    });
    $(".lp").css({
        display:"none"
    })
    $(".mb").css({
        display:"none"
    })
    $(".size").css({
        display:"none"
    });
    $(".xx").css({
        display:"none"
    })
    zt=1;
}
//冰淇淋

function bjl() {
    $(".zdc").css({
        display:"block",
        opacity:"0.2"
    });
    $(".one li a").css({
        color:"#684029"
    });
    $("#binjilin").css({
        color:"rgb(187, 151, 114)"
    });
    $(".openme").css({
        display:"none"
    });
    $("#tj1 li").remove();
    for (i=0;i<=g10.length;i++){
        // console.log(dg1[0])
        // $("#tj1").html(null);
        $("#tj1").append(g10[i]);
    }
    $(".size").css({
        display:"none"
    });
    $(".g10").css({
        display:"block"
    });
    $(".py").css({
        display:"none"
    });
    $(".dg").css({
        display:"none"
    })
    $(".cw").css({
        display:"none"
    });
    $(".lp").css({
        display:"none"
    })
    $(".mb").css({
        display:"none"
    })
    $(".xx").css({
        display:"none"
    })
    qxbd();
    zt=2;

}
//咖啡下午茶
function kaf() {
    $(".zdc").css({
        display:"block",
        opacity:"0.2"
    });
    $(".one li a").css({
        color:"#684029"
    });
    $(".kafsz").css({
        color:"#bb9772"
    });
    $(".openme").css({
        display:"none"
    });
    $(".py").css({
        display:"block"
    });
    $(".g10").css({
        display:"none"
    });
    $(".dg").css({
        display:"none"
    })
    $(".cw").css({
        display:"none"
    });
    $(".lp").css({
        display:"none"
    })
    $(".mb").css({
        display:"none"
    })
    $(".xx").css({
        display:"none"
    })
    $(".size").css({
        display:"none"
    });
    qxbd();
    zt=3
}
// 常温蛋糕
function cwdg() {
    $(".zdc").css({
        display:"block",
        opacity:"0.2"
    });
    $(".one li a").css({
        color:"#684029"
    });
    $(".cwdgsz").css({
        color:"#bb9772"
    });
    $(".openme").css({
        display:"none"
    });
    // $("#tj1 li").remove();
    // for (i=0;i<=g10.length;i++){
    //
    //     $("#tj1").append(cw[i]);
    // }
    $(".cw").css({
        display:"block"
    });
    $(".g10").css({
        display:"none"
    });
    $(".dg").css({
        display:"none"
    })
    $(".lp").css({
        display:"none"
    });
    $(".py").css({
        display:"none"
    })
    $(".mb").css({
        display:"none"
    })
    $(".xx").css({
        display:"none"
    })
    $(".size").css({
        display:"none"
    });
    qxbd();
    zt=4;
}
//设计师礼品
function sjs() {
    $(".zdc").css({
        display:"block",
        opacity:"0.2"
    });
    $(".one li a").css({
        color:"#684029"
    });
    $(".sjssz").css({
        color:"#bb9772"
    });
    $(".openme").css({
        display:"none"
    });
    $(".lp").css({
        display:"block"
    });
    $(".g10").css({
        display:"none"
    });
    $(".dg").css({
        display:"none"
    })
    $(".cw").css({
        display:"none"
    });
    $(".py").css({
        display:"none"
    })
    $(".mb").css({
        display:"none"
    })
    $(".xx").css({
        display:"none"
    })
    $(".size").css({
        display:"none"
    });
    qxbd();
    zt=5
}
// 面包
function mb() {
    $(".zdc").css({
        display:"block",
        opacity:"0.2"
    });
    $(".one li a").css({
        color:"#684029",
        cursor: "pointer"
    });
    $(".mbsz").css({
        color:"#bb9772"
    });
    $(".openme").css({
        display:"none"
    });
    $(".mb").css({
        display:"block"
    });
    $(".g10").css({
        display:"none"
    });
    $(".dg").css({
        display:"none"
    })

    $(".cw").css({
        display:"none"
    });
    $(".py").css({
        display:"none"
    })
    $(".lp").css({
        display:"none"
    })
    $(".xx").css({
        display:"none"
    })
    $(".size").css({
        display:"none"
    });
    qxbd();
    zt=6
}
//========================二级分类===============================
// 全部
function qb() {
    dangao();
    $(".one li a").css({
        color:"#684029"
    });
    $(".qbsz").css({
        color:"#bb9772"
    });

    // $("#tj1 li").remove();
    $(".zdc").css({
        display:"block",
        opacity:"0.2"
    });
    $(".rz").css({
        display:"block"
    });
    $(".one li a").css({
        color:"#684029"
    });
    $(".sjssz").css({
        color:"#bb9772"
    });

    $(".openme").css({
        display:"block"
    });
    $(".lp").css({
        display:"block"
    });
    $(".g10 ").css({
        display:"block"
    });
    $(".rzck").css({
        display:"block"
    });
    $(".dg li").css({
        display:"block"
    })
    $(".dg1").css({
        display:"block"
    });
    $(".cw").css({
        display:"block"
    });
    $(".py").css({
        display:"block"
    })
    $(".py li").css({
        display:"block"
    })
    $(".mb").css({
        display:"block"
    })
    $(".xx").css({
        display:"block"
    })
    $(".size").css({
        display:"block"
    });

    zt=7;
    console.log(zt)

}
function qb1(){
    if (zt==1){
        dgfl();
    }else if (zt==2) {
        bjl()
        // $(".b").css({color:"#BBBBBB"});
    }else if (zt==3) {
        kaf()
        // $(".b").css({color:"#BBBBBB"});
    }else if (zt==4) {
        cwdg()
        // $(".b").css({color:"#bbbbbb"});
    }else if (zt==5) {
        sjs()
        // $(".b").css({color:"#bbbbbb"});
    }else if (zt==6) {
        mb()
        // $(".b").css({color:"#bbbbbb"});
    }
}
//乳脂奶油

function rz() {
    $(".kw li a").css({
        color:"#684029"
    });
    $(".a2").css({
        color:"#bb9772"
    });
    dgfl();
    var rz=$(".rz");
    var arr1=[];

    $("#tj1 li").remove();

    for(var i=1;i<=rz.length;i++){
        console.log(rz[i]);
        // $("#tj1").replaceWith(rz[i])
        arr1[i]=rz[i];
        // console.log(arr);
        $("#tj1").append(arr1)
    }

}
//    慕斯
function ms() {
    $(".kw li a").css({
        color:"#684029"
    });
    $(".a3").css({
        color:"#bb9772"
    });
    dgfl();
    var ms=$(".ms");
    console.log(ms);
    var arr2=[];
    $("#tj1 li").remove();
    for(var i=1;i<=ms.length;i++){
        console.log(ms[i]);
        // $("#tj1").replaceWith(rz[i])
        arr2[i]=ms[i];
        // console.log(arr);
        $("#tj1").append(arr2)
    }
}
//    乳酪
function rl() {
    $(".kw li a").css({
        color:"#684029"
    });
    $(".a4").css({
        color:"#bb9772"
    });
    dgfl();
    var rl=$(".rl");
    console.log(rl);
    var arr3=[];
    $("#tj1 li").remove();
    for(var i=1;i<=rl.length;i++){
        console.log(rl[i]);
        // $("#tj1").replaceWith(rz[i])
        arr3[i]=rl[i];
        // console.log(arr);
        $("#tj1").append(arr3)
    }
}
// 巧克力
function qkl() {
    $(".kw li a").css({
        color:"#684029"
    });
    $(".a5").css({
        color:"#bb9772"
    });
    dgfl();
    var qkl=$(".qkl");
    console.log(qkl);
    var arr4=[];
    $("#tj1 li").remove();
    for(var i=1;i<=qkl.length;i++){
        console.log(qkl[i]);
        // $("#tj1").replaceWith(rz[i])
        arr4[i]=qkl[i];
        // console.log(arr);
        $("#tj1").append(arr4)
    }
}
//    坚果
function jg() {
    $(".kw li a").css({
        color:"#684029"
    });
    $(".a6").css({
        color:"#bb9772"
    });
    dgfl();
    var jg=$(".jg");
    console.log(jg);
    var arr5=[];
    $("#tj1 li").remove();
    for(var i=1;i<=jg.length;i++){
        console.log(jg[i]);
        // $("#tj1").replaceWith(rz[i])
        arr5[i]=jg[i];
        // console.log(arr);
        $("#tj1").append(arr5)
    }
}
//    水果
function sg() {
    $(".kw li a").css({
        color:"#684029"
    });
    $(".a7").css({
        color:"#bb9772"
    });
    dgfl();
    var sg=$(".sg");
    console.log(sg);
    var arr6=[];
    $("#tj1 li").remove();
    for(var i=1;i<=sg.length;i++){
        console.log(sg[i]);
        // $("#tj1").replaceWith(rz[i])
        arr6[i]=sg[i];
        // console.log(arr);
        $("#tj1").append(arr6)
    }
}
//    含酒
function hj() {
    $(".kw li a").css({
        color:"#684029"
    });
    $(".a8").css({
        color:"#bb9772"
    });
    dgfl();
    var hj=$(".hj");
    console.log(hj);
    var arr7=[];
    $("#tj1 li").remove();
    for(var i=1;i<=hj.length;i++){
        console.log(hj[i]);
        // $("#tj1").replaceWith(rz[i])
        arr7[i]=hj[i];
        // console.log(arr);
        $("#tj1").append(arr7)
    }
}
//    咖啡
function kf() {
    $(".kw li a").css({
        color:"#684029"
    });
    $(".a9").css({
        color:"#bb9772"
    });
    dgfl();
    var kf=$(".kf");
    console.log(kf);
    var arr8=[];
    $("#tj1 li").remove();
    for(var i=1;i<=kf.length;i++){
        console.log(kf[i]);
        // $("#tj1").replaceWith(rz[i])
        arr8[i]=kf[i];
        // console.log(arr);
        $("#tj1").append(arr8)
    }
}
//    冰淇淋
function bql() {

    $(".kw li a").css({
        color:"#684029"
    });
    $(".a10").css({
        color:"#bb9772"
    });
    dgfl();
    var bql=$(".bql");
    console.log(bql);
    var arr9=[];
    $("#tj1 li").remove();
    for(var i=1;i<=bql.length;i++){
        console.log(bql[0]);
        // $("#tj1").replaceWith(rz[i])
        arr9[i]=bql[0];
        // console.log(arr);
        $("#tj1").append(arr9)
    }
    $(".size").css({
        display:"none"
    });
}
function qxbd() {
    // a1.onclick=null;
    $(".b1").css({color:"#BBBBBB"});
    a2.onclick=null
    // a3.onclick=bull;
    // a4.onclick=bull;
    // a5.onclick=bull;
    // a6.onclick=bull;
    // a7.onclick=bull;
    // a8.onclick=bull;
    // a9.onclick=bull;
    // a10.onclick=bull;
}
function hfbd() {
    a1.onclick=function (){rz()};
    $(".b1").css({color:"#684029"});
    // a2.onclick=bull;
    // a3.onclick=bull;
    // a4.onclick=bull;
    // a5.onclick=bull;
    // a6.onclick=bull;
    a7.onclick=null;
    a8.onclick=null;
    a9.onclick=null;
    a10.onclick=null;
}
//冰淇淋、面包等加入购物车成功
/*===========================购物车加入成功==================*/
$(".gwcg").on({
    "click":function () {
        $(".dangao-li").after("<div class=\"inner-addBuySuccess\">\n" +
            "                        <div>\n" +
            "                            <p><i class=\"iconfont\"></i>成功加入购物车</p>\n" +
            "                        </div>\n" +
            "                        <a href='../pages/shopsCart.html'><button> 查看购物车</button></a>\n" +
            "                    </div>")
    }
});
$("body").on(
    "click",".gwcg",function () {
        var inner=$(this).parent().next();
        console.log(inner)
        $(this).parent().parent().next().slideDown(600);
        function qwe(){
            inner.slideUp(600)
        }
        setTimeout(qwe,2000);
    }
);
