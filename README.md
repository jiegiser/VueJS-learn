# VueJS-learn
vue.js框架的学习

### 出现一个错误，明天修改。
vue.js:435 [Vue warn]: Failed to generate render function:

SyntaxError: Invalid or unexpected token in

with(this){return _c('div',{staticClass:"container",attrs:{"id":"app"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-8 col-md-offset-2"},[_c('div',{staticClass:"panel panel-primary"},[_c('div',{staticClass:"panel-heading"},[_v("vue js 2.0学习")]),_v(" "),_c('div',{staticClass:"panel-body"},[_c('h1',[_v("my todos")]),_v(" "),_c('ul',{staticClass:"list-group"},_l((todos),function((todo，index)){return _c('li',{staticClass:"list-group-item"},[_v(_s(todo.title)+"\n                           "),_c('button',{staticClass:"btn btn-warning btn-xs pull-right",on:{"click":function($event){deleteTodo(index)}}},[_v("Delete\n                           ")])])})),_v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();addTodo(newTodo)}}},[_c('div',{staticClass:"form-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(newTodo.title),expression:"newTodo.title"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"addTodo"},domProps:{"value":(newTodo.title)},on:{"input":function($event){if($event.target.composing)return;newTodo.title=$event.target.value}}})]),_v(" "),_m(0)])])])])])])}
### Vue js 2.0 初试

2017年6月2日
17:49

	1. 首先需要下载vue.js的脚本，然后在HTML页面中引用，
	
	2. 然后就可以使用vue.js中的方法，首先需要实例化一个vue对象，Vue是vuejs中的一个对象，其中el代表的是vuejs的控制范围，可以通过与css选取元素一样，通过#来得到id为***的元素，其中，data为vuejs中的数据，为一个数组属性，其中里面的message为输入显示的内容。（
	初始化了Vue，我们看里面两个属性；el表示在html中哪个部分起作用，语法类似jquery的节点选择器，在这里我们看到它选择了一个ID。
	
	data属性就是我们要定义变量的地方：
	
	Message:'hello world' 我们定义了一对键值，很好理解。
	3. ）
	
	4. 进行vue控制范围的绑定，在需要控制的div中，输入id为在实例化vue中的el属性的参数一致的id。
	在Vuejs中变量在html中绑定标签是两个花括号{{变量}}，在vuejs中的获取页面中id不可以放在body和html标签里
	
	5. 然后可以在html中引用vuejs的内容，比如我们需要在一个h1标签中，显示，我们直接在h1中输入{{message}}就可以将实例化的message属性值，显示出来。
	
	6. 实现数据双向绑定，使用vuejs的v-model属性，比如在我们的页面中有一个input表单，然后我们可以使用vueJS特有的v-model，让他绑定到message中的内容，这样，表单里面的内容为我们的message内容，我们可以看到效果，我们删除表单的内容，以及重新输入内容，在h1里面实时显示。（这里我为了让界面更好看，使用了bootstrap插件。）
	
	7. 可以查看效果：（数据的双向绑定一般用于我们界面的表单元素，不是所有的元素中）

        需要注意的是：
 v-model 指令在表单控件元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。
vuejs双向绑定并不能适用于所有的html表单，限制为input、select、textarea、components。	
Vuejs中的v-text属性，在vuejs中可以使用v-text属性来控制整个标签的内容绑定，在前面中我们使用了{{mssage}}在页面中绑定数据，另外我们也可以使用vuejs的v-text属性来绑定数据。
### V-for学习

2017年7月14日
13:04

	1. 首先我们在data中定义一个数组，为items，然后在body中，添加一个ul，li来进行循环数组，其中v-for指令里面的语法是， v-for="item in items"是将items数组中的元素读取到item中，然后进行循环、
	
	
	
	循环结果：
	
	2. 对循环中的值进行排序。使用computd，在items输出时，对数组进行排序。使用sort方法进行排序。
	
	
	
	3. 进行循环对象。
	首先定义一个数组：
	
	然后使用v-for进行循环读取数据，使用（student，index）可以输出数组的序号，这里的index，可以随便取名，但是在通常编程中，我们还是使用index，表示索引值，
	对对象数组进行排序，
### V-for&v-else&v-show	
    1. 需求，v-if（是vue中内部判断的指定），用户登录时，没登录时，我们提示用户登录，用户登录后，我们现实登录成功，我们需要一个div，然后使用v-if指令。首先在data中定义一个变量。
	
	然后我们在div中进行用v-if进行判断，如果登录了就显示，
	
	2. 如果把那个inLogin改为false，则我们在div中输入显示的内容不会在页面中显示出来。 
	
	
	
	3. 我们继续再写一个v-else，如判条件为false，则返回“请登录。代码如下：
	
	这时候，浏览器会弹出我们在v-else中输入的内容：
	
	4. V-if判断是否加载，若值为false，他不会加载div，v-show他是把我们的css的display=null，
	调整css中display属性，DOM已经加载，只是CSS控制没有显示出来。
	v-if 和v-show的区别：
	v-if： 判断是否加载，可以减轻服务器的压力，在需要时加载。
    v-show：调整css dispaly属性，可以使客户端操作更加流畅。

