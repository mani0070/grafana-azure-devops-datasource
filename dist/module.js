define(["@grafana/data","@grafana/runtime","@grafana/ui","lodash","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_runtime__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./AzureDevopsConnection.ts":
/*!**********************************!*\
  !*** ./AzureDevopsConnection.ts ***!
  \**********************************/
/*! exports provided: AzureDevopsProject, AzureDevopsPipeline, AzureDevopsTeam, AzureBacklogItem, AzureDevopsConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureDevopsProject", function() { return AzureDevopsProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureDevopsPipeline", function() { return AzureDevopsPipeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureDevopsTeam", function() { return AzureDevopsTeam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureBacklogItem", function() { return AzureBacklogItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureDevopsConnection", function() { return AzureDevopsConnection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__);



var AzureDevopsProject =
/** @class */
function () {
  function AzureDevopsProject(options) {
    this.id = options.id || '';
    this.name = options.name || '';
    this.description = options.description || '';
  }

  AzureDevopsProject.prototype.asSelectable = function () {
    return {
      value: this.id,
      label: this.name
    };
  };

  return AzureDevopsProject;
}();



var AzureDevopsPipeline =
/** @class */
function () {
  function AzureDevopsPipeline(options) {
    this.id = options.id || '';
    this.name = options.name || '';
    this.description = options.description || '';
  }

  AzureDevopsPipeline.prototype.asSelectable = function () {
    return {
      value: this.id,
      label: this.name
    };
  };

  return AzureDevopsPipeline;
}();



var AzureDevopsTeam =
/** @class */
function () {
  function AzureDevopsTeam(options) {
    this.id = options.id || '';
    this.name = options.name || '';
    this.description = options.description || '';
  }

  AzureDevopsTeam.prototype.asSelectable = function () {
    return {
      value: this.id,
      label: this.name
    };
  };

  return AzureDevopsTeam;
}();



var AzureBacklogItem =
/** @class */
function () {
  function AzureBacklogItem(options) {
    this.id = options.id || '';
    this.name = options.name || '';
    this.description = options.description || '';
  }

  AzureBacklogItem.prototype.asSelectable = function () {
    return {
      value: this.id,
      label: this.name
    };
  };

  return AzureBacklogItem;
}();



var doBackendRequest = function doBackendRequest(requestObject, maxRetries) {
  if (maxRetries === void 0) {
    maxRetries = 1;
  }

  return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__["getBackendSrv"])().datasourceRequest(requestObject)["catch"](function (error) {
    if (maxRetries > 0) {
      return doBackendRequest(requestObject, maxRetries - 1);
    } else {
      console.error("Error while retrieving data from " + requestObject.url, error);
      return {};
    }
  });
};

var AzureDevopsConnection =
/** @class */
function () {
  function AzureDevopsConnection(instanceSettings) {
    this.instanceSettings = instanceSettings;
    this.projects = [];
    this.url = this.instanceSettings.url;
  }

  AzureDevopsConnection.prototype.getProjects = function () {
    var _this = this;

    if (this.projects.length > 0) {
      return new Promise(function (resolve) {
        resolve(_this.projects);
      });
    } else {
      return doBackendRequest({
        method: 'GET',
        url: this.url + "/_apis/projects?api-version=6.0-preview.4"
      }, 2).then(function (response) {
        if (response && response.data && response.data.value) {
          _this.projects = (response.data.value || []).map(function (result) {
            return new AzureDevopsProject(result);
          });
        }

        return _this.projects;
      })["catch"](function (ex) {
        console.error(ex);
        return _this.projects;
      });
    }
  };

  AzureDevopsConnection.prototype.getPipelines = function (projectId) {
    var _this = this;

    return doBackendRequest({
      method: 'GET',
      url: this.url + ("/" + projectId + "/_apis/pipelines?api-version=6.0-preview.1")
    }, 2).then(function (response) {
      if (response && response.data && response.data.value) {
        _this.projects = (response.data.value || []).map(function (result) {
          return new AzureDevopsPipeline(result);
        });
      }

      return _this.projects;
    })["catch"](function (ex) {
      console.error(ex);
      return _this.projects;
    });
  };

  AzureDevopsConnection.prototype.getPipelineRuns = function (projectId, pipelineId) {
    return doBackendRequest({
      method: 'GET',
      url: this.url + ("/" + projectId + "/_apis/pipelines/" + pipelineId + "/runs?api-version=6.0-preview.1")
    }, 2).then(function (response) {
      if (response && response.data && response.data.value) {
        return (response.data.value || []).map(function (result) {
          return result;
        });
      }
    })["catch"](function (ex) {
      console.error(ex);
      return [];
    });
  };

  AzureDevopsConnection.prototype.getReleaseDeployments = function (projectId) {
    return doBackendRequest({
      method: 'GET',
      url: this.url + ("/" + projectId + "/_apis/release/deployments?api-version=6.0-preview.2")
    }, 2).then(function (response) {
      console.log(response);

      if (response && response.data && response.data.value) {
        return (response.data.value || []).map(function (result) {
          return result;
        });
      }
    })["catch"](function (ex) {
      console.error(ex);
      return [];
    });
  };

  AzureDevopsConnection.prototype.getBuildBuilds = function (projectId) {
    return doBackendRequest({
      method: 'GET',
      url: this.url + ("/" + projectId + "/_apis/build/builds?api-version=6.0-preview.6")
    }, 2).then(function (response) {
      console.log(response);

      if (response && response.data && response.data.value) {
        return (response.data.value || []).map(function (result) {
          return result;
        });
      }
    })["catch"](function (ex) {
      console.error(ex);
      return [];
    });
  };

  AzureDevopsConnection.prototype.getTeamsByProject = function (projectId) {
    return doBackendRequest({
      method: 'GET',
      url: this.url + ("/_apis/projects/" + projectId + "/teams?api-version=6.0-preview.3")
    }, 2).then(function (response) {
      console.log(response);

      if (response && response.data && response.data.value) {
        return (response.data.value || []).map(function (result) {
          return new AzureDevopsTeam(result);
        });
      }
    })["catch"](function (ex) {
      console.error(ex);
      return [];
    });
  };

  AzureDevopsConnection.prototype.getBacklogsByTeam = function (projectId, teamId) {
    return doBackendRequest({
      method: 'GET',
      url: this.url + ("/" + projectId + "/" + teamId + "/_apis/work/backlogs?api-version=6.0-preview.1")
    }, 2).then(function (response) {
      console.log(response);

      if (response && response.data && response.data.value) {
        return (response.data.value || []).map(function (result) {
          return new AzureBacklogItem(result);
        });
      }
    })["catch"](function (ex) {
      console.error(ex);
      return [];
    });
  };

  AzureDevopsConnection.prototype.testConnection = function () {
    var _this = this;

    return new Promise(function (resolve, reject) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          this.getProjects().then(function (res) {
            resolve({
              message: "Successfully Connected to Azure Devops. " + res.length + " projects found.",
              status: 'success'
            });
          })["catch"](function (ex) {
            reject({
              message: 'Failed to fetch details from Azure Devops',
              status: 'error'
            });
          });
          return [2
          /*return*/
          ];
        });
      });
    });
  };

  return AzureDevopsConnection;
}();



