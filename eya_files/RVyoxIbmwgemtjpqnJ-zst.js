;/*FB_PKG_DELIM*/

__d("FriendingCometFriendRequestSendMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8349583301779785"}),null);
__d("FriendingCometFriendRequestSendMutation.graphql",["FriendingCometFriendRequestSendMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],c=[{kind:"Variable",name:"data",variableName:"input"}],d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},f=[{kind:"Literal",name:"action_type",value:"FRIEND"},{kind:"Literal",name:"render_location",value:"WWW_COMET_PROFILE"}],g={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"FriendingCometFriendRequestSendMutation",selections:[{alias:null,args:c,concreteType:"FriendRequestSendResponsePayload",kind:"LinkedField",name:"friend_request_send",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"friend_requestees",plural:!0,selections:[d,e,{alias:null,args:f,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileActionMutationUtils_action"}],storageKey:'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")'},{args:null,kind:"FragmentSpread",name:"ProfileCometTimelineTabTopBanner_user"}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"FriendingCometFriendRequestSendMutation",selections:[{alias:null,args:c,concreteType:"FriendRequestSendResponsePayload",kind:"LinkedField",name:"friend_request_send",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"friend_requestees",plural:!0,selections:[d,e,{alias:null,args:f,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[g,{kind:"TypeDiscriminator",abstractKey:"__isProfileAction"},{alias:null,args:[{kind:"Literal",name:"icon_color",value:"fds-black"},{kind:"Literal",name:"icon_size",value:"16"},{kind:"Literal",name:"icon_variant",value:"filled"},{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},d,{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_optimistic_update",storageKey:null}]}],storageKey:'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")'},{alias:null,args:[{kind:"Literal",name:"render_location",value:"TIMELINE_TAB_TOP"},{kind:"Literal",name:"supported",value:["ProfilePlusAdminNoticeRenderer","TransparencyInformContent","ProfileAppealBanner","ProfileBanner","ProfilePYMKBanner"]}],concreteType:null,kind:"LinkedField",name:"comet_profile_banner",plural:!1,selections:[g,{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometTimelineTabTopBanner_user",fragmentName:"ProfilePlusCometAdminNotice_cometProfileBanner",fragmentPropName:"cometProfileBanner",kind:"ModuleImport"}],type:"ProfilePlusAdminNoticeRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometTimelineTabTopBanner_user",fragmentName:"ProfileCometTransparencyInformBanner_cometProfileBanner",fragmentPropName:"cometProfileBanner",kind:"ModuleImport"}],type:"TransparencyInformContent",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometTimelineTabTopBanner_user",fragmentName:"ProfileCometAppealBanner_cometProfileBanner",fragmentPropName:"cometProfileBanner",kind:"ModuleImport"}],type:"ProfileAppealBanner",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometTimelineTabTopBanner_user",fragmentName:"ProfileCometBannerGeneric_cometProfileBanner",fragmentPropName:"cometProfileBanner",kind:"ModuleImport"}],type:"ProfileBanner",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometTimelineTabTopBanner_user",fragmentName:"FriendingCometProfilePYMKHScroll_cometProfileBanner",fragmentPropName:"cometProfileBanner",kind:"ModuleImport"}],type:"ProfilePYMKBanner",abstractKey:null},{kind:"InlineFragment",selections:[d],type:"Node",abstractKey:"__isNode"}],storageKey:'comet_profile_banner(render_location:"TIMELINE_TAB_TOP",supported:["ProfilePlusAdminNoticeRenderer","TransparencyInformContent","ProfileAppealBanner","ProfileBanner","ProfilePYMKBanner"])'}],storageKey:null}],storageKey:null}]},params:{id:b("FriendingCometFriendRequestSendMutation_facebookRelayOperation"),metadata:{},name:"FriendingCometFriendRequestSendMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("FriendRequestError",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({SELF_OVER_FRIEND_LIMIT:1431006,SELF_OVER_FRIEND_LIMIT_SUBSCRIBED:1431016,SIGMA_WARN:1407026});f["default"]=a}),66);
__d("FriendingCometErrorHandler.react",["fbt","CometRelayErrorHandling","FriendRequestError","JSResourceForInteraction","SilenceableErrorMessageUtils","cometPushToast","react","useCometLazyDialog"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react").useCallback,j=c("JSResourceForInteraction")("FriendingCometErrorDialog.react").__setRef("FriendingCometErrorHandler.react");function a(a){var b=c("useCometLazyDialog")(j),e=b[0],f=i(function(b){var g=d("SilenceableErrorMessageUtils").getMetadataFromError(b);if(d("SilenceableErrorMessageUtils").shouldHideErrorMessage(g))return;b.name==="NetworkTransportError"?d("cometPushToast").cometPushErrorToast({message:h._("__JHASH__J83gzDrVB2V__JHASH__")},5e3):(b.code===c("FriendRequestError").SELF_OVER_FRIEND_LIMIT||b.code===c("FriendRequestError").SELF_OVER_FRIEND_LIMIT_SUBSCRIBED||b.code===c("FriendRequestError").SIGMA_WARN)&&(d("CometRelayErrorHandling").markErrorAsHandled(b),e({addFriendErrorHandler:f,addFriendId:a.addFriendId,addFriendSource:a.addFriendSource,error:b}))},[a.addFriendId,a.addFriendSource,e]);return f}g.useFriendingErrorHandler=a}),98);
__d("ProfileActionFriendingMutationUtils",["fbt","ProfileActionMutationUtils","WebPixelRatio"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a,b){var c="";switch(a){case"ARE_FRIENDS":c=h._("__JHASH__kIlAncPZYc2__JHASH__").toString();break;case"CAN_REQUEST":c=h._("__JHASH__uAh7V35Fiq0__JHASH__").toString();break;case"INCOMING_REQUEST":c=h._("__JHASH__2MCmiN_h7kP__JHASH__").toString();break;case"OUTGOING_REQUEST":c=h._("__JHASH__UNPMiVpVS7t__JHASH__").toString();break}return{__typename:"ProfileActionFriendRequest",icon_image:{height:16*d("WebPixelRatio").get(),scale:d("WebPixelRatio").get(),uri:null,width:16*d("WebPixelRatio").get()},id:d("ProfileActionMutationUtils").getProfileActionID(b,1),is_optimistic_update:!0,title:{text:c}}}g.getOptimisticActionForFriendshipStatus=a}),98);
__d("FriendingCometFriendRequestSendMutation",["CometRelay","FriendingCometFriendRequestSendMutation.graphql","ProfileActionFriendingMutationUtils","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("FriendingCometFriendRequestSendMutation.graphql");function a(a){var b=a.acknowledgeWarn,c=a.environment,e=a.navigationChain,f=a.onError,g=a.profileRef,h=a.pymkLocation,j=a.receiverID;a=a.source;return d("CometRelay").commitMutation(c,{mutation:i,onError:f,optimisticResponse:{friend_request_send:{friend_requestees:[{comet_profile_banner:null,friendship_status:"OUTGOING_REQUEST",id:j,profile_action:d("ProfileActionFriendingMutationUtils").getOptimisticActionForFriendshipStatus("OUTGOING_REQUEST",j)}]}},variables:{input:{attribution_id_v2:e,friend_requestee_ids:[j],people_you_may_know_location:h,refs:[g],source:a,warn_ack_for_ids:b===!0?[j]:[]},scale:d("WebPixelRatio").get()}})}g.commit=a}),98);/*FB_PKG_DELIM*/
__d("CometStoryAggregatedUsersDialogContent_textWithEntities.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometStoryAggregatedUsersDialogContent_textWithEntities",selections:[{alias:null,args:null,concreteType:"AggregatedEntitiesAtRange",kind:"LinkedField",name:"aggregated_ranges",plural:!0,selections:[{alias:null,args:null,concreteType:"AllEntitiesFromAggregatedRangeConnection",kind:"LinkedField",name:"all_entities",plural:!1,selections:[{alias:null,args:null,concreteType:"AllEntitiesFromAggregatedRangeEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:a,type:"User",abstractKey:null},{kind:"InlineFragment",selections:a,type:"Page",abstractKey:null},{args:null,kind:"FragmentSpread",name:"CometProfileListUserRow_user"}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"TextWithEntities",abstractKey:null}}();e.exports=a}),null);
__d("CometStoryAggregatedUsersTitleDialogQuery.graphql",["CometStoryAggregatedUsersTitleDialogQuery_facebookRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"id"},{defaultValue:null,kind:"LocalArgument",name:"renderLocation"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],c=[{kind:"Variable",name:"id",variableName:"id"}],d=[{kind:"Variable",name:"location",variableName:"renderLocation"}],e={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},g=[f],h={alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"first_story_to_show",plural:!1,selections:[f,{alias:null,args:null,concreteType:"StoryCardSeenState",kind:"LinkedField",name:"story_card_seen_state",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_seen_by_viewer",storageKey:null}],storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometStoryAggregatedUsersTitleDialogQuery",selections:[{alias:null,args:c,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:d,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometStoryAggregatedUsersDialogContent_textWithEntities"}],storageKey:null}],type:"Story",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometStoryAggregatedUsersTitleDialogQuery",selections:[{alias:null,args:c,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[e,f,{kind:"InlineFragment",selections:[{alias:null,args:d,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,concreteType:"AggregatedEntitiesAtRange",kind:"LinkedField",name:"aggregated_ranges",plural:!0,selections:[{alias:null,args:null,concreteType:"AllEntitiesFromAggregatedRangeConnection",kind:"LinkedField",name:"all_entities",plural:!1,selections:[{alias:null,args:null,concreteType:"AllEntitiesFromAggregatedRangeEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[e,{kind:"InlineFragment",selections:g,type:"User",abstractKey:null},{kind:"InlineFragment",selections:g,type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[f,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:40},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"MutualFriendsConnection",kind:"LinkedField",name:"mutual_friends",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"subscribe_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"secondary_subscribe_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"invite_status_in_feedback",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"follower_invite_status_in_feedback",storageKey:null},{alias:null,args:[{kind:"Literal",name:"first",value:1}],concreteType:"DirectInboxBroadcastBucketConnection",kind:"LinkedField",name:"story_bucket",plural:!1,selections:[{alias:null,args:null,concreteType:"DirectMessageThreadBucket",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"should_show_close_friend_badge",storageKey:null},f,h],storageKey:null}],storageKey:"story_bucket(first:1)"},{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"can_viewer_message",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null}],type:"User",abstractKey:null}],type:"Profile",abstractKey:"__isProfile"},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"availability",storageKey:null}]}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[{alias:"profile_url",args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"pages_story_bucket_v2",plural:!1,selections:[e,f,h],storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null}],type:"InstagramUserV2",abstractKey:null}],type:"Actor",abstractKey:"__isActor"},{kind:"InlineFragment",selections:g,type:"Node",abstractKey:"__isNode"}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Story",abstractKey:null}],storageKey:null}]},params:{id:b("CometStoryAggregatedUsersTitleDialogQuery_facebookRelayOperation"),metadata:{},name:"CometStoryAggregatedUsersTitleDialogQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("CometStoryAggregatedUsersDialogContent.react",["fbt","CometCardedDialogLegacy.react","CometDialogCloseCallbackContext.react","CometProfileListScrollableList.react","CometProfileListUserRow.react","CometRelay","CometStoryAggregatedUsersDialogContent_textWithEntities.graphql","CometTransientDialogProvider.react","TetraText.react","react","useCometProfileListFriendshipStatusButton"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");function k(){return j.jsx("div",{className:"x13zrc24 xbxaen2 x1t1ogtf x1u72gb5",children:j.jsx(c("TetraText.react"),{color:"secondary",type:"body1",children:h._("__JHASH__PdM97xbhIxS__JHASH__")})})}k.displayName=k.name+" [from "+f.id+"]";function a(a){var e=a.onClose;a=a.textWithEntities;a=d("CometRelay").useFragment(i!==void 0?i:i=b("CometStoryAggregatedUsersDialogContent_textWithEntities.graphql"),a);a=(a=a==null?void 0:(a=a.aggregated_ranges)==null?void 0:(a=a[0])==null?void 0:(a=a.all_entities)==null?void 0:a.edges)!=null?a:[];a=a.map(function(a){return a.node}).filter(Boolean);return j.jsx(c("CometCardedDialogLegacy.react"),{onClose:e,title:h._("__JHASH__vQhSH5eg36M__JHASH__"),withCloseButton:!0,children:j.jsx(d("CometDialogCloseCallbackContext.react").CometDialogCloseCallbackContextProvider,{onClose:e,children:j.jsx(c("CometTransientDialogProvider.react"),{children:a==null||a.length<1?j.jsx(k,{}):j.jsx(c("CometProfileListScrollableList.react"),{children:a.map(function(a){return j.jsx(c("CometProfileListUserRow.react"),{actionsByPriority:[{hook:c("useCometProfileListFriendshipStatusButton"),hookConfig:{cancelSource:"profile_browser",makeSource:"profile_browser",messengerWebEntryPoint:"storyAggregatedUsers",responseSource:"profile_browser"},type:"connect"}],user:a},a.id)})})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometStoryAggregatedUsersTitleDialog.react",["CometRelay","CometStoryAggregatedUsersDialogContent.react","CometStoryAggregatedUsersTitleDialogQuery.graphql","react","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.props.onClose;a=a.queries;a=d("CometRelay").usePreloadedQuery(h!==void 0?h:h=b("CometStoryAggregatedUsersTitleDialogQuery.graphql"),a.queryReference);a=a==null?void 0:(a=a.node)==null?void 0:a.title;if(a==null)throw c("unrecoverableViolation")("Title cannot be null in aggregated users dialog","comet_feed");return i.jsx(c("CometStoryAggregatedUsersDialogContent.react"),{onClose:e,textWithEntities:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);