### V-text&v-html

2017年7月16日
13:08

	1. 我们已经会在html中输出data中的值了，我们已经用的是{{xxx}},这种情况是有弊端的，就是当我们网速很慢或者javascript出错时，会暴露我们的{{xxx}}。Vue给我们提供的v-text,就是解决这个问题的。
	
	2. 如果在javascript中写有html标签，用v-text是输出不出来的，这时候我们就需要用v-html标签了。
	


### V-on：绑定事件监听器
v-on 就是监听事件，可以用v-on指令监听DOM事件来触发一些javascript代码。
	1. v-on 就是监听事件，可以用v-on指令监听DOM事件来触发一些javascript代码。
	
	2. 然后在methods中声明jiafen函数，
	
	3. 在data中声明fenshu值。
	
	4. 我们的v-on 还有一种简单的写法，就是用@代替。
	
	5. 我们除了绑定click之外，我们还可以绑定其它事件，比如键盘回车事件v-on:keyup.enter,现在我们增加一个输入框，然后绑定回车事件，回车后把文本框里的值加到我们的count上。
	
	当然可以使用
	
    <input type="text" v-on:keyup.enter="onEnter" v-model="secondCount">

因为文本框的数字会默认转变成字符串，所以我们需要用parseInt()函数进行整数转换。

### V-model双向数据绑定

2017年7月18日
12:29

	1. V-model就是把数据绑定在特定的表单元素上，可以很容易的实现双向数据绑定。
	
	2. V-model的修饰符，
	.lazy：取代 imput 监听 change 事件。懒加载，延缓了数据的加载，鼠标离开失去焦点的时候，数据加载。
	.number：输入字符串转为数字。Message必须是数字，若首先输入字符串则还是可以绑定，若首先输入数字，则再接字符串，则不会出现数据绑定。
	.trim：输入去掉首尾空格。
	
	
	
	3. 文本区域加入数据绑定
	<textarea cols="30" rows="10" v-model="message"></textarea>
	
	4. 多选按钮绑定一个值
	
	
	
	
	
	5. 多选绑定一个数组
	 <input type="checkbox" id="jiegiser" value="jieouba" v-model="web_names">
	            <label for="isTrue">jiegiser</label>
	            <input type="checkbox" id="jiegiser1" value="jiegiser1" v-model="web_names">
	            <label for="isTrue">jiegiser1</label>
	            <input type="checkbox" id="jiegiser2" value="jiegiser2" v-model="web_names">
	            <label for="isTrue">jiegiser2</label>
	            <p>{{web_names}}</p>
	 vue中声明：
	new Vue({
	el: '#app',
	data: {
	message: 'Hello Vue',
	isTrue: true,
	web_names: [],
	sex: '男'
	}
	})
	6. 单选按钮绑定数据
	<h1>单选按钮绑定数据</h1>
	<p>
	<input type="radio" id="one" value="男" v-model="sex">
	<label for="one">男</label>
	<input type="radio" id="two" value="女" v-model="sex">
	<label for="two">女</label>
	<p>你选择的性别是：{{sex}}</p>
    </p>

### V-bind指令	
    1. v-bind是处理HTML中的标签属性的，例如<div></div>就是一个标签，<img>也是一个标签，我们绑定<img>上的src进行动态赋值。
	<div id="app">
	    <img v-bind:src="imgSrc"  width="200px">
	</div>
	2. 在html中我们用v-bind:src=”imgSrc”的动态绑定了src的值，这个值是在vue构造器里的data属性中找到的。
	
	js文件：
	
	var app=new Vue({
	    el:'#app',
	    data:{
	          imgSrc:'http://baidu.com/wp-content/uploads/2017/02/vue01-2.jpg'
	     }
	})
	1
	2
	3
	4
	5
	6
	var app=new Vue({
	    el:'#app',
	    data:{
	          imgSrc:'http://baidu.com/wp-content/uploads/2017/02/vue01-2.jpg'
	     }
	})
	我们在data对象在中增加了imgSrc属性来供html调用。
	3. v-bind 缩写
	<!-- 完整语法 -->
	<a v-bind:href="url"></a>
	<!-- 缩写 -->
	<a :href="url"></a>
	4. 绑定CSS样式
	在工作中我们经常使用v-bind来绑定css样式：
	在绑定CSS样式是，绑定的值必须在vue中的data属性中进行声明。
	1、直接绑定class样式
	1	<div :class="className">1、绑定classA</div>
	2、绑定classA并进行判断，在isOK为true时显示样式，在isOk为false时不显示样式。
	1	<div :class="{classA:isOk}">2、绑定class中的判断</div>
	3、绑定class中的数组
	1	<div :class="[classA,classB]">3、绑定class中的数组</div>
	4、绑定class中使用三元表达式判断
	1	<div :class="isOk?classA:classB">4、绑定class中的三元表达式判断</div>
	5、绑定style
	1	<div :style="{color:red,fontSize:font}">5、绑定style</div>
	6、用对象绑定style样式
	1	<div :style="styleObject">6、用对象绑定style样式</div>
	
	1	var app=new Vue({
	2	   el:'#app',
	3	   data:{
	4	       styleObject:{
	5	           fontSize:'24px',
	6	           color:'green'
	7	            }
	8	        }
	9	})

