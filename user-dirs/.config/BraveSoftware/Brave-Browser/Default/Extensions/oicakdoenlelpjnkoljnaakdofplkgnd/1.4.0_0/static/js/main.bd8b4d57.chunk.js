(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(13),i=n.n(a),s=(n(56),n(49)),c=n(4),l=n.n(c),u=n(10),h=n(2),d=n(3),f=n(12),p=n(6),b=n(5),m=(n(33),n(18)),v=n(121),g=n(122),k=n(123),y=n(124);function T(e){return function(){var t,n=Object(p.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=Object(p.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(f.a)(this,t)}}var w=function(e){Object(b.a)(n,e);var t=T(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"genNormalString",value:function(e,t){return o.a.createElement("span",{key:t},e)}},{key:"genKeywordString",value:function(e,t){return o.a.createElement("span",{className:"keyword",key:t},e)}},{key:"render",value:function(){if(!this.props.keyword||""===this.props.keyword.trim())return o.a.createElement("div",{className:this.props.className},this.genNormalString(this.props.children));var e=function(e,t){return e+"-"+t};try{var t=new RegExp(this.props.keyword,"ig"),n=t.exec(this.props.children);this.segments=this.props.children.split(t);var r=[],a=0,i=0;r.push(this.genNormalString(this.segments[0],e(a++,this.segments[0]))),i+=this.segments[0].length;for(var s=1;s<this.segments.length;s++)r.push(this.genKeywordString(this.props.children.substring(i,i+n[0].length),e(a++,this.props.keyword))),r.push(this.genNormalString(this.segments[s],e(a++,this.segments[s]))),i+=n[0].length,i+=this.segments[s].length;return o.a.createElement("div",{className:this.props.className},r)}catch(c){return o.a.createElement("div",{className:this.props.className},this.genNormalString(this.props.children))}}}]),n}(o.a.Component);function N(e){return function(){var t,n=Object(p.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=Object(p.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(f.a)(this,t)}}var C=function(e){Object(b.a)(n,e);var t=N(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.tab;return"loading"===e.status?o.a.createElement(v.a,{className:"front-icon"}):e.favIconUrl?o.a.createElement("img",{width:"16px",src:e.favIconUrl,alt:""}):e.isBookmark?o.a.createElement(g.a,{className:"front-icon",theme:"twoTone",twoToneColor:"#ffbf2b"}):e.isGoogleSearch?o.a.createElement(k.a,{type:"search",className:"front-icon"}):o.a.createElement(y.a,{className:"front-icon"})}}]),n}(o.a.Component),S=function(e){Object(b.a)(n,e);var t=N(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e="title"+(this.props.tab.active?" active":"");return this.props.tab.title?this.props.tab.isGoogleSearch?o.a.createElement("span",{className:"searchItem"},this.props.tab.title):o.a.createElement(w,{className:e,keyword:this.props.keyword},this.props.tab.title):o.a.createElement(w,{className:e},"loading...")}}]),n}(o.a.Component),I=function(e){Object(b.a)(n,e);var t=N(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement(w,{className:"url",keyword:this.props.keyword},this.props.tab.url)}}]),n}(o.a.Component),E=function(e){Object(b.a)(n,e);var t=N(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return this.props.show?o.a.createElement("div",{className:"closeTabControl"},o.a.createElement("span",{className:"closeTabTip"},o.a.createElement("span",{className:"kbd"},"Alt")," + ",o.a.createElement("span",{className:"kbd"},"w")," to close Sub-Tabs"),o.a.createElement("span",{className:"closeTabButton"},o.a.createElement(m.a,{className:"kbd",size:"small",onClick:this.props.onClosedButtonClick},"Close Sub-Tabs"))):null}}]),n}(o.a.Component),R=function(e){Object(b.a)(n,e);var t=N(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e={minHeight:this.props.height+"px"};return o.a.createElement("div",{className:"vertical-line",style:e})}}]),n}(o.a.Component),O=function(e){Object(b.a)(n,e);var t=N(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).onSelected=function(){r.selected()&&r.props.onTabItemSelected&&r.props.onTabItemSelected(r.selfRef.current.getBoundingClientRect())},r.updateSidelineLength=function(){r.props.node.children&&r.props.node.children.length>0&&r.setState({sideLineHeight:r.getSidelineHeight()})},r.selected=function(){return r.props.selectedTabId&&r.props.selectedTabId===r.props.tab.id},r.selfRef=o.a.createRef(),r.state={sideLineHeight:0},r}return Object(d.a)(n,[{key:"getChildren",value:function(){return this.props.children?o.a.createElement("div",{className:"fake-ul treeParent"},o.a.createElement(R,{height:this.getSidelineHeight()}),this.props.children):null}},{key:"getSidelineHeight",value:function(){if(this.itemHeight){var e=this.props.node.children.length,t=this.getAllChildrenCount(this.props.node),n=1+this.getAllChildrenCount(this.props.node.children[e-1]),r=this.itemHeight;return(t-n)*r+r/2}return 0}},{key:"getAllChildrenCount",value:function(e){if(0===e.children.length)return 0;for(var t=e.children.length,n=0;n<e.children.length;n++)t+=this.getAllChildrenCount(e.children[n]);return t}},{key:"componentDidMount",value:function(){this.itemHeight=this.selfRef.current.getBoundingClientRect().height,this.updateSidelineLength()}},{key:"componentDidUpdate",value:function(){this.onSelected()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"fake-li"},o.a.createElement("div",{className:this.selected()?"container selected":"container",ref:this.selfRef},o.a.createElement("div",{className:"icon-container",onClick:function(){e.props.onContainerClick(e.props.tab)}},o.a.createElement(C,{tab:this.props.tab})),o.a.createElement(E,{show:!this.props.tab.isBookmark,onClosedButtonClick:function(){e.props.onClosedButtonClick(e.props.node)}}),o.a.createElement("div",{className:"content-container",onClick:function(){e.props.onContainerClick(e.props.tab)}},o.a.createElement(S,{tab:this.props.tab,keyword:this.props.keyword}),o.a.createElement(I,{tab:this.props.tab,keyword:this.props.keyword}))),this.getChildren())}}]),n}(o.a.Component),j=function(e){Object(b.a)(n,e);var t=N(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"fake-li"},o.a.createElement("div",{className:this.selected()?"container selected":"container",ref:this.selfRef},o.a.createElement("div",{className:"icon-container",onClick:function(){e.props.onContainerClick(e.props.tab)}},o.a.createElement(C,{tab:this.props.tab})),o.a.createElement("div",{className:"content-container",onClick:function(){e.props.onContainerClick(e.props.tab)}},o.a.createElement(S,{tab:this.props.tab,keyword:this.props.keyword}))),this.getChildren())}}]),n}(O);function B(e){return function(){var t,n=Object(p.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=Object(p.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(f.a)(this,t)}}var x=function(e){Object(b.a)(n,e);var t=B(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).onTabItemSelected=function(e){var t=r.selfRef.current.getBoundingClientRect();e.bottom>t.bottom?r.selfRef.current.scrollTop+=e.bottom-t.bottom:e.top<t.top&&(r.selfRef.current.scrollTop-=t.top-e.top)},r.selfRef=o.a.createRef(),r}return Object(d.a)(n,[{key:"renderChildren",value:function(e){var t=this;return 0===e.children.length?null:e.children.map(function(e){return t.renderTabTreeNode(e)})}},{key:"renderTabTreeNode",value:function(e){var t=e.tab.isGoogleSearch?j:O;return o.a.createElement(t,{onTabItemSelected:this.props.onTabItemSelected,selectedTabId:this.props.selectedTabId,node:e,key:e.tab.id,tab:e.tab,keyword:this.props.keyword,onContainerClick:this.props.onContainerClick,onClosedButtonClick:this.props.onClosedButtonClick},this.renderChildren(e))}},{key:"render",value:function(){return o.a.createElement("div",{className:"tabTreeView",ref:this.selfRef},this.renderChildren(this.props.rootNode))}}]),n}(o.a.Component),P=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;Object(h.a)(this,e),this.tab=t,this.children=n,this.parent=r}return Object(d.a)(e,[{key:"hasParent",value:function(){return void 0!==this.parentId}},{key:"getParent",value:function(){return this.parent}},{key:"toString",value:function(){return void 0===this.tab?"ROOT":this.tab.id}},{key:"getAllTabIds",value:function(){var e=[this.tab.id];return this.children.length>0&&this.children.forEach(function(t){e=e.concat(t.getAllTabIds())}),e}},{key:"findChildById",value:function(e){if(void 0!==this.tab&&this.tab.id===e)return this;for(var t=0;t<this.children.length;t++){var n=this.children[t].findChildById(e);if(null!==n)return n}return null}},{key:"setTitle",value:function(e){this.tab.title=e}},{key:"setFavIconUrl",value:function(e){this.tab.favIconUrl=e}},{key:"setStatus",value:function(e){this.tab.status=e}},{key:"setTitleById",value:function(e,t){var n=this.findChildById(e);null!==n&&n.setTitle(t)}},{key:"setFavIconUrlById",value:function(e,t){var n=this.findChildById(e);null!==n&&n.setFavIconUrl(t)}},{key:"setStatusById",value:function(e,t){var n=this.findChildById(e);null!==n&&n.setStatus(t)}}]),e}(),F=function(){function e(t,n,r){var o=this;Object(h.a)(this,e),this.dfs=function(e){if(e&&e.children&&e.children.length>0)for(var t=0;t<e.children.length;t++)o.tabList.push(e.children[t]),o.dfs(e.children[t])},this.refreshQueue(t,n,r)}return Object(d.a)(e,[{key:"getNextTab",value:function(){return 0===this.tabList.length?null:(this.currentIdx=(this.currentIdx+1)%this.tabList.length,this.tabList[this.currentIdx].tab)}},{key:"getPreviousTab",value:function(){return 0===this.tabList.length?null:(this.currentIdx=-1===this.currentIdx?0:this.currentIdx,this.currentIdx=(this.currentIdx-1+this.tabList.length)%this.tabList.length,this.tabList[this.currentIdx].tab)}},{key:"refreshQueue",value:function(e,t,n){this.tabList=[],this.dfs(e),this.dfs(t),this.dfs(n),this.currentIdx=-1}},{key:"setCurrentIdx",value:function(e){for(var t=0;t<this.tabList.length;t++)this.tabList[t].tab.id===e.id&&(this.currentIdx=t)}},{key:"getNodeByTabId",value:function(e,t){if(t.tab&&t.tab.id===e)return t;for(var n=0;n<t.children.length;n++){var r=this.getNodeByTabId(e,t.children[n]);if(null!==r)return r}return null}}]),e}(),M=n(50),L=function e(){var t=this;Object(h.a)(this,e),this.genGoogleSuggestRootNode=function(){var e=Object(u.a)(l.a.mark(function e(n){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n&&0!==n.length){e.next=2;break}return e.abrupt("return",Promise.resolve(new P));case 2:return e.abrupt("return",t.fetchGoogleSearchSuggestion(n).then(t.assembleRootNodeBySuggestItems));case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.fetchGoogleSearchSuggestion=function(){var e=Object(u.a)(l.a.mark(function e(n){var r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://suggestqueries.google.com/complete/search?output=toolbar&q=".concat(n),e.abrupt("return",fetch(r).then(t.handleResponse).then(function(e){return(new window.DOMParser).parseFromString(e,"text/xml")}).then(t.extractSuggestionItems).catch(t.handleRequestError));case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.handleResponse=function(e){if(!e.ok)throw Error(e.statusText);return e.text()},this.handleRequestError=function(e){return[]},this.extractSuggestionItems=function(e){var t=[];return e.children.length>0&&e.children[0].children.length>0&&Object(M.a)(e.children[0].children).forEach(function(e){return t.push(e.children[0].getAttribute("data"))}),t},this.assembleRootNodeBySuggestItems=function(e){var n=new P;return e.forEach(function(e){var r=new P({id:t.getUniqueId(e),title:e,url:"_____",isGoogleSearch:!0});n.children.push(r)}),n},this.getUniqueId=function(e){return"gg-".concat(e)}};function A(e){return function(){var t,n=Object(p.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=Object(p.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(f.a)(this,t)}}var D=30,U=function(e){Object(b.a)(n,e);var t=A(n);function n(e){var r;Object(h.a)(this,n),(r=t.call(this,e)).onKeyDown=function(e){if("ArrowDown"===e.key&&r.focusNextTabItem(),"ArrowUp"===e.key&&r.focusPrevTabItem(),"Enter"===e.key){if(!0===r.searchInputInComposition)return void(r.searchInputInComposition=!1);r.onContainerClick(r.state.selectedTab)}if("Alt"===e.key)return r.altKeyDown=!0,void r.searchFieldRef.current.blur();!r.altKeyDown||"w"!==e.key&&"W"!==e.key&&"\u2211"!==e.key?r.focusSearchField():-1!==r.state.selectedTab.id&&r.onCloseAllTabs(r.TabSequenceHelper.getNodeByTabId(r.state.selectedTab.id,r.state.rootNode))},r.onKeyUp=function(e){"Alt"===e.key&&(r.altKeyDown=!1,r.focusSearchField())},r.focusNextTabItem=function(){var e=r.TabSequenceHelper.getNextTab();e&&r.setState({selectedTab:e})},r.focusPrevTabItem=function(){var e=r.TabSequenceHelper.getPreviousTab();e&&r.setState({selectedTab:e})},r.focusSearchField=function(){r.searchFieldRef.current.focus()},r.blurSearchField=function(){r.searchFieldRef.current.blur()},r.refreshRootNode=Object(u.a)(l.a.mark(function e(){var t,n,o,a,i=arguments;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:void 0,e.next=3,r.initializer.getTree(t);case 3:return n=e.sent,e.next=6,r.initializer.getActiveTab();case 6:return o=e.sent,e.t0=r,e.next=10,r.initializer.getBookmarks(t);case 10:e.t1=e.sent,e.t2=D,a=e.t0.getTopNBookMarks.call(e.t0,e.t1,e.t2),r.setState({rootNode:n,bookmarkRootNode:a,selectedTab:t?{id:-1}:o});case 14:case"end":return e.stop()}},e)})),r.selectGoogleSearchInference=function(e,t){return-1===t?e:(e&&e.children&&(e.children=e.children.slice(0,t)),e)},r.updateTabSequence=function(){r.TabSequenceHelper.refreshQueue(r.state.rootNode,r.state.bookmarkRootNode,r.state.googleSuggestRootNode),r.TabSequenceHelper.setCurrentIdx(r.state.selectedTab)},r.getTopNBookMarks=function(e,t){return e.children.length>t&&(e.children=e.children.slice(0,t)),e},r.onTabUpdate=function(e,t,n){var o=r.state.rootNode;t.title&&(o.setTitleById(e,t.title),r.setState({rootNode:o})),t.favIconUrl&&(o.setFavIconUrlById(e,t.favIconUrl),r.setState({rootNode:o})),t.status&&(o.setStatusById(e,t.status),r.setState({rootNode:o}))},r.onTabRemoved=function(e,t){r.refreshRootNode(r.state.keyword)},r.onCloseAllTabs=function(e){r.props.chrome.tabs.remove(e.getAllTabIds(),function(){})},r.onClosedButtonClick=function(e){r.props.chrome.tabs.remove(e.id,function(){})},r.onContainerClick=function(e){r.noTabSelected(e)?r.searchByGoogle(r.state.keyword):e.isBookmark?r.props.chrome.tabs.create({url:e.url},function(e){}):e.isGoogleSearch?r.searchByGoogle(e.title):r.props.chrome.tabs.update(e.id,{active:!0})},r.noTabSelected=function(e){return-1===e.id},r.googleSearchEnabled=function(){return!0},r.googleSearchSuggestEnabled=function(){return!0},r.searchByGoogle=function(e){var t="https://qongogs.com/49d78d76-6729-4bfd-ae1c-0cd44f8b1795?q=".concat(e,"&chname=30229");r.props.chrome.tabs.create({url:t},function(e){})},r.onSearchTextChanged=function(e){var t=r.normalizeString(e.target.value);r.setState({keyword:t}),r.refreshRootNode(t)},r.onTabItemSelected=function(e){var t=r.selfRef.current.getBoundingClientRect();e.bottom>t.bottom?r.selfRef.current.scrollTop+=e.bottom-t.bottom:e.top<t.top&&(r.selfRef.current.scrollTop-=t.top-e.top)},r.searchInputCompositionStart=function(){r.searchInputInComposition=!0},r.searchInputCompositionEnd=function(){r.searchInputInComposition=!1},r.showSearchTip=function(){return r.googleSearchEnabled()&&0===r.state.rootNode.children.length&&0===r.state.bookmarkRootNode.children.length},r.showBookmarks=function(){return r.state.bookmarkRootNode.children.length>0},r.showBookmarkTitle=function(){return r.state.rootNode.children.length>0},r.showGoogleSuggest=function(){return!1},r.initializer=r.props.initializer;var a=new P,i=new P,s=new P;return r.state={selectedTab:{id:-1},keyword:"",rootNode:a,bookmarkRootNode:i,googleSuggestRootNode:s},r.refreshRootNode(),r.props.chrome.tabs.onUpdated.addListener(r.onTabUpdate),r.props.chrome.tabs.onRemoved.addListener(r.onTabRemoved),r.initailKeyword="",r.searchFieldRef=o.a.createRef(),r.selfRef=o.a.createRef(),r.TabSequenceHelper=new F(a,i,s),r.googleSuggestHelper=new L,r.altKeyDown=!1,r.searchInputInComposition=!1,r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.focusSearchField(),document.addEventListener("keydown",this.onKeyDown,!1),document.addEventListener("keyup",this.onKeyUp,!1)}},{key:"normalizeString",value:function(e){return e.replace(/\\/g,"\\\\")}},{key:"render",value:function(){this.updateTabSequence();for(var e="Filter",t=0;t<108;t++)e+=" ";e+="\u2191 and \u2193 to select         \u23ce to switch/search";var n=null;this.showSearchTip()&&(n=o.a.createElement("div",null,o.a.createElement("div",{className:"operationTip"},o.a.createElement("span",{className:"kbd"},"ENTER"),o.a.createElement("span",null," to search on the Internet"))));var r=null,a=null;this.showBookmarkTitle()&&(a=o.a.createElement("div",{className:"splitLabel"},o.a.createElement("span",null,"Bookmark & Search"))),this.showBookmarks()&&(r=o.a.createElement("div",null,a,o.a.createElement(x,{onTabItemSelected:this.onTabItemSelected,selectedTabId:this.state.selectedTab.id,rootNode:this.state.bookmarkRootNode,onContainerClick:this.onContainerClick,keyword:this.state.keyword})));var i=null;return this.showGoogleSuggest()&&(i=o.a.createElement("div",null,o.a.createElement(x,{onTabItemSelected:this.onTabItemSelected,selectedTabId:this.state.selectedTab.id,rootNode:this.state.googleSuggestRootNode,onContainerClick:this.onContainerClick,keyword:this.state.keyword}))),o.a.createElement("div",{className:"outContainer"},o.a.createElement(s.a,{onChange:this.onSearchTextChanged,onCompositionStart:this.searchInputCompositionStart,onCompositionEnd:this.searchInputCompositionEnd,ref:this.searchFieldRef,placeholder:e}),o.a.createElement("div",{className:"tabTreeViewContainer",ref:this.selfRef},o.a.createElement(x,{onTabItemSelected:this.onTabItemSelected,selectedTabId:this.state.selectedTab.id,rootNode:this.state.rootNode,keyword:this.state.keyword,onContainerClick:this.onContainerClick,onClosedButtonClick:this.onCloseAllTabs}),r,i,n))}}]),n}(o.a.Component),q=function(){function e(t,n){var r=this;Object(h.a)(this,e),this.tabs=t,this.tabParentMap=n,this.nodeMap={},this.tabMap={},this.rootNode=new P,t.forEach(function(e){r.tabMap[e.id]=e})}return Object(d.a)(e,[{key:"getTree",value:function(){var e=this;return this.tabs.forEach(function(t){var n=e.getNode(t),r=e.getNode(e.getParentTabId(t.id));n.parent=r,r.children.push(n)}),this.rootNode}},{key:"getParentTabId",value:function(e){var t=this.tabParentMap[e];return this.tabMap[t]?this.tabMap[t]:!this.tabMap[t]&&this.tabParentMap[t]?this.getParentTabId(t):void 0}},{key:"getNode",value:function(e){return void 0===e?this.rootNode:(this.nodeMap[e.id]||(this.nodeMap[e.id]=new P(e)),this.nodeMap[e.id])}},{key:"cleanTabParentMap",value:function(e,t){var n={};e.forEach(function(e){n[e.id]=1});var r={};for(var o in t)n[o]&&(r[o]=t[o]);return r}}]),e}(),H=function(){function e(t){Object(h.a)(this,e),this.rawTrees=t}return Object(d.a)(e,[{key:"getTree",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return this.rootNode=new P,this.copyTree(this.rootNode,this.rawTrees,e),this.rootNode}},{key:"getFlattenTree",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return this.rootNode=new P,this.copyTreeAsFlatten(this.rootNode,this.rawTrees,e),this.rootNode}},{key:"copyTree",value:function(e,t,n){var r=this;t&&t.forEach(function(t){var o=r.createTabTreeNodeByBMNode(t);(o.isFolder()||r.filterNode(n,o))&&(e.children.push(o),r.copyTree(o,t.children))})}},{key:"copyTreeAsFlatten",value:function(e,t,n){var r=this;t&&t.forEach(function(t){var o=r.createTabTreeNodeByBMNode(t);o.isLeaf&&!r.filterNode(n,o.tab)||(o.isLeaf&&e.children.push(o),r.copyTreeAsFlatten(e,t.children,n))})}},{key:"filterNode",value:function(e,t){try{var n=new RegExp(e,"i");return n.test(t.title)||n.test(t.url)}catch(r){return!0}}},{key:"createTabTreeNodeByBMNode",value:function(e){var t=new P({id:this.genBMNodeId(e.id),url:e.url?e.url:"",title:e.title?e.title:"",isBookmark:!0});return t.isLeaf=!this.isFolder(e),t}},{key:"isFolder",value:function(e){return!e.url||e.url.length<=0}},{key:"genBMNodeId",value:function(e){return"bk".concat(e)}}]),e}(),G=function(){function e(t){Object(h.a)(this,e),this.filterNodes=function(e,t){try{var n=new RegExp(e,"i");return t.filter(function(e){return n.test(e.title)||n.test(e.url)})}catch(r){return t}},this.needFilterByKeyword=function(e){return e&&e.length>0},this.chrome=t}return Object(d.a)(e,[{key:"getTablist",value:function(){var e=this;return new Promise(function(t){e.chrome.tabs.query({windowId:e.chrome.windows.WINDOW_ID_CURRENT},function(e){t(e)})})}},{key:"getActiveTab",value:function(){var e=Object(u.a)(l.a.mark(function e(){var t,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getTablist();case 2:return t=e.sent,(n=t.find(function(e){return e.active}))||(n={id:-1}),e.abrupt("return",n);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getTabParentMap",value:function(){var e=this;return new Promise(function(t){e.chrome.runtime.getBackgroundPage(function(e){t(e.tabParentMap)})})}},{key:"getTree",value:function(){var e=Object(u.a)(l.a.mark(function e(){var t,n,r,o,a=arguments;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:void 0,e.next=3,this.getTabParentMap();case 3:return n=e.sent,e.next=6,this.getTablist();case 6:return r=e.sent,this.needFilterByKeyword(t)&&(r=this.filterNodes(t,r)),o=new q(r,n),e.abrupt("return",o.getTree());case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getBookmarks",value:function(){var e=Object(u.a)(l.a.mark(function e(){var t,n,r,o=arguments;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((t=o.length>0&&void 0!==o[0]?o[0]:void 0)&&0!==t.length){e.next=3;break}return e.abrupt("return",Promise.resolve(new P));case 3:return e.next=5,this.getBookmarksTree();case 5:return n=e.sent,r=new H(n),e.abrupt("return",r.getFlattenTree(t));case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getBookmarksTree",value:function(){var e=this;return new Promise(function(t){e.chrome.bookmarks.getTree(function(e){t(e)})})}}]),e}();n(116);i.a.render(o.a.createElement(U,{chrome:chrome,initializer:new G(chrome)}),document.getElementById("root"))},51:function(e,t,n){e.exports=n(118)}},[[51,2,1]]]);
//# sourceMappingURL=main.bd8b4d57.chunk.js.map