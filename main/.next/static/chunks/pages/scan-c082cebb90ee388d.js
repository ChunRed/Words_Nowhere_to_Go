(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[284],{5657:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/scan",function(){return o(8693)}])},8693:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return u}});var t=o(5893),s=o(3591),a=o.n(s),c=o(7294),n=o(6916);o(2285),o(9281),o(4298);let d="html5qr-code-full-region";class l extends c.Component{render(){return(0,t.jsxs)("div",{className:"jsx-33bd5c3f494ffe47",children:[(0,t.jsx)("h1",{className:"jsx-33bd5c3f494ffe47 text-center text-light m-3",children:"- Words Nowhere to Go -"}),(0,t.jsx)("div",{id:d,className:"jsx-33bd5c3f494ffe47 QRview"}),(0,t.jsx)(a(),{id:"ee4ea8227bcadbc6",children:"#html5-qrcode-button-camera-stop.jsx-33bd5c3f494ffe47{background-color:rgb(255,0,0)!important;color:rgb(255,0,0)!important}"}),(0,t.jsx)(a(),{id:"7cde66b435bfec9d",children:"button{background-color:rgba(0,0,0,.5)!important;color:rgb(255,255,255)!important;border:1px solid rgb(150,150,150);padding:10px}select{background-color:rgb(0,0,0)!important;color:rgb(255,255,255)!important;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-appearance:none;-webkit-box-pack:center;margin-bottom:30px}#html5-qrcode-anchor-scan-type-change{display:none;visibility:hidden}"})]})}componentWillUnmount(){this.html5QrcodeScanner.clear().catch(e=>{console.error("Failed to clear html5QrcodeScanner. ",e)})}componentDidMount(){var e,r,o=(e=this.props,r={},e.fps&&(r.fps=e.fps),window.innerWidth>1024?r.qrbox={width:.3*window.innerWidth,height:80}:window.innerWidth>768?r.qrbox={width:.7*window.innerWidth,height:60}:r.qrbox={width:.5*window.innerWidth,height:50},r.aspectRatio=.7,e.aspectRatio,void 0!==e.disableFlip&&(r.disableFlip=e.disableFlip),r),t=!0===this.props.verbose;if(!this.props.qrCodeSuccessCallback)throw"qrCodeSuccessCallback is required callback.";this.html5QrcodeScanner=new n.wF(d,o,t),this.html5QrcodeScanner.render(this.props.qrCodeSuccessCallback,this.props.qrCodeErrorCallback)}}var i=o(1163),h=o.n(i);o(1664);var m=o(3977),p=o(1019),b=o(9911);o(317);class _ extends c.Component{render(){return(0,t.jsxs)("div",{className:"jsx-50e85fb6f8e6d555 App",children:[(0,t.jsxs)("section",{className:"jsx-50e85fb6f8e6d555 App-section container bg-black",children:[(0,t.jsx)("div",{className:"jsx-50e85fb6f8e6d555 row bg-black border border-dark",children:(0,t.jsx)(l,{id:"scan_view",className:"border border-dark",fps:10,disableFlip:!1,qrCodeSuccessCallback:this.onNewScanResult})}),(0,t.jsx)("div",{className:"jsx-50e85fb6f8e6d555 row",children:(0,t.jsx)("div",{id:"value",className:"jsx-50e85fb6f8e6d555  mt-3 bg-black text-center"})})]}),(0,t.jsx)("p",{id:"scan_value",className:"jsx-50e85fb6f8e6d555 h2 overflow-auto "}),(0,t.jsx)(a(),{id:"53ed1472ac2f694",children:"#html5-qrcode-button-camera-stop.jsx-50e85fb6f8e6d555{background-color:rgb(255,0,0)!important;color:rgb(255,0,0)!important}#scan_value.jsx-50e85fb6f8e6d555{position:absolute;width:100vw;top:50vh;background-color:rgba(30,30,255,0);color:rgb(255,255,255);text-align:center}#value.jsx-50e85fb6f8e6d555{color:rgb(0,0,0)}"}),(0,t.jsx)(a(),{id:"b937ab68ad5dae44",children:".typed-cursor{background-color:rgba(0,0,0,0)!important}.typed-cursor--blink{background-color:rgba(0,0,0,0)!important}span{background-color:rgba(0,0,0,0)!important}"})]})}onNewScanResult(e,r){if(console.log("App [result]",r),this.setState((e,o)=>(e.decodedResults.push(r),e)),document.getElementById("value").innerHTML!=e){document.getElementById("value").innerHTML=e,(0,m.ZF)({apiKey:"AIzaSyBCM30dzmjIothg9SmLV32i9BROyvZbXqk",authDomain:"words-nowhere-to-go.firebaseapp.com",databaseURL:"https://words-nowhere-to-go-default-rtdb.firebaseio.com",projectId:"words-nowhere-to-go",storageBucket:"words-nowhere-to-go.appspot.com",messagingSenderId:"867012400062",appId:"1:867012400062:web:f2d7ad6250d9d6d3221fef",measurementId:"G-FBJ3E6X8MD"});let r=(0,p.iH)((0,p.N8)());(0,p.U2)((0,p.iU)(r,"/"+e[6]+e[7])).then(e=>{if(e.exists()){let r=e.val(),t="";console.log(r),t=r[r.length-1];let s=document.getElementById("scan_value");new b.Z(s,{strings:[t],startDelay:0,typeSpeed:10,backSpeed:0,backDelay:0,showCursor:!1,onComplete:e=>{e.destroy(),s.innerHTML=t;let r=document.createElement("br"),a=document.createElement("BUTTON"),c=document.createTextNode("preserve some words");a.appendChild(c),s.appendChild(r),s.appendChild(a),a.style.position="absolut",a.style.fontSize="13px",a.style.backgroundColor="rgb(255,0,0)",a.onclick=()=>{h().push({pathname:"/show",query:{v:o}})}}}),s.style.padding="10px"}else{console.log("No data available");let e=document.getElementById("scan_value");new b.Z(e,{strings:["no message"],startDelay:0,typeSpeed:50,backSpeed:0,backDelay:0,showCursor:!1,onComplete:r=>{r.destroy(),e.innerHTML="no message";let t=document.createElement("br"),s=document.createElement("BUTTON"),a=document.createTextNode("preserve some words");s.appendChild(a),e.appendChild(t),e.appendChild(s),s.style.position="absolut",s.style.fontSize="13px",s.onclick=()=>{h().push({pathname:"/show",query:{v:o}})}}}),e.style.padding="10px"}}).catch(e=>{console.error(e)});let o=e}}constructor(e){super(e),this.state={decodedResults:[]},this.onNewScanResult=this.onNewScanResult.bind(this)}}var u=_},317:function(){},9281:function(e){e.exports={"html5qr-code-full-region":"html5-qrcode-css_html5qr-code-full-region___S7RK",reader:"html5-qrcode-css_reader__5QrQI",logo:"html5-qrcode-css_logo__69LUP",output:"html5-qrcode-css_output__x6h4N",reader__dashboard_section_fsr:"html5-qrcode-css_reader__dashboard_section_fsr__ccaK1",reader__scan_region:"html5-qrcode-css_reader__scan_region__fDB4d","html5-qrcode-select-camera":"html5-qrcode-css_html5-qrcode-select-camera__kPxkl","html5-qrcode-button-camera-permission":"html5-qrcode-css_html5-qrcode-button-camera-permission__t4ENv","html5-qrcode-element":"html5-qrcode-css_html5-qrcode-element__FLK_v","html5-qrcode-button-camera-stop":"html5-qrcode-css_html5-qrcode-button-camera-stop__z4NUM",reader__dashboard_section:"html5-qrcode-css_reader__dashboard_section__3Pn5S","html5-qrcode-anchor-scan-type-change":"html5-qrcode-css_html5-qrcode-anchor-scan-type-change__qYBvf",reader__dashboard_section_swaplink:"html5-qrcode-css_reader__dashboard_section_swaplink__bRdiv",reader__dashboard_section_csr:"html5-qrcode-css_reader__dashboard_section_csr__rg__p",reader__camera_selection:"html5-qrcode-css_reader__camera_selection__eZjSx","qr-shaded-region":"html5-qrcode-css_qr-shaded-region__D2m_4"}}},function(e){e.O(0,[627,430,664,935,142,474,449,888,774,179],function(){return e(e.s=5657)}),_N_E=e.O()}]);