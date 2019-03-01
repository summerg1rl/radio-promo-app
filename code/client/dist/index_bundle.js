!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){t.exports=React},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){}return t.isEmpty=function(t){return[Object,Array].includes((t||{}).constructor)&&!Object.entries(t||{}).length},t.createJSONOutput=function(t){return HtmlService.createHtmlOutput("<pre>"+JSON.stringify(t,null,4)+"</pre>")},t}();e.Util=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=n(3),a=n(4);r.render(o.createElement(a.App,null),document.getElementById("root"))},function(t,e){t.exports=ReactDOM},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),s=n(5),i=n(6),c=n(11),l=n(15),u=n(16),p=function(t){function e(e){var n=t.call(this,e)||this;return n.state={countries:null,selectedCountry:null,stations:null,selectedStation:null,selectedStationDetails:null},n.countrySelected=n.countrySelected.bind(n),n.stationSelected=n.stationSelected.bind(n),n.stationUnselected=n.stationUnselected.bind(n),n}return r(e,t),e.prototype.componentDidMount=function(){var t=this;google.script.run.withSuccessHandler(function(e){t.setState({countries:e}),t.countrySelected(e.find(function(t){return"US"===t.code}))}).getCountrySummaries()},e.prototype.countrySelected=function(t){var e=this;this.setState({selectedCountry:t}),google.script.run.withSuccessHandler(function(t){e.setState({stations:t})}).getStationsByCountry(t.id)},e.prototype.stationSelected=function(t){var e=this;this.setState({selectedStation:t}),google.script.run.withSuccessHandler(function(t){e.setState({selectedStationDetails:t})}).getStation(t.code)},e.prototype.stationUnselected=function(t){this.setState({selectedStation:null})},e.prototype.render=function(){return a.createElement("div",{className:l.app},a.createElement(s.Intro,null),null!=this.state.countries&&a.createElement(i.CountryDropdown,{countries:this.state.countries,onChange:this.countrySelected}),this.state.selectedCountry&&a.createElement(c.Stations,{stations:this.state.stations,onSelect:this.stationSelected}),this.state.selectedStation&&a.createElement(u.Detail,{station:this.state.selectedStation,detail:this.state.selectedStationDetails,handleClose:this.stationUnselected}))},e}(a.Component);e.App=p},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),s=function(t){function e(e){var n=t.call(this,e)||this;return n.state={},n}return r(e,t),e.prototype.render=function(){return a.createElement("div",{className:"jumbotron"},a.createElement("h1",{className:"display-4"},"Radio Promo App"),a.createElement("p",{className:"lead"},"Explain things here..."),a.createElement("hr",{className:"my-4"}),a.createElement("p",null,"Maybe some more text here/"))},e}(a.Component);e.Intro=s},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),s=n(7),i=n(9),c=n(10),l=function(t){function e(e){var n=t.call(this,e)||this;return n.state={selectedCountry:null},n.countrySelected=n.countrySelected.bind(n),n}return r(e,t),e.prototype.formatCountry=function(t){if(!t.id)return t.text;var e=t.code.toLowerCase();return"uk"===e&&(e="gb"),$(i.renderToStaticMarkup(a.createElement("span",{key:t.id,className:c.countrySelector},a.createElement("img",{className:"mr-3",src:"http://files.stevenskelton.ca/flag-icon/flag-icon/svg/country-4x3/"+e+".svg",alt:"Card image cap"}),a.createElement("span",null,t.name," - ",t.stations," stations"))))},e.prototype.formatCountrySelection=function(t){if(!t.id)return t.text;var e=t.code.toLowerCase();return"uk"===e&&(e="gb"),$(i.renderToStaticMarkup(a.createElement("span",{key:t.id,className:c.countrySelector},a.createElement("img",{className:"mr-3",src:"http://files.stevenskelton.ca/flag-icon/flag-icon/svg/country-4x3/"+e+".svg",alt:"Card image cap"}),a.createElement("span",null,t.name))))},e.prototype.countrySelected=function(t){var e=t.params.data;this.props.onChange(e)},e.prototype.render=function(){var t=$.fn.select2.amd.require("select2/data/customDataAdapter"),e={"select2:select":this.countrySelected};return a.createElement(s.Select2,{width:"100%",data:this.props.countries,templateResult:this.formatCountry,templateSelection:this.formatCountrySelection,dataAdapter:t,events:e,containerCssClass:"country-dropdown-select2"})},e}(a.Component);e.CountryDropdown=l},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),s=n(8);!function(){function t(t,e){}t.prototype.addOptions=function(t){},t.prototype.convertToOptions=function(t){return null}}();s.fn.select2.amd.define("select2/data/customDataAdapter",["select2/data/array"],function(t){return function(t){function e(e,n){var o=t.call(this,e,n)||this;return o.$element=e,o}return r(e,t),e.prototype.updateOptions=function(t){this.$element.find("option").remove();this.addOptions(this.convertToOptions(t.data))},e}(t)});var i=function(t){function e(e){var n=t.call(this,e)||this;return n.state={},n}return r(e,t),e.prototype.componentDidMount=function(){var t=this;this.$el=s(this.el),this.$el.select2(this.props),Object.keys(this.props.events).forEach(function(e){return s(t.el).on(e,function(n){t.props.events[e](n)})})},e.prototype.componentWillUnmount=function(){this.$el.select2("destroy")},e.prototype.componentDidUpdate=function(t){JSON.stringify(t)!==JSON.stringify(this.props)&&(s(this.el).data("select2").dataAdapter.updateOptions(this.props),s(this.el).trigger("change"))},e.prototype.render=function(){var t=this;return a.createElement("div",null,a.createElement("select",{className:"select2",ref:function(e){return t.el=e}}))},e}(a.Component);e.Select2=i},function(t,e){t.exports=jQuery},function(t,e){t.exports=ReactDOMServer},function(t,e,n){t.exports={"card-img-overlay":"card-img-overlay",cardImgOverlay:"card-img-overlay","country-selector":"country-selector",countrySelector:"country-selector","select2-container":"select2-container",select2Container:"select2-container","country-dropdown-select2":"country-dropdown-select2",countryDropdownSelect2:"country-dropdown-select2"}},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),s=n(12),i=function(t){function e(e){var n=t.call(this,e)||this;return n.state={stations:[]},n}return r(e,t),e.prototype.render=function(){var t=this;return null==this.props.stations?a.createElement("div",null,"Loading stations..."):a.createElement("div",null,a.createElement("div",null,"There are ",this.props.stations.length," stations"),a.createElement("div",{className:"row"},this.props.stations.map(function(e){return a.createElement(s.Summary,{station:e,onSelect:t.props.onSelect})})))},e}(a.Component);e.Stations=i},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),s=n(1),i=n(13),c=n(14),l=function(t){function e(e){var n=t.call(this,e)||this;return n.state={},n.open=n.open.bind(n),n}return r(e,t),e.prototype.open=function(){this.props.onSelect(this.props.station)},e.prototype.render=function(){return s.Util.isEmpty(this.props)?a.createElement("div",null,"Loading station..."):a.createElement("div",{className:c.default(i.station,"col-sm-12 col-md-6 col-lg-4 col-xl-3 py-3")},a.createElement("div",{className:"card h-100"},a.createElement("div",{className:"card-header"},this.props.station.code),a.createElement("div",{className:"card-body"},a.createElement("h5",{className:"card-title",onClick:this.open},this.props.station.name),a.createElement("p",{className:"card-text"},this.props.station.location),!s.Util.isEmpty(this.props.station.parentGroup)&&a.createElement("p",{className:"card-text"},this.props.station.parentGroup),!s.Util.isEmpty(this.props.station.note)&&a.createElement("p",{className:"card-text"},this.props.station.note),a.createElement("a",{href:"#",className:"btn btn-block"},"View")),a.createElement("div",{className:"card-footer"},a.createElement("div",{className:"row no-gutters"},a.createElement("div",{className:"col"},a.createElement("a",{href:"#"},a.createElement("i",{className:"fas fa-eye"}))),a.createElement("div",{className:"col"},this.props.station.website&&a.createElement("a",{href:this.props.station.website,target:"_blank"},a.createElement("i",{className:"fas fa-link"}))),a.createElement("div",{className:"col"},this.props.station.twitter&&a.createElement("a",{href:"https://twitter.com/"+this.props.station.twitter,target:"_blank"},a.createElement("i",{className:"fab fa-twitter"}))),a.createElement("div",{className:"col"},this.props.station.instagram&&a.createElement("a",{href:"https://instagram.com/"+this.props.station.instagram,target:"_blank"},a.createElement("i",{className:"fab fa-instagram"}))),a.createElement("div",{className:"col"},this.props.station.facebook&&a.createElement("a",{href:"https://facebook.com/"+this.props.station.facebook,target:"_blank"},a.createElement("i",{className:"fab fa-facebook"}))),a.createElement("div",{className:"col"},this.props.station.email&&a.createElement("a",{href:"mailto:"+this.props.station.email,target:"_blank"},a.createElement("i",{className:"fas fa-envelope"}))),a.createElement("div",{className:"col"},this.props.station.text&&a.createElement("a",{href:"#"},a.createElement("i",{className:"fas fa-comment"}))),a.createElement("div",{className:"col"},this.props.station.phone&&a.createElement("a",{href:"#"},a.createElement("i",{className:"fas fa-phone"}))),a.createElement("div",{className:"col"},this.props.station.note&&a.createElement("a",{href:"#"},a.createElement("i",{className:"fas fa-sticky-note"})))))))},e}(a.Component);e.Summary=l},function(t,e,n){t.exports={station:"station"}},function(t,e,n){var o;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var a=typeof o;if("string"===a||"number"===a)t.push(o);else if(Array.isArray(o)&&o.length){var s=r.apply(null,o);s&&t.push(s)}else if("object"===a)for(var i in o)n.call(o,i)&&o[i]&&t.push(i)}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(o=function(){return r}.apply(e,[]))||(t.exports=o)}()},function(t,e,n){t.exports={app:"app"}},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),s=n(17),i=n(18),c=n(19),l=n(20),u=function(t){function e(e){var n=t.call(this,e)||this;return n.state={},n.handleClose=n.handleClose.bind(n),n}return r(e,t),e.prototype.handleClose=function(t){this.props.handleClose(t)},e.prototype.render=function(){return a.createElement(s.Modal,{contentKey:null!=this.props.station?this.props.station.id:null,handleClose:this.handleClose},a.createElement(i.ModalHeader,null,a.createElement("h5",{className:"modal-title",id:"station-detail-header"},this.props.station.name),a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},a.createElement("span",{"aria-hidden":"true"},"×"))),a.createElement(c.ModalBody,null,this.props.detail&&a.createElement("span",null,this.props.detail.note),null==this.props.detail&&a.createElement("span",null,"Loading...")),a.createElement(l.ModalFooter,null,a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close")))},e}(a.Component);e.Detail=u},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),s=n(1),i=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.componentDidMount=function(){var t=this;this.$el=$(this.el),this.$el.modal({}),this.$el.on("hidden.bs.modal",function(e){return t.props.handleClose(e)})},e.prototype.componentWillUnmount=function(){this.$el.modal("dispose")},e.prototype.componentDidUpdate=function(t){console.log("modal",t,this.props),t.contentKey!=this.props.contentKey&&(null==this.props||s.Util.isEmpty(this.props.contentKey)?this.$el.modal("hide"):null==this.props||s.Util.isEmpty(this.props.contentKey)||this.$el.modal("show"))},e.prototype.render=function(){return a.createElement("div",{className:"modal",tabIndex:-1,role:"dialog"},a.createElement("div",{className:"modal-dialog",role:"document"},a.createElement("div",{className:"modal-content"},this.props.children)))},e}(a.Component);e.Modal=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0);e.ModalHeader=function(t){return o.createElement("div",{className:"modal-header"},t.children)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0);e.ModalBody=function(t){return o.createElement("div",{className:"modal-body"},t.children)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0);e.ModalFooter=function(t){return o.createElement("div",{className:"modal-footer"},t.children)}}]);
//# sourceMappingURL=index_bundle.js.map