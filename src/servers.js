import React,{Component,Fragment} from 'react'



class Servers extends Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:"11111",
            inputVlaue2:"222",
            lists:[
                {"name":"学习react"},
                {"name":"学习canvas"},
            ]
        }
    }
    render(){
        return(
            //这个最外层的div必须有，或者是别的标签，必须有一层外包标签，否则会报错
            // <div> 
            <Fragment>
                {/* 注释的方法 */}
                <div>1. Fragment解释：加上最外层的DIV，组件就是完全正常的，但是你的布局就偏不需要这个最外层的标签怎么办?比如我们在作Flex布局的时候,外层还真的不能有包裹元素。<br/>
                    这种矛盾其实React16已经有所考虑了，为我们准备了Fragment标签。要想使用Fragment，需要先进行引入<br/>
                    <br/>
                    2. 使用该标签的话，在浏览器渲染页面。是不会显示的，表示，这几个标签是直接在id=root的标签下<br/>
                    <br/>
                    3. react的列表添加可以通过es6的数组扩展的方式添加；但是删除要先存储一个临时变量，处理完该变量之后，再去赋值，不可以直接操作state上的属性<br/>
                    <br/>
                    4. 在标签上写class名的时候，不能直接写class="xxxx",  而是要写成className="xxxx"; 这是jsx的一个语法问题<br/>
                    <br/>
                    5. 将内容以html的形式输出的话，使用dangerouslySetInnerHTML=双花括号__html:this.state.inputValue双花括号 ，相当于vue中的v-html <br/>
                    <br/>
                    6.JSX中标签 label 中的for在jsx语法中不可以写for，不影响页面，但是控制台会爆红，因为和javascript中的for循环混淆，所有要使用htmlfor；然后实现点击label激活对应的input <br/>
                    <br/>
                </div>
                <br/>
                <div><input value={this.state.inputValue} onChange={this.changeValue.bind(this)}/><button onClick={this.addStudy.bind(this)}>增加课程</button></div>
                <ul>
                    {
                        this.state.lists.map((item,index)=>{
                            return <li key={index} onClick={this.deleteStudy.bind(this,index)} dangerouslySetInnerHTML={{__html:item.name}}></li>
                        })
                    }
                </ul>
            
            </Fragment> 
        )
    }
    changeValue(e){
       // 如果不对onchange中进行改变this指向，是会报错的，
       //改变state中的值必须使用特定的方法

        this.setState({
            inputValue:e.target.value ,
            inputVlaue2:e.target.value 
        });
       
    }
    addStudy(){
        this.setState({
            lists:[...this.state.lists,{"name":this.state.inputVlaue2}]
        });

    }
    deleteStudy(index){
        let lists = this.state.lists.concat();
        lists.splice(index,1);
        this.setState({
            lists:lists
        });
    }
}
export default Servers