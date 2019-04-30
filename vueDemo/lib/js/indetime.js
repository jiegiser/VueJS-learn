var app=new Vue({
    el:'#app',
    data:{
        //这里使用的时间戳是毫秒级的，如果服务器端返回秒级时间戳需要乘以1000后在使用
        // 目前时间
        timeNow:(new Date()).getTime(),
        // 一个写死的时间 2017-03-08
        timeBefore:1488930695721,
    },
});