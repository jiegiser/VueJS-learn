Vue.directive('clickoutside',{
    bind(el,binding,vnode){
        function documentHandler(e){
            console.log(e);
            console.log(e.target);
            // 判断点击的区域是否是指令所在的元素内部，如果是跳出函数
            if(el.contains(e.target)){
                
                return false;
            }
            // 判断当前的指令有没有写表达式，在该自定义指令中，表达式应该是一个函数，
            // 所以binding.value(e)就是用来执行当前上下文methods中指定的函数的。
            if(binding.expression){
                // 如果点击的元素是指令外部元素，直接绑定调用在指令上的事件，改变show
                binding.value(e)
            }
        };
        el.__vueClickOutside__=documentHandler;
        // 给所有的doecument绑定一个点击事件，
        document.addEventListener('click',documentHandler);
    },
    unbind(el,binding){
        document.removeEventListener('click',el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    }
})