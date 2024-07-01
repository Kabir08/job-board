"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/uncrypto";
exports.ids = ["vendor-chunks/uncrypto"];
exports.modules = {

/***/ "(rsc)/./node_modules/uncrypto/dist/crypto.node.cjs":
/*!****************************************************!*\
  !*** ./node_modules/uncrypto/dist/crypto.node.cjs ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nconst nodeCrypto = __webpack_require__(/*! node:crypto */ \"node:crypto\");\n\nfunction _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }\n\nconst nodeCrypto__default = /*#__PURE__*/_interopDefaultCompat(nodeCrypto);\n\nconst subtle = nodeCrypto__default.webcrypto?.subtle || {};\nconst randomUUID = () => {\n  return nodeCrypto__default.randomUUID();\n};\nconst getRandomValues = (array) => {\n  return nodeCrypto__default.webcrypto.getRandomValues(array);\n};\nconst _crypto = {\n  randomUUID,\n  getRandomValues,\n  subtle\n};\n\nexports[\"default\"] = _crypto;\nexports.getRandomValues = getRandomValues;\nexports.randomUUID = randomUUID;\nexports.subtle = subtle;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdW5jcnlwdG8vZGlzdC9jcnlwdG8ubm9kZS5janMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOENBQTZDLEVBQUUsYUFBYSxFQUFDOztBQUU3RCxtQkFBbUIsbUJBQU8sQ0FBQyxnQ0FBYTs7QUFFeEMscUNBQXFDOztBQUVyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWU7QUFDZix1QkFBdUI7QUFDdkIsa0JBQWtCO0FBQ2xCLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qb2ItYm9hcmQvLi9ub2RlX21vZHVsZXMvdW5jcnlwdG8vZGlzdC9jcnlwdG8ubm9kZS5janM/YTAzNCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmNvbnN0IG5vZGVDcnlwdG8gPSByZXF1aXJlKCdub2RlOmNyeXB0bycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHRDb21wYXQgKGUpIHsgcmV0dXJuIGUgJiYgdHlwZW9mIGUgPT09ICdvYmplY3QnICYmICdkZWZhdWx0JyBpbiBlID8gZS5kZWZhdWx0IDogZTsgfVxuXG5jb25zdCBub2RlQ3J5cHRvX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdENvbXBhdChub2RlQ3J5cHRvKTtcblxuY29uc3Qgc3VidGxlID0gbm9kZUNyeXB0b19fZGVmYXVsdC53ZWJjcnlwdG8/LnN1YnRsZSB8fCB7fTtcbmNvbnN0IHJhbmRvbVVVSUQgPSAoKSA9PiB7XG4gIHJldHVybiBub2RlQ3J5cHRvX19kZWZhdWx0LnJhbmRvbVVVSUQoKTtcbn07XG5jb25zdCBnZXRSYW5kb21WYWx1ZXMgPSAoYXJyYXkpID0+IHtcbiAgcmV0dXJuIG5vZGVDcnlwdG9fX2RlZmF1bHQud2ViY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhhcnJheSk7XG59O1xuY29uc3QgX2NyeXB0byA9IHtcbiAgcmFuZG9tVVVJRCxcbiAgZ2V0UmFuZG9tVmFsdWVzLFxuICBzdWJ0bGVcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9jcnlwdG87XG5leHBvcnRzLmdldFJhbmRvbVZhbHVlcyA9IGdldFJhbmRvbVZhbHVlcztcbmV4cG9ydHMucmFuZG9tVVVJRCA9IHJhbmRvbVVVSUQ7XG5leHBvcnRzLnN1YnRsZSA9IHN1YnRsZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/uncrypto/dist/crypto.node.cjs\n");

/***/ })

};
;