;/*FB_PKG_DELIM*/

__d("CometLoggedInAccountSwitcherRowWithUpdateText_account.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometLoggedInAccountSwitcherRowWithUpdateText_account",selections:[{args:null,kind:"FragmentSpread",name:"useCometLoggedInAccountSwitcherRemoveAccount_account"},{alias:null,args:null,kind:"ScalarField",name:"unread_notification_count",storageKey:null},{alias:null,args:null,concreteType:"LoggedInAccountSwitcherAccountForm",kind:"LinkedField",name:"form",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"useCometLoggedInAccountSwitcherLogoutAndSwitchAccountsForm_form"}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:"switcher_profile_picture",args:[{kind:"Literal",name:"height",value:40},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null}],storageKey:null}],storageKey:null}],type:"LoggedInAccountSwitcherAccount",abstractKey:null};e.exports=a}),null);
__d("CometLoggedInAccountSwitcherRowWithUpdateText_query.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometLoggedInAccountSwitcherRowWithUpdateText_query",selections:[{args:null,kind:"FragmentSpread",name:"useCometLoggedInAccountSwitcherLogoutAndSwitchAccountsForm_query"}],type:"Query",abstractKey:null};e.exports=a}),null);
__d("CometLoggedInAccountSwitcherRowWithUpdateText.react",["fbt","ix","CometBadge.react","CometLoggedInAccountSwitcherRowWithUpdateText_account.graphql","CometLoggedInAccountSwitcherRowWithUpdateText_query.graphql","CometRelay","TetraListCell.react","WebPixelRatio","fbicon","react","recoverableViolation","useCometLoggedInAccountSwitcherLogoutAndSwitchAccountsForm.react","useCometLoggedInAccountSwitcherRemoveAccount","useProfileSwitcherEngagementClickCallback"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=d("react");function a(a){var e=d("CometRelay").useFragment(j!==void 0?j:j=b("CometLoggedInAccountSwitcherRowWithUpdateText_query.graphql"),a.query);a=d("CometRelay").useFragment(k!==void 0?k:k=b("CometLoggedInAccountSwitcherRowWithUpdateText_account.graphql"),a.account);var f=a.form,g=a.unread_notification_count,m=a.user;f=c("useCometLoggedInAccountSwitcherLogoutAndSwitchAccountsForm.react")({form$key:f,query$key:e});var n=c("useCometLoggedInAccountSwitcherRemoveAccount")(a);e={product_bucket:"profile_account_switcher",subsurface:"switch_account_menu",surface:"navigation"};var o=c("useProfileSwitcherEngagementClickCallback")(babelHelpers["extends"]({},e,{item_type:"account"})),p=c("useProfileSwitcherEngagementClickCallback")(babelHelpers["extends"]({},e,{item_type:"remove"}));if(m==null){c("recoverableViolation")("A user is required to render a CometLoggedInAccountSwitcherRowWithUpdateText","comet_ui");return null}if(f==null){c("recoverableViolation")("A form is required to render a CometLoggedInAccountSwitcherRowWithUpdateText","comet_ui");return null}g==null&&c("recoverableViolation")("We should have an unread_notification_count but we don't","comet_ui");a=f[0];var q=f[1];return l.jsx(c("TetraListCell.react"),{addOnPrimary:{shape:"circle",size:40,source:{height:(f=m==null?void 0:(e=m.switcher_profile_picture)==null?void 0:e.height)!=null?f:40,scale:(f=m==null?void 0:(e=m.switcher_profile_picture)==null?void 0:e.scale)!=null?f:d("WebPixelRatio").get(),uri:(f=m==null?void 0:(e=m.switcher_profile_picture)==null?void 0:e.uri)!=null?f:"",width:(f=m==null?void 0:(e=m.switcher_profile_picture)==null?void 0:e.width)!=null?f:40},type:"profile-photo"},addOnSecondary:{"aria-label":h._("__JHASH__CFDMZlvBr3g__JHASH__"),color:"secondary",icon:d("fbicon")._(i("478234"),24),onPress:function(){p(),n()},type:"icon"},body:g!==null&&g!==0?l.jsxs(l.Fragment,{children:[l.jsx(c("CometBadge.react"),{}),h._("__JHASH__rWl8FuqwF6G__JHASH__",[h._plural(g||0,"number")])]}):null,headline:l.jsxs(l.Fragment,{children:[m==null?void 0:m.name,a]}),level:4,onPress:function(){o(),q()}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometRadioGroupList.react",["BaseView.react","CometRadioGroupListContext","TetraText.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useMemo;function a(a){var b=a.children,d=a.component,e=d===void 0?"div":d;d=a.label;var f=a.name,g=a.onValueChange,j=a.subheader,k=a.testid,l=a.value;k=a.xstyle;a=i(function(){return{name:f,onValueChange:g,value:l}},[f,g,l]);return h.jsxs(c("BaseView.react"),{children:[j&&h.jsx(c("TetraText.react"),{isSemanticHeading:!0,type:"headline3",children:j}),h.jsx(c("CometRadioGroupListContext").Provider,{value:a,children:h.jsx(e,{"aria-label":d,className:c("stylex")(k),role:"radiogroup",testid:void 0,children:h.Children.map(b,function(a){var b=e==="ul",c=b?"li":"div";return h.jsx(c,{className:""+(b?" x3ct3a4 xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd":""),children:a})})})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometRadioListCellPressable.react",["ix","CometIcon.react","CometListCellPressable.react","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a,b){var e,f=a.radioAddonComponent,g=a.radioAddonProps;a=babelHelpers.objectWithoutPropertiesLoose(a,["radioAddonComponent","radioAddonProps"]);e=(e=a.disabled)!=null?e:!1;var j=g.checked;j=j===void 0?!1:j;var k=g.checkedIcon,l=g.color,m=g.disabled;m=m===void 0?!1:m;var n=g.icon;g["aria-label"];g["aria-labelledby"];g.onBlur;g.onChange;g.onFocus;g.onValueChange;var o=babelHelpers.objectWithoutPropertiesLoose(g,["aria-label","aria-labelledby","onBlur","onChange","onFocus","onValueChange"]);k=(k=k)!=null?k:d("fbicon")._(h("621399"),20);n=(n=n)!=null?n:d("fbicon")._(h("545517"),20);var p=f!=null;o=f!=null?i.jsx(f,babelHelpers["extends"]({},o)):i.jsx(c("CometIcon.react"),{"aria-hidden":!0,color:e||m?"disabled":j?(f=l)!=null?f:"highlight":"secondary",icon:j?k:n});e=i.jsx(c("CometListCellPressable.react"),babelHelpers["extends"]({},a,{addOnEnd:o,"aria-checked":p?void 0:!!g.checked,focusable:!p,ref:b,role:p?"presentation":"radio"}));return p?i.jsx("label",{children:e}):e}a.displayName=a.name+" [from "+f.id+"]";b=i.forwardRef(a);g["default"]=b}),98);
__d("useOpenConversationsLogOut",["Promise","cr:3237","useCometLogout"],(function(a,b,c,d,e,f,g){"use strict";var h=b("cr:3237")?b("cr:3237")==null?void 0:b("cr:3237").useHook:function(){return function(){return b("Promise").resolve()}};function a(){var a=h(),c=d("useCometLogout").useCometLogout();return function(){return b("Promise").all([a(),c()]).then(function(a){b("Promise").resolve()})}}g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("cometReportBugDefaultOptions",["fbt","ix","fbicon"],(function(a,b,c,d,e,f,g,h,i){"use strict";a="public";b=h._("__JHASH__Sqzl58OucnB__JHASH__");c={addOnPrimary:{icon:d("fbicon")._(i("899558"),24),size:60,type:"contained-icon"},body:h._("__JHASH__5q7igOED7sX__JHASH__"),dialogTitle:h._("__JHASH__OPf0ZWrh9kh__JHASH__"),headline:h._("__JHASH__mBwCXx86-aM__JHASH__")};e={addOnPrimary:{icon:d("fbicon")._(i("502063"),24),size:60,type:"contained-icon"},body:h._("__JHASH__T0wDs12oUvR__JHASH__"),dialogTitle:h._("__JHASH__d8pLVqIL7yK__JHASH__"),headline:h._("__JHASH__06damxz0Ivb__JHASH__")};g.defaultProductListType=a;g.defaultInitialTitle=b;g.defaultFeedbackProblemTypeItem=c;g.defaultBugProblemTypeItem=e}),98);
__d("useCometReportBug",["fbt","CometCardedDialogLoadingStateLegacy.react","JSResourceForInteraction","cometReportBugDefaultOptions","promiseDone","react","useCometLazyDialog"],(function(a,b,c,d,e,f,g,h){"use strict";b=d("react");var i=c("react"),j=b.useCallback,k=b.useRef,l=c("JSResourceForInteraction")("CometBugReportingDialog.react").__setRef("useCometReportBug"),m=c("JSResourceForInteraction")("VideoPlayerShakaPerformanceLogger").__setRef("useCometReportBug"),n=!1;function a(a){var b=k(null),e=c("useCometLazyDialog")(l,function(b){return i.jsx(c("CometCardedDialogLoadingStateLegacy.react"),{onClose:b,title:a==null?h._("__JHASH__Sqzl58OucnB__JHASH__"):h._("__JHASH___hkwAd2dM-2__JHASH__",[h._param("product name",a)]),withCloseButton:!0})}),f=e[0];e=j(function(b,e){if(!n){var g;c("promiseDone")(m.load().then(function(a){a.flushQueuedLogs()}));f(babelHelpers["extends"]({productName:a},b,{bugProblemTypeItem:(g=b==null?void 0:b.bugProblemTypeItem)!=null?g:d("cometReportBugDefaultOptions").defaultBugProblemTypeItem,feedbackProblemTypeItem:(g=b==null?void 0:b.feedbackProblemTypeItem)!=null?g:d("cometReportBugDefaultOptions").defaultFeedbackProblemTypeItem,initialTitle:(g=b==null?void 0:b.initialTitle)!=null?g:d("cometReportBugDefaultOptions").defaultInitialTitle,productListType:(g=b==null?void 0:b.productListType)!=null?g:d("cometReportBugDefaultOptions").defaultProductListType}),function(){e!=null&&e(),n=!1});n=!0}},[f]);return[e,b]}g["default"]=a}),98);
__d("CixWarningScreensFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743358");c=b("FalcoLoggerInternal").create("cix_warning_screens",a);e.exports=c}),null);
__d("WarningScreenType",[],(function(a,b,c,d,e,f){a=Object.freeze({GRAPHIC:"Violence and Gore",HATE:"Hate",CHILD_ABUSE_NON_SEXUAL:"Child Abuse (non-sexual)",SENSITIVE:"Sensitive",CRUEL:"Cruel",MATURE_ONLY_14_AND_OVER:"Mature Only 14 And Over",SENSITIVE_TEXT:"Sensitive Text",FALSE_NEWS:"False News",FALSE_HEADLINE_NEWS:"False Headline News",MISLEADING_NEWS:"Misleading News",ALTERED_MEDIA:"Altered Media",MISSING_CONTEXT:"Missing Context",GOVERNMENT_CORRECTION:"Government Correction",CENSUS_BORDERLINE:"Census Borderline",WIDELY_DEBUNKED_HOAX_COVID:"Widely Debunked Hoax Covid",HEALTH_GENERIC:"Health Generic",GENERIC_INFORM_TREATMENT:"Generic Inform Treatment",CLIMATE_GENERIC_INFORM_TREATMENT:"Climate Science Generic Inform Treatment",NEWSWORTHY:"Newsworthy",SELF_APPLIED_GRAPHIC_VIOLENCE:"Self Applied Graphic Violence",CIVIC_VOTER_INFORM_TREATMENT:"Civic Voter Inform Treatment",CIVIC_VOTER_INFORM_TREATMENT_FOR_MM:"Civic Voter Inform Treatment For Myanmar",CIVIC_VOTER_INFORM_TREATMENT_FOR_BR:"Civic Voter Inform Treatment For Brazil",CIVIC_VOTER_INFORM_TREATMENT_FOR_ID:"Civic Voter Inform Treatment For Indonesia",CIVIC_FACTS_ABOUT_VOTING_INFORM_TREATMENT:"Civic Facts About Voting Inform Treatment",HACK_AND_LEAK:"Hack And Leak",GRAPHIC_MISINFO:"Graphic Misinfo",WIDELY_DEBUNKED_HOAX_VACCINE:"Widely Debunked Hoax Vaccine",WORK_RECRUITING_GROUP_POST:"Recruiting Group Post",USER_APPLIED:"User Applied",BLOCKS:"Blocks",MISINFORMATION:"Misinformation",GENERIC_CIVIC:"Generic Civic",COMPASS:"Compass",GENERIC_INFORM:"Generic Inform",DUMMY_GIT:"Dummy GIT",ANIMAL_VIOLENCE:"Animal Violence",POLITICAL:"Politically Charged",PROFANITY:"Profanity",CENSUS_MISINFO:"Census Misinfo",COVID_ELECTION_BORDERLINE:"Covd Election Borderline",OBJECTIONABLE:"Sexual"});f["default"]=a}),66);
__d("CometWarningScreenClientLogger",["CixWarningScreensFalcoEvent","WarningScreenType"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b,d=(b=a.contentIDRaw)==null?void 0:b.split(":").filter(function(a){return a!==""}).pop();c("CixWarningScreensFalcoEvent").log(function(){return{action:a.action,attribution_id_v2:a.attribution_id_v2,blocks_logging_data:a.blocksLoggingData,content_id_raw:d,event:a.event,inform_session_id:a.session_id,integrity_ui_element:a.integrityUIElement,product:a.product,render_type:a.renderType,story_ent_identifier_graphql_id:a.storyID,story_render_location:a.storyRenderLocation,surface:a.surface,top_warning_screen_category:h(a.objectionableCategory),vpvd:a.vpvd}})}function h(a){if(a==null)return null;a=a;return c("WarningScreenType")[a]}g.logInformTreatmentEvent=a}),98);
__d("StoriesArchiveCardStoreForBlue",[],(function(a,b,c,d,e,f){"use strict";a={DeletedStoryList:new Set(),SeenStoryList:new Set(),StoriesArchiveDataMap:new Map()};f["default"]=a}),66);