/***/ }),

/***/ "./AzureDevopsDatasource.ts":
/*!**********************************!*\
  !*** ./AzureDevopsDatasource.ts ***!
  \**********************************/
/*! exports provided: AzureDevopsDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureDevopsDataSource", function() { return AzureDevopsDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AzureDevopsConnection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AzureDevopsConnection */ "./AzureDevopsConnection.ts");



var AzureDevopsDataSource =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AzureDevopsDataSource, _super);

  function AzureDevopsDataSource(instanceSettings) {
    return _super.call(this, instanceSettings) || this;
  }

  AzureDevopsDataSource.prototype.query = function (options) {
    var _this = this;

    var queries = options.targets.filter(function (item) {
      return item.hide !== true;
    });
    var promises = [];
    queries.filter(function (q) {
      return q.queryType === 'pipelines_runs';
    }).forEach(function (q) {
      promises.push(_this.getPipelineRuns(q.projectId, q.pipelineId));
    });
    queries.filter(function (q) {
      return q.queryType === 'release_deployments';
    }).forEach(function (q) {
      promises.push(_this.getReleaseDeployments(q.projectId));
    });
    queries.filter(function (q) {
      return q.queryType === 'build_builds';
    }).forEach(function (q) {
      promises.push(_this.getBuildBuilds(q.projectId));
    });
    queries.filter(function (q) {
      return q.queryType === 'teams';
    }).forEach(function (q) {
      promises.push(_this.getTeamsByProject(q.projectId));
    });
    queries.filter(function (q) {
      return q.queryType === 'teams_backlogs';
    }).forEach(function (q) {
      promises.push(_this.getBacklogsByTeam(q.projectId, q.teamId));
    });
    return Promise.all(promises).then(function (results) {
      return results;
    });
  };

  return AzureDevopsDataSource;
}(_AzureDevopsConnection__WEBPACK_IMPORTED_MODULE_1__["AzureDevopsConnection"]);