### 其他指令（v-pre指令、v-cloak指令、v-once指令）

2017年7月20日
12:33

	1. v-pre指令

v-pre指令
	在模板中跳过vue的编译，直接输出原始值。就是在标签中加入v-pre就不会输出vue中的data值了。
	1	<div v-pre>{{message}}</div>
	这时并不会输出我们的message值，而是直接在网页中显示{{message}}
	2. V-cloak指令
v-cloak指令
在vue渲染完指定的整个DOM后才进行显示。它必须和CSS样式一起使用，
1	[v-cloak] {
2	  display: none;
3	}

1	<div v-cloak>
2	  {{ message }}
3	</div>

	3. V-once指令
v-once指令
在第一次DOM时进行渲染，渲染完成后视为静态内容，跳出以后的渲染过程。
1	<div v-once>第一次绑定的值：{{message}}</div>
2	<div><input type="text" v-model="message"></div>


### Vue.directive 自定义指令

2017年7月21日
12:38

> 一、什么是全局API？
	全局API并不在构造器里，而是先声明全局变量或者直接在Vue上定义一些新功能，Vue内置了一些全局API，比如我们今天要学习的指令Vue.directive。说的简单些就是，在构造器外部用Vue提供给我们的API函数来定义新的功能。
	二、Vue.directive自定义指令
	我们可以定义一些属于自己的指令，比如我们要定义一个v-jiegiser的指令，作用就是让文字变成绿色。
	在自定义指令前我们写一个小功能，在页面上有一个数字为10，数字的下面有一个按钮，我们每点击一次按钮后，数字加1.
	你不妨模仿下面的功能，在自己本地先写出这个效果。我用JSRun提供了预览和代码展示功能，你也可以在线调试。
	写好了这个功能，我们现在就自己定义一个全局的指令。我们这里使用Vue.directive( );
``` bash
		Vue.directive('jiegiser',function(el,binding,vnode){
		        el.style='color:'+binding.value;
		});
``` 
可以看到数字已经变成了绿色，说明自定义指令起到了作用。可能您看这个代码还是有些不明白的，比如传入的三个参数到底是什么。
三、自定义指令中传递的三个参数
el: 指令所绑定的元素，可以用来直接操作DOM。
binding:  一个对象，包含指令的很多信息。
vnode: Vue编译生成的虚拟节点。
 
四、自定义指令的生命周期
自定义指令有五个生命周期（也叫钩子函数），分别是 bind,inserted,update,componentUpdated,unbind
	1. bind:只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个绑定时执行一次的初始化动作。
	2. inserted:被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于document中）。
	3. update:被绑定于元素所在的模板更新时调用，而无论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。
	4. componentUpdated:被绑定元素所在模板完成一次更新周期时调用。
	5. unbind:只调用一次，指令与元素解绑时调用。
``` bash
	bind:function(){//被绑定
	     console.log('1 - bind');
	},
	inserted:function(){//绑定到节点
	      console.log('2 - inserted');
	},
	update:function(){//组件更新
	      console.log('3 - update');
	},
	componentUpdated:function(){//组件更新完成
	      console.log('4 - componentUpdated');
	},
	unbind:function(){//解绑
	      console.log('1 - bind');
	}
```


###  vueJS-Vue.extend构造器的延伸


2017年7月22日
12:33

> 一、什么是Vue.extend？
Vue.extend 返回的是一个“扩展实例构造器”,也就是预设了部分选项的Vue实例构造器。经常服务于Vue.component用来生成组件，可以简单理解为当在模板中遇到该组件名称作为标签的自定义元素时，会自动调用“扩展实例构造器”来生产组件实例，并挂载到自定义元素上。
由于我们还没有学习Vue的自定义组件，所以我们先看跟组件无关的用途。
 
二、自定义无参数标签
我们想象一个需求，需求是这样的，要在博客页面多处显示作者的网名，并在网名上直接有链接地址。我们希望在html中只需要写<author></author> ，这和自定义组件很像，但是他没有传递任何参数，只是个静态标签。
我们的Vue.extend该登场了，我们先用它来编写一个扩展实例构造器。代码如下：
操作步骤，我们首先需要做一个构造器。我们将扩展器加载到我们的页面中。
整个代码如下：
``` bash
1	var authorExtend = Vue.extend({
2	    template:"<p><a :href='authorUrl'>{{authorName}}</a></p>",
3	    data:function(){
4	    return{
5	          authorName:'jiegiser',
6	          authorUrl:'http://www.jiegiser.win'
7	          }
8	    }
9	});
```
<!--more-->
这时html中的标签还是不起作用的，因为扩展实例构造器是需要挂载的，我们再进行一次挂载。
1	new authorExtend().$mount('author');
这时我们在html写<author><author>就是管用的。我们来看一下全部代码：
``` bash
1	<!DOCTYPE html>
2	<html lang="en">
3	<head>
4	    <meta charset="UTF-8">
5	    <script type="text/javascript" src="../assets/js/vue.js"></script>
6	    <title>vue.extend-扩展实例构造器</title>
7	</head>
8	<body>
9	    <h1>vue.extend-扩展实例构造器</h1>
10	    <hr>
11	    <author></author>
12	 
13	    <script type="text/javascript">
14	       var authorExtend = Vue.extend({
15	           template:"<p><a :href='authorUrl'>{{authorName}}</a></p>",
16	           data:function(){
17	               return{
18	                   authorName:'JSPang',
19	                   authorUrl:'http://www.jspang.com'
20	               }
21	           }
22	       });
23	       new authorExtend().$mount('author');
24	    </script>
25	</body>
26	</html>
```
最终实现结果：

