(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6225:function(e,t,s){Promise.resolve().then(s.bind(s,3565))},3565:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return H}});var a=s(7437),r=s(7138),n=s(2265),l=s(5432),o=s(8842),i=s(7776);function d(e){let{parallax:t,confirm:s}=e,r=(0,l.L)("./blender.glb"),{viewport:n,camera:d}=(0,o.A)();return(0,o.C)(()=>{d.position.x=2*t.x,d.position.y=2*t.y,d.lookAt(new i.Vector3(0,0,0))}),s(r),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,position:[0,-1,0],rotation:[0,Math.PI/6,0],scale:.5/n.height,children:(0,a.jsx)("primitive",{object:r.scene})})})}var c=s(2873),m=s(1538),x=s(2218),u=s(4839),f=s(6164);function h(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,f.m6)((0,u.W)(t))}let p=(0,x.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),g=n.forwardRef((e,t)=>{let{className:s,variant:r,size:n,asChild:l=!1,...o}=e,i=l?m.g7:"button";return(0,a.jsx)(i,{className:h(p({variant:r,size:n,className:s})),ref:t,...o})});g.displayName="Button";var v=s(3198),w=s(4697);let j=v.fC,b=v.xz;v.x8;let N=v.h_,y=n.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(v.aV,{className:h("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",s),...r,ref:t})});y.displayName=v.aV.displayName;let C=(0,x.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),E=n.forwardRef((e,t)=>{let{side:s="right",className:r,children:n,...l}=e;return(0,a.jsxs)(N,{children:[(0,a.jsx)(y,{}),(0,a.jsxs)(v.VY,{ref:t,className:h(C({side:s}),r),...l,children:[n,(0,a.jsxs)(v.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,a.jsx)(w.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});E.displayName=v.VY.displayName,n.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(v.Dx,{ref:t,className:h("text-lg font-semibold text-foreground",s),...r})}).displayName=v.Dx.displayName,n.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(v.dk,{ref:t,className:h("text-sm text-muted-foreground",s),...r})}).displayName=v.dk.displayName;var k=s(3149),L=s(4160);let _=n.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:h("rounded-lg border bg-card text-card-foreground shadow-sm",s),...r})});_.displayName="Card";let R=n.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:h("flex flex-col space-y-1.5 p-6",s),...r})});R.displayName="CardHeader";let T=n.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("h3",{ref:t,className:h("text-2xl font-semibold leading-none tracking-tight",s),...r})});T.displayName="CardTitle";let F=n.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("p",{ref:t,className:h("text-sm text-muted-foreground",s),...r})});F.displayName="CardDescription";let M=n.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:h("p-6 pt-0",s),...r})});M.displayName="CardContent";let I=n.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:h("flex items-center p-6 pt-0",s),...r})});I.displayName="CardFooter";var S=s(9582),B=s(1204),A=s(2801),P=s(7629),Y=s(8706),D=s(4458);let G=n.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(D.fC,{ref:t,className:h("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",s),...r})});G.displayName=D.fC.displayName;let W=n.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(D.Ee,{ref:t,className:h("aspect-square h-full w-full",s),...r})});W.displayName=D.Ee.displayName;let z=n.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(D.NY,{ref:t,className:h("flex h-full w-full items-center justify-center rounded-full bg-muted",s),...r})});function H(){let[e,t]=(0,n.useState)(),[s,l]=(0,n.useState)({x:0,y:0}),[o,i]=(0,n.useState)(!0);(0,n.useEffect)(()=>{let t=S.p8.context(()=>{if(e){e.scene.children.forEach(e=>{"Ground"!==e.name&&(e.visible=!1,e.castShadow=!0,e.receiveShadow=!0,"Garage_Floor"===e.name||"Floors"===e.name||"Parking"==e.name||"Pavement"===e.name?e.scale.setX(.01):e.scale.setY(.01))});let t=S.p8.utils.toArray("#stagger-color span");S.p8.to(t,{color:"#dd77b0",stagger:.1,ease:"power4.out",scrollTrigger:{trigger:"#cta-content",start:"top top",scrub:!0}}),S.p8.timeline({scrollTrigger:{trigger:"#cta-content",pin:"#cta-content",scrub:!0,start:"top top",end:"bottom top",onLeave:e=>{S.p8.set("#cta-content",{clearProps:"transform",position:"fixed",top:"0"})}}}).to(e.scene.children.filter(e=>"Wall_Foundation"===e.name),{visible:!0}).to(e.scene.children.filter(e=>"Wall_Foundation"===e.name).map(e=>e.scale),{y:1}).to(e.scene.children.filter(e=>"Column_Foundations"===e.name),{visible:!0}).to(e.scene.children.filter(e=>"Column_Foundations"===e.name).map(e=>e.scale),{y:1}).to(e.scene.children.filter(e=>"Garage_Walls"===e.name),{visible:!0}).to(e.scene.children.filter(e=>"Garage_Walls"===e.name).map(e=>e.scale),{y:1}).to(e.scene.children.filter(e=>"Garage_Columns"===e.name),{visible:!0}).to(e.scene.children.filter(e=>"Garage_Columns"===e.name).map(e=>e.scale),{y:1}).to(e.scene.children.filter(e=>"Garage_Floor"===e.name),{visible:!0}).to(e.scene.children.filter(e=>"Garage_Floor"===e.name).map(e=>e.scale),{x:1}).to(e.scene.children.filter(e=>"Columns_Start"===e.name),{visible:!0}).to(e.scene.children.filter(e=>"Columns"===e.name||"Floors"===e.name),{visible:!0}).to(e.scene.children.filter(e=>"Columns"===e.name||"Floors"===e.name).map(e=>e.scale),{y:1,x:1}).to(e.scene.children.filter(e=>"Sand"===e.name),{visible:!0}).to(e.scene.children.filter(e=>"Sand"===e.name).map(e=>e.scale),{y:1}).to(e.scene.children.filter(e=>"Facade"===e.name||"Facade_Concrete_Top"===e.name||"Glass"===e.name),{visible:!0}).to(e.scene.children.filter(e=>"Facade"===e.name||"Facade_Concrete_Top"===e.name||"Glass"===e.name).map(e=>e.scale),{y:1}).to(e.scene.children.filter(e=>"Facade_Concrete_Bottom"===e.name),{visible:!0}).to(e.scene.children.filter(e=>"Facade_Concrete_Bottom"===e.name).map(e=>e.scale),{y:10}).to(e.scene.children.filter(e=>"Parking"===e.name||"Pavement"===e.name),{visible:!0}).to(e.scene.children.filter(e=>"Parking"===e.name||"Pavement"===e.name).map(e=>e.scale),{x:1}),B.i.create({trigger:"#hero",start:"top top",onEnter:()=>{S.p8.to("#svg",{scale:10,duration:.5,ease:"power2.inOut"}),i(!1)},onLeaveBack:()=>{S.p8.to("#svg",{scale:1,duration:.5,ease:"power2.out"}),i(!0)}}),B.i.create({start:"top top",end:"bottom bottom",onUpdate:e=>{1===e.direction?S.p8.to("header",{translateY:"-100%",duration:.3,ease:"power2.out"}):S.p8.to("header",{translateY:"0%",duration:.3,ease:"power2.in"})}}),S.p8.fromTo(".card:not(:first-child)",{x:()=>window.innerWidth/2+140,rotate:-90},{x:0,stagger:.5,rotate:0,scrollTrigger:{pin:"#cards",scrub:!0,start:"top top",end:"+=2000"}})}});return()=>t.revert()},[e]);let m="M 0 0 L 128 0 L 128 100 L 128 100  L 74 100 L 74 114 L 94 114 L 94 128 L 34 128 L 34 114 L 54 114 L 54 100 L 0 100 Z";(0,n.useEffect)(()=>{let e=e=>{l({x:(e.clientX/window.innerWidth-.5)*.5,y:(e.clientY/window.innerHeight-.5)*.25})},t=e=>{l({x:e.gamma?-e.gamma/90:0,y:e.beta?(-e.beta+45)/180:0}),null!==e.gamma&&null!==e.beta&&u({x:(1.25*e.gamma+90)/180*window.innerWidth,y:((e.beta-45)*1.25+90)/180*window.innerHeight})};return window.addEventListener("mousemove",e),window.addEventListener("deviceorientation",t),()=>{window.removeEventListener("mousemove",e),window.removeEventListener("deviceorientation",t)}},[]);let[x,u]=(0,n.useState)({x:0,y:0}),[f,h]=(0,n.useState)(5),[p,v]=(0,n.useState)("#dd77b0"),w=(0,P.q)(0,{stiffness:100,damping:20}),N=(0,P.q)(0,{stiffness:100,damping:20});return(0,n.useEffect)(()=>{w.set(x.x),N.set(x.y)},[x.x,x.y,w,N]),(0,a.jsxs)("div",{onMouseMove:e=>{let t=e.currentTarget.getBoundingClientRect();e.clientX,t.left,e.clientY,t.top,u({x:e.clientX,y:e.clientY})},className:"cursor-none",children:[(0,a.jsx)("header",{className:"fixed w-full z-20",children:(0,a.jsxs)("div",{className:"flex justify-between items-center h-16 gap-4 w-full md:w-3/4 px-4 md:px-0 m-auto",children:[(0,a.jsx)(r.default,{href:"#",onClick:()=>S.p8.to(window,{duration:1,scrollTo:0}),onMouseEnter:()=>h(10),onMouseOut:()=>h(5),children:(0,a.jsx)("img",{src:"./logo.png"})}),(0,a.jsxs)("nav",{className:"hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6",children:[(0,a.jsx)(r.default,{className:"text-black transition-colors hover:text-purple-800",href:"#",onClick:()=>{var e,t;return S.p8.to(window,{duration:1,scrollTo:2500+(null!==(t=null===(e=document.getElementById("cta-text"))||void 0===e?void 0:e.offsetTop)&&void 0!==t?t:0)})},children:"Software Architecture"}),(0,a.jsx)(r.default,{href:"#",className:"text-black transition-colors hover:text-purple-800",onClick:()=>{var e,t;return S.p8.to(window,{duration:1,scrollTo:2500+(null!==(t=null===(e=document.getElementById("cta-text"))||void 0===e?void 0:e.offsetTop)&&void 0!==t?t:0)+2*window.innerHeight})},children:"Proptech & AEC"}),(0,a.jsx)(r.default,{href:"#",className:"text-black transition-colors hover:text-purple-800",onClick:()=>S.p8.to(window,{duration:1,scrollTo:"max"}),children:"Contact"})]}),(0,a.jsxs)(j,{children:[(0,a.jsx)(b,{asChild:!0,children:(0,a.jsxs)(g,{variant:"outline",size:"icon",className:"shrink-0 md:hidden bg-[#4B4E6D]",children:[(0,a.jsx)(c.Z,{className:"h-5 w-5"}),(0,a.jsx)("span",{className:"sr-only",children:"Toggle navigation menu"})]})}),(0,a.jsx)(E,{side:"top",className:"bg-[#4B4E6D]",children:(0,a.jsxs)("nav",{className:"grid gap-6 text-lg font-medium",children:[(0,a.jsx)(r.default,{href:"#",className:"text-muted-foreground hover:text-foreground",onClick:()=>{var e,t;return S.p8.to(window,{duration:1,scrollTo:2500+(null!==(t=null===(e=document.getElementById("cta-text"))||void 0===e?void 0:e.offsetTop)&&void 0!==t?t:0)})},children:"Software Architecture"}),(0,a.jsx)(r.default,{href:"#",className:"text-muted-foreground hover:text-foreground",onClick:()=>{var e,t;return S.p8.to(window,{duration:1,scrollTo:2500+(null!==(t=null===(e=document.getElementById("cta-text"))||void 0===e?void 0:e.offsetTop)&&void 0!==t?t:0)+2*window.innerHeight})},children:"Proptech & AEC"}),(0,a.jsx)(r.default,{href:"#",className:"text-muted-foreground hover:text-foreground",onClick:()=>S.p8.to(window,{duration:1,scrollTo:"max"}),children:"Contact"})]})})]})]})}),(0,a.jsxs)("main",{children:[(0,a.jsxs)("section",{id:"hero",className:"h-svh overflow-hidden relative bg-white",children:[(0,a.jsx)("div",{className:"absolute inset-0 flex justify-end items-end h-full",children:(0,a.jsxs)("h1",{className:"mx-4 sm:mx-8 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-black",children:["I'M AN ENGINEER",(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"text-[#dd77b0]",children:"BUILD"})," SMARTER WITH ME"]})}),(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128",className:"absolute inset-0 w-full h-full pointer-events-none",preserveAspectRatio:"xMidYMid",id:"svg",style:o?{transform:"perspective(50px) rotateX(".concat(-10*s.y,"deg) rotateY(").concat(10*s.x,"deg) translate3d(").concat(-500*s.x,"px, ").concat(-500*s.y,"px, 0)")}:{},children:(0,a.jsx)(Y.E.path,{fill:"#11e7db",initial:{d:m},animate:{d:[m,"M 0 64 L 64 0 L 128 64 L 118 74 L 112 68 L 112 128 L 74 128 L 74 92 L 54 92 L 54 128 L 16 128 L 16 68 L 10 74 Z",m]},transition:{duration:8,ease:"easeInOut",repeat:1/0}})}),(0,a.jsx)("div",{className:"absolute inset-0 flex justify-end items-end h-full mix-blend-multiply",children:(0,a.jsxs)("h1",{className:"mx-4 sm:mx-8 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-[#800080]",children:["I'M AN ENGINEER",(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"text-[#dd77b0]",children:"BUILD"})," SMARTER WITH ME"]})})]}),(0,a.jsx)("section",{id:"cta",className:"sticky top-0 bg-[#11e7db]",children:(0,a.jsxs)("div",{id:"cta-content",className:"h-dvh flex justify-end items-start",children:[(0,a.jsx)(k.Xz,{style:{pointerEvents:"none",position:"absolute",top:0},children:(0,a.jsx)(L.H,{adjustCamera:!1,children:(0,a.jsx)(d,{parallax:s,confirm:t})})}),(0,a.jsxs)("div",{className:"text-right mx-4 sm:mx-16 my-4",children:[(0,a.jsxs)("h2",{id:"stagger-color",className:"text-2xl md:text-4xl font-bold text-black ",children:["I do software for the AEC".split("").map((e,t)=>(0,a.jsx)("span",{children:e},t)),(0,a.jsx)("br",{}),"to help teams improve their workflows".split("").map((e,t)=>(0,a.jsx)("span",{children:e},t)),(0,a.jsx)("br",{}),"and keep your company growing.".split("").map((e,t)=>(0,a.jsx)("span",{children:e},t))]}),(0,a.jsx)(g,{className:"my-4 hover:bg-purple-800 bg-[#dd77b0]",onMouseEnter:()=>h(10),onMouseOut:()=>h(5),children:"FIND ME ON LINKEDIN"})]})]})}),(0,a.jsxs)("section",{id:"next",className:"flex flex-col bg-white relative",children:[(0,a.jsx)("h2",{className:"text-3xl text-black mb-64",children:"Scroll down to see the effect!"}),(0,a.jsxs)("video",{autoPlay:!0,loop:!0,muted:!0,style:{width:"100%",borderRadius:"8px"},children:[(0,a.jsx)("source",{src:"https://framerusercontent.com/assets/95YcHCkLd7gCw09b6teV4jZ5Qk.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]}),(0,a.jsx)("h2",{className:"text-3xl text-black",children:"Scroll down to see the effect!"})]}),(0,a.jsxs)("section",{id:"collabs",className:"flex flex-col bg-white relative",onMouseEnter:()=>{v("#FEE719"),h(50)},onMouseLeave:()=>{v("#dd77b0"),h(5)},children:[(0,a.jsx)("div",{className:"grid grid-cols-4 md:grid-cols-8 gap-4 w-full relative py-32",children:Array.from({length:16}).map((e,t)=>(0,a.jsx)(Y.E.div,{className:"w-full h-32 overflow-hidden",animate:{x:["0%","-100%"]},transition:{repeat:1/0,duration:10,ease:"linear"},children:(0,a.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"w-full h-full",children:(0,a.jsx)("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.417-1.305.76-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.526 11.526 0 0 1 3-.404c1.02.005 2.045.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.812 1.096.812 2.21 0 1.596-.015 2.88-.015 3.27 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z",style:{fill:"black"}})})},t))}),(0,a.jsx)("div",{className:"grid grid-cols-4 md:grid-cols-8 gap-4 w-full absolute pointer-events-none mix-blend-multiply py-32",children:Array.from({length:16}).map((e,t)=>(0,a.jsx)(Y.E.div,{className:"relative w-full h-32 overflow-hidden",animate:{x:["0%","-100%"]},transition:{repeat:1/0,duration:10,ease:"linear"},children:(0,a.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"w-full h-full ",children:(0,a.jsx)("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.417-1.305.76-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.526 11.526 0 0 1 3-.404c1.02.005 2.045.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.812 1.096.812 2.21 0 1.596-.015 2.88-.015 3.27 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z",style:{fill:"orange"}})})},t))})]}),(0,a.jsxs)("section",{id:"cards",className:"relative h-dvh flex justify-center bg-white overflow-x-hidden",children:[(0,a.jsxs)(_,{className:"card absolute top-0",children:[(0,a.jsxs)(R,{children:[(0,a.jsxs)(G,{className:"w-16 h-16",children:[(0,a.jsx)(W,{src:"https://github.com/shadcn.png"}),(0,a.jsx)(z,{children:"CN"})]}),(0,a.jsx)(T,{children:"Consumer"}),(0,a.jsx)(F,{children:"Deploy your new project in one-click."})]}),(0,a.jsx)(M,{className:"overflow-hidden text-ellipsis",children:"From awareness to conversion, we combine proprietary algorithms, real-time insights, and inspired creative."}),(0,a.jsx)(I,{className:"flex justify-between",children:(0,a.jsx)(g,{children:"Read more"})})]}),(0,a.jsxs)(_,{className:"card absolute top-0",children:[(0,a.jsxs)(R,{children:[(0,a.jsxs)(G,{className:"w-16 h-16",children:[(0,a.jsx)(W,{src:"https://github.com/shadcn.png"}),(0,a.jsx)(z,{children:"CN"})]}),(0,a.jsx)(T,{children:"Consumer"}),(0,a.jsx)(F,{children:"Deploy your new project in one-click."})]}),(0,a.jsx)(M,{className:"overflow-hidden text-ellipsis",children:"From awareness to conversion, we combine proprietary algorithms, real-time insights, and inspired creative."}),(0,a.jsx)(I,{className:"flex justify-between",children:(0,a.jsx)(g,{children:"Read more"})})]}),(0,a.jsxs)(_,{className:"card absolute top-0",children:[(0,a.jsxs)(R,{children:[(0,a.jsxs)(G,{className:"w-16 h-16",children:[(0,a.jsx)(W,{src:"https://github.com/shadcn.png"}),(0,a.jsx)(z,{children:"CN"})]}),(0,a.jsx)(T,{children:"Consumer"}),(0,a.jsx)(F,{children:"Deploy your new project in one-click."})]}),(0,a.jsx)(M,{className:"overflow-hidden text-ellipsis",children:"From awareness to conversion, we combine proprietary algorithms, real-time insights, and inspired creative."}),(0,a.jsx)(I,{className:"flex justify-between",children:(0,a.jsx)(g,{children:"Read more"})})]})]})]}),(0,a.jsx)("footer",{className:"relative bg-gray-400 h-[500px]"}),(0,a.jsxs)("svg",{className:"fixed top-0 left-0 w-full h-full pointer-events-none",style:{mixBlendMode:f>15?"hard-light":"normal"},children:[(0,a.jsx)(Y.E.circle,{cx:x.x,cy:x.y,r:50-f/2,fill:"none",stroke:p,strokeWidth:f,animate:{r:50-f/2,strokeWidth:f},transition:{duration:.3,ease:"easeInOut"}}),(0,a.jsx)(Y.E.circle,{cx:w,cy:N,r:45,fill:"".concat(p,"75")})]})]})}z.displayName=D.NY.displayName,S.p8.registerPlugin(B.i),S.p8.registerPlugin(A.L)}},function(e){e.O(0,[689,922,966,971,23,744],function(){return e(e.s=6225)}),_N_E=e.O()}]);