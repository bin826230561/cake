const orderDao=require("../dao/orderDao");

const orderCenter={
    addDing(req,resp){
        let username=req.body.username;
        let time=req.body.time;
        let orderNumber=req.body.orderNumber;
        let address=req.body.address;
        let bothMoney=req.body.bothMoney;
        orderDao.addDing([null,username,orderNumber,address,2,time,bothMoney])
            .then(function (data) {
                orderDao.selectShop([username]).then(function (data){
                    for (let i=0;i<data.length;i++) {
                        orderDao.addShop([null,data[i].goods_id,data[i].shopcar_num,data[i].goods_count,data[i].goods_bang])
                            .then(function (data) {
                                orderDao.deleteShop([username])
                                    .then(function (data) {

                                    },function (err) {
                                        console.log(err)
                                    })
                        },function (err) {
                            console.log(err)
                        })
                    }

                },function (err) {
                    console.log(err);
                })
            },function (err) {
                console.log(err);
            });
    },
    forDing(req,resp){
        resp.render("my-dingDan");
    },

    // 在页面添加数据
    loadDing(req,resp){
        orderDao.localShop([req.body.username])
            .then(function (data) {
                // console.log(data);
                resp.send(data);

            },function (err) {
                console.log(err)
            })
    },
    // 查找订单
    searchD(req,resp){
        var inputNum=parseInt(req.body.inputNum);
        orderDao.searchDan([req.body.username,inputNum])
            .then(function (data) {
                // console.log(data);
                resp.send(data);

            },function (err) {
                console.log(err)
            })
    },
    // 查找订单详情
    detailInput(req,resp){
        var inputNum=parseInt(req.body.inputNum);
        orderDao.detailInput([inputNum,req.body.username])
            .then(function (data) {
                resp.send(data);
            },function (err) {
                console.log(err)
            })
    },
    // 近一个月订单
    nearTime(req,resp){
        orderDao.nearTime([req.body.username])
            .then(function (data) {
                // console.log(data);
                resp.send(data);

            },function (err) {
                console.log(err)
            })
    },
    neardetail(req,resp){
        orderDao.neardetail([req.body.username])
            .then(function (data) {
                resp.send(data);
            },function (err) {
                console.log(err)
            })
    },
    // 未完成订单
    noFinish(req,resp){
        orderDao.noFinish([req.body.username])
            .then(function (data) {
                resp.send(data);
            },function (err) {
                console.log(err)
            })
    },
    nodetail(req,resp){
        orderDao.nodetail([req.body.username])
            .then(function (data) {
                resp.send(data);
            },function (err) {
                console.log(err)
            })
    },
    // 加载订单详情表
    detailCheck(req,resp){
        orderDao.detailCheck([req.body.username])
            .then(function (data) {
                // console.log(data);
                resp.send(data);
            },function (err) {
                console.log(err)
            })
    },
    // 删除订单
    deleteDingD(req,resp){

        orderDao.deleteDingD([req.body.lastText])
            .then(function (data) {
                orderDao.deleteinvoice([req.body.lastText])
                    .then(function (data) {
                        orderDao.delete([req.body.lastText])
                            .then(function (data) {
                                resp.send("删除成功")
                            },function (err) {
                                console.log(err)
                            })
                },function (err) {
                    console.log(err)
                })
            },function (err) {
                console.log(err)
            })
    },


    // ==================================订单详情页===================
    dingDandetail(req,resp){
       let ordsNum=req.query.ordsNum;
        orderDao.dingDandetail([ordsNum])
            .then(function (data) {
                resp.render("dingDandetail",{mydata:data})
            },function (err) {
                console.log(err)
            })
},
    // 发票
    faPiao(req,resp){
        let ordsNum=req.body.ordsNum;
        let invoiceNumber=req.body.invoiceNumber;
        let invoiceName=req.body.invoiceName;
        let invoicePhone=req.body.invoicePhone;
        let invoiceMessage=req.body.invoiceMessage;
        let invoiceType=req.body.invoiceType;
        let invoiceEmail=req.body.invoiceEmail;
        invoiceType=invoiceType.trim();

        orderDao.faPiao([ordsNum,invoiceNumber,invoiceName,invoicePhone,invoiceMessage,invoiceType,invoiceEmail])
            .then(function (data) {
                resp.send(data)
            },function (err) {
                console.log(err)
            })
    },
    // 支付方式
    zhiFu(req,resp){
        let ordsMoney=req.query.bothmoney;
        let ordsNum=req.query.ordsNum;
        data={
            ordsMoney:ordsMoney,
            ordsNum:ordsNum,
        };
        resp.render("zhifufangshi1",{zhifuM:data})
    },
};
module.exports=orderCenter;