三、挂载到普通标签上
还可以通过HTML标签上的id或者class来生成扩展实例构造器，Vue.extend里的代码是一样的，只是在挂载的时候，我们用类似jquery的选择器的方法，来进行挂载就可以了。
> 	new authorExtend().$mount('#author');



### Vue.set全局操作
> Vue.set 的作用就是在构造器外部操作构造器内部的数据、属性或者方法。比如在vue构造器内部定义了一个count为1的数据，我们在构造器外部定义了一个方法，要每次点击按钮给值加1.就需要用到Vue.set。
#### 一、引用构造器外部数据：
> 什么是外部数据，就是不在Vue构造器里里的data处声明，而是在构造器外部声明，然后在data处引用就可以了。外部数据的加入让程序更加灵活，我们可以在外部获取任何想要的数据形式，然后让data引用。
看一个简单的代码：
``` bash
	//在构造器外部声明数据
	var outData={
	    count:1,
	    goodName:'car'
	};
	var app=new Vue({
	    el:'#app',
    //引用外部数据
	    data:outData
	})
```
#### 二、在外部改变数据的三种方法：
> 1、用Vue.set改变
``` bash
	function add(){
	       Vue.set(outData,'count',4);
	}
```
> 2、用Vue对象的方法添加
``` bash
	app.count++;
```
> 3、直接操作外部数据
``` bash
1	outData.count++;
```
> 其实这三种方式都可以操作外部的数据，Vue也给我们增加了一种操作外部数据的方法。
#### 三、为什么要有Vue.set的存在?
> 由于Javascript的限制，Vue不能自动检测以下变动的数组。
*当你利用索引直接设置一个项时，vue不会为我们自动更新。
*当你修改数组的长度时，vue不会为我们自动更新。
看一段代码：
> 
1	<!DOCTYPE html>
2	<html lang="en">
3	<head>
4	    <meta charset="UTF-8">
5	    <script type="text/javascript" src="../assets/js/vue.js"></script>
6	    <title>Vue.set 全局操作</title>
7	</head>
8	<body>
9	    <h1>Vue.set 全局操作</h1>
10	    <hr>
11	    <div id="app">
12	        <ul>
13	            <li v-for=" aa in arr">{{aa}}</li>
14	        </ul>
15	       
16	    </div>
17	    <button onclick="add()">外部添加</button>
18	    <script type="text/javascript">
19	     
20	        function add(){
21	            console.log("我已经执行了");
22	           app.arr[1]='ddd';
23	           //Vue.set(app.arr,1,'ddd');
24	        }
25	        var outData={
26	            arr:['aaa','bbb','ccc']
27	        };
28	        var app=new Vue({
29	            el:'#app',
30	            data:outData
31	        })
32	    </script>
33	</body>
34	</html>
35```
> 这时我们的界面是不会自动跟新数组的，我们需要用Vue.set(app.arr,1,’ddd’)来设置改变，vue才会给我们自动更新，这就是Vue.set存在的意义。
 
### Vue的生命周期（钩子函数）

Vue一共有10个生命周期函数，我们可以利用这些函数在vue的每个阶段都进行操作数据或者改变内容。
其实在Vue的官网有一张图已经很好的诠释了生命周期，我在这里就不再多讲了，直接贴图，然后上程序代码。
<!--more-->
![声明周期](vueJS-Vue的生命周期（钩子函数）/zqt.png)
我们直接来看一段代码：
``` bash
<!DOCTYPE html>
<html lang="en">
<head>
<title>Vue生命周期</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="css/bootstrap.min.css" rel="stylesheet">
<script src="js/vue.js"></script>
</head>
<body>
<div id="app">
<div class="panel panel-primary">
<h1>{{count}}</h1>
<button @click="add" class="btn">add</button>
<button onclick="app.$destroy()" class="btn">distroy</button>
</div>
</div>
<script type="text/javascript">
var app = new Vue({
el: '#app',
data: {
count: 1
},
methods: {
add: function() {
this.count++;
}
},
beforeCreate: function() {
console.log('1-beforeCreate 初始化之前');
},
created: function() {
console.log('2-created 创建完成');
},
beforeMount: function() {
console.log('3-beforeMount 挂载之前');
},
mounted: function() {
console.log('4-mounted 被挂载之后');
},
beforeUpdate: function() {
console.log('5-beforeUpdate 数据更新前');
},
updated: function() {
console.log('6-updated 被更新后');
},
activated: function() {
console.log('7-activated');
},
deactivated: function() {
console.log('8-deactivated');
},
beforeDestroy: function() {
console.log('9-beforeDestroy 销毁之前');
},
destroyed: function() {
console.log('10-destroyed 销毁之后')
}
});
</script>
</body>
</html>
```
> 在浏览器中按F12，打开控制台输出，既可以看到操作过程，调用钩子函数的信息。

### Template 制作模版

2017年8月1日
12:55

#### 一、直接写在选项里的模板
直接在构造器里的template选项后边编写。这种写法比较直观，但是如果模板html代码太多，不建议这么写。
javascript代码如下：
``` bash
	var app=new Vue({
	     el:'#app',
	     data:{
	         message:'hello Vue!'
	      },
	     template:`
	        <h1 style="color:red">我是选项模板</h1>
	     `
	})
