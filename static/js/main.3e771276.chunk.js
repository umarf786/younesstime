(this["webpackJsonpticking-clock-with-react"]=this["webpackJsonpticking-clock-with-react"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(7),o=n.n(i),r=(n(13),n(1)),l=n(2),u=n(4),s=n(3),m=n(5),h=(n(14),function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("h2",null,"YST: Youness Standard Time ",c.a.createElement("br",null)," (+2hr your local time)"),c.a.createElement("h3",null,"The actual time is ",this.props.actual))}}]),t}(a.Component)),v=(n(15),new Date);v=new Date(v.setHours(v.getHours()+2));var p=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={time:(new Date).toLocaleTimeString(),newtime:v.toLocaleTimeString()},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval((function(){return e.updateClock()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"updateClock",value:function(){var e=new Date;e=new Date(e.setHours(e.getHours()+2)),this.setState({time:(new Date).toLocaleTimeString(),newtime:e.toLocaleTimeString()})}},{key:"render",value:function(){return c.a.createElement("div",{className:"Time"},c.a.createElement("p",null," ",this.state.newtime),c.a.createElement(h,{actual:this.state.time}))}}]),t}(a.Component),f=(n(16),function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"clock"},c.a.createElement(p,null)))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.3e771276.chunk.js.map