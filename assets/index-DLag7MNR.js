import{r as we,a as Se,g as Ce}from"./react-vendor-N--QU9DW.js";import{r as h,R as Ee,H as be}from"./vendor-DMltqgzD.js";import{W as Re,V as ae,C as je,S as Ne,O as ke,a as Pe,G as Te,P as Ie,M as _e,E as re,R as ie,b as le,c as pe,U as z,d as Me,T as Ae,L as ce}from"./three-vendor-9YJ67saE.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))y(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&y(r)}).observe(document,{childList:!0,subtree:!0});function c(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function y(t){if(t.ep)return;t.ep=!0;const s=c(t);fetch(t.href,s)}})();var J={exports:{}},V={};var ue;function De(){if(ue)return V;ue=1;var l=we(),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,t=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function r(p,w,R){var g,j={},I=null,a=null;R!==void 0&&(I=""+R),w.key!==void 0&&(I=""+w.key),w.ref!==void 0&&(a=w.ref);for(g in w)y.call(w,g)&&!s.hasOwnProperty(g)&&(j[g]=w[g]);if(p&&p.defaultProps)for(g in w=p.defaultProps,w)j[g]===void 0&&(j[g]=w[g]);return{$$typeof:o,type:p,key:I,ref:a,props:j,_owner:t.current}}return V.Fragment=c,V.jsx=r,V.jsxs=r,V}var de;function Le(){return de||(de=1,J.exports=De()),J.exports}var e=Le(),G={},me;function Oe(){if(me)return G;me=1;var l=Se();return G.createRoot=l.createRoot,G.hydrateRoot=l.hydrateRoot,G}var qe=Oe();const ze=Ce(qe);function Fe(){const[l,o]=h.useState(""),[c,y]=h.useState(!1),[t,s]=h.useState(""),[r,p]=h.useState([]),[w,R]=h.useState(0),g=h.useRef(null),j={help:()=>{const n=document.getElementById("commands");n&&n.scrollIntoView({behavior:"smooth",block:"center"})},home:()=>{const n=document.getElementById("home");n&&n.scrollIntoView({behavior:"smooth",block:"start"})},experience:()=>alert("Experience section coming soon!"),projects:()=>alert("Projects section coming soon!"),contact:()=>alert("Contact section coming soon!"),reddit:()=>window.open("https://www.reddit.com/user/Dead-Indian/","_blank"),spotify:()=>window.open("https://open.spotify.com/user/31enxavrkyobb5lbp4phl33jgnwq","_blank"),discord:()=>window.open("https://discordapp.com/users/972801524092776479","_blank"),instagram:()=>window.open("https://www.instagram.com/gollabharath_/","_blank"),whatsapp:()=>window.open("https://wa.me/919059158791","_blank"),youtube:()=>window.open("https://www.youtube.com/channel/UCQn4-TWf2So7nvGOPesGoaQ","_blank"),github:()=>window.open("https://github.com/GollaBharath","_blank"),linkedin:()=>window.open("https://linkedin.com/in/golla-bharath","_blank"),resume:()=>window.open("https://drive.google.com/file/d/1Cf13Is6J9zJmrMjZV74bdV34bLx_amtu/view?usp=sharing","_blank"),clear:()=>o("")},I=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768;h.useEffect(()=>{!I()&&g.current&&g.current.focus()},[]),h.useEffect(()=>{if(l){const n=Object.keys(j).filter(f=>f.startsWith(l.toLowerCase()));n.length>0&&n[0]!==l.toLowerCase()?s(n[0]):s(""),n.length>0&&l.toLowerCase()!==n[0]?(p(n),R(0)):(p([]),R(0))}else s(""),p([]),R(0)},[l]);const a=n=>{if(n.key==="ArrowUp"&&r.length>0&&(n.preventDefault(),R(f=>{const S=f>0?f-1:r.length-1;return s(r[S]),S})),n.key==="ArrowDown"&&r.length>0&&(n.preventDefault(),R(f=>{const S=f<r.length-1?f+1:0;return s(r[S]),S})),n.key==="Escape"){n.preventDefault(),s(""),p("");return}if(n.ctrlKey&&n.key==="c"){n.preventDefault(),o(""),s(""),p([]);return}if(n.key==="Tab"&&t&&(n.preventDefault(),o(t),s(""),p([])),n.key==="Enter"){n.preventDefault();const f=l.toLowerCase().trim();j[f]?(j[f](),o(""),s(""),p([])):l.trim()&&(y(!0),setTimeout(()=>{y(!1),o(""),s(""),p([])},500))}},x=n=>{c||o(n.target.value)},v=n=>{o(n),s(""),p([]),g.current&&g.current.focus()};return e.jsxs("div",{className:"terminal-container",children:[r.length>0&&e.jsx("div",{className:"autocomplete-dropdown",children:r.map((n,f)=>e.jsxs("div",{className:`autocomplete-item ${f===w?"selected":""}`,onClick:()=>v(n),onTouchEnd:S=>{S.preventDefault(),v(n)},children:[e.jsx("span",{className:"autocomplete-icon",children:f===w?"⌘":"›"}),e.jsx("span",{className:"autocomplete-text",children:n}),f===w&&e.jsx("span",{className:"autocomplete-hint",children:"Tab"})]},n))}),e.jsxs("div",{className:`terminal-input-wrapper ${c?"shake error":""}`,children:[e.jsx("span",{className:"terminal-prompt",children:"$"}),e.jsxs("div",{className:"input-container",children:[e.jsx("input",{ref:g,type:"text",className:"terminal-input",value:l,onChange:x,onKeyDown:a,spellCheck:"false",autoComplete:"off",placeholder:"Type help to see list of commands..."}),t&&e.jsxs("span",{className:"terminal-suggestion",children:[l,e.jsx("span",{className:"suggestion-text",children:t.slice(l.length)})]})]})]})]})}const Be=()=>{const o=document.createElement("canvas");o.width=64,o.height=64;const c=o.getContext("2d");if(!c)throw new Error("2D context not available");c.fillStyle="black",c.fillRect(0,0,o.width,o.height);const y=new Ae(o);y.minFilter=ce,y.magFilter=ce,y.generateMipmaps=!1;const t=[];let s=null;const r=64;let p=.1*64;const w=1/r,R=()=>{c.fillStyle="black",c.fillRect(0,0,o.width,o.height)},g=a=>{const x={x:a.x*64,y:(1-a.y)*64};let v=1;const n=P=>Math.sin(P*Math.PI/2),f=P=>-P*(P-2);a.age<r*.3?v=n(a.age/(r*.3)):v=f(1-(a.age-r*.3)/(r*.7))||0,v*=a.force;const S=`${(a.vx+1)/2*255}, ${(a.vy+1)/2*255}, ${v*255}`,k=320;c.shadowOffsetX=k,c.shadowOffsetY=k,c.shadowBlur=p,c.shadowColor=`rgba(${S},${.22*v})`,c.beginPath(),c.fillStyle="rgba(255,0,0,1)",c.arc(x.x-k,x.y-k,p,0,Math.PI*2),c.fill()};return{canvas:o,texture:y,addTouch:a=>{let x=0,v=0,n=0;if(s){const f=a.x-s.x,S=a.y-s.y;if(f===0&&S===0)return;const k=f*f+S*S,P=Math.sqrt(k);v=f/(P||1),n=S/(P||1),x=Math.min(k*1e4,1)}s={x:a.x,y:a.y},t.push({x:a.x,y:a.y,age:0,force:x,vx:v,vy:n})},update:()=>{R();for(let a=t.length-1;a>=0;a--){const x=t[a],v=x.force*w*(1-x.age/r);x.x+=x.vx*v,x.y+=x.vy*v,x.age++,x.age>r&&t.splice(a,1)}for(let a=0;a<t.length;a++)g(t[a]);y.needsUpdate=!0},set radiusScale(a){p=.1*64*a},get radiusScale(){return p/(.1*64)},size:64}},$e=(l,o)=>{const c=`
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
    `;return new pe("LiquidEffect",c,{uniforms:new Map([["uTexture",new z(l)],["uStrength",new z(o?.strength??.025)],["uTime",new z(0)],["uFreq",new z(o?.freq??4.5)]])})},fe={square:0,circle:1,triangle:2,diamond:3},Ve=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,Xe=`
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
`,W=10,Ue=({variant:l="square",pixelSize:o=3,color:c="#B19EEF",className:y,style:t,antialias:s=!0,patternScale:r=2,patternDensity:p=1,liquid:w=!1,liquidStrength:R=.1,liquidRadius:g=1,pixelSizeJitter:j=0,enableRipples:I=!0,rippleIntensityScale:a=1,rippleThickness:x=.1,rippleSpeed:v=.3,liquidWobbleSpeed:n=4.5,autoPauseOffscreen:f=!0,speed:S=.5,transparent:k=!0,edgeFade:P=.5,noiseAmount:L=0})=>{const d=h.useRef(null),E=h.useRef({visible:!0}),_=h.useRef(S),C=h.useRef(null),F=h.useRef(null);return h.useEffect(()=>{const A=d.current;if(!A)return;_.current=S;const he=["antialias","liquid","noiseAmount"],Y={antialias:s,liquid:w,noiseAmount:L};let X=!1;if(!C.current)X=!0;else if(F.current){for(const i of he)if(F.current[i]!==Y[i]){X=!0;break}}if(X){if(C.current){const m=C.current;m.resizeObserver?.disconnect(),cancelAnimationFrame(m.raf),m.quad?.geometry.dispose(),m.material.dispose(),m.composer?.dispose(),m.renderer.dispose(),m.renderer.domElement.parentElement===A&&A.removeChild(m.renderer.domElement),C.current=null}const i=document.createElement("canvas"),u=new Re({canvas:i,antialias:s,alpha:!0,powerPreference:"high-performance"});u.domElement.style.width="100%",u.domElement.style.height="100%",u.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),A.appendChild(u.domElement),k?u.setClearAlpha(0):u.setClearColor(0,1);const T={uResolution:{value:new ae(0,0)},uTime:{value:0},uColor:{value:new je(c)},uClickPos:{value:Array.from({length:W},()=>new ae(-1,-1))},uClickTimes:{value:new Float32Array(W)},uShapeType:{value:fe[l]??0},uPixelSize:{value:o*u.getPixelRatio()},uScale:{value:r},uDensity:{value:p},uPixelJitter:{value:j},uEnableRipples:{value:I?1:0},uRippleSpeed:{value:v},uRippleThickness:{value:x},uRippleIntensity:{value:a},uEdgeFade:{value:P}},B=new Ne,q=new ke(-1,1,1,-1,0,1),Q=new Pe({vertexShader:Ve,fragmentShader:Xe,uniforms:T,transparent:!0,depthTest:!1,depthWrite:!1,glslVersion:Te}),ve=new Ie(2,2),Z=new _e(ve,Q);B.add(Z);const ee=new Me,te=()=>{const m=A.clientWidth||1,b=A.clientHeight||1;u.setSize(m,b,!1),T.uResolution.value.set(u.domElement.width,u.domElement.height),C.current?.composer&&C.current.composer.setSize(u.domElement.width,u.domElement.height),T.uPixelSize.value=o*u.getPixelRatio()};te();const ne=new ResizeObserver(te);ne.observe(A);const oe=(()=>{if(typeof window<"u"&&window.crypto?.getRandomValues){const m=new Uint32Array(1);return window.crypto.getRandomValues(m),m[0]/4294967295}return Math.random()})()*1e3;let N,O,$;if(w){O=Be(),O.radiusScale=g,N=new re(u);const m=new ie(B,q);$=$e(O.texture,{strength:R,freq:n});const b=new le(q,$);b.renderToScreen=!0,N.addPass(m),N.addPass(b)}if(L>0){N||(N=new re(u),N.addPass(new ie(B,q)));const m=new pe("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new z(0)],["uAmount",new z(L)]])}),b=new le(q,m);b.renderToScreen=!0,N&&N.passes.length>0&&N.passes.forEach(D=>D.renderToScreen=!1),N.addPass(b)}N&&N.setSize(u.domElement.width,u.domElement.height);const se=m=>{const b=u.domElement.getBoundingClientRect(),D=u.domElement.width/b.width,M=u.domElement.height/b.height,K=(m.clientX-b.left)*D,ye=(b.height-(m.clientY-b.top))*M;return{fx:K,fy:ye,w:u.domElement.width,h:u.domElement.height}},xe=m=>{const{fx:b,fy:D}=se(m),M=C.current?.clickIx??0;T.uClickPos.value[M].set(b,D),T.uClickTimes.value[M]=T.uTime.value,C.current&&(C.current.clickIx=(M+1)%W)},ge=m=>{if(!O)return;const{fx:b,fy:D,w:M,h:K}=se(m);O.addTouch({x:b/M,y:D/K})};u.domElement.addEventListener("pointerdown",xe,{passive:!0}),u.domElement.addEventListener("pointermove",ge,{passive:!0}),u.domElement.addEventListener("contextmenu",m=>{m.preventDefault()});let U=0;const H=()=>{if(f&&!E.current.visible){U=requestAnimationFrame(H);return}T.uTime.value=oe+ee.getElapsedTime()*_.current,$&&($.uniforms.get("uTime").value=T.uTime.value),N?(O&&O.update(),N.passes.forEach(m=>{const b=m.effects;b&&b.forEach(D=>{const M=D.uniforms?.get("uTime");M&&(M.value=T.uTime.value)})}),N.render()):u.render(B,q),U=requestAnimationFrame(H)};U=requestAnimationFrame(H),C.current={renderer:u,scene:B,camera:q,material:Q,clock:ee,clickIx:0,uniforms:T,resizeObserver:ne,raf:U,quad:Z,timeOffset:oe,composer:N,touch:O,liquidEffect:$}}else{const i=C.current;if(i.uniforms.uShapeType.value=fe[l]??0,i.uniforms.uPixelSize.value=o*i.renderer.getPixelRatio(),i.uniforms.uColor.value.set(c),i.uniforms.uScale.value=r,i.uniforms.uDensity.value=p,i.uniforms.uPixelJitter.value=j,i.uniforms.uEnableRipples.value=I?1:0,i.uniforms.uRippleIntensity.value=a,i.uniforms.uRippleThickness.value=x,i.uniforms.uRippleSpeed.value=v,i.uniforms.uEdgeFade.value=P,k?i.renderer.setClearAlpha(0):i.renderer.setClearColor(0,1),i.liquidEffect){const u=i.liquidEffect;u&&(u.value=R);const T=i.liquidEffect.uniforms.get("uFreq");T&&(T.value=n)}i.touch&&(i.touch.radiusScale=g)}return F.current=Y,()=>{if(C.current&&X||!C.current)return;const i=C.current;i.resizeObserver?.disconnect(),cancelAnimationFrame(i.raf),i.quad?.geometry.dispose(),i.material.dispose(),i.composer?.dispose(),i.renderer.dispose(),i.renderer.domElement.parentElement===A&&A.removeChild(i.renderer.domElement),C.current=null}},[s,w,L,o,r,p,I,a,x,v,j,P,k,R,g,n,f,l,c,S]),e.jsx("div",{ref:d,className:`pixel-blast-container ${y??""}`,style:t,"aria-label":"PixelBlast interactive background"})};function Ge(){const[l,o]=h.useState(!1),c=[{name:"Home",sectionId:"home"},{name:"Help",sectionId:"commands"},{name:"Projects",sectionId:null},{name:"Experience",sectionId:null},{name:"Contact",sectionId:null}],y=(t,s)=>{if(o(!1),t){const r=document.getElementById(t);r&&r.scrollIntoView({behavior:"smooth",block:"start"})}else alert(`${s} section coming soon!`)};return e.jsx("nav",{className:"navbar",children:e.jsxs("div",{className:"nav-container",children:[e.jsx("button",{className:"nav-toggle",onClick:()=>o(!l),"aria-label":"Toggle navigation",children:e.jsx("span",{className:`hamburger ${l?"open":""}`})}),e.jsx("ul",{className:`nav-menu ${l?"active":""}`,children:c.map(t=>e.jsx("li",{className:"nav-item",children:e.jsx("button",{className:"nav-link",onClick:()=>y(t.sectionId,t.name),children:t.name})},t.name))})]})})}const He="/assets/Profile-M1yDXiRX.jpg";function Ke(){return e.jsx("section",{className:"hero",children:e.jsxs("div",{className:"hero-content",children:[e.jsx("div",{className:"profile-image",children:e.jsx("img",{src:He,alt:"Profile",className:"profile-img"})}),e.jsxs("h1",{className:"hero-title",children:["I'm ",e.jsx("span",{className:"name",children:"Bharath"}),", a guy who loves his laptop"]}),e.jsx("p",{className:"hero-subtitle",children:"Software Development Intern | Open Source Enthusiast | Community Manager"}),e.jsx("div",{className:"scroll-indicator",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})})})]})})}function Je(){const[l,o]=h.useState(0),[c,y]=h.useState(!0),[t,s]=h.useState(!1),[r,p]=h.useState(0),[w,R]=h.useState(0),[g,j]=h.useState(0),I=h.useRef(null),a=h.useRef(null),x=[{category:"Navigation",icon:"📍",color:"#ff5050",commands:[{name:"home",desc:"Scroll to the home section",action:"home"},{name:"about",desc:"Scroll to about section",action:"about"},{name:"help",desc:"View this command reference",action:"help"},{name:"clear",desc:"Clear the terminal input",action:"clear"}]},{category:"Social",icon:"🔗",color:"#ff6b6b",commands:[{name:"github",desc:"Open my GitHub profile",action:"github"},{name:"linkedin",desc:"Visit my LinkedIn profile",action:"linkedin"},{name:"resume",desc:"View/download my resume",action:"resume"},{name:"instagram",desc:"Follow me on Instagram",action:"instagram"}]},{category:"More Links",icon:"🌐",color:"#ff8080",commands:[{name:"reddit",desc:"Check out my Reddit profile",action:"reddit"},{name:"spotify",desc:"Listen to my Spotify playlists",action:"spotify"},{name:"discord",desc:"Connect on Discord",action:"discord"},{name:"youtube",desc:"Subscribe to my YouTube",action:"youtube"}]},{category:"Shortcuts",icon:"⌨️",color:"#ff9999",commands:[{name:"Tab",desc:"Autocomplete command",action:"autocomplete"},{name:"↑/↓",desc:"Navigate through suggestions",action:"navigate"},{name:"Enter",desc:"Execute the typed command",action:"execute"},{name:"Esc",desc:"Close suggestions dropdown",action:"dismiss"},{name:"Ctrl+C",desc:"Clear input immediately",action:"clear"}]}],v=x.length;h.useEffect(()=>{if(!c)return;const d=setInterval(()=>{o(E=>(E+1)%v)},5e3);return()=>clearInterval(d)},[c,v]);const n=d=>{o(d),y(!1)},f=()=>{o(d=>(d+1)%v),y(!1)},S=()=>{o(d=>(d-1+v)%v),y(!1)},k=d=>{s(!0),y(!1);const E=d.type.includes("mouse")?d.pageX:d.touches[0].pageX;p(E),R(E)},P=d=>{if(t&&d.type.includes("mouse")){const E=d.pageX;R(E);const _=E-r;j(_)}},L=()=>{if(!t)return;s(!1);const d=w-r;Math.abs(d)>50&&(d>0?S():f()),j(0),p(0),R(0)};return h.useEffect(()=>(t?document.body.style.userSelect="none":document.body.style.userSelect="",()=>{document.body.style.userSelect=""}),[t]),h.useEffect(()=>{const d=a.current;if(!d)return;const E=_=>{if(t){_.preventDefault();const C=_.touches[0].pageX;R(C);const F=C-r;j(F)}};return d.addEventListener("touchmove",E,{passive:!1}),()=>{d.removeEventListener("touchmove",E)}},[t,r]),e.jsx("section",{className:"command-carousel-section",children:e.jsxs("div",{className:"carousel-container",children:[e.jsxs("div",{className:"carousel-header",children:[e.jsxs("div",{className:"terminal-controls",children:[e.jsx("span",{className:"terminal-prompt",children:">"}),e.jsx("span",{className:"terminal-title",children:"Command Reference"})]}),e.jsxs("div",{className:"carousel-counter",children:[e.jsx("span",{className:"current-slide",children:l+1}),e.jsx("span",{className:"slide-separator",children:"/"}),e.jsx("span",{className:"total-slides",children:v})]})]}),e.jsx("div",{ref:a,className:"carousel-viewport",onMouseDown:k,onMouseMove:P,onMouseUp:L,onMouseLeave:L,onTouchStart:k,onTouchEnd:L,children:e.jsx("div",{ref:I,className:`carousel-track ${t?"dragging":""}`,style:{transform:`translateX(calc(-${l*100}% + ${g}px))`,transition:t?"none":"transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"},children:x.map((d,E)=>e.jsxs("div",{className:"carousel-slide",children:[e.jsxs("div",{className:"slide-header",children:[e.jsx("span",{className:"slide-icon",children:d.icon}),e.jsx("h3",{className:"slide-category",children:d.category})]}),e.jsx("div",{className:"commands-grid",children:d.commands.map((_,C)=>e.jsxs("div",{className:"command-item",style:{animationDelay:`${C*.1}s`},children:[e.jsxs("div",{className:"command-line",children:[e.jsx("span",{className:"cmd-prompt",children:"$"}),e.jsx("span",{className:"cmd-name",children:_.name})]}),e.jsxs("div",{className:"command-desc",children:[e.jsx("span",{className:"desc-arrow",children:">"}),e.jsx("span",{className:"desc-text",children:_.desc})]})]},C))})]},E))})}),e.jsxs("div",{className:"carousel-controls",children:[e.jsx("button",{onClick:S,className:"carousel-nav prev","aria-label":"Previous slide",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:e.jsx("polyline",{points:"15 18 9 12 15 6"})})}),e.jsx("div",{className:"carousel-dots",children:x.map((d,E)=>e.jsx("button",{onClick:()=>n(E),className:`carousel-dot ${E===l?"active":""}`,"aria-label":`Go to slide ${E+1}`,children:e.jsx("span",{className:"dot-inner"})},E))}),e.jsx("button",{onClick:f,className:"carousel-nav next","aria-label":"Next slide",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:e.jsx("polyline",{points:"9 18 15 12 9 6"})})})]}),e.jsx("div",{className:"carousel-footer",children:e.jsx("span",{className:"footer-text",children:"Try these commands in the terminal below ↓"})})]})})}function We(){return e.jsxs("div",{className:"app-container",children:[e.jsx(Ue,{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:0},variant:"square",color:"#970505",pixelSize:2,patternScale:1.9,patternDensity:1.5,enableRipples:!0,rippleIntensityScale:2,rippleSpeed:4,edgeFade:.5,transparent:!1,liquid:!0}),e.jsxs("div",{className:"app-content",children:[e.jsx(Ge,{}),e.jsx("section",{id:"home",children:e.jsx(Ke,{})}),e.jsx("section",{id:"commands",children:e.jsx(Je,{})}),e.jsx(Fe,{})]})]})}ze.createRoot(document.getElementById("root")).render(e.jsx(Ee.StrictMode,{children:e.jsx(be,{children:e.jsx(We,{})})}));
