"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[5942],{"./packages/icons/build-module/library/close-small.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"})})},"./packages/icons/build-module/library/line-dashed.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{fillRule:"evenodd",d:"M5 11.25h3v1.5H5v-1.5zm5.5 0h3v1.5h-3v-1.5zm8.5 0h-3v1.5h3v-1.5z",clipRule:"evenodd"})})},"./packages/icons/build-module/library/line-dotted.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{fillRule:"evenodd",d:"M5.25 11.25h1.5v1.5h-1.5v-1.5zm3 0h1.5v1.5h-1.5v-1.5zm4.5 0h-1.5v1.5h1.5v-1.5zm1.5 0h1.5v1.5h-1.5v-1.5zm4.5 0h-1.5v1.5h1.5v-1.5z",clipRule:"evenodd"})})},"./packages/icons/build-module/library/line-solid.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M5 11.25h14v1.5H5z"})})},"./packages/components/src/border-control/border-control/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>border_control_component});var build_module=__webpack_require__("./packages/i18n/build-module/index.js"),close_small=__webpack_require__("./packages/icons/build-module/library/close-small.js"),line_solid=__webpack_require__("./packages/icons/build-module/library/line-solid.js"),line_dashed=__webpack_require__("./packages/icons/build-module/library/line-dashed.js"),line_dotted=__webpack_require__("./packages/icons/build-module/library/line-dotted.js"),context_connect=__webpack_require__("./packages/components/src/context/context-connect.ts"),component=__webpack_require__("./packages/components/src/toggle-group-control/toggle-group-control/component.tsx"),toggle_group_control_option_icon_component=__webpack_require__("./packages/components/src/toggle-group-control/toggle-group-control-option-icon/component.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BORDER_STYLES=[{label:(0,build_module.__)("Solid"),icon:line_solid.Z,value:"solid"},{label:(0,build_module.__)("Dashed"),icon:line_dashed.Z,value:"dashed"},{label:(0,build_module.__)("Dotted"),icon:line_dotted.Z,value:"dotted"}];function UnconnectedBorderControlStylePicker({onChange,...restProps},forwardedRef){return(0,jsx_runtime.jsx)(component.Z,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,ref:forwardedRef,isDeselectable:!0,onChange:value=>{onChange?.(value)},...restProps,children:BORDER_STYLES.map((borderStyle=>(0,jsx_runtime.jsx)(toggle_group_control_option_icon_component.Z,{value:borderStyle.value,icon:borderStyle.icon,label:borderStyle.label},borderStyle.value)))})}UnconnectedBorderControlStylePicker.displayName="UnconnectedBorderControlStylePicker";const border_control_style_picker_component=(0,context_connect.Iq)(UnconnectedBorderControlStylePicker,"BorderControlStylePicker");var src_button=__webpack_require__("./packages/components/src/button/index.tsx"),color_indicator=__webpack_require__("./packages/components/src/color-indicator/index.tsx"),color_palette=__webpack_require__("./packages/components/src/color-palette/index.tsx"),dropdown=__webpack_require__("./packages/components/src/dropdown/index.tsx"),h_stack_component=__webpack_require__("./packages/components/src/h-stack/component.tsx"),v_stack_component=__webpack_require__("./packages/components/src/v-stack/component.tsx"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),config_values=__webpack_require__("./packages/components/src/utils/config-values.js"),box_sizing=__webpack_require__("./packages/components/src/utils/box-sizing.ts"),rtl=__webpack_require__("./packages/components/src/utils/rtl.js"),colors_values=__webpack_require__("./packages/components/src/utils/colors-values.js"),space=__webpack_require__("./packages/components/src/utils/space.ts"),base_control_styles=__webpack_require__("./packages/components/src/base-control/styles/base-control-styles.ts"),unit_control_styles=__webpack_require__("./packages/components/src/unit-control/styles/unit-control-styles.ts");const labelStyles={name:"f3vz0n",styles:"font-weight:500"},focusBoxShadow=(0,emotion_react_browser_esm.iv)("box-shadow:inset ",config_values.Z.controlBoxShadowFocus,";",""),borderControl=(0,emotion_react_browser_esm.iv)("border:0;padding:0;margin:0;",box_sizing.p,";",""),styles_wrapperWidth=(0,emotion_react_browser_esm.iv)(unit_control_styles.Ke,"{flex:0 0 auto;}",""),borderControlDropdown=(0,emotion_react_browser_esm.iv)("background:#fff;&&>button{aspect-ratio:1;padding:0;display:flex;align-items:center;justify-content:center;",(0,rtl.b)({borderRadius:"2px 0 0 2px"},{borderRadius:"0 2px 2px 0"})()," border:",config_values.Z.borderWidth," solid ",colors_values.D.ui.border,";&:focus,&:hover:not( :disabled ){",focusBoxShadow," border-color:",colors_values.D.ui.borderFocus,";z-index:1;position:relative;}}",""),colorIndicatorWrapper=(border,size)=>{const{style}=border||{};return(0,emotion_react_browser_esm.iv)("border-radius:9999px;border:2px solid transparent;",style?(border=>{const{color,style}=border||{},fallbackColor=style&&"none"!==style?colors_values.D.gray[300]:void 0;return(0,emotion_react_browser_esm.iv)("border-style:","none"===style?"solid":style,";border-color:",color||fallbackColor,";","")})(border):void 0," width:","__unstable-large"===size?"24px":"22px",";height:","__unstable-large"===size?"24px":"22px",";padding:","__unstable-large"===size?"2px":"1px",";&>span{height:",(0,space.D)(4),";width:",(0,space.D)(4),";background:linear-gradient(\n\t\t\t\t-45deg,\n\t\t\t\ttransparent 48%,\n\t\t\t\trgb( 0 0 0 / 20% ) 48%,\n\t\t\t\trgb( 0 0 0 / 20% ) 52%,\n\t\t\t\ttransparent 52%\n\t\t\t);}","")},borderControlPopoverControls=(0,emotion_react_browser_esm.iv)("width:",228,"px;>div:first-of-type>",base_control_styles.ar,"{margin-bottom:0;",labelStyles,";}&& ",base_control_styles.ar,"+button:not( .has-text ){min-width:24px;padding:0;}",""),borderControlPopoverContent=(0,emotion_react_browser_esm.iv)("",""),borderColorIndicator=(0,emotion_react_browser_esm.iv)("",""),resetButton=(0,emotion_react_browser_esm.iv)("justify-content:center;width:100%;&&{border-top:",config_values.Z.borderWidth," solid ",colors_values.D.gray[400],";border-top-left-radius:0;border-top-right-radius:0;height:40px;}","");var utils=__webpack_require__("./packages/components/src/unit-control/utils.ts"),use_context_system=__webpack_require__("./packages/components/src/context/use-context-system.js"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");var dropdown_content_wrapper=__webpack_require__("./packages/components/src/dropdown/dropdown-content-wrapper.tsx"),color_palette_utils=__webpack_require__("./packages/components/src/color-palette/utils.ts");const getAriaLabelColorValue=colorValue=>colorValue.replace(/^var\((.+)\)$/,"$1"),BorderControlDropdown=(props,forwardedRef)=>{const{__experimentalIsRenderedInSidebar,border,colors,disableCustomColors,enableAlpha,enableStyle,indicatorClassName,indicatorWrapperClassName,isStyleSettable,onReset,onColorChange,onStyleChange,popoverContentClassName,popoverControlsClassName,resetButtonClassName,showDropdownHeader,size,__unstablePopoverProps,...otherProps}=function useBorderControlDropdown(props){const{border,className,colors=[],enableAlpha=!1,enableStyle=!0,onChange,previousStyleSelection,size="default",__experimentalIsRenderedInSidebar=!1,...otherProps}=(0,use_context_system.y)(props,"BorderControlDropdown"),[widthValue]=(0,utils.YX)(border?.width),hasZeroWidth=0===widthValue,cx=(0,use_cx.I)(),classes=(0,react.useMemo)((()=>cx(borderControlDropdown,className)),[className,cx]),indicatorClassName=(0,react.useMemo)((()=>cx(borderColorIndicator)),[cx]),indicatorWrapperClassName=(0,react.useMemo)((()=>cx(colorIndicatorWrapper(border,size))),[border,cx,size]),popoverControlsClassName=(0,react.useMemo)((()=>cx(borderControlPopoverControls)),[cx]),popoverContentClassName=(0,react.useMemo)((()=>cx(borderControlPopoverContent)),[cx]),resetButtonClassName=(0,react.useMemo)((()=>cx(resetButton)),[cx]);return{...otherProps,border,className:classes,colors,enableAlpha,enableStyle,indicatorClassName,indicatorWrapperClassName,onColorChange:color=>{onChange({color,style:"none"===border?.style?previousStyleSelection:border?.style,width:hasZeroWidth&&color?"1px":border?.width})},onStyleChange:style=>{const width=hasZeroWidth&&style?"1px":border?.width;onChange({...border,style,width})},onReset:()=>{onChange({...border,color:void 0,style:void 0})},popoverContentClassName,popoverControlsClassName,resetButtonClassName,size,__experimentalIsRenderedInSidebar}}(props),{color,style}=border||{},colorObject=((colorValue,colors)=>{if(colorValue&&colors){if((0,color_palette_utils.v9)(colors)){let matchedColor;return colors.some((origin=>origin.colors.some((color=>color.color===colorValue&&(matchedColor=color,!0))))),matchedColor}return colors.find((color=>color.color===colorValue))}})(color,colors),toggleAriaLabel=((colorValue,colorObject,style,isStyleEnabled)=>{if(isStyleEnabled){if(colorObject){const ariaLabelValue=getAriaLabelColorValue(colorObject.color);return style?(0,build_module.gB)('Border color and style picker. The currently selected color is called "%1$s" and has a value of "%2$s". The currently selected style is "%3$s".',colorObject.name,ariaLabelValue,style):(0,build_module.gB)('Border color and style picker. The currently selected color is called "%1$s" and has a value of "%2$s".',colorObject.name,ariaLabelValue)}if(colorValue){const ariaLabelValue=getAriaLabelColorValue(colorValue);return style?(0,build_module.gB)('Border color and style picker. The currently selected color has a value of "%1$s". The currently selected style is "%2$s".',ariaLabelValue,style):(0,build_module.gB)('Border color and style picker. The currently selected color has a value of "%1$s".',ariaLabelValue)}return(0,build_module.__)("Border color and style picker.")}return colorObject?(0,build_module.gB)('Border color picker. The currently selected color is called "%1$s" and has a value of "%2$s".',colorObject.name,getAriaLabelColorValue(colorObject.color)):colorValue?(0,build_module.gB)('Border color picker. The currently selected color has a value of "%1$s".',getAriaLabelColorValue(colorValue)):(0,build_module.__)("Border color picker.")})(color,colorObject,style,enableStyle),showResetButton=color||style&&"none"!==style,dropdownPosition=__experimentalIsRenderedInSidebar?"bottom left":void 0;return(0,jsx_runtime.jsx)(dropdown.Z,{renderToggle:({onToggle})=>(0,jsx_runtime.jsx)(src_button.ZP,{onClick:onToggle,variant:"tertiary","aria-label":toggleAriaLabel,tooltipPosition:dropdownPosition,label:(0,build_module.__)("Border color and style picker"),showTooltip:!0,__next40pxDefaultSize:"__unstable-large"===size,children:(0,jsx_runtime.jsx)("span",{className:indicatorWrapperClassName,children:(0,jsx_runtime.jsx)(color_indicator.Z,{className:indicatorClassName,colorValue:color})})}),renderContent:({onClose})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dropdown_content_wrapper.Z,{paddingSize:"medium",children:(0,jsx_runtime.jsxs)(v_stack_component.Z,{className:popoverControlsClassName,spacing:6,children:[showDropdownHeader?(0,jsx_runtime.jsxs)(h_stack_component.Z,{children:[(0,jsx_runtime.jsx)(base_control_styles.ar,{children:(0,build_module.__)("Border color")}),(0,jsx_runtime.jsx)(src_button.ZP,{size:"small",label:(0,build_module.__)("Close border color"),icon:close_small.Z,onClick:onClose})]}):void 0,(0,jsx_runtime.jsx)(color_palette.ZP,{className:popoverContentClassName,value:color,onChange:onColorChange,colors,disableCustomColors,__experimentalIsRenderedInSidebar,clearable:!1,enableAlpha}),enableStyle&&isStyleSettable&&(0,jsx_runtime.jsx)(border_control_style_picker_component,{label:(0,build_module.__)("Style"),value:style,onChange:onStyleChange})]})}),showResetButton&&(0,jsx_runtime.jsx)(dropdown_content_wrapper.Z,{paddingSize:"none",children:(0,jsx_runtime.jsx)(src_button.ZP,{className:resetButtonClassName,variant:"tertiary",onClick:()=>{onReset(),onClose()},children:(0,build_module.__)("Reset")})})]}),popoverProps:{...__unstablePopoverProps},...otherProps,ref:forwardedRef})};BorderControlDropdown.displayName="BorderControlDropdown";const border_control_dropdown_component=(0,context_connect.Iq)(BorderControlDropdown,"BorderControlDropdown");var unit_control=__webpack_require__("./packages/components/src/unit-control/index.tsx"),range_control=__webpack_require__("./packages/components/src/range-control/index.tsx"),view_component=__webpack_require__("./packages/components/src/view/component.tsx"),visually_hidden_component=__webpack_require__("./packages/components/src/visually-hidden/component.tsx");const isValidBorder=border=>void 0!==border?.width&&""!==border.width||void 0!==border?.color;function useBorderControl(props){const{className,colors=[],isCompact,onChange,enableAlpha=!0,enableStyle=!0,shouldSanitizeBorder=!0,size="default",value:border,width,__experimentalIsRenderedInSidebar=!1,__next40pxDefaultSize,...otherProps}=(0,use_context_system.y)(props,"BorderControl"),computedSize="default"===size&&__next40pxDefaultSize?"__unstable-large":size,[widthValue,originalWidthUnit]=(0,utils.YX)(border?.width),widthUnit=originalWidthUnit||"px",hadPreviousZeroWidth=0===widthValue,[colorSelection,setColorSelection]=(0,react.useState)(),[styleSelection,setStyleSelection]=(0,react.useState)(),isStyleSettable=!shouldSanitizeBorder||isValidBorder(border),onBorderChange=(0,react.useCallback)((newBorder=>{!shouldSanitizeBorder||isValidBorder(newBorder)?onChange(newBorder):onChange(void 0)}),[onChange,shouldSanitizeBorder]),onWidthChange=(0,react.useCallback)((newWidth=>{const newWidthValue=""===newWidth?void 0:newWidth,[parsedValue]=(0,utils.YX)(newWidth),hasZeroWidth=0===parsedValue,updatedBorder={...border,width:newWidthValue};hasZeroWidth&&!hadPreviousZeroWidth&&(setColorSelection(border?.color),setStyleSelection(border?.style),updatedBorder.color=void 0,updatedBorder.style="none"),!hasZeroWidth&&hadPreviousZeroWidth&&(void 0===updatedBorder.color&&(updatedBorder.color=colorSelection),"none"===updatedBorder.style&&(updatedBorder.style=styleSelection)),onBorderChange(updatedBorder)}),[border,hadPreviousZeroWidth,colorSelection,styleSelection,onBorderChange]),onSliderChange=(0,react.useCallback)((value=>{onWidthChange(`${value}${widthUnit}`)}),[onWidthChange,widthUnit]),cx=(0,use_cx.I)(),classes=(0,react.useMemo)((()=>cx(borderControl,className)),[className,cx]);let wrapperWidth=width;isCompact&&(wrapperWidth="__unstable-large"===size?"116px":"90px");const innerWrapperClassName=(0,react.useMemo)((()=>{const widthStyle=!!wrapperWidth&&styles_wrapperWidth,heightStyle=(size=>(0,emotion_react_browser_esm.iv)("height:","__unstable-large"===size?"40px":"30px",";",""))(computedSize);return cx((0,emotion_react_browser_esm.iv)(unit_control_styles.Ke,"{flex:1 1 40%;}&& ",unit_control_styles.mY,"{min-height:0;}",""),widthStyle,heightStyle)}),[wrapperWidth,cx,computedSize]),sliderClassName=(0,react.useMemo)((()=>cx((0,emotion_react_browser_esm.iv)("flex:1 1 60%;",(0,rtl.b)({marginRight:(0,space.D)(3)})(),";",""))),[cx]);return{...otherProps,className:classes,colors,enableAlpha,enableStyle,innerWrapperClassName,inputWidth:wrapperWidth,isStyleSettable,onBorderChange,onSliderChange,onWidthChange,previousStyleSelection:styleSelection,sliderClassName,value:border,widthUnit,widthValue,size:computedSize,__experimentalIsRenderedInSidebar,__next40pxDefaultSize}}const BorderLabel=props=>{const{label,hideLabelFromVision}=props;return label?hideLabelFromVision?(0,jsx_runtime.jsx)(visually_hidden_component.Z,{as:"legend",children:label}):(0,jsx_runtime.jsx)(base_control_styles.ar,{as:"legend",children:label}):null},UnconnectedBorderControl=(props,forwardedRef)=>{const{__next40pxDefaultSize=!1,colors,disableCustomColors,disableUnits,enableAlpha,enableStyle,hideLabelFromVision,innerWrapperClassName,inputWidth,isStyleSettable,label,onBorderChange,onSliderChange,onWidthChange,placeholder,__unstablePopoverProps,previousStyleSelection,showDropdownHeader,size,sliderClassName,value:border,widthUnit,widthValue,withSlider,__experimentalIsRenderedInSidebar,...otherProps}=useBorderControl(props);return(0,jsx_runtime.jsxs)(view_component.Z,{as:"fieldset",...otherProps,ref:forwardedRef,children:[(0,jsx_runtime.jsx)(BorderLabel,{label,hideLabelFromVision}),(0,jsx_runtime.jsxs)(h_stack_component.Z,{spacing:4,className:innerWrapperClassName,children:[(0,jsx_runtime.jsx)(unit_control.ZP,{prefix:(0,jsx_runtime.jsx)(border_control_dropdown_component,{border,colors,__unstablePopoverProps,disableCustomColors,enableAlpha,enableStyle,isStyleSettable,onChange:onBorderChange,previousStyleSelection,showDropdownHeader,__experimentalIsRenderedInSidebar,size}),label:(0,build_module.__)("Border width"),hideLabelFromVision:!0,min:0,onChange:onWidthChange,value:border?.width||"",placeholder,disableUnits,__unstableInputWidth:inputWidth,size}),withSlider&&(0,jsx_runtime.jsx)(range_control.Z,{__nextHasNoMarginBottom:!0,label:(0,build_module.__)("Border width"),hideLabelFromVision:!0,className:sliderClassName,initialPosition:0,max:100,min:0,onChange:onSliderChange,step:["px","%"].includes(widthUnit)?1:.1,value:widthValue||void 0,withInputField:!1,__next40pxDefaultSize})]})]})};UnconnectedBorderControl.displayName="UnconnectedBorderControl";const BorderControl=(0,context_connect.Iq)(UnconnectedBorderControl,"BorderControl"),border_control_component=BorderControl;try{BorderControl.displayName="BorderControl",BorderControl.__docgenInfo={description:"The `BorderControl` brings together internal sub-components which allow users to\nset the various properties of a border. The first sub-component, a\n`BorderDropdown` contains options representing border color and style. The\nborder width is controlled via a `UnitControl` and an optional `RangeControl`.\n\nBorder radius is not covered by this control as it may be desired separate to\ncolor, style, and width. For example, the border radius may be absorbed under\na \"shape\" abstraction.\n\n```jsx\nimport { __experimentalBorderControl as BorderControl } from '@wordpress/components';\nimport { __ } from '@wordpress/i18n';\n\nconst colors = [\n\t{ name: 'Blue 20', color: '#72aee6' },\n\t// ...\n];\n\nconst MyBorderControl = () => {\n\tconst [ border, setBorder ] = useState();\n\tconst onChange = ( newBorder ) => setBorder( newBorder );\n\n\treturn (\n\t\t<BorderControl\n\t\t\tcolors={ colors }\n\t\t\tlabel={ __( 'Border' ) }\n\t\t\tonChange={ onChange }\n\t\t\tvalue={ border }\n\t\t/>\n\t);\n};\n```",displayName:"BorderControl",props:{colors:{defaultValue:{value:"[]"},description:"Array with the colors to be shown. When displaying multiple color palettes\nto choose from, the format of the array changes from an array of colors\nobjects, to an array of color palettes.",name:"colors",required:!1,type:{name:"PaletteObject[] | ColorObject[]"}},__experimentalIsRenderedInSidebar:{defaultValue:{value:"false"},description:"Whether this is rendered in the sidebar.",name:"__experimentalIsRenderedInSidebar",required:!1,type:{name:"boolean"}},enableAlpha:{defaultValue:{value:"false"},description:"This controls whether the alpha channel will be offered when selecting\ncustom colors.",name:"enableAlpha",required:!1,type:{name:"boolean"}},disableCustomColors:{defaultValue:null,description:"This toggles the ability to choose custom colors.",name:"disableCustomColors",required:!1,type:{name:"boolean"}},hideLabelFromVision:{defaultValue:null,description:"Provides control over whether the label will only be visible to\nscreen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"If provided, a label will be generated using this as the content.",name:"label",required:!1,type:{name:"string"}},disableUnits:{defaultValue:null,description:"This controls whether unit selection should be disabled.",name:"disableUnits",required:!1,type:{name:"boolean"}},enableStyle:{defaultValue:{value:"true"},description:"This controls whether to support border style selection.",name:"enableStyle",required:!1,type:{name:"boolean"}},isCompact:{defaultValue:null,description:"This flags the `BorderControl` to render with a more compact\nappearance. It restricts the width of the control and prevents it\nfrom expanding to take up additional space.",name:"isCompact",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"A callback function invoked when the border value is changed via an\ninteraction that selects or clears, border color, style, or width.",name:"onChange",required:!0,type:{name:"(value?: Border) => void"}},placeholder:{defaultValue:null,description:"Placeholder text for the number input.",name:"placeholder",required:!1,type:{name:"string"}},__unstablePopoverProps:{defaultValue:null,description:"An internal prop used to control the visibility of the dropdown.",name:"__unstablePopoverProps",required:!1,type:{name:'Omit<PopoverProps, "children">'}},shouldSanitizeBorder:{defaultValue:{value:"true"},description:"If opted into, sanitizing the border means that if no width or color\nhave been selected, the border style is also cleared and `undefined`\nis returned as the new border value.",name:"shouldSanitizeBorder",required:!1,type:{name:"boolean"}},showDropdownHeader:{defaultValue:null,description:"Whether or not to show the header for the border color and style\npicker dropdown. The header includes a label for the color picker\nand a close button.",name:"showDropdownHeader",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"'default'"},description:"Size of the control.",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"__unstable-large"'}]}},value:{defaultValue:null,description:"An object representing a border or `undefined`. Used to set the\ncurrent border configuration for this component.",name:"value",required:!1,type:{name:"Border"}},width:{defaultValue:null,description:"Controls the visual width of the `BorderControl`. It has no effect if\nthe `isCompact` prop is set to `true`.",name:"width",required:!1,type:{name:"Width<string | number>"}},withSlider:{defaultValue:null,description:"Flags whether this `BorderControl` should also render a\n`RangeControl` for additional control over a border's width.",name:"withSlider",required:!1,type:{name:"boolean"}},__next40pxDefaultSize:{defaultValue:{value:"false"},description:"Start opting into the larger default height that will become the default size in a future version.",name:"__next40pxDefaultSize",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/border-control/border-control/component.tsx#BorderControl"]={docgenInfo:BorderControl.__docgenInfo,name:"BorderControl",path:"packages/components/src/border-control/border-control/component.tsx#BorderControl"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/color-indicator/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnforwardedColorIndicator(props,forwardedRef){const{className,colorValue,...additionalProps}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.Z)("component-color-indicator",className),style:{background:colorValue},ref:forwardedRef,...additionalProps})}UnforwardedColorIndicator.displayName="UnforwardedColorIndicator";const ColorIndicator=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(UnforwardedColorIndicator),__WEBPACK_DEFAULT_EXPORT__=ColorIndicator;try{ColorIndicator.displayName="ColorIndicator",ColorIndicator.__docgenInfo={description:"ColorIndicator is a React component that renders a specific color in a\ncircle. It's often used to summarize a collection of used colors in a child\ncomponent.\n\n```jsx\nimport { ColorIndicator } from '@wordpress/components';\n\nconst MyColorIndicator = () => <ColorIndicator colorValue=\"#0073aa\" />;\n```",displayName:"ColorIndicator",props:{colorValue:{defaultValue:null,description:"The color of the indicator. Any value from the CSS `background` property\nis supported.",name:"colorValue",required:!0,type:{name:"Background<string | number>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/color-indicator/index.tsx#ColorIndicator"]={docgenInfo:ColorIndicator.__docgenInfo,name:"ColorIndicator",path:"packages/components/src/color-indicator/index.tsx#ColorIndicator"})}catch(__react_docgen_typescript_loader_error){}try{colorindicator.displayName="colorindicator",colorindicator.__docgenInfo={description:"ColorIndicator is a React component that renders a specific color in a\ncircle. It's often used to summarize a collection of used colors in a child\ncomponent.\n\n```jsx\nimport { ColorIndicator } from '@wordpress/components';\n\nconst MyColorIndicator = () => <ColorIndicator colorValue=\"#0073aa\" />;\n```",displayName:"colorindicator",props:{colorValue:{defaultValue:null,description:"The color of the indicator. Any value from the CSS `background` property\nis supported.",name:"colorValue",required:!0,type:{name:"Background<string | number>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/color-indicator/index.tsx#colorindicator"]={docgenInfo:colorindicator.__docgenInfo,name:"colorindicator",path:"packages/components/src/color-indicator/index.tsx#colorindicator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/toggle-group-control/toggle-group-control-option-icon/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_toggle_group_control_option_base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/toggle-group-control/toggle-group-control-option-base/component.tsx"),_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/icon/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnforwardedToggleGroupControlOptionIcon(props,ref){const{icon,label,...restProps}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_toggle_group_control_option_base__WEBPACK_IMPORTED_MODULE_1__.Z,{...restProps,isIcon:!0,"aria-label":label,showTooltip:!0,ref,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icon__WEBPACK_IMPORTED_MODULE_2__.Z,{icon})})}UnforwardedToggleGroupControlOptionIcon.displayName="UnforwardedToggleGroupControlOptionIcon";const ToggleGroupControlOptionIcon=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(UnforwardedToggleGroupControlOptionIcon),__WEBPACK_DEFAULT_EXPORT__=ToggleGroupControlOptionIcon;try{ToggleGroupControlOptionIcon.displayName="ToggleGroupControlOptionIcon",ToggleGroupControlOptionIcon.__docgenInfo={description:'`ToggleGroupControlOptionIcon` is a form component which is meant to be used as a\nchild of `ToggleGroupControl` and displays an icon.\n\n```jsx\n\nimport {\n__experimentalToggleGroupControl as ToggleGroupControl,\n__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,\nfrom \'@wordpress/components\';\nimport { formatLowercase, formatUppercase } from \'@wordpress/icons\';\n\nfunction Example() {\nreturn (\n\t<ToggleGroupControl>\n\t\t<ToggleGroupControlOptionIcon\n\t\t\tvalue="uppercase"\n\t\t\tlabel="Uppercase"\n\t\t\ticon={ formatUppercase }\n\t\t/>\n\t\t<ToggleGroupControlOptionIcon\n\t\t\tvalue="lowercase"\n\t\t\tlabel="Lowercase"\n\t\t\ticon={ formatLowercase }\n\t\t/>\n\t</ToggleGroupControl>\n);\n}\n```',displayName:"ToggleGroupControlOptionIcon",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number"}},icon:{defaultValue:null,description:"Icon displayed as the content of the option. Usually one of the icons from\nthe `@wordpress/icons` package, or a custom React `<svg>` icon.",name:"icon",required:!0,type:{name:"Element"}},label:{defaultValue:null,description:"The text to accessibly label the icon option. Will also be shown in a tooltip.",name:"label",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/toggle-group-control/toggle-group-control-option-icon/component.tsx#ToggleGroupControlOptionIcon"]={docgenInfo:ToggleGroupControlOptionIcon.__docgenInfo,name:"ToggleGroupControlOptionIcon",path:"packages/components/src/toggle-group-control/toggle-group-control-option-icon/component.tsx#ToggleGroupControlOptionIcon"})}catch(__react_docgen_typescript_loader_error){}try{component.displayName="component",component.__docgenInfo={description:'`ToggleGroupControlOptionIcon` is a form component which is meant to be used as a\nchild of `ToggleGroupControl` and displays an icon.\n\n```jsx\n\nimport {\n__experimentalToggleGroupControl as ToggleGroupControl,\n__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,\nfrom \'@wordpress/components\';\nimport { formatLowercase, formatUppercase } from \'@wordpress/icons\';\n\nfunction Example() {\nreturn (\n\t<ToggleGroupControl>\n\t\t<ToggleGroupControlOptionIcon\n\t\t\tvalue="uppercase"\n\t\t\tlabel="Uppercase"\n\t\t\ticon={ formatUppercase }\n\t\t/>\n\t\t<ToggleGroupControlOptionIcon\n\t\t\tvalue="lowercase"\n\t\t\tlabel="Lowercase"\n\t\t\ticon={ formatLowercase }\n\t\t/>\n\t</ToggleGroupControl>\n);\n}\n```',displayName:"component",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number"}},icon:{defaultValue:null,description:"Icon displayed as the content of the option. Usually one of the icons from\nthe `@wordpress/icons` package, or a custom React `<svg>` icon.",name:"icon",required:!0,type:{name:"Element"}},label:{defaultValue:null,description:"The text to accessibly label the icon option. Will also be shown in a tooltip.",name:"label",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/toggle-group-control/toggle-group-control-option-icon/component.tsx#component"]={docgenInfo:component.__docgenInfo,name:"component",path:"packages/components/src/toggle-group-control/toggle-group-control-option-icon/component.tsx#component"})}catch(__react_docgen_typescript_loader_error){}}}]);