const dao4=require("../dao/21cake_dao-4");
const goodsController={
    cakeData(req,resp){
        let bt1=req.body.bt1;
        dao4.searchCake([bt1]).then(function (data) {
            resp.send(data);
        }).catch(function (err) {
            resp.send(err)
        })
    },

    cakeData1(req,resp){
        let bt=3;
        let url=req.url;
        let url1=url.split(".");
        let url2=url1[0].split("/");
        let a=url2[1];
        console.log(url2[1]);
        dao4.searchCake([bt]).then(function (data) {
            resp.render(a,{mydata:data});
        }).catch(function (err) {
            resp.send(err)
        })
    },
    cakeData2(req,resp){
        let bt=2;
        let url=req.url;
        let url1=url.split(".");
        let url2=url1[0].split("/");
        let a=url2[1];
        // console.log(url2[1]);
        dao4.searchCake([bt]).then(function (data) {
            resp.render(a,{mydata:data});
        }).catch(function (err) {
            resp.send(err)
        })
    },
    cakeData3(req,resp){
        let url=req.url;
        let url1=url.split(".");
        let url2=url1[0].split("/");
        let a=url2[1];
        resp.render(a);
    },
    searchId(req,resp){
        let name=req.query.name;
        console.log(name);
        dao4.searchId([name]).then(function (data) {
            resp.send(data);
        }).catch(function (err) {
            resp.send(err)
        })
    }

};
module.exports=goodsController;