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
