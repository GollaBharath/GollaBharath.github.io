import{r as we,a as be,g as Ee}from"./react-vendor-N--QU9DW.js";import{r as d,R as Se,H as je}from"./vendor-DMltqgzD.js";import{W as Re,V as ie,C as Ce,S as Ne,O as ke,a as Pe,G as Te,P as Ie,M as Me,E as ae,R as ce,b as le,c as he,U as q,d as Le,T as _e,L as ue}from"./three-vendor-9YJ67saE.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))b(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&b(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function b(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();var W={exports:{}},V={};var de;function Ae(){if(de)return V;de=1;var m=we(),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,n=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(f,w,p){var a,c={},S=null,s=null;p!==void 0&&(S=""+p),w.key!==void 0&&(S=""+w.key),w.ref!==void 0&&(s=w.ref);for(a in w)b.call(w,a)&&!i.hasOwnProperty(a)&&(c[a]=w[a]);if(f&&f.defaultProps)for(a in w=f.defaultProps,w)c[a]===void 0&&(c[a]=w[a]);return{$$typeof:o,type:f,key:S,ref:s,props:c,_owner:n.current}}return V.Fragment=r,V.jsx=l,V.jsxs=l,V}var me;function De(){return me||(me=1,W.exports=Ae()),W.exports}var e=De(),X={},fe;function Oe(){if(fe)return X;fe=1;var m=be();return X.createRoot=m.createRoot,X.hydrateRoot=m.hydrateRoot,X}var ze=Oe();const Be=Ee(ze);function qe(){const[m,o]=d.useState(""),[r,b]=d.useState(!1),[n,i]=d.useState(""),[l,f]=d.useState([]),[w,p]=d.useState(0),a=d.useRef(null),c={help:()=>{const t=document.getElementById("commands");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},about:()=>{const t=document.getElementById("about");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},home:()=>{const t=document.getElementById("home");t&&t.scrollIntoView({behavior:"smooth",block:"start"})},experience:()=>{const t=document.getElementById("experience");t&&t.scrollIntoView({behavior:"smooth",block:"start"})},projects:()=>alert("Projects section coming soon!"),contact:()=>alert("Contact section coming soon!"),reddit:()=>window.open("https://www.reddit.com/user/Dead-Indian/","_blank"),spotify:()=>window.open("https://open.spotify.com/user/31enxavrkyobb5lbp4phl33jgnwq","_blank"),discord:()=>window.open("https://discordapp.com/users/972801524092776479","_blank"),instagram:()=>window.open("https://www.instagram.com/gollabharath_/","_blank"),whatsapp:()=>window.open("https://wa.me/919059158791","_blank"),youtube:()=>window.open("https://www.youtube.com/channel/UCQn4-TWf2So7nvGOPesGoaQ","_blank"),github:()=>window.open("https://github.com/GollaBharath","_blank"),linkedin:()=>window.open("https://linkedin.com/in/golla-bharath","_blank"),resume:()=>window.open("https://drive.google.com/file/d/1Cf13Is6J9zJmrMjZV74bdV34bLx_amtu/view?usp=sharing","_blank"),clear:()=>o("")},S=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768;d.useEffect(()=>{!S()&&a.current&&a.current.focus()},[]),d.useEffect(()=>{const t=u=>{u.key==="/"&&document.activeElement!==a.current&&document.activeElement.tagName!=="INPUT"&&document.activeElement.tagName!=="TEXTAREA"&&(u.preventDefault(),a.current&&a.current.focus())};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[]),d.useEffect(()=>{if(m){const t=m.toLowerCase().replace(/^\/+/,""),u=Object.keys(c).filter(j=>j.startsWith(t));u.length>0&&u[0]!==t?i(u[0]):i(""),u.length>0&&t!==u[0]?(f(u),p(0)):(f([]),p(0))}else i(""),f([]),p(0)},[m]);const s=t=>{if(t.key==="ArrowUp"&&l.length>0&&(t.preventDefault(),p(u=>{const j=u>0?u-1:l.length-1;return i(l[j]),j})),t.key==="ArrowDown"&&l.length>0&&(t.preventDefault(),p(u=>{const j=u<l.length-1?u+1:0;return i(l[j]),j})),t.key==="Escape"){t.preventDefault(),i(""),f("");return}if(t.ctrlKey&&t.key==="c"){t.preventDefault(),o(""),i(""),f([]);return}if(t.key==="Tab"&&n&&(t.preventDefault(),o(n),i(""),f([])),t.key==="Enter"){t.preventDefault();const u=m.toLowerCase().trim().replace(/^\/+/,"");c[u]?(c[u](),o(""),i(""),f([])):m.trim()&&(b(!0),setTimeout(()=>{b(!1),o(""),i(""),f([])},500))}},v=t=>{r||o(t.target.value)},E=t=>{o(t),i(""),f([]),a.current&&a.current.focus()};return e.jsxs("div",{className:"terminal-container",children:[l.length>0&&e.jsx("div",{className:"autocomplete-dropdown",children:l.map((t,u)=>e.jsxs("div",{className:`autocomplete-item ${u===w?"selected":""}`,onClick:()=>E(t),onTouchEnd:j=>{j.preventDefault(),E(t)},children:[e.jsx("span",{className:"autocomplete-icon",children:u===w?"⌘":"›"}),e.jsx("span",{className:"autocomplete-text",children:t}),u===w&&e.jsx("span",{className:"autocomplete-hint",children:"Tab"})]},t))}),e.jsxs("div",{className:`terminal-input-wrapper ${r?"shake error":""}`,children:[e.jsx("span",{className:"terminal-prompt",children:"$"}),e.jsxs("div",{className:"input-container",children:[e.jsx("input",{ref:a,type:"text",className:"terminal-input",value:m,onChange:v,onKeyDown:s,spellCheck:"false",autoComplete:"off",placeholder:"Press / to use CLI..."}),n&&e.jsxs("span",{className:"terminal-suggestion",children:[m,e.jsx("span",{className:"suggestion-text",children:n.slice(m.replace(/^\/+/,"").length)})]})]})]})]})}const Fe=()=>{const o=document.createElement("canvas");o.width=64,o.height=64;const r=o.getContext("2d");if(!r)throw new Error("2D context not available");r.fillStyle="black",r.fillRect(0,0,o.width,o.height);const b=new _e(o);b.minFilter=ue,b.magFilter=ue,b.generateMipmaps=!1;const n=[];let i=null;const l=64;let f=.1*64;const w=1/l,p=()=>{r.fillStyle="black",r.fillRect(0,0,o.width,o.height)},a=s=>{const v={x:s.x*64,y:(1-s.y)*64};let E=1;const t=k=>Math.sin(k*Math.PI/2),u=k=>-k*(k-2);s.age<l*.3?E=t(s.age/(l*.3)):E=u(1-(s.age-l*.3)/(l*.7))||0,E*=s.force;const j=`${(s.vx+1)/2*255}, ${(s.vy+1)/2*255}, ${E*255}`,T=320;r.shadowOffsetX=T,r.shadowOffsetY=T,r.shadowBlur=f,r.shadowColor=`rgba(${j},${.22*E})`,r.beginPath(),r.fillStyle="rgba(255,0,0,1)",r.arc(v.x-T,v.y-T,f,0,Math.PI*2),r.fill()};return{canvas:o,texture:b,addTouch:s=>{let v=0,E=0,t=0;if(i){const u=s.x-i.x,j=s.y-i.y;if(u===0&&j===0)return;const T=u*u+j*j,k=Math.sqrt(T);E=u/(k||1),t=j/(k||1),v=Math.min(T*1e4,1)}i={x:s.x,y:s.y},n.push({x:s.x,y:s.y,age:0,force:v,vx:E,vy:t})},update:()=>{p();for(let s=n.length-1;s>=0;s--){const v=n[s],E=v.force*w*(1-v.age/l);v.x+=v.vx*E,v.y+=v.vy*E,v.age++,v.age>l&&n.splice(s,1)}for(let s=0;s<n.length;s++)a(n[s]);b.needsUpdate=!0},set radiusScale(s){f=.1*64*s},get radiusScale(){return f/(.1*64)},size:64}},$e=(m,o)=>{const r=`
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
    `;return new he("LiquidEffect",r,{uniforms:new Map([["uTexture",new q(m)],["uStrength",new q(o?.strength??.025)],["uTime",new q(0)],["uFreq",new q(o?.freq??4.5)]])})},pe={square:0,circle:1,triangle:2,diamond:3},Ve=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,He=`
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
`,J=10,Ue=({variant:m="square",pixelSize:o=3,color:r="#B19EEF",className:b,style:n,antialias:i=!0,patternScale:l=2,patternDensity:f=1,liquid:w=!1,liquidStrength:p=.1,liquidRadius:a=1,pixelSizeJitter:c=0,enableRipples:S=!0,rippleIntensityScale:s=1,rippleThickness:v=.1,rippleSpeed:E=.3,liquidWobbleSpeed:t=4.5,autoPauseOffscreen:u=!0,speed:j=.5,transparent:T=!0,edgeFade:k=.5,noiseAmount:h=0})=>{const R=d.useRef(null),I=d.useRef({visible:!0}),O=d.useRef(j),N=d.useRef(null),z=d.useRef(null);return d.useEffect(()=>{const L=R.current;if(!L)return;O.current=j;const G=["antialias","liquid","noiseAmount"],Q={antialias:i,liquid:w,noiseAmount:h};let H=!1;if(!N.current)H=!0;else if(z.current){for(const g of G)if(z.current[g]!==Q[g]){H=!0;break}}if(H){if(N.current){const y=N.current;y.resizeObserver?.disconnect(),cancelAnimationFrame(y.raf),y.quad?.geometry.dispose(),y.material.dispose(),y.composer?.dispose(),y.renderer.dispose(),y.renderer.domElement.parentElement===L&&L.removeChild(y.renderer.domElement),N.current=null}const g=document.createElement("canvas"),x=new Re({canvas:g,antialias:i,alpha:!0,powerPreference:"high-performance"});x.domElement.style.width="100%",x.domElement.style.height="100%",x.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),L.appendChild(x.domElement),T?x.setClearAlpha(0):x.setClearColor(0,1);const M={uResolution:{value:new ie(0,0)},uTime:{value:0},uColor:{value:new Ce(r)},uClickPos:{value:Array.from({length:J},()=>new ie(-1,-1))},uClickTimes:{value:new Float32Array(J)},uShapeType:{value:pe[m]??0},uPixelSize:{value:o*x.getPixelRatio()},uScale:{value:l},uDensity:{value:f},uPixelJitter:{value:c},uEnableRipples:{value:S?1:0},uRippleSpeed:{value:E},uRippleThickness:{value:v},uRippleIntensity:{value:s},uEdgeFade:{value:k}},F=new Ne,B=new ke(-1,1,1,-1,0,1),Z=new Pe({vertexShader:Ve,fragmentShader:He,uniforms:M,transparent:!0,depthTest:!1,depthWrite:!1,glslVersion:Te}),ve=new Ie(2,2),ee=new Me(ve,Z);F.add(ee);const te=new Le,ne=()=>{const y=L.clientWidth||1,C=L.clientHeight||1;x.setSize(y,C,!1),M.uResolution.value.set(x.domElement.width,x.domElement.height),N.current?.composer&&N.current.composer.setSize(x.domElement.width,x.domElement.height),M.uPixelSize.value=o*x.getPixelRatio()};ne();const oe=new ResizeObserver(ne);oe.observe(L);const se=(()=>{if(typeof window<"u"&&window.crypto?.getRandomValues){const y=new Uint32Array(1);return window.crypto.getRandomValues(y),y[0]/4294967295}return Math.random()})()*1e3;let P,D,$;if(w){D=Fe(),D.radiusScale=a,P=new ae(x);const y=new ce(F,B);$=$e(D.texture,{strength:p,freq:t});const C=new le(B,$);C.renderToScreen=!0,P.addPass(y),P.addPass(C)}if(h>0){P||(P=new ae(x),P.addPass(new ce(F,B)));const y=new he("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new q(0)],["uAmount",new q(h)]])}),C=new le(B,y);C.renderToScreen=!0,P&&P.passes.length>0&&P.passes.forEach(A=>A.renderToScreen=!1),P.addPass(C)}P&&P.setSize(x.domElement.width,x.domElement.height);const re=y=>{const C=x.domElement.getBoundingClientRect(),A=x.domElement.width/C.width,_=x.domElement.height/C.height,K=(y.clientX-C.left)*A,ye=(C.height-(y.clientY-C.top))*_;return{fx:K,fy:ye,w:x.domElement.width,h:x.domElement.height}},ge=y=>{const{fx:C,fy:A}=re(y),_=N.current?.clickIx??0;M.uClickPos.value[_].set(C,A),M.uClickTimes.value[_]=M.uTime.value,N.current&&(N.current.clickIx=(_+1)%J)},xe=y=>{if(!D)return;const{fx:C,fy:A,w:_,h:K}=re(y);D.addTouch({x:C/_,y:A/K})};x.domElement.addEventListener("pointerdown",ge,{passive:!0}),x.domElement.addEventListener("pointermove",xe,{passive:!0}),x.domElement.addEventListener("contextmenu",y=>{y.preventDefault()});let U=0;const Y=()=>{if(u&&!I.current.visible){U=requestAnimationFrame(Y);return}M.uTime.value=se+te.getElapsedTime()*O.current,$&&($.uniforms.get("uTime").value=M.uTime.value),P?(D&&D.update(),P.passes.forEach(y=>{const C=y.effects;C&&C.forEach(A=>{const _=A.uniforms?.get("uTime");_&&(_.value=M.uTime.value)})}),P.render()):x.render(F,B),U=requestAnimationFrame(Y)};U=requestAnimationFrame(Y),N.current={renderer:x,scene:F,camera:B,material:Z,clock:te,clickIx:0,uniforms:M,resizeObserver:oe,raf:U,quad:ee,timeOffset:se,composer:P,touch:D,liquidEffect:$}}else{const g=N.current;if(g.uniforms.uShapeType.value=pe[m]??0,g.uniforms.uPixelSize.value=o*g.renderer.getPixelRatio(),g.uniforms.uColor.value.set(r),g.uniforms.uScale.value=l,g.uniforms.uDensity.value=f,g.uniforms.uPixelJitter.value=c,g.uniforms.uEnableRipples.value=S?1:0,g.uniforms.uRippleIntensity.value=s,g.uniforms.uRippleThickness.value=v,g.uniforms.uRippleSpeed.value=E,g.uniforms.uEdgeFade.value=k,T?g.renderer.setClearAlpha(0):g.renderer.setClearColor(0,1),g.liquidEffect){const x=g.liquidEffect;x&&(x.value=p);const M=g.liquidEffect.uniforms.get("uFreq");M&&(M.value=t)}g.touch&&(g.touch.radiusScale=a)}return z.current=Q,()=>{if(N.current&&H||!N.current)return;const g=N.current;g.resizeObserver?.disconnect(),cancelAnimationFrame(g.raf),g.quad?.geometry.dispose(),g.material.dispose(),g.composer?.dispose(),g.renderer.dispose(),g.renderer.domElement.parentElement===L&&L.removeChild(g.renderer.domElement),N.current=null}},[i,w,h,o,l,f,S,s,v,E,c,k,T,p,a,t,u,m,r,j]),e.jsx("div",{ref:R,className:`pixel-blast-container ${b??""}`,style:n,"aria-label":"PixelBlast interactive background"})};function Xe(){const[m,o]=d.useState(!1),r=[{name:"Home",sectionId:"home"},{name:"About",sectionId:null},{name:"Projects",sectionId:null},{name:"Experience",sectionId:"experience"},{name:"Socials",sectionId:null},{name:"Help",sectionId:"commands"}],b=(n,i)=>{if(o(!1),n){const l=document.getElementById(n);l&&l.scrollIntoView({behavior:"smooth",block:"start"})}else alert(`${i} section coming soon!`)};return e.jsx("nav",{className:"navbar",children:e.jsxs("div",{className:"nav-container",children:[e.jsx("button",{className:"nav-toggle",onClick:()=>o(!m),"aria-label":"Toggle navigation",children:e.jsx("span",{className:`hamburger ${m?"open":""}`})}),e.jsx("ul",{className:`nav-menu ${m?"active":""}`,children:r.map(n=>e.jsx("li",{className:"nav-item",children:e.jsx("button",{className:"nav-link",onClick:()=>b(n.sectionId,n.name),children:n.name})},n.name))})]})})}const Ge="/assets/Profile-M1yDXiRX.jpg";function Ye(){return e.jsx("section",{className:"hero",children:e.jsxs("div",{className:"hero-content",children:[e.jsx("div",{className:"profile-image",children:e.jsx("img",{src:Ge,alt:"Profile",className:"profile-img"})}),e.jsxs("h1",{className:"hero-title",children:["I'm ",e.jsx("span",{className:"name",children:"Bharath"}),", a guy who loves his laptop"]}),e.jsx("p",{className:"hero-subtitle",children:"Software Development Intern | Open Source Enthusiast | Hardcore Linux User"}),e.jsx("div",{className:"scroll-indicator",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})})})]})})}function Ke(){const[m,o]=d.useState(0),[r,b]=d.useState(!1),[n,i]=d.useState(0),[l,f]=d.useState(0),[w,p]=d.useState(0),a=d.useRef(null),c=d.useRef(null),S=d.useRef(0),s=[{category:"Navigation",icon:"📍",color:"#ff5050",commands:[{name:"home",desc:"Scroll to the beginning.",action:"home"},{name:"experience",desc:"Scroll to experience section",action:"experience"},{name:"projects",desc:"Scroll to projects section",action:"projects"},{name:"socials",desc:"Scroll to socials section",action:"socials"},{name:"help",desc:"View this command reference",action:"help"},{name:"clear",desc:"Clear the terminal input",action:"clear"}]},{category:"Socials",icon:"🔗",color:"#ff6b6b",commands:[{name:"github",desc:"Check out my GitHub profile",action:"github"},{name:"linkedin",desc:"Visit my LinkedIn profile",action:"linkedin"},{name:"resume",desc:"View my resume online",action:"resume"},{name:"instagram",desc:"Follow me on Instagram",action:"instagram"},{name:"reddit",desc:"Check out my Reddit profile",action:"reddit"},{name:"spotify",desc:"Listen to my Spotify playlists",action:"spotify"},{name:"discord",desc:"Connect with me on Discord",action:"discord"},{name:"youtube",desc:"Subscribe to my YouTube channel",action:"youtube"}]},{category:"Keyboard Shortcuts",icon:"⌨️",color:"#ff9999",commands:[{name:"Tab",desc:"Autocomplete command",action:"autocomplete"},{name:"↑/↓",desc:"Navigate through suggestions",action:"navigate"},{name:"Enter",desc:"Execute the typed command",action:"execute"},{name:"Esc",desc:"Close suggestions dropdown",action:"dismiss"},{name:"Ctrl+C",desc:"Clear input immediately",action:"clear"}]}],v=s.length,E=h=>{o(h)},t=()=>{o(h=>(h+1)%v)},u=()=>{o(h=>(h-1+v)%v)},j=h=>{b(!0);const R=h.type.includes("mouse")?h.pageX:h.touches[0].pageX,I=h.type.includes("mouse")?h.pageY:h.touches[0].pageY;i(R),f(R),S.current=I},T=h=>{if(r&&h.type.includes("mouse")){const R=h.pageX;f(R);const I=R-n;p(I)}},k=()=>{if(!r)return;const h=l-n;Math.abs(h)>50&&(h>0?u():t()),b(!1),p(0),i(0),f(0)};return d.useEffect(()=>(r?document.body.style.userSelect="none":document.body.style.userSelect="",()=>{document.body.style.userSelect=""}),[r]),d.useEffect(()=>{const h=c.current;if(!h)return;const R=I=>{if(r){const O=I.touches[0].pageY,N=I.touches[0].pageX,z=Math.abs(N-n),L=Math.abs(O-S.current);if(z>L&&z>10){I.cancelable&&I.preventDefault(),f(N);const G=N-n;p(G)}}};return h.addEventListener("touchmove",R,{passive:!1}),()=>{h.removeEventListener("touchmove",R)}},[r,n]),e.jsx("section",{className:"command-carousel-section",children:e.jsxs("div",{className:"carousel-container",children:[e.jsxs("div",{className:"carousel-header",children:[e.jsxs("div",{className:"terminal-controls",children:[e.jsx("span",{className:"terminal-prompt",children:">"}),e.jsx("span",{className:"terminal-title",children:"Command Reference"})]}),e.jsxs("div",{className:"carousel-counter",children:[e.jsx("span",{className:"current-slide",children:m+1}),e.jsx("span",{className:"slide-separator",children:"/"}),e.jsx("span",{className:"total-slides",children:v})]})]}),e.jsx("div",{ref:c,className:"carousel-viewport",onMouseDown:j,onMouseMove:T,onMouseUp:k,onMouseLeave:k,onTouchStart:j,onTouchEnd:k,children:e.jsx("div",{ref:a,className:`carousel-track ${r?"dragging":""}`,style:{transform:`translateX(calc(-${m*100}% + ${w}px))`,transition:r?"none":"transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"},children:s.map((h,R)=>e.jsxs("div",{className:"carousel-slide",children:[e.jsxs("div",{className:"slide-header",children:[e.jsx("span",{className:"slide-icon",children:h.icon}),e.jsx("h3",{className:"slide-category",children:h.category})]}),e.jsx("div",{className:"commands-grid",children:h.commands.map((I,O)=>e.jsxs("div",{className:"command-item",style:{animationDelay:`${O*.1}s`},children:[e.jsxs("div",{className:"command-line",children:[e.jsx("span",{className:"cmd-prompt",children:"$"}),e.jsx("span",{className:"cmd-name",children:I.name})]}),e.jsxs("div",{className:"command-desc",children:[e.jsx("span",{className:"desc-arrow",children:">"}),e.jsx("span",{className:"desc-text",children:I.desc})]})]},O))})]},R))})}),e.jsxs("div",{className:"carousel-controls",children:[e.jsx("button",{onClick:u,className:"carousel-nav prev","aria-label":"Previous slide",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:e.jsx("polyline",{points:"15 18 9 12 15 6"})})}),e.jsx("div",{className:"carousel-dots",children:s.map((h,R)=>e.jsx("button",{onClick:()=>E(R),className:`carousel-dot ${R===m?"active":""}`,"aria-label":`Go to slide ${R+1}`,children:e.jsx("span",{className:"dot-inner"})},R))}),e.jsx("button",{onClick:t,className:"carousel-nav next","aria-label":"Next slide",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:e.jsx("polyline",{points:"9 18 15 12 9 6"})})})]}),e.jsx("div",{className:"carousel-footer",children:e.jsx("span",{className:"footer-text",children:"Try these commands in the terminal below ↓"})})]})})}function We(){const[m,o]=d.useState(new Set),[r,b]=d.useState({}),[n,i]=d.useState(0),l=d.useRef(null),f=d.useRef([]),w=[{title:"Software Development Intern",company:"Cyber Security based Startup",location:"Hyderabad, India",date:"Sep 2025 - Present",description:["Set up and maintained a secure, reliable Ubuntu server to host the platform.","Set up a local Gitea and implemented CI/CD pipelines to auto-deploy code.","Co-designed a lightweight container orchestration system for cybersecurity labs."],logo:"/src/assets/luh-new.jpg",icon:"💼"},{title:"Project Admin",company:"OSCI",location:"Remote",date:"July 2025 - Sep 2025",description:["Maintained a open source project Gamify, which had nearly 30 contributors.","Gamify is a platform to help communities engage and interact via gamification.","Collaborated with many contributors and reviewed PRs and finished the event as a successful Project Admin."],logo:"/src/assets/osci.jpg",icon:"🚀"}];return d.useEffect(()=>{const p=()=>{if(!f.current.length)return;const a=new Set,c={};let S=0;f.current.forEach((s,v)=>{if(!s)return;const E=s.getBoundingClientRect(),t=window.innerHeight,u=t*.7,j=E.top+E.height/2,T=Math.max(0,Math.min(1,(t-j)/(t*.5)));if(c[v]=T,E.top<u&&E.bottom>0?a.add(v):E.bottom<0&&(a.add(v),c[v]=1),a.has(v)){const k=s.querySelector(".timeline-icon");if(k){const h=k.getBoundingClientRect(),R=l.current?.getBoundingClientRect().top||0,I=h.top-R+h.height/2;S=Math.max(S,I)}}}),o(a),b(c),i(S)};return p(),window.addEventListener("scroll",p,{passive:!0}),window.addEventListener("resize",p,{passive:!0}),()=>{window.removeEventListener("scroll",p),window.removeEventListener("resize",p)}},[]),e.jsx("section",{className:"experience-section",id:"experience",children:e.jsxs("div",{className:"experience-container",children:[e.jsxs("div",{className:"experience-header",children:[e.jsxs("h2",{className:"experience-title",children:[e.jsx("span",{className:"title-prompt",children:">"})," Work Experience"]}),e.jsx("p",{className:"experience-subtitle",children:"My professional journey and career milestones"})]}),e.jsxs("div",{className:"timeline",ref:l,children:[e.jsx("div",{className:"timeline-line",style:{height:`${n}px`}}),w.map((p,a)=>{const c=a%2===0,S=r[a]||0;return e.jsxs("div",{ref:s=>f.current[a]=s,"data-progress":S,className:`timeline-item ${c?"left":"right"} ${m.has(a)?"visible":"hidden"}`,style:{"--progress":S},children:[e.jsx("div",{className:"timeline-content",children:e.jsxs("div",{className:"timeline-card",children:[e.jsx("h3",{className:"timeline-title",children:p.title}),e.jsxs("h4",{className:"timeline-company",children:[p.company," • ",p.location]}),e.jsx("ul",{className:"timeline-description",children:p.description.map((s,v)=>e.jsx("li",{children:s},v))})]})}),e.jsx("div",{className:"timeline-icon",children:e.jsx("img",{src:p.logo,alt:`${p.company} logo`,className:"timeline-logo"})}),e.jsx("div",{className:"timeline-date",children:p.date})]},a)})]})]})})}function Je(){const m=d.useRef(null),o=d.useRef(!1),r=d.useRef(!1),b=d.useRef(0);return d.useEffect(()=>{const n=()=>{o.current&&(o.current=!1,document.body.style.position="",document.body.style.top="",document.body.style.width="",document.documentElement.style.overflow="",document.body.style.overflow="",window.scrollTo(0,b.current))},i=()=>{o.current||r.current||(o.current=!0,r.current=!0,b.current=window.scrollY,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.top=`-${b.current}px`,document.body.style.width="100%")},l=()=>{if(!m.current)return;const c=m.current.getBoundingClientRect(),S=window.innerHeight;r.current&&!o.current&&(c.bottom<S*.6||c.top>S)&&(r.current=!1),!(o.current||r.current)&&c.top<S&&c.top>S*.6&&i()},f=()=>{o.current&&n()},w=c=>{o.current&&(c.cancelable&&c.preventDefault(),n())},p=c=>{o.current&&(c.cancelable&&c.preventDefault(),n())},a=c=>{o.current&&(c.key==="ArrowDown"||c.key==="ArrowUp"||c.key==="PageDown"||c.key==="PageUp"||c.key===" ")&&(c.preventDefault(),n())};return window.addEventListener("scroll",l,{passive:!0}),document.addEventListener("touchstart",f,{passive:!0}),document.addEventListener("touchmove",w,{passive:!1}),window.addEventListener("wheel",p,{passive:!1}),window.addEventListener("keydown",a),l(),()=>{window.removeEventListener("scroll",l),document.removeEventListener("touchstart",f),document.removeEventListener("touchmove",w),window.removeEventListener("wheel",p),window.removeEventListener("keydown",a),document.body.style.position="",document.body.style.top="",document.body.style.width="",document.documentElement.style.overflow="",document.body.style.overflow=""}},[]),e.jsx("div",{ref:m,className:"scroll-pause-marker"})}function Qe(){return e.jsxs("div",{className:"app-container",children:[e.jsx(Ue,{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:0},variant:"square",color:"#970505",pixelSize:2,patternScale:1.9,patternDensity:1.5,enableRipples:!0,rippleIntensityScale:2,rippleSpeed:4,edgeFade:.5,transparent:!1,liquid:!0}),e.jsxs("div",{className:"app-content",children:[e.jsx(Xe,{}),e.jsx("section",{id:"home",children:e.jsx(Ye,{})}),e.jsx("section",{id:"experience",children:e.jsx(We,{})}),e.jsx(Je,{}),e.jsx("section",{id:"commands",children:e.jsx(Ke,{})}),e.jsx(qe,{})]})]})}Be.createRoot(document.getElementById("root")).render(e.jsx(Se.StrictMode,{children:e.jsx(je,{children:e.jsx(Qe,{})})}));