```
> 这里需要注意的是模板的标识不是单引号和双引号，而是，就是Tab上面的键。
#### 二、写在<template>标签里的模板
这种写法更像是在写HTML代码，就算不会写Vue的人，也可以制作页面。
	    <template id="dd2">
	             <h2 style="color:red">我是template标签模板</h2>
	    </template>
	 
	    <script type="text/javascript">
	        var app=new Vue({
	            el:'#app',
	            data:{
	                message:'hello Vue!'
	            },
	            template:'#dd2'
	        })
	    </script>
#### 三、写在<script>标签里的模板
> 这种写模板的方法，可以让模板文件从外部引入。
``` bash
	    <script type="x-template" id="dd3">
	        <h2 style="color:red">我是script标签模板</h2>
	    </script>
	 
	    <script type="text/javascript">
	        var app=new Vue({
	            el:'#app',
	            data:{
	                message:'hello Vue!'
	            },
	            template:'#dd3'
	        })
	    </script>
```
全部代码如下：
``` bash
<body>
<div id="app">
<h1>{{message}}</h1>
</div>
<hr>
<!--第二种方法，在标签里面建立模板 -->
<template id="dd2">
<h2 style="color:red">我是template(标签)模板</h2>
</template>
<!--第三种模板 -->
<script type="x-template" id="dd3">
<h2 style="color:red">我是script(标签)模板</h2>
</script>
<script src="js/vue.js"></script>
<script>
new Vue({
el: '#app',
data: {
message: 'Hello Vue'
},
template: "#dd3"
// 第一种直接在选项中建立模板，适合较小的模板
// template: `
// <h2 style="color:red">我是选项模板</h2>
// `
})
</script>
</body>
```

### Component 初识组件

2017年8月1日
13:23

前言：component组件是Vue中非常重要的一部分，所以你必须学好Vue component。其实组件就是制作自定义的标签，这些标签在HTML中是没有的。比如：jiegiser那我们就开始学习这种技巧吧。
一、全局化注册组件
全局化就是在构造器的外部用Vue.component来注册，我们注册现在就注册一个
jiegiser的组件来体验一下。
``` bash
	<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <script type="text/javascript" src="js/vue.js"></script>
	    <title>component初试组件</title>
	</head>
	<body>
	    <h1>component初试组件</h1>
	    <hr>
	    <div id="app">
	        <jiegiser></jiegiser>
	    </div>
	 
	    <script type="text/javascript">
	        //注册全局组件
	        Vue.component('jspang',{
	            template:`<div style="color:red;">全局化注册的jiegiser标签</div>`
	        })
	        var app=new Vue({
	            el:'#app',
	            data:{
	            }
	        })
	    </script>
	</body>
	</html>
