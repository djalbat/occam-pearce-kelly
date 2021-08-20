(() => {
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };

  // lib/edge.js
  var require_edge = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Edge = /* @__PURE__ */ function() {
      function Edge2(sourceVertexName2, targetVertexName2) {
        _classCallCheck(this, Edge2);
        this.sourceVertexName = sourceVertexName2;
        this.targetVertexName = targetVertexName2;
      }
      _createClass(Edge2, [
        {
          key: "getSourceVertexName",
          value: function getSourceVertexName() {
            return this.sourceVertexName;
          }
        },
        {
          key: "getTargetVertexName",
          value: function getTargetVertexName() {
            return this.targetVertexName;
          }
        },
        {
          key: "match",
          value: function match(edge) {
            var sourceVertexName2 = edge.getSourceVertexName(), targetVertexName2 = edge.getTargetVertexName(), matches = this.sourceVertexName === sourceVertexName2 && this.targetVertexName === targetVertexName2;
            return matches;
          }
        },
        {
          key: "matchVertexName",
          value: function matchVertexName(vertexName2) {
            var matches = this.sourceVertexName === vertexName2 || this.targetVertexName === vertexName2;
            return matches;
          }
        },
        {
          key: "matchSourceVertexName",
          value: function matchSourceVertexName(sourceVertexName2) {
            var matches = this.sourceVertexName === sourceVertexName2;
            return matches;
          }
        },
        {
          key: "matchTargetVertexName",
          value: function matchTargetVertexName(targetVertexName2) {
            var matches = this.targetVertexName === targetVertexName2;
            return matches;
          }
        },
        {
          key: "matchVertexNames",
          value: function matchVertexNames(sourceVertexName2, targetVertexName2) {
            var matches = this.sourceVertexName === sourceVertexName2 && this.targetVertexName === targetVertexName2;
            return matches;
          }
        }
      ], [
        {
          key: "fromSourceVertexNameAndTargetVertexName",
          value: function fromSourceVertexNameAndTargetVertexName(sourceVertexName2, targetVertexName2) {
            var edge = new Edge2(sourceVertexName2, targetVertexName2);
            return edge;
          }
        }
      ]);
      return Edge2;
    }();
    exports.default = Edge;
  });

  // node_modules/necessary/lib/constants.js
  var require_constants = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EMPTY_STRING = exports.ERROR = exports.UTF8 = exports.ACCEPT = exports.CTRL_C = exports.CONTENT_TYPE = void 0;
    var UTF8 = "utf8";
    exports.UTF8 = UTF8;
    var ERROR = "error";
    exports.ERROR = ERROR;
    var CTRL_C = "^C";
    exports.CTRL_C = CTRL_C;
    var ACCEPT = "accept";
    exports.ACCEPT = ACCEPT;
    var EMPTY_STRING = "";
    exports.EMPTY_STRING = EMPTY_STRING;
    var CONTENT_TYPE = "content-type";
    exports.CONTENT_TYPE = CONTENT_TYPE;
  });

  // node_modules/necessary/lib/utilities/array.js
  var require_array = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.first = first;
    exports.second = second;
    exports.third = third;
    exports.fourth = fourth;
    exports.fifth = fifth;
    exports.fifthLast = fifthLast;
    exports.fourthLast = fourthLast;
    exports.thirdLast = thirdLast;
    exports.secondLast = secondLast;
    exports.last = last;
    exports.head = head;
    exports.tail = tail;
    exports.back = back;
    exports.front = front;
    exports.push = push;
    exports.unshift = unshift;
    exports.concat = concat;
    exports.clear = clear;
    exports.copy = copy;
    exports.merge = merge;
    exports.splice = splice;
    exports.replace = replace;
    exports.filter = filter;
    exports.find = find;
    exports.prune = prune;
    exports.patch = patch;
    exports.augment = augment;
    exports.separate = separate;
    exports.forwardsSome = forwardsSome;
    exports.backwardsSome = backwardsSome;
    exports.forwardsEvery = forwardsEvery;
    exports.backwardsEvery = backwardsEvery;
    exports.forwardsReduce = forwardsReduce;
    exports.backwardsReduce = backwardsReduce;
    exports.forwardsForEach = forwardsForEach;
    exports.backwardsForEach = backwardsForEach;
    exports.default = void 0;
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
    }
    function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }
    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }
    function first(array) {
      return array[0];
    }
    function second(array) {
      return array[1];
    }
    function third(array) {
      return array[2];
    }
    function fourth(array) {
      return array[3];
    }
    function fifth(array) {
      return array[4];
    }
    function fifthLast(array) {
      return array[array.length - 5];
    }
    function fourthLast(array) {
      return array[array.length - 4];
    }
    function thirdLast(array) {
      return array[array.length - 3];
    }
    function secondLast(array) {
      return array[array.length - 2];
    }
    function last(array) {
      return array[array.length - 1];
    }
    function head(array) {
      return array.slice(0, 1);
    }
    function tail(array) {
      return array.slice(1);
    }
    function back(array) {
      return array.slice(array.length - 1);
    }
    function front(array) {
      return array.slice(0, array.length - 1);
    }
    function push(array1, array2) {
      Array.prototype.push.apply(array1, array2);
    }
    function unshift(array1, array2) {
      Array.prototype.unshift.apply(array1, array2);
    }
    function concat(array1, elementOrArray2) {
      var array2 = _instanceof(elementOrArray2, Array) ? elementOrArray2 : [
        elementOrArray2
      ];
      push(array1, array2);
    }
    function clear(array) {
      var start = 0;
      return array.splice(start);
    }
    function copy(array1, array2) {
      var start = 0, deleteCount = array2.length;
      splice(array1, start, deleteCount, array2);
    }
    function merge(array1, array2) {
      Array.prototype.push.apply(array1, array2);
    }
    function splice(array1, start, param, param1) {
      var deleteCount = param === void 0 ? Infinity : param, array2 = param1 === void 0 ? [] : param1;
      var args = [
        start,
        deleteCount
      ].concat(_toConsumableArray(array2)), deletedItemsArray = Array.prototype.splice.apply(array1, args);
      return deletedItemsArray;
    }
    function replace(array, element, test) {
      var start;
      var found = array.some(function(element1, index) {
        var passed = test(element1, index);
        if (passed) {
          start = index;
          return true;
        }
      });
      if (found) {
        var deleteCount = 1;
        array.splice(start, deleteCount, element);
      }
      return found;
    }
    function filter(array, test) {
      var filteredElements = [];
      backwardsForEach(array, function(element, index) {
        var passed = test(element, index);
        if (!passed) {
          var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
          filteredElements.unshift(firstDeletedElement);
        }
      });
      return filteredElements;
    }
    function find(array, test) {
      var elements = [];
      forwardsForEach(array, function(element, index) {
        var passed = test(element, index);
        if (passed) {
          elements.push(element);
        }
      });
      return elements;
    }
    function prune(array, test) {
      var prunedElement = void 0;
      array.some(function(element, index) {
        var passed = test(element, index);
        if (!passed) {
          var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
          prunedElement = firstDeletedElement;
          return true;
        }
      });
      return prunedElement;
    }
    function patch(array, element, test) {
      var found = array.some(function(element1, index) {
        var passed = test(element1, index);
        if (passed) {
          return true;
        }
      });
      if (found) {
        array.push(element);
      }
      return found;
    }
    function augment(array1, array2, test) {
      array2.forEach(function(element, index) {
        var passed = test(element, index);
        if (passed) {
          array1.push(element);
        }
      });
    }
    function separate(array, array1, array2, test) {
      array.forEach(function(element, index) {
        var passed = test(element, index);
        passed ? array1.push(element) : array2.push(element);
      });
    }
    function forwardsSome(array, callback) {
      var arrayLength = array.length;
      for (var index = 0; index < arrayLength; index++) {
        var element = array[index], result = callback(element, index);
        if (result) {
          return true;
        }
      }
      return false;
    }
    function backwardsSome(array, callback) {
      var arrayLength = array.length;
      for (var index = arrayLength - 1; index >= 0; index--) {
        var element = array[index], result = callback(element, index);
        if (result) {
          return true;
        }
      }
      return false;
    }
    function forwardsEvery(array, callback) {
      var arrayLength = array.length;
      for (var index = 0; index < arrayLength; index++) {
        var element = array[index], result = callback(element, index);
        if (!result) {
          return false;
        }
      }
      return true;
    }
    function backwardsEvery(array, callback) {
      var arrayLength = array.length;
      for (var index = arrayLength - 1; index >= 0; index--) {
        var element = array[index], result = callback(element, index);
        if (!result) {
          return false;
        }
      }
      return true;
    }
    function forwardsReduce(array, callback, initialValue) {
      var value = initialValue;
      forwardsForEach(array, function(element, index) {
        value = callback(value, element, index);
      });
      return value;
    }
    function backwardsReduce(array, callback, initialValue) {
      var value = initialValue;
      backwardsForEach(array, function(element, index) {
        value = callback(value, element, index);
      });
      return value;
    }
    function forwardsForEach(array, callback) {
      var arrayLength = array.length;
      for (var index = 0; index < arrayLength; index++) {
        var element = array[index];
        callback(element, index);
      }
    }
    function backwardsForEach(array, callback) {
      var arrayLength = array.length;
      for (var index = arrayLength - 1; index >= 0; index--) {
        var element = array[index];
        callback(element, index);
      }
    }
    var _default = {
      first,
      second,
      third,
      fourth,
      fifth,
      fifthLast,
      fourthLast,
      thirdLast,
      secondLast,
      last,
      head,
      tail,
      back,
      front,
      push,
      unshift,
      concat,
      clear,
      copy,
      merge,
      splice,
      replace,
      filter,
      find,
      prune,
      patch,
      augment,
      separate,
      forwardsSome,
      backwardsSome,
      forwardsEvery,
      backwardsEvery,
      forwardsReduce,
      backwardsReduce,
      forwardsForEach,
      backwardsForEach
    };
    exports.default = _default;
  });

  // node_modules/necessary/lib/utilities/path.js
  var require_path = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isPathName = isPathName;
    exports.isPathTopmostName = isPathTopmostName;
    exports.isPathRelativePath = isPathRelativePath;
    exports.isPathAbsolutePath = isPathAbsolutePath;
    exports.isTopmostNameInAbsolutePath = isTopmostNameInAbsolutePath;
    exports.combinePaths = combinePaths;
    exports.concatenatePaths = concatenatePaths;
    exports.bottommostNameFromPath = bottommostNameFromPath;
    exports.topmostDirectoryPathFromPath = topmostDirectoryPathFromPath;
    exports.topmostDirectoryNameFromPath = topmostDirectoryNameFromPath;
    exports.pathWithoutBottommostNameFromPath = pathWithoutBottommostNameFromPath;
    exports.pathWithoutTopmostDirectoryNameFromPath = pathWithoutTopmostDirectoryNameFromPath;
    exports.default = void 0;
    var _constants = require_constants();
    var _array = require_array();
    function isPathName(path) {
      path = path.replace(/^\//, _constants.EMPTY_STRING).replace(/\/$/, _constants.EMPTY_STRING);
      var pathName = /\//.test(path) === false;
      return pathName;
    }
    function isPathTopmostName(path) {
      var pathName = isPathName(path), pathAbsolutePath = isPathAbsolutePath(path), pathTopmostName = pathName && pathAbsolutePath;
      return pathTopmostName;
    }
    function isPathRelativePath(path) {
      var pathRelativePath = !/^\//.test(path);
      return pathRelativePath;
    }
    function isPathAbsolutePath(path) {
      var pathAbsolutePath = /^\//.test(path);
      return pathAbsolutePath;
    }
    function isTopmostNameInAbsolutePath(topmostName, absolutePath) {
      var regExp = new RegExp("^".concat(topmostName, "(?:\\/.+)?$")), topmostNameInAbsolutePath = regExp.test(absolutePath);
      return topmostNameInAbsolutePath;
    }
    function combinePaths(path, relativePath) {
      var combinedPath = null;
      var pathNames = path.split(/\//), relativePathNames = relativePath.split(/\//);
      var lastPathName, firstRelativePathName = (0, _array).first(relativePathNames);
      if (firstRelativePathName === ".") {
        relativePathNames.shift();
      }
      firstRelativePathName = (0, _array).first(relativePathNames);
      lastPathName = (0, _array).last(pathNames);
      while (firstRelativePathName === ".." && lastPathName !== void 0) {
        relativePathNames.shift();
        pathNames.pop();
        firstRelativePathName = (0, _array).first(relativePathNames);
        lastPathName = (0, _array).last(pathNames);
      }
      if (lastPathName !== void 0) {
        var combinedPathNames = [].concat(pathNames).concat(relativePathNames);
        combinedPath = combinedPathNames.join("/");
      }
      return combinedPath;
    }
    function concatenatePaths(path, relativePath) {
      path = path.replace(/\/$/, _constants.EMPTY_STRING);
      var concatenatedPath = "".concat(path, "/").concat(relativePath);
      return concatenatedPath;
    }
    function bottommostNameFromPath(path) {
      var bottommostName = null;
      var matches = path.match(/^.*\/([^\/]+\/?)$/);
      if (matches !== null) {
        var secondMatch = (0, _array).second(matches);
        bottommostName = secondMatch;
      }
      return bottommostName;
    }
    function topmostDirectoryPathFromPath(path) {
      var matches = path.match(/^(.+)\/[^\/]+\/?$/), secondMatch = (0, _array).second(matches), topmostDirectoryPath = secondMatch;
      return topmostDirectoryPath;
    }
    function topmostDirectoryNameFromPath(path) {
      var topmostDirectoryName = null;
      var matches = path.match(/^([^\/]+)\/.+$/);
      if (matches !== null) {
        var secondMatch = (0, _array).second(matches);
        topmostDirectoryName = secondMatch;
      }
      return topmostDirectoryName;
    }
    function pathWithoutBottommostNameFromPath(path) {
      var pathWithoutBottommostName = null;
      var matches = path.match(/^(.*)\/[^\/]+\/?$/);
      if (matches !== null) {
        var secondMatch = (0, _array).second(matches);
        pathWithoutBottommostName = secondMatch;
      }
      return pathWithoutBottommostName;
    }
    function pathWithoutTopmostDirectoryNameFromPath(path) {
      var pathWithoutTopmostDirectoryName = null;
      var matches = path.match(/^[^\/]+\/(.+)$/);
      if (matches !== null) {
        var secondMatch = (0, _array).second(matches);
        pathWithoutTopmostDirectoryName = secondMatch;
      }
      return pathWithoutTopmostDirectoryName;
    }
    var _default = {
      isPathName,
      isPathTopmostName,
      isPathRelativePath,
      isPathAbsolutePath,
      isTopmostNameInAbsolutePath,
      combinePaths,
      concatenatePaths,
      bottommostNameFromPath,
      topmostDirectoryPathFromPath,
      topmostDirectoryNameFromPath,
      pathWithoutBottommostNameFromPath,
      pathWithoutTopmostDirectoryNameFromPath
    };
    exports.default = _default;
  });

  // node_modules/necessary/lib/characters.js
  var require_characters = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CARRIAGE_RETURN_CHARACTER = exports.BACKSPACE_CHARACTER = exports.LINE_FEED_CHARACTER = exports.ETX_CHARACTER = exports.AMPERSAND_CHARACTER = exports.COLON_CHARACTER = void 0;
    var ETX_CHARACTER = "";
    exports.ETX_CHARACTER = ETX_CHARACTER;
    var COLON_CHARACTER = ":";
    exports.COLON_CHARACTER = COLON_CHARACTER;
    var AMPERSAND_CHARACTER = "&";
    exports.AMPERSAND_CHARACTER = AMPERSAND_CHARACTER;
    var LINE_FEED_CHARACTER = "\n";
    exports.LINE_FEED_CHARACTER = LINE_FEED_CHARACTER;
    var BACKSPACE_CHARACTER = String.fromCharCode(127);
    exports.BACKSPACE_CHARACTER = BACKSPACE_CHARACTER;
    var CARRIAGE_RETURN_CHARACTER = "\r";
    exports.CARRIAGE_RETURN_CHARACTER = CARRIAGE_RETURN_CHARACTER;
  });

  // node_modules/necessary/lib/utilities/http.js
  var require_http = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.overwrite = overwrite;
    exports.underwrite = underwrite;
    exports.portFromHost = portFromHost;
    exports.secureFromHost = secureFromHost;
    exports.hostnameFromHost = hostnameFromHost;
    exports.queryStringFromParameters = queryStringFromParameters;
    exports.urlFromHostURIAndParameters = urlFromHostURIAndParameters;
    exports.default = void 0;
    var _array = require_array();
    var _constants = require_constants();
    var _characters = require_characters();
    function overwrite(headers, name, value) {
      var ownPropertyNames = Object.getOwnPropertyNames(headers), lowerCaseName = name.toLowerCase(), overwritten = ownPropertyNames.some(function(ownPropertyName) {
        var lowerCaseOwnPropertyName = ownPropertyName.toLowerCase();
        if (lowerCaseOwnPropertyName === lowerCaseName) {
          headers[ownPropertyName] = value;
          return true;
        }
      });
      if (!overwritten) {
        headers[name] = value;
      }
    }
    function underwrite(headers, name, value) {
      var ownPropertyNames = Object.getOwnPropertyNames(headers), lowercaseName = name.toLowerCase(), lowerCaseOwnPropertyNames = ownPropertyNames.map(function(ownPropertyName) {
        var lowerCaseOwnPropertyName = ownPropertyName.toLowerCase();
        return lowerCaseOwnPropertyName;
      }), lowerCaseOwnPropertyNamesIncludesLowercaseName = lowerCaseOwnPropertyNames.includes(lowercaseName);
      if (!lowerCaseOwnPropertyNamesIncludesLowercaseName) {
        headers[name] = value;
      }
    }
    function portFromHost(host) {
      var port;
      var matches = host.match(/^https?:\/\/([^\/]+)/), secondMatch = (0, _array).second(matches), index = secondMatch.indexOf(_characters.COLON_CHARACTER);
      if (index === -1) {
        var secure = secureFromHost(host);
        port = secure ? 443 : 80;
      } else {
        var start = index + 1, portString = secondMatch.substring(start);
        port = Number(portString);
      }
      return port;
    }
    function secureFromHost(host) {
      var secure = /^https:\/\//.test(host);
      return secure;
    }
    function hostnameFromHost(host) {
      var matches = host.match(/^https?:\/\/([^:\/]+)/), secondMatch = (0, _array).second(matches), hostname = secondMatch;
      return hostname;
    }
    function queryStringFromParameters(parameters) {
      var names = Object.keys(parameters), namesLength = names.length, lastIndex = namesLength - 1, queryString = names.reduce(function(queryString1, name, index) {
        var value = parameters[name], encodedName = encodeURIComponent(name), encodedValue = encodeURIComponent(value), ampersandOrNothing = index !== lastIndex ? _characters.AMPERSAND_CHARACTER : _constants.EMPTY_STRING;
        queryString1 += "".concat(encodedName, "=").concat(encodedValue).concat(ampersandOrNothing);
        return queryString1;
      }, _constants.EMPTY_STRING);
      return queryString;
    }
    function urlFromHostURIAndParameters(host, uri, parameters) {
      var queryString = queryStringFromParameters(parameters), url = queryString === _constants.EMPTY_STRING ? "".concat(host).concat(uri) : "".concat(host).concat(uri, "?").concat(queryString);
      return url;
    }
    var _default = {
      overwrite,
      underwrite,
      portFromHost,
      secureFromHost,
      hostnameFromHost,
      queryStringFromParameters,
      urlFromHostURIAndParameters
    };
    exports.default = _default;
  });

  // node_modules/necessary/lib/utilities/asynchronous.js
  var require_asynchronous = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.whilst = whilst;
    exports.forEach = forEach;
    exports.sequence = sequence;
    exports.eventually = eventually;
    exports.repeatedly = repeatedly;
    exports.forwardsForEach = forwardsForEach;
    exports.backwardsForEach = backwardsForEach;
    exports.default = void 0;
    function whilst(callback, done, context) {
      var count = -1;
      function next() {
        count++;
        var index = count, terminate = callback(next, done, context, index);
        if (terminate) {
          done();
        }
      }
      next();
    }
    function forEach(array, callback, done, context) {
      var length = array.length;
      var count = -1;
      function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        } else {
          var index = count, element = array[index];
          callback(element, next, done, context, index);
        }
      }
      next();
    }
    function sequence(callbacks, done, context) {
      var length = callbacks.length;
      var count = -1;
      function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        } else {
          var index = count, callback = callbacks[index];
          callback(next, done, context, index);
        }
      }
      next();
    }
    function eventually(callbacks, done, context) {
      var next = function next2() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        }
      };
      var length = callbacks.length;
      var count = 0;
      callbacks.forEach(function(callback, index) {
        callback(next, done, context, index);
      });
    }
    function repeatedly(callback, length, done, context) {
      var next = function next2() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        }
      };
      var count = 0;
      for (var index = 0; index < length; index++) {
        callback(next, done, context, index);
      }
    }
    function forwardsForEach(array, callback, done, context) {
      var length = array.length;
      var count = -1;
      function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        } else {
          var index = count, element = array[index];
          callback(element, next, done, context, index);
        }
      }
      next();
    }
    function backwardsForEach(array, callback, done, context) {
      var length = array.length;
      var count = length;
      function next() {
        count--;
        var terminate = count === -1;
        if (terminate) {
          done();
        } else {
          var index = count, element = array[index];
          callback(element, next, done, context, index);
        }
      }
      next();
    }
    var _default = {
      whilst,
      forEach,
      sequence,
      eventually,
      repeatedly,
      forwardsForEach,
      backwardsForEach
    };
    exports.default = _default;
  });

  // node_modules/necessary/lib/methods.js
  var require_methods = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.POST_METHOD = exports.GET_METHOD = void 0;
    var GET_METHOD = "GET";
    exports.GET_METHOD = GET_METHOD;
    var POST_METHOD = "POST";
    exports.POST_METHOD = POST_METHOD;
  });

  // node_modules/necessary/lib/contentTypes.js
  var require_contentTypes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.APPLICATION_JSON_CONTENT_TYPE = void 0;
    var APPLICATION_JSON_CONTENT_TYPE = "application/json";
    exports.APPLICATION_JSON_CONTENT_TYPE = APPLICATION_JSON_CONTENT_TYPE;
  });

  // node_modules/necessary/lib/utilities/ajax.js
  var require_ajax = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.get = get;
    exports.post = post;
    exports.request = request;
    exports.default = void 0;
    var _constants = require_constants();
    var _methods = require_methods();
    var _contentTypes = require_contentTypes();
    var _http = require_http();
    function get(host, uri, parameters, headers, callback) {
      if (callback === void 0) {
        callback = headers;
        headers = {};
      }
      var method = _methods.GET_METHOD, body = null;
      underwriteAccept(headers);
      request(host, uri, parameters, method, body, headers, callback);
    }
    function post(host, uri, parameters, body, headers, callback) {
      if (callback === void 0) {
        callback = headers;
        headers = {};
      }
      var method = _methods.POST_METHOD;
      underwriteAccept(headers);
      underwriteContentType(headers);
      request(host, uri, parameters, method, body, headers, callback);
    }
    function request(host, uri, parameters, method, body, headers, callback) {
      var url = (0, _http).urlFromHostURIAndParameters(host, uri, parameters), accept = headers[_constants.ACCEPT] || null, contentType = headers[_constants.CONTENT_TYPE] || null, xmlHttpRequest = new XMLHttpRequest();
      if (contentType === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
        var json = body, jsonString = JSON.stringify(json);
        body = jsonString;
      }
      xmlHttpRequest.onreadystatechange = function() {
        var readyState = xmlHttpRequest.readyState, status = xmlHttpRequest.status, responseText = xmlHttpRequest.responseText;
        if (readyState == 4) {
          var body1 = responseText;
          if (accept === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
            try {
              var jsonString2 = body1, json2 = JSON.parse(jsonString2);
              body1 = json2;
            } catch (error) {
              body1 = null;
            }
            callback(body1, status);
          }
        }
      };
      xmlHttpRequest.open(method, url);
      if (accept !== null) {
        xmlHttpRequest.setRequestHeader(_constants.ACCEPT, accept);
      }
      if (contentType !== null) {
        xmlHttpRequest.setRequestHeader(_constants.CONTENT_TYPE, contentType);
      }
      body !== null ? xmlHttpRequest.send(body) : xmlHttpRequest.send();
    }
    var _default = {
      get,
      post,
      request
    };
    exports.default = _default;
    function underwriteAccept(headers) {
      var name = _constants.ACCEPT, value = _contentTypes.APPLICATION_JSON_CONTENT_TYPE;
      (0, _http).underwrite(headers, name, value);
    }
    function underwriteContentType(headers) {
      var name = _constants.CONTENT_TYPE, value = _contentTypes.APPLICATION_JSON_CONTENT_TYPE;
      (0, _http).underwrite(headers, name, value);
    }
  });

  // node_modules/necessary/lib/browser.js
  var require_browser = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "pathUtilities", {
      enumerable: true,
      get: function() {
        return _path.default;
      }
    });
    Object.defineProperty(exports, "httpUtilities", {
      enumerable: true,
      get: function() {
        return _http.default;
      }
    });
    Object.defineProperty(exports, "arrayUtilities", {
      enumerable: true,
      get: function() {
        return _array.default;
      }
    });
    Object.defineProperty(exports, "asynchronousUtilities", {
      enumerable: true,
      get: function() {
        return _asynchronous.default;
      }
    });
    Object.defineProperty(exports, "ajaxUtilities", {
      enumerable: true,
      get: function() {
        return _ajax.default;
      }
    });
    var _path = _interopRequireDefault(require_path());
    var _http = _interopRequireDefault(require_http());
    var _array = _interopRequireDefault(require_array());
    var _asynchronous = _interopRequireDefault(require_asynchronous());
    var _ajax = _interopRequireDefault(require_ajax());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  });

  // lib/utilities/vertex.js
  var require_vertex = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.vertexNamesFromVertices = vertexNamesFromVertices;
    exports.orderVertices = orderVertices;
    function vertexNamesFromVertices(vertices) {
      var vertexNames = vertices.map(function(vertex) {
        var vertexName2 = vertex.getName();
        return vertexName2;
      });
      return vertexNames;
    }
    function orderVertices(vertices) {
      vertices.sort(function(firstVertex, secondVertex) {
        var firstVertexIndex = firstVertex.getIndex(), secondVertexIndex = secondVertex.getIndex();
        if (false) {
        } else if (firstVertexIndex < secondVertexIndex) {
          return -1;
        } else if (firstVertexIndex > secondVertexIndex) {
          return 1;
        }
      });
      var orderedVertices = vertices;
      return orderedVertices;
    }
  });

  // lib/vertex.js
  var require_vertex2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _vertex = require_vertex();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Vertex = /* @__PURE__ */ function() {
      function Vertex2(name, index, visited, immediatePredecessorVertices, immediateSuccessorVertices) {
        _classCallCheck(this, Vertex2);
        this.name = name;
        this.index = index;
        this.visited = visited;
        this.immediatePredecessorVertices = immediatePredecessorVertices;
        this.immediateSuccessorVertices = immediateSuccessorVertices;
      }
      _createClass(Vertex2, [
        {
          key: "getName",
          value: function getName() {
            return this.name;
          }
        },
        {
          key: "getIndex",
          value: function getIndex() {
            return this.index;
          }
        },
        {
          key: "isVisited",
          value: function isVisited() {
            return this.visited;
          }
        },
        {
          key: "isStranded",
          value: function isStranded() {
            var immediatePredecessorVerticesLength = this.immediatePredecessorVertices.length, immediateSuccessorVerticesLength = this.immediateSuccessorVertices.length, stranded = immediatePredecessorVerticesLength === 0 && immediateSuccessorVerticesLength === 0;
            return stranded;
          }
        },
        {
          key: "getImmediatePredecessorVertexNames",
          value: function getImmediatePredecessorVertexNames() {
            var immediatePredecessorVertexNames = this.immediatePredecessorVertices.map(function(immediatePredecessorVertex) {
              var immediatePredecessorVertexName = immediatePredecessorVertex.getName();
              return immediatePredecessorVertexName;
            });
            return immediatePredecessorVertexNames;
          }
        },
        {
          key: "getImmediateSuccessorVertexNames",
          value: function getImmediateSuccessorVertexNames() {
            var immediateSuccessorVertexNames = this.immediateSuccessorVertices.map(function(immediateSuccessorVertex) {
              var immediateSuccessorVertexName = immediateSuccessorVertex.getName();
              return immediateSuccessorVertexName;
            });
            return immediateSuccessorVertexNames;
          }
        },
        {
          key: "getImmediatePredecessorVertices",
          value: function getImmediatePredecessorVertices() {
            return this.immediatePredecessorVertices;
          }
        },
        {
          key: "getImmediateSuccessorVertices",
          value: function getImmediateSuccessorVertices() {
            return this.immediateSuccessorVertices;
          }
        },
        {
          key: "getPredecessorVertexMap",
          value: function getPredecessorVertexMap(param) {
            var predecessorVertexMap = param === void 0 ? {} : param;
            this.forEachImmediatePredecessorVertex(function(immediatePredecessorVertex) {
              var predecessorVertex = immediatePredecessorVertex, predecessorVertexName = predecessorVertex.getName();
              predecessorVertexMap[predecessorVertexName] = predecessorVertex;
              predecessorVertex.getPredecessorVertexMap(predecessorVertexMap);
            });
            return predecessorVertexMap;
          }
        },
        {
          key: "getSuccessorVertexMap",
          value: function getSuccessorVertexMap(param) {
            var successorVertexMap = param === void 0 ? {} : param;
            this.forEachImmediateSuccessorVertex(function(immediateSuccessorVertex) {
              var successorVertex = immediateSuccessorVertex, successorVertexName = successorVertex.getName();
              successorVertexMap[successorVertexName] = successorVertex;
              successorVertex.getSuccessorVertexMap(successorVertexMap);
            });
            return successorVertexMap;
          }
        },
        {
          key: "getPredecessorVertexNames",
          value: function getPredecessorVertexNames() {
            var predecessorVertices = this.getPredecessorVertices(), predecessorVertexNames = predecessorVertices.map(function(predecessorVertex) {
              var predecessorVertexName = predecessorVertex.getName();
              return predecessorVertexName;
            });
            return predecessorVertexNames;
          }
        },
        {
          key: "getSuccessorVertexNames",
          value: function getSuccessorVertexNames() {
            var successorVertices = this.getSuccessorVertices(), successorVertexNames = successorVertices.map(function(successorVertex) {
              var successorVertexName = successorVertex.getName();
              return successorVertexName;
            });
            return successorVertexNames;
          }
        },
        {
          key: "getPredecessorVertices",
          value: function getPredecessorVertices() {
            var predecessorVertexMap = this.getPredecessorVertexMap(), predecessorVertexNames = Object.keys(predecessorVertexMap), predecessorVertices = predecessorVertexNames.map(function(predecessorVertexName) {
              var predecessorVertex = predecessorVertexMap[predecessorVertexName];
              return predecessorVertex;
            });
            return predecessorVertices;
          }
        },
        {
          key: "getSuccessorVertices",
          value: function getSuccessorVertices() {
            var successorVertexMap = this.getSuccessorVertexMap(), successorVertexNames = Object.keys(successorVertexMap), successorVertices = successorVertexNames.map(function(successorVertexName) {
              var successorVertex = successorVertexMap[successorVertexName];
              return successorVertex;
            });
            return successorVertices;
          }
        },
        {
          key: "getOrderedPredecessorVertexNames",
          value: function getOrderedPredecessorVertexNames() {
            var predecessorVertices = this.getPredecessorVertices();
            (0, _vertex).orderVertices(predecessorVertices);
            var orderedPredecessorVertices = predecessorVertices, orderedPredecessorVertexNames = (0, _vertex).vertexNamesFromVertices(orderedPredecessorVertices);
            return orderedPredecessorVertexNames;
          }
        },
        {
          key: "retrieveForwardsAffectedVertices",
          value: function retrieveForwardsAffectedVertices(sourceVertex) {
            var forwardsAffectedVertices = this.forwardsDepthFirstSearch(function(visitedVertex) {
              var terminate = visitedVertex === sourceVertex;
              if (terminate) {
                return true;
              }
            });
            return forwardsAffectedVertices;
          }
        },
        {
          key: "retrieveBackwardsAffectedVertices",
          value: function retrieveBackwardsAffectedVertices() {
            var backwardsAffectedVertices = this.backwardsDepthFirstSearch(function(visitedVertex) {
              var terminate = false;
              if (terminate) {
                return true;
              }
            });
            return backwardsAffectedVertices;
          }
        },
        {
          key: "isVertexImmediatePredecessorVertex",
          value: function isVertexImmediatePredecessorVertex(vertex) {
            var vertexImmediatePredecessorVertex = this.immediatePredecessorVertices.includes(vertex);
            return vertexImmediatePredecessorVertex;
          }
        },
        {
          key: "isVertexImmediateSuccessorVertex",
          value: function isVertexImmediateSuccessorVertex(vertex) {
            var vertexImmediateSuccessorVertex = this.immediateSuccessorVertices.includes(vertex);
            return vertexImmediateSuccessorVertex;
          }
        },
        {
          key: "isEdgePresentBySourceVertex",
          value: function isEdgePresentBySourceVertex(sourceVertex) {
            var sourceVertexImmediatePredecessorVertex = this.isVertexImmediatePredecessorVertex(sourceVertex), edgePresent = sourceVertexImmediatePredecessorVertex;
            return edgePresent;
          }
        },
        {
          key: "isEdgePresentByTargetVertex",
          value: function isEdgePresentByTargetVertex(targetVertex) {
            var targetVertexImmediateSuccessorVertex = this.isVertexImmediateSuccessorVertex(targetVertex), edgePresent = targetVertexImmediateSuccessorVertex;
            return edgePresent;
          }
        },
        {
          key: "setName",
          value: function setName(name) {
            this.name = name;
          }
        },
        {
          key: "setIndex",
          value: function setIndex(index) {
            this.index = index;
          }
        },
        {
          key: "setVisited",
          value: function setVisited(visited) {
            this.visited = visited;
          }
        },
        {
          key: "decrementIndex",
          value: function decrementIndex() {
            this.index--;
          }
        },
        {
          key: "removeImmediatePredecessorVertex",
          value: function removeImmediatePredecessorVertex(immediatePredecessorVertex) {
            var index = this.immediatePredecessorVertices.indexOf(immediatePredecessorVertex), start = index, deleteCount = 1;
            this.immediatePredecessorVertices.splice(start, deleteCount);
          }
        },
        {
          key: "removeImmediateSuccessorVertex",
          value: function removeImmediateSuccessorVertex(immediateSuccessorVertex) {
            var index = this.immediateSuccessorVertices.indexOf(immediateSuccessorVertex), start = index, deleteCount = 1;
            this.immediateSuccessorVertices.splice(start, deleteCount);
          }
        },
        {
          key: "removeIncomingEdges",
          value: function removeIncomingEdges() {
            var immediateSuccessorVertex = this;
            this.immediatePredecessorVertices.forEach(function(immediatePredecessorVertex) {
              return immediatePredecessorVertex.removeImmediateSuccessorVertex(immediateSuccessorVertex);
            });
            this.immediatePredecessorVertices = [];
          }
        },
        {
          key: "removeOutgoingEdges",
          value: function removeOutgoingEdges() {
            var immediatePredecessorVertex = this;
            this.immediateSuccessorVertices.forEach(function(immediateSuccessorVertex) {
              return immediateSuccessorVertex.removeImmediateSuccessorVertex(immediatePredecessorVertex);
            });
            this.immediateSuccessorVertices = [];
          }
        },
        {
          key: "addImmediatePredecessorVertex",
          value: function addImmediatePredecessorVertex(immediatePredecessorVertex) {
            this.immediatePredecessorVertices.push(immediatePredecessorVertex);
          }
        },
        {
          key: "addImmediateSuccessorVertex",
          value: function addImmediateSuccessorVertex(immediateSuccessorVertex) {
            this.immediateSuccessorVertices.push(immediateSuccessorVertex);
          }
        },
        {
          key: "forwardsDepthFirstSearch",
          value: function forwardsDepthFirstSearch(callback) {
            var visitedVertices = [];
            this.retrieveForwardsVisitedVertices(function(visitedVertex) {
              var terminate = callback(visitedVertex);
              visitedVertices.push(visitedVertex);
              return terminate;
            });
            visitedVertices.forEach(function(visitedVertex) {
              return visitedVertex.resetVisited();
            });
            return visitedVertices;
          }
        },
        {
          key: "backwardsDepthFirstSearch",
          value: function backwardsDepthFirstSearch(callback) {
            var visitedVertices = [];
            this.retrieveBackwardsVisitedVertices(function(visitedVertex) {
              var terminate = callback(visitedVertex);
              visitedVertices.push(visitedVertex);
              return terminate;
            });
            visitedVertices.forEach(function(visitedVertex) {
              return visitedVertex.resetVisited();
            });
            return visitedVertices;
          }
        },
        {
          key: "retrieveForwardsVisitedVertices",
          value: function retrieveForwardsVisitedVertices(callback) {
            var terminate = false;
            if (this.visited === false) {
              this.visited = true;
              var visitedVertex = this;
              terminate = callback(visitedVertex);
              if (terminate !== true) {
                visitedVertex.someImmediateSuccessorVertex(function(immediateSuccessorVertex) {
                  terminate = immediateSuccessorVertex.retrieveForwardsVisitedVertices(callback);
                  if (terminate) {
                    return true;
                  }
                });
              }
            }
            return terminate;
          }
        },
        {
          key: "retrieveBackwardsVisitedVertices",
          value: function retrieveBackwardsVisitedVertices(callback) {
            var terminate = false;
            if (this.visited === false) {
              this.visited = true;
              var visitedVertex = this;
              terminate = callback(visitedVertex);
              if (terminate !== true) {
                visitedVertex.someImmediatePredecessorVertex(function(immediatePredecessorVertex) {
                  terminate = immediatePredecessorVertex.retrieveBackwardsVisitedVertices(callback);
                  if (terminate) {
                    return true;
                  }
                });
              }
            }
            return terminate;
          }
        },
        {
          key: "forEachImmediatePredecessorVertex",
          value: function forEachImmediatePredecessorVertex(callback) {
            this.immediatePredecessorVertices.forEach(callback);
          }
        },
        {
          key: "forEachImmediateSuccessorVertex",
          value: function forEachImmediateSuccessorVertex(callback) {
            this.immediateSuccessorVertices.forEach(callback);
          }
        },
        {
          key: "someImmediatePredecessorVertex",
          value: function someImmediatePredecessorVertex(callback) {
            this.immediatePredecessorVertices.some(callback);
          }
        },
        {
          key: "someImmediateSuccessorVertex",
          value: function someImmediateSuccessorVertex(callback) {
            this.immediateSuccessorVertices.some(callback);
          }
        },
        {
          key: "resetVisited",
          value: function resetVisited() {
            this.visited = false;
          }
        }
      ], [
        {
          key: "fromNameAndIndex",
          value: function fromNameAndIndex(name, index) {
            var visited = false, immediatePredecessorVertices = [], immediateSuccessorVertices = [], dependencyVertex = new Vertex2(name, index, visited, immediatePredecessorVertices, immediateSuccessorVertices);
            return dependencyVertex;
          }
        }
      ]);
      return Vertex2;
    }();
    exports.default = Vertex;
  });

  // lib/directedAcyclicGraph.js
  var require_directedAcyclicGraph = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _necessary = require_browser();
    var _edge = _interopRequireDefault(require_edge());
    var _vertex = _interopRequireDefault(require_vertex2());
    var _vertex1 = require_vertex();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var last = _necessary.arrayUtilities.last;
    var DirectedAcyclicGraph = /* @__PURE__ */ function() {
      function DirectedAcyclicGraph2(vertexMap) {
        _classCallCheck(this, DirectedAcyclicGraph2);
        this.vertexMap = vertexMap;
      }
      _createClass(DirectedAcyclicGraph2, [
        {
          key: "isEmpty",
          value: function isEmpty() {
            var vertices = this.getVertices(), verticesLength = vertices.length, empty = verticesLength === 0;
            return empty;
          }
        },
        {
          key: "getVertices",
          value: function getVertices() {
            var vertexMapValues = Object.values(this.vertexMap), vertices = vertexMapValues;
            return vertices;
          }
        },
        {
          key: "getVertexNames",
          value: function getVertexNames() {
            var vertexMapKeys = Object.keys(this.vertexMap), vertexNames = vertexMapKeys;
            return vertexNames;
          }
        },
        {
          key: "getVertexByVertexName",
          value: function getVertexByVertexName(vertexName2) {
            var vertexPresent = this.isVertexPresentByVertexName(vertexName2), vertex = vertexPresent ? this.vertexMap[vertexName2] : null;
            return vertex;
          }
        },
        {
          key: "getImmediatePredecessorVertexNamesByVertexName",
          value: function getImmediatePredecessorVertexNamesByVertexName(vertexName2) {
            var vertex = this.getVertexByVertexName(vertexName2), immediatePredecessorVertexNames = vertex.getImmediatePredecessorVertexNames();
            return immediatePredecessorVertexNames;
          }
        },
        {
          key: "getImmediateSuccessorVertexNamesByVertexName",
          value: function getImmediateSuccessorVertexNamesByVertexName(vertexName2) {
            var vertex = this.getVertexByVertexName(vertexName2), immediateSuccessorVertexNames = vertex.getImmediateSuccessorVertexNames();
            return immediateSuccessorVertexNames;
          }
        },
        {
          key: "getPredecessorVertexNamesByVertexName",
          value: function getPredecessorVertexNamesByVertexName(vertexName2) {
            var vertex = this.getVertexByVertexName(vertexName2), predecessorVertexNames = vertex.getPredecessorVertexNames();
            return predecessorVertexNames;
          }
        },
        {
          key: "getSuccessorVertexNamesByVertexName",
          value: function getSuccessorVertexNamesByVertexName(vertexName2) {
            var vertex = this.getVertexByVertexName(vertexName2), successorVertexNames = vertex.getSuccessorVertexNames();
            return successorVertexNames;
          }
        },
        {
          key: "getEdgesByTargetVertexName",
          value: function getEdgesByTargetVertexName(targetVertexName2) {
            var edges = [], targetVertex = this.getVertexByVertexName(targetVertexName2);
            if (targetVertex !== null) {
              var immediatePredecessorVertexNames = targetVertex.getImmediatePredecessorVertexNames(), sourceVertexNames = immediatePredecessorVertexNames;
              sourceVertexNames.forEach(function(sourceVertexName2) {
                var edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName2, targetVertexName2);
                edges.push(edge);
              });
            }
            return edges;
          }
        },
        {
          key: "getEdgesBySourceVertexName",
          value: function getEdgesBySourceVertexName(sourceVertexName2) {
            var edges = [], sourceVertex = this.getVertexByVertexName(sourceVertexName2);
            if (sourceVertex !== null) {
              var immediateSuccessorVertexNames = sourceVertex.getImmediateSuccessorVertexNames(), targetVertexNames = immediateSuccessorVertexNames;
              targetVertexNames.forEach(function(targetVertexName2) {
                var edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName2, targetVertexName2);
                edges.push(edge);
              });
            }
            return edges;
          }
        },
        {
          key: "setVertexByVertexName",
          value: function setVertexByVertexName(vertexName2, vertex) {
            this.vertexMap[vertexName2] = vertex;
          }
        },
        {
          key: "deleteVertexByVertexName",
          value: function deleteVertexByVertexName(vertexName2) {
            delete this.vertexMap[vertexName2];
          }
        },
        {
          key: "isEdgePresent",
          value: function isEdgePresent(edge) {
            var sourceVertexName2 = edge.getSourceVertexName(), targetVertexName2 = edge.getTargetVertexName(), edgePresent = this.isEdgePresentByVertexNames(sourceVertexName2, targetVertexName2);
            return edgePresent;
          }
        },
        {
          key: "isEdgePresentByVertexNames",
          value: function isEdgePresentByVertexNames(sourceVertexName2, targetVertexName2) {
            var edgePresent = false;
            var sourceVertex = this.getVertexByVertexName(sourceVertexName2), targetVertex = this.getVertexByVertexName(targetVertexName2), sourceVertexAndTargetVertexPresent = sourceVertex !== null && targetVertex !== null;
            if (sourceVertexAndTargetVertexPresent) {
              edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);
            }
            return edgePresent;
          }
        },
        {
          key: "isVertexPresentByVertexName",
          value: function isVertexPresentByVertexName(vertexName2) {
            var vertexNames = this.getVertexNames(), vertexNamesIncludesVertexName = vertexNames.includes(vertexName2), vertexPresent = vertexNamesIncludesVertexName;
            return vertexPresent;
          }
        },
        {
          key: "getOrderedVertexNames",
          value: function getOrderedVertexNames() {
            var vertices = this.getVertices();
            (0, _vertex1).orderVertices(vertices);
            var orderedVertices = vertices, orderedVertexNames2 = (0, _vertex1).vertexNamesFromVertices(orderedVertices);
            return orderedVertexNames2;
          }
        },
        {
          key: "addEdge",
          value: function addEdge(edge) {
            var sourceVertexName2 = edge.getSourceVertexName(), targetVertexName2 = edge.getTargetVertexName(), success = this.addEdgeByVertexNames(sourceVertexName2, targetVertexName2);
            return success;
          }
        },
        {
          key: "removeEdge",
          value: function removeEdge(edge) {
            var sourceVertexName2 = edge.getSourceVertexName(), targetVertexName2 = edge.getTargetVertexName();
            this.removeEdgeByVertexNames(sourceVertexName2, targetVertexName2);
          }
        },
        {
          key: "addEdgeByVertexNames",
          value: function addEdgeByVertexNames(sourceVertexName2, targetVertexName2) {
            var success = false;
            if (sourceVertexName2 !== targetVertexName2) {
              var sourceVertex = this.addVertexByVertexName(sourceVertexName2), targetVertex = this.addVertexByVertexName(targetVertexName2), edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);
              if (edgePresent) {
                success = true;
              } else {
                var sourceVertexIndex = sourceVertex.getIndex(), targetVertexIndex = targetVertex.getIndex(), invalidatingEdge = sourceVertexIndex > targetVertexIndex;
                success = invalidatingEdge ? addInvalidatingEdgeByVertices(sourceVertex, targetVertex) : true;
                if (success) {
                  var immediatePredecessorVertex = sourceVertex, immediateSuccessorVertex = targetVertex;
                  immediatePredecessorVertex.addImmediateSuccessorVertex(immediateSuccessorVertex);
                  immediateSuccessorVertex.addImmediatePredecessorVertex(immediatePredecessorVertex);
                }
              }
            }
            return success;
          }
        },
        {
          key: "removeEdgeByVertexNames",
          value: function removeEdgeByVertexNames(sourceVertexName2, targetVertexName2) {
            var edgePresent = this.isEdgePresentByVertexNames(sourceVertexName2, targetVertexName2);
            if (edgePresent) {
              var sourceVertex = this.getVertexByVertexName(sourceVertexName2), targetVertex = this.getVertexByVertexName(targetVertexName2);
              sourceVertex.removeImmediateSuccessorVertex(targetVertex);
              targetVertex.removeImmediatePredecessorVertex(sourceVertex);
            }
          }
        },
        {
          key: "removeEdgesBySourceVertexName",
          value: function removeEdgesBySourceVertexName(sourceVertexName2) {
            var sourceVertexPresent = this.isVertexPresentByVertexName(sourceVertexName2);
            if (sourceVertexPresent) {
              var sourceVertex = this.getVertexByVertexName(sourceVertexName2);
              sourceVertex.removeOutgoingEdges();
            }
          }
        },
        {
          key: "removeEdgesByTargetVertexName",
          value: function removeEdgesByTargetVertexName(targetVertexName2) {
            var targetVertexPresent = this.isVertexPresentByVertexName(targetVertexName2);
            if (targetVertexPresent) {
              var targetVertex = this.getVertexByVertexName(targetVertexName2);
              targetVertex.removeIncomingEdges();
            }
          }
        },
        {
          key: "addVertexByVertexName",
          value: function addVertexByVertexName(vertexName2) {
            var vertexPresent = this.isVertexPresentByVertexName(vertexName2);
            if (!vertexPresent) {
              var vertexNames = this.getVertexNames(), vertexNamesLength = vertexNames.length, name = vertexName2, index = vertexNamesLength, vertex = _vertex.default.fromNameAndIndex(name, index);
              this.setVertexByVertexName(vertexName2, vertex);
            }
            var vertex = this.getVertexByVertexName(vertexName2);
            return vertex;
          }
        },
        {
          key: "removeVertexByVertexName",
          value: function removeVertexByVertexName(vertexName2) {
            var removedEdges = null;
            var vertexPresent = this.isVertexPresentByVertexName(vertexName2);
            if (vertexPresent) {
              removedEdges = [];
              var vertex = this.getVertexByVertexName(vertexName2);
              vertex.forEachImmediateSuccessorVertex(function(immediateSuccessVertex) {
                var immediatePredecessorVertex = vertex, immediatePredecessorVertexName = immediatePredecessorVertex.getName(), immediateSuccessVertexName = immediateSuccessVertex.getName(), removedEdgeSourceVertexName = immediatePredecessorVertexName, removedEdgeTargetVertexName = immediateSuccessVertexName, removedEdge = new _edge.default(removedEdgeSourceVertexName, removedEdgeTargetVertexName);
                removedEdges.push(removedEdge);
                immediateSuccessVertex.removeImmediatePredecessorVertex(immediatePredecessorVertex);
              });
              vertex.forEachImmediatePredecessorVertex(function(immediatePredecessorVertex) {
                var immediateSuccessVertex = vertex, immediatePredecessorVertexName = immediatePredecessorVertex.getName(), immediateSuccessVertexName = immediateSuccessVertex.getName(), removedEdgeSourceVertexName = immediatePredecessorVertexName, removedEdgeTargetVertexName = immediateSuccessVertexName, removedEdge = new _edge.default(removedEdgeSourceVertexName, removedEdgeTargetVertexName);
                removedEdges.push(removedEdge);
                immediatePredecessorVertex.removeImmediateSuccessorVertex(immediateSuccessVertex);
              });
              this.deleteVertexByVertexName(vertexName2);
              var deletedVertex = vertex, deletedVertexIndex = deletedVertex.getIndex(), vertices = this.getVertices(), affectedVertices = vertices.reduce(function(affectedVertices1, vertex1) {
                var vertexIndex = vertex1.getIndex(), vertexAffected = vertexIndex > deletedVertexIndex;
                if (vertexAffected) {
                  var affectedVertex = vertex1;
                  affectedVertices1.push(affectedVertex);
                }
                return affectedVertices1;
              }, []);
              affectedVertices.forEach(function(affectedVertex) {
                return affectedVertex.decrementIndex();
              });
            }
            return removedEdges;
          }
        }
      ], [
        {
          key: "fromNothing",
          value: function fromNothing() {
            var vertexMap = {}, directedAcyclicGraph2 = new DirectedAcyclicGraph2(vertexMap);
            return directedAcyclicGraph2;
          }
        },
        {
          key: "fromVertexNames",
          value: function fromVertexNames(vertexNames) {
            var vertexMap = vertexMapFromVertexNames(vertexNames);
            var directedAcyclicGraph2 = new DirectedAcyclicGraph2(vertexMap);
            return directedAcyclicGraph2;
          }
        },
        {
          key: "fromOrderedVertices",
          value: function fromOrderedVertices(orderedVertices) {
            var vertexMap = vertexMapFromOrderedVertices(orderedVertices);
            addEdgesToVertices(orderedVertices, vertexMap);
            var directedAcyclicGraph2 = new DirectedAcyclicGraph2(vertexMap);
            return directedAcyclicGraph2;
          }
        }
      ]);
      return DirectedAcyclicGraph2;
    }();
    exports.default = DirectedAcyclicGraph;
    function addInvalidatingEdgeByVertices(sourceVertex, targetVertex) {
      var success = false;
      var forwardsAffectedVertices = targetVertex.retrieveForwardsAffectedVertices(sourceVertex), lastForwardsAffectedVertex = last(forwardsAffectedVertices), resultsInCycle = lastForwardsAffectedVertex === sourceVertex;
      if (!resultsInCycle) {
        var backwardsAffectedVertices = sourceVertex.retrieveBackwardsAffectedVertices();
        (0, _vertex1).orderVertices(backwardsAffectedVertices);
        (0, _vertex1).orderVertices(forwardsAffectedVertices);
        var affectedVertices = [].concat(backwardsAffectedVertices).concat(forwardsAffectedVertices), affectedVertexIndices = affectedVertices.map(function(affectedVertex) {
          var affectedVertexIndex = affectedVertex.getIndex();
          return affectedVertexIndex;
        });
        affectedVertexIndices.sort(function(indexA, indexB) {
          return indexA - indexB;
        });
        affectedVertices.forEach(function(affectedVertex, index) {
          var affectedVertexIndex = affectedVertexIndices[index];
          affectedVertex.setIndex(affectedVertexIndex);
        });
        success = true;
      }
      return success;
    }
    function vertexMapFromVertexNames(vertexNames) {
      var vertexMap = {};
      vertexNames.forEach(function(vertexName2, index) {
        var name = vertexName2, vertex = _vertex.default.fromNameAndIndex(name, index);
        vertexMap[vertexName2] = vertex;
      });
      return vertexMap;
    }
    function vertexMapFromOrderedVertices(orderedVertices) {
      var vertexMap = {};
      orderedVertices.forEach(function(orderedVertex, index) {
        var name = orderedVertex.getName(), vertex = _vertex.default.fromNameAndIndex(name, index), vertexName2 = name;
        vertexMap[vertexName2] = vertex;
      });
      return vertexMap;
    }
    function addEdgesToVertices(orderedVertices, vertexMap) {
      orderedVertices.forEach(function(orderedVertex) {
        orderedVertex.forEachOutgoingEdge(function(outgoingEdge) {
          var sourceVertexName2 = outgoingEdge.getSourceVertexName(), targetVertexName2 = outgoingEdge.getTargetVertexName(), immediatePredecessorVertexName = sourceVertexName2, immediateSuccessorVertexName = targetVertexName2, immediatePredecessorVertex = vertexMap[immediatePredecessorVertexName], immediateSuccessorVertex = vertexMap[immediateSuccessorVertexName];
          immediatePredecessorVertex.addImmediateSuccessorVertex(immediateSuccessorVertex);
          immediateSuccessorVertex.addImmediatePredecessorVertex(immediatePredecessorVertex);
        });
      });
    }
  });

  // lib/index.js
  var require_lib = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "Edge", {
      enumerable: true,
      get: function() {
        return _edge.default;
      }
    });
    Object.defineProperty(exports, "DirectedAcyclicGraph", {
      enumerable: true,
      get: function() {
        return _directedAcyclicGraph.default;
      }
    });
    var _edge = _interopRequireDefault(require_edge());
    var _directedAcyclicGraph = _interopRequireDefault(require_directedAcyclicGraph());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  });

  // lib/example.js
  "use strict";
  var _index = require_lib();
  var directedAcyclicGraph = _index.DirectedAcyclicGraph.fromNothing();
  var vertexName = "i";
  var sourceVertexName = "j";
  var targetVertexName = "k";
  directedAcyclicGraph.addVertexByVertexName(vertexName);
  directedAcyclicGraph.addEdgeByVertexNames(sourceVertexName, targetVertexName);
  var orderedVertexNames = directedAcyclicGraph.getOrderedVertexNames();
  debugger;
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2VkZ2UuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvY29uc3RhbnRzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9hcnJheS5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvcGF0aC5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9jaGFyYWN0ZXJzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9odHRwLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9hc3luY2hyb25vdXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvbWV0aG9kcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9jb250ZW50VHlwZXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2FqYXguanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvYnJvd3Nlci5qcyIsICJzcmMvdXRpbGl0aWVzL3ZlcnRleC5qcyIsICJzcmMvdmVydGV4LmpzIiwgInNyYy9kaXJlY3RlZEFjeWNsaWNHcmFwaC5qcyIsICJzcmMvaW5kZXguanMiLCAic3JjL2V4YW1wbGUuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGdlIHtcbiAgY29uc3RydWN0b3Ioc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIHRoaXMuc291cmNlVmVydGV4TmFtZSA9IHNvdXJjZVZlcnRleE5hbWU7XG4gICAgdGhpcy50YXJnZXRWZXJ0ZXhOYW1lID0gdGFyZ2V0VmVydGV4TmFtZTtcbiAgfVxuICBcbiAgZ2V0U291cmNlVmVydGV4TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2VWZXJ0ZXhOYW1lO1xuICB9XG4gIFxuICBnZXRUYXJnZXRWZXJ0ZXhOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldFZlcnRleE5hbWU7XG4gIH1cbiAgXG4gIG1hdGNoKGVkZ2UpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIG1hdGNoZXMgPSAoKHRoaXMuc291cmNlVmVydGV4TmFtZSA9PT0gc291cmNlVmVydGV4TmFtZSkgJiYgKHRoaXMudGFyZ2V0VmVydGV4TmFtZSA9PT0gdGFyZ2V0VmVydGV4TmFtZSkpO1xuICAgIFxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gKCh0aGlzLnNvdXJjZVZlcnRleE5hbWUgPT09IHZlcnRleE5hbWUpIHx8ICh0aGlzLnRhcmdldFZlcnRleE5hbWUgPT09IHZlcnRleE5hbWUpKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gKHRoaXMuc291cmNlVmVydGV4TmFtZSA9PT0gc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9ICh0aGlzLnRhcmdldFZlcnRleE5hbWUgPT09IHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gKCh0aGlzLnNvdXJjZVZlcnRleE5hbWUgPT09IHNvdXJjZVZlcnRleE5hbWUpICYmICh0aGlzLnRhcmdldFZlcnRleE5hbWUgPT09IHRhcmdldFZlcnRleE5hbWUpKTtcbiAgICBcbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBuZXcgRWRnZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiBlZGdlO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBVVEY4ID0gXCJ1dGY4XCI7XG5leHBvcnQgY29uc3QgRVJST1IgPSBcImVycm9yXCI7XG5leHBvcnQgY29uc3QgQ1RSTF9DID0gXCJeQ1wiO1xuZXhwb3J0IGNvbnN0IEFDQ0VQVCA9IFwiYWNjZXB0XCI7XG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbmV4cG9ydCBjb25zdCBDT05URU5UX1RZUEUgPSBcImNvbnRlbnQtdHlwZVwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdO31cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoKGFycmF5KSB7IHJldHVybiBhcnJheVszXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlmdGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDVdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA0XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAzXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGFpbChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2soYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKGFycmF5Lmxlbmd0aCAtIDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9udChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMCwgYXJyYXkubGVuZ3RoIC0gMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNoaWZ0KGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0KGFycmF5MSwgZWxlbWVudE9yQXJyYXkyKSB7XG4gIGNvbnN0IGFycmF5MiA9IChlbGVtZW50T3JBcnJheTIgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50T3JBcnJheTIgOlxuICAgICAgICAgICAgICAgICAgICAgW2VsZW1lbnRPckFycmF5Ml07XG4gIFxuICBwdXNoKGFycmF5MSwgYXJyYXkyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcbiAgXG4gIHJldHVybiBhcnJheS5zcGxpY2Uoc3RhcnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weShhcnJheTEsIGFycmF5Mikge1xuICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gYXJyYXkyLmxlbmd0aDsgIC8vL1xuICBcbiAgc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheTIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQgPSBJbmZpbml0eSwgYXJyYXkyID0gW10pIHtcbiAgY29uc3QgYXJncyA9IFtzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFycmF5Ml0sXG4gICAgICAgIGRlbGV0ZWRJdGVtc0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheTEsIGFyZ3MpO1xuXG4gIHJldHVybiBkZWxldGVkSXRlbXNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UoYXJyYXksIGVsZW1lbnQsIHRlc3QpIHtcbiAgbGV0IHN0YXJ0O1xuICBcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgc3RhcnQgPSBpbmRleDsgIC8vL1xuICAgICAgXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgaWYgKGZvdW5kKSB7XG4gICAgY29uc3QgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXIoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZmlsdGVyZWRFbGVtZW50cyA9IFtdO1xuICBcbiAgYmFja3dhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgZmlsdGVyZWRFbGVtZW50cy51bnNoaWZ0KGZpcnN0RGVsZXRlZEVsZW1lbnQpOyAgLy8vXG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBmaWx0ZXJlZEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZChhcnJheSwgdGVzdCkge1xuICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gIGZvcndhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJ1bmUoYXJyYXksIHRlc3QpIHtcbiAgbGV0IHBydW5lZEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIFxuICBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIHBydW5lZEVsZW1lbnQgPSBmaXJzdERlbGV0ZWRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gcHJ1bmVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoKGFycmF5LCBlbGVtZW50LCB0ZXN0KSB7XG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cblxuICBpZiAoZm91bmQpIHtcbiAgICBhcnJheS5wdXNoKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXVnbWVudChhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheTIuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXBhcmF0ZShhcnJheSwgYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIHBhc3NlZCA/XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KSA6XG4gICAgICAgIGFycmF5Mi5wdXNoKGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gICAgXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTtcblxuICBmb3J3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTtcblxuICBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCBlbGVtZW50LCBpbmRleCk7XG4gIH0pO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZmlyc3QsXG4gIHNlY29uZCxcbiAgdGhpcmQsXG4gIGZvdXJ0aCxcbiAgZmlmdGgsXG4gIGZpZnRoTGFzdCxcbiAgZm91cnRoTGFzdCxcbiAgdGhpcmRMYXN0LFxuICBzZWNvbmRMYXN0LFxuICBsYXN0LFxuICBoZWFkLFxuICB0YWlsLFxuICBiYWNrLFxuICBmcm9udCxcbiAgcHVzaCxcbiAgdW5zaGlmdCxcbiAgY29uY2F0LFxuICBjbGVhcixcbiAgY29weSxcbiAgbWVyZ2UsXG4gIHNwbGljZSxcbiAgcmVwbGFjZSxcbiAgZmlsdGVyLFxuICBmaW5kLFxuICBwcnVuZSxcbiAgcGF0Y2gsXG4gIGF1Z21lbnQsXG4gIHNlcGFyYXRlLFxuICBmb3J3YXJkc1NvbWUsXG4gIGJhY2t3YXJkc1NvbWUsXG4gIGZvcndhcmRzRXZlcnksXG4gIGJhY2t3YXJkc0V2ZXJ5LFxuICBmb3J3YXJkc1JlZHVjZSxcbiAgYmFja3dhcmRzUmVkdWNlLFxuICBmb3J3YXJkc0ZvckVhY2gsXG4gIGJhY2t3YXJkc0ZvckVhY2hcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhOYW1lKHBhdGgpIHtcbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXlxcLy8sIEVNUFRZX1NUUklORykucmVwbGFjZSgvXFwvJC8sIEVNUFRZX1NUUklORyk7IC8vL1xuXG4gIGNvbnN0IHBhdGhOYW1lID0gKC9cXC8vLnRlc3QocGF0aCkgPT09IGZhbHNlKTtcblxuICByZXR1cm4gcGF0aE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhUb3Btb3N0TmFtZShwYXRoKSB7XG4gIGNvbnN0IHBhdGhOYW1lID0gaXNQYXRoTmFtZShwYXRoKSxcbiAgICAgICAgcGF0aEFic29sdXRlUGF0aCA9IGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSxcbiAgICAgICAgcGF0aFRvcG1vc3ROYW1lID0gKHBhdGhOYW1lICYmIHBhdGhBYnNvbHV0ZVBhdGgpO1xuXG4gIHJldHVybiBwYXRoVG9wbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhSZWxhdGl2ZVBhdGgocGF0aCkge1xuICBjb25zdCBwYXRoUmVsYXRpdmVQYXRoID0gIS9eXFwvLy50ZXN0KHBhdGgpO1xuXG4gIHJldHVybiBwYXRoUmVsYXRpdmVQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoQWJzb2x1dGVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aEFic29sdXRlUGF0aCA9IC9eXFwvLy50ZXN0KHBhdGgpO1xuXG4gIHJldHVybiBwYXRoQWJzb2x1dGVQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUb3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoKHRvcG1vc3ROYW1lLCBhYnNvbHV0ZVBhdGgpIHtcbiAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7dG9wbW9zdE5hbWV9KD86XFxcXC8uKyk/JGApLFxuICAgICAgICB0b3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoID0gcmVnRXhwLnRlc3QoYWJzb2x1dGVQYXRoKTtcblxuICByZXR1cm4gdG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZVBhdGhzKHBhdGgsIHJlbGF0aXZlUGF0aCkge1xuICBsZXQgY29tYmluZWRQYXRoID0gbnVsbDtcblxuICBjb25zdCBwYXRoTmFtZXMgPSBwYXRoLnNwbGl0KC9cXC8vKSxcbiAgICAgICAgcmVsYXRpdmVQYXRoTmFtZXMgPSByZWxhdGl2ZVBhdGguc3BsaXQoL1xcLy8pO1xuXG4gIGxldCBsYXN0UGF0aE5hbWUsXG4gICAgICBmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPSBmaXJzdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG5cbiAgaWYgKGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9PT0gXCIuXCIpIHtcbiAgICByZWxhdGl2ZVBhdGhOYW1lcy5zaGlmdCgpO1xuICB9XG5cbiAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuICBsYXN0UGF0aE5hbWUgPSBsYXN0KHBhdGhOYW1lcyk7XG5cbiAgd2hpbGUgKChmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPT09IFwiLi5cIikgJiYgKGxhc3RQYXRoTmFtZSAhPT0gdW5kZWZpbmVkKSkge1xuICAgIHJlbGF0aXZlUGF0aE5hbWVzLnNoaWZ0KCk7XG4gICAgcGF0aE5hbWVzLnBvcCgpO1xuXG4gICAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuICAgIGxhc3RQYXRoTmFtZSA9IGxhc3QocGF0aE5hbWVzKTtcbiAgfVxuXG4gIGlmIChsYXN0UGF0aE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNvbWJpbmVkUGF0aE5hbWVzID0gW10uY29uY2F0KHBhdGhOYW1lcykuY29uY2F0KHJlbGF0aXZlUGF0aE5hbWVzKTtcblxuICAgIGNvbWJpbmVkUGF0aCA9IGNvbWJpbmVkUGF0aE5hbWVzLmpvaW4oXCIvXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNvbWJpbmVkUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdGVuYXRlUGF0aHMocGF0aCwgcmVsYXRpdmVQYXRoKSB7XG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLyQvLCBFTVBUWV9TVFJJTkcpOyAgLy8vXG5cbiAgY29uc3QgY29uY2F0ZW5hdGVkUGF0aCA9IGAke3BhdGh9LyR7cmVsYXRpdmVQYXRofWA7XG5cbiAgcmV0dXJuIGNvbmNhdGVuYXRlZFBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IGJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXi4qXFwvKFteXFwvXStcXC8/KSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgYm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIGJvdHRvbW1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4rKVxcL1teXFwvXStcXC8/JC8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeVBhdGggPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oW15cXC9dKylcXC8uKyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4qKVxcL1teXFwvXStcXC8/JC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL15bXlxcL10rXFwvKC4rKSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoO1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNQYXRoTmFtZSxcbiAgaXNQYXRoVG9wbW9zdE5hbWUsXG4gIGlzUGF0aFJlbGF0aXZlUGF0aCxcbiAgaXNQYXRoQWJzb2x1dGVQYXRoLFxuICBpc1RvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGgsXG4gIGNvbWJpbmVQYXRocyxcbiAgY29uY2F0ZW5hdGVQYXRocyxcbiAgYm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGhcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBFVFhfQ0hBUkFDVEVSID0gXCJcXHUwMDAzXCI7XG5leHBvcnQgY29uc3QgQ09MT05fQ0hBUkFDVEVSID0gXCI6XCI7XG5leHBvcnQgY29uc3QgQU1QRVJTQU5EX0NIQVJBQ1RFUiA9IFwiJlwiO1xuZXhwb3J0IGNvbnN0IExJTkVfRkVFRF9DSEFSQUNURVIgPSBcIlxcblwiO1xuZXhwb3J0IGNvbnN0IEJBQ0tTUEFDRV9DSEFSQUNURVIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDEyNyk7XG5leHBvcnQgY29uc3QgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiA9IFwiXFxyXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IENPTE9OX0NIQVJBQ1RFUiwgQU1QRVJTQU5EX0NIQVJBQ1RFUiB9IGZyb20gXCIuLi9jaGFyYWN0ZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvdmVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3Qgb3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLFxuICAgICAgICBsb3dlckNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBvdmVyd3JpdHRlbiA9IG93blByb3BlcnR5TmFtZXMuc29tZSgob3duUHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgbG93ZXJDYXNlT3duUHJvcGVydHlOYW1lID0gb3duUHJvcGVydHlOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAobG93ZXJDYXNlT3duUHJvcGVydHlOYW1lID09PSBsb3dlckNhc2VOYW1lKSB7XG4gICAgICAgICAgICBoZWFkZXJzW293blByb3BlcnR5TmFtZV0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICBpZiAoIW92ZXJ3cml0dGVuKSB7XG4gICAgaGVhZGVyc1tuYW1lXSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmRlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IG93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKSxcbiAgICAgICAgbG93ZXJjYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgbG93ZXJDYXNlT3duUHJvcGVydHlOYW1lcyA9IG93blByb3BlcnR5TmFtZXMubWFwKChvd25Qcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBsb3dlckNhc2VPd25Qcm9wZXJ0eU5hbWUgPSBvd25Qcm9wZXJ0eU5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgIHJldHVybiBsb3dlckNhc2VPd25Qcm9wZXJ0eU5hbWU7XG4gICAgICAgIH0pLFxuICAgICAgICBsb3dlckNhc2VPd25Qcm9wZXJ0eU5hbWVzSW5jbHVkZXNMb3dlcmNhc2VOYW1lID0gbG93ZXJDYXNlT3duUHJvcGVydHlOYW1lcy5pbmNsdWRlcyhsb3dlcmNhc2VOYW1lKTtcblxuICBpZiAoIWxvd2VyQ2FzZU93blByb3BlcnR5TmFtZXNJbmNsdWRlc0xvd2VyY2FzZU5hbWUpIHtcbiAgICBoZWFkZXJzW25hbWVdID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcnRGcm9tSG9zdChob3N0KSB7XG4gIGxldCBwb3J0O1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBob3N0Lm1hdGNoKC9eaHR0cHM/OlxcL1xcLyhbXlxcL10rKS8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgaW5kZXggPSBzZWNvbmRNYXRjaC5pbmRleE9mKENPTE9OX0NIQVJBQ1RFUik7XG5cbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIGNvbnN0IHNlY3VyZSA9IHNlY3VyZUZyb21Ib3N0KGhvc3QpO1xuXG4gICAgcG9ydCA9IHNlY3VyZSA/IDQ0MyA6IDgwOyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdGFydCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBwb3J0U3RyaW5nID0gc2Vjb25kTWF0Y2guc3Vic3RyaW5nKHN0YXJ0KTtcblxuICAgIHBvcnQgPSBOdW1iZXIocG9ydFN0cmluZyk7XG4gIH1cblxuICByZXR1cm4gcG9ydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyZUZyb21Ib3N0KGhvc3QpIHtcbiAgY29uc3Qgc2VjdXJlID0gL15odHRwczpcXC9cXC8vLnRlc3QoaG9zdCk7XG5cbiAgcmV0dXJuIHNlY3VyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhvc3RuYW1lRnJvbUhvc3QoaG9zdCkge1xuICBjb25zdCBtYXRjaGVzID0gaG9zdC5tYXRjaCgvXmh0dHBzPzpcXC9cXC8oW146XFwvXSspLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBob3N0bmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gaG9zdG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeVN0cmluZ0Zyb21QYXJhbWV0ZXJzKHBhcmFtZXRlcnMpIHtcbiAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhwYXJhbWV0ZXJzKSxcbiAgICAgICAgbmFtZXNMZW5ndGggPSBuYW1lcy5sZW5ndGgsXG4gICAgICAgIGxhc3RJbmRleCA9IG5hbWVzTGVuZ3RoIC0gMSxcbiAgICAgICAgcXVlcnlTdHJpbmcgPSBuYW1lcy5yZWR1Y2UoKHF1ZXJ5U3RyaW5nLCBuYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFyYW1ldGVyc1tuYW1lXSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkTmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkVmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLFxuICAgICAgICAgICAgICAgIGFtcGVyc2FuZE9yTm90aGluZyA9IChpbmRleCAhPT0gbGFzdEluZGV4KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBTVBFUlNBTkRfQ0hBUkFDVEVSIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HO1xuICBcbiAgICAgICAgICBxdWVyeVN0cmluZyArPSBgJHtlbmNvZGVkTmFtZX09JHtlbmNvZGVkVmFsdWV9JHthbXBlcnNhbmRPck5vdGhpbmd9YDtcbiAgXG4gICAgICAgICAgcmV0dXJuIHF1ZXJ5U3RyaW5nO1xuICAgICAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBxdWVyeVN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybEZyb21Ib3N0VVJJQW5kUGFyYW1ldGVycyhob3N0LCB1cmksIHBhcmFtZXRlcnMpIHtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZ0Zyb21QYXJhbWV0ZXJzKHBhcmFtZXRlcnMpLFxuICAgICAgICB1cmwgPSAocXVlcnlTdHJpbmcgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgICAgICAgICAgIGAke2hvc3R9JHt1cml9YCA6XG4gICAgICAgICAgICAgICAgICBgJHtob3N0fSR7dXJpfT8ke3F1ZXJ5U3RyaW5nfWA7XG5cbiAgcmV0dXJuIHVybDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBvdmVyd3JpdGUsXG4gIHVuZGVyd3JpdGUsXG4gIHBvcnRGcm9tSG9zdCxcbiAgc2VjdXJlRnJvbUhvc3QsXG4gIGhvc3RuYW1lRnJvbUhvc3QsXG4gIHF1ZXJ5U3RyaW5nRnJvbVBhcmFtZXRlcnMsXG4gIHVybEZyb21Ib3N0VVJJQW5kUGFyYW1ldGVyc1xufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3aGlsc3QoY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgdGVybWluYXRlID0gY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcXVlbmNlKGNhbGxiYWNrcywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGNhbGxiYWNrcy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFja3NbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXZlbnR1YWxseShjYWxsYmFja3MsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBjYWxsYmFja3MubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbGxiYWNrcy5mb3JFYWNoKChjYWxsYmFjaywgaW5kZXgpID0+IHtcclxuICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdGVkbHkoY2FsbGJhY2ssIGxlbmd0aCwgZG9uZSwgY29udGV4dCkge1xyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcclxuICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSBsZW5ndGg7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudC0tO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gLTEpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgd2hpbHN0LFxyXG4gIGZvckVhY2gsXHJcbiAgc2VxdWVuY2UsXHJcbiAgZXZlbnR1YWxseSxcclxuICByZXBlYXRlZGx5LFxyXG4gIGZvcndhcmRzRm9yRWFjaCxcclxuICBiYWNrd2FyZHNGb3JFYWNoXHJcbn07XHJcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEdFVF9NRVRIT0QgPSBcIkdFVFwiO1xuZXhwb3J0IGNvbnN0IFBPU1RfTUVUSE9EID0gXCJQT1NUXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBBQ0NFUFQsIENPTlRFTlRfVFlQRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEdFVF9NRVRIT0QsIFBPU1RfTUVUSE9EIH0gZnJvbSBcIi4uL21ldGhvZHNcIjtcbmltcG9ydCB7IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFIH0gZnJvbSBcIi4uL2NvbnRlbnRUeXBlc1wiO1xuaW1wb3J0IHsgdW5kZXJ3cml0ZSwgdXJsRnJvbUhvc3RVUklBbmRQYXJhbWV0ZXJzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9odHRwXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzLCBoZWFkZXJzLCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGxiYWNrID0gaGVhZGVyczsgLy8vXG4gICAgaGVhZGVycyA9IHt9O1xuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gR0VUX01FVEhPRCxcbiAgICAgICAgYm9keSA9IG51bGw7XG5cbiAgdW5kZXJ3cml0ZUFjY2VwdChoZWFkZXJzKTtcblxuICByZXF1ZXN0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgbWV0aG9kLCBib2R5LCBoZWFkZXJzLCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgYm9keSwgaGVhZGVycywgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IGhlYWRlcnM7IC8vL1xuICAgIGhlYWRlcnMgPSB7fTtcbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IFBPU1RfTUVUSE9EO1xuXG4gIHVuZGVyd3JpdGVBY2NlcHQoaGVhZGVycyk7XG5cbiAgdW5kZXJ3cml0ZUNvbnRlbnRUeXBlKGhlYWRlcnMpO1xuXG4gIHJlcXVlc3QoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzLCBtZXRob2QsIGJvZHksIGhlYWRlcnMsIGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3QoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzLCBtZXRob2QsIGJvZHksIGhlYWRlcnMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHVybCA9IHVybEZyb21Ib3N0VVJJQW5kUGFyYW1ldGVycyhob3N0LCB1cmksIHBhcmFtZXRlcnMpLFxuICAgICAgICBhY2NlcHQgPSBoZWFkZXJzW0FDQ0VQVF0gfHwgbnVsbCxcbiAgICAgICAgY29udGVudFR5cGUgPSBoZWFkZXJzW0NPTlRFTlRfVFlQRV0gfHwgbnVsbCxcbiAgICAgICAgeG1sSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICBpZiAoY29udGVudFR5cGUgPT09IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFKSB7XG4gICAgY29uc3QganNvbiA9IGJvZHksICAvLy9cbiAgICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG5cbiAgICBib2R5ID0ganNvblN0cmluZzsgIC8vL1xuICB9XG5cbiAgeG1sSHR0cFJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVhZHlTdGF0ZSwgc3RhdHVzLCByZXNwb25zZVRleHQgfSA9IHhtbEh0dHBSZXF1ZXN0O1xuXG4gICAgaWYgKHJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgbGV0IGJvZHkgPSByZXNwb25zZVRleHQ7XG5cbiAgICAgIGlmIChhY2NlcHQgPT09IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QganNvblN0cmluZyA9IGJvZHksICAvLy9cbiAgICAgICAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcblxuICAgICAgICAgIGJvZHkgPSBqc29uOyAgLy8vXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgYm9keSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFjayhib2R5LCBzdGF0dXMpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB4bWxIdHRwUmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsKTtcblxuICBpZiAoYWNjZXB0ICE9PSBudWxsKSB7XG4gICAgeG1sSHR0cFJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihBQ0NFUFQsIGFjY2VwdCk7XG4gIH1cblxuICBpZiAoY29udGVudFR5cGUgIT09IG51bGwpIHtcbiAgICB4bWxIdHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKENPTlRFTlRfVFlQRSwgY29udGVudFR5cGUpO1xuICB9XG5cbiAgKGJvZHkgIT09IG51bGwpID9cbiAgICB4bWxIdHRwUmVxdWVzdC5zZW5kKGJvZHkpIDpcbiAgICAgIHhtbEh0dHBSZXF1ZXN0LnNlbmQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQsXG4gIHBvc3QsXG4gIHJlcXVlc3Rcbn1cblxuZnVuY3Rpb24gdW5kZXJ3cml0ZUFjY2VwdChoZWFkZXJzKSB7XG4gIGNvbnN0IG5hbWUgPSBBQ0NFUFQsICAvLy9cbiAgICAgICAgdmFsdWUgPSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRTsgLy8vXG5cbiAgdW5kZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHVuZGVyd3JpdGVDb250ZW50VHlwZShoZWFkZXJzKSB7XG4gIGNvbnN0IG5hbWUgPSBDT05URU5UX1RZUEUsICAvLy9cbiAgICAgICAgdmFsdWUgPSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRTsgLy8vXG5cbiAgdW5kZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGF0aFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGh0dHBVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvaHR0cFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXN5bmNocm9ub3VzXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWpheFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hamF4XCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4KSA9PiB7XG4gICAgY29uc3QgdmVydGV4TmFtZSA9IHZlcnRleC5nZXROYW1lKCk7XG5cbiAgICByZXR1cm4gdmVydGV4TmFtZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZlcnRleE5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3JkZXJWZXJ0aWNlcyh2ZXJ0aWNlcykgeyAgLy8vXG4gIHZlcnRpY2VzLnNvcnQoKGZpcnN0VmVydGV4LCBzZWNvbmRWZXJ0ZXgpID0+IHtcbiAgICBjb25zdCBmaXJzdFZlcnRleEluZGV4ID0gZmlyc3RWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXhJbmRleCA9IHNlY29uZFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGZpcnN0VmVydGV4SW5kZXggPCBzZWNvbmRWZXJ0ZXhJbmRleCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSAgaWYgKGZpcnN0VmVydGV4SW5kZXggPiBzZWNvbmRWZXJ0ZXhJbmRleCkge1xuICAgICAgcmV0dXJuICsxO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgb3JkZXJlZFZlcnRpY2VzID0gdmVydGljZXM7ICAvLy9cblxuICByZXR1cm4gb3JkZXJlZFZlcnRpY2VzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0aWNlcywgb3JkZXJWZXJ0aWNlcyB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJ0ZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IobmFtZSwgaW5kZXgsIHZpc2l0ZWQsIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMsIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy52aXNpdGVkID0gdmlzaXRlZDtcbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzO1xuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgaXNWaXNpdGVkKCkge1xuICAgIHJldHVybiB0aGlzLnZpc2l0ZWQ7XG4gIH1cblxuICBpc1N0cmFuZGVkKCkge1xuICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXNMZW5ndGggPSB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMubGVuZ3RoLFxuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzTGVuZ3RoID0gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgICAgc3RyYW5kZWQgPSAoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXNMZW5ndGggPT09IDApICYmIChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlc0xlbmd0aCA9PT0gMCkpO1xuXG4gICAgcmV0dXJuIHN0cmFuZGVkO1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzLm1hcCgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgcmV0dXJuIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMgPSB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzLm1hcCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgcmV0dXJuIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXM7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcztcbiAgfVxuXG4gIGdldFByZWRlY2Vzc29yVmVydGV4TWFwKHByZWRlY2Vzc29yVmVydGV4TWFwID0ge30pIHtcbiAgICB0aGlzLmZvckVhY2hJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGV4ID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgsIC8vL1xuICAgICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gcHJlZGVjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICBwcmVkZWNlc3NvclZlcnRleE1hcFtwcmVkZWNlc3NvclZlcnRleE5hbWVdID0gcHJlZGVjZXNzb3JWZXJ0ZXg7XG5cbiAgICAgIHByZWRlY2Vzc29yVmVydGV4LmdldFByZWRlY2Vzc29yVmVydGV4TWFwKHByZWRlY2Vzc29yVmVydGV4TWFwKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRleE1hcDtcbiAgfVxuXG4gIGdldFN1Y2Nlc3NvclZlcnRleE1hcChzdWNjZXNzb3JWZXJ0ZXhNYXAgPSB7fSkge1xuICAgIHRoaXMuZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXggPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgsIC8vL1xuICAgICAgICAgICAgc3VjY2Vzc29yVmVydGV4TmFtZSA9IHN1Y2Nlc3NvclZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgIHN1Y2Nlc3NvclZlcnRleE1hcFtzdWNjZXNzb3JWZXJ0ZXhOYW1lXSA9IHN1Y2Nlc3NvclZlcnRleDtcblxuICAgICAgc3VjY2Vzc29yVmVydGV4LmdldFN1Y2Nlc3NvclZlcnRleE1hcChzdWNjZXNzb3JWZXJ0ZXhNYXApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleE1hcDtcbiAgfVxuXG4gIGdldFByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IHRoaXMuZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpLFxuICAgICAgICAgIHByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSBwcmVkZWNlc3NvclZlcnRpY2VzLm1hcCgocHJlZGVjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGV4TmFtZSA9IHByZWRlY2Vzc29yVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4TmFtZTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3Qgc3VjY2Vzc29yVmVydGljZXMgPSB0aGlzLmdldFN1Y2Nlc3NvclZlcnRpY2VzKCksXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGV4TmFtZXMgPSBzdWNjZXNzb3JWZXJ0aWNlcy5tYXAoKHN1Y2Nlc3NvclZlcnRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4TmFtZSA9IHN1Y2Nlc3NvclZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdWNjZXNzb3JWZXJ0ZXhOYW1lO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpIHtcbiAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRleE1hcCA9IHRoaXMuZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhNYXAoKSxcbiAgICAgICAgICBwcmVkZWNlc3NvclZlcnRleE5hbWVzID0gT2JqZWN0LmtleXMocHJlZGVjZXNzb3JWZXJ0ZXhNYXApLFxuICAgICAgICAgIHByZWRlY2Vzc29yVmVydGljZXMgPSBwcmVkZWNlc3NvclZlcnRleE5hbWVzLm1hcCgocHJlZGVjZXNzb3JWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRleCA9IHByZWRlY2Vzc29yVmVydGV4TWFwW3ByZWRlY2Vzc29yVmVydGV4TmFtZV07XG5cbiAgICAgICAgICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRleDtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0U3VjY2Vzc29yVmVydGljZXMoKSB7XG4gICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4TWFwID0gdGhpcy5nZXRTdWNjZXNzb3JWZXJ0ZXhNYXAoKSxcbiAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IE9iamVjdC5rZXlzKHN1Y2Nlc3NvclZlcnRleE1hcCksXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGljZXMgPSBzdWNjZXNzb3JWZXJ0ZXhOYW1lcy5tYXAoKHN1Y2Nlc3NvclZlcnRleE5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleCA9IHN1Y2Nlc3NvclZlcnRleE1hcFtzdWNjZXNzb3JWZXJ0ZXhOYW1lXTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4O1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0T3JkZXJlZFByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IHRoaXMuZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpO1xuXG4gICAgb3JkZXJWZXJ0aWNlcyhwcmVkZWNlc3NvclZlcnRpY2VzKTtcblxuICAgIGNvbnN0IG9yZGVyZWRQcmVkZWNlc3NvclZlcnRpY2VzID0gcHJlZGVjZXNzb3JWZXJ0aWNlcywgIC8vL1xuICAgICAgICAgIG9yZGVyZWRQcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGljZXMob3JkZXJlZFByZWRlY2Vzc29yVmVydGljZXMpO1xuXG4gICAgcmV0dXJuIG9yZGVyZWRQcmVkZWNlc3NvclZlcnRleE5hbWVzO1xuICB9XG4gIFxuICByZXRyaWV2ZUZvcndhcmRzQWZmZWN0ZWRWZXJ0aWNlcyhzb3VyY2VWZXJ0ZXgpIHtcbiAgICBjb25zdCBmb3J3YXJkc0FmZmVjdGVkVmVydGljZXMgPSB0aGlzLmZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCgodmlzaXRlZFZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgdGVybWluYXRlID0gKHZpc2l0ZWRWZXJ0ZXggPT09IHNvdXJjZVZlcnRleCk7XG4gICAgICBcbiAgICAgIGlmICh0ZXJtaW5hdGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIGZvcndhcmRzQWZmZWN0ZWRWZXJ0aWNlcztcbiAgfVxuXG4gIHJldHJpZXZlQmFja3dhcmRzQWZmZWN0ZWRWZXJ0aWNlcygpIHtcbiAgICBjb25zdCBiYWNrd2FyZHNBZmZlY3RlZFZlcnRpY2VzID0gdGhpcy5iYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2aXNpdGVkVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gYmFja3dhcmRzQWZmZWN0ZWRWZXJ0aWNlcztcbiAgfVxuICBcbiAgaXNWZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCh2ZXJ0ZXgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcy5pbmNsdWRlcyh2ZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIHZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4O1xuICB9XG5cbiAgaXNWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgodmVydGV4KSB7XG4gICAgY29uc3QgdmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ID0gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcy5pbmNsdWRlcyh2ZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIHZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleDtcbiAgfVxuXG4gIGlzRWRnZVByZXNlbnRCeVNvdXJjZVZlcnRleChzb3VyY2VWZXJ0ZXgpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHRoaXMuaXNWZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChzb3VyY2VWZXJ0ZXgpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gc291cmNlVmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXg7IC8vL1xuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCkge1xuICAgIGNvbnN0IHRhcmdldFZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCA9IHRoaXMuaXNWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgodGFyZ2V0VmVydGV4KSxcbiAgICAgICAgICBlZGdlUHJlc2VudCA9IHRhcmdldFZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleDsgLy8vXG5cbiAgICByZXR1cm4gZWRnZVByZXNlbnQ7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0SW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBzZXRWaXNpdGVkKHZpc2l0ZWQpIHtcbiAgICB0aGlzLnZpc2l0ZWQgPSB2aXNpdGVkO1xuICB9XG5cbiAgZGVjcmVtZW50SW5kZXgoKSB7XG4gICAgdGhpcy5pbmRleC0tO1xuICB9XG5cbiAgcmVtb3ZlSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcy5pbmRleE9mKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSxcbiAgICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICB9XG5cbiAgcmVtb3ZlSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcy5pbmRleE9mKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cbiAgXG4gIHJlbW92ZUluY29taW5nRWRnZXMoKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ID0gdGhpczsgLy8vXG4gICAgXG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzLmZvckVhY2goKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSA9PiBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5yZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSk7XG5cbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMgPSBbXTtcbiAgfVxuXG4gIHJlbW92ZU91dGdvaW5nRWRnZXMoKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB0aGlzOyAvLy9cblxuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMuZm9yRWFjaCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgucmVtb3ZlSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSk7XG5cbiAgICB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzID0gW107XG4gIH1cblxuICBhZGRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkge1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcy5wdXNoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KTtcbiAgfVxuXG4gIGFkZEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpIHtcbiAgICB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzLnB1c2goaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KTtcbiAgfVxuXG4gIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaChjYWxsYmFjaykge1xuICAgIGNvbnN0IHZpc2l0ZWRWZXJ0aWNlcyA9IFtdO1xuXG4gICAgdGhpcy5yZXRyaWV2ZUZvcndhcmRzVmlzaXRlZFZlcnRpY2VzKCh2aXNpdGVkVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hdGUgPSBjYWxsYmFjayh2aXNpdGVkVmVydGV4KTsgIC8vL1xuXG4gICAgICB2aXNpdGVkVmVydGljZXMucHVzaCh2aXNpdGVkVmVydGV4KTtcblxuICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICB9KTtcblxuICAgIHZpc2l0ZWRWZXJ0aWNlcy5mb3JFYWNoKCh2aXNpdGVkVmVydGV4KSA9PiB2aXNpdGVkVmVydGV4LnJlc2V0VmlzaXRlZCgpKTtcblxuICAgIHJldHVybiB2aXNpdGVkVmVydGljZXM7XG4gIH1cblxuICBiYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdmlzaXRlZFZlcnRpY2VzID0gW107XG5cbiAgICB0aGlzLnJldHJpZXZlQmFja3dhcmRzVmlzaXRlZFZlcnRpY2VzKCh2aXNpdGVkVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hdGUgPSBjYWxsYmFjayh2aXNpdGVkVmVydGV4KTsgIC8vL1xuXG4gICAgICB2aXNpdGVkVmVydGljZXMucHVzaCh2aXNpdGVkVmVydGV4KTtcblxuICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICB9KTtcblxuICAgIHZpc2l0ZWRWZXJ0aWNlcy5mb3JFYWNoKCh2aXNpdGVkVmVydGV4KSA9PiB2aXNpdGVkVmVydGV4LnJlc2V0VmlzaXRlZCgpKTtcblxuICAgIHJldHVybiB2aXNpdGVkVmVydGljZXM7XG4gIH1cblxuICByZXRyaWV2ZUZvcndhcmRzVmlzaXRlZFZlcnRpY2VzKGNhbGxiYWNrKSB7XG4gICAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMudmlzaXRlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMudmlzaXRlZCA9IHRydWU7XG5cbiAgICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXggPSB0aGlzOyAgLy8vXG5cbiAgICAgIHRlcm1pbmF0ZSA9IGNhbGxiYWNrKHZpc2l0ZWRWZXJ0ZXgpO1xuXG4gICAgICBpZiAodGVybWluYXRlICE9PSB0cnVlKSB7XG4gICAgICAgIHZpc2l0ZWRWZXJ0ZXguc29tZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgICAgdGVybWluYXRlID0gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LnJldHJpZXZlRm9yd2FyZHNWaXNpdGVkVmVydGljZXMoY2FsbGJhY2spO1xuXG4gICAgICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYXRlO1xuICB9XG5cbiAgcmV0cmlldmVCYWNrd2FyZHNWaXNpdGVkVmVydGljZXMoY2FsbGJhY2spIHtcbiAgICBsZXQgdGVybWluYXRlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy52aXNpdGVkID09PSBmYWxzZSkge1xuICAgICAgdGhpcy52aXNpdGVkID0gdHJ1ZTtcblxuICAgICAgY29uc3QgdmlzaXRlZFZlcnRleCA9IHRoaXM7ICAvLy9cblxuICAgICAgdGVybWluYXRlID0gY2FsbGJhY2sodmlzaXRlZFZlcnRleCk7XG5cbiAgICAgIGlmICh0ZXJtaW5hdGUgIT09IHRydWUpIHtcbiAgICAgICAgdmlzaXRlZFZlcnRleC5zb21lSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgICAgdGVybWluYXRlID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgucmV0cmlldmVCYWNrd2FyZHNWaXNpdGVkVmVydGljZXMoY2FsbGJhY2spO1xuXG4gICAgICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYXRlO1xuICB9XG5cbiAgZm9yRWFjaEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChjYWxsYmFjaykge1xuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBzb21lSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoY2FsbGJhY2spIHtcbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMuc29tZShjYWxsYmFjayk7XG4gIH1cblxuICBzb21lSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcy5zb21lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlc2V0VmlzaXRlZCgpIHtcbiAgICB0aGlzLnZpc2l0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZUFuZEluZGV4KG5hbWUsIGluZGV4KSB7XG4gICAgY29uc3QgdmlzaXRlZCA9IGZhbHNlLCAgLy8vXG4gICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcyA9IFtdLFxuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzID0gW10sXG4gICAgICAgICAgZGVwZW5kZW5jeVZlcnRleCA9IG5ldyBWZXJ0ZXgobmFtZSwgaW5kZXgsIHZpc2l0ZWQsIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMsIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzKTtcblxuICAgIHJldHVybiBkZXBlbmRlbmN5VmVydGV4O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9lZGdlXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0aWNlcywgb3JkZXJWZXJ0aWNlcyB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJ0ZXhcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0ZWRBY3ljbGljR3JhcGgge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhNYXApIHtcbiAgICB0aGlzLnZlcnRleE1hcCA9IHZlcnRleE1hcDtcbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgY29uc3QgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKCksXG4gICAgICAgICAgdmVydGljZXNMZW5ndGggPSB2ZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgICAgZW1wdHkgPSAodmVydGljZXNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGVtcHR5O1xuICB9XG5cbiAgZ2V0VmVydGljZXMoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwVmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0aGlzLnZlcnRleE1hcCksXG4gICAgICAgICAgdmVydGljZXMgPSB2ZXJ0ZXhNYXBWYWx1ZXM7IC8vL1xuXG4gICAgcmV0dXJuIHZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMudmVydGV4TWFwKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE1hcEtleXM7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIHZlcnRleCA9IHZlcnRleFByZXNlbnQgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV0gOlxuICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXguZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpO1xuXG4gICAgcmV0dXJuIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXguZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMoKTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIHByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXguZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpO1xuXG4gICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXguZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXMoKTtcblxuICAgIHJldHVybiBzdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlcyA9IFtdLFxuICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHRhcmdldFZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHRhcmdldFZlcnRleC5nZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzKCksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lcyA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXM7ICAvLy9cblxuICAgICAgc291cmNlVmVydGV4TmFtZXMuZm9yRWFjaCgoc291cmNlVmVydGV4TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgICAgZWRnZXMucHVzaChlZGdlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBlZGdlcztcbiAgfVxuXG4gIGdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlcyA9IFtdLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMgPSBzb3VyY2VWZXJ0ZXguZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWVzID0gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXM7ICAvLy9cblxuICAgICAgdGFyZ2V0VmVydGV4TmFtZXMuZm9yRWFjaCgodGFyZ2V0VmVydGV4TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgICAgZWRnZXMucHVzaChlZGdlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBlZGdlcztcbiAgfVxuXG4gIHNldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lLCB2ZXJ0ZXgpIHtcbiAgICB0aGlzLnZlcnRleE1hcFt2ZXJ0ZXhOYW1lXSA9IHZlcnRleDtcbiAgfVxuXG4gIGRlbGV0ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMudmVydGV4TWFwW3ZlcnRleE5hbWVdO1xuICB9XG5cbiAgaXNFZGdlUHJlc2VudChlZGdlKSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICBlZGdlUHJlc2VudCA9IHRoaXMuaXNFZGdlUHJlc2VudEJ5VmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG4gICAgXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgaXNFZGdlUHJlc2VudEJ5VmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGxldCBlZGdlUHJlc2VudCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc291cmNlVmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgc291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4UHJlc2VudCA9IChzb3VyY2VWZXJ0ZXggIT09IG51bGwpICYmICh0YXJnZXRWZXJ0ZXggIT09IG51bGwpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleFByZXNlbnQpIHtcbiAgICAgIGVkZ2VQcmVzZW50ID0gc291cmNlVmVydGV4LmlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIGlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4TmFtZXMgPSB0aGlzLmdldFZlcnRleE5hbWVzKCksXG4gICAgICAgICAgdmVydGV4TmFtZXNJbmNsdWRlc1ZlcnRleE5hbWUgPSB2ZXJ0ZXhOYW1lcy5pbmNsdWRlcyh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICB2ZXJ0ZXhQcmVzZW50ID0gdmVydGV4TmFtZXNJbmNsdWRlc1ZlcnRleE5hbWU7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhQcmVzZW50O1xuICB9XG5cbiAgZ2V0T3JkZXJlZFZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpO1xuXG4gICAgb3JkZXJWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG5cbiAgICBjb25zdCBvcmRlcmVkVmVydGljZXMgPSB2ZXJ0aWNlcywgLy8vXG4gICAgICAgICAgb3JkZXJlZFZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGljZXMob3JkZXJlZFZlcnRpY2VzKTtcblxuICAgIHJldHVybiBvcmRlcmVkVmVydGV4TmFtZXM7XG4gIH1cblxuICBhZGRFZGdlKGVkZ2UpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLmFkZEVkZ2VCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICByZW1vdmVFZGdlKGVkZ2UpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlQnlWZXJ0ZXhOYW1lcyhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcbiAgfVxuXG4gIGFkZEVkZ2VCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleE5hbWUgIT09IHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgICBlZGdlUHJlc2VudCA9IHNvdXJjZVZlcnRleC5pc0VkZ2VQcmVzZW50QnlUYXJnZXRWZXJ0ZXgodGFyZ2V0VmVydGV4KTtcbiAgICAgIFxuICAgICAgaWYgKGVkZ2VQcmVzZW50KSB7XG4gICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc291cmNlVmVydGV4SW5kZXggPSBzb3VyY2VWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4SW5kZXggPSB0YXJnZXRWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgICAgaW52YWxpZGF0aW5nRWRnZSA9IChzb3VyY2VWZXJ0ZXhJbmRleCA+IHRhcmdldFZlcnRleEluZGV4KTtcblxuICAgICAgICBzdWNjZXNzID0gaW52YWxpZGF0aW5nRWRnZSA/XG4gICAgICAgICAgICAgICAgICAgIGFkZEludmFsaWRhdGluZ0VkZ2VCeVZlcnRpY2VzKHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSA6XG4gICAgICAgICAgICAgICAgICAgICAgdHJ1ZTtcblxuICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gc291cmNlVmVydGV4LCAvLy9cbiAgICAgICAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0YXJnZXRWZXJ0ZXg7IC8vL1xuXG4gICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXguYWRkSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCk7XG5cbiAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXguYWRkSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgcmVtb3ZlRWRnZUJ5VmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VQcmVzZW50ID0gdGhpcy5pc0VkZ2VQcmVzZW50QnlWZXJ0ZXhOYW1lcyhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChlZGdlUHJlc2VudCkge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgc291cmNlVmVydGV4LnJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuICAgICAgdGFyZ2V0VmVydGV4LnJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KHNvdXJjZVZlcnRleCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChzb3VyY2VWZXJ0ZXhQcmVzZW50KSB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgICAgc291cmNlVmVydGV4LnJlbW92ZU91dGdvaW5nRWRnZXMoKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdGFyZ2V0VmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHRhcmdldFZlcnRleFByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICB0YXJnZXRWZXJ0ZXgucmVtb3ZlSW5jb21pbmdFZGdlcygpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKCF2ZXJ0ZXhQcmVzZW50KSB7XG4gICAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMuZ2V0VmVydGV4TmFtZXMoKSxcbiAgICAgICAgICAgIHZlcnRleE5hbWVzTGVuZ3RoID0gdmVydGV4TmFtZXMubGVuZ3RoLFxuICAgICAgICAgICAgbmFtZSA9IHZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICAgIGluZGV4ID0gdmVydGV4TmFtZXNMZW5ndGgsIC8vL1xuICAgICAgICAgICAgdmVydGV4ID0gVmVydGV4LmZyb21OYW1lQW5kSW5kZXgobmFtZSwgaW5kZXgpO1xuXG4gICAgICB0aGlzLnNldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lLCB2ZXJ0ZXgpO1xuICAgIH1cblxuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIHJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgbGV0IHJlbW92ZWRFZGdlcyA9IG51bGw7XG5cbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAodmVydGV4UHJlc2VudCkge1xuICAgICAgcmVtb3ZlZEVkZ2VzID0gW107XG5cbiAgICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgICB2ZXJ0ZXguZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCkgPT4ge1xuICAgICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHZlcnRleCwgIC8vL1xuICAgICAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICAgIHJlbW92ZWRFZGdlU291cmNlVmVydGV4TmFtZSA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSwgLy8vXG4gICAgICAgICAgICAgIHJlbW92ZWRFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXhOYW1lLCAvLy9cbiAgICAgICAgICAgICAgcmVtb3ZlZEVkZ2UgPSBuZXcgRWRnZShyZW1vdmVkRWRnZVNvdXJjZVZlcnRleE5hbWUsIHJlbW92ZWRFZGdlVGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgICAgcmVtb3ZlZEVkZ2VzLnB1c2gocmVtb3ZlZEVkZ2UpO1xuXG4gICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXgucmVtb3ZlSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpO1xuICAgICAgfSk7XG5cbiAgICAgIHZlcnRleC5mb3JFYWNoSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXggPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzVmVydGV4TmFtZSA9IGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXguZ2V0TmFtZSgpLCAgLy8vXG4gICAgICAgICAgICAgIHJlbW92ZWRFZGdlU291cmNlVmVydGV4TmFtZSA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSwgLy8vXG4gICAgICAgICAgICAgIHJlbW92ZWRFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXhOYW1lLCAvLy9cbiAgICAgICAgICAgICAgcmVtb3ZlZEVkZ2UgPSBuZXcgRWRnZShyZW1vdmVkRWRnZVNvdXJjZVZlcnRleE5hbWUsIHJlbW92ZWRFZGdlVGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgICAgcmVtb3ZlZEVkZ2VzLnB1c2gocmVtb3ZlZEVkZ2UpO1xuXG4gICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LnJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzVmVydGV4KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmRlbGV0ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgICAgY29uc3QgZGVsZXRlZFZlcnRleCA9IHZlcnRleCwgLy8vXG4gICAgICAgICAgICBkZWxldGVkVmVydGV4SW5kZXggPSBkZWxldGVkVmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgICB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgICAgIGFmZmVjdGVkVmVydGljZXMgPSB2ZXJ0aWNlcy5yZWR1Y2UoKGFmZmVjdGVkVmVydGljZXMsIHZlcnRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXhJbmRleCA9IHZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhBZmZlY3RlZCA9ICh2ZXJ0ZXhJbmRleCA+IGRlbGV0ZWRWZXJ0ZXhJbmRleCk7XG5cbiAgICAgICAgICAgICAgaWYgKHZlcnRleEFmZmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWZmZWN0ZWRWZXJ0ZXggPSB2ZXJ0ZXg7ICAvLy9cblxuICAgICAgICAgICAgICAgIGFmZmVjdGVkVmVydGljZXMucHVzaChhZmZlY3RlZFZlcnRleCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gYWZmZWN0ZWRWZXJ0aWNlcztcbiAgICAgICAgICAgIH0sIFtdKTtcblxuICAgICAgYWZmZWN0ZWRWZXJ0aWNlcy5mb3JFYWNoKChhZmZlY3RlZFZlcnRleCkgPT4gYWZmZWN0ZWRWZXJ0ZXguZGVjcmVtZW50SW5kZXgoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbW92ZWRFZGdlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhNYXAgPSB7fSxcbiAgICAgICAgICBkaXJlY3RlZEFjeWNsaWNHcmFwaCA9IG5ldyBEaXJlY3RlZEFjeWNsaWNHcmFwaCh2ZXJ0ZXhNYXApO1xuXG4gICAgcmV0dXJuIGRpcmVjdGVkQWN5Y2xpY0dyYXBoO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVZlcnRleE5hbWVzKHZlcnRleE5hbWVzKSB7XG4gICAgY29uc3QgdmVydGV4TWFwID0gdmVydGV4TWFwRnJvbVZlcnRleE5hbWVzKHZlcnRleE5hbWVzKTtcblxuICAgIGNvbnN0IGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gbmV3IERpcmVjdGVkQWN5Y2xpY0dyYXBoKHZlcnRleE1hcCk7XG5cbiAgICByZXR1cm4gZGlyZWN0ZWRBY3ljbGljR3JhcGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbU9yZGVyZWRWZXJ0aWNlcyhvcmRlcmVkVmVydGljZXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhNYXAgPSB2ZXJ0ZXhNYXBGcm9tT3JkZXJlZFZlcnRpY2VzKG9yZGVyZWRWZXJ0aWNlcyk7XG4gICAgXG4gICAgYWRkRWRnZXNUb1ZlcnRpY2VzKG9yZGVyZWRWZXJ0aWNlcywgdmVydGV4TWFwKTtcbiAgICBcbiAgICBjb25zdCBkaXJlY3RlZEFjeWNsaWNHcmFwaCA9IG5ldyBEaXJlY3RlZEFjeWNsaWNHcmFwaCh2ZXJ0ZXhNYXApO1xuICAgIFxuICAgIHJldHVybiBkaXJlY3RlZEFjeWNsaWNHcmFwaDtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRJbnZhbGlkYXRpbmdFZGdlQnlWZXJ0aWNlcyhzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCkge1xuICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGZvcndhcmRzQWZmZWN0ZWRWZXJ0aWNlcyA9IHRhcmdldFZlcnRleC5yZXRyaWV2ZUZvcndhcmRzQWZmZWN0ZWRWZXJ0aWNlcyhzb3VyY2VWZXJ0ZXgpLFxuICAgICAgICBsYXN0Rm9yd2FyZHNBZmZlY3RlZFZlcnRleCA9IGxhc3QoZm9yd2FyZHNBZmZlY3RlZFZlcnRpY2VzKSxcbiAgICAgICAgcmVzdWx0c0luQ3ljbGUgPSAobGFzdEZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXggPT09IHNvdXJjZVZlcnRleCk7XG5cbiAgaWYgKCFyZXN1bHRzSW5DeWNsZSkge1xuICAgIGNvbnN0IGJhY2t3YXJkc0FmZmVjdGVkVmVydGljZXMgPSBzb3VyY2VWZXJ0ZXgucmV0cmlldmVCYWNrd2FyZHNBZmZlY3RlZFZlcnRpY2VzKCk7XG5cbiAgICBvcmRlclZlcnRpY2VzKGJhY2t3YXJkc0FmZmVjdGVkVmVydGljZXMpO1xuXG4gICAgb3JkZXJWZXJ0aWNlcyhmb3J3YXJkc0FmZmVjdGVkVmVydGljZXMpO1xuXG4gICAgY29uc3QgYWZmZWN0ZWRWZXJ0aWNlcyA9IFtdLmNvbmNhdChiYWNrd2FyZHNBZmZlY3RlZFZlcnRpY2VzKS5jb25jYXQoZm9yd2FyZHNBZmZlY3RlZFZlcnRpY2VzKSxcbiAgICAgICAgICBhZmZlY3RlZFZlcnRleEluZGljZXMgPSBhZmZlY3RlZFZlcnRpY2VzLm1hcCgoYWZmZWN0ZWRWZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFmZmVjdGVkVmVydGV4SW5kZXggPSBhZmZlY3RlZFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gYWZmZWN0ZWRWZXJ0ZXhJbmRleDtcbiAgICAgICAgICB9KTtcblxuICAgIGFmZmVjdGVkVmVydGV4SW5kaWNlcy5zb3J0KChpbmRleEEsIGluZGV4QikgPT4gKGluZGV4QSAtIGluZGV4QikpO1xuXG4gICAgYWZmZWN0ZWRWZXJ0aWNlcy5mb3JFYWNoKChhZmZlY3RlZFZlcnRleCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGFmZmVjdGVkVmVydGV4SW5kZXggPSBhZmZlY3RlZFZlcnRleEluZGljZXNbaW5kZXhdO1xuXG4gICAgICBhZmZlY3RlZFZlcnRleC5zZXRJbmRleChhZmZlY3RlZFZlcnRleEluZGV4KTtcbiAgICB9KTtcblxuICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN1Y2Nlc3M7XG59XG5cbmZ1bmN0aW9uIHZlcnRleE1hcEZyb21WZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcykge1xuICBjb25zdCB2ZXJ0ZXhNYXAgPSB7fTtcbiAgXG4gIHZlcnRleE5hbWVzLmZvckVhY2goKHZlcnRleE5hbWUsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IHZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbU5hbWVBbmRJbmRleChuYW1lLCBpbmRleCk7XG5cbiAgICB2ZXJ0ZXhNYXBbdmVydGV4TmFtZV0gPSB2ZXJ0ZXg7XG4gIH0pO1xuICBcbiAgcmV0dXJuIHZlcnRleE1hcDtcbn1cblxuZnVuY3Rpb24gdmVydGV4TWFwRnJvbU9yZGVyZWRWZXJ0aWNlcyhvcmRlcmVkVmVydGljZXMpIHtcbiAgY29uc3QgdmVydGV4TWFwID0ge307XG4gIFxuICBvcmRlcmVkVmVydGljZXMuZm9yRWFjaCgob3JkZXJlZFZlcnRleCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBuYW1lID0gb3JkZXJlZFZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgdmVydGV4ID0gVmVydGV4LmZyb21OYW1lQW5kSW5kZXgobmFtZSwgaW5kZXgpLFxuICAgICAgICAgIHZlcnRleE5hbWUgPSBuYW1lOyAgLy8vXG5cbiAgICB2ZXJ0ZXhNYXBbdmVydGV4TmFtZV0gPSB2ZXJ0ZXg7XG4gIH0pO1xuXG4gIHJldHVybiB2ZXJ0ZXhNYXA7XG59XG5cbmZ1bmN0aW9uIGFkZEVkZ2VzVG9WZXJ0aWNlcyhvcmRlcmVkVmVydGljZXMsIHZlcnRleE1hcCkge1xuICBvcmRlcmVkVmVydGljZXMuZm9yRWFjaCgob3JkZXJlZFZlcnRleCkgPT4ge1xuICAgIG9yZGVyZWRWZXJ0ZXguZm9yRWFjaE91dGdvaW5nRWRnZSgob3V0Z29pbmdFZGdlKSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gb3V0Z29pbmdFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBvdXRnb2luZ0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gc291cmNlVmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZSA9IHRhcmdldFZlcnRleE5hbWUsXG4gICAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHZlcnRleE1hcFtpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVdLCAvLy9cbiAgICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCA9IHZlcnRleE1hcFtpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lXTsgLy8vXG5cbiAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LmFkZEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpO1xuXG4gICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXguYWRkSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBFZGdlIH0gZnJvbSBcIi4vZWRnZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEaXJlY3RlZEFjeWNsaWNHcmFwaCB9IGZyb20gXCIuL2RpcmVjdGVkQWN5Y2xpY0dyYXBoXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERpcmVjdGVkQWN5Y2xpY0dyYXBoIH0gZnJvbSBcIi4vaW5kZXhcIjtcblxuY29uc3QgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tTm90aGluZygpLFxuICAgICAgdmVydGV4TmFtZSA9IFwiaVwiLFxuICAgICAgc291cmNlVmVydGV4TmFtZSA9IFwialwiLFxuICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IFwia1wiO1xuXG5kaXJlY3RlZEFjeWNsaWNHcmFwaC5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmFkZEVkZ2VCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG5jb25zdCBvcmRlcmVkVmVydGV4TmFtZXMgPSBkaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRPcmRlcmVkVmVydGV4TmFtZXMoKTtc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
