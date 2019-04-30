Vue.component('v-table', {
    props: {
        columns: {
            type: Array,
            default () {
                return []
            }
        },
        data: {
            type: Array,
            default () {
                return []
            }
        }
    },
    // 使得排序后的colcumns和data不影响原始数据
    data() {
        return {
            currentColumns: [],
            currentData: []
        }
    },
    methods: {
        makeColumns() {
            this.currentColumns = this.columns.map((col, index) => {
                // 添加一个字段标识当前列排序的状态，后续使用
                col._sortType = 'normal';
                // 添加一个字段标识当前列在数组中的索引,后续使用
                col._index = index;
                return col;
            })
        },
        makeData() {
            this.currentData = this.data.map((row, index) => {
                // 添加一个字段标识当前行在数组中的索引，后续使用
                row._index = index;
                return row;
            })
        },
        handleSortByAsc(index){
            let key=this.currentColumns[index].key;
            this.currentColumns.forEach((col)=>{
                col._sortType='normal';
            });
            this.currentColumns[index]._sortType='asc';
            this.currentData.sort((a,b)=>{
                return a[key]>b[key] ? 1: -1;
            });
        },
        handleSortByDesc(index){
            let key=this.currentColumns[index].key;
            this.currentColumns.forEach((col)=>{
                col._sortType='normal';
            });
            this.currentColumns[index]._sortType='desc';
            this.currentData.sort((a,b)=>{
                return a[key]<b[key] ? 1: -1;
            });
        }
    },
    mounted() {
        // v-table初始化使用
        this.makeColumns();
        this.makeData();
    },
    render(createElement) {
        let _this=this;
        let ths = [];
        let trs = [];
        this.currentData.forEach((row)=>{
            let tds=[];
            _this.currentColumns.forEach((cell)=>{
                tds.push(createElement('td',row[cell.key]))
            });
            trs.push(createElement('tr',tds))
        });
        this.currentColumns.forEach((col,index)=>{
            // 如果col.sortable没有定义，或者值为false，就直接把col.title渲染出来,否则除了渲染title，还加了两个a元素
            // 用来实现升序与降序的操作。
            if(col.sortable){
                ths.push(createElement('th',[
                    createElement('span',col.title),
                    // 升序---
                    createElement('a',{
                        class:{
                            on:col._sortType==='asc'
                        },
                        on:{
                            click(){
                                _this.handleSortByAsc(index);
                            }
                        }
                    },'↑'),
                    // 降序
                    createElement('a',{
                        class:{
                            on:col._sortType==='desc'
                        },
                        on:{
                            click(){
                                _this.handleSortByDesc(index);
                            }
                        }
                    },'↓')
                ]))
            }else{
                ths.push(createElement('th',col.title));
            }
        })
        return createElement('table',
            [
                createElement('thead', [
                    createElement('tr', ths)
                ]),
                createElement('tbody', trs)
            ]
        )
    },
    // 当渲染完表格后，父级修改了data数据，比如增加或删除，v-table的currentData也应该进行更新；如果某列已经存在排序状态
    // 更新后应该直接处理一次排序，
    // 通过遍历currentColumns来找出是否按某一列进行过排序，如果有，就按照当前排序状态对更新后的数据做一次排序操作
    watch: {
        data(){
            this.makeData();
            let sortedColumn=this.currentColumns.filter((col)=>{
                return col._sortType!=='normal';
            });
            if(sortedColumn.length>0){
                if(sortedColumn[0]._sortType==='asc'){
                    this.handleSortByAsc(sortedColumn[0]._index);
                }else{
                    this.handleSortByDesc(sortedColumn[0]._index);
                }
            }
        }
    },
})