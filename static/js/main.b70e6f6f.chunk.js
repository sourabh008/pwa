(window.webpackJsonppwa=window.webpackJsonppwa||[]).push([[0],{18:function(e,n,t){e.exports=t(42)},23:function(e,n,t){},24:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var a=t(1),o=t.n(a),r=t(11),c=t.n(r),i=(t(23),t(12)),s=t(13),u=t(16),l=t(14),h=t(17),d=(t(24),t(15)),m=t.n(d),p=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(o)))).state={users:[],isLoading:!0},t}return Object(h.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){this.fetchUsers()}},{key:"fetchUsers",value:function(){var e=this;m.a.get("https://us-central1-socialmediaapp-d1306.cloudfunctions.net/api/screams").then(function(n){return e.setState({users:n.data,isLoading:!1})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state,n=e.isLoading,t=e.users;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"User Posts"),n?o.a.createElement("h3",null,"Loading..."):t.map(function(e){var n=e.body;return o.a.createElement("div",{key:n},o.a.createElement("p",null,n),o.a.createElement("hr",null))}))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.b70e6f6f.chunk.js.map