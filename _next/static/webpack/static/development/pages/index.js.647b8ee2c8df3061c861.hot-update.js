webpackHotUpdate("static/development/pages/index.js",{

/***/ "../dist/index.es.js":
/*!***************************!*\
  !*** ../dist/index.es.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "../node_modules/react-dom/server.browser.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);



function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var success = function success(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 426.667 426.667",
    width: 18,
    height: 18
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M213.333 0C95.518 0 0 95.514 0 213.333s95.518 213.333 213.333 213.333c117.828 0 213.333-95.514 213.333-213.333S331.157 0 213.333 0zm-39.134 322.918l-93.935-93.931 31.309-31.309 62.626 62.622 140.894-140.898 31.309 31.309-172.203 172.207z",
    fill: "#6ac259"
  }));
};

var warn = function warn(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 310.285 310.285",
    width: 18,
    height: 18
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M264.845 45.441C235.542 16.139 196.583 0 155.142 0 113.702 0 74.743 16.139 45.44 45.441 16.138 74.743 0 113.703 0 155.144c0 41.439 16.138 80.399 45.44 109.701 29.303 29.303 68.262 45.44 109.702 45.44s80.399-16.138 109.702-45.44c29.303-29.302 45.44-68.262 45.44-109.701.001-41.441-16.137-80.401-45.439-109.703zm-132.673 3.895a12.587 12.587 0 0 1 9.119-3.873h28.04c3.482 0 6.72 1.403 9.114 3.888 2.395 2.485 3.643 5.804 3.514 9.284l-4.634 104.895c-.263 7.102-6.26 12.933-13.368 12.933H146.33c-7.112 0-13.099-5.839-13.345-12.945L128.64 58.594c-.121-3.48 1.133-6.773 3.532-9.258zm23.306 219.444c-16.266 0-28.532-12.844-28.532-29.876 0-17.223 12.122-30.211 28.196-30.211 16.602 0 28.196 12.423 28.196 30.211.001 17.591-11.456 29.876-27.86 29.876z",
    fill: "#FFDA44"
  }));
};

var error = function error(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 51.976 51.976",
    width: 18,
    height: 18
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M44.373 7.603c-10.137-10.137-26.632-10.138-36.77 0-10.138 10.138-10.137 26.632 0 36.77s26.632 10.138 36.77 0c10.137-10.138 10.137-26.633 0-36.77zm-8.132 28.638a2 2 0 0 1-2.828 0l-7.425-7.425-7.778 7.778a2 2 0 1 1-2.828-2.828l7.778-7.778-7.425-7.425a2 2 0 1 1 2.828-2.828l7.425 7.425 7.071-7.071a2 2 0 1 1 2.828 2.828l-7.071 7.071 7.425 7.425a2 2 0 0 1 0 2.828z",
    fill: "#D80027"
  }));
};

var info = function info(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 23.625 23.625",
    width: 18,
    height: 18
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M11.812 0C5.289 0 0 5.289 0 11.812s5.289 11.813 11.812 11.813 11.813-5.29 11.813-11.813S18.335 0 11.812 0zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539s-.611-.814-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193z",
    fill: "#006DF0"
  }));
};

var Icons = {
  success: success,
  warn: warn,
  error: error,
  info: info
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".ct-container {\n\tposition: fixed;\n\twidth: 100%;\n\theight: 100vh;\n\ttop: 0px;\n\tleft: 0px;\n\tz-index: 2000;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tpointer-events: none;\n}\n\n.ct-row {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.ct-group {\n\tflex: 1;\n\tmargin: 10px 20px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\n.ct-group:first-child {\n\talign-items: flex-start;\n}\n\n.ct-group:last-child {\n\talign-items: flex-end;\n}\n\n.ct-flex-bottom {\n\tjustify-content: flex-end;\n}\n\n.ct-toast {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 12px 20px;\n\tbackground-color: #fff;\n\tbox-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n\tcolor: #000;\n\tborder-radius: 4px;\n\tmargin: 0px;\n\topacity: 1;\n\ttransition: 0.3s all ease-in-out;\n\tmin-height: 45px;\n}\n\n.ct-cursor-pointer {\n\tpointer-events: all;\n\tcursor: pointer;\n}\n\n.ct-icon-loading {\n\tdisplay: inline-block;\n\twidth: 20px;\n\theight: 20px;\n}\n\n.ct-icon-loading:after {\n\tcontent: ' ';\n\tdisplay: block;\n\twidth: 14px;\n\theight: 14px;\n\tmargin: 1px;\n\tborder-radius: 50%;\n\tborder: 2px solid #0088ff;\n\tborder-color: #0088ff transparent #0088ff transparent;\n\tanimation: ct-icon-loading 1.2s linear infinite;\n}\n\n@keyframes ct-icon-loading {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n.ct-text-group {\n\tmargin-left: 15px;\n}\n\n.ct-heading {\n\tfont-size: 18px;\n\tmargin: 0px;\n\tmargin-bottom: 5px;\n}\n\n.ct-text {\n\tfont-size: 14px;\n}\n\n@media (max-width: 768px) {\n\t.ct-row {\n\t\tjustify-content: flex-start;\n\t\tflex-direction: column;\n\t\tmargin: 7px 0px;\n\t}\n\n\t.ct-group {\n\t\tflex: none;\n\t\tmargin: 0px;\n\t}\n\n\t.ct-toast {\n\t\tmargin: 8px 15px;\n\t\twidth: initial;\n\t}\n}\n";
styleInject(css);

var colors = {
  success: '#6EC05F',
  info: '#1271EC',
  warn: '#FED953',
  error: '#D60A2E',
  loading: '#0088ff'
};

var getDOMNodeFromReact = function getDOMNodeFromReact(reactNode) {
  var div = document.createElement('div');
  div.innerHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToString(reactNode).trim();
  return div.firstChild;
};

var create = function create(text, options) {
  var _options$type = options.type,
      type = _options$type === void 0 ? 'info' : _options$type,
      _options$hideAfter = options.hideAfter,
      hideAfter = _options$hideAfter === void 0 ? 3 : _options$hideAfter,
      heading = options.heading,
      _options$position = options.position,
      position = _options$position === void 0 ? 'top-center' : _options$position,
      icon = options.icon,
      _options$bar = options.bar,
      bar = _options$bar === void 0 ? {} : _options$bar,
      onClick = options.onClick;

  if (!document.getElementById('ct-container')) {
    document.body.appendChild(getDOMNodeFromReact(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "ct-container",
      className: "ct-container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "ct-top",
      className: "ct-row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "ct-top-left",
      className: "ct-group"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "ct-top-center",
      className: "ct-group"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "ct-top-right",
      className: "ct-group"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "ct-bottom",
      className: "ct-row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "ct-bottom-left",
      className: "ct-group ct-flex-bottom"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "ct-bottom-center",
      className: "ct-group ct-flex-bottom"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "ct-bottom-right",
      className: "ct-group ct-flex-bottom"
    })))));
  }

  var parentNode = document.body.clientWidth > 768 ? document.getElementById("ct-".concat(position)) : document.getElementById("ct-".concat(position.includes('bottom') ? 'bottom' : 'top'));
  var CurrentIcon = Icons[type];
  var place = position.includes('bottom') ? 'Bottom' : 'Top';
  var toastClass = "ct-toast".concat(onClick ? ' ct-cursor-pointer' : '');
  var borderLeft = "".concat(bar.size || '3px', " ").concat(bar.style || 'solid', " ").concat(bar.color || colors[type]);
  var marginType = "margin".concat(place);

  var toastStyle = _defineProperty({
    paddingLeft: heading ? 25 : undefined,
    minHeight: heading ? 50 : undefined,
    opacity: 0,
    borderLeft: borderLeft
  }, marginType, -15);

  var toastNode = getDOMNodeFromReact(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: toastClass,
    style: toastStyle
  }, icon || (type !== 'loading' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CurrentIcon, null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ct-icon-loading"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ct-text-group",
    style: heading ? {
      marginLeft: 25
    } : {}
  }, heading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "ct-heading"
  }, heading), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ct-text"
  }, text))));

  if (onClick) {
    toastNode.addEventListener('click', onClick);
  }

  setTimeout(function () {
    toastNode.style.opacity = 1;
    toastNode.style["margin-".concat(place.toLowerCase())] = '15px';
  }, 10);
  parentNode.appendChild(toastNode);

  var hide = function hide() {
    toastNode.style.opacity = 0;
    toastNode.style["margin-".concat(place.toLowerCase())] = '-15px';
    setTimeout(function () {
      return parentNode.removeChild(toastNode);
    }, 300);
  };

  if (hideAfter <= 0) {
    return hide;
  }

  return new Promise(function (resolve) {
    setTimeout(function () {
      hide();
      resolve();
    }, hideAfter * 1000);
  });
};

var success$1 = function success(text, options) {
  return create(text, _objectSpread({}, options, {
    type: 'success'
  }));
};

var warn$1 = function warn(text, options) {
  return create(text, _objectSpread({}, options, {
    text: text,
    type: 'warn'
  }));
};

var error$1 = function error(text, options) {
  return create(text, _objectSpread({}, options, {
    text: text,
    type: 'error'
  }));
};

var info$1 = function info(text, options) {
  return create(text, _objectSpread({}, options, {
    text: text,
    type: 'info'
  }));
};

var loading = function loading(text, options) {
  return create(text, _objectSpread({}, options, {
    text: text,
    type: 'loading'
  }));
};

var index = {
  success: success$1,
  warn: warn$1,
  error: error$1,
  info: info$1,
  loading: loading,
  create: create
};

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ })

})
//# sourceMappingURL=index.js.647b8ee2c8df3061c861.hot-update.js.map