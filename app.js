const express = require("express"); //加载express模块
const logger = require("morgan");//加载日志模块
const favicon = require("serve-favicon");// 加载ico小图标模块
const path = require("path");// 加载path模块
/*处理post数据--post请求专用*/
const bodyParser=require("body-parser");
const session=require("express-session");//引入session模块
const cookieParser=require("cookie-parser");//引入cookieParser模块


/*引入自己的"===路由==="模块*/
const route1=require("./routes/21cakeRouter-1");
const route2=require("./routes/21cakeRouter-2");
const route3=require("./routes/21cakeRouter-3");
const route4=require("./routes/21cakeRouter-4");
const route5=require("./routes/21cakeRouter-5");
const route6=require("./routes/21cakeRouter-6");
const route7=require("./routes/21cakeRouter-7");

const app = express();//执行express全局函数

app.use(logger("dev"));//调用日志模块(需要npm install morgan -- save进行下载)


/*===============session和cookie配置===============npm install cookie-parser --save-dev
npm install express-session --save-dev
==*/
app.use(cookieParser());
app.use(session({
    name:"demo168",
    secret:"123123123",
    cookie:{
        maxAge:1000*60*60*24*30//以毫秒为单位
    },
    resave:true,//更新session-cookie失效时间
    rolling:true,
    saveUninitialized:true
}));


/*================ejs配置============npm install ejs --save   下载=======*/
//试图引擎
app.set("views",path.join(__dirname,"views"));//试图文件路径
app.set("view engine","ejs");//试图解析引擎


/*读取post数据--post请求专用*/
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

/*使用"===路由==="*/
app.use(route1);
app.use(route2);
app.use(route3);
app.use(route4);
app.use(route5);
app.use(route6);
app.use(route7);

//设置静态资源路径(可以设置多个)
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/images"));
app.use(express.static(__dirname + "/public/css"));
app.use(express.static(__dirname + "/public/js"));
app.use(express.static(__dirname + "/public/lib"));
app.use(express.static(__dirname + "/public/pages"));

app.use(favicon(__dirname + "/public/images/favicon.ico"));//小图标(需要npm install serve-favicon -- save进行下载)

app.set("port", 8888);//设置端口号
app.listen(8888, () => {
    console.log("服务已启动" + app.get("port"));
});
