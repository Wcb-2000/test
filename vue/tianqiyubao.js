/*
 * Author: 吴楚标
 * Date: 2021-07-04 17:24:17
 * LastEditors: 吴楚标
 * LastEditTime: 2021-07-04 17:52:40
 * Description: 
*/
  /*
    接口1：随机笑话
    请求地址：http://wthrcdn.etouch.cn/weather_mini
    请求方法：get
    请求参数：city（查询的城市名）
    响应内容：天气信息
    */
    var app = new Vue({
      el:'#app',
      data:{
        city:'',
        weatherList:[]
      },
      methods:{
        searchWeather:function(){
          // console.log("aaa");
          // console.log(this.city);
          // var that = this;
          axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city)
          .then(val =>{
            // console.log(val);
            // console.log(val.data.data.forecast);
            // console.log(this);
            this.weatherList = val.data.data.forecast;
          }, reason => {
            console.log(err);
          })
        },
        changeCith:function(city){
          this.city=city;
          this.searchWeather();
        }
      }
    })