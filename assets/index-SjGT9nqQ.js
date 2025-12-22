import{r as ye,a as Re,g as Ee}from"./react-vendor-N--QU9DW.js";import{r as E,R as Ce,H as Se}from"./vendor-DMltqgzD.js";import{W as Pe,V as re,C as be,S as Te,O as je,a as _e,G as ke,P as Ae,M as Ie,E as ae,R as ie,b as se,c as me,U as O,d as Ne,T as Me,L as le}from"./three-vendor-9YJ67saE.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))x(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&x(f)}).observe(document,{childList:!0,subtree:!0});function l(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function x(a){if(a.ep)return;a.ep=!0;const i=l(a);fetch(a.href,i)}})();var G={exports:{}},z={};var ce;function Oe(){if(ce)return z;ce=1;var u=ye(),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,a=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function f(m,p,C){var g,S={},j=null,o=null;C!==void 0&&(j=""+C),p.key!==void 0&&(j=""+p.key),p.ref!==void 0&&(o=p.ref);for(g in p)x.call(p,g)&&!i.hasOwnProperty(g)&&(S[g]=p[g]);if(m&&m.defaultProps)for(g in p=m.defaultProps,p)S[g]===void 0&&(S[g]=p[g]);return{$$typeof:r,type:m,key:j,ref:o,props:S,_owner:a.current}}return z.Fragment=l,z.jsx=f,z.jsxs=f,z}var ue;function Le(){return ue||(ue=1,G.exports=Oe()),G.exports}var e=Le(),U={},fe;function qe(){if(fe)return U;fe=1;var u=Re();return U.createRoot=u.createRoot,U.hydrateRoot=u.hydrateRoot,U}var ze=qe();const Fe=Ee(ze);function De(){const[u,r]=E.useState(""),[l,x]=E.useState(!1),[a,i]=E.useState(""),[f,m]=E.useState([]),[p,C]=E.useState(0),g=E.useRef(null),S={help:()=>alert(`Available commands:
${Object.keys(S).join(`
`)}`),home:()=>window.location.hash="/",about:()=>window.location.hash="/about",projects:()=>window.location.hash="/projects",contact:()=>window.location.hash="/contact",github:()=>window.open("https://github.com/GollaBharath","_blank"),linkedin:()=>window.open("https://linkedin.com/in/golla-bharath","_blank"),resume:()=>window.open("https://drive.google.com/file/d/1Cf13Is6J9zJmrMjZV74bdV34bLx_amtu/view?usp=sharing","_blank"),clear:()=>r("")},j=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768;E.useEffect(()=>{!j()&&g.current&&g.current.focus()},[]),E.useEffect(()=>{if(u){const t=Object.keys(S).filter(d=>d.startsWith(u.toLowerCase()));t.length>0&&t[0]!==u.toLowerCase()?i(t[0]):i(""),t.length>0&&u.toLowerCase()!==t[0]?(m(t),C(0)):(m([]),C(0))}else i(""),m([]),C(0)},[u]);const o=t=>{if(t.key==="ArrowUp"&&f.length>0&&(t.preventDefault(),C(d=>{const y=d>0?d-1:f.length-1;return i(f[y]),y})),t.key==="ArrowDown"&&f.length>0&&(t.preventDefault(),C(d=>{const y=d<f.length-1?d+1:0;return i(f[y]),y})),t.key==="Tab"&&a&&(t.preventDefault(),r(a),i(""),m([])),t.key==="Enter"){t.preventDefault();const d=u.toLowerCase().trim();S[d]?(S[d](),r(""),i(""),m([])):u.trim()&&(x(!0),setTimeout(()=>{x(!1),r(""),i(""),m([])},500))}},h=t=>{l||r(t.target.value)};return e.jsxs("div",{className:"terminal-container",children:[f.length>0&&e.jsx("div",{className:"autocomplete-dropdown",children:f.map((t,d)=>e.jsxs("div",{className:`autocomplete-item ${d===p?"selected":""}`,children:[e.jsx("span",{className:"autocomplete-icon",children:d===p?"⌘":"›"}),e.jsx("span",{className:"autocomplete-text",children:t}),d===p&&e.jsx("span",{className:"autocomplete-hint",children:"Tab"})]},t))}),e.jsxs("div",{className:`terminal-input-wrapper ${l?"shake error":""}`,children:[e.jsx("span",{className:"terminal-prompt",children:"$"}),e.jsxs("div",{className:"input-container",children:[e.jsx("input",{ref:g,type:"text",className:"terminal-input",value:u,onChange:h,onKeyDown:o,spellCheck:"false",autoComplete:"off",placeholder:"Type help to see list of commands..."}),a&&e.jsxs("span",{className:"terminal-suggestion",children:[u,e.jsx("span",{className:"suggestion-text",children:a.slice(u.length)})]})]})]})]})}const Be=()=>{const r=document.createElement("canvas");r.width=64,r.height=64;const l=r.getContext("2d");if(!l)throw new Error("2D context not available");l.fillStyle="black",l.fillRect(0,0,r.width,r.height);const x=new Me(r);x.minFilter=le,x.magFilter=le,x.generateMipmaps=!1;const a=[];let i=null;const f=64;let m=.1*64;const p=1/f,C=()=>{l.fillStyle="black",l.fillRect(0,0,r.width,r.height)},g=o=>{const h={x:o.x*64,y:(1-o.y)*64};let t=1;const d=T=>Math.sin(T*Math.PI/2),y=T=>-T*(T-2);o.age<f*.3?t=d(o.age/(f*.3)):t=y(1-(o.age-f*.3)/(f*.7))||0,t*=o.force;const _=`${(o.vx+1)/2*255}, ${(o.vy+1)/2*255}, ${t*255}`,b=320;l.shadowOffsetX=b,l.shadowOffsetY=b,l.shadowBlur=m,l.shadowColor=`rgba(${_},${.22*t})`,l.beginPath(),l.fillStyle="rgba(255,0,0,1)",l.arc(h.x-b,h.y-b,m,0,Math.PI*2),l.fill()};return{canvas:r,texture:x,addTouch:o=>{let h=0,t=0,d=0;if(i){const y=o.x-i.x,_=o.y-i.y;if(y===0&&_===0)return;const b=y*y+_*_,T=Math.sqrt(b);t=y/(T||1),d=_/(T||1),h=Math.min(b*1e4,1)}i={x:o.x,y:o.y},a.push({x:o.x,y:o.y,age:0,force:h,vx:t,vy:d})},update:()=>{C();for(let o=a.length-1;o>=0;o--){const h=a[o],t=h.force*p*(1-h.age/f);h.x+=h.vx*t,h.y+=h.vy*t,h.age++,h.age>f&&a.splice(o,1)}for(let o=0;o<a.length;o++)g(a[o]);x.needsUpdate=!0},set radiusScale(o){m=.1*64*o},get radiusScale(){return m/(.1*64)},size:64}},Ue=(u,r)=>{const l=`
    uniform sampler2D uTexture;
    uniform float uStrength;
    uniform float uTime;
    uniform float uFreq;

    void mainUv(inout vec2 uv) {
      vec4 tex = texture2D(uTexture, uv);
      float vx = tex.r * 2.0 - 1.0;
      float vy = tex.g * 2.0 - 1.0;
      float intensity = tex.b;

      float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);

      float amt = uStrength * intensity * wave;

      uv += vec2(vx, vy) * amt;
    }
    `;return new me("LiquidEffect",l,{uniforms:new Map([["uTexture",new O(u)],["uStrength",new O(r?.strength??.025)],["uTime",new O(0)],["uFreq",new O(r?.freq??4.5)]])})},de={square:0,circle:1,triangle:2,diamond:3},$e=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,Ve=`
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;

uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

const int   MAX_CLICKS = 10;

uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES     5
#define FBM_LACUNARITY  1.25
#define FBM_GAIN        1.0

float hash11(float n){ return fract(sin(n)*43758.5453); }

float vnoise(vec3 p){
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  float y0  = mix(x00, x10, w.y);
  float y1  = mix(x01, x11, w.y);
  return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t){
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0;
  float freq = 1.0;
  float sum = 1.0;
  for (int i = 0; i < FBM_OCTAVES; ++i){
    sum  += amp * vnoise(p * freq);
    freq *= FBM_LACUNARITY;
    amp  *= FBM_GAIN;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov){
  float r = sqrt(cov) * .25;
  float d = length(p - 0.5) - r;
  float aa = 0.5 * fwidth(d);
  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov){
  bool flip = mod(id.x + id.y, 2.0) > 0.5;
  if (flip) p.x = 1.0 - p.x;
  float r = sqrt(cov);
  float d  = p.y - r*(1.0 - p.x);
  float aa = fwidth(d);
  return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov){
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main(){
  float pixelSize = uPixelSize;
  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fract(fragCoord / pixelSize);

  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  float base = fbm2(uv, uTime * 0.05);
  base = base * 0.5 - 0.65;

  float feed = base + (uDensity - 0.5) * 0.3;

  float speed     = uRippleSpeed;
  float thickness = uRippleThickness;
  const float dampT     = 1.0;
  const float dampR     = 10.0;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i){
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      float cellPixelSize = 8.0 * pixelSize;
      vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float waveR = speed * t;
      float ring  = exp(-pow((r - waveR) / thickness, 2.0));
      float atten = exp(-dampT * t) * exp(-dampR * r);
      feed = max(feed, ring * atten * uRippleIntensity);
    }
  }

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, feed + bayer);

  float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
  float coverage = bw * jitterScale;
  float M;
  if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle (pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond(pixelUV, coverage);
  else                                   M = coverage;

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    float fade = smoothstep(0.0, uEdgeFade, edge);
    M *= fade;
  }

  vec3 color = uColor;
  fragColor = vec4(color, M);
}
`,X=10,He=({variant:u="square",pixelSize:r=3,color:l="#B19EEF",className:x,style:a,antialias:i=!0,patternScale:f=2,patternDensity:m=1,liquid:p=!1,liquidStrength:C=.1,liquidRadius:g=1,pixelSizeJitter:S=0,enableRipples:j=!0,rippleIntensityScale:o=1,rippleThickness:h=.1,rippleSpeed:t=.3,liquidWobbleSpeed:d=4.5,autoPauseOffscreen:y=!0,speed:_=.5,transparent:b=!0,edgeFade:T=.5,noiseAmount:F=0})=>{const J=E.useRef(null),pe=E.useRef({visible:!0}),K=E.useRef(_),R=E.useRef(null),$=E.useRef(null);return E.useEffect(()=>{const A=J.current;if(!A)return;K.current=_;const he=["antialias","liquid","noiseAmount"],W={antialias:i,liquid:p,noiseAmount:F};let D=!1;if(!R.current)D=!0;else if($.current){for(const n of he)if($.current[n]!==W[n]){D=!0;break}}if(D){if(R.current){const c=R.current;c.resizeObserver?.disconnect(),cancelAnimationFrame(c.raf),c.quad?.geometry.dispose(),c.material.dispose(),c.composer?.dispose(),c.renderer.dispose(),c.renderer.domElement.parentElement===A&&A.removeChild(c.renderer.domElement),R.current=null}const n=document.createElement("canvas"),s=new Pe({canvas:n,antialias:i,alpha:!0,powerPreference:"high-performance"});s.domElement.style.width="100%",s.domElement.style.height="100%",s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),A.appendChild(s.domElement),b?s.setClearAlpha(0):s.setClearColor(0,1);const P={uResolution:{value:new re(0,0)},uTime:{value:0},uColor:{value:new be(l)},uClickPos:{value:Array.from({length:X},()=>new re(-1,-1))},uClickTimes:{value:new Float32Array(X)},uShapeType:{value:de[u]??0},uPixelSize:{value:r*s.getPixelRatio()},uScale:{value:f},uDensity:{value:m},uPixelJitter:{value:S},uEnableRipples:{value:j?1:0},uRippleSpeed:{value:t},uRippleThickness:{value:h},uRippleIntensity:{value:o},uEdgeFade:{value:T}},L=new Te,M=new je(-1,1,1,-1,0,1),Y=new _e({vertexShader:$e,fragmentShader:Ve,uniforms:P,transparent:!0,depthTest:!1,depthWrite:!1,glslVersion:ke}),ve=new Ae(2,2),Q=new Ie(ve,Y);L.add(Q);const Z=new Ne,ee=()=>{const c=A.clientWidth||1,v=A.clientHeight||1;s.setSize(c,v,!1),P.uResolution.value.set(s.domElement.width,s.domElement.height),R.current?.composer&&R.current.composer.setSize(s.domElement.width,s.domElement.height),P.uPixelSize.value=r*s.getPixelRatio()};ee();const te=new ResizeObserver(ee);te.observe(A);const oe=(()=>{if(typeof window<"u"&&window.crypto?.getRandomValues){const c=new Uint32Array(1);return window.crypto.getRandomValues(c),c[0]/4294967295}return Math.random()})()*1e3;let w,N,q;if(p){N=Be(),N.radiusScale=g,w=new ae(s);const c=new ie(L,M);q=Ue(N.texture,{strength:C,freq:d});const v=new se(M,q);v.renderToScreen=!0,w.addPass(c),w.addPass(v)}if(F>0){w||(w=new ae(s),w.addPass(new ie(L,M)));const c=new me("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new O(0)],["uAmount",new O(F)]])}),v=new se(M,c);v.renderToScreen=!0,w&&w.passes.length>0&&w.passes.forEach(I=>I.renderToScreen=!1),w.addPass(v)}w&&w.setSize(s.domElement.width,s.domElement.height);const ne=c=>{const v=s.domElement.getBoundingClientRect(),I=s.domElement.width/v.width,k=s.domElement.height/v.height,H=(c.clientX-v.left)*I,we=(v.height-(c.clientY-v.top))*k;return{fx:H,fy:we,w:s.domElement.width,h:s.domElement.height}},xe=c=>{const{fx:v,fy:I}=ne(c),k=R.current?.clickIx??0;P.uClickPos.value[k].set(v,I),P.uClickTimes.value[k]=P.uTime.value,R.current&&(R.current.clickIx=(k+1)%X)},ge=c=>{if(!N)return;const{fx:v,fy:I,w:k,h:H}=ne(c);N.addTouch({x:v/k,y:I/H})};s.domElement.addEventListener("pointerdown",xe,{passive:!0}),s.domElement.addEventListener("pointermove",ge,{passive:!0}),s.domElement.addEventListener("contextmenu",c=>{c.preventDefault()});let B=0;const V=()=>{if(y&&!pe.current.visible){B=requestAnimationFrame(V);return}P.uTime.value=oe+Z.getElapsedTime()*K.current,q&&(q.uniforms.get("uTime").value=P.uTime.value),w?(N&&N.update(),w.passes.forEach(c=>{const v=c.effects;v&&v.forEach(I=>{const k=I.uniforms?.get("uTime");k&&(k.value=P.uTime.value)})}),w.render()):s.render(L,M),B=requestAnimationFrame(V)};B=requestAnimationFrame(V),R.current={renderer:s,scene:L,camera:M,material:Y,clock:Z,clickIx:0,uniforms:P,resizeObserver:te,raf:B,quad:Q,timeOffset:oe,composer:w,touch:N,liquidEffect:q}}else{const n=R.current;if(n.uniforms.uShapeType.value=de[u]??0,n.uniforms.uPixelSize.value=r*n.renderer.getPixelRatio(),n.uniforms.uColor.value.set(l),n.uniforms.uScale.value=f,n.uniforms.uDensity.value=m,n.uniforms.uPixelJitter.value=S,n.uniforms.uEnableRipples.value=j?1:0,n.uniforms.uRippleIntensity.value=o,n.uniforms.uRippleThickness.value=h,n.uniforms.uRippleSpeed.value=t,n.uniforms.uEdgeFade.value=T,b?n.renderer.setClearAlpha(0):n.renderer.setClearColor(0,1),n.liquidEffect){const s=n.liquidEffect;s&&(s.value=C);const P=n.liquidEffect.uniforms.get("uFreq");P&&(P.value=d)}n.touch&&(n.touch.radiusScale=g)}return $.current=W,()=>{if(R.current&&D||!R.current)return;const n=R.current;n.resizeObserver?.disconnect(),cancelAnimationFrame(n.raf),n.quad?.geometry.dispose(),n.material.dispose(),n.composer?.dispose(),n.renderer.dispose(),n.renderer.domElement.parentElement===A&&A.removeChild(n.renderer.domElement),R.current=null}},[i,p,F,r,f,m,j,o,h,t,S,T,b,C,g,d,y,u,l,_]),e.jsx("div",{ref:J,className:`pixel-blast-container ${x??""}`,style:a,"aria-label":"PixelBlast interactive background"})};function Ge(){const[u,r]=E.useState(!1),l=["Home","About","Projects","Contact"];return e.jsx("nav",{className:"navbar",children:e.jsxs("div",{className:"nav-container",children:[e.jsx("button",{className:"nav-toggle",onClick:()=>r(!u),"aria-label":"Toggle navigation",children:e.jsx("span",{className:`hamburger ${u?"open":""}`})}),e.jsx("ul",{className:`nav-menu ${u?"active":""}`,children:l.map(x=>e.jsx("li",{className:"nav-item",children:e.jsx("a",{href:`#${x.toLowerCase()}`,className:"nav-link",onClick:()=>r(!1),children:x})},x))})]})})}const Xe="/assets/Profile-M1yDXiRX.jpg";function Je(){return e.jsx("section",{className:"hero",children:e.jsxs("div",{className:"hero-content",children:[e.jsx("div",{className:"profile-image",children:e.jsx("img",{src:Xe,alt:"Profile",className:"profile-img"})}),e.jsxs("h1",{className:"hero-title",children:["I'm ",e.jsx("span",{className:"name",children:"Bharath"}),", a guy who loves his laptop"]}),e.jsx("p",{className:"hero-subtitle",children:"Software Development Intern | Open Source Enthusiast | Community Manager"}),e.jsx("div",{className:"scroll-indicator",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})})})]})})}function Ke(){return e.jsxs("div",{className:"app-container",children:[e.jsx(He,{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:0},variant:"square",color:"#970505",pixelSize:2,patternScale:1.9,patternDensity:1.5,enableRipples:!0,rippleIntensityScale:2,rippleSpeed:4,edgeFade:.5,transparent:!1,liquid:!0}),e.jsxs("div",{className:"app-content",children:[e.jsx(Ge,{}),e.jsx(Je,{}),e.jsx(De,{})]})]})}Fe.createRoot(document.getElementById("root")).render(e.jsx(Ce.StrictMode,{children:e.jsx(Se,{children:e.jsx(Ke,{})})}));
