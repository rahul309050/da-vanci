/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/loader2.js":
/*!*******************************!*\
  !*** ./components/loader2.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ImageBlock\": () => (/* binding */ ImageBlock),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// import Image from \"./Image\";\n// Import images\nconst container = {\n    hidden: {\n        translateY: \"0\"\n    },\n    show: {\n        translateY: \"-105%\",\n        transition: {\n            staggerChildren: 0.35,\n            duration: 1.2,\n            delay: 3.5\n        }\n    }\n};\nconst item = {\n    hidden: {\n        opacity: 0,\n        y: 0,\n        scale: 0.2\n    },\n    show: {\n        opacity: 1,\n        y: 0,\n        scale: 1,\n        transition: {\n            ease: [\n                0.6,\n                0.01,\n                -0.05,\n                0.95\n            ],\n            duration: 1\n        }\n    },\n    exit: {\n        opacity: 0,\n        y: -200,\n        transition: {\n            ease: \"easeInOut\",\n            duration: 0.8\n        }\n    }\n};\nconst itemMain = {\n    hidden: {\n        opacity: 2,\n        transition: {\n            // ease: [0.6, 0.01, -0.05, 0.95],\n            duration: 2\n        }\n    },\n    show: {\n        opacity: 0.1,\n        transition: {\n            ease: [\n                0.6,\n                0.01,\n                -0.05,\n                0.95\n            ],\n            duration: 2,\n            delay: 1\n        }\n    }\n};\nconst Loader = ({ setLoading  })=>{\n    const svgVariants = {\n        start: {\n            opacity: 1,\n            pathLength: 1,\n            transition: {\n                duration: 3.5,\n                ease: \"linear\",\n                repeat: Infinity\n            }\n        },\n        finished: {\n            opacity: 0.3,\n            pathLength: 0.4\n        },\n        transition: {\n            duration: 3.5,\n            ease: \"linear\",\n            repeat: Infinity\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        className: \"loader\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            variants: container,\n            onAnimationComplete: ()=>setLoading(false),\n            initial: \"hidden\",\n            animate: \"show\",\n            // initial={{ translateY:\"0\" }}\n            // animate={{ translateY:\"-105%\"  }}\n            exit: \"exit\",\n            className: \"loader-inner\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                variants: itemMain,\n                className: \"transition-image\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        width: \"339.266\",\n                        height: \"61.145\",\n                        viewBox: \"0 0 339.266 61.145\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                            id: \"Group_6\",\n                            \"data-name\": \"Group 6\",\n                            transform: \"translate(-480.19 -2069.685)\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                id: \"Group_5\",\n                                \"data-name\": \"Group 5\",\n                                transform: \"translate(480.19 2069.685)\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                    id: \"Group_4\",\n                                    \"data-name\": \"Group 4\",\n                                    transform: \"translate(0 0)\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.path, {\n                                            variants: svgVariants,\n                                            initial: \"finished\",\n                                            animate: \"start\",\n                                            id: \"Path_3\",\n                                            \"data-name\": \"Path 3\",\n                                            d: \"M480.19,2135.888v-59.1h17.365v25.064h.328l18.266-25.064h18.225l-19.453,26.252,20.354,32.846H515.083l-12.9-21.706-4.628,6.225v15.481Z\",\n                                            transform: \"translate(-480.19 -2075.766)\",\n                                            fill: \"#fff\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/akashsingh/Desktop/da-vanci/components/loader2.js\",\n                                            lineNumber: 114,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.path, {\n                                            variants: svgVariants,\n                                            initial: \"finished\",\n                                            animate: \"start\",\n                                            id: \"Path_4\",\n                                            \"data-name\": \"Path 4\",\n                                            d: \"M905.407,2112.912c0,6.226,3.072,9.625,8.682,9.625s8.682-3.4,8.682-9.625V2076.79h17.365v38.047c0,13.474-10.443,22.074-26.047,22.074s-26.047-8.6-26.047-22.074V2076.79h17.365Z\",\n                                            transform: \"translate(-829.272 -2075.766)\",\n                                            fill: \"#fff\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/akashsingh/Desktop/da-vanci/components/loader2.js\",\n                                            lineNumber: 124,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.path, {\n                                            variants: svgVariants,\n                                            initial: \"finished\",\n                                            animate: \"start\",\n                                            id: \"Path_5\",\n                                            \"data-name\": \"Path 5\",\n                                            d: \"M1323.775,2135.888H1306.41v-59.1h26.252c15.768,0,23.877,7.413,23.877,20.068,0,6.962-3.358,13.679-9.542,16.627l11.221,22.4h-19.412l-9.338-19.822h-5.693Zm0-31.289h7.167c4.874,0,7.863-2.99,7.863-7.455,0-4.382-3.154-7.535-7.823-7.535h-7.208Z\",\n                                            transform: \"translate(-1187.356 -2075.766)\",\n                                            fill: \"#fff\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/akashsingh/Desktop/da-vanci/components/loader2.js\",\n                                            lineNumber: 134,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.path, {\n                                            variants: svgVariants,\n                                            initial: \"finished\",\n                                            animate: \"start\",\n                                            id: \"Path_6\",\n                                            \"data-name\": \"Path 6\",\n                                            d: \"M1721.781,2124.133h-18.02l-3.072,11.754H1683l19.29-59.1h21.788l19.289,59.1h-18.511Zm-14.866-12.245h11.713l-5.693-21.46h-.328Z\",\n                                            transform: \"translate(-1509.678 -2075.766)\",\n                                            fill: \"#fff\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/akashsingh/Desktop/da-vanci/components/loader2.js\",\n                                            lineNumber: 144,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.path, {\n                                            variants: svgVariants,\n                                            initial: \"finished\",\n                                            animate: \"start\",\n                                            id: \"Path_7\",\n                                            \"data-name\": \"Path 7\",\n                                            d: \"M2130.368,2130.83c-18.758,0-29.856-11.017-29.856-30.634,0-19.372,11.1-30.511,29.323-30.511,14.825,0,25.883,8.723,27.194,20.846h-17.078c-1.146-4.341-5.037-7.167-10.034-7.167-7.372,0-11.713,6.061-11.713,16.586,0,10.771,4.956,17.2,12.573,17.2,5.652,0,9.665-3.153,10.157-7.9l.082-.819h-9.01v-11.55h25.72v7.782C2157.726,2120.837,2147.528,2130.83,2130.368,2130.83Z\",\n                                            transform: \"translate(-1867.031 -2069.685)\",\n                                            fill: \"#fff\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/akashsingh/Desktop/da-vanci/components/loader2.js\",\n                                            lineNumber: 154,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.path, {\n                                            variants: svgVariants,\n                                            initial: \"finished\",\n                                            animate: \"start\",\n                                            id: \"Path_8\",\n                                            \"data-name\": \"Path 8\",\n                                            d: \"M2587,2135.888h-41.692v-59.1H2587v13.8h-24.327v9.542h22.812v12.45h-22.812v9.5H2587Z\",\n                                            transform: \"translate(-2247.738 -2075.766)\",\n                                            fill: \"#fff\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/akashsingh/Desktop/da-vanci/components/loader2.js\",\n                                            lineNumber: 164,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/akashsingh/Desktop/da-vanci/components/loader2.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/akashsingh/Desktop/da-vanci/components/loader2.js\",\n                                lineNumber: 108,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/akashsingh/Desktop/da-vanci/components/loader2.js\",\n                            lineNumber: 103,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/akashsingh/Desktop/da-vanci/components/loader2.js\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"subtitle\",\n                        children: \"Websites | Mobile Apps | Softwares\"\n                    }, void 0, false, {\n                        fileName: \"/Users/akashsingh/Desktop/da-vanci/components/loader2.js\",\n                        lineNumber: 178,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/akashsingh/Desktop/da-vanci/components/loader2.js\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/akashsingh/Desktop/da-vanci/components/loader2.js\",\n            lineNumber: 85,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/akashsingh/Desktop/da-vanci/components/loader2.js\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, undefined);\n};\nconst ImageBlock = ({ posX , posY , variants , id  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        variants: variants,\n        className: `image-block ${id}`,\n        style: {\n            top: `${posY}vh`,\n            left: `${posX}vw `\n        }\n    }, void 0, false, {\n        fileName: \"/Users/akashsingh/Desktop/da-vanci/components/loader2.js\",\n        lineNumber: 190,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VFUsU0FBUTs0Q0FDUkMsU0FBUTs0Q0FDWk8sSUFBRzs0Q0FDSEMsYUFBVTs0Q0FDVkcsR0FBRTs0Q0FDRkYsV0FBVTs0Q0FDVkcsTUFBSzs7Ozs7O3NEQUVQLDhEQUFDekMsc0RBQVc7NENBQ1AwQixVQUFVUjs0Q0FDVFUsU0FBUTs0Q0FDUkMsU0FBUTs0Q0FDWk8sSUFBRzs0Q0FDSEMsYUFBVTs0Q0FDVkcsR0FBRTs0Q0FDRkYsV0FBVTs0Q0FDVkcsTUFBSzs7Ozs7O3NEQUVQLDhEQUFDekMsc0RBQVc7NENBQ1AwQixVQUFVUjs0Q0FDVFUsU0FBUTs0Q0FDUkMsU0FBUTs0Q0FDWk8sSUFBRzs0Q0FDSEMsYUFBVTs0Q0FDVkcsR0FBRTs0Q0FDRkYsV0FBVTs0Q0FDVkcsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU1mLDhEQUFDakI7d0JBQUlDLFdBQVU7a0NBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRcEM7QUFFTyxNQUFNaUIsYUFBYSxDQUFDLEVBQUVDLEtBQUksRUFBRUMsS0FBSSxFQUFFbEIsU0FBUSxFQUFFVSxHQUFFLEVBQUUsR0FBSztJQUMxRCxxQkFDRSw4REFBQ3BDLHFEQUFVO1FBQ1QwQixVQUFVQTtRQUNWRCxXQUFXLENBQUMsWUFBWSxFQUFFVyxHQUFHLENBQUM7UUFDOUJTLE9BQU87WUFDTEMsS0FBSyxDQUFDLEVBQUVGLEtBQUssRUFBRSxDQUFDO1lBQ2hCRyxNQUFNLENBQUMsRUFBRUosS0FBSyxHQUFHLENBQUM7UUFDcEI7Ozs7OztBQVNOLEVBQUU7QUFDRixpRUFBZTNCLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYS12aW5jaS8uL2NvbXBvbmVudHMvbG9hZGVyMi5qcz9hZWVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbi8vIGltcG9ydCBJbWFnZSBmcm9tIFwiLi9JbWFnZVwiO1xuXG4vLyBJbXBvcnQgaW1hZ2VzXG5cbmNvbnN0IGNvbnRhaW5lciA9IHtcbiAgaGlkZGVuOiB7XG4gICAgdHJhbnNsYXRlWTogXCIwXCIsXG4gIH0sXG4gIHNob3c6IHtcbiAgICB0cmFuc2xhdGVZOiBcIi0xMDUlXCIsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjM1LFxuICAgICAgZHVyYXRpb246IDEuMixcbiAgICAgIGRlbGF5OiAzLjUsXG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IGl0ZW0gPSB7XG4gIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB5OiAwLCBzY2FsZTogMC4yIH0sXG4gIHNob3c6IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHk6IDAsXG4gICAgc2NhbGU6IDEsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgZWFzZTogWzAuNiwgMC4wMSwgLTAuMDUsIDAuOTVdLFxuICAgICAgZHVyYXRpb246IDEsXG4gICAgfSxcbiAgfSxcbiAgZXhpdDoge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgeTogLTIwMCxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxuICAgICAgZHVyYXRpb246IDAuOCxcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgaXRlbU1haW4gPSB7XG4gIGhpZGRlbjoge1xuICAgIG9wYWNpdHk6IDIsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgLy8gZWFzZTogWzAuNiwgMC4wMSwgLTAuMDUsIDAuOTVdLFxuICAgICAgZHVyYXRpb246IDIsXG4gICAgfSxcbiAgfSxcbiAgc2hvdzoge1xuICAgIG9wYWNpdHk6IDAuMSxcblxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIGVhc2U6IFswLjYsIDAuMDEsIC0wLjA1LCAwLjk1XSxcbiAgICAgIGR1cmF0aW9uOiAyLFxuICAgICAgZGVsYXk6IDEsXG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IExvYWRlciA9ICh7IHNldExvYWRpbmcgfSkgPT4ge1xuICBjb25zdCBzdmdWYXJpYW50cyA9IHtcbiAgICBzdGFydDoge1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHBhdGhMZW5ndGg6IDEsXG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIGR1cmF0aW9uOiAzLjUsXG4gICAgICAgIGVhc2U6IFwibGluZWFyXCIsXG4gICAgICAgIHJlcGVhdDogSW5maW5pdHksXG4gICAgICB9LFxuICAgIH0sXG4gICAgZmluaXNoZWQ6IHtcbiAgICAgIG9wYWNpdHk6IDAuMyxcbiAgICAgIHBhdGhMZW5ndGg6IDAuNCxcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIGR1cmF0aW9uOiAzLjUsXG4gICAgICBlYXNlOiBcImxpbmVhclwiLFxuICAgICAgcmVwZWF0OiBJbmZpbml0eSxcbiAgICB9LFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgdmFyaWFudHM9e2NvbnRhaW5lcn1cbiAgICAgICAgb25BbmltYXRpb25Db21wbGV0ZT17KCkgPT4gc2V0TG9hZGluZyhmYWxzZSl9XG4gICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICBhbmltYXRlPVwic2hvd1wiXG4gICAgICAgIC8vIGluaXRpYWw9e3sgdHJhbnNsYXRlWTpcIjBcIiB9fVxuICAgICAgICAvLyBhbmltYXRlPXt7IHRyYW5zbGF0ZVk6XCItMTA1JVwiICB9fVxuICAgICAgICBleGl0PVwiZXhpdFwiXG4gICAgICAgIGNsYXNzTmFtZT1cImxvYWRlci1pbm5lclwiXG4gICAgICA+XG4gICAgICAgIHsvKiA8SW1hZ2VCbG9jayB2YXJpYW50cz17aXRlbX0gaWQ9XCJpbWFnZS0xXCIgLz4gKi99XG4gICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtpdGVtTWFpbn0gY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1pbWFnZVwiPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgd2lkdGg9XCIzMzkuMjY2XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjYxLjE0NVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDMzOS4yNjYgNjEuMTQ1XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICBpZD1cIkdyb3VwXzZcIlxuICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJHcm91cCA2XCJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00ODAuMTkgLTIwNjkuNjg1KVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgaWQ9XCJHcm91cF81XCJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJHcm91cCA1XCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNDgwLjE5IDIwNjkuNjg1KVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZyBpZD1cIkdyb3VwXzRcIiBkYXRhLW5hbWU9XCJHcm91cCA0XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMClcIj5cbiAgICAgICAgICAgICAgICAgIDxtb3Rpb24ucGF0aFxuICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50cz17c3ZnVmFyaWFudHN9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPVwiZmluaXNoZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT1cInN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJQYXRoXzNcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDNcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTQ4MC4xOSwyMTM1Ljg4OHYtNTkuMWgxNy4zNjV2MjUuMDY0aC4zMjhsMTguMjY2LTI1LjA2NGgxOC4yMjVsLTE5LjQ1MywyNi4yNTIsMjAuMzU0LDMyLjg0Nkg1MTUuMDgzbC0xMi45LTIxLjcwNi00LjYyOCw2LjIyNXYxNS40ODFaXCJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00ODAuMTkgLTIwNzUuNzY2KVwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bW90aW9uLnBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e3N2Z1ZhcmlhbnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD1cImZpbmlzaGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9XCJzdGFydFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aF80XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCA0XCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk05MDUuNDA3LDIxMTIuOTEyYzAsNi4yMjYsMy4wNzIsOS42MjUsOC42ODIsOS42MjVzOC42ODItMy40LDguNjgyLTkuNjI1VjIwNzYuNzloMTcuMzY1djM4LjA0N2MwLDEzLjQ3NC0xMC40NDMsMjIuMDc0LTI2LjA0NywyMi4wNzRzLTI2LjA0Ny04LjYtMjYuMDQ3LTIyLjA3NFYyMDc2Ljc5aDE3LjM2NVpcIlxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTgyOS4yNzIgLTIwNzUuNzY2KVwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bW90aW9uLnBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e3N2Z1ZhcmlhbnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD1cImZpbmlzaGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9XCJzdGFydFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aF81XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCA1XCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xMzIzLjc3NSwyMTM1Ljg4OEgxMzA2LjQxdi01OS4xaDI2LjI1MmMxNS43NjgsMCwyMy44NzcsNy40MTMsMjMuODc3LDIwLjA2OCwwLDYuOTYyLTMuMzU4LDEzLjY3OS05LjU0MiwxNi42MjdsMTEuMjIxLDIyLjRoLTE5LjQxMmwtOS4zMzgtMTkuODIyaC01LjY5M1ptMC0zMS4yODloNy4xNjdjNC44NzQsMCw3Ljg2My0yLjk5LDcuODYzLTcuNDU1LDAtNC4zODItMy4xNTQtNy41MzUtNy44MjMtNy41MzVoLTcuMjA4WlwiXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTE4Ny4zNTYgLTIwNzUuNzY2KVwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bW90aW9uLnBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e3N2Z1ZhcmlhbnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD1cImZpbmlzaGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9XCJzdGFydFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aF82XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCA2XCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xNzIxLjc4MSwyMTI0LjEzM2gtMTguMDJsLTMuMDcyLDExLjc1NEgxNjgzbDE5LjI5LTU5LjFoMjEuNzg4bDE5LjI4OSw1OS4xaC0xOC41MTFabS0xNC44NjYtMTIuMjQ1aDExLjcxM2wtNS42OTMtMjEuNDZoLS4zMjhaXCJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNTA5LjY3OCAtMjA3NS43NjYpXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxtb3Rpb24ucGF0aFxuICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50cz17c3ZnVmFyaWFudHN9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPVwiZmluaXNoZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT1cInN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJQYXRoXzdcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDdcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTIxMzAuMzY4LDIxMzAuODNjLTE4Ljc1OCwwLTI5Ljg1Ni0xMS4wMTctMjkuODU2LTMwLjYzNCwwLTE5LjM3MiwxMS4xLTMwLjUxMSwyOS4zMjMtMzAuNTExLDE0LjgyNSwwLDI1Ljg4Myw4LjcyMywyNy4xOTQsMjAuODQ2aC0xNy4wNzhjLTEuMTQ2LTQuMzQxLTUuMDM3LTcuMTY3LTEwLjAzNC03LjE2Ny03LjM3MiwwLTExLjcxMyw2LjA2MS0xMS43MTMsMTYuNTg2LDAsMTAuNzcxLDQuOTU2LDE3LjIsMTIuNTczLDE3LjIsNS42NTIsMCw5LjY2NS0zLjE1MywxMC4xNTctNy45bC4wODItLjgxOWgtOS4wMXYtMTEuNTVoMjUuNzJ2Ny43ODJDMjE1Ny43MjYsMjEyMC44MzcsMjE0Ny41MjgsMjEzMC44MywyMTMwLjM2OCwyMTMwLjgzWlwiXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTg2Ny4wMzEgLTIwNjkuNjg1KVwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bW90aW9uLnBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e3N2Z1ZhcmlhbnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD1cImZpbmlzaGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9XCJzdGFydFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aF84XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCA4XCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0yNTg3LDIxMzUuODg4aC00MS42OTJ2LTU5LjFIMjU4N3YxMy44aC0yNC4zMjd2OS41NDJoMjIuODEydjEyLjQ1aC0yMi44MTJ2OS41SDI1ODdaXCJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yMjQ3LjczOCAtMjA3NS43NjYpXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XG4gICAgICAgICAgV2Vic2l0ZXMgfCBNb2JpbGUgQXBwcyB8IFNvZnR3YXJlc1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICBcbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgSW1hZ2VCbG9jayA9ICh7IHBvc1gsIHBvc1ksIHZhcmlhbnRzLCBpZCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cbiAgICAgIGNsYXNzTmFtZT17YGltYWdlLWJsb2NrICR7aWR9YH1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHRvcDogYCR7cG9zWX12aGAsXG4gICAgICAgIGxlZnQ6IGAke3Bvc1h9dncgYCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgey8qIDxJbWFnZVxuICAgICAgICBzcmM9e2AvaW1hZ2VzLyR7aWR9LndlYnBgfVxuICAgICAgICBmYWxsYmFjaz17YC9pbWFnZXMvJHtpZH0uanBnYH1cbiAgICAgICAgYWx0PXtpZH1cbiAgICAgIC8+ICovfVxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJjb250YWluZXIiLCJoaWRkZW4iLCJ0cmFuc2xhdGVZIiwic2hvdyIsInRyYW5zaXRpb24iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJkdXJhdGlvbiIsImRlbGF5IiwiaXRlbSIsIm9wYWNpdHkiLCJ5Iiwic2NhbGUiLCJlYXNlIiwiZXhpdCIsIml0ZW1NYWluIiwiTG9hZGVyIiwic2V0TG9hZGluZyIsInN2Z1ZhcmlhbnRzIiwic3RhcnQiLCJwYXRoTGVuZ3RoIiwicmVwZWF0IiwiSW5maW5pdHkiLCJmaW5pc2hlZCIsImRpdiIsImNsYXNzTmFtZSIsInZhcmlhbnRzIiwib25BbmltYXRpb25Db21wbGV0ZSIsImluaXRpYWwiLCJhbmltYXRlIiwic3ZnIiwieG1sbnMiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJnIiwiaWQiLCJkYXRhLW5hbWUiLCJ0cmFuc2Zvcm0iLCJwYXRoIiwiZCIsImZpbGwiLCJJbWFnZUJsb2NrIiwicG9zWCIsInBvc1kiLCJzdHlsZSIsInRvcCIsImxlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/loader2.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_loader2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/loader2 */ \"./components/loader2.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_loader2__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_4__]);\n([_components_loader2__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n// import LoadingScreen from \"../components/loadingscreen\";\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setTimeout(()=>setIsLoading(true), 3500);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: !isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n            // initial={{ height: \"0\", y: \"0vh\" }}\n            initial: {\n                opacity: \"1\"\n            },\n            // animate={{ height: \"100vh\", y: \"-100vh\" }}\n            animate: {\n                opacity: \"0\"\n            },\n            transition: {\n                ease: \"easeIn\",\n                duration: 4,\n                delay: 4\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loader2__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/akashsingh/Desktop/da-vanci/pages/_app.js\",\n                lineNumber: 27,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/akashsingh/Desktop/da-vanci/pages/_app.js\",\n            lineNumber: 16,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/akashsingh/Desktop/da-vanci/pages/_app.js\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTZCO0FBQ3FCO0FBQ2xELDJEQUEyRDtBQUNSO0FBQ1o7QUFFdkMsU0FBU0ssTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRWhEQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RPLFdBQVcsSUFBTUQsYUFBYSxJQUFJLEdBQUc7SUFDdkMsR0FBRyxFQUFFO0lBQ0wscUJBQ0U7a0JBQ0csQ0FBQ0QsMEJBQ0EsOERBQUNKLHFEQUFVO1lBQ1Qsc0NBQXNDO1lBQ3RDUSxTQUFTO2dCQUFFQyxTQUFTO1lBQUk7WUFDeEIsNkNBQTZDO1lBQzdDQyxTQUFTO2dCQUFFRCxTQUFTO1lBQUk7WUFDeEJFLFlBQVk7Z0JBQ1ZDLE1BQU07Z0JBQ05DLFVBQVU7Z0JBQ1ZDLE9BQU87WUFDVDtzQkFFQSw0RUFBQ2xCLDJEQUFhQTs7Ozs7Ozs7O2lDQUdoQiw4REFBQ007WUFBVyxHQUFHQyxTQUFTOzs7OztnQkFDeEI7O0FBR1I7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RhLXZpbmNpLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9tYWluLnNjc3NcIjtcbmltcG9ydCBMb2FkaW5nU2NyZWVuIGZyb20gXCIuLi9jb21wb25lbnRzL2xvYWRlcjJcIjtcbi8vIGltcG9ydCBMb2FkaW5nU2NyZWVuIGZyb20gXCIuLi9jb21wb25lbnRzL2xvYWRpbmdzY3JlZW5cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SXNMb2FkaW5nKHRydWUpLCAzNTAwKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IWlzTG9hZGluZyA/IChcbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAvLyBpbml0aWFsPXt7IGhlaWdodDogXCIwXCIsIHk6IFwiMHZoXCIgfX1cbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IFwiMVwiIH19XG4gICAgICAgICAgLy8gYW5pbWF0ZT17eyBoZWlnaHQ6IFwiMTAwdmhcIiwgeTogXCItMTAwdmhcIiB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogXCIwXCIgfX1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICBlYXNlOiBcImVhc2VJblwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDQsXG4gICAgICAgICAgICBkZWxheTogNCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPExvYWRpbmdTY3JlZW4gLz5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICl9IFxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJMb2FkaW5nU2NyZWVuIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm1vdGlvbiIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwic2V0VGltZW91dCIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJlYXNlIiwiZHVyYXRpb24iLCJkZWxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();