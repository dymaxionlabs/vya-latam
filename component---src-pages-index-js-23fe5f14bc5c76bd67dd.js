webpackJsonp([35783957827783],{118:function(e,t){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},l={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,c=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,r=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,o=i&&i(Object);e.exports=function e(t,d,u){if("string"!=typeof d){if(o){var m=i(d);m&&m!==o&&e(t,m,u)}var f=c(d);s&&(f=f.concat(s(d)));for(var p=0;p<f.length;++p){var E=f[p];if(!(a[E]||l[E]||u&&u[E])){var N=r(d,E);try{n(t,E,N)}catch(e){}}}return t}return t}},253:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var n=a(1),c=l(n),s=a(112),r=l(s),i=a(51),o=l(i),d=function(e){var t=e.cities.map(function(e){return c.default.createElement(u,{key:e.internalId,value:e})});return c.default.createElement("ul",null,t)},u=function(e){var t="/map?id="+e.value.internalId,a=e.value.name+", "+e.value.country;return c.default.createElement("li",null,c.default.createElement(r.default,{to:t},a))},m=function(e){var t=e.data,a=t.allCitiesJson.edges.map(function(e){return e.node});return c.default.createElement("div",null,c.default.createElement("section",{className:"hero is-medium is-primary is-bold"},c.default.createElement("div",{className:"hero-body"},c.default.createElement("div",{className:"container"},c.default.createElement("h1",{className:"title is-1"},t.site.siteMetadata.name),c.default.createElement("h2",{className:"subtitle is-4"},"Mapa de potenciales asentamientos informales y barrios precarios"),c.default.createElement("div",{className:"content"},c.default.createElement("p",null,"El mapa está elaborado a partir de la aplicación de técnicas de ",c.default.createElement("em",null,"machine learning")," en imágenes satelitales y otros datos georreferenciados."))))),c.default.createElement("section",{className:"section"},c.default.createElement("div",{className:"container"},c.default.createElement("h1",{className:"title"},"Explorar"),c.default.createElement("h2",{className:"subtitle"},"Haz clic sobre el nombre de una ciudad para explorar el mapa."),c.default.createElement(d,{cities:a}))),c.default.createElement("section",{className:"section"},c.default.createElement("div",{className:"container"},c.default.createElement("h1",{className:"title"},"Accede a los datos"),c.default.createElement("div",{className:"content"},c.default.createElement("p",null,"Aquí podrás acceder a los datos presentados en el mapa, tanto la capa vectorial de las áreas precarias detectadas, como así también otros datos analíticos generados, agrupados por ciudad y fecha de actualización."),c.default.createElement(r.default,{className:"button is-primary",to:"/data"},"Ver Datos")))),c.default.createElement("section",{className:"section"},c.default.createElement("div",{className:"container"},c.default.createElement("h1",{className:"title"},"Publicaciones"),c.default.createElement("div",{className:"content"},c.default.createElement("p",null,"En esta página podrás descargar y leer publicaciones sobre la metodología de detección."),c.default.createElement(r.default,{className:"button is-primary",to:"/publications"},"Ver Publicaciones")))),c.default.createElement("section",{className:"section"},c.default.createElement("div",{className:"container"},c.default.createElement("h1",{className:"title"},"Prensa"),c.default.createElement("div",{className:"content"},c.default.createElement("em",null,"[Acá van las notas publicadas del proyecto]")))),c.default.createElement("section",{className:"section"},c.default.createElement("div",{className:"container"},c.default.createElement("em",null,"[Acá van los logos de los sponsors]"))),c.default.createElement("section",{className:"section"},c.default.createElement("div",{className:"container"},c.default.createElement("h1",{className:"title"},"Licencia"),c.default.createElement("div",{className:"content"},c.default.createElement("p",null,c.default.createElement("em",null,"[Texto sobre licencia de la página, el uso de los datos, y las publicaciones]")),c.default.createElement(r.default,{className:"button is-primary",to:"/license"},"Ver Licencia")))),c.default.createElement("section",{className:"section"},c.default.createElement("div",{className:"container"},c.default.createElement("h1",{className:"title"},"Contacto"),c.default.createElement("div",{className:"content"},c.default.createElement("em",null,"[Acá va la sección de contacto]")))),c.default.createElement(o.default,null))};t.query="** extracted graphql fragment **";t.default=m}});
//# sourceMappingURL=component---src-pages-index-js-23fe5f14bc5c76bd67dd.js.map