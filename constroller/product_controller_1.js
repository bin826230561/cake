// const path=require("path");
const product_dao = require("../dao/product_dao_1");

const product_controller_1 = {
    /*请求加载goods*/
    loadGoods(req, res) {
        product_dao.dao_loadGoods()
            .then(function (data) {
                res.send(data);
            })
            .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
                res.send(err)
            })
    },
    /*请求加载标签*/
    loadTag(req, res) {
        product_dao.dao_loadTag()
            .then(function (data) {
                res.send(data);
            })
            .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
                res.send(err)
            })
    },
    /*下拉菜单筛选连接数据*/
    goodsChange(req, res) {
        let val = req.query.val;
        product_dao.dao_goodsChange([val])
            .then(function (data) {
                res.send(data);
            })
            .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
                res.send(err)
            })
    },
    /*上传*/
    addProduct(req, res) {
        let val1 = req.body.val1;
        let val2 = req.body.val2;
        let val3 = parseInt(req.body.val3);
        let val4 = req.body.val4;
        console.log(val1);
        console.log(val2);
        console.log(typeof val3);
        console.log(val4);
        let picName = (req.file.originalname).split(".")[0];//上传的文件名称
        let pathName = "images/" + req.file.filename;//保存的路径
        console.log(pathName)
        // INSERT INTO goods VALUES (NULL,"哈哈","好吃得很","20元","images/2.jpg",5,1,NULL)
        product_dao.dao_upload([null, val1, val4, val2, pathName, val3, 1])
            .then(function (data) {
                res.send("上传成功");
            })
            .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
                res.send(err)
            })
    },
    /*编辑商品*/
    changeGoodsNews(req, res) {
        let val0 = req.body.val0;
        let val1 = req.body.val1;
        let val2 = req.body.val2;
        let val3 = req.body.val3;
        let val4 = req.body.val4;
        let val5 = req.body.val5;
        product_dao.dao_changeGoodsNews([val1, val4, val2, val3, val0])
            .then(function (data) {
                res.send(data);
            })
            .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
                res.send(err)
            })
    },
    /*修改图片*/
    changeImg(req, res) {
        let goods_id = req.body.goods_id;
        // let picName = (req.file.originalname).split(".")[0];//上传的文件名称
        let pathName = "images/" + req.file.filename;//保存的路径
        product_dao.dao_changeImg([pathName, goods_id])
            .then(function (data) {
                res.send("上传成功");
            })
            .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
                res.send(err)
            })
    },
    /*删除商品*/
    deleteProduct(req, res) {
        let id = req.query.id;
        product_dao.dao_deleteProduct([id])
            .then(function (data) {
                res.send(data);
            })
            .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
                res.send(err)
            })
    },
    /*批量删除商品*/
    deleteProducts(req, res) {
        let selectArr = req.body.selectArr;
        for (var i = 0; i < selectArr.length; i++) {
            let selectArr_goodsId = selectArr[i].id;
            console.log(selectArr_goodsId)
            product_dao.dao_deleteProducts([selectArr_goodsId])
                .then(function (data) {
                    if (i = selectArr.length) {
                        res.send(data);
                    }
                })
                .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
                    res.send(err)
                })
        }

    },
    /*加载购物车商品*/
    loadShopCarNews(req, res) {
        product_dao.dao_loadShopCarNews([])
            .then(function (data) {
                res.send(data);
            })
            .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
                res.send(err)
            })

    },
    /*编辑购物车商品*/
    changeShopNews(req, res) {
        let goods_id=req.body.val1;
        let u_id=req.body.val0;
        let goods_allPrice="￥"+req.body.val2+".00";
        product_dao.dao_changeShopNews([goods_allPrice,goods_id,u_id])
            .then(function (data) {
                res.send(data);
            })
            .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
                res.send(err)
            })

    },

};
module.exports = product_controller_1;//暴露对象,以便上级获取