/***/ }),

/***/ "./ctrl/AzureDevopsPipeline.tsx":
/*!**************************************!*\
  !*** ./ctrl/AzureDevopsPipeline.tsx ***!
  \**************************************/
/*! exports provided: AzureDevopsPipelineCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureDevopsPipelineCtrl", function() { return AzureDevopsPipelineCtrl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AzureDevopsConnection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../AzureDevopsConnection */ "./AzureDevopsConnection.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__);






var AzureDevopsPipelineCtrl =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AzureDevopsPipelineCtrl, _super);

  function AzureDevopsPipelineCtrl() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["defaults"])(_this.state, {
      projectId: '',
      AzureDevopsPipelines: []
    });

    _this.loadPipelines = function () {
      return new Promise(function (resolve) {
        var az = new _AzureDevopsConnection__WEBPACK_IMPORTED_MODULE_3__["AzureDevopsConnection"](_this.props.datasource.instanceSettings);
        az.getPipelines(_this.props.query.projectId || '').then(function (res) {
          _this.setState({
            AzureDevopsPipelines: res.map(function (r) {
              return r.asSelectable();
            })
          });

          resolve();
        });
      });
    };

    _this.componentDidUpdate = function (prevProps) {
      if (_this.props.query.projectId !== prevProps.query.projectId) {
        var _a = _this.props,
            query = _a.query,
            onChange = _a.onChange;

        _this.loadPipelines();

        onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
          pipelineId: '',
          pipelineName: ''
        }));
      }
    };

    _this.onPipelineIdChange = function (event) {
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        pipelineId: event.value,
        pipelineName: event.label
      }));
    };

    return _this;
  }

  AzureDevopsPipelineCtrl.prototype.getPipelines = function () {
    return this.state.AzureDevopsPipelines;
  };

  AzureDevopsPipelineCtrl.prototype.componentWillMount = function () {
    this.state.projectId = this.props.query.projectId || '';
    this.loadPipelines();
  };

  AzureDevopsPipelineCtrl.prototype.render = function () {
    var query = this.props.query;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form gf-form--grow"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "gf-form-label width-12",
      title: "Projects"
    }, "Pipeline"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Select"], {
      className: "width-24",
      options: this.state.AzureDevopsPipelines,
      onChange: this.onPipelineIdChange,
      defaultValue: query.pipelineId,
      value: this.state.AzureDevopsPipelines.find(function (proj) {
        return proj.value === query.pipelineId;
      }) || {
        label: query.pipelineId,
        value: query.pipelineName
      },
      allowCustomValue: true
    })))));
  };

  return AzureDevopsPipelineCtrl;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);



/***/ }),

/***/ "./ctrl/AzureDevopsProject.tsx":
/*!*************************************!*\
  !*** ./ctrl/AzureDevopsProject.tsx ***!
  \*************************************/
/*! exports provided: AzureDevopsProjectCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureDevopsProjectCtrl", function() { return AzureDevopsProjectCtrl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AzureDevopsConnection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../AzureDevopsConnection */ "./AzureDevopsConnection.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__);






var AzureDevopsProjectCtrl =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AzureDevopsProjectCtrl, _super);

  function AzureDevopsProjectCtrl() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["defaults"])(_this.state, {
      AzureDevopsProjects: []
    });

    _this.onProjectIdChange = function (event) {
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        projectId: event.value,
        projectName: event.label
      }));
    };

    return _this;
  }

  AzureDevopsProjectCtrl.prototype.componentWillMount = function () {
    var _this = this;

    var az = new _AzureDevopsConnection__WEBPACK_IMPORTED_MODULE_3__["AzureDevopsConnection"](this.props.datasource.instanceSettings);
    az.getProjects().then(function (res) {
      _this.setState({
        AzureDevopsProjects: res.map(function (r) {
          return r.asSelectable();
        })
      });
    });
  };

  AzureDevopsProjectCtrl.prototype.render = function () {
    var query = this.props.query;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form gf-form--grow"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "gf-form-label width-12",
      title: "Projects"
    }, "Projects"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Select"], {
      className: "width-24",
      options: this.state.AzureDevopsProjects,
      onChange: this.onProjectIdChange,
      defaultValue: query.projectId,
      value: this.state.AzureDevopsProjects.find(function (proj) {
        return proj.value === query.projectId;
      }) || {
        label: query.projectId,
        value: query.projectName
      },
      allowCustomValue: true
    })))));
  };

  return AzureDevopsProjectCtrl;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);



