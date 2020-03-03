/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/email-editor/email-editor.ts":
/*!*****************************************************!*\
  !*** ./src/components/email-editor/email-editor.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EmailEditor; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");

class EmailEditor extends HTMLElement {
    constructor() {
        super();
        this.handleKey = (e) => {
            switch (e.keyCode) {
                case 44: //comma
                case 32: //space
                case 13: //enter
                    e.preventDefault();
                    this.populateArea();
                    this.textInput.focus();
                    break;
                default:
                    break;
            }
        };
        this.handleBlur = () => {
            this.populateArea();
        };
        this.handlePaste = () => {
            window.setTimeout(() => {
                this.populateArea();
                this.textInput.focus();
            }, 5);
        };
        this.handleAreaClick = (e) => {
            if (e.target === this.textarea) {
                this.textInput.focus();
            }
        };
        this.populateArea = () => {
            if (!this.textInput.value.length) {
                return;
            }
            this.textInput.remove();
            this.textarea.innerHTML += Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["parseEmailsHtml"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["serializeString"])(this.textInput.value));
            this.textInput.value = '';
            this.textInput.setAttribute('placeholder', 'Add more people...');
            this.textarea.appendChild(this.textInput);
            this.dispatchEvent(this.editorChangeEvt);
        };
        this.getEmailsCount = () => (this.querySelectorAll('email-item:not(.invalid)').length);
        this.addEmail = () => {
            this.textInput.value = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomEmail"])();
            this.populateArea();
        };
        this.innerHTML = `<div class="text-area">
            <input type="text" placeholder="Add people..."></input>
        </div>`;
        this.textarea = this.querySelector('div');
        this.textInput = this.querySelector('input');
        this.textInput.addEventListener('blur', this.handleBlur);
        this.textInput.addEventListener('keypress', this.handleKey);
        this.textInput.addEventListener('paste', this.handlePaste);
        this.textarea.addEventListener('click', this.handleAreaClick);
        this.editorChangeEvt = new CustomEvent('editor:change');
        this.textInput.focus();
    }
}


/***/ }),

/***/ "./src/components/email-item/email-item.ts":
/*!*************************************************!*\
  !*** ./src/components/email-item/email-item.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EmailItem; });
class EmailItem extends HTMLElement {
    constructor() {
        super();
        this.closeClickHandler = () => {
            this.remove();
        };
        this.querySelector('.close').addEventListener('click', this.closeClickHandler);
    }
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_email_editor_email_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/email-editor/email-editor */ "./src/components/email-editor/email-editor.ts");
/* harmony import */ var _components_email_item_email_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/email-item/email-item */ "./src/components/email-item/email-item.ts");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__);



