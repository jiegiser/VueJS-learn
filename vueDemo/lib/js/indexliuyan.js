// 发布一条留言，需要的数据有昵称和留言内容，发布操作应该在根实例app内完成，留言表的数据也是从app获取，
var app=new Vue({
    el:'#app',
    data:{
        username:'',
        message:'',
        list:[]
    },
    methods: {
        // 添加留言，添加成功后，把textarea文本清空
        handleSend(){
            if(this.username===''){
                window.alert('请输入昵称');
                return;
            }
            if(this.message===''){
                window.alert('请输入留言');
                return;
            }
            this.list.push({
                name:this.username,
                message:this.message
            });
            this.message='';
        },
        handleReply(index){
            let name=this.list[index].name;
            this.message=`回复@ ${name} : `;
            this.$refs.message.focus();
        }
    },
})