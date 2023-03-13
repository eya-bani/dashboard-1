;/*FB_PKG_DELIM*/

__d("ProfileCometProgressiveDateSelector.react",["fbt","CometSelect.react","DateConsts","ProgressiveDateUtil","formatDate","react","recoverableViolation"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useCallback;function k(a){var b=a[0];a=a[1];a=a==null?new Date().getFullYear()+1:a;a<b&&(c("recoverableViolation")("yearMin must be less than or equal to yearMax","profile_comet"),a=b);var d=[{label:h._("__JHASH__VeAOze0xApj__JHASH__"),testid:"Year-Option",value:null}];for(a=a;a>=b;a--)d.push({label:c("formatDate")(new Date(a,0),"Y"),testid:a+"-Option",value:a});return d}function l(a){var b=[{label:h._("__JHASH__XOUyc_kL5IP__JHASH__"),testid:"Month-Option",value:null}];for(var d=1;d<=12;d++)b.push({label:c("formatDate")(new Date(a,d-1),"F"),testid:d+"-Option",value:d});return b}var m=[{label:h._("__JHASH__1vsOOwR8g2C__JHASH__"),testid:"Day-Option",value:null}];function n(a,b){var e=[].concat(m),f=d("DateConsts").getDaysInMonth(a,b);for(var g=1;g<=f;g++)e.push({label:c("formatDate")(new Date(a,b-1,g),"j"),testid:g+"-Option",value:g});return e}function a(a){var b=a.date,e=a.onChange;a=a.yearRange;var f=null,g=null,h=null;b&&(b.day!=null&&(f=b.day),b.month!=null&&(g=b.month),b.year!=null&&(h=b.year));b=j(function(a){return e(d("ProgressiveDateUtil").makeValidDate({day:f,month:g,year:a}))},[e,f,g]);var m=j(function(a){return e(d("ProgressiveDateUtil").makeValidDate({day:f,month:a,year:h}))},[e,f,h]),o=j(function(a){return e(d("ProgressiveDateUtil").makeValidDate({day:a,month:g,year:h}))},[e,g,h]);b=[i.jsx("div",{className:""+(h!=null?" x1emribx":""),children:i.jsx(c("CometSelect.react"),{onChange:b,options:k(a),selectedValue:h,testid:void 0})},"year")];h!=null&&(b.push(i.jsx("div",{className:""+(g!=null?" x1emribx":""),children:i.jsx(c("CometSelect.react"),{onChange:m,options:l(h),selectedValue:g,testid:void 0})},"month")),g!=null&&b.push(i.jsx(c("CometSelect.react"),{onChange:o,options:n(h,g),selectedValue:f,testid:void 0},"day")));return i.jsx("div",{className:"x78zum5",children:b})}a.displayName=a.name+" [from "+f.id+"]";g.getYearOptions=k;g.getMonthOptions=l;g.DAY_OPTIONS=m;g.getDayOptions=n;g.ProfileCometProgressiveDateSelector=a}),98);
__d("ProfileCometPostFiltersDialog.react",["fbt","CometCardedDialogLegacy.react","CometRow.react","CometRowItem.react","CometSelect.react","ProfileCometPostFiltersDialogContext","ProfileCometPostFiltersDialogReducer","ProfileCometProgressiveDateSelector.react","ProfileCometTimelineFilterContext","ProfileCometTimelineFilterReducer","TetraButtonGroup.react","TetraText.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useContext,l=b.useState,m=1980;function a(a){var b=a.instructions,e=a.onClose,f=a.shouldHidePostedByFilters;a=a.shouldHidePrivacyFilter;var g=k(c("ProfileCometTimelineFilterContext")),n=g.dispatchAction;g=k(c("ProfileCometPostFiltersDialogContext"));var o=g.dispatchAction;g=g.state;var p=l(g.date),q=p[0];p=p[1];var r=l(g.postedBy),s=r[0];r=r[1];var t=l(g.privacy),u=t[0];t=t[1];g=l(g.taggedPosts);var v=g[0];g=g[1];var w=j(function(){o({date:q,postedBy:s,privacy:u,taggedPosts:v,type:"SET_FILTERS"}),n({date:q,postedBy:s,privacy:u,taggedPosts:v,type:"SET_FILTERS"}),e()},[q,o,n,e,s,u,v]),x=j(function(){o(babelHelpers["extends"]({},d("ProfileCometPostFiltersDialogReducer").getInitialState(f),{type:"SET_FILTERS"}));var a=d("ProfileCometTimelineFilterReducer").getInitialState();n({date:a.date,postedBy:a.postedBy,privacy:a.privacy,taggedPosts:a.taggedPosts,type:"SET_FILTERS"});e()},[o,n,e,f]),y=h._("__JHASH__5l_GraSEkP3__JHASH__"),z=h._("__JHASH__YaUzictPaMQ__JHASH__"),A=h._("__JHASH__2WEPQeON0KC__JHASH__"),B=h._("__JHASH__EAVkC_NXf22__JHASH__");return i.jsx(c("CometCardedDialogLegacy.react"),{onClose:e,size:"small",title:h._("__JHASH__pHmTluglNgu__JHASH__"),withCloseButton:!0,children:i.jsxs("div",{className:"x1iorvi4 x150jy0e xjkvuk6 x1e558r4",children:[b!=null&&i.jsx(c("CometRow.react"),{children:i.jsx(c("CometRowItem.react"),{children:b})}),i.jsxs("div",{className:"x11r6d5e",children:[i.jsxs("div",{className:"xf5m44m",children:[i.jsx("div",{className:"x1n9xxwz",children:i.jsx(c("CometRow.react"),{children:i.jsx(c("CometRowItem.react"),{children:i.jsx(c("TetraText.react"),{type:"body3",children:y})})})}),i.jsx("div",{className:"x1n9xxwz",children:i.jsx(c("CometRow.react"),{children:i.jsx(c("CometRowItem.react"),{"aria-label":y,children:i.jsx(d("ProfileCometProgressiveDateSelector.react").ProfileCometProgressiveDateSelector,{date:q,onChange:p,yearRange:[m,new Date().getFullYear()]})})})})]}),!f&&i.jsxs("div",{className:"xf5m44m",children:[i.jsx("div",{className:"x1n9xxwz",children:i.jsx(c("CometRow.react"),{children:i.jsx(c("CometRowItem.react"),{children:i.jsx(c("TetraText.react"),{type:"body3",children:z})})})}),i.jsx("div",{className:"x1n9xxwz",children:i.jsx(c("CometRow.react"),{children:i.jsx(c("CometRowItem.react"),{"aria-label":z,children:i.jsx(c("CometSelect.react"),{onChange:r,options:[{label:h._("__JHASH__NVe1_4yDeHH__JHASH__"),value:"ANYONE"},{label:h._("__JHASH__jw58NPzLmz0__JHASH__"),value:"YOU"},{label:h._("__JHASH__LFTuOJyQMsT__JHASH__"),value:"OTHERS"}],selectedValue:s})})})})]}),!a&&i.jsxs("div",{className:"xf5m44m",children:[i.jsx("div",{className:"x1n9xxwz",children:i.jsx(c("CometRow.react"),{children:i.jsx(c("CometRowItem.react"),{children:i.jsx(c("TetraText.react"),{type:"body3",children:A})})})}),i.jsx("div",{className:"x1n9xxwz",children:i.jsx(c("CometRow.react"),{children:i.jsx(c("CometRowItem.react"),{"aria-label":A,children:i.jsx(c("CometSelect.react"),{onChange:t,options:[{label:h._("__JHASH__UJHlls8ty9v__JHASH__"),value:"PUBLIC"},{label:h._("__JHASH__28S5WEl7grY__JHASH__"),value:"FRIENDS"},{label:h._("__JHASH__iWgvLCJ1vS4__JHASH__"),value:"ONLY_ME"},{label:h._("__JHASH__Z3KMQkCdl8Y__JHASH__"),value:"ALL"}],selectedValue:u})})})})]}),!f&&i.jsxs("div",{className:"xf5m44m",children:[i.jsx("div",{className:"x1n9xxwz",children:i.jsx(c("CometRow.react"),{children:i.jsx(c("CometRowItem.react"),{children:i.jsx(c("TetraText.react"),{type:"body3",children:B})})})}),i.jsx("div",{className:"x1n9xxwz",children:i.jsx(c("CometRow.react"),{children:i.jsx(c("CometRowItem.react"),{"aria-label":B,children:i.jsx(c("CometSelect.react"),{onChange:g,options:[{label:h._("__JHASH__-QNURGbQ5eV__JHASH__"),value:"ALL"},{label:h._("__JHASH__4och2ChA_hi__JHASH__"),value:"TAGGED"}],selectedValue:v})})})})]})]}),i.jsx("div",{className:"x78zum5 x13a6bvl xsag5q8",children:i.jsx(c("TetraButtonGroup.react"),{direction:"backward",primary:{label:h._("__JHASH__nMgN4TrAXln__JHASH__"),onPress:w,padding:"wide"},secondary:{label:h._("__JHASH__1Z2f_g_Mbp-__JHASH__"),onPress:x},size:"medium"})})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);