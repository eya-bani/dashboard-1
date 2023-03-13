;/*FB_PKG_DELIM*/

__d("MWChatStateV2IsFlyoutOpen.bs",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a.openFlyoutWatermark!==0}f.isFlyoutOpen=a}),66);
__d("MWChatHeadPicture.bs",["ix","BaseGlimmer.react","MWChatFacepile.bs","MWChatProfile.bs","MWIcon.react","fbicon","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b="x1cdi11e-B";var j={chatHeadIntroAnim:{animationDirection:"xpz12be",animationDuration:"x4b6v7d",animationFillMode:"x10e4vud",animationIterationCount:"x1v7wizp",animationName:"xxjl4ni",animationTimingFunction:"x84okpw",$$css:!0},dropShadow:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",boxShadow:"x1qeybcx",":hover_boxShadow":"x19xcq9t",$$css:!0},headGlimmer:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",height:"xsdox4t",position:"x1n2onr6",width:"x1useyqa",$$css:!0},withBackground:{backgroundColor:"xcrg951",$$css:!0},withOverflowBackground:{alignItems:"x6s0dn4",backgroundColor:"xcrg951",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",display:"x78zum5",height:"xsdox4t",justifyContent:"xl56j7k",width:"x1useyqa",$$css:!0}};function a(a){var b=a.children,e=a.images,f=a.noFacepile;a=a.noDropShadow;f=f!==void 0?f:!1;a=a!==void 0?a:!1;var g=e.length;if(g!==1)if(g!==0)if(f)return i.jsxs("div",{className:c("stylex")(a?!1:j.dropShadow,j.withOverflowBackground),children:[i.jsx(c("MWIcon.react"),{icon:d("fbicon")._(h("481920"),24)}),b]});else return i.jsx(d("MWChatFacepile.bs").make,{borderBetweenImages:!1,firstParticipantURI:e[0],secondParticipantURI:e[1],shadow:!0,size:48,children:b});else return i.jsx("div",{className:"xcrg951 x14yjl9h xudhj91 x18nykt9 xww2gxu xsdox4t x1n2onr6 x1useyqa",children:i.jsx(c("BaseGlimmer.react"),{index:1,theme:"dark",children:b})});g=e[0];return i.jsx("div",{className:c("stylex")(a?!1:j.dropShadow,j.chatHeadIntroAnim),children:i.jsx(d("MWChatProfile.bs").make,{size:48,src:g,children:b})})}a.displayName=a.name+" [from "+f.id+"]";e=a;g.chatheadAppear=b;g.make=e}),98);
__d("MWV2ChatHeadButton.bs",["CometPressable.react","bs_caml_option","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={button:{appearance:"xjyslct",backgroundColor:"xjbqb8w",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",height:"xsdox4t",marginTop:"xdj266r",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x1mh8g0r",transitionDuration:"xx6bhzk",transitionProperty:"x11xpdln",transitionTimingFunction:"x9lcvmn",width:"x1useyqa",$$css:!0},container:{alignItems:"x6s0dn4",display:"x78zum5",height:"xsdox4t",justifyContent:"xl56j7k",marginBottom:"xyorhqc",position:"x10l6tqk",width:"x1useyqa",$$css:!0}};function a(a){var b=a.children;a=a.style;return h.jsx("div",{className:"x6s0dn4 x78zum5 xsdox4t xl56j7k xyorhqc x10l6tqk x1useyqa",style:a,children:b})}a.displayName=a.name+" [from "+f.id+"]";e={make:a};function b(a,b){var d=a.ariaDescribedBy,e=a.ariaLabel,f=a.children,g=a.onFocusChange,j=a.onHoverChange,k=a.onHoverIn,l=a.onHoverOut,m=a.onPress;a=a.testid;f={children:f,overlayDisabled:!0,xstyle:function(a){return[i.button]}};e!==void 0&&(f["aria-label"]=c("bs_caml_option").valFromOption(e));e=b==null?void 0:c("bs_caml_option").some(b);e!==void 0&&(f.ref=c("bs_caml_option").valFromOption(e));a!==void 0&&(f.testid=c("bs_caml_option").valFromOption(a));j!==void 0&&(f.onHoverChange=c("bs_caml_option").valFromOption(j));k!==void 0&&(f.onHoverIn=c("bs_caml_option").valFromOption(k));l!==void 0&&(f.onHoverOut=c("bs_caml_option").valFromOption(l));g!==void 0&&(f.onFocusChange=c("bs_caml_option").valFromOption(g));m!==void 0&&(f.onPress=c("bs_caml_option").valFromOption(m));d!==void 0&&(f["aria-describedby"]=c("bs_caml_option").valFromOption(d));return h.jsx(c("CometPressable.react"),babelHelpers["extends"]({},f))}b.displayName=b.name+" [from "+f.id+"]";d=h.forwardRef(b);g.Container=e;g.make=d}),98);
__d("MWV2ChatHeadCloseButton.bs",["fbt","ix","CometPressable.react","MWIcon.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k={closeButton:{alignItems:"x6s0dn4",backgroundColor:"xcrg951",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",display:"x78zum5",end:"x1adoouj",height:"x1qx5ct2",justifyContent:"xl56j7k",opacity:"xg01cxk",position:"x10l6tqk",top:"x1fo6t33",transform:"x1f85oc2",transitionDuration:"x19bguh7",transitionProperty:"x6o7n8i",width:"xw4jnvo",$$css:!0},visible:{opacity:"x1hc1fzr",transform:"x3oybdh",$$css:!0}};function a(a){var b=a.isVisible,e=a.onFocusChange,f=a.onHoverChange;a=a.onPress;return j.jsx(c("CometPressable.react"),{"aria-label":h._("__JHASH__SolP4Av4egw__JHASH__"),onFocusChange:e,onHoverChange:f,onPress:a,xstyle:function(a){return[k.closeButton,b||a.focused?k.visible:!1]},children:j.jsx(c("MWIcon.react"),{icon:d("fbicon")._(i("478231"),12)})})}a.displayName=a.name+" [from "+f.id+"]";b=a;g.make=b}),98);
__d("MWV2ChatHeadFlyout.bs",["fbt","CometBadge.react","LSThreadTitle.bs","Locale","MWLSThreadSnippetForDisplay","MWPIsThreadUnread.bs","MWText.react","bs_caml_option","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j={container:{backgroundColor:"xcrg951",borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",bottom:"x1ey2m1c",boxShadow:"x1ot33o7",boxSizing:"x9f619",display:"x78zum5",end:"x92rtbv",flexDirection:"xdt5ytf",height:"xnnlda6",maxWidth:"x256u9z",minWidth:"xktpd3l",paddingEnd:"x1iji9kk",paddingStart:"x1sln4lm",position:"x10l6tqk",$$css:!0},containerWithSubtitle:{height:"xwzfr38",$$css:!0},gradientLTR:{backgroundImage:"x1ov1ned",$$css:!0},gradientRTL:{backgroundImage:"xwntvv8",$$css:!0},openChatArrowPointer:{borderTopEndRadius:"xevpo8y",bottom:"x1doy451",end:"x1923su1",height:"xlup9mm",position:"x10l6tqk",width:"x1kky2od",$$css:!0},openChatArrowPointerShadow:{boxShadow:"x1ot33o7",$$css:!0},spacer:{flexGrow:"x1iyjqo2",$$css:!0}},k=d("Locale").isRTL(),l=k?-45:45;function a(a){var b=a.id,e=a.subtitle;a=a.thread;var f=d("MWLSThreadSnippetForDisplay").MWLSThreadSnippetForDisplay(a),g=e!==void 0;return i.jsxs("div",{"data-testid":void 0,id:b,children:[i.jsx("div",{className:"xevpo8y x1doy451 x1923su1 xlup9mm x10l6tqk x1kky2od x1ot33o7",style:{transform:"rotate("+l+"deg)"}}),i.jsxs("div",{className:c("stylex")(j.container,g?j.containerWithSubtitle:!1),children:[i.jsx("div",{className:"x1iyjqo2"}),i.jsx("div",{"aria-hidden":!0,children:i.jsx(c("MWText.react"),{color:"primary",numberOfLines:1,type:"headlineEmphasized4",children:i.jsx(d("LSThreadTitle.bs").make,{thread:a})})}),e!==void 0?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"x1iyjqo2"}),i.jsx(c("MWText.react"),{color:"secondary",numberOfLines:1,type:"headline4",children:c("bs_caml_option").valFromOption(e)})]}):null,i.jsx("div",{className:"x1iyjqo2"}),i.jsxs(c("MWText.react"),{color:"secondary",numberOfLines:1,type:"body3",children:[d("MWPIsThreadUnread.bs").isThreadUnread(a)?i.jsx(c("CometBadge.react"),{color:"blue",label:h._("__JHASH__l0d8BOpfm06__JHASH__").toString()}):null,f]}),i.jsx("div",{className:"x1iyjqo2"})]}),i.jsx("div",{className:"xevpo8y x1doy451 x1923su1 xlup9mm x10l6tqk x1kky2od"+(k?" xwntvv8":" x1ov1ned"),style:{transform:"rotate("+l+"deg)"}})]})}a.displayName=a.name+" [from "+f.id+"]";b=a;e=k;f=l;a=b;g.isRTL=e;g.rotation=f;g.make=a}),98);
__d("MWV2ChatHeadTypingIndicator.bs",["MWChatTypingIndicator.bs","ReQL.bs","ReQLSubscription.bs","ServerTime","bs_caml_int64","bs_caml_splice_call","bs_curry","bs_int64","clearTimeout","react","setTimeout","useReStore"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function i(a){var b=c("useReStore")();return d("ReQLSubscription.bs").useArray(h.useMemo(function(){return d("ReQL.bs").filter(d("ReQL.bs").getKeyRange(d("ReQL.bs").fromTableAscending(b.table("typing_indicator")),{hd:a,tl:0}),function(a){return d("ServerTime").getMillis()<c("bs_caml_int64").to_float(a.expirationTimestampMs)})},[b,c("bs_int64").to_string(a)]))}function a(a){a=a.threadKey;var b=h.useState(function(){return!1}),e=b[1],f=i(a);h.useEffect(function(){c("bs_curry")._1(e,function(a){return f.length>0});var a=f.map(function(a){return c("bs_caml_int64").to_float(a.expirationTimestampMs)});a=c("bs_caml_splice_call").spliceApply(Math.max,[a]);a=a-d("ServerTime").getMillis();var b=c("setTimeout")(function(a){return c("bs_curry")._1(e,function(a){return!1})},a);return function(a){c("clearTimeout")(b)}},[e,f]);if(b[0])return h.jsx("div",{className:"x6s0dn4 xcrg951 x1a2cdl4 xnhgr82 x1qt0ttw xgk8upj x1ey2m1c x78zum5 xds687c x1qx5ct2 xl56j7k x10l6tqk x1td3qas",children:h.jsx(d("MWChatTypingIndicator.bs").make,{})});else return null}b=a;g.make=b}),98);
__d("MWV2ChatHeadUnreadMessageCountBadge.bs",["fbt","CometNumberedBadge.react","MWPActor.bs","ReQL.bs","ReQLSubscription.bs","ReQLSuspense","bs_caml","bs_int64","react","stylex","useReStore"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j={badgeHidden:{opacity:"xg01cxk",$$css:!0},badgeShrunk:{transform:"x1f85oc2",$$css:!0},unreadBadge:{end:"x1adoouj",position:"x10l6tqk",top:"x1fo6t33",transitionDuration:"x19bguh7",transitionProperty:"x6o7n8i",$$css:!0}};function k(a){var b=c("useReStore")(),e=d("MWPActor.bs").useActor(),f=d("ReQLSubscription.bs").useFirst(i.useMemo(function(){return d("ReQL.bs").map(d("ReQL.bs").getKeyRange(d("ReQL.bs").fromTableAscending(b.table("threads")),{hd:a,tl:0}),function(f){return d("ReQLSuspense").toArray(d("ReQL.bs").filter(d("ReQL.bs").bounds(d("ReQL.bs").take(d("ReQL.bs").getKeyRange(d("ReQL.bs").fromTableDescending(b.table("messages")),{hd:a,tl:0}),20),{NAME:"greaterThan",VAL:{hd:f.lastReadWatermarkTimestampMs,tl:0}}),function(a){return c("bs_caml").i64_neq(a.senderId,e)})).length})},[b,c("bs_int64").to_string(e),c("bs_int64").to_string(a)]));if(f!==void 0)return f;else return 0}function a(a){var b=a.isVisible;a=a.threadKey;a=k(a);if(a>0)return i.jsx("div",{"aria-label":h._("__JHASH__oUEWSJWvKe9__JHASH__",[h._plural(a,"number")]),className:c("stylex")(j.unreadBadge,b?!1:j.badgeHidden),children:i.jsx(c("CometNumberedBadge.react"),{value:a})});else return i.jsx("div",{"aria-hidden":!0,className:"xg01cxk x1f85oc2"})}b=a;g.make=b}),98);
__d("MWV2ChatHead.bs",["fbt","CometContextualLayer.react","LSMediaUrl.bs","LSMessagingThreadTypeUtil.bs","MWCMInboxHeaderCommunityGroupName.react","MWCMThreadTypes.bs","MWChatHeadPicture.bs","MWChatStateActions.bs","MWChatStateV2.bs","MWChatStateV2IsFlyoutOpen.bs","MWFacepileBadge.bs","MWFacepileGetContactsToShow.bs","MWPActor.bs","MWPGetThreadTitle.bs","MWV2ChatHeadButton.bs","MWV2ChatHeadCloseButton.bs","MWV2ChatHeadFlyout.bs","MWV2ChatHeadTypingIndicator.bs","MWV2ChatHeadUnreadMessageCountBadge.bs","MWV2EnsureThatChatTabExists.bs","MWV2PreloadThread.bs","ReQL.bs","ReQLSubscription.bs","ReQLSuspense","SortedAsyncIterable.bs","bs_belt_Option","bs_curry","bs_int64","profilePhotoUtils","react","useCometUniqueID","useReStore"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||b("react");function j(a,c){var d=b("MWPActor.bs").useActor(),e=a.threadName;if(e!==void 0)return g._("__JHASH__8WUxbAIePCk__JHASH__",[g._param("name of conversation",e)]).toString();e=b("bs_belt_Option").getWithDefault(b("MWPGetThreadTitle.bs").computeThreadTitle(void 0,a,c,d),"");return g._("__JHASH__WVlVng4Euk___JHASH__",[g._param("chat participants",e)])}function k(a,c){var d=b("MWPActor.bs").useActor(),e=b("LSMediaUrl.bs").Thread.threadPictureUrl(a);if(e!==void 0)return[e];else return b("MWFacepileGetContactsToShow.bs").getContactsToShow(a,c,d).map(function(a){return b("LSMediaUrl.bs").Contact.profilePictureUrl(a)})}c={activeBadge:{position:"x10l6tqk",$$css:!0}};function l(a){var c=a.onFocusChange,d=a.onHoverChange,e=a.style,f=a.tab,g=a.thread,h=b("useReStore")(),l=b("MWChatStateV2.bs").useDispatch();a=function(a){return b("bs_curry")._1(l,b("MWChatStateActions.bs").maximizeTab(Date.now(),f.tabId))};var m=g.threadKey,n=i.useState(function(){return!1}),o=n[0],p=n[1];n=i.useState(function(){return!1});var q=n[0],r=n[1];n=function(a){return b("bs_curry")._1(l,b("MWChatStateActions.bs").closeTab(Date.now(),f.tabId))};var s=b("LSMessagingThreadTypeUtil.bs").isSecure(g.threadType),t=b("ReQLSuspense").useArray(function(){var a;return(a=b("ReQL.bs")).take(a.leftJoin(a.getKeyRange(a.fromTableAscending(h.table("participants")),{hd:g.threadKey,tl:0}),a.fromTableAscending(h.table("contacts"))),8)},[g.threadKey]),u=i.useRef(null),v=b("MWChatStateV2IsFlyoutOpen.bs").isFlyoutOpen(f),w=b("useCometUniqueID")(),x=j(g,t);t=t.map(function(a){return a[1]});t=k(g,t);var y=b("profilePhotoUtils").getBadgeSizeAndStrokeWidth(48),z=b("profilePhotoUtils").getBadgePosition(24);s=b("MWV2PreloadThread.bs").useHook(m,s);var A=b("MWCMThreadTypes.bs").isJoinedCMThread(g.threadType);A=A?i.jsx(b("MWCMInboxHeaderCommunityGroupName.react"),{thread:g}):null;return i.jsxs(b("MWV2ChatHeadButton.bs").Container.make,{style:e,children:[i.jsxs(b("MWV2ChatHeadButton.bs").make,{ariaDescribedBy:w,ariaLabel:x,onFocusChange:function(a){b("bs_curry")._1(r,function(b){return a});return b("bs_curry")._1(c,a)},onHoverChange:function(a){b("bs_curry")._1(p,function(b){return a});return b("bs_curry")._1(d,a)},onHoverIn:s[0],onHoverOut:s[1],onPress:a,children:[i.jsx("div",{ref:u,children:i.jsxs(b("MWChatHeadPicture.bs").make,{images:t,children:[i.jsx(b("MWV2ChatHeadUnreadMessageCountBadge.bs").make,{isVisible:!o&&!q,threadKey:m}),i.jsx("div",{className:"x10l6tqk",style:{bottom:z.bottom,left:z.left,right:z.right,transform:z.transform},children:i.jsx(b("MWFacepileBadge.bs").make,{size:y[0],thread:g})})]})}),o||q||v?i.jsx(b("CometContextualLayer.react"),{contextRef:u,children:i.jsx(b("MWV2ChatHeadFlyout.bs").make,{id:w,subtitle:A,thread:g})}):null,i.jsx(b("MWV2ChatHeadTypingIndicator.bs").make,{threadKey:m})]}),i.jsx(b("MWV2ChatHeadCloseButton.bs").make,{isVisible:o||q,onFocusChange:function(a){return b("bs_curry")._1(r,function(b){return a})},onHoverChange:function(a){return b("bs_curry")._1(p,function(b){return a})},onPress:n})]})}l.displayName=l.name+" [from "+e.id+"]";d={make:l};function a(a){var c=a.onFocusChange,d=a.onHoverChange,e=a.style,f=a.tab;a=a.threadKeyDescriptor;var g=b("useReStore")(),h=a.clientThreadKey,j=a.threadKey,k=b("bs_int64").to_string(j),m=JSON.stringify(h);b("MWV2EnsureThatChatTabExists.bs").useHook(j,a.threadType);a=b("ReQLSubscription.bs").useFirst(i.useMemo(function(){return b("ReQL.bs").getKeyRange(b("ReQL.bs").fromTableAscending(g.table("threads")),{hd:j,tl:0})},[g,k]));k=b("ReQLSubscription.bs").useFirst(i.useMemo(function(){if(h!==void 0)return b("ReQL.bs").getKeyRange(b("ReQL.bs").fromIndexAscending(g.table("threads").index("clientThreadKey")),{hd:h,tl:0});else return b("SortedAsyncIterable.bs").empty()},[g,m]));m=a!==void 0?a:k!==void 0?k:void 0;if(m!==void 0)return i.jsx(l,{onFocusChange:c,onHoverChange:d,style:e,tab:f,thread:m});else return null}e=a;f.styles=c;f.Impl=d;f.make=e}),null);/*FB_PKG_DELIM*/
__d("MWV2ChatOverflowHead.bs",["fbt","ix","BaseGlimmer.react","CometContextualLayer.react","CometListCellGlimmer.react","CometMenuItemBase.react","CometTextWithEntities.react","LSMediaUrl.bs","LSThreadTitle.bs","MWChatHeadPicture.bs","MWChatStateActions.bs","MWChatStateV2.bs","MWChatTextTransform.bs","MWFacepileGetContactsToShow.bs","MWIcon.react","MWMenu.react","MWPActor.bs","MWText.react","MWV2ChatHeadButton.bs","MWV2EnsureThatChatTabExists.bs","ReQL.bs","ReQLSubscription.bs","ReQLSuspense","bs_belt_Option","bs_caml","bs_curry","fbicon","react","recoverableViolation","stylex","useReStore"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function k(a){var b=d("MWPActor.bs").useActor(),e=c("useReStore")();return c("bs_belt_Option").getWithDefault(d("ReQLSubscription.bs").useFirst(j.useMemo(function(){return d("ReQL.bs").map(d("ReQL.bs").getKeyRange(d("ReQL.bs").fromTableAscending(e.table("threads")),{hd:a,tl:0}),function(f){return d("ReQLSuspense").toArray(d("ReQL.bs").filter(d("ReQL.bs").bounds(d("ReQL.bs").take(d("ReQL.bs").getKeyRange(d("ReQL.bs").fromTableDescending(e.table("messages")),{hd:a,tl:0}),20),{NAME:"greaterThan",VAL:{hd:f.lastReadWatermarkTimestampMs,tl:0}}),function(a){return c("bs_caml").i64_neq(a.senderId,b)})).length})},[e,JSON.stringify(b),JSON.stringify(a)])),0)}function l(a){a=a.thread;var b=k(a.threadKey);return j.jsxs(j.Fragment,{children:[j.jsx(d("LSThreadTitle.bs").make,{thread:a}),j.jsx(c("CometTextWithEntities.react"),{text:h._("__JHASH__-HzxiMQUhNs__JHASH__",[h._param("unread message count",String(b))]),transforms:d("MWChatTextTransform.bs").epdTextTransforms})]})}b={make:l,useUnreadCount:k};var m={auxVisible:{visibility:"xnpuxes",$$css:!0},auxWrapper:{display:"x78zum5",visibility:"xlshs6z",$$css:!0},glimmer:{height:"xc9qbxq",minWidth:"x5w4yej",$$css:!0}};function n(a){var b=a.closeTab,e=a.isItemHovered,f=a.setItemIsHovered;return j.jsx("div",{className:c("stylex")(m.auxWrapper,e?m.auxVisible:!1),children:j.jsx(c("MWIcon.react"),{"aria-label":h._("__JHASH__LLeka0bmVM0__JHASH__"),color:"secondary",icon:d("fbicon")._(i("478231"),12),onHoverIn:function(a){return c("bs_curry")._1(f,function(a){return!0})},onHoverOut:function(a){return c("bs_curry")._1(f,function(a){return!1})},onPress:b})})}n.displayName=n.name+" [from "+f.id+"]";e={make:n,styles:m};var o={glimmer:{height:"xc9qbxq",minWidth:"x5w4yej",$$css:!0}};function p(a){var b=a.descriptor,e=a.setParentHoverState,f=a.tab,g=c("useReStore")();a=d("ReQLSubscription.bs").useFirst(j.useMemo(function(){return d("ReQL.bs").getKeyRange(d("ReQL.bs").fromTableAscending(g.table("threads")),{hd:b.threadKey,tl:0})},[g,JSON.stringify(b.threadKey)]));var h=d("MWChatStateV2.bs").useDispatch();d("MWV2EnsureThatChatTabExists.bs").useHook(b.threadKey,b.threadType);var i=j.useState(function(){return!1}),k=i[1];if(a!==void 0)return j.jsx(c("CometMenuItemBase.react"),{aux:j.jsx(n,{closeTab:function(a){return c("bs_curry")._1(h,d("MWChatStateActions.bs").closeTab(Date.now(),f.tabId))},isItemHovered:i[0],setItemIsHovered:k,tab:f}),onClick:function(a){c("bs_curry")._1(e,function(a){return!1});return c("bs_curry")._1(h,d("MWChatStateActions.bs").maximizeTab(Date.now(),f.tabId))},onHoverIn:function(a){return c("bs_curry")._1(k,function(a){return!0})},onHoverOut:function(a){return c("bs_curry")._1(k,function(a){return!1})},primaryText:j.jsx(l,{thread:a})});else return j.jsx("div",{className:"xc9qbxq x5w4yej",children:j.jsx(c("CometListCellGlimmer.react"),{imageStyle:"none"})})}o={make:p,styles:o};function q(a){var b=a.excessHeads,d=a.setParentHoverState;return j.jsx(c("MWMenu.react"),{size:"full",truncate:!0,withArrow:!0,children:b.map(function(a){var b=a.tabType;if(b.TAG!==0)return j.jsx(p,{descriptor:b._0,setParentHoverState:d,tab:a},String(a.tabId));c("recoverableViolation")("Compose tab shouldn't be part of excess tabs","messenger_web_product");return null})})}q.displayName=q.name+" [from "+f.id+"]";var r={make:q},s={overflowCount:{alignItems:"x6s0dn4",backgroundColor:"x18l40ae",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",display:"x78zum5",height:"xsdox4t",justifyContent:"xl56j7k",position:"x10l6tqk",top:"x13vifvy",width:"x1useyqa",$$css:!0}};function t(a){var b=a.count;a=a.thread;a=d("MWFacepileGetContactsToShow.bs").useHook(a).map(function(a){return d("LSMediaUrl.bs").Contact.profilePictureUrl(a)});return j.jsx(d("MWChatHeadPicture.bs").make,{images:a,noDropShadow:!0,noFacepile:!0,children:j.jsx("div",{className:"x6s0dn4 x18l40ae x14yjl9h xudhj91 x18nykt9 xww2gxu x78zum5 xsdox4t xl56j7k x10l6tqk x13vifvy x1useyqa",children:j.jsx(c("MWText.react"),{color:"white",type:"bodyLink3",children:h._("__JHASH__RM0bWy2OLZa__JHASH__",[h._param("chat count",String(b))])})})})}t.displayName=t.name+" [from "+f.id+"]";s={make:t,styles:s};var u={glimmer:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",height:"x5yr21d",width:"xh8yej3",$$css:!0}};function v(a){var b=a.count,e=a.tab;d("MWV2EnsureThatChatTabExists.bs").useHook(e.threadKey,e.threadType);var f=c("useReStore")();a=d("ReQLSubscription.bs").useFirst(j.useMemo(function(){return d("ReQL.bs").getKeyRange(d("ReQL.bs").fromTableAscending(f.table("threads")),{hd:e.threadKey,tl:0})},[f,JSON.stringify(e.threadKey)]));if(a!==void 0)return j.jsx(t,{count:b,thread:a});else return j.jsx(c("BaseGlimmer.react"),{index:1,theme:"dark",xstyle:u.glimmer})}var w={make:v,styles:u};function a(a){var b=a.excessHeads,e=a.onHoverChange;a=a.style;var f=j.useState(function(){return!1}),g=f[1],i=b.length,k=j.useRef(null);if(i<=0)return null;var l=b[0].tabType,m;l.TAG===0?(c("recoverableViolation")("Compose tab shouldn't be part of excess tabs","messenger_web_product"),m=null):m=j.jsx(v,{count:i,tab:l._0});return j.jsx(d("MWV2ChatHeadButton.bs").Container.make,{style:a,children:j.jsx(d("MWV2ChatHeadButton.bs").make,{ariaLabel:h._("__JHASH__cpB5BWXmx9z__JHASH__",[h._param("chat count",String(i))]),ref:k,children:j.jsxs("div",{onMouseEnter:function(a){c("bs_curry")._1(g,function(a){return!0});return c("bs_curry")._1(e,!0)},onMouseLeave:function(a){c("bs_curry")._1(g,function(a){return!1});return c("bs_curry")._1(e,!1)},children:[m,f[0]?j.jsx(c("CometContextualLayer.react"),{align:"middle",contextRef:k,position:"end",children:j.jsx(q,{excessHeads:b,setParentHoverState:g})}):null]})})})}a.displayName=a.name+" [from "+f.id+"]";f=a;a=b;b=e;e=o;o=r;r=s;s=w;w=f;g.MenuItemTitle=a;g.CloseButton=b;g.MenuItem=e;g.HoverMenu=o;g.Facepile=r;g.FirstThreadPicture=s;g.make=w}),98);
__d("MarketplaceComposerBulkUploadRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5673950159370697"}),null);