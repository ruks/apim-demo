(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1472:function(e,t,a){"use strict";var n=a(1),s=a.n(n),i=a(180),l=a(1591),r=a(1556),c=a(1523),o=a(1542);t.a=e=>{const{subscriptions:t,handleChanges:a,selectedApplication:n,selectedKeyType:p}=e;return s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,{display:"flex",justifyContent:"center"},s.a.createElement(l.a,{xs:12,md:3},s.a.createElement(c.a,null,s.a.createElement(o.a,{fullWidth:!0,id:"outlined-select-currency",select:!0,label:s.a.createElement(i.a,{defaultMessage:"Appplications",id:"Apis.Details.ApiConsole.SelectAppPanel.applications"}),value:n,name:"selectedApplication",onChange:a,SelectProps:t,helperText:s.a.createElement(i.a,{defaultMessage:"Please select an application",id:"Apis.Details.ApiConsole.SelectAppPanel.select.an.application"}),margin:"normal",variant:"outlined"},t.map(e=>s.a.createElement(r.a,{value:e.applicationInfo.applicationId,key:e.applicationInfo.applicationId},e.applicationInfo.name))))),s.a.createElement(l.a,{xs:12,md:3},s.a.createElement(c.a,{ml:2},s.a.createElement(o.a,{fullWidth:!0,id:"outlined-select-currency",select:!0,label:s.a.createElement(i.a,{defaultMessage:"Key Type",id:"Apis.Details.ApiConsole.SelectAppPanel.key.type"}),value:p,name:"selectedKeyType",onChange:a,helperText:s.a.createElement(i.a,{defaultMessage:"Please select a key type",id:"Apis.Details.ApiConsole.SelectAppPanel.select.key.type"}),margin:"normal",variant:"outlined"},null!=t&&"UNBLOCKED"===t.find(e=>e.applicationId===n).status&&s.a.createElement(r.a,{value:"PRODUCTION"},s.a.createElement(i.a,{id:"Apis.Details.ApiConsole.SelectAppPanel.production",defaultMessage:"PRODUCTION"})),s.a.createElement(r.a,{value:"SANDBOX"},s.a.createElement(i.a,{id:"Apis.Details.ApiConsole.SelectAppPanel.sandbox",defaultMessage:"SANDBOX"})))))))}},2049:function(e,t){},2051:function(e,t){},2264:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(180),l=a(1591),r=a(1531),c=a(17),o=a.n(c),p=a(1542),d=a(1544),u=a(1614),m=a(1610),h=a(1717),g=a(1182),y=a(1564),E=a(1530),A=a(1569),b=a(22),f=a(1552),k=a(1556),S=a(1576),T=a(1446),C=a.n(T),v=a(1523),w=a(1199),P=a(259),I=a(256),O=(a(1885),a(1887)),D=a.n(O);const N=function(){return{wrapComponents:{info:()=>()=>null,authorizeBtn:()=>()=>null}}},B=e=>{const{spec:t,accessTokenProvider:a,authorizationHeader:n,api:i,securitySchemeType:l}=e,r={spec:t,validatorUrl:null,defaultModelsExpandDepth:-1,docExpansion:"list",requestInterceptor:e=>{const{url:t}=e,{context:s}=i,r=`${s}/*`;if(e.headers[n]="apikey"===n?a():"BASIC"===l?"Basic "+a():"Bearer "+a(),t.endsWith(r))e.url=t.substring(0,t.length-2);else if(t.includes(r+"?")){const a=t.split("/*?");e.url=a.length>1?a[0]+"?"+a[1]:a[0]}return e},defaultModelExpandDepth:-1,plugins:[N]};return s.a.createElement(D.a,r)};B.propTypes={accessTokenProvider:o.a.func.isRequired,authorizationHeader:o.a.string.isRequired,api:o.a.shape({context:o.a.string.isRequired}).isRequired,spec:o.a.string.isRequired};var x=B,R=a(1226),j=a(1472);function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function K(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class U extends s.a.Component{constructor(e){super(e),this.state={showToken:!1,securitySchemeType:"OAUTH",username:"",password:""},this.handleChanges=this.handleChanges.bind(this),this.accessTokenProvider=this.accessTokenProvider.bind(this),this.handleClickShowToken=this.handleClickShowToken.bind(this),this.updateSwagger=this.updateSwagger.bind(this),this.updateAccessToken=this.updateAccessToken.bind(this),this.updateApplication=this.updateApplication.bind(this)}componentDidMount(){const{api:e}=this.context,t=e.id,a=b.a.getUser();let n,s,i,l,r,c,o,p,d="PRODUCTION";this.apiClient=new I.a,this.apiClient.getAPIById(t).then(e=>((n=e.obj).endpointURLs&&(s=n.endpointURLs.map(e=>e.environmentName)),n.labels&&(i=n.labels.map(e=>e.name)),s&&s.length>0?([l]=s,this.apiClient.getSwaggerByAPIIdAndEnvironment(t,l)):i&&i.length>0?([l]=i,this.apiClient.getSwaggerByAPIIdAndLabel(t,l)):this.apiClient.getSwaggerByAPIId(t))).then(e=>(r=e.obj,null!=a?this.apiClient.getSubscriptions(t):null)).then(e=>{if(null!=e)if((c=e.obj.list.filter(e=>"UNBLOCKED"===e.status||"PROD_ONLY_BLOCKED"===e.status))&&c.length>0){o=c[0].applicationId,R.a.get(o).then(e=>e.getKeys()).then(e=>{e.get("SANDBOX")?(d="SANDBOX",({accessToken:p}=e.get("SANDBOX").token)):e.get("PRODUCTION")&&(d="PRODUCTION",({accessToken:p}=e.get("PRODUCTION").token)),this.setState({api:n,swagger:r,subscriptions:c,environments:s,labels:i,selectedEnvironment:l,selectedApplication:o,keys:e,selectedKeyType:d,accessToken:p})})}else this.setState({api:n,swagger:r,subscriptions:c,environments:s,labels:i,selectedEnvironment:l,selectedApplication:o,keys:void 0,selectedKeyType:d,accessToken:p});else this.setState({api:n,swagger:r,subscriptions:c,environments:s,labels:i,selectedEnvironment:l,selectedApplication:o,keys:void 0,selectedKeyType:d,accessToken:p})}).catch(e=>{const{status:t}=e;404===t&&this.setState({notFound:!0})})}handleClickShowToken(){const{showToken:e}=this.state;this.setState({showToken:!e})}accessTokenProvider(){const{accessToken:e,securitySchemeType:t,username:a,password:n}=this.state;if("BASIC"===t){return btoa(a+":"+n)}return e}handleChanges(e){const{target:t}=e,{name:a,value:n}=t;switch(a){case"selectedEnvironment":this.setState({[a]:n},this.updateSwagger);break;case"selectedApplication":this.setState({[a]:n},this.updateApplication);break;case"selectedKeyType":this.setState({[a]:n},this.updateAccessToken);break;case"securityScheme":this.setState({securitySchemeType:n});break;case"username":this.setState({username:n});break;case"password":this.setState({password:n});break;default:this.setState({[a]:n})}}updateSwagger(){const{selectedEnvironment:e,api:t,environments:a}=this.state;let n;(n=e?a.includes(e)?this.apiClient.getSwaggerByAPIIdAndEnvironment(t.id,e):this.apiClient.getSwaggerByAPIIdAndLabel(t.id,e):this.apiClient.getSwaggerByAPIId(t.id)).then(e=>{this.setState({swagger:e.obj})})}updateAccessToken(){const{keys:e,selectedKeyType:t}=this.state;let a;e.get(t)&&({accessToken:a}=e.get(t).token),this.setState({accessToken:a})}updateApplication(){const{selectedApplication:e,selectedKeyType:t,subscriptions:a}=this.state,n=R.a.get(e);let s,i;null!=a&&"PROD_ONLY_BLOCKED"===a.find(t=>t.applicationId===e).status?(this.setState({selectedKeyType:"SANDBOX"}),i="SANDBOX"):i=t,n.then(e=>e.getKeys()).then(e=>{e.get(i)&&({accessToken:s}=e.get(i).token),this.setState({accessToken:s,keys:e})})}render(){const{classes:e}=this.props,{api:t,notFound:a,swagger:n,accessToken:c,showToken:o,subscriptions:g,selectedApplication:T,selectedKeyType:w,selectedEnvironment:I,environments:O,labels:D,securitySchemeType:N,username:B,password:R}=this.state,U=b.a.getUser(),q=JSON.stringify(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(Object(a),!0).forEach((function(t){K(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},n)),L="data:text/json;charset=utf-8, "+encodeURIComponent(q);if(null==t||null==n)return s.a.createElement(P.a,null);if(a)return"API Not found !";let F=!1,z=!1,H=!1,X=t.authorizationHeader?t.authorizationHeader:"Authorization",_="Bearer";t&&t.securityScheme&&(F=t.securityScheme.includes("api_key"),z=t.securityScheme.includes("basic_auth"),H=t.securityScheme.includes("oauth2"),F&&"API-KEY"===N&&(X="apikey",_=""));const W=t.lifeCycleStatus&&"prototyped"===t.lifeCycleStatus.toLowerCase();return s.a.createElement(s.a.Fragment,null,s.a.createElement(r.a,{variant:"h4",className:e.titleSub},s.a.createElement(i.a,{id:"Apis.Details.ApiConsole.ApiConsole.title",defaultMessage:"Try Out"})),s.a.createElement(f.a,{className:e.paper},s.a.createElement(l.a,{container:!0,className:e.grid},!W&&!U&&s.a.createElement(l.a,{item:!0,md:6},s.a.createElement(f.a,{className:e.userNotificationPaper},s.a.createElement(r.a,{variant:"h5",component:"h3"},s.a.createElement(A.a,null,"warning")," ",s.a.createElement(i.a,{id:"notice",defaultMessage:"Notice"})),s.a.createElement(r.a,{component:"p"},s.a.createElement(i.a,{id:"api.console.require.access.token",defaultMessage:"You need an access token to try the API. Please log in and subscribe to the API to generate an access token. If you already have an access token, please provide it below."})))),!W&&s.a.createElement(l.a,{xs:12,md:12,item:!0},s.a.createElement(v.a,{display:"block"},U&&g&&g.length>0&&s.a.createElement(j.a,{subscriptions:g,handleChanges:this.handleChanges,selectedApplication:T,selectedKeyType:w}),g&&0===g.length&&s.a.createElement(v.a,{display:"flex",justifyContent:"center"},s.a.createElement(r.a,{variant:"body1",gutterBottom:!0},s.a.createElement(i.a,{id:"Apis.Details.ApiConsole.ApiConsole.subscribe.to.application",defaultMessage:"Please subscribe to an application"}))),s.a.createElement(v.a,{display:"flex",justifyContent:"center"},s.a.createElement(l.a,{xs:12,md:6,item:!0},(O&&O.length>0||D&&D.length>0)&&s.a.createElement(p.a,{fullWidth:!0,select:!0,label:s.a.createElement(i.a,{defaultMessage:"Environment",id:"Apis.Details.ApiConsole.environment"}),value:I,name:"selectedEnvironment",onChange:this.handleChanges,helperText:s.a.createElement(i.a,{defaultMessage:"Please select an environment",id:"Apis.Details.ApiConsole.SelectAppPanel.select.environment"}),margin:"normal",variant:"outlined"},O&&O.length>0&&s.a.createElement(k.a,{value:"",disabled:!0},s.a.createElement("em",null,s.a.createElement(i.a,{id:"api.gateways",defaultMessage:"API Gateways"}))),O&&O.map(e=>s.a.createElement(k.a,{value:e,key:e},e)),D&&D.length>0&&s.a.createElement(k.a,{value:"",disabled:!0},s.a.createElement("em",null,s.a.createElement(i.a,{id:"micro.gateways",defaultMessage:"Microgateways"}))),D&&D.map(e=>s.a.createElement(k.a,{value:e,key:e},e))))),s.a.createElement(v.a,{display:"block",justifyContent:"center"},s.a.createElement(l.a,{x:12,md:6,className:e.tokenType,item:!0},"BASIC"===N?s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{margin:"normal",variant:"outlined",className:e.usernameField,label:s.a.createElement(i.a,{id:"username",defaultMessage:"Username"}),name:"username",onChange:this.handleChanges,value:B||""}),s.a.createElement(p.a,{margin:"normal",variant:"outlined",className:e.passwordField,label:s.a.createElement(i.a,{id:"password",defaultMessage:"Password"}),name:"password",onChange:this.handleChanges,value:R||""})):s.a.createElement(p.a,{fullWidth:!0,margin:"normal",variant:"outlined",label:s.a.createElement(i.a,{id:"access.token",sdefaultMessage:"Access Token"}),name:"accessToken",onChange:this.handleChanges,type:o?"text":"password",value:c||"",helperText:s.a.createElement(i.a,{id:"enter.access.token",defaultMessage:"Enter access Token"}),InputProps:{endAdornment:s.a.createElement(E.a,{position:"end"},s.a.createElement(y.a,{edge:"end","aria-label":"Toggle token visibility",onClick:this.handleClickShowToken},o?s.a.createElement(A.a,null,"visibility_off"):s.a.createElement(A.a,null,"visibility"))),startAdornment:s.a.createElement(E.a,{className:e.inputAdornmentStart,position:"start"},`${X}: ${_}`)}})),s.a.createElement(l.a,{x:12,md:6,className:e.centerItems},(F||z||H)&&s.a.createElement(d.a,{component:"fieldset"},s.a.createElement(u.a,{name:"securityScheme",value:N,onChange:this.handleChanges,row:!0},H&&s.a.createElement(m.a,{value:"OAUTH",control:s.a.createElement(h.a,null),label:"OAuth"}),z&&s.a.createElement(m.a,{value:"BASIC",control:s.a.createElement(h.a,null),label:"Basic"}),F&&s.a.createElement(m.a,{value:"API-KEY",control:s.a.createElement(h.a,null),label:"API Key"}))))))),s.a.createElement(l.a,{container:!0},s.a.createElement(l.a,{xs:10,item:!0}),s.a.createElement(l.a,{xs:2,item:!0},s.a.createElement("a",{href:L,download:"swagger.json"},s.a.createElement(S.a,{size:"small"},s.a.createElement(C.a,{className:e.buttonIcon}),s.a.createElement(i.a,{id:"Apis.Details.APIConsole.APIConsole.download.swagger",defaultMessage:"Swagger ( /swagger.json )"}))))))),s.a.createElement(f.a,{className:e.paper},s.a.createElement(x,{api:this.state.api,accessTokenProvider:this.accessTokenProvider,spec:n,authorizationHeader:X,securitySchemeType:N})))}}U.propTypes={classes:o.a.shape({paper:o.a.string.isRequired,titleSub:o.a.string.isRequired,grid:o.a.string.isRequired,userNotificationPaper:o.a.string.isRequired,inputAdornmentStart:o.a.string.isRequired,buttonIcon:o.a.string.isRequired,centerItems:o.a.string.isRequired}).isRequired},U.contextType=w.a;t.default=Object(g.a)(e=>({buttonIcon:{marginRight:10},centerItems:{margin:"auto"},tokenType:{margin:"auto",display:"flex"},inputAdornmentStart:{minWidth:e.spacing(18)},paper:{margin:e.spacing(1),padding:e.spacing(1)},grid:{marginTop:e.spacing(4),marginBottom:e.spacing(4),paddingRight:e.spacing(2),justifyContent:"center"},userNotificationPaper:{padding:e.spacing(2)},titleSub:{marginLeft:e.spacing(2),paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},usernameField:{width:"100%"},passwordField:{width:"100%",marginLeft:e.spacing(1)}}))(U)}}]);
//# sourceMappingURL=APIConsole.bundle.js.map