/**
 * Created by lsdn on 2018/11/1.
 */
$(".button").click(function () {
    $(this).css({
        "display":"none"
    }),
    $(".number-select").css({
        "display":"block"
    })
});

// <div>
// <input type="button" data-bn="20180407-10" class="minus-button" value="-" style="border: none;border-right: 1px solid #D5BFA7;">
// <input type="text" name="quantity[20180407-10]" id="quantity_20180407-18" data-bn="20180407-10" data-price="40.00" value="1">
//  <input type="button" data-bn="20180407-10" class="plus-button" value="+" style="border: none;border-left: 1px solid #D5BFA7;">
//  </div>

$(function(){
    $(".addcount").each(function () {
        var _this=$(this);
        var add=$(_this).find(".plus-button");
        var reduce=$(_this).find(".minus-button")
        var num=1;
        var num_txt=$(_this).find(".orderbuy");

        // console.log(good.length)
        // console.log(num_txt)
        $(add).on("click",function () {
                num=$(num_txt).val();
                num++;
                num_txt.val(num);

                setTotal();
            });
        $(reduce).on("click",function () {
            num=$(num_txt).val();
            if(num>0){
                if(num==1){
                    num--;
                    num_txt.val("1");

                    setTotal();
                }
                else {
                    num--;
                    num_txt.val(num);

                    setTotal();
                }
            }
        });
        function setTotal() {
            var sum=0;
            $(".national-pro-list li").each(function (index,element) {
                // $(element).on("click",function () {
                    var num=parseInt($(this).find("input[class*=orderbuy]").val());
                    var price=$(this).children().children("p").text();
                    var price1=price.split("¥",2);
                    var price2=price1[1].split("/")[0];
                    sum=sum+price2*num;

                    console.log(sum);
                })
            $("#item_cost").html(sum.toFixed(2));
            $("#total_amount").html(sum.toFixed(2));
            // })
    }
    setTotal();
    })

});

function but() {
    window.location.href="/zhiFuFangShi"
}