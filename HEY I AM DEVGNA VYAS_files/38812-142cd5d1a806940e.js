"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38812],{49900:function(e,t,o){o.d(t,{p:function(){return c}});var n=o(85893),a=o(67294),i=o(9008),r=o.n(i);let l={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},p=e=>{let t=[];e.titleTemplate&&(l.templateTitle=e.titleTemplate);let o="";e.title&&(o=e.title,l.templateTitle&&(o=l.templateTitle.replace(/%s/g,()=>o)),t.push((0,n.jsx)("title",{children:o},"title")));let a=e.noindex||l.noindex||e.dangerouslySetAllPagesToNoIndex,i=e.nofollow||l.nofollow||e.dangerouslySetAllPagesToNoFollow;if(a||i?(e.dangerouslySetAllPagesToNoIndex&&(l.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(l.nofollow=!0),t.push((0,n.jsx)("meta",{name:"robots",content:"".concat(a?"noindex":"index",",").concat(i?"nofollow":"follow")},"robots")),t.push((0,n.jsx)("meta",{name:"googlebot",content:"".concat(a?"noindex":"index",",").concat(i?"nofollow":"follow")},"googlebot"))):(t.push((0,n.jsx)("meta",{name:"robots",content:"index,follow"},"robots")),t.push((0,n.jsx)("meta",{name:"googlebot",content:"index,follow"},"googlebot"))),e.description&&t.push((0,n.jsx)("meta",{name:"description",content:e.description},"description")),e.twitter&&(e.twitter.cardType&&t.push((0,n.jsx)("meta",{name:"twitter:card",content:e.twitter.cardType},"twitter:card")),e.twitter.site&&t.push((0,n.jsx)("meta",{name:"twitter:site",content:e.twitter.site},"twitter:site")),e.twitter.handle&&t.push((0,n.jsx)("meta",{name:"twitter:creator",content:e.twitter.handle},"twitter:creator"))),e.openGraph){if((e.openGraph.url||e.canonical)&&t.push((0,n.jsx)("meta",{property:"og:url",content:e.openGraph.url||e.canonical},"og:url")),e.openGraph.type){let r=e.openGraph.type.toLowerCase();t.push((0,n.jsx)("meta",{property:"og:type",content:r},"og:type"))}(e.openGraph.title||e.title)&&t.push((0,n.jsx)("meta",{property:"og:title",content:e.openGraph.title||o},"og:title")),(e.openGraph.description||e.description)&&t.push((0,n.jsx)("meta",{property:"og:description",content:e.openGraph.description||e.description},"og:description")),e.defaultOpenGraphImageWidth&&(l.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(l.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&e.openGraph.images.forEach((e,o)=>{t.push((0,n.jsx)("meta",{property:"og:image",content:e.url},"og:image:0".concat(o))),e.alt&&t.push((0,n.jsx)("meta",{property:"og:image:alt",content:e.alt},"og:image:alt0".concat(o))),e.width?t.push((0,n.jsx)("meta",{property:"og:image:width",content:e.width.toString()},"og:image:width0".concat(o))):l.defaultOpenGraphImageWidth&&t.push((0,n.jsx)("meta",{property:"og:image:width",content:l.defaultOpenGraphImageWidth.toString()},"og:image:width0".concat(o))),e.height?t.push((0,n.jsx)("meta",{property:"og:image:height",content:e.height.toString()},"og:image:height".concat(o))):l.defaultOpenGraphImageHeight&&t.push((0,n.jsx)("meta",{property:"og:image:height",content:l.defaultOpenGraphImageHeight.toString()},"og:image:height".concat(o)))}),e.openGraph.locale&&t.push((0,n.jsx)("meta",{property:"og:locale",content:e.openGraph.locale},"og:locale")),e.openGraph.site_name&&t.push((0,n.jsx)("meta",{property:"og:site_name",content:e.openGraph.site_name},"og:site_name"))}return e.canonical&&t.push((0,n.jsx)("link",{rel:"canonical",href:e.canonical},"canonical")),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach(e=>{t.push((0,n.jsx)("meta",{...e},e.name?e.name:e.property))}),t};class s extends a.Component{render(){let{title:e,noindex:t=!1,nofollow:o,description:a,canonical:i,openGraph:l,facebook:s,twitter:d,additionalMetaTags:c,titleTemplate:u,mobileAlternate:g,languageAlternates:h}=this.props;return(0,n.jsx)(r(),{children:p({title:e,noindex:t,nofollow:o,description:a,canonical:i,facebook:s,openGraph:l,additionalMetaTags:c,twitter:d,titleTemplate:u,mobileAlternate:g,languageAlternates:h})})}}var d=o(5955);let c=e=>{var t,o,a,i;let{title:r,description:l,url:p,image:c}=(null==e?void 0:e.head)||{},u=(null==e?void 0:null===(t=e.settings)||void 0===t?void 0:t.name)||"",g=c||(null==e?void 0:null===(o=e.page)||void 0===o?void 0:o.cover)||"",h=r||(0,d.S$)(null==e?void 0:null===(a=e.page)||void 0===a?void 0:a.title)||"",m=null==e?void 0:null===(i=e.settings)||void 0===i?void 0:i.noIndex,f={title:h,description:l,openGraph:{type:"website",locale:"en_US",url:p,site_name:r||u,description:l,images:[{url:g,alt:h}]},twitter:{cardType:"summary_large_image"}};return m&&(f.noindex=!0,f.nofollow=!0),(0,n.jsx)(s,{...f})}},99843:function(e,t,o){o.d(t,{cn:function(){return n}});let n=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return t.filter(e=>!!e).join(" ")}},5955:function(e,t,o){var n;o.d(t,{Dx:function(){return l},Fk:function(){return a},HU:function(){return r},OP:function(){return d},S$:function(){return p},mg:function(){return s},wj:function(){return i}});let a=e=>/^data:image/.test(e),i=e=>e?"block-"+e.split("/").join("-"):"",r=(e,t)=>null==e?void 0:e.startsWith(t.assetEndpoint),l=e=>null==e?void 0:e.startsWith("https://images.spr.so/cdn-cgi/imagedelivery"),p=e=>null!==(n=null==e?void 0:e.reduce((e,t)=>e+t[0],""))&&void 0!==n?n:"";function s(e){var t;return(null==e?void 0:null===(t=e.view)||void 0===t?void 0:t.superProperties)||(null==e?void 0:e.superProperties)||{}}function d(e){var t;return Array.isArray(e)?e.every(e=>{var t;return!!(null===o.g||void 0===o.g?void 0:null===(t=o.g.document)||void 0===t?void 0:t.querySelector('script[src="'+e+'"]'))}):!!(null===o.g||void 0===o.g?void 0:null===(t=o.g.document)||void 0===t?void 0:t.querySelector('script[src="'+e+'"]'))}}}]);