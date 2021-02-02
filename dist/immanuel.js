!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Immanuel=t()}(this,(function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,s=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,s=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw s}}return n}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function u(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=o(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,s=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw s}}}}var h=function(){function t(){e(this,t)}return n(t,null,[{key:"create",value:function(e){return s(s({},this.defaults),e)}}]),t}();a(h,"defaults",{maxOrb:{sun:15,moon:12,mercury:7,venus:7,mars:8,jupiter:9,saturn:9,uranus:5,neptune:5,pluto:5,chiron:5},rotateChart:"horizon",rotateSigns:!0,rotateHouseNumbers:!1,rotateAngleText:!1,angleFormat:"%D&deg;%M'",planetAngleAttribute:null,lineOrder:["houses","angleMarkers","anglePointers","aspects"],aspectOrder:["trine","sextile","semisextile","square","semisquare","sesquisquare","opposite","quintile","semiquintile","sesquiquintile","biquintile","quincunx"]});var f=function(){function t(n){if(e(this,t),this.chart=document.querySelector(n),!this.chart)return!1;this.chartSvgContainer=this.chart.querySelector("[data-immanuel-lines]"),this.chartBackground=this.chart.querySelector("[data-immanuel-background]"),this.signTrack=this.chart.querySelector('[data-immanuel-track="signs"]'),this.signs=this.chart.querySelectorAll("[data-immanuel-sign]"),this.aspectEndBoundary=this.chart.querySelector('[data-immanuel-boundary="aspect-end"]'),this.placeholders={primary:this.chart.querySelectorAll("[data-immanuel-placeholder]"),secondary:this.chart.querySelectorAll("[data-immanuel-secondary-placeholder]"),transits:this.chart.querySelectorAll("[data-immanuel-transit-placeholder]")},this.angleTracks={primary:this.chart.querySelector('[data-immanuel-track="angles"]'),secondary:this.chart.querySelector('[data-immanuel-track="secondary-angles"]'),transits:this.chart.querySelector('[data-immanuel-track="transit-angles"]')},this.angleTextTracks={primary:this.chart.querySelector('[data-immanuel-track="angle-text"]'),secondary:this.chart.querySelector('[data-immanuel-track="secondary-angle-text"]'),transits:this.chart.querySelector('[data-immanuel-track="transit-angle-text"]')},this.planetTracks={primary:this.chart.querySelector('[data-immanuel-track="planets"]'),secondary:this.chart.querySelector('[data-immanuel-track="secondary-planets"]'),transits:this.chart.querySelector('[data-immanuel-track="transit-planets"]')},this.houseNumberTracks={primary:this.chart.querySelector('[data-immanuel-track="house-numbers"]'),secondary:this.chart.querySelector('[data-immanuel-track="secondary-house-numbers"]'),transits:this.chart.querySelector('[data-immanuel-track="transit-house-numbers"]')},this.houseStartBoundaries={primary:this.chart.querySelector('[data-immanuel-boundary="house-start"]'),secondary:this.chart.querySelector('[data-immanuel-boundary="secondary-house-start"]'),transits:this.chart.querySelector('[data-immanuel-boundary="transit-house-start"]')},this.houseEndBoundaries={primary:this.chart.querySelector('[data-immanuel-boundary="house-end"]'),secondary:this.chart.querySelector('[data-immanuel-boundary="secondary-house-end"]'),transits:this.chart.querySelector('[data-immanuel-boundary="transit-house-end"]')},this.angleMarkersStartBoundaries={primary:this.chart.querySelector('[data-immanuel-boundary="angle-markers-start"]'),secondary:this.chart.querySelector('[data-immanuel-boundary="secondary-angle-markers-start"]'),transits:this.chart.querySelector('[data-immanuel-boundary="transit-angle-markers-start"]')},this.angleMarkersEndBoundaries={primary:this.chart.querySelector('[data-immanuel-boundary="angle-markers-end"]'),secondary:this.chart.querySelector('[data-immanuel-boundary="secondary-angle-markers-end"]'),transits:this.chart.querySelector('[data-immanuel-boundary="transit-angle-markers-end"]')},this.angles={primary:this.angleTracks.primary.querySelectorAll("[data-immanuel-angle]"),secondary:this.angleTracks.secondary?this.angleTracks.secondary.querySelectorAll("[data-immanuel-angle]"):null,transits:this.angleTracks.transits?this.angleTracks.transits.querySelectorAll("[data-immanuel-angle]"):null},this.planets={primary:this.planetTracks.primary.querySelectorAll("[data-immanuel-planet]"),secondary:this.planetTracks.secondary?this.planetTracks.secondary.querySelectorAll("[data-immanuel-planet]"):null,transits:this.planetTracks.transits?this.planetTracks.transits.querySelectorAll("[data-immanuel-planet]"):null},this.chartLines=[],this.houseNumbers={},this.angleText={},this.createHouseNumberElements(),this.createAngleTextElements(),this.createSvgElement()}return n(t,null,[{key:"create",value:function(e){return this.instance||(this.instance=new this(e))}}]),n(t,[{key:"createSvgElement",value:function(){this.chartSvg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.chartSvg.setAttributeNS(null,"width","100%"),this.chartSvg.setAttributeNS(null,"height","100%"),Object.assign(this.chartSvg.style,{position:"absolute",top:0,left:0,width:"100%",height:"100%"}),this.chartSvgContainer?this.chartSvgContainer.appendChild(this.chartSvg):this.chart.appendChild(this.chartSvg)}},{key:"createHouseNumberElements",value:function(){for(var e=0,t=Object.entries(this.houseNumberTracks);e<t.length;e++){var n=i(t[e],2),a=n[0];if(n[1]){this.houseNumbers[a]=[];for(var r=1;r<=12;++r){var s=document.createElement("span");s.textContent=r,s.style.position="absolute",s.classList.add("immanuel__".concat(a,"-house-number"),"house-number--".concat(r)),this.houseNumbers[a][r]=s,this.houseNumberTracks[a].appendChild(s)}}}}},{key:"createAngleTextElements",value:function(){for(var e=this,t=function(){var t=i(a[n],2),r=t[0],s=t[1];s&&(e.angleText[r]={},e.planets[r].forEach((function(t){var n=t.getAttribute("data-immanuel-planet"),a=n.replace(" ","-"),i=document.createElement("div");i.classList.add("immanuel__".concat(r,"-angle-text"),"angle-text--".concat(a)),i.style.position="absolute",e.angleText[r][n]=i,s.appendChild(i)})))},n=0,a=Object.entries(this.angleTextTracks);n<a.length;n++)t()}}]),t}();a(f,"instance",null);var d=function(){function t(){e(this,t)}return n(t,null,[{key:"findRelativePoint",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=e.offsetWidth+n,r=a/2,s=t*(Math.PI/180)*-1,i=r+r*Math.cos(s),l=r+r*Math.sin(s);return[i,l]}},{key:"findGlobalPoint",value:function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=this.findRelativePoint(t,n,a),s=i(r,2),l=s[0],o=s[1],c=t.offsetWidth+a,u=l+(e.offsetWidth-c)/2,h=o+(e.offsetHeight-c)/2;return[u,h]}},{key:"formatAngleString",value:function(e,t){var n={"%D":e.degrees,"%M":e.minutes,"%S":e.seconds};return t.replace(/%D|%M|%S/g,(function(e){return n[e]}))}}]),t}(),m=function(){function t(n,a,r){e(this,t),this.elements=n,this.options=a,this.chartData=r.primary?r:{primary:r},this.chartTypes=Object.keys(this.chartData),this.offsetAngle=0,this.planets={},this.aspectedPlanets={},this.init()}return n(t,null,[{key:"create",value:function(e,t,n){return new this(e,t,n)}}]),n(t,[{key:"init",value:function(){var e,t=this,n=u(this.chartTypes);try{var a=function(){var n=e.value;t.planets[n]={},t.aspectedPlanets[n]=[],t.elements.planets[n].forEach((function(e){var a=e.getAttribute("data-immanuel-planet");if(a in t.chartData.primary.points)var r=t.chartData[n].points[a];else if(a in t.chartData.primary.planets)r=t.chartData[n].planets[a];t.planets[n][a]=r,e.hasAttribute("data-immanuel-no-aspects")||t.aspectedPlanets[n].push(a)}))};for(n.s();!(e=n.n()).done;)a()}catch(e){n.e(e)}finally{n.f()}window.addEventListener("resize",(function(){document.querySelectorAll("[data-immanuel-hide]").length||t.setupChart()}))}},{key:"display",value:function(){var e=this;"complete"===document.readyState?(this.setOffsetAngle(),this.rotateChart(),this.setPlaceholderData(),this.setupChart(),document.querySelectorAll("[data-immanuel-hide]").forEach((function(e){e.removeAttribute("data-immanuel-hide")}))):window.addEventListener("load",(function(){e.display()}))}},{key:"setOffsetAngle",value:function(){"asc"===this.options.rotateChart?this.offsetAngle=-1*(180-this.chartData.primary.angles.asc.chartAngle):"horizon"===this.options.rotateChart?this.offsetAngle=-1*(180-this.chartData.primary.houses[1].chartAngle):this.offsetAngle=0}},{key:"rotateChart",value:function(){this.elements.chartBackground.style.transform=0!==this.offsetAngle?"rotate(".concat(this.offsetAngle,"deg)"):"none"}},{key:"setPlaceholderData",value:function(){var e,t=this,n=u(this.chartTypes);try{var a=function(){var n=e.value;t.elements.placeholders[n]&&t.elements.placeholders[n].forEach((function(e){var a=e.getAttributeNames().find((function(e){return/-placeholder$/.test(e)})),r=e.getAttribute(a);switch(r){case"asc":case"desc":case"mc":case"ic":e.innerHTML=d.formatAngleString(t.chartData[n].angles[r].formattedSignAngle,t.options.angleFormat)}}))};for(n.s();!(e=n.n()).done;)a()}catch(e){n.e(e)}finally{n.f()}}},{key:"setupChart",value:function(){this.elements.signTrack&&this.elements.signs&&this.setSigns(),this.setAngles(),this.setPlanets(),this.removeLines(),this.drawLines()}},{key:"removeLines",value:function(){this.elements.chartLines.forEach((function(e){e.remove()}))}},{key:"drawLines",value:function(){var e=this;this.options.lineOrder.reverse().forEach((function(t){switch(t){case"angleMarkers":e.setPlanetAngleMarkers();break;case"anglePointers":e.setPlanetAnglePointers("primary");break;case"houses":e.setHouses(),e.setHouseNumbers();break;case"aspects":e.setAspects()}}))}},{key:"setAngles",value:function(){var e,t=this,n=u(this.chartTypes);try{var a=function(){var n=e.value;t.elements.angles[n]&&t.elements.angles[n].forEach((function(e){var a=e.getAttribute("data-immanuel-angle"),r=t.chartData[n].angles[a].chartAngle-t.offsetAngle,s=i(d.findRelativePoint(t.elements.angleTracks[n],r),2),l=s[0],o=s[1];l=Math.round(l-e.offsetWidth/2),o=Math.round(o-e.offsetHeight/2),Object.assign(e.style,{position:"absolute",left:l+"px",top:o+"px"})}))};for(n.s();!(e=n.n()).done;)a()}catch(e){n.e(e)}finally{n.f()}}},{key:"setSigns",value:function(){var e=this,t=15-this.offsetAngle;this.elements.signs.forEach((function(n){var a=i(d.findRelativePoint(e.elements.signTrack,t),2),r=a[0],s=a[1];if(r=Math.round(r-n.offsetWidth/2),s=Math.round(s-n.offsetHeight/2),Object.assign(n.style,{position:"absolute",left:r+"px",top:s+"px"}),e.options.rotateSigns){var l=-1*t+90;n.style.transform="rotate(".concat(l,"deg)")}t+=30}))}},{key:"setPlanets",value:function(){this.resetPlanetAngles();var e,t=u(this.chartTypes);try{for(t.s();!(e=t.n()).done;){var n=e.value;this.resolvePlanetCollisions(n)}}catch(e){t.e(e)}finally{t.f()}this.positionPlanets(),this.setPlanetAngleText()}},{key:"resetPlanetAngles",value:function(){var e,t=u(this.chartTypes);try{for(t.s();!(e=t.n()).done;){var n=e.value;Object.values(this.planets[n]).forEach((function(e){e.displayAngle=e.chartAngle}))}}catch(e){t.e(e)}finally{t.f()}}},{key:"resolvePlanetCollisions",value:function(e){var t=this,n=[];this.elements.planets[e].forEach((function(a){var r=a.getAttribute("data-immanuel-planet"),s=t.planets[e][r];t.elements.planets[e].forEach((function(i){var l=i.getAttribute("data-immanuel-planet");if(r!==l){var o=t.planets[e][l],c=Math.max(a.offsetWidth,a.offsetHeight)/2,u=Math.max(i.offsetWidth,i.offsetHeight)/2,h=t.elements.planetTracks[e].offsetWidth,f=Math.abs(s.displayAngle-o.displayAngle);Math.abs(Math.sin(f*(Math.PI/360))*h)<c+u&&(n.forEach((function(e){if(e.includes(s)||e.includes(o))return e.includes(s)||e.push(s),void(e.includes(o)||e.push(o))})),n.push([s,o]))}}))})),n.length>0&&(n.forEach((function(e){e.sort((function(e,t){return Math.abs(e.displayAngle-t.displayAngle)>270?t.displayAngle-e.displayAngle:e.displayAngle-t.displayAngle})),e[0].displayAngle-=.1,e[e.length-1].displayAngle+=.1})),this.resolvePlanetCollisions(e))}},{key:"positionPlanets",value:function(){var e,t=this,n=u(this.chartTypes);try{var a=function(){var n=e.value;t.elements.planets[n].forEach((function(e){var a=e.getAttribute("data-immanuel-planet"),r=t.planets[n][a],s=r.displayAngle-t.offsetAngle,o=r.movement.toLowerCase(),c=l(e.classList),u=c.find((function(e){return/planet-movement--/.test(e)})),h=c.find((function(e){return/planet-sign--/.test(e)}));e.classList.remove(u,h),e.classList.add("immanuel__planet-movement","planet-movement--".concat(o)),e.classList.add("immanuel__planet-sign","planet-sign--".concat(r.sign.toLowerCase())),t.options.planetAngleAttribute&&e.setAttribute(t.options.planetAngleAttribute,d.formatAngleString(r.formattedSignAngle,t.options.angleFormat));var f=i(d.findRelativePoint(t.elements.planetTracks[n],s),2),m=f[0],y=f[1];m=Math.round(m-e.offsetWidth/2),y=Math.round(y-e.offsetHeight/2),Object.assign(e.style,{position:"absolute",left:m+"px",top:y+"px"})}))};for(n.s();!(e=n.n()).done;)a()}catch(e){n.e(e)}finally{n.f()}}},{key:"setPlanetAngleText",value:function(){var e,t=u(this.chartTypes);try{for(t.s();!(e=t.n()).done;){var n=e.value;if(this.elements.angleTextTracks[n])for(var a=0,r=Object.entries(this.planets[n]);a<r.length;a++){var s=i(r[a],2),l=s[0],o=s[1],c=o.displayAngle-this.offsetAngle,h=this.elements.angleText[n][l];if(h.style.transform="none",h.innerHTML=d.formatAngleString(o.formattedSignAngle,this.options.angleFormat),this.options.rotateAngleText){var f=h.offsetWidth/2,m=h.offsetHeight/2,y=-1*c;c>90&&c<270&&(y+=180),h.style.transform="rotate(".concat(y,"deg)")}else{var p=i(d.findRelativePoint(this.elements.chart,c),2),g=p[0],v=p[1];f=h.offsetWidth*(g/this.elements.chart.offsetWidth),m=h.offsetHeight*(v/this.elements.chart.offsetHeight)}var b=i(d.findRelativePoint(this.elements.angleTextTracks[n],c),2),A=b[0],k=b[1];A=Math.round(A-f),k=Math.round(k-m),Object.assign(h.style,{left:A+"px",top:k+"px"})}}}catch(e){t.e(e)}finally{t.f()}}},{key:"setPlanetAngleMarkers",value:function(){var e,t=u(this.chartTypes);try{for(t.s();!(e=t.n()).done;){var n=e.value;if(this.elements.angleMarkersStartBoundaries[n]&&this.elements.angleMarkersEndBoundaries[n])for(var a=0,r=Object.entries(this.planets[n]);a<r.length;a++){var s=i(r[a],2),l=s[0],o=s[1].chartAngle-this.offsetAngle,c=l.replace(" ","-"),h=i(d.findGlobalPoint(this.elements.chart,this.elements.angleMarkersEndBoundaries[n],o),2),f=h[0],m=h[1],y=i(d.findGlobalPoint(this.elements.chart,this.elements.angleMarkersStartBoundaries[n],o),2),p=y[0],g=y[1];this.drawLine(f,m,p,g,"immanuel__".concat(n,"-angle-marker"),"angle-marker--".concat(c))}}}catch(e){t.e(e)}finally{t.f()}}},{key:"setPlanetAnglePointers",value:function(){var e,t=this,n=u(this.chartTypes);try{var a=function(){var n=e.value;t.elements.angleMarkersStartBoundaries[n]&&t.elements.angleMarkersEndBoundaries[n]&&t.elements.planets[n].forEach((function(e){var a=e.getAttribute("data-immanuel-planet"),r=t.planets[n][a],s=r.chartAngle-t.offsetAngle,l=(Math.abs(r.displayAngle-r.chartAngle)<1?r.chartAngle:r.displayAngle)-t.offsetAngle,o=Math.max(e.offsetWidth,e.offsetHeight),c=a.replace(" ","-"),u=t.elements.angleMarkersEndBoundaries[n].offsetWidth-t.elements.angleMarkersStartBoundaries[n].offsetWidth>0?1:-1,h=i(d.findGlobalPoint(t.elements.chart,t.elements.angleMarkersStartBoundaries[n],s),2),f=h[0],m=h[1],y=i(d.findGlobalPoint(t.elements.chart,t.elements.planetTracks[n],l,(o+10)*u),2),p=y[0],g=y[1],v=i(d.findGlobalPoint(t.elements.chart,t.elements.planetTracks[n],l,o*u),2),b=v[0],A=v[1];t.drawLine(f,m,p,g,"immanuel__".concat(n,"-angle-pointer"),"angle-pointer--".concat(c)),t.drawLine(p,g,b,A,"immanuel__".concat(n,"-angle-pointer"),"angle-pointer--".concat(c))}))};for(n.s();!(e=n.n()).done;)a()}catch(e){n.e(e)}finally{n.f()}}},{key:"setHouses",value:function(){var e,t=u(this.chartTypes);try{for(t.s();!(e=t.n()).done;){var n=e.value;if(this.elements.houseStartBoundaries[n]&&this.elements.houseEndBoundaries[n])for(var a=0,r=Object.entries(this.chartData[n].houses);a<r.length;a++){var s=i(r[a],2),l=s[0],o=s[1].chartAngle-this.offsetAngle,c=i(d.findGlobalPoint(this.elements.chart,this.elements.houseEndBoundaries[n],o),2),h=c[0],f=c[1],m=i(d.findGlobalPoint(this.elements.chart,this.elements.houseStartBoundaries[n],o),2),y=m[0],p=m[1];this.drawLine(h,f,y,p,"immanuel__".concat(n,"-house-line"),"house-line--".concat(l))}}}catch(e){t.e(e)}finally{t.f()}}},{key:"setHouseNumbers",value:function(){var e,t=u(this.chartTypes);try{for(t.s();!(e=t.n()).done;){var n=e.value;if(this.elements.houseNumbers[n])for(var a=0,r=Object.entries(this.chartData[n].houses);a<r.length;a++){var s=i(r[a],2),l=s[0],o=s[1].chartAngle-this.offsetAngle,c=12==l?1:parseInt(l)+1,h=this.chartData[n].houses[c].chartAngle,f=o+((h<o?h+360:h)-o-this.offsetAngle)/2,m=this.elements.houseNumbers[n][l],y=i(d.findRelativePoint(this.elements.houseNumberTracks[n],f),2),p=y[0],g=y[1];if(p=Math.round(p-m.offsetWidth/2),g=Math.round(g-m.offsetHeight/2),Object.assign(m.style,{left:p+"px",top:g+"px"}),this.options.rotateHouseNumbers){var v=-1*f+90;m.style.transform="rotate(".concat(v,"deg)")}}}}catch(e){t.e(e)}finally{t.f()}}},{key:"setAspects",value:function(){var e=this,t={};this.options.aspectOrder.reverse().forEach((function(e){return t[e]=[]}));for(var n=0,a=Object.entries(this.planets.primary);n<a.length;n++)for(var r=i(a[n],2),s=r[0],l=r[1],o=function(){var n=i(u[c],2),a=n[0],r=n[1];if(h=e.options.maxOrb instanceof Object&&e.options.maxOrb[a]&&"number"==typeof e.options.maxOrb[a]?e.options.maxOrb[a]:"number"==typeof e.options.maxOrb?e.options.maxOrb:5,r.orb>h)return"continue";var l=r.type.toLowerCase();if(!e.aspectedPlanets.primary.includes(s)||!e.aspectedPlanets[e.chartData.primary.aspectsTo].includes(a)||!e.options.aspectOrder.includes(l))return"continue";var o=[e.planets.primary[s].chartAngle-e.offsetAngle,e.planets[e.chartData.primary.aspectsTo][a].chartAngle-e.offsetAngle].sort();if(t[l].some((function(e){return JSON.stringify(e)===JSON.stringify(o)})))return"continue";t[l].push(o)},c=0,u=Object.entries(l.aspects);c<u.length;c++){var h;o()}for(var f=function(){var t=i(y[m],2),n=t[0];t[1].forEach((function(t){var a=i(t,2),r=a[0],s=a[1],l=i(d.findGlobalPoint(e.elements.chart,e.elements.aspectEndBoundary,r),2),o=l[0],c=l[1],u=i(d.findGlobalPoint(e.elements.chart,e.elements.aspectEndBoundary,s),2),h=u[0],f=u[1];e.drawLine(o,c,h,f,"immanuel__aspect-line","aspect-line--".concat(n))}))},m=0,y=Object.entries(t);m<y.length;m++)f()}},{key:"drawLine",value:function(e,t,n,a){for(var r,s=document.createElementNS("http://www.w3.org/2000/svg","line"),i=arguments.length,l=new Array(i>4?i-4:0),o=4;o<i;o++)l[o-4]=arguments[o];(r=s.classList).add.apply(r,l),s.setAttributeNS(null,"x1",e),s.setAttributeNS(null,"y1",t),s.setAttributeNS(null,"x2",n),s.setAttributeNS(null,"y2",a),this.elements.chartSvg.appendChild(s),this.elements.chartLines.push(s)}}]),t}(),y=function(){function t(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e(this,t),this.elements=f.create(n),this.options=h.create(a)}return n(t,[{key:"setOptions",value:function(e){this.options=s(s({},this.options),e)}},{key:"displayChart",value:function(e){m.create(this.elements,this.options,e).display()}}]),t}();return window.Immanuel=y,y}));
//# sourceMappingURL=immanuel.js.map
