(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{195:function(e,t,r){"use strict";r.r(t);r(277),r(7);var n=r(17),a=r.n(n),i=r(2),s=r.n(i),o=r(0),u=r.n(o),c=r(44),l=r(402),p=r(249),f=r(405),h=r(364),d=r(404),v=(r(32),r(79),r(216));r(203),r(213),r(231);function b(e){var t={};return t.POSITION={value:new Float32Array(e.vertices),size:3},e.normals.length>0&&(t.NORMAL={value:new Float32Array(e.normals),size:3}),e.uvs.length>0&&(t.TEXCOORD_0={value:new Float32Array(e.uvs),size:2}),e.colors.length>0&&(t.COLOR_0={value:new Uint8Array(e.colors),size:3}),t}function m(e,t){var r,n;if(void 0===t&&(t={}),e instanceof ArrayBuffer){var a=(new v.a).decode(e);n="ascii"===(r=y(a,t)).format?O(a,r):function(e,t){for(var r,n={indices:[],vertices:[],normals:[],uvs:[],colors:[]},a="binary_little_endian"===t.format,i=new DataView(e,t.headerLength),s=0,o=0;o<t.elements.length;o++)for(var u=t.elements[o].count,c=0;c<u;c++){r=S(i,s,t.elements[o].properties,a),s+=r[1];var l=r[0];j(n,t.elements[o].name,l)}return n}(e,r)}else n=O(e,r=y(e,t));return function(e,t,r){var n={loaderData:{header:e},header:{vertexCount:t.indices.length||t.vertices.length/3},mode:t.indices&&t.indices.length>0?4:0,attributes:b(t)};return t.indices&&t.indices.length>0&&(n.indices={value:new Uint32Array(t.indices),size:1}),n}(r,n)}function y(e,t){var r="",n=0,a=/ply([\s\S]*)end_header\s/.exec(e);null!==a&&(r=a[1],n=a[0].length);for(var i,s,o,u={comments:[],elements:[],headerLength:n},c=r.split("\n"),l=0;l<c.length;l++){var p=c[l];if(""!==(p=p.trim()))switch(s=(o=p.split(/\s+/)).shift(),p=o.join(" "),s){case"format":u.format=o[0],u.version=o[1];break;case"comment":u.comments.push(p);break;case"element":void 0!==i&&u.elements.push(i),(i={}).name=o[0],i.count=parseInt(o[1],10),i.properties=[];break;case"property":i.properties.push(x(o,t.propertyNameMapping));break;default:console.log("unhandled",s,o)}}return void 0!==i&&u.elements.push(i),u}function x(e,t){var r={type:e[0]};return"list"===r.type?(r.name=e[3],r.countType=e[1],r.itemType=e[2]):r.name=e[1],t&&r.name in t&&(r.name=t[r.name]),r}function g(e,t){switch(t){case"char":case"uchar":case"short":case"ushort":case"int":case"uint":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":return parseInt(e,10);case"float":case"double":case"float32":case"float64":return parseFloat(e);default:throw new Error(t)}}function w(e,t){for(var r=t.split(/\s+/),n={},a=0;a<e.length;a++)if("list"===e[a].type){for(var i=[],s=g(r.shift(),e[a].countType),o=0;o<s;o++)i.push(g(r.shift(),e[a].itemType));n[e[a].name]=i}else n[e[a].name]=g(r.shift(),e[a].type);return n}function O(e,t){var r,n={indices:[],vertices:[],normals:[],uvs:[],colors:[]},a="";null!==(r=/end_header\s([\s\S]*)$/.exec(e))&&(a=r[1]);for(var i=a.split("\n"),s=0,o=0,u=0;u<i.length;u++){var c=i[u];if(""!==(c=c.trim())){o>=t.elements[s].count&&(s++,o=0);var l=w(t.elements[s].properties,c);j(n,t.elements[s].name,l),o++}}return n}function j(e,t,r){if("vertex"===t)e.vertices.push(r.x,r.y,r.z),"nx"in r&&"ny"in r&&"nz"in r&&e.normals.push(r.nx,r.ny,r.nz),"s"in r&&"t"in r&&e.uvs.push(r.s,r.t),"red"in r&&"green"in r&&"blue"in r&&e.colors.push(r.red/255,r.green/255,r.blue/255);else if("face"===t){var n=r.vertex_indices||r.vertex_index;3===n.length?e.indices.push(n[0],n[1],n[2]):4===n.length&&(e.indices.push(n[0],n[1],n[3]),e.indices.push(n[1],n[2],n[3]))}}function A(e,t,r,n){switch(r){case"int8":case"char":return[e.getInt8(t),1];case"uint8":case"uchar":return[e.getUint8(t),1];case"int16":case"short":return[e.getInt16(t,n),2];case"uint16":case"ushort":return[e.getUint16(t,n),2];case"int32":case"int":return[e.getInt32(t,n),4];case"uint32":case"uint":return[e.getUint32(t,n),4];case"float32":case"float":return[e.getFloat32(t,n),4];case"float64":case"double":return[e.getFloat64(t,n),8];default:throw new Error(r)}}function S(e,t,r,n){for(var a,i={},s=0,o=0;o<r.length;o++)if("list"===r[o].type){var u=[],c=(a=A(e,t+s,r[o].countType,n))[0];s+=a[1];for(var l=0;l<c;l++)a=A(e,t+s,r[o].itemType,n),u.push(a[0]),s+=a[1];i[r[o].name]=u}else a=A(e,t+s,r[o].type,n),i[r[o].name]=a[0],s+=a[1];return[i,s]}var k={name:"PLY",extensions:["ply"],parseTextSync:m,parseSync:m,text:!0,binary:!0,DEFAULT_OPTIONS:{}},_=(r(33),r(86),!0);function C(e){return{POSITION:{value:new Float32Array(e.position),size:3},NORMAL:{value:new Float32Array(e.normal),size:3},COLOR_0:{value:new Uint8Array(e.color),size:3}}}var I={name:"PCD",extensions:["pcd"],parseSync:function(e,t,r){var n,a,i,s=(new v.a).decode(e),o=function(e){var t={},r=e.search(/[\r\n]DATA\s(\S*)\s/i),n=/[\r\n]DATA\s(\S*)\s/i.exec(e.substr(r-1));if(t.data=n[1],t.headerLen=n[0].length+r,t.str=e.substr(0,t.headerLen),t.str=t.str.replace(/\#.*/gi,""),t.version=/VERSION (.*)/i.exec(t.str),t.fields=/FIELDS (.*)/i.exec(t.str),t.size=/SIZE (.*)/i.exec(t.str),t.type=/TYPE (.*)/i.exec(t.str),t.count=/COUNT (.*)/i.exec(t.str),t.width=/WIDTH (.*)/i.exec(t.str),t.height=/HEIGHT (.*)/i.exec(t.str),t.viewpoint=/VIEWPOINT (.*)/i.exec(t.str),t.points=/POINTS (.*)/i.exec(t.str),null!==t.version&&(t.version=parseFloat(t.version[1])),null!==t.fields&&(t.fields=t.fields[1].split(" ")),null!==t.type&&(t.type=t.type[1].split(" ")),null!==t.width&&(t.width=parseInt(t.width[1],10)),null!==t.height&&(t.height=parseInt(t.height[1],10)),null!==t.viewpoint&&(t.viewpoint=t.viewpoint[1]),null!==t.points&&(t.points=parseInt(t.points[1],10)),null===t.points&&(t.points=t.width*t.height),null!==t.size&&(t.size=t.size[1].split(" ").map(function(e){return parseInt(e,10)})),null!==t.count)t.count=t.count[1].split(" ").map(function(e){return parseInt(e,10)});else{t.count=[];for(var a=0;a<t.fields.length;a++)t.count.push(1)}t.offset={};for(var i=0,s=0;s<t.fields.length;s++)"ascii"===t.data?t.offset[t.fields[s]]=s:(t.offset[t.fields[s]]=i,i+=t.size[s]);return t.rowSize=i,t}(s);switch(o.data){case"ascii":n=function(e,t){for(var r=[],n=[],a=[],i=e.offset,s=t.substr(e.headerLen).split("\n"),o=0;o<s.length;o++)if(""!==s[o]){var u=s[o].split(" ");if(void 0!==i.x&&(r.push(parseFloat(u[i.x])),r.push(parseFloat(u[i.y])),r.push(parseFloat(u[i.z]))),void 0!==i.rgb){var c=new Float32Array([parseFloat(u[i.rgb])]),l=new DataView(c.buffer,0);a.push(l.getUint8(0)/255),a.push(l.getUint8(1)/255),a.push(l.getUint8(2)/255)}void 0!==i.normal_x&&(n.push(parseFloat(u[i.normal_x])),n.push(parseFloat(u[i.normal_y])),n.push(parseFloat(u[i.normal_z])))}return{position:r,normal:n,color:a}}(o,s);break;case"binary":n=function(e,t){for(var r=[],n=[],a=[],i=new DataView(t,e.headerLen),s=e.offset,o=0,u=0;o<e.points;o++,u+=e.rowSize)void 0!==s.x&&(r.push(i.getFloat32(u+s.x,_)),r.push(i.getFloat32(u+s.y,_)),r.push(i.getFloat32(u+s.z,_))),void 0!==s.rgb&&(a.push(i.getUint8(u+s.rgb+0)/255),a.push(i.getUint8(u+s.rgb+1)/255),a.push(i.getUint8(u+s.rgb+2)/255)),void 0!==s.normal_x&&(n.push(i.getFloat32(u+s.normal_x,_)),n.push(i.getFloat32(u+s.normal_y,_)),n.push(i.getFloat32(u+s.normal_z,_)));return{position:r,normal:n,color:a}}(o,e);break;case"binary_compressed":default:throw new Error("PCD: "+o.data+" files are not supported")}return{loaderData:{header:o},header:(a=o,i=a.width*a.height,{vertexCount:i}),mode:0,indices:null,attributes:C(n)}}},E=(r(75),r(76),r(20),r(321),/^[og]\s*(.+)?/),T=/^mtllib /,F=/^usemtl /,L=function(){function e(e){var t=e.index,r=e.name,n=void 0===r?"":r,a=e.mtllib,i=e.smooth,s=e.groupStart;this.index=t,this.name=n,this.mtllib=a,this.smooth=i,this.groupStart=s,this.groupEnd=-1,this.groupCount=-1,this.inherited=!1}return e.prototype.clone=function(t){return void 0===t&&(t=this.index),new e({index:t,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0})},e}(),z=function(){function e(e){void 0===e&&(e=""),this.name=e,this.geometry={vertices:[],normals:[],colors:[],uvs:[]},this.materials=[],this.smooth=!0}var t=e.prototype;return t.startMaterial=function(e,t){var r=this._finalize(!1);r&&(r.inherited||r.groupCount<=0)&&this.materials.splice(r.index,1);var n=new L({index:this.materials.length,name:e,mtllib:Array.isArray(t)&&t.length>0?t[t.length-1]:"",smooth:void 0!==r?r.smooth:this.smooth,groupStart:void 0!==r?r.groupEnd:0});return this.materials.push(n),n},t.currentMaterial=function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},t._finalize=function(e){var t=this.currentMaterial();if(t&&-1===t.groupEnd&&(t.groupEnd=this.geometry.vertices.length/3,t.groupCount=t.groupEnd-t.groupStart,t.inherited=!1),e&&this.materials.length>1)for(var r=this.materials.length-1;r>=0;r--)this.materials[r].groupCount<=0&&this.materials.splice(r,1);return e&&0===this.materials.length&&this.materials.push({name:"",smooth:this.smooth}),t},e}(),D=function(){function e(){this.objects=[],this.object=null,this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.materialLibraries=[],this.startObject("",!1)}var t=e.prototype;return t.startObject=function(e,t){if(void 0===t&&(t=!0),this.object&&!this.object.fromDeclaration)return this.object.name=e,void(this.object.fromDeclaration=t);var r=this.object&&"function"==typeof this.object.currentMaterial?this.object.currentMaterial():void 0;if(this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0),this.object=new z(e),this.object.fromDeclaration=t,r&&r.name&&"function"==typeof r.clone){var n=r.clone(0);n.inherited=!0,this.object.materials.push(n)}this.objects.push(this.object)},t.finalize=function(){this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0)},t.parseVertexIndex=function(e,t){var r=parseInt(e,10);return 3*(r>=0?r-1:r+t/3)},t.parseNormalIndex=function(e,t){var r=parseInt(e,10);return 3*(r>=0?r-1:r+t/3)},t.parseUVIndex=function(e,t){var r=parseInt(e,10);return 2*(r>=0?r-1:r+t/2)},t.addVertex=function(e,t,r){var n=this.vertices,a=this.object.geometry.vertices;a.push(n[e+0],n[e+1],n[e+2]),a.push(n[t+0],n[t+1],n[t+2]),a.push(n[r+0],n[r+1],n[r+2])},t.addVertexPoint=function(e){var t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},t.addVertexLine=function(e){var t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},t.addNormal=function(e,t,r){var n=this.normals,a=this.object.geometry.normals;a.push(n[e+0],n[e+1],n[e+2]),a.push(n[t+0],n[t+1],n[t+2]),a.push(n[r+0],n[r+1],n[r+2])},t.addColor=function(e,t,r){var n=this.colors,a=this.object.geometry.colors;a.push(n[e+0],n[e+1],n[e+2]),a.push(n[t+0],n[t+1],n[t+2]),a.push(n[r+0],n[r+1],n[r+2])},t.addUV=function(e,t,r){var n=this.uvs,a=this.object.geometry.uvs;a.push(n[e+0],n[e+1]),a.push(n[t+0],n[t+1]),a.push(n[r+0],n[r+1])},t.addUVLine=function(e){var t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},t.addFace=function(e,t,r,n,a,i,s,o,u){var c=this.vertices.length,l=this.parseVertexIndex(e,c),p=this.parseVertexIndex(t,c),f=this.parseVertexIndex(r,c);if(this.addVertex(l,p,f),void 0!==n&&""!==n){var h=this.uvs.length;l=this.parseUVIndex(n,h),p=this.parseUVIndex(a,h),f=this.parseUVIndex(i,h),this.addUV(l,p,f)}if(void 0!==s&&""!==s){var d=this.normals.length;l=this.parseNormalIndex(s,d),p=s===o?l:this.parseNormalIndex(o,d),f=s===u?l:this.parseNormalIndex(u,d),this.addNormal(l,p,f)}this.colors.length>0&&this.addColor(l,p,f)},t.addPointGeometry=function(e){this.object.geometry.type="Points";var t=this.vertices.length,r=e,n=Array.isArray(r),a=0;for(r=n?r:r[Symbol.iterator]();;){var i;if(n){if(a>=r.length)break;i=r[a++]}else{if((a=r.next()).done)break;i=a.value}var s=i;this.addVertexPoint(this.parseVertexIndex(s,t))}},t.addLineGeometry=function(e,t){this.object.geometry.type="Line";var r=this.vertices.length,n=this.uvs.length,a=e,i=Array.isArray(a),s=0;for(a=i?a:a[Symbol.iterator]();;){var o;if(i){if(s>=a.length)break;o=a[s++]}else{if((s=a.next()).done)break;o=s.value}var u=o;this.addVertexLine(this.parseVertexIndex(u,r))}var c=t,l=Array.isArray(c),p=0;for(c=l?c:c[Symbol.iterator]();;){var f;if(l){if(p>=c.length)break;f=c[p++]}else{if((p=c.next()).done)break;f=p.value}var h=f;this.addUVLine(this.parseUVIndex(h,n))}},e}(),V=function(e){var t=new D;-1!==e.indexOf("\r\n")&&(e=e.replace(/\r\n/g,"\n")),-1!==e.indexOf("\\\n")&&(e=e.replace(/\\\n/g,""));for(var r=e.split("\n"),n="",a="",i=[],s="function"==typeof"".trimLeft,o=0,u=r.length;o<u;o++)if(n=r[o],0!==(n=s?n.trimLeft():n.trim()).length&&"#"!==(a=n.charAt(0)))if("v"===a){var c=n.split(/\s+/);switch(c[0]){case"v":t.vertices.push(parseFloat(c[1]),parseFloat(c[2]),parseFloat(c[3])),8===c.length&&t.colors.push(parseFloat(c[4]),parseFloat(c[5]),parseFloat(c[6]));break;case"vn":t.normals.push(parseFloat(c[1]),parseFloat(c[2]),parseFloat(c[3]));break;case"vt":t.uvs.push(parseFloat(c[1]),parseFloat(c[2]))}}else if("f"===a){for(var l=n.substr(1).trim().split(/\s+/),p=[],f=0,h=l.length;f<h;f++){var d=l[f];if(d.length>0){var v=d.split("/");p.push(v)}}for(var b=p[0],m=1,y=p.length-1;m<y;m++){var x=p[m],g=p[m+1];t.addFace(b[0],x[0],g[0],b[1],x[1],g[1],b[2],x[2],g[2])}}else if("l"===a){var w=n.substring(1).trim().split(" "),O=void 0,j=[];if(-1===n.indexOf("/"))O=w;else{O=[];for(var A=0,S=w.length;A<S;A++){var k=w[A].split("/");""!==k[0]&&O.push(k[0]),""!==k[1]&&j.push(k[1])}}t.addLineGeometry(O,j)}else if("p"===a){var _=n.substr(1).trim().split(" ");t.addPointGeometry(_)}else if(null!==(i=E.exec(n))){var C=(" "+i[0].substr(1).trim()).substr(1);t.startObject(C)}else if(F.test(n))t.object.startMaterial(n.substring(7).trim(),t.materialLibraries);else if(T.test(n))t.materialLibraries.push(n.substring(7).trim());else{if("s"!==a){if("\0"===n)continue;throw new Error('Unexpected line: "'+n+'"')}if((i=n.split(" ")).length>1){var I=i[1].trim().toLowerCase();t.object.smooth="0"!==I&&"off"!==I}else t.object.smooth=!0;var L=t.object.currentMaterial();L&&(L.smooth=t.object.smooth)}t.finalize();var z=[],V=[],P=t.objects,N=Array.isArray(P),M=0;for(P=N?P:P[Symbol.iterator]();;){var U;if(N){if(M>=P.length)break;U=P[M++]}else{if((M=P.next()).done)break;U=M.value}var B=U,R=B.geometry;if(0!==R.vertices.length){var Z={header:{vertexCount:R.vertices.length/3},attributes:{}};switch(R.type){case"Points":Z.mode=0;break;case"Line":Z.mode=1;break;default:Z.mode=4}Z.attributes.POSITION={value:new Float32Array(R.vertices),size:3},R.normals.length>0&&(Z.attributes.NORMAL={value:new Float32Array(R.normals),size:3}),R.colors.length>0&&(Z.attributes.COLOR_0={value:new Float32Array(R.colors),size:3}),R.uvs.length>0&&(Z.attributes.TEXCOORD_0={value:new Float32Array(R.uvs),size:2}),Z.materials=[];var G=B.materials,H=Array.isArray(G),J=0;for(G=H?G:G[Symbol.iterator]();;){var K;if(H){if(J>=G.length)break;K=G[J++]}else{if((J=G.next()).done)break;K=J.value}var W=K,X={name:W.name,flatShading:!W.smooth};Z.materials.push(X),V.push(X)}Z.name=B.name,z.push(Z)}}return{meshes:z,materials:V}};function P(e,t){var r,n,a,i=new Float32Array(3*t),s=0,o=e,u=Array.isArray(o),c=0;for(o=u?o:o[Symbol.iterator]();;){var l;if(u){if(c>=o.length)break;l=o[c++]}else{if((c=o.next()).done)break;l=c.value}var p=l.attributes,f=p.POSITION,h=p.NORMAL,d=p.COLOR_0,v=p.TEXCOORD_0;i.set(f.value,3*s),h&&(r=r||new Float32Array(3*t)).set(h.value,3*s),d&&(n=n||new Float32Array(3*t)).set(d.value,3*s),v&&(a=a||new Float32Array(2*t)).set(v.value,2*s),s+=f.value.length/3}var b={};return b.POSITION={value:i,size:3},r&&(b.NORMAL={value:r,size:3}),n&&(b.COLOR_0={value:n,size:3}),a&&(b.TEXCOORD_0={value:a,size:2}),b}var N={name:"OBJ",extensions:["obj"],testText:function(e){return"v"===e[0]},parseTextSync:function(e){var t=V(e).meshes,r=t.reduce(function(e,t){return e+t.header.vertexCount},0);return{loaderData:{header:{}},header:{vertexCount:r},mode:4,attributes:P(t,r)}}},M=r(225),U=r(229),B=(r(237),r(245),r(14),r(11),r(223),r(9)),R=B.a.div.withConfig({displayName:"control-panel__Container",componentId:"sc-14q5t5u-0"})(["display:flex;flex-direction:column;position:absolute;top:0;right:0;max-width:320px;background:#fff;box-shadow:0 2px 4px rgba(0,0,0,0.3);padding:12px 24px;margin:20px;font-size:13px;line-height:2;outline:none;z-index:100;"]),Z=B.a.select.withConfig({displayName:"control-panel__DropDown",componentId:"sc-14q5t5u-1"})(["margin-bottom:6px;"]),G=function(e){function t(){return e.apply(this,arguments)||this}s()(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this.props,t=e.examples,r=void 0===t?{}:t,n=e.selectedCategory,a=e.selectedExample,i=e.onExampleChange;if(!(n&&a||this._autoSelected)){var s=Object.keys(r)[0],o=Object.keys(r[s])[0],u=r[s][o];this._autoSelected=!0,i({selectedCategory:s,selectedExample:o,example:u})}},r._renderList=function(){var e=this.props,t=e.examples,r=void 0===t?{}:t,n=e.selectedCategory,a=e.selectedExample,i=e.onExampleChange;if(!n||!a)return!1;var s=n+"."+a;return u.a.createElement(Z,{value:s,onChange:function(e){var t=e.target.value.split("."),s=t[0],o=t[1],u=r[n][a];i({selectedCategory:s,selectedExample:o,example:u})}},Object.keys(r).map(function(e,t){var n=r[e];return u.a.createElement("optgroup",{key:t,label:e},Object.keys(n).map(function(t,r){var n=e+"."+t;return u.a.createElement("option",{key:r,value:n},t+" ("+e+")")}))}))},r._renderHeader=function(){var e=this.props,t=e.selectedCategory,r=e.selectedExample;return t&&r?u.a.createElement("div",null,u.a.createElement("h3",null,r," ",u.a.createElement("b",null,t)," ")):null},r._renderDropDown=function(){return this._renderList()},r._renderDropped=function(){var e=this.props.droppedFile;return e?u.a.createElement("div",null,"Dropped file: ",JSON.stringify(e.name)):null},r._renderStats=function(){var e,t=this.props,r=t.vertexCount,n=t.loadTimeMs;return e=r>=1e7?(r/1e6).toFixed(0)+"M":r>=1e6?(r/1e6).toFixed(1)+"M":r>=1e4?(r/1e3).toFixed(0)+"K":r>=1e3?(r/1e3).toFixed(1)+"K":""+r,u.a.createElement("div",null,u.a.createElement("div",null,Number.isFinite(r)?"Points: "+e:null),u.a.createElement("div",null,Number.isFinite(n)?"Load time: "+(n/1e3).toFixed(1)+"s":null))},r.render=function(){return u.a.createElement(R,null,this._renderHeader(),this._renderDropDown(),this._renderDropped(),this._renderStats())},t}(o.PureComponent);r(31);var H="https://raw.githubusercontent.com/uber-common/deck.gl-data/master",J="https://raw.githubusercontent.com/uber-web/loaders.gl/master",K={PLY:{"Lucy 800K":{uri:H+"/examples/point-cloud-ply/lucy800k.ply"},"Lucy 100K":{uri:H+"/examples/point-cloud-ply/lucy100k.ply"},Bunny:{uri:J+"/modules/obj/bunny.ply"},"Bun Zipper (Text)":{uri:J+"/modules/ply/bun_zipper.ply"}},LAZ:{"Indoor Scan 800K":{uri:H+"/examples/point-cloud-laz/indoor.0.1.laz"},"Indoor Scan 8M":{uri:H+"/examples/point-cloud-laz/indoor.laz"}},Draco:{Bunny:{uri:J+"/modules/draco/bunny.drc"}},PCD:{Zaghetto:{uri:J+"/modules/pcd/Zaghetto.pcd"},"Simple (Text)":{uri:J+"/modules/obj/simple-ascii.pcd"}},OBJ:{Magnolia:{uri:J+"/modules/obj/magnolia.obj"},Bunny:{uri:J+"/modules/obj/bunny.obj"},Cube:{uri:J+"/modules/obj/cube.obj"}}};r.d(t,"default",function(){return Y}),r.d(t,"renderToDOM",function(){return q}),Object(M.b)([h.a,d.a,k,I,N]);var W={target:[0,0,0],rotationX:0,rotationOrbit:0,orbitAxis:"Y",fov:50,minZoom:0,maxZoom:10,zoom:1},X=new p.d(["rotationOrbit"]),Y=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={viewState:W,pointsCount:0,points:null,droppedFile:null},r._onLoad=r._onLoad.bind(a()(r)),r._rotateCamera=r._rotateCamera.bind(a()(r)),r._onViewStateChange=r._onViewStateChange.bind(a()(r)),r._onExampleChange=r._onExampleChange.bind(a()(r)),r}s()(t,e);var r=t.prototype;return r._onViewStateChange=function(e){var t=e.viewState;this.setState({viewState:t})},r._rotateCamera=function(){var e=this.state.viewState;this.setState({viewState:Object.assign({},e,{rotationOrbit:e.rotationOrbit+30,transitionDuration:600,transitionInterpolator:X,onTransitionEnd:this._rotateCamera})})},r._onExampleChange=function(e){var t=e.selectedCategory,r=e.selectedExample,n=e.example.uri;Object(U.a)(n).then(this._onLoad.bind(this)),this._loadStartMs=Date.now(),this.setState({selectedCategory:t,selectedExample:r,loadTimeMs:void 0})},r._onLoad=function(e){var t=e.header,r=e.loaderData,n=e.attributes,a=(e.progress,r.header),i=a.mins,s=a.maxs,o=this.state.viewState;i&&s&&(o=Object.assign({},W,{target:[(i[0]+s[0])/2,(i[1]+s[1])/2,(i[2]+s[2])/2],zoom:Math.log2(window.innerWidth/(s[0]-i[0]))-1})),this.setState({loadTimeMs:Date.now()-this._loadStartMs,pointsCount:t.vertexCount,points:n.POSITION.value,viewState:o},this._rotateCamera)},r._renderLayers=function(){var e=this.state,t=e.pointsCount,r=e.points,n=e.selectedExample;return[r&&new f.a({id:"point-cloud-layer-"+n,coordinateSystem:p.a.IDENTITY,numInstances:t,instancePositions:r,getNormal:[0,1,0],getColor:[255,255,255],opacity:.5,pointSize:.5})]},r._renderControlPanel=function(){var e=this.state,t=e.selectedExample,r=e.selectedCategory,n=e.pointsCount,a=e.loadTimeMs;return u.a.createElement(G,{examples:K,selectedCategory:r,selectedExample:t,onExampleChange:this._onExampleChange,vertexCount:n,loadTimeMs:a})},r.render=function(){var e=this.state.viewState;return u.a.createElement("div",null,this._renderControlPanel(),u.a.createElement(l.a,{views:new p.e,viewState:e,controller:!0,onViewStateChange:this._onViewStateChange,layers:this._renderLayers(),parameters:{clearColor:[.07,.14,.19,1]}}))},t}(o.PureComponent);function q(e){Object(c.render)(u.a.createElement(Y,null),e)}},206:function(e,t,r){"use strict";r.d(t,"c",function(){return s}),r.d(t,"a",function(){return o}),r.d(t,"d",function(){return u}),r.d(t,"b",function(){return c}),r.d(t,"e",function(){return l});r(75),r(76);var n=function(e){return"boolean"==typeof e},a=function(e){return"function"==typeof e},i=function(e){return null!==e&&"object"==typeof e},s=function(e){return e&&"function"==typeof e[Symbol.iterator]},o=function(e){return e&&"function"==typeof e[Symbol.asyncIterator]},u=function(e){return i(e)&&"done"in e&&"value"in e},c=function(e){return"undefined"!=typeof window&&e instanceof window.Response||e.arrayBuffer&&e.json&&e.body},l=function(e){return function(e){return i(e)&&a(e.tee)&&a(e.cancel)&&a(e.pipeTo)&&a(e.getReader)}(e)||function(e){return i(e)&&a(e.read)&&a(e.pipe)&&n(e.readable)}(e)}},210:function(e,t,r){"use strict";(function(e,n){r.d(t,"b",function(){return a}),r.d(t,"a",function(){return s});var a="object"!=typeof e||"[object process]"!==String(e)||e.browser,i={self:"undefined"!=typeof self&&self,window:"undefined"!=typeof window&&window,global:void 0!==n&&n,document:"undefined"!=typeof document&&document},s=i.global||i.self||i.window}).call(this,r(122),r(78))},211:function(e,t,r){"use strict";(function(e){r.d(t,"a",function(){return s});r(31),r(11),r(203);var n=r(220),a=function(e){return e&&e instanceof ArrayBuffer},i=function(t){return t&&t instanceof e};function s(e){if(a(e))return e;if(i(e))return new Uint8Array(e).buffer;if(ArrayBuffer.isView(e))return e.buffer;if("string"==typeof e){var t=e;return(new TextEncoder).encode(t).buffer}return Object(n.a)(!1)}}).call(this,r(251).Buffer)},212:function(e,t,r){"use strict";r(7);var n=r(205),a=r.n(n),i=(r(208),r(209)),s=r.n(i),o=r(246),u=r(226),c=function(){function e(){}var t=e.prototype;return t.log=function(){},t.info=function(){},t.warn=function(){},t.error=function(){},e}(),l=r(225),p=r(220),f=(r(31),r(20),r(14),r(11),r(77),r(228),r(211)),h=new Map;function d(e,t,r){var n=function(e){var t=h.get(e);if(!t){var r=new Blob([e],{type:"application/javascript"});t=URL.createObjectURL(r),h.set(e,t)}return new Worker(t)}(e);r=function(e){null!==(e=Object.assign({},e)).log&&delete e.log;return e}(r);var a=function(e,t){return new Promise(function(r,a){n.onmessage=function(e){switch(e.data.type){case"done":r(e.data.result),n.terminate();break;case"error":a(new Error(e.data.message))}};var i=Object(f.a)(e);n.postMessage({arraybuffer:i,opts:t},[i])})};return t?a(t,r):a}r(75),r(76);var v=r(206),b=r(235),m="Cannot convert supplied data type";function y(e){return Object(v.b)(e)?e.url:null}function x(e,t){if(t.text&&"string"==typeof e)return e;if(e instanceof ArrayBuffer||ArrayBuffer.isView(e)){var r=e.buffer||e;return t.text&&!t.binary?new TextDecoder("utf8").decode(r):r}throw new Error(m)}function g(e,t){return w.apply(this,arguments)}function w(){return(w=s()(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:if(t=e.sent,n=t instanceof ArrayBuffer||ArrayBuffer.isView(t),"string"!=typeof t&&!n){e.next=6;break}return e.abrupt("return",x(t,r));case 6:if(!Object(v.b)(t)){e.next=15;break}if(!r.binary){e.next=13;break}return e.next=10,t.arrayBuffer();case 10:e.t0=e.sent,e.next=14;break;case 13:e.t0=t.text();case 14:return e.abrupt("return",e.t0);case 15:throw new Error(m);case 16:case"end":return e.stop()}},e)}))).apply(this,arguments)}function O(e,t){return j.apply(this,arguments)}function j(){return(j=s()(a.a.mark(function e(t,r){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(v.d)(t)){e.next=2;break}return e.abrupt("return",t);case 2:if(!Object(v.b)(t)){e.next=4;break}return e.abrupt("return",Object(b.a)(t.body));case 4:if(!Object(v.e)(t)){e.next=6;break}return e.abrupt("return",Object(b.a)(t));case 6:if(!Object(v.a)(t)){e.next=8;break}return e.abrupt("return",t[Symbol.asyncIterator]());case 8:return e.abrupt("return",A(t,r));case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}function A(e,t){return S.apply(this,arguments)}function S(){return(S=s()(a.a.mark(function e(t,r){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t instanceof ArrayBuffer||ArrayBuffer.isView(t))){e.next=2;break}return e.abrupt("return",a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.buffer||t;case 2:case"end":return e.stop()}},e)})());case 2:if(!Object(v.d)(t)){e.next=4;break}return e.abrupt("return",t);case 4:if(!Object(v.c)(t)){e.next=6;break}return e.abrupt("return",t[Symbol.iterator]());case 6:throw new Error(m);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function k(e,t,r,n){return _.apply(this,arguments)}function _(){return(_=s()(a.a.mark(function e(t,r,n,i){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=i||y(t),e.next=3,g(t,r);case 3:if(t=e.sent,!r.parseTextSync||"string"!=typeof t){e.next=7;break}return n.dataType="text",e.abrupt("return",r.parseTextSync(t,n,i,r));case 7:if(!r.parseSync){e.next=9;break}return e.abrupt("return",r.parseSync(t,n,i,r));case 9:if(!r.parse){e.next=13;break}return e.next=12,r.parse(t,n,i,r);case 12:return e.abrupt("return",e.sent);case 13:if(!r.worker){e.next=17;break}return e.next=16,d(r.worker,t,n);case 16:return e.abrupt("return",e.sent);case 17:return e.abrupt("return",Object(p.a)(!1));case 18:case"end":return e.stop()}},e)}))).apply(this,arguments)}function C(e,t,r,n){return I.apply(this,arguments)}function I(){return(I=s()(a.a.mark(function e(t,r,n,i){var s,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.parseInBatches){e.next=6;break}return e.next=3,O(t);case 3:return s=e.sent,o=r.parseInBatches(s,n,i,r),e.abrupt("return",o);case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function E(e,t,r,n){return T.apply(this,arguments)}function T(){return(T=s()(a.a.mark(function e(t,r,n,i){var s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(Array.isArray(r)||Object(u.a)(r)||(i=n,n=r,r=null),r=r||Object(l.a)(),s=Array.isArray(r)?Object(o.a)(i,t,r):r){e.next=5;break}return e.abrupt("return",null);case 5:return Object(u.b)(s),n=D(n,s),e.next=9,k(t,s,n,i);case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}function F(e,t,r,n){Array.isArray(t)||Object(u.a)(t)||(n=r,r=t,t=null),t=t||Object(l.a)();var a=Array.isArray(t)?Object(o.a)(n,e,t):t;return Object(u.b)(a),function(e,t,r,n){return e=x(e,t),t.parseTextSync&&"string"==typeof e?t.parseTextSync(e,r,n,t):t.parseSync?t.parseSync(e,r,n,t):Object(p.a)(!1)}(e,a,r=D(r,a),n)}function L(e,t,r,n){return z.apply(this,arguments)}function z(){return(z=s()(a.a.mark(function e(t,r,n,i){var s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Array.isArray(r)||Object(u.a)(r)||(i=n,n=r,r=null),r=r||Object(l.a)(),s=Array.isArray(r)?Object(o.a)(i,null,r):r,Object(u.b)(s),n=D(n,s),e.abrupt("return",C(t,s,n,i));case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function D(e,t){return null===(e=Object.assign({},t.DEFAULT_OPTIONS,t.defaultOptions,t.options,e,{dataType:"arraybuffer"})).log&&(e.log=new c),"log"in e||(e.log=console),e}r.d(t,"a",function(){return E}),r.d(t,"c",function(){return F}),r.d(t,"b",function(){return L})},215:function(e,t,r){"use strict";r.d(t,"a",function(){return i});r(33),r(80),r(7);var n="",a={};function i(e){for(var t in a)if(e.startsWith(t)){var r=a[t];return e.replace(t,r)}return e+=n}},216:function(e,t,r){"use strict";r.d(t,"b",function(){return a}),r.d(t,"a",function(){return i});r(205),r(208),r(209),r(212),r(227),r(229),r(215);var n=r(210),a=n.a.TextEncoder,i=n.a.TextDecoder},220:function(e,t,r){"use strict";function n(e,t){if(!e)throw new Error(t||"loader assertion failed.")}r.d(t,"a",function(){return n})},225:function(e,t,r){"use strict";r.d(t,"b",function(){return i}),r.d(t,"a",function(){return s});r(14),r(11),r(259),r(75),r(76),r(20);var n=r(226),a={};function i(e){var t=e=Array.isArray(e)?e:[e],r=Array.isArray(t),i=0;for(t=r?t:t[Symbol.iterator]();;){var s;if(r){if(i>=t.length)break;s=t[i++]}else{if((i=t.next()).done)break;s=i.value}var o=s;Object(n.b)(o);var u=o.extensions,c=Array.isArray(u),l=0;for(u=c?u:u[Symbol.iterator]();;){var p;if(c){if(l>=u.length)break;p=u[l++]}else{if((l=u.next()).done)break;p=l.value}a[p]=o}}}function s(){return Object.values(a)}},226:function(e,t,r){"use strict";r.d(t,"a",function(){return a}),r.d(t,"b",function(){return i});r(7);var n=r(220);function a(e){return!!e&&(Array.isArray(e)&&(e=e[0]),e.parseTextSync||e.parseSync||e.parse||e.loadAndParse||e.parseStream||e.parseInBatches||e.worker)}function i(e){var t;return Object(n.a)(a(e)),Array.isArray(e)&&(t=(e=e[0])[1],e=Object.assign({},e,{options:Object.assign({},e.options,{options:t})})),e.extension&&(e.extensions=e.extensions||[e.extension],delete e.extension),Array.isArray(e.extensions)||(e.extensions=[e.extensions]),Object(n.a)(e.extensions&&e.extensions.length>0&&e.extensions[0]),e.parseTextSync&&(e.text=!0),e.text||(e.binary=!0),e}},227:function(e,t,r){"use strict";r.d(t,"a",function(){return u});var n=r(205),a=r.n(n),i=(r(208),r(209)),s=r.n(i),o=r(215);function u(e,t){return c.apply(this,arguments)}function c(){return(c=s()(a.a.mark(function e(t,r){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(o.a)(t),e.abrupt("return",fetch(t,r));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}},229:function(e,t,r){"use strict";r.d(t,"a",function(){return f});var n=r(205),a=r.n(n),i=(r(208),r(209)),s=r.n(i),o=r(227),u=r(226),c=r(246),l=r(212),p=r(225);function f(e,t,r){return h.apply(this,arguments)}function h(){return(h=s()(a.a.mark(function e(t,r,n){var i,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(Array.isArray(r)||Object(u.a)(r)||(n=r,r=null),r=r||Object(p.a)(),!(i=Array.isArray(r)?Object(c.a)(t,null,r):r)||!i.loadAndParse){e.next=7;break}return e.next=6,i.loadAndParse(t,n);case 6:return e.abrupt("return",e.sent);case 7:if("string"!=typeof(s=t)){e.next=12;break}return e.next=11,Object(o.a)(t,n);case 11:s=e.sent;case 12:return e.abrupt("return",Object(l.a)(s,r,n,t));case 13:case"end":return e.stop()}},e)}))).apply(this,arguments)}},235:function(e,t,r){"use strict";r.d(t,"a",function(){return f});r(31),r(11),r(75),r(76);var n=r(209),a=r.n(n),i=r(205),s=r.n(i),o=(r(208),r(298)),u=r.n(o),c=r(299),l=r.n(c),p=r(210);function f(e){return"function"==typeof e[Symbol.asyncIterator]?e:"function"==typeof e.getIterator?e.getIterator():p.b?function(e){return h.apply(this,arguments)}(e):function(e){return d.apply(this,arguments)}(e)}function h(){return(h=l()(s.a.mark(function e(t){var r,n,a,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=t.getReader(),e.prev=1;case 2:return e.next=5,u()(r.read());case 5:if(n=e.sent,a=n.done,i=n.value,!a){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,i;case 12:e.next=2;break;case 14:return e.prev=14,r.releaseLock(),e.finish(14);case 17:case"end":return e.stop()}},e,null,[[1,,14,17]])}))).apply(this,arguments)}function d(){return(d=l()(s.a.mark(function e(t){var r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u()(t);case 2:t=e.sent;case 3:if(null===(r=t.read())){e.next=9;break}return e.next=8,r;case 8:return e.abrupt("continue",3);case 9:if(!t._readableState.ended){e.next=11;break}return e.abrupt("return");case 11:return e.next=13,u()(v(t));case 13:e.next=3;break;case 15:case"end":return e.stop()}},e)}))).apply(this,arguments)}function v(e){return b.apply(this,arguments)}function b(){return(b=a()(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e){t.once("readable",e)}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}},246:function(e,t,r){"use strict";r.d(t,"a",function(){return i});r(75),r(76),r(20),r(81);var n=r(226),a=/[^.]+$/;function i(e,t,r){void 0===e&&(e="");var i=e.match(a);if(i&&i[0]){var s=function(e,t){t=t.toLowerCase();for(var r=e,a=Array.isArray(r),i=0,r=a?r:r[Symbol.iterator]();;){var s;if(a){if(i>=r.length)break;s=r[i++]}else{if((i=r.next()).done)break;s=i.value}var o=s;Object(n.b)(o);for(var u=o.extensions,c=Array.isArray(u),l=0,u=c?u:u[Symbol.iterator]();;){var p;if(c){if(l>=u.length)break;p=u[l++]}else{if((l=u.next()).done)break;p=l.value}var f=p;if(f.toLowerCase()===t)return o}}return null}(r,i[0]);if(s)return s}var o=function(e,t){for(var r=e,n=Array.isArray(r),a=0,r=n?r:r[Symbol.iterator]();;){var i;if(n){if(a>=r.length)break;i=r[a++]}else{if((a=r.next()).done)break;i=a.value}var s=i;if(s.testText&&s.testText(t))return s}return null}(r,t);return o||null}},275:function(e,t){},314:function(e,t){},315:function(e,t){},369:function(e,t){},370:function(e,t){}}]);