/***/ }),

/***/ "./ctrl/AzureDevopsTeams.tsx":
/*!***********************************!*\
  !*** ./ctrl/AzureDevopsTeams.tsx ***!
  \***********************************/
/*! exports provided: AzureDevopsTeamsCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureDevopsTeamsCtrl", function() { return AzureDevopsTeamsCtrl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AzureDevopsConnection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../AzureDevopsConnection */ "./AzureDevopsConnection.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__);






var AzureDevopsTeamsCtrl =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AzureDevopsTeamsCtrl, _super);

  function AzureDevopsTeamsCtrl() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["defaults"])(_this.state, {
      projectId: '',
      Teams: []
    });

    _this.loadTeams = function () {
      return new Promise(function (resolve) {
        var az = new _AzureDevopsConnection__WEBPACK_IMPORTED_MODULE_3__["AzureDevopsConnection"](_this.props.datasource.instanceSettings);
        az.getTeamsByProject(_this.props.query.projectId || '').then(function (res) {
          _this.setState({
            Teams: res.map(function (r) {
              return r.asSelectable();
            })
          });

          resolve();
        });
      });
    };

    _this.componentDidUpdate = function (prevProps) {
      if (_this.props.query.projectId !== prevProps.query.projectId) {
        var _a = _this.props,
            query = _a.query,
            onChange = _a.onChange;

        _this.loadTeams();

        onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
          teamId: '',
          teamName: ''
        }));
      }
    };

    _this.onTeamIdChange = function (event) {
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        teamId: event.value,
        teamName: event.label
      }));
    };

    return _this;
  }

  AzureDevopsTeamsCtrl.prototype.getPipelines = function () {
    return this.state.Teams;
  };

  AzureDevopsTeamsCtrl.prototype.componentWillMount = function () {
    this.state.projectId = this.props.query.projectId || '';
    this.loadTeams();
  };

  AzureDevopsTeamsCtrl.prototype.render = function () {
    var query = this.props.query;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form gf-form--grow"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "gf-form-label width-12",
      title: "Team"
    }, "Team"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["Select"], {
      className: "width-24",
      options: this.state.Teams,
      onChange: this.onTeamIdChange,
      defaultValue: query.teamId,
      value: this.state.Teams.find(function (proj) {
        return proj.value === query.teamId;
      }) || {
        label: query.teamId,
        value: query.teamName
      },
      allowCustomValue: true
    })))));
  };

  return AzureDevopsTeamsCtrl;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);



/***/ }),

/***/ "./datasource.ts":
/*!***********************!*\
  !*** ./datasource.ts ***!
  \***********************/
/*! exports provided: Datasource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Datasource", function() { return Datasource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AzureDevopsDatasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AzureDevopsDatasource */ "./AzureDevopsDatasource.ts");





