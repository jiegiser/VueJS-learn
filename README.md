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


