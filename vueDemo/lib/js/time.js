/*
时间转换逻辑：
1分钟以前：显示刚刚；
1分钟~1小时之内，显示XX分钟前；
1小时~1天，显示xx小时前；
1天~1个月（31天）之间，显示xx天前，
大于一个月，显示xx年xx月xx日
统一使用时间戳进行判断。
*/
var Time={
    // 获取当前时间戳
    getUnix(){
        let date=new Date();
    },
    // 获取今天0点0分0秒时间戳
    getTodayUnix(){
        let date=new Date();
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.getTime();
    },
    // 获取今年1月1日0点0分0秒的时间戳
    getYearUnix(){
        let date=new Date();
        date.setMonth(0);
        date.setDate(1);
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.getTime();
    },
    // 获取标准年月日
    getLastDate(){
        let date=new Date();
        let moth=date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1;
        let day=date.getDate()<10?'0'+date.getDate():date.getDate();
        return date.getFullYear()+'-'+moth+'-'+day;
    },
    // 转换时间
    getFormatTime(timestamp){
        let now=this.getUnix();//当前时间戳
        let today=this.getTodayUnix();//今天0点时间戳
        let year=this.getYearUnix();//今年0点时间戳
        let timer=(now-timestamp)/1000;//转换为秒级时间戳
        let tip='';
        if(timer<=0){
            tip='刚刚';
        }else if(Math.floor(timer/60)<=0){
            tip='刚刚';
        }else if(timer<3600){
            tip=Math.floor(timer/60)+'分钟前';
        }else if(timer>=3600&&(timestamp-today>=0)){
            tip=Math.floor(timer/3600)+'小时前';
        }else if(timer/86400<=31){
            tip=Math.ceil(timer/86400)+'天前';
        }else {
            tip=this.getLastDate(timestamp);
        }
        return tip;
    }
}
/* 
将指令v-time表达式的值binding.value作为参数传入Time.getFormatTime方法得到格式化时间，再通过el.innerHTML写入指令
所在的元素，定时器el.__timeout__每分钟触发一次，更新时间，并且在unbind钩子里清除掉
*/
Vue.directive('time',{
    bind(el,binding){
        el.innerHTML=Time.getFormatTime(binding.value);
        el.__timeout__=setInterval(() => {
            el.innerHTML=Time.getFormatTime(binding.value)
        }, 6000);
    },
    unbind(el){
        clearInterval(el.__timeout__);
        delete el.__timeout__;
    }
})