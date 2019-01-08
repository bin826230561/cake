/**
 * Created by lsdn on 2018/11/2.
 */
// 卡密可见jq
var flag=true
$(".eye-box").click(function () {
        if(flag==true){
            $(".eye-box").css({
                "background":"url(../images/hide-eye.png) center no-repeat",
                "backgroundSize":"auto 8px",
                "top":"12px"
            });
            flag=false;
        }
        else {
            $(".eye-box").css({
                "background": "url(../images/eye.png) center no-repeat",
                "backgroundSize":"auto 12px",
                "top":"10px"
            })
            flag=true
        }
})

// 充值数量jq
$(document).ready(function(){
    $(".recharge-form").each(function () {
        var _this=$(this);
        var add=$(_this).find(".plus");
        var reduce=$(_this).find(".minus")
        var num=1;
        var num_txt=$(_this).find("#recharge-money")
        console.log(num_txt)
        $(add).click(function () {
            num=$(num_txt).val();
            num=parseInt(num)+100;
            num_txt.val(num);

            $(".money-num").text("￥"+num)
        });
        $(reduce).click(function () {
            num=$(num_txt).val();
            if(num>0){
                if(num==1){
                    num--;
                    num_txt.val("1")
                    alert("充值数量至少为1")
                    $(".money-num").text("￥"+num)
                }
                else {
                    num-=100;
                    num_txt.val(num)
                    $(".money-num").text("￥"+num)
                }
            }
        })

    });

});