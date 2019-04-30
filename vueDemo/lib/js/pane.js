/*
当点击到这个pane对应的标签页标题按钮时，此pane的show值变为true，否则应该是false，要点击对应的标签页标题按钮，
需要设置一个唯一值俩标识这个pane，可以设置一个prop:name让用户来设置，但他不是必须的，如果使用者不设置，可以默认从
0开始自动设置。
*/
Vue.component('pane',{
    name:'pane',
    template:`<div class="pane" v-show="show">
                <slot></slot> 
             </div>`,
    data() {
        return {
            // 控制标签页内容显示与隐藏，
            show:true
        }
    },
    props:{
        name:{
            type:String
        },
        label:{
            type:String,
            default:""
        }
    },
    methods: {
        updateNav(){
            this.$parent.updateNav();
        }
    },
    watch: {
        label(){
            this.updateNav();
        },
    },
    mounted() {
        // 在pane初始化时，调用一遍tabs的this.updateNav();方法，同时监听了prop：label，在label跟新时，同样调用
        this.updateNav();
    },
});