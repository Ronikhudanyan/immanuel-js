!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Immanuel=t()}(this,(function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,s=!1,r=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){s=!0,r=e}finally{try{a||null==l.return||l.return()}finally{if(s)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var o=function(){function t(){e(this,t)}return n(t,null,[{key:"create",value:function(e){return r(r({},this.defaults),e)}}]),t}();a(o,"defaults",{rotateToHorizon:!0,rotateSigns:!0,rotateHouseNumbers:!1,rotateAngleText:!1,angleFormat:"%D&deg;%M'",lineOrder:["houses","angleMarkers","anglePointers","aspects"],aspectOrder:["trine","sextile","semisextile","square","semisquare","sesquisquare","opposite","quintile","semiquintile","sesquiquintile","biquintile","quincunx"]});var u=function(){function t(n){if(e(this,t),this.chart=document.querySelector(n),!this.chart)return!1;this.chartSvgContainer=this.chart.querySelector("[data-immanuel-lines]"),this.chartBackground=this.chart.querySelector("[data-immanuel-background]"),this.angleTrack=this.chart.querySelector('[data-immanuel-track="angles"]'),this.signTrack=this.chart.querySelector('[data-immanuel-track="signs"]'),this.planetTrack=this.chart.querySelector('[data-immanuel-track="planets"]'),this.angleTextTrack=this.chart.querySelector('[data-immanuel-track="angle-text"]'),this.houseNumberTrack=this.chart.querySelector('[data-immanuel-track="house-numbers"]'),this.houseStartBoundary=this.chart.querySelector('[data-immanuel-boundary="house-start"]'),this.houseEndBoundary=this.chart.querySelector('[data-immanuel-boundary="house-end"]'),this.angleMarkersStartBoundary=this.chart.querySelector('[data-immanuel-boundary="angle-markers-start"]'),this.angleMarkersEndBoundary=this.chart.querySelector('[data-immanuel-boundary="angle-markers-end"]'),this.aspectEndBoundary=this.chart.querySelector('[data-immanuel-boundary="aspect-end"]'),this.angles=this.chart.querySelectorAll("[data-immanuel-angle]"),this.signs=this.chart.querySelectorAll("[data-immanuel-sign]"),this.planets=this.chart.querySelectorAll("[data-immanuel-planet]"),this.placeholders=this.chart.querySelectorAll("[data-immanuel-placeholder]"),this.chartLines=[],this.houseNumbers=[],this.angleText={},this.houseNumberTrack&&this.createHouseNumberElements(),this.angleTextTrack&&this.createAngleTextElements(),this.markerTrack&&this.createInnerMarkerTrackElement(),this.createSvgElement()}return n(t,null,[{key:"create",value:function(e){return this.instance||(this.instance=new this(e))}}]),n(t,[{key:"createSvgElement",value:function(){this.chartSvg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.chartSvg.setAttributeNS(null,"width","100%"),this.chartSvg.setAttributeNS(null,"height","100%"),Object.assign(this.chartSvg.style,{position:"absolute",top:0,left:0,width:"100%",height:"100%"}),this.chartSvgContainer?this.chartSvgContainer.appendChild(this.chartSvg):this.chart.appendChild(this.chartSvg)}},{key:"createHouseNumberElements",value:function(){for(var e=1;e<=12;++e){var t=document.createElement("span");t.textContent=e,t.style.position="absolute",t.classList.add("immanuel__house-number","house-number--".concat(e)),this.houseNumbers[e]=t,this.houseNumberTrack.appendChild(t)}}},{key:"createAngleTextElements",value:function(){var e=this;this.planets.forEach((function(t){var n=t.getAttribute("data-immanuel-planet"),a=n.replace(" ","-"),s=document.createElement("div");s.classList.add("immanuel__angle-text","angle-text--".concat(a)),s.style.position="absolute",e.angleText[n]=s,e.angleTextTrack.appendChild(s)}))}}]),t}();a(u,"instance",null);var c=function(){function t(){e(this,t)}return n(t,null,[{key:"findRelativePoint",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=e.offsetWidth+n,s=a/2,r=t*(Math.PI/180)*-1,i=s+s*Math.cos(r),l=s+s*Math.sin(r);return[i,l]}},{key:"findGlobalPoint",value:function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=this.findRelativePoint(t,n,a),r=i(s,2),l=r[0],o=r[1],u=t.offsetWidth+a,c=l+(e.offsetWidth-u)/2,h=o+(e.offsetHeight-u)/2;return[c,h]}},{key:"formatAngleString",value:function(e,t){var n={"%D":e.degrees,"%M":e.minutes,"%S":e.seconds};return t.replace(/%D|%M|%S/g,(function(e){return n[e]}))}}]),t}(),h=function(){function t(n,a,s){e(this,t),this.elements=n,this.options=a,this.chartData=s,this.offsetAngle=0,this.planets={},this.aspectedPlanets=[],this.init()}return n(t,null,[{key:"create",value:function(e,t,n){return new this(e,t,n)}}]),n(t,[{key:"init",value:function(){var e=this;this.elements.planets.forEach((function(t){var n=t.getAttribute("data-immanuel-planet");if(n in e.chartData.points)var a=e.chartData.points[n];else if(n in e.chartData.planets)a=e.chartData.planets[n];e.planets[n]=a,t.hasAttribute("data-immanuel-no-aspects")||e.aspectedPlanets.push(n)})),window.addEventListener("resize",(function(){document.querySelectorAll("[data-immanuel-hide]").length||e.setupChart()}))}},{key:"display",value:function(){var e=this;"complete"===document.readyState?(this.setOffsetAngle(),this.rotateChart(),this.elements.placeholders&&this.setPlaceholderData(),this.setupChart(),document.querySelectorAll("[data-immanuel-hide]").forEach((function(e){e.removeAttribute("data-immanuel-hide")}))):window.addEventListener("load",(function(){e.display()}))}},{key:"setOffsetAngle",value:function(){this.offsetAngle=this.options.rotateToHorizon?(this.chartData.angles.asc.chartAngle+180)%360:0}},{key:"rotateChart",value:function(){this.elements.chartBackground.style.transform=this.offsetAngle>0?"rotate(".concat(this.offsetAngle,"deg)"):"none"}},{key:"setPlaceholderData",value:function(){var e=this;this.elements.placeholders.forEach((function(t){var n=t.getAttribute("data-immanuel-placeholder");switch(n){case"asc":case"desc":case"mc":case"ic":t.innerHTML=c.formatAngleString(e.chartData.angles[n].formattedSignAngle,e.options.angleFormat)}}))}},{key:"setupChart",value:function(){this.elements.angleTrack&&this.elements.angles&&this.setAngles(),this.elements.signTrack&&this.elements.signs&&this.setSigns(),this.elements.planetTrack&&this.elements.planets&&this.setPlanets(),this.removeLines(),this.drawLines()}},{key:"removeLines",value:function(){this.elements.chartLines.forEach((function(e){e.remove()}))}},{key:"drawLines",value:function(){var e=this;this.options.lineOrder.reverse().forEach((function(t){switch(t){case"angleMarkers":e.elements.angleMarkersStartBoundary&&e.elements.angleMarkersEndBoundary&&e.setPlanetAngleMarkers();break;case"anglePointers":e.elements.angleMarkersStartBoundary&&e.setPlanetAnglePointers();break;case"houses":e.elements.houseStartBoundary&&e.elements.houseEndBoundary&&(e.setHouses(),e.elements.houseNumberTrack&&e.setHouseNumbers());break;case"aspects":e.setAspects()}}))}},{key:"setAngles",value:function(){var e=this;this.elements.angles.forEach((function(t){var n=t.getAttribute("data-immanuel-angle"),a=e.chartData.angles[n].chartAngle-e.offsetAngle,s=i(c.findRelativePoint(e.elements.angleTrack,a),2),r=s[0],l=s[1];r=Math.round(r-t.offsetWidth/2),l=Math.round(l-t.offsetHeight/2),Object.assign(t.style,{position:"absolute",left:r+"px",top:l+"px"})}))}},{key:"setSigns",value:function(){var e=this,t=15-this.offsetAngle;this.elements.signs.forEach((function(n){var a=i(c.findRelativePoint(e.elements.signTrack,t),2),s=a[0],r=a[1];if(s=Math.round(s-n.offsetWidth/2),r=Math.round(r-n.offsetHeight/2),Object.assign(n.style,{position:"absolute",left:s+"px",top:r+"px"}),e.options.rotateSigns){var l=-1*t+90;n.style.transform="rotate(".concat(l,"deg)")}t+=30}))}},{key:"setPlanets",value:function(){this.resetPlanetAngles(),this.resolvePlanetCollisions(),this.positionPlanets(),this.elements.angleTextTrack&&this.setPlanetAngleText()}},{key:"resetPlanetAngles",value:function(){Object.values(this.planets).forEach((function(e){e.displayAngle=e.chartAngle}))}},{key:"resolvePlanetCollisions",value:function(){var e=this,t=[];this.elements.planets.forEach((function(n){var a=n.getAttribute("data-immanuel-planet"),s=e.planets[a];e.elements.planets.forEach((function(r){var i=r.getAttribute("data-immanuel-planet");if(a!==i){var l=e.planets[i],o=Math.max(n.offsetWidth,n.offsetHeight)/2,u=Math.max(r.offsetWidth,r.offsetHeight)/2,c=e.elements.planetTrack.offsetWidth,h=Math.abs(s.displayAngle-l.displayAngle);Math.abs(Math.sin(h*(Math.PI/360))*c)<o+u&&(t.forEach((function(e){if(e.includes(s)||e.includes(l))return e.includes(s)||e.push(s),void(e.includes(l)||e.push(l))})),t.push([s,l]))}}))})),t.length>0&&(t.forEach((function(e){e.sort((function(e,t){return Math.abs(e.displayAngle-t.displayAngle)>270?t.displayAngle-e.displayAngle:e.displayAngle-t.displayAngle})),e[0].displayAngle-=.1,e[e.length-1].displayAngle+=.1})),this.resolvePlanetCollisions())}},{key:"positionPlanets",value:function(){var e=this;this.elements.planets.forEach((function(t){var n=t.getAttribute("data-immanuel-planet"),a=e.planets[n],s=a.displayAngle-e.offsetAngle,r=a.movement.toLowerCase();t.classList.add("immanuel__planet-movement","planet-movement--".concat(r)),t.classList.add("immanuel__planet-sign","planet-sign--".concat(a.sign.toLowerCase()));var l=i(c.findRelativePoint(e.elements.planetTrack,s),2),o=l[0],u=l[1];o=Math.round(o-t.offsetWidth/2),u=Math.round(u-t.offsetHeight/2),Object.assign(t.style,{position:"absolute",left:o+"px",top:u+"px"})}))}},{key:"setPlanetAngleText",value:function(){for(var e=0,t=Object.entries(this.planets);e<t.length;e++){var n=i(t[e],2),a=n[0],s=n[1],r=s.displayAngle-this.offsetAngle,l=this.elements.angleText[a];if(l.style.transform="none",l.innerHTML=c.formatAngleString(s.formattedSignAngle,this.options.angleFormat),this.options.rotateAngleText){var o=l.offsetWidth/2,u=l.offsetHeight/2,h=-1*r;r>90&&r<270&&(h-=180),l.style.transform="rotate(".concat(h,"deg)")}else{var f=i(c.findRelativePoint(this.elements.chart,r),2),d=f[0],m=f[1];o=l.offsetWidth*(d/this.elements.chart.offsetWidth),u=l.offsetHeight*(m/this.elements.chart.offsetHeight)}var g=i(c.findRelativePoint(this.elements.angleTextTrack,r),2),p=g[0],y=g[1];p=Math.round(p-o),y=Math.round(y-u),Object.assign(l.style,{left:p+"px",top:y+"px"})}}},{key:"setPlanetAngleMarkers",value:function(){for(var e=0,t=Object.entries(this.planets);e<t.length;e++){var n=i(t[e],2),a=n[0],s=n[1].chartAngle-this.offsetAngle,r=a.replace(" ","-"),l=i(c.findGlobalPoint(this.elements.chart,this.elements.angleMarkersEndBoundary,s),2),o=l[0],u=l[1],h=i(c.findGlobalPoint(this.elements.chart,this.elements.angleMarkersStartBoundary,s),2),f=h[0],d=h[1];this.drawLine(o,u,f,d,"immanuel__angle-marker","angle-marker--".concat(r))}}},{key:"setPlanetAnglePointers",value:function(){var e=this;this.elements.planets.forEach((function(t){var n=t.getAttribute("data-immanuel-planet"),a=e.planets[n],s=a.chartAngle-e.offsetAngle,r=a.displayAngle-e.offsetAngle,l=Math.max(t.offsetWidth,t.offsetHeight),o=n.replace(" ","-"),u=i(c.findGlobalPoint(e.elements.chart,e.elements.angleMarkersStartBoundary,s),2),h=u[0],f=u[1],d=i(c.findGlobalPoint(e.elements.chart,e.elements.planetTrack,r,l+10),2),m=d[0],g=d[1],p=i(c.findGlobalPoint(e.elements.chart,e.elements.planetTrack,r,l),2),y=p[0],v=p[1];e.drawLine(h,f,m,g,"immanuel__angle-pointer","angle-pointer--".concat(o)),e.drawLine(m,g,y,v,"immanuel__angle-pointer","angle-pointer--".concat(o))}))}},{key:"setHouses",value:function(){for(var e=0,t=Object.entries(this.chartData.houses);e<t.length;e++){var n=i(t[e],2),a=n[0],s=n[1].chartAngle-this.offsetAngle,r=i(c.findGlobalPoint(this.elements.chart,this.elements.houseEndBoundary,s),2),l=r[0],o=r[1],u=i(c.findGlobalPoint(this.elements.chart,this.elements.houseStartBoundary,s),2),h=u[0],f=u[1];this.drawLine(l,o,h,f,"immanuel__house-line","house-line--".concat(a))}}},{key:"setHouseNumbers",value:function(){for(var e=0,t=Object.entries(this.chartData.houses);e<t.length;e++){var n=i(t[e],2),a=n[0],s=n[1].chartAngle-this.offsetAngle,r=12==a?1:parseInt(a)+1,l=this.chartData.houses[r].chartAngle,o=s+((l<s?l+360:l)-s-this.offsetAngle)/2,u=this.elements.houseNumbers[a],h=i(c.findRelativePoint(this.elements.houseNumberTrack,o),2),f=h[0],d=h[1];if(f=Math.round(f-u.offsetWidth/2),d=Math.round(d-u.offsetHeight/2),Object.assign(u.style,{left:f+"px",top:d+"px"}),this.options.rotateHouseNumbers){var m=-1*o+90;u.style.transform="rotate(".concat(m,"deg)")}}}},{key:"setAspects",value:function(){var e=this,t={};this.options.aspectOrder.reverse().forEach((function(e){return t[e]=[]}));for(var n=0,a=Object.entries(this.planets);n<a.length;n++)for(var s=i(a[n],2),r=s[0],l=s[1],o=function(){var n=i(h[u],2),a=n[0],s=n[1],l=i([r,a].sort(),2),o=l[0],c=l[1],f=s.type.toLowerCase();if(!e.aspectedPlanets.includes(o)||!e.aspectedPlanets.includes(c)||!e.options.aspectOrder.includes(f))return"continue";var d={startAngle:e.planets[o].chartAngle-e.offsetAngle,endAngle:e.planets[c].chartAngle-e.offsetAngle};if(t[f].some((function(e){return JSON.stringify(e)===JSON.stringify(d)})))return"continue";t[f].push(d)},u=0,h=Object.entries(l.aspects);u<h.length;u++)o();for(var f=function(){var t=i(m[d],2),n=t[0];t[1].forEach((function(t){var a=i(c.findGlobalPoint(e.elements.chart,e.elements.aspectEndBoundary,t.startAngle),2),s=a[0],r=a[1],l=i(c.findGlobalPoint(e.elements.chart,e.elements.aspectEndBoundary,t.endAngle),2),o=l[0],u=l[1];e.drawLine(s,r,o,u,"immanuel__aspect-line","aspect-line--".concat(n))}))},d=0,m=Object.entries(t);d<m.length;d++)f()}},{key:"drawLine",value:function(e,t,n,a){for(var s,r=document.createElementNS("http://www.w3.org/2000/svg","line"),i=arguments.length,l=new Array(i>4?i-4:0),o=4;o<i;o++)l[o-4]=arguments[o];(s=r.classList).add.apply(s,l),r.setAttributeNS(null,"x1",e),r.setAttributeNS(null,"y1",t),r.setAttributeNS(null,"x2",n),r.setAttributeNS(null,"y2",a),this.elements.chartSvg.appendChild(r),this.elements.chartLines.push(r)}}]),t}(),f=function(){function t(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e(this,t),this.elements=u.create(n),this.options=o.create(a)}return n(t,[{key:"setOptions",value:function(e){this.options=r(r({},this.options),e)}},{key:"displayChart",value:function(e){h.create(this.elements,this.options,e).display()}}]),t}();return window.Immanuel=f,f}));
