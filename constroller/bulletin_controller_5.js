// const path=require("path");
const bulletin_dao = require("../dao/bulletin_dao_5");

const bulletin_controller = {
    /*请求加载bulletin*/
    loadBulletin(req,res){
        bulletin_dao.dao_loadBulletin()
            .then(function (data) {
                res.send(data);
            })
            .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
                res.send(err)
            })
    },
    /*请求删除bulletin*/
    delBulletin(req,res){
        // console.log(111111);
        let id=req.query.id
        console.log(id)
        bulletin_dao.dao_delBulletin([id])
            .then(function (data) {
                res.send(data);
            })
            .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
                res.send(err)
            })
    },
    /*请求增加bulletin*/
    addBulletin(req,res){
        let name=req.query.name;
        let text=req.query.text;
        let start=req.query.start;
        let end=req.query.end;
        console.log(end);

        bulletin_dao.dao_addBulletin([name,text,start,end])
            .then(function (data) {
                res.send(data);
            })
            .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
                res.send(err)
            })
    },
    /*请求加载标签*/
    loadTag(req,res){
        bulletin_dao.dao_loadTag()
            .then(function (data) {
                res.send(data);
            })
            .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
                res.send(err)
            })
    },
    // bulletinChange(req, res) {
    //     let val = req.query.val;
    //     bulletin_dao.dao_bulletinChange([val])
    //         .then(function (data) {
    //             res.send(data);
    //         })
    //         .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
    //             res.send(err)
    //         })
    // },
    /*批量删除公告*/
    deleteBulletin(req, res) {
        let selectArr = req.body.selectArr;
        for (var i=0;i<selectArr.length;i++){
            let selectArr_bulletinId=selectArr[i].id;
            bulletin_dao.dao_deleteBulletin([selectArr_bulletinId])
                .then(function (data) {
                    if (i=selectArr.length){
                        res.send(data);
                    }
                })
                .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
                    res.send(err)
                })
        }

    },




};
module.exports = bulletin_controller;//暴露对象,以便上级获取