window.customElements.define('email-editor', _components_email_editor_email_editor__WEBPACK_IMPORTED_MODULE_0__["default"]);
window.customElements.define('email-item', _components_email_item_email_item__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/*! exports provided: serializeString, parseEmailsHtml, getRandomDigit, isValidEmail, getRandomEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeString", function() { return serializeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseEmailsHtml", function() { return parseEmailsHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomDigit", function() { return getRandomDigit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidEmail", function() { return isValidEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomEmail", function() { return getRandomEmail; });
function serializeString(text) {
    return text.split(/[\s, ]+/).filter(el => el.length > 0 && el !== "​");
}
function parseEmailsHtml(emails) {
    return (emails.map((email) => (`<email-item${isValidEmail(email) ? '' : ' class="invalid"'}>
                    <span>${email}</span>
                    <i class="close">&#215</i>
                </email-item>`)).join(''));
}
function getRandomDigit() {
    return Math.floor(Math.random() * 10);
}
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function getRandomEmail() {
    const people = ['bgates', 'sjobs', 'jbezos', 'mzuckerberg',
        'emusk', 'toreilly', 'lpage', 'jive', 'rstallman', 'ltrovalds'];
    const domains = ['gmail', 'microsoft', 'miro', 'facebook', 'linkedin',
        'amazon', 'tesla', 'medium', 'linux', 'apple'];
    return `${people[getRandomDigit()]}@${domains[getRandomDigit()]}.com`;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW1haWwtZWRpdG9yL2VtYWlsLWVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbWFpbC1pdGVtL2VtYWlsLWl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQXFGO0FBQ3RFLE1BQU0sV0FBWSxTQUFRLFdBQVc7SUFFaEQ7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQW1CSixjQUFTLEdBQUcsQ0FBQyxDQUFnQixFQUFFLEVBQUU7WUFDckMs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LEtBQUs7OzhCQUVILENBQ2pCLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQ2QsQ0FBQztBQUNOLENBQUM7QUFFTSxTQUFTLGNBQWM7SUFDM0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBRU0sU0FBUyxZQUFZLENBQUMsS0FBWTtJQUNyQyxPQUFPLDRCQUE0QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxDQUFDO0FBRU0sU0FBUyxjQUFjO0lBQzFCLE1BQU0sTUFBTSxHQUFHLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsYUFBYTtRQUMxRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2hFLE1BQU0sT0FBTyxHQUFHLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFVBQVU7UUFDckUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9DLE9BQU8sR0FBRyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDO0FBQzFFLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBzZXJpYWxpemVTdHJpbmcsIHBhcnNlRW1haWxzSHRtbCwgZ2V0UmFuZG9tRW1haWwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWFpbEVkaXRvciBleHRlbmRzIEhUTUxFbGVtZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwidGV4dC1hcmVhXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFkZCBwZW9wbGUuLi5cIj48L2lucHV0PlxuICAgICAgICA8L2Rpdj5gO1xuICAgICAgICB0aGlzLnRleHRhcmVhID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbiAgICAgICAgdGhpcy50ZXh0SW5wdXQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgIHRoaXMudGV4dElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLmhhbmRsZUJsdXIpO1xuICAgICAgICB0aGlzLnRleHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHRoaXMuaGFuZGxlS2V5KTtcbiAgICAgICAgdGhpcy50ZXh0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCB0aGlzLmhhbmRsZVBhc3RlKTtcbiAgICAgICAgdGhpcy50ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQXJlYUNsaWNrKTtcbiAgICAgICAgdGhpcy5lZGl0b3JDaGFuZ2VFdnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2VkaXRvcjpjaGFuZ2UnKTtcbiAgICAgICAgdGhpcy50ZXh0SW5wdXQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRleHRhcmVhOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIHRleHRJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcml2YXRlIGVkaXRvckNoYW5nZUV2dDogQ3VzdG9tRXZlbnQ7XG5cblxuICAgIHByaXZhdGUgaGFuZGxlS2V5ID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgNDQ6Ly9jb21tYVxuICAgICAgICAgICAgY2FzZSAzMjovL3NwYWNlXG4gICAgICAgICAgICBjYXNlIDEzOi8vZW50ZXJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZUFyZWEoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRJbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlQmx1ciA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUFyZWEoKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlUGFzdGUgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVBcmVhKCk7XG4gICAgICAgICAgICB0aGlzLnRleHRJbnB1dC5mb2N1cygpO1xuICAgICAgICB9LCA1KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlQXJlYUNsaWNrID0gKGU6VUlFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQgPT09IHRoaXMudGV4dGFyZWEpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dElucHV0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHBvcHVsYXRlQXJlYSA9ICgpID0+IHtcbiAgICAgICAgaWYoIXRoaXMudGV4dElucHV0LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGV4dElucHV0LnJlbW92ZSgpO1xuICAgICAgICB0aGlzLnRleHRhcmVhLmlubmVySFRNTCArPSBwYXJzZUVtYWlsc0h0bWwoc2VyaWFsaXplU3RyaW5nKHRoaXMudGV4dElucHV0LnZhbHVlKSk7XG4gICAgICAgIHRoaXMudGV4dElucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMudGV4dElucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnQWRkIG1vcmUgcGVvcGxlLi4uJyk7XG4gICAgICAgIHRoaXMudGV4dGFyZWEuYXBwZW5kQ2hpbGQodGhpcy50ZXh0SW5wdXQpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5lZGl0b3JDaGFuZ2VFdnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRFbWFpbHNDb3VudCA9ICgpID0+IChcbiAgICAgICAgdGhpcy5xdWVyeVNlbGVjdG9yQWxsKCdlbWFpbC1pdGVtOm5vdCguaW52YWxpZCknKS5sZW5ndGhcbiAgICApO1xuXG4gICAgcHVibGljIGFkZEVtYWlsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnRleHRJbnB1dC52YWx1ZSA9IGdldFJhbmRvbUVtYWlsKCk7XG4gICAgICAgIHRoaXMucG9wdWxhdGVBcmVhKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1haWxJdGVtIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucXVlcnlTZWxlY3RvcignLmNsb3NlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlQ2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjbG9zZUNsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICB9XG59IiwiaW1wb3J0IEVtYWlsRWRpdG9yIGZyb20gJy4vY29tcG9uZW50cy9lbWFpbC1lZGl0b3IvZW1haWwtZWRpdG9yJztcbmltcG9ydCBFbWFpbEl0ZW0gZnJvbSAnLi9jb21wb25lbnRzL2VtYWlsLWl0ZW0vZW1haWwtaXRlbSdcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGVzLnNjc3MnO1xuXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdlbWFpbC1lZGl0b3InLCBFbWFpbEVkaXRvcik7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdlbWFpbC1pdGVtJywgRW1haWxJdGVtKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJcbiAgICBleHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplU3RyaW5nKHRleHQ6IHN0cmluZyk6c3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gdGV4dC5zcGxpdCgvW1xccywgXSsvKS5maWx0ZXIoZWwgPT4gZWwubGVuZ3RoID4gMCAmJiBlbCAhPT0gXCLigItcIik7XG4gICAgfVxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRW1haWxzSHRtbChlbWFpbHM6IHN0cmluZ1tdKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgZW1haWxzLm1hcCgoZW1haWwpID0+IChcbiAgICAgICAgICAgICAgICBgPGVtYWlsLWl0ZW0ke2lzVmFsaWRFbWFpbChlbWFpbCk/ICcnIDogJyBjbGFzcz1cImludmFsaWRcIid9PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke2VtYWlsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJjbG9zZVwiPiYjMjE1PC9pPlxuICAgICAgICAgICAgICAgIDwvZW1haWwtaXRlbT5gXG4gICAgICAgICAgICApKS5qb2luKCcnKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21EaWdpdCgpOm51bWJlciB7XG4gICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gaXNWYWxpZEVtYWlsKGVtYWlsOnN0cmluZyk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiAvXlteXFxzQF0rQFteXFxzQF0rXFwuW15cXHNAXSskLy50ZXN0KGVtYWlsKTtcbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tRW1haWwoKTpzdHJpbmcge1xuICAgICAgICBjb25zdCBwZW9wbGUgPSBbJ2JnYXRlcycsICdzam9icycsICdqYmV6b3MnLCAnbXp1Y2tlcmJlcmcnLCBcbiAgICAgICAgJ2VtdXNrJywgJ3RvcmVpbGx5JywgJ2xwYWdlJywgJ2ppdmUnLCAncnN0YWxsbWFuJywgJ2x0cm92YWxkcyddO1xuICAgICAgICBjb25zdCBkb21haW5zID0gWydnbWFpbCcsICdtaWNyb3NvZnQnLCAnbWlybycsICdmYWNlYm9vaycsICdsaW5rZWRpbicsXG4gICAgICAgICdhbWF6b24nLCAndGVzbGEnLCAnbWVkaXVtJywgJ2xpbnV4JywgJ2FwcGxlJ107XG4gICAgICAgIHJldHVybiBgJHtwZW9wbGVbZ2V0UmFuZG9tRGlnaXQoKV19QCR7ZG9tYWluc1tnZXRSYW5kb21EaWdpdCgpXX0uY29tYDtcbiAgICB9Il0sInNvdXJjZVJvb3QiOiIifQ==