/*
 * Author: 吴楚标
 * Date: 2021-04-28 22:57:34
 * LastEditors: 吴楚标
 * LastEditTime: 2021-05-06 21:47:24
 * Description: 
*/
//尝试创建一个可以执行简单动画得函数
/*
    参数：
        1.obj：要执行动画的对象
        2.attr:要执行的样式：left top width height
        3.target：执行动画的目标位置
        4.speed:移动的速度
        5.callback:回调函数，这个函数将会在动画执行完毕后执行
*/
function move(obj, attr, target, speed, callback) {
    //关闭上一次定时器
    clearInterval(obj.timer);

    //获取元素目前的位置
    var current = parseInt(getStyle(obj, attr));

    //判断速度的正负值
    //如果从0向800移动，则speed为正
    //如果从800向0移动，则speed为负
    if (current > target) {
        speed = -speed;
    }

    //开启定时器，执行动画效果
    //向执行动画的对象中添加一个timer属性，用来保存它自己的定时器的标识
    obj.timer = setInterval(function () {

        //获取box1原来的left的值
        var oldValue = parseInt(getStyle(obj, attr));  //parseInt只提取数字，忽略px

        //在旧值得基础上减小
        var newValue = oldValue + speed;

        //判断是否小于0
        //500向0移动
        //向左移动时，需要判断newValue是否小于target
        //向右移动时，需要判断newValue是否大于target
        if (speed < 0 && newValue < target || speed > 0 && newValue > target) {
            newValue = target;
        }

        //将新值设置给box1
        obj.style[attr] = newValue + "px";   //变量的参数  [变量]

        //当元素移动到0px，停止动画
        if (newValue == target) {
            //达到目的，停止定时器
            clearInterval(obj.timer);
            //动画执行完毕，调用回调函数
            callback && callback();   //有回调函数就使用，没有就不使用
        }
    }, 100);

}

function getStyle(obj, name) {

    if (window.getComputedStyle) {
        //正常浏览器的方式
        return getComputedStyle(obj, null)[name];
    } else {
        //IE8的方式，没有getConputerStyle()方法
        return obj.currentStyle[name];
    }

}

//定义一个函数，用来向一个元素中添加指定的calss属性值
/*
参数：
    obj：要添加class属性的元素
    cn：要添加的class值
*/
function addClass(obj, cn) {

    //检查obj中是否有cn
    if (!hasClass(obj, cn)) {
        obj.className += " " + cn;

    }

}

/*
判断一个元素中是否含有指定的class属性值
     如果有该class，则返回true没有则false
*/
function hasClass(obj, cn) {
    //判断obj中没有cn class
    //创建一个正则表达式
    //  var reg =/\bb2\b/;
    var reg = new RegExp("\\b" + cn + "\\b");

    return reg.test(obj.className);

}

/*
删除一个元素中的指定的class属性
 
*/
function removeClass(obj, cn) {
    //创建一个正则表达式
    var reg = new RegExp("\\b" + cn + "\\b");

    //删除class
    obj.className = obj.className.replace(reg, "");
}

/*
toggledClass 可以切换一个类
如果元素中有该类，则删除
如果没有该类，则添加 
*/
function toggledClass(obj, cn) {

    //判断obj中是否含有cn
    if (hasClass(obj, cn)) {
        //有，删除
        removeClass(obj, cn);
    } else {
        //没有，添加
        addClass(obj, cn);
    }
}