var Datasource =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Datasource, _super);

  function Datasource(instanceSettings, templateSrv) {
    var _this = _super.call(this, instanceSettings) || this;

    _this.instanceSettings = instanceSettings;
    _this.templateSrv = templateSrv;
    _this.azureDevopsDataSource = new _AzureDevopsDatasource__WEBPACK_IMPORTED_MODULE_3__["AzureDevopsDataSource"](_this.instanceSettings);
    return _this;
  }

  Datasource.prototype.testDatasource = function () {
    return this.azureDevopsDataSource.testConnection();
  };

  Datasource.prototype.query = function (options) {
    var promises = [];
    var azureDevopsOptions = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(options);

    if (azureDevopsOptions.targets.length > 0) {
      var azureDevopsPromise = this.azureDevopsDataSource.query(azureDevopsOptions);

      if (azureDevopsPromise) {
        promises.push(azureDevopsPromise);
      }
    }

    return Promise.all(promises).then(function (results) {
      return {
        data: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["flatten"])(results)
      };
    });
  };

  Datasource.prototype.annotationQuery = function () {
    var promises = [];
    return Promise.all(promises).then(function (results) {
      return [];
    });
  };

  Datasource.prototype.metricFindQuery = function (query) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var results, projects, projectId, teams, projectId, teams;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!query) {
              return [2
              /*return*/
              , Promise.resolve([])];
            }

            query = this.templateSrv.replace(query);
            results = [];
            if (!(query.startsWith('Projects(') && query.endsWith(')'))) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , this.azureDevopsDataSource.getProjects()];

          case 1:
            projects = _a.sent();
            results = projects.map(function (p) {
              return p.asSelectable();
            }).map(function (p) {
              return {
                text: p.label,
                value: p.value
              };
            });
            return [3
            /*break*/
            , 6];

          case 2:
            if (!(query.startsWith('Teams(') && query.endsWith(')'))) return [3
            /*break*/
            , 4];
            projectId = query.replace("Teams(", "").slice(0, -1);
            return [4
            /*yield*/
            , this.azureDevopsDataSource.getTeamsByProject(projectId)];

          case 3:
            teams = _a.sent();
            results = teams.map(function (p) {
              return p.asSelectable();
            }).map(function (p) {
              return {
                text: p.label,
                value: p.value
              };
            });
            return [3
            /*break*/
            , 6];

          case 4:
            if (!(query.startsWith('Pipelines(') && query.endsWith(')'))) return [3
            /*break*/
            , 6];
            projectId = query.replace("Pipelines(", "").slice(0, -1);
            return [4
            /*yield*/
            , this.azureDevopsDataSource.getPipelines(projectId)];

          case 5:
            teams = _a.sent();
            results = teams.map(function (p) {
              return p.asSelectable();
            }).map(function (p) {
              return {
                text: p.label,
                value: p.value
              };
            });
            _a.label = 6;

          case 6:
            return [2
            /*return*/
            , Promise.resolve(results)];
        }
      });
    });
  };

  return Datasource;
}(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["DataSourceApi"]);



/***/ }),

/***/ "./editors/AzureDevopsAnnotationsEditor.tsx":
/*!**************************************************!*\
  !*** ./editors/AzureDevopsAnnotationsEditor.tsx ***!
  \**************************************************/
/*! exports provided: AzureDevopsAnnotationsEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureDevopsAnnotationsEditor", function() { return AzureDevopsAnnotationsEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var AzureDevopsAnnotationsEditor =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AzureDevopsAnnotationsEditor, _super);

  function AzureDevopsAnnotationsEditor() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AzureDevopsAnnotationsEditor.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Azure Devops Annotations Editor");
  };

  return AzureDevopsAnnotationsEditor;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./editors/AzureDevopsConfigEditor.tsx":
/*!*********************************************!*\
  !*** ./editors/AzureDevopsConfigEditor.tsx ***!
  \*********************************************/
/*! exports provided: AzureDevopsConfigEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureDevopsConfigEditor", function() { return AzureDevopsConfigEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);




var AzureDevopsConfigEditor =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AzureDevopsConfigEditor, _super);

  function AzureDevopsConfigEditor(props) {
    return _super.call(this, props) || this;
  }

  AzureDevopsConfigEditor.prototype.render = function () {
    var _a = this.props,
        options = _a.options,
        onOptionsChange = _a.onOptionsChange;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["DataSourceHttpSettings"], {
      defaultUrl: "https://dev.azure.com/<INSTANCE>",
      dataSourceConfig: options,
      onChange: onOptionsChange
    });
  };

  return AzureDevopsConfigEditor;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./editors/AzureDevopsQueryEditor.tsx":
/*!********************************************!*\
  !*** ./editors/AzureDevopsQueryEditor.tsx ***!
  \********************************************/
/*! exports provided: AzureDevopsQueryEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureDevopsQueryEditor", function() { return AzureDevopsQueryEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ctrl_AzureDevopsProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../ctrl/AzureDevopsProject */ "./ctrl/AzureDevopsProject.tsx");
/* harmony import */ var _ctrl_AzureDevopsPipeline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../ctrl/AzureDevopsPipeline */ "./ctrl/AzureDevopsPipeline.tsx");
/* harmony import */ var _ctrl_AzureDevopsTeams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../ctrl/AzureDevopsTeams */ "./ctrl/AzureDevopsTeams.tsx");







