"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[793],{793:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(861),a=r(439),c=r(757),i=r.n(c),s=r(791),u=r(87),o=r(817),l={films:"home_films__Y9eGE",filmsList:"home_filmsList__gRIl7",titleH:"home_titleH__UC9xH",movieTitle:"home_movieTitle__dk6tX"},p=r(655),f=r(184),h=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],h=(0,s.useState)(!0),d=(0,a.Z)(h,2),v=d[0],m=d[1];return(0,s.useEffect)((function(){function e(){return(e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.wr)();case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.prev=10,m(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:l.section,children:[(0,f.jsx)("h1",{className:l.titleH,children:"Trending today"}),(0,f.jsx)("div",{children:(0,f.jsx)("ul",{className:l.films,children:r.map((function(e){return(0,f.jsx)("li",{className:l.filmsList,children:(0,f.jsx)(u.rU,{to:"movies/".concat(e.id),children:(0,f.jsxs)("span",{className:l.movieTitle,children:[" ",e.title]})})},e.id)}))})})]}),v&&(0,f.jsx)(p.Z,{})]})}},817:function(e,t,r){r.d(t,{Hx:function(){return h},WK:function(){return p},Yi:function(){return l},uV:function(){return f},wr:function(){return o}});var n=r(861),a=r(757),c=r.n(a),i=r(243),s="https://api.themoviedb.org/3/",u={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmU0MGUwOWI3NDZlZTI2MWY4MmY5MTliZWI5MjgwOCIsInN1YiI6IjY0OGFjMDczMjYzNDYyMDBlYjc0NWJkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nrZ244O_eY9vRaeacdayZYNOixh-XOkGIuO3mgMPuaw"}},o=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"trending/movie/day?language=en-US"),u);case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"movie/").concat(t),u);case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"search/movie?query=").concat(t,"&page=1"),u);case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"movie/").concat(t,"/credits"),u);case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"movie/").concat(t,"/reviews"),u);case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},655:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(691),a="loader_loader__1AOoV",c=r(184);var i=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(n.VL,{visible:!0,height:"120",width:"120",ariaLabel:"vortex-loading",wrapperStyle:{},wrapperClass:"vortex-wrapper",colors:["red","green","blue","yellow","orange","purple"]})})}}}]);
//# sourceMappingURL=793.aa822c01.chunk.js.map