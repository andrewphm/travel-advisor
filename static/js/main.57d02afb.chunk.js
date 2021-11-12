(this["webpackJsonptravel-advisor"]=this["webpackJsonptravel-advisor"]||[]).push([[0],{65:function(n,e,t){"use strict";t.r(e);var i,r,a,c,o,s,l,d,p,b,j,h,x,g,u,m=t(2),f=t(6),v=t.n(f),O=t(9),w=t(3),y=t(4),k=Object(y.a)(i||(i=Object(w.a)(["\n    :root {\n        --maxWidth: 1280px;\n        --white: #fff;\n        --lightGrey: #eee;\n        --medGrey: #353535;\n        --darkGrey: #1c1c1c;\n        --fontSuperBig: 2.5rem;\n        --fontBig: 1.5rem;\n        --fontMed: 1.2rem;\n        --fontSmall: 1rem;\n        --headerHeight: 3.5rem;\n\n\n        --clr-grey: hsl(210, 36%, 96%);\n    }\n\n    * {\n        box-sizing: border-box;\n        font-family: 'Abel', sans-serif;\n        padding: 0;\n        margin: 0;\n    }\n\n    #root {\n    }\n\n    body {\n        max-height: 100vh;\n        width: 100vw;\n        margin: 0;\n        padding: 0;\n        scroll-behavior: smooth;\n\n        color: #fff;\n        h1 {\n            font-size: 2rem;\n            font-weight: 600;\n        }\n\n        h3 {\n            font-size: 1.1rem;\n            font-weight: 600;\n        }\n\n        p {\n            font-size: 1rem;\n            margin: 0;\n        }\n    }\n"]))),z=t(17),N=t.n(z),S=t(30),_=t(31),A=t.n(_),C={getPlacesData:function(){var n=Object(S.a)(N.a.mark((function n(e,t){var i,r;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,A.a.get("https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",{params:{bl_latitude:e.lat,tr_latitude:t.lat,bl_longitude:e.lng,tr_longitude:t.lng,limit:"15"},headers:{"x-rapidapi-host":"travel-advisor.p.rapidapi.com","x-rapidapi-key":"692449dd6dmsh60fc95a85b6d88fp16581djsn3f44c421f747"}});case 3:return i=n.sent,r=i.data.data,console.log(r),n.abrupt("return",r);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e,t){return n.apply(this,arguments)}}()},B=y.b.div(r||(r=Object(w.a)(["\n  position: relative;\n  width: 100vw;\n  height: calc(100vh - var(--headerHeight));\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 2.5fr;\n  align-items: center;\n"]))),G=t(0),E=function(n){var e=n.children;return Object(G.jsx)(B,{children:e})},R=t.p+"static/media/logo.9e44543b.svg",H=t.p+"static/media/search.53e39e37.svg",I=y.b.div(a||(a=Object(w.a)(["\n  background: var(--darkGrey);\n  padding: 0px 50px;\n  width: 100%;\n  position: sticky;\n  height: var(--headerHeight);\n"]))),T=y.b.div(c||(c=Object(w.a)(["\n  display: flex;\n  height: 100%;\n  align-items: center;\n  align-content: center;\n  justify-content: space-between;\n  margin: 0 auto;\n  flex-wrap: wrap;\n"]))),F=y.b.div(o||(o=Object(w.a)(["\n  display: flex;\n  column-gap: 1.5rem;\n  align-items: center;\n\n  h3 {\n    font-weight: 400;\n    font-size: 1.3rem;\n    white-space: nowrap;\n  }\n\n  .search-container {\n    padding: 3px 1rem;\n    background-color: rgba(255, 255, 255, 0.15);\n    display: flex;\n    border-radius: 5px;\n    cursor: text;\n\n    input {\n      background: none;\n      --webkit-tap-highlight-color: transparent;\n      border: 0;\n      padding: 5px;\n      padding-left: 16px;\n      cursor: text;\n      outline: none;\n      font-size: 1.2rem;\n      font-weight: 300;\n      color: white;\n\n      ::placeholder {\n        font-size: 1.2rem;\n      }\n    }\n  }\n\n  .search-icon {\n    width: 20px;\n    transition: all 0.3s;\n  }\n"]))),J=y.b.img(s||(s=Object(w.a)(["\n  width: 230px;\n\n  :hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n\n  @media screen and (max-width: 760px) {\n    width: 175px;\n  }\n"]))),L=function(){return Object(G.jsx)(I,{children:Object(G.jsxs)(T,{children:[Object(G.jsx)(J,{src:R}),Object(G.jsxs)(F,{children:[Object(G.jsx)("h3",{children:"Explore new places"}),Object(G.jsxs)("div",{className:"search-container",children:[Object(G.jsx)("img",{src:H,alt:"search icon",className:"search-icon"}),Object(G.jsx)("input",{type:"text",placeholder:"Search..."})]})]})]})})},P=y.b.div(l||(l=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-width: 430px;\n  color: var(--medGrey);\n  overflow: hidden;\n  box-shadow: 2px 0 5px 1px rgba(0, 0, 0, 0.3);\n  z-index: 100;\n  background-color: var(--clr-grey);\n"]))),D=y.b.div(d||(d=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding-bottom: 1rem;\n  box-shadow: 0px 10px 5px -7px rgba(0, 0, 0, 0.3);\n  z-index: 10;\n\n  h1 {\n    font-size: clamp(1rem, 7vw, 1.4rem);\n    font-weight: 700;\n    text-align: center;\n  }\n\n  .form-container {\n    display: flex;\n    column-gap: 1.5rem;\n    justify-content: center;\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n    row-gap: 0.5rem;\n\n    select {\n      width: 150px;\n      cursor: pointer;\n      background-color: transparent;\n      font-size: 1rem;\n      border-radius: 4px;\n      padding: 2px 0.5rem 2px 0;\n    }\n  }\n"]))),K=y.b.div(p||(p=Object(w.a)(["\n  height: 100%;\n  overflow: scroll;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1.5rem;\n  align-items: center;\n  row-gap: 2rem;\n  scroll-behavior: smooth;\n"]))),V=t(8),W=t(10),q=t(32),M=function(n){for(var e=n.rating,t=[],i=0;i<5;i++)e>=1&&t.push(Object(G.jsx)(V.a,{icon:W.c,color:"#fbbc05",size:"xs"},i)),e>0&&e<1&&t.push(Object(G.jsx)(V.a,{icon:W.d,color:"#fbbc05",size:"xs"},i)),e<=0&&t.push(Object(G.jsx)(V.a,{icon:q.a,color:"#fbbc05",size:"xs"},i)),e-=1;return Object(G.jsx)("div",{className:"stars",children:t})},U=y.b.div(b||(b=Object(w.a)(["\n  height: 1000px;\n  width: 95%;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  align-items: center;\n  border-top: 1px solid lightgrey;\n  background-color: white;\n  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);\n\n  :hover {\n    background-color: rgba(254, 247, 225, 0.3);\n  }\n"]))),Z=y.b.div(j||(j=Object(w.a)(["\n  height: 225px;\n  width: 100%;\n  overflow: hidden;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: 100%, cover;\n  background-position: center center;\n"])),(function(n){return n.image})),Q=y.b.div(h||(h=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px 10px 10px 15px;\n  width: 100%;\n  justify-content: flex-start;\n\n  h4 {\n    font-size: 1.2rem;\n  }\n\n  .details {\n    display: flex;\n    column-gap: 1rem;\n    padding-bottom: 12px;\n    align-items: center;\n\n    a {\n      text-decoration: none;\n      color: blue;\n      font-weight: 900;\n      font-size: 0.8rem;\n\n      :hover {\n        opacity: 0.7;\n      }\n    }\n\n    .ratings {\n      display: flex;\n      column-gap: 0.3em;\n    }\n\n    .stars {\n      position: relative;\n      bottom: 2px;\n    }\n  }\n\n  .details-awards {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .cuisines {\n    display: flex;\n    flex-wrap: wrap;\n    column-gap: 1rem;\n    justify-content: flex-start;\n    margin-top: 15px;\n  }\n  .cuisine {\n    background-color: lightgrey;\n    color: rgba(0, 0, 0, 0.6);\n    padding: 0.2em 0.5em;\n    border-radius: 10px;\n    margin: 5px 0;\n\n    p {\n      font-size: 0.8rem;\n    }\n  }\n"]))),X=function(n){var e=n.place,t=n.id,i=e.name,r=e.address,a=e.ranking,c=e.photo,o=e.price_level,s=e.awards,l=e.cuisine,d=e.phone,p=e.web_url,b=e.website,j=e.num_reviews,h=e.raw_ranking,x=e.rating;return Object(G.jsxs)(U,{id:t,children:[Object(G.jsx)(Z,{image:null===c||void 0===c?void 0:c.images.medium.url}),Object(G.jsxs)(Q,{children:[Object(G.jsxs)("div",{className:"details",children:[Object(G.jsx)("h4",{children:i}),Object(G.jsx)("p",{children:o})]}),Object(G.jsx)("div",{className:"details",children:Object(G.jsxs)("div",{className:"ratings",children:[Object(G.jsx)("p",{children:h.split("").splice(0,3).join("")}),Object(G.jsx)(M,{rating:x}),Object(G.jsxs)("p",{children:["(",j,")"]})]})}),Object(G.jsxs)("div",{className:"details",children:[Object(G.jsx)(V.a,{icon:W.b}),Object(G.jsx)("p",{children:d})]}),Object(G.jsxs)("div",{className:"details",children:[Object(G.jsx)(V.a,{icon:W.a}),Object(G.jsx)("p",{children:null===r||void 0===r?void 0:r.split(",").splice(0,2).join(", ")})]}),Object(G.jsxs)("div",{className:"details",children:[b&&Object(G.jsx)("a",{href:b,target:"_blank",rel:"noreferrer",children:"WEBSITE"}),p&&Object(G.jsx)("a",{href:p,target:"_blank",rel:"noreferrer",children:"TRIPADVISOR"})]}),Object(G.jsx)("div",{className:"details",children:Object(G.jsx)("p",{children:a})}),Object(G.jsx)("div",{className:"details-awards",children:null===s||void 0===s?void 0:s.map((function(n,e){var t;return Object(G.jsxs)("div",{className:"details",style:{paddingBottom:2},children:[Object(G.jsx)("img",{src:null===n||void 0===n||null===(t=n.images)||void 0===t?void 0:t.small,alt:"award"}),Object(G.jsx)("p",{children:null===n||void 0===n?void 0:n.display_name})]},e)}))}),Object(G.jsx)("div",{className:"cuisines",children:null===l||void 0===l?void 0:l.map((function(n){return Object(G.jsx)("div",{className:"cuisine",children:Object(G.jsx)("p",{children:n.name})},n.key)}))})]})]})},Y=y.b.div(x||(x=Object(w.a)(["\n  border: 5px solid var(--lightGrey);\n  border-top: 5px solid var(--medGrey);\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  animation: spin 0.8s linear infinite;\n  margin: 20px auto;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),$=function(n){var e=n.places,t=n.isLoading,i=n.type,r=n.setType,a=n.rating,c=n.setRating;return Object(G.jsxs)(P,{children:[Object(G.jsxs)(D,{children:[Object(G.jsx)("h1",{children:"Restaurants, Hotels & Attractions"}),Object(G.jsxs)("div",{className:"form-container",children:[Object(G.jsxs)("form",{children:[Object(G.jsx)("label",{htmlFor:"type",children:"Select a type"}),Object(G.jsxs)("select",{value:i,onChange:function(n){return r(n.target.value)},name:"type",children:[Object(G.jsx)("option",{value:"restaurants",children:"Restaurant"}),Object(G.jsx)("option",{value:"hotels",children:"Hotel"}),Object(G.jsx)("option",{value:"attractions",children:"Attractions"})]})]}),Object(G.jsxs)("form",{children:[Object(G.jsx)("label",{htmlFor:"rating",children:"Filter by ratings"}),Object(G.jsxs)("select",{value:a,onChange:function(n){return c(n.target.value)},name:"type",children:[Object(G.jsx)("option",{value:"0",children:"All"}),Object(G.jsx)("option",{value:"3",children:"Above 3.0 "}),Object(G.jsx)("option",{value:"4",children:"Above 4.0"}),Object(G.jsx)("option",{value:"4.5",children:"Above 4.5"})]})]})]})]}),t?Object(G.jsx)(Y,{}):Object(G.jsx)(K,{children:null===e||void 0===e?void 0:e.map((function(n,e){if(!n.ad_position)return Object(G.jsx)(X,{id:e,place:n},e)}))})]})},nn=t(34),en=y.b.div(g||(g=Object(w.a)(["\n  display: flex;\n  height: 100%;\n  width: 100%;\n"]))),tn=y.b.div(u||(u=Object(w.a)(["\n  position: relative;\n  background-color: white;\n  width: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 5px;\n  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);\n  transition: ease 0.3s all;\n\n  :hover {\n    z-index: 100;\n    transform: scale(1.05);\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  p {\n    font-size: 0.8rem;\n    text-align: center;\n    color: black;\n  }\n\n  .img-wrapper {\n    width: 95%;\n    height: 100%;\n    max-height: 80px;\n    overflow: hidden;\n    margin: 2px;\n  }\n\n  img {\n    width: 100%;\n  }\n\n  .stars {\n    display: flex;\n    justify-content: center;\n  }\n"]))),rn=function(n){var e=n.setCoordinates,t=n.setBounds,i=n.coordinates,r=n.places;return Object(G.jsx)(en,{children:Object(G.jsx)(nn.a,{bootstrapURLKeys:{key:"AIzaSyCq2NeJVLrkkE2paK0etbizKJ9T6of0uAs"},defaultCenter:{lat:40.73061,lng:-73.935242},center:i,defaultZoom:15,margin:[50,50,50,50],options:"",onChange:function(n){e({lat:n.center.lat,lng:n.center.lng}),t({ne:n.marginBounds.ne,sw:n.marginBounds.sw}),console.log(n)},onChildClick:"",children:null===r||void 0===r?void 0:r.map((function(n,e){var t=n.longitude,i=n.latitude,r=n.name,a=n.rating,c=n.ad_position,o=n.photo;if(!c)return Object(G.jsx)(tn,{lat:i,lng:t,children:Object(G.jsxs)("a",{href:"#".concat(e),children:[Object(G.jsx)("p",{children:r}),Object(G.jsx)("div",{className:"img-wrapper",children:Object(G.jsx)("img",{src:null===o||void 0===o?void 0:o.images.medium.url,alt:r})}),Object(G.jsx)(M,{rating:a})]})})}))})})},an=function(){var n=Object(m.useState)([]),e=Object(O.a)(n,2),t=e[0],i=e[1],r=Object(m.useState)(),a=Object(O.a)(r,2),c=a[0],o=a[1],s=Object(m.useState)(),l=Object(O.a)(s,2),d=l[0],p=l[1],b=Object(m.useState)(!1),j=Object(O.a)(b,2),h=j[0],x=j[1],g=Object(m.useState)("Choose a type"),u=Object(O.a)(g,2),f=u[0],v=u[1],w=Object(m.useState)("All"),y=Object(O.a)(w,2),z=y[0],N=y[1];return Object(m.useEffect)((function(){x(!0),console.log("trying to get current location"),navigator.geolocation.getCurrentPosition((function(n){var e=n.coords,t=e.latitude,i=e.longitude;console.log("Got current location"),o({lat:t,lng:i}),x(!1)}))}),[]),Object(m.useEffect)((function(){d&&c&&C.getPlacesData(d.sw,d.ne).then((function(n){i(n)}))}),[d]),Object(G.jsxs)(G.Fragment,{children:[console.log("rendering"),Object(G.jsx)(L,{}),Object(G.jsxs)(E,{children:[Object(G.jsx)($,{places:t,isLoading:h,setType:v,type:f,rating:z,setRating:N}),h?Object(G.jsx)(Y,{}):Object(G.jsx)(rn,{setCoordinates:o,setBounds:p,coordinates:c,places:t})]}),Object(G.jsx)(k,{})]})};v.a.render(Object(G.jsx)(an,{}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.57d02afb.chunk.js.map