var serviceTypes = [{
  label: 'Pipelines',
  value: 'pipelines'
}, {
  label: 'Boards',
  value: 'boards'
}, {
  label: 'Repositories',
  value: 'repositories'
}, {
  label: 'Test Plans',
  value: 'testPlans'
}, {
  label: 'Artifacts',
  value: 'artifacts'
}];
var queryTypes = [{
  label: 'Pipeline Runs',
  value: 'pipelines_runs'
}, {
  label: 'Release Deployments',
  value: 'release_deployments'
}, {
  label: 'Build Builds',
  value: 'build_builds'
}, {
  label: 'Teams',
  value: 'teams'
}, {
  label: 'Backlogs',
  value: 'teams_backlogs'
}, {
  label: 'WorkItem',
  value: 'teams_work_items'
}];

var AzureDevopsQueryEditor =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AzureDevopsQueryEditor, _super);

  function AzureDevopsQueryEditor() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onQueryTypeChange = function (service) {
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        queryType: service.value
      }));
    };

    _this.onServiceTypeChange = function (service) {
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        serviceType: service.value
      }));
    };

    return _this;
  }

  AzureDevopsQueryEditor.prototype.render = function () {
    var query = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["defaults"])(this.props.query, {
      serviceType: 'pipelines',
      queryType: 'pipelines_runs'
    });
    var DetailCtrl;

    switch (query.queryType) {
      case 'pipelines_runs':
        if (query && query.serviceType === 'pipelines' && query.projectId) {
          DetailCtrl = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ctrl_AzureDevopsPipeline__WEBPACK_IMPORTED_MODULE_5__["AzureDevopsPipelineCtrl"], {
            onChange: this.props.onChange,
            query: query,
            datasource: this.props.datasource
          });
        }

        break;

      default:
        DetailCtrl = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ctrl_AzureDevopsTeams__WEBPACK_IMPORTED_MODULE_6__["AzureDevopsTeamsCtrl"], {
          onChange: this.props.onChange,
          query: query,
          datasource: this.props.datasource
        });
        break;
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "gf-form-label width-12",
      title: "Query Type"
    }, "Service Type"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
      className: "width-24",
      value: serviceTypes.find(function (service) {
        return service.value === query.serviceType;
      }),
      options: serviceTypes,
      defaultValue: query.serviceType,
      onChange: this.onServiceTypeChange
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "gf-form-label width-12",
      title: "Query Type"
    }, "Service Type"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
      className: "width-24",
      value: queryTypes.find(function (service) {
        return service.value === query.queryType;
      }),
      options: queryTypes,
      defaultValue: query.queryType,
      onChange: this.onQueryTypeChange
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ctrl_AzureDevopsProject__WEBPACK_IMPORTED_MODULE_4__["AzureDevopsProjectCtrl"], {
      onChange: this.props.onChange,
      query: query,
      datasource: this.props.datasource
    }), DetailCtrl);
  };

  return AzureDevopsQueryEditor;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);



/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datasource */ "./datasource.ts");
/* harmony import */ var _editors_AzureDevopsConfigEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editors/AzureDevopsConfigEditor */ "./editors/AzureDevopsConfigEditor.tsx");
/* harmony import */ var _editors_AzureDevopsQueryEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editors/AzureDevopsQueryEditor */ "./editors/AzureDevopsQueryEditor.tsx");
/* harmony import */ var _editors_AzureDevopsAnnotationsEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editors/AzureDevopsAnnotationsEditor */ "./editors/AzureDevopsAnnotationsEditor.tsx");





var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["DataSourcePlugin"](_datasource__WEBPACK_IMPORTED_MODULE_1__["Datasource"]).setConfigEditor(_editors_AzureDevopsConfigEditor__WEBPACK_IMPORTED_MODULE_2__["AzureDevopsConfigEditor"]).setQueryEditor(_editors_AzureDevopsQueryEditor__WEBPACK_IMPORTED_MODULE_3__["AzureDevopsQueryEditor"]).setAnnotationQueryCtrl(_editors_AzureDevopsAnnotationsEditor__WEBPACK_IMPORTED_MODULE_4__["AzureDevopsAnnotationsEditor"]);

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/runtime":
/*!***********************************!*\
  !*** external "@grafana/runtime" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_runtime__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map