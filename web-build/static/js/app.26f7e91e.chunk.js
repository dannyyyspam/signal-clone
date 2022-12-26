(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{223:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return q}));var a=n(0),i=n(2),r=n(330),o=n(329),c=n(14),s=n.n(c),l=n(34),u=n(4),d=n(84),f=n(114),j=n(78),h=(n(308),n(318),(0===j.default.apps.length?j.default.initializeApp({apiKey:"AIzaSyDsTAqbWYxKE92GfhPATQLokVSWCD1hPog",authDomain:"signal-clone-42b90.firebaseapp.com",projectId:"signal-clone-42b90",storageBucket:"signal-clone-42b90.appspot.com",messagingSenderId:"598244891101",appId:"1:598244891101:web:53ba1c5210f3868922be34"}):j.default.app()).firestore()),b=j.default.auth(),p=n(1),g=function(e){var t=e.navigation,n=Object(a.useState)(""),i=s()(n,2),r=i[0],o=i[1],c=Object(a.useState)(""),j=s()(c,2),h=j[0],g=j[1];Object(a.useEffect)((function(){return b.onAuthStateChanged((function(e){console.log(e),e&&t.replace("Home")}))}),[]);var x=function(){b.signInWithEmailAndPassword(r,h).catch((function(e){return alert(e)}))};return Object(p.jsxs)(d.default,{behavior:"padding",style:m.container,children:[Object(p.jsx)(f.StatusBar,{style:"light"}),Object(p.jsx)(l.Image,{source:{uri:"https://img.icons8.com/color/480/signal-app.png"},style:{width:200,height:200}}),Object(p.jsxs)(u.default,{style:m.inputContainer,children:[Object(p.jsx)(l.Input,{placeholder:"Email",autoFocus:!0,type:"email",value:r,onChangeText:function(e){return o(e)}}),Object(p.jsx)(l.Input,{placeholder:"Password",secureTextEntry:!0,type:"password",value:h,onChangeText:function(e){return g(e)},onSubmitEditing:x})]}),Object(p.jsx)(l.Button,{containerStyle:m.button,onPress:x,title:"Login"}),Object(p.jsx)(l.Button,{onPress:function(){return t.navigate("Register")},containerStyle:m.button,type:"outline",title:"Register"}),Object(p.jsx)(u.default,{style:{height:100}})]})},m=i.default.create({container:{flex:1,alignItems:"center",justifyContent:"center",padding:10,backgroundColor:"white"},inputContainer:{width:300},button:{width:200,marginTop:10}}),x=function(e){var t=e.navigation,n=Object(a.useState)(""),i=s()(n,2),r=i[0],o=i[1],c=Object(a.useState)(""),j=s()(c,2),h=j[0],g=j[1],m=Object(a.useState)(""),x=s()(m,2),y=x[0],v=x[1],C=Object(a.useState)(""),S=s()(C,2),w=S[0],L=S[1];Object(a.useLayoutEffect)((function(){t.setOptions({headerBackTitle:"Back to Login"})}),[t]);var T=function(){b.createUserWithEmailAndPassword(h,y).then((function(e){e.user.updateProfile({displayName:r,photoURL:w})})).catch((function(e){return alert(e.message)}))};return Object(p.jsxs)(d.default,{behavior:"padding",style:O.container,children:[Object(p.jsx)(f.StatusBar,{style:"light"}),Object(p.jsx)(l.Text,{h3:!0,style:{marginBottom:50},children:"Create a Signal account"}),Object(p.jsxs)(u.default,{style:O.inputContainer,children:[Object(p.jsx)(l.Input,{placeholder:"Full Name",autoFocus:!0,type:"text",value:r,onChangeText:function(e){return o(e)}}),Object(p.jsx)(l.Input,{placeholder:"Email",type:"email",value:h,onChangeText:function(e){return g(e)}}),Object(p.jsx)(l.Input,{placeholder:"password",type:"password",secureTextEntry:!0,value:y,onChangeText:function(e){return v(e)}}),Object(p.jsx)(l.Input,{placeholder:"Profile Picture URL (optional)",type:"text",value:w,onChangeText:function(e){return L(e)},onSubmitEditing:T})]}),Object(p.jsx)(l.Button,{containerStyle:O.button,raised:!0,onPress:T,title:"Register"}),Object(p.jsx)(u.default,{style:{height:100}})]})},O=i.default.create({container:{flex:1,alignItems:"center",justifyContent:"center",padding:10,backgroundColor:"white"},button:{width:200,marginTop:10},inputContainer:{width:300}}),y=n(54),v=n(83),C=n(28),S=n(198),w=n(192);function L(e){var t,n,i,r=e.id,o=e.chatName,c=e.enterChat,u=Object(a.useState)([]),d=s()(u,2),f=d[0],j=d[1];return Object(a.useEffect)((function(){return h.collection("chats").doc(r).collection("messages").orderBy("timestamp").onSnapshot((function(e){return j(e.docs.map((function(e){return e.data()})))}))})),Object(p.jsxs)(l.ListItem,{onPress:function(){return c(r,o)},bottomDivider:!0,children:[Object(p.jsx)(l.Avatar,{rounded:!0,source:{uri:null==f||null==(t=f[0])?void 0:t.photoURL}}),Object(p.jsxs)(l.ListItem.Content,{children:[Object(p.jsx)(l.ListItem.Title,{style:{fontWeight:"800"},children:o}),Object(p.jsxs)(l.ListItem.Subtitle,{numberOfLines:1,ellipsizeMode:"tail",children:[null==f||null==(n=f[0])?void 0:n.displayName," : ",null==f||null==(i=f[0])?void 0:i.message]})]})]},r)}var T=function(e){var t=e.navigation,n=Object(a.useState)([]),i=s()(n,2),r=i[0],o=i[1],c=function(){b.signOut().then((function(){t.replace("Login")}))};Object(a.useEffect)((function(){return h.collection("chats").onSnapshot((function(e){return o(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(a.useLayoutEffect)((function(){t.setOptions({title:"Signal",headerStyle:{backgroundColor:"#fff"},headerTitleStyle:{color:"#000"},headerTinColor:"#000",headerLeft:function(){var e;return Object(p.jsx)(u.default,{style:{marginLeft:15},children:Object(p.jsx)(C.default,{onPress:c,activeOpacity:.5,children:Object(p.jsx)(l.Avatar,{rounded:!0,source:{uri:null==b||null==(e=b.currentUser)?void 0:e.photoURL}})})})},headerRight:function(){return Object(p.jsxs)(u.default,{style:{flexDirection:"row",justifyContent:"space-between",width:80,marginRight:20},children:[Object(p.jsx)(C.default,{activeOpacity:.5,children:Object(p.jsx)(S.default,{name:"camerao",size:24,color:"black"})}),Object(p.jsx)(C.default,{onPress:function(){return t.navigate("AddChat")},activeOpacity:.5,children:Object(p.jsx)(w.default,{name:"pencil",size:24,color:"black"})})]})}})}),[t]);var d=function(e,n){t.navigate("Chat",{id:e,chatName:n})};return Object(p.jsx)(v.default,{children:Object(p.jsx)(y.default,{style:E.container,children:r.map((function(e){var t=e.id,n=e.data.chatName;return Object(p.jsx)(L,{id:t,chatName:n,enterChat:d},t)}))})})},E=i.default.create({container:{height:"100%"}}),I=n(29),R=n.n(I),k=n(23),B=n(123),P=function(e){var t=e.navigation,n=Object(a.useState)(""),i=s()(n,2),r=i[0],o=i[1];Object(a.useLayoutEffect)((function(){t.setOptions({title:"Add a new chat",headerBackTitle:"Chats"})}),[t]);var c=function(){var e=R()((function*(){yield h.collection("chats").add({chatName:r}).then((function(){t.goBack()})).catch((function(e){return alert(e)}))}));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)(u.default,{style:A.container,children:[Object(p.jsx)(k.default,{children:"AddChatScreen"}),Object(p.jsx)(l.Input,{placeholder:"Enter chat name",value:r,onChangeText:function(e){return o(e)},onSubmitEditing:c,leftIcon:Object(p.jsx)(B.default,{name:"wechat",type:"antdesign",size:24,color:"black"})}),Object(p.jsx)(l.Button,{disabled:!r,onPress:c,title:"Create new Chat"})]})},A=i.default.create({container:{backgroundColor:"white",padding:30,height:"100%"}}),N=n(7),U=n(88),z=n(108),W=n(46),D=n(67),F=n(186),H=n(174);function V(e){var t=e.navigation,n=e.route,i=Object(a.useState)(""),r=s()(i,2),o=r[0],c=r[1],f=Object(a.useState)([]),g=s()(f,2),m=g[0],x=g[1];Object(a.useLayoutEffect)((function(){t.setOptions({title:"Chat",headerTitleAlign:"left",headerTitle:function(){var e;return Object(p.jsxs)(u.default,{style:{flexDirection:"row",alignItems:"center"},children:[Object(p.jsx)(C.default,{onPress:function(){return t.navigate("Home")},activeOpacity:.5,children:Object(p.jsx)(l.Avatar,{rounded:!0,source:{uri:null==(e=m[0])?void 0:e.data.photoURL}})}),Object(p.jsx)(k.default,{style:{color:"#fff",marginLeft:10,fontWeight:"700"},children:n.params.chatName})]})},headerLeft:function(){return Object(p.jsx)(C.default,{})},headerRight:function(){return Object(p.jsxs)(u.default,{style:{flexDirection:"row",justifyContent:"space-between",width:80,marginRight:20},children:[Object(p.jsx)(C.default,{children:Object(p.jsx)(F.default,{name:"video-camera",size:24,color:"#fff"})}),Object(p.jsx)(C.default,{children:Object(p.jsx)(H.default,{name:"call",size:24,color:"#fff"})})]})}})}),[t,m]);var O=function(){U.default.dismiss(),h.collection("chats").doc(n.params.id).collection("messages").add({timestamp:j.default.firestore.FieldValue.serverTimestamp(),message:o,displayName:b.currentUser.displayName,email:b.currentUser.email,photoURL:b.currentUser.photoURL}),c("")};return Object(a.useLayoutEffect)((function(){return h.collection("chats").doc(n.params.id).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return x(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[n]),Object(p.jsxs)(v.default,{style:{flex:1,backgroundColor:"#fff"},children:[Object(p.jsx)(W.default,{style:"light"}),Object(p.jsx)(d.default,{keyboardVerticalOffset:90,behavior:"ios"===N.default.OS?"padding":null,style:J.container,children:Object(p.jsx)(D.default,{onPress:U.default.dismiss,children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(y.default,{contentContainerStyle:{paddingTop:15},children:m.map((function(e){var t=e.id,n=e.data;return n.email===b.currentUser.email?Object(p.jsxs)(u.default,{style:J.receiver,children:[Object(p.jsx)(l.Avatar,{position:"absolute",containerStyle:{position:"absolute",bottom:-15,right:-5},rounded:!0,bottom:-15,right:-5,size:30,source:{uri:n.photoURL}}),Object(p.jsx)(k.default,{style:J.receiverText,children:n.message})]},t):Object(p.jsxs)(u.default,{style:J.sender,children:[Object(p.jsx)(l.Avatar,{position:"absolute",containerStyle:{position:"absolute",bottom:-15,left:-5},rounded:!0,bottom:-15,left:-5,size:30,source:{uri:n.photoURL}}),Object(p.jsx)(k.default,{style:J.senderText,children:n.message}),Object(p.jsx)(k.default,{style:J.senderName,children:n.displayName})]},t)}))}),Object(p.jsxs)(u.default,{style:J.footer,children:[Object(p.jsx)(z.default,{value:o,onChangeText:function(e){return c(e)},onSubmitEditing:O,placeholder:"Single Message",style:J.textInput}),Object(p.jsx)(C.default,{onPress:O,activeOpacity:.5,children:Object(p.jsx)(H.default,{name:"send",size:24,color:"#2B68E6"})})]})]})})})]})}var J=i.default.create({container:{flex:1},footer:{flexDirection:"row",alignItems:"center",width:"100%",padding:15},textInput:{bottom:0,height:40,flex:1,marginRight:15,backgroundColor:"#ECECEC",padding:10,color:"gray",borderRadius:30},senderText:{color:"#fff",fontWeight:"500",marginLeft:10,marginBottom:15},senderName:{left:10,paddingRight:10,fontSize:10,color:"#fff"},receiver:{padding:15,backgroundColor:"#ECECEC",alignSelf:"flex-end",borderRadius:20,marginRight:15,marginBottom:20,maxWidth:"80%",position:"relative"},sender:{padding:15,backgroundColor:"#2068E6",alignSelf:"flex-start",borderRadius:20,margin:15,maxWidth:"80%",position:"relative"},receiverText:{color:"#000",fontWeight:"500",marginLeft:10}}),K=Object(o.default)(),M={headerStyle:{backgroundColor:"#2C6BED"},headerTitleStyle:{color:"white"},headerTintColor:"white"};function q(){return Object(p.jsx)(r.default,{children:Object(p.jsxs)(K.Navigator,{screenOptions:M,children:[Object(p.jsx)(K.Screen,{name:"Login",component:g}),Object(p.jsx)(K.Screen,{name:"Register",component:x}),Object(p.jsx)(K.Screen,{name:"Home",component:T}),Object(p.jsx)(K.Screen,{name:"AddChat",component:P}),Object(p.jsx)(K.Screen,{name:"Chat",component:V})]})})}i.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}})},234:function(e,t,n){e.exports=n(317)}},[[234,1,2]]]);
//# sourceMappingURL=app.26f7e91e.chunk.js.map