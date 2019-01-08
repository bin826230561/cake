// const path=require("path");
const staff_dao = require("../dao/staff_dao");

const staff_controller = {
    /*请求加载员工*/
    loadStaff(req,res){

        staff_dao.dao_loadStaff()
            .then(function (data) {
                res.send(data);
                // console.log(data);
            })
            .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
                res.send(err)
            })
    },
    /*删除员工*/
    dellStaff(req,res) {
        console.log("进入控制层");
        const id=req.query.id;
        console.log(id);
        staff_dao.dao_dellStaff(id)
            .then(function(data){
                res.send(data);
            }).catch(function(err){
                res.send(err)
        })
    },
    /*批量删除*/
    handleDelete(req,res) {
        const idArray=req.query.idArray;
        console.log(idArray)
        staff_dao.dao_handleDelete(idArray)
            .then(function(data){
                res.send(data);
            }).catch(function(err){
            res.send(err)
        })
    },
    /*编辑员工*/
    changeStaffNews(req,res){
        let va10=req.body.va10;
        let va11=req.body.va11;
        let va12=req.body.va12;
        let va13=req.body.val3;
        let va14=req.body.val4;
        let va15=req.body.val5;
        let va16=req.body.va16;
        // console.log(va11)
        // console.log(va14)
        // console.log(va13)
        // console.log(va12)
        // console.log(va15)
        // console.log(va16)
        // console.log(va10)
        staff_dao.dao_changeStaffNews([va11,va14,va13,va12,va15,va16,va10])
            .then(function (data) {
                res.send(data);
            })
            .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
                res.send(err)
            })
    },


    /*添加员工*/
    addStaffNews(req,res){
        let va11=req.body.va11;
        let va12=req.body.va12;
        let va13=req.body.val3;
        let va14=req.body.val4;
        let va15=req.body.val5;
        let va16=req.body.va16;
        // console.log(va11)
        // console.log(va14)
        // console.log(va13)
        // console.log(va12)
        // console.log(va15)
        // console.log(va16)
        // console.log(va10)
        staff_dao.dao_addStaffNews([va11,va14,va13,va12,va15,va16])
            .then(function (data) {
                res.send(data);
            })
            .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
                res.send(err)
            })
    },


};
module.exports = staff_controller;//暴露对象,以便上级获取