```
我们在javascript里注册了一个组件，在HTML中调用了他。这就是最简单的一个组件的编写方法，并且它可以放到多个构造器的作用域里。
#### 二、局部注册组件局部注册组件和全局注册组件是向对应的，局部注册的组件只能在组件注册的作用域里进行使用，其他作用域使用无效。
``` bash
1	<!DOCTYPE html>
2	<html lang="en">
3	<head>
4	    <meta charset="UTF-8">
5	    <script type="text/javascript" src="js/vue.js"></script>
6	    <title>component-1</title>
7	</head>
8	<body>
9	    <h1>component初试组件</h1>
10	    <hr>
11	    <div id="app">
12	      <jie></jie>
13	    </div>
14	 
15	    <script type="text/javascript">
16	        var app=new Vue({
17	            el:'#app',
18	            components:{
19	                "jie":{
20	                    template:`<div style="color:red;">局部注册的jie标签</div>`
21	                }
22	            }
23	        })
24	    </script>
25	</body>
26	</html>
```
> 从代码中你可以看出局部注册其实就是写在构造器里，但是你需要注意的是，构造器里的components 是加s的，而全局注册是不加s的。
#### 三、组件和指令的区别
组件注册的是一个标签，而指令注册的是已有标签里的一个属性。在实际开发中我们还是用组件比较多，指令用的比较少。因为指令看起来封装的没那么好，这只是个人观点。

### Component 组件props 属性设置

2017年8月2日
12:43

> props选项就是设置和获取标签上的属性值的，例如我们有一个自定义的组件<jiegiser></jiegiser>,这时我们想给他加个标签属性写成<jiegiser here='gsau'></jiegsier> 意思就是熊猫来自中国，当然这里的gsau可以换成任何值。定义属性的选项是props。
#### 一、定义属性并获取属性值
定义属性我们需要用props选项，加上数组形式的属性名称，例如：props:[‘here’]。在组件的模板里读出属性值只需要用插值的形式，例如{{ here }}.代码如下：
``` bash
<body>
    <div id="app" class="panel panel-primary">
        <h1>jiegiser来自{{message}}</h1>
        <hr>
        <!--定义局部的组件  -->
        <jiegiser here="gsau"></jiegiser>
        <!--这里需要知道vue中出现-是不实现的，我们需要使用驼峰命名的方法如下面的
        from-here可以在定义属性时写为fromHere-->
        <jiegiser from-here="gsau"></jiegiser>
        <!--使用v-bind绑定数据，也可以使用简写的方法直接写一个：就可以了  -->
        <jiegiser v-bind:here="message"></jiegiser>
    </div>
    <hr>
    <script src="js/vue.js"></script>
    <script>
        new Vue({
            el: '#app',
            data: {
                // 绑定这里的数据，需要我们使用v-bind,将值绑定到我们的数值中
                message: 'gsau'
            },
            // 定义局部的组件，这种可以定义多个组件
            components: {
                "jiegiser": {
                    template: `<h3 style="color:green">jiegiser from {{here}}</h3>`,
                    // 挂载属性,使用一个数组，因为属性可能有很多种,
                    props: ['here', 'fromHere']
                }
            }
        })
    </script>
</body>
```
> 上面的代码定义了jiegiser的组件，并用props设置了here的属性值，在here属性值里传递了gsau给组件。
> 最后输出的结果是绿色字体的jiegiser from gsau
#### 二、属性中带’-‘的处理方式
> 我们在写属性时经常会加入’-‘来进行分词，比如：
``` bash
<jiegiser   from-here=”gsau”></jiegiser>
```
那这时我们在props里如果写成props:[‘form-here’]是错误的，我们必须用小驼峰式写法props:[‘formHere’]。
html文件：
``` bash
        <!--这里需要知道vue中出现-是不实现的，我们需要使用驼峰命名的方法如下面的
        from-here可以在定义属性时写为fromHere-->
        <jiegiser from-here="gsau"></jiegiser>
```
javascript文件：
``` bash
        new Vue({
            el: '#app',
            data: {
                // 绑定这里的数据，需要我们使用v-bind,将值绑定到我们的数值中
                message: 'gsau'
            },
            // 定义局部的组件，这种可以定义多个组件
            components: {
                "jiegiser": {
                    template: `<h3 style="color:green">jiegiser from {{here}}</h3>`,
                    // 挂载属性,使用一个数组，因为属性可能有很多种,
                    props: ['fromHere']
                }
            }
        })
```
PS：因为这里有坑，所以还是少用-为好。
#### 三、在构造器里向组件中传值
> 把构造器中data的值传递给组件，我们只要进行绑定就可以了。就是我们所学的指令v-bind:xxx.
我们直接看代码:
Html文件：
``` bash
        <!--使用v-bind绑定数据，也可以使用简写的方法直接写一个：就可以了  -->
        <jiegiser v-bind:here="message"></jiegiser>
```
javascript文件：
``` bash
    <script>
        new Vue({
            el: '#app',
            data: {
                // 绑定这里的数据，需要我们使用v-bind,将值绑定到我们的数值中
                message: 'gsau'
            },
            // 定义局部的组件，这种可以定义多个组件
            components: {
                "jiegiser": {
                    template: `<h3 style="color:green">jiegiser from {{here}}</h3>`,
                    // 挂载属性,使用一个数组，因为属性可能有很多种,
                    props: ['here', 'fromHere']
                }
            }
        })
    </script>
```
最后全部代码：
``` bash
<!DOCTYPE html>
<html lang="en">

<head>
    <title>给定义的标签添加属性</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
    <div id="app" class="panel panel-primary">
        <h1>jiegiser来自{{message}}</h1>
        <hr>
        <!--定义局部的组件  -->
        <jiegiser here="gsau"></jiegiser>
        <!--这里需要知道vue中出现-是不实现的，我们需要使用驼峰命名的方法如下面的
        from-here可以在定义属性时写为fromHere-->
        <jiegiser from-here="gsau"></jiegiser>
        <!--使用v-bind绑定数据，也可以使用简写的方法直接写一个：就可以了  -->
        <jiegiser v-bind:here="message"></jiegiser>
    </div>
    <hr>
    <script src="js/vue.js"></script>
    <script>
        new Vue({
            el: '#app',
            data: {
                // 绑定这里的数据，需要我们使用v-bind,将值绑定到我们的数值中
                message: 'gsau'
            },
            // 定义局部的组件，这种可以定义多个组件
            components: {
                "jiegiser": {
                    template: `<h3 style="color:green">jiegiser from {{here}}</h3>`,
                    // 挂载属性,使用一个数组，因为属性可能有很多种,
                    props: ['here', 'fromHere']
                }
            }
        })
    </script>
