function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,a="object"==typeof self&&self&&self.Object===Object&&self,c=u||a||Function("return this")(),l=Object.prototype.toString,d=Math.max,s=Math.min,m=function(){return c.Date.now()};function p(e,t,n){var r,o,i,f,u,a,c=0,l=!1,p=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=r,i=o;return r=o=void 0,c=t,f=e.apply(i,n)}function j(e){return c=e,u=setTimeout(h,t),l?g(e):f}function T(e){var n=e-a;return void 0===a||n>=t||n<0||p&&e-c>=i}function h(){var e=m();if(T(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-a);return p?s(n,i-(e-c)):n}(e))}function w(e){return u=void 0,y&&r?g(e):(r=o=void 0,f)}function x(){var e=m(),n=T(e);if(r=arguments,o=this,a=e,n){if(void 0===u)return j(a);if(p)return u=setTimeout(h,t),g(a)}return void 0===u&&(u=setTimeout(h,t)),f}return t=b(t)||0,v(n)&&(l=!!n.leading,i=(p="maxWait"in n)?d(b(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),x.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=a=o=u=void 0},x.flush=function(){return void 0===u?f:w(m())},x}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=o.test(e);return u||i.test(e)?f(e.slice(2),u?2:8):r.test(e)?NaN:+e}var y=e((function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})}));const g={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),input:document.querySelector(".feedback-form input")},j={};g.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(j),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),g.form.addEventListener("input",y((function(e){j[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500));
//# sourceMappingURL=03-feedback.3fc15b37.js.map