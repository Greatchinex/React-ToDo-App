(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(t,e,n){t.exports=n(71)},39:function(t,e,n){},67:function(t,e,n){},71:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(30),c=n.n(r),l=(n(39),n(18)),i=n(6),d=n(7),s=n(9),u=n(8),p=n(10),m=n(13),h=n(11);var f={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},b=function(){return a.a.createElement("header",{style:f},a.a.createElement("h1",null,"My Todo App"),a.a.createElement(m.b,{style:{color:"#fff",textDecoration:"none"},to:"/"},"Home")," | ",a.a.createElement(m.b,{style:{color:"#fff",textDecoration:"none"},to:"/about"},"About"))},y=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{background:"#f4f4f4",padding:"0.7em",borderBottom:"1px #ccc dotted",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," "," ","   ",n,a.a.createElement("button",{style:v,onClick:this.props.deleteTodo.bind(this,e)},"X"))}}]),e}(o.Component),v={background:"#ff4081",color:"white",border:"none",borderRadius:"50%",padding:"5px 9px",float:"right",cursor:"pointer"},g=y,E=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this,e=this.props.todo.map(function(e){return a.a.createElement(g,{todo:e,key:e.id,markComplete:t.props.markComplete,deleteTodo:t.props.deleteTodo})});return a.a.createElement("div",null,e)}}]),e}(o.Component),j=n(33),O=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).change=function(t){n.setState(Object(j.a)({},t.target.name,t.target.value))},n.submit=function(t){n.props.addTodo(n.state.title),n.setState({title:""}),t.preventDefault()},n.state={title:""},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{style:{display:"flex"},onSubmit:this.submit},a.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo Item",onChange:this.change,style:{flex:"10",padding:"5px"},value:this.state.title}),a.a.createElement("input",{type:"submit",value:"submit",className:"btn",style:{flex:"1"}}))}}]),e}(o.Component);var k=function(){return a.a.createElement("div",null,a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"My First React App")))},x=n(14),w=n.n(x),C=(n(67),n(68),function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).markComplete=function(t){n.setState({todos:n.state.todos.map(function(e){return e.id===t&&(e.completed=!e.completed),e})})},n.deleteTodo=function(t){w.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then(function(e){return n.setState({todos:Object(l.a)(n.state.todos.filter(function(e){return e.id!==t}))})})},n.addTodo=function(t){w.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then(function(t){return n.setState({todos:[].concat(Object(l.a)(n.state.todos),[t.data])})}).catch(function(t){return console.log(t)})},n.state={todos:[]},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){var t=this;w.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(function(e){return t.setState({todos:e.data})})}},{key:"render",value:function(){var t=this;return a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(b,null),a.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(O,{addTodo:t.addTodo}),a.a.createElement(E,{todo:t.state.todos,markComplete:t.markComplete,deleteTodo:t.deleteTodo}))}}),a.a.createElement(h.a,{path:"/about",component:k}))))}}]),e}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.df9015a0.chunk.js.map