// const path=require("path");
const contact_dao = require("../dao/contact_dao");

const contact_controller = {
  /*请求加载企业信息*/
    contact1(req,res){
    contact_dao.dao_contact1([])
      .then(function (data) {
        res.send(data);
      })
      .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
        res.send(err)
      })
  },
  /*删除*/
  delete_contact(req,res){
    const id=req.query.id;
    contact_dao.delete_contact(id)
      .then(function(data){
        res.send(data);
      }).catch(function(err){
      res.send(err)
    })
  },
  /*编辑*/
  contactEdit(req,res){
    let name=req.query.name
    let address=req.query.address
    let contact=req.query.contact
    let phone=req.query.phone
    let id=req.query.id
    contact_dao.contactEdit([name,address,contact,phone,id])
      .then(function(data){
        res.send(data);
      }).catch(function(err){
      res.send(err)
    })
  },
  /*批量删除*/
  delete_contact_all(req,res){
    const idArray=req.query.idArray;
    contact_dao.delete_contact_all(idArray)
      .then(function(data){
        res.send(data);
      }).catch(function(err){
      res.send(err)
    })
  },
  /*添加*/

  addContact(req,res){
    let val1=req.body.val1;
    let val2=req.body.val2;
    let val3=req.body.val3;
    let val4=parseInt(req.body.val4);
    let pathName = "images/" + req.file.filename;//保存的路径
    contact_dao.addContact([null,val1,val2,val3,val4,pathName])
      .then(function (data) {
        res.send("上传成功");
      })
      .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
        res.send(err)
      })
  },

  /*编辑图片*/
  changePic(req,res){
    let b_id = req.body.b_id;
    let pathName = "images/" + req.file.filename;//保存的路径
    contact_dao.changePic([pathName,b_id])
      .then(function (data) {
        res.send("上传成功");
      })
      .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
        res.send(err)
      })
  }
};
module.exports = contact_controller;//暴露对象,以便上级获取
