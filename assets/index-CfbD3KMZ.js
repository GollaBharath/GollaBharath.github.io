import{r as ye,a as Re,g as Ee}from"./react-vendor-N--QU9DW.js";import{r as C,R as Ce,H as Se}from"./vendor-DMltqgzD.js";import{W as Pe,V as re,C as Te,S as be,O as je,a as ke,G as _e,P as Ae,M as Ie,E as ae,R as ie,b as se,c as me,U as O,d as Ne,T as Me,L as le}from"./three-vendor-9YJ67saE.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))g(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&g(f)}).observe(document,{childList:!0,subtree:!0});function l(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function g(i){if(i.ep)return;i.ep=!0;const a=l(i);fetch(i.href,a)}})();var G={exports:{}},z={};var ce;function Oe(){if(ce)return z;ce=1;var u=ye(),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,i=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function f(m,h,S){var p,P={},k=null,t=null;S!==void 0&&(k=""+S),h.key!==void 0&&(k=""+h.key),h.ref!==void 0&&(t=h.ref);for(p in h)g.call(h,p)&&!a.hasOwnProperty(p)&&(P[p]=h[p]);if(m&&m.defaultProps)for(p in h=m.defaultProps,h)P[p]===void 0&&(P[p]=h[p]);return{$$typeof:o,type:m,key:k,ref:t,props:P,_owner:i.current}}return z.Fragment=l,z.jsx=f,z.jsxs=f,z}var ue;function Le(){return ue||(ue=1,G.exports=Oe()),G.exports}var e=Le(),U={},fe;function qe(){if(fe)return U;fe=1;var u=Re();return U.createRoot=u.createRoot,U.hydrateRoot=u.hydrateRoot,U}var ze=qe();const Fe=Ee(ze);function De(){const[u,o]=C.useState(""),[l,g]=C.useState(!1),[i,a]=C.useState(""),[f,m]=C.useState([]),[h,S]=C.useState(0),p=C.useRef(null),P={help:()=>alert(`Available commands:
${Object.keys(P).join(`
`)}`),home:()=>window.location.hash="/",about:()=>window.location.hash="/about",projects:()=>window.location.hash="/projects",contact:()=>window.location.hash="/contact",github:()=>window.open("https://github.com/GollaBharath","_blank"),linkedin:()=>window.open("https://linkedin.com/in/golla-bharath","_blank"),resume:()=>window.open("https://drive.google.com/file/d/1Cf13Is6J9zJmrMjZV74bdV34bLx_amtu/view?usp=sharing","_blank"),clear:()=>o("")},k=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768;C.useEffect(()=>{!k()&&p.current&&p.current.focus()},[]),C.useEffect(()=>{if(u){const n=Object.keys(P).filter(d=>d.startsWith(u.toLowerCase()));n.length>0&&n[0]!==u.toLowerCase()?a(n[0]):a(""),n.length>0&&u.toLowerCase()!==n[0]?(m(n),S(0)):(m([]),S(0))}else a(""),m([]),S(0)},[u]);const t=n=>{if(n.key==="ArrowUp"&&f.length>0&&(n.preventDefault(),S(d=>{const y=d>0?d-1:f.length-1;return a(f[y]),y})),n.key==="ArrowDown"&&f.length>0&&(n.preventDefault(),S(d=>{const y=d<f.length-1?d+1:0;return a(f[y]),y})),n.key==="Tab"&&i&&(n.preventDefault(),o(i),a(""),m([])),n.key==="Enter"){n.preventDefault();const d=u.toLowerCase().trim();P[d]?(P[d](),o(""),a(""),m([])):u.trim()&&(g(!0),setTimeout(()=>{g(!1),o(""),a(""),m([])},500))}},v=n=>{l||o(n.target.value)},w=n=>{o(n),a(""),m([]),p.current&&p.current.focus()};return e.jsxs("div",{className:"terminal-container",children:[f.length>0&&e.jsx("div",{className:"autocomplete-dropdown",children:f.map((n,d)=>e.jsxs("div",{className:`autocomplete-item ${d===h?"selected":""}`,onClick:()=>w(n),onTouchEnd:y=>{y.preventDefault(),w(n)},children:[e.jsx("span",{className:"autocomplete-icon",children:d===h?"⌘":"›"}),e.jsx("span",{className:"autocomplete-text",children:n}),d===h&&e.jsx("span",{className:"autocomplete-hint",children:"Tab"})]},n))}),e.jsxs("div",{className:`terminal-input-wrapper ${l?"shake error":""}`,children:[e.jsx("span",{className:"terminal-prompt",children:"$"}),e.jsxs("div",{className:"input-container",children:[e.jsx("input",{ref:p,type:"text",className:"terminal-input",value:u,onChange:v,onKeyDown:t,spellCheck:"false",autoComplete:"off",placeholder:"Type help to see list of commands..."}),i&&e.jsxs("span",{className:"terminal-suggestion",children:[u,e.jsx("span",{className:"suggestion-text",children:i.slice(u.length)})]})]})]})]})}const Be=()=>{const o=document.createElement("canvas");o.width=64,o.height=64;const l=o.getContext("2d");if(!l)throw new Error("2D context not available");l.fillStyle="black",l.fillRect(0,0,o.width,o.height);const g=new Me(o);g.minFilter=le,g.magFilter=le,g.generateMipmaps=!1;const i=[];let a=null;const f=64;let m=.1*64;const h=1/f,S=()=>{l.fillStyle="black",l.fillRect(0,0,o.width,o.height)},p=t=>{const v={x:t.x*64,y:(1-t.y)*64};let w=1;const n=j=>Math.sin(j*Math.PI/2),d=j=>-j*(j-2);t.age<f*.3?w=n(t.age/(f*.3)):w=d(1-(t.age-f*.3)/(f*.7))||0,w*=t.force;const y=`${(t.vx+1)/2*255}, ${(t.vy+1)/2*255}, ${w*255}`,b=320;l.shadowOffsetX=b,l.shadowOffsetY=b,l.shadowBlur=m,l.shadowColor=`rgba(${y},${.22*w})`,l.beginPath(),l.fillStyle="rgba(255,0,0,1)",l.arc(v.x-b,v.y-b,m,0,Math.PI*2),l.fill()};return{canvas:o,texture:g,addTouch:t=>{let v=0,w=0,n=0;if(a){const d=t.x-a.x,y=t.y-a.y;if(d===0&&y===0)return;const b=d*d+y*y,j=Math.sqrt(b);w=d/(j||1),n=y/(j||1),v=Math.min(b*1e4,1)}a={x:t.x,y:t.y},i.push({x:t.x,y:t.y,age:0,force:v,vx:w,vy:n})},update:()=>{S();for(let t=i.length-1;t>=0;t--){const v=i[t],w=v.force*h*(1-v.age/f);v.x+=v.vx*w,v.y+=v.vy*w,v.age++,v.age>f&&i.splice(t,1)}for(let t=0;t<i.length;t++)p(i[t]);g.needsUpdate=!0},set radiusScale(t){m=.1*64*t},get radiusScale(){return m/(.1*64)},size:64}},Ue=(u,o)=>{const l=`
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
    `;return new me("LiquidEffect",l,{uniforms:new Map([["uTexture",new O(u)],["uStrength",new O(o?.strength??.025)],["uTime",new O(0)],["uFreq",new O(o?.freq??4.5)]])})},de={square:0,circle:1,triangle:2,diamond:3},$e=`
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
`,X=10,He=({variant:u="square",pixelSize:o=3,color:l="#B19EEF",className:g,style:i,antialias:a=!0,patternScale:f=2,patternDensity:m=1,liquid:h=!1,liquidStrength:S=.1,liquidRadius:p=1,pixelSizeJitter:P=0,enableRipples:k=!0,rippleIntensityScale:t=1,rippleThickness:v=.1,rippleSpeed:w=.3,liquidWobbleSpeed:n=4.5,autoPauseOffscreen:d=!0,speed:y=.5,transparent:b=!0,edgeFade:j=.5,noiseAmount:F=0})=>{const J=C.useRef(null),pe=C.useRef({visible:!0}),K=C.useRef(y),E=C.useRef(null),$=C.useRef(null);return C.useEffect(()=>{const A=J.current;if(!A)return;K.current=y;const he=["antialias","liquid","noiseAmount"],W={antialias:a,liquid:h,noiseAmount:F};let D=!1;if(!E.current)D=!0;else if($.current){for(const r of he)if($.current[r]!==W[r]){D=!0;break}}if(D){if(E.current){const c=E.current;c.resizeObserver?.disconnect(),cancelAnimationFrame(c.raf),c.quad?.geometry.dispose(),c.material.dispose(),c.composer?.dispose(),c.renderer.dispose(),c.renderer.domElement.parentElement===A&&A.removeChild(c.renderer.domElement),E.current=null}const r=document.createElement("canvas"),s=new Pe({canvas:r,antialias:a,alpha:!0,powerPreference:"high-performance"});s.domElement.style.width="100%",s.domElement.style.height="100%",s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),A.appendChild(s.domElement),b?s.setClearAlpha(0):s.setClearColor(0,1);const T={uResolution:{value:new re(0,0)},uTime:{value:0},uColor:{value:new Te(l)},uClickPos:{value:Array.from({length:X},()=>new re(-1,-1))},uClickTimes:{value:new Float32Array(X)},uShapeType:{value:de[u]??0},uPixelSize:{value:o*s.getPixelRatio()},uScale:{value:f},uDensity:{value:m},uPixelJitter:{value:P},uEnableRipples:{value:k?1:0},uRippleSpeed:{value:w},uRippleThickness:{value:v},uRippleIntensity:{value:t},uEdgeFade:{value:j}},L=new be,M=new je(-1,1,1,-1,0,1),Y=new ke({vertexShader:$e,fragmentShader:Ve,uniforms:T,transparent:!0,depthTest:!1,depthWrite:!1,glslVersion:_e}),ve=new Ae(2,2),Q=new Ie(ve,Y);L.add(Q);const Z=new Ne,ee=()=>{const c=A.clientWidth||1,x=A.clientHeight||1;s.setSize(c,x,!1),T.uResolution.value.set(s.domElement.width,s.domElement.height),E.current?.composer&&E.current.composer.setSize(s.domElement.width,s.domElement.height),T.uPixelSize.value=o*s.getPixelRatio()};ee();const te=new ResizeObserver(ee);te.observe(A);const oe=(()=>{if(typeof window<"u"&&window.crypto?.getRandomValues){const c=new Uint32Array(1);return window.crypto.getRandomValues(c),c[0]/4294967295}return Math.random()})()*1e3;let R,N,q;if(h){N=Be(),N.radiusScale=p,R=new ae(s);const c=new ie(L,M);q=Ue(N.texture,{strength:S,freq:n});const x=new se(M,q);x.renderToScreen=!0,R.addPass(c),R.addPass(x)}if(F>0){R||(R=new ae(s),R.addPass(new ie(L,M)));const c=new me("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new O(0)],["uAmount",new O(F)]])}),x=new se(M,c);x.renderToScreen=!0,R&&R.passes.length>0&&R.passes.forEach(I=>I.renderToScreen=!1),R.addPass(x)}R&&R.setSize(s.domElement.width,s.domElement.height);const ne=c=>{const x=s.domElement.getBoundingClientRect(),I=s.domElement.width/x.width,_=s.domElement.height/x.height,H=(c.clientX-x.left)*I,we=(x.height-(c.clientY-x.top))*_;return{fx:H,fy:we,w:s.domElement.width,h:s.domElement.height}},xe=c=>{const{fx:x,fy:I}=ne(c),_=E.current?.clickIx??0;T.uClickPos.value[_].set(x,I),T.uClickTimes.value[_]=T.uTime.value,E.current&&(E.current.clickIx=(_+1)%X)},ge=c=>{if(!N)return;const{fx:x,fy:I,w:_,h:H}=ne(c);N.addTouch({x:x/_,y:I/H})};s.domElement.addEventListener("pointerdown",xe,{passive:!0}),s.domElement.addEventListener("pointermove",ge,{passive:!0}),s.domElement.addEventListener("contextmenu",c=>{c.preventDefault()});let B=0;const V=()=>{if(d&&!pe.current.visible){B=requestAnimationFrame(V);return}T.uTime.value=oe+Z.getElapsedTime()*K.current,q&&(q.uniforms.get("uTime").value=T.uTime.value),R?(N&&N.update(),R.passes.forEach(c=>{const x=c.effects;x&&x.forEach(I=>{const _=I.uniforms?.get("uTime");_&&(_.value=T.uTime.value)})}),R.render()):s.render(L,M),B=requestAnimationFrame(V)};B=requestAnimationFrame(V),E.current={renderer:s,scene:L,camera:M,material:Y,clock:Z,clickIx:0,uniforms:T,resizeObserver:te,raf:B,quad:Q,timeOffset:oe,composer:R,touch:N,liquidEffect:q}}else{const r=E.current;if(r.uniforms.uShapeType.value=de[u]??0,r.uniforms.uPixelSize.value=o*r.renderer.getPixelRatio(),r.uniforms.uColor.value.set(l),r.uniforms.uScale.value=f,r.uniforms.uDensity.value=m,r.uniforms.uPixelJitter.value=P,r.uniforms.uEnableRipples.value=k?1:0,r.uniforms.uRippleIntensity.value=t,r.uniforms.uRippleThickness.value=v,r.uniforms.uRippleSpeed.value=w,r.uniforms.uEdgeFade.value=j,b?r.renderer.setClearAlpha(0):r.renderer.setClearColor(0,1),r.liquidEffect){const s=r.liquidEffect;s&&(s.value=S);const T=r.liquidEffect.uniforms.get("uFreq");T&&(T.value=n)}r.touch&&(r.touch.radiusScale=p)}return $.current=W,()=>{if(E.current&&D||!E.current)return;const r=E.current;r.resizeObserver?.disconnect(),cancelAnimationFrame(r.raf),r.quad?.geometry.dispose(),r.material.dispose(),r.composer?.dispose(),r.renderer.dispose(),r.renderer.domElement.parentElement===A&&A.removeChild(r.renderer.domElement),E.current=null}},[a,h,F,o,f,m,k,t,v,w,P,j,b,S,p,n,d,u,l,y]),e.jsx("div",{ref:J,className:`pixel-blast-container ${g??""}`,style:i,"aria-label":"PixelBlast interactive background"})};function Ge(){const[u,o]=C.useState(!1),l=["Home","About","Projects","Contact"];return e.jsx("nav",{className:"navbar",children:e.jsxs("div",{className:"nav-container",children:[e.jsx("button",{className:"nav-toggle",onClick:()=>o(!u),"aria-label":"Toggle navigation",children:e.jsx("span",{className:`hamburger ${u?"open":""}`})}),e.jsx("ul",{className:`nav-menu ${u?"active":""}`,children:l.map(g=>e.jsx("li",{className:"nav-item",children:e.jsx("a",{href:`#${g.toLowerCase()}`,className:"nav-link",onClick:()=>o(!1),children:g})},g))})]})})}const Xe="/assets/Profile-M1yDXiRX.jpg";function Je(){return e.jsx("section",{className:"hero",children:e.jsxs("div",{className:"hero-content",children:[e.jsx("div",{className:"profile-image",children:e.jsx("img",{src:Xe,alt:"Profile",className:"profile-img"})}),e.jsxs("h1",{className:"hero-title",children:["I'm ",e.jsx("span",{className:"name",children:"Bharath"}),", a guy who loves his laptop"]}),e.jsx("p",{className:"hero-subtitle",children:"Software Development Intern | Open Source Enthusiast | Community Manager"}),e.jsx("div",{className:"scroll-indicator",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})})})]})})}function Ke(){return e.jsxs("div",{className:"app-container",children:[e.jsx(He,{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:0},variant:"square",color:"#970505",pixelSize:2,patternScale:1.9,patternDensity:1.5,enableRipples:!0,rippleIntensityScale:2,rippleSpeed:4,edgeFade:.5,transparent:!1,liquid:!0}),e.jsxs("div",{className:"app-content",children:[e.jsx(Ge,{}),e.jsx(Je,{}),e.jsx(De,{})]})]})}Fe.createRoot(document.getElementById("root")).render(e.jsx(Ce.StrictMode,{children:e.jsx(Se,{children:e.jsx(Ke,{})})}));
