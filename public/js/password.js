function mm() {
    var xxm=$(".xmm input").val();
    console.log(xxm);
    var zcsr=$(".zcsr input").val();
    if (xxm==zcsr) {
        $(".icon1").css({
            display:"block"
        });
        $(".redts").css({
            opacity:"0"
        })
        $(".cdts").css({
            display:"none"
        })
    }
    else {
        $(".redts").css({
            opacity:"1"
        });
        $(".icon1").css({
            display:"none"
        })
        $(".cdts").css({
            display:"none"
        })
    }

}
$(".icon1").click(function () {
    var zcsr=$(".zcsr input").val();
    if (zcsr.length>=8&&zcsr.length<=20) {
        console.log("一致")
        $(".icon1").css({
            display:"block"
        })
        $(".cdts").css({
            display:"none"
        })
        $(".redts").css({
            opacity:"0"
        })
    }else{
        $(".cdts").css({
            display:"block"
        });
        $(".redts").css({
            opacity:"0"
        })
        $(".icon1").css({
            display:"none"
        })
    }
})