(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(2),s=a(3),c=a(4),o=a(0),r=a.n(o),l=a(6),m=a.n(l),h=(a(12),function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).nextHandler=function(){i.state.ageChecked&&i.state.heightChecked&&(i.props.nextCeleb(),i.setState({ageChecked:!1,heightChecked:!1}))},i.reveal=function(e){var t=e.target.innerHTML;"How old?"===t&&i.setState({ageChecked:!0}),"How tall?"===t&&i.setState({heightChecked:!0})},i.state={heightCTA:"How tall",ageCTA:"How old"},i}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.ageChecked,t=this.state.heightChecked;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card transparent",style:{backgroundImage:"url(".concat(this.props.info.img,")")},onClick:this.nextHandler},r.a.createElement("div",{className:"nameContainer"},r.a.createElement("h2",{className:"name"},this.props.info.name)),r.a.createElement("div",{className:this.state.ageChecked&&this.state.heightChecked?"next":"hide"},r.a.createElement("div",null,"Next >"),r.a.createElement("p",{className:"summary"},this.props.info.name," is ",this.props.info.height," and ",this.props.info.age," years old"))),r.a.createElement("div",{className:"button-container"},r.a.createElement("div",{className:"flip-container"},r.a.createElement("div",{className:"flipper ".concat(e?"flip":""),onClick:this.reveal},r.a.createElement("div",{className:"front button"},"How old?"),r.a.createElement("div",{className:"back button"},r.a.createElement("span",{className:"result ".concat(e?"":"hide")},this.props.info.age)))),r.a.createElement("div",{className:"flip-container"},r.a.createElement("div",{className:"flipper ".concat(t?"flip":""),onClick:this.reveal},r.a.createElement("div",{className:"front button"},"How tall?"),r.a.createElement("div",{className:"back button"},r.a.createElement("span",{className:"result ".concat(t?"":"hide")},this.props.info.height))))))}}]),a}(o.Component)),p=[{name:"Taylor Swift",height:"5' 10\"",age:"30",img:"https://api.time.com/wp-content/uploads/2019/04/taylor-swift-time-100-2019-082.jpg?quality=85&zoom=2"},{name:"Karen Gillan",height:"5' 11\"",age:"32",img:"https://i.pinimg.com/originals/ea/02/d4/ea02d4280c0eceb8e687bf46d3a0b21b.jpg"},{name:"Shakira",height:"5' 2\"",age:"43",img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shakira-performs-onstage-during-the-pepsi-super-bowl-liv-news-photo-1580743510.jpg?crop=1.00xw:0.668xh;0,0.0692xh&resize=480:*"},{name:"Danny DeVito",height:"4' 10\"",age:"75",img:"https://metro.co.uk/wp-content/uploads/2019/05/GettyImages-1137433022.jpg?quality=90&strip=all"},{name:"Isla Fisher",height:"5' 3\"",age:"44",img:"https://assets.forwardcdn.com/images/cropped/gettyimages-623976234-1519230417.jpg"},{name:"Danny Glover",height:"6' 4\"",age:"73",img:"https://i.pinimg.com/originals/46/28/31/46283198847667b47c52e8a97d11329a.jpg"},{name:"Harrison Ford",height:"6' 1\"",age:"77",img:"https://cnet3.cbsistatic.com/img/Sk9WkYGlR3RJ7y8TiZrfY7UJ6aY=/940x0/2015/07/07/4eb66f23-8702-46ac-b15f-c61352b41ccd/hansolo2.jpg"},{name:"Jeremy Clarkson",height:"6' 5\"",age:"60",img:"https://cdn.images.express.co.uk/img/dynamic/20/590x/secondary/Jeremy-Clarkson-551139.jpg"},{name:"Boris Johnson",height:"5' 9\"",age:"55",img:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAzOjos.img"}],g=[].concat(p),d=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).pickCeleb=function(){0===g.length&&(g=g.concat(p));var e=Math.floor(Math.random()*g.length),t=g[e];g.splice(e,1),i.setState({stats:t}),console.log(g)},i.state={stats:g[0]},g.splice(0,1),i}return Object(i.a)(a,[{key:"calcAge",value:function(e){var t=Date.parse(e),a=Date.now()-t.getTime(),n=new Date(a);return Math.abs(n.getFullYear()-1970)}},{key:"render",value:function(){return r.a.createElement(h,{info:this.state.stats,nextCeleb:this.pickCeleb})}}]),a}(o.Component);m.a.render(r.a.createElement(d,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.2df9095c.chunk.js.map