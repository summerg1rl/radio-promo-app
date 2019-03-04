!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=React},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.isEmpty=function(e){return[Object,Array].includes((e||{}).constructor)&&!Object.entries(e||{}).length},e.createJSONOutput=function(e){return HtmlService.createHtmlOutput("<pre>"+JSON.stringify(e,null,4)+"</pre>")},e.groupBy=function(e,t){return e.reduce(function(e,n){var o=n[t].toString(),a=e[o]||[];return a.push(n),e[o]=a,e},{})},e}();t.Util=o},function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(9),c=function(e){function t(t){var n=e.call(this,t)||this;return n.state={},n}return a(t,e),t.prototype.componentDidMount=function(){var e=this;this.$el=s(this.el);var t=Object.assign({},this.props,{theme:"bootstrap4"});this.$el.select2(t),Object.keys(this.props.events).forEach(function(t){return s(e.el).on(t,function(n){e.props.events[t](n)})})},t.prototype.componentWillUnmount=function(){this.$el.select2("destroy")},t.prototype.render=function(){var e=this;return r.createElement("div",null,r.createElement("select",{className:"select2 form-control",ref:function(t){return e.el=t}}))},t}(r.Component);t.Select2=c},function(e,t,n){e.exports={station:"station","card-footer":"card-footer",cardFooter:"card-footer","card-body":"card-body",cardBody:"card-body","card-text":"card-text",cardText:"card-text","card-grow":"card-grow",cardGrow:"card-grow",talent:"talent"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=n(5),r=n(6);a.render(o.createElement(r.App,null),document.getElementById("root"))},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(7),c=n(8),i=n(12),l=n(18),p=n(19),u=function(e){function t(t){var n=e.call(this,t)||this;return n.state={countries:null,selectedCountry:null,stations:null,selectedStation:null,selectedStationDetails:null,search:null},n.countrySelected=n.countrySelected.bind(n),n.stationSelected=n.stationSelected.bind(n),n.stationUnselected=n.stationUnselected.bind(n),n}return a(t,e),t.prototype.componentDidMount=function(){var e=this;google.script.run.withSuccessHandler(function(t){e.setState({countries:t}),e.countrySelected(t.find(function(e){return"US"===e.code}))}).getCountrySummaries()},t.prototype.countrySelected=function(e){var t=this;this.setState({selectedCountry:e}),google.script.run.withSuccessHandler(function(e){t.setState({stations:e})}).getStationsByCountry(e.id),google.script.run.withSuccessHandler(function(e){t.setState({search:e})}).getSearchOptions(e.id)},t.prototype.stationSelected=function(e){var t=this;this.setState({selectedStation:e}),google.script.run.withSuccessHandler(function(e){t.setState({selectedStationDetails:e})}).getStation(e.code)},t.prototype.stationUnselected=function(e){this.setState({selectedStation:null,selectedStationDetails:null})},t.prototype.render=function(){return r.createElement("div",{className:l.app},r.createElement("div",{className:"container"},r.createElement(s.Intro,null),null!=this.state.countries&&r.createElement("div",null,r.createElement(c.CountryDropdown,{countries:this.state.countries,onChange:this.countrySelected,defaultCountry:"US"})),this.state.selectedCountry&&r.createElement(i.Stations,{stations:this.state.stations,search:this.state.search,onSelect:this.stationSelected}),this.state.selectedStation&&r.createElement(p.Detail,{station:this.state.selectedStation,detail:this.state.selectedStationDetails,handleClose:this.stationUnselected})))},t}(r.Component);t.App=u},function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=function(e){function t(t){var n=e.call(this,t)||this;return n.state={},n}return a(t,e),t.prototype.render=function(){return r.createElement("div",{className:"jumbotron"},r.createElement("h1",{className:"display-4"},"Radio Promo App"),r.createElement("p",{className:"lead"},"Explain things here..."),r.createElement("hr",{className:"my-4"}),r.createElement("p",null,"Maybe some more text here/"))},t}(r.Component);t.Intro=s},function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(2),c=n(10),i=n(11),l=function(e){function t(t){var n=e.call(this,t)||this;return n.state={selectedCountry:null},n.countrySelected=n.countrySelected.bind(n),n}return a(t,e),t.prototype.formatCountry=function(e){if(!e.id)return e.text;var t=e.code.toLowerCase();return"uk"===t&&(t="gb"),$(c.renderToStaticMarkup(r.createElement("span",{key:e.id,className:i.countrySelector},r.createElement("img",{className:"mr-3",src:"http://files.stevenskelton.ca/flag-icon/flag-icon/svg/country-4x3/"+t+".svg",alt:"Card image cap"}),r.createElement("span",null,e.name," - ",e.stations," stations"))))},t.prototype.formatCountrySelection=function(e){if(!e.id)return e.text;var t=e.code.toLowerCase();return"uk"===t&&(t="gb"),$(c.renderToStaticMarkup(r.createElement("span",{key:e.id,className:i.countrySelector},r.createElement("img",{className:"mr-3",src:"http://files.stevenskelton.ca/flag-icon/flag-icon/svg/country-4x3/"+t+".svg",alt:"Card image cap"}),r.createElement("span",null,e.name))))},t.prototype.countrySelected=function(e){var t=e.params.data;this.props.onChange(t)},t.prototype.render=function(){var e=this,t={"select2:select":this.countrySelected};return this.props.countries.find(function(t){return t.id===e.props.defaultCountry}).selected=!0,r.createElement(s.Select2,{width:"100%",data:this.props.countries,templateResult:this.formatCountry,templateSelection:this.formatCountrySelection,events:t,containerCssClass:"country-dropdown-select2"})},t}(r.Component);t.CountryDropdown=l},function(e,t){e.exports=jQuery},function(e,t){e.exports=ReactDOMServer},function(e,t,n){e.exports={"card-img-overlay":"card-img-overlay",cardImgOverlay:"card-img-overlay","country-selector":"country-selector",countrySelector:"country-selector","select2-container--bootstrap4":"select2-container--bootstrap4",select2ContainerBootstrap4:"select2-container--bootstrap4","select2-selection--single":"select2-selection--single",select2SelectionSingle:"select2-selection--single","select2-selection__placeholder":"select2-selection__placeholder",select2SelectionPlaceholder:"select2-selection__placeholder","select2-selection__arrow":"select2-selection__arrow",select2SelectionArrow:"select2-selection__arrow","select2-selection__rendered":"select2-selection__rendered",select2SelectionRendered:"select2-selection__rendered","select2-search--dropdown":"select2-search--dropdown",select2SearchDropdown:"select2-search--dropdown","select2-search__field":"select2-search__field",select2SearchField:"select2-search__field","select2-results__message":"select2-results__message",select2ResultsMessage:"select2-results__message","select2-selection--multiple":"select2-selection--multiple",select2SelectionMultiple:"select2-selection--multiple","select2-selection__choice":"select2-selection__choice",select2SelectionChoice:"select2-selection__choice","select2-selection__choice__remove":"select2-selection__choice__remove",select2SelectionChoiceRemove:"select2-selection__choice__remove","select2-container":"select2-container",select2Container:"select2-container","select2-selection":"select2-selection",select2Selection:"select2-selection","select2-container--focus":"select2-container--focus",select2ContainerFocus:"select2-container--focus","select2-container--open":"select2-container--open",select2ContainerOpen:"select2-container--open","is-invalid":"is-invalid",isInvalid:"is-invalid","is-valid":"is-valid",isValid:"is-valid","select2-dropdown":"select2-dropdown",select2Dropdown:"select2-dropdown","select2-results__option":"select2-results__option",select2ResultsOption:"select2-results__option","select2-results__option--highlighted":"select2-results__option--highlighted",select2ResultsOptionHighlighted:"select2-results__option--highlighted","select2-results__options":"select2-results__options",select2ResultsOptions:"select2-results__options","select2-results__group":"select2-results__group",select2ResultsGroup:"select2-results__group","select2-selection__clear":"select2-selection__clear",select2SelectionClear:"select2-selection__clear"}},function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),c=n(13),i=n(15),l=function(e){function t(t){var n=e.call(this,t)||this;return n.state={visibleStations:null},n.onSearch=n.onSearch.bind(n),n}return a(t,e),t.prototype.onSearch=function(e){var t=this;this.setState(e,function(){t.setState({visibleStations:t.filter()})})},t.prototype.filter=function(){var e=this,t=function(e,t,n){return null!=e[t]&&e[t].toLowerCase().indexOf(n)>=0},n=function(e,t){return!s.Util.isEmpty(e[t])};return this.props.stations.filter(function(o){return(null==e.state.selectedFormat||(a=o,e.state.selectedFormat===e.props.search.formats.find(function(e){return e.id===a.formatId}).code))&&(null==e.state.selectedParent||t(o,"parentGroup",e.state.selectedParent.toLowerCase()))&&(null==e.state.location||t(o,"location",e.state.location.toLowerCase()))&&(null==e.state.name||t(o,"name",e.state.name.toLowerCase())||t(o,"code",e.state.name.toLowerCase()))&&(!e.state.twitter||n(o,"twitter"))&&(!e.state.instagram||n(o,"instagram"))&&(!e.state.facebook||n(o,"facebook"))&&(!e.state.email||n(o,"email"))&&(!e.state.text||n(o,"text"))&&(!e.state.phone||n(o,"phone"));var a})},t.prototype.render=function(){return null==this.props.stations?r.createElement("div",null,"Loading..."):r.createElement("div",null,r.createElement(c.Search,{options:this.props.search,onSearch:this.onSearch,twitter:this.state.twitter}),r.createElement("div",{className:"row"},r.createElement(i.FilteredList,{stations:this.state.visibleStations||this.props.stations,onSelect:this.props.onSelect,onSearch:this.onSearch})))},t}(r.Component);t.Stations=l},function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(2),c=n(14),i=function(e){function t(t){var n=e.call(this,t)||this;return n.state={parentGroup:null,location:null,name:null,twitter:null,instagram:null,facebook:null,email:null,text:null,phone:null},n.onFormatChange=n.onFormatChange.bind(n),n.onFormatReset=n.onFormatReset.bind(n),n.onParentChange=n.onParentChange.bind(n),n.onParentChangeDebounced=c.debounce(250,n.props.onSearch.bind(n)),n.onLocationChange=n.onLocationChange.bind(n),n.onLocationChangeDebounced=c.debounce(250,n.props.onSearch.bind(n)),n.onNameChange=n.onNameChange.bind(n),n.onNameChangeDebounced=c.debounce(250,n.props.onSearch.bind(n)),n.onTwitterChange=n.onTwitterChange.bind(n),n.onInstagramChange=n.onInstagramChange.bind(n),n.onFacebookChange=n.onFacebookChange.bind(n),n.onEmailChange=n.onEmailChange.bind(n),n.onTextChange=n.onTextChange.bind(n),n.onPhoneChange=n.onPhoneChange.bind(n),n}return a(t,e),t.prototype.onFormatChange=function(e){this.props.onSearch({selectedFormat:e.params.data.id})},t.prototype.onFormatReset=function(e){this.props.onSearch({selectedFormat:null})},t.prototype.onParentChange=function(e){var t=this;this.setState({parentGroup:e.target.value},function(){var e=t.state.parentGroup;t.onParentChangeDebounced({selectedParent:e})})},t.prototype.onLocationChange=function(e){var t=this;this.setState({location:e.target.value},function(){var e=t.state.location;t.onLocationChangeDebounced({location:e})})},t.prototype.onNameChange=function(e){var t=this;this.setState({name:e.target.value},function(){var e=t.state.name;t.onNameChangeDebounced({name:e})})},t.prototype.onTwitterChange=function(e){this.props.onSearch({twitter:e.target.checked})},t.prototype.onInstagramChange=function(e){this.props.onSearch({instagram:e.target.checked})},t.prototype.onFacebookChange=function(e){this.props.onSearch({facebook:e.target.checked})},t.prototype.onEmailChange=function(e){this.props.onSearch({email:e.target.checked})},t.prototype.onTextChange=function(e){this.props.onSearch({text:e.target.checked})},t.prototype.onPhoneChange=function(e){this.props.onSearch({phone:e.target.checked})},t.prototype.render=function(){var e={"select2:select":this.onFormatChange,"select2:unselecting":this.onFormatReset};if(null==this.props.options)return r.createElement("div",null);var t=this.props.options.formats.reduce(function(e,t){return null==e.find(function(e){return e.id===t.code})&&e.push({id:t.code,text:t.name}),e},[]),n="col-sm-12 col-md-6 col-lg-4 form-group";return r.createElement("div",{className:"row py-3"},r.createElement("div",{className:n},r.createElement(s.Select2,{width:"100%",data:[{id:"",text:"All Formats"},{id:"",text:"All Formats"}].concat(t),events:e,placeholder:"All Formats",allowClear:"true"})),r.createElement("div",{className:n},r.createElement("input",{type:"text",className:"form-control",placeholder:"Search by Parent Network",value:this.state.parentGroup,onChange:this.onParentChange})),r.createElement("div",{className:n},r.createElement("input",{type:"text",className:"form-control",placeholder:"Search by Location",value:this.state.location,onChange:this.onLocationChange,"aria-describedby":"locationHelpBlock"}),r.createElement("small",{id:"locationHelpBlock",className:"form-text text-muted"},'* To search for a State/Province NY, try searching for ", NY"')),r.createElement("div",{className:n},r.createElement("input",{type:"text",className:"form-control",placeholder:"Search by Name",value:this.state.name,onChange:this.onNameChange,"aria-describedby":"nameHelpBlock"}),r.createElement("small",{id:"nameHelpBlock",className:"form-text text-muted"},"* Can also search by call-sign.")),r.createElement("div",{className:n},r.createElement("div",{className:"form-check form-check-inline"},r.createElement("input",{className:"form-check-input",type:"checkbox",id:"twitter",checked:this.state.twitter,onChange:this.onTwitterChange}),r.createElement("label",{className:"form-check-label",htmlFor:"twitter"},r.createElement("i",{className:"fab fa-twitter"})," ")),r.createElement("div",{className:"form-check form-check-inline"},r.createElement("input",{className:"form-check-input",type:"checkbox",id:"instagram",checked:this.state.instagram,onChange:this.onInstagramChange}),r.createElement("label",{className:"form-check-label",htmlFor:"instagram"},r.createElement("i",{className:"fab fa-instagram"})," ")),r.createElement("div",{className:"form-check form-check-inline"},r.createElement("input",{className:"form-check-input",type:"checkbox",id:"facebook",checked:this.state.facebook,onChange:this.onFacebookChange}),r.createElement("label",{className:"form-check-label",htmlFor:"facebook"},r.createElement("i",{className:"fab fa-facebook"})," ")),r.createElement("div",{className:"form-check form-check-inline"},r.createElement("input",{className:"form-check-input",type:"checkbox",id:"email",checked:this.state.email,onChange:this.onEmailChange}),r.createElement("label",{className:"form-check-label",htmlFor:"email"},r.createElement("i",{className:"fas fa-envelope"})," ")),r.createElement("div",{className:"form-check form-check-inline"},r.createElement("input",{className:"form-check-input",type:"checkbox",id:"text",checked:this.state.text,onChange:this.onTextChange}),r.createElement("label",{className:"form-check-label",htmlFor:"text"},r.createElement("i",{className:"fas fa-comment"})," ")),r.createElement("div",{className:"form-check form-check-inline"},r.createElement("input",{className:"form-check-input",type:"checkbox",id:"phone",checked:this.state.phone,onChange:this.onPhoneChange}),r.createElement("label",{className:"form-check-label",htmlFor:"phone"},r.createElement("i",{className:"fas fa-phone"})," "))))},t}(r.Component);t.Search=i},function(e,t,n){"use strict";function o(e,t,n,o){var a,r=!1,s=0;function c(){a&&clearTimeout(a)}function i(){var i=this,l=Date.now()-s,p=arguments;function u(){s=Date.now(),n.apply(i,p)}r||(o&&!a&&u(),c(),void 0===o&&l>e?u():!0!==t&&(a=setTimeout(o?function(){a=void 0}:u,void 0===o?e-l:e)))}return"boolean"!=typeof t&&(o=n,n=t,t=void 0),i.cancel=function(){c(),r=!0},i}function a(e,t,n){return void 0===n?o(e,t,!1):o(e,n,!1!==t)}n.r(t),n.d(t,"throttle",function(){return o}),n.d(t,"debounce",function(){return a})},function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(16),c=function(e){function t(t){var n=e.call(this,t)||this;return n.state={},n}return a(t,e),t.prototype.render=function(){var e=this;return null==this.props.stations?r.createElement("div",null,"Loading stations..."):0==this.props.stations.length?r.createElement("div",null,"No results..."):r.createElement(r.Fragment,null,this.props.stations.map(function(t){return r.createElement(s.Summary,{key:t.id,station:t,onSelect:e.props.onSelect})}))},t}(r.Component);t.FilteredList=c},function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),c=n(3),i=n(17),l=function(e){function t(t){var n=e.call(this,t)||this;return n.state={},n.open=n.open.bind(n),n}return a(t,e),t.prototype.shouldComponentUpdate=function(e,t){return e.station!=this.props.station},t.prototype.open=function(){this.props.onSelect(this.props.station)},t.prototype.render=function(){return s.Util.isEmpty(this.props)?r.createElement("div",null,"Loading station..."):r.createElement("div",{className:i.default(c.station,"col-sm-12 col-md-6 col-lg-4 col-xl-3 py-3")},r.createElement("div",{className:"card h-100"},r.createElement("div",{className:"card-header",onClick:this.open},this.props.station.code),r.createElement("div",{className:"card-body"},r.createElement("h5",{className:"card-title",onClick:this.open},this.props.station.name),r.createElement("p",{className:"card-text"},this.props.station.location),r.createElement("div",{className:c.cardGrow},!s.Util.isEmpty(this.props.station.parentGroup)&&r.createElement("p",{className:"card-text"},this.props.station.parentGroup),this.props.station.talent>0&&r.createElement("p",{className:"card-text"},this.props.station.talent," talent"),this.props.station.syndicated>0&&r.createElement("p",{className:"card-text"},this.props.station.syndicated," syndicated talent"),!s.Util.isEmpty(this.props.station.note)&&r.createElement("p",{className:"card-text"},this.props.station.note)),r.createElement("a",{href:"javascript:;",onClick:this.open,className:"btn btn-outline-secondary btn-block"},"View")),r.createElement("div",{className:"card-footer"},r.createElement("div",{className:"row no-gutters"},r.createElement("div",{className:"col"},r.createElement("a",{href:"javascript:;",onClick:this.open},r.createElement("i",{className:"fas fa-eye"}))),r.createElement("div",{className:"col"},this.props.station.website&&r.createElement("a",{href:this.props.station.website,target:"_blank"},r.createElement("i",{className:"fas fa-link"}))),r.createElement("div",{className:"col"},this.props.station.twitter&&r.createElement("a",{href:"https://twitter.com/"+this.props.station.twitter,target:"_blank"},r.createElement("i",{className:"fab fa-twitter"}))),r.createElement("div",{className:"col"},this.props.station.instagram&&r.createElement("a",{href:"https://instagram.com/"+this.props.station.instagram,target:"_blank"},r.createElement("i",{className:"fab fa-instagram"}))),r.createElement("div",{className:"col"},this.props.station.facebook&&r.createElement("a",{href:"https://facebook.com/"+this.props.station.facebook,target:"_blank"},r.createElement("i",{className:"fab fa-facebook"}))),r.createElement("div",{className:"col"},this.props.station.email&&r.createElement("a",{href:"mailto:"+this.props.station.email,target:"_blank"},r.createElement("i",{className:"fas fa-envelope"}))),r.createElement("div",{className:"col"},this.props.station.text&&r.createElement("a",{href:"javascript:;",onClick:this.open},r.createElement("i",{className:"fas fa-comment"}))),r.createElement("div",{className:"col"},this.props.station.phone&&r.createElement("a",{href:"javascript:;",onClick:this.open},r.createElement("i",{className:"fas fa-phone"}))),r.createElement("div",{className:"col"},this.props.station.note&&r.createElement("a",{href:"javascript:;",onClick:this.open},r.createElement("i",{onClick:this.open,className:"fas fa-sticky-note"})))))))},t}(r.Component);t.Summary=l},function(e,t,n){var o;
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
!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)&&o.length){var s=a.apply(null,o);s&&e.push(s)}else if("object"===r)for(var c in o)n.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(o=function(){return a}.apply(t,[]))||(e.exports=o)}()},function(e,t,n){e.exports={app:"app"}},function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(20),c=n(21),i=n(22),l=n(23),p=n(24),u=function(e){function t(t){var n=e.call(this,t)||this;return n.state={},n.handleClose=n.handleClose.bind(n),n}return a(t,e),t.prototype.handleClose=function(e){this.props.handleClose(e)},t.prototype.render=function(){return r.createElement(s.Modal,{contentKey:null!=this.props.station?this.props.station.id:null,handleClose:this.handleClose},r.createElement(c.ModalHeader,null,r.createElement("h5",{className:"modal-title",id:"station-detail-header"},this.props.station.name),r.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.createElement("span",{"aria-hidden":"true"},"×"))),r.createElement(i.ModalBody,null,this.props.detail&&this.props.detail.location&&r.createElement("p",null,this.props.detail.location),this.props.detail&&this.props.detail.parentGroup&&r.createElement("p",null,this.props.detail.parentGroup),this.props.detail&&this.props.detail.note&&r.createElement("p",null,this.props.detail.note),this.props.detail&&this.props.detail.website&&r.createElement("p",null,this.props.detail.website),this.props.detail&&this.props.detail.twitter&&r.createElement("p",null,this.props.detail.twitter),this.props.detail&&this.props.detail.instagram&&r.createElement("p",null,this.props.detail.instagram),this.props.detail&&this.props.detail.facebook&&r.createElement("p",null,this.props.detail.facebook),this.props.detail&&this.props.detail.email&&r.createElement("p",null,this.props.detail.email),this.props.detail&&this.props.detail.text&&r.createElement("p",null,this.props.detail.text),this.props.detail&&this.props.detail.phone&&r.createElement("p",null,this.props.detail.phone),this.props.detail&&this.props.detail.talent&&this.props.detail.talent.map(function(e){return r.createElement(p.Talent,{talent:e})}),this.props.detail&&this.props.detail.syndicatedTalent&&this.props.detail.syndicatedTalent.map(function(e){return r.createElement(p.Talent,{talent:e})}),null==this.props.detail&&r.createElement("p",null,"Loading...")),r.createElement(l.ModalFooter,null,r.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close")))},t}(r.Component);t.Detail=u},function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=function(e){function t(t){return e.call(this,t)||this}return a(t,e),t.prototype.componentDidMount=function(){var e=this;this.$el=$(this.el),this.$el.modal({}),this.$el.on("hidden.bs.modal",function(t){return e.props.handleClose(t)})},t.prototype.componentWillUnmount=function(){this.$el.modal("dispose")},t.prototype.componentDidUpdate=function(e){console.log("modal",e,this.props),null!=this.props.contentKey?this.$el.modal("show"):this.$el.modal("hide")},t.prototype.render=function(){var e=this;return r.createElement("div",{ref:function(t){return e.el=t},className:"modal",tabIndex:-1,role:"dialog"},r.createElement("div",{className:"modal-dialog",role:"document"},r.createElement("div",{className:"modal-content"},this.props.children)))},t}(r.Component);t.Modal=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.ModalHeader=function(e){return o.createElement("div",{className:"modal-header"},e.children)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.ModalBody=function(e){return o.createElement("div",{className:"modal-body"},e.children)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.ModalFooter=function(e){return o.createElement("div",{className:"modal-footer"},e.children)}},function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),c=n(3),i=function(e){function t(t){var n=e.call(this,t)||this;return n.state={},n}return a(t,e),t.prototype.render=function(){return r.createElement("div",{className:c.talent},r.createElement("div",{className:"card"},r.createElement("div",{className:"card-body"},r.createElement("div",{className:"card-title"},this.props.talent.name),!s.Util.isEmpty(this.props.talent.note)&&r.createElement("p",{className:"card-text"},this.props.talent.note),r.createElement("div",{className:"row"},r.createElement("div",{className:"col"},this.props.talent.twitter&&r.createElement("a",{href:"https://twitter.com/"+this.props.talent.twitter,target:"_blank"},r.createElement("i",{className:"fab fa-twitter"}))),r.createElement("div",{className:"col"},this.props.talent.instagram&&r.createElement("a",{href:"https://instagram.com/"+this.props.talent.instagram,target:"_blank"},r.createElement("i",{className:"fab fa-instagram"}))),r.createElement("div",{className:"col"},this.props.talent.facebook&&r.createElement("a",{href:"https://facebook.com/"+this.props.talent.facebook,target:"_blank"},r.createElement("i",{className:"fab fa-facebook"}))),r.createElement("div",{className:"col"},this.props.talent.email&&r.createElement("a",{href:"mailto:"+this.props.talent.email,target:"_blank"},r.createElement("i",{className:"fas fa-envelope"})))))))},t}(r.Component);t.Talent=i}]);
//# sourceMappingURL=index_bundle.js.map