
// input绑定了数据currentValue和元素的change事件，在句柄handelChange函数中，判断了当前输入的是否是数字，
// 这里绑定的currentValue也是单向数据流，并没有v-model，所以在输入时，currentValue的值并没有实时改变，如果输入的不是数字
// 就会将输入的内筒进行重置为之前的currentValue，如果输入的是符合要求的数组，就把输入的值赋值给currentValue
Vue.component('input-number', {
    template: `<div class="input-number">
    <input type="text" :value="currentValue" @change="handleChange">
    <button class='btn btn-primary' @click="handleDown" :disable="currentValue<=min"> - </button>
    <button class='btn btn-primary' @click="handleUp" :disable="currentValue>=max">+</button>
    </div>`,
    props: {
        max: {
            type: Number,
            default: Infinity
        },
        min: {
            type: Number,
            default: -Infinity
        },
        value: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            currentValue: this.value
        }
    },
    watch: {
        currentValue(val) {
            // 在使用v-model时改变value的，
            this.$emit('input', val);
            // 触发自定义事件on-change
            this.$emit('on-change', val)
        },
        value(val) {
            this.updateValue(val);
        }
    },
    methods: {
        updateValue(val) {
            if (val > this.max) val = this.max;
            if (val < this.min) val = this.min;
            this.currentValue = val;
        },
        handleDown() {
            if (this.currentValue <= this.min) return;
            this.currentValue -= 1;
        },
        handleUp() {
            if (this.currentValue >= this.max) return;
            this.currentValue += 1;
        },
        handleChange(event) {
            let val = event.target.value.trim();
            let max = this.max;
            let min = this.min;
            if (isValueNUmber(val)) {
                val = Number(val);
                this.currentValue = val;
                if (val > max) {
                    this.currentValue = max;
                } else if (val < min) {
                    this.currentValue = min;
                }
            } else {
                event.target.value = this.currentValue;
            }
        }
    },
    mounted() {

    },
});

function isValueNUmber(value) {
    return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)/).test(value + '');
}