</body>
</html>
```

### Component 父子组件关系

2017年8月3日
12:39

作用需求：在实际开发中我们经常会遇到在一个自定义组件中要使用其他自定义组件，这就需要一个父子组件关系。
#### 一、构造器外部写局部注册组件
上节课我们通过component将局部组件的编写放到了构造器内部，如果组件代码量很大，会影响构造器的可读性，造成拖拉和错误。
我们把组件编写的代码放到构造器外部或者说单独文件。
我们需要先声明一个对象,对象里就是组件的内容。
``` bash
        // 声明一个对象
        var jiegiserCompenent = {
            template: `<h1 style="color:red;">jiegiser from gsau</h1>`
        }
```
声明好对象后在构造器里引用就可以了。
``` bash
        new Vue({
            el: '#app',
            // 定义局部的组件，这种可以定义多个组件
            components: {
                // 第一个为我们引用标签的值，第二个值为我们申明的组件，组件为一个对象
                "jiegiser": jiegiserCompenent
            }
        })
```
html中引用
``` bash
<jiegiser></jiegiser>
```
#### 二、父子组件的嵌套
我们先声明一个父组件，比如叫jiegiser，然后里边我们加入一个jie组件，我们来看这样的代码如何写。
1. 我们首先需要在外面吗声明一个子组件。
``` bash
        // 声明子组件
        var jie = {
                template: `<h2 style="color:green;">jie from gsau</h2>`
            }
```
2. 然后我们在父组件中使用子组件。
``` bash
            // 声明一个对象组件
        var jiegiserCompenent = {
            template: `
                <div>
                <h1 style="color:red">jiegiser from gsau</h1>
                <jie></jie>
                </div>
                `,
            // 在父组件中，声明jie标签
            components: {
                "jie": jie
            }
        }
```
整体代码如下：
``` bash
<!DOCTYPE html>
<html lang="en">

<head>
    <title></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
    <div id="app">
        <h1>{{message}}</h1>
        <hr>
        <!--定义一个标签  -->
        <jiegiser></jiegiser>
    </div>
    <script src="js/vue.js"></script>
    <script>
        // 声明子组件
        var jie = {
                template: `<h2 style="color:green;">jie from gsau</h2>`
            }
            // 声明一个对象组件
        var jiegiserCompenent = {
            template: `
                <div>
                <h1 style="color:red">jiegiser from gsau</h1>
                <jie></jie>
                </div>
                `,
            // 在父组件中，声明标签
            components: {
                "jie": jie
            }
        }
        new Vue({
            el: '#app',
            // 定义局部的组件，这种可以定义多个组件
            components: {
                // 第一个为我们引用标签的值，第二个值为我们申明的组件，组件为一个对象
                "jiegiser": jiegiserCompenent
            }
        })
    </script>
</body>

</html>
```
### Component 标签

2017年8月5日
11:50

标签是Vue框架自定义的标签，它的用途就是可以动态绑定我们的组件，根据数据的不同更换不同的组件。
``` bash
<component></component>
```
1.我们先在构造器外部定义三个不同的组件，分别是componentA,componentB和componentC.
``` bash
        var componentA = {
            template: `<div style="color:red;">I'm componentA</div>`
        }
        var componentB = {
            template: `<div style="color:green;">I'm componentB</div>`
        }
        var componentC = {
            template: `<div style="color:pink;">I'm componentC</div>`
        }
```
2.我们在构造器的components选项里加入这三个组件。
``` bash
            components: {
                "componentA": componentA,
                "componentB": componentB,
                "componentC": componentC,
            },
```
3.我们在html里插入component标签，并绑定who数据，根据who的值不同，调用不同的组件。
``` bash
<component v-bind:is="who"></component>
```
这就是我们的组件标签的基本用法。我们提高以下，给页面加个按钮，每点以下更换一个组件。
``` bash
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="js/vue.js"></script>
    <title>component-4</title>
</head>

<body>
    <h1>component-4</h1>
    <hr>
    <div id="app">
        <!--我们所说的componemt组件其实就是我们的component标签,是vue自已定义的，可以动态的使用我们下面声明的组件  -->
        <h1>
            <component v-bind:is="who"></component>
        </h1>
        <br>
        <button @click="changeComponent">change</button>
    </div>
    <script type="text/javascript">
        var componentA = {
            template: `<div style="color:red;">I'm componentA</div>`
        }
        var componentB = {
            template: `<div style="color:green;">I'm componentB</div>`
        }
        var componentC = {
            template: `<div style="color:pink;">I'm componentC</div>`
        }

        var app = new Vue({
            el: '#app',
            data: {
                who: 'componentA'
            },
            components: {
                "componentA": componentA,
                "componentB": componentB,
                "componentC": componentC,
            },
            methods: {
                changeComponent: function() {
                    if (this.who == 'componentA') {
                        this.who = 'componentB';
                    } else if (this.who == 'componentB') {
                        this.who = 'componentC';
                    } else {
                        this.who = 'componentA';
                    }
                }
            }
        })
    </script>
</body>

