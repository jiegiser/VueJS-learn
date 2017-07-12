# VueJS-learn
vue.js框架的学习

### 出现一个错误，明天修改。
vue.js:435 [Vue warn]: Failed to generate render function:

SyntaxError: Invalid or unexpected token in

with(this){return _c('div',{staticClass:"container",attrs:{"id":"app"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-8 col-md-offset-2"},[_c('div',{staticClass:"panel panel-primary"},[_c('div',{staticClass:"panel-heading"},[_v("vue js 2.0学习")]),_v(" "),_c('div',{staticClass:"panel-body"},[_c('h1',[_v("my todos")]),_v(" "),_c('ul',{staticClass:"list-group"},_l((todos),function((todo，index)){return _c('li',{staticClass:"list-group-item"},[_v(_s(todo.title)+"\n                           "),_c('button',{staticClass:"btn btn-warning btn-xs pull-right",on:{"click":function($event){deleteTodo(index)}}},[_v("Delete\n                           ")])])})),_v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();addTodo(newTodo)}}},[_c('div',{staticClass:"form-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(newTodo.title),expression:"newTodo.title"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"addTodo"},domProps:{"value":(newTodo.title)},on:{"input":function($event){if($event.target.composing)return;newTodo.title=$event.target.value}}})]),_v(" "),_m(0)])])])])])])}

