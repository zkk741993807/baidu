// 登录用户菜单
var auser = document.getElementsByClassName("user-hover");
var headerUser = document.getElementById("header-user");
var usertime ;

auser[0].onmouseenter = function () {
    auser[1].style.display = "block";
}
auser[0].onmouseleave = function () {
    clearTimeout(usertime);
    usertime=setTimeout(function(){
        auser[1].style.display = "none";
    },200)
    headerUser.onmouseenter = function () {
        clearTimeout(usertime);
    }
    headerUser.onmouseleave = function () {
        auser[1].style.display = "none";
    }
}
//设置菜单
var settime ;
var aset = document.getElementsByClassName("set-hover");
var headerSet = document.getElementById("header-set");

aset[0].onmouseenter = function () {
    aset[1].style.display = "block";
}
aset[0].onmouseleave = function () {
    clearTimeout(settime);

    settime=setTimeout(function(){
        aset[1].style.display = "none";
    },200)

    headerSet.onmouseenter = function () {
        clearTimeout(settime);
    }
    headerSet.onmouseleave = function () {
        aset[1].style.display = "none";
    }
}
//更多产品
var producttime;
var aproduct=document.getElementsByClassName("product-hover");

aproduct[0].onmouseenter=function(){
    aproduct[1].style.display="block";
}
aproduct[0].onmouseleave=function(){
    clearTimeout(producttime);
    producttime=setTimeout(function(){
        aproduct[1].style.display="none";
    },200)
    aproduct[1].onmouseenter=function(){
        clearTimeout(producttime);
    }
    aproduct[1].onmouseleave=function(){
        this.style.display="none";
    }
}
//input
var script=document.createElement("script");
script.src="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a&cb=fn";
document.body.appendChild(script);
function fn(data){
console.log(data);
}
