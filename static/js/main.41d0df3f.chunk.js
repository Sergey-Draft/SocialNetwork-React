(this["webpackJsonpSocialNetwork-React"]=this["webpackJsonpSocialNetwork-React"]||[]).push([[0],{100:function(e,t,s){},101:function(e,t,s){},102:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),n=s(27),c=s.n(n),r=(s(56),s(3)),o=(s(57),s(6)),l=s(19),u=s(2),d="ADD-MESSAGE",p="UPDATE-NEW-MESSAGE-TEXT",j="UPDATE-NEW-USER-ID",g={dialogs:[{id:1,name:"Andrew",imgurl:"https://w7.pngwing.com/pngs/985/915/png-transparent-superman-computer-icons-superhero-avatar-child-face-heroes.png"},{id:2,name:"Sveta",imgurl:"https://nchzd.ru/files/1244/1731/direktor.jpeg"},{id:3,name:"Sasha",imgurl:"https://im0-tub-by.yandex.net/i?id=53c063b1546b7597918e7ebd63ad8586&n=13"},{id:4,name:"Vladimir",imgurl:"https://pbs.twimg.com/profile_images/1057002966840827904/466s7Vf4.jpg"},{id:5,name:"Petya",imgurl:"https://banner2.cleanpng.com/20190717/icr/kisspng-computer-icons-race-14-business-avatar-application-5d2f03c184ded7.4186435015633622415443.jpg"}],newUserId:"1",messages:[{id:1,message:"Hello, How are you today?"},{id:2,message:"I am ok! And you?"},{id:3,message:"So, what do you wanna do today?"},{id:4,message:"Nah, I dunno. Play soccer.. or learn more coding perhaps.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:5,message:"Yo!"}],newMessage:"Hello!"},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(u.a)(Object(u.a)({},e),{},{messages:[].concat(Object(l.a)(e.messages),[{id:6,message:e.newMessage}])});case p:return Object(u.a)(Object(u.a)({},e),{},{newMessage:t.newMessageText});case j:return Object(u.a)(Object(u.a)({},e),{},{newUserId:t.newUserId});default:return e}},b=s(8),h=s(5),f=s.n(h),_=s(0),O=function(e){var t="/dialogs/"+e.id;return Object(_.jsxs)("div",{className:f.a.dialog,children:[Object(_.jsx)("img",{src:e.imgurl,alt:"img"}),Object(_.jsx)(b.b,{to:t,onClick:function(){var t=e.id;e.NewUserIdUpdate(t)},activeClassName:"active",children:e.name}),Object(_.jsx)("span",{className:f.a.numbers,children:"1"})]})},x=function(e){return e.message.id%2===0?Object(_.jsx)("div",{children:Object(_.jsxs)("div",{className:f.a.chat,children:[Object(_.jsx)("img",{src:"https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg",alt:"avatar",className:f.a.imgleft}),Object(_.jsxs)("p",{children:[e.message.id," ",e.message.message]}),Object(_.jsx)("span",{className:f.a.timeRight,children:"11:00"})]})}):Object(_.jsx)("div",{children:Object(_.jsxs)("div",{className:f.a.chat+" "+f.a.chatDark,children:[Object(_.jsx)("img",{src:"https://yt3.ggpht.com/ytc/AAUvwniT8TGYkstItBq_pP1SJj-NSrRQU7cAjajmPl9i_Q=s900-c-k-c0x00ffffff-no-rj",alt:"avatar",className:f.a.imgright}),Object(_.jsxs)("p",{children:[e.message.id," ",e.message.message]}),Object(_.jsx)("span",{className:f.a.timeRight,children:"11:00"})]})})},v=function(e){var t=e.dialogsPage,s=t.dialogs.map((function(t){return Object(_.jsx)(O,{name:t.name,id:t.id,imgurl:t.imgurl,NewUserIdUpdate:e.NewUserIdUpdate},t.id)})),a=i.a.createRef(),n=t.messages.map((function(e){return Object(_.jsx)(x,{message:e,id:e.id},e.id)}));return Object(_.jsxs)("div",{className:f.a.dialogs,children:[Object(_.jsx)("div",{className:f.a.dialogsItems,children:s}),Object(_.jsxs)("div",{className:f.a.messages,children:[n,Object(_.jsxs)("div",{className:f.a.sendArea,children:[Object(_.jsx)("input",{type:"text",placeholder:"Type your message...",className:f.a.postmessage,ref:a,onChange:function(t){var s=t.target.value;e.updateNewMessage(s)}}),Object(_.jsx)("button",{className:f.a.btn,onClick:function(t){e.addMessage(),a.current.value=""},children:"Send"})]})]})]})},N=Object(o.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{addMessage:function(){e({type:d})},updateNewMessage:function(t){e(function(e){return{type:p,newMessageText:e}}(t))},NewUserIdUpdate:function(t){e(function(e){return{type:j,newUserId:e}}(t))}}}))(v),w=s(47),k=s.n(w),P=function(){return Object(_.jsx)("header",{className:k.a.header,children:Object(_.jsx)("img",{src:"https://w7.pngwing.com/pngs/635/870/png-transparent-logo-flower-flower-purple-violet-logo.png",alt:"header"})})},y=s(21),U=s(22),T=s(24),C=s(23),L=s(11),S=s.n(L),R=(s(63),s(48)),D=s.n(R),I=s(18),M=s.n(I),F=function(e){Object(T.a)(s,e);var t=Object(C.a)(s);function s(e){var a;return Object(y.a)(this,s),(a=t.call(this)).getTrackListURL=function(e){a.props.setTrackListURL(e)},a.getTrackList=function(){M.a.get("https://cors-anywhere.herokuapp.com/".concat(a.props.tracklistURL)).then((function(e){a.props.setTrackList(e.data.data)}))},a.setCurrentLinkToState=function(e){a.props.setCurrentRadioLink(e)},a}return Object(U.a)(s,[{key:"componentDidMount",value:function(){var e=this;0===this.props.genre.length&&M.a.get("https://api.deezer.com/radio").then((function(t){e.props.setGenre(t.data.data)}))}},{key:"render",value:function(){var e=this;return Object(_.jsxs)("div",{children:[Object(_.jsx)("p",{children:"Music"}),this.props.currentRadioLink?Object(_.jsx)(D.a,{src:this.props.currentRadioLink,autoPlay:!0,controls:!0}):null,Object(_.jsx)("div",{className:S.a.play__list__wrapper,children:Object(_.jsx)("div",{className:S.a.play__list,children:Object(_.jsx)("div",{className:S.a.play__items,children:this.props.genre.slice(0,9).map((function(t){return Object(_.jsx)("div",{className:S.a.item,onClick:function(){e.getTrackListURL(t.tracklist),e.getTrackList()},children:Object(_.jsx)("div",{className:S.a.content__item,children:Object(_.jsxs)("a",{className:S.a.current__playlist,href:"#",children:[Object(_.jsx)("div",{className:S.a.lable,children:Object(_.jsx)("img",{src:t.picture_medium,alt:t.id})}),Object(_.jsx)("span",{className:S.a.title,children:t.title})]})})})}))})})}),this.props.tracklist.slice(0,10).map((function(t){return Object(_.jsxs)("div",{className:S.a.tracklist,children:[Object(_.jsx)("div",{className:S.a.trackTitle,onClick:function(){e.setCurrentLinkToState(t.preview)},children:t.title}),Object(_.jsx)("div",{className:S.a.playerComp}),Object(_.jsx)("div",{className:S.a.trackName,children:t.artist.name}),Object(_.jsx)("div",{})]})}))]})}}]),s}(i.a.Component),E="SET_GENRE",A="RADIO_LINK",z="TRACK_LIST_URL",B="SET_TRACK_LIST",G={genre:[],tracklist:[],currentRadioLink:"https://cdns-preview-1.dzcdn.net/stream/c-179bee1bfc65440d7df06d2246209699-4.mp3",tracklistURL:"https://api.deezer.com/radio/37151/tracks"},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(u.a)(Object(u.a)({},e),{},{genre:Object(l.a)(t.genre)});case A:return Object(u.a)(Object(u.a)({},e),{},{currentRadioLink:t.link});case z:return Object(u.a)(Object(u.a)({},e),{},{tracklistURL:t.tracklistURL});case B:return Object(u.a)(Object(u.a)({},e),{},{tracklist:Object(l.a)(t.tracklist)});default:return e}},K=Object(o.b)((function(e){return{genre:e.musicPage.genre,currentRadioLink:e.musicPage.currentRadioLink,tracklistURL:e.musicPage.tracklistURL,tracklist:e.musicPage.tracklist}}),(function(e){return{setGenre:function(t){e(function(e){return{type:E,genre:e}}(t))},setCurrentRadioLink:function(t){e(function(e){return{type:A,link:e}}(t))},setTrackListURL:function(t){e(function(e){return{type:z,tracklistURL:e}}(t))},setTrackList:function(t){e(function(e){return{type:B,tracklist:e}}(t))}}}))(F),Q=s(25),H=s.n(Q),J=function(e){var t=e.state.friends.map((function(e){return Object(_.jsx)("div",{className:H.a.item,children:Object(_.jsxs)(b.b,{to:"/dialogs/",children:[Object(_.jsx)("img",{src:e.imgurl,alt:"friend_avatar"}),Object(_.jsx)("span",{className:H.a.indicator})]})})}));return Object(_.jsxs)("div",{className:H.a.friends,children:[Object(_.jsx)("div",{className:H.a.title,children:Object(_.jsx)("div",{className:H.a.text,children:"Chat online"})}),Object(_.jsx)("div",{class:H.a.friendsItems,children:t})]})},Y=Object(o.b)((function(e){return{state:e.sideBar}}))(J),W=s(9),Z=s.n(W),V=function(e){return Object(_.jsxs)("nav",{className:Z.a.nav,children:[Object(_.jsx)("div",{className:"".concat(Z.a.item," ").concat(Z.a.active),children:Object(_.jsx)(b.b,{to:"/profile",activeClassName:Z.a.active,children:"Profile"})}),Object(_.jsx)("div",{className:Z.a.item,children:Object(_.jsx)(b.b,{to:"/dialogs",activeClassName:Z.a.active,children:"Messages"})}),Object(_.jsx)("div",{className:Z.a.item,children:Object(_.jsx)(b.b,{to:"/news",activeClassName:Z.a.active,children:"News"})}),Object(_.jsx)("div",{className:Z.a.item,children:Object(_.jsx)(b.b,{to:"/music",activeClassName:Z.a.active,children:"Music"})}),Object(_.jsx)("div",{className:Z.a.item,children:Object(_.jsx)(b.b,{to:"/settings",activeClassName:Z.a.active,children:"Settings"})}),Object(_.jsx)("div",{className:Z.a.item,children:Object(_.jsx)(b.b,{to:"/users",activeClassName:Z.a.active,children:"Users"})}),Object(_.jsx)("div",{children:Object(_.jsx)(Y,{})})]})},X="SET_DATA",$={dataNews:null},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(u.a)(Object(u.a)({},e),{},{dataNews:t.dataNews});default:return e}},te=(s(100),s.p+"static/media/preloader.1f38f3ab.svg"),se=function(){return Object(_.jsxs)("div",{style:{zIndex:1e3,position:"relative",top:"10%",left:"30%",height:"100vh",backgroundColor:"#fff"},children:[" ",Object(_.jsx)("img",{src:te,alt:"preloader..."})," "]})},ae=function(e){return e.dataNews?Object(_.jsxs)("div",{children:[Object(_.jsx)("a",{href:e.dataNews[0].url,children:e.dataNews[0].title}),Object(_.jsx)("img",{src:e.dataNews[0].urlToImage,alt:"title",style:{height:"200px",width:"200px"}})]}):Object(_.jsx)(se,{})},ie=function(e){Object(T.a)(s,e);var t=Object(C.a)(s);function s(e){var a;return Object(y.a)(this,s),(a=t.call(this)).componentDidMount=function(){M.a.get("https://newsapi.org/v2/everything?q=tesla&from=2021-10-10&sortBy=publishedAt&apiKey=bb82a5810e234f13b51b63d3bc4d52ba").then((function(e){a.props.setNewData(e.data.articles.slice(0,1))}))},a}return Object(U.a)(s,[{key:"render",value:function(){return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(ae,{dataNews:this.props.dataNews,setNewData:this.props.setNewData})})}}]),s}(i.a.Component),ne=Object(o.b)((function(e){return{dataNews:e.newsPage.dataNews}}),(function(e){return{setNewData:function(t){e(function(e){return{type:X,dataNews:e}}(t))}}}))(ie),ce="ADD-POST",re="UPDATE-NEW-POST-TEXT",oe="SET_USER_PROFILE",le={posts:[{id:1,post:"Hi",likesCount:"15"},{id:2,post:"How is your doing",likesCount:"15"},{id:3,post:"I am the first!",likesCount:"-15"},{id:4,post:"Youre not",likesCount:"5"}],newPostText:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",profile:null},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:return Object(u.a)(Object(u.a)({},e),{},{newPostText:"",posts:[].concat(Object(l.a)(e.posts),[{id:5,post:e.newPostText,likesCount:0}])});case re:return Object(u.a)(Object(u.a)({},e),{},{newPostText:t.newText});case oe:return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});default:return e}},de=s(33),pe=s.n(de),je=s(49),ge=s.n(je),me=function(e){return Object(_.jsxs)("div",{className:ge.a.item,children:[Object(_.jsx)("img",{src:"https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg",alt:"avatar"}),e.message,Object(_.jsx)("div",{children:Object(_.jsxs)("span",{children:[" Likes ",e.likes]})})]})},be=function(e){var t=e.posts.map((function(e){return Object(_.jsx)(me,{message:e.post,likes:e.likesCount},e.id)})),s=i.a.createRef();return Object(_.jsxs)("div",{className:pe.a.postsBlock,children:[Object(_.jsx)("h2",{children:"My posts"}),Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{children:Object(_.jsx)("textarea",{name:"",id:"",cols:"30",rows:"10",ref:s,onChange:function(t){var s=t.target.value;e.updateNewPostText(s)},value:e.newPostText})}),Object(_.jsx)("div",{children:Object(_.jsx)("button",{onClick:function(){e.addPost(),s.current.value=""},children:"Add Post"})})]}),Object(_.jsx)("div",{className:pe.a.posts,children:t})]})},he=Object(o.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{updateNewPostText:function(t){e(function(e){return{type:re,newText:e}}(t))},addPost:function(){e({type:ce})}}}))(be),fe=s(50),_e=s.n(fe),Oe=s(51),xe=s.n(Oe),ve=function(e){return e.profile?Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:"https://www.prelepapoezija.com/wp-content/uploads/2015/01/hed2.jpg"})}),Object(_.jsxs)("div",{className:xe.a.descriptionBlock,children:[Object(_.jsx)("div",{className:"intro",children:Object(_.jsx)("img",{src:e.profile.photos.large,alt:"userPhoto"})}),"ava+description"]})]}):Object(_.jsx)(se,{})},Ne=function(e){return Object(_.jsxs)("div",{className:_e.a.profileBox,children:[Object(_.jsx)(ve,{profile:e.profile}),Object(_.jsx)(he,{})]})},we=function(e){Object(T.a)(s,e);var t=Object(C.a)(s);function s(e){return Object(y.a)(this,s),t.call(this)}return Object(U.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.userId;t||(t=2),M.a.get("https://social-network.samuraijs.com/api/1.0/profile/"+t).then((function(t){e.props.setUserProfile(t.data)}))}},{key:"render",value:function(){return Object(_.jsx)(Ne,Object(u.a)(Object(u.a)({},this.props),{},{profile:this.props.profile}))}}]),s}(i.a.Component),ke=Object(r.e)(we),Pe=Object(o.b)((function(e){return{profile:e.profilePage.profile}}),{setUserProfile:function(e){return{type:oe,profile:e}}})(ke),ye=(s(101),function(){return Object(_.jsx)("div",{children:"Settings"})}),Ue="TOGGLE_FOLLOW",Te="SET_USERS",Ce="SET_CURRENT_PAGE",Le="SET_IS_FETCHING",Se={users:[],pageSize:20,totalUsersCount:400,currentPage:7,isFetching:!0},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ue:return Object(u.a)(Object(u.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(u.a)(Object(u.a)({},e),{},{followed:!e.followed}):e}))});case Te:return Object(u.a)(Object(u.a)({},e),{},{users:Object(l.a)(t.users)});case Ce:return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.currentPage});case Le:return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFetching});default:return e}},De=s(12),Ie=s.n(De),Me=s.p+"static/media/noavatar.c2c94b87.png",Fe=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),s=[],a=1;a<=t;a++)s.push(a);return Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:Ie.a.pagination,children:s.map((function(t){return Object(_.jsx)("span",{className:Ie.a.pageNumber+" "+(e.currentPage===t&&Ie.a.selectPage),onClick:function(){e.onPageChanged(t)},children:t})}))}),Object(_.jsx)("div",{className:Ie.a.users,children:e.users.map((function(t){return Object(_.jsxs)("div",{className:Ie.a.item,children:[Object(_.jsx)(b.b,{to:"/profile/"+t.id,children:Object(_.jsx)("div",{className:Ie.a.img})}),Object(_.jsxs)("div",{className:Ie.a.info,children:[Object(_.jsx)("img",{src:null===t.photos.small?Me:t.photos.small,alt:"avatar",className:Ie.a.avatar}),t.followed?Object(_.jsx)("span",{className:Ie.a.btn,onClick:function(){e.toggleFollow(t.id)},children:"Follow"}):Object(_.jsx)("span",{className:Ie.a.btn,onClick:function(){e.toggleFollow(t.id)},children:"UnFollow"}),Object(_.jsx)("p",{className:Ie.a.fullName,children:t.name}),Object(_.jsx)("p",{className:Ie.a.userStatus,children:t.status}),Object(_.jsx)("p",{className:Ie.a.userLocation,children:"Minsk City"})]})]},t.id)}))})]})},Ee=function(e){Object(T.a)(s,e);var t=Object(C.a)(s);function s(e){var a;return Object(y.a)(this,s),(a=t.call(this)).onPageChanged=function(e){a.props.setIsFetching(!0),a.props.setCurrentPage(e),I.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(a.props.currentPage,"&count=").concat(a.props.pageSize)).then((function(e){a.props.setIsFetching(!1),a.props.setUsers(e.data.items)}))},a}return Object(U.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.props.setIsFetching(!0),I.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(this.props.currentPage,"&count=").concat(this.props.pageSize)).then((function(t){e.props.setIsFetching(!1),e.props.setUsers(t.data.items)}))}},{key:"render",value:function(){return Object(_.jsxs)(_.Fragment,{children:[this.props.isFetching?Object(_.jsx)(se,{}):null,Object(_.jsx)(Fe,{users:this.props.users,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,toggleFollow:this.props.toggleFollow,onPageChanged:this.onPageChanged})]})}}]),s}(i.a.Component),Ae=Object(o.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching}}),{toggleFollow:function(e){return{type:Ue,userId:e}},setUsers:function(e){return{type:Te,users:e}},setCurrentPage:function(e){return{type:Ce,currentPage:e}},setIsFetching:function(e){return{type:Le,isFetching:e}}})(Ee),ze=function(e){return Object(_.jsxs)("div",{className:"app-wrapper",children:[Object(_.jsx)(P,{}),Object(_.jsx)(V,{}),Object(_.jsxs)("div",{className:"app-wrapper-content",children:[Object(_.jsx)(r.a,{path:"/profile/:userId?",children:Object(_.jsx)(Pe,{})}),Object(_.jsx)(r.a,{path:"/dialogs",render:function(){return Object(_.jsx)(N,{})}}),Object(_.jsx)(r.a,{path:"/news",render:function(){return Object(_.jsx)(ne,{})}}),Object(_.jsx)(r.a,{path:"/music",render:function(){return Object(_.jsx)(K,{})}}),Object(_.jsx)(r.a,{path:"/settings",component:ye}),Object(_.jsx)(r.a,{path:"/users",render:function(){return Object(_.jsx)(Ae,{})}})]})]})},Be=s(34),Ge={friends:[{id:1,imgurl:s.p+"static/media/user-3.5c342bb7.jpg"},{id:2,imgurl:s.p+"static/media/user2.f2ebe3cd.jpg"},{id:3,imgurl:s.p+"static/media/user3.09bbec6f.jpg"},{id:4,imgurl:"https://st3.depositphotos.com/1432405/19346/v/950/depositphotos_193462432-stock-illustration-businessman-icon-flat-style.jpg"},{id:5,imgurl:"https://st3.depositphotos.com/1432405/19346/v/950/depositphotos_193462432-stock-illustration-businessman-icon-flat-style.jpg"}]},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge;return e},Ke=Object(Be.a)({dialogsPage:m,profilePage:ue,sideBar:qe,usersPage:Re,musicPage:q,newsPage:ee}),Qe=Object(Be.b)(Ke);window.store=Qe;var He=Qe,Je=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,103)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,c=t.getTTFB;s(e),a(e),i(e),n(e),c(e)}))},Ye=function(){c.a.render(Object(_.jsx)(b.a,{children:Object(_.jsx)(o.a,{store:He,children:Object(_.jsx)(ze,{})})}),document.getElementById("root"))};Ye(),He.subscribe((function(){Ye()})),Je()},11:function(e,t,s){e.exports={play__list__wrapper:"Music_play__list__wrapper__2ezRR",play__list:"Music_play__list__3R0ZJ",play__items:"Music_play__items__1R8Dc",item:"Music_item__2iuEx",content__item:"Music_content__item__3vBVD",current__playlist:"Music_current__playlist__2EtOh",title:"Music_title__3pMP1",lable:"Music_lable__20kmj",tracklist:"Music_tracklist__39DYZ",trackTitle:"Music_trackTitle__13fxh"}},12:function(e,t,s){e.exports={users:"Users_users__Lxkz_",item:"Users_item__1THa6",img:"Users_img__mTtL1",info:"Users_info__3tnKd",avatar:"Users_avatar__L6e8k",fullName:"Users_fullName__p9Nmg",userStatus:"Users_userStatus__mIIC2",userLocation:"Users_userLocation__2aplT",btn:"Users_btn__74Y2j",pagination:"Users_pagination__3Jq9S",pageNumber:"Users_pageNumber__1q2Zw",selectPage:"Users_selectPage__NuJnG"}},25:function(e,t,s){e.exports={friends:"Friends_friends__1r11F",title:"Friends_title__1cYa7",text:"Friends_text__1MgZt",friendsItems:"Friends_friendsItems__11GFV",item:"Friends_item__3GJOW",indicator:"Friends_indicator__Rj6ux"}},33:function(e,t,s){e.exports={postsBlock:"MyPosts_postsBlock__24YgB",posts:"MyPosts_posts__3QKMA"}},47:function(e,t,s){e.exports={header:"Header_header__3PQSM"}},49:function(e,t,s){e.exports={item:"Post_item__-JjyQ"}},5:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__2jPsm",dialogsItems:"Dialogs_dialogsItems__12raU",dialog:"Dialogs_dialog__1UMoU",numbers:"Dialogs_numbers__3QSOj",active:"Dialogs_active__1v-7c",messages:"Dialogs_messages__2KXnq",chat:"Dialogs_chat__Fv8RD",chatDark:"Dialogs_chatDark__2jj3m",imgleft:"Dialogs_imgleft__2hyLK",imgright:"Dialogs_imgright__3zWWF",timeLeft:"Dialogs_timeLeft__2eUQj",timeRight:"Dialogs_timeRight__9vL1z",sendArea:"Dialogs_sendArea__1SMLQ",postmessage:"Dialogs_postmessage__3Y-xQ",btn:"Dialogs_btn__1ljwS"}},50:function(e,t,s){e.exports={profileBox:"Profile_profileBox__2oNnm"}},51:function(e,t,s){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__15Eq-"}},56:function(e,t,s){},57:function(e,t,s){},9:function(e,t,s){e.exports={nav:"Navbar_nav__2ZTXk",item:"Navbar_item__1OK0z",active:"Navbar_active___z_LE"}}},[[102,1,2]]]);
//# sourceMappingURL=main.41d0df3f.chunk.js.map