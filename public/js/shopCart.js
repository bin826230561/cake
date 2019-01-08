/**
 * Created by lsdn on 2018/11/2.
 */
$(document).ready(function(){
    $(".scene_area").each(function () {
        var _this=$(this);
        var add=$(_this).find(".plus-button");
        var reduce=$(_this).find(".minus");
        var num=1;
        var num_txt=$(_this).find(".orderbuy");
        var single=document.getElementsByClassName("cart-unit-Price");
        var price=$(single).text().split("¥")
        console.log(price[1]);
        $(add).click(function () {
            $(".minus").attr("disabled",false);
            num=$(num_txt).val();
            num++;
            num_txt.val(num);

            $(".money").text("¥"+price[1]*num+".00")

            $(".cart-total-detail li:first-child").text("商品金额：¥ "+price[1]*num+".00")
            $(".cart-total span span").text(price[1]*num+".00")

        });
        $(reduce).click(function () {
            num=$(num_txt).val();
            if(num>0){
                if(num==1){
                    num--;
                    num_txt.val("1")

                    $(".money").text("¥"+price[1])
                    $(".cart-total-detail li:first-child").text("商品金额：¥ "+price[1]*num+".00")
                    $(".cart-total span span").text(price[1]*num+".00")
                }
                else {
                    num--;
                    num_txt.val(num)

                    $(".money").text("¥"+price[1]*num+".00")
                    $(".cart-total-detail li:first-child").text("商品金额：¥ "+price[1]*num+".00")
                    $(".cart-total span span").text(price[1]*num+".00")
                }
            }
        })
    });
    $(".delete a").click(function () {
        $(".scene_area").remove();
    })
});