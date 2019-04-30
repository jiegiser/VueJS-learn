var data={
    list:[
        {
            id:1,
            name:'iphone 10',
            price:100000,
            count:2
        },
        {
            id:2,
            name:'iphone 9',
            price:18000,
            count:2
        },
        {
            id:3,
            name:'iphone 8',
            price:1900,
            count:2
        }
    ]
};
var app=new Vue({
    el:'#app',
    data,
    computed: {
        totalPrice(){
            let total=0;
            for(let i=0;i<this.list.length;i++){
                let item=this.list[i];
                total+=item.price*item.count;
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
        }
        
    },
    methods: {
        handleRedcue(index){
            if(this.list[index].count===1) return;
            this.list[index].count--;
        },
        handelAdd(index){
            this.list[index].count++;
        },
        handleRemove(index){
            this.list.splice(index,1);
        }
    },
});