(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{2866:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(42),s=a(16),c=a(35),r=a.n(c),l=a(426),d=a(1089),p=a(1187),u=a(1174),m=a(1088),f=a(1219),E=a(1211),C=a(1086),b=a(1532),h=a(2586),g=a(2587),O=a.n(g),w=a(433),T=a(512),N=a(443),S=a(438),y=a(56);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function j(e){return o.a.createElement(f.a,D({direction:"up"},e))}function A(e){const{intl:t,apiType:a,showAtOnce:i,history:c,docId:r}=e,{api:l,isAPIProduct:f}=Object(n.useContext)(S.c),[g,D]=Object(n.useState)(i),[A,x]=Object(n.useState)(b.EditorState.createEmpty()),I=()=>{if(g||v(),g&&i){const e="/".concat(f?"api-products":"apis","/").concat(l.id,"/documents");c.push(e)}D(!g)},v=()=>{(f?new T.a:new w.a).getInlineContentOfDocument(l.id,r).then(e=>{const t=Object(b.convertFromHTML)(e.text),a=b.ContentState.createFromBlockArray(t.contentBlocks,t.entityMap);x(b.EditorState.createWithContent(a))}).catch(e=>{const{status:t}=e;404===t&&this.setState({apiNotFound:!0})})},{classes:M}=e;return o.a.createElement("div",null,o.a.createElement(d.a,{onClick:I,disabled:Object(y.b)(["apim:api_create","apim:api_publish"],l)},o.a.createElement(E.a,null,"description"),o.a.createElement(s.a,{id:"Apis.Details.Documents.TextEditor.edit.content",defaultMessage:"Edit Content"})),o.a.createElement(p.a,{fullScreen:!0,open:g,onClose:I,TransitionComponent:j},o.a.createElement(C.a,{square:!0,className:M.popupHeader},o.a.createElement(u.a,{color:"inherit",onClick:I,"aria-label":"Close"},o.a.createElement(E.a,null,"close")),o.a.createElement(m.a,{variant:"h4",className:M.docName},o.a.createElement(s.a,{id:"Apis.Details.Documents.TextEditor.edit.content.of",defaultMessage:"Edit Content of"})," ",'"',e.docName,'"'),o.a.createElement(d.a,{className:M.button,variant:"contained",color:"primary",onClick:()=>{const e=f?new T.a:new w.a,a=O()(Object(b.convertToRaw)(A.getCurrentContent()));e.addInlineContentToDocument(l.id,r,"INLINE",a).then(e=>{N.a.info("".concat(e.obj.name," ").concat(t.formatMessage({id:"Apis.Details.Documents.TextEditor.update.success.message",defaultMessage:"updated successfully."}))),I()}).catch(e=>{N.a.error("".concat(e," ").concat(t.formatMessage({id:"Apis.Details.Documents.TextEditor.update.error.message",defaultMessage:"update failed."})))})}},o.a.createElement(s.a,{id:"Apis.Details.Documents.TextEditor.update.content.button",defaultMessage:"Update Content"})),o.a.createElement(d.a,{className:M.button,onClick:I},o.a.createElement(s.a,{id:"Apis.Details.Documents.TextEditor.cancel.button",defaultMessage:"Cancel"}))),o.a.createElement("div",{className:M.splitWrapper},o.a.createElement(h.Editor,{editorState:A,wrapperClassName:"draftjs-wrapper",editorClassName:"draftjs-editor",onEditorStateChange:e=>{x(e)}}))))}A.propTypes={classes:r.a.shape({}).isRequired,docId:r.a.string.isRequired,apiType:r.a.oneOf([w.a.CONSTS.API,w.a.CONSTS.APIProduct]).isRequired,intl:r.a.shape({}).isRequired,showAtOnce:r.a.bool.isRequired,api:r.a.shape({id:r.a.string,apiType:r.a.oneOf([w.a.CONSTS.API,w.a.CONSTS.APIProduct])}).isRequired},t.default=Object(s.d)(Object(i.withRouter)(Object(l.a)({appBar:{position:"relative"},flex:{flex:1},popupHeader:{display:"flex",flexDirection:"row",alignItems:"center"},splitWrapper:{padding:0},docName:{alignItems:"center",display:"flex"},button:{height:30,marginLeft:30}})(A)))}}]);
//# sourceMappingURL=ListingTextEditor.bundle.js.map