</html>
```
### propsData Option  全局扩展的数据传递
> propsData 不是和属性有关，他用在全局扩展时进行传递数据。先回顾一下全局扩展的知识，做一个jiegiser的扩展标签出来。实际我们并比推荐用全局扩展的方式作自定义标签，我们学了组件，完全可以使用组件来做，这里只是为了演示propsData的用法。
代码如下：
``` bash
<!DOCTYPE html>
<html lang="en">

<head>
    <title></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <script src="js/vue.js"></script>
</head>

<body>
    <h1>propsData Option</h1>
    <hr>
    <jiegiser></jiegiser>
    <script type="text/javascript">
        // 一个扩展，可以放一个模板
        var jiegiser_a = Vue.extend({
            // 要传一个插值a
            template: `<p>{{message}}</p>`,
            data: function() {
                return {
                    message: 'Hello ,I am jiegiser!'
                }
            }
        })
    </script>
</body>

</html>
```
> 扩展标签已经做好了，这时我们要在挂载时传递一个数字过去，我们就用到了propsData。

我们用propsData三步解决传值：

1、在全局扩展里加入props进行接收。propsData:{a:1}

2、传递时用propsData进行传递。props:[‘a’]

3、用插值的形式写入模板。{{ a }}

完整代码：
``` bash
<!DOCTYPE html>
<html lang="en">

<head>
    <title></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <script src="js/vue.js"></script>
</head>

<body>
    <h1>propsData Option</h1>
    <hr>
    <jiegiser></jiegiser>
    <script type="text/javascript">
        // 一个扩展，可以放一个模板
        var jiegiser_a = Vue.extend({
            // 要传一个插值a
            template: `<p>{{message}}-{{a}}</p>`,
            data: function() {
                return {
                    message: 'Hello ,I am jiegiser!'
                }
            },
            props: ['a']
        });
        // 挂载扩展,这里，跟jquery类似的用法，可以使用id,前面加一个#，或者根据类来选择，使用.
        new jiegiser_a({
            propsData: {
                a: 1
            }
        }).$mount('jiegiser');
    </script>
</body>

</html>
``` bash
> 总结：propsData在实际开发中我们使用的并不多，我们在后边会学到Vuex的应用，他的作用就是在单页应用中保持状态和数据的。


### computed Option  计算选项
> 我们总说选项，选项就是我们声明vue对象里面的el，data等等，computed 的作用主要是对原数据进行改造输出。改造输出：包括格式的编辑，大小写转换，顺序重排，添加符号……。

#### 一、格式化输出结果：

我们先来做个读出价格的例子：我们读书的原始数据是price:100    但是我们输出给用户的样子是（￥100元）。
主要的javascript代码：
``` bash
                    newPrice: function() {
                        // 返回的price是我们data里面的price，我们在这里要进行重新改造返回的price
                        return this.price = '￥' + this.price + '元';
                    },
```
全部代码：
``` bash
<!DOCTYPE html>
<html lang="en">

<head>
    <title></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
    <h1>computed Option 计算选项</h1>
    <br>
    <hr>
    <div class="panel panel-primary">
        <div class="panel-heading">computed Option 计算选项</div>
        <div class="panel-body">
            <div id="app">
                <h2>{{newPrice}}</h2>
            </div>
        </div>
        <script src="js/vue.js"></script>
        <script type="text/javascript">
            new Vue({
                //选项就是我们这里面的el，data等等，
                el: '#app',
                data: {
                    // 我们并没有改变这里的data值
                    price: 100,
                    newsList: newsList
                },
                // 在这里面可以写我们自己的选项
                computed: {
                    newPrice: function() {
                        // 返回的price是我们data里面的price，我们在这里要进行重新改造返回的price
                        return this.price = '￥' + this.price + '元';
                    }
                }
            })
        </script>
</body>

</html>
```
现在输出的结果就是：￥100元。
#### 二、用计算属性反转数组

> 例如：我们得到了一个新闻列表的数组，它的顺序是安装新闻时间的顺序正序排列的，也就是早反生的新闻排在前面。这是反人类的，我们需要给他反转。这时我们就可以用到我们的计算属性了。

没有排序的新闻列表，是安装日期正序排列的。
``` bash
  var newsList = [{
                title: '安徽一4A级景区被撤销 为申报4A给官员送钱送黄金',
                date: '2017/8/24'
            }, {
                title: 'Note 8"有喜无惊"发布，三星能在中国翻身吗？',
                date: '2017/8/24'
            }, {
                title: '公开反对中企投资港口 斯里兰卡司法部长被解职',
                date: '2017/8/25'
            }, {
                title: '陕西一河道8天3人溺亡 当地镇长不接电话不回短信',
                date: '2017/8/26'
            }];
```
我们希望输出的结果：
![结果](vueJS-computed-Option-计算选项/jg.jpg)
我们的在computed里的javascript代码：我们用js原生方法给数组作了反转。
``` bash
                computed: {
                    reversNews: function() {
                        // 反转
                        return this.newsList.reverse();
                    }
                }
```
> 总结：computed 属性是非常有用，在输出数据前可以轻松的改变数据。