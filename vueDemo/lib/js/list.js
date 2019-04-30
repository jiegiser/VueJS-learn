Vue.component('list', {
    props: {
        list: {
            type: Array,
            default () {
                return [];
            }
        }
    },
    render(createElement) {
        let _this = this;
        let list = [];
        // this.list.forEach相当于template里的v-for指令，遍历每条留言，句柄handleReply直接向父组件派发一个事件reply，
        // 父组件接收后，将当前list-item的昵称提取，并设置到v-textarea内
        this.list.forEach((msg, index) => {
            let node = createElement('div', {
                    attrs: {
                        class: 'list-item'
                    }
                },
                [
                    createElement('span', `${msg.name}: `),
                    createElement('div', {
                            attrs: {
                                class: 'list-msg'
                            }
                        },
                        [
                            createElement('p', msg.message),
                            createElement('a', {
                                attrs: {
                                    class: 'list-reply'
                                },
                                on: {
                                    click() {
                                        _this.handleReply(index);
                                    }
                                }
                            }, '回复')
                        ])
                ])
            list.push(node);
        });
        if (this.list.length) {
            return createElement('div', {
                attrs: {
                    class: 'list'
                }
            }, list);
        } else {
            return createElement('div', {
                attrs: {
                    class: 'list-nothing'
                }
            }, '留言列表为空')
        }
    },
    methods: {
        handleReply(index) {
            this.$emit('reply', index)
        }
    },

});