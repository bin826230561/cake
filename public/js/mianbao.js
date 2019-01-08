/*===========================购物车加入成功==================*/
$(".gwcg").on({
    "click":function () {
        $(".dangao-li").after("<div class=\"inner-addBuySuccess\">\n" +
            "                        <div>\n" +
            "                            <p><i class=\"iconfont\"></i>成功加入购物车</p>\n" +
            "                        </div>\n" +
            "                        <a href='/shopCar'><button>查看购物车<button></a>\n" +
            "                    </div>")
    }
});
$("body").on(
    "click",".gwcg",function () {
        var inner=$(this).parent().next();
        $(this).parent().parent().next().slideDown(600);
        function qwe(){
            inner.slideUp(600)
        }
        setTimeout(qwe,2000);
    }
);
