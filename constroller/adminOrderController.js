/** Created by LIU on 2018/12/6.*/

const adminOrder=require("../dao/adminOrderDao");

const adminOrderController={
    // 加载页面
    loadOrders(req,resp){
        adminOrder.loadOrder([])
            .then(function (data) {
                resp.send(data);

            },function (err) {
                console.log(err)
            })
    },
    // 修改订单状态
    stateId(req,resp){
        adminOrder.stateId([req.body.orderNum])
            .then(function (data) {
                resp.send(data);
            },function (err) {
                console.log(err)
            })
    },
    // 查看订单状态
    lookOrder(req,resp){
        adminOrder.lookOrder([req.body.orderNum])
            .then(function (data) {
                resp.send(data);
            },function (err) {
                console.log(err)
            })
    },
    // // 编辑订单
    // changeOrder(req,resp){
    //     let orderNum=req.body.orderNum;
    //     let productName=req.body.productName;
    //     let productAddress=req.body.productAddress;
    //     let productPhone=req.body.productPhone;
    //
    //     adminOrder.changeOrder([productName,productAddress,productPhone])
    //         .then(function (data) {
    //             resp.send(data);
    //         },function (err) {
    //             console.log(err)
    //         })
    // },

    // 今日订单
    todayOrders(req,resp){
        adminOrder.todayOrders([])
            .then(function (data) {
                resp.send(data);

            },function (err) {
                console.log(err)
            })
    },
    // 近七天订单
    weekOrders(req,resp){
        adminOrder.weekOrders([])
            .then(function (data) {
                resp.send(data);

            },function (err) {
                console.log(err)
            })
    },
    // 近一个月订单
    monthOrders(req,resp){
        adminOrder.monthOrders([])
            .then(function (data) {
                resp.send(data);

            },function (err) {
                console.log(err)
            })
    },
    // 未完成订单
    noFinishOrders(req,resp){
        adminOrder.noFinishOrders([])
            .then(function (data) {
                resp.send(data);

            },function (err) {
                console.log(err)
            })
    },
    // 已完成订单
    finishOrders(req,resp){
        adminOrder.finishOrders([])
            .then(function (data) {
                resp.send(data);

            },function (err) {
                console.log(err)
            })
    },
};


module.exports=adminOrderController;