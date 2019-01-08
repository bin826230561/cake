$(function () {
    loadShopPage();
    function loadShopPage() {
        $.ajax({
            type: "post",
            url: "/loadGoodsCar.do",
            success: function (data) {
                if (data.length == 0) {
                    $(".content-box .loadGoods").html(" <div class=\"cart-not-pro\">\n" +
                        "    <img src=\"../images/cartempty.png\">\n" +
                        "    <span>\n" +
                        "    您的购物车里还没有商品\n" +
                        "    </span>\n" +
                        "    <a href=\"/caketext-1\">\n" +
                        "    去购物 &gt;&gt;\n" +
                        "    </a>\n" +
                        "    </div>")
                } else {
                    var goodsAllPrice = 0;
                    $(".content-box .loadGoods").html("<div class=\"cart-goods-info cart-area cart-list\">\n" +
                        "        <ul class=\"thead-ul\">\n" +
                        "            <li class=\"goods-ti\">商品</li>\n" +
                        "            <li class=\"birthday-card-ti\">生日牌</li>\n" +
                        "            <li class=\"unit-Price\">单价</li>\n" +
                        "            <li class=\"number-ti\">数量</li>\n" +
                        "            <li class=\"money-ti\" colspan=\"2\">金额</li>\n" +
                        "        </ul>\n" +
                        "        <div class=\"tbody-ul\">\n" +
                        "            <table>\n" +
                        "                <!-- 加价购开始 -->\n" +
                        "                <!-- 普通商品开始 -->\n" +
                        "                <tbody>\n" +
                        "                <tr id=\"recommend\">\n" +
                        "                    <td colspan=\"7\" class=\"tableware-list\">\n" +
                        "                        <ul>\n" +
                        "                            <li class=\"tableware-row\">\n" +
                        "                                <img src=\"../images/lazu.jpg\" alt=\"方形蜡烛\">\n" +
                        "                                <div class=\"right-title\">\n" +
                        "                                    <h5>\n" +
                        "                                        方形蜡烛\n" +
                        "                                        <span>\n" +
                        "                                            配件\n" +
                        "                                        </span>\n" +
                        "                                    </h5>\n" +
                        "                                    <span>\n" +
                        "                                        ￥5.00\n" +
                        "                                    </span>\n" +
                        "                                    <a href=\"javascript:void(0);\" class=\"action-add-to-cart\" name=\"action-add-to-cart_1977\" data-product_id=\"1977\" title=\"加入购物车\">\n" +
                        "                                        <i></i>\n" +
                        "                                    </a>\n" +
                        "                                </div>\n" +
                        "                            </li>\n" +
                        "                            <li class=\"tableware-row\">\n" +
                        "                                <img src=\"../images/daocha.jpg\" alt=\"餐具套餐\">\n" +
                        "                                <div class=\"right-title\">\n" +
                        "                                    <h5>\n" +
                        "                                        餐具套餐\n" +
                        "                                        <span>\n" +
                        "                                            配件\n" +
                        "                                        </span>\n" +
                        "                                    </h5>\n" +
                        "                                    <span>\n" +
                        "                                        ￥0.50\n" +
                        "                                    </span>\n" +
                        "                                    <a href=\"javascript:void(0);\" class=\"action-add-to-cart\" name=\"action-add-to-cart_1965\" data-product_id=\"1965\" title=\"加入购物车\">\n" +
                        "                                        <i></i>\n" +
                        "                                    </a>\n" +
                        "                                </div>\n" +
                        "                            </li>\n" +
                        "                            <li>\n" +
                        "                                <img src=\"../images/lazhuLv.jpg\" alt=\"拷贝蜡烛-爱尔兰咖啡\">\n" +
                        "                                <div class=\"right-title\">\n" +
                        "                                    <h5>\n" +
                        "                                        拷贝蜡烛-爱尔兰咖啡\n" +
                        "                                    </h5>\n" +
                        "                                    <span>\n" +
                        "                                        ￥8.00/个\n" +
                        "                                    </span>\n" +
                        "                                    <a href=\"javascript:void(0);\" class=\"action-add-to-cart\" name=\"action-add-to-cart_10846\" data-product_id=\"10846\" title=\"加入购物车\">\n" +
                        "                                        <i></i>\n" +
                        "                                    </a>\n" +
                        "                                </div>\n" +
                        "                            </li>\n" +
                        "                            <li>\n" +
                        "                                <img src=\"../images/bao4.jpg\" alt=\"四口味挂耳咖啡混合装（4包入）\">\n" +
                        "                                <div class=\"right-title\">\n" +
                        "                                    <h5>\n" +
                        "                                        四口味挂耳咖啡混合装（4包入）\n" +
                        "                                    </h5>\n" +
                        "                                    <span>\n" +
                        "                                        ￥40.00/份\n" +
                        "                                    </span>\n" +
                        "                                    <a href=\"javascript:void(0);\" class=\"action-add-to-cart\" name=\"action-add-to-cart_12799\" data-product_id=\"12799\" title=\"加入购物车\">\n" +
                        "                                        <i></i>\n" +
                        "                                    </a>\n" +
                        "                                </div>\n" +
                        "                            </li>\n" +
                        "                        </ul>\n" +
                        "                    </td>\n" +
                        "                </tr>\n" +
                        "                </tbody>\n" +
                        "            </table>\n" +
                        "        </div>\n" +
                        "    </div>");

                    /*加载配件商品*/
                    $.ajax({
                        type: "post",
                        url: "/smallGoods.do",
                        success: function (data) {
                            var $li = $("#recommend td ul li");
                            for (var i = 0; i < $li.length; i++) {
                                if (i == 0) {
                                    $li.eq(i).children("img").attr({
                                        "alt": data[53].goods_name,
                                        "src": data[53].goods_img,
                                        "true": data[53].goods_id
                                    });
                                    $li.eq(i).children(".right-title").children("h5").html(data[53].goods_name + "<span>配件</span>");
                                    $li.eq(i).children(".right-title").children("h5").next("span").text("￥" + data[53].goods_price + ".00")
                                } else if (i == 1) {
                                    $li.eq(i).children("img").attr({
                                        "alt": data[51].goods_name,
                                        "src": data[51].goods_img,
                                        "true": data[51].goods_id
                                    });
                                    $li.eq(i).children(".right-title").children("h5").html(data[51].goods_name + "<span>配件</span>");
                                    $li.eq(i).children(".right-title").children("h5").next("span").text("￥" + data[51].goods_price + ".00")
                                } else if (i == 2) {
                                    $li.eq(i).children("img").attr({
                                        "alt": data[56].goods_name,
                                        "src": data[56].goods_img,
                                        "true": data[56].goods_id
                                    });
                                    $li.eq(i).children(".right-title").children("h5").html(data[56].goods_name + "<span>配件</span>");
                                    $li.eq(i).children(".right-title").children("h5").next("span").text("￥" + data[56].goods_price + ".00")
                                } else if (i == 3) {
                                    $li.eq(i).children("img").attr({
                                        "alt": data[55].goods_name,
                                        "src": data[55].goods_img,
                                        "true": data[55].goods_id
                                    });
                                    $li.eq(i).children(".right-title").children("h5").html(data[55].goods_name + "<span>配件</span>");
                                    $li.eq(i).children(".right-title").children("h5").next("span").text("￥" + data[55].goods_price + ".00")
                                }
                            }
                        }
                    })

                    /*动态数据部分*/
                    for (var i = 0; i < data.length; i++) {
                        $("#recommend").before("<tr id=\"goods_9_263\" class=\"cart-object-item scene_area \">\n" +
                            "                    <td class=\"goods-img\" style=\"border: none;\">\n" +
                            "                        <a href=\"/product-263.html\" target=\"_blank\" style=\"border: none;\">\n" +
                            "                            <img src=" + data[i].goods_img + " true=" + data[i].goods_id + " >\n" +
                            "                        </a>\n" +
                            "                    </td>\n" +
                            "                    <td class=\"goods-cake\" style=\"border: none;\">\n" +
                            "                        <div>\n" +
                            "                            <h4 class=\"cart-title\">\n" +
                            "                                <a href=\"/product-263.html\" target=\"_blank\" style=\"border: none;color: #684029;\">\n" +
                            "                                    " + data[i].goods_name + "\n" +
                            "                                </a>\n" +
                            "                            </h4>\n" +
                            "                            <span class=\"goods-spec\">\n" +
                            "                                规格：\n" +
                            "                                <span>\n" +
                            "                                    " + data[i].goods_bang + "\n" +
                            "                                </span>\n" +
                            "                            </span>\n" +
                            "                            <span class=\"goods-laid\">\n" +
                            "                                <i></i>\n" +
                            "                                赠送\n" +
                            "                                <ins>\n" +
                            "                                    &nbsp;10&nbsp;\n" +
                            "                                </ins>\n" +
                            "                                套餐具\n" +
                            "                            </span>\n" +
                            "                        </div>\n" +
                            "                    </td>\n" +
                            "                    <td class=\"select-birthday-td\" style=\"border: none;\">\n" +
                            "                        <div class=\"select-birthday\" data-spec=\"2.0磅\" data-num=\"0\">\n" +
                            "                            <input type=\"hidden\" name=\"birthday_card[263]\" value=\"\" data-name=\"A Picture of Durian Grey  榴莲飘飘\">\n" +
                            "                            <!--<div class=\"action-birthday_card\">-->\n" +
                            "                                <select  id=\"\" class=\"action-birthday_card\">\n" +
                            "                                    <option>请选择生日牌</option>\n" +
                            "                                    <option>生日快乐</option>\n" +
                            "                                    <option>Happy Birthday</option>\n" +
                            "                                    <option>节日快乐</option>\n" +
                            "                                    <option>自定义</option>\n" +
                            "                                </select>\n" +
                            "                            </ul>\n" +
                            "                        </div>\n" +
                            "                    </td>\n" +
                            "                    <td class=\"cart-unit-Price\" style=\"border: none;\">" + data[i].goods_price + "</td>\n" +
                            "                    <td class=\"number-li\" style=\"border: none;\">\n" +
                            "                        <div class=\"number quantity-update addcount\">\n" +
                            "                            <input type=\"button\" class=\"minus minus-button\">\n" +
                            "                            <input type=\"text\" class=\"quantity _quantity orderbuy\" name=\"quantity[goods_9_263]\" data-indent=\"goods_9_263\" data-price=\"298.000\" data-max=\"99\" value=" + data[i].shopcar_num + ">\n" +
                            "                            <input type=\"button\" class=\"plus plus-button\">\n" +
                            "                        </div>\n" +
                            "                    </td>\n" +
                            "                    <td class=\"money\" id=\"total_amount_goods_9_263\" style=\"border: none;\">" + data[i].goods_count + "</td>\n" +
                            "                    <td class=\"delete\" style=\"border: none;\">\n" +
                            "                        <a href=\"#\" data-indent=\"goods_9_263\" style=\"border: none;\">\n" +
                            "                            <i></i>\n" +
                            "                        </a>\n" +
                            "                    </td>\n" +
                            "                </tr>")

                        goodsAllPrice += parseInt(data[i].goods_count.split("￥")[1]);
                    }
                    $(".tbody-ul").after("<div class=\"cart-submit cart-area\">\n" +
                        "        <a href=\"javascipt:void(0);\" class=\"cart-submit-empty\" style=\"color: #684029;\">\n" +
                        "            <i></i>\n" +
                        "            全部清空\n" +
                        "        </a>\n" +
                        "        <ul class=\"cart-total-detail\">\n" +
                        "            <li>商品金额：￥" + goodsAllPrice + ".00</li>\n" +
                        "            <li>\n" +
                        "                配送费：¥ 0.00\n" +
                        "            </li>\n" +
                        "            <li>\n" +
                        "                活动优惠：¥ 0.00\n" +
                        "            </li>\n" +
                        "        </ul>\n" +
                        "        <div class=\"cart-total\">\n" +
                        "            <span>合计：<span>￥" + goodsAllPrice + ".00</span></span>\n" +
                        "        </div>\n" +
                        "        <span class=\"cart-balance\" id=\"cost-freight-tip\">\n" +
                        "            订单已满￥100元,享免费配送服务\n" +
                        "        </span>\n" +
                        "        <div class=\"cart-submit-button\">\n" +
                        "            <a href=\"javascript:void(0);\" name=\"action-submit-btn\" id=\"action-submit-btn\">\n" +
                        "                去结算\n" +
                        "            </a>\n" +
                        "        </div>\n" +
                        "    </div>")
                }

                /*去结算做判断是否登录*/
                $("#action-submit-btn").click(function () {
                    if (localStorage.getItem("u_phone") == undefined || localStorage.getItem("u_phone") == null) {
                        $(this).attr("href", "/loginPage.do");

                    }else {
                        $(this).attr("href", "/goPay");
                    }
                });














                /*增加商品*/
                $(".plus-button").each(function (index, element) {
                    $(element).on("click", function () {
                        var $shopCar_num = $(this).prev().val();
                        $shopCar_num++;
                        var $goods_count = parseInt($(this).parent().parent().prev().text().split("￥")[1]);
                        var $goods_count = $goods_count * $shopCar_num;
                        var $goods_count = "￥" + $goods_count + ".00";
                        var $thisGoodsId = $(this).parent().parent().parent().children().eq(0).children().children("img").attr("true");
                        $.ajax({
                            type: "post",
                            url: "/addGoodsLoad_return.do",
                            data: {
                                thisGoodsId: $thisGoodsId,
                                shopCar_num: $shopCar_num,
                                goods_count: $goods_count
                            },
                            success: function (data) {
                                loadShopPage();
                            }
                        })
                    })
                })

                /*添加配件*/
                $(".action-add-to-cart").each(function (index, element) {
                    var clickTime = 1;
                    $(element).click(function () {
                        var $goods_id = parseInt($(this).parent().prev("img").attr("true"));
                        var $price = $(this).prev().text();
                        if ($(this).attr("done") == undefined) {
                            $(this).attr("done", "true");
                            var $allPrice = parseInt($price.split("￥")[1]) * clickTime;
                            var $allPrice = "￥" + $allPrice + ".00";
                            $.ajax({
                                type: "post",
                                url: "/addGoods.do",
                                data: {
                                    goods_id: $goods_id,//商品ID
                                    goods_bang: $price,//商品规格
                                    goods_price: $price,//商品单价
                                    goods_num: clickTime,//商品数量
                                    goods_count: $allPrice,//商品总价
                                },
                                success: function (data) {
                                    loadShopPage();
                                    /*这是为了刷新购物车的商品数量(无需刷新)*/
                                    $.ajax({
                                        url: "/getCount.do",
                                        success: function (data) {
                                            var goodsCount = data[0].num;
                                            if (goodsCount > 0) {
                                                $(".buy-cart").children("span").show();
                                                $(".buy-cart").children("span").children("span").text(goodsCount);
                                            } else {
                                                $(".buy-cart").children("span").hide();
                                            }
                                        }
                                    })
                                }
                            })
                        } else {
                            clickTime++;
                            var $allPrice = parseInt($price.split("￥")[1]) * clickTime;
                            var $allPrice = "￥" + $allPrice + ".00";
                            console.log(clickTime)
                            console.log($allPrice)
                            // var $goods_id =parseInt($(this).parent().prev("img").attr("true"));
                            // var $price = $(this).parent().prev().prev().text().split("/")[0];
                            // var $price=parseInt(($price).split("￥")[1]);
                            // var $allPrice=$price*clickTime;
                            // var $allPrice="￥"+$price*clickTime+".00";
                            $.ajax({
                                type: "post",
                                url: "/changeGoodsNum.do",
                                data: {
                                    goods_id: $index,//商品ID
                                    goods_num: clickTime,//商品数量
                                    goods_count: $allPrice,//商品总价
                                },
                                success: function (data) {
                                    // cosnole.log(data)
                                }
                            })
                        }
                    })
                })


                /*减少商品*/
                $(".minus-button").each(function (index, element) {
                    $(element).on("click", function () {
                        var $shopCar_num = $(this).next().val();
                        $shopCar_num--;
                        var $goods_count = parseInt($(this).parent().parent().prev().text().split("￥")[1]);
                        var $goods_count = $goods_count * $shopCar_num;
                        var $goods_count = "￥" + $goods_count + ".00";
                        var $thisGoodsId = $(this).parent().parent().parent().children().eq(0).children().children("img").attr("true");
                        $.ajax({
                            type: "post",
                            url: "/reduceGoodsLoad_return.do",
                            data: {
                                thisGoodsId: $thisGoodsId,
                                shopCar_num: $shopCar_num,
                                goods_count: $goods_count
                            },
                            success: function (data) {
                                loadShopPage();
                            }
                        })
                    })
                })

                /*删除购物车商品*/
                $(".delete a i").each(function (index, element) {
                    $(element).on("click", function () {
                        var $thisGoodsId = $(this).parent().parent().parent().children().eq(0).children().children("img").attr("true");
                        $.ajax({
                            type: "post",
                            url: "/deleteGoodsLoad_return.do",
                            data: {
                                thisGoodsId: $thisGoodsId
                            },
                            success: function (data) {
                                loadShopPage();
                                $.ajax({
                                    url: "/getCount.do",
                                    success: function (data) {
                                        var goodsCount = data[0].num;
                                        if (goodsCount > 0) {
                                            $(".buy-cart").children("span").show();
                                            $(".buy-cart").children("span").children("span").text(goodsCount);
                                        } else {
                                            $(".buy-cart").children("span").hide();
                                        }
                                    }
                                })
                            }
                        })
                    })
                })

                /*清除所有购物车商品*/
                $(".cart-submit-empty").each(function (index, element) {
                    $(element).on("click", function () {
                        $.ajax({
                            type: "post",
                            url: "/deleteAllGoods.do",
                            success: function (data) {

                                $(".content-box .loadGoods").html(" <div class=\"cart-not-pro\">\n" +
                                    "    <img src=\"../images/cartempty.png\">\n" +
                                    "    <span>\n" +
                                    "    您的购物车里还没有商品\n" +
                                    "    </span>\n" +
                                    "    <a href=\"/caketext-1\">\n" +
                                    "    去购物 &gt;&gt;\n" +
                                    "    </a>\n" +
                                    "    </div>")
                                $.ajax({
                                    url: "/getCount.do",
                                    success: function (data) {
                                        var goodsCount = data[0].num;
                                        if (goodsCount > 0) {
                                            $(".buy-cart").children("span").show();
                                            $(".buy-cart").children("span").children("span").text(goodsCount);
                                        } else {
                                            $(".buy-cart").children("span").hide();
                                        }
                                    }
                                })
                            }
                        })
                    })
                })

                /*点击+ 减号变颜色*/
                $(".orderbuy").each(function (index, element) {
                    if ($(element).val() > 1) {
                        $(element).prev().css({
                            backgroundPosition: "-252px -108px"
                        })
                    } else {
                        $(element).prev().css({
                            backgroundPosition: "-252px -96px"
                        })
                        $(element).prev().attr({
                            disabled: "true"
                        })
                    }
                })
            }
        })


    }

})
