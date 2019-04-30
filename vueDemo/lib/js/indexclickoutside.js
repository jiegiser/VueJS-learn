var data={
    show:false
};
var app=new Vue({
    el:"#app",
    data,
    methods: {
        handleClose(){
            this.show=false
        }
    },
});