/*
首选需要把pane组件设置的标题动态渲染出来，也就是当pane触发tabs的updateNav方法时，更新标题内容;
getTabs是一个公用的方法，使用this.$children来获取到所有的pane组件实例；
在methods里使用了有function回调的方法时，比如foreach，在回调内的this不在执行当前的vue实例，也就是tabs组件本身，所以要在外层设置一个
_this=this的局部变量在间接使用this
*/
Vue.component('tabs', {
    template: `<div class="tabs">
      <div class="tabs-bar">
          <!--标签页标题，这里要用v-for-->
          <div :class="tabCls(item)" v-for="(item,index) in navList" @click="handleChange(index)">
          {{item.label}}
          </div>
      </div>
      <div class="tabs-content">
          <!-- 这里的slot就是嵌套的pane-->
          <slot></slot>
      </div>
    </div>`,
    props: {
        // 这里的value是为了可以使用v-model
        value: {
            type: [String, Number]
        }
    },
    data() {
        return {
            // 因为不能修改value，所以复制一份自己维护
            currentValue: this.value,
            // 用用户渲染tabs的标题
            navList: []
        }
    },
    // methods不缓存的
    methods: {
        tabCls(item) {
            return [
                'tabs-tab', {
                    // 给当期选中的tab加一个class
                    'tabs-tab-active': item.name === this.currentValue
                }
            ];
        },
        // 点击tab标题触发事件
        /*
        改变当前选中tab的索引，也就是pane组件的name，在watch选项里，进行监听currentValue，当其发生变化时，触发
        updateStatus方法来更新pane组件的显示状态
        */
        handleChange(index) {
            let nav = this.navList[index];
            let name = nav.name;
            // 改变当前选中的tab,并触发下面的watch
            this.currentValue = name;
            // 更新value
            this.$emit('input', name);
            // 触发一个自定义事件，供父级使用
            this.$emit('on-click', name);
        },
        getTabs() {
            // 通过遍历子组件，得到所有的pane组件
            return this.$children.filter((item) => {
                return item.$options.name === 'pane';
            });
        },
        updateNav() {
            this.navList = [];
            // 设置对this的引用，在function回调里，this指向的并不是Vue实例
            let _this = this;
            this.getTabs().forEach((pane, index) => {
                _this.navList.push({
                    label: pane.label,
                    name: pane.name || index
                });
                // 如果没有给pane设置name，默认设置他的索引
                if (!pane.name) pane.name = index;
                // 设置当前选中的tab的索引
                if (index === 0) {
                    if (!_this.currentValue) {
                        _this.currentValue = pane.name || index;
                    }
                }
            });
            this.updateStatus();
        },
        updateStatus() {
            let tabs = this.getTabs();
            let _this = this;
            // 显示当前选中的tab对应的pane组件，隐藏没有选中的
            tabs.forEach((tab) => {
                return tab.show = tab.name === _this.currentValue;
            })
        }
    },
    watch: {
        value(val) {
            this.currentValue = val;
        },
        currentValue() {
            // 在当前选中的tab发生变化时，更新pane的显示状态
            this.updateStatus();
        }
    },
});