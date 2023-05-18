(self.webpackChunkinterviewkit=self.webpackChunkinterviewkit||[]).push([[871,105],{"./components/Button/Button.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Button=Button;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _Pressable=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Pressable/index.js")),_Text=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js")),_Platform=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Platform/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_ActivityIndicator=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/ActivityIndicator/index.js")),_utils=__webpack_require__("./components/Button/utils.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button(_ref){var onPress=_ref.onPress,text=_ref.text,children=_ref.children,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"text":_ref$variant,disabled=_ref.disabled,loading=_ref.loading,_style=_ref.style,_getButtonStyle=(0,_utils.getButtonStyle)(variant,disabled),buttonStyle=_getButtonStyle.buttonStyle,textStyle=_getButtonStyle.textStyle;return(0,_jsxRuntime.jsx)(_Pressable.default,{style:function style(_ref2){var pressed=_ref2.pressed;return[styles.button,buttonStyle,_style,{opacity:pressed?.6:1}]},onPress,disabled,testID:"button",children:loading?(0,_jsxRuntime.jsx)(_ActivityIndicator.default,{size:"small",color:textStyle.color,testID:"loading-indicator"}):children||(0,_jsxRuntime.jsx)(_Text.default,{style:textStyle,children:text})})}var styles=_StyleSheet.default.create({button:Object.assign({alignItems:"center",justifyContent:"center",paddingVertical:12,paddingHorizontal:24,borderRadius:8},_Platform.default.select({ios:{elevation:2},android:{elevation:0},default:{elevation:2}}))});try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string",raw:null,value:null}},variant:{defaultValue:{value:"text"},description:"",name:"variant",required:!1,type:{name:'"text" | "contained" | "outlined"',raw:null,value:null}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean",raw:null,value:null}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean",raw:null,value:null}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>",raw:null,value:null}},onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"VoidFunction",raw:null,value:null}}}}}catch(e){}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string",raw:null,value:null}},variant:{defaultValue:{value:"text"},description:"",name:"variant",required:!1,type:{name:'"text" | "contained" | "outlined"',raw:null,value:null}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean",raw:null,value:null}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean",raw:null,value:null}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>",raw:null,value:null}},onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"VoidFunction",raw:null,value:null}}}}}catch(e){}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"text"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"contained"'},{value:'"outlined"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"VoidFunction"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./components/Button/utils.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.getButtonStyle=void 0;var _StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js"));exports.getButtonStyle=function getButtonStyle(variant){var buttonStyle,textStyle,disabled=arguments.length>1&&void 0!==arguments[1]&&arguments[1];switch(variant){case"contained":buttonStyle=disabled?styles.disabledContainedButton:styles.containedButton,textStyle=disabled?styles.disabledContainedButtonText:styles.containedButtonText;break;case"outlined":buttonStyle=disabled?styles.disabledOutlinedButton:styles.outlinedButton,textStyle=disabled?styles.disabledOutlinedButtonText:styles.outlinedButtonText;break;default:buttonStyle=disabled?styles.disabledTextButton:styles.textButton,textStyle=disabled?styles.disabledTextButtonText:styles.textButtonText}return{buttonStyle,textStyle}};var styles=_StyleSheet.default.create({textButton:{backgroundColor:"transparent"},textButtonText:{color:"#333",fontSize:16,fontWeight:"bold"},disabledTextButton:{backgroundColor:"transparent",opacity:.5},disabledTextButtonText:{color:"#333",fontSize:16,fontWeight:"bold",opacity:.5},containedButton:{backgroundColor:"#2ecc71"},containedButtonText:{color:"#fff",fontSize:16,fontWeight:"bold"},disabledContainedButton:{backgroundColor:"gray",opacity:.5},disabledContainedButtonText:{color:"#fff",fontSize:16,fontWeight:"bold",opacity:.7},outlinedButton:{backgroundColor:"transparent",borderWidth:2,borderColor:"#2ecc71"},outlinedButtonText:{color:"#2ecc71",fontSize:16,fontWeight:"bold"},disabledOutlinedButton:{backgroundColor:"transparent",borderWidth:2,borderColor:"gray",opacity:.5},disabledOutlinedButtonText:{color:"gray",fontSize:16,fontWeight:"bold",opacity:.5}})}}]);