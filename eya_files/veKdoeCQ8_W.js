;/*FB_PKG_DELIM*/

__d("LSSetMessengerRestrict",["LSIssueNewTask"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[],f;return c.seq([function(e){return c.seq([function(b){return c.fe(c.ftr(c.db.table(7).fetch([[[a[0]]]]),function(b){return c.i64.eq(b.id,a[0])&&c.i64.eq([0,1],[0,1])}),function(b){var c=b.update;b.item;return c({pendingMessengerRestrictAction:a[1]})})},function(e){return d[0]=new c.Map(),d[0].set("restrictee_id",a[0]),d[0].set("request_id",a[2]),d[0].set("messenger_restrict_action",a[1]),d[1]=c.toJSON(d[0]),c.sp(b("LSIssueNewTask"),"messenger_restrict",[0,367],d[1],f,f,[0,0],[0,0],f,f,[0,0])}])},function(a){return c.resolve(e)}])}e.exports=a}),null);
__d("LSUpdateThreadImage",["LSIssueNewTask"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[],f;return c.seq([function(e){return c.seq([function(b){return c.fe(c.ftr(c.db.table(9).fetch([[[a[0]]]]),function(b){return c.i64.eq(b.threadKey,a[0])&&c.i64.eq(b.threadType,[0,2])}),function(b){var c=b.update;b.item;return c({authorityLevel:[0,60],threadPictureUrl:a[2]===""?f:a[2],threadPictureUrlFallback:a[3],threadPictureUrlExpirationTimestampMs:a[4]})})},function(b){return c.db.table(9).fetch([[[a[0]]]]).next().then(function(a,b){var e=a.done;a=a.value;return e?d[0]=[0,1]:(b=a.item,d[5]=b.syncGroup,c.i64.neq(d[5],f)?d[4]=d[5]:d[4]=[0,1],d[0]=d[4])})},function(e){return d[2]=new c.Map(),d[2].set("thread_key",a[0]),d[2].set("image_id",a[1]),d[2].set("sync_group",d[0]),d[3]=c.toJSON(d[2]),c.sp(b("LSIssueNewTask"),"thread_image",[0,37],d[3],f,f,[0,0],[0,0],f,f,[0,0])}])},function(a){return c.resolve(e)}])}e.exports=a}),null);
__d("GroupsCometChatsChannelInviteLinkQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5354048408027065"}),null);
__d("GroupsCometChatsChannelInviteLinkQuery$Parameters",["GroupsCometChatsChannelInviteLinkQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("GroupsCometChatsChannelInviteLinkQuery_facebookRelayOperation"),metadata:{},name:"GroupsCometChatsChannelInviteLinkQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("GroupsCometChatsChannelInviteLink.entrypoint",["GroupsCometChatsChannelInviteLinkQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.threadID;return{queries:{queryReference:{parameters:c("GroupsCometChatsChannelInviteLinkQuery$Parameters"),variables:{threadID:a}}}}},root:c("JSResourceForInteraction")("GroupsCometChatsChannelInviteLink.react").__setRef("GroupsCometChatsChannelInviteLink.entrypoint")};g["default"]=a}),98);
__d("MAWInboxInfoButton.bs",["MDSListCell.react","MDSTextPairing.react","MWText.react","bs_caml_option","gkx","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=c("gkx")("571")&&c("gkx")("1968579")?"contained":"normal";a=h.forwardRef(function(a,b){var d=a.addOnStart,e=a.addOnStartStyle,f=a.subLabel,g=a.subLabelElement,j=a.label,k=a.onPress,l=a.testid,m=a.disabled,n=a.linkProps;a=a.addOnEnd;e=e!==void 0?e:i;m=m!==void 0?m:!1;if(d!==void 0){d=c("bs_caml_option").valFromOption(d);e=e==="contained"?h.jsx("div",{className:"x6s0dn4 x1qhmfi1 x14yjl9h xudhj91 x18nykt9 xww2gxu x78zum5 x1fgtraw xl56j7k x1264ykn",children:d}):d}else e=null;d={headline:h.jsx(c("MWText.react"),{type:"headline4",children:j}),level:4};j=f!==void 0?c("bs_caml_option").some(h.jsx(c("MWText.react"),{type:"meta3",children:f})):g!==void 0?c("bs_caml_option").some(h.jsx(c("MWText.react"),{type:"meta3",children:c("bs_caml_option").valFromOption(g)})):void 0;j!==void 0&&(d.meta=c("bs_caml_option").valFromOption(j));f={addOnStart:e,addOnStartVerticalAlign:"top",content:h.jsx(c("MDSTextPairing.react"),babelHelpers["extends"]({},d)),disabled:m,size:"medium"};a!==void 0&&(f.addOnEnd=c("bs_caml_option").valFromOption(a));l!==void 0&&(f.testid=l);k!==void 0&&(f.onPress=c("bs_caml_option").valFromOption(k));n!==void 0&&(f.linkProps=c("bs_caml_option").valFromOption(n));g=b==null?void 0:c("bs_caml_option").some(b);g!==void 0&&(f.ref=c("bs_caml_option").valFromOption(g));return h.jsx(c("MDSListCell.react"),babelHelpers["extends"]({},f))});g.defaultAddOnStartStyle=i;g.make=a}),98);
__d("MWRestrictDialogActionToggle.react",["nux:89","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=b("nux:89")==null?void 0:b("nux:89")("web_msgr_restrict_first_time_nux");function a(a){var b=a.children;a=a.dialogProps;if(i!=null&&!a.isRestricted)return h.jsx(i,{dialogProps:a,children:function(a,c){return b(a)}});else return b(a.onPress)}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("LsMessengerThreadDamagingActionsSourceTypeInt.bs",["bs_caml_int64"],(function(a,b,c,d,e,f){"use strict";a=b("bs_caml_int64").zero;c=b("bs_caml_int64").one;d=[0,2];f.defaultVal=a;f.gxac=c;f.cmsg=d}),null);
__d("MWMessengerResetBlockOrRestrictWC.bs",["Promise","ReQL.bs","UseBlockedUserInterstitial.bs","WebStorage.bs","bs_caml","promiseDone","react","useReStore"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function i(a){var e=d("WebStorage.bs").getLocalStorage();if(e===void 0)return;a=a.then(function(a){a.forEach(function(a){a=d("UseBlockedUserInterstitial.bs").getWarningCardStorageKey(a);return e.removeItem(a)});return b("Promise").resolve()});c("promiseDone")(a)}function a(a){var b=c("useReStore")();return h.useMemo(function(){return function(a){return i(d("ReQL.bs").toArray(d("ReQL.bs").map(d("ReQL.bs").filter(d("ReQL.bs").fromTableAscending(b.table("participants")),function(b){return c("bs_caml").i64_eq(b.contactId,a)}),function(a){return a.threadKey})))}},[b])}g.clearStoredWarningCardFlags=i;g.useHook=a}),98);
__d("MWLSMessengerRestrict.bs",["LS.bs","LSContactMessengerRestrictAction.bs","LSMessagingThreadTypeUtil.bs","LSSetMessengerRestrict","LsMessengerThreadDamagingActionsSourceTypeInt.bs","LsThreadType.bs","MWMessengerResetBlockOrRestrictWC.bs","bs_caml","bs_caml_int64","bs_curry","bs_int64","cr:3900","promiseDone","react","requireDeferred","useReStore"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=c("requireDeferred")("MessengerWellbeingRestrictFailedFalcoEvent.bs").__setRef("MWLSMessengerRestrict.bs"),j=c("requireDeferred")("MessengerWellbeingRestrictSucceededFalcoEvent.bs").__setRef("MWLSMessengerRestrict.bs"),k=c("requireDeferred")("MessengerWellbeingUnrestrictFailedFalcoEvent.bs").__setRef("MWLSMessengerRestrict.bs"),l=c("requireDeferred")("MessengerWellbeingUnrestrictSucceededFalcoEvent.bs").__setRef("MWLSMessengerRestrict.bs");function m(a,b,e,f,g,h){var i=e!==void 0?d("LSMessagingThreadTypeUtil.bs").isSecure(e.threadType):!1;e=e!==void 0?c("bs_caml").i64_eq(e.threadType,d("LsThreadType.bs").secureMessageOverWaOneToOne):!1;var k=e?17:1;a===d("LSContactMessengerRestrictAction.bs").unrestrict?l.onReady(function(a){return c("bs_curry")._1(a.log,function(){return{data:{entry_point:c("bs_caml_int64").to_int32(h),request_id:g,source:k,source_owner:0,source_type:d("LsMessengerThreadDamagingActionsSourceTypeInt.bs").defaultVal},other_user:{id:c("bs_int64").to_string(b)},thread:{id:i?"-1":c("bs_int64").to_string(f)}}})}):j.onReady(function(a){return c("bs_curry")._1(a.log,function(){return{data:{entry_point:c("bs_caml_int64").to_int32(h),request_id:g,source:k,source_owner:0,source_type:d("LsMessengerThreadDamagingActionsSourceTypeInt.bs").defaultVal},other_user:{id:c("bs_int64").to_string(b)},thread:{id:i?"-1":c("bs_int64").to_string(f)}}})})}function n(a,b,e,f,g,h){var j=e!==void 0?d("LSMessagingThreadTypeUtil.bs").isSecure(e.threadType):!1;e=e!==void 0?c("bs_caml").i64_eq(e.threadType,d("LsThreadType.bs").secureMessageOverWaOneToOne):!1;var l=e?17:1;a===d("LSContactMessengerRestrictAction.bs").unrestrict?k.onReady(function(a){return c("bs_curry")._1(a.log,function(){return{data:{entry_point:c("bs_caml_int64").to_int32(h),request_id:g,source:l,source_owner:0,source_type:d("LsMessengerThreadDamagingActionsSourceTypeInt.bs").defaultVal},other_user:{id:c("bs_int64").to_string(b)},thread:{id:j?"-1":c("bs_int64").to_string(f)}}})}):i.onReady(function(a){return c("bs_curry")._1(a.log,function(){return{data:{entry_point:c("bs_caml_int64").to_int32(h),request_id:g,source:l,source_owner:0,source_type:d("LsMessengerThreadDamagingActionsSourceTypeInt.bs").defaultVal},other_user:{id:c("bs_int64").to_string(b)},thread:{id:j?"-1":c("bs_int64").to_string(f)}}})})}function a(a,e,f,g,i){var j=c("useReStore")(),k=b("cr:3900")==null?function(a,b){}:c("bs_curry")._1(b("cr:3900").useHook),l=d("MWMessengerResetBlockOrRestrictWC.bs").useHook();return h.useCallback(function(b){c("promiseDone")(j.runInTransaction(function(e){return c("LSSetMessengerRestrict")(a,b,g,d("LS.bs").make(e))},"readwrite"),function(d){c("bs_curry")._2(k,a,b);c("bs_curry")._1(l,a);return m(b,a,e,f,g,i)},function(c){return n(b,a,e,f,g,i)})},[j,JSON.stringify(a),JSON.stringify(f),g,i])}e=m;f=n;a=a;g.$MessengerWellbeingRestrictFailedFalcoEvent$Deferred=i;g.$MessengerWellbeingRestrictSucceededFalcoEvent$Deferred=j;g.$MessengerWellbeingUnrestrictFailedFalcoEvent$Deferred=k;g.$MessengerWellbeingUnrestrictSucceededFalcoEvent$Deferred=l;g.$MAWMessengerRestrictUtils$requireCondXplat=b("cr:3900");g.logRestrictOrUnrestrictSuccess=e;g.logRestrictOrUnrestrictFailure=f;g.useHook=a}),98);
__d("UseMWRestrictContactOneOnOneThread.bs",["CurrentEnvironment","LSContactMessengerRestrictAction.bs","LSMessagingThreadTypeUtil.bs","LsMessengerThreadDamagingActionsSourceTypeInt.bs","LsThreadType.bs","MWChatStateActions.bs","MWChatStateV2.bs","MWLSMessengerRestrict.bs","MWLSThreadDisplayContext.bs","bs_caml","bs_caml_int64","bs_curry","bs_int64","requireDeferred","useCometRouterDispatcher","uuid"],(function(a,b,c,d,e,f,g){"use strict";var h=c("requireDeferred")("MessengerWellbeingRestrictTappedFalcoEvent.bs").__setRef("UseMWRestrictContactOneOnOneThread.bs"),i=c("requireDeferred")("MessengerWellbeingUnrestrictTappedFalcoEvent.bs").__setRef("UseMWRestrictContactOneOnOneThread.bs");function j(a,b,e,f,g,j){var k=f!==void 0?d("LSMessagingThreadTypeUtil.bs").isSecure(f.threadType):!1;f=f!==void 0?c("bs_caml").i64_eq(f.threadType,d("LsThreadType.bs").secureMessageOverWaOneToOne):!1;var l=f?17:1;a?i.onReady(function(a){return c("bs_curry")._1(a.log,function(){return{data:{entry_point:c("bs_caml_int64").to_int32(j),request_id:b,source:l,source_owner:0,source_type:d("LsMessengerThreadDamagingActionsSourceTypeInt.bs").defaultVal},other_user:{id:c("bs_int64").to_string(e)},thread:{id:k?"-1":c("bs_int64").to_string(g)}}})}):h.onReady(function(a){return c("bs_curry")._1(a.log,function(){return{data:{entry_point:c("bs_caml_int64").to_int32(j),request_id:b,source:l,source_owner:0,source_type:d("LsMessengerThreadDamagingActionsSourceTypeInt.bs").defaultVal},other_user:{id:c("bs_int64").to_string(e)},thread:{id:k?"-1":c("bs_int64").to_string(g)}}})})}function a(a,b,e,f,g){var h=c("uuid")(),i=d("MWLSMessengerRestrict.bs").useHook(a,b,e,h,f),k=c("useCometRouterDispatcher")(),l=d("MWLSThreadDisplayContext.bs").useHook(),m=d("MWChatStateV2.bs").useDispatch();return function(n){j(g,h,a,b,e,f);c("bs_curry")._1(i,g?d("LSContactMessengerRestrictAction.bs").unrestrict:d("LSContactMessengerRestrictAction.bs").restrict);!g&&l==="Inbox"&&!(k==null)&&k.go(c("CurrentEnvironment").messengerdotcom?"/":"/messages");if(!g)return c("bs_curry")._1(m,d("MWChatStateActions.bs").closeTabByThreadKey(Date.now(),e))}}b=j;e=a;g.$MessengerWellbeingRestrictTappedFalcoEvent$Deferred=h;g.$MessengerWellbeingUnrestrictTappedFalcoEvent$Deferred=i;g.logRestrictOrUnrestrictTapped=b;g.useHook=e}),98);
__d("MWInboxInfoMessengerRestrict.bs",["fbt","ix","LSContactBitOffset.bs","LSContactCapabilityBitOffset.bs","LSContactMessengerRestrictAction.bs","MAWInboxInfoButton.bs","MWIcon.react","MWInboxInfoPrivacyAndSupportSectionIcons.bs","MWMenuItem.react","MWRestrictDialogActionToggle.react","ReQL.bs","ReQLSubscription.bs","TetraButton.react","UseMWRestrictContactOneOnOneThread.bs","bs_belt_Option","bs_curry","fbicon","react","useReStore"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function k(a){var b=a.buttonSource,e=a.buttonTitle,f=a.isPendingState,g=a.onPress;a=j.useCallback(function(a){return c("bs_curry")._1(g)},[g]);switch(b){case"CHAT_TAB_SETTINGS":return j.jsx(c("MWMenuItem.react"),{disabled:f,icon:d("fbicon")._(i("995804"),20),onClick:a,primaryText:e,testid:void 0});case"RESTRICT_COMPOSER":return j.jsx(c("TetraButton.react"),{disabled:f,label:e,onPress:a,type:"secondary"});default:return j.jsx(d("MAWInboxInfoButton.bs").make,{addOnStart:j.jsx(c("MWIcon.react"),{icon:f?d("MWInboxInfoPrivacyAndSupportSectionIcons.bs").RestrictMessagesPendingState.icon:d("MWInboxInfoPrivacyAndSupportSectionIcons.bs").RestrictMessages.icon}),disabled:f,label:e,onPress:a,testid:void 0})}}b={make:k};function a(a){var b=a.buttonSource,e=a.contactId,f=a.loggingEntryPoint,g=a.thread;a=a.threadKey;var i=c("useReStore")(),l=d("ReQLSubscription.bs").useFirst(j.useMemo(function(){return d("ReQL.bs").getKeyRange(d("ReQL.bs").fromTableAscending(i.table("contacts")),{hd:e,tl:0})},[JSON.stringify(e),i])),m=c("bs_belt_Option").mapWithDefault(l,!1,function(a){return c("bs_belt_Option").getWithDefault(d("LSContactBitOffset.bs").has(d("LSContactCapabilityBitOffset.bs").restrictPlaced,a),!1)}),n=c("bs_belt_Option").mapWithDefault(d("ReQLSubscription.bs").useFirst(j.useMemo(function(){return d("ReQL.bs").getKeyRange(d("ReQL.bs").fromTableAscending(i.table("contacts")),{hd:e,tl:0})},[JSON.stringify(e),i])),[0,10],function(a){a=a.pendingMessengerRestrictAction;if(a!==void 0)return a;else return[0,10]}),o=n===d("LSContactMessengerRestrictAction.bs").restrict||n===d("LSContactMessengerRestrictAction.bs").unrestrict,p=b==="RESTRICT_COMPOSER"?h._("__JHASH__YZSK15am9Ug__JHASH__"):m?h._("__JHASH__NHBatIuQaK9__JHASH__"):h._("__JHASH__ttAO1drM5D3__JHASH__");n=n===d("LSContactMessengerRestrictAction.bs").unrestrict?h._("__JHASH___WXinC0t7Ah__JHASH__"):h._("__JHASH__9a46dloGnuc__JHASH__");g=d("UseMWRestrictContactOneOnOneThread.bs").useHook(e,g,a,f,m);var q=o?n:p;if(l!==void 0)return j.jsx(c("MWRestrictDialogActionToggle.react"),{dialogProps:{isRestricted:m,onPress:g,restrictedUser:l},children:function(a){return j.jsx(k,{buttonSource:b,buttonTitle:q,isPendingState:o,onPress:a})}});else return null}e=a;f=b;a=e;g.RestrictButton=f;g.make=a}),98);
__d("MessengerRestrictButtonSource.bs",[],(function(a,b,c,d,e,f){"use strict";a="THREAD_DETAIL_SETTINGS";b="RESTRICT_COMPOSER";c="CHAT_TAB_SETTINGS";f.thread_detail_settings=a;f.restrict_composer=b;f.chat_tab_settings=c}),66);
__d("MWCMBotStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("__JHASH__K0E4NNoKNtJ__JHASH__");b=h._("__JHASH__sbctGC-UNw4__JHASH__");g.addedToChatLegend=a;g.notAddedToChatLegend=b}),98);
__d("MWCMChannelLinkShareTrigger.bs",["CometCardedDialogLoadingState.re","CometEntryPointDialogTrigger.react","GroupsCometChatsChannelInviteLink.entrypoint","bs_int64","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.children;a=a.thread;return h.jsx(c("CometEntryPointDialogTrigger.react"),{dialogEntryPoint:c("GroupsCometChatsChannelInviteLink.entrypoint"),fallback:function(a){return h.jsx(d("CometCardedDialogLoadingState.re").make,{})},preloadParams:{threadID:c("bs_int64").to_string(a.threadKey)},children:b})}a.displayName=a.name+" [from "+f.id+"]";b=a;e=b;g.make=e}),98);
__d("MWInboxInfoActionsSectionIcons.bs",["cr:1724557"],(function(a,b,c,d,e,f,g){"use strict";g.$MDSInboxInfoActionsSectionIcons$OR$TetraInboxInfoActionsSectionIcons$requireCond=a=b("cr:1724557");g.EditNicknames=a.EditNicknames;g.ChangeChatName=a.ChangeChatName;g.ChangePhoto=a.ChangePhoto;g.Search=a.Search;g.LeaveChat=a.LeaveChat}),98);
__d("TetraInboxInfoActionsSectionIcons.bs",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("603566"),20);b="primary";c={alt:void 0,"aria-label":void 0,"aria-labelledby":void 0,color:b,disabled:void 0,icon:a,linkProps:void 0,onHoverIn:void 0,onHoverOut:void 0,onPress:void 0,ref:void 0,size:void 0,testid:void 0,type:"icon"};e={icon:a,primaryAddOn:c};f=d("fbicon")._(h("477831"),20);b="primary";a={alt:void 0,"aria-label":void 0,"aria-labelledby":void 0,color:b,disabled:void 0,icon:f,linkProps:void 0,onHoverIn:void 0,onHoverOut:void 0,onPress:void 0,ref:void 0,size:void 0,testid:void 0,type:"icon"};c={icon:f,primaryAddOn:a};b=d("fbicon")._(h("540023"),20);f="primary";a={alt:void 0,"aria-label":void 0,"aria-labelledby":void 0,color:f,disabled:void 0,icon:b,linkProps:void 0,onHoverIn:void 0,onHoverOut:void 0,onPress:void 0,ref:void 0,size:void 0,testid:void 0,type:"icon"};f={icon:b,primaryAddOn:a};b=d("fbicon")._(h("491286"),20);a="primary";a={alt:void 0,"aria-label":void 0,"aria-labelledby":void 0,color:a,disabled:void 0,icon:b,linkProps:void 0,onHoverIn:void 0,onHoverOut:void 0,onPress:void 0,ref:void 0,size:void 0,testid:void 0,type:"icon"};b={icon:b,primaryAddOn:a};a=d("fbicon")._(h("538183"),20);d="primary";h={alt:void 0,"aria-label":void 0,"aria-labelledby":void 0,color:d,disabled:void 0,icon:a,linkProps:void 0,onHoverIn:void 0,onHoverOut:void 0,onPress:void 0,ref:void 0,size:void 0,testid:void 0,type:"icon"};d={icon:a,primaryAddOn:h};g.EditNicknames=e;g.ChangeChatName=c;g.ChangePhoto=f;g.Search=b;g.LeaveChat=d}),98);
__d("MWV2EditPhotoUploader.bs",["fbt","CometFileSelector.react","DTSG","LS.bs","LSUpdateThreadImage","Promise","bs_belt_Array","bs_belt_Option","bs_caml_option","bs_curry","cometAsyncFetch","cometPushToast","promiseDone","react","recoverableViolation","useReStore"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");h._("__JHASH__K4v4HWgVO3X__JHASH__");function a(a){var e=a.children,f=a.thread,g=c("useReStore")(),h=i.useCallback(function(a,b){var e=g.runInTransaction(function(e){return c("LSUpdateThreadImage")(f.threadKey,a,b!==void 0?c("bs_caml_option").valFromOption(b):void 0,void 0,void 0,d("LS.bs").make(e))},"readwrite");c("promiseDone")(e)},[g,JSON.stringify(f.threadKey)]),j=function(a){d("cometPushToast").cometPushErrorToast({message:"Unable to set group picture"})};a=function(a){a=a.item(0);if(a==null){c("recoverableViolation")("file input onChange without any files?","messenger");return j()}var e=new FormData();e.set("images_only",!0);e.set("fb_dtsg",d("DTSG").getToken());e.set("attachment[]",a,a.name);a=c("cometAsyncFetch")("/ajax/mercury/upload.php",{data:{},formData:e,method:"POST"}).then(function(a){a=c("bs_belt_Option").map(c("bs_belt_Array").get(c("bs_belt_Option").mapWithDefault(a==null?void 0:c("bs_caml_option").some(a),[],function(a){return a.metadata}),0),function(a){return[a.image_id,a.src]});a!==void 0?h(a[0],a[1]):j();return b("Promise").resolve()})["catch"](function(a){j();c("recoverableViolation")(a.toString(),"messenger");return b("Promise").resolve()});c("promiseDone")(a)};return i.jsx(c("CometFileSelector.react"),{accept:[".jpg",".png",".jpeg",".bmp",".tif",".tiff"],onFilesSelected:a,children:c("bs_curry").__1(e)})}a.displayName=a.name+" [from "+f.id+"]";e=a;h=e;g.make=h}),98);
__d("MWColorWheelIcon.bs",["CometSVGIcon.react","MWPColorUtils.bs","MWPThreadTheme.bs","bs_caml_int32","bs_int64","gkx","react","useCometUniqueID","useSetAttributeRef"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=c("gkx")("571")?"24":"20",j=c("gkx")("571")?"8":"10";function a(a){a=d("MWPThreadTheme.bs").useHook();var b=a.threadTheme,e=a.gradientColors.sort(function(a,b){return c("bs_int64").compare(a.gradientIndex,b.gradientIndex)}).map(function(a){return d("MWPColorUtils.bs").int64ToHex(a.color)});e.length===0&&e.push(d("MWPColorUtils.bs").int64ToHex(b.fallbackColor));e.length===1&&e.push(e[0]);a=h.jsx("linearGradient",{gradientTransform:"rotate(90)",children:e.map(function(a,b){var d=c("bs_caml_int32").div(100,e.length-1|0);d=String(Math.imul(b,d))+"%";return h.jsx("stop",{offset:d,stopColor:a},String(b))})});var f=c("useCometUniqueID")(),g=c("useSetAttributeRef")("id",f);f=c("useSetAttributeRef")("mask","url(#"+f+")");b="mw_edit_theme_svg:"+b.accessibilityLabel;return h.jsxs(c("CometSVGIcon.react"),{color:a,"data-testid":void 0,size:i,viewBox:"0 0 20 20",children:[h.jsx("defs",{children:h.jsxs("mask",{ref:g,children:[h.jsx("rect",{fill:"white",height:"100%",width:"100%"}),h.jsx("circle",{cx:"10",cy:"10",fill:"black",r:"3"})]})}),h.jsx("circle",{cx:"10",cy:"10",r:j,ref:f})]})}a.displayName=a.name+" [from "+f.id+"]";b=a;e=b;g.make=e}),98);
__d("MAWEphemeralSettingUtil.bs",["LSContactBitOffset.bs","LSContactBlockedByViewerStatus.bs","LSContactCapabilityBitOffset.bs","LSMessagingThreadTypeUtil.bs","MAWMessageRequestUtil.bs","MWPActor.bs","ReQL.bs","ReQLSubscription.bs","SortedAsyncIterable.bs","bs_belt_Option","bs_caml","react","useReStore"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=d("MWPActor.bs").useActor(),e=c("useReStore")(),f=d("ReQLSubscription.bs").useFirst(h.useMemo(function(){if(d("LSMessagingThreadTypeUtil.bs").isOneToOne(a.threadType)&&d("LSMessagingThreadTypeUtil.bs").isSecure(a.threadType))return d("ReQL.bs").map(d("ReQL.bs").filter(d("ReQL.bs").mergeJoin(d("ReQL.bs").getKeyRange(d("ReQL.bs").fromTableAscending(e.table("participants")),{hd:a.threadKey,tl:0}),d("ReQL.bs").fromTableAscending(e.table("contacts"))),function(a){return c("bs_caml").i64_neq(a[1].id,b)}),function(a){return a[1]});else return d("SortedAsyncIterable.bs").empty()},[e,JSON.stringify(a.threadKey),JSON.stringify(b)]));if(f===void 0)return!1;var g=c("bs_belt_Option").getWithDefault(d("LSContactBitOffset.bs").has(d("LSContactCapabilityBitOffset.bs").viewerIsUnconnected,f),!1),i=c("bs_caml").i64_eq(f.blockedByViewerStatus,d("LSContactBlockedByViewerStatus.bs").unblocked);f=d("MAWMessageRequestUtil.bs").isMessageRequestV2(a,f);if(!f&&!g)return i;else return!1}b=a;g.useIsEphemeralSettingEnabled=b}),98);
__d("LsIgnoreTappedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("707");c=b("FalcoLoggerInternal").create("ls_ignore_tapped",a);e.exports=c}),null);
__d("XCometGroupLandingControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/groupslanding/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);