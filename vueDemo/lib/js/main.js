import VueBUs from './vue-bus';
Vue.use(VueBUs);
<template>
    <div>
        {{number}}
        <button @click="handleAddRandom">随机数增加</button>
    </div>
</template>
export default{
    props:{
        number:{
            type:Number
        }
    },
    methods: {
        handleAddRandom(){
            // 随机获取1~100中的数
            const num=Math.floor(Math.random()*100+1);
            this.$bus.emit('add',num)
        }
    },
}