//从demoDao.js中引入demoModel

const goodsmodal = require("../dao/21cake_dao-6");//引入自己的控制模块
const dbPool = require("../config/dbpoolconfig");//连接数据库

const cakeController = {
    mycake (req,res){
        goodsmodal.model_21cake ([])
            .then(function(data){
                console.log(data),
                res.render("cake",{mydata:data

                })

            })
    },
    mycake1 (req,res){
        goodsmodal.model_21cake ([])
            .then(function(data){
                console.log(data),
                    res.render("caketext-1",{mydata:data

                    })

            })
    },
    mycake2 (req,res){
        goodsmodal.model_21cake ([])
            .then(function(data){
                console.log(data),
                    res.render("caketext-2",{mydata:data

                    })

            })
    },
    mycake3 (req,res){
        goodsmodal.model_21cake ([])
            .then(function(data){
                console.log(data),
                    res.render("caketext-3",{mydata:data

                    })

            })
    },
    mycake4 (req,res){
        goodsmodal.model_21cake ([])
            .then(function(data){
                console.log(data),
                    res.render("caketext-4",{mydata:data

                    })

            })
    },
    myaddress (req,res){
        goodsmodal.model_add ([])
            .then(function(data){
                console.log(data),
                    res.render("address",{myadd:data
                    })

            })
    },
    mybirthday (req,res){
        goodsmodal.model_21cake ([])
            .then(function(data){
                console.log(data),
                    res.render("birthday",{mydata:data
                    })

            })
    },
    mychild (req,res){
        goodsmodal.model_21cake ([])
            .then(function(data){
                console.log(data),
                    res.render("child",{mydata:data
                    })

            })
    },
    myparty (req,res){
        goodsmodal.model_21cake ([])
            .then(function(data){
                console.log(data),
                    res.render("party",{mydata:data
                    })
            })
    },
    deleteadd(req,resp){
        let xmid=req.query.idd;
        console.log(xmid);
        dbPool.connect("delete from address where address_id=?",xmid,(err,data)=>{
            resp.send(data);
        })
    },
    tianjia(req,resp){
        let user=req.query.address_user;
        console.log(user);
        let zhuzi=req.query.address_place;
        // console.log(zhuzi);
        let tel1=req.query.phone;
        // console.log(tel1);
        dbPool.connect("insert into address values(null,null,?,?,?,null)",[user,zhuzi,tel1],(err,data)=>{
            resp.send(data);
            console.log(err)
        })
    },
    bianji(req,resp){
        let user1=req.body.user;
        console.log(user1);
        let zhuzi1=req.body.place;
        console.log(zhuzi1);
        let tel11=req.body.phone;
        console.log(tel11);
        let idd=req.body.idd;
        console.log(idd);
        dbPool.connect("update address set address_user=?,address_place=?,phone=? where address_id=?",[user1,zhuzi1,tel11,idd],(err,data)=>{
            resp.send(data);
            console.log(err)
        })
    },
    bj(req,resp){
        let aname=req.body.val0;
        console.log(aname);
        let aage=req.body.val1;
        console.log(aage);
        let aphone=req.body.val2;
        console.log(aphone);
        let aadd=req.body.val3;
        console.log(aadd);
        dbPool.connect("update admin set a_name=?,a_age=?,a_phone=? ,a_address=? where a_id=1",[aname,aage,aphone,aadd],(err,data)=>{
            resp.send(data);
            console.log(err)
        })
    },
    /*请求加载goods*/
    loadAdmin(req,res){
        let u_id=req.query.u_id;
        goodsmodal.dao_loadAdmin([u_id])
            .then(function (data) {
                res.send(data);
            })
            .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
                res.send(err)
            })
    },
    changepassword(req,resp){
        let xmm=req.body.xmm;
        let u_id=req.body.u_id;
        console.log(xmm);
        dbPool.connect("update admin set a_pwd=? where a_id=?",[xmm,u_id],(err,data)=>{
            resp.send(data);
        })
    },
    changeQuanNews(req,resp){
        let val0=req.body.val0;
        let val1=req.body.val1;
        let val2=req.body.val2;
        let val3=req.body.val3;
        let val4=req.body.val4;
        let val5=req.body.val5;
        console.log(val0);
        dbPool.connect("insert into quan values(null,(select u_id from users where u_name=?),?,?,?,?,?)",[val0,val1,val2,val3,val4,val5],(err,data)=>{
            resp.send(data);
            console.log(err)
        })
    },
    pldeleteadd(req,res){
        let xmidarr=req.query.iddarr;
        console.log(xmidarr.length)
        for (var i=0;i<xmidarr.length;i++){
            let xmId=xmidarr[i];
            goodsmodal.model_plsc([xmId])
                .then(function (data) {
                    if (i=xmidarr.length){
                        res.send(data);
                    }
                })
                .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
                    res.send(err)
                })
        }
        // console.log(xmidarr);
        
    }
};


module.exports = cakeController;//暴露对象,以便上级获取