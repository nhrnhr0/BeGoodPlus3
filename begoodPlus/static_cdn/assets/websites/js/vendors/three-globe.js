// Version 2.18.3 three-globe - https://github.com/vasturiano/three-globe
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('three')) :
  typeof define === 'function' && define.amd ? define(['three'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ThreeGlobe = factory(global.THREE));
}(this, (function (three$1) { 'use strict';

  function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2$1(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys$1(Object(source), true).forEach(function (key) {
          _defineProperty$1(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$1(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _classCallCheck$3(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperty$1(obj, key, value) {
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

  function _inherits$2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf$2(subClass, superClass);
  }

  function _getPrototypeOf$2(o) {
    _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf$2(o);
  }

  function _setPrototypeOf$2(o, p) {
    _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf$2(o, p);
  }

  function _isNativeReflectConstruct$2() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct$2()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf$2(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _objectWithoutPropertiesLoose$2(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties$2(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose$2(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized$2(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn$2(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized$2(self);
  }

  function _createSuper$2(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$2();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf$2(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf$2(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn$2(this, result);
    };
  }

  function _slicedToArray$5(arr, i) {
    return _arrayWithHoles$5(arr) || _iterableToArrayLimit$5(arr, i) || _unsupportedIterableToArray$5(arr, i) || _nonIterableRest$5();
  }

  function _toConsumableArray$3(arr) {
    return _arrayWithoutHoles$3(arr) || _iterableToArray$3(arr) || _unsupportedIterableToArray$5(arr) || _nonIterableSpread$3();
  }

  function _arrayWithoutHoles$3(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$5(arr);
  }

  function _arrayWithHoles$5(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray$3(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit$5(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray$5(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$5(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$5(o, minLen);
  }

  function _arrayLikeToArray$5(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread$3() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest$5() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  /**
   * Returns a function, that, as long as it continues to be invoked, will not
   * be triggered. The function will be called after it stops being called for
   * N milliseconds. If `immediate` is passed, trigger the function on the
   * leading edge, instead of the trailing. The function also has a property 'clear' 
   * that is a function which will clear the timer to prevent previously scheduled executions. 
   *
   * @source underscore.js
   * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
   * @param {Function} function to wrap
   * @param {Number} timeout in ms (`100`)
   * @param {Boolean} whether to execute at the beginning (`false`)
   * @api public
   */

  function debounce(func, wait, immediate){
    var timeout, args, context, timestamp, result;
    if (null == wait) wait = 100;

    function later() {
      var last = Date.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    }
    var debounced = function(){
      context = this;
      args = arguments;
      timestamp = Date.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };

    debounced.clear = function() {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
    };
    
    debounced.flush = function() {
      if (timeout) {
        result = func.apply(context, args);
        context = args = null;
        
        clearTimeout(timeout);
        timeout = null;
      }
    };

    return debounced;
  }
  // Adds compatibility for ES modules
  debounce.debounce = debounce;

  var debounce_1 = debounce;

  function _classCallCheck$2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _slicedToArray$4(arr, i) {
    return _arrayWithHoles$4(arr) || _iterableToArrayLimit$4(arr, i) || _unsupportedIterableToArray$4(arr, i) || _nonIterableRest$4();
  }

  function _arrayWithHoles$4(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit$4(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray$4(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$4(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen);
  }

  function _arrayLikeToArray$4(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest$4() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var Prop = function Prop(name, _ref) {
    var _ref$default = _ref["default"],
        defaultVal = _ref$default === void 0 ? null : _ref$default,
        _ref$triggerUpdate = _ref.triggerUpdate,
        triggerUpdate = _ref$triggerUpdate === void 0 ? true : _ref$triggerUpdate,
        _ref$onChange = _ref.onChange,
        onChange = _ref$onChange === void 0 ? function (newVal, state) {} : _ref$onChange;

    _classCallCheck$2(this, Prop);

    this.name = name;
    this.defaultVal = defaultVal;
    this.triggerUpdate = triggerUpdate;
    this.onChange = onChange;
  };

  function index$2 (_ref2) {
    var _ref2$stateInit = _ref2.stateInit,
        stateInit = _ref2$stateInit === void 0 ? function () {
      return {};
    } : _ref2$stateInit,
        _ref2$props = _ref2.props,
        rawProps = _ref2$props === void 0 ? {} : _ref2$props,
        _ref2$methods = _ref2.methods,
        methods = _ref2$methods === void 0 ? {} : _ref2$methods,
        _ref2$aliases = _ref2.aliases,
        aliases = _ref2$aliases === void 0 ? {} : _ref2$aliases,
        _ref2$init = _ref2.init,
        initFn = _ref2$init === void 0 ? function () {} : _ref2$init,
        _ref2$update = _ref2.update,
        updateFn = _ref2$update === void 0 ? function () {} : _ref2$update;
    // Parse props into Prop instances
    var props = Object.keys(rawProps).map(function (propName) {
      return new Prop(propName, rawProps[propName]);
    });
    return function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // Holds component state
      var state = Object.assign({}, stateInit instanceof Function ? stateInit(options) : stateInit, // Support plain objects for backwards compatibility
      {
        initialised: false
      }); // keeps track of which props triggered an update

      var changedProps = {}; // Component constructor

      function comp(nodeElement) {
        initStatic(nodeElement, options);
        digest();
        return comp;
      }

      var initStatic = function initStatic(nodeElement, options) {
        initFn.call(comp, nodeElement, state, options);
        state.initialised = true;
      };

      var digest = debounce_1(function () {
        if (!state.initialised) {
          return;
        }

        updateFn.call(comp, state, changedProps);
        changedProps = {};
      }, 1); // Getter/setter methods

      props.forEach(function (prop) {
        comp[prop.name] = getSetProp(prop);

        function getSetProp(_ref3) {
          var prop = _ref3.name,
              _ref3$triggerUpdate = _ref3.triggerUpdate,
              redigest = _ref3$triggerUpdate === void 0 ? false : _ref3$triggerUpdate,
              _ref3$onChange = _ref3.onChange,
              onChange = _ref3$onChange === void 0 ? function (newVal, state) {} : _ref3$onChange,
              _ref3$defaultVal = _ref3.defaultVal,
              defaultVal = _ref3$defaultVal === void 0 ? null : _ref3$defaultVal;
          return function (_) {
            var curVal = state[prop];

            if (!arguments.length) {
              return curVal;
            } // Getter mode


            var val = _ === undefined ? defaultVal : _; // pick default if value passed is undefined

            state[prop] = val;
            onChange.call(comp, val, state, curVal); // track changed props

            !changedProps.hasOwnProperty(prop) && (changedProps[prop] = curVal);

            if (redigest) {
              digest();
            }

            return comp;
          };
        }
      }); // Other methods

      Object.keys(methods).forEach(function (methodName) {
        comp[methodName] = function () {
          var _methods$methodName;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return (_methods$methodName = methods[methodName]).call.apply(_methods$methodName, [comp, state].concat(args));
        };
      }); // Link aliases

      Object.entries(aliases).forEach(function (_ref4) {
        var _ref5 = _slicedToArray$4(_ref4, 2),
            alias = _ref5[0],
            target = _ref5[1];

        return comp[alias] = comp[target];
      }); // Reset all component props to their default value

      comp.resetProps = function () {
        props.forEach(function (prop) {
          comp[prop.name](prop.defaultVal);
        });
        return comp;
      }; //


      comp.resetProps(); // Apply all prop defaults

      state._rerender = digest; // Expose digest method

      return comp;
    };
  }

  /**
   * The Ease class provides a collection of easing functions for use with tween.js.
   */
  var Easing = {
      Linear: {
          None: function (amount) {
              return amount;
          },
      },
      Quadratic: {
          In: function (amount) {
              return amount * amount;
          },
          Out: function (amount) {
              return amount * (2 - amount);
          },
          InOut: function (amount) {
              if ((amount *= 2) < 1) {
                  return 0.5 * amount * amount;
              }
              return -0.5 * (--amount * (amount - 2) - 1);
          },
      },
      Cubic: {
          In: function (amount) {
              return amount * amount * amount;
          },
          Out: function (amount) {
              return --amount * amount * amount + 1;
          },
          InOut: function (amount) {
              if ((amount *= 2) < 1) {
                  return 0.5 * amount * amount * amount;
              }
              return 0.5 * ((amount -= 2) * amount * amount + 2);
          },
      },
      Quartic: {
          In: function (amount) {
              return amount * amount * amount * amount;
          },
          Out: function (amount) {
              return 1 - --amount * amount * amount * amount;
          },
          InOut: function (amount) {
              if ((amount *= 2) < 1) {
                  return 0.5 * amount * amount * amount * amount;
              }
              return -0.5 * ((amount -= 2) * amount * amount * amount - 2);
          },
      },
      Quintic: {
          In: function (amount) {
              return amount * amount * amount * amount * amount;
          },
          Out: function (amount) {
              return --amount * amount * amount * amount * amount + 1;
          },
          InOut: function (amount) {
              if ((amount *= 2) < 1) {
                  return 0.5 * amount * amount * amount * amount * amount;
              }
              return 0.5 * ((amount -= 2) * amount * amount * amount * amount + 2);
          },
      },
      Sinusoidal: {
          In: function (amount) {
              return 1 - Math.cos((amount * Math.PI) / 2);
          },
          Out: function (amount) {
              return Math.sin((amount * Math.PI) / 2);
          },
          InOut: function (amount) {
              return 0.5 * (1 - Math.cos(Math.PI * amount));
          },
      },
      Exponential: {
          In: function (amount) {
              return amount === 0 ? 0 : Math.pow(1024, amount - 1);
          },
          Out: function (amount) {
              return amount === 1 ? 1 : 1 - Math.pow(2, -10 * amount);
          },
          InOut: function (amount) {
              if (amount === 0) {
                  return 0;
              }
              if (amount === 1) {
                  return 1;
              }
              if ((amount *= 2) < 1) {
                  return 0.5 * Math.pow(1024, amount - 1);
              }
              return 0.5 * (-Math.pow(2, -10 * (amount - 1)) + 2);
          },
      },
      Circular: {
          In: function (amount) {
              return 1 - Math.sqrt(1 - amount * amount);
          },
          Out: function (amount) {
              return Math.sqrt(1 - --amount * amount);
          },
          InOut: function (amount) {
              if ((amount *= 2) < 1) {
                  return -0.5 * (Math.sqrt(1 - amount * amount) - 1);
              }
              return 0.5 * (Math.sqrt(1 - (amount -= 2) * amount) + 1);
          },
      },
      Elastic: {
          In: function (amount) {
              if (amount === 0) {
                  return 0;
              }
              if (amount === 1) {
                  return 1;
              }
              return -Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
          },
          Out: function (amount) {
              if (amount === 0) {
                  return 0;
              }
              if (amount === 1) {
                  return 1;
              }
              return Math.pow(2, -10 * amount) * Math.sin((amount - 0.1) * 5 * Math.PI) + 1;
          },
          InOut: function (amount) {
              if (amount === 0) {
                  return 0;
              }
              if (amount === 1) {
                  return 1;
              }
              amount *= 2;
              if (amount < 1) {
                  return -0.5 * Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
              }
              return 0.5 * Math.pow(2, -10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI) + 1;
          },
      },
      Back: {
          In: function (amount) {
              var s = 1.70158;
              return amount * amount * ((s + 1) * amount - s);
          },
          Out: function (amount) {
              var s = 1.70158;
              return --amount * amount * ((s + 1) * amount + s) + 1;
          },
          InOut: function (amount) {
              var s = 1.70158 * 1.525;
              if ((amount *= 2) < 1) {
                  return 0.5 * (amount * amount * ((s + 1) * amount - s));
              }
              return 0.5 * ((amount -= 2) * amount * ((s + 1) * amount + s) + 2);
          },
      },
      Bounce: {
          In: function (amount) {
              return 1 - Easing.Bounce.Out(1 - amount);
          },
          Out: function (amount) {
              if (amount < 1 / 2.75) {
                  return 7.5625 * amount * amount;
              }
              else if (amount < 2 / 2.75) {
                  return 7.5625 * (amount -= 1.5 / 2.75) * amount + 0.75;
              }
              else if (amount < 2.5 / 2.75) {
                  return 7.5625 * (amount -= 2.25 / 2.75) * amount + 0.9375;
              }
              else {
                  return 7.5625 * (amount -= 2.625 / 2.75) * amount + 0.984375;
              }
          },
          InOut: function (amount) {
              if (amount < 0.5) {
                  return Easing.Bounce.In(amount * 2) * 0.5;
              }
              return Easing.Bounce.Out(amount * 2 - 1) * 0.5 + 0.5;
          },
      },
  };

  var now;
  // Include a performance.now polyfill.
  // In node.js, use process.hrtime.
  // eslint-disable-next-line
  // @ts-ignore
  if (typeof self === 'undefined' && typeof process !== 'undefined' && process.hrtime) {
      now = function () {
          // eslint-disable-next-line
          // @ts-ignore
          var time = process.hrtime();
          // Convert [seconds, nanoseconds] to milliseconds.
          return time[0] * 1000 + time[1] / 1000000;
      };
  }
  // In a browser, use self.performance.now if it is available.
  else if (typeof self !== 'undefined' && self.performance !== undefined && self.performance.now !== undefined) {
      // This must be bound, because directly assigning this function
      // leads to an invocation exception in Chrome.
      now = self.performance.now.bind(self.performance);
  }
  // Use Date.now if it is available.
  else if (Date.now !== undefined) {
      now = Date.now;
  }
  // Otherwise, use 'new Date().getTime()'.
  else {
      now = function () {
          return new Date().getTime();
      };
  }
  var now$1 = now;

  /**
   * Controlling groups of tweens
   *
   * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
   * In these cases, you may want to create your own smaller groups of tween
   */
  var Group = /** @class */ (function () {
      function Group() {
          this._tweens = {};
          this._tweensAddedDuringUpdate = {};
      }
      Group.prototype.getAll = function () {
          var _this = this;
          return Object.keys(this._tweens).map(function (tweenId) {
              return _this._tweens[tweenId];
          });
      };
      Group.prototype.removeAll = function () {
          this._tweens = {};
      };
      Group.prototype.add = function (tween) {
          this._tweens[tween.getId()] = tween;
          this._tweensAddedDuringUpdate[tween.getId()] = tween;
      };
      Group.prototype.remove = function (tween) {
          delete this._tweens[tween.getId()];
          delete this._tweensAddedDuringUpdate[tween.getId()];
      };
      Group.prototype.update = function (time, preserve) {
          if (time === void 0) { time = now$1(); }
          if (preserve === void 0) { preserve = false; }
          var tweenIds = Object.keys(this._tweens);
          if (tweenIds.length === 0) {
              return false;
          }
          // Tweens are updated in "batches". If you add a new tween during an
          // update, then the new tween will be updated in the next batch.
          // If you remove a tween during an update, it may or may not be updated.
          // However, if the removed tween was added during the current batch,
          // then it will not be updated.
          while (tweenIds.length > 0) {
              this._tweensAddedDuringUpdate = {};
              for (var i = 0; i < tweenIds.length; i++) {
                  var tween = this._tweens[tweenIds[i]];
                  var autoStart = !preserve;
                  if (tween && tween.update(time, autoStart) === false && !preserve) {
                      delete this._tweens[tweenIds[i]];
                  }
              }
              tweenIds = Object.keys(this._tweensAddedDuringUpdate);
          }
          return true;
      };
      return Group;
  }());

  /**
   *
   */
  var Interpolation = {
      Linear: function (v, k) {
          var m = v.length - 1;
          var f = m * k;
          var i = Math.floor(f);
          var fn = Interpolation.Utils.Linear;
          if (k < 0) {
              return fn(v[0], v[1], f);
          }
          if (k > 1) {
              return fn(v[m], v[m - 1], m - f);
          }
          return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
      },
      Bezier: function (v, k) {
          var b = 0;
          var n = v.length - 1;
          var pw = Math.pow;
          var bn = Interpolation.Utils.Bernstein;
          for (var i = 0; i <= n; i++) {
              b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
          }
          return b;
      },
      CatmullRom: function (v, k) {
          var m = v.length - 1;
          var f = m * k;
          var i = Math.floor(f);
          var fn = Interpolation.Utils.CatmullRom;
          if (v[0] === v[m]) {
              if (k < 0) {
                  i = Math.floor((f = m * (1 + k)));
              }
              return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
          }
          else {
              if (k < 0) {
                  return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
              }
              if (k > 1) {
                  return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
              }
              return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
          }
      },
      Utils: {
          Linear: function (p0, p1, t) {
              return (p1 - p0) * t + p0;
          },
          Bernstein: function (n, i) {
              var fc = Interpolation.Utils.Factorial;
              return fc(n) / fc(i) / fc(n - i);
          },
          Factorial: (function () {
              var a = [1];
              return function (n) {
                  var s = 1;
                  if (a[n]) {
                      return a[n];
                  }
                  for (var i = n; i > 1; i--) {
                      s *= i;
                  }
                  a[n] = s;
                  return s;
              };
          })(),
          CatmullRom: function (p0, p1, p2, p3, t) {
              var v0 = (p2 - p0) * 0.5;
              var v1 = (p3 - p1) * 0.5;
              var t2 = t * t;
              var t3 = t * t2;
              return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
          },
      },
  };

  /**
   * Utils
   */
  var Sequence = /** @class */ (function () {
      function Sequence() {
      }
      Sequence.nextId = function () {
          return Sequence._nextId++;
      };
      Sequence._nextId = 0;
      return Sequence;
  }());

  var mainGroup = new Group();

  /**
   * Tween.js - Licensed under the MIT license
   * https://github.com/tweenjs/tween.js
   * ----------------------------------------------
   *
   * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
   * Thank you all, you're awesome!
   */
  var Tween = /** @class */ (function () {
      function Tween(_object, _group) {
          if (_group === void 0) { _group = mainGroup; }
          this._object = _object;
          this._group = _group;
          this._isPaused = false;
          this._pauseStart = 0;
          this._valuesStart = {};
          this._valuesEnd = {};
          this._valuesStartRepeat = {};
          this._duration = 1000;
          this._initialRepeat = 0;
          this._repeat = 0;
          this._yoyo = false;
          this._isPlaying = false;
          this._reversed = false;
          this._delayTime = 0;
          this._startTime = 0;
          this._easingFunction = Easing.Linear.None;
          this._interpolationFunction = Interpolation.Linear;
          this._chainedTweens = [];
          this._onStartCallbackFired = false;
          this._id = Sequence.nextId();
          this._isChainStopped = false;
          this._goToEnd = false;
      }
      Tween.prototype.getId = function () {
          return this._id;
      };
      Tween.prototype.isPlaying = function () {
          return this._isPlaying;
      };
      Tween.prototype.isPaused = function () {
          return this._isPaused;
      };
      Tween.prototype.to = function (properties, duration) {
          // TODO? restore this, then update the 07_dynamic_to example to set fox
          // tween's to on each update. That way the behavior is opt-in (there's
          // currently no opt-out).
          // for (const prop in properties) this._valuesEnd[prop] = properties[prop]
          this._valuesEnd = Object.create(properties);
          if (duration !== undefined) {
              this._duration = duration;
          }
          return this;
      };
      Tween.prototype.duration = function (d) {
          this._duration = d;
          return this;
      };
      Tween.prototype.start = function (time) {
          if (this._isPlaying) {
              return this;
          }
          // eslint-disable-next-line
          this._group && this._group.add(this);
          this._repeat = this._initialRepeat;
          if (this._reversed) {
              // If we were reversed (f.e. using the yoyo feature) then we need to
              // flip the tween direction back to forward.
              this._reversed = false;
              for (var property in this._valuesStartRepeat) {
                  this._swapEndStartRepeatValues(property);
                  this._valuesStart[property] = this._valuesStartRepeat[property];
              }
          }
          this._isPlaying = true;
          this._isPaused = false;
          this._onStartCallbackFired = false;
          this._isChainStopped = false;
          this._startTime = time !== undefined ? (typeof time === 'string' ? now$1() + parseFloat(time) : time) : now$1();
          this._startTime += this._delayTime;
          this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat);
          return this;
      };
      Tween.prototype._setupProperties = function (_object, _valuesStart, _valuesEnd, _valuesStartRepeat) {
          for (var property in _valuesEnd) {
              var startValue = _object[property];
              var startValueIsArray = Array.isArray(startValue);
              var propType = startValueIsArray ? 'array' : typeof startValue;
              var isInterpolationList = !startValueIsArray && Array.isArray(_valuesEnd[property]);
              // If `to()` specifies a property that doesn't exist in the source object,
              // we should not set that property in the object
              if (propType === 'undefined' || propType === 'function') {
                  continue;
              }
              // Check if an Array was provided as property value
              if (isInterpolationList) {
                  var endValues = _valuesEnd[property];
                  if (endValues.length === 0) {
                      continue;
                  }
                  // handle an array of relative values
                  endValues = endValues.map(this._handleRelativeValue.bind(this, startValue));
                  // Create a local copy of the Array with the start value at the front
                  _valuesEnd[property] = [startValue].concat(endValues);
              }
              // handle the deepness of the values
              if ((propType === 'object' || startValueIsArray) && startValue && !isInterpolationList) {
                  _valuesStart[property] = startValueIsArray ? [] : {};
                  // eslint-disable-next-line
                  for (var prop in startValue) {
                      // eslint-disable-next-line
                      // @ts-ignore FIXME?
                      _valuesStart[property][prop] = startValue[prop];
                  }
                  _valuesStartRepeat[property] = startValueIsArray ? [] : {}; // TODO? repeat nested values? And yoyo? And array values?
                  // eslint-disable-next-line
                  // @ts-ignore FIXME?
                  this._setupProperties(startValue, _valuesStart[property], _valuesEnd[property], _valuesStartRepeat[property]);
              }
              else {
                  // Save the starting value, but only once.
                  if (typeof _valuesStart[property] === 'undefined') {
                      _valuesStart[property] = startValue;
                  }
                  if (!startValueIsArray) {
                      // eslint-disable-next-line
                      // @ts-ignore FIXME?
                      _valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
                  }
                  if (isInterpolationList) {
                      // eslint-disable-next-line
                      // @ts-ignore FIXME?
                      _valuesStartRepeat[property] = _valuesEnd[property].slice().reverse();
                  }
                  else {
                      _valuesStartRepeat[property] = _valuesStart[property] || 0;
                  }
              }
          }
      };
      Tween.prototype.stop = function () {
          if (!this._isChainStopped) {
              this._isChainStopped = true;
              this.stopChainedTweens();
          }
          if (!this._isPlaying) {
              return this;
          }
          // eslint-disable-next-line
          this._group && this._group.remove(this);
          this._isPlaying = false;
          this._isPaused = false;
          if (this._onStopCallback) {
              this._onStopCallback(this._object);
          }
          return this;
      };
      Tween.prototype.end = function () {
          this._goToEnd = true;
          this.update(Infinity);
          return this;
      };
      Tween.prototype.pause = function (time) {
          if (time === void 0) { time = now$1(); }
          if (this._isPaused || !this._isPlaying) {
              return this;
          }
          this._isPaused = true;
          this._pauseStart = time;
          // eslint-disable-next-line
          this._group && this._group.remove(this);
          return this;
      };
      Tween.prototype.resume = function (time) {
          if (time === void 0) { time = now$1(); }
          if (!this._isPaused || !this._isPlaying) {
              return this;
          }
          this._isPaused = false;
          this._startTime += time - this._pauseStart;
          this._pauseStart = 0;
          // eslint-disable-next-line
          this._group && this._group.add(this);
          return this;
      };
      Tween.prototype.stopChainedTweens = function () {
          for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
              this._chainedTweens[i].stop();
          }
          return this;
      };
      Tween.prototype.group = function (group) {
          this._group = group;
          return this;
      };
      Tween.prototype.delay = function (amount) {
          this._delayTime = amount;
          return this;
      };
      Tween.prototype.repeat = function (times) {
          this._initialRepeat = times;
          this._repeat = times;
          return this;
      };
      Tween.prototype.repeatDelay = function (amount) {
          this._repeatDelayTime = amount;
          return this;
      };
      Tween.prototype.yoyo = function (yoyo) {
          this._yoyo = yoyo;
          return this;
      };
      Tween.prototype.easing = function (easingFunction) {
          this._easingFunction = easingFunction;
          return this;
      };
      Tween.prototype.interpolation = function (interpolationFunction) {
          this._interpolationFunction = interpolationFunction;
          return this;
      };
      Tween.prototype.chain = function () {
          var tweens = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              tweens[_i] = arguments[_i];
          }
          this._chainedTweens = tweens;
          return this;
      };
      Tween.prototype.onStart = function (callback) {
          this._onStartCallback = callback;
          return this;
      };
      Tween.prototype.onUpdate = function (callback) {
          this._onUpdateCallback = callback;
          return this;
      };
      Tween.prototype.onRepeat = function (callback) {
          this._onRepeatCallback = callback;
          return this;
      };
      Tween.prototype.onComplete = function (callback) {
          this._onCompleteCallback = callback;
          return this;
      };
      Tween.prototype.onStop = function (callback) {
          this._onStopCallback = callback;
          return this;
      };
      /**
       * @returns true if the tween is still playing after the update, false
       * otherwise (calling update on a paused tween still returns true because
       * it is still playing, just paused).
       */
      Tween.prototype.update = function (time, autoStart) {
          if (time === void 0) { time = now$1(); }
          if (autoStart === void 0) { autoStart = true; }
          if (this._isPaused)
              return true;
          var property;
          var elapsed;
          var endTime = this._startTime + this._duration;
          if (!this._goToEnd && !this._isPlaying) {
              if (time > endTime)
                  return false;
              if (autoStart)
                  this.start(time);
          }
          this._goToEnd = false;
          if (time < this._startTime) {
              return true;
          }
          if (this._onStartCallbackFired === false) {
              if (this._onStartCallback) {
                  this._onStartCallback(this._object);
              }
              this._onStartCallbackFired = true;
          }
          elapsed = (time - this._startTime) / this._duration;
          elapsed = this._duration === 0 || elapsed > 1 ? 1 : elapsed;
          var value = this._easingFunction(elapsed);
          // properties transformations
          this._updateProperties(this._object, this._valuesStart, this._valuesEnd, value);
          if (this._onUpdateCallback) {
              this._onUpdateCallback(this._object, elapsed);
          }
          if (elapsed === 1) {
              if (this._repeat > 0) {
                  if (isFinite(this._repeat)) {
                      this._repeat--;
                  }
                  // Reassign starting values, restart by making startTime = now
                  for (property in this._valuesStartRepeat) {
                      if (!this._yoyo && typeof this._valuesEnd[property] === 'string') {
                          this._valuesStartRepeat[property] =
                              // eslint-disable-next-line
                              // @ts-ignore FIXME?
                              this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
                      }
                      if (this._yoyo) {
                          this._swapEndStartRepeatValues(property);
                      }
                      this._valuesStart[property] = this._valuesStartRepeat[property];
                  }
                  if (this._yoyo) {
                      this._reversed = !this._reversed;
                  }
                  if (this._repeatDelayTime !== undefined) {
                      this._startTime = time + this._repeatDelayTime;
                  }
                  else {
                      this._startTime = time + this._delayTime;
                  }
                  if (this._onRepeatCallback) {
                      this._onRepeatCallback(this._object);
                  }
                  return true;
              }
              else {
                  if (this._onCompleteCallback) {
                      this._onCompleteCallback(this._object);
                  }
                  for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
                      // Make the chained tweens start exactly at the time they should,
                      // even if the `update()` method was called way past the duration of the tween
                      this._chainedTweens[i].start(this._startTime + this._duration);
                  }
                  this._isPlaying = false;
                  return false;
              }
          }
          return true;
      };
      Tween.prototype._updateProperties = function (_object, _valuesStart, _valuesEnd, value) {
          for (var property in _valuesEnd) {
              // Don't update properties that do not exist in the source object
              if (_valuesStart[property] === undefined) {
                  continue;
              }
              var start = _valuesStart[property] || 0;
              var end = _valuesEnd[property];
              var startIsArray = Array.isArray(_object[property]);
              var endIsArray = Array.isArray(end);
              var isInterpolationList = !startIsArray && endIsArray;
              if (isInterpolationList) {
                  _object[property] = this._interpolationFunction(end, value);
              }
              else if (typeof end === 'object' && end) {
                  // eslint-disable-next-line
                  // @ts-ignore FIXME?
                  this._updateProperties(_object[property], start, end, value);
              }
              else {
                  // Parses relative end values with start as base (e.g.: +10, -3)
                  end = this._handleRelativeValue(start, end);
                  // Protect against non numeric properties.
                  if (typeof end === 'number') {
                      // eslint-disable-next-line
                      // @ts-ignore FIXME?
                      _object[property] = start + (end - start) * value;
                  }
              }
          }
      };
      Tween.prototype._handleRelativeValue = function (start, end) {
          if (typeof end !== 'string') {
              return end;
          }
          if (end.charAt(0) === '+' || end.charAt(0) === '-') {
              return start + parseFloat(end);
          }
          else {
              return parseFloat(end);
          }
      };
      Tween.prototype._swapEndStartRepeatValues = function (property) {
          var tmp = this._valuesStartRepeat[property];
          var endValue = this._valuesEnd[property];
          if (typeof endValue === 'string') {
              this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(endValue);
          }
          else {
              this._valuesStartRepeat[property] = this._valuesEnd[property];
          }
          this._valuesEnd[property] = tmp;
      };
      return Tween;
  }());

  var VERSION = '18.6.4';

  /**
   * Tween.js - Licensed under the MIT license
   * https://github.com/tweenjs/tween.js
   * ----------------------------------------------
   *
   * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
   * Thank you all, you're awesome!
   */
  var nextId = Sequence.nextId;
  /**
   * Controlling groups of tweens
   *
   * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
   * In these cases, you may want to create your own smaller groups of tweens.
   */
  var TWEEN = mainGroup;
  // This is the best way to export things in a way that's compatible with both ES
  // Modules and CommonJS, without build hacks, and so as not to break the
  // existing API.
  // https://github.com/rollup/rollup/issues/1961#issuecomment-423037881
  var getAll = TWEEN.getAll.bind(TWEEN);
  var removeAll = TWEEN.removeAll.bind(TWEEN);
  var add$1 = TWEEN.add.bind(TWEEN);
  var remove = TWEEN.remove.bind(TWEEN);
  var update = TWEEN.update.bind(TWEEN);
  var exports$1 = {
      Easing: Easing,
      Group: Group,
      Interpolation: Interpolation,
      now: now$1,
      Sequence: Sequence,
      nextId: nextId,
      Tween: Tween,
      VERSION: VERSION,
      getAll: getAll,
      removeAll: removeAll,
      add: add$1,
      remove: remove,
      update: update,
  };

  var materialDispose = function materialDispose(material) {
    if (material instanceof Array) {
      material.forEach(materialDispose);
    } else {
      if (material.map) {
        material.map.dispose();
      }

      material.dispose();
    }
  };

  var deallocate = function deallocate(obj) {
    if (obj.geometry) {
      obj.geometry.dispose();
    }

    if (obj.material) {
      materialDispose(obj.material);
    }

    if (obj.texture) {
      obj.texture.dispose();
    }

    if (obj.children) {
      obj.children.forEach(deallocate);
    }
  };

  var emptyObject = function emptyObject(obj) {
    while (obj.children.length) {
      var childObj = obj.children[0];
      obj.remove(childObj);
      deallocate(childObj);
    }
  };

  function linkKapsule (kapsulePropName, kapsuleType) {
    var dummyK = new kapsuleType(); // To extract defaults

    return {
      linkProp: function linkProp(prop) {
        // link property config
        return {
          "default": dummyK[prop](),
          onChange: function onChange(v, state) {
            state[kapsulePropName][prop](v);
          },
          triggerUpdate: false
        };
      },
      linkMethod: function linkMethod(method) {
        // link method pass-through
        return function (state) {
          var kapsuleInstance = state[kapsulePropName];

          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          var returnVal = kapsuleInstance[method].apply(kapsuleInstance, args);
          return returnVal === kapsuleInstance ? this // chain based on the parent object, not the inner kapsule
          : returnVal;
        };
      }
    };
  }

  var GLOBE_RADIUS = 100;

  function polar2Cartesian$2(lat, lng) {
    var relAltitude = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var phi = (90 - lat) * Math.PI / 180;
    var theta = (90 - lng) * Math.PI / 180;
    var r = GLOBE_RADIUS * (1 + relAltitude);
    return {
      x: r * Math.sin(phi) * Math.cos(theta),
      y: r * Math.cos(phi),
      z: r * Math.sin(phi) * Math.sin(theta)
    };
  }

  function cartesian2Polar(_ref) {
    var x = _ref.x,
        y = _ref.y,
        z = _ref.z;
    var r = Math.sqrt(x * x + y * y + z * z);
    var phi = Math.acos(y / r);
    var theta = Math.atan2(z, x);
    return {
      lat: 90 - phi * 180 / Math.PI,
      lng: 90 - theta * 180 / Math.PI - (theta < -Math.PI / 2 ? 360 : 0),
      // keep within [-180, 180] boundaries
      altitude: r / GLOBE_RADIUS - 1
    };
  }

  var earcut$2 = {exports: {}};

  earcut$2.exports = earcut;
  earcut$2.exports.default = earcut;

  function earcut(data, holeIndices, dim) {

      dim = dim || 2;

      var hasHoles = holeIndices && holeIndices.length,
          outerLen = hasHoles ? holeIndices[0] * dim : data.length,
          outerNode = linkedList(data, 0, outerLen, dim, true),
          triangles = [];

      if (!outerNode || outerNode.next === outerNode.prev) return triangles;

      var minX, minY, maxX, maxY, x, y, invSize;

      if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

      // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
      if (data.length > 80 * dim) {
          minX = maxX = data[0];
          minY = maxY = data[1];

          for (var i = dim; i < outerLen; i += dim) {
              x = data[i];
              y = data[i + 1];
              if (x < minX) minX = x;
              if (y < minY) minY = y;
              if (x > maxX) maxX = x;
              if (y > maxY) maxY = y;
          }

          // minX, minY and invSize are later used to transform coords into integers for z-order calculation
          invSize = Math.max(maxX - minX, maxY - minY);
          invSize = invSize !== 0 ? 1 / invSize : 0;
      }

      earcutLinked(outerNode, triangles, dim, minX, minY, invSize);

      return triangles;
  }

  // create a circular doubly linked list from polygon points in the specified winding order
  function linkedList(data, start, end, dim, clockwise) {
      var i, last;

      if (clockwise === (signedArea(data, start, end, dim) > 0)) {
          for (i = start; i < end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
      } else {
          for (i = end - dim; i >= start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
      }

      if (last && equals(last, last.next)) {
          removeNode(last);
          last = last.next;
      }

      return last;
  }

  // eliminate colinear or duplicate points
  function filterPoints(start, end) {
      if (!start) return start;
      if (!end) end = start;

      var p = start,
          again;
      do {
          again = false;

          if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
              removeNode(p);
              p = end = p.prev;
              if (p === p.next) break;
              again = true;

          } else {
              p = p.next;
          }
      } while (again || p !== end);

      return end;
  }

  // main ear slicing loop which triangulates a polygon (given as a linked list)
  function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
      if (!ear) return;

      // interlink polygon nodes in z-order
      if (!pass && invSize) indexCurve(ear, minX, minY, invSize);

      var stop = ear,
          prev, next;

      // iterate through ears, slicing them one by one
      while (ear.prev !== ear.next) {
          prev = ear.prev;
          next = ear.next;

          if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
              // cut off the triangle
              triangles.push(prev.i / dim);
              triangles.push(ear.i / dim);
              triangles.push(next.i / dim);

              removeNode(ear);

              // skipping the next vertex leads to less sliver triangles
              ear = next.next;
              stop = next.next;

              continue;
          }

          ear = next;

          // if we looped through the whole remaining polygon and can't find any more ears
          if (ear === stop) {
              // try filtering points and slicing again
              if (!pass) {
                  earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);

              // if this didn't work, try curing all small self-intersections locally
              } else if (pass === 1) {
                  ear = cureLocalIntersections(filterPoints(ear), triangles, dim);
                  earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);

              // as a last resort, try splitting the remaining polygon into two
              } else if (pass === 2) {
                  splitEarcut(ear, triangles, dim, minX, minY, invSize);
              }

              break;
          }
      }
  }

  // check whether a polygon node forms a valid ear with adjacent nodes
  function isEar(ear) {
      var a = ear.prev,
          b = ear,
          c = ear.next;

      if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

      // now make sure we don't have other points inside the potential ear
      var p = ear.next.next;

      while (p !== ear.prev) {
          if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
              area(p.prev, p, p.next) >= 0) return false;
          p = p.next;
      }

      return true;
  }

  function isEarHashed(ear, minX, minY, invSize) {
      var a = ear.prev,
          b = ear,
          c = ear.next;

      if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

      // triangle bbox; min & max are calculated like this for speed
      var minTX = a.x < b.x ? (a.x < c.x ? a.x : c.x) : (b.x < c.x ? b.x : c.x),
          minTY = a.y < b.y ? (a.y < c.y ? a.y : c.y) : (b.y < c.y ? b.y : c.y),
          maxTX = a.x > b.x ? (a.x > c.x ? a.x : c.x) : (b.x > c.x ? b.x : c.x),
          maxTY = a.y > b.y ? (a.y > c.y ? a.y : c.y) : (b.y > c.y ? b.y : c.y);

      // z-order range for the current triangle bbox;
      var minZ = zOrder(minTX, minTY, minX, minY, invSize),
          maxZ = zOrder(maxTX, maxTY, minX, minY, invSize);

      var p = ear.prevZ,
          n = ear.nextZ;

      // look for points inside the triangle in both directions
      while (p && p.z >= minZ && n && n.z <= maxZ) {
          if (p !== ear.prev && p !== ear.next &&
              pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
              area(p.prev, p, p.next) >= 0) return false;
          p = p.prevZ;

          if (n !== ear.prev && n !== ear.next &&
              pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
              area(n.prev, n, n.next) >= 0) return false;
          n = n.nextZ;
      }

      // look for remaining points in decreasing z-order
      while (p && p.z >= minZ) {
          if (p !== ear.prev && p !== ear.next &&
              pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
              area(p.prev, p, p.next) >= 0) return false;
          p = p.prevZ;
      }

      // look for remaining points in increasing z-order
      while (n && n.z <= maxZ) {
          if (n !== ear.prev && n !== ear.next &&
              pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
              area(n.prev, n, n.next) >= 0) return false;
          n = n.nextZ;
      }

      return true;
  }

  // go through all polygon nodes and cure small local self-intersections
  function cureLocalIntersections(start, triangles, dim) {
      var p = start;
      do {
          var a = p.prev,
              b = p.next.next;

          if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {

              triangles.push(a.i / dim);
              triangles.push(p.i / dim);
              triangles.push(b.i / dim);

              // remove two nodes involved
              removeNode(p);
              removeNode(p.next);

              p = start = b;
          }
          p = p.next;
      } while (p !== start);

      return filterPoints(p);
  }

  // try splitting polygon into two and triangulate them independently
  function splitEarcut(start, triangles, dim, minX, minY, invSize) {
      // look for a valid diagonal that divides the polygon into two
      var a = start;
      do {
          var b = a.next.next;
          while (b !== a.prev) {
              if (a.i !== b.i && isValidDiagonal(a, b)) {
                  // split the polygon in two by the diagonal
                  var c = splitPolygon(a, b);

                  // filter colinear points around the cuts
                  a = filterPoints(a, a.next);
                  c = filterPoints(c, c.next);

                  // run earcut on each half
                  earcutLinked(a, triangles, dim, minX, minY, invSize);
                  earcutLinked(c, triangles, dim, minX, minY, invSize);
                  return;
              }
              b = b.next;
          }
          a = a.next;
      } while (a !== start);
  }

  // link every hole into the outer loop, producing a single-ring polygon without holes
  function eliminateHoles(data, holeIndices, outerNode, dim) {
      var queue = [],
          i, len, start, end, list;

      for (i = 0, len = holeIndices.length; i < len; i++) {
          start = holeIndices[i] * dim;
          end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
          list = linkedList(data, start, end, dim, false);
          if (list === list.next) list.steiner = true;
          queue.push(getLeftmost(list));
      }

      queue.sort(compareX);

      // process holes from left to right
      for (i = 0; i < queue.length; i++) {
          eliminateHole(queue[i], outerNode);
          outerNode = filterPoints(outerNode, outerNode.next);
      }

      return outerNode;
  }

  function compareX(a, b) {
      return a.x - b.x;
  }

  // find a bridge between vertices that connects hole with an outer ring and and link it
  function eliminateHole(hole, outerNode) {
      outerNode = findHoleBridge(hole, outerNode);
      if (outerNode) {
          var b = splitPolygon(outerNode, hole);

          // filter collinear points around the cuts
          filterPoints(outerNode, outerNode.next);
          filterPoints(b, b.next);
      }
  }

  // David Eberly's algorithm for finding a bridge between hole and outer polygon
  function findHoleBridge(hole, outerNode) {
      var p = outerNode,
          hx = hole.x,
          hy = hole.y,
          qx = -Infinity,
          m;

      // find a segment intersected by a ray from the hole's leftmost point to the left;
      // segment's endpoint with lesser x will be potential connection point
      do {
          if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
              var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
              if (x <= hx && x > qx) {
                  qx = x;
                  if (x === hx) {
                      if (hy === p.y) return p;
                      if (hy === p.next.y) return p.next;
                  }
                  m = p.x < p.next.x ? p : p.next;
              }
          }
          p = p.next;
      } while (p !== outerNode);

      if (!m) return null;

      if (hx === qx) return m; // hole touches outer segment; pick leftmost endpoint

      // look for points inside the triangle of hole point, segment intersection and endpoint;
      // if there are no points found, we have a valid connection;
      // otherwise choose the point of the minimum angle with the ray as connection point

      var stop = m,
          mx = m.x,
          my = m.y,
          tanMin = Infinity,
          tan;

      p = m;

      do {
          if (hx >= p.x && p.x >= mx && hx !== p.x &&
                  pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {

              tan = Math.abs(hy - p.y) / (hx - p.x); // tangential

              if (locallyInside(p, hole) &&
                  (tan < tanMin || (tan === tanMin && (p.x > m.x || (p.x === m.x && sectorContainsSector(m, p)))))) {
                  m = p;
                  tanMin = tan;
              }
          }

          p = p.next;
      } while (p !== stop);

      return m;
  }

  // whether sector in vertex m contains sector in vertex p in the same coordinates
  function sectorContainsSector(m, p) {
      return area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
  }

  // interlink polygon nodes in z-order
  function indexCurve(start, minX, minY, invSize) {
      var p = start;
      do {
          if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, invSize);
          p.prevZ = p.prev;
          p.nextZ = p.next;
          p = p.next;
      } while (p !== start);

      p.prevZ.nextZ = null;
      p.prevZ = null;

      sortLinked(p);
  }

  // Simon Tatham's linked list merge sort algorithm
  // http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
  function sortLinked(list) {
      var i, p, q, e, tail, numMerges, pSize, qSize,
          inSize = 1;

      do {
          p = list;
          list = null;
          tail = null;
          numMerges = 0;

          while (p) {
              numMerges++;
              q = p;
              pSize = 0;
              for (i = 0; i < inSize; i++) {
                  pSize++;
                  q = q.nextZ;
                  if (!q) break;
              }
              qSize = inSize;

              while (pSize > 0 || (qSize > 0 && q)) {

                  if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
                      e = p;
                      p = p.nextZ;
                      pSize--;
                  } else {
                      e = q;
                      q = q.nextZ;
                      qSize--;
                  }

                  if (tail) tail.nextZ = e;
                  else list = e;

                  e.prevZ = tail;
                  tail = e;
              }

              p = q;
          }

          tail.nextZ = null;
          inSize *= 2;

      } while (numMerges > 1);

      return list;
  }

  // z-order of a point given coords and inverse of the longer side of data bbox
  function zOrder(x, y, minX, minY, invSize) {
      // coords are transformed into non-negative 15-bit integer range
      x = 32767 * (x - minX) * invSize;
      y = 32767 * (y - minY) * invSize;

      x = (x | (x << 8)) & 0x00FF00FF;
      x = (x | (x << 4)) & 0x0F0F0F0F;
      x = (x | (x << 2)) & 0x33333333;
      x = (x | (x << 1)) & 0x55555555;

      y = (y | (y << 8)) & 0x00FF00FF;
      y = (y | (y << 4)) & 0x0F0F0F0F;
      y = (y | (y << 2)) & 0x33333333;
      y = (y | (y << 1)) & 0x55555555;

      return x | (y << 1);
  }

  // find the leftmost node of a polygon ring
  function getLeftmost(start) {
      var p = start,
          leftmost = start;
      do {
          if (p.x < leftmost.x || (p.x === leftmost.x && p.y < leftmost.y)) leftmost = p;
          p = p.next;
      } while (p !== start);

      return leftmost;
  }

  // check if a point lies within a convex triangle
  function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
      return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 &&
             (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 &&
             (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
  }

  // check if a diagonal between two polygon nodes is valid (lies in polygon interior)
  function isValidDiagonal(a, b) {
      return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && // dones't intersect other edges
             (locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && // locally visible
              (area(a.prev, a, b.prev) || area(a, b.prev, b)) || // does not create opposite-facing sectors
              equals(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0); // special zero-length case
  }

  // signed area of a triangle
  function area(p, q, r) {
      return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
  }

  // check if two points are equal
  function equals(p1, p2) {
      return p1.x === p2.x && p1.y === p2.y;
  }

  // check if two segments intersect
  function intersects(p1, q1, p2, q2) {
      var o1 = sign$3(area(p1, q1, p2));
      var o2 = sign$3(area(p1, q1, q2));
      var o3 = sign$3(area(p2, q2, p1));
      var o4 = sign$3(area(p2, q2, q1));

      if (o1 !== o2 && o3 !== o4) return true; // general case

      if (o1 === 0 && onSegment(p1, p2, q1)) return true; // p1, q1 and p2 are collinear and p2 lies on p1q1
      if (o2 === 0 && onSegment(p1, q2, q1)) return true; // p1, q1 and q2 are collinear and q2 lies on p1q1
      if (o3 === 0 && onSegment(p2, p1, q2)) return true; // p2, q2 and p1 are collinear and p1 lies on p2q2
      if (o4 === 0 && onSegment(p2, q1, q2)) return true; // p2, q2 and q1 are collinear and q1 lies on p2q2

      return false;
  }

  // for collinear points p, q, r, check if point q lies on segment pr
  function onSegment(p, q, r) {
      return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
  }

  function sign$3(num) {
      return num > 0 ? 1 : num < 0 ? -1 : 0;
  }

  // check if a polygon diagonal intersects any polygon segments
  function intersectsPolygon(a, b) {
      var p = a;
      do {
          if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i &&
                  intersects(p, p.next, a, b)) return true;
          p = p.next;
      } while (p !== a);

      return false;
  }

  // check if a polygon diagonal is locally inside the polygon
  function locallyInside(a, b) {
      return area(a.prev, a, a.next) < 0 ?
          area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 :
          area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
  }

  // check if the middle point of a polygon diagonal is inside the polygon
  function middleInside(a, b) {
      var p = a,
          inside = false,
          px = (a.x + b.x) / 2,
          py = (a.y + b.y) / 2;
      do {
          if (((p.y > py) !== (p.next.y > py)) && p.next.y !== p.y &&
                  (px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x))
              inside = !inside;
          p = p.next;
      } while (p !== a);

      return inside;
  }

  // link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
  // if one belongs to the outer ring and another to a hole, it merges it into a single ring
  function splitPolygon(a, b) {
      var a2 = new Node(a.i, a.x, a.y),
          b2 = new Node(b.i, b.x, b.y),
          an = a.next,
          bp = b.prev;

      a.next = b;
      b.prev = a;

      a2.next = an;
      an.prev = a2;

      b2.next = a2;
      a2.prev = b2;

      bp.next = b2;
      b2.prev = bp;

      return b2;
  }

  // create a node and optionally link it with previous one (in a circular doubly linked list)
  function insertNode(i, x, y, last) {
      var p = new Node(i, x, y);

      if (!last) {
          p.prev = p;
          p.next = p;

      } else {
          p.next = last.next;
          p.prev = last;
          last.next.prev = p;
          last.next = p;
      }
      return p;
  }

  function removeNode(p) {
      p.next.prev = p.prev;
      p.prev.next = p.next;

      if (p.prevZ) p.prevZ.nextZ = p.nextZ;
      if (p.nextZ) p.nextZ.prevZ = p.prevZ;
  }

  function Node(i, x, y) {
      // vertex index in coordinates array
      this.i = i;

      // vertex coordinates
      this.x = x;
      this.y = y;

      // previous and next vertex nodes in a polygon ring
      this.prev = null;
      this.next = null;

      // z-order curve value
      this.z = null;

      // previous and next nodes in z-order
      this.prevZ = null;
      this.nextZ = null;

      // indicates whether this is a steiner point
      this.steiner = false;
  }

  // return a percentage difference between the polygon area and its triangulation area;
  // used to verify correctness of triangulation
  earcut.deviation = function (data, holeIndices, dim, triangles) {
      var hasHoles = holeIndices && holeIndices.length;
      var outerLen = hasHoles ? holeIndices[0] * dim : data.length;

      var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
      if (hasHoles) {
          for (var i = 0, len = holeIndices.length; i < len; i++) {
              var start = holeIndices[i] * dim;
              var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
              polygonArea -= Math.abs(signedArea(data, start, end, dim));
          }
      }

      var trianglesArea = 0;
      for (i = 0; i < triangles.length; i += 3) {
          var a = triangles[i] * dim;
          var b = triangles[i + 1] * dim;
          var c = triangles[i + 2] * dim;
          trianglesArea += Math.abs(
              (data[a] - data[c]) * (data[b + 1] - data[a + 1]) -
              (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
      }

      return polygonArea === 0 && trianglesArea === 0 ? 0 :
          Math.abs((trianglesArea - polygonArea) / polygonArea);
  };

  function signedArea(data, start, end, dim) {
      var sum = 0;
      for (var i = start, j = end - dim; i < end; i += dim) {
          sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
          j = i;
      }
      return sum;
  }

  // turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
  earcut.flatten = function (data) {
      var dim = data[0][0].length,
          result = {vertices: [], holes: [], dimensions: dim},
          holeIndex = 0;

      for (var i = 0; i < data.length; i++) {
          for (var j = 0; j < data[i].length; j++) {
              for (var d = 0; d < dim; d++) result.vertices.push(data[i][j][d]);
          }
          if (i > 0) {
              holeIndex += data[i - 1].length;
              result.holes.push(holeIndex);
          }
      }
      return result;
  };

  var earcut$1 = earcut$2.exports;

  function ascending$2(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  function bisector$2(f) {
    let delta = f;
    let compare = f;

    if (f.length === 1) {
      delta = (d, x) => f(d) - x;
      compare = ascendingComparator$2(f);
    }

    function left(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        const mid = (lo + hi) >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    }

    function right(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        const mid = (lo + hi) >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }

    function center(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      const i = left(a, x, lo, hi - 1);
      return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
    }

    return {left, center, right};
  }

  function ascendingComparator$2(f) {
    return (d, x) => ascending$2(f(d), x);
  }

  function number$1(x) {
    return x === null ? NaN : +x;
  }

  const ascendingBisect = bisector$2(ascending$2);
  const bisectRight = ascendingBisect.right;
  bisector$2(number$1).center;

  function extent(values, valueof) {
    let min;
    let max;
    if (valueof === undefined) {
      for (const value of values) {
        if (value != null) {
          if (min === undefined) {
            if (value >= value) min = max = value;
          } else {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    } else {
      let index = -1;
      for (let value of values) {
        if ((value = valueof(value, ++index, values)) != null) {
          if (min === undefined) {
            if (value >= value) min = max = value;
          } else {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
    return [min, max];
  }

  // https://github.com/python/cpython/blob/a74eea238f5baba15797e2e8b570d153bc8690a7/Modules/mathmodule.c#L1423
  class Adder$1 {
    constructor() {
      this._partials = new Float64Array(32);
      this._n = 0;
    }
    add(x) {
      const p = this._partials;
      let i = 0;
      for (let j = 0; j < this._n && j < 32; j++) {
        const y = p[j],
          hi = x + y,
          lo = Math.abs(x) < Math.abs(y) ? x - (hi - y) : y - (hi - x);
        if (lo) p[i++] = lo;
        x = hi;
      }
      p[i] = x;
      this._n = i + 1;
      return this;
    }
    valueOf() {
      const p = this._partials;
      let n = this._n, x, y, lo, hi = 0;
      if (n > 0) {
        hi = p[--n];
        while (n > 0) {
          x = hi;
          y = p[--n];
          hi = x + y;
          lo = y - (hi - x);
          if (lo) break;
        }
        if (n > 0 && ((lo < 0 && p[n - 1] < 0) || (lo > 0 && p[n - 1] > 0))) {
          y = lo * 2;
          x = hi + y;
          if (y == x - hi) hi = x;
        }
      }
      return hi;
    }
  }

  var e10 = Math.sqrt(50),
      e5 = Math.sqrt(10),
      e2 = Math.sqrt(2);

  function ticks(start, stop, count) {
    var reverse,
        i = -1,
        n,
        ticks,
        step;

    stop = +stop, start = +start, count = +count;
    if (start === stop && count > 0) return [start];
    if (reverse = stop < start) n = start, start = stop, stop = n;
    if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

    if (step > 0) {
      let r0 = Math.round(start / step), r1 = Math.round(stop / step);
      if (r0 * step < start) ++r0;
      if (r1 * step > stop) --r1;
      ticks = new Array(n = r1 - r0 + 1);
      while (++i < n) ticks[i] = (r0 + i) * step;
    } else {
      step = -step;
      let r0 = Math.round(start * step), r1 = Math.round(stop * step);
      if (r0 / step < start) ++r0;
      if (r1 / step > stop) --r1;
      ticks = new Array(n = r1 - r0 + 1);
      while (++i < n) ticks[i] = (r0 + i) / step;
    }

    if (reverse) ticks.reverse();

    return ticks;
  }

  function tickIncrement(start, stop, count) {
    var step = (stop - start) / Math.max(0, count),
        power = Math.floor(Math.log(step) / Math.LN10),
        error = step / Math.pow(10, power);
    return power >= 0
        ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
        : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
  }

  function tickStep(start, stop, count) {
    var step0 = Math.abs(stop - start) / Math.max(0, count),
        step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
        error = step0 / step1;
    if (error >= e10) step1 *= 10;
    else if (error >= e5) step1 *= 5;
    else if (error >= e2) step1 *= 2;
    return stop < start ? -step1 : step1;
  }

  function mean(values, valueof) {
    let count = 0;
    let sum = 0;
    if (valueof === undefined) {
      for (let value of values) {
        if (value != null && (value = +value) >= value) {
          ++count, sum += value;
        }
      }
    } else {
      let index = -1;
      for (let value of values) {
        if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
          ++count, sum += value;
        }
      }
    }
    if (count) return sum / count;
  }

  function* flatten(arrays) {
    for (const array of arrays) {
      yield* array;
    }
  }

  function merge$1(arrays) {
    return Array.from(flatten(arrays));
  }

  function sequence(start, stop, step) {
    start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

    var i = -1,
        n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
        range = new Array(n);

    while (++i < n) {
      range[i] = start + i * step;
    }

    return range;
  }

  var epsilon$3 = 1e-6;
  var epsilon2$1 = 1e-12;
  var pi$2 = Math.PI;
  var halfPi$2 = pi$2 / 2;
  var quarterPi$1 = pi$2 / 4;
  var tau$2 = pi$2 * 2;

  var degrees$2 = 180 / pi$2;
  var radians$2 = pi$2 / 180;

  var abs$1 = Math.abs;
  var atan2$2 = Math.atan2;
  var cos$2 = Math.cos;
  var ceil = Math.ceil;
  var sin$2 = Math.sin;
  var sign$2 = Math.sign || function(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; };
  var sqrt$2 = Math.sqrt;

  function asin$2(x) {
    return x > 1 ? halfPi$2 : x < -1 ? -halfPi$2 : Math.asin(x);
  }

  function haversin(x) {
    return (x = sin$2(x / 2)) * x;
  }

  function noop$1() {}

  function streamGeometry$1(geometry, stream) {
    if (geometry && streamGeometryType$1.hasOwnProperty(geometry.type)) {
      streamGeometryType$1[geometry.type](geometry, stream);
    }
  }

  var streamObjectType$1 = {
    Feature: function(object, stream) {
      streamGeometry$1(object.geometry, stream);
    },
    FeatureCollection: function(object, stream) {
      var features = object.features, i = -1, n = features.length;
      while (++i < n) streamGeometry$1(features[i].geometry, stream);
    }
  };

  var streamGeometryType$1 = {
    Sphere: function(object, stream) {
      stream.sphere();
    },
    Point: function(object, stream) {
      object = object.coordinates;
      stream.point(object[0], object[1], object[2]);
    },
    MultiPoint: function(object, stream) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
    },
    LineString: function(object, stream) {
      streamLine$1(object.coordinates, stream, 0);
    },
    MultiLineString: function(object, stream) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) streamLine$1(coordinates[i], stream, 0);
    },
    Polygon: function(object, stream) {
      streamPolygon$1(object.coordinates, stream);
    },
    MultiPolygon: function(object, stream) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) streamPolygon$1(coordinates[i], stream);
    },
    GeometryCollection: function(object, stream) {
      var geometries = object.geometries, i = -1, n = geometries.length;
      while (++i < n) streamGeometry$1(geometries[i], stream);
    }
  };

  function streamLine$1(coordinates, stream, closed) {
    var i = -1, n = coordinates.length - closed, coordinate;
    stream.lineStart();
    while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
    stream.lineEnd();
  }

  function streamPolygon$1(coordinates, stream) {
    var i = -1, n = coordinates.length;
    stream.polygonStart();
    while (++i < n) streamLine$1(coordinates[i], stream, 1);
    stream.polygonEnd();
  }

  function geoStream$1(object, stream) {
    if (object && streamObjectType$1.hasOwnProperty(object.type)) {
      streamObjectType$1[object.type](object, stream);
    } else {
      streamGeometry$1(object, stream);
    }
  }

  var areaRingSum = new Adder$1();

  // hello?

  var areaSum = new Adder$1(),
      lambda00$2,
      phi00$2,
      lambda0$3,
      cosPhi0$2,
      sinPhi0$2;

  var areaStream = {
    point: noop$1,
    lineStart: noop$1,
    lineEnd: noop$1,
    polygonStart: function() {
      areaRingSum = new Adder$1();
      areaStream.lineStart = areaRingStart;
      areaStream.lineEnd = areaRingEnd;
    },
    polygonEnd: function() {
      var areaRing = +areaRingSum;
      areaSum.add(areaRing < 0 ? tau$2 + areaRing : areaRing);
      this.lineStart = this.lineEnd = this.point = noop$1;
    },
    sphere: function() {
      areaSum.add(tau$2);
    }
  };

  function areaRingStart() {
    areaStream.point = areaPointFirst;
  }

  function areaRingEnd() {
    areaPoint(lambda00$2, phi00$2);
  }

  function areaPointFirst(lambda, phi) {
    areaStream.point = areaPoint;
    lambda00$2 = lambda, phi00$2 = phi;
    lambda *= radians$2, phi *= radians$2;
    lambda0$3 = lambda, cosPhi0$2 = cos$2(phi = phi / 2 + quarterPi$1), sinPhi0$2 = sin$2(phi);
  }

  function areaPoint(lambda, phi) {
    lambda *= radians$2, phi *= radians$2;
    phi = phi / 2 + quarterPi$1; // half the angular distance from south pole

    // Spherical excess E for a spherical triangle with vertices: south pole,
    // previous point, current point.  Uses a formula derived from Cagnoli’s
    // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
    var dLambda = lambda - lambda0$3,
        sdLambda = dLambda >= 0 ? 1 : -1,
        adLambda = sdLambda * dLambda,
        cosPhi = cos$2(phi),
        sinPhi = sin$2(phi),
        k = sinPhi0$2 * sinPhi,
        u = cosPhi0$2 * cosPhi + k * cos$2(adLambda),
        v = k * sdLambda * sin$2(adLambda);
    areaRingSum.add(atan2$2(v, u));

    // Advance the previous points.
    lambda0$3 = lambda, cosPhi0$2 = cosPhi, sinPhi0$2 = sinPhi;
  }

  function spherical$2(cartesian) {
    return [atan2$2(cartesian[1], cartesian[0]), asin$2(cartesian[2])];
  }

  function cartesian$2(spherical) {
    var lambda = spherical[0], phi = spherical[1], cosPhi = cos$2(phi);
    return [cosPhi * cos$2(lambda), cosPhi * sin$2(lambda), sin$2(phi)];
  }

  function cartesianCross$2(a, b) {
    return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  }

  // TODO return d
  function cartesianNormalizeInPlace$1(d) {
    var l = sqrt$2(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d[0] /= l, d[1] /= l, d[2] /= l;
  }

  var lambda0$2, phi0, lambda1, phi1, // bounds
      lambda2, // previous lambda-coordinate
      lambda00$1, phi00$1, // first point
      p0, // previous 3D point
      deltaSum,
      ranges,
      range;

  var boundsStream$1 = {
    point: boundsPoint$1,
    lineStart: boundsLineStart,
    lineEnd: boundsLineEnd,
    polygonStart: function() {
      boundsStream$1.point = boundsRingPoint;
      boundsStream$1.lineStart = boundsRingStart;
      boundsStream$1.lineEnd = boundsRingEnd;
      deltaSum = new Adder$1();
      areaStream.polygonStart();
    },
    polygonEnd: function() {
      areaStream.polygonEnd();
      boundsStream$1.point = boundsPoint$1;
      boundsStream$1.lineStart = boundsLineStart;
      boundsStream$1.lineEnd = boundsLineEnd;
      if (areaRingSum < 0) lambda0$2 = -(lambda1 = 180), phi0 = -(phi1 = 90);
      else if (deltaSum > epsilon$3) phi1 = 90;
      else if (deltaSum < -epsilon$3) phi0 = -90;
      range[0] = lambda0$2, range[1] = lambda1;
    },
    sphere: function() {
      lambda0$2 = -(lambda1 = 180), phi0 = -(phi1 = 90);
    }
  };

  function boundsPoint$1(lambda, phi) {
    ranges.push(range = [lambda0$2 = lambda, lambda1 = lambda]);
    if (phi < phi0) phi0 = phi;
    if (phi > phi1) phi1 = phi;
  }

  function linePoint(lambda, phi) {
    var p = cartesian$2([lambda * radians$2, phi * radians$2]);
    if (p0) {
      var normal = cartesianCross$2(p0, p),
          equatorial = [normal[1], -normal[0], 0],
          inflection = cartesianCross$2(equatorial, normal);
      cartesianNormalizeInPlace$1(inflection);
      inflection = spherical$2(inflection);
      var delta = lambda - lambda2,
          sign = delta > 0 ? 1 : -1,
          lambdai = inflection[0] * degrees$2 * sign,
          phii,
          antimeridian = abs$1(delta) > 180;
      if (antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
        phii = inflection[1] * degrees$2;
        if (phii > phi1) phi1 = phii;
      } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
        phii = -inflection[1] * degrees$2;
        if (phii < phi0) phi0 = phii;
      } else {
        if (phi < phi0) phi0 = phi;
        if (phi > phi1) phi1 = phi;
      }
      if (antimeridian) {
        if (lambda < lambda2) {
          if (angle(lambda0$2, lambda) > angle(lambda0$2, lambda1)) lambda1 = lambda;
        } else {
          if (angle(lambda, lambda1) > angle(lambda0$2, lambda1)) lambda0$2 = lambda;
        }
      } else {
        if (lambda1 >= lambda0$2) {
          if (lambda < lambda0$2) lambda0$2 = lambda;
          if (lambda > lambda1) lambda1 = lambda;
        } else {
          if (lambda > lambda2) {
            if (angle(lambda0$2, lambda) > angle(lambda0$2, lambda1)) lambda1 = lambda;
          } else {
            if (angle(lambda, lambda1) > angle(lambda0$2, lambda1)) lambda0$2 = lambda;
          }
        }
      }
    } else {
      ranges.push(range = [lambda0$2 = lambda, lambda1 = lambda]);
    }
    if (phi < phi0) phi0 = phi;
    if (phi > phi1) phi1 = phi;
    p0 = p, lambda2 = lambda;
  }

  function boundsLineStart() {
    boundsStream$1.point = linePoint;
  }

  function boundsLineEnd() {
    range[0] = lambda0$2, range[1] = lambda1;
    boundsStream$1.point = boundsPoint$1;
    p0 = null;
  }

  function boundsRingPoint(lambda, phi) {
    if (p0) {
      var delta = lambda - lambda2;
      deltaSum.add(abs$1(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
    } else {
      lambda00$1 = lambda, phi00$1 = phi;
    }
    areaStream.point(lambda, phi);
    linePoint(lambda, phi);
  }

  function boundsRingStart() {
    areaStream.lineStart();
  }

  function boundsRingEnd() {
    boundsRingPoint(lambda00$1, phi00$1);
    areaStream.lineEnd();
    if (abs$1(deltaSum) > epsilon$3) lambda0$2 = -(lambda1 = 180);
    range[0] = lambda0$2, range[1] = lambda1;
    p0 = null;
  }

  // Finds the left-right distance between two longitudes.
  // This is almost the same as (lambda1 - lambda0 + 360°) % 360°, except that we want
  // the distance between ±180° to be 360°.
  function angle(lambda0, lambda1) {
    return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
  }

  function rangeCompare(a, b) {
    return a[0] - b[0];
  }

  function rangeContains(range, x) {
    return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
  }

  function geoBounds(feature) {
    var i, n, a, b, merged, deltaMax, delta;

    phi1 = lambda1 = -(lambda0$2 = phi0 = Infinity);
    ranges = [];
    geoStream$1(feature, boundsStream$1);

    // First, sort ranges by their minimum longitudes.
    if (n = ranges.length) {
      ranges.sort(rangeCompare);

      // Then, merge any ranges that overlap.
      for (i = 1, a = ranges[0], merged = [a]; i < n; ++i) {
        b = ranges[i];
        if (rangeContains(a, b[0]) || rangeContains(a, b[1])) {
          if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
          if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
        } else {
          merged.push(a = b);
        }
      }

      // Finally, find the largest gap between the merged ranges.
      // The final bounding box will be the inverse of this gap.
      for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i) {
        b = merged[i];
        if ((delta = angle(a[1], b[0])) > deltaMax) deltaMax = delta, lambda0$2 = b[0], lambda1 = a[1];
      }
    }

    ranges = range = null;

    return lambda0$2 === Infinity || phi0 === Infinity
        ? [[NaN, NaN], [NaN, NaN]]
        : [[lambda0$2, phi0], [lambda1, phi1]];
  }

  function longitude$1(point) {
    if (abs$1(point[0]) <= pi$2)
      return point[0];
    else
      return sign$2(point[0]) * ((abs$1(point[0]) + pi$2) % tau$2 - pi$2);
  }

  function polygonContains$1(polygon, point) {
    var lambda = longitude$1(point),
        phi = point[1],
        sinPhi = sin$2(phi),
        normal = [sin$2(lambda), -cos$2(lambda), 0],
        angle = 0,
        winding = 0;

    var sum = new Adder$1();

    if (sinPhi === 1) phi = halfPi$2 + epsilon$3;
    else if (sinPhi === -1) phi = -halfPi$2 - epsilon$3;

    for (var i = 0, n = polygon.length; i < n; ++i) {
      if (!(m = (ring = polygon[i]).length)) continue;
      var ring,
          m,
          point0 = ring[m - 1],
          lambda0 = longitude$1(point0),
          phi0 = point0[1] / 2 + quarterPi$1,
          sinPhi0 = sin$2(phi0),
          cosPhi0 = cos$2(phi0);

      for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
        var point1 = ring[j],
            lambda1 = longitude$1(point1),
            phi1 = point1[1] / 2 + quarterPi$1,
            sinPhi1 = sin$2(phi1),
            cosPhi1 = cos$2(phi1),
            delta = lambda1 - lambda0,
            sign = delta >= 0 ? 1 : -1,
            absDelta = sign * delta,
            antimeridian = absDelta > pi$2,
            k = sinPhi0 * sinPhi1;

        sum.add(atan2$2(k * sign * sin$2(absDelta), cosPhi0 * cosPhi1 + k * cos$2(absDelta)));
        angle += antimeridian ? delta + sign * tau$2 : delta;

        // Are the longitudes either side of the point’s meridian (lambda),
        // and are the latitudes smaller than the parallel (phi)?
        if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
          var arc = cartesianCross$2(cartesian$2(point0), cartesian$2(point1));
          cartesianNormalizeInPlace$1(arc);
          var intersection = cartesianCross$2(normal, arc);
          cartesianNormalizeInPlace$1(intersection);
          var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin$2(intersection[2]);
          if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
            winding += antimeridian ^ delta >= 0 ? 1 : -1;
          }
        }
      }
    }

    // First, determine whether the South pole is inside or outside:
    //
    // It is inside if:
    // * the polygon winds around it in a clockwise direction.
    // * the polygon does not (cumulatively) wind around it, but has a negative
    //   (counter-clockwise) area.
    //
    // Second, count the (signed) number of times a segment crosses a lambda
    // from the point to the South pole.  If it is zero, then the point is the
    // same side as the South pole.

    return (angle < -epsilon$3 || angle < epsilon$3 && sum < -epsilon2$1) ^ (winding & 1);
  }

  var lengthSum$1,
      lambda0$1,
      sinPhi0$1,
      cosPhi0$1;

  var lengthStream$1 = {
    sphere: noop$1,
    point: noop$1,
    lineStart: lengthLineStart$1,
    lineEnd: noop$1,
    polygonStart: noop$1,
    polygonEnd: noop$1
  };

  function lengthLineStart$1() {
    lengthStream$1.point = lengthPointFirst$1;
    lengthStream$1.lineEnd = lengthLineEnd$1;
  }

  function lengthLineEnd$1() {
    lengthStream$1.point = lengthStream$1.lineEnd = noop$1;
  }

  function lengthPointFirst$1(lambda, phi) {
    lambda *= radians$2, phi *= radians$2;
    lambda0$1 = lambda, sinPhi0$1 = sin$2(phi), cosPhi0$1 = cos$2(phi);
    lengthStream$1.point = lengthPoint$1;
  }

  function lengthPoint$1(lambda, phi) {
    lambda *= radians$2, phi *= radians$2;
    var sinPhi = sin$2(phi),
        cosPhi = cos$2(phi),
        delta = abs$1(lambda - lambda0$1),
        cosDelta = cos$2(delta),
        sinDelta = sin$2(delta),
        x = cosPhi * sinDelta,
        y = cosPhi0$1 * sinPhi - sinPhi0$1 * cosPhi * cosDelta,
        z = sinPhi0$1 * sinPhi + cosPhi0$1 * cosPhi * cosDelta;
    lengthSum$1.add(atan2$2(sqrt$2(x * x + y * y), z));
    lambda0$1 = lambda, sinPhi0$1 = sinPhi, cosPhi0$1 = cosPhi;
  }

  function length$1(object) {
    lengthSum$1 = new Adder$1();
    geoStream$1(object, lengthStream$1);
    return +lengthSum$1;
  }

  var coordinates$1 = [null, null],
      object$2 = {type: "LineString", coordinates: coordinates$1};

  function geoDistance$1(a, b) {
    coordinates$1[0] = a;
    coordinates$1[1] = b;
    return length$1(object$2);
  }

  var containsObjectType = {
    Feature: function(object, point) {
      return containsGeometry(object.geometry, point);
    },
    FeatureCollection: function(object, point) {
      var features = object.features, i = -1, n = features.length;
      while (++i < n) if (containsGeometry(features[i].geometry, point)) return true;
      return false;
    }
  };

  var containsGeometryType = {
    Sphere: function() {
      return true;
    },
    Point: function(object, point) {
      return containsPoint(object.coordinates, point);
    },
    MultiPoint: function(object, point) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) if (containsPoint(coordinates[i], point)) return true;
      return false;
    },
    LineString: function(object, point) {
      return containsLine(object.coordinates, point);
    },
    MultiLineString: function(object, point) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) if (containsLine(coordinates[i], point)) return true;
      return false;
    },
    Polygon: function(object, point) {
      return containsPolygon(object.coordinates, point);
    },
    MultiPolygon: function(object, point) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) if (containsPolygon(coordinates[i], point)) return true;
      return false;
    },
    GeometryCollection: function(object, point) {
      var geometries = object.geometries, i = -1, n = geometries.length;
      while (++i < n) if (containsGeometry(geometries[i], point)) return true;
      return false;
    }
  };

  function containsGeometry(geometry, point) {
    return geometry && containsGeometryType.hasOwnProperty(geometry.type)
        ? containsGeometryType[geometry.type](geometry, point)
        : false;
  }

  function containsPoint(coordinates, point) {
    return geoDistance$1(coordinates, point) === 0;
  }

  function containsLine(coordinates, point) {
    var ao, bo, ab;
    for (var i = 0, n = coordinates.length; i < n; i++) {
      bo = geoDistance$1(coordinates[i], point);
      if (bo === 0) return true;
      if (i > 0) {
        ab = geoDistance$1(coordinates[i], coordinates[i - 1]);
        if (
          ab > 0 &&
          ao <= ab &&
          bo <= ab &&
          (ao + bo - ab) * (1 - Math.pow((ao - bo) / ab, 2)) < epsilon2$1 * ab
        )
          return true;
      }
      ao = bo;
    }
    return false;
  }

  function containsPolygon(coordinates, point) {
    return !!polygonContains$1(coordinates.map(ringRadians), pointRadians(point));
  }

  function ringRadians(ring) {
    return ring = ring.map(pointRadians), ring.pop(), ring;
  }

  function pointRadians(point) {
    return [point[0] * radians$2, point[1] * radians$2];
  }

  function geoContains(object, point) {
    return (object && containsObjectType.hasOwnProperty(object.type)
        ? containsObjectType[object.type]
        : containsGeometry)(object, point);
  }

  function graticuleX(y0, y1, dy) {
    var y = sequence(y0, y1 - epsilon$3, dy).concat(y1);
    return function(x) { return y.map(function(y) { return [x, y]; }); };
  }

  function graticuleY(x0, x1, dx) {
    var x = sequence(x0, x1 - epsilon$3, dx).concat(x1);
    return function(y) { return x.map(function(x) { return [x, y]; }); };
  }

  function graticule() {
    var x1, x0, X1, X0,
        y1, y0, Y1, Y0,
        dx = 10, dy = dx, DX = 90, DY = 360,
        x, y, X, Y,
        precision = 2.5;

    function graticule() {
      return {type: "MultiLineString", coordinates: lines()};
    }

    function lines() {
      return sequence(ceil(X0 / DX) * DX, X1, DX).map(X)
          .concat(sequence(ceil(Y0 / DY) * DY, Y1, DY).map(Y))
          .concat(sequence(ceil(x0 / dx) * dx, x1, dx).filter(function(x) { return abs$1(x % DX) > epsilon$3; }).map(x))
          .concat(sequence(ceil(y0 / dy) * dy, y1, dy).filter(function(y) { return abs$1(y % DY) > epsilon$3; }).map(y));
    }

    graticule.lines = function() {
      return lines().map(function(coordinates) { return {type: "LineString", coordinates: coordinates}; });
    };

    graticule.outline = function() {
      return {
        type: "Polygon",
        coordinates: [
          X(X0).concat(
          Y(Y1).slice(1),
          X(X1).reverse().slice(1),
          Y(Y0).reverse().slice(1))
        ]
      };
    };

    graticule.extent = function(_) {
      if (!arguments.length) return graticule.extentMinor();
      return graticule.extentMajor(_).extentMinor(_);
    };

    graticule.extentMajor = function(_) {
      if (!arguments.length) return [[X0, Y0], [X1, Y1]];
      X0 = +_[0][0], X1 = +_[1][0];
      Y0 = +_[0][1], Y1 = +_[1][1];
      if (X0 > X1) _ = X0, X0 = X1, X1 = _;
      if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
      return graticule.precision(precision);
    };

    graticule.extentMinor = function(_) {
      if (!arguments.length) return [[x0, y0], [x1, y1]];
      x0 = +_[0][0], x1 = +_[1][0];
      y0 = +_[0][1], y1 = +_[1][1];
      if (x0 > x1) _ = x0, x0 = x1, x1 = _;
      if (y0 > y1) _ = y0, y0 = y1, y1 = _;
      return graticule.precision(precision);
    };

    graticule.step = function(_) {
      if (!arguments.length) return graticule.stepMinor();
      return graticule.stepMajor(_).stepMinor(_);
    };

    graticule.stepMajor = function(_) {
      if (!arguments.length) return [DX, DY];
      DX = +_[0], DY = +_[1];
      return graticule;
    };

    graticule.stepMinor = function(_) {
      if (!arguments.length) return [dx, dy];
      dx = +_[0], dy = +_[1];
      return graticule;
    };

    graticule.precision = function(_) {
      if (!arguments.length) return precision;
      precision = +_;
      x = graticuleX(y0, y1, 90);
      y = graticuleY(x0, x1, precision);
      X = graticuleX(Y0, Y1, 90);
      Y = graticuleY(X0, X1, precision);
      return graticule;
    };

    return graticule
        .extentMajor([[-180, -90 + epsilon$3], [180, 90 - epsilon$3]])
        .extentMinor([[-180, -80 - epsilon$3], [180, 80 + epsilon$3]]);
  }

  function graticule10() {
    return graticule()();
  }

  function geoInterpolate(a, b) {
    var x0 = a[0] * radians$2,
        y0 = a[1] * radians$2,
        x1 = b[0] * radians$2,
        y1 = b[1] * radians$2,
        cy0 = cos$2(y0),
        sy0 = sin$2(y0),
        cy1 = cos$2(y1),
        sy1 = sin$2(y1),
        kx0 = cy0 * cos$2(x0),
        ky0 = cy0 * sin$2(x0),
        kx1 = cy1 * cos$2(x1),
        ky1 = cy1 * sin$2(x1),
        d = 2 * asin$2(sqrt$2(haversin(y1 - y0) + cy0 * cy1 * haversin(x1 - x0))),
        k = sin$2(d);

    var interpolate = d ? function(t) {
      var B = sin$2(t *= d) / k,
          A = sin$2(d - t) / k,
          x = A * kx0 + B * kx1,
          y = A * ky0 + B * ky1,
          z = A * sy0 + B * sy1;
      return [
        atan2$2(y, x) * degrees$2,
        atan2$2(z, sqrt$2(x * x + y * y)) * degrees$2
      ];
    } : function() {
      return [x0 * degrees$2, y0 * degrees$2];
    };

    interpolate.distance = d;

    return interpolate;
  }

  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _inherits$1(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf$1(subClass, superClass);
  }

  function _getPrototypeOf$1(o) {
    _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf$1(o);
  }

  function _setPrototypeOf$1(o, p) {
    _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf$1(o, p);
  }

  function _isNativeReflectConstruct$1() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized$1(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn$1(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized$1(self);
  }

  function _createSuper$1(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$1();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf$1(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf$1(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn$1(this, result);
    };
  }

  function _slicedToArray$3(arr, i) {
    return _arrayWithHoles$3(arr) || _iterableToArrayLimit$3(arr, i) || _unsupportedIterableToArray$3(arr, i) || _nonIterableRest$3();
  }

  function _arrayWithHoles$3(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit$3(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray$3(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$3(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen);
  }

  function _arrayLikeToArray$3(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest$3() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var interpolateLine = function interpolateLine() {
    var lineCoords = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var maxDegDistance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var result = [];
    var prevPnt = null;
    lineCoords.forEach(function (pnt) {
      if (prevPnt) {
        var dist = geoDistance$1(pnt, prevPnt) * 180 / Math.PI;

        if (dist > maxDegDistance) {
          var interpol = geoInterpolate(prevPnt, pnt);
          var tStep = 1 / Math.ceil(dist / maxDegDistance);
          var t = tStep;

          while (t < 1) {
            result.push(interpol(t));
            t += tStep;
          }
        }
      }

      result.push(prevPnt = pnt);
    });
    return result;
  };

  var THREE$e = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    BufferGeometry: three$1.BufferGeometry,
    Float32BufferAttribute: three$1.Float32BufferAttribute
  };

  var setAttributeFn$5 = new THREE$e.BufferGeometry().setAttribute ? 'setAttribute' : 'addAttribute';

  var GeoJsonGeometry = /*#__PURE__*/function (_THREE$BufferGeometry) {
    _inherits$1(GeoJsonGeometry, _THREE$BufferGeometry);

    var _super = _createSuper$1(GeoJsonGeometry);

    function GeoJsonGeometry(geoJson) {
      var _this;

      var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var resolution = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;

      _classCallCheck$1(this, GeoJsonGeometry);

      _this = _super.call(this);
      _this.type = 'GeoJsonGeometry';
      _this.parameters = {
        geoJson: geoJson,
        radius: radius,
        resolution: resolution
      }; // process various geometry types

      var groups = ({
        Point: genPoint,
        MultiPoint: genMultiPoint,
        LineString: genLineString,
        MultiLineString: genMultiLineString,
        Polygon: genPolygon,
        MultiPolygon: genMultiPolygon
      }[geoJson.type] || function () {
        return [];
      })(geoJson.coordinates, radius); // concat groups


      var indices = [],
          vertices = [];
      var groupCnt = 0;
      groups.forEach(function (newG) {
        var prevIndCnt = indices.length;
        concatGroup({
          indices: indices,
          vertices: vertices
        }, newG);

        _this.addGroup(prevIndCnt, indices.length - prevIndCnt, groupCnt++);
      }); // build geometry

      indices.length && _this.setIndex(indices);
      vertices.length && _this[setAttributeFn$5]('position', new THREE$e.Float32BufferAttribute(vertices, 3)); //

      function genPoint(coords, r) {
        var vertices = polar2Cartesian$1(coords[1], coords[0], r);
        var indices = [];
        return [{
          vertices: vertices,
          indices: indices
        }];
      }

      function genMultiPoint(coords, r) {
        var result = {
          vertices: [],
          indices: []
        };
        coords.map(function (c) {
          return genPoint(c, r);
        }).forEach(function (_ref) {
          var _ref2 = _slicedToArray$3(_ref, 1),
              newPnt = _ref2[0];

          concatGroup(result, newPnt);
        });
        return [result];
      }

      function genLineString(coords, r) {
        var coords3d = interpolateLine(coords, resolution).map(function (_ref3) {
          var _ref4 = _slicedToArray$3(_ref3, 2),
              lng = _ref4[0],
              lat = _ref4[1];

          return polar2Cartesian$1(lat, lng, r);
        });

        var _earcut$flatten = earcut$1.flatten([coords3d]),
            vertices = _earcut$flatten.vertices;

        var numPoints = Math.round(vertices.length / 3);
        var indices = [];

        for (var vIdx = 1; vIdx < numPoints; vIdx++) {
          indices.push(vIdx - 1, vIdx);
        }

        return [{
          vertices: vertices,
          indices: indices
        }];
      }

      function genMultiLineString(coords, r) {
        var result = {
          vertices: [],
          indices: []
        };
        coords.map(function (c) {
          return genLineString(c, r);
        }).forEach(function (_ref5) {
          var _ref6 = _slicedToArray$3(_ref5, 1),
              newLine = _ref6[0];

          concatGroup(result, newLine);
        });
        return [result];
      }

      function genPolygon(coords, r) {
        var coords3d = coords.map(function (coordsSegment) {
          return interpolateLine(coordsSegment, resolution).map(function (_ref7) {
            var _ref8 = _slicedToArray$3(_ref7, 2),
                lng = _ref8[0],
                lat = _ref8[1];

            return polar2Cartesian$1(lat, lng, r);
          });
        }); // Each point generates 3 vertice items (x,y,z).

        var _earcut$flatten2 = earcut$1.flatten(coords3d),
            vertices = _earcut$flatten2.vertices,
            holes = _earcut$flatten2.holes;

        var firstHoleIdx = holes[0] || Infinity;
        var outerVertices = vertices.slice(0, firstHoleIdx);
        var holeVertices = vertices.slice(firstHoleIdx);
        var holesIdx = new Set(holes);
        var numPoints = Math.round(vertices.length / 3);
        var outerIndices = [],
            holeIndices = [];

        for (var vIdx = 1; vIdx < numPoints; vIdx++) {
          if (!holesIdx.has(vIdx)) {
            if (vIdx < firstHoleIdx) {
              outerIndices.push(vIdx - 1, vIdx);
            } else {
              holeIndices.push(vIdx - 1 - firstHoleIdx, vIdx - firstHoleIdx);
            }
          }
        }

        var groups = [{
          indices: outerIndices,
          vertices: outerVertices
        }];

        if (holes.length) {
          groups.push({
            indices: holeIndices,
            vertices: holeVertices
          });
        }

        return groups;
      }

      function genMultiPolygon(coords, r) {
        var outer = {
          vertices: [],
          indices: []
        };
        var holes = {
          vertices: [],
          indices: []
        };
        coords.map(function (c) {
          return genPolygon(c, r);
        }).forEach(function (_ref9) {
          var _ref10 = _slicedToArray$3(_ref9, 2),
              newOuter = _ref10[0],
              newHoles = _ref10[1];

          concatGroup(outer, newOuter);
          newHoles && concatGroup(holes, newHoles);
        });
        var groups = [outer];
        holes.vertices.length && groups.push(holes);
        return groups;
      }

      return _this;
    }

    return GeoJsonGeometry;
  }(THREE$e.BufferGeometry); //


  function concatGroup(main, extra) {
    var prevVertCnt = Math.round(main.vertices.length / 3);
    concatArr(main.vertices, extra.vertices);
    concatArr(main.indices, extra.indices.map(function (ind) {
      return ind + prevVertCnt;
    }));
  }

  function concatArr(target, src) {
    var _iterator = _createForOfIteratorHelper(src),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var e = _step.value;
        target.push(e);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  function polar2Cartesian$1(lat, lng) {
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var phi = (90 - lat) * Math.PI / 180;
    var theta = (90 - lng) * Math.PI / 180;
    return [r * Math.sin(phi) * Math.cos(theta), // x
    r * Math.cos(phi), // y
    r * Math.sin(phi) * Math.sin(theta) // z
    ];
  }

  var THREE$d = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    BackSide: three$1.BackSide,
    BufferAttribute: three$1.BufferAttribute,
    Color: three$1.Color,
    Mesh: three$1.Mesh,
    ShaderMaterial: three$1.ShaderMaterial
  };
  var fragmentShader = "\nuniform vec3 color;\nuniform float coefficient;\nuniform float power;\nvarying vec3 vVertexNormal;\nvarying vec3 vVertexWorldPosition;\nvoid main() {\n  vec3 worldCameraToVertex = vVertexWorldPosition - cameraPosition;\n  vec3 viewCameraToVertex\t= (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;\n  viewCameraToVertex = normalize(viewCameraToVertex);\n  float intensity\t= pow(\n    coefficient + dot(vVertexNormal, viewCameraToVertex),\n    power\n  );\n  gl_FragColor = vec4(color, intensity);\n}";
  var vertexShader = "\nvarying vec3 vVertexWorldPosition;\nvarying vec3 vVertexNormal;\nvoid main() {\n  vVertexNormal\t= normalize(normalMatrix * normal);\n  vVertexWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;\n  gl_Position\t= projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n";
  var defaultOptions = {
    backside: true,
    coefficient: 0.5,
    color: 'gold',
    size: 2,
    power: 1
  }; // Based off: http://stemkoski.blogspot.fr/2013/07/shaders-in-threejs-glow-and-halo.html

  function createGlowMaterial(coefficient, color, power) {
    return new THREE$d.ShaderMaterial({
      depthWrite: false,
      fragmentShader: fragmentShader,
      transparent: true,
      uniforms: {
        coefficient: {
          value: coefficient
        },
        color: {
          value: new THREE$d.Color(color)
        },
        power: {
          value: power
        }
      },
      vertexShader: vertexShader
    });
  }
  function createGlowGeometry(geometry, size) {
    // expect BufferGeometry
    var glowGeometry = geometry.clone(); // Resize vertex positions according to normals

    var position = new Float32Array(geometry.attributes.position.count * 3);

    for (var idx = 0, len = position.length; idx < len; idx++) {
      var normal = geometry.attributes.normal.array[idx];
      var curPos = geometry.attributes.position.array[idx];
      position[idx] = curPos + normal * size;
    }

    glowGeometry.setAttribute('position', new THREE$d.BufferAttribute(position, 3));
    return glowGeometry;
  }
  function createGlowMesh(geometry) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;
    var backside = options.backside,
        coefficient = options.coefficient,
        color = options.color,
        size = options.size,
        power = options.power;
    var glowGeometry = createGlowGeometry(geometry, size);
    var glowMaterial = createGlowMaterial(coefficient, color, power);

    if (backside) {
      glowMaterial.side = THREE$d.BackSide;
    }

    return new THREE$d.Mesh(glowGeometry, glowMaterial);
  }

  var THREE$c = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    Color: three$1.Color,
    LineBasicMaterial: three$1.LineBasicMaterial,
    LineSegments: three$1.LineSegments,
    Mesh: three$1.Mesh,
    MeshPhongMaterial: three$1.MeshPhongMaterial,
    SphereBufferGeometry: three$1.SphereBufferGeometry,
    TextureLoader: three$1.TextureLoader
  };

  var GlobeLayerKapsule = index$2({
    props: {
      globeImageUrl: {},
      bumpImageUrl: {},
      showGlobe: {
        "default": true,
        onChange: function onChange(showGlobe, state) {
          state.globeObj.visible = !!showGlobe;
        },
        triggerUpdate: false
      },
      showGraticules: {
        "default": false,
        onChange: function onChange(showGraticules, state) {
          state.graticulesObj.visible = !!showGraticules;
        },
        triggerUpdate: false
      },
      showAtmosphere: {
        "default": true,
        onChange: function onChange(showAtmosphere, state) {
          state.atmosphereObj && (state.atmosphereObj.visible = !!showAtmosphere);
        },
        triggerUpdate: false
      },
      atmosphereColor: {
        "default": 'lightskyblue'
      },
      atmosphereAltitude: {
        "default": 0.15
      },
      onReady: {
        "default": function _default() {},
        triggerUpdate: false
      }
    },
    methods: {
      globeMaterial: function globeMaterial(state, _globeMaterial) {
        if (_globeMaterial !== undefined) {
          state.globeObj.material = _globeMaterial || state.defaultGlobeMaterial;
          return this;
        }

        return state.globeObj.material;
      }
    },
    stateInit: function stateInit() {
      // create globe
      var globeGeometry = new THREE$c.SphereBufferGeometry(GLOBE_RADIUS, 75, 75);
      var defaultGlobeMaterial = new THREE$c.MeshPhongMaterial({
        color: 0x000000,
        transparent: true
      });
      var globeObj = new THREE$c.Mesh(globeGeometry, defaultGlobeMaterial);
      globeObj.rotation.y = -Math.PI / 2; // face prime meridian along Z axis

      globeObj.__globeObjType = 'globe'; // Add object type
      // create graticules

      var graticulesObj = new THREE$c.LineSegments(new GeoJsonGeometry(graticule10(), GLOBE_RADIUS, 2), new THREE$c.LineBasicMaterial({
        color: 'lightgrey',
        transparent: true,
        opacity: 0.1
      }));
      return {
        globeObj: globeObj,
        graticulesObj: graticulesObj,
        defaultGlobeMaterial: defaultGlobeMaterial
      };
    },
    init: function init(threeObj, state) {
      // Clear the scene
      emptyObject(threeObj); // Main three object to manipulate

      state.scene = threeObj;
      state.scene.add(state.globeObj); // add globe

      state.scene.add(state.graticulesObj); // add graticules

      state.ready = false;
    },
    update: function update(state, changedProps) {
      var globeMaterial = state.globeObj.material;

      if (changedProps.hasOwnProperty('globeImageUrl')) {
        if (!state.globeImageUrl) {
          // Black globe if no image
          !globeMaterial.color && (globeMaterial.color = new THREE$c.Color(0x000000));
        } else {
          new THREE$c.TextureLoader().load(state.globeImageUrl, function (texture) {
            globeMaterial.map = texture;
            globeMaterial.color = null;
            globeMaterial.needsUpdate = true; // ready when first globe image finishes loading (asynchronously to allow 1 frame to load texture)

            !state.ready && (state.ready = true) && setTimeout(state.onReady);
          });
        }
      }

      if (changedProps.hasOwnProperty('bumpImageUrl')) {
        if (!state.bumpImageUrl) {
          globeMaterial.bumpMap = null;
          globeMaterial.needsUpdate = true;
        } else {
          state.bumpImageUrl && new THREE$c.TextureLoader().load(state.bumpImageUrl, function (texture) {
            globeMaterial.bumpMap = texture;
            globeMaterial.needsUpdate = true;
          });
        }
      }

      if (changedProps.hasOwnProperty('atmosphereColor') || changedProps.hasOwnProperty('atmosphereAltitude')) {
        if (state.atmosphereObj) {
          // recycle previous atmosphere object
          state.scene.remove(state.atmosphereObj);
          emptyObject(state.atmosphereObj);
        }

        if (state.atmosphereColor && state.atmosphereAltitude) {
          var obj = state.atmosphereObj = createGlowMesh(state.globeObj.geometry, {
            backside: true,
            color: state.atmosphereColor,
            size: GLOBE_RADIUS * state.atmosphereAltitude,
            power: 3.5,
            // dispersion
            coefficient: 0.1
          });
          obj.visible = !!state.showAtmosphere;
          obj.__globeObjType = 'atmosphere'; // Add object type

          state.scene.add(obj);
        }
      }

      if (!state.ready && !state.globeImageUrl) {
        // ready immediately if there's no globe image
        state.ready = true;
        state.onReady();
      }
    }
  });

  class BufferGeometryUtils {

  	static computeTangents( geometry ) {

  		geometry.computeTangents();
  		console.warn( 'THREE.BufferGeometryUtils: .computeTangents() has been removed. Use BufferGeometry.computeTangents() instead.' );

  	}

  	/**
  	 * @param  {Array<BufferGeometry>} geometries
  	 * @param  {Boolean} useGroups
  	 * @return {BufferGeometry}
  	 */
  	static mergeBufferGeometries( geometries, useGroups = false ) {

  		const isIndexed = geometries[ 0 ].index !== null;

  		const attributesUsed = new Set( Object.keys( geometries[ 0 ].attributes ) );
  		const morphAttributesUsed = new Set( Object.keys( geometries[ 0 ].morphAttributes ) );

  		const attributes = {};
  		const morphAttributes = {};

  		const morphTargetsRelative = geometries[ 0 ].morphTargetsRelative;

  		const mergedGeometry = new three$1.BufferGeometry();

  		let offset = 0;

  		for ( let i = 0; i < geometries.length; ++ i ) {

  			const geometry = geometries[ i ];
  			let attributesCount = 0;

  			// ensure that all geometries are indexed, or none

  			if ( isIndexed !== ( geometry.index !== null ) ) {

  				console.error( 'THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index ' + i + '. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.' );
  				return null;

  			}

  			// gather attributes, exit early if they're different

  			for ( const name in geometry.attributes ) {

  				if ( ! attributesUsed.has( name ) ) {

  					console.error( 'THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index ' + i + '. All geometries must have compatible attributes; make sure "' + name + '" attribute exists among all geometries, or in none of them.' );
  					return null;

  				}

  				if ( attributes[ name ] === undefined ) attributes[ name ] = [];

  				attributes[ name ].push( geometry.attributes[ name ] );

  				attributesCount ++;

  			}

  			// ensure geometries have the same number of attributes

  			if ( attributesCount !== attributesUsed.size ) {

  				console.error( 'THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index ' + i + '. Make sure all geometries have the same number of attributes.' );
  				return null;

  			}

  			// gather morph attributes, exit early if they're different

  			if ( morphTargetsRelative !== geometry.morphTargetsRelative ) {

  				console.error( 'THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index ' + i + '. .morphTargetsRelative must be consistent throughout all geometries.' );
  				return null;

  			}

  			for ( const name in geometry.morphAttributes ) {

  				if ( ! morphAttributesUsed.has( name ) ) {

  					console.error( 'THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index ' + i + '.  .morphAttributes must be consistent throughout all geometries.' );
  					return null;

  				}

  				if ( morphAttributes[ name ] === undefined ) morphAttributes[ name ] = [];

  				morphAttributes[ name ].push( geometry.morphAttributes[ name ] );

  			}

  			// gather .userData

  			mergedGeometry.userData.mergedUserData = mergedGeometry.userData.mergedUserData || [];
  			mergedGeometry.userData.mergedUserData.push( geometry.userData );

  			if ( useGroups ) {

  				let count;

  				if ( isIndexed ) {

  					count = geometry.index.count;

  				} else if ( geometry.attributes.position !== undefined ) {

  					count = geometry.attributes.position.count;

  				} else {

  					console.error( 'THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index ' + i + '. The geometry must have either an index or a position attribute' );
  					return null;

  				}

  				mergedGeometry.addGroup( offset, count, i );

  				offset += count;

  			}

  		}

  		// merge indices

  		if ( isIndexed ) {

  			let indexOffset = 0;
  			const mergedIndex = [];

  			for ( let i = 0; i < geometries.length; ++ i ) {

  				const index = geometries[ i ].index;

  				for ( let j = 0; j < index.count; ++ j ) {

  					mergedIndex.push( index.getX( j ) + indexOffset );

  				}

  				indexOffset += geometries[ i ].attributes.position.count;

  			}

  			mergedGeometry.setIndex( mergedIndex );

  		}

  		// merge attributes

  		for ( const name in attributes ) {

  			const mergedAttribute = this.mergeBufferAttributes( attributes[ name ] );

  			if ( ! mergedAttribute ) {

  				console.error( 'THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the ' + name + ' attribute.' );
  				return null;

  			}

  			mergedGeometry.setAttribute( name, mergedAttribute );

  		}

  		// merge morph attributes

  		for ( const name in morphAttributes ) {

  			const numMorphTargets = morphAttributes[ name ][ 0 ].length;

  			if ( numMorphTargets === 0 ) break;

  			mergedGeometry.morphAttributes = mergedGeometry.morphAttributes || {};
  			mergedGeometry.morphAttributes[ name ] = [];

  			for ( let i = 0; i < numMorphTargets; ++ i ) {

  				const morphAttributesToMerge = [];

  				for ( let j = 0; j < morphAttributes[ name ].length; ++ j ) {

  					morphAttributesToMerge.push( morphAttributes[ name ][ j ][ i ] );

  				}

  				const mergedMorphAttribute = this.mergeBufferAttributes( morphAttributesToMerge );

  				if ( ! mergedMorphAttribute ) {

  					console.error( 'THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the ' + name + ' morphAttribute.' );
  					return null;

  				}

  				mergedGeometry.morphAttributes[ name ].push( mergedMorphAttribute );

  			}

  		}

  		return mergedGeometry;

  	}

  	/**
  	 * @param {Array<BufferAttribute>} attributes
  	 * @return {BufferAttribute}
  	 */
  	static mergeBufferAttributes( attributes ) {

  		let TypedArray;
  		let itemSize;
  		let normalized;
  		let arrayLength = 0;

  		for ( let i = 0; i < attributes.length; ++ i ) {

  			const attribute = attributes[ i ];

  			if ( attribute.isInterleavedBufferAttribute ) {

  				console.error( 'THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported.' );
  				return null;

  			}

  			if ( TypedArray === undefined ) TypedArray = attribute.array.constructor;
  			if ( TypedArray !== attribute.array.constructor ) {

  				console.error( 'THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.' );
  				return null;

  			}

  			if ( itemSize === undefined ) itemSize = attribute.itemSize;
  			if ( itemSize !== attribute.itemSize ) {

  				console.error( 'THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.' );
  				return null;

  			}

  			if ( normalized === undefined ) normalized = attribute.normalized;
  			if ( normalized !== attribute.normalized ) {

  				console.error( 'THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.' );
  				return null;

  			}

  			arrayLength += attribute.array.length;

  		}

  		const array = new TypedArray( arrayLength );
  		let offset = 0;

  		for ( let i = 0; i < attributes.length; ++ i ) {

  			array.set( attributes[ i ].array, offset );

  			offset += attributes[ i ].array.length;

  		}

  		return new three$1.BufferAttribute( array, itemSize, normalized );

  	}

  	/**
  	 * @param {Array<BufferAttribute>} attributes
  	 * @return {Array<InterleavedBufferAttribute>}
  	 */
  	static interleaveAttributes( attributes ) {

  		// Interleaves the provided attributes into an InterleavedBuffer and returns
  		// a set of InterleavedBufferAttributes for each attribute
  		let TypedArray;
  		let arrayLength = 0;
  		let stride = 0;

  		// calculate the the length and type of the interleavedBuffer
  		for ( let i = 0, l = attributes.length; i < l; ++ i ) {

  			const attribute = attributes[ i ];

  			if ( TypedArray === undefined ) TypedArray = attribute.array.constructor;
  			if ( TypedArray !== attribute.array.constructor ) {

  				console.error( 'AttributeBuffers of different types cannot be interleaved' );
  				return null;

  			}

  			arrayLength += attribute.array.length;
  			stride += attribute.itemSize;

  		}

  		// Create the set of buffer attributes
  		const interleavedBuffer = new three$1.InterleavedBuffer( new TypedArray( arrayLength ), stride );
  		let offset = 0;
  		const res = [];
  		const getters = [ 'getX', 'getY', 'getZ', 'getW' ];
  		const setters = [ 'setX', 'setY', 'setZ', 'setW' ];

  		for ( let j = 0, l = attributes.length; j < l; j ++ ) {

  			const attribute = attributes[ j ];
  			const itemSize = attribute.itemSize;
  			const count = attribute.count;
  			const iba = new three$1.InterleavedBufferAttribute( interleavedBuffer, itemSize, offset, attribute.normalized );
  			res.push( iba );

  			offset += itemSize;

  			// Move the data for each attribute into the new interleavedBuffer
  			// at the appropriate offset
  			for ( let c = 0; c < count; c ++ ) {

  				for ( let k = 0; k < itemSize; k ++ ) {

  					iba[ setters[ k ] ]( c, attribute[ getters[ k ] ]( c ) );

  				}

  			}

  		}

  		return res;

  	}

  	/**
  	 * @param {Array<BufferGeometry>} geometry
  	 * @return {number}
  	 */
  	static estimateBytesUsed( geometry ) {

  		// Return the estimated memory used by this geometry in bytes
  		// Calculate using itemSize, count, and BYTES_PER_ELEMENT to account
  		// for InterleavedBufferAttributes.
  		let mem = 0;
  		for ( const name in geometry.attributes ) {

  			const attr = geometry.getAttribute( name );
  			mem += attr.count * attr.itemSize * attr.array.BYTES_PER_ELEMENT;

  		}

  		const indices = geometry.getIndex();
  		mem += indices ? indices.count * indices.itemSize * indices.array.BYTES_PER_ELEMENT : 0;
  		return mem;

  	}

  	/**
  	 * @param {BufferGeometry} geometry
  	 * @param {number} tolerance
  	 * @return {BufferGeometry>}
  	 */
  	static mergeVertices( geometry, tolerance = 1e-4 ) {

  		tolerance = Math.max( tolerance, Number.EPSILON );

  		// Generate an index buffer if the geometry doesn't have one, or optimize it
  		// if it's already available.
  		const hashToIndex = {};
  		const indices = geometry.getIndex();
  		const positions = geometry.getAttribute( 'position' );
  		const vertexCount = indices ? indices.count : positions.count;

  		// next value for triangle indices
  		let nextIndex = 0;

  		// attributes and new attribute arrays
  		const attributeNames = Object.keys( geometry.attributes );
  		const attrArrays = {};
  		const morphAttrsArrays = {};
  		const newIndices = [];
  		const getters = [ 'getX', 'getY', 'getZ', 'getW' ];

  		// initialize the arrays
  		for ( let i = 0, l = attributeNames.length; i < l; i ++ ) {

  			const name = attributeNames[ i ];

  			attrArrays[ name ] = [];

  			const morphAttr = geometry.morphAttributes[ name ];
  			if ( morphAttr ) {

  				morphAttrsArrays[ name ] = new Array( morphAttr.length ).fill().map( () => [] );

  			}

  		}

  		// convert the error tolerance to an amount of decimal places to truncate to
  		const decimalShift = Math.log10( 1 / tolerance );
  		const shiftMultiplier = Math.pow( 10, decimalShift );
  		for ( let i = 0; i < vertexCount; i ++ ) {

  			const index = indices ? indices.getX( i ) : i;

  			// Generate a hash for the vertex attributes at the current index 'i'
  			let hash = '';
  			for ( let j = 0, l = attributeNames.length; j < l; j ++ ) {

  				const name = attributeNames[ j ];
  				const attribute = geometry.getAttribute( name );
  				const itemSize = attribute.itemSize;

  				for ( let k = 0; k < itemSize; k ++ ) {

  					// double tilde truncates the decimal value
  					hash += `${ ~ ~ ( attribute[ getters[ k ] ]( index ) * shiftMultiplier ) },`;

  				}

  			}

  			// Add another reference to the vertex if it's already
  			// used by another index
  			if ( hash in hashToIndex ) {

  				newIndices.push( hashToIndex[ hash ] );

  			} else {

  				// copy data to the new index in the attribute arrays
  				for ( let j = 0, l = attributeNames.length; j < l; j ++ ) {

  					const name = attributeNames[ j ];
  					const attribute = geometry.getAttribute( name );
  					const morphAttr = geometry.morphAttributes[ name ];
  					const itemSize = attribute.itemSize;
  					const newarray = attrArrays[ name ];
  					const newMorphArrays = morphAttrsArrays[ name ];

  					for ( let k = 0; k < itemSize; k ++ ) {

  						const getterFunc = getters[ k ];
  						newarray.push( attribute[ getterFunc ]( index ) );

  						if ( morphAttr ) {

  							for ( let m = 0, ml = morphAttr.length; m < ml; m ++ ) {

  								newMorphArrays[ m ].push( morphAttr[ m ][ getterFunc ]( index ) );

  							}

  						}

  					}

  				}

  				hashToIndex[ hash ] = nextIndex;
  				newIndices.push( nextIndex );
  				nextIndex ++;

  			}

  		}

  		// Generate typed arrays from new attribute arrays and update
  		// the attributeBuffers
  		const result = geometry.clone();
  		for ( let i = 0, l = attributeNames.length; i < l; i ++ ) {

  			const name = attributeNames[ i ];
  			const oldAttribute = geometry.getAttribute( name );

  			const buffer = new oldAttribute.array.constructor( attrArrays[ name ] );
  			const attribute = new three$1.BufferAttribute( buffer, oldAttribute.itemSize, oldAttribute.normalized );

  			result.setAttribute( name, attribute );

  			// Update the attribute arrays
  			if ( name in morphAttrsArrays ) {

  				for ( let j = 0; j < morphAttrsArrays[ name ].length; j ++ ) {

  					const oldMorphAttribute = geometry.morphAttributes[ name ][ j ];

  					const buffer = new oldMorphAttribute.array.constructor( morphAttrsArrays[ name ][ j ] );
  					const morphAttribute = new three$1.BufferAttribute( buffer, oldMorphAttribute.itemSize, oldMorphAttribute.normalized );
  					result.morphAttributes[ name ][ j ] = morphAttribute;

  				}

  			}

  		}

  		// indices

  		result.setIndex( newIndices );

  		return result;

  	}

  	/**
  	 * @param {BufferGeometry} geometry
  	 * @param {number} drawMode
  	 * @return {BufferGeometry>}
  	 */
  	static toTrianglesDrawMode( geometry, drawMode ) {

  		if ( drawMode === three$1.TrianglesDrawMode ) {

  			console.warn( 'THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.' );
  			return geometry;

  		}

  		if ( drawMode === three$1.TriangleFanDrawMode || drawMode === three$1.TriangleStripDrawMode ) {

  			let index = geometry.getIndex();

  			// generate index if not present

  			if ( index === null ) {

  				const indices = [];

  				const position = geometry.getAttribute( 'position' );

  				if ( position !== undefined ) {

  					for ( let i = 0; i < position.count; i ++ ) {

  						indices.push( i );

  					}

  					geometry.setIndex( indices );
  					index = geometry.getIndex();

  				} else {

  					console.error( 'THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.' );
  					return geometry;

  				}

  			}

  			//

  			const numberOfTriangles = index.count - 2;
  			const newIndices = [];

  			if ( drawMode === three$1.TriangleFanDrawMode ) {

  				// gl.TRIANGLE_FAN

  				for ( let i = 1; i <= numberOfTriangles; i ++ ) {

  					newIndices.push( index.getX( 0 ) );
  					newIndices.push( index.getX( i ) );
  					newIndices.push( index.getX( i + 1 ) );

  				}

  			} else {

  				// gl.TRIANGLE_STRIP

  				for ( let i = 0; i < numberOfTriangles; i ++ ) {

  					if ( i % 2 === 0 ) {

  						newIndices.push( index.getX( i ) );
  						newIndices.push( index.getX( i + 1 ) );
  						newIndices.push( index.getX( i + 2 ) );

  					} else {

  						newIndices.push( index.getX( i + 2 ) );
  						newIndices.push( index.getX( i + 1 ) );
  						newIndices.push( index.getX( i ) );

  					}

  				}

  			}

  			if ( ( newIndices.length / 3 ) !== numberOfTriangles ) {

  				console.error( 'THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.' );

  			}

  			// build final geometry

  			const newGeometry = geometry.clone();
  			newGeometry.setIndex( newIndices );
  			newGeometry.clearGroups();

  			return newGeometry;

  		} else {

  			console.error( 'THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:', drawMode );
  			return geometry;

  		}

  	}

  	/**
  	 * Calculates the morphed attributes of a morphed/skinned BufferGeometry.
  	 * Helpful for Raytracing or Decals.
  	 * @param {Mesh | Line | Points} object An instance of Mesh, Line or Points.
  	 * @return {Object} An Object with original position/normal attributes and morphed ones.
  	 */
  	static computeMorphedAttributes( object ) {

  		if ( object.geometry.isBufferGeometry !== true ) {

  			console.error( 'THREE.BufferGeometryUtils: Geometry is not of type BufferGeometry.' );
  			return null;

  		}

  		const _vA = new three$1.Vector3();
  		const _vB = new three$1.Vector3();
  		const _vC = new three$1.Vector3();

  		const _tempA = new three$1.Vector3();
  		const _tempB = new three$1.Vector3();
  		const _tempC = new three$1.Vector3();

  		const _morphA = new three$1.Vector3();
  		const _morphB = new three$1.Vector3();
  		const _morphC = new three$1.Vector3();

  		function _calculateMorphedAttributeData(
  			object,
  			material,
  			attribute,
  			morphAttribute,
  			morphTargetsRelative,
  			a,
  			b,
  			c,
  			modifiedAttributeArray
  		) {

  			_vA.fromBufferAttribute( attribute, a );
  			_vB.fromBufferAttribute( attribute, b );
  			_vC.fromBufferAttribute( attribute, c );

  			const morphInfluences = object.morphTargetInfluences;

  			if ( material.morphTargets && morphAttribute && morphInfluences ) {

  				_morphA.set( 0, 0, 0 );
  				_morphB.set( 0, 0, 0 );
  				_morphC.set( 0, 0, 0 );

  				for ( let i = 0, il = morphAttribute.length; i < il; i ++ ) {

  					const influence = morphInfluences[ i ];
  					const morph = morphAttribute[ i ];

  					if ( influence === 0 ) continue;

  					_tempA.fromBufferAttribute( morph, a );
  					_tempB.fromBufferAttribute( morph, b );
  					_tempC.fromBufferAttribute( morph, c );

  					if ( morphTargetsRelative ) {

  						_morphA.addScaledVector( _tempA, influence );
  						_morphB.addScaledVector( _tempB, influence );
  						_morphC.addScaledVector( _tempC, influence );

  					} else {

  						_morphA.addScaledVector( _tempA.sub( _vA ), influence );
  						_morphB.addScaledVector( _tempB.sub( _vB ), influence );
  						_morphC.addScaledVector( _tempC.sub( _vC ), influence );

  					}

  				}

  				_vA.add( _morphA );
  				_vB.add( _morphB );
  				_vC.add( _morphC );

  			}

  			if ( object.isSkinnedMesh ) {

  				object.boneTransform( a, _vA );
  				object.boneTransform( b, _vB );
  				object.boneTransform( c, _vC );

  			}

  			modifiedAttributeArray[ a * 3 + 0 ] = _vA.x;
  			modifiedAttributeArray[ a * 3 + 1 ] = _vA.y;
  			modifiedAttributeArray[ a * 3 + 2 ] = _vA.z;
  			modifiedAttributeArray[ b * 3 + 0 ] = _vB.x;
  			modifiedAttributeArray[ b * 3 + 1 ] = _vB.y;
  			modifiedAttributeArray[ b * 3 + 2 ] = _vB.z;
  			modifiedAttributeArray[ c * 3 + 0 ] = _vC.x;
  			modifiedAttributeArray[ c * 3 + 1 ] = _vC.y;
  			modifiedAttributeArray[ c * 3 + 2 ] = _vC.z;

  		}

  		const geometry = object.geometry;
  		const material = object.material;

  		let a, b, c;
  		const index = geometry.index;
  		const positionAttribute = geometry.attributes.position;
  		const morphPosition = geometry.morphAttributes.position;
  		const morphTargetsRelative = geometry.morphTargetsRelative;
  		const normalAttribute = geometry.attributes.normal;
  		const morphNormal = geometry.morphAttributes.position;

  		const groups = geometry.groups;
  		const drawRange = geometry.drawRange;
  		let i, j, il, jl;
  		let group, groupMaterial;
  		let start, end;

  		const modifiedPosition = new Float32Array( positionAttribute.count * positionAttribute.itemSize );
  		const modifiedNormal = new Float32Array( normalAttribute.count * normalAttribute.itemSize );

  		if ( index !== null ) {

  			// indexed buffer geometry

  			if ( Array.isArray( material ) ) {

  				for ( i = 0, il = groups.length; i < il; i ++ ) {

  					group = groups[ i ];
  					groupMaterial = material[ group.materialIndex ];

  					start = Math.max( group.start, drawRange.start );
  					end = Math.min( ( group.start + group.count ), ( drawRange.start + drawRange.count ) );

  					for ( j = start, jl = end; j < jl; j += 3 ) {

  						a = index.getX( j );
  						b = index.getX( j + 1 );
  						c = index.getX( j + 2 );

  						_calculateMorphedAttributeData(
  							object,
  							groupMaterial,
  							positionAttribute,
  							morphPosition,
  							morphTargetsRelative,
  							a, b, c,
  							modifiedPosition
  						);

  						_calculateMorphedAttributeData(
  							object,
  							groupMaterial,
  							normalAttribute,
  							morphNormal,
  							morphTargetsRelative,
  							a, b, c,
  							modifiedNormal
  						);

  					}

  				}

  			} else {

  				start = Math.max( 0, drawRange.start );
  				end = Math.min( index.count, ( drawRange.start + drawRange.count ) );

  				for ( i = start, il = end; i < il; i += 3 ) {

  					a = index.getX( i );
  					b = index.getX( i + 1 );
  					c = index.getX( i + 2 );

  					_calculateMorphedAttributeData(
  						object,
  						material,
  						positionAttribute,
  						morphPosition,
  						morphTargetsRelative,
  						a, b, c,
  						modifiedPosition
  					);

  					_calculateMorphedAttributeData(
  						object,
  						material,
  						normalAttribute,
  						morphNormal,
  						morphTargetsRelative,
  						a, b, c,
  						modifiedNormal
  					);

  				}

  			}

  		} else if ( positionAttribute !== undefined ) {

  			// non-indexed buffer geometry

  			if ( Array.isArray( material ) ) {

  				for ( i = 0, il = groups.length; i < il; i ++ ) {

  					group = groups[ i ];
  					groupMaterial = material[ group.materialIndex ];

  					start = Math.max( group.start, drawRange.start );
  					end = Math.min( ( group.start + group.count ), ( drawRange.start + drawRange.count ) );

  					for ( j = start, jl = end; j < jl; j += 3 ) {

  						a = j;
  						b = j + 1;
  						c = j + 2;

  						_calculateMorphedAttributeData(
  							object,
  							groupMaterial,
  							positionAttribute,
  							morphPosition,
  							morphTargetsRelative,
  							a, b, c,
  							modifiedPosition
  						);

  						_calculateMorphedAttributeData(
  							object,
  							groupMaterial,
  							normalAttribute,
  							morphNormal,
  							morphTargetsRelative,
  							a, b, c,
  							modifiedNormal
  						);

  					}

  				}

  			} else {

  				start = Math.max( 0, drawRange.start );
  				end = Math.min( positionAttribute.count, ( drawRange.start + drawRange.count ) );

  				for ( i = start, il = end; i < il; i += 3 ) {

  					a = i;
  					b = i + 1;
  					c = i + 2;

  					_calculateMorphedAttributeData(
  						object,
  						material,
  						positionAttribute,
  						morphPosition,
  						morphTargetsRelative,
  						a, b, c,
  						modifiedPosition
  					);

  					_calculateMorphedAttributeData(
  						object,
  						material,
  						normalAttribute,
  						morphNormal,
  						morphTargetsRelative,
  						a, b, c,
  						modifiedNormal
  					);

  				}

  			}

  		}

  		const morphedPositionAttribute = new three$1.Float32BufferAttribute( modifiedPosition, 3 );
  		const morphedNormalAttribute = new three$1.Float32BufferAttribute( modifiedNormal, 3 );

  		return {

  			positionAttribute: positionAttribute,
  			normalAttribute: normalAttribute,
  			morphedPositionAttribute: morphedPositionAttribute,
  			morphedNormalAttribute: morphedNormalAttribute

  		};

  	}

  }

  var index$1 = (function (p) {
    return p instanceof Function ? p // fn
    : typeof p === 'string' ? function (obj) {
      return obj[p];
    } // property name
    : function (obj) {
      return p;
    };
  }); // constant

  var tinycolor = {exports: {}};

  (function (module) {
  // TinyColor v1.4.2
  // https://github.com/bgrins/TinyColor
  // Brian Grinstead, MIT License

  (function(Math) {

  var trimLeft = /^\s+/,
      trimRight = /\s+$/,
      tinyCounter = 0,
      mathRound = Math.round,
      mathMin = Math.min,
      mathMax = Math.max,
      mathRandom = Math.random;

  function tinycolor (color, opts) {

      color = (color) ? color : '';
      opts = opts || { };

      // If input is already a tinycolor, return itself
      if (color instanceof tinycolor) {
         return color;
      }
      // If we are called as a function, call using new instead
      if (!(this instanceof tinycolor)) {
          return new tinycolor(color, opts);
      }

      var rgb = inputToRGB(color);
      this._originalInput = color,
      this._r = rgb.r,
      this._g = rgb.g,
      this._b = rgb.b,
      this._a = rgb.a,
      this._roundA = mathRound(100*this._a) / 100,
      this._format = opts.format || rgb.format;
      this._gradientType = opts.gradientType;

      // Don't let the range of [0,255] come back in [0,1].
      // Potentially lose a little bit of precision here, but will fix issues where
      // .5 gets interpreted as half of the total, instead of half of 1
      // If it was supposed to be 128, this was already taken care of by `inputToRgb`
      if (this._r < 1) { this._r = mathRound(this._r); }
      if (this._g < 1) { this._g = mathRound(this._g); }
      if (this._b < 1) { this._b = mathRound(this._b); }

      this._ok = rgb.ok;
      this._tc_id = tinyCounter++;
  }

  tinycolor.prototype = {
      isDark: function() {
          return this.getBrightness() < 128;
      },
      isLight: function() {
          return !this.isDark();
      },
      isValid: function() {
          return this._ok;
      },
      getOriginalInput: function() {
        return this._originalInput;
      },
      getFormat: function() {
          return this._format;
      },
      getAlpha: function() {
          return this._a;
      },
      getBrightness: function() {
          //http://www.w3.org/TR/AERT#color-contrast
          var rgb = this.toRgb();
          return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
      },
      getLuminance: function() {
          //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
          var rgb = this.toRgb();
          var RsRGB, GsRGB, BsRGB, R, G, B;
          RsRGB = rgb.r/255;
          GsRGB = rgb.g/255;
          BsRGB = rgb.b/255;

          if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
          if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
          if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
          return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
      },
      setAlpha: function(value) {
          this._a = boundAlpha(value);
          this._roundA = mathRound(100*this._a) / 100;
          return this;
      },
      toHsv: function() {
          var hsv = rgbToHsv(this._r, this._g, this._b);
          return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
      },
      toHsvString: function() {
          var hsv = rgbToHsv(this._r, this._g, this._b);
          var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
          return (this._a == 1) ?
            "hsv("  + h + ", " + s + "%, " + v + "%)" :
            "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
      },
      toHsl: function() {
          var hsl = rgbToHsl(this._r, this._g, this._b);
          return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
      },
      toHslString: function() {
          var hsl = rgbToHsl(this._r, this._g, this._b);
          var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
          return (this._a == 1) ?
            "hsl("  + h + ", " + s + "%, " + l + "%)" :
            "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
      },
      toHex: function(allow3Char) {
          return rgbToHex(this._r, this._g, this._b, allow3Char);
      },
      toHexString: function(allow3Char) {
          return '#' + this.toHex(allow3Char);
      },
      toHex8: function(allow4Char) {
          return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
      },
      toHex8String: function(allow4Char) {
          return '#' + this.toHex8(allow4Char);
      },
      toRgb: function() {
          return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
      },
      toRgbString: function() {
          return (this._a == 1) ?
            "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
            "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
      },
      toPercentageRgb: function() {
          return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
      },
      toPercentageRgbString: function() {
          return (this._a == 1) ?
            "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
            "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
      },
      toName: function() {
          if (this._a === 0) {
              return "transparent";
          }

          if (this._a < 1) {
              return false;
          }

          return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
      },
      toFilter: function(secondColor) {
          var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
          var secondHex8String = hex8String;
          var gradientType = this._gradientType ? "GradientType = 1, " : "";

          if (secondColor) {
              var s = tinycolor(secondColor);
              secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
          }

          return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
      },
      toString: function(format) {
          var formatSet = !!format;
          format = format || this._format;

          var formattedString = false;
          var hasAlpha = this._a < 1 && this._a >= 0;
          var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

          if (needsAlphaFormat) {
              // Special case for "transparent", all other non-alpha formats
              // will return rgba when there is transparency.
              if (format === "name" && this._a === 0) {
                  return this.toName();
              }
              return this.toRgbString();
          }
          if (format === "rgb") {
              formattedString = this.toRgbString();
          }
          if (format === "prgb") {
              formattedString = this.toPercentageRgbString();
          }
          if (format === "hex" || format === "hex6") {
              formattedString = this.toHexString();
          }
          if (format === "hex3") {
              formattedString = this.toHexString(true);
          }
          if (format === "hex4") {
              formattedString = this.toHex8String(true);
          }
          if (format === "hex8") {
              formattedString = this.toHex8String();
          }
          if (format === "name") {
              formattedString = this.toName();
          }
          if (format === "hsl") {
              formattedString = this.toHslString();
          }
          if (format === "hsv") {
              formattedString = this.toHsvString();
          }

          return formattedString || this.toHexString();
      },
      clone: function() {
          return tinycolor(this.toString());
      },

      _applyModification: function(fn, args) {
          var color = fn.apply(null, [this].concat([].slice.call(args)));
          this._r = color._r;
          this._g = color._g;
          this._b = color._b;
          this.setAlpha(color._a);
          return this;
      },
      lighten: function() {
          return this._applyModification(lighten, arguments);
      },
      brighten: function() {
          return this._applyModification(brighten, arguments);
      },
      darken: function() {
          return this._applyModification(darken, arguments);
      },
      desaturate: function() {
          return this._applyModification(desaturate, arguments);
      },
      saturate: function() {
          return this._applyModification(saturate, arguments);
      },
      greyscale: function() {
          return this._applyModification(greyscale, arguments);
      },
      spin: function() {
          return this._applyModification(spin, arguments);
      },

      _applyCombination: function(fn, args) {
          return fn.apply(null, [this].concat([].slice.call(args)));
      },
      analogous: function() {
          return this._applyCombination(analogous, arguments);
      },
      complement: function() {
          return this._applyCombination(complement, arguments);
      },
      monochromatic: function() {
          return this._applyCombination(monochromatic, arguments);
      },
      splitcomplement: function() {
          return this._applyCombination(splitcomplement, arguments);
      },
      triad: function() {
          return this._applyCombination(triad, arguments);
      },
      tetrad: function() {
          return this._applyCombination(tetrad, arguments);
      }
  };

  // If input is an object, force 1 into "1.0" to handle ratios properly
  // String input requires "1.0" as input, so 1 will be treated as 1
  tinycolor.fromRatio = function(color, opts) {
      if (typeof color == "object") {
          var newColor = {};
          for (var i in color) {
              if (color.hasOwnProperty(i)) {
                  if (i === "a") {
                      newColor[i] = color[i];
                  }
                  else {
                      newColor[i] = convertToPercentage(color[i]);
                  }
              }
          }
          color = newColor;
      }

      return tinycolor(color, opts);
  };

  // Given a string or object, convert that input to RGB
  // Possible string inputs:
  //
  //     "red"
  //     "#f00" or "f00"
  //     "#ff0000" or "ff0000"
  //     "#ff000000" or "ff000000"
  //     "rgb 255 0 0" or "rgb (255, 0, 0)"
  //     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
  //     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
  //     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
  //     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
  //     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
  //     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
  //
  function inputToRGB(color) {

      var rgb = { r: 0, g: 0, b: 0 };
      var a = 1;
      var s = null;
      var v = null;
      var l = null;
      var ok = false;
      var format = false;

      if (typeof color == "string") {
          color = stringInputToObject(color);
      }

      if (typeof color == "object") {
          if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
              rgb = rgbToRgb(color.r, color.g, color.b);
              ok = true;
              format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
          }
          else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
              s = convertToPercentage(color.s);
              v = convertToPercentage(color.v);
              rgb = hsvToRgb(color.h, s, v);
              ok = true;
              format = "hsv";
          }
          else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
              s = convertToPercentage(color.s);
              l = convertToPercentage(color.l);
              rgb = hslToRgb(color.h, s, l);
              ok = true;
              format = "hsl";
          }

          if (color.hasOwnProperty("a")) {
              a = color.a;
          }
      }

      a = boundAlpha(a);

      return {
          ok: ok,
          format: color.format || format,
          r: mathMin(255, mathMax(rgb.r, 0)),
          g: mathMin(255, mathMax(rgb.g, 0)),
          b: mathMin(255, mathMax(rgb.b, 0)),
          a: a
      };
  }


  // Conversion Functions
  // --------------------

  // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
  // <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

  // `rgbToRgb`
  // Handle bounds / percentage checking to conform to CSS color spec
  // <http://www.w3.org/TR/css3-color/>
  // *Assumes:* r, g, b in [0, 255] or [0, 1]
  // *Returns:* { r, g, b } in [0, 255]
  function rgbToRgb(r, g, b){
      return {
          r: bound01(r, 255) * 255,
          g: bound01(g, 255) * 255,
          b: bound01(b, 255) * 255
      };
  }

  // `rgbToHsl`
  // Converts an RGB color value to HSL.
  // *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
  // *Returns:* { h, s, l } in [0,1]
  function rgbToHsl(r, g, b) {

      r = bound01(r, 255);
      g = bound01(g, 255);
      b = bound01(b, 255);

      var max = mathMax(r, g, b), min = mathMin(r, g, b);
      var h, s, l = (max + min) / 2;

      if(max == min) {
          h = s = 0; // achromatic
      }
      else {
          var d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch(max) {
              case r: h = (g - b) / d + (g < b ? 6 : 0); break;
              case g: h = (b - r) / d + 2; break;
              case b: h = (r - g) / d + 4; break;
          }

          h /= 6;
      }

      return { h: h, s: s, l: l };
  }

  // `hslToRgb`
  // Converts an HSL color value to RGB.
  // *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
  // *Returns:* { r, g, b } in the set [0, 255]
  function hslToRgb(h, s, l) {
      var r, g, b;

      h = bound01(h, 360);
      s = bound01(s, 100);
      l = bound01(l, 100);

      function hue2rgb(p, q, t) {
          if(t < 0) t += 1;
          if(t > 1) t -= 1;
          if(t < 1/6) return p + (q - p) * 6 * t;
          if(t < 1/2) return q;
          if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
          return p;
      }

      if(s === 0) {
          r = g = b = l; // achromatic
      }
      else {
          var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          var p = 2 * l - q;
          r = hue2rgb(p, q, h + 1/3);
          g = hue2rgb(p, q, h);
          b = hue2rgb(p, q, h - 1/3);
      }

      return { r: r * 255, g: g * 255, b: b * 255 };
  }

  // `rgbToHsv`
  // Converts an RGB color value to HSV
  // *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
  // *Returns:* { h, s, v } in [0,1]
  function rgbToHsv(r, g, b) {

      r = bound01(r, 255);
      g = bound01(g, 255);
      b = bound01(b, 255);

      var max = mathMax(r, g, b), min = mathMin(r, g, b);
      var h, s, v = max;

      var d = max - min;
      s = max === 0 ? 0 : d / max;

      if(max == min) {
          h = 0; // achromatic
      }
      else {
          switch(max) {
              case r: h = (g - b) / d + (g < b ? 6 : 0); break;
              case g: h = (b - r) / d + 2; break;
              case b: h = (r - g) / d + 4; break;
          }
          h /= 6;
      }
      return { h: h, s: s, v: v };
  }

  // `hsvToRgb`
  // Converts an HSV color value to RGB.
  // *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
  // *Returns:* { r, g, b } in the set [0, 255]
   function hsvToRgb(h, s, v) {

      h = bound01(h, 360) * 6;
      s = bound01(s, 100);
      v = bound01(v, 100);

      var i = Math.floor(h),
          f = h - i,
          p = v * (1 - s),
          q = v * (1 - f * s),
          t = v * (1 - (1 - f) * s),
          mod = i % 6,
          r = [v, q, p, p, t, v][mod],
          g = [t, v, v, q, p, p][mod],
          b = [p, p, t, v, v, q][mod];

      return { r: r * 255, g: g * 255, b: b * 255 };
  }

  // `rgbToHex`
  // Converts an RGB color to hex
  // Assumes r, g, and b are contained in the set [0, 255]
  // Returns a 3 or 6 character hex
  function rgbToHex(r, g, b, allow3Char) {

      var hex = [
          pad2(mathRound(r).toString(16)),
          pad2(mathRound(g).toString(16)),
          pad2(mathRound(b).toString(16))
      ];

      // Return a 3 character hex if possible
      if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
          return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
      }

      return hex.join("");
  }

  // `rgbaToHex`
  // Converts an RGBA color plus alpha transparency to hex
  // Assumes r, g, b are contained in the set [0, 255] and
  // a in [0, 1]. Returns a 4 or 8 character rgba hex
  function rgbaToHex(r, g, b, a, allow4Char) {

      var hex = [
          pad2(mathRound(r).toString(16)),
          pad2(mathRound(g).toString(16)),
          pad2(mathRound(b).toString(16)),
          pad2(convertDecimalToHex(a))
      ];

      // Return a 4 character hex if possible
      if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
          return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
      }

      return hex.join("");
  }

  // `rgbaToArgbHex`
  // Converts an RGBA color to an ARGB Hex8 string
  // Rarely used, but required for "toFilter()"
  function rgbaToArgbHex(r, g, b, a) {

      var hex = [
          pad2(convertDecimalToHex(a)),
          pad2(mathRound(r).toString(16)),
          pad2(mathRound(g).toString(16)),
          pad2(mathRound(b).toString(16))
      ];

      return hex.join("");
  }

  // `equals`
  // Can be called with any tinycolor input
  tinycolor.equals = function (color1, color2) {
      if (!color1 || !color2) { return false; }
      return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
  };

  tinycolor.random = function() {
      return tinycolor.fromRatio({
          r: mathRandom(),
          g: mathRandom(),
          b: mathRandom()
      });
  };


  // Modification Functions
  // ----------------------
  // Thanks to less.js for some of the basics here
  // <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

  function desaturate(color, amount) {
      amount = (amount === 0) ? 0 : (amount || 10);
      var hsl = tinycolor(color).toHsl();
      hsl.s -= amount / 100;
      hsl.s = clamp01(hsl.s);
      return tinycolor(hsl);
  }

  function saturate(color, amount) {
      amount = (amount === 0) ? 0 : (amount || 10);
      var hsl = tinycolor(color).toHsl();
      hsl.s += amount / 100;
      hsl.s = clamp01(hsl.s);
      return tinycolor(hsl);
  }

  function greyscale(color) {
      return tinycolor(color).desaturate(100);
  }

  function lighten (color, amount) {
      amount = (amount === 0) ? 0 : (amount || 10);
      var hsl = tinycolor(color).toHsl();
      hsl.l += amount / 100;
      hsl.l = clamp01(hsl.l);
      return tinycolor(hsl);
  }

  function brighten(color, amount) {
      amount = (amount === 0) ? 0 : (amount || 10);
      var rgb = tinycolor(color).toRgb();
      rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
      rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
      rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
      return tinycolor(rgb);
  }

  function darken (color, amount) {
      amount = (amount === 0) ? 0 : (amount || 10);
      var hsl = tinycolor(color).toHsl();
      hsl.l -= amount / 100;
      hsl.l = clamp01(hsl.l);
      return tinycolor(hsl);
  }

  // Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
  // Values outside of this range will be wrapped into this range.
  function spin(color, amount) {
      var hsl = tinycolor(color).toHsl();
      var hue = (hsl.h + amount) % 360;
      hsl.h = hue < 0 ? 360 + hue : hue;
      return tinycolor(hsl);
  }

  // Combination Functions
  // ---------------------
  // Thanks to jQuery xColor for some of the ideas behind these
  // <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

  function complement(color) {
      var hsl = tinycolor(color).toHsl();
      hsl.h = (hsl.h + 180) % 360;
      return tinycolor(hsl);
  }

  function triad(color) {
      var hsl = tinycolor(color).toHsl();
      var h = hsl.h;
      return [
          tinycolor(color),
          tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
          tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
      ];
  }

  function tetrad(color) {
      var hsl = tinycolor(color).toHsl();
      var h = hsl.h;
      return [
          tinycolor(color),
          tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
          tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
          tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
      ];
  }

  function splitcomplement(color) {
      var hsl = tinycolor(color).toHsl();
      var h = hsl.h;
      return [
          tinycolor(color),
          tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
          tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
      ];
  }

  function analogous(color, results, slices) {
      results = results || 6;
      slices = slices || 30;

      var hsl = tinycolor(color).toHsl();
      var part = 360 / slices;
      var ret = [tinycolor(color)];

      for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
          hsl.h = (hsl.h + part) % 360;
          ret.push(tinycolor(hsl));
      }
      return ret;
  }

  function monochromatic(color, results) {
      results = results || 6;
      var hsv = tinycolor(color).toHsv();
      var h = hsv.h, s = hsv.s, v = hsv.v;
      var ret = [];
      var modification = 1 / results;

      while (results--) {
          ret.push(tinycolor({ h: h, s: s, v: v}));
          v = (v + modification) % 1;
      }

      return ret;
  }

  // Utility Functions
  // ---------------------

  tinycolor.mix = function(color1, color2, amount) {
      amount = (amount === 0) ? 0 : (amount || 50);

      var rgb1 = tinycolor(color1).toRgb();
      var rgb2 = tinycolor(color2).toRgb();

      var p = amount / 100;

      var rgba = {
          r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
          g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
          b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
          a: ((rgb2.a - rgb1.a) * p) + rgb1.a
      };

      return tinycolor(rgba);
  };


  // Readability Functions
  // ---------------------
  // <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

  // `contrast`
  // Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
  tinycolor.readability = function(color1, color2) {
      var c1 = tinycolor(color1);
      var c2 = tinycolor(color2);
      return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
  };

  // `isReadable`
  // Ensure that foreground and background color combinations meet WCAG2 guidelines.
  // The third argument is an optional Object.
  //      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
  //      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
  // If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

  // *Example*
  //    tinycolor.isReadable("#000", "#111") => false
  //    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
  tinycolor.isReadable = function(color1, color2, wcag2) {
      var readability = tinycolor.readability(color1, color2);
      var wcag2Parms, out;

      out = false;

      wcag2Parms = validateWCAG2Parms(wcag2);
      switch (wcag2Parms.level + wcag2Parms.size) {
          case "AAsmall":
          case "AAAlarge":
              out = readability >= 4.5;
              break;
          case "AAlarge":
              out = readability >= 3;
              break;
          case "AAAsmall":
              out = readability >= 7;
              break;
      }
      return out;

  };

  // `mostReadable`
  // Given a base color and a list of possible foreground or background
  // colors for that base, returns the most readable color.
  // Optionally returns Black or White if the most readable color is unreadable.
  // *Example*
  //    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
  //    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
  //    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
  //    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
  tinycolor.mostReadable = function(baseColor, colorList, args) {
      var bestColor = null;
      var bestScore = 0;
      var readability;
      var includeFallbackColors, level, size ;
      args = args || {};
      includeFallbackColors = args.includeFallbackColors ;
      level = args.level;
      size = args.size;

      for (var i= 0; i < colorList.length ; i++) {
          readability = tinycolor.readability(baseColor, colorList[i]);
          if (readability > bestScore) {
              bestScore = readability;
              bestColor = tinycolor(colorList[i]);
          }
      }

      if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
          return bestColor;
      }
      else {
          args.includeFallbackColors=false;
          return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
      }
  };


  // Big List of Colors
  // ------------------
  // <http://www.w3.org/TR/css3-color/#svg-color>
  var names = tinycolor.names = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "0ff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000",
      blanchedalmond: "ffebcd",
      blue: "00f",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      burntsienna: "ea7e5d",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "0ff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkgrey: "a9a9a9",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkslategrey: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dimgrey: "696969",
      dodgerblue: "1e90ff",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "f0f",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      grey: "808080",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgray: "d3d3d3",
      lightgreen: "90ee90",
      lightgrey: "d3d3d3",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslategray: "789",
      lightslategrey: "789",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "0f0",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "f0f",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370db",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "db7093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "663399",
      red: "f00",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      slategrey: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      wheat: "f5deb3",
      white: "fff",
      whitesmoke: "f5f5f5",
      yellow: "ff0",
      yellowgreen: "9acd32"
  };

  // Make it easy to access colors via `hexNames[hex]`
  var hexNames = tinycolor.hexNames = flip(names);


  // Utilities
  // ---------

  // `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
  function flip(o) {
      var flipped = { };
      for (var i in o) {
          if (o.hasOwnProperty(i)) {
              flipped[o[i]] = i;
          }
      }
      return flipped;
  }

  // Return a valid alpha value [0,1] with all invalid values being set to 1
  function boundAlpha(a) {
      a = parseFloat(a);

      if (isNaN(a) || a < 0 || a > 1) {
          a = 1;
      }

      return a;
  }

  // Take input from [0, n] and return it as [0, 1]
  function bound01(n, max) {
      if (isOnePointZero(n)) { n = "100%"; }

      var processPercent = isPercentage(n);
      n = mathMin(max, mathMax(0, parseFloat(n)));

      // Automatically convert percentage into number
      if (processPercent) {
          n = parseInt(n * max, 10) / 100;
      }

      // Handle floating point rounding errors
      if ((Math.abs(n - max) < 0.000001)) {
          return 1;
      }

      // Convert into [0, 1] range if it isn't already
      return (n % max) / parseFloat(max);
  }

  // Force a number between 0 and 1
  function clamp01(val) {
      return mathMin(1, mathMax(0, val));
  }

  // Parse a base-16 hex value into a base-10 integer
  function parseIntFromHex(val) {
      return parseInt(val, 16);
  }

  // Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
  // <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
  function isOnePointZero(n) {
      return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
  }

  // Check to see if string passed in is a percentage
  function isPercentage(n) {
      return typeof n === "string" && n.indexOf('%') != -1;
  }

  // Force a hex value to have 2 characters
  function pad2(c) {
      return c.length == 1 ? '0' + c : '' + c;
  }

  // Replace a decimal with it's percentage value
  function convertToPercentage(n) {
      if (n <= 1) {
          n = (n * 100) + "%";
      }

      return n;
  }

  // Converts a decimal to a hex value
  function convertDecimalToHex(d) {
      return Math.round(parseFloat(d) * 255).toString(16);
  }
  // Converts a hex value to a decimal
  function convertHexToDecimal(h) {
      return (parseIntFromHex(h) / 255);
  }

  var matchers = (function() {

      // <http://www.w3.org/TR/css3-values/#integers>
      var CSS_INTEGER = "[-\\+]?\\d+%?";

      // <http://www.w3.org/TR/css3-values/#number-value>
      var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

      // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
      var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

      // Actual matching.
      // Parentheses and commas are optional, but not required.
      // Whitespace can take the place of commas or opening paren
      var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
      var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

      return {
          CSS_UNIT: new RegExp(CSS_UNIT),
          rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
          rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
          hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
          hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
          hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
          hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
      };
  })();

  // `isValidCSSUnit`
  // Take in a single string / number and check to see if it looks like a CSS unit
  // (see `matchers` above for definition).
  function isValidCSSUnit(color) {
      return !!matchers.CSS_UNIT.exec(color);
  }

  // `stringInputToObject`
  // Permissive string parsing.  Take in a number of formats, and output an object
  // based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
  function stringInputToObject(color) {

      color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
      var named = false;
      if (names[color]) {
          color = names[color];
          named = true;
      }
      else if (color == 'transparent') {
          return { r: 0, g: 0, b: 0, a: 0, format: "name" };
      }

      // Try to match string input using regular expressions.
      // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
      // Just return an object and let the conversion functions handle that.
      // This way the result will be the same whether the tinycolor is initialized with string or object.
      var match;
      if ((match = matchers.rgb.exec(color))) {
          return { r: match[1], g: match[2], b: match[3] };
      }
      if ((match = matchers.rgba.exec(color))) {
          return { r: match[1], g: match[2], b: match[3], a: match[4] };
      }
      if ((match = matchers.hsl.exec(color))) {
          return { h: match[1], s: match[2], l: match[3] };
      }
      if ((match = matchers.hsla.exec(color))) {
          return { h: match[1], s: match[2], l: match[3], a: match[4] };
      }
      if ((match = matchers.hsv.exec(color))) {
          return { h: match[1], s: match[2], v: match[3] };
      }
      if ((match = matchers.hsva.exec(color))) {
          return { h: match[1], s: match[2], v: match[3], a: match[4] };
      }
      if ((match = matchers.hex8.exec(color))) {
          return {
              r: parseIntFromHex(match[1]),
              g: parseIntFromHex(match[2]),
              b: parseIntFromHex(match[3]),
              a: convertHexToDecimal(match[4]),
              format: named ? "name" : "hex8"
          };
      }
      if ((match = matchers.hex6.exec(color))) {
          return {
              r: parseIntFromHex(match[1]),
              g: parseIntFromHex(match[2]),
              b: parseIntFromHex(match[3]),
              format: named ? "name" : "hex"
          };
      }
      if ((match = matchers.hex4.exec(color))) {
          return {
              r: parseIntFromHex(match[1] + '' + match[1]),
              g: parseIntFromHex(match[2] + '' + match[2]),
              b: parseIntFromHex(match[3] + '' + match[3]),
              a: convertHexToDecimal(match[4] + '' + match[4]),
              format: named ? "name" : "hex8"
          };
      }
      if ((match = matchers.hex3.exec(color))) {
          return {
              r: parseIntFromHex(match[1] + '' + match[1]),
              g: parseIntFromHex(match[2] + '' + match[2]),
              b: parseIntFromHex(match[3] + '' + match[3]),
              format: named ? "name" : "hex"
          };
      }

      return false;
  }

  function validateWCAG2Parms(parms) {
      // return valid WCAG2 parms for isReadable.
      // If input parms are invalid, return {"level":"AA", "size":"small"}
      var level, size;
      parms = parms || {"level":"AA", "size":"small"};
      level = (parms.level || "AA").toUpperCase();
      size = (parms.size || "small").toLowerCase();
      if (level !== "AA" && level !== "AAA") {
          level = "AA";
      }
      if (size !== "small" && size !== "large") {
          size = "small";
      }
      return {"level":level, "size":size};
  }

  // Node: Export function
  if (module.exports) {
      module.exports = tinycolor;
  }
  // AMD/requirejs: Define the module
  else {
      window.tinycolor = tinycolor;
  }

  })(Math);
  }(tinycolor));

  var tinyColor = tinycolor.exports;

  var colorStr2Hex = function colorStr2Hex(str) {
    return isNaN(str) ? parseInt(tinyColor(str).toHex(), 16) : str;
  };

  var colorAlpha = function colorAlpha(str) {
    return isNaN(str) ? tinyColor(str).getAlpha() : 1;
  };

  var color2ShaderArr = function color2ShaderArr(str) {
    var includeAlpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var rgba = tinyColor(str).toRgb();
    var rgbArr = ['r', 'g', 'b'].map(function (d) {
      return rgba[d] / 255;
    });
    return includeAlpha ? [].concat(_toConsumableArray$3(rgbArr), [rgba.a]) : rgbArr;
  };

  function _objectWithoutPropertiesLoose$1(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties$1(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose$1(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _slicedToArray$2(arr, i) {
    return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$2();
  }

  function _toConsumableArray$2(arr) {
    return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread$2();
  }

  function _arrayWithoutHoles$2(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$2(arr);
  }

  function _arrayWithHoles$2(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray$2(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit$2(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray$2(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
  }

  function _arrayLikeToArray$2(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread$2() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest$2() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];

    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }

    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");

    return typeof key === "symbol" ? key : String(key);
  }

  var index = (function () {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var keyAccessors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var multiItem = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var flattenKeys = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var keys = (keyAccessors instanceof Array ? keyAccessors.length ? keyAccessors : [undefined] : [keyAccessors]).map(function (key) {
      return {
        keyAccessor: key,
        isProp: !(key instanceof Function)
      };
    });
    var indexedResult = list.reduce(function (res, item) {
      var iterObj = res;
      var itemVal = item;
      keys.forEach(function (_ref, idx) {
        var keyAccessor = _ref.keyAccessor,
            isProp = _ref.isProp;
        var key;

        if (isProp) {
          var _itemVal = itemVal,
              propVal = _itemVal[keyAccessor],
              rest = _objectWithoutProperties$1(_itemVal, [keyAccessor].map(_toPropertyKey));

          key = propVal;
          itemVal = rest;
        } else {
          key = keyAccessor(itemVal, idx);
        }

        if (idx + 1 < keys.length) {
          if (!iterObj.hasOwnProperty(key)) {
            iterObj[key] = {};
          }

          iterObj = iterObj[key];
        } else {
          // Leaf key
          if (multiItem) {
            if (!iterObj.hasOwnProperty(key)) {
              iterObj[key] = [];
            }

            iterObj[key].push(itemVal);
          } else {
            iterObj[key] = itemVal;
          }
        }
      });
      return res;
    }, {});

    if (multiItem instanceof Function) {
      // Reduce leaf multiple values
      (function reduce(node) {
        var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        if (level === keys.length) {
          Object.keys(node).forEach(function (k) {
            return node[k] = multiItem(node[k]);
          });
        } else {
          Object.values(node).forEach(function (child) {
            return reduce(child, level + 1);
          });
        }
      })(indexedResult); // IIFE

    }

    var result = indexedResult;

    if (flattenKeys) {
      // flatten into array
      result = [];

      (function flatten(node) {
        var accKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        if (accKeys.length === keys.length) {
          result.push({
            keys: accKeys,
            vals: node
          });
        } else {
          Object.entries(node).forEach(function (_ref2) {
            var _ref3 = _slicedToArray$2(_ref2, 2),
                key = _ref3[0],
                val = _ref3[1];

            return flatten(val, [].concat(_toConsumableArray$2(accKeys), [key]));
          });
        }
      })(indexedResult); //IIFE


      if (keyAccessors instanceof Array && keyAccessors.length === 0 && result.length === 1) {
        // clear keys if there's no key accessors (single result)
        result[0].keys = [];
      }
    }

    return result;
  });

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

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

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _slicedToArray$1(arr, i) {
    return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
  }

  function _toConsumableArray$1(arr) {
    return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1();
  }

  function _arrayWithoutHoles$1(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
  }

  function _arrayWithHoles$1(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray$1(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit$1(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray$1(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
  }

  function _arrayLikeToArray$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread$1() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest$1() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function diffArrays(prev, next, idAccessor) {
    var result = {
      enter: [],
      update: [],
      exit: []
    };

    if (!idAccessor) {
      // use object references for comparison
      var prevSet = new Set(prev);
      var nextSet = new Set(next);
      new Set([].concat(_toConsumableArray$1(prevSet), _toConsumableArray$1(nextSet))).forEach(function (item) {
        var type = !prevSet.has(item) ? 'enter' : !nextSet.has(item) ? 'exit' : 'update';
        result[type].push(type === 'update' ? [item, item] : item);
      });
    } else {
      // compare by id (duplicate keys are ignored)
      var prevById = index(prev, idAccessor, false);
      var nextById = index(next, idAccessor, false);
      var byId = Object.assign({}, prevById, nextById);
      Object.entries(byId).forEach(function (_ref) {
        var _ref2 = _slicedToArray$1(_ref, 2),
            id = _ref2[0],
            item = _ref2[1];

        var type = !prevById.hasOwnProperty(id) ? 'enter' : !nextById.hasOwnProperty(id) ? 'exit' : 'update';
        result[type].push(type === 'update' ? [prevById[id], nextById[id]] : item);
      });
    }

    return result;
  }

  function dataBindDiff(data, existingObjs, _ref3) {
    var _ref3$objBindAttr = _ref3.objBindAttr,
        objBindAttr = _ref3$objBindAttr === void 0 ? '__obj' : _ref3$objBindAttr,
        _ref3$dataBindAttr = _ref3.dataBindAttr,
        dataBindAttr = _ref3$dataBindAttr === void 0 ? '__data' : _ref3$dataBindAttr,
        idAccessor = _ref3.idAccessor,
        _ref3$purge = _ref3.purge,
        purge = _ref3$purge === void 0 ? false : _ref3$purge;

    var isObjValid = function isObjValid(obj) {
      return obj.hasOwnProperty(dataBindAttr);
    };

    var removeObjs = existingObjs.filter(function (obj) {
      return !isObjValid(obj);
    });
    var prevD = existingObjs.filter(isObjValid).map(function (obj) {
      return obj[dataBindAttr];
    });
    var nextD = data;
    var diff = purge ? {
      enter: nextD,
      exit: prevD,
      update: []
    } // don't diff data in purge mode
    : diffArrays(prevD, nextD, idAccessor);
    diff.update = diff.update.map(function (_ref4) {
      var _ref5 = _slicedToArray$1(_ref4, 2),
          prevD = _ref5[0],
          nextD = _ref5[1];

      if (prevD !== nextD) {
        // transfer obj to new data point (if different)
        nextD[objBindAttr] = prevD[objBindAttr];
        nextD[objBindAttr][dataBindAttr] = nextD;
      }

      return nextD;
    });
    diff.exit = diff.exit.concat(removeObjs.map(function (obj) {
      return _defineProperty({}, objBindAttr, obj);
    }));
    return diff;
  }

  function viewDigest(data, existingObjs, // list
  appendObj, // item => {...} function
  removeObj, // item => {...} function
  _ref7) {
    var _ref7$createObj = _ref7.createObj,
        createObj = _ref7$createObj === void 0 ? function (d) {
      return {};
    } : _ref7$createObj,
        _ref7$updateObj = _ref7.updateObj,
        updateObj = _ref7$updateObj === void 0 ? function (obj, d) {} : _ref7$updateObj,
        _ref7$exitObj = _ref7.exitObj,
        exitObj = _ref7$exitObj === void 0 ? function (obj) {} : _ref7$exitObj,
        _ref7$objBindAttr = _ref7.objBindAttr,
        objBindAttr = _ref7$objBindAttr === void 0 ? '__obj' : _ref7$objBindAttr,
        _ref7$dataBindAttr = _ref7.dataBindAttr,
        dataBindAttr = _ref7$dataBindAttr === void 0 ? '__data' : _ref7$dataBindAttr,
        dataDiffOptions = _objectWithoutProperties(_ref7, ["createObj", "updateObj", "exitObj", "objBindAttr", "dataBindAttr"]);

    var _dataBindDiff = dataBindDiff(data, existingObjs, _objectSpread2({
      objBindAttr: objBindAttr,
      dataBindAttr: dataBindAttr
    }, dataDiffOptions)),
        enter = _dataBindDiff.enter,
        update = _dataBindDiff.update,
        exit = _dataBindDiff.exit; // Remove exiting points


    exit.forEach(function (d) {
      var obj = d[objBindAttr];
      delete d[objBindAttr]; // unbind obj

      exitObj(obj);
      removeObj(obj);
    });
    var newObjs = createObjs(enter);
    var pointsData = [].concat(_toConsumableArray$1(enter), _toConsumableArray$1(update));
    updateObjs(pointsData); // Add new points

    newObjs.forEach(appendObj); //

    function createObjs(data) {
      var newObjs = [];
      data.forEach(function (d) {
        var obj = createObj(d);

        if (obj) {
          obj[dataBindAttr] = d;
          d[objBindAttr] = obj;
          newObjs.push(obj);
        }
      });
      return newObjs;
    }

    function updateObjs(data) {
      data.forEach(function (d) {
        var obj = d[objBindAttr];

        if (obj) {
          obj[dataBindAttr] = d;
          updateObj(obj, d);
        }
      });
    }
  }

  function threeDigest(data, scene) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return viewDigest(data, scene.children, function (obj) {
      return scene.add(obj);
    }, function (obj) {
      scene.remove(obj);
      emptyObject(obj);
      obj.hasOwnProperty('__data') && delete obj.__data.__currentTargetD;
    }, _objectSpread2$1({
      objBindAttr: '__threeObj'
    }, options));
  }

  var THREE$b = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    BufferAttribute: three$1.BufferAttribute,
    BufferGeometry: three$1.BufferGeometry,
    Color: three$1.Color,
    CylinderBufferGeometry: three$1.CylinderBufferGeometry,
    Matrix4: three$1.Matrix4,
    Mesh: three$1.Mesh,
    MeshBasicMaterial: three$1.MeshBasicMaterial,
    MeshLambertMaterial: three$1.MeshLambertMaterial,
    Object3D: three$1.Object3D,
    Vector3: three$1.Vector3
  };
  // support multiple method names for backwards threejs compatibility

  var applyMatrix4Fn$1 = new THREE$b.BufferGeometry().applyMatrix4 ? 'applyMatrix4' : 'applyMatrix';
  var PointsLayerKapsule = index$2({
    props: {
      pointsData: {
        "default": []
      },
      pointLat: {
        "default": 'lat'
      },
      pointLng: {
        "default": 'lng'
      },
      pointColor: {
        "default": function _default() {
          return '#ffffaa';
        }
      },
      pointAltitude: {
        "default": 0.1
      },
      // in units of globe radius
      pointRadius: {
        "default": 0.25
      },
      // in deg
      pointResolution: {
        "default": 12,
        triggerUpdate: false
      },
      // how many slice segments in the cylinder's circumference
      pointsMerge: {
        "default": false
      },
      // boolean. Whether to merge all points into a single mesh for rendering performance
      pointsTransitionDuration: {
        "default": 1000,
        triggerUpdate: false
      } // ms

    },
    init: function init(threeObj, state) {
      // Clear the scene
      emptyObject(threeObj); // Main three object to manipulate

      state.scene = threeObj;
    },
    update: function update(state) {
      // Data accessors
      var latAccessor = index$1(state.pointLat);
      var lngAccessor = index$1(state.pointLng);
      var altitudeAccessor = index$1(state.pointAltitude);
      var radiusAccessor = index$1(state.pointRadius);
      var colorAccessor = index$1(state.pointColor); // shared geometry

      var pointGeometry = new THREE$b.CylinderBufferGeometry(1, 1, 1, state.pointResolution);
      pointGeometry[applyMatrix4Fn$1](new THREE$b.Matrix4().makeRotationX(Math.PI / 2));
      pointGeometry[applyMatrix4Fn$1](new THREE$b.Matrix4().makeTranslation(0, 0, -0.5));
      var pxPerDeg = 2 * Math.PI * GLOBE_RADIUS / 360;
      var pointMaterials = {}; // indexed by color

      var scene = state.pointsMerge ? new THREE$b.Object3D() : state.scene; // use fake scene if merging points

      threeDigest(state.pointsData, scene, {
        createObj: createObj,
        updateObj: updateObj
      });

      if (state.pointsMerge) {
        // merge points into a single mesh
        var pointsGeometry = !state.pointsData.length ? new THREE$b.BufferGeometry() : BufferGeometryUtils.mergeBufferGeometries(state.pointsData.map(function (d) {
          var obj = d.__threeObj;
          d.__threeObj = undefined; // unbind merged points

          var geom = obj.geometry.clone(); // apply mesh world transform to vertices

          obj.updateMatrix();
          geom[applyMatrix4Fn$1](obj.matrix); // color vertices

          var color = new THREE$b.Color(colorAccessor(d));
          var nVertices = geom.attributes.position.count;
          var colors = new Float32Array(nVertices * 3);

          for (var i = 0, len = nVertices; i < len; i++) {
            var idx = i * 3;
            colors[idx] = color.r;
            colors[idx + 1] = color.g;
            colors[idx + 2] = color.b;
          }

          geom.setAttribute('color', new THREE$b.BufferAttribute(colors, 3));
          return geom;
        }));
        var points = new THREE$b.Mesh(pointsGeometry, new THREE$b.MeshBasicMaterial({
          color: 0xffffff,
          vertexColors: true,
          morphTargets: false
        }));
        points.__globeObjType = 'points'; // Add object type

        points.__data = state.pointsData; // Attach obj data

        emptyObject(state.scene);
        state.scene.add(points);
      } //


      function createObj() {
        var obj = new THREE$b.Mesh(pointGeometry);
        obj.__globeObjType = 'point'; // Add object type

        return obj;
      }

      function updateObj(obj, d) {
        var applyUpdate = function applyUpdate(td) {
          var _obj$__currentTargetD = obj.__currentTargetD = td,
              r = _obj$__currentTargetD.r,
              alt = _obj$__currentTargetD.alt,
              lat = _obj$__currentTargetD.lat,
              lng = _obj$__currentTargetD.lng; // position cylinder ground


          Object.assign(obj.position, polar2Cartesian$2(lat, lng)); // orientate outwards

          var globeCenter = state.pointsMerge ? new THREE$b.Vector3(0, 0, 0) : state.scene.localToWorld(new THREE$b.Vector3(0, 0, 0)); // translate from local to world coords

          obj.lookAt(globeCenter); // scale radius and altitude

          obj.scale.x = obj.scale.y = Math.min(30, r) * pxPerDeg;
          obj.scale.z = Math.max(alt * GLOBE_RADIUS, 0.1); // avoid non-invertible matrix
        };

        var targetD = {
          alt: +altitudeAccessor(d),
          r: +radiusAccessor(d),
          lat: +latAccessor(d),
          lng: +lngAccessor(d)
        };
        var currentTargetD = obj.__currentTargetD || Object.assign({}, targetD, {
          alt: -1e-3
        });

        if (Object.keys(targetD).some(function (k) {
          return currentTargetD[k] !== targetD[k];
        })) {
          if (state.pointsMerge || !state.pointsTransitionDuration || state.pointsTransitionDuration < 0) {
            // set final position
            applyUpdate(targetD);
          } else {
            // animate
            new exports$1.Tween(currentTargetD).to(targetD, state.pointsTransitionDuration).easing(exports$1.Easing.Quadratic.InOut).onUpdate(applyUpdate).start();
          }
        }

        if (!state.pointsMerge) {
          // Update materials on individual points
          var color = colorAccessor(d);
          var opacity = colorAlpha(color);

          if (!pointMaterials.hasOwnProperty(color)) {
            pointMaterials[color] = new THREE$b.MeshLambertMaterial({
              color: colorStr2Hex(color),
              transparent: opacity < 1,
              opacity: opacity
            });
          }

          obj.material = pointMaterials[color];
        }
      }
    }
  });

  var FrameTicker$1 = {exports: {}};

  (function (module, exports) {
  !function(e,t){module.exports=t();}(commonjsGlobal,function(){return function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t,i){var n=i(1),r=function(){function e(e,t,i){void 0===e&&(e=NaN),void 0===t&&(t=NaN),void 0===i&&(i=!1),this._minFPS=t,this._maxFPS=e,this._timeScale=1,this._currentTick=0,this._currentTime=0,this._tickDeltaTime=0,this._isRunning=!1,this._maxInterval=isNaN(this._minFPS)?NaN:1e3/this._minFPS,this._minInterval=isNaN(this._maxFPS)?NaN:1e3/this._maxFPS,this._onResume=new n.default,this._onPause=new n.default,this._onTick=new n.default,this._onTickOncePerFrame=new n.default,i||this.resume();}return e.prototype.updateOnce=function(e){e(this.currentTimeSeconds,this.tickDeltaTimeSeconds,this.currentTick);},e.prototype.resume=function(){this._isRunning||(this._isRunning=!0,this._lastTimeUpdated=this.getTimer(),this._onResume.dispatch(),this.animateOnce());},e.prototype.pause=function(){this._isRunning&&(this._isRunning=!1,this._onPause.dispatch(),window.cancelAnimationFrame(this._animationFrameHandle));},e.prototype.dispose=function(){this.pause(),this._onResume.removeAll(),this._onPause.removeAll(),this._onTick.removeAll();},Object.defineProperty(e.prototype,"currentTick",{get:function(){return this._currentTick},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"currentTimeSeconds",{get:function(){return this._currentTime/1e3},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"tickDeltaTimeSeconds",{get:function(){return this._tickDeltaTime/1e3},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"timeScale",{get:function(){return this._timeScale},set:function(e){this._timeScale!==e&&(this._timeScale=e);},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onResume",{get:function(){return this._onResume},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onPause",{get:function(){return this._onPause},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onTick",{get:function(){return this._onTick},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onTickOncePerFrame",{get:function(){return this._onTickOncePerFrame},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isRunning",{get:function(){return this._isRunning},enumerable:!0,configurable:!0}),e.prototype.animateOnce=function(){var e=this;this._animationFrameHandle=window.requestAnimationFrame(function(){return e.onFrame()});},e.prototype.onFrame=function(){if(this._now=this.getTimer(),this._frameDeltaTime=this._now-this._lastTimeUpdated,isNaN(this._minInterval)||this._frameDeltaTime>=this._minInterval)if(isNaN(this._maxInterval))this.update(this._frameDeltaTime*this._timeScale,!0),this._lastTimeUpdated=this._now;else for(this._interval=Math.min(this._frameDeltaTime,this._maxInterval);this._now>=this._lastTimeUpdated+this._interval;)this.update(this._interval*this._timeScale,this._now<=this._lastTimeUpdated+2*this._maxInterval),this._lastTimeUpdated+=this._interval;this._isRunning&&this.animateOnce();},e.prototype.update=function(e,t){void 0===t&&(t=!0),this._currentTick++,this._currentTime+=e,this._tickDeltaTime=e,this._onTick.dispatch(this.currentTimeSeconds,this.tickDeltaTimeSeconds,this.currentTick),t&&this._onTickOncePerFrame.dispatch(this.currentTimeSeconds,this.tickDeltaTimeSeconds,this.currentTick);},e.prototype.getTimer=function(){return Date.now()},e}();Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;},function(e,t,i){!function(t,i){e.exports=i();}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t){var i=function(){function e(){this.functions=[];}return e.prototype.add=function(e){return this.functions.indexOf(e)===-1&&(this.functions.push(e),!0)},e.prototype.remove=function(e){var t=this.functions.indexOf(e);return t>-1&&(this.functions.splice(t,1),!0)},e.prototype.removeAll=function(){return this.functions.length>0&&(this.functions.length=0,!0)},e.prototype.dispatch=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=this.functions.concat();i.forEach(function(t){t.apply(void 0,e);});},Object.defineProperty(e.prototype,"numItems",{get:function(){return this.functions.length},enumerable:!0,configurable:!0}),e}();Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;}])});}])});
  }(FrameTicker$1));

  var FrameTicker = /*@__PURE__*/getDefaultExportFromCjs(FrameTicker$1.exports);

  function initRange(domain, range) {
    switch (arguments.length) {
      case 0: break;
      case 1: this.range(domain); break;
      default: this.range(range).domain(domain); break;
    }
    return this;
  }

  function define$1(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  }

  function extend$1(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition) prototype[key] = definition[key];
    return prototype;
  }

  function Color$1() {}

  var darker$1 = 0.7;
  var brighter$1 = 1 / darker$1;

  var reI$1 = "\\s*([+-]?\\d+)\\s*",
      reN$1 = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      reP$1 = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      reHex$1 = /^#([0-9a-f]{3,8})$/,
      reRgbInteger$1 = new RegExp("^rgb\\(" + [reI$1, reI$1, reI$1] + "\\)$"),
      reRgbPercent$1 = new RegExp("^rgb\\(" + [reP$1, reP$1, reP$1] + "\\)$"),
      reRgbaInteger$1 = new RegExp("^rgba\\(" + [reI$1, reI$1, reI$1, reN$1] + "\\)$"),
      reRgbaPercent$1 = new RegExp("^rgba\\(" + [reP$1, reP$1, reP$1, reN$1] + "\\)$"),
      reHslPercent$1 = new RegExp("^hsl\\(" + [reN$1, reP$1, reP$1] + "\\)$"),
      reHslaPercent$1 = new RegExp("^hsla\\(" + [reN$1, reP$1, reP$1, reN$1] + "\\)$");

  var named$1 = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
  };

  define$1(Color$1, color$1, {
    copy: function(channels) {
      return Object.assign(new this.constructor, this, channels);
    },
    displayable: function() {
      return this.rgb().displayable();
    },
    hex: color_formatHex$1, // Deprecated! Use color.formatHex.
    formatHex: color_formatHex$1,
    formatHsl: color_formatHsl$1,
    formatRgb: color_formatRgb$1,
    toString: color_formatRgb$1
  });

  function color_formatHex$1() {
    return this.rgb().formatHex();
  }

  function color_formatHsl$1() {
    return hslConvert$1(this).formatHsl();
  }

  function color_formatRgb$1() {
    return this.rgb().formatRgb();
  }

  function color$1(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex$1.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn$1(m) // #ff0000
        : l === 3 ? new Rgb$1((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
        : l === 8 ? rgba$1(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
        : l === 4 ? rgba$1((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
        : null) // invalid hex
        : (m = reRgbInteger$1.exec(format)) ? new Rgb$1(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
        : (m = reRgbPercent$1.exec(format)) ? new Rgb$1(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
        : (m = reRgbaInteger$1.exec(format)) ? rgba$1(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
        : (m = reRgbaPercent$1.exec(format)) ? rgba$1(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
        : (m = reHslPercent$1.exec(format)) ? hsla$1(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
        : (m = reHslaPercent$1.exec(format)) ? hsla$1(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
        : named$1.hasOwnProperty(format) ? rgbn$1(named$1[format]) // eslint-disable-line no-prototype-builtins
        : format === "transparent" ? new Rgb$1(NaN, NaN, NaN, 0)
        : null;
  }

  function rgbn$1(n) {
    return new Rgb$1(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
  }

  function rgba$1(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb$1(r, g, b, a);
  }

  function rgbConvert$1(o) {
    if (!(o instanceof Color$1)) o = color$1(o);
    if (!o) return new Rgb$1;
    o = o.rgb();
    return new Rgb$1(o.r, o.g, o.b, o.opacity);
  }

  function rgb$2(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert$1(r) : new Rgb$1(r, g, b, opacity == null ? 1 : opacity);
  }

  function Rgb$1(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
  }

  define$1(Rgb$1, rgb$2, extend$1(Color$1, {
    brighter: function(k) {
      k = k == null ? brighter$1 : Math.pow(brighter$1, k);
      return new Rgb$1(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function(k) {
      k = k == null ? darker$1 : Math.pow(darker$1, k);
      return new Rgb$1(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function() {
      return this;
    },
    displayable: function() {
      return (-0.5 <= this.r && this.r < 255.5)
          && (-0.5 <= this.g && this.g < 255.5)
          && (-0.5 <= this.b && this.b < 255.5)
          && (0 <= this.opacity && this.opacity <= 1);
    },
    hex: rgb_formatHex$1, // Deprecated! Use color.formatHex.
    formatHex: rgb_formatHex$1,
    formatRgb: rgb_formatRgb$1,
    toString: rgb_formatRgb$1
  }));

  function rgb_formatHex$1() {
    return "#" + hex$1(this.r) + hex$1(this.g) + hex$1(this.b);
  }

  function rgb_formatRgb$1() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }

  function hex$1(value) {
    value = Math.max(0, Math.min(255, Math.round(value) || 0));
    return (value < 16 ? "0" : "") + value.toString(16);
  }

  function hsla$1(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new Hsl$1(h, s, l, a);
  }

  function hslConvert$1(o) {
    if (o instanceof Hsl$1) return new Hsl$1(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color$1)) o = color$1(o);
    if (!o) return new Hsl$1;
    if (o instanceof Hsl$1) return o;
    o = o.rgb();
    var r = o.r / 255,
        g = o.g / 255,
        b = o.b / 255,
        min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        h = NaN,
        s = max - min,
        l = (max + min) / 2;
    if (s) {
      if (r === max) h = (g - b) / s + (g < b) * 6;
      else if (g === max) h = (b - r) / s + 2;
      else h = (r - g) / s + 4;
      s /= l < 0.5 ? max + min : 2 - max - min;
      h *= 60;
    } else {
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl$1(h, s, l, o.opacity);
  }

  function hsl$1(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert$1(h) : new Hsl$1(h, s, l, opacity == null ? 1 : opacity);
  }

  function Hsl$1(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
  }

  define$1(Hsl$1, hsl$1, extend$1(Color$1, {
    brighter: function(k) {
      k = k == null ? brighter$1 : Math.pow(brighter$1, k);
      return new Hsl$1(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function(k) {
      k = k == null ? darker$1 : Math.pow(darker$1, k);
      return new Hsl$1(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function() {
      var h = this.h % 360 + (this.h < 0) * 360,
          s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
          l = this.l,
          m2 = l + (l < 0.5 ? l : 1 - l) * s,
          m1 = 2 * l - m2;
      return new Rgb$1(
        hsl2rgb$1(h >= 240 ? h - 240 : h + 120, m1, m2),
        hsl2rgb$1(h, m1, m2),
        hsl2rgb$1(h < 120 ? h + 240 : h - 120, m1, m2),
        this.opacity
      );
    },
    displayable: function() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s))
          && (0 <= this.l && this.l <= 1)
          && (0 <= this.opacity && this.opacity <= 1);
    },
    formatHsl: function() {
      var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
      return (a === 1 ? "hsl(" : "hsla(")
          + (this.h || 0) + ", "
          + (this.s || 0) * 100 + "%, "
          + (this.l || 0) * 100 + "%"
          + (a === 1 ? ")" : ", " + a + ")");
    }
  }));

  /* From FvD 13.37, CSS Color Module Level 3 */
  function hsl2rgb$1(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60
        : h < 180 ? m2
        : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
        : m1) * 255;
  }

  var constant$1 = x => () => x;

  function linear$2(a, d) {
    return function(t) {
      return a + t * d;
    };
  }

  function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
      return Math.pow(a + t * b, y);
    };
  }

  function gamma(y) {
    return (y = +y) === 1 ? nogamma$1 : function(a, b) {
      return b - a ? exponential(a, b, y) : constant$1(isNaN(a) ? b : a);
    };
  }

  function nogamma$1(a, b) {
    var d = b - a;
    return d ? linear$2(a, d) : constant$1(isNaN(a) ? b : a);
  }

  var rgb$1 = (function rgbGamma(y) {
    var color = gamma(y);

    function rgb(start, end) {
      var r = color((start = rgb$2(start)).r, (end = rgb$2(end)).r),
          g = color(start.g, end.g),
          b = color(start.b, end.b),
          opacity = nogamma$1(start.opacity, end.opacity);
      return function(t) {
        start.r = r(t);
        start.g = g(t);
        start.b = b(t);
        start.opacity = opacity(t);
        return start + "";
      };
    }

    rgb.gamma = rgbGamma;

    return rgb;
  })(1);

  function numberArray(a, b) {
    if (!b) b = [];
    var n = a ? Math.min(b.length, a.length) : 0,
        c = b.slice(),
        i;
    return function(t) {
      for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
      return c;
    };
  }

  function isNumberArray(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
  }

  function interpolateArray(a, b) {
    return (isNumberArray(b) ? numberArray : genericArray)(a, b);
  }

  function genericArray(a, b) {
    var nb = b ? b.length : 0,
        na = a ? Math.min(nb, a.length) : 0,
        x = new Array(na),
        c = new Array(nb),
        i;

    for (i = 0; i < na; ++i) x[i] = interpolate(a[i], b[i]);
    for (; i < nb; ++i) c[i] = b[i];

    return function(t) {
      for (i = 0; i < na; ++i) c[i] = x[i](t);
      return c;
    };
  }

  function date(a, b) {
    var d = new Date;
    return a = +a, b = +b, function(t) {
      return d.setTime(a * (1 - t) + b * t), d;
    };
  }

  function interpolateNumber(a, b) {
    return a = +a, b = +b, function(t) {
      return a * (1 - t) + b * t;
    };
  }

  function object$1(a, b) {
    var i = {},
        c = {},
        k;

    if (a === null || typeof a !== "object") a = {};
    if (b === null || typeof b !== "object") b = {};

    for (k in b) {
      if (k in a) {
        i[k] = interpolate(a[k], b[k]);
      } else {
        c[k] = b[k];
      }
    }

    return function(t) {
      for (k in i) c[k] = i[k](t);
      return c;
    };
  }

  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      reB = new RegExp(reA.source, "g");

  function zero(b) {
    return function() {
      return b;
    };
  }

  function one(b) {
    return function(t) {
      return b(t) + "";
    };
  }

  function string(a, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
        am, // current match in a
        bm, // current match in b
        bs, // string preceding current number in b, if any
        i = -1, // index in s
        s = [], // string constants and placeholders
        q = []; // number interpolators

    // Coerce inputs to strings.
    a = a + "", b = b + "";

    // Interpolate pairs of numbers in a & b.
    while ((am = reA.exec(a))
        && (bm = reB.exec(b))) {
      if ((bs = bm.index) > bi) { // a string precedes the next number in b
        bs = b.slice(bi, bs);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
        if (s[i]) s[i] += bm; // coalesce with previous string
        else s[++i] = bm;
      } else { // interpolate non-matching numbers
        s[++i] = null;
        q.push({i: i, x: interpolateNumber(am, bm)});
      }
      bi = reB.lastIndex;
    }

    // Add remains of b.
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }

    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? (q[0]
        ? one(q[0].x)
        : zero(b))
        : (b = q.length, function(t) {
            for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
            return s.join("");
          });
  }

  function interpolate(a, b) {
    var t = typeof b, c;
    return b == null || t === "boolean" ? constant$1(b)
        : (t === "number" ? interpolateNumber
        : t === "string" ? ((c = color$1(b)) ? (b = c, rgb$1) : string)
        : b instanceof color$1 ? rgb$1
        : b instanceof Date ? date
        : isNumberArray(b) ? numberArray
        : Array.isArray(b) ? genericArray
        : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object$1
        : interpolateNumber)(a, b);
  }

  function interpolateRound(a, b) {
    return a = +a, b = +b, function(t) {
      return Math.round(a * (1 - t) + b * t);
    };
  }

  function constants(x) {
    return function() {
      return x;
    };
  }

  function number(x) {
    return +x;
  }

  var unit = [0, 1];

  function identity$2(x) {
    return x;
  }

  function normalize(a, b) {
    return (b -= (a = +a))
        ? function(x) { return (x - a) / b; }
        : constants(isNaN(b) ? NaN : 0.5);
  }

  function clamper(a, b) {
    var t;
    if (a > b) t = a, a = b, b = t;
    return function(x) { return Math.max(a, Math.min(b, x)); };
  }

  // normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
  // interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
  function bimap(domain, range, interpolate) {
    var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
    if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
    else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
    return function(x) { return r0(d0(x)); };
  }

  function polymap(domain, range, interpolate) {
    var j = Math.min(domain.length, range.length) - 1,
        d = new Array(j),
        r = new Array(j),
        i = -1;

    // Reverse descending domains.
    if (domain[j] < domain[0]) {
      domain = domain.slice().reverse();
      range = range.slice().reverse();
    }

    while (++i < j) {
      d[i] = normalize(domain[i], domain[i + 1]);
      r[i] = interpolate(range[i], range[i + 1]);
    }

    return function(x) {
      var i = bisectRight(domain, x, 1, j) - 1;
      return r[i](d[i](x));
    };
  }

  function copy(source, target) {
    return target
        .domain(source.domain())
        .range(source.range())
        .interpolate(source.interpolate())
        .clamp(source.clamp())
        .unknown(source.unknown());
  }

  function transformer$1() {
    var domain = unit,
        range = unit,
        interpolate$1 = interpolate,
        transform,
        untransform,
        unknown,
        clamp = identity$2,
        piecewise,
        output,
        input;

    function rescale() {
      var n = Math.min(domain.length, range.length);
      if (clamp !== identity$2) clamp = clamper(domain[0], domain[n - 1]);
      piecewise = n > 2 ? polymap : bimap;
      output = input = null;
      return scale;
    }

    function scale(x) {
      return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate$1)))(transform(clamp(x)));
    }

    scale.invert = function(y) {
      return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber)))(y)));
    };

    scale.domain = function(_) {
      return arguments.length ? (domain = Array.from(_, number), rescale()) : domain.slice();
    };

    scale.range = function(_) {
      return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
    };

    scale.rangeRound = function(_) {
      return range = Array.from(_), interpolate$1 = interpolateRound, rescale();
    };

    scale.clamp = function(_) {
      return arguments.length ? (clamp = _ ? true : identity$2, rescale()) : clamp !== identity$2;
    };

    scale.interpolate = function(_) {
      return arguments.length ? (interpolate$1 = _, rescale()) : interpolate$1;
    };

    scale.unknown = function(_) {
      return arguments.length ? (unknown = _, scale) : unknown;
    };

    return function(t, u) {
      transform = t, untransform = u;
      return rescale();
    };
  }

  function continuous() {
    return transformer$1()(identity$2, identity$2);
  }

  function formatDecimal(x) {
    return Math.abs(x = Math.round(x)) >= 1e21
        ? x.toLocaleString("en").replace(/,/g, "")
        : x.toString(10);
  }

  // Computes the decimal coefficient and exponent of the specified number x with
  // significant digits p, where x is positive and p is in [1, 21] or undefined.
  // For example, formatDecimalParts(1.23) returns ["123", 0].
  function formatDecimalParts(x, p) {
    if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
    var i, coefficient = x.slice(0, i);

    // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
    // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
    return [
      coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
      +x.slice(i + 1)
    ];
  }

  function exponent(x) {
    return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
  }

  function formatGroup(grouping, thousands) {
    return function(value, width) {
      var i = value.length,
          t = [],
          j = 0,
          g = grouping[0],
          length = 0;

      while (i > 0 && g > 0) {
        if (length + g + 1 > width) g = Math.max(1, width - length);
        t.push(value.substring(i -= g, i + g));
        if ((length += g + 1) > width) break;
        g = grouping[j = (j + 1) % grouping.length];
      }

      return t.reverse().join(thousands);
    };
  }

  function formatNumerals(numerals) {
    return function(value) {
      return value.replace(/[0-9]/g, function(i) {
        return numerals[+i];
      });
    };
  }

  // [[fill]align][sign][symbol][0][width][,][.precision][~][type]
  var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

  function formatSpecifier(specifier) {
    if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
    var match;
    return new FormatSpecifier({
      fill: match[1],
      align: match[2],
      sign: match[3],
      symbol: match[4],
      zero: match[5],
      width: match[6],
      comma: match[7],
      precision: match[8] && match[8].slice(1),
      trim: match[9],
      type: match[10]
    });
  }

  formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

  function FormatSpecifier(specifier) {
    this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
    this.align = specifier.align === undefined ? ">" : specifier.align + "";
    this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
    this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
    this.zero = !!specifier.zero;
    this.width = specifier.width === undefined ? undefined : +specifier.width;
    this.comma = !!specifier.comma;
    this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
    this.trim = !!specifier.trim;
    this.type = specifier.type === undefined ? "" : specifier.type + "";
  }

  FormatSpecifier.prototype.toString = function() {
    return this.fill
        + this.align
        + this.sign
        + this.symbol
        + (this.zero ? "0" : "")
        + (this.width === undefined ? "" : Math.max(1, this.width | 0))
        + (this.comma ? "," : "")
        + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
        + (this.trim ? "~" : "")
        + this.type;
  };

  // Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
  function formatTrim(s) {
    out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
      switch (s[i]) {
        case ".": i0 = i1 = i; break;
        case "0": if (i0 === 0) i0 = i; i1 = i; break;
        default: if (!+s[i]) break out; if (i0 > 0) i0 = 0; break;
      }
    }
    return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
  }

  var prefixExponent;

  function formatPrefixAuto(x, p) {
    var d = formatDecimalParts(x, p);
    if (!d) return x + "";
    var coefficient = d[0],
        exponent = d[1],
        i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
        n = coefficient.length;
    return i === n ? coefficient
        : i > n ? coefficient + new Array(i - n + 1).join("0")
        : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
        : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0]; // less than 1y!
  }

  function formatRounded(x, p) {
    var d = formatDecimalParts(x, p);
    if (!d) return x + "";
    var coefficient = d[0],
        exponent = d[1];
    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
        : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
        : coefficient + new Array(exponent - coefficient.length + 2).join("0");
  }

  var formatTypes = {
    "%": (x, p) => (x * 100).toFixed(p),
    "b": (x) => Math.round(x).toString(2),
    "c": (x) => x + "",
    "d": formatDecimal,
    "e": (x, p) => x.toExponential(p),
    "f": (x, p) => x.toFixed(p),
    "g": (x, p) => x.toPrecision(p),
    "o": (x) => Math.round(x).toString(8),
    "p": (x, p) => formatRounded(x * 100, p),
    "r": formatRounded,
    "s": formatPrefixAuto,
    "X": (x) => Math.round(x).toString(16).toUpperCase(),
    "x": (x) => Math.round(x).toString(16)
  };

  function identity$1(x) {
    return x;
  }

  var map$1 = Array.prototype.map,
      prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

  function formatLocale(locale) {
    var group = locale.grouping === undefined || locale.thousands === undefined ? identity$1 : formatGroup(map$1.call(locale.grouping, Number), locale.thousands + ""),
        currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
        currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
        decimal = locale.decimal === undefined ? "." : locale.decimal + "",
        numerals = locale.numerals === undefined ? identity$1 : formatNumerals(map$1.call(locale.numerals, String)),
        percent = locale.percent === undefined ? "%" : locale.percent + "",
        minus = locale.minus === undefined ? "−" : locale.minus + "",
        nan = locale.nan === undefined ? "NaN" : locale.nan + "";

    function newFormat(specifier) {
      specifier = formatSpecifier(specifier);

      var fill = specifier.fill,
          align = specifier.align,
          sign = specifier.sign,
          symbol = specifier.symbol,
          zero = specifier.zero,
          width = specifier.width,
          comma = specifier.comma,
          precision = specifier.precision,
          trim = specifier.trim,
          type = specifier.type;

      // The "n" type is an alias for ",g".
      if (type === "n") comma = true, type = "g";

      // The "" type, and any invalid type, is an alias for ".12~g".
      else if (!formatTypes[type]) precision === undefined && (precision = 12), trim = true, type = "g";

      // If zero fill is specified, padding goes after sign and before digits.
      if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

      // Compute the prefix and suffix.
      // For SI-prefix, the suffix is lazily computed.
      var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
          suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

      // What format function should we use?
      // Is this an integer type?
      // Can this type generate exponential notation?
      var formatType = formatTypes[type],
          maybeSuffix = /[defgprs%]/.test(type);

      // Set the default precision if not specified,
      // or clamp the specified precision to the supported range.
      // For significant precision, it must be in [1, 21].
      // For fixed precision, it must be in [0, 20].
      precision = precision === undefined ? 6
          : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
          : Math.max(0, Math.min(20, precision));

      function format(value) {
        var valuePrefix = prefix,
            valueSuffix = suffix,
            i, n, c;

        if (type === "c") {
          valueSuffix = formatType(value) + valueSuffix;
          value = "";
        } else {
          value = +value;

          // Determine the sign. -0 is not less than 0, but 1 / -0 is!
          var valueNegative = value < 0 || 1 / value < 0;

          // Perform the initial formatting.
          value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

          // Trim insignificant zeros.
          if (trim) value = formatTrim(value);

          // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
          if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;

          // Compute the prefix and suffix.
          valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
          valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

          // Break the formatted value into the integer “value” part that can be
          // grouped, and fractional or exponential “suffix” part that is not.
          if (maybeSuffix) {
            i = -1, n = value.length;
            while (++i < n) {
              if (c = value.charCodeAt(i), 48 > c || c > 57) {
                valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                value = value.slice(0, i);
                break;
              }
            }
          }
        }

        // If the fill character is not "0", grouping is applied before padding.
        if (comma && !zero) value = group(value, Infinity);

        // Compute the padding.
        var length = valuePrefix.length + value.length + valueSuffix.length,
            padding = length < width ? new Array(width - length + 1).join(fill) : "";

        // If the fill character is "0", grouping is applied after padding.
        if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

        // Reconstruct the final output based on the desired alignment.
        switch (align) {
          case "<": value = valuePrefix + value + valueSuffix + padding; break;
          case "=": value = valuePrefix + padding + value + valueSuffix; break;
          case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
          default: value = padding + valuePrefix + value + valueSuffix; break;
        }

        return numerals(value);
      }

      format.toString = function() {
        return specifier + "";
      };

      return format;
    }

    function formatPrefix(specifier, value) {
      var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
          e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
          k = Math.pow(10, -e),
          prefix = prefixes[8 + e / 3];
      return function(value) {
        return f(k * value) + prefix;
      };
    }

    return {
      format: newFormat,
      formatPrefix: formatPrefix
    };
  }

  var locale;
  var format;
  var formatPrefix;

  defaultLocale({
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
  });

  function defaultLocale(definition) {
    locale = formatLocale(definition);
    format = locale.format;
    formatPrefix = locale.formatPrefix;
    return locale;
  }

  function precisionFixed(step) {
    return Math.max(0, -exponent(Math.abs(step)));
  }

  function precisionPrefix(step, value) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
  }

  function precisionRound(step, max) {
    step = Math.abs(step), max = Math.abs(max) - step;
    return Math.max(0, exponent(max) - exponent(step)) + 1;
  }

  function tickFormat(start, stop, count, specifier) {
    var step = tickStep(start, stop, count),
        precision;
    specifier = formatSpecifier(specifier == null ? ",f" : specifier);
    switch (specifier.type) {
      case "s": {
        var value = Math.max(Math.abs(start), Math.abs(stop));
        if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
        return formatPrefix(specifier, value);
      }
      case "":
      case "e":
      case "g":
      case "p":
      case "r": {
        if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
        break;
      }
      case "f":
      case "%": {
        if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
        break;
      }
    }
    return format(specifier);
  }

  function linearish(scale) {
    var domain = scale.domain;

    scale.ticks = function(count) {
      var d = domain();
      return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
    };

    scale.tickFormat = function(count, specifier) {
      var d = domain();
      return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
    };

    scale.nice = function(count) {
      if (count == null) count = 10;

      var d = domain();
      var i0 = 0;
      var i1 = d.length - 1;
      var start = d[i0];
      var stop = d[i1];
      var prestep;
      var step;
      var maxIter = 10;

      if (stop < start) {
        step = start, start = stop, stop = step;
        step = i0, i0 = i1, i1 = step;
      }
      
      while (maxIter-- > 0) {
        step = tickIncrement(start, stop, count);
        if (step === prestep) {
          d[i0] = start;
          d[i1] = stop;
          return domain(d);
        } else if (step > 0) {
          start = Math.floor(start / step) * step;
          stop = Math.ceil(stop / step) * step;
        } else if (step < 0) {
          start = Math.ceil(start * step) / step;
          stop = Math.floor(stop * step) / step;
        } else {
          break;
        }
        prestep = step;
      }

      return scale;
    };

    return scale;
  }

  function linear$1() {
    var scale = continuous();

    scale.copy = function() {
      return copy(scale, linear$1());
    };

    initRange.apply(scale, arguments);

    return linearish(scale);
  }

  var THREE$a = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    BufferGeometry: three$1.BufferGeometry,
    CubicBezierCurve3: three$1.CubicBezierCurve3,
    Curve: three$1.Curve,
    Float32BufferAttribute: three$1.Float32BufferAttribute,
    Group: three$1.Group,
    Line: three$1.Line,
    Mesh: three$1.Mesh,
    NormalBlending: three$1.NormalBlending,
    QuadraticBezierCurve3: three$1.QuadraticBezierCurve3,
    ShaderMaterial: three$1.ShaderMaterial,
    TubeBufferGeometry: three$1.TubeBufferGeometry,
    Vector3: three$1.Vector3
  };
  // support both modes for backwards threejs compatibility

  var setAttributeFn$4 = new THREE$a.BufferGeometry().setAttribute ? 'setAttribute' : 'addAttribute';
  var gradientShaders$1 = {
    uniforms: {
      // dash param defaults, all relative to full length
      dashOffset: {
        value: 0
      },
      dashSize: {
        value: 1
      },
      gapSize: {
        value: 0
      },
      dashTranslate: {
        value: 0
      } // used for animating the dash

    },
    vertexShader: "\n    uniform float dashTranslate; \n\n    attribute vec4 vertexColor;\n    varying vec4 vColor;\n    \n    attribute float vertexRelDistance;\n    varying float vRelDistance;\n\n    void main() {\n      // pass through colors and distances\n      vColor = vertexColor;\n      vRelDistance = vertexRelDistance + dashTranslate;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }\n  ",
    fragmentShader: "\n    uniform float dashOffset; \n    uniform float dashSize;\n    uniform float gapSize; \n    \n    varying vec4 vColor;\n    varying float vRelDistance;\n    \n    void main() {\n      // ignore pixels in the gap\n      if (vRelDistance < dashOffset) discard;\n      if (mod(vRelDistance - dashOffset, dashSize + gapSize) > dashSize) discard;\n    \n      // set px color: [r, g, b, a], interpolated between vertices \n      gl_FragColor = vColor; \n    }\n  "
  };
  var ArcsLayerKapsule = index$2({
    props: {
      arcsData: {
        "default": []
      },
      arcStartLat: {
        "default": 'startLat'
      },
      arcStartLng: {
        "default": 'startLng'
      },
      arcEndLat: {
        "default": 'endLat'
      },
      arcEndLng: {
        "default": 'endLng'
      },
      arcColor: {
        "default": function _default() {
          return '#ffffaa';
        }
      },
      arcAltitude: {},
      // in units of globe radius
      arcAltitudeAutoScale: {
        "default": 0.5
      },
      // scale altitude proportional to great-arc distance between the two points
      arcStroke: {},
      // in deg
      arcCurveResolution: {
        "default": 64,
        triggerUpdate: false
      },
      // how many straight segments in the curve
      arcCircularResolution: {
        "default": 6,
        triggerUpdate: false
      },
      // how many slice segments in the tube's circumference
      arcDashLength: {
        "default": 1
      },
      // in units of line length
      arcDashGap: {
        "default": 0
      },
      arcDashInitialGap: {
        "default": 0
      },
      arcDashAnimateTime: {
        "default": 0
      },
      // ms
      arcsTransitionDuration: {
        "default": 1000,
        triggerUpdate: false
      } // ms

    },
    init: function init(threeObj, state) {
      // Clear the scene
      emptyObject(threeObj); // Main three object to manipulate

      state.scene = threeObj; // Kick-off dash animations

      new FrameTicker().onTick.add(function (_, timeDelta) {
        state.arcsData.filter(function (d) {
          return d.__threeObj && d.__threeObj.children.length && d.__threeObj.children[0].material && d.__threeObj.children[0].__dashAnimateStep;
        }).forEach(function (d) {
          var obj = d.__threeObj.children[0];
          var step = obj.__dashAnimateStep * timeDelta;
          var curTranslate = obj.material.uniforms.dashTranslate.value % 1e9; // reset after 1B loops

          obj.material.uniforms.dashTranslate.value = curTranslate + step;
        });
      });
    },
    update: function update(state) {
      // Data accessors
      var startLatAccessor = index$1(state.arcStartLat);
      var startLngAccessor = index$1(state.arcStartLng);
      var endLatAccessor = index$1(state.arcEndLat);
      var endLngAccessor = index$1(state.arcEndLng);
      var altitudeAccessor = index$1(state.arcAltitude);
      var altitudeAutoScaleAccessor = index$1(state.arcAltitudeAutoScale);
      var strokeAccessor = index$1(state.arcStroke);
      var colorAccessor = index$1(state.arcColor);
      var dashLengthAccessor = index$1(state.arcDashLength);
      var dashGapAccessor = index$1(state.arcDashGap);
      var dashInitialGapAccessor = index$1(state.arcDashInitialGap);
      var dashAnimateTimeAccessor = index$1(state.arcDashAnimateTime);
      var sharedMaterial = new THREE$a.ShaderMaterial(_objectSpread2$1(_objectSpread2$1({}, gradientShaders$1), {}, {
        transparent: true,
        blending: THREE$a.NormalBlending
      }));
      threeDigest(state.arcsData, state.scene, {
        createObj: function createObj() {
          var obj = new THREE$a.Group(); // populated in updateObj

          obj.__globeObjType = 'arc'; // Add object type

          return obj;
        },
        updateObj: function updateObj(group, arc) {
          var stroke = strokeAccessor(arc);
          var useTube = stroke !== null && stroke !== undefined;

          if (!group.children.length || useTube !== (group.children[0].type === 'Mesh')) {
            // create or swap object types
            emptyObject(group);

            var _obj = useTube ? new THREE$a.Mesh() : new THREE$a.Line(new THREE$a.BufferGeometry());

            _obj.material = sharedMaterial.clone(); // Separate material instance per object to have dedicated uniforms (but shared shaders)

            group.add(_obj);
          }

          var obj = group.children[0]; // set dash uniforms

          Object.assign(obj.material.uniforms, {
            dashSize: {
              value: dashLengthAccessor(arc)
            },
            gapSize: {
              value: dashGapAccessor(arc)
            },
            dashOffset: {
              value: dashInitialGapAccessor(arc)
            }
          }); // set dash animation step

          var dashAnimateTime = dashAnimateTimeAccessor(arc);
          obj.__dashAnimateStep = dashAnimateTime > 0 ? 1000 / dashAnimateTime : 0; // per second
          // calculate vertex colors (to create gradient)

          var vertexColorArray = calcColorVertexArray(colorAccessor(arc), // single or array of colors
          state.arcCurveResolution, // numSegments
          useTube ? state.arcCircularResolution + 1 : 1 // num vertices per segment
          ); // calculate vertex relative distances (for dashed lines)

          var vertexRelDistanceArray = calcVertexRelDistances(state.arcCurveResolution, // numSegments
          useTube ? state.arcCircularResolution + 1 : 1, // num vertices per segment
          true // run from end to start, to animate in the correct direction
          );
          obj.geometry[setAttributeFn$4]('vertexColor', vertexColorArray);
          obj.geometry[setAttributeFn$4]('vertexRelDistance', vertexRelDistanceArray);

          var applyUpdate = function applyUpdate(td) {
            var _arc$__currentTargetD = arc.__currentTargetD = td,
                stroke = _arc$__currentTargetD.stroke,
                curveD = _objectWithoutProperties$2(_arc$__currentTargetD, ["stroke"]);

            var curve = calcCurve(curveD);

            if (useTube) {
              obj.geometry && obj.geometry.dispose();
              obj.geometry = new THREE$a.TubeBufferGeometry(curve, state.arcCurveResolution, stroke / 2, state.arcCircularResolution);
              obj.geometry[setAttributeFn$4]('vertexColor', vertexColorArray);
              obj.geometry[setAttributeFn$4]('vertexRelDistance', vertexRelDistanceArray);
            } else {
              obj.geometry.setFromPoints(curve.getPoints(state.arcCurveResolution));
            }
          };

          var targetD = {
            stroke: stroke,
            alt: altitudeAccessor(arc),
            altAutoScale: +altitudeAutoScaleAccessor(arc),
            startLat: +startLatAccessor(arc),
            startLng: +startLngAccessor(arc),
            endLat: +endLatAccessor(arc),
            endLng: +endLngAccessor(arc)
          };
          var currentTargetD = arc.__currentTargetD || Object.assign({}, targetD, {
            altAutoScale: -1e-3
          });

          if (Object.keys(targetD).some(function (k) {
            return currentTargetD[k] !== targetD[k];
          })) {
            if (!state.arcsTransitionDuration || state.arcsTransitionDuration < 0) {
              // set final position
              applyUpdate(targetD);
            } else {
              // animate
              new exports$1.Tween(currentTargetD).to(targetD, state.arcsTransitionDuration).easing(exports$1.Easing.Quadratic.InOut).onUpdate(applyUpdate).start();
            }
          }
        }
      }); //

      function calcCurve(_ref) {
        var alt = _ref.alt,
            altAutoScale = _ref.altAutoScale,
            startLat = _ref.startLat,
            startLng = _ref.startLng,
            endLat = _ref.endLat,
            endLng = _ref.endLng;

        var getVec = function getVec(_ref2) {
          var _ref3 = _slicedToArray$5(_ref2, 3),
              lng = _ref3[0],
              lat = _ref3[1],
              alt = _ref3[2];

          var _polar2Cartesian = polar2Cartesian$2(lat, lng, alt),
              x = _polar2Cartesian.x,
              y = _polar2Cartesian.y,
              z = _polar2Cartesian.z;

          return new THREE$a.Vector3(x, y, z);
        }; //calculate curve


        var startPnt = [startLng, startLat];
        var endPnt = [endLng, endLat];
        var altitude = alt;
        (altitude === null || altitude === undefined) && ( // by default set altitude proportional to the great-arc distance
        altitude = geoDistance$1(startPnt, endPnt) / 2 * altAutoScale);

        if (altitude) {
          var interpolate = geoInterpolate(startPnt, endPnt);

          var _map = [0.25, 0.75].map(function (t) {
            return [].concat(_toConsumableArray$3(interpolate(t)), [altitude * 1.5]);
          }),
              _map2 = _slicedToArray$5(_map, 2),
              m1Pnt = _map2[0],
              m2Pnt = _map2[1];

          var curve = _construct(THREE$a.CubicBezierCurve3, _toConsumableArray$3([startPnt, m1Pnt, m2Pnt, endPnt].map(getVec))); //const mPnt = [...interpolate(0.5), altitude * 2];
          //curve = new THREE.QuadraticBezierCurve3(...[startPnt, mPnt, endPnt].map(getVec));


          return curve;
        } else {
          // ground line
          var _alt = 0.001; // slightly above the ground to prevent occlusion

          return calcSphereArc.apply(void 0, _toConsumableArray$3([[].concat(startPnt, [_alt]), [].concat(endPnt, [_alt])].map(getVec)));
        } //


        function calcSphereArc(startVec, endVec) {
          var angle = startVec.angleTo(endVec);

          var getGreatCirclePoint = function getGreatCirclePoint(t) {
            return new THREE$a.Vector3().addVectors(startVec.clone().multiplyScalar(Math.sin((1 - t) * angle)), endVec.clone().multiplyScalar(Math.sin(t * angle))).divideScalar(Math.sin(angle));
          };

          var sphereArc = new THREE$a.Curve();
          sphereArc.getPoint = getGreatCirclePoint;
          return sphereArc;
        }
      }

      function calcColorVertexArray(colors, numSegments) {
        var numVerticesPerSegment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var numVerticesGroup = numSegments + 1; // one between every two segments and two at the ends

        var getVertexColor;

        if (colors instanceof Array) {
          // array of colors, interpolate at each step
          var colorScale = linear$1().domain(colors.map(function (_, idx) {
            return idx / (colors.length - 1);
          })) // same number of stops as colors
          .range(colors);

          getVertexColor = function getVertexColor(t) {
            return color2ShaderArr(colorScale(t));
          };
        } else {
          // single color, use constant
          var vertexColor = color2ShaderArr(colors);

          getVertexColor = function getVertexColor() {
            return vertexColor;
          };
        }

        var vertexColorArray = new THREE$a.Float32BufferAttribute(numVerticesGroup * 4 * numVerticesPerSegment, 4);

        for (var v = 0, l = numVerticesGroup; v < l; v++) {
          var _vertexColor = getVertexColor(v / (l - 1));

          for (var s = 0; s < numVerticesPerSegment; s++) {
            vertexColorArray.set(_vertexColor, (v * numVerticesPerSegment + s) * 4);
          }
        }

        return vertexColorArray;
      }

      function calcVertexRelDistances(numSegments) {
        var numVerticesPerSegment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var invert = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var numVerticesGroup = numSegments + 1; // one between every two segments and two at the ends

        var arrLen = numVerticesGroup * numVerticesPerSegment;
        var vertexDistanceArray = new THREE$a.Float32BufferAttribute(arrLen, 1);

        for (var v = 0, l = numVerticesGroup; v < l; v++) {
          var relDistance = v / (l - 1);

          for (var s = 0; s < numVerticesPerSegment; s++) {
            var idx = v * numVerticesPerSegment + s;
            var pos = invert ? arrLen - 1 - idx : idx;
            vertexDistanceArray.setX(pos, relDistance);
          }
        }

        return vertexDistanceArray;
      }
    }
  });

  const epsilon$2 = 1.1102230246251565e-16;
  const splitter = 134217729;
  const resulterrbound = (3 + 8 * epsilon$2) * epsilon$2;

  // fast_expansion_sum_zeroelim routine from oritinal code
  function sum$1(elen, e, flen, f, h) {
      let Q, Qnew, hh, bvirt;
      let enow = e[0];
      let fnow = f[0];
      let eindex = 0;
      let findex = 0;
      if ((fnow > enow) === (fnow > -enow)) {
          Q = enow;
          enow = e[++eindex];
      } else {
          Q = fnow;
          fnow = f[++findex];
      }
      let hindex = 0;
      if (eindex < elen && findex < flen) {
          if ((fnow > enow) === (fnow > -enow)) {
              Qnew = enow + Q;
              hh = Q - (Qnew - enow);
              enow = e[++eindex];
          } else {
              Qnew = fnow + Q;
              hh = Q - (Qnew - fnow);
              fnow = f[++findex];
          }
          Q = Qnew;
          if (hh !== 0) {
              h[hindex++] = hh;
          }
          while (eindex < elen && findex < flen) {
              if ((fnow > enow) === (fnow > -enow)) {
                  Qnew = Q + enow;
                  bvirt = Qnew - Q;
                  hh = Q - (Qnew - bvirt) + (enow - bvirt);
                  enow = e[++eindex];
              } else {
                  Qnew = Q + fnow;
                  bvirt = Qnew - Q;
                  hh = Q - (Qnew - bvirt) + (fnow - bvirt);
                  fnow = f[++findex];
              }
              Q = Qnew;
              if (hh !== 0) {
                  h[hindex++] = hh;
              }
          }
      }
      while (eindex < elen) {
          Qnew = Q + enow;
          bvirt = Qnew - Q;
          hh = Q - (Qnew - bvirt) + (enow - bvirt);
          enow = e[++eindex];
          Q = Qnew;
          if (hh !== 0) {
              h[hindex++] = hh;
          }
      }
      while (findex < flen) {
          Qnew = Q + fnow;
          bvirt = Qnew - Q;
          hh = Q - (Qnew - bvirt) + (fnow - bvirt);
          fnow = f[++findex];
          Q = Qnew;
          if (hh !== 0) {
              h[hindex++] = hh;
          }
      }
      if (Q !== 0 || hindex === 0) {
          h[hindex++] = Q;
      }
      return hindex;
  }

  function estimate(elen, e) {
      let Q = e[0];
      for (let i = 1; i < elen; i++) Q += e[i];
      return Q;
  }

  function vec(n) {
      return new Float64Array(n);
  }

  const ccwerrboundA = (3 + 16 * epsilon$2) * epsilon$2;
  const ccwerrboundB = (2 + 12 * epsilon$2) * epsilon$2;
  const ccwerrboundC = (9 + 64 * epsilon$2) * epsilon$2 * epsilon$2;

  const B$1 = vec(4);
  const C1 = vec(8);
  const C2 = vec(12);
  const D$1 = vec(16);
  const u = vec(4);

  function orient2dadapt(ax, ay, bx, by, cx, cy, detsum) {
      let acxtail, acytail, bcxtail, bcytail;
      let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u3;

      const acx = ax - cx;
      const bcx = bx - cx;
      const acy = ay - cy;
      const bcy = by - cy;

      s1 = acx * bcy;
      c = splitter * acx;
      ahi = c - (c - acx);
      alo = acx - ahi;
      c = splitter * bcy;
      bhi = c - (c - bcy);
      blo = bcy - bhi;
      s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
      t1 = acy * bcx;
      c = splitter * acy;
      ahi = c - (c - acy);
      alo = acy - ahi;
      c = splitter * bcx;
      bhi = c - (c - bcx);
      blo = bcx - bhi;
      t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
      _i = s0 - t0;
      bvirt = s0 - _i;
      B$1[0] = s0 - (_i + bvirt) + (bvirt - t0);
      _j = s1 + _i;
      bvirt = _j - s1;
      _0 = s1 - (_j - bvirt) + (_i - bvirt);
      _i = _0 - t1;
      bvirt = _0 - _i;
      B$1[1] = _0 - (_i + bvirt) + (bvirt - t1);
      u3 = _j + _i;
      bvirt = u3 - _j;
      B$1[2] = _j - (u3 - bvirt) + (_i - bvirt);
      B$1[3] = u3;

      let det = estimate(4, B$1);
      let errbound = ccwerrboundB * detsum;
      if (det >= errbound || -det >= errbound) {
          return det;
      }

      bvirt = ax - acx;
      acxtail = ax - (acx + bvirt) + (bvirt - cx);
      bvirt = bx - bcx;
      bcxtail = bx - (bcx + bvirt) + (bvirt - cx);
      bvirt = ay - acy;
      acytail = ay - (acy + bvirt) + (bvirt - cy);
      bvirt = by - bcy;
      bcytail = by - (bcy + bvirt) + (bvirt - cy);

      if (acxtail === 0 && acytail === 0 && bcxtail === 0 && bcytail === 0) {
          return det;
      }

      errbound = ccwerrboundC * detsum + resulterrbound * Math.abs(det);
      det += (acx * bcytail + bcy * acxtail) - (acy * bcxtail + bcx * acytail);
      if (det >= errbound || -det >= errbound) return det;

      s1 = acxtail * bcy;
      c = splitter * acxtail;
      ahi = c - (c - acxtail);
      alo = acxtail - ahi;
      c = splitter * bcy;
      bhi = c - (c - bcy);
      blo = bcy - bhi;
      s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
      t1 = acytail * bcx;
      c = splitter * acytail;
      ahi = c - (c - acytail);
      alo = acytail - ahi;
      c = splitter * bcx;
      bhi = c - (c - bcx);
      blo = bcx - bhi;
      t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
      _i = s0 - t0;
      bvirt = s0 - _i;
      u[0] = s0 - (_i + bvirt) + (bvirt - t0);
      _j = s1 + _i;
      bvirt = _j - s1;
      _0 = s1 - (_j - bvirt) + (_i - bvirt);
      _i = _0 - t1;
      bvirt = _0 - _i;
      u[1] = _0 - (_i + bvirt) + (bvirt - t1);
      u3 = _j + _i;
      bvirt = u3 - _j;
      u[2] = _j - (u3 - bvirt) + (_i - bvirt);
      u[3] = u3;
      const C1len = sum$1(4, B$1, 4, u, C1);

      s1 = acx * bcytail;
      c = splitter * acx;
      ahi = c - (c - acx);
      alo = acx - ahi;
      c = splitter * bcytail;
      bhi = c - (c - bcytail);
      blo = bcytail - bhi;
      s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
      t1 = acy * bcxtail;
      c = splitter * acy;
      ahi = c - (c - acy);
      alo = acy - ahi;
      c = splitter * bcxtail;
      bhi = c - (c - bcxtail);
      blo = bcxtail - bhi;
      t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
      _i = s0 - t0;
      bvirt = s0 - _i;
      u[0] = s0 - (_i + bvirt) + (bvirt - t0);
      _j = s1 + _i;
      bvirt = _j - s1;
      _0 = s1 - (_j - bvirt) + (_i - bvirt);
      _i = _0 - t1;
      bvirt = _0 - _i;
      u[1] = _0 - (_i + bvirt) + (bvirt - t1);
      u3 = _j + _i;
      bvirt = u3 - _j;
      u[2] = _j - (u3 - bvirt) + (_i - bvirt);
      u[3] = u3;
      const C2len = sum$1(C1len, C1, 4, u, C2);

      s1 = acxtail * bcytail;
      c = splitter * acxtail;
      ahi = c - (c - acxtail);
      alo = acxtail - ahi;
      c = splitter * bcytail;
      bhi = c - (c - bcytail);
      blo = bcytail - bhi;
      s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
      t1 = acytail * bcxtail;
      c = splitter * acytail;
      ahi = c - (c - acytail);
      alo = acytail - ahi;
      c = splitter * bcxtail;
      bhi = c - (c - bcxtail);
      blo = bcxtail - bhi;
      t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
      _i = s0 - t0;
      bvirt = s0 - _i;
      u[0] = s0 - (_i + bvirt) + (bvirt - t0);
      _j = s1 + _i;
      bvirt = _j - s1;
      _0 = s1 - (_j - bvirt) + (_i - bvirt);
      _i = _0 - t1;
      bvirt = _0 - _i;
      u[1] = _0 - (_i + bvirt) + (bvirt - t1);
      u3 = _j + _i;
      bvirt = u3 - _j;
      u[2] = _j - (u3 - bvirt) + (_i - bvirt);
      u[3] = u3;
      const Dlen = sum$1(C2len, C2, 4, u, D$1);

      return D$1[Dlen - 1];
  }

  function orient2d(ax, ay, bx, by, cx, cy) {
      const detleft = (ay - cy) * (bx - cx);
      const detright = (ax - cx) * (by - cy);
      const det = detleft - detright;

      if (detleft === 0 || detright === 0 || (detleft > 0) !== (detright > 0)) return det;

      const detsum = Math.abs(detleft + detright);
      if (Math.abs(det) >= ccwerrboundA * detsum) return det;

      return -orient2dadapt(ax, ay, bx, by, cx, cy, detsum);
  }

  const EPSILON$1 = Math.pow(2, -52);
  const EDGE_STACK$1 = new Uint32Array(512);

  class Delaunator$1 {

      static from(points, getX = defaultGetX$1, getY = defaultGetY$1) {
          const n = points.length;
          const coords = new Float64Array(n * 2);

          for (let i = 0; i < n; i++) {
              const p = points[i];
              coords[2 * i] = getX(p);
              coords[2 * i + 1] = getY(p);
          }

          return new Delaunator$1(coords);
      }

      constructor(coords) {
          const n = coords.length >> 1;
          if (n > 0 && typeof coords[0] !== 'number') throw new Error('Expected coords to contain numbers.');

          this.coords = coords;

          // arrays that will store the triangulation graph
          const maxTriangles = Math.max(2 * n - 5, 0);
          this._triangles = new Uint32Array(maxTriangles * 3);
          this._halfedges = new Int32Array(maxTriangles * 3);

          // temporary arrays for tracking the edges of the advancing convex hull
          this._hashSize = Math.ceil(Math.sqrt(n));
          this._hullPrev = new Uint32Array(n); // edge to prev edge
          this._hullNext = new Uint32Array(n); // edge to next edge
          this._hullTri = new Uint32Array(n); // edge to adjacent triangle
          this._hullHash = new Int32Array(this._hashSize).fill(-1); // angular edge hash

          // temporary arrays for sorting points
          this._ids = new Uint32Array(n);
          this._dists = new Float64Array(n);

          this.update();
      }

      update() {
          const {coords, _hullPrev: hullPrev, _hullNext: hullNext, _hullTri: hullTri, _hullHash: hullHash} =  this;
          const n = coords.length >> 1;

          // populate an array of point indices; calculate input data bbox
          let minX = Infinity;
          let minY = Infinity;
          let maxX = -Infinity;
          let maxY = -Infinity;

          for (let i = 0; i < n; i++) {
              const x = coords[2 * i];
              const y = coords[2 * i + 1];
              if (x < minX) minX = x;
              if (y < minY) minY = y;
              if (x > maxX) maxX = x;
              if (y > maxY) maxY = y;
              this._ids[i] = i;
          }
          const cx = (minX + maxX) / 2;
          const cy = (minY + maxY) / 2;

          let minDist = Infinity;
          let i0, i1, i2;

          // pick a seed point close to the center
          for (let i = 0; i < n; i++) {
              const d = dist$1(cx, cy, coords[2 * i], coords[2 * i + 1]);
              if (d < minDist) {
                  i0 = i;
                  minDist = d;
              }
          }
          const i0x = coords[2 * i0];
          const i0y = coords[2 * i0 + 1];

          minDist = Infinity;

          // find the point closest to the seed
          for (let i = 0; i < n; i++) {
              if (i === i0) continue;
              const d = dist$1(i0x, i0y, coords[2 * i], coords[2 * i + 1]);
              if (d < minDist && d > 0) {
                  i1 = i;
                  minDist = d;
              }
          }
          let i1x = coords[2 * i1];
          let i1y = coords[2 * i1 + 1];

          let minRadius = Infinity;

          // find the third point which forms the smallest circumcircle with the first two
          for (let i = 0; i < n; i++) {
              if (i === i0 || i === i1) continue;
              const r = circumradius$1(i0x, i0y, i1x, i1y, coords[2 * i], coords[2 * i + 1]);
              if (r < minRadius) {
                  i2 = i;
                  minRadius = r;
              }
          }
          let i2x = coords[2 * i2];
          let i2y = coords[2 * i2 + 1];

          if (minRadius === Infinity) {
              // order collinear points by dx (or dy if all x are identical)
              // and return the list as a hull
              for (let i = 0; i < n; i++) {
                  this._dists[i] = (coords[2 * i] - coords[0]) || (coords[2 * i + 1] - coords[1]);
              }
              quicksort$1(this._ids, this._dists, 0, n - 1);
              const hull = new Uint32Array(n);
              let j = 0;
              for (let i = 0, d0 = -Infinity; i < n; i++) {
                  const id = this._ids[i];
                  if (this._dists[id] > d0) {
                      hull[j++] = id;
                      d0 = this._dists[id];
                  }
              }
              this.hull = hull.subarray(0, j);
              this.triangles = new Uint32Array(0);
              this.halfedges = new Uint32Array(0);
              return;
          }

          // swap the order of the seed points for counter-clockwise orientation
          if (orient2d(i0x, i0y, i1x, i1y, i2x, i2y) < 0) {
              const i = i1;
              const x = i1x;
              const y = i1y;
              i1 = i2;
              i1x = i2x;
              i1y = i2y;
              i2 = i;
              i2x = x;
              i2y = y;
          }

          const center = circumcenter$1(i0x, i0y, i1x, i1y, i2x, i2y);
          this._cx = center.x;
          this._cy = center.y;

          for (let i = 0; i < n; i++) {
              this._dists[i] = dist$1(coords[2 * i], coords[2 * i + 1], center.x, center.y);
          }

          // sort the points by distance from the seed triangle circumcenter
          quicksort$1(this._ids, this._dists, 0, n - 1);

          // set up the seed triangle as the starting hull
          this._hullStart = i0;
          let hullSize = 3;

          hullNext[i0] = hullPrev[i2] = i1;
          hullNext[i1] = hullPrev[i0] = i2;
          hullNext[i2] = hullPrev[i1] = i0;

          hullTri[i0] = 0;
          hullTri[i1] = 1;
          hullTri[i2] = 2;

          hullHash.fill(-1);
          hullHash[this._hashKey(i0x, i0y)] = i0;
          hullHash[this._hashKey(i1x, i1y)] = i1;
          hullHash[this._hashKey(i2x, i2y)] = i2;

          this.trianglesLen = 0;
          this._addTriangle(i0, i1, i2, -1, -1, -1);

          for (let k = 0, xp, yp; k < this._ids.length; k++) {
              const i = this._ids[k];
              const x = coords[2 * i];
              const y = coords[2 * i + 1];

              // skip near-duplicate points
              if (k > 0 && Math.abs(x - xp) <= EPSILON$1 && Math.abs(y - yp) <= EPSILON$1) continue;
              xp = x;
              yp = y;

              // skip seed triangle points
              if (i === i0 || i === i1 || i === i2) continue;

              // find a visible edge on the convex hull using edge hash
              let start = 0;
              for (let j = 0, key = this._hashKey(x, y); j < this._hashSize; j++) {
                  start = hullHash[(key + j) % this._hashSize];
                  if (start !== -1 && start !== hullNext[start]) break;
              }

              start = hullPrev[start];
              let e = start, q;
              while (q = hullNext[e], orient2d(x, y, coords[2 * e], coords[2 * e + 1], coords[2 * q], coords[2 * q + 1]) >= 0) {
                  e = q;
                  if (e === start) {
                      e = -1;
                      break;
                  }
              }
              if (e === -1) continue; // likely a near-duplicate point; skip it

              // add the first triangle from the point
              let t = this._addTriangle(e, i, hullNext[e], -1, -1, hullTri[e]);

              // recursively flip triangles from the point until they satisfy the Delaunay condition
              hullTri[i] = this._legalize(t + 2);
              hullTri[e] = t; // keep track of boundary triangles on the hull
              hullSize++;

              // walk forward through the hull, adding more triangles and flipping recursively
              let n = hullNext[e];
              while (q = hullNext[n], orient2d(x, y, coords[2 * n], coords[2 * n + 1], coords[2 * q], coords[2 * q + 1]) < 0) {
                  t = this._addTriangle(n, i, q, hullTri[i], -1, hullTri[n]);
                  hullTri[i] = this._legalize(t + 2);
                  hullNext[n] = n; // mark as removed
                  hullSize--;
                  n = q;
              }

              // walk backward from the other side, adding more triangles and flipping
              if (e === start) {
                  while (q = hullPrev[e], orient2d(x, y, coords[2 * q], coords[2 * q + 1], coords[2 * e], coords[2 * e + 1]) < 0) {
                      t = this._addTriangle(q, i, e, -1, hullTri[e], hullTri[q]);
                      this._legalize(t + 2);
                      hullTri[q] = t;
                      hullNext[e] = e; // mark as removed
                      hullSize--;
                      e = q;
                  }
              }

              // update the hull indices
              this._hullStart = hullPrev[i] = e;
              hullNext[e] = hullPrev[n] = i;
              hullNext[i] = n;

              // save the two new edges in the hash table
              hullHash[this._hashKey(x, y)] = i;
              hullHash[this._hashKey(coords[2 * e], coords[2 * e + 1])] = e;
          }

          this.hull = new Uint32Array(hullSize);
          for (let i = 0, e = this._hullStart; i < hullSize; i++) {
              this.hull[i] = e;
              e = hullNext[e];
          }

          // trim typed triangle mesh arrays
          this.triangles = this._triangles.subarray(0, this.trianglesLen);
          this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
      }

      _hashKey(x, y) {
          return Math.floor(pseudoAngle$1(x - this._cx, y - this._cy) * this._hashSize) % this._hashSize;
      }

      _legalize(a) {
          const {_triangles: triangles, _halfedges: halfedges, coords} = this;

          let i = 0;
          let ar = 0;

          // recursion eliminated with a fixed-size stack
          while (true) {
              const b = halfedges[a];

              /* if the pair of triangles doesn't satisfy the Delaunay condition
               * (p1 is inside the circumcircle of [p0, pl, pr]), flip them,
               * then do the same check/flip recursively for the new pair of triangles
               *
               *           pl                    pl
               *          /||\                  /  \
               *       al/ || \bl            al/    \a
               *        /  ||  \              /      \
               *       /  a||b  \    flip    /___ar___\
               *     p0\   ||   /p1   =>   p0\---bl---/p1
               *        \  ||  /              \      /
               *       ar\ || /br             b\    /br
               *          \||/                  \  /
               *           pr                    pr
               */
              const a0 = a - a % 3;
              ar = a0 + (a + 2) % 3;

              if (b === -1) { // convex hull edge
                  if (i === 0) break;
                  a = EDGE_STACK$1[--i];
                  continue;
              }

              const b0 = b - b % 3;
              const al = a0 + (a + 1) % 3;
              const bl = b0 + (b + 2) % 3;

              const p0 = triangles[ar];
              const pr = triangles[a];
              const pl = triangles[al];
              const p1 = triangles[bl];

              const illegal = inCircle$1(
                  coords[2 * p0], coords[2 * p0 + 1],
                  coords[2 * pr], coords[2 * pr + 1],
                  coords[2 * pl], coords[2 * pl + 1],
                  coords[2 * p1], coords[2 * p1 + 1]);

              if (illegal) {
                  triangles[a] = p1;
                  triangles[b] = p0;

                  const hbl = halfedges[bl];

                  // edge swapped on the other side of the hull (rare); fix the halfedge reference
                  if (hbl === -1) {
                      let e = this._hullStart;
                      do {
                          if (this._hullTri[e] === bl) {
                              this._hullTri[e] = a;
                              break;
                          }
                          e = this._hullPrev[e];
                      } while (e !== this._hullStart);
                  }
                  this._link(a, hbl);
                  this._link(b, halfedges[ar]);
                  this._link(ar, bl);

                  const br = b0 + (b + 1) % 3;

                  // don't worry about hitting the cap: it can only happen on extremely degenerate input
                  if (i < EDGE_STACK$1.length) {
                      EDGE_STACK$1[i++] = br;
                  }
              } else {
                  if (i === 0) break;
                  a = EDGE_STACK$1[--i];
              }
          }

          return ar;
      }

      _link(a, b) {
          this._halfedges[a] = b;
          if (b !== -1) this._halfedges[b] = a;
      }

      // add a new triangle given vertex indices and adjacent half-edge ids
      _addTriangle(i0, i1, i2, a, b, c) {
          const t = this.trianglesLen;

          this._triangles[t] = i0;
          this._triangles[t + 1] = i1;
          this._triangles[t + 2] = i2;

          this._link(t, a);
          this._link(t + 1, b);
          this._link(t + 2, c);

          this.trianglesLen += 3;

          return t;
      }
  }

  // monotonically increases with real angle, but doesn't need expensive trigonometry
  function pseudoAngle$1(dx, dy) {
      const p = dx / (Math.abs(dx) + Math.abs(dy));
      return (dy > 0 ? 3 - p : 1 + p) / 4; // [0..1]
  }

  function dist$1(ax, ay, bx, by) {
      const dx = ax - bx;
      const dy = ay - by;
      return dx * dx + dy * dy;
  }

  function inCircle$1(ax, ay, bx, by, cx, cy, px, py) {
      const dx = ax - px;
      const dy = ay - py;
      const ex = bx - px;
      const ey = by - py;
      const fx = cx - px;
      const fy = cy - py;

      const ap = dx * dx + dy * dy;
      const bp = ex * ex + ey * ey;
      const cp = fx * fx + fy * fy;

      return dx * (ey * cp - bp * fy) -
             dy * (ex * cp - bp * fx) +
             ap * (ex * fy - ey * fx) < 0;
  }

  function circumradius$1(ax, ay, bx, by, cx, cy) {
      const dx = bx - ax;
      const dy = by - ay;
      const ex = cx - ax;
      const ey = cy - ay;

      const bl = dx * dx + dy * dy;
      const cl = ex * ex + ey * ey;
      const d = 0.5 / (dx * ey - dy * ex);

      const x = (ey * bl - dy * cl) * d;
      const y = (dx * cl - ex * bl) * d;

      return x * x + y * y;
  }

  function circumcenter$1(ax, ay, bx, by, cx, cy) {
      const dx = bx - ax;
      const dy = by - ay;
      const ex = cx - ax;
      const ey = cy - ay;

      const bl = dx * dx + dy * dy;
      const cl = ex * ex + ey * ey;
      const d = 0.5 / (dx * ey - dy * ex);

      const x = ax + (ey * bl - dy * cl) * d;
      const y = ay + (dx * cl - ex * bl) * d;

      return {x, y};
  }

  function quicksort$1(ids, dists, left, right) {
      if (right - left <= 20) {
          for (let i = left + 1; i <= right; i++) {
              const temp = ids[i];
              const tempDist = dists[temp];
              let j = i - 1;
              while (j >= left && dists[ids[j]] > tempDist) ids[j + 1] = ids[j--];
              ids[j + 1] = temp;
          }
      } else {
          const median = (left + right) >> 1;
          let i = left + 1;
          let j = right;
          swap$1(ids, median, i);
          if (dists[ids[left]] > dists[ids[right]]) swap$1(ids, left, right);
          if (dists[ids[i]] > dists[ids[right]]) swap$1(ids, i, right);
          if (dists[ids[left]] > dists[ids[i]]) swap$1(ids, left, i);

          const temp = ids[i];
          const tempDist = dists[temp];
          while (true) {
              do i++; while (dists[ids[i]] < tempDist);
              do j--; while (dists[ids[j]] > tempDist);
              if (j < i) break;
              swap$1(ids, i, j);
          }
          ids[left + 1] = ids[j];
          ids[j] = temp;

          if (right - i + 1 >= j - left) {
              quicksort$1(ids, dists, i, right);
              quicksort$1(ids, dists, left, j - 1);
          } else {
              quicksort$1(ids, dists, left, j - 1);
              quicksort$1(ids, dists, i, right);
          }
      }
  }

  function swap$1(arr, i, j) {
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
  }

  function defaultGetX$1(p) {
      return p[0];
  }
  function defaultGetY$1(p) {
      return p[1];
  }

  /**
   * Unwrap a coordinate from a Point Feature, Geometry or a single coordinate.
   *
   * @name getCoord
   * @param {Array<number>|Geometry<Point>|Feature<Point>} coord GeoJSON Point or an Array of numbers
   * @returns {Array<number>} coordinates
   * @example
   * var pt = turf.point([10, 10]);
   *
   * var coord = turf.getCoord(pt);
   * //= [10, 10]
   */
  function getCoord(coord) {
      if (!coord) {
          throw new Error("coord is required");
      }
      if (!Array.isArray(coord)) {
          if (coord.type === "Feature" &&
              coord.geometry !== null &&
              coord.geometry.type === "Point") {
              return coord.geometry.coordinates;
          }
          if (coord.type === "Point") {
              return coord.coordinates;
          }
      }
      if (Array.isArray(coord) &&
          coord.length >= 2 &&
          !Array.isArray(coord[0]) &&
          !Array.isArray(coord[1])) {
          return coord;
      }
      throw new Error("coord must be GeoJSON Point or an Array of numbers");
  }
  /**
   * Get Geometry from Feature or Geometry Object
   *
   * @param {Feature|Geometry} geojson GeoJSON Feature or Geometry Object
   * @returns {Geometry|null} GeoJSON Geometry Object
   * @throws {Error} if geojson is not a Feature or Geometry Object
   * @example
   * var point = {
   *   "type": "Feature",
   *   "properties": {},
   *   "geometry": {
   *     "type": "Point",
   *     "coordinates": [110, 40]
   *   }
   * }
   * var geom = turf.getGeom(point)
   * //={"type": "Point", "coordinates": [110, 40]}
   */
  function getGeom(geojson) {
      if (geojson.type === "Feature") {
          return geojson.geometry;
      }
      return geojson;
  }

  // http://en.wikipedia.org/wiki/Even%E2%80%93odd_rule
  // modified from: https://github.com/substack/point-in-polygon/blob/master/index.js
  // which was modified from http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
  /**
   * Takes a {@link Point} and a {@link Polygon} or {@link MultiPolygon} and determines if the point
   * resides inside the polygon. The polygon can be convex or concave. The function accounts for holes.
   *
   * @name booleanPointInPolygon
   * @param {Coord} point input point
   * @param {Feature<Polygon|MultiPolygon>} polygon input polygon or multipolygon
   * @param {Object} [options={}] Optional parameters
   * @param {boolean} [options.ignoreBoundary=false] True if polygon boundary should be ignored when determining if
   * the point is inside the polygon otherwise false.
   * @returns {boolean} `true` if the Point is inside the Polygon; `false` if the Point is not inside the Polygon
   * @example
   * var pt = turf.point([-77, 44]);
   * var poly = turf.polygon([[
   *   [-81, 41],
   *   [-81, 47],
   *   [-72, 47],
   *   [-72, 41],
   *   [-81, 41]
   * ]]);
   *
   * turf.booleanPointInPolygon(pt, poly);
   * //= true
   */
  function booleanPointInPolygon(point, polygon, options) {
      if (options === void 0) { options = {}; }
      // validation
      if (!point) {
          throw new Error("point is required");
      }
      if (!polygon) {
          throw new Error("polygon is required");
      }
      var pt = getCoord(point);
      var geom = getGeom(polygon);
      var type = geom.type;
      var bbox = polygon.bbox;
      var polys = geom.coordinates;
      // Quick elimination if point is not inside bbox
      if (bbox && inBBox(pt, bbox) === false) {
          return false;
      }
      // normalize to multipolygon
      if (type === "Polygon") {
          polys = [polys];
      }
      var insidePoly = false;
      for (var i = 0; i < polys.length && !insidePoly; i++) {
          // check if it is in the outer ring first
          if (inRing(pt, polys[i][0], options.ignoreBoundary)) {
              var inHole = false;
              var k = 1;
              // check for the point in any of the holes
              while (k < polys[i].length && !inHole) {
                  if (inRing(pt, polys[i][k], !options.ignoreBoundary)) {
                      inHole = true;
                  }
                  k++;
              }
              if (!inHole) {
                  insidePoly = true;
              }
          }
      }
      return insidePoly;
  }
  /**
   * inRing
   *
   * @private
   * @param {Array<number>} pt [x,y]
   * @param {Array<Array<number>>} ring [[x,y], [x,y],..]
   * @param {boolean} ignoreBoundary ignoreBoundary
   * @returns {boolean} inRing
   */
  function inRing(pt, ring, ignoreBoundary) {
      var isInside = false;
      if (ring[0][0] === ring[ring.length - 1][0] &&
          ring[0][1] === ring[ring.length - 1][1]) {
          ring = ring.slice(0, ring.length - 1);
      }
      for (var i = 0, j = ring.length - 1; i < ring.length; j = i++) {
          var xi = ring[i][0];
          var yi = ring[i][1];
          var xj = ring[j][0];
          var yj = ring[j][1];
          var onBoundary = pt[1] * (xi - xj) + yi * (xj - pt[0]) + yj * (pt[0] - xi) === 0 &&
              (xi - pt[0]) * (xj - pt[0]) <= 0 &&
              (yi - pt[1]) * (yj - pt[1]) <= 0;
          if (onBoundary) {
              return !ignoreBoundary;
          }
          var intersect = yi > pt[1] !== yj > pt[1] &&
              pt[0] < ((xj - xi) * (pt[1] - yi)) / (yj - yi) + xi;
          if (intersect) {
              isInside = !isInside;
          }
      }
      return isInside;
  }
  /**
   * inBBox
   *
   * @private
   * @param {Position} pt point [x,y]
   * @param {BBox} bbox BBox [west, south, east, north]
   * @returns {boolean} true/false if point is inside BBox
   */
  function inBBox(pt, bbox) {
      return (bbox[0] <= pt[0] && bbox[1] <= pt[1] && bbox[2] >= pt[0] && bbox[3] >= pt[1]);
  }

  const EPSILON = Math.pow(2, -52);
  const EDGE_STACK = new Uint32Array(512);

  class Delaunator {

      static from(points, getX = defaultGetX, getY = defaultGetY) {
          const n = points.length;
          const coords = new Float64Array(n * 2);

          for (let i = 0; i < n; i++) {
              const p = points[i];
              coords[2 * i] = getX(p);
              coords[2 * i + 1] = getY(p);
          }

          return new Delaunator(coords);
      }

      constructor(coords) {
          const n = coords.length >> 1;
          if (n > 0 && typeof coords[0] !== 'number') throw new Error('Expected coords to contain numbers.');

          this.coords = coords;

          // arrays that will store the triangulation graph
          const maxTriangles = Math.max(2 * n - 5, 0);
          this._triangles = new Uint32Array(maxTriangles * 3);
          this._halfedges = new Int32Array(maxTriangles * 3);

          // temporary arrays for tracking the edges of the advancing convex hull
          this._hashSize = Math.ceil(Math.sqrt(n));
          this._hullPrev = new Uint32Array(n); // edge to prev edge
          this._hullNext = new Uint32Array(n); // edge to next edge
          this._hullTri = new Uint32Array(n); // edge to adjacent triangle
          this._hullHash = new Int32Array(this._hashSize).fill(-1); // angular edge hash

          // temporary arrays for sorting points
          this._ids = new Uint32Array(n);
          this._dists = new Float64Array(n);

          this.update();
      }

      update() {
          const {coords, _hullPrev: hullPrev, _hullNext: hullNext, _hullTri: hullTri, _hullHash: hullHash} =  this;
          const n = coords.length >> 1;

          // populate an array of point indices; calculate input data bbox
          let minX = Infinity;
          let minY = Infinity;
          let maxX = -Infinity;
          let maxY = -Infinity;

          for (let i = 0; i < n; i++) {
              const x = coords[2 * i];
              const y = coords[2 * i + 1];
              if (x < minX) minX = x;
              if (y < minY) minY = y;
              if (x > maxX) maxX = x;
              if (y > maxY) maxY = y;
              this._ids[i] = i;
          }
          const cx = (minX + maxX) / 2;
          const cy = (minY + maxY) / 2;

          let minDist = Infinity;
          let i0, i1, i2;

          // pick a seed point close to the center
          for (let i = 0; i < n; i++) {
              const d = dist(cx, cy, coords[2 * i], coords[2 * i + 1]);
              if (d < minDist) {
                  i0 = i;
                  minDist = d;
              }
          }
          const i0x = coords[2 * i0];
          const i0y = coords[2 * i0 + 1];

          minDist = Infinity;

          // find the point closest to the seed
          for (let i = 0; i < n; i++) {
              if (i === i0) continue;
              const d = dist(i0x, i0y, coords[2 * i], coords[2 * i + 1]);
              if (d < minDist && d > 0) {
                  i1 = i;
                  minDist = d;
              }
          }
          let i1x = coords[2 * i1];
          let i1y = coords[2 * i1 + 1];

          let minRadius = Infinity;

          // find the third point which forms the smallest circumcircle with the first two
          for (let i = 0; i < n; i++) {
              if (i === i0 || i === i1) continue;
              const r = circumradius(i0x, i0y, i1x, i1y, coords[2 * i], coords[2 * i + 1]);
              if (r < minRadius) {
                  i2 = i;
                  minRadius = r;
              }
          }
          let i2x = coords[2 * i2];
          let i2y = coords[2 * i2 + 1];

          if (minRadius === Infinity) {
              // order collinear points by dx (or dy if all x are identical)
              // and return the list as a hull
              for (let i = 0; i < n; i++) {
                  this._dists[i] = (coords[2 * i] - coords[0]) || (coords[2 * i + 1] - coords[1]);
              }
              quicksort(this._ids, this._dists, 0, n - 1);
              const hull = new Uint32Array(n);
              let j = 0;
              for (let i = 0, d0 = -Infinity; i < n; i++) {
                  const id = this._ids[i];
                  if (this._dists[id] > d0) {
                      hull[j++] = id;
                      d0 = this._dists[id];
                  }
              }
              this.hull = hull.subarray(0, j);
              this.triangles = new Uint32Array(0);
              this.halfedges = new Uint32Array(0);
              return;
          }

          // swap the order of the seed points for counter-clockwise orientation
          if (orient(i0x, i0y, i1x, i1y, i2x, i2y)) {
              const i = i1;
              const x = i1x;
              const y = i1y;
              i1 = i2;
              i1x = i2x;
              i1y = i2y;
              i2 = i;
              i2x = x;
              i2y = y;
          }

          const center = circumcenter(i0x, i0y, i1x, i1y, i2x, i2y);
          this._cx = center.x;
          this._cy = center.y;

          for (let i = 0; i < n; i++) {
              this._dists[i] = dist(coords[2 * i], coords[2 * i + 1], center.x, center.y);
          }

          // sort the points by distance from the seed triangle circumcenter
          quicksort(this._ids, this._dists, 0, n - 1);

          // set up the seed triangle as the starting hull
          this._hullStart = i0;
          let hullSize = 3;

          hullNext[i0] = hullPrev[i2] = i1;
          hullNext[i1] = hullPrev[i0] = i2;
          hullNext[i2] = hullPrev[i1] = i0;

          hullTri[i0] = 0;
          hullTri[i1] = 1;
          hullTri[i2] = 2;

          hullHash.fill(-1);
          hullHash[this._hashKey(i0x, i0y)] = i0;
          hullHash[this._hashKey(i1x, i1y)] = i1;
          hullHash[this._hashKey(i2x, i2y)] = i2;

          this.trianglesLen = 0;
          this._addTriangle(i0, i1, i2, -1, -1, -1);

          for (let k = 0, xp, yp; k < this._ids.length; k++) {
              const i = this._ids[k];
              const x = coords[2 * i];
              const y = coords[2 * i + 1];

              // skip near-duplicate points
              if (k > 0 && Math.abs(x - xp) <= EPSILON && Math.abs(y - yp) <= EPSILON) continue;
              xp = x;
              yp = y;

              // skip seed triangle points
              if (i === i0 || i === i1 || i === i2) continue;

              // find a visible edge on the convex hull using edge hash
              let start = 0;
              for (let j = 0, key = this._hashKey(x, y); j < this._hashSize; j++) {
                  start = hullHash[(key + j) % this._hashSize];
                  if (start !== -1 && start !== hullNext[start]) break;
              }

              start = hullPrev[start];
              let e = start, q;
              while (q = hullNext[e], !orient(x, y, coords[2 * e], coords[2 * e + 1], coords[2 * q], coords[2 * q + 1])) {
                  e = q;
                  if (e === start) {
                      e = -1;
                      break;
                  }
              }
              if (e === -1) continue; // likely a near-duplicate point; skip it

              // add the first triangle from the point
              let t = this._addTriangle(e, i, hullNext[e], -1, -1, hullTri[e]);

              // recursively flip triangles from the point until they satisfy the Delaunay condition
              hullTri[i] = this._legalize(t + 2);
              hullTri[e] = t; // keep track of boundary triangles on the hull
              hullSize++;

              // walk forward through the hull, adding more triangles and flipping recursively
              let n = hullNext[e];
              while (q = hullNext[n], orient(x, y, coords[2 * n], coords[2 * n + 1], coords[2 * q], coords[2 * q + 1])) {
                  t = this._addTriangle(n, i, q, hullTri[i], -1, hullTri[n]);
                  hullTri[i] = this._legalize(t + 2);
                  hullNext[n] = n; // mark as removed
                  hullSize--;
                  n = q;
              }

              // walk backward from the other side, adding more triangles and flipping
              if (e === start) {
                  while (q = hullPrev[e], orient(x, y, coords[2 * q], coords[2 * q + 1], coords[2 * e], coords[2 * e + 1])) {
                      t = this._addTriangle(q, i, e, -1, hullTri[e], hullTri[q]);
                      this._legalize(t + 2);
                      hullTri[q] = t;
                      hullNext[e] = e; // mark as removed
                      hullSize--;
                      e = q;
                  }
              }

              // update the hull indices
              this._hullStart = hullPrev[i] = e;
              hullNext[e] = hullPrev[n] = i;
              hullNext[i] = n;

              // save the two new edges in the hash table
              hullHash[this._hashKey(x, y)] = i;
              hullHash[this._hashKey(coords[2 * e], coords[2 * e + 1])] = e;
          }

          this.hull = new Uint32Array(hullSize);
          for (let i = 0, e = this._hullStart; i < hullSize; i++) {
              this.hull[i] = e;
              e = hullNext[e];
          }

          // trim typed triangle mesh arrays
          this.triangles = this._triangles.subarray(0, this.trianglesLen);
          this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
      }

      _hashKey(x, y) {
          return Math.floor(pseudoAngle(x - this._cx, y - this._cy) * this._hashSize) % this._hashSize;
      }

      _legalize(a) {
          const {_triangles: triangles, _halfedges: halfedges, coords} = this;

          let i = 0;
          let ar = 0;

          // recursion eliminated with a fixed-size stack
          while (true) {
              const b = halfedges[a];

              /* if the pair of triangles doesn't satisfy the Delaunay condition
               * (p1 is inside the circumcircle of [p0, pl, pr]), flip them,
               * then do the same check/flip recursively for the new pair of triangles
               *
               *           pl                    pl
               *          /||\                  /  \
               *       al/ || \bl            al/    \a
               *        /  ||  \              /      \
               *       /  a||b  \    flip    /___ar___\
               *     p0\   ||   /p1   =>   p0\---bl---/p1
               *        \  ||  /              \      /
               *       ar\ || /br             b\    /br
               *          \||/                  \  /
               *           pr                    pr
               */
              const a0 = a - a % 3;
              ar = a0 + (a + 2) % 3;

              if (b === -1) { // convex hull edge
                  if (i === 0) break;
                  a = EDGE_STACK[--i];
                  continue;
              }

              const b0 = b - b % 3;
              const al = a0 + (a + 1) % 3;
              const bl = b0 + (b + 2) % 3;

              const p0 = triangles[ar];
              const pr = triangles[a];
              const pl = triangles[al];
              const p1 = triangles[bl];

              const illegal = inCircle(
                  coords[2 * p0], coords[2 * p0 + 1],
                  coords[2 * pr], coords[2 * pr + 1],
                  coords[2 * pl], coords[2 * pl + 1],
                  coords[2 * p1], coords[2 * p1 + 1]);

              if (illegal) {
                  triangles[a] = p1;
                  triangles[b] = p0;

                  const hbl = halfedges[bl];

                  // edge swapped on the other side of the hull (rare); fix the halfedge reference
                  if (hbl === -1) {
                      let e = this._hullStart;
                      do {
                          if (this._hullTri[e] === bl) {
                              this._hullTri[e] = a;
                              break;
                          }
                          e = this._hullPrev[e];
                      } while (e !== this._hullStart);
                  }
                  this._link(a, hbl);
                  this._link(b, halfedges[ar]);
                  this._link(ar, bl);

                  const br = b0 + (b + 1) % 3;

                  // don't worry about hitting the cap: it can only happen on extremely degenerate input
                  if (i < EDGE_STACK.length) {
                      EDGE_STACK[i++] = br;
                  }
              } else {
                  if (i === 0) break;
                  a = EDGE_STACK[--i];
              }
          }

          return ar;
      }

      _link(a, b) {
          this._halfedges[a] = b;
          if (b !== -1) this._halfedges[b] = a;
      }

      // add a new triangle given vertex indices and adjacent half-edge ids
      _addTriangle(i0, i1, i2, a, b, c) {
          const t = this.trianglesLen;

          this._triangles[t] = i0;
          this._triangles[t + 1] = i1;
          this._triangles[t + 2] = i2;

          this._link(t, a);
          this._link(t + 1, b);
          this._link(t + 2, c);

          this.trianglesLen += 3;

          return t;
      }
  }

  // monotonically increases with real angle, but doesn't need expensive trigonometry
  function pseudoAngle(dx, dy) {
      const p = dx / (Math.abs(dx) + Math.abs(dy));
      return (dy > 0 ? 3 - p : 1 + p) / 4; // [0..1]
  }

  function dist(ax, ay, bx, by) {
      const dx = ax - bx;
      const dy = ay - by;
      return dx * dx + dy * dy;
  }

  // return 2d orientation sign if we're confident in it through J. Shewchuk's error bound check
  function orientIfSure(px, py, rx, ry, qx, qy) {
      const l = (ry - py) * (qx - px);
      const r = (rx - px) * (qy - py);
      return Math.abs(l - r) >= 3.3306690738754716e-16 * Math.abs(l + r) ? l - r : 0;
  }

  // a more robust orientation test that's stable in a given triangle (to fix robustness issues)
  function orient(rx, ry, qx, qy, px, py) {
      const sign = orientIfSure(px, py, rx, ry, qx, qy) ||
      orientIfSure(rx, ry, qx, qy, px, py) ||
      orientIfSure(qx, qy, px, py, rx, ry);
      return sign < 0;
  }

  function inCircle(ax, ay, bx, by, cx, cy, px, py) {
      const dx = ax - px;
      const dy = ay - py;
      const ex = bx - px;
      const ey = by - py;
      const fx = cx - px;
      const fy = cy - py;

      const ap = dx * dx + dy * dy;
      const bp = ex * ex + ey * ey;
      const cp = fx * fx + fy * fy;

      return dx * (ey * cp - bp * fy) -
             dy * (ex * cp - bp * fx) +
             ap * (ex * fy - ey * fx) < 0;
  }

  function circumradius(ax, ay, bx, by, cx, cy) {
      const dx = bx - ax;
      const dy = by - ay;
      const ex = cx - ax;
      const ey = cy - ay;

      const bl = dx * dx + dy * dy;
      const cl = ex * ex + ey * ey;
      const d = 0.5 / (dx * ey - dy * ex);

      const x = (ey * bl - dy * cl) * d;
      const y = (dx * cl - ex * bl) * d;

      return x * x + y * y;
  }

  function circumcenter(ax, ay, bx, by, cx, cy) {
      const dx = bx - ax;
      const dy = by - ay;
      const ex = cx - ax;
      const ey = cy - ay;

      const bl = dx * dx + dy * dy;
      const cl = ex * ex + ey * ey;
      const d = 0.5 / (dx * ey - dy * ex);

      const x = ax + (ey * bl - dy * cl) * d;
      const y = ay + (dx * cl - ex * bl) * d;

      return {x, y};
  }

  function quicksort(ids, dists, left, right) {
      if (right - left <= 20) {
          for (let i = left + 1; i <= right; i++) {
              const temp = ids[i];
              const tempDist = dists[temp];
              let j = i - 1;
              while (j >= left && dists[ids[j]] > tempDist) ids[j + 1] = ids[j--];
              ids[j + 1] = temp;
          }
      } else {
          const median = (left + right) >> 1;
          let i = left + 1;
          let j = right;
          swap(ids, median, i);
          if (dists[ids[left]] > dists[ids[right]]) swap(ids, left, right);
          if (dists[ids[i]] > dists[ids[right]]) swap(ids, i, right);
          if (dists[ids[left]] > dists[ids[i]]) swap(ids, left, i);

          const temp = ids[i];
          const tempDist = dists[temp];
          while (true) {
              do i++; while (dists[ids[i]] < tempDist);
              do j--; while (dists[ids[j]] > tempDist);
              if (j < i) break;
              swap(ids, i, j);
          }
          ids[left + 1] = ids[j];
          ids[j] = temp;

          if (right - i + 1 >= j - left) {
              quicksort(ids, dists, i, right);
              quicksort(ids, dists, left, j - 1);
          } else {
              quicksort(ids, dists, left, j - 1);
              quicksort(ids, dists, i, right);
          }
      }
  }

  function swap(arr, i, j) {
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
  }

  function defaultGetX(p) {
      return p[0];
  }
  function defaultGetY(p) {
      return p[1];
  }

  const epsilon$1 = 1e-6;

  class Path {
    constructor() {
      this._x0 = this._y0 = // start of current subpath
      this._x1 = this._y1 = null; // end of current subpath
      this._ = "";
    }
    moveTo(x, y) {
      this._ += `M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}`;
    }
    closePath() {
      if (this._x1 !== null) {
        this._x1 = this._x0, this._y1 = this._y0;
        this._ += "Z";
      }
    }
    lineTo(x, y) {
      this._ += `L${this._x1 = +x},${this._y1 = +y}`;
    }
    arc(x, y, r) {
      x = +x, y = +y, r = +r;
      const x0 = x + r;
      const y0 = y;
      if (r < 0) throw new Error("negative radius");
      if (this._x1 === null) this._ += `M${x0},${y0}`;
      else if (Math.abs(this._x1 - x0) > epsilon$1 || Math.abs(this._y1 - y0) > epsilon$1) this._ += "L" + x0 + "," + y0;
      if (!r) return;
      this._ += `A${r},${r},0,1,1,${x - r},${y}A${r},${r},0,1,1,${this._x1 = x0},${this._y1 = y0}`;
    }
    rect(x, y, w, h) {
      this._ += `M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}h${+w}v${+h}h${-w}Z`;
    }
    value() {
      return this._ || null;
    }
  }

  class Polygon {
    constructor() {
      this._ = [];
    }
    moveTo(x, y) {
      this._.push([x, y]);
    }
    closePath() {
      this._.push(this._[0].slice());
    }
    lineTo(x, y) {
      this._.push([x, y]);
    }
    value() {
      return this._.length ? this._ : null;
    }
  }

  class Voronoi {
    constructor(delaunay, [xmin, ymin, xmax, ymax] = [0, 0, 960, 500]) {
      if (!((xmax = +xmax) >= (xmin = +xmin)) || !((ymax = +ymax) >= (ymin = +ymin))) throw new Error("invalid bounds");
      this.delaunay = delaunay;
      this._circumcenters = new Float64Array(delaunay.points.length * 2);
      this.vectors = new Float64Array(delaunay.points.length * 2);
      this.xmax = xmax, this.xmin = xmin;
      this.ymax = ymax, this.ymin = ymin;
      this._init();
    }
    update() {
      this.delaunay.update();
      this._init();
      return this;
    }
    _init() {
      const {delaunay: {points, hull, triangles}, vectors} = this;

      // Compute circumcenters.
      const circumcenters = this.circumcenters = this._circumcenters.subarray(0, triangles.length / 3 * 2);
      for (let i = 0, j = 0, n = triangles.length, x, y; i < n; i += 3, j += 2) {
        const t1 = triangles[i] * 2;
        const t2 = triangles[i + 1] * 2;
        const t3 = triangles[i + 2] * 2;
        const x1 = points[t1];
        const y1 = points[t1 + 1];
        const x2 = points[t2];
        const y2 = points[t2 + 1];
        const x3 = points[t3];
        const y3 = points[t3 + 1];

        const dx = x2 - x1;
        const dy = y2 - y1;
        const ex = x3 - x1;
        const ey = y3 - y1;
        const bl = dx * dx + dy * dy;
        const cl = ex * ex + ey * ey;
        const ab = (dx * ey - dy * ex) * 2;

        if (!ab) {
          // degenerate case (collinear diagram)
          x = (x1 + x3) / 2 - 1e8 * ey;
          y = (y1 + y3) / 2 + 1e8 * ex;
        }
        else if (Math.abs(ab) < 1e-8) {
          // almost equal points (degenerate triangle)
          x = (x1 + x3) / 2;
          y = (y1 + y3) / 2;
        } else {
          const d = 1 / ab;
          x = x1 + (ey * bl - dy * cl) * d;
          y = y1 + (dx * cl - ex * bl) * d;
        }
        circumcenters[j] = x;
        circumcenters[j + 1] = y;
      }

      // Compute exterior cell rays.
      let h = hull[hull.length - 1];
      let p0, p1 = h * 4;
      let x0, x1 = points[2 * h];
      let y0, y1 = points[2 * h + 1];
      vectors.fill(0);
      for (let i = 0; i < hull.length; ++i) {
        h = hull[i];
        p0 = p1, x0 = x1, y0 = y1;
        p1 = h * 4, x1 = points[2 * h], y1 = points[2 * h + 1];
        vectors[p0 + 2] = vectors[p1] = y0 - y1;
        vectors[p0 + 3] = vectors[p1 + 1] = x1 - x0;
      }
    }
    render(context) {
      const buffer = context == null ? context = new Path : undefined;
      const {delaunay: {halfedges, inedges, hull}, circumcenters, vectors} = this;
      if (hull.length <= 1) return null;
      for (let i = 0, n = halfedges.length; i < n; ++i) {
        const j = halfedges[i];
        if (j < i) continue;
        const ti = Math.floor(i / 3) * 2;
        const tj = Math.floor(j / 3) * 2;
        const xi = circumcenters[ti];
        const yi = circumcenters[ti + 1];
        const xj = circumcenters[tj];
        const yj = circumcenters[tj + 1];
        this._renderSegment(xi, yi, xj, yj, context);
      }
      let h0, h1 = hull[hull.length - 1];
      for (let i = 0; i < hull.length; ++i) {
        h0 = h1, h1 = hull[i];
        const t = Math.floor(inedges[h1] / 3) * 2;
        const x = circumcenters[t];
        const y = circumcenters[t + 1];
        const v = h0 * 4;
        const p = this._project(x, y, vectors[v + 2], vectors[v + 3]);
        if (p) this._renderSegment(x, y, p[0], p[1], context);
      }
      return buffer && buffer.value();
    }
    renderBounds(context) {
      const buffer = context == null ? context = new Path : undefined;
      context.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin);
      return buffer && buffer.value();
    }
    renderCell(i, context) {
      const buffer = context == null ? context = new Path : undefined;
      const points = this._clip(i);
      if (points === null || !points.length) return;
      context.moveTo(points[0], points[1]);
      let n = points.length;
      while (points[0] === points[n-2] && points[1] === points[n-1] && n > 1) n -= 2;
      for (let i = 2; i < n; i += 2) {
        if (points[i] !== points[i-2] || points[i+1] !== points[i-1])
          context.lineTo(points[i], points[i + 1]);
      }
      context.closePath();
      return buffer && buffer.value();
    }
    *cellPolygons() {
      const {delaunay: {points}} = this;
      for (let i = 0, n = points.length / 2; i < n; ++i) {
        const cell = this.cellPolygon(i);
        if (cell) cell.index = i, yield cell;
      }
    }
    cellPolygon(i) {
      const polygon = new Polygon;
      this.renderCell(i, polygon);
      return polygon.value();
    }
    _renderSegment(x0, y0, x1, y1, context) {
      let S;
      const c0 = this._regioncode(x0, y0);
      const c1 = this._regioncode(x1, y1);
      if (c0 === 0 && c1 === 0) {
        context.moveTo(x0, y0);
        context.lineTo(x1, y1);
      } else if (S = this._clipSegment(x0, y0, x1, y1, c0, c1)) {
        context.moveTo(S[0], S[1]);
        context.lineTo(S[2], S[3]);
      }
    }
    contains(i, x, y) {
      if ((x = +x, x !== x) || (y = +y, y !== y)) return false;
      return this.delaunay._step(i, x, y) === i;
    }
    *neighbors(i) {
      const ci = this._clip(i);
      if (ci) for (const j of this.delaunay.neighbors(i)) {
        const cj = this._clip(j);
        // find the common edge
        if (cj) loop: for (let ai = 0, li = ci.length; ai < li; ai += 2) {
          for (let aj = 0, lj = cj.length; aj < lj; aj += 2) {
            if (ci[ai] == cj[aj]
            && ci[ai + 1] == cj[aj + 1]
            && ci[(ai + 2) % li] == cj[(aj + lj - 2) % lj]
            && ci[(ai + 3) % li] == cj[(aj + lj - 1) % lj]
            ) {
              yield j;
              break loop;
            }
          }
        }
      }
    }
    _cell(i) {
      const {circumcenters, delaunay: {inedges, halfedges, triangles}} = this;
      const e0 = inedges[i];
      if (e0 === -1) return null; // coincident point
      const points = [];
      let e = e0;
      do {
        const t = Math.floor(e / 3);
        points.push(circumcenters[t * 2], circumcenters[t * 2 + 1]);
        e = e % 3 === 2 ? e - 2 : e + 1;
        if (triangles[e] !== i) break; // bad triangulation
        e = halfedges[e];
      } while (e !== e0 && e !== -1);
      return points;
    }
    _clip(i) {
      // degenerate case (1 valid point: return the box)
      if (i === 0 && this.delaunay.hull.length === 1) {
        return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
      }
      const points = this._cell(i);
      if (points === null) return null;
      const {vectors: V} = this;
      const v = i * 4;
      return V[v] || V[v + 1]
          ? this._clipInfinite(i, points, V[v], V[v + 1], V[v + 2], V[v + 3])
          : this._clipFinite(i, points);
    }
    _clipFinite(i, points) {
      const n = points.length;
      let P = null;
      let x0, y0, x1 = points[n - 2], y1 = points[n - 1];
      let c0, c1 = this._regioncode(x1, y1);
      let e0, e1;
      for (let j = 0; j < n; j += 2) {
        x0 = x1, y0 = y1, x1 = points[j], y1 = points[j + 1];
        c0 = c1, c1 = this._regioncode(x1, y1);
        if (c0 === 0 && c1 === 0) {
          e0 = e1, e1 = 0;
          if (P) P.push(x1, y1);
          else P = [x1, y1];
        } else {
          let S, sx0, sy0, sx1, sy1;
          if (c0 === 0) {
            if ((S = this._clipSegment(x0, y0, x1, y1, c0, c1)) === null) continue;
            [sx0, sy0, sx1, sy1] = S;
          } else {
            if ((S = this._clipSegment(x1, y1, x0, y0, c1, c0)) === null) continue;
            [sx1, sy1, sx0, sy0] = S;
            e0 = e1, e1 = this._edgecode(sx0, sy0);
            if (e0 && e1) this._edge(i, e0, e1, P, P.length);
            if (P) P.push(sx0, sy0);
            else P = [sx0, sy0];
          }
          e0 = e1, e1 = this._edgecode(sx1, sy1);
          if (e0 && e1) this._edge(i, e0, e1, P, P.length);
          if (P) P.push(sx1, sy1);
          else P = [sx1, sy1];
        }
      }
      if (P) {
        e0 = e1, e1 = this._edgecode(P[0], P[1]);
        if (e0 && e1) this._edge(i, e0, e1, P, P.length);
      } else if (this.contains(i, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
        return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
      }
      return P;
    }
    _clipSegment(x0, y0, x1, y1, c0, c1) {
      while (true) {
        if (c0 === 0 && c1 === 0) return [x0, y0, x1, y1];
        if (c0 & c1) return null;
        let x, y, c = c0 || c1;
        if (c & 0b1000) x = x0 + (x1 - x0) * (this.ymax - y0) / (y1 - y0), y = this.ymax;
        else if (c & 0b0100) x = x0 + (x1 - x0) * (this.ymin - y0) / (y1 - y0), y = this.ymin;
        else if (c & 0b0010) y = y0 + (y1 - y0) * (this.xmax - x0) / (x1 - x0), x = this.xmax;
        else y = y0 + (y1 - y0) * (this.xmin - x0) / (x1 - x0), x = this.xmin;
        if (c0) x0 = x, y0 = y, c0 = this._regioncode(x0, y0);
        else x1 = x, y1 = y, c1 = this._regioncode(x1, y1);
      }
    }
    _clipInfinite(i, points, vx0, vy0, vxn, vyn) {
      let P = Array.from(points), p;
      if (p = this._project(P[0], P[1], vx0, vy0)) P.unshift(p[0], p[1]);
      if (p = this._project(P[P.length - 2], P[P.length - 1], vxn, vyn)) P.push(p[0], p[1]);
      if (P = this._clipFinite(i, P)) {
        for (let j = 0, n = P.length, c0, c1 = this._edgecode(P[n - 2], P[n - 1]); j < n; j += 2) {
          c0 = c1, c1 = this._edgecode(P[j], P[j + 1]);
          if (c0 && c1) j = this._edge(i, c0, c1, P, j), n = P.length;
        }
      } else if (this.contains(i, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
        P = [this.xmin, this.ymin, this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax];
      }
      return P;
    }
    _edge(i, e0, e1, P, j) {
      while (e0 !== e1) {
        let x, y;
        switch (e0) {
          case 0b0101: e0 = 0b0100; continue; // top-left
          case 0b0100: e0 = 0b0110, x = this.xmax, y = this.ymin; break; // top
          case 0b0110: e0 = 0b0010; continue; // top-right
          case 0b0010: e0 = 0b1010, x = this.xmax, y = this.ymax; break; // right
          case 0b1010: e0 = 0b1000; continue; // bottom-right
          case 0b1000: e0 = 0b1001, x = this.xmin, y = this.ymax; break; // bottom
          case 0b1001: e0 = 0b0001; continue; // bottom-left
          case 0b0001: e0 = 0b0101, x = this.xmin, y = this.ymin; break; // left
        }
        if ((P[j] !== x || P[j + 1] !== y) && this.contains(i, x, y)) {
          P.splice(j, 0, x, y), j += 2;
        }
      }
      if (P.length > 4) {
        for (let i = 0; i < P.length; i+= 2) {
          const j = (i + 2) % P.length, k = (i + 4) % P.length;
          if (P[i] === P[j] && P[j] === P[k]
          || P[i + 1] === P[j + 1] && P[j + 1] === P[k + 1])
            P.splice(j, 2), i -= 2;
        }
      }
      return j;
    }
    _project(x0, y0, vx, vy) {
      let t = Infinity, c, x, y;
      if (vy < 0) { // top
        if (y0 <= this.ymin) return null;
        if ((c = (this.ymin - y0) / vy) < t) y = this.ymin, x = x0 + (t = c) * vx;
      } else if (vy > 0) { // bottom
        if (y0 >= this.ymax) return null;
        if ((c = (this.ymax - y0) / vy) < t) y = this.ymax, x = x0 + (t = c) * vx;
      }
      if (vx > 0) { // right
        if (x0 >= this.xmax) return null;
        if ((c = (this.xmax - x0) / vx) < t) x = this.xmax, y = y0 + (t = c) * vy;
      } else if (vx < 0) { // left
        if (x0 <= this.xmin) return null;
        if ((c = (this.xmin - x0) / vx) < t) x = this.xmin, y = y0 + (t = c) * vy;
      }
      return [x, y];
    }
    _edgecode(x, y) {
      return (x === this.xmin ? 0b0001
          : x === this.xmax ? 0b0010 : 0b0000)
          | (y === this.ymin ? 0b0100
          : y === this.ymax ? 0b1000 : 0b0000);
    }
    _regioncode(x, y) {
      return (x < this.xmin ? 0b0001
          : x > this.xmax ? 0b0010 : 0b0000)
          | (y < this.ymin ? 0b0100
          : y > this.ymax ? 0b1000 : 0b0000);
    }
  }

  const tau$1 = 2 * Math.PI, pow = Math.pow;

  function pointX(p) {
    return p[0];
  }

  function pointY(p) {
    return p[1];
  }

  // A triangulation is collinear if all its triangles have a non-null area
  function collinear(d) {
    const {triangles, coords} = d;
    for (let i = 0; i < triangles.length; i += 3) {
      const a = 2 * triangles[i],
            b = 2 * triangles[i + 1],
            c = 2 * triangles[i + 2],
            cross = (coords[c] - coords[a]) * (coords[b + 1] - coords[a + 1])
                  - (coords[b] - coords[a]) * (coords[c + 1] - coords[a + 1]);
      if (cross > 1e-10) return false;
    }
    return true;
  }

  function jitter(x, y, r) {
    return [x + Math.sin(x + y) * r, y + Math.cos(x - y) * r];
  }

  class Delaunay {
    static from(points, fx = pointX, fy = pointY, that) {
      return new Delaunay("length" in points
          ? flatArray(points, fx, fy, that)
          : Float64Array.from(flatIterable(points, fx, fy, that)));
    }
    constructor(points) {
      this._delaunator = new Delaunator(points);
      this.inedges = new Int32Array(points.length / 2);
      this._hullIndex = new Int32Array(points.length / 2);
      this.points = this._delaunator.coords;
      this._init();
    }
    update() {
      this._delaunator.update();
      this._init();
      return this;
    }
    _init() {
      const d = this._delaunator, points = this.points;

      // check for collinear
      if (d.hull && d.hull.length > 2 && collinear(d)) {
        this.collinear = Int32Array.from({length: points.length/2}, (_,i) => i)
          .sort((i, j) => points[2 * i] - points[2 * j] || points[2 * i + 1] - points[2 * j + 1]); // for exact neighbors
        const e = this.collinear[0], f = this.collinear[this.collinear.length - 1],
          bounds = [ points[2 * e], points[2 * e + 1], points[2 * f], points[2 * f + 1] ],
          r = 1e-8 * Math.hypot(bounds[3] - bounds[1], bounds[2] - bounds[0]);
        for (let i = 0, n = points.length / 2; i < n; ++i) {
          const p = jitter(points[2 * i], points[2 * i + 1], r);
          points[2 * i] = p[0];
          points[2 * i + 1] = p[1];
        }
        this._delaunator = new Delaunator(points);
      } else {
        delete this.collinear;
      }

      const halfedges = this.halfedges = this._delaunator.halfedges;
      const hull = this.hull = this._delaunator.hull;
      const triangles = this.triangles = this._delaunator.triangles;
      const inedges = this.inedges.fill(-1);
      const hullIndex = this._hullIndex.fill(-1);

      // Compute an index from each point to an (arbitrary) incoming halfedge
      // Used to give the first neighbor of each point; for this reason,
      // on the hull we give priority to exterior halfedges
      for (let e = 0, n = halfedges.length; e < n; ++e) {
        const p = triangles[e % 3 === 2 ? e - 2 : e + 1];
        if (halfedges[e] === -1 || inedges[p] === -1) inedges[p] = e;
      }
      for (let i = 0, n = hull.length; i < n; ++i) {
        hullIndex[hull[i]] = i;
      }

      // degenerate case: 1 or 2 (distinct) points
      if (hull.length <= 2 && hull.length > 0) {
        this.triangles = new Int32Array(3).fill(-1);
        this.halfedges = new Int32Array(3).fill(-1);
        this.triangles[0] = hull[0];
        this.triangles[1] = hull[1];
        this.triangles[2] = hull[1];
        inedges[hull[0]] = 1;
        if (hull.length === 2) inedges[hull[1]] = 0;
      }
    }
    voronoi(bounds) {
      return new Voronoi(this, bounds);
    }
    *neighbors(i) {
      const {inedges, hull, _hullIndex, halfedges, triangles, collinear} = this;

      // degenerate case with several collinear points
      if (collinear) {
        const l = collinear.indexOf(i);
        if (l > 0) yield collinear[l - 1];
        if (l < collinear.length - 1) yield collinear[l + 1];
        return;
      }

      const e0 = inedges[i];
      if (e0 === -1) return; // coincident point
      let e = e0, p0 = -1;
      do {
        yield p0 = triangles[e];
        e = e % 3 === 2 ? e - 2 : e + 1;
        if (triangles[e] !== i) return; // bad triangulation
        e = halfedges[e];
        if (e === -1) {
          const p = hull[(_hullIndex[i] + 1) % hull.length];
          if (p !== p0) yield p;
          return;
        }
      } while (e !== e0);
    }
    find(x, y, i = 0) {
      if ((x = +x, x !== x) || (y = +y, y !== y)) return -1;
      const i0 = i;
      let c;
      while ((c = this._step(i, x, y)) >= 0 && c !== i && c !== i0) i = c;
      return c;
    }
    _step(i, x, y) {
      const {inedges, hull, _hullIndex, halfedges, triangles, points} = this;
      if (inedges[i] === -1 || !points.length) return (i + 1) % (points.length >> 1);
      let c = i;
      let dc = pow(x - points[i * 2], 2) + pow(y - points[i * 2 + 1], 2);
      const e0 = inedges[i];
      let e = e0;
      do {
        let t = triangles[e];
        const dt = pow(x - points[t * 2], 2) + pow(y - points[t * 2 + 1], 2);
        if (dt < dc) dc = dt, c = t;
        e = e % 3 === 2 ? e - 2 : e + 1;
        if (triangles[e] !== i) break; // bad triangulation
        e = halfedges[e];
        if (e === -1) {
          e = hull[(_hullIndex[i] + 1) % hull.length];
          if (e !== t) {
            if (pow(x - points[e * 2], 2) + pow(y - points[e * 2 + 1], 2) < dc) return e;
          }
          break;
        }
      } while (e !== e0);
      return c;
    }
    render(context) {
      const buffer = context == null ? context = new Path : undefined;
      const {points, halfedges, triangles} = this;
      for (let i = 0, n = halfedges.length; i < n; ++i) {
        const j = halfedges[i];
        if (j < i) continue;
        const ti = triangles[i] * 2;
        const tj = triangles[j] * 2;
        context.moveTo(points[ti], points[ti + 1]);
        context.lineTo(points[tj], points[tj + 1]);
      }
      this.renderHull(context);
      return buffer && buffer.value();
    }
    renderPoints(context, r = 2) {
      const buffer = context == null ? context = new Path : undefined;
      const {points} = this;
      for (let i = 0, n = points.length; i < n; i += 2) {
        const x = points[i], y = points[i + 1];
        context.moveTo(x + r, y);
        context.arc(x, y, r, 0, tau$1);
      }
      return buffer && buffer.value();
    }
    renderHull(context) {
      const buffer = context == null ? context = new Path : undefined;
      const {hull, points} = this;
      const h = hull[0] * 2, n = hull.length;
      context.moveTo(points[h], points[h + 1]);
      for (let i = 1; i < n; ++i) {
        const h = 2 * hull[i];
        context.lineTo(points[h], points[h + 1]);
      }
      context.closePath();
      return buffer && buffer.value();
    }
    hullPolygon() {
      const polygon = new Polygon;
      this.renderHull(polygon);
      return polygon.value();
    }
    renderTriangle(i, context) {
      const buffer = context == null ? context = new Path : undefined;
      const {points, triangles} = this;
      const t0 = triangles[i *= 3] * 2;
      const t1 = triangles[i + 1] * 2;
      const t2 = triangles[i + 2] * 2;
      context.moveTo(points[t0], points[t0 + 1]);
      context.lineTo(points[t1], points[t1 + 1]);
      context.lineTo(points[t2], points[t2 + 1]);
      context.closePath();
      return buffer && buffer.value();
    }
    *trianglePolygons() {
      const {triangles} = this;
      for (let i = 0, n = triangles.length / 3; i < n; ++i) {
        yield this.trianglePolygon(i);
      }
    }
    trianglePolygon(i) {
      const polygon = new Polygon;
      this.renderTriangle(i, polygon);
      return polygon.value();
    }
  }

  function flatArray(points, fx, fy, that) {
    const n = points.length;
    const array = new Float64Array(n * 2);
    for (let i = 0; i < n; ++i) {
      const p = points[i];
      array[i * 2] = fx.call(that, p, i, points);
      array[i * 2 + 1] = fy.call(that, p, i, points);
    }
    return array;
  }

  function* flatIterable(points, fx, fy, that) {
    let i = 0;
    for (const p of points) {
      yield fx.call(that, p, i, points);
      yield fy.call(that, p, i, points);
      ++i;
    }
  }

  // Adds floating point numbers with twice the normal precision.
  // Reference: J. R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and
  // Fast Robust Geometric Predicates, Discrete & Computational Geometry 18(3)
  // 305–363 (1997).
  // Code adapted from GeographicLib by Charles F. F. Karney,
  // http://geographiclib.sourceforge.net/

  function adder() {
    return new Adder;
  }

  function Adder() {
    this.reset();
  }

  Adder.prototype = {
    constructor: Adder,
    reset: function() {
      this.s = // rounded value
      this.t = 0; // exact error
    },
    add: function(y) {
      add(temp, y, this.t);
      add(this, temp.s, this.s);
      if (this.s) this.t += temp.t;
      else this.s = temp.t;
    },
    valueOf: function() {
      return this.s;
    }
  };

  var temp = new Adder;

  function add(adder, a, b) {
    var x = adder.s = a + b,
        bv = x - a,
        av = x - bv;
    adder.t = (a - av) + (b - bv);
  }

  var epsilon = 1e-6;
  var epsilon2 = 1e-12;
  var pi$1 = Math.PI;
  var halfPi$1 = pi$1 / 2;
  var quarterPi = pi$1 / 4;
  var tau = pi$1 * 2;

  var degrees$1 = 180 / pi$1;
  var radians$1 = pi$1 / 180;

  var abs = Math.abs;
  var atan = Math.atan;
  var atan2$1 = Math.atan2;
  var cos$1 = Math.cos;
  var sin$1 = Math.sin;
  var sign$1 = Math.sign || function(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; };
  var sqrt$1 = Math.sqrt;

  function acos(x) {
    return x > 1 ? 0 : x < -1 ? pi$1 : Math.acos(x);
  }

  function asin$1(x) {
    return x > 1 ? halfPi$1 : x < -1 ? -halfPi$1 : Math.asin(x);
  }

  function noop() {}

  function streamGeometry(geometry, stream) {
    if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
      streamGeometryType[geometry.type](geometry, stream);
    }
  }

  var streamObjectType = {
    Feature: function(object, stream) {
      streamGeometry(object.geometry, stream);
    },
    FeatureCollection: function(object, stream) {
      var features = object.features, i = -1, n = features.length;
      while (++i < n) streamGeometry(features[i].geometry, stream);
    }
  };

  var streamGeometryType = {
    Sphere: function(object, stream) {
      stream.sphere();
    },
    Point: function(object, stream) {
      object = object.coordinates;
      stream.point(object[0], object[1], object[2]);
    },
    MultiPoint: function(object, stream) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
    },
    LineString: function(object, stream) {
      streamLine(object.coordinates, stream, 0);
    },
    MultiLineString: function(object, stream) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) streamLine(coordinates[i], stream, 0);
    },
    Polygon: function(object, stream) {
      streamPolygon(object.coordinates, stream);
    },
    MultiPolygon: function(object, stream) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) streamPolygon(coordinates[i], stream);
    },
    GeometryCollection: function(object, stream) {
      var geometries = object.geometries, i = -1, n = geometries.length;
      while (++i < n) streamGeometry(geometries[i], stream);
    }
  };

  function streamLine(coordinates, stream, closed) {
    var i = -1, n = coordinates.length - closed, coordinate;
    stream.lineStart();
    while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
    stream.lineEnd();
  }

  function streamPolygon(coordinates, stream) {
    var i = -1, n = coordinates.length;
    stream.polygonStart();
    while (++i < n) streamLine(coordinates[i], stream, 1);
    stream.polygonEnd();
  }

  function geoStream(object, stream) {
    if (object && streamObjectType.hasOwnProperty(object.type)) {
      streamObjectType[object.type](object, stream);
    } else {
      streamGeometry(object, stream);
    }
  }

  function spherical$1(cartesian) {
    return [atan2$1(cartesian[1], cartesian[0]), asin$1(cartesian[2])];
  }

  function cartesian$1(spherical) {
    var lambda = spherical[0], phi = spherical[1], cosPhi = cos$1(phi);
    return [cosPhi * cos$1(lambda), cosPhi * sin$1(lambda), sin$1(phi)];
  }

  function cartesianDot$1(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }

  function cartesianCross$1(a, b) {
    return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  }

  // TODO return a
  function cartesianAddInPlace(a, b) {
    a[0] += b[0], a[1] += b[1], a[2] += b[2];
  }

  function cartesianScale(vector, k) {
    return [vector[0] * k, vector[1] * k, vector[2] * k];
  }

  // TODO return d
  function cartesianNormalizeInPlace(d) {
    var l = sqrt$1(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d[0] /= l, d[1] /= l, d[2] /= l;
  }

  var W0, W1,
      X0, Y0, Z0,
      X1, Y1, Z1,
      X2, Y2, Z2,
      lambda00, phi00, // first point
      x0$1, y0$1, z0; // previous point

  var centroidStream = {
    sphere: noop,
    point: centroidPoint,
    lineStart: centroidLineStart,
    lineEnd: centroidLineEnd,
    polygonStart: function() {
      centroidStream.lineStart = centroidRingStart;
      centroidStream.lineEnd = centroidRingEnd;
    },
    polygonEnd: function() {
      centroidStream.lineStart = centroidLineStart;
      centroidStream.lineEnd = centroidLineEnd;
    }
  };

  // Arithmetic mean of Cartesian vectors.
  function centroidPoint(lambda, phi) {
    lambda *= radians$1, phi *= radians$1;
    var cosPhi = cos$1(phi);
    centroidPointCartesian(cosPhi * cos$1(lambda), cosPhi * sin$1(lambda), sin$1(phi));
  }

  function centroidPointCartesian(x, y, z) {
    ++W0;
    X0 += (x - X0) / W0;
    Y0 += (y - Y0) / W0;
    Z0 += (z - Z0) / W0;
  }

  function centroidLineStart() {
    centroidStream.point = centroidLinePointFirst;
  }

  function centroidLinePointFirst(lambda, phi) {
    lambda *= radians$1, phi *= radians$1;
    var cosPhi = cos$1(phi);
    x0$1 = cosPhi * cos$1(lambda);
    y0$1 = cosPhi * sin$1(lambda);
    z0 = sin$1(phi);
    centroidStream.point = centroidLinePoint;
    centroidPointCartesian(x0$1, y0$1, z0);
  }

  function centroidLinePoint(lambda, phi) {
    lambda *= radians$1, phi *= radians$1;
    var cosPhi = cos$1(phi),
        x = cosPhi * cos$1(lambda),
        y = cosPhi * sin$1(lambda),
        z = sin$1(phi),
        w = atan2$1(sqrt$1((w = y0$1 * z - z0 * y) * w + (w = z0 * x - x0$1 * z) * w + (w = x0$1 * y - y0$1 * x) * w), x0$1 * x + y0$1 * y + z0 * z);
    W1 += w;
    X1 += w * (x0$1 + (x0$1 = x));
    Y1 += w * (y0$1 + (y0$1 = y));
    Z1 += w * (z0 + (z0 = z));
    centroidPointCartesian(x0$1, y0$1, z0);
  }

  function centroidLineEnd() {
    centroidStream.point = centroidPoint;
  }

  // See J. E. Brock, The Inertia Tensor for a Spherical Triangle,
  // J. Applied Mechanics 42, 239 (1975).
  function centroidRingStart() {
    centroidStream.point = centroidRingPointFirst;
  }

  function centroidRingEnd() {
    centroidRingPoint(lambda00, phi00);
    centroidStream.point = centroidPoint;
  }

  function centroidRingPointFirst(lambda, phi) {
    lambda00 = lambda, phi00 = phi;
    lambda *= radians$1, phi *= radians$1;
    centroidStream.point = centroidRingPoint;
    var cosPhi = cos$1(phi);
    x0$1 = cosPhi * cos$1(lambda);
    y0$1 = cosPhi * sin$1(lambda);
    z0 = sin$1(phi);
    centroidPointCartesian(x0$1, y0$1, z0);
  }

  function centroidRingPoint(lambda, phi) {
    lambda *= radians$1, phi *= radians$1;
    var cosPhi = cos$1(phi),
        x = cosPhi * cos$1(lambda),
        y = cosPhi * sin$1(lambda),
        z = sin$1(phi),
        cx = y0$1 * z - z0 * y,
        cy = z0 * x - x0$1 * z,
        cz = x0$1 * y - y0$1 * x,
        m = sqrt$1(cx * cx + cy * cy + cz * cz),
        w = asin$1(m), // line weight = angle
        v = m && -w / m; // area weight multiplier
    X2 += v * cx;
    Y2 += v * cy;
    Z2 += v * cz;
    W1 += w;
    X1 += w * (x0$1 + (x0$1 = x));
    Y1 += w * (y0$1 + (y0$1 = y));
    Z1 += w * (z0 + (z0 = z));
    centroidPointCartesian(x0$1, y0$1, z0);
  }

  function geoCentroid(object) {
    W0 = W1 =
    X0 = Y0 = Z0 =
    X1 = Y1 = Z1 =
    X2 = Y2 = Z2 = 0;
    geoStream(object, centroidStream);

    var x = X2,
        y = Y2,
        z = Z2,
        m = x * x + y * y + z * z;

    // If the area-weighted ccentroid is undefined, fall back to length-weighted ccentroid.
    if (m < epsilon2) {
      x = X1, y = Y1, z = Z1;
      // If the feature has zero length, fall back to arithmetic mean of point vectors.
      if (W1 < epsilon) x = X0, y = Y0, z = Z0;
      m = x * x + y * y + z * z;
      // If the feature still has an undefined ccentroid, then return.
      if (m < epsilon2) return [NaN, NaN];
    }

    return [atan2$1(y, x) * degrees$1, asin$1(z / sqrt$1(m)) * degrees$1];
  }

  function compose(a, b) {

    function compose(x, y) {
      return x = a(x, y), b(x[0], x[1]);
    }

    if (a.invert && b.invert) compose.invert = function(x, y) {
      return x = b.invert(x, y), x && a.invert(x[0], x[1]);
    };

    return compose;
  }

  function rotationIdentity(lambda, phi) {
    return [abs(lambda) > pi$1 ? lambda + Math.round(-lambda / tau) * tau : lambda, phi];
  }

  rotationIdentity.invert = rotationIdentity;

  function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
    return (deltaLambda %= tau) ? (deltaPhi || deltaGamma ? compose(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma))
      : rotationLambda(deltaLambda))
      : (deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma)
      : rotationIdentity);
  }

  function forwardRotationLambda(deltaLambda) {
    return function(lambda, phi) {
      return lambda += deltaLambda, [lambda > pi$1 ? lambda - tau : lambda < -pi$1 ? lambda + tau : lambda, phi];
    };
  }

  function rotationLambda(deltaLambda) {
    var rotation = forwardRotationLambda(deltaLambda);
    rotation.invert = forwardRotationLambda(-deltaLambda);
    return rotation;
  }

  function rotationPhiGamma(deltaPhi, deltaGamma) {
    var cosDeltaPhi = cos$1(deltaPhi),
        sinDeltaPhi = sin$1(deltaPhi),
        cosDeltaGamma = cos$1(deltaGamma),
        sinDeltaGamma = sin$1(deltaGamma);

    function rotation(lambda, phi) {
      var cosPhi = cos$1(phi),
          x = cos$1(lambda) * cosPhi,
          y = sin$1(lambda) * cosPhi,
          z = sin$1(phi),
          k = z * cosDeltaPhi + x * sinDeltaPhi;
      return [
        atan2$1(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
        asin$1(k * cosDeltaGamma + y * sinDeltaGamma)
      ];
    }

    rotation.invert = function(lambda, phi) {
      var cosPhi = cos$1(phi),
          x = cos$1(lambda) * cosPhi,
          y = sin$1(lambda) * cosPhi,
          z = sin$1(phi),
          k = z * cosDeltaGamma - y * sinDeltaGamma;
      return [
        atan2$1(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
        asin$1(k * cosDeltaPhi - x * sinDeltaPhi)
      ];
    };

    return rotation;
  }

  function geoRotation(rotate) {
    rotate = rotateRadians(rotate[0] * radians$1, rotate[1] * radians$1, rotate.length > 2 ? rotate[2] * radians$1 : 0);

    function forward(coordinates) {
      coordinates = rotate(coordinates[0] * radians$1, coordinates[1] * radians$1);
      return coordinates[0] *= degrees$1, coordinates[1] *= degrees$1, coordinates;
    }

    forward.invert = function(coordinates) {
      coordinates = rotate.invert(coordinates[0] * radians$1, coordinates[1] * radians$1);
      return coordinates[0] *= degrees$1, coordinates[1] *= degrees$1, coordinates;
    };

    return forward;
  }

  // Generates a circle centered at [0°, 0°], with a given radius and precision.
  function circleStream(stream, radius, delta, direction, t0, t1) {
    if (!delta) return;
    var cosRadius = cos$1(radius),
        sinRadius = sin$1(radius),
        step = direction * delta;
    if (t0 == null) {
      t0 = radius + direction * tau;
      t1 = radius - step / 2;
    } else {
      t0 = circleRadius(cosRadius, t0);
      t1 = circleRadius(cosRadius, t1);
      if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * tau;
    }
    for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
      point = spherical$1([cosRadius, -sinRadius * cos$1(t), -sinRadius * sin$1(t)]);
      stream.point(point[0], point[1]);
    }
  }

  // Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
  function circleRadius(cosRadius, point) {
    point = cartesian$1(point), point[0] -= cosRadius;
    cartesianNormalizeInPlace(point);
    var radius = acos(-point[1]);
    return ((-point[2] < 0 ? -radius : radius) + tau - epsilon) % tau;
  }

  function clipBuffer() {
    var lines = [],
        line;
    return {
      point: function(x, y, m) {
        line.push([x, y, m]);
      },
      lineStart: function() {
        lines.push(line = []);
      },
      lineEnd: noop,
      rejoin: function() {
        if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
      },
      result: function() {
        var result = lines;
        lines = [];
        line = null;
        return result;
      }
    };
  }

  function pointEqual(a, b) {
    return abs(a[0] - b[0]) < epsilon && abs(a[1] - b[1]) < epsilon;
  }

  function Intersection(point, points, other, entry) {
    this.x = point;
    this.z = points;
    this.o = other; // another intersection
    this.e = entry; // is an entry?
    this.v = false; // visited
    this.n = this.p = null; // next & previous
  }

  // A generalized polygon clipping algorithm: given a polygon that has been cut
  // into its visible line segments, and rejoins the segments by interpolating
  // along the clip edge.
  function clipRejoin(segments, compareIntersection, startInside, interpolate, stream) {
    var subject = [],
        clip = [],
        i,
        n;

    segments.forEach(function(segment) {
      if ((n = segment.length - 1) <= 0) return;
      var n, p0 = segment[0], p1 = segment[n], x;

      if (pointEqual(p0, p1)) {
        if (!p0[2] && !p1[2]) {
          stream.lineStart();
          for (i = 0; i < n; ++i) stream.point((p0 = segment[i])[0], p0[1]);
          stream.lineEnd();
          return;
        }
        // handle degenerate cases by moving the point
        p1[0] += 2 * epsilon;
      }

      subject.push(x = new Intersection(p0, segment, null, true));
      clip.push(x.o = new Intersection(p0, null, x, false));
      subject.push(x = new Intersection(p1, segment, null, false));
      clip.push(x.o = new Intersection(p1, null, x, true));
    });

    if (!subject.length) return;

    clip.sort(compareIntersection);
    link(subject);
    link(clip);

    for (i = 0, n = clip.length; i < n; ++i) {
      clip[i].e = startInside = !startInside;
    }

    var start = subject[0],
        points,
        point;

    while (1) {
      // Find first unvisited intersection.
      var current = start,
          isSubject = true;
      while (current.v) if ((current = current.n) === start) return;
      points = current.z;
      stream.lineStart();
      do {
        current.v = current.o.v = true;
        if (current.e) {
          if (isSubject) {
            for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.x, current.n.x, 1, stream);
          }
          current = current.n;
        } else {
          if (isSubject) {
            points = current.p.z;
            for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.x, current.p.x, -1, stream);
          }
          current = current.p;
        }
        current = current.o;
        points = current.z;
        isSubject = !isSubject;
      } while (!current.v);
      stream.lineEnd();
    }
  }

  function link(array) {
    if (!(n = array.length)) return;
    var n,
        i = 0,
        a = array[0],
        b;
    while (++i < n) {
      a.n = b = array[i];
      b.p = a;
      a = b;
    }
    a.n = b = array[0];
    b.p = a;
  }

  var sum = adder();

  function longitude(point) {
    if (abs(point[0]) <= pi$1)
      return point[0];
    else
      return sign$1(point[0]) * ((abs(point[0]) + pi$1) % tau - pi$1);
  }

  function polygonContains(polygon, point) {
    var lambda = longitude(point),
        phi = point[1],
        sinPhi = sin$1(phi),
        normal = [sin$1(lambda), -cos$1(lambda), 0],
        angle = 0,
        winding = 0;

    sum.reset();

    if (sinPhi === 1) phi = halfPi$1 + epsilon;
    else if (sinPhi === -1) phi = -halfPi$1 - epsilon;

    for (var i = 0, n = polygon.length; i < n; ++i) {
      if (!(m = (ring = polygon[i]).length)) continue;
      var ring,
          m,
          point0 = ring[m - 1],
          lambda0 = longitude(point0),
          phi0 = point0[1] / 2 + quarterPi,
          sinPhi0 = sin$1(phi0),
          cosPhi0 = cos$1(phi0);

      for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
        var point1 = ring[j],
            lambda1 = longitude(point1),
            phi1 = point1[1] / 2 + quarterPi,
            sinPhi1 = sin$1(phi1),
            cosPhi1 = cos$1(phi1),
            delta = lambda1 - lambda0,
            sign = delta >= 0 ? 1 : -1,
            absDelta = sign * delta,
            antimeridian = absDelta > pi$1,
            k = sinPhi0 * sinPhi1;

        sum.add(atan2$1(k * sign * sin$1(absDelta), cosPhi0 * cosPhi1 + k * cos$1(absDelta)));
        angle += antimeridian ? delta + sign * tau : delta;

        // Are the longitudes either side of the point’s meridian (lambda),
        // and are the latitudes smaller than the parallel (phi)?
        if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
          var arc = cartesianCross$1(cartesian$1(point0), cartesian$1(point1));
          cartesianNormalizeInPlace(arc);
          var intersection = cartesianCross$1(normal, arc);
          cartesianNormalizeInPlace(intersection);
          var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin$1(intersection[2]);
          if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
            winding += antimeridian ^ delta >= 0 ? 1 : -1;
          }
        }
      }
    }

    // First, determine whether the South pole is inside or outside:
    //
    // It is inside if:
    // * the polygon winds around it in a clockwise direction.
    // * the polygon does not (cumulatively) wind around it, but has a negative
    //   (counter-clockwise) area.
    //
    // Second, count the (signed) number of times a segment crosses a lambda
    // from the point to the South pole.  If it is zero, then the point is the
    // same side as the South pole.

    return (angle < -epsilon || angle < epsilon && sum < -epsilon) ^ (winding & 1);
  }

  function ascending$1(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  function bisector$1(compare) {
    if (compare.length === 1) compare = ascendingComparator$1(compare);
    return {
      left: function(a, x, lo, hi) {
        if (lo == null) lo = 0;
        if (hi == null) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) < 0) lo = mid + 1;
          else hi = mid;
        }
        return lo;
      },
      right: function(a, x, lo, hi) {
        if (lo == null) lo = 0;
        if (hi == null) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) > 0) hi = mid;
          else lo = mid + 1;
        }
        return lo;
      }
    };
  }

  function ascendingComparator$1(f) {
    return function(d, x) {
      return ascending$1(f(d), x);
    };
  }

  bisector$1(ascending$1);

  function merge(arrays) {
    var n = arrays.length,
        m,
        i = -1,
        j = 0,
        merged,
        array;

    while (++i < n) j += arrays[i].length;
    merged = new Array(j);

    while (--n >= 0) {
      array = arrays[n];
      m = array.length;
      while (--m >= 0) {
        merged[--j] = array[m];
      }
    }

    return merged;
  }

  function clip(pointVisible, clipLine, interpolate, start) {
    return function(sink) {
      var line = clipLine(sink),
          ringBuffer = clipBuffer(),
          ringSink = clipLine(ringBuffer),
          polygonStarted = false,
          polygon,
          segments,
          ring;

      var clip = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          clip.point = pointRing;
          clip.lineStart = ringStart;
          clip.lineEnd = ringEnd;
          segments = [];
          polygon = [];
        },
        polygonEnd: function() {
          clip.point = point;
          clip.lineStart = lineStart;
          clip.lineEnd = lineEnd;
          segments = merge(segments);
          var startInside = polygonContains(polygon, start);
          if (segments.length) {
            if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
            clipRejoin(segments, compareIntersection, startInside, interpolate, sink);
          } else if (startInside) {
            if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
            sink.lineStart();
            interpolate(null, null, 1, sink);
            sink.lineEnd();
          }
          if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
          segments = polygon = null;
        },
        sphere: function() {
          sink.polygonStart();
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
          sink.polygonEnd();
        }
      };

      function point(lambda, phi) {
        if (pointVisible(lambda, phi)) sink.point(lambda, phi);
      }

      function pointLine(lambda, phi) {
        line.point(lambda, phi);
      }

      function lineStart() {
        clip.point = pointLine;
        line.lineStart();
      }

      function lineEnd() {
        clip.point = point;
        line.lineEnd();
      }

      function pointRing(lambda, phi) {
        ring.push([lambda, phi]);
        ringSink.point(lambda, phi);
      }

      function ringStart() {
        ringSink.lineStart();
        ring = [];
      }

      function ringEnd() {
        pointRing(ring[0][0], ring[0][1]);
        ringSink.lineEnd();

        var clean = ringSink.clean(),
            ringSegments = ringBuffer.result(),
            i, n = ringSegments.length, m,
            segment,
            point;

        ring.pop();
        polygon.push(ring);
        ring = null;

        if (!n) return;

        // No intersections.
        if (clean & 1) {
          segment = ringSegments[0];
          if ((m = segment.length - 1) > 0) {
            if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
            sink.lineStart();
            for (i = 0; i < m; ++i) sink.point((point = segment[i])[0], point[1]);
            sink.lineEnd();
          }
          return;
        }

        // Rejoin connected segments.
        // TODO reuse ringBuffer.rejoin()?
        if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));

        segments.push(ringSegments.filter(validSegment));
      }

      return clip;
    };
  }

  function validSegment(segment) {
    return segment.length > 1;
  }

  // Intersections are sorted along the clip edge. For both antimeridian cutting
  // and circle clipping, the same comparison is used.
  function compareIntersection(a, b) {
    return ((a = a.x)[0] < 0 ? a[1] - halfPi$1 - epsilon : halfPi$1 - a[1])
         - ((b = b.x)[0] < 0 ? b[1] - halfPi$1 - epsilon : halfPi$1 - b[1]);
  }

  var clipAntimeridian = clip(
    function() { return true; },
    clipAntimeridianLine,
    clipAntimeridianInterpolate,
    [-pi$1, -halfPi$1]
  );

  // Takes a line and cuts into visible segments. Return values: 0 - there were
  // intersections or the line was empty; 1 - no intersections; 2 - there were
  // intersections, and the first and last segments should be rejoined.
  function clipAntimeridianLine(stream) {
    var lambda0 = NaN,
        phi0 = NaN,
        sign0 = NaN,
        clean; // no intersections

    return {
      lineStart: function() {
        stream.lineStart();
        clean = 1;
      },
      point: function(lambda1, phi1) {
        var sign1 = lambda1 > 0 ? pi$1 : -pi$1,
            delta = abs(lambda1 - lambda0);
        if (abs(delta - pi$1) < epsilon) { // line crosses a pole
          stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? halfPi$1 : -halfPi$1);
          stream.point(sign0, phi0);
          stream.lineEnd();
          stream.lineStart();
          stream.point(sign1, phi0);
          stream.point(lambda1, phi0);
          clean = 0;
        } else if (sign0 !== sign1 && delta >= pi$1) { // line crosses antimeridian
          if (abs(lambda0 - sign0) < epsilon) lambda0 -= sign0 * epsilon; // handle degeneracies
          if (abs(lambda1 - sign1) < epsilon) lambda1 -= sign1 * epsilon;
          phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
          stream.point(sign0, phi0);
          stream.lineEnd();
          stream.lineStart();
          stream.point(sign1, phi0);
          clean = 0;
        }
        stream.point(lambda0 = lambda1, phi0 = phi1);
        sign0 = sign1;
      },
      lineEnd: function() {
        stream.lineEnd();
        lambda0 = phi0 = NaN;
      },
      clean: function() {
        return 2 - clean; // if intersections, rejoin first and last segments
      }
    };
  }

  function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
    var cosPhi0,
        cosPhi1,
        sinLambda0Lambda1 = sin$1(lambda0 - lambda1);
    return abs(sinLambda0Lambda1) > epsilon
        ? atan((sin$1(phi0) * (cosPhi1 = cos$1(phi1)) * sin$1(lambda1)
            - sin$1(phi1) * (cosPhi0 = cos$1(phi0)) * sin$1(lambda0))
            / (cosPhi0 * cosPhi1 * sinLambda0Lambda1))
        : (phi0 + phi1) / 2;
  }

  function clipAntimeridianInterpolate(from, to, direction, stream) {
    var phi;
    if (from == null) {
      phi = direction * halfPi$1;
      stream.point(-pi$1, phi);
      stream.point(0, phi);
      stream.point(pi$1, phi);
      stream.point(pi$1, 0);
      stream.point(pi$1, -phi);
      stream.point(0, -phi);
      stream.point(-pi$1, -phi);
      stream.point(-pi$1, 0);
      stream.point(-pi$1, phi);
    } else if (abs(from[0] - to[0]) > epsilon) {
      var lambda = from[0] < to[0] ? pi$1 : -pi$1;
      phi = direction * lambda / 2;
      stream.point(-lambda, phi);
      stream.point(0, phi);
      stream.point(lambda, phi);
    } else {
      stream.point(to[0], to[1]);
    }
  }

  function clipCircle(radius) {
    var cr = cos$1(radius),
        delta = 6 * radians$1,
        smallRadius = cr > 0,
        notHemisphere = abs(cr) > epsilon; // TODO optimise for this common case

    function interpolate(from, to, direction, stream) {
      circleStream(stream, radius, delta, direction, from, to);
    }

    function visible(lambda, phi) {
      return cos$1(lambda) * cos$1(phi) > cr;
    }

    // Takes a line and cuts into visible segments. Return values used for polygon
    // clipping: 0 - there were intersections or the line was empty; 1 - no
    // intersections 2 - there were intersections, and the first and last segments
    // should be rejoined.
    function clipLine(stream) {
      var point0, // previous point
          c0, // code for previous point
          v0, // visibility of previous point
          v00, // visibility of first point
          clean; // no intersections
      return {
        lineStart: function() {
          v00 = v0 = false;
          clean = 1;
        },
        point: function(lambda, phi) {
          var point1 = [lambda, phi],
              point2,
              v = visible(lambda, phi),
              c = smallRadius
                ? v ? 0 : code(lambda, phi)
                : v ? code(lambda + (lambda < 0 ? pi$1 : -pi$1), phi) : 0;
          if (!point0 && (v00 = v0 = v)) stream.lineStart();
          if (v !== v0) {
            point2 = intersect(point0, point1);
            if (!point2 || pointEqual(point0, point2) || pointEqual(point1, point2))
              point1[2] = 1;
          }
          if (v !== v0) {
            clean = 0;
            if (v) {
              // outside going in
              stream.lineStart();
              point2 = intersect(point1, point0);
              stream.point(point2[0], point2[1]);
            } else {
              // inside going out
              point2 = intersect(point0, point1);
              stream.point(point2[0], point2[1], 2);
              stream.lineEnd();
            }
            point0 = point2;
          } else if (notHemisphere && point0 && smallRadius ^ v) {
            var t;
            // If the codes for two points are different, or are both zero,
            // and there this segment intersects with the small circle.
            if (!(c & c0) && (t = intersect(point1, point0, true))) {
              clean = 0;
              if (smallRadius) {
                stream.lineStart();
                stream.point(t[0][0], t[0][1]);
                stream.point(t[1][0], t[1][1]);
                stream.lineEnd();
              } else {
                stream.point(t[1][0], t[1][1]);
                stream.lineEnd();
                stream.lineStart();
                stream.point(t[0][0], t[0][1], 3);
              }
            }
          }
          if (v && (!point0 || !pointEqual(point0, point1))) {
            stream.point(point1[0], point1[1]);
          }
          point0 = point1, v0 = v, c0 = c;
        },
        lineEnd: function() {
          if (v0) stream.lineEnd();
          point0 = null;
        },
        // Rejoin first and last segments if there were intersections and the first
        // and last points were visible.
        clean: function() {
          return clean | ((v00 && v0) << 1);
        }
      };
    }

    // Intersects the great circle between a and b with the clip circle.
    function intersect(a, b, two) {
      var pa = cartesian$1(a),
          pb = cartesian$1(b);

      // We have two planes, n1.p = d1 and n2.p = d2.
      // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
      var n1 = [1, 0, 0], // normal
          n2 = cartesianCross$1(pa, pb),
          n2n2 = cartesianDot$1(n2, n2),
          n1n2 = n2[0], // cartesianDot(n1, n2),
          determinant = n2n2 - n1n2 * n1n2;

      // Two polar points.
      if (!determinant) return !two && a;

      var c1 =  cr * n2n2 / determinant,
          c2 = -cr * n1n2 / determinant,
          n1xn2 = cartesianCross$1(n1, n2),
          A = cartesianScale(n1, c1),
          B = cartesianScale(n2, c2);
      cartesianAddInPlace(A, B);

      // Solve |p(t)|^2 = 1.
      var u = n1xn2,
          w = cartesianDot$1(A, u),
          uu = cartesianDot$1(u, u),
          t2 = w * w - uu * (cartesianDot$1(A, A) - 1);

      if (t2 < 0) return;

      var t = sqrt$1(t2),
          q = cartesianScale(u, (-w - t) / uu);
      cartesianAddInPlace(q, A);
      q = spherical$1(q);

      if (!two) return q;

      // Two intersection points.
      var lambda0 = a[0],
          lambda1 = b[0],
          phi0 = a[1],
          phi1 = b[1],
          z;

      if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;

      var delta = lambda1 - lambda0,
          polar = abs(delta - pi$1) < epsilon,
          meridian = polar || delta < epsilon;

      if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;

      // Check that the first point is between a and b.
      if (meridian
          ? polar
            ? phi0 + phi1 > 0 ^ q[1] < (abs(q[0] - lambda0) < epsilon ? phi0 : phi1)
            : phi0 <= q[1] && q[1] <= phi1
          : delta > pi$1 ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
        var q1 = cartesianScale(u, (-w + t) / uu);
        cartesianAddInPlace(q1, A);
        return [q, spherical$1(q1)];
      }
    }

    // Generates a 4-bit vector representing the location of a point relative to
    // the small circle's bounding box.
    function code(lambda, phi) {
      var r = smallRadius ? radius : pi$1 - radius,
          code = 0;
      if (lambda < -r) code |= 1; // left
      else if (lambda > r) code |= 2; // right
      if (phi < -r) code |= 4; // below
      else if (phi > r) code |= 8; // above
      return code;
    }

    return clip(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-pi$1, radius - pi$1]);
  }

  function clipLine(a, b, x0, y0, x1, y1) {
    var ax = a[0],
        ay = a[1],
        bx = b[0],
        by = b[1],
        t0 = 0,
        t1 = 1,
        dx = bx - ax,
        dy = by - ay,
        r;

    r = x0 - ax;
    if (!dx && r > 0) return;
    r /= dx;
    if (dx < 0) {
      if (r < t0) return;
      if (r < t1) t1 = r;
    } else if (dx > 0) {
      if (r > t1) return;
      if (r > t0) t0 = r;
    }

    r = x1 - ax;
    if (!dx && r < 0) return;
    r /= dx;
    if (dx < 0) {
      if (r > t1) return;
      if (r > t0) t0 = r;
    } else if (dx > 0) {
      if (r < t0) return;
      if (r < t1) t1 = r;
    }

    r = y0 - ay;
    if (!dy && r > 0) return;
    r /= dy;
    if (dy < 0) {
      if (r < t0) return;
      if (r < t1) t1 = r;
    } else if (dy > 0) {
      if (r > t1) return;
      if (r > t0) t0 = r;
    }

    r = y1 - ay;
    if (!dy && r < 0) return;
    r /= dy;
    if (dy < 0) {
      if (r > t1) return;
      if (r > t0) t0 = r;
    } else if (dy > 0) {
      if (r < t0) return;
      if (r < t1) t1 = r;
    }

    if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
    if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
    return true;
  }

  var clipMax = 1e9, clipMin = -clipMax;

  // TODO Use d3-polygon’s polygonContains here for the ring check?
  // TODO Eliminate duplicate buffering in clipBuffer and polygon.push?

  function clipRectangle(x0, y0, x1, y1) {

    function visible(x, y) {
      return x0 <= x && x <= x1 && y0 <= y && y <= y1;
    }

    function interpolate(from, to, direction, stream) {
      var a = 0, a1 = 0;
      if (from == null
          || (a = corner(from, direction)) !== (a1 = corner(to, direction))
          || comparePoint(from, to) < 0 ^ direction > 0) {
        do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
        while ((a = (a + direction + 4) % 4) !== a1);
      } else {
        stream.point(to[0], to[1]);
      }
    }

    function corner(p, direction) {
      return abs(p[0] - x0) < epsilon ? direction > 0 ? 0 : 3
          : abs(p[0] - x1) < epsilon ? direction > 0 ? 2 : 1
          : abs(p[1] - y0) < epsilon ? direction > 0 ? 1 : 0
          : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
    }

    function compareIntersection(a, b) {
      return comparePoint(a.x, b.x);
    }

    function comparePoint(a, b) {
      var ca = corner(a, 1),
          cb = corner(b, 1);
      return ca !== cb ? ca - cb
          : ca === 0 ? b[1] - a[1]
          : ca === 1 ? a[0] - b[0]
          : ca === 2 ? a[1] - b[1]
          : b[0] - a[0];
    }

    return function(stream) {
      var activeStream = stream,
          bufferStream = clipBuffer(),
          segments,
          polygon,
          ring,
          x__, y__, v__, // first point
          x_, y_, v_, // previous point
          first,
          clean;

      var clipStream = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: polygonStart,
        polygonEnd: polygonEnd
      };

      function point(x, y) {
        if (visible(x, y)) activeStream.point(x, y);
      }

      function polygonInside() {
        var winding = 0;

        for (var i = 0, n = polygon.length; i < n; ++i) {
          for (var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j) {
            a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
            if (a1 <= y1) { if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding; }
            else { if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding; }
          }
        }

        return winding;
      }

      // Buffer geometry within a polygon and then clip it en masse.
      function polygonStart() {
        activeStream = bufferStream, segments = [], polygon = [], clean = true;
      }

      function polygonEnd() {
        var startInside = polygonInside(),
            cleanInside = clean && startInside,
            visible = (segments = merge(segments)).length;
        if (cleanInside || visible) {
          stream.polygonStart();
          if (cleanInside) {
            stream.lineStart();
            interpolate(null, null, 1, stream);
            stream.lineEnd();
          }
          if (visible) {
            clipRejoin(segments, compareIntersection, startInside, interpolate, stream);
          }
          stream.polygonEnd();
        }
        activeStream = stream, segments = polygon = ring = null;
      }

      function lineStart() {
        clipStream.point = linePoint;
        if (polygon) polygon.push(ring = []);
        first = true;
        v_ = false;
        x_ = y_ = NaN;
      }

      // TODO rather than special-case polygons, simply handle them separately.
      // Ideally, coincident intersection points should be jittered to avoid
      // clipping issues.
      function lineEnd() {
        if (segments) {
          linePoint(x__, y__);
          if (v__ && v_) bufferStream.rejoin();
          segments.push(bufferStream.result());
        }
        clipStream.point = point;
        if (v_) activeStream.lineEnd();
      }

      function linePoint(x, y) {
        var v = visible(x, y);
        if (polygon) ring.push([x, y]);
        if (first) {
          x__ = x, y__ = y, v__ = v;
          first = false;
          if (v) {
            activeStream.lineStart();
            activeStream.point(x, y);
          }
        } else {
          if (v && v_) activeStream.point(x, y);
          else {
            var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))],
                b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];
            if (clipLine(a, b, x0, y0, x1, y1)) {
              if (!v_) {
                activeStream.lineStart();
                activeStream.point(a[0], a[1]);
              }
              activeStream.point(b[0], b[1]);
              if (!v) activeStream.lineEnd();
              clean = false;
            } else if (v) {
              activeStream.lineStart();
              activeStream.point(x, y);
              clean = false;
            }
          }
        }
        x_ = x, y_ = y, v_ = v;
      }

      return clipStream;
    };
  }

  var lengthSum = adder(),
      lambda0,
      sinPhi0,
      cosPhi0;

  var lengthStream = {
    sphere: noop,
    point: noop,
    lineStart: lengthLineStart,
    lineEnd: noop,
    polygonStart: noop,
    polygonEnd: noop
  };

  function lengthLineStart() {
    lengthStream.point = lengthPointFirst;
    lengthStream.lineEnd = lengthLineEnd;
  }

  function lengthLineEnd() {
    lengthStream.point = lengthStream.lineEnd = noop;
  }

  function lengthPointFirst(lambda, phi) {
    lambda *= radians$1, phi *= radians$1;
    lambda0 = lambda, sinPhi0 = sin$1(phi), cosPhi0 = cos$1(phi);
    lengthStream.point = lengthPoint;
  }

  function lengthPoint(lambda, phi) {
    lambda *= radians$1, phi *= radians$1;
    var sinPhi = sin$1(phi),
        cosPhi = cos$1(phi),
        delta = abs(lambda - lambda0),
        cosDelta = cos$1(delta),
        sinDelta = sin$1(delta),
        x = cosPhi * sinDelta,
        y = cosPhi0 * sinPhi - sinPhi0 * cosPhi * cosDelta,
        z = sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosDelta;
    lengthSum.add(atan2$1(sqrt$1(x * x + y * y), z));
    lambda0 = lambda, sinPhi0 = sinPhi, cosPhi0 = cosPhi;
  }

  function length(object) {
    lengthSum.reset();
    geoStream(object, lengthStream);
    return +lengthSum;
  }

  var coordinates = [null, null],
      object = {type: "LineString", coordinates: coordinates};

  function geoDistance(a, b) {
    coordinates[0] = a;
    coordinates[1] = b;
    return length(object);
  }

  function identity(x) {
    return x;
  }

  var x0 = Infinity,
      y0 = x0,
      x1 = -x0,
      y1 = x1;

  var boundsStream = {
    point: boundsPoint,
    lineStart: noop,
    lineEnd: noop,
    polygonStart: noop,
    polygonEnd: noop,
    result: function() {
      var bounds = [[x0, y0], [x1, y1]];
      x1 = y1 = -(y0 = x0 = Infinity);
      return bounds;
    }
  };

  function boundsPoint(x, y) {
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  }

  function transformer(methods) {
    return function(stream) {
      var s = new TransformStream;
      for (var key in methods) s[key] = methods[key];
      s.stream = stream;
      return s;
    };
  }

  function TransformStream() {}

  TransformStream.prototype = {
    constructor: TransformStream,
    point: function(x, y) { this.stream.point(x, y); },
    sphere: function() { this.stream.sphere(); },
    lineStart: function() { this.stream.lineStart(); },
    lineEnd: function() { this.stream.lineEnd(); },
    polygonStart: function() { this.stream.polygonStart(); },
    polygonEnd: function() { this.stream.polygonEnd(); }
  };

  function fit(projection, fitBounds, object) {
    var clip = projection.clipExtent && projection.clipExtent();
    projection.scale(150).translate([0, 0]);
    if (clip != null) projection.clipExtent(null);
    geoStream(object, projection.stream(boundsStream));
    fitBounds(boundsStream.result());
    if (clip != null) projection.clipExtent(clip);
    return projection;
  }

  function fitExtent(projection, extent, object) {
    return fit(projection, function(b) {
      var w = extent[1][0] - extent[0][0],
          h = extent[1][1] - extent[0][1],
          k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])),
          x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2,
          y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
      projection.scale(150 * k).translate([x, y]);
    }, object);
  }

  function fitSize(projection, size, object) {
    return fitExtent(projection, [[0, 0], size], object);
  }

  function fitWidth(projection, width, object) {
    return fit(projection, function(b) {
      var w = +width,
          k = w / (b[1][0] - b[0][0]),
          x = (w - k * (b[1][0] + b[0][0])) / 2,
          y = -k * b[0][1];
      projection.scale(150 * k).translate([x, y]);
    }, object);
  }

  function fitHeight(projection, height, object) {
    return fit(projection, function(b) {
      var h = +height,
          k = h / (b[1][1] - b[0][1]),
          x = -k * b[0][0],
          y = (h - k * (b[1][1] + b[0][1])) / 2;
      projection.scale(150 * k).translate([x, y]);
    }, object);
  }

  var maxDepth = 16, // maximum depth of subdivision
      cosMinDistance = cos$1(30 * radians$1); // cos(minimum angular distance)

  function resample(project, delta2) {
    return +delta2 ? resample$1(project, delta2) : resampleNone(project);
  }

  function resampleNone(project) {
    return transformer({
      point: function(x, y) {
        x = project(x, y);
        this.stream.point(x[0], x[1]);
      }
    });
  }

  function resample$1(project, delta2) {

    function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
      var dx = x1 - x0,
          dy = y1 - y0,
          d2 = dx * dx + dy * dy;
      if (d2 > 4 * delta2 && depth--) {
        var a = a0 + a1,
            b = b0 + b1,
            c = c0 + c1,
            m = sqrt$1(a * a + b * b + c * c),
            phi2 = asin$1(c /= m),
            lambda2 = abs(abs(c) - 1) < epsilon || abs(lambda0 - lambda1) < epsilon ? (lambda0 + lambda1) / 2 : atan2$1(b, a),
            p = project(lambda2, phi2),
            x2 = p[0],
            y2 = p[1],
            dx2 = x2 - x0,
            dy2 = y2 - y0,
            dz = dy * dx2 - dx * dy2;
        if (dz * dz / d2 > delta2 // perpendicular projected distance
            || abs((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
            || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) { // angular distance
          resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
          stream.point(x2, y2);
          resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
        }
      }
    }
    return function(stream) {
      var lambda00, x00, y00, a00, b00, c00, // first point
          lambda0, x0, y0, a0, b0, c0; // previous point

      var resampleStream = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() { stream.polygonStart(); resampleStream.lineStart = ringStart; },
        polygonEnd: function() { stream.polygonEnd(); resampleStream.lineStart = lineStart; }
      };

      function point(x, y) {
        x = project(x, y);
        stream.point(x[0], x[1]);
      }

      function lineStart() {
        x0 = NaN;
        resampleStream.point = linePoint;
        stream.lineStart();
      }

      function linePoint(lambda, phi) {
        var c = cartesian$1([lambda, phi]), p = project(lambda, phi);
        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
        stream.point(x0, y0);
      }

      function lineEnd() {
        resampleStream.point = point;
        stream.lineEnd();
      }

      function ringStart() {
        lineStart();
        resampleStream.point = ringPoint;
        resampleStream.lineEnd = ringEnd;
      }

      function ringPoint(lambda, phi) {
        linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
        resampleStream.point = linePoint;
      }

      function ringEnd() {
        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
        resampleStream.lineEnd = lineEnd;
        lineEnd();
      }

      return resampleStream;
    };
  }

  var transformRadians = transformer({
    point: function(x, y) {
      this.stream.point(x * radians$1, y * radians$1);
    }
  });

  function transformRotate(rotate) {
    return transformer({
      point: function(x, y) {
        var r = rotate(x, y);
        return this.stream.point(r[0], r[1]);
      }
    });
  }

  function scaleTranslate(k, dx, dy, sx, sy) {
    function transform(x, y) {
      x *= sx; y *= sy;
      return [dx + k * x, dy - k * y];
    }
    transform.invert = function(x, y) {
      return [(x - dx) / k * sx, (dy - y) / k * sy];
    };
    return transform;
  }

  function scaleTranslateRotate(k, dx, dy, sx, sy, alpha) {
    var cosAlpha = cos$1(alpha),
        sinAlpha = sin$1(alpha),
        a = cosAlpha * k,
        b = sinAlpha * k,
        ai = cosAlpha / k,
        bi = sinAlpha / k,
        ci = (sinAlpha * dy - cosAlpha * dx) / k,
        fi = (sinAlpha * dx + cosAlpha * dy) / k;
    function transform(x, y) {
      x *= sx; y *= sy;
      return [a * x - b * y + dx, dy - b * x - a * y];
    }
    transform.invert = function(x, y) {
      return [sx * (ai * x - bi * y + ci), sy * (fi - bi * x - ai * y)];
    };
    return transform;
  }

  function projection(project) {
    return projectionMutator(function() { return project; })();
  }

  function projectionMutator(projectAt) {
    var project,
        k = 150, // scale
        x = 480, y = 250, // translate
        lambda = 0, phi = 0, // center
        deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, // pre-rotate
        alpha = 0, // post-rotate angle
        sx = 1, // reflectX
        sy = 1, // reflectX
        theta = null, preclip = clipAntimeridian, // pre-clip angle
        x0 = null, y0, x1, y1, postclip = identity, // post-clip extent
        delta2 = 0.5, // precision
        projectResample,
        projectTransform,
        projectRotateTransform,
        cache,
        cacheStream;

    function projection(point) {
      return projectRotateTransform(point[0] * radians$1, point[1] * radians$1);
    }

    function invert(point) {
      point = projectRotateTransform.invert(point[0], point[1]);
      return point && [point[0] * degrees$1, point[1] * degrees$1];
    }

    projection.stream = function(stream) {
      return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
    };

    projection.preclip = function(_) {
      return arguments.length ? (preclip = _, theta = undefined, reset()) : preclip;
    };

    projection.postclip = function(_) {
      return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
    };

    projection.clipAngle = function(_) {
      return arguments.length ? (preclip = +_ ? clipCircle(theta = _ * radians$1) : (theta = null, clipAntimeridian), reset()) : theta * degrees$1;
    };

    projection.clipExtent = function(_) {
      return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, identity) : clipRectangle(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
    };

    projection.scale = function(_) {
      return arguments.length ? (k = +_, recenter()) : k;
    };

    projection.translate = function(_) {
      return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [x, y];
    };

    projection.center = function(_) {
      return arguments.length ? (lambda = _[0] % 360 * radians$1, phi = _[1] % 360 * radians$1, recenter()) : [lambda * degrees$1, phi * degrees$1];
    };

    projection.rotate = function(_) {
      return arguments.length ? (deltaLambda = _[0] % 360 * radians$1, deltaPhi = _[1] % 360 * radians$1, deltaGamma = _.length > 2 ? _[2] % 360 * radians$1 : 0, recenter()) : [deltaLambda * degrees$1, deltaPhi * degrees$1, deltaGamma * degrees$1];
    };

    projection.angle = function(_) {
      return arguments.length ? (alpha = _ % 360 * radians$1, recenter()) : alpha * degrees$1;
    };

    projection.reflectX = function(_) {
      return arguments.length ? (sx = _ ? -1 : 1, recenter()) : sx < 0;
    };

    projection.reflectY = function(_) {
      return arguments.length ? (sy = _ ? -1 : 1, recenter()) : sy < 0;
    };

    projection.precision = function(_) {
      return arguments.length ? (projectResample = resample(projectTransform, delta2 = _ * _), reset()) : sqrt$1(delta2);
    };

    projection.fitExtent = function(extent, object) {
      return fitExtent(projection, extent, object);
    };

    projection.fitSize = function(size, object) {
      return fitSize(projection, size, object);
    };

    projection.fitWidth = function(width, object) {
      return fitWidth(projection, width, object);
    };

    projection.fitHeight = function(height, object) {
      return fitHeight(projection, height, object);
    };

    function recenter() {
      var center = scaleTranslateRotate(k, 0, 0, sx, sy, alpha).apply(null, project(lambda, phi)),
          transform = (alpha ? scaleTranslateRotate : scaleTranslate)(k, x - center[0], y - center[1], sx, sy, alpha);
      rotate = rotateRadians(deltaLambda, deltaPhi, deltaGamma);
      projectTransform = compose(project, transform);
      projectRotateTransform = compose(rotate, projectTransform);
      projectResample = resample(projectTransform, delta2);
      return reset();
    }

    function reset() {
      cache = cacheStream = null;
      return projection;
    }

    return function() {
      project = projectAt.apply(this, arguments);
      projection.invert = project.invert && invert;
      return recenter();
    };
  }

  function azimuthalInvert(angle) {
    return function(x, y) {
      var z = sqrt$1(x * x + y * y),
          c = angle(z),
          sc = sin$1(c),
          cc = cos$1(c);
      return [
        atan2$1(x * sc, z * cc),
        asin$1(z && y * sc / z)
      ];
    }
  }

  function stereographicRaw(x, y) {
    var cy = cos$1(y), k = 1 + cos$1(x) * cy;
    return [cy * sin$1(x) / k, sin$1(y) / k];
  }

  stereographicRaw.invert = azimuthalInvert(function(z) {
    return 2 * atan(z);
  });

  function geoStereographic() {
    return projection(stereographicRaw)
        .scale(250)
        .clipAngle(142);
  }

  var pi = Math.PI;
  var halfPi = pi / 2;

  var degrees = 180 / pi;
  var radians = pi / 180;
  var atan2 = Math.atan2;
  var cos = Math.cos;
  var max = Math.max;
  var min = Math.min;
  var sin = Math.sin;
  var sign =
    Math.sign ||
    function(x) {
      return x > 0 ? 1 : x < 0 ? -1 : 0;
    };
  var sqrt = Math.sqrt;

  function asin(x) {
    return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
  }

  function cartesianDot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }

  function cartesianCross(a, b) {
    return [
      a[1] * b[2] - a[2] * b[1],
      a[2] * b[0] - a[0] * b[2],
      a[0] * b[1] - a[1] * b[0]
    ];
  }

  function cartesianAdd(a, b) {
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
  }

  function cartesianNormalize(d) {
    var l = sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    return [d[0] / l, d[1] / l, d[2] / l];
  }

  //

  // Converts 3D Cartesian to spherical coordinates (degrees).
  function spherical(cartesian) {
    return [
      atan2(cartesian[1], cartesian[0]) * degrees,
      asin(max(-1, min(1, cartesian[2]))) * degrees
    ];
  }

  // Converts spherical coordinates (degrees) to 3D Cartesian.
  function cartesian(coordinates) {
    var lambda = coordinates[0] * radians,
      phi = coordinates[1] * radians,
      cosphi = cos(phi);
    return [cosphi * cos(lambda), cosphi * sin(lambda), sin(phi)];
  }

  // Spherical excess of a triangle (in spherical coordinates)
  function excess(triangle) {
    triangle = triangle.map(p => cartesian(p));
    return cartesianDot(triangle[0], cartesianCross(triangle[2], triangle[1]));
  }

  function geoDelaunay(points) {
    const delaunay = geo_delaunay_from(points),
      triangles = geo_triangles(delaunay),
      edges = geo_edges(triangles, points),
      neighbors = geo_neighbors(triangles, points.length),
      find = geo_find(neighbors, points),
      // Voronoi ; could take a center function as an argument
      circumcenters = geo_circumcenters(triangles, points),
      { polygons, centers } = geo_polygons(circumcenters, triangles, points),
      mesh = geo_mesh(polygons),
      hull = geo_hull(triangles, points),
      // Urquhart ; returns a function that takes a distance array as argument.
      urquhart = geo_urquhart(edges, triangles);
    return {
      delaunay,
      edges,
      triangles,
      centers,
      neighbors,
      polygons,
      mesh,
      hull,
      urquhart,
      find
    };
  }

  function geo_find(neighbors, points) {
    function distance2(a,b) {
      let x = a[0] - b[0],
          y = a[1] - b[1],
          z = a[2] - b[2];
      return x * x + y * y + z * z;
    }

    return function find(x, y, next) {
      if (next === undefined) next = 0;
      let cell,
        dist,
        found = next;
      const xyz = cartesian([x, y]);
      do {
        cell = next;
        next = null;
        dist = distance2(xyz, cartesian(points[cell]));
        neighbors[cell].forEach(i => {
          let ndist = distance2(xyz, cartesian(points[i]));
          if (ndist < dist) {
            dist = ndist;
            next = i;
            found = i;
            return;
          }
        });
      } while (next !== null);

      return found;
    };
  }

  function geo_delaunay_from(points) {
    if (points.length < 2) return {};

    // find a valid point to send to infinity
    let pivot = 0;
    while (isNaN(points[pivot][0]+points[pivot][1]) && pivot++ < points.length) {}

    const r = geoRotation(points[pivot]),
      projection = geoStereographic()
        .translate([0, 0])
        .scale(1)
        .rotate(r.invert([180, 0]));
    points = points.map(projection);

    const zeros = [];
    let max2 = 1;
    for (let i = 0, n = points.length; i < n; i++) {
      let m = points[i][0] ** 2 + points[i][1] ** 2;
      if (!isFinite(m) || m > 1e32) zeros.push(i);
      else if (m > max2) max2 = m;
    }

    const FAR = 1e6 * sqrt(max2);

    zeros.forEach(i => (points[i] = [FAR, 0]));

    // Add infinite horizon points
    points.push([0,FAR]);
    points.push([-FAR,0]);
    points.push([0,-FAR]);

    const delaunay = Delaunay.from(points);

    delaunay.projection = projection;

    // clean up the triangulation
    const {triangles, halfedges, inedges} = delaunay;
    for (let i = 0, l = halfedges.length; i < l; i++) {
      if (halfedges[i] < 0) {
        const j = i % 3 == 2 ? i - 2 : i + 1;
        const k = i % 3 == 0 ? i + 2 : i - 1;
        const a = halfedges[j];
        const b = halfedges[k];
        halfedges[a] = b;
        halfedges[b] = a;
        halfedges[j] = halfedges[k] = -1;
        triangles[i] = triangles[j] = triangles[k] = pivot;
        inedges[triangles[a]] = a % 3 == 0 ? a + 2 : a - 1;
        inedges[triangles[b]] = b % 3 == 0 ? b + 2 : b - 1;
        i += 2 - i % 3;
      } else if (triangles[i] > points.length - 3 - 1) {
        triangles[i] = pivot;
      }
    }
    
    // there should always be 4 degenerate triangles
    // console.warn(degenerate);
    return delaunay;
  }

  function geo_edges(triangles, points) {
    const _index = {};
    if (points.length === 2) return [[0, 1]];
    triangles.forEach(tri => {
      if (tri[0] === tri[1]) return;
      if (excess(tri.map(i => points[i])) < 0) return;
      for (let i = 0, j; i < 3; i++) {
        j = (i + 1) % 3;
        _index[extent([tri[i], tri[j]]).join("-")] = true;
      }
    });
    return Object.keys(_index).map(d => d.split("-").map(Number));
  }

  function geo_triangles(delaunay) {
    const {triangles} = delaunay;
    if (!triangles) return [];

    const geo_triangles = [];
    for (let i = 0, n = triangles.length / 3; i < n; i++) {
      const a = triangles[3 * i],
        b = triangles[3 * i + 1],
        c = triangles[3 * i + 2];
      if (a !== b && b !== c) {
        geo_triangles.push([a, c, b]);
      }
    }
    return geo_triangles;
  }

  function geo_circumcenters(triangles, points) {
    // if (!use_centroids) {
    return triangles.map(tri => {
      const c = tri.map(i => points[i]).map(cartesian),
        V = cartesianAdd(
          cartesianAdd(cartesianCross(c[1], c[0]), cartesianCross(c[2], c[1])),
          cartesianCross(c[0], c[2])
        );
      return spherical(cartesianNormalize(V));
    });
    /*} else {
      return triangles.map(tri => {
        return d3.geoCentroid({
          type: "MultiPoint",
          coordinates: tri.map(i => points[i])
        });
      });
    }*/
  }

  function geo_neighbors(triangles, npoints) {
    const neighbors = [];
    triangles.forEach((tri, i) => {
      for (let j = 0; j < 3; j++) {
        const a = tri[j],
          b = tri[(j + 1) % 3];
          tri[(j + 2) % 3];
        neighbors[a] = neighbors[a] || [];
        neighbors[a].push(b);
      }
    });

    // degenerate cases
    if (triangles.length === 0) {
      if (npoints === 2) (neighbors[0] = [1]), (neighbors[1] = [0]);
      else if (npoints === 1) neighbors[0] = [];
    }

    return neighbors;
  }

  function geo_polygons(circumcenters, triangles, points) {
    const polygons = [];

    const centers = circumcenters.slice();

    if (triangles.length === 0) {
      if (points.length < 2) return { polygons, centers };
      if (points.length === 2) {
        // two hemispheres
        const a = cartesian(points[0]),
          b = cartesian(points[1]),
          m = cartesianNormalize(cartesianAdd(a, b)),
          d = cartesianNormalize(cartesianCross(a, b)),
          c = cartesianCross(m, d);
        const poly = [
          m,
          cartesianCross(m, c),
          cartesianCross(cartesianCross(m, c), c),
          cartesianCross(cartesianCross(cartesianCross(m, c), c), c)
        ]
          .map(spherical)
          .map(supplement);
        return (
          polygons.push(poly),
          polygons.push(poly.slice().reverse()),
          { polygons, centers }
        );
      }
    }

    triangles.forEach((tri, t) => {
      for (let j = 0; j < 3; j++) {
        const a = tri[j],
          b = tri[(j + 1) % 3],
          c = tri[(j + 2) % 3];
        polygons[a] = polygons[a] || [];
        polygons[a].push([b, c, t, [a, b, c]]);
      }
    });

    // reorder each polygon
    const reordered = polygons.map(poly => {
      const p = [poly[0][2]]; // t
      let k = poly[0][1]; // k = c
      for (let i = 1; i < poly.length; i++) {
        // look for b = k
        for (let j = 0; j < poly.length; j++) {
          if (poly[j][0] == k) {
            k = poly[j][1];
            p.push(poly[j][2]);
            break;
          }
        }
      }

      if (p.length > 2) {
        return p;
      } else if (p.length == 2) {
        const R0 = o_midpoint(
            points[poly[0][3][0]],
            points[poly[0][3][1]],
            centers[p[0]]
          ),
          R1 = o_midpoint(
            points[poly[0][3][2]],
            points[poly[0][3][0]],
            centers[p[0]]
          );
        const i0 = supplement(R0),
          i1 = supplement(R1);
        return [p[0], i1, p[1], i0];
      }
    });

    function supplement(point) {
      let f = -1;
      centers.slice(triangles.length, Infinity).forEach((p, i) => {
        if (p[0] === point[0] && p[1] === point[1]) f = i + triangles.length;
      });
      if (f < 0) (f = centers.length), centers.push(point);
      return f;
    }

    return { polygons: reordered, centers };
  }

  function o_midpoint(a, b, c) {
    a = cartesian(a);
    b = cartesian(b);
    c = cartesian(c);
    const s = sign(cartesianDot(cartesianCross(b, a), c));
    return spherical(cartesianNormalize(cartesianAdd(a, b)).map(d => s * d));
  }

  function geo_mesh(polygons) {
    const mesh = [];
    polygons.forEach(poly => {
      if (!poly) return;
      let p = poly[poly.length - 1];
      for (let q of poly) {
        if (q > p) mesh.push([p, q]);
        p = q;
      }
    });
    return mesh;
  }

  function geo_urquhart(edges, triangles) {
    return function(distances) {
      const _lengths = {},
        _urquhart = {};
      edges.forEach((edge, i) => {
        const u = edge.join("-");
        _lengths[u] = distances[i];
        _urquhart[u] = true;
      });

      triangles.forEach(tri => {
        let l = 0,
          remove = -1;
        for (var j = 0; j < 3; j++) {
          let u = extent([tri[j], tri[(j + 1) % 3]]).join("-");
          if (_lengths[u] > l) {
            l = _lengths[u];
            remove = u;
          }
        }
        _urquhart[remove] = false;
      });

      return edges.map(edge => _urquhart[edge.join("-")]);
    };
  }

  function geo_hull(triangles, points) {
    const _hull = {},
      hull = [];
    triangles.map(tri => {
      if (excess(tri.map(i => points[i > points.length ? 0 : i])) < 0) return;
      for (let i = 0; i < 3; i++) {
        let e = [tri[i], tri[(i + 1) % 3]],
          code = `${e[1]}-${e[0]}`;
        if (_hull[code]) delete _hull[code];
        else _hull[e.join("-")] = true;
      }
    });

    const _index = {};
    let start;
    Object.keys(_hull).forEach(e => {
      e = e.split("-").map(Number);
      _index[e[0]] = e[1];
      start = e[0];
    });

    if (start === undefined) return hull;

    let next = start;
    do {
      hull.push(next);
      let n = _index[next];
      _index[next] = -1;
      next = n;
    } while (next > -1 && next !== start);

    return hull;
  }

  //

  function geoVoronoi(data) {
    const v = function(data) {
      v.delaunay = null;
      v._data = data;

      if (typeof v._data === "object" && v._data.type === "FeatureCollection") {
        v._data = v._data.features;
      }
      if (typeof v._data === "object") {
        const temp = v._data
          .map(d => [v._vx(d), v._vy(d), d])
          .filter(d => isFinite(d[0] + d[1]));
        v.points = temp.map(d => [d[0], d[1]]);
        v.valid = temp.map(d => d[2]);
        v.delaunay = geoDelaunay(v.points);
      }
      return v;
    };

    v._vx = function(d) {
      if (typeof d == "object" && "type" in d) {
        return geoCentroid(d)[0];
      }
      if (0 in d) return d[0];
    };
    v._vy = function(d) {
      if (typeof d == "object" && "type" in d) {
        return geoCentroid(d)[1];
      }
      if (1 in d) return d[1];
    };

    v.x = function(f) {
      if (!f) return v._vx;
      v._vx = f;
      return v;
    };
    v.y = function(f) {
      if (!f) return v._vy;
      v._vy = f;
      return v;
    };

    v.polygons = function(data) {
      if (data !== undefined) {
        v(data);
      }

      if (!v.delaunay) return false;
      const coll = {
        type: "FeatureCollection",
        features: []
      };
      if (v.valid.length === 0) return coll;
      v.delaunay.polygons.forEach((poly, i) =>
        coll.features.push({
          type: "Feature",
          geometry: !poly
            ? null
            : {
                type: "Polygon",
                coordinates: [[...poly, poly[0]].map(i => v.delaunay.centers[i])]
              },
          properties: {
            site: v.valid[i],
            sitecoordinates: v.points[i],
            neighbours: v.delaunay.neighbors[i] // not part of the public API
          }
        })
      );
      if (v.valid.length === 1)
        coll.features.push({
          type: "Feature",
          geometry: { type: "Sphere" },
          properties: {
            site: v.valid[0],
            sitecoordinates: v.points[0],
            neighbours: []
          }
        });
      return coll;
    };

    v.triangles = function(data) {
      if (data !== undefined) {
        v(data);
      }
      if (!v.delaunay) return false;

      return {
        type: "FeatureCollection",
        features: v.delaunay.triangles
          .map((tri, index) => {
            tri = tri.map(i => v.points[i]);
            tri.center = v.delaunay.centers[index];
            return tri;
          })
          .filter(tri => excess(tri) > 0)
          .map(tri => ({
            type: "Feature",
            properties: {
              circumcenter: tri.center
            },
            geometry: {
              type: "Polygon",
              coordinates: [[...tri, tri[0]]]
            }
          }))
      };
    };

    v.links = function(data) {
      if (data !== undefined) {
        v(data);
      }
      if (!v.delaunay) return false;
      const _distances = v.delaunay.edges.map(e =>
          geoDistance(v.points[e[0]], v.points[e[1]])
        ),
        _urquart = v.delaunay.urquhart(_distances);
      return {
        type: "FeatureCollection",
        features: v.delaunay.edges.map((e, i) => ({
          type: "Feature",
          properties: {
            source: v.valid[e[0]],
            target: v.valid[e[1]],
            length: _distances[i],
            urquhart: !!_urquart[i]
          },
          geometry: {
            type: "LineString",
            coordinates: [v.points[e[0]], v.points[e[1]]]
          }
        }))
      };
    };

    v.mesh = function(data) {
      if (data !== undefined) {
        v(data);
      }
      if (!v.delaunay) return false;
      return {
        type: "MultiLineString",
        coordinates: v.delaunay.edges.map(e => [v.points[e[0]], v.points[e[1]]])
      };
    };

    v.cellMesh = function(data) {
      if (data !== undefined) {
        v(data);
      }
      if (!v.delaunay) return false;
      const { centers, polygons } = v.delaunay;
      const coordinates = [];
      for (const p of polygons) {
        if (!p) continue;
        for (
          let n = p.length, p0 = p[n - 1], p1 = p[0], i = 0;
          i < n;
          p0 = p1, p1 = p[++i]
        ) {
          if (p1 > p0) {
            coordinates.push([centers[p0], centers[p1]]);
          }
        }
      }
      return {
        type: "MultiLineString",
        coordinates
      };
    };

    v._found = undefined;
    v.find = function(x, y, radius) {
      v._found = v.delaunay.find(x, y, v._found);
      if (!radius || geoDistance([x, y], v.points[v._found]) < radius)
        return v._found;
    };

    v.hull = function(data) {
      if (data !== undefined) {
        v(data);
      }
      const hull = v.delaunay.hull,
        points = v.points;
      return hull.length === 0
        ? null
        : {
            type: "Polygon",
            coordinates: [[...hull.map(i => points[i]), points[hull[0]]]]
          };
    };

    return data ? v(data) : v;
  }

  function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  function bisector(compare) {
    if (compare.length === 1) compare = ascendingComparator(compare);
    return {
      left: function(a, x, lo, hi) {
        if (lo == null) lo = 0;
        if (hi == null) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) < 0) lo = mid + 1;
          else hi = mid;
        }
        return lo;
      },
      right: function(a, x, lo, hi) {
        if (lo == null) lo = 0;
        if (hi == null) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) > 0) hi = mid;
          else lo = mid + 1;
        }
        return lo;
      }
    };
  }

  function ascendingComparator(f) {
    return function(d, x) {
      return ascending(f(d), x);
    };
  }

  bisector(ascending);

  var prefix = "$";

  function Map$1() {}

  Map$1.prototype = map.prototype = {
    constructor: Map$1,
    has: function(key) {
      return (prefix + key) in this;
    },
    get: function(key) {
      return this[prefix + key];
    },
    set: function(key, value) {
      this[prefix + key] = value;
      return this;
    },
    remove: function(key) {
      var property = prefix + key;
      return property in this && delete this[property];
    },
    clear: function() {
      for (var property in this) if (property[0] === prefix) delete this[property];
    },
    keys: function() {
      var keys = [];
      for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
      return keys;
    },
    values: function() {
      var values = [];
      for (var property in this) if (property[0] === prefix) values.push(this[property]);
      return values;
    },
    entries: function() {
      var entries = [];
      for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
      return entries;
    },
    size: function() {
      var size = 0;
      for (var property in this) if (property[0] === prefix) ++size;
      return size;
    },
    empty: function() {
      for (var property in this) if (property[0] === prefix) return false;
      return true;
    },
    each: function(f) {
      for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
    }
  };

  function map(object, f) {
    var map = new Map$1;

    // Copy constructor.
    if (object instanceof Map$1) object.each(function(value, key) { map.set(key, value); });

    // Index array by numeric index or specified key function.
    else if (Array.isArray(object)) {
      var i = -1,
          n = object.length,
          o;

      if (f == null) while (++i < n) map.set(i, object[i]);
      else while (++i < n) map.set(f(o = object[i], i, object), o);
    }

    // Convert object to map.
    else if (object) for (var key in object) map.set(key, object[key]);

    return map;
  }

  function Set$1() {}

  var proto = map.prototype;

  Set$1.prototype = {
    constructor: Set$1,
    has: proto.has,
    add: function(value) {
      value += "";
      this[prefix + value] = value;
      return this;
    },
    remove: proto.remove,
    clear: proto.clear,
    values: proto.keys,
    size: proto.size,
    empty: proto.empty,
    each: proto.each
  };

  function define(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  }

  function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition) prototype[key] = definition[key];
    return prototype;
  }

  function Color() {}

  var darker = 0.7;
  var brighter = 1 / darker;

  var reI = "\\s*([+-]?\\d+)\\s*",
      reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      reHex = /^#([0-9a-f]{3,8})$/,
      reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
      reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
      reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
      reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
      reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
      reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

  var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
  };

  define(Color, color, {
    copy: function(channels) {
      return Object.assign(new this.constructor, this, channels);
    },
    displayable: function() {
      return this.rgb().displayable();
    },
    hex: color_formatHex, // Deprecated! Use color.formatHex.
    formatHex: color_formatHex,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
  });

  function color_formatHex() {
    return this.rgb().formatHex();
  }

  function color_formatHsl() {
    return hslConvert(this).formatHsl();
  }

  function color_formatRgb() {
    return this.rgb().formatRgb();
  }

  function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
        : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
        : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
        : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
        : null) // invalid hex
        : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
        : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
        : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
        : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
        : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
        : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
        : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
        : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
        : null;
  }

  function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
  }

  function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
  }

  function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb;
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
  }

  function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
  }

  function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
  }

  define(Rgb, rgb, extend(Color, {
    brighter: function(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function() {
      return this;
    },
    displayable: function() {
      return (-0.5 <= this.r && this.r < 255.5)
          && (-0.5 <= this.g && this.g < 255.5)
          && (-0.5 <= this.b && this.b < 255.5)
          && (0 <= this.opacity && this.opacity <= 1);
    },
    hex: rgb_formatHex, // Deprecated! Use color.formatHex.
    formatHex: rgb_formatHex,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
  }));

  function rgb_formatHex() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  }

  function rgb_formatRgb() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }

  function hex(value) {
    value = Math.max(0, Math.min(255, Math.round(value) || 0));
    return (value < 16 ? "0" : "") + value.toString(16);
  }

  function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
  }

  function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl;
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255,
        g = o.g / 255,
        b = o.b / 255,
        min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        h = NaN,
        s = max - min,
        l = (max + min) / 2;
    if (s) {
      if (r === max) h = (g - b) / s + (g < b) * 6;
      else if (g === max) h = (b - r) / s + 2;
      else h = (r - g) / s + 4;
      s /= l < 0.5 ? max + min : 2 - max - min;
      h *= 60;
    } else {
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl(h, s, l, o.opacity);
  }

  function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
  }

  function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
  }

  define(Hsl, hsl, extend(Color, {
    brighter: function(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function() {
      var h = this.h % 360 + (this.h < 0) * 360,
          s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
          l = this.l,
          m2 = l + (l < 0.5 ? l : 1 - l) * s,
          m1 = 2 * l - m2;
      return new Rgb(
        hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
        hsl2rgb(h, m1, m2),
        hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
        this.opacity
      );
    },
    displayable: function() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s))
          && (0 <= this.l && this.l <= 1)
          && (0 <= this.opacity && this.opacity <= 1);
    },
    formatHsl: function() {
      var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
      return (a === 1 ? "hsl(" : "hsla(")
          + (this.h || 0) + ", "
          + (this.s || 0) * 100 + "%, "
          + (this.l || 0) * 100 + "%"
          + (a === 1 ? ")" : ", " + a + ")");
    }
  }));

  /* From FvD 13.37, CSS Color Module Level 3 */
  function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60
        : h < 180 ? m2
        : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
        : m1) * 255;
  }

  var deg2rad = Math.PI / 180;
  var rad2deg = 180 / Math.PI;

  var A = -0.14861,
      B = +1.78277,
      C = -0.29227,
      D = -0.90649,
      E = +1.97294,
      ED = E * D,
      EB = E * B,
      BC_DA = B * C - D * A;

  function cubehelixConvert(o) {
    if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Rgb)) o = rgbConvert(o);
    var r = o.r / 255,
        g = o.g / 255,
        b = o.b / 255,
        l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
        bl = b - l,
        k = (E * (g - l) - C * bl) / D,
        s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
        h = s ? Math.atan2(k, bl) * rad2deg - 120 : NaN;
    return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
  }

  function cubehelix$1(h, s, l, opacity) {
    return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
  }

  function Cubehelix(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
  }

  define(Cubehelix, cubehelix$1, extend(Color, {
    brighter: function(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function() {
      var h = isNaN(this.h) ? 0 : (this.h + 120) * deg2rad,
          l = +this.l,
          a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
          cosh = Math.cos(h),
          sinh = Math.sin(h);
      return new Rgb(
        255 * (l + a * (A * cosh + B * sinh)),
        255 * (l + a * (C * cosh + D * sinh)),
        255 * (l + a * (E * cosh)),
        this.opacity
      );
    }
  }));

  function constant(x) {
    return function() {
      return x;
    };
  }

  function linear(a, d) {
    return function(t) {
      return a + t * d;
    };
  }

  function hue(a, b) {
    var d = b - a;
    return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant(isNaN(a) ? b : a);
  }

  function nogamma(a, b) {
    var d = b - a;
    return d ? linear(a, d) : constant(isNaN(a) ? b : a);
  }

  function cubehelix(hue) {
    return (function cubehelixGamma(y) {
      y = +y;

      function cubehelix(start, end) {
        var h = hue((start = cubehelix$1(start)).h, (end = cubehelix$1(end)).h),
            s = nogamma(start.s, end.s),
            l = nogamma(start.l, end.l),
            opacity = nogamma(start.opacity, end.opacity);
        return function(t) {
          start.h = h(t);
          start.s = s(t);
          start.l = l(Math.pow(t, y));
          start.opacity = opacity(t);
          return start + "";
        };
      }

      cubehelix.gamma = cubehelixGamma;

      return cubehelix;
    })(1);
  }

  cubehelix(hue);
  var cubehelixLong = cubehelix(nogamma);

  function colors(s) {
    return s.match(/.{6}/g).map(function(x) {
      return "#" + x;
    });
  }

  colors("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

  colors("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6");

  colors("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9");

  colors("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5");

  cubehelixLong(cubehelix$1(300, 0.5, 0.0), cubehelix$1(-240, 0.5, 1.0));

  cubehelixLong(cubehelix$1(-100, 0.75, 0.35), cubehelix$1(80, 1.50, 0.8));

  cubehelixLong(cubehelix$1(260, 0.75, 0.35), cubehelix$1(80, 1.50, 0.8));

  cubehelix$1();

  function ramp(range) {
    var n = range.length;
    return function(t) {
      return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
    };
  }

  ramp(colors("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));

  ramp(colors("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));

  ramp(colors("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));

  ramp(colors("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function geoPolygonTriangulate(polygon) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$resolution = _ref.resolution,
        resolution = _ref$resolution === void 0 ? Infinity : _ref$resolution;

    var contour = interpolateContourPoints(polygon, resolution);
    var edgePoints = merge$1(contour);
    var innerPoints = getInnerGeoPoints(polygon, resolution);
    var points = [].concat(_toConsumableArray(edgePoints), _toConsumableArray(innerPoints));
    var boundariesGeojson = {
      type: 'Polygon',
      coordinates: polygon
    };

    var _geoBounds = geoBounds(boundariesGeojson),
        _geoBounds2 = _slicedToArray(_geoBounds, 2),
        _geoBounds2$ = _slicedToArray(_geoBounds2[0], 2),
        minLng = _geoBounds2$[0],
        minLat = _geoBounds2$[1],
        _geoBounds2$2 = _slicedToArray(_geoBounds2[1], 2),
        maxLng = _geoBounds2$2[0],
        maxLat = _geoBounds2$2[1];

    var crossesPoleOrAntimeridian = minLng > maxLng // crosses antimeridian
    || maxLat >= 89 // crosses north pole
    || minLat <= -89; // crosses south pole

    var indices = [];

    if (crossesPoleOrAntimeridian) {
      // Use d3-geo-voronoi. Slowest, but most accurate for polygons that cross poles or anti-meridian
      var vt = geoVoronoi(points).triangles(); // geoDelaunay generates more triangles than needed

      var pntMap = new Map(points.map(function (_ref2, idx) {
        var _ref3 = _slicedToArray(_ref2, 2),
            lng = _ref3[0],
            lat = _ref3[1];

        return ["".concat(lng, "-").concat(lat), idx];
      }));
      vt.features.forEach(function (f) {
        var _indices;

        var triangle = f.geometry.coordinates[0].slice(0, 3).reverse(); // reverse wound to match earcut

        var inds = [];
        triangle.forEach(function (_ref4) {
          var _ref5 = _slicedToArray(_ref4, 2),
              lng = _ref5[0],
              lat = _ref5[1];

          var k = "".concat(lng, "-").concat(lat);
          pntMap.has(k) && inds.push(pntMap.get(k));
        });
        if (inds.length !== 3) return; // triangle malfunction
        // exclude edge triangles outside polygon perimeter or through holes

        if (inds.some(function (ind) {
          return ind < edgePoints.length;
        })) {
          var triangleCentroid = f.properties.circumcenter;
          if (!pointInside(triangleCentroid, boundariesGeojson, crossesPoleOrAntimeridian)) return;
        }

        (_indices = indices).push.apply(_indices, inds);
      });
    } else if (!innerPoints.length) {
      // earcut triangulation slightly more performing if it's only using the polygon perimeter
      var _earcut$flatten = earcut$1.flatten(contour),
          vertices = _earcut$flatten.vertices,
          _earcut$flatten$holes = _earcut$flatten.holes,
          holes = _earcut$flatten$holes === void 0 ? [] : _earcut$flatten$holes;

      indices = earcut$1(vertices, holes, 2);
    } else {
      (function () {
        // use delaunator
        var delaunay = Delaunator$1.from(points);

        var _loop = function _loop(i, len) {
          var _indices2;

          var inds = [2, 1, 0].map(function (idx) {
            return delaunay.triangles[i + idx];
          }); // reverse wound to have same orientation as earcut

          var triangle = inds.map(function (indice) {
            return points[indice];
          }); // exclude edge triangles outside polygon perimeter or through holes

          if (inds.some(function (ind) {
            return ind < edgePoints.length;
          })) {
            var triangleCentroid = [0, 1].map(function (coordIdx) {
              return mean(triangle, function (p) {
                return p[coordIdx];
              });
            });
            if (!pointInside(triangleCentroid, boundariesGeojson, crossesPoleOrAntimeridian)) return "continue";
          }

          (_indices2 = indices).push.apply(_indices2, _toConsumableArray(inds));
        };

        for (var i = 0, len = delaunay.triangles.length; i < len; i += 3) {
          var _ret = _loop(i);

          if (_ret === "continue") continue;
        }
      })();
    }

    var triangles = {
      points: points,
      indices: indices
    };
    return {
      contour: contour,
      triangles: triangles
    };
  }

  function interpolateContourPoints(polygon, maxDistance) {
    // add interpolated points for segments that are further apart than the max distance
    return polygon.map(function (coords) {
      var pnts = [];
      var prevPnt;
      coords.forEach(function (pnt) {
        if (prevPnt) {
          var dist = geoDistance$1(pnt, prevPnt) * 180 / Math.PI;

          if (dist > maxDistance) {
            var interpol = geoInterpolate(prevPnt, pnt);
            var tStep = 1 / Math.ceil(dist / maxDistance);
            var t = tStep;

            while (t < 1) {
              pnts.push(interpol(t));
              t += tStep;
            }
          }
        }

        pnts.push(prevPnt = pnt);
      });
      return pnts;
    });
  }

  function getInnerGeoPoints(polygon, maxDistance) {
    var boundariesGeojson = {
      type: 'Polygon',
      coordinates: polygon
    };

    var _geoBounds3 = geoBounds(boundariesGeojson),
        _geoBounds4 = _slicedToArray(_geoBounds3, 2),
        _geoBounds4$ = _slicedToArray(_geoBounds4[0], 2),
        minLng = _geoBounds4$[0],
        minLat = _geoBounds4$[1],
        _geoBounds4$2 = _slicedToArray(_geoBounds4[1], 2),
        maxLng = _geoBounds4$2[0],
        maxLat = _geoBounds4$2[1]; // polygon smaller than maxDistance -> no inner points


    if (Math.min(Math.abs(maxLng - minLng), Math.abs(maxLat - minLat)) < maxDistance) return [];
    var crossesPoleOrAntimeridian = minLng > maxLng || maxLat >= 89 || minLat <= -89;
    return getGeoSpiralGrid(maxDistance, {
      minLng: minLng,
      maxLng: maxLng,
      minLat: minLat,
      maxLat: maxLat
    }).filter(function (pnt) {
      return pointInside(pnt, boundariesGeojson, crossesPoleOrAntimeridian);
    });
  }

  function getGeoSpiralGrid(distanceBetweenPoints) {
    var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        minLng = _ref6.minLng,
        maxLng = _ref6.maxLng,
        minLat = _ref6.minLat,
        maxLat = _ref6.maxLat;

    var numPoints = Math.round(Math.pow(360 / distanceBetweenPoints, 2) / Math.PI); // https://observablehq.com/@mbostock/spherical-fibonacci-lattice

    var phi = (1 + Math.sqrt(5)) / 2; // golden ratio

    var getPntLng = function getPntLng(idx) {
      return idx / phi * 360 % 360 - 180;
    };

    var getPntLat = function getPntLat(idx) {
      return Math.acos(2 * idx / numPoints - 1) / Math.PI * 180 - 90;
    };

    var getPntIdx = function getPntIdx(lat) {
      return numPoints * (Math.cos((lat + 90) * Math.PI / 180) + 1) / 2;
    };

    var pntIdxRange = [maxLat !== undefined ? Math.ceil(getPntIdx(maxLat)) : 0, minLat !== undefined ? Math.floor(getPntIdx(minLat)) : numPoints - 1];
    var isLngInRange = minLng === undefined && maxLng === undefined ? function () {
      return true;
    } : minLng === undefined ? function (lng) {
      return lng <= maxLng;
    } : maxLng === undefined ? function (lng) {
      return lng >= minLng;
    } : maxLng >= minLng ? function (lng) {
      return lng >= minLng && lng <= maxLng;
    } : function (lng) {
      return lng >= minLng || lng <= maxLng;
    }; // for ranges that cross the anti-meridian

    var pnts = [];

    for (var i = pntIdxRange[0]; i <= pntIdxRange[1]; i++) {
      var lng = getPntLng(i);
      isLngInRange(lng) && pnts.push([lng, getPntLat(i)]);
    }

    return pnts;
  }

  function pointInside(pnt, polygon) {
    var crossesPoleOrAntimeridian = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    // turf method is more performing but malfunctions if polygon includes a pole (lat = 90 | -90) or crosses the antimeridian (lng = 180 | -180)
    return crossesPoleOrAntimeridian ? geoContains(polygon, pnt) : booleanPointInPolygon(pnt, polygon);
  }

  var THREE$9 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    BufferGeometry: three$1.BufferGeometry,
    Float32BufferAttribute: three$1.Float32BufferAttribute
  };

  var setAttributeFn$3 = new THREE$9.BufferGeometry().setAttribute ? 'setAttribute' : 'addAttribute';

  var ConicPolygonBufferGeometry = /*#__PURE__*/function (_THREE$BufferGeometry) {
    _inherits(ConicPolygonBufferGeometry, _THREE$BufferGeometry);

    var _super = _createSuper(ConicPolygonBufferGeometry);

    function ConicPolygonBufferGeometry(polygonGeoJson, startHeight, endHeight, closedBottom, closedTop, includeSides, curvatureResolution) {
      var _this;

      _classCallCheck(this, ConicPolygonBufferGeometry);

      _this = _super.call(this);
      _this.type = 'ConicPolygonBufferGeometry';
      _this.parameters = {
        polygonGeoJson: polygonGeoJson,
        startHeight: startHeight,
        endHeight: endHeight,
        closedBottom: closedBottom,
        closedTop: closedTop,
        includeSides: includeSides,
        curvatureResolution: curvatureResolution
      }; // defaults

      startHeight = startHeight || 0;
      endHeight = endHeight || 1;
      closedBottom = closedBottom !== undefined ? closedBottom : true;
      closedTop = closedTop !== undefined ? closedTop : true;
      includeSides = includeSides !== undefined ? includeSides : true;
      curvatureResolution = curvatureResolution || 5; // in angular degrees
      // pre-calculate contour and triangulation

      var _geoPolygonTriangulat = geoPolygonTriangulate(polygonGeoJson, {
        resolution: curvatureResolution
      }),
          contour = _geoPolygonTriangulat.contour,
          triangles = _geoPolygonTriangulat.triangles;

      var vertices = [];
      var indices = [];
      var groupCnt = 0; // add groups to apply different materials to torso / caps

      var addGroup = function addGroup(groupData) {
        var prevVertCnt = Math.round(vertices.length / 3);
        var prevIndCnt = indices.length;
        vertices = vertices.concat(groupData.vertices);
        indices = indices.concat(!prevVertCnt ? groupData.indices : groupData.indices.map(function (ind) {
          return ind + prevVertCnt;
        }));

        _this.addGroup(prevIndCnt, indices.length - prevIndCnt, groupCnt++);
      };

      includeSides && addGroup(generateTorso());
      closedBottom && addGroup(generateCap(startHeight, false));
      closedTop && addGroup(generateCap(endHeight, true)); // build geometry

      _this.setIndex(indices);

      _this[setAttributeFn$3]('position', new THREE$9.Float32BufferAttribute(vertices, 3)); // auto-calculate normals


      _this.computeFaceNormals();

      _this.computeVertexNormals(); //


      function generateVertices(polygon, altitude) {
        var coords3d = polygon.map(function (coords) {
          return coords.map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                lng = _ref2[0],
                lat = _ref2[1];

            return polar2Cartesian(lat, lng, altitude);
          });
        }); // returns { vertices, holes, coordinates }. Each point generates 3 vertice items (x,y,z).

        return earcut$1.flatten(coords3d);
      }

      function generateTorso() {
        var _generateVertices = generateVertices(contour, startHeight),
            bottomVerts = _generateVertices.vertices,
            holes = _generateVertices.holes;

        var _generateVertices2 = generateVertices(contour, endHeight),
            topVerts = _generateVertices2.vertices;

        var vertices = merge$1([topVerts, bottomVerts]);
        var numPoints = Math.round(topVerts.length / 3);
        var holesIdx = new Set(holes);
        var lastHoleIdx = 0;
        var indices = [];

        for (var v0Idx = 0; v0Idx < numPoints; v0Idx++) {
          var v1Idx = v0Idx + 1; // next point

          if (v1Idx === numPoints) {
            v1Idx = lastHoleIdx; // close final loop
          } else if (holesIdx.has(v1Idx)) {
            var holeIdx = v1Idx;
            v1Idx = lastHoleIdx; // close hole loop

            lastHoleIdx = holeIdx;
          } // Each pair of coords generates two triangles (faces)


          indices.push(v0Idx, v0Idx + numPoints, v1Idx + numPoints);
          indices.push(v1Idx + numPoints, v1Idx, v0Idx);
        }

        return {
          indices: indices,
          vertices: vertices
        };
      }

      function generateCap(radius) {
        var isTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        return {
          // need to reverse-wind the bottom triangles to make them face outwards
          indices: isTop ? triangles.indices : triangles.indices.slice().reverse(),
          vertices: generateVertices([triangles.points], radius).vertices
        };
      }

      return _this;
    }

    return ConicPolygonBufferGeometry;
  }(THREE$9.BufferGeometry); //


  function polar2Cartesian(lat, lng) {
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var phi = (90 - lat) * Math.PI / 180;
    var theta = (90 - lng) * Math.PI / 180;
    return [r * Math.sin(phi) * Math.cos(theta), // x
    r * Math.cos(phi), // y
    r * Math.sin(phi) * Math.sin(theta) // z
    ];
  }

  var libh3 = function (libh3) {
    libh3 = libh3 || {};
    var Module = typeof libh3 !== "undefined" ? libh3 : {};
    var moduleOverrides = {};
    var key;

    for (key in Module) {
      if (Module.hasOwnProperty(key)) {
        moduleOverrides[key] = Module[key];
      }
    }

    var ENVIRONMENT_IS_WEB = false;
    var ENVIRONMENT_IS_WORKER = false;
    var ENVIRONMENT_IS_NODE = false;
    var ENVIRONMENT_HAS_NODE = false;
    var ENVIRONMENT_IS_SHELL = false;
    ENVIRONMENT_IS_WEB = typeof window === "object";
    ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
    ENVIRONMENT_HAS_NODE = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
    ENVIRONMENT_IS_NODE = ENVIRONMENT_HAS_NODE && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;
    ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
    var scriptDirectory = "";

    function locateFile(path) {
      if (Module["locateFile"]) {
        return Module["locateFile"](path, scriptDirectory);
      }

      return scriptDirectory + path;
    }

    var read_, readAsync, readBinary;

    if (ENVIRONMENT_IS_NODE) {
      scriptDirectory = __dirname + "/";
      var nodeFS;
      var nodePath;

      read_ = function shell_read(filename, binary) {
        var ret;
        ret = tryParseAsDataURI(filename);

        if (!ret) {
          if (!nodeFS) { nodeFS = require("fs"); }
          if (!nodePath) { nodePath = require("path"); }
          filename = nodePath["normalize"](filename);
          ret = nodeFS["readFileSync"](filename);
        }

        return binary ? ret : ret.toString();
      };

      readBinary = function readBinary(filename) {
        var ret = read_(filename, true);

        if (!ret.buffer) {
          ret = new Uint8Array(ret);
        }

        assert(ret.buffer);
        return ret;
      };

      if (process["argv"].length > 1) {
        process["argv"][1].replace(/\\/g, "/");
      }

      process["argv"].slice(2);

      Module["inspect"] = function () {
        return "[Emscripten Module object]";
      };
    } else if (ENVIRONMENT_IS_SHELL) {
      if (typeof read != "undefined") {
        read_ = function shell_read(f) {
          var data = tryParseAsDataURI(f);

          if (data) {
            return intArrayToString(data);
          }

          return read(f);
        };
      }

      readBinary = function readBinary(f) {
        var data;
        data = tryParseAsDataURI(f);

        if (data) {
          return data;
        }

        if (typeof readbuffer === "function") {
          return new Uint8Array(readbuffer(f));
        }

        data = read(f, "binary");
        assert(typeof data === "object");
        return data;
      };

      if (typeof scriptArgs != "undefined") {
        scriptArgs;
      }

      if (typeof print !== "undefined") {
        if (typeof console === "undefined") { console = {}; }
        console.log = print;
        console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
      }
    } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href;
      } else if (document.currentScript) {
        scriptDirectory = document.currentScript.src;
      }

      if (scriptDirectory.indexOf("blob:") !== 0) {
        scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1);
      } else {
        scriptDirectory = "";
      }

      read_ = function shell_read(url) {
        try {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, false);
          xhr.send(null);
          return xhr.responseText;
        } catch (err) {
          var data = tryParseAsDataURI(url);

          if (data) {
            return intArrayToString(data);
          }

          throw err;
        }
      };

      if (ENVIRONMENT_IS_WORKER) {
        readBinary = function readBinary(url) {
          try {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, false);
            xhr.responseType = "arraybuffer";
            xhr.send(null);
            return new Uint8Array(xhr.response);
          } catch (err) {
            var data = tryParseAsDataURI(url);

            if (data) {
              return data;
            }

            throw err;
          }
        };
      }

      readAsync = function readAsync(url, onload, onerror) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "arraybuffer";

        xhr.onload = function xhr_onload() {
          if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
            onload(xhr.response);
            return;
          }

          var data = tryParseAsDataURI(url);

          if (data) {
            onload(data.buffer);
            return;
          }

          onerror();
        };

        xhr.onerror = onerror;
        xhr.send(null);
      };
    }

    var out = Module["print"] || console.log.bind(console);
    var err = Module["printErr"] || console.warn.bind(console);

    for (key in moduleOverrides) {
      if (moduleOverrides.hasOwnProperty(key)) {
        Module[key] = moduleOverrides[key];
      }
    }

    moduleOverrides = null;
    if (Module["arguments"]) ;
    if (Module["thisProgram"]) ;

    var tempRet0 = 0;

    var setTempRet0 = function (value) {
      tempRet0 = value;
    };

    var getTempRet0 = function () {
      return tempRet0;
    };

    var GLOBAL_BASE = 8;

    function setValue(ptr, value, type, noSafe) {
      type = type || "i8";
      if (type.charAt(type.length - 1) === "*") { type = "i32"; }

      switch (type) {
        case "i1":
          HEAP8[ptr >> 0] = value;
          break;

        case "i8":
          HEAP8[ptr >> 0] = value;
          break;

        case "i16":
          HEAP16[ptr >> 1] = value;
          break;

        case "i32":
          HEAP32[ptr >> 2] = value;
          break;

        case "i64":
          tempI64 = [value >>> 0, (tempDouble = value, +Math_abs(tempDouble) >= +1 ? tempDouble > +0 ? (Math_min(+Math_floor(tempDouble / +4294967296), +4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / +4294967296) >>> 0 : 0)], HEAP32[ptr >> 2] = tempI64[0], HEAP32[ptr + 4 >> 2] = tempI64[1];
          break;

        case "float":
          HEAPF32[ptr >> 2] = value;
          break;

        case "double":
          HEAPF64[ptr >> 3] = value;
          break;

        default:
          abort("invalid type for setValue: " + type);
      }
    }

    function getValue(ptr, type, noSafe) {
      type = type || "i8";
      if (type.charAt(type.length - 1) === "*") { type = "i32"; }

      switch (type) {
        case "i1":
          return HEAP8[ptr >> 0];

        case "i8":
          return HEAP8[ptr >> 0];

        case "i16":
          return HEAP16[ptr >> 1];

        case "i32":
          return HEAP32[ptr >> 2];

        case "i64":
          return HEAP32[ptr >> 2];

        case "float":
          return HEAPF32[ptr >> 2];

        case "double":
          return HEAPF64[ptr >> 3];

        default:
          abort("invalid type for getValue: " + type);
      }

      return null;
    }

    var ABORT = false;

    function assert(condition, text) {
      if (!condition) {
        abort("Assertion failed: " + text);
      }
    }

    function getCFunc(ident) {
      var func = Module["_" + ident];
      assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");
      return func;
    }

    function ccall(ident, returnType, argTypes, args, opts) {
      var toC = {
        "string": function (str) {
          var ret = 0;

          if (str !== null && str !== undefined && str !== 0) {
            var len = (str.length << 2) + 1;
            ret = stackAlloc(len);
            stringToUTF8(str, ret, len);
          }

          return ret;
        },
        "array": function (arr) {
          var ret = stackAlloc(arr.length);
          writeArrayToMemory(arr, ret);
          return ret;
        }
      };

      function convertReturnValue(ret) {
        if (returnType === "string") { return UTF8ToString(ret); }
        if (returnType === "boolean") { return Boolean(ret); }
        return ret;
      }

      var func = getCFunc(ident);
      var cArgs = [];
      var stack = 0;

      if (args) {
        for (var i = 0; i < args.length; i++) {
          var converter = toC[argTypes[i]];

          if (converter) {
            if (stack === 0) { stack = stackSave(); }
            cArgs[i] = converter(args[i]);
          } else {
            cArgs[i] = args[i];
          }
        }
      }

      var ret = func.apply(null, cArgs);
      ret = convertReturnValue(ret);
      if (stack !== 0) { stackRestore(stack); }
      return ret;
    }

    function cwrap(ident, returnType, argTypes, opts) {
      argTypes = argTypes || [];
      var numericArgs = argTypes.every(function (type) {
        return type === "number";
      });
      var numericRet = returnType !== "string";

      if (numericRet && numericArgs && !opts) {
        return getCFunc(ident);
      }

      return function () {
        return ccall(ident, returnType, argTypes, arguments);
      };
    }
    var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;

    function UTF8ArrayToString(u8Array, idx, maxBytesToRead) {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;

      while (u8Array[endPtr] && !(endPtr >= endIdx)) { ++endPtr; }

      if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
        return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
      } else {
        var str = "";

        while (idx < endPtr) {
          var u0 = u8Array[idx++];

          if (!(u0 & 128)) {
            str += String.fromCharCode(u0);
            continue;
          }

          var u1 = u8Array[idx++] & 63;

          if ((u0 & 224) == 192) {
            str += String.fromCharCode((u0 & 31) << 6 | u1);
            continue;
          }

          var u2 = u8Array[idx++] & 63;

          if ((u0 & 240) == 224) {
            u0 = (u0 & 15) << 12 | u1 << 6 | u2;
          } else {
            u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | u8Array[idx++] & 63;
          }

          if (u0 < 65536) {
            str += String.fromCharCode(u0);
          } else {
            var ch = u0 - 65536;
            str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
          }
        }
      }

      return str;
    }

    function UTF8ToString(ptr, maxBytesToRead) {
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
    }

    function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
      if (!(maxBytesToWrite > 0)) { return 0; }
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1;

      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);

        if (u >= 55296 && u <= 57343) {
          var u1 = str.charCodeAt(++i);
          u = 65536 + ((u & 1023) << 10) | u1 & 1023;
        }

        if (u <= 127) {
          if (outIdx >= endIdx) { break; }
          outU8Array[outIdx++] = u;
        } else if (u <= 2047) {
          if (outIdx + 1 >= endIdx) { break; }
          outU8Array[outIdx++] = 192 | u >> 6;
          outU8Array[outIdx++] = 128 | u & 63;
        } else if (u <= 65535) {
          if (outIdx + 2 >= endIdx) { break; }
          outU8Array[outIdx++] = 224 | u >> 12;
          outU8Array[outIdx++] = 128 | u >> 6 & 63;
          outU8Array[outIdx++] = 128 | u & 63;
        } else {
          if (outIdx + 3 >= endIdx) { break; }
          outU8Array[outIdx++] = 240 | u >> 18;
          outU8Array[outIdx++] = 128 | u >> 12 & 63;
          outU8Array[outIdx++] = 128 | u >> 6 & 63;
          outU8Array[outIdx++] = 128 | u & 63;
        }
      }

      outU8Array[outIdx] = 0;
      return outIdx - startIdx;
    }

    function stringToUTF8(str, outPtr, maxBytesToWrite) {
      return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    }

    typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : undefined;

    function writeArrayToMemory(array, buffer) {
      HEAP8.set(array, buffer);
    }

    function alignUp(x, multiple) {
      if (x % multiple > 0) {
        x += multiple - x % multiple;
      }

      return x;
    }

    var buffer, HEAP8, HEAPU8, HEAP16, HEAP32, HEAPF32, HEAPF64;

    function updateGlobalBufferAndViews(buf) {
      buffer = buf;
      Module["HEAP8"] = HEAP8 = new Int8Array(buf);
      Module["HEAP16"] = HEAP16 = new Int16Array(buf);
      Module["HEAP32"] = HEAP32 = new Int32Array(buf);
      Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
      Module["HEAPU16"] = new Uint16Array(buf);
      Module["HEAPU32"] = new Uint32Array(buf);
      Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
      Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
    }

    var DYNAMIC_BASE = 5266928,
        DYNAMICTOP_PTR = 24016;
    var INITIAL_TOTAL_MEMORY = Module["TOTAL_MEMORY"] || 33554432;

    if (Module["buffer"]) {
      buffer = Module["buffer"];
    } else {
      buffer = new ArrayBuffer(INITIAL_TOTAL_MEMORY);
    }

    INITIAL_TOTAL_MEMORY = buffer.byteLength;
    updateGlobalBufferAndViews(buffer);
    HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE;

    function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        var callback = callbacks.shift();

        if (typeof callback == "function") {
          callback();
          continue;
        }

        var func = callback.func;

        if (typeof func === "number") {
          if (callback.arg === undefined) {
            Module["dynCall_v"](func);
          } else {
            Module["dynCall_vi"](func, callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }

    var __ATPRERUN__ = [];
    var __ATINIT__ = [];
    var __ATMAIN__ = [];
    var __ATPOSTRUN__ = [];

    function preRun() {
      if (Module["preRun"]) {
        if (typeof Module["preRun"] == "function") { Module["preRun"] = [Module["preRun"]]; }

        while (Module["preRun"].length) {
          addOnPreRun(Module["preRun"].shift());
        }
      }

      callRuntimeCallbacks(__ATPRERUN__);
    }

    function initRuntime() {
      callRuntimeCallbacks(__ATINIT__);
    }

    function preMain() {
      callRuntimeCallbacks(__ATMAIN__);
    }

    function postRun() {
      if (Module["postRun"]) {
        if (typeof Module["postRun"] == "function") { Module["postRun"] = [Module["postRun"]]; }

        while (Module["postRun"].length) {
          addOnPostRun(Module["postRun"].shift());
        }
      }

      callRuntimeCallbacks(__ATPOSTRUN__);
    }

    function addOnPreRun(cb) {
      __ATPRERUN__.unshift(cb);
    }

    function addOnPostRun(cb) {
      __ATPOSTRUN__.unshift(cb);
    }

    var Math_abs = Math.abs;
    var Math_ceil = Math.ceil;
    var Math_floor = Math.floor;
    var Math_min = Math.min;
    var runDependencies = 0;
    var dependenciesFulfilled = null;

    function addRunDependency(id) {
      runDependencies++;

      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }
    }

    function removeRunDependency(id) {
      runDependencies--;

      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }

      if (runDependencies == 0) {

        if (dependenciesFulfilled) {
          var callback = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback();
        }
      }
    }

    Module["preloadedImages"] = {};
    Module["preloadedAudios"] = {};
    var memoryInitializer = null;
    var dataURIPrefix = "data:application/octet-stream;base64,";

    function isDataURI(filename) {
      return String.prototype.startsWith ? filename.startsWith(dataURIPrefix) : filename.indexOf(dataURIPrefix) === 0;
    }

    var tempDouble;
    var tempI64;
    memoryInitializer = "data:application/octet-stream;base64,AAAAAAAAAAACAAAAAwAAAAEAAAAFAAAABAAAAAYAAAAAAAAAAAAAAAAAAAABAAAAAgAAAAMAAAAEAAAABQAAAAYAAAABAAAABAAAAAMAAAAGAAAABQAAAAIAAAAAAAAAAgAAAAMAAAABAAAABAAAAAYAAAAAAAAABQAAAAMAAAAGAAAABAAAAAUAAAAAAAAAAQAAAAIAAAAEAAAABQAAAAYAAAAAAAAAAgAAAAMAAAABAAAABQAAAAIAAAAAAAAAAQAAAAMAAAAGAAAABAAAAAYAAAAAAAAABQAAAAIAAAABAAAABAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAgAAAAMAAAAAAAAAAAAAAAIAAAAAAAAAAQAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAABgAAAAAAAAAFAAAAAAAAAAAAAAAEAAAABQAAAAAAAAAAAAAAAAAAAAIAAAAAAAAABgAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAAAAAACAAAAAwAAAAQAAAAFAAAABgAAAAAAAAABAAAAAwAAAAQAAAAFAAAABgAAAAAAAAABAAAAAgAAAAQAAAAFAAAABgAAAAAAAAABAAAAAgAAAAMAAAAFAAAABgAAAAAAAAABAAAAAgAAAAMAAAAEAAAABgAAAAAAAAABAAAAAgAAAAMAAAAEAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAADAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAACAAAAAgAAAAAAAAAAAAAABgAAAAAAAAADAAAAAgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAUAAAAEAAAAAAAAAAEAAAAAAAAAAAAAAAUAAAAFAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAEAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAUAAAACAAAABAAAAAMAAAAIAAAAAQAAAAcAAAAGAAAACQAAAAAAAAADAAAAAgAAAAIAAAAGAAAACgAAAAsAAAAAAAAAAQAAAAUAAAADAAAADQAAAAEAAAAHAAAABAAAAAwAAAAAAAAABAAAAH8AAAAPAAAACAAAAAMAAAAAAAAADAAAAAUAAAACAAAAEgAAAAoAAAAIAAAAAAAAABAAAAAGAAAADgAAAAsAAAARAAAAAQAAAAkAAAACAAAABwAAABUAAAAJAAAAEwAAAAMAAAANAAAAAQAAAAgAAAAFAAAAFgAAABAAAAAEAAAAAAAAAA8AAAAJAAAAEwAAAA4AAAAUAAAAAQAAAAcAAAAGAAAACgAAAAsAAAAYAAAAFwAAAAUAAAACAAAAEgAAAAsAAAARAAAAFwAAABkAAAACAAAABgAAAAoAAAAMAAAAHAAAAA0AAAAaAAAABAAAAA8AAAADAAAADQAAABoAAAAVAAAAHQAAAAMAAAAMAAAABwAAAA4AAAB/AAAAEQAAABsAAAAJAAAAFAAAAAYAAAAPAAAAFgAAABwAAAAfAAAABAAAAAgAAAAMAAAAEAAAABIAAAAhAAAAHgAAAAgAAAAFAAAAFgAAABEAAAALAAAADgAAAAYAAAAjAAAAGQAAABsAAAASAAAAGAAAAB4AAAAgAAAABQAAAAoAAAAQAAAAEwAAACIAAAAUAAAAJAAAAAcAAAAVAAAACQAAABQAAAAOAAAAEwAAAAkAAAAoAAAAGwAAACQAAAAVAAAAJgAAABMAAAAiAAAADQAAAB0AAAAHAAAAFgAAABAAAAApAAAAIQAAAA8AAAAIAAAAHwAAABcAAAAYAAAACwAAAAoAAAAnAAAAJQAAABkAAAAYAAAAfwAAACAAAAAlAAAACgAAABcAAAASAAAAGQAAABcAAAARAAAACwAAAC0AAAAnAAAAIwAAABoAAAAqAAAAHQAAACsAAAAMAAAAHAAAAA0AAAAbAAAAKAAAACMAAAAuAAAADgAAABQAAAARAAAAHAAAAB8AAAAqAAAALAAAAAwAAAAPAAAAGgAAAB0AAAArAAAAJgAAAC8AAAANAAAAGgAAABUAAAAeAAAAIAAAADAAAAAyAAAAEAAAABIAAAAhAAAAHwAAACkAAAAsAAAANQAAAA8AAAAWAAAAHAAAACAAAAAeAAAAGAAAABIAAAA0AAAAMgAAACUAAAAhAAAAHgAAADEAAAAwAAAAFgAAABAAAAApAAAAIgAAABMAAAAmAAAAFQAAADYAAAAkAAAAMwAAACMAAAAuAAAALQAAADgAAAARAAAAGwAAABkAAAAkAAAAFAAAACIAAAATAAAANwAAACgAAAA2AAAAJQAAACcAAAA0AAAAOQAAABgAAAAXAAAAIAAAACYAAAB/AAAAIgAAADMAAAAdAAAALwAAABUAAAAnAAAAJQAAABkAAAAXAAAAOwAAADkAAAAtAAAAKAAAABsAAAAkAAAAFAAAADwAAAAuAAAANwAAACkAAAAxAAAANQAAAD0AAAAWAAAAIQAAAB8AAAAqAAAAOgAAACsAAAA+AAAAHAAAACwAAAAaAAAAKwAAAD4AAAAvAAAAQAAAABoAAAAqAAAAHQAAACwAAAA1AAAAOgAAAEEAAAAcAAAAHwAAACoAAAAtAAAAJwAAACMAAAAZAAAAPwAAADsAAAA4AAAALgAAADwAAAA4AAAARAAAABsAAAAoAAAAIwAAAC8AAAAmAAAAKwAAAB0AAABFAAAAMwAAAEAAAAAwAAAAMQAAAB4AAAAhAAAAQwAAAEIAAAAyAAAAMQAAAH8AAAA9AAAAQgAAACEAAAAwAAAAKQAAADIAAAAwAAAAIAAAAB4AAABGAAAAQwAAADQAAAAzAAAARQAAADYAAABHAAAAJgAAAC8AAAAiAAAANAAAADkAAABGAAAASgAAACAAAAAlAAAAMgAAADUAAAA9AAAAQQAAAEsAAAAfAAAAKQAAACwAAAA2AAAARwAAADcAAABJAAAAIgAAADMAAAAkAAAANwAAACgAAAA2AAAAJAAAAEgAAAA8AAAASQAAADgAAABEAAAAPwAAAE0AAAAjAAAALgAAAC0AAAA5AAAAOwAAAEoAAABOAAAAJQAAACcAAAA0AAAAOgAAAH8AAAA+AAAATAAAACwAAABBAAAAKgAAADsAAAA/AAAATgAAAE8AAAAnAAAALQAAADkAAAA8AAAASAAAAEQAAABQAAAAKAAAADcAAAAuAAAAPQAAADUAAAAxAAAAKQAAAFEAAABLAAAAQgAAAD4AAAArAAAAOgAAACoAAABSAAAAQAAAAEwAAAA/AAAAfwAAADgAAAAtAAAATwAAADsAAABNAAAAQAAAAC8AAAA+AAAAKwAAAFQAAABFAAAAUgAAAEEAAAA6AAAANQAAACwAAABWAAAATAAAAEsAAABCAAAAQwAAAFEAAABVAAAAMQAAADAAAAA9AAAAQwAAAEIAAAAyAAAAMAAAAFcAAABVAAAARgAAAEQAAAA4AAAAPAAAAC4AAABaAAAATQAAAFAAAABFAAAAMwAAAEAAAAAvAAAAWQAAAEcAAABUAAAARgAAAEMAAAA0AAAAMgAAAFMAAABXAAAASgAAAEcAAABZAAAASQAAAFsAAAAzAAAARQAAADYAAABIAAAAfwAAAEkAAAA3AAAAUAAAADwAAABYAAAASQAAAFsAAABIAAAAWAAAADYAAABHAAAANwAAAEoAAABOAAAAUwAAAFwAAAA0AAAAOQAAAEYAAABLAAAAQQAAAD0AAAA1AAAAXgAAAFYAAABRAAAATAAAAFYAAABSAAAAYAAAADoAAABBAAAAPgAAAE0AAAA/AAAARAAAADgAAABdAAAATwAAAFoAAABOAAAASgAAADsAAAA5AAAAXwAAAFwAAABPAAAATwAAAE4AAAA/AAAAOwAAAF0AAABfAAAATQAAAFAAAABEAAAASAAAADwAAABjAAAAWgAAAFgAAABRAAAAVQAAAF4AAABlAAAAPQAAAEIAAABLAAAAUgAAAGAAAABUAAAAYgAAAD4AAABMAAAAQAAAAFMAAAB/AAAASgAAAEYAAABkAAAAVwAAAFwAAABUAAAARQAAAFIAAABAAAAAYQAAAFkAAABiAAAAVQAAAFcAAABlAAAAZgAAAEIAAABDAAAAUQAAAFYAAABMAAAASwAAAEEAAABoAAAAYAAAAF4AAABXAAAAUwAAAGYAAABkAAAAQwAAAEYAAABVAAAAWAAAAEgAAABbAAAASQAAAGMAAABQAAAAaQAAAFkAAABhAAAAWwAAAGcAAABFAAAAVAAAAEcAAABaAAAATQAAAFAAAABEAAAAagAAAF0AAABjAAAAWwAAAEkAAABZAAAARwAAAGkAAABYAAAAZwAAAFwAAABTAAAATgAAAEoAAABsAAAAZAAAAF8AAABdAAAATwAAAFoAAABNAAAAbQAAAF8AAABqAAAAXgAAAFYAAABRAAAASwAAAGsAAABoAAAAZQAAAF8AAABcAAAATwAAAE4AAABtAAAAbAAAAF0AAABgAAAAaAAAAGIAAABuAAAATAAAAFYAAABSAAAAYQAAAH8AAABiAAAAVAAAAGcAAABZAAAAbwAAAGIAAABuAAAAYQAAAG8AAABSAAAAYAAAAFQAAABjAAAAUAAAAGkAAABYAAAAagAAAFoAAABxAAAAZAAAAGYAAABTAAAAVwAAAGwAAAByAAAAXAAAAGUAAABmAAAAawAAAHAAAABRAAAAVQAAAF4AAABmAAAAZQAAAFcAAABVAAAAcgAAAHAAAABkAAAAZwAAAFsAAABhAAAAWQAAAHQAAABpAAAAbwAAAGgAAABrAAAAbgAAAHMAAABWAAAAXgAAAGAAAABpAAAAWAAAAGcAAABbAAAAcQAAAGMAAAB0AAAAagAAAF0AAABjAAAAWgAAAHUAAABtAAAAcQAAAGsAAAB/AAAAZQAAAF4AAABzAAAAaAAAAHAAAABsAAAAZAAAAF8AAABcAAAAdgAAAHIAAABtAAAAbQAAAGwAAABdAAAAXwAAAHUAAAB2AAAAagAAAG4AAABiAAAAaAAAAGAAAAB3AAAAbwAAAHMAAABvAAAAYQAAAG4AAABiAAAAdAAAAGcAAAB3AAAAcAAAAGsAAABmAAAAZQAAAHgAAABzAAAAcgAAAHEAAABjAAAAdAAAAGkAAAB1AAAAagAAAHkAAAByAAAAcAAAAGQAAABmAAAAdgAAAHgAAABsAAAAcwAAAG4AAABrAAAAaAAAAHgAAAB3AAAAcAAAAHQAAABnAAAAdwAAAG8AAABxAAAAaQAAAHkAAAB1AAAAfwAAAG0AAAB2AAAAcQAAAHkAAABqAAAAdgAAAHgAAABsAAAAcgAAAHUAAAB5AAAAbQAAAHcAAABvAAAAcwAAAG4AAAB5AAAAdAAAAHgAAAB4AAAAcwAAAHIAAABwAAAAeQAAAHcAAAB2AAAAeQAAAHQAAAB4AAAAdwAAAHUAAABxAAAAdgAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAEAAAAFAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAIAAAAFAAAAAQAAAAAAAAD/////AQAAAAAAAAADAAAABAAAAAIAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAwAAAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAUAAAABAAAAAAAAAAAAAAABAAAAAwAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAMAAAAFAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAA/////wMAAAAAAAAABQAAAAIAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAQAAAAFAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAUAAAAFAAAAAAAAAAAAAAADAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAUAAAAFAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAMAAAAAAAAAAAAAAP////8DAAAAAAAAAAUAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAADAAAAAwAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAADAAAAAAAAAAAAAAABAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAAAAAABAAAAAwAAAAAAAAAAAAAAAQAAAAAAAAADAAAAAwAAAAMAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAMAAAAAAAAA/////wMAAAAAAAAABQAAAAIAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAADAAAABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAUAAAAFAAAAAAAAAAAAAAADAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAADAAAAAAAAAAAAAAABAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAAAAAD/////AwAAAAAAAAAFAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAADAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAAAAAD/////AwAAAAAAAAAFAAAAAgAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAwAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAMAAAADAAAAAAAAAAAAAAADAAAAAwAAAAMAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAP////8DAAAAAAAAAAUAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAADAAAAAwAAAAAAAAADAAAAAAAAAAAAAAADAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAAAAAP////8DAAAAAAAAAAUAAAACAAAAAAAAAAAAAAADAAAAAwAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAUAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAMAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAADAAAAAQAAAAAAAAABAAAAAAAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAA/////wMAAAAAAAAABQAAAAIAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAABQAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAADAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAUAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAUAAAAFAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAAAAAD/////AwAAAAAAAAAFAAAAAgAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAADAAAAAAAAAAUAAAAAAAAAAAAAAAUAAAAFAAAAAAAAAAAAAAAAAAAAAQAAAAMAAAABAAAAAAAAAAEAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAADAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAMAAAABAAAAAAAAAAEAAAAAAAAAAwAAAAMAAAADAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAADAAAABQAAAAEAAAAAAAAA/////wMAAAAAAAAABQAAAAIAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAUAAAAFAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAEAAAABQAAAAEAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAgAAAAUAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAMAAAABAAAAAAAAAAEAAAAAAAAABQAAAAAAAAAAAAAABQAAAAUAAAAAAAAAAAAAAP////8BAAAAAAAAAAMAAAAEAAAAAgAAAAAAAAAAAAAAAQAAAAAAAAAAAAAABQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAUAAAAAAAAAAAAAAAUAAAAFAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAABAAAABQAAAAEAAAAAAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAQAAAP//////////AQAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAMAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAIAAAAAAAAAAAAAAAEAAAACAAAABgAAAAQAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAoAAAACAAAAAAAAAAAAAAABAAAAAQAAAAUAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAIAAAAAAAAAAAAAAAEAAAADAAAABwAAAAYAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAHAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAABAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAOAAAAAgAAAAAAAAAAAAAAAQAAAAAAAAAJAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAwAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAAAAAgAAAAAAAAAAAAAAAQAAAAQAAAAIAAAACgAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAsAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAJAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAACAAAAAAAAAAAAAAABAAAACwAAAA8AAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAA4AAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAgAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAFAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAACAAAAAAAAAAAAAAABAAAADAAAABAAAAAMAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAA8AAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAANAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAIAAAAAAAAAAAAAAAEAAAAKAAAAEwAAAAgAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABAAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAJAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAgAAAAAAAAAAAAAAAQAAAA0AAAARAAAADQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAABEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAATAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAABMAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAADQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQAAAAIAAAAAAAAAAAAAAAEAAAAOAAAAEgAAAA8AAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAPAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAABIAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAATAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAEQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAEgAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABMAAAACAAAAAAAAAAAAAAABAAAA//////////8TAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAASAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAABIAAAAAAAAAGAAAAAAAAAAhAAAAAAAAAB4AAAAAAAAAIAAAAAMAAAAxAAAAAQAAADAAAAADAAAAMgAAAAMAAAAIAAAAAAAAAAUAAAAFAAAACgAAAAUAAAAWAAAAAAAAABAAAAAAAAAAEgAAAAAAAAApAAAAAQAAACEAAAAAAAAAHgAAAAAAAAAEAAAAAAAAAAAAAAAFAAAAAgAAAAUAAAAPAAAAAQAAAAgAAAAAAAAABQAAAAUAAAAfAAAAAQAAABYAAAAAAAAAEAAAAAAAAAACAAAAAAAAAAYAAAAAAAAADgAAAAAAAAAKAAAAAAAAAAsAAAAAAAAAEQAAAAMAAAAYAAAAAQAAABcAAAADAAAAGQAAAAMAAAAAAAAAAAAAAAEAAAAFAAAACQAAAAUAAAAFAAAAAAAAAAIAAAAAAAAABgAAAAAAAAASAAAAAQAAAAoAAAAAAAAACwAAAAAAAAAEAAAAAQAAAAMAAAAFAAAABwAAAAUAAAAIAAAAAQAAAAAAAAAAAAAAAQAAAAUAAAAQAAAAAQAAAAUAAAAAAAAAAgAAAAAAAAAHAAAAAAAAABUAAAAAAAAAJgAAAAAAAAAJAAAAAAAAABMAAAAAAAAAIgAAAAMAAAAOAAAAAQAAABQAAAADAAAAJAAAAAMAAAADAAAAAAAAAA0AAAAFAAAAHQAAAAUAAAABAAAAAAAAAAcAAAAAAAAAFQAAAAAAAAAGAAAAAQAAAAkAAAAAAAAAEwAAAAAAAAAEAAAAAgAAAAwAAAAFAAAAGgAAAAUAAAAAAAAAAQAAAAMAAAAAAAAADQAAAAUAAAACAAAAAQAAAAEAAAAAAAAABwAAAAAAAAAaAAAAAAAAACoAAAAAAAAAOgAAAAAAAAAdAAAAAAAAACsAAAAAAAAAPgAAAAMAAAAmAAAAAQAAAC8AAAADAAAAQAAAAAMAAAAMAAAAAAAAABwAAAAFAAAALAAAAAUAAAANAAAAAAAAABoAAAAAAAAAKgAAAAAAAAAVAAAAAQAAAB0AAAAAAAAAKwAAAAAAAAAEAAAAAwAAAA8AAAAFAAAAHwAAAAUAAAADAAAAAQAAAAwAAAAAAAAAHAAAAAUAAAAHAAAAAQAAAA0AAAAAAAAAGgAAAAAAAAAfAAAAAAAAACkAAAAAAAAAMQAAAAAAAAAsAAAAAAAAADUAAAAAAAAAPQAAAAMAAAA6AAAAAQAAAEEAAAADAAAASwAAAAMAAAAPAAAAAAAAABYAAAAFAAAAIQAAAAUAAAAcAAAAAAAAAB8AAAAAAAAAKQAAAAAAAAAqAAAAAQAAACwAAAAAAAAANQAAAAAAAAAEAAAABAAAAAgAAAAFAAAAEAAAAAUAAAAMAAAAAQAAAA8AAAAAAAAAFgAAAAUAAAAaAAAAAQAAABwAAAAAAAAAHwAAAAAAAAAyAAAAAAAAADAAAAAAAAAAMQAAAAMAAAAgAAAAAAAAAB4AAAADAAAAIQAAAAMAAAAYAAAAAwAAABIAAAADAAAAEAAAAAMAAABGAAAAAAAAAEMAAAAAAAAAQgAAAAMAAAA0AAAAAwAAADIAAAAAAAAAMAAAAAAAAAAlAAAAAwAAACAAAAAAAAAAHgAAAAMAAABTAAAAAAAAAFcAAAADAAAAVQAAAAMAAABKAAAAAwAAAEYAAAAAAAAAQwAAAAAAAAA5AAAAAQAAADQAAAADAAAAMgAAAAAAAAAZAAAAAAAAABcAAAAAAAAAGAAAAAMAAAARAAAAAAAAAAsAAAADAAAACgAAAAMAAAAOAAAAAwAAAAYAAAADAAAAAgAAAAMAAAAtAAAAAAAAACcAAAAAAAAAJQAAAAMAAAAjAAAAAwAAABkAAAAAAAAAFwAAAAAAAAAbAAAAAwAAABEAAAAAAAAACwAAAAMAAAA/AAAAAAAAADsAAAADAAAAOQAAAAMAAAA4AAAAAwAAAC0AAAAAAAAAJwAAAAAAAAAuAAAAAwAAACMAAAADAAAAGQAAAAAAAAAkAAAAAAAAABQAAAAAAAAADgAAAAMAAAAiAAAAAAAAABMAAAADAAAACQAAAAMAAAAmAAAAAwAAABUAAAADAAAABwAAAAMAAAA3AAAAAAAAACgAAAAAAAAAGwAAAAMAAAA2AAAAAwAAACQAAAAAAAAAFAAAAAAAAAAzAAAAAwAAACIAAAAAAAAAEwAAAAMAAABIAAAAAAAAADwAAAADAAAALgAAAAMAAABJAAAAAwAAADcAAAAAAAAAKAAAAAAAAABHAAAAAwAAADYAAAADAAAAJAAAAAAAAABAAAAAAAAAAC8AAAAAAAAAJgAAAAMAAAA+AAAAAAAAACsAAAADAAAAHQAAAAMAAAA6AAAAAwAAACoAAAADAAAAGgAAAAMAAABUAAAAAAAAAEUAAAAAAAAAMwAAAAMAAABSAAAAAwAAAEAAAAAAAAAALwAAAAAAAABMAAAAAwAAAD4AAAAAAAAAKwAAAAMAAABhAAAAAAAAAFkAAAADAAAARwAAAAMAAABiAAAAAwAAAFQAAAAAAAAARQAAAAAAAABgAAAAAwAAAFIAAAADAAAAQAAAAAAAAABLAAAAAAAAAEEAAAAAAAAAOgAAAAMAAAA9AAAAAAAAADUAAAADAAAALAAAAAMAAAAxAAAAAwAAACkAAAADAAAAHwAAAAMAAABeAAAAAAAAAFYAAAAAAAAATAAAAAMAAABRAAAAAwAAAEsAAAAAAAAAQQAAAAAAAABCAAAAAwAAAD0AAAAAAAAANQAAAAMAAABrAAAAAAAAAGgAAAADAAAAYAAAAAMAAABlAAAAAwAAAF4AAAAAAAAAVgAAAAAAAABVAAAAAwAAAFEAAAADAAAASwAAAAAAAAA5AAAAAAAAADsAAAAAAAAAPwAAAAMAAABKAAAAAAAAAE4AAAADAAAATwAAAAMAAABTAAAAAwAAAFwAAAADAAAAXwAAAAMAAAAlAAAAAAAAACcAAAADAAAALQAAAAMAAAA0AAAAAAAAADkAAAAAAAAAOwAAAAAAAABGAAAAAwAAAEoAAAAAAAAATgAAAAMAAAAYAAAAAAAAABcAAAADAAAAGQAAAAMAAAAgAAAAAwAAACUAAAAAAAAAJwAAAAMAAAAyAAAAAwAAADQAAAAAAAAAOQAAAAAAAAAuAAAAAAAAADwAAAAAAAAASAAAAAMAAAA4AAAAAAAAAEQAAAADAAAAUAAAAAMAAAA/AAAAAwAAAE0AAAADAAAAWgAAAAMAAAAbAAAAAAAAACgAAAADAAAANwAAAAMAAAAjAAAAAAAAAC4AAAAAAAAAPAAAAAAAAAAtAAAAAwAAADgAAAAAAAAARAAAAAMAAAAOAAAAAAAAABQAAAADAAAAJAAAAAMAAAARAAAAAwAAABsAAAAAAAAAKAAAAAMAAAAZAAAAAwAAACMAAAAAAAAALgAAAAAAAABHAAAAAAAAAFkAAAAAAAAAYQAAAAMAAABJAAAAAAAAAFsAAAADAAAAZwAAAAMAAABIAAAAAwAAAFgAAAADAAAAaQAAAAMAAAAzAAAAAAAAAEUAAAADAAAAVAAAAAMAAAA2AAAAAAAAAEcAAAAAAAAAWQAAAAAAAAA3AAAAAwAAAEkAAAAAAAAAWwAAAAMAAAAmAAAAAAAAAC8AAAADAAAAQAAAAAMAAAAiAAAAAwAAADMAAAAAAAAARQAAAAMAAAAkAAAAAwAAADYAAAAAAAAARwAAAAAAAABgAAAAAAAAAGgAAAAAAAAAawAAAAMAAABiAAAAAAAAAG4AAAADAAAAcwAAAAMAAABhAAAAAwAAAG8AAAADAAAAdwAAAAMAAABMAAAAAAAAAFYAAAADAAAAXgAAAAMAAABSAAAAAAAAAGAAAAAAAAAAaAAAAAAAAABUAAAAAwAAAGIAAAAAAAAAbgAAAAMAAAA6AAAAAAAAAEEAAAADAAAASwAAAAMAAAA+AAAAAwAAAEwAAAAAAAAAVgAAAAMAAABAAAAAAwAAAFIAAAAAAAAAYAAAAAAAAABVAAAAAAAAAFcAAAAAAAAAUwAAAAMAAABlAAAAAAAAAGYAAAADAAAAZAAAAAMAAABrAAAAAwAAAHAAAAADAAAAcgAAAAMAAABCAAAAAAAAAEMAAAADAAAARgAAAAMAAABRAAAAAAAAAFUAAAAAAAAAVwAAAAAAAABeAAAAAwAAAGUAAAAAAAAAZgAAAAMAAAAxAAAAAAAAADAAAAADAAAAMgAAAAMAAAA9AAAAAwAAAEIAAAAAAAAAQwAAAAMAAABLAAAAAwAAAFEAAAAAAAAAVQAAAAAAAABfAAAAAAAAAFwAAAAAAAAAUwAAAAAAAABPAAAAAAAAAE4AAAAAAAAASgAAAAMAAAA/AAAAAQAAADsAAAADAAAAOQAAAAMAAABtAAAAAAAAAGwAAAAAAAAAZAAAAAUAAABdAAAAAQAAAF8AAAAAAAAAXAAAAAAAAABNAAAAAQAAAE8AAAAAAAAATgAAAAAAAAB1AAAABAAAAHYAAAAFAAAAcgAAAAUAAABqAAAAAQAAAG0AAAAAAAAAbAAAAAAAAABaAAAAAQAAAF0AAAABAAAAXwAAAAAAAABaAAAAAAAAAE0AAAAAAAAAPwAAAAAAAABQAAAAAAAAAEQAAAAAAAAAOAAAAAMAAABIAAAAAQAAADwAAAADAAAALgAAAAMAAABqAAAAAAAAAF0AAAAAAAAATwAAAAUAAABjAAAAAQAAAFoAAAAAAAAATQAAAAAAAABYAAAAAQAAAFAAAAAAAAAARAAAAAAAAAB1AAAAAwAAAG0AAAAFAAAAXwAAAAUAAABxAAAAAQAAAGoAAAAAAAAAXQAAAAAAAABpAAAAAQAAAGMAAAABAAAAWgAAAAAAAABpAAAAAAAAAFgAAAAAAAAASAAAAAAAAABnAAAAAAAAAFsAAAAAAAAASQAAAAMAAABhAAAAAQAAAFkAAAADAAAARwAAAAMAAABxAAAAAAAAAGMAAAAAAAAAUAAAAAUAAAB0AAAAAQAAAGkAAAAAAAAAWAAAAAAAAABvAAAAAQAAAGcAAAAAAAAAWwAAAAAAAAB1AAAAAgAAAGoAAAAFAAAAWgAAAAUAAAB5AAAAAQAAAHEAAAAAAAAAYwAAAAAAAAB3AAAAAQAAAHQAAAABAAAAaQAAAAAAAAB3AAAAAAAAAG8AAAAAAAAAYQAAAAAAAABzAAAAAAAAAG4AAAAAAAAAYgAAAAMAAABrAAAAAQAAAGgAAAADAAAAYAAAAAMAAAB5AAAAAAAAAHQAAAAAAAAAZwAAAAUAAAB4AAAAAQAAAHcAAAAAAAAAbwAAAAAAAABwAAAAAQAAAHMAAAAAAAAAbgAAAAAAAAB1AAAAAQAAAHEAAAAFAAAAaQAAAAUAAAB2AAAAAQAAAHkAAAAAAAAAdAAAAAAAAAByAAAAAQAAAHgAAAABAAAAdwAAAAAAAAByAAAAAAAAAHAAAAAAAAAAawAAAAAAAABkAAAAAAAAAGYAAAAAAAAAZQAAAAMAAABTAAAAAQAAAFcAAAADAAAAVQAAAAMAAAB2AAAAAAAAAHgAAAAAAAAAcwAAAAUAAABsAAAAAQAAAHIAAAAAAAAAcAAAAAAAAABcAAAAAQAAAGQAAAAAAAAAZgAAAAAAAAB1AAAAAAAAAHkAAAAFAAAAdwAAAAUAAABtAAAAAQAAAHYAAAAAAAAAeAAAAAAAAABfAAAAAQAAAGwAAAABAAAAcgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAEAAAABAAAAAAAAAAAAAAABAAAAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAB+ogX28rbpPxqumpJv+fM/165tC4ns9D+XaEnTqUsEQFrOtNlC4PA/3U+0XG6P9b9TdUUBxTTjP4PUp8ex1ty/B1rD/EN43z+lcDi6LLrZP/a45NWEHMY/oJ5ijLDZ+j/xw3rjxWPjP2B8A46ioQdAotff3wla2z+FMSpA1jj+v6b5Y1mtPbS/cIu8K0F457/2esiyJpDNv98k5Ts2NeA/pvljWa09tD88ClUJ60MDQPZ6yLImkM0/4ONKxa0UBcD2uOTVhBzGv5G7JRxGave/8cN648Vj47+HCwtkjAXIv6LX398JWtu/qyheaCAL9D9TdUUBxTTjv4gyTxslhwVAB1rD/EN4378EH/28teoFwH6iBfbytum/F6ztFYdK/r/Xrm0Liez0vwcS6wNGWeO/Ws602ULg8L9TCtRLiLT8P8pi5RexJsw/BlIKPVwR5T95Wyu0/QjnP5PjoT7YYcu/mBhKZ6zrwj8wRYS7NebuP3qW6geh+Ls/SLrixebL3r+pcyymN9XrPwmkNHp7xec/GWNMZVAA17+82s+x2BLiPwn2ytbJ9ek/LgEH1sMS1j8yp/2LhTfeP+SnWwtQBbu/d38gkp5X7z8ytsuHaADGPzUYObdf1+m/7IauECWhwz+cjSACjzniP76Z+wUhN9K/1+GEKzup67+/GYr/04baPw6idWOvsuc/ZedTWsRa5b/EJQOuRzi0v/OncYhHPes/h49PixY53j+i8wWfC03Nvw2idWOvsue/ZedTWsRa5T/EJQOuRzi0P/KncYhHPeu/iY9PixY53r+i8wWfC03NP9anWwtQBbs/d38gkp5X778ytsuHaADGvzUYObdf1+k/74auECWhw7+cjSACjzniv8CZ+wUhN9I/1uGEKzup6z+/GYr/04bavwmkNHp7xee/F2NMZVAA1z+82s+x2BLivwr2ytbJ9em/KwEH1sMS1r8yp/2LhTfev81i5RexJsy/BlIKPVwR5b95Wyu0/Qjnv5DjoT7YYcs/nBhKZ6zrwr8wRYS7Nebuv3OW6geh+Lu/SLrixebL3j+pcyymN9Xrv8rHIFfWehZAMBwUdlo0DECTUc17EOb2PxpVB1SWChdAzjbhb9pTDUDQhmdvECX5P9FlMKCC9+g/IIAzjELgE0DajDngMv8GQFhWDmDPjNs/y1guLh96EkAxPi8k7DIEQJCc4URlhRhA3eLKKLwkEECqpNAyTBD/P6xpjXcDiwVAFtl//cQm4z+Ibt3XKiYTQM7mCLUb3QdAoM1t8yVv7D8aLZv2Nk8UQEAJPV5nQwxAtSsfTCoE9z9TPjXLXIIWQBVanC5W9AtAYM3d7Adm9j++5mQz1FoWQBUThyaVBghAwH5muQsV7T89Q1qv82MUQJoWGOfNuBdAzrkClkmwDkDQjKq77t37Py+g0dtitsE/ZwAMTwVPEUBojepluNwBQGYbtuW+t9w/HNWIJs6MEkDTNuQUSlgEQKxktPP5TcQ/ixbLB8JjEUCwuWjXMQYCQAS/R09FkRdAowpiZjhhDkB7LmlczD/7P01iQmhhsAVAnrtTwDy84z/Z6jfQ2TgTQChOCXMnWwpAhrW3daoz8z/HYJvVPI4VQLT3ik5FcA5Angi7LOZd+z+NNVzDy5gXQBXdvVTFUA1AYNMgOeYe+T8+qHXGCwkXQKQTOKwa5AJA8gFVoEMW0T+FwzJyttIRQAEAAAD/////BwAAAP////8xAAAA/////1cBAAD/////YQkAAP////+nQQAA/////5HLAQD/////95AMAP/////B9lcAAAAAAAAAAAAAAAAAAgAAAP////8OAAAA/////2IAAAD/////rgIAAP/////CEgAA/////06DAAD/////IpcDAP/////uIRkA/////4LtrwAAAAAAAAAAAAAAAAAAAAAAAgAAAP//////////AQAAAAMAAAD//////////////////////////////////////////////////////////////////////////wEAAAAAAAAAAgAAAP///////////////wMAAAD//////////////////////////////////////////////////////////////////////////wEAAAAAAAAAAgAAAP///////////////wMAAAD//////////////////////////////////////////////////////////////////////////wEAAAAAAAAAAgAAAP///////////////wMAAAD//////////////////////////////////////////////////////////wIAAAD//////////wEAAAAAAAAA/////////////////////wMAAAD/////////////////////////////////////////////////////AwAAAP////////////////////8AAAAA/////////////////////wEAAAD///////////////8CAAAA////////////////////////////////AwAAAP////////////////////8AAAAA////////////////AgAAAAEAAAD/////////////////////////////////////////////////////AwAAAP////////////////////8AAAAA////////////////AgAAAAEAAAD/////////////////////////////////////////////////////AwAAAP////////////////////8AAAAA////////////////AgAAAAEAAAD/////////////////////////////////////////////////////AwAAAP////////////////////8AAAAA////////////////AgAAAAEAAAD/////////////////////////////////////////////////////AQAAAAIAAAD///////////////8AAAAA/////////////////////wMAAAD/////////////////////////////////////////////////////AQAAAAIAAAD///////////////8AAAAA/////////////////////wMAAAD/////////////////////////////////////////////////////AQAAAAIAAAD///////////////8AAAAA/////////////////////wMAAAD/////////////////////////////////////////////////////AQAAAAIAAAD///////////////8AAAAA/////////////////////wMAAAD///////////////////////////////8CAAAA////////////////AQAAAP////////////////////8AAAAA/////////////////////wMAAAD/////////////////////////////////////////////////////AwAAAP////////////////////8AAAAAAQAAAP//////////AgAAAP//////////////////////////////////////////////////////////AwAAAP///////////////wIAAAAAAAAAAQAAAP//////////////////////////////////////////////////////////////////////////AwAAAP///////////////wIAAAAAAAAAAQAAAP//////////////////////////////////////////////////////////////////////////AwAAAP///////////////wIAAAAAAAAAAQAAAP//////////////////////////////////////////////////////////////////////////AwAAAAEAAAD//////////wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAgAAAAAAAAACAAAAAQAAAAEAAAACAAAAAgAAAAAAAAAFAAAABQAAAAAAAAACAAAAAgAAAAMAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAIAAAABAAAAAgAAAAIAAAACAAAAAAAAAAUAAAAGAAAAAAAAAAIAAAACAAAAAwAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAIAAAAAAAAAAgAAAAEAAAADAAAAAgAAAAIAAAAAAAAABQAAAAcAAAAAAAAAAgAAAAIAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAgAAAAAAAAACAAAAAQAAAAQAAAACAAAAAgAAAAAAAAAFAAAACAAAAAAAAAACAAAAAgAAAAMAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAACAAAAAAAAAAIAAAABAAAAAAAAAAIAAAACAAAAAAAAAAUAAAAJAAAAAAAAAAIAAAACAAAAAwAAAAUAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAIAAAACAAAAAAAAAAMAAAAOAAAAAgAAAAAAAAACAAAAAwAAAAAAAAAAAAAAAgAAAAIAAAADAAAABgAAAAAAAAAAAAAAAAAAAAAAAAALAAAAAgAAAAIAAAAAAAAAAwAAAAoAAAACAAAAAAAAAAIAAAADAAAAAQAAAAAAAAACAAAAAgAAAAMAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAACAAAAAgAAAAAAAAADAAAACwAAAAIAAAAAAAAAAgAAAAMAAAACAAAAAAAAAAIAAAACAAAAAwAAAAgAAAAAAAAAAAAAAAAAAAAAAAAADQAAAAIAAAACAAAAAAAAAAMAAAAMAAAAAgAAAAAAAAACAAAAAwAAAAMAAAAAAAAAAgAAAAIAAAADAAAACQAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAgAAAAIAAAAAAAAAAwAAAA0AAAACAAAAAAAAAAIAAAADAAAABAAAAAAAAAACAAAAAgAAAAMAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAACAAAAAgAAAAAAAAADAAAABgAAAAIAAAAAAAAAAgAAAAMAAAAPAAAAAAAAAAIAAAACAAAAAwAAAAsAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAIAAAACAAAAAAAAAAMAAAAHAAAAAgAAAAAAAAACAAAAAwAAABAAAAAAAAAAAgAAAAIAAAADAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAgAAAAIAAAAAAAAAAwAAAAgAAAACAAAAAAAAAAIAAAADAAAAEQAAAAAAAAACAAAAAgAAAAMAAAANAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAACAAAAAgAAAAAAAAADAAAACQAAAAIAAAAAAAAAAgAAAAMAAAASAAAAAAAAAAIAAAACAAAAAwAAAA4AAAAAAAAAAAAAAAAAAAAAAAAACQAAAAIAAAACAAAAAAAAAAMAAAAFAAAAAgAAAAAAAAACAAAAAwAAABMAAAAAAAAAAgAAAAIAAAADAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAgAAAAAAAAACAAAAAQAAABMAAAACAAAAAgAAAAAAAAAFAAAACgAAAAAAAAACAAAAAgAAAAMAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABEAAAACAAAAAAAAAAIAAAABAAAADwAAAAIAAAACAAAAAAAAAAUAAAALAAAAAAAAAAIAAAACAAAAAwAAABEAAAAAAAAAAAAAAAAAAAAAAAAAEgAAAAIAAAAAAAAAAgAAAAEAAAAQAAAAAgAAAAIAAAAAAAAABQAAAAwAAAAAAAAAAgAAAAIAAAADAAAAEgAAAAAAAAAAAAAAAAAAAAAAAAATAAAAAgAAAAAAAAACAAAAAQAAABEAAAACAAAAAgAAAAAAAAAFAAAADQAAAAAAAAACAAAAAgAAAAMAAAATAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAACAAAAAAAAAAIAAAABAAAAEgAAAAIAAAACAAAAAAAAAAUAAAAOAAAAAAAAAAIAAAACAAAAAwAAAAIAAAABAAAAAAAAAAEAAAACAAAAAAAAAAAAAAACAAAAAQAAAAAAAAABAAAAAgAAAAEAAAAAAAAAAgAAAAAAAAAFAAAABAAAAAAAAAABAAAABQAAAAAAAAAAAAAABQAAAAQAAAAAAAAAAQAAAAUAAAAEAAAAAAAAAAUAAAAAAAAAAgAAAAEAAAAAAAAAAQAAAAIAAAAAAAAAAAAAAAIAAAABAAAAAAAAAAEAAAACAAAAAQAAAAAAAAACAAAAAgAAAAAAAAABAAAAAAAAAAAAAAAFAAAABAAAAAAAAAABAAAABQAAAAAAAAAAAAAABQAAAAQAAAAAAAAAAQAAAAUAAAAEAAAAAAAAAAUAAAAFAAAAAAAAAAEAAAAAAAAAAAAAAMuhRbbsNlBBYqHW9OmHIkF9XBuqnS31QAK37uYhNMhAOSo3UUupm0DC+6pc6JxvQHV9eseEEEJAzURsCyqlFEB8BQ4NMJjnPyy3tBoS97o/xawXQznRjj89J2K2CZxhP6vX43RIIDQ/S8isgygEBz+LvFHQkmzaPjFFFO7wMq4+AADMLkTtjkIAAOgkJqxhQgAAU7B0MjRCAADwpBcVB0IAAACYP2HaQQAAAIn/Ja5BzczM4Eg6gUHNzMxMU7BTQTMzMzNfgCZBAAAAAEi3+UAAAAAAwGPNQDMzMzMzy6BAmpmZmZkxc0AzMzMzM/NFQDMzMzMzMxlAzczMzMzM7D+ygXSx2U6RQKimJOvQKnpA23hmONTHY0A/AGcxyudNQNb3K647mzZA+S56rrwWIUAm4kUQ+9UJQKre9hGzh/M/BLvoy9WG3T+LmqMf8VHGP2m3nYNV37A/gbFHcyeCmT+cBPWBckiDP61tZACjKW0/q2RbYVUYVj8uDypVyLNAP6jGS5cA5zBBwcqhBdCNGUEGEhQ/JVEDQT6WPnRbNO1AB/AWSJgT1kDfUWNCNLDAQNk+5C33OqlAchWL34QSk0DKvtDIrNV8QNF0G3kFzGVASSeWhBl6UED+/0mNGuk4QGjA/dm/1CJALPLPMql6DEDSHoDrwpP1P2jouzWST+A/egAAAAAAAABKAwAAAAAAAPoWAAAAAAAAyqAAAAAAAAB6ZQQAAAAAAErGHgAAAAAA+mvXAAAAAADK8+MFAAAAAHqqOykAAAAASqmhIAEAAAD6oGvkBwAAAMpm8T43AAAAes+ZuIIBAABKrDQMkwoAAPq1cFUFSgAAyvkUViUGAgAAAAAAAwAAAAYAAAACAAAABQAAAAEAAAAEAAAAAAAAAAAAAAAFAAAAAwAAAAEAAAAGAAAABAAAAAIAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////8AAAAA/////wAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAP////8AAAAAAAAAAAEAAAABAAAAAAAAAAAAAAD/////AAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAA/////wUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////AAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////wAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAUAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////8AAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAQAAAAEAAAAAAAAAAQAAAAAAAAAFAAAAAQAAAAEAAAAAAAAAAAAAAAEAAAABAAAAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAABAAEAAAEBAAAAAAABAAAAAQAAAAEAAQAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAAAAAACAAAAAQAAAAMAAAAOAAAABgAAAAsAAAACAAAABwAAAAEAAAAYAAAABQAAAAoAAAABAAAABgAAAAAAAAAmAAAABwAAAAwAAAADAAAACAAAAAIAAAAxAAAACQAAAA4AAAAAAAAABQAAAAQAAAA6AAAACAAAAA0AAAAEAAAACQAAAAMAAAA/AAAACwAAAAYAAAAPAAAACgAAABAAAABIAAAADAAAAAcAAAAQAAAACwAAABEAAABTAAAACgAAAAUAAAATAAAADgAAAA8AAABhAAAADQAAAAgAAAARAAAADAAAABIAAABrAAAADgAAAAkAAAASAAAADQAAABMAAAB1AAAADwAAABMAAAARAAAAEgAAABAAAAAHAAAABwAAAAEAAAACAAAABAAAAAMAAAAAAAAAAAAAAAcAAAADAAAAAQAAAAIAAAAFAAAABAAAAAAAAAAAAAAAYWxnb3MuYwBfcG9seWZpbGxJbnRlcm5hbABhZGphY2VudEZhY2VEaXJbdG1wRmlqay5mYWNlXVtmaWprLmZhY2VdID09IEtJAGZhY2VpamsuYwBfZmFjZUlqa1BlbnRUb0dlb0JvdW5kYXJ5AGFkamFjZW50RmFjZURpcltjZW50ZXJJSksuZmFjZV1bZmFjZTJdID09IEtJAF9mYWNlSWprVG9HZW9Cb3VuZGFyeQBwb2x5Z29uLT5uZXh0ID09IE5VTEwAbGlua2VkR2VvLmMAYWRkTmV3TGlua2VkUG9seWdvbgBuZXh0ICE9IE5VTEwAbG9vcCAhPSBOVUxMAGFkZE5ld0xpbmtlZExvb3AAcG9seWdvbi0+Zmlyc3QgPT0gTlVMTABhZGRMaW5rZWRMb29wAGNvb3JkICE9IE5VTEwAYWRkTGlua2VkQ29vcmQAbG9vcC0+Zmlyc3QgPT0gTlVMTABpbm5lckxvb3BzICE9IE5VTEwAbm9ybWFsaXplTXVsdGlQb2x5Z29uAGJib3hlcyAhPSBOVUxMAGNhbmRpZGF0ZXMgIT0gTlVMTABmaW5kUG9seWdvbkZvckhvbGUAY2FuZGlkYXRlQkJveGVzICE9IE5VTEwAcmV2RGlyICE9IElOVkFMSURfRElHSVQAbG9jYWxpai5jAGgzVG9Mb2NhbElqawBiYXNlQ2VsbCAhPSBvcmlnaW5CYXNlQ2VsbAAhKG9yaWdpbk9uUGVudCAmJiBpbmRleE9uUGVudCkAcGVudGFnb25Sb3RhdGlvbnMgPj0gMABkaXJlY3Rpb25Sb3RhdGlvbnMgPj0gMABiYXNlQ2VsbCA9PSBvcmlnaW5CYXNlQ2VsbABiYXNlQ2VsbCAhPSBJTlZBTElEX0JBU0VfQ0VMTABsb2NhbElqa1RvSDMAIV9pc0Jhc2VDZWxsUGVudGFnb24oYmFzZUNlbGwpAGJhc2VDZWxsUm90YXRpb25zID49IDAAd2l0aGluUGVudGFnb25Sb3RhdGlvbnMgPj0gMABncmFwaC0+YnVja2V0cyAhPSBOVUxMAHZlcnRleEdyYXBoLmMAaW5pdFZlcnRleEdyYXBoAG5vZGUgIT0gTlVMTABhZGRWZXJ0ZXhOb2Rl";
    var tempDoublePtr = 24032;

    function demangle(func) {
      return func;
    }

    function demangleAll(text) {
      var regex = /\b__Z[\w\d_]+/g;
      return text.replace(regex, function (x) {
        var y = demangle(x);
        return x === y ? x : y + " [" + x + "]";
      });
    }

    function jsStackTrace() {
      var err = new Error();

      if (!err.stack) {
        try {
          throw new Error(0);
        } catch (e) {
          err = e;
        }

        if (!err.stack) {
          return "(no stack trace available)";
        }
      }

      return err.stack.toString();
    }

    function stackTrace() {
      var js = jsStackTrace();
      if (Module["extraStackTrace"]) { js += "\n" + Module["extraStackTrace"](); }
      return demangleAll(js);
    }

    function ___assert_fail(condition, filename, line, func) {
      abort("Assertion failed: " + UTF8ToString(condition) + ", at: " + [filename ? UTF8ToString(filename) : "unknown filename", line, func ? UTF8ToString(func) : "unknown function"]);
    }

    function _emscripten_get_heap_size() {
      return HEAP8.length;
    }

    function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.set(HEAPU8.subarray(src, src + num), dest);
    }

    function ___setErrNo(value) {
      if (Module["___errno_location"]) { HEAP32[Module["___errno_location"]() >> 2] = value; }
      return value;
    }

    function abortOnCannotGrowMemory(requestedSize) {
      abort("OOM");
    }

    function emscripten_realloc_buffer(size) {
      try {
        var newBuffer = new ArrayBuffer(size);
        if (newBuffer.byteLength != size) { return; }
        new Int8Array(newBuffer).set(HEAP8);

        _emscripten_replace_memory(newBuffer);

        updateGlobalBufferAndViews(newBuffer);
        return 1;
      } catch (e) {}
    }

    function _emscripten_resize_heap(requestedSize) {
      var oldSize = _emscripten_get_heap_size();

      var PAGE_MULTIPLE = 16777216;
      var LIMIT = 2147483648 - PAGE_MULTIPLE;

      if (requestedSize > LIMIT) {
        return false;
      }

      var MIN_TOTAL_MEMORY = 16777216;
      var newSize = Math.max(oldSize, MIN_TOTAL_MEMORY);

      while (newSize < requestedSize) {
        if (newSize <= 536870912) {
          newSize = alignUp(2 * newSize, PAGE_MULTIPLE);
        } else {
          newSize = Math.min(alignUp((3 * newSize + 2147483648) / 4, PAGE_MULTIPLE), LIMIT);
        }
      }

      var replacement = emscripten_realloc_buffer(newSize);

      if (!replacement) {
        return false;
      }

      return true;
    }

    function intArrayToString(array) {
      var ret = [];

      for (var i = 0; i < array.length; i++) {
        var chr = array[i];

        if (chr > 255) {

          chr &= 255;
        }

        ret.push(String.fromCharCode(chr));
      }

      return ret.join("");
    }

    var decodeBase64 = typeof atob === "function" ? atob : function (input) {
      var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      var output = "";
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

      do {
        enc1 = keyStr.indexOf(input.charAt(i++));
        enc2 = keyStr.indexOf(input.charAt(i++));
        enc3 = keyStr.indexOf(input.charAt(i++));
        enc4 = keyStr.indexOf(input.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        output = output + String.fromCharCode(chr1);

        if (enc3 !== 64) {
          output = output + String.fromCharCode(chr2);
        }

        if (enc4 !== 64) {
          output = output + String.fromCharCode(chr3);
        }
      } while (i < input.length);

      return output;
    };

    function intArrayFromBase64(s) {
      if (typeof ENVIRONMENT_IS_NODE === "boolean" && ENVIRONMENT_IS_NODE) {
        var buf;

        try {
          buf = Buffer.from(s, "base64");
        } catch (_) {
          buf = new Buffer(s, "base64");
        }

        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
      }

      try {
        var decoded = decodeBase64(s);
        var bytes = new Uint8Array(decoded.length);

        for (var i = 0; i < decoded.length; ++i) {
          bytes[i] = decoded.charCodeAt(i);
        }

        return bytes;
      } catch (_) {
        throw new Error("Converting base64 string to bytes failed.");
      }
    }

    function tryParseAsDataURI(filename) {
      if (!isDataURI(filename)) {
        return;
      }

      return intArrayFromBase64(filename.slice(dataURIPrefix.length));
    }

    var asmGlobalArg = {
      "Math": Math,
      "Int8Array": Int8Array,
      "Int32Array": Int32Array,
      "Uint8Array": Uint8Array,
      "Float32Array": Float32Array,
      "Float64Array": Float64Array
    };
    var asmLibraryArg = {
      "a": abort,
      "b": setTempRet0,
      "c": getTempRet0,
      "d": ___assert_fail,
      "e": ___setErrNo,
      "f": _emscripten_get_heap_size,
      "g": _emscripten_memcpy_big,
      "h": _emscripten_resize_heap,
      "i": abortOnCannotGrowMemory,
      "j": demangle,
      "k": demangleAll,
      "l": emscripten_realloc_buffer,
      "m": jsStackTrace,
      "n": stackTrace,
      "o": tempDoublePtr,
      "p": DYNAMICTOP_PTR
    }; // EMSCRIPTEN_START_ASM

    var asm =
    /** @suppress {uselessCode} */
    function (global, env, buffer) {
      "almost asm";

      var a = new global.Int8Array(buffer),
          b = new global.Int32Array(buffer);
          new global.Uint8Array(buffer);
          new global.Float32Array(buffer);
          var e = new global.Float64Array(buffer),
          g = env.p | 0,
          p = global.Math.floor,
          q = global.Math.abs,
          r = global.Math.sqrt,
          s = global.Math.pow,
          t = global.Math.cos,
          u = global.Math.sin,
          v = global.Math.tan,
          w = global.Math.acos,
          x = global.Math.asin,
          y = global.Math.atan,
          z = global.Math.atan2,
          A = global.Math.ceil,
          B = global.Math.imul,
          C = global.Math.min,
          D = global.Math.clz32,
          F = env.b,
          G = env.c,
          H = env.d,
          I = env.e,
          J = env.f,
          K = env.g,
          L = env.h,
          M = env.i,
          S = 24048;

      function V(newBuffer) {
        a = new Int8Array(newBuffer);
        b = new Int32Array(newBuffer);
        e = new Float64Array(newBuffer);
        buffer = newBuffer;
        return true;
      } // EMSCRIPTEN_START_FUNCS


      function W(a) {
        a = a | 0;
        var b = 0;
        b = S;
        S = S + a | 0;
        S = S + 15 & -16;
        return b | 0;
      }

      function X() {
        return S | 0;
      }

      function Y(a) {
        a = a | 0;
        S = a;
      }

      function Z(a, b) {
        a = a | 0;
        S = a;
      }

      function _(a) {
        a = a | 0;
        return (B(a * 3 | 0, a + 1 | 0) | 0) + 1 | 0;
      }

      function $(a, b, c, d) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0;
        if (!(ba(a, b, c, d, 0) | 0)) { return; }
        f = (B(c * 3 | 0, c + 1 | 0) | 0) + 1 | 0;
        hd(d | 0, 0, f << 3 | 0) | 0;
        e = Yc(f, 4) | 0;
        if (!e) { return; }
        ca(a, b, c, d, e, f, 0);
        Xc(e);
        return;
      }

      function aa(a, b, c, d, e) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        var f = 0;
        if (!(ba(a, b, c, d, e) | 0)) { return; }
        f = (B(c * 3 | 0, c + 1 | 0) | 0) + 1 | 0;
        hd(d | 0, 0, f << 3 | 0) | 0;

        if (e | 0) {
          hd(e | 0, 0, f << 2 | 0) | 0;
          ca(a, b, c, d, e, f, 0);
          return;
        }

        e = Yc(f, 4) | 0;
        if (!e) { return; }
        ca(a, b, c, d, e, f, 0);
        Xc(e);
        return;
      }

      function ba(a, c, d, e, f) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        f = f | 0;
        var g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0;
        o = S;
        S = S + 16 | 0;
        n = o;
        g = e;
        b[g >> 2] = a;
        b[g + 4 >> 2] = c;
        g = (f | 0) != 0;
        if (g) { b[f >> 2] = 0; }

        if (Fb(a, c) | 0) {
          n = 1;
          S = o;
          return n | 0;
        }

        b[n >> 2] = 0;

        a: do { if ((d | 0) >= 1) {
          if (g) {
            k = 0;
            l = 1;
            m = 1;
            h = 0;
            g = a;

            while (1) {
              if (!(h | k)) {
                g = da(g, c, 4, n) | 0;
                c = G() | 0;

                if ((g | 0) == 0 & (c | 0) == 0) {
                  g = 2;
                  break a;
                }

                if (Fb(g, c) | 0) {
                  g = 1;
                  break a;
                }
              }

              g = da(g, c, b[16 + (k << 2) >> 2] | 0, n) | 0;
              c = G() | 0;

              if ((g | 0) == 0 & (c | 0) == 0) {
                g = 2;
                break a;
              }

              a = e + (m << 3) | 0;
              b[a >> 2] = g;
              b[a + 4 >> 2] = c;
              b[f + (m << 2) >> 2] = l;
              h = h + 1 | 0;
              a = (h | 0) == (l | 0);
              i = k + 1 | 0;
              j = (i | 0) == 6;

              if (Fb(g, c) | 0) {
                g = 1;
                break a;
              }

              l = l + (j & a & 1) | 0;

              if ((l | 0) > (d | 0)) {
                g = 0;
                break;
              } else {
                k = a ? j ? 0 : i : k;
                m = m + 1 | 0;
                h = a ? 0 : h;
              }
            }
          } else {
            k = 0;
            l = 1;
            m = 1;
            h = 0;
            g = a;

            while (1) {
              if (!(h | k)) {
                g = da(g, c, 4, n) | 0;
                c = G() | 0;

                if ((g | 0) == 0 & (c | 0) == 0) {
                  g = 2;
                  break a;
                }

                if (Fb(g, c) | 0) {
                  g = 1;
                  break a;
                }
              }

              g = da(g, c, b[16 + (k << 2) >> 2] | 0, n) | 0;
              c = G() | 0;

              if ((g | 0) == 0 & (c | 0) == 0) {
                g = 2;
                break a;
              }

              a = e + (m << 3) | 0;
              b[a >> 2] = g;
              b[a + 4 >> 2] = c;
              h = h + 1 | 0;
              a = (h | 0) == (l | 0);
              i = k + 1 | 0;
              j = (i | 0) == 6;

              if (Fb(g, c) | 0) {
                g = 1;
                break a;
              }

              l = l + (j & a & 1) | 0;

              if ((l | 0) > (d | 0)) {
                g = 0;
                break;
              } else {
                k = a ? j ? 0 : i : k;
                m = m + 1 | 0;
                h = a ? 0 : h;
              }
            }
          }
        } else { g = 0; } } while (0);

        n = g;
        S = o;
        return n | 0;
      }

      function ca(a, c, d, e, f, g, h) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        f = f | 0;
        g = g | 0;
        h = h | 0;
        var i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0;
        m = S;
        S = S + 16 | 0;
        l = m;

        if ((a | 0) == 0 & (c | 0) == 0) {
          S = m;
          return;
        }

        i = bd(a | 0, c | 0, g | 0, ((g | 0) < 0) << 31 >> 31 | 0) | 0;
        G() | 0;
        j = e + (i << 3) | 0;
        n = j;
        o = b[n >> 2] | 0;
        n = b[n + 4 >> 2] | 0;
        k = (o | 0) == (a | 0) & (n | 0) == (c | 0);
        if (!((o | 0) == 0 & (n | 0) == 0 | k)) { do {
          i = (i + 1 | 0) % (g | 0) | 0;
          j = e + (i << 3) | 0;
          o = j;
          n = b[o >> 2] | 0;
          o = b[o + 4 >> 2] | 0;
          k = (n | 0) == (a | 0) & (o | 0) == (c | 0);
        } while (!((n | 0) == 0 & (o | 0) == 0 | k)); }
        i = f + (i << 2) | 0;

        if (k ? (b[i >> 2] | 0) <= (h | 0) : 0) {
          S = m;
          return;
        }

        o = j;
        b[o >> 2] = a;
        b[o + 4 >> 2] = c;
        b[i >> 2] = h;

        if ((h | 0) >= (d | 0)) {
          S = m;
          return;
        }

        o = h + 1 | 0;
        b[l >> 2] = 0;
        n = da(a, c, 2, l) | 0;
        ca(n, G() | 0, d, e, f, g, o);
        b[l >> 2] = 0;
        n = da(a, c, 3, l) | 0;
        ca(n, G() | 0, d, e, f, g, o);
        b[l >> 2] = 0;
        n = da(a, c, 1, l) | 0;
        ca(n, G() | 0, d, e, f, g, o);
        b[l >> 2] = 0;
        n = da(a, c, 5, l) | 0;
        ca(n, G() | 0, d, e, f, g, o);
        b[l >> 2] = 0;
        n = da(a, c, 4, l) | 0;
        ca(n, G() | 0, d, e, f, g, o);
        b[l >> 2] = 0;
        n = da(a, c, 6, l) | 0;
        ca(n, G() | 0, d, e, f, g, o);
        S = m;
        return;
      }

      function da(a, c, d, e) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        var f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0;

        if ((b[e >> 2] | 0) > 0) {
          f = 0;

          do {
            d = Pa(d) | 0;
            f = f + 1 | 0;
          } while ((f | 0) < (b[e >> 2] | 0));
        }

        i = cd(a | 0, c | 0, 45) | 0;
        G() | 0;
        j = i & 127;
        g = Lb(a, c) | 0;
        f = cd(a | 0, c | 0, 52) | 0;
        G() | 0;
        f = f & 15;

        a: do { if (!f) { h = 6; }else { while (1) {
          m = (15 - f | 0) * 3 | 0;
          n = cd(a | 0, c | 0, m | 0) | 0;
          G() | 0;
          n = n & 7;
          o = (Rb(f) | 0) == 0;
          f = f + -1 | 0;
          l = dd(7, 0, m | 0) | 0;
          c = c & ~(G() | 0);
          m = dd(b[(o ? 464 : 48) + (n * 28 | 0) + (d << 2) >> 2] | 0, 0, m | 0) | 0;
          k = G() | 0;
          d = b[(o ? 672 : 256) + (n * 28 | 0) + (d << 2) >> 2] | 0;
          a = m | a & ~l;
          c = k | c;

          if (!d) {
            d = 0;
            break a;
          }

          if (!f) {
            h = 6;
            break;
          }
        } } } while (0);

        if ((h | 0) == 6) {
          o = b[880 + (j * 28 | 0) + (d << 2) >> 2] | 0;
          n = dd(o | 0, 0, 45) | 0;
          a = n | a;
          c = G() | 0 | c & -1040385;
          d = b[4304 + (j * 28 | 0) + (d << 2) >> 2] | 0;

          if ((o & 127 | 0) == 127) {
            o = dd(b[880 + (j * 28 | 0) + 20 >> 2] | 0, 0, 45) | 0;
            c = G() | 0 | c & -1040385;
            d = b[4304 + (j * 28 | 0) + 20 >> 2] | 0;
            a = Nb(o | a, c) | 0;
            c = G() | 0;
            b[e >> 2] = (b[e >> 2] | 0) + 1;
          }
        }

        h = cd(a | 0, c | 0, 45) | 0;
        G() | 0;
        h = h & 127;

        b: do { if (!(la(h) | 0)) {
          if ((d | 0) > 0) {
            f = 0;

            do {
              a = Nb(a, c) | 0;
              c = G() | 0;
              f = f + 1 | 0;
            } while ((f | 0) != (d | 0));
          }
        } else {
          c: do { if ((Lb(a, c) | 0) == 1) {
            if ((j | 0) != (h | 0)) { if (ra(h, b[7728 + (j * 28 | 0) >> 2] | 0) | 0) {
              a = Pb(a, c) | 0;
              g = 1;
              c = G() | 0;
              break;
            } else {
              a = Nb(a, c) | 0;
              g = 1;
              c = G() | 0;
              break;
            } }

            switch (g | 0) {
              case 5:
                {
                  a = Pb(a, c) | 0;
                  c = G() | 0;
                  b[e >> 2] = (b[e >> 2] | 0) + 5;
                  g = 0;
                  break c;
                }

              case 3:
                {
                  a = Nb(a, c) | 0;
                  c = G() | 0;
                  b[e >> 2] = (b[e >> 2] | 0) + 1;
                  g = 0;
                  break c;
                }

              default:
                {
                  n = 0;
                  o = 0;
                  F(n | 0);
                  return o | 0;
                }
            }
          } else { g = 0; } } while (0);

          if ((d | 0) > 0) {
            f = 0;

            do {
              a = Mb(a, c) | 0;
              c = G() | 0;
              f = f + 1 | 0;
            } while ((f | 0) != (d | 0));
          }

          if ((j | 0) != (h | 0)) {
            if (!(ma(h) | 0)) {
              if ((g | 0) != 0 | (Lb(a, c) | 0) != 5) { break; }
              b[e >> 2] = (b[e >> 2] | 0) + 1;
              break;
            }

            switch (i & 127) {
              case 8:
              case 118:
                break b;

            }

            if ((Lb(a, c) | 0) != 3) { b[e >> 2] = (b[e >> 2] | 0) + 1; }
          }
        } } while (0);

        b[e >> 2] = ((b[e >> 2] | 0) + d | 0) % 6 | 0;
        n = c;
        o = a;
        F(n | 0);
        return o | 0;
      }

      function ea(a, c, d, e) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        var f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0;
        m = S;
        S = S + 16 | 0;
        l = m;

        if (!d) {
          l = e;
          b[l >> 2] = a;
          b[l + 4 >> 2] = c;
          l = 0;
          S = m;
          return l | 0;
        }

        b[l >> 2] = 0;

        a: do { if (!(Fb(a, c) | 0)) {
          g = (d | 0) > 0;

          if (g) {
            f = 0;
            k = a;

            do {
              k = da(k, c, 4, l) | 0;
              c = G() | 0;

              if ((k | 0) == 0 & (c | 0) == 0) {
                a = 2;
                break a;
              }

              f = f + 1 | 0;

              if (Fb(k, c) | 0) {
                a = 1;
                break a;
              }
            } while ((f | 0) < (d | 0));

            j = e;
            b[j >> 2] = k;
            b[j + 4 >> 2] = c;
            j = d + -1 | 0;

            if (g) {
              g = 0;
              h = 1;
              f = k;
              a = c;

              do {
                f = da(f, a, 2, l) | 0;
                a = G() | 0;

                if ((f | 0) == 0 & (a | 0) == 0) {
                  a = 2;
                  break a;
                }

                i = e + (h << 3) | 0;
                b[i >> 2] = f;
                b[i + 4 >> 2] = a;
                h = h + 1 | 0;

                if (Fb(f, a) | 0) {
                  a = 1;
                  break a;
                }

                g = g + 1 | 0;
              } while ((g | 0) < (d | 0));

              i = 0;
              g = h;

              do {
                f = da(f, a, 3, l) | 0;
                a = G() | 0;

                if ((f | 0) == 0 & (a | 0) == 0) {
                  a = 2;
                  break a;
                }

                h = e + (g << 3) | 0;
                b[h >> 2] = f;
                b[h + 4 >> 2] = a;
                g = g + 1 | 0;

                if (Fb(f, a) | 0) {
                  a = 1;
                  break a;
                }

                i = i + 1 | 0;
              } while ((i | 0) < (d | 0));

              h = 0;

              do {
                f = da(f, a, 1, l) | 0;
                a = G() | 0;

                if ((f | 0) == 0 & (a | 0) == 0) {
                  a = 2;
                  break a;
                }

                i = e + (g << 3) | 0;
                b[i >> 2] = f;
                b[i + 4 >> 2] = a;
                g = g + 1 | 0;

                if (Fb(f, a) | 0) {
                  a = 1;
                  break a;
                }

                h = h + 1 | 0;
              } while ((h | 0) < (d | 0));

              h = 0;

              do {
                f = da(f, a, 5, l) | 0;
                a = G() | 0;

                if ((f | 0) == 0 & (a | 0) == 0) {
                  a = 2;
                  break a;
                }

                i = e + (g << 3) | 0;
                b[i >> 2] = f;
                b[i + 4 >> 2] = a;
                g = g + 1 | 0;

                if (Fb(f, a) | 0) {
                  a = 1;
                  break a;
                }

                h = h + 1 | 0;
              } while ((h | 0) < (d | 0));

              h = 0;

              do {
                f = da(f, a, 4, l) | 0;
                a = G() | 0;

                if ((f | 0) == 0 & (a | 0) == 0) {
                  a = 2;
                  break a;
                }

                i = e + (g << 3) | 0;
                b[i >> 2] = f;
                b[i + 4 >> 2] = a;
                g = g + 1 | 0;

                if (Fb(f, a) | 0) {
                  a = 1;
                  break a;
                }

                h = h + 1 | 0;
              } while ((h | 0) < (d | 0));

              h = 0;

              while (1) {
                f = da(f, a, 6, l) | 0;
                a = G() | 0;

                if ((f | 0) == 0 & (a | 0) == 0) {
                  a = 2;
                  break a;
                }

                if ((h | 0) != (j | 0)) {
                  i = e + (g << 3) | 0;
                  b[i >> 2] = f;
                  b[i + 4 >> 2] = a;
                  if (!(Fb(f, a) | 0)) { g = g + 1 | 0; }else {
                    a = 1;
                    break a;
                  }
                }

                h = h + 1 | 0;

                if ((h | 0) >= (d | 0)) {
                  h = k;
                  g = c;
                  break;
                }
              }
            } else {
              h = k;
              f = k;
              g = c;
              a = c;
            }
          } else {
            h = e;
            b[h >> 2] = a;
            b[h + 4 >> 2] = c;
            h = a;
            f = a;
            g = c;
            a = c;
          }

          a = ((h | 0) != (f | 0) | (g | 0) != (a | 0)) & 1;
        } else { a = 1; } } while (0);

        l = a;
        S = m;
        return l | 0;
      }

      function fa(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        g = S;
        S = S + 48 | 0;
        f = g + 8 | 0;
        e = g;
        i = a;
        h = b[i + 4 >> 2] | 0;
        d = e;
        b[d >> 2] = b[i >> 2];
        b[d + 4 >> 2] = h;
        vc(e, f);
        f = ya(f, c) | 0;
        c = b[e >> 2] | 0;
        e = b[a + 8 >> 2] | 0;

        if ((e | 0) <= 0) {
          i = c;
          h = (f | 0) < (i | 0);
          i = h ? i : f;
          i = i + 12 | 0;
          S = g;
          return i | 0;
        }

        d = b[a + 12 >> 2] | 0;
        a = 0;

        do {
          c = (b[d + (a << 3) >> 2] | 0) + c | 0;
          a = a + 1 | 0;
        } while ((a | 0) < (e | 0));

        i = (f | 0) < (c | 0);
        i = i ? c : f;
        i = i + 12 | 0;
        S = g;
        return i | 0;
      }

      function ga(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0;
        i = S;
        S = S + 48 | 0;
        e = i + 8 | 0;
        f = i;

        if (!(ha(a, c, d) | 0)) {
          S = i;
          return;
        }

        j = a;
        g = b[j + 4 >> 2] | 0;
        h = f;
        b[h >> 2] = b[j >> 2];
        b[h + 4 >> 2] = g;
        vc(f, e);
        h = ya(e, c) | 0;
        c = b[f >> 2] | 0;
        g = b[a + 8 >> 2] | 0;

        if ((g | 0) > 0) {
          f = b[a + 12 >> 2] | 0;
          e = 0;

          do {
            c = (b[f + (e << 3) >> 2] | 0) + c | 0;
            e = e + 1 | 0;
          } while ((e | 0) != (g | 0));
        }

        c = (h | 0) < (c | 0) ? c : h;

        if ((c | 0) <= -12) {
          S = i;
          return;
        }

        j = c + 11 | 0;
        hd(d | 0, 0, (((j | 0) > 0 ? j : 0) << 3) + 8 | 0) | 0;
        S = i;
        return;
      }

      function ha(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0,
            x = 0,
            y = 0,
            z = 0,
            A = 0,
            B = 0,
            C = 0,
            D = 0,
            E = 0,
            F = 0,
            I = 0,
            J = 0;
        J = S;
        S = S + 112 | 0;
        D = J + 80 | 0;
        j = J + 72 | 0;
        E = J;
        F = J + 56 | 0;
        k = a + 8 | 0;
        I = Wc((b[k >> 2] << 5) + 32 | 0) | 0;
        if (!I) { H(22848, 22448, 800, 22456); }
        wc(a, I);
        g = a;
        e = b[g + 4 >> 2] | 0;
        i = j;
        b[i >> 2] = b[g >> 2];
        b[i + 4 >> 2] = e;
        vc(j, D);
        i = ya(D, c) | 0;
        e = b[j >> 2] | 0;
        g = b[k >> 2] | 0;

        if ((g | 0) > 0) {
          h = b[a + 12 >> 2] | 0;
          f = 0;

          do {
            e = (b[h + (f << 3) >> 2] | 0) + e | 0;
            f = f + 1 | 0;
          } while ((f | 0) != (g | 0));
        }

        i = (i | 0) < (e | 0) ? e : i;
        C = i + 12 | 0;
        f = Yc(C, 8) | 0;
        l = Yc(C, 8) | 0;
        b[D >> 2] = 0;
        A = a;
        B = b[A + 4 >> 2] | 0;
        e = j;
        b[e >> 2] = b[A >> 2];
        b[e + 4 >> 2] = B;
        e = ia(j, C, c, D, f, l) | 0;

        if (e | 0) {
          Xc(f);
          Xc(l);
          Xc(I);
          I = e;
          S = J;
          return I | 0;
        }

        a: do { if ((b[k >> 2] | 0) > 0) {
          g = a + 12 | 0;
          e = 0;

          while (1) {
            h = ia((b[g >> 2] | 0) + (e << 3) | 0, C, c, D, f, l) | 0;
            e = e + 1 | 0;
            if (h | 0) { break; }
            if ((e | 0) >= (b[k >> 2] | 0)) { break a; }
          }

          Xc(f);
          Xc(l);
          Xc(I);
          I = h;
          S = J;
          return I | 0;
        } } while (0);

        if ((i | 0) > -12) { hd(l | 0, 0, ((C | 0) > 1 ? C : 1) << 3 | 0) | 0; }

        b: do { if ((b[D >> 2] | 0) > 0) {
          B = ((C | 0) < 0) << 31 >> 31;
          v = f;
          w = l;
          x = f;
          y = f;
          z = l;
          A = f;
          e = f;
          r = f;
          s = l;
          t = l;
          u = l;
          f = l;

          c: while (1) {
            q = b[D >> 2] | 0;
            o = 0;
            p = 0;
            g = 0;

            while (1) {
              h = E;
              i = h + 56 | 0;

              do {
                b[h >> 2] = 0;
                h = h + 4 | 0;
              } while ((h | 0) < (i | 0));

              c = v + (o << 3) | 0;
              j = b[c >> 2] | 0;
              c = b[c + 4 >> 2] | 0;

              if (ba(j, c, 1, E, 0) | 0) {
                h = E;
                i = h + 56 | 0;

                do {
                  b[h >> 2] = 0;
                  h = h + 4 | 0;
                } while ((h | 0) < (i | 0));

                h = Yc(7, 4) | 0;

                if (h | 0) {
                  ca(j, c, 1, E, h, 7, 0);
                  Xc(h);
                }
              }

              n = 0;

              do {
                m = E + (n << 3) | 0;
                l = b[m >> 2] | 0;
                m = b[m + 4 >> 2] | 0;

                d: do { if (!((l | 0) == 0 & (m | 0) == 0)) {
                  j = bd(l | 0, m | 0, C | 0, B | 0) | 0;
                  G() | 0;
                  h = d + (j << 3) | 0;
                  i = h;
                  c = b[i >> 2] | 0;
                  i = b[i + 4 >> 2] | 0;

                  if (!((c | 0) == 0 & (i | 0) == 0)) {
                    k = 0;

                    while (1) {
                      if ((k | 0) > (C | 0)) { break c; }
                      if ((c | 0) == (l | 0) & (i | 0) == (m | 0)) { break d; }
                      j = (j + 1 | 0) % (C | 0) | 0;
                      h = d + (j << 3) | 0;
                      i = h;
                      c = b[i >> 2] | 0;
                      i = b[i + 4 >> 2] | 0;
                      if ((c | 0) == 0 & (i | 0) == 0) { break; }else { k = k + 1 | 0; }
                    }
                  }

                  if (!((l | 0) == 0 & (m | 0) == 0)) {
                    Vb(l, m, F);

                    if (xc(a, I, F) | 0) {
                      k = h;
                      b[k >> 2] = l;
                      b[k + 4 >> 2] = m;
                      k = w + (g << 3) | 0;
                      b[k >> 2] = l;
                      b[k + 4 >> 2] = m;
                      g = g + 1 | 0;
                    }
                  }
                } } while (0);

                n = n + 1 | 0;
              } while (n >>> 0 < 7);

              p = p + 1 | 0;
              if ((p | 0) >= (q | 0)) { break; }else { o = o + 1 | 0; }
            }

            if ((q | 0) > 0) { hd(x | 0, 0, q << 3 | 0) | 0; }
            b[D >> 2] = g;

            if ((g | 0) > 0) {
              l = f;
              m = u;
              n = A;
              o = t;
              p = s;
              q = w;
              f = r;
              u = e;
              t = y;
              s = x;
              r = l;
              e = m;
              A = z;
              z = n;
              y = o;
              x = p;
              w = v;
              v = q;
            } else { break b; }
          }

          Xc(y);
          Xc(z);
          Xc(I);
          I = -1;
          S = J;
          return I | 0;
        } else { e = l; } } while (0);

        Xc(I);
        Xc(f);
        Xc(e);
        I = 0;
        S = J;
        return I | 0;
      }

      function ia(a, c, d, f, g, h) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        f = f | 0;
        g = g | 0;
        h = h | 0;
        var i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0.0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0,
            x = 0,
            y = 0,
            z = 0,
            A = 0,
            B = 0,
            C = 0,
            D = 0.0,
            E = 0.0;
        C = S;
        S = S + 48 | 0;
        y = C + 32 | 0;
        z = C + 16 | 0;
        A = C;
        i = b[a >> 2] | 0;

        if ((i | 0) <= 0) {
          B = 0;
          S = C;
          return B | 0;
        }

        t = a + 4 | 0;
        u = y + 8 | 0;
        v = z + 8 | 0;
        w = A + 8 | 0;
        x = ((c | 0) < 0) << 31 >> 31;
        s = 0;

        a: while (1) {
          j = b[t >> 2] | 0;
          q = j + (s << 4) | 0;
          b[y >> 2] = b[q >> 2];
          b[y + 4 >> 2] = b[q + 4 >> 2];
          b[y + 8 >> 2] = b[q + 8 >> 2];
          b[y + 12 >> 2] = b[q + 12 >> 2];

          if ((s | 0) == (i + -1 | 0)) {
            b[z >> 2] = b[j >> 2];
            b[z + 4 >> 2] = b[j + 4 >> 2];
            b[z + 8 >> 2] = b[j + 8 >> 2];
            b[z + 12 >> 2] = b[j + 12 >> 2];
          } else {
            q = j + (s + 1 << 4) | 0;
            b[z >> 2] = b[q >> 2];
            b[z + 4 >> 2] = b[q + 4 >> 2];
            b[z + 8 >> 2] = b[q + 8 >> 2];
            b[z + 12 >> 2] = b[q + 12 >> 2];
          }

          q = za(y, z, d) | 0;

          b: do { if ((q | 0) > 0) {
            r = +(q | 0);
            p = 0;

            c: while (1) {
              E = +(q - p | 0);
              D = +(p | 0);
              e[A >> 3] = +e[y >> 3] * E / r + +e[z >> 3] * D / r;
              e[w >> 3] = +e[u >> 3] * E / r + +e[v >> 3] * D / r;
              n = Sb(A, d) | 0;
              o = G() | 0;
              j = bd(n | 0, o | 0, c | 0, x | 0) | 0;
              G() | 0;
              i = h + (j << 3) | 0;
              k = i;
              l = b[k >> 2] | 0;
              k = b[k + 4 >> 2] | 0;

              d: do { if ((l | 0) == 0 & (k | 0) == 0) { B = 14; }else {
                m = 0;

                while (1) {
                  if ((m | 0) > (c | 0)) {
                    i = 1;
                    break d;
                  }

                  if ((l | 0) == (n | 0) & (k | 0) == (o | 0)) {
                    i = 7;
                    break d;
                  }

                  j = (j + 1 | 0) % (c | 0) | 0;
                  i = h + (j << 3) | 0;
                  k = i;
                  l = b[k >> 2] | 0;
                  k = b[k + 4 >> 2] | 0;

                  if ((l | 0) == 0 & (k | 0) == 0) {
                    B = 14;
                    break;
                  } else { m = m + 1 | 0; }
                }
              } } while (0);

              if ((B | 0) == 14) {
                B = 0;
                if ((n | 0) == 0 & (o | 0) == 0) { i = 7; }else {
                  b[i >> 2] = n;
                  b[i + 4 >> 2] = o;
                  i = b[f >> 2] | 0;
                  m = g + (i << 3) | 0;
                  b[m >> 2] = n;
                  b[m + 4 >> 2] = o;
                  b[f >> 2] = i + 1;
                  i = 0;
                }
              }

              switch (i & 7) {
                case 7:
                case 0:
                  break;

                default:
                  break c;
              }

              p = p + 1 | 0;

              if ((q | 0) <= (p | 0)) {
                B = 8;
                break b;
              }
            }

            if (i | 0) {
              i = -1;
              B = 20;
              break a;
            }
          } else { B = 8; } } while (0);

          if ((B | 0) == 8) { B = 0; }
          s = s + 1 | 0;
          i = b[a >> 2] | 0;

          if ((s | 0) >= (i | 0)) {
            i = 0;
            B = 20;
            break;
          }
        }

        if ((B | 0) == 20) {
          S = C;
          return i | 0;
        }

        return 0;
      }

      function ja(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0;
        k = S;
        S = S + 176 | 0;
        j = k;

        if ((c | 0) < 1) {
          Mc(d, 0, 0);
          S = k;
          return;
        }

        h = a;
        h = cd(b[h >> 2] | 0, b[h + 4 >> 2] | 0, 52) | 0;
        G() | 0;
        Mc(d, (c | 0) > 6 ? c : 6, h & 15);
        h = 0;

        do {
          e = a + (h << 3) | 0;
          Wb(b[e >> 2] | 0, b[e + 4 >> 2] | 0, j);
          e = b[j >> 2] | 0;

          if ((e | 0) > 0) {
            i = 0;

            do {
              g = j + 8 + (i << 4) | 0;
              i = i + 1 | 0;
              e = j + 8 + (((i | 0) % (e | 0) | 0) << 4) | 0;
              f = Rc(d, e, g) | 0;
              if (!f) { Qc(d, g, e) | 0; }else { Pc(d, f) | 0; }
              e = b[j >> 2] | 0;
            } while ((i | 0) < (e | 0));
          }

          h = h + 1 | 0;
        } while ((h | 0) != (c | 0));

        S = k;
        return;
      }

      function ka(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0,
            h = 0;
        g = S;
        S = S + 32 | 0;
        e = g;
        f = g + 16 | 0;
        ja(a, c, f);
        b[d >> 2] = 0;
        b[d + 4 >> 2] = 0;
        b[d + 8 >> 2] = 0;
        a = Oc(f) | 0;

        if (!a) {
          kc(d) | 0;
          Nc(f);
          S = g;
          return;
        }

        do {
          c = hc(d) | 0;

          do {
            ic(c, a) | 0;
            h = a + 16 | 0;
            b[e >> 2] = b[h >> 2];
            b[e + 4 >> 2] = b[h + 4 >> 2];
            b[e + 8 >> 2] = b[h + 8 >> 2];
            b[e + 12 >> 2] = b[h + 12 >> 2];
            Pc(f, a) | 0;
            a = Sc(f, e) | 0;
          } while ((a | 0) != 0);

          a = Oc(f) | 0;
        } while ((a | 0) != 0);

        kc(d) | 0;
        Nc(f);
        S = g;
        return;
      }

      function la(a) {
        a = a | 0;
        return b[7728 + (a * 28 | 0) + 16 >> 2] | 0;
      }

      function ma(a) {
        a = a | 0;
        return (a | 0) == 4 | (a | 0) == 117 | 0;
      }

      function na(a) {
        a = a | 0;
        return b[11152 + ((b[a >> 2] | 0) * 216 | 0) + ((b[a + 4 >> 2] | 0) * 72 | 0) + ((b[a + 8 >> 2] | 0) * 24 | 0) + (b[a + 12 >> 2] << 3) >> 2] | 0;
      }

      function oa(a) {
        a = a | 0;
        return b[11152 + ((b[a >> 2] | 0) * 216 | 0) + ((b[a + 4 >> 2] | 0) * 72 | 0) + ((b[a + 8 >> 2] | 0) * 24 | 0) + (b[a + 12 >> 2] << 3) + 4 >> 2] | 0;
      }

      function pa(a, c) {
        a = a | 0;
        c = c | 0;
        a = 7728 + (a * 28 | 0) | 0;
        b[c >> 2] = b[a >> 2];
        b[c + 4 >> 2] = b[a + 4 >> 2];
        b[c + 8 >> 2] = b[a + 8 >> 2];
        b[c + 12 >> 2] = b[a + 12 >> 2];
        return;
      }

      function qa(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0,
            e = 0;

        if (c >>> 0 > 20) {
          c = -1;
          return c | 0;
        }

        do { if ((b[11152 + (c * 216 | 0) >> 2] | 0) != (a | 0)) {
          if ((b[11152 + (c * 216 | 0) + 8 >> 2] | 0) != (a | 0)) {
            if ((b[11152 + (c * 216 | 0) + 16 >> 2] | 0) != (a | 0)) {
              if ((b[11152 + (c * 216 | 0) + 24 >> 2] | 0) != (a | 0)) {
                if ((b[11152 + (c * 216 | 0) + 32 >> 2] | 0) != (a | 0)) {
                  if ((b[11152 + (c * 216 | 0) + 40 >> 2] | 0) != (a | 0)) {
                    if ((b[11152 + (c * 216 | 0) + 48 >> 2] | 0) != (a | 0)) {
                      if ((b[11152 + (c * 216 | 0) + 56 >> 2] | 0) != (a | 0)) {
                        if ((b[11152 + (c * 216 | 0) + 64 >> 2] | 0) != (a | 0)) {
                          if ((b[11152 + (c * 216 | 0) + 72 >> 2] | 0) != (a | 0)) {
                            if ((b[11152 + (c * 216 | 0) + 80 >> 2] | 0) != (a | 0)) {
                              if ((b[11152 + (c * 216 | 0) + 88 >> 2] | 0) != (a | 0)) {
                                if ((b[11152 + (c * 216 | 0) + 96 >> 2] | 0) != (a | 0)) {
                                  if ((b[11152 + (c * 216 | 0) + 104 >> 2] | 0) != (a | 0)) {
                                    if ((b[11152 + (c * 216 | 0) + 112 >> 2] | 0) != (a | 0)) {
                                      if ((b[11152 + (c * 216 | 0) + 120 >> 2] | 0) != (a | 0)) {
                                        if ((b[11152 + (c * 216 | 0) + 128 >> 2] | 0) != (a | 0)) {
                                          if ((b[11152 + (c * 216 | 0) + 136 >> 2] | 0) == (a | 0)) {
                                            a = 2;
                                            d = 1;
                                            e = 2;
                                          } else {
                                            if ((b[11152 + (c * 216 | 0) + 144 >> 2] | 0) == (a | 0)) {
                                              a = 0;
                                              d = 2;
                                              e = 0;
                                              break;
                                            }

                                            if ((b[11152 + (c * 216 | 0) + 152 >> 2] | 0) == (a | 0)) {
                                              a = 0;
                                              d = 2;
                                              e = 1;
                                              break;
                                            }

                                            if ((b[11152 + (c * 216 | 0) + 160 >> 2] | 0) == (a | 0)) {
                                              a = 0;
                                              d = 2;
                                              e = 2;
                                              break;
                                            }

                                            if ((b[11152 + (c * 216 | 0) + 168 >> 2] | 0) == (a | 0)) {
                                              a = 1;
                                              d = 2;
                                              e = 0;
                                              break;
                                            }

                                            if ((b[11152 + (c * 216 | 0) + 176 >> 2] | 0) == (a | 0)) {
                                              a = 1;
                                              d = 2;
                                              e = 1;
                                              break;
                                            }

                                            if ((b[11152 + (c * 216 | 0) + 184 >> 2] | 0) == (a | 0)) {
                                              a = 1;
                                              d = 2;
                                              e = 2;
                                              break;
                                            }

                                            if ((b[11152 + (c * 216 | 0) + 192 >> 2] | 0) == (a | 0)) {
                                              a = 2;
                                              d = 2;
                                              e = 0;
                                              break;
                                            }

                                            if ((b[11152 + (c * 216 | 0) + 200 >> 2] | 0) == (a | 0)) {
                                              a = 2;
                                              d = 2;
                                              e = 1;
                                              break;
                                            }

                                            if ((b[11152 + (c * 216 | 0) + 208 >> 2] | 0) == (a | 0)) {
                                              a = 2;
                                              d = 2;
                                              e = 2;
                                              break;
                                            } else { a = -1; }

                                            return a | 0;
                                          }
                                        } else {
                                          a = 2;
                                          d = 1;
                                          e = 1;
                                        }
                                      } else {
                                        a = 2;
                                        d = 1;
                                        e = 0;
                                      }
                                    } else {
                                      a = 1;
                                      d = 1;
                                      e = 2;
                                    }
                                  } else {
                                    a = 1;
                                    d = 1;
                                    e = 1;
                                  }
                                } else {
                                  a = 1;
                                  d = 1;
                                  e = 0;
                                }
                              } else {
                                a = 0;
                                d = 1;
                                e = 2;
                              }
                            } else {
                              a = 0;
                              d = 1;
                              e = 1;
                            }
                          } else {
                            a = 0;
                            d = 1;
                            e = 0;
                          }
                        } else {
                          a = 2;
                          d = 0;
                          e = 2;
                        }
                      } else {
                        a = 2;
                        d = 0;
                        e = 1;
                      }
                    } else {
                      a = 2;
                      d = 0;
                      e = 0;
                    }
                  } else {
                    a = 1;
                    d = 0;
                    e = 2;
                  }
                } else {
                  a = 1;
                  d = 0;
                  e = 1;
                }
              } else {
                a = 1;
                d = 0;
                e = 0;
              }
            } else {
              a = 0;
              d = 0;
              e = 2;
            }
          } else {
            a = 0;
            d = 0;
            e = 1;
          }
        } else {
          a = 0;
          d = 0;
          e = 0;
        } } while (0);

        c = b[11152 + (c * 216 | 0) + (d * 72 | 0) + (a * 24 | 0) + (e << 3) + 4 >> 2] | 0;
        return c | 0;
      }

      function ra(a, c) {
        a = a | 0;
        c = c | 0;

        if ((b[7728 + (a * 28 | 0) + 20 >> 2] | 0) == (c | 0)) {
          c = 1;
          return c | 0;
        }

        c = (b[7728 + (a * 28 | 0) + 24 >> 2] | 0) == (c | 0);
        return c | 0;
      }

      function sa(a, c) {
        a = a | 0;
        c = c | 0;
        return b[880 + (a * 28 | 0) + (c << 2) >> 2] | 0;
      }

      function ta(a, c) {
        a = a | 0;
        c = c | 0;

        if ((b[880 + (a * 28 | 0) >> 2] | 0) == (c | 0)) {
          c = 0;
          return c | 0;
        }

        if ((b[880 + (a * 28 | 0) + 4 >> 2] | 0) == (c | 0)) {
          c = 1;
          return c | 0;
        }

        if ((b[880 + (a * 28 | 0) + 8 >> 2] | 0) == (c | 0)) {
          c = 2;
          return c | 0;
        }

        if ((b[880 + (a * 28 | 0) + 12 >> 2] | 0) == (c | 0)) {
          c = 3;
          return c | 0;
        }

        if ((b[880 + (a * 28 | 0) + 16 >> 2] | 0) == (c | 0)) {
          c = 4;
          return c | 0;
        }

        if ((b[880 + (a * 28 | 0) + 20 >> 2] | 0) == (c | 0)) {
          c = 5;
          return c | 0;
        } else { return ((b[880 + (a * 28 | 0) + 24 >> 2] | 0) == (c | 0) ? 6 : 7) | 0; }
      }

      function ua() {
        return 122;
      }

      function va(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0;
        c = 0;

        do {
          dd(c | 0, 0, 45) | 0;
          e = G() | 0 | 134225919;
          d = a + (c << 3) | 0;
          b[d >> 2] = -1;
          b[d + 4 >> 2] = e;
          c = c + 1 | 0;
        } while ((c | 0) != 122);

        return;
      }

      function wa(a) {
        a = a | 0;
        return +e[a + 16 >> 3] < +e[a + 24 >> 3] | 0;
      }

      function xa(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0.0,
            d = 0.0,
            f = 0.0;
        c = +e[b >> 3];

        if (!(c >= +e[a + 8 >> 3])) {
          b = 0;
          return b | 0;
        }

        if (!(c <= +e[a >> 3])) {
          b = 0;
          return b | 0;
        }

        d = +e[a + 16 >> 3];
        c = +e[a + 24 >> 3];
        f = +e[b + 8 >> 3];
        b = f >= c;
        a = f <= d & 1;

        if (d < c) {
          if (b) { a = 1; }
        } else if (!b) { a = 0; }

        b = (a | 0) != 0;
        return b | 0;
      }

      function ya(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0.0,
            l = 0.0;
        i = S;
        S = S + 288 | 0;
        d = i + 264 | 0;
        f = i + 96 | 0;
        g = i;
        h = g;
        j = h + 96 | 0;

        do {
          b[h >> 2] = 0;
          h = h + 4 | 0;
        } while ((h | 0) < (j | 0));

        _b(c, g);

        h = g;
        j = b[h >> 2] | 0;
        h = b[h + 4 >> 2] | 0;
        Vb(j, h, d);
        Wb(j, h, f);
        k = +jb(d, f + 8 | 0);
        e[d >> 3] = +e[a >> 3];
        h = d + 8 | 0;
        e[h >> 3] = +e[a + 16 >> 3];
        e[f >> 3] = +e[a + 8 >> 3];
        j = f + 8 | 0;
        e[j >> 3] = +e[a + 24 >> 3];
        l = +jb(d, f);
        j = ~~+A(+(l * l / +ed(+ +q(+((+e[h >> 3] - +e[j >> 3]) / (+e[d >> 3] - +e[f >> 3]))), 3.0) / (k * (k * 2.59807621135) * .8)));
        S = i;
        return ((j | 0) == 0 ? 1 : j) | 0;
      }

      function za(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0.0;
        i = S;
        S = S + 288 | 0;
        e = i + 264 | 0;
        f = i + 96 | 0;
        g = i;
        h = g;
        j = h + 96 | 0;

        do {
          b[h >> 2] = 0;
          h = h + 4 | 0;
        } while ((h | 0) < (j | 0));

        _b(d, g);

        j = g;
        h = b[j >> 2] | 0;
        j = b[j + 4 >> 2] | 0;
        Vb(h, j, e);
        Wb(h, j, f);
        k = +jb(e, f + 8 | 0);
        j = ~~+A(+(+jb(a, c) / (k * 2.0)));
        S = i;
        return ((j | 0) == 0 ? 1 : j) | 0;
      }

      function Aa(a, c, d, e) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        b[a >> 2] = c;
        b[a + 4 >> 2] = d;
        b[a + 8 >> 2] = e;
        return;
      }

      function Ba(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0.0,
            j = 0.0,
            k = 0.0,
            l = 0.0,
            m = 0,
            n = 0,
            o = 0.0;
        n = c + 8 | 0;
        b[n >> 2] = 0;
        k = +e[a >> 3];
        i = +q(+k);
        l = +e[a + 8 >> 3];
        j = +q(+l) / .8660254037844386;
        i = i + j * .5;
        d = ~~i;
        a = ~~j;
        i = i - +(d | 0);
        j = j - +(a | 0);

        do { if (i < .5) {
          if (i < .3333333333333333) {
            b[c >> 2] = d;

            if (j < (i + 1.0) * .5) {
              b[c + 4 >> 2] = a;
              break;
            } else {
              a = a + 1 | 0;
              b[c + 4 >> 2] = a;
              break;
            }
          } else {
            o = 1.0 - i;
            a = (!(j < o) & 1) + a | 0;
            b[c + 4 >> 2] = a;

            if (o <= j & j < i * 2.0) {
              d = d + 1 | 0;
              b[c >> 2] = d;
              break;
            } else {
              b[c >> 2] = d;
              break;
            }
          }
        } else {
          if (!(i < .6666666666666666)) {
            d = d + 1 | 0;
            b[c >> 2] = d;

            if (j < i * .5) {
              b[c + 4 >> 2] = a;
              break;
            } else {
              a = a + 1 | 0;
              b[c + 4 >> 2] = a;
              break;
            }
          }

          if (j < 1.0 - i) {
            b[c + 4 >> 2] = a;

            if (i * 2.0 + -1.0 < j) {
              b[c >> 2] = d;
              break;
            }
          } else {
            a = a + 1 | 0;
            b[c + 4 >> 2] = a;
          }

          d = d + 1 | 0;
          b[c >> 2] = d;
        } } while (0);

        do { if (k < 0.0) { if (!(a & 1)) {
          m = (a | 0) / 2 | 0;
          m = _c(d | 0, ((d | 0) < 0) << 31 >> 31 | 0, m | 0, ((m | 0) < 0) << 31 >> 31 | 0) | 0;
          d = ~~(+(d | 0) - (+(m >>> 0) + 4294967296.0 * +(G() | 0)) * 2.0);
          b[c >> 2] = d;
          break;
        } else {
          m = (a + 1 | 0) / 2 | 0;
          m = _c(d | 0, ((d | 0) < 0) << 31 >> 31 | 0, m | 0, ((m | 0) < 0) << 31 >> 31 | 0) | 0;
          d = ~~(+(d | 0) - ((+(m >>> 0) + 4294967296.0 * +(G() | 0)) * 2.0 + 1.0));
          b[c >> 2] = d;
          break;
        } } } while (0);

        m = c + 4 | 0;

        if (l < 0.0) {
          d = d - ((a << 1 | 1 | 0) / 2 | 0) | 0;
          b[c >> 2] = d;
          a = 0 - a | 0;
          b[m >> 2] = a;
        }

        f = a - d | 0;

        if ((d | 0) < 0) {
          g = 0 - d | 0;
          b[m >> 2] = f;
          b[n >> 2] = g;
          b[c >> 2] = 0;
          a = f;
          d = 0;
        } else { g = 0; }

        if ((a | 0) < 0) {
          d = d - a | 0;
          b[c >> 2] = d;
          g = g - a | 0;
          b[n >> 2] = g;
          b[m >> 2] = 0;
          a = 0;
        }

        h = d - g | 0;
        f = a - g | 0;

        if ((g | 0) < 0) {
          b[c >> 2] = h;
          b[m >> 2] = f;
          b[n >> 2] = 0;
          a = f;
          d = h;
          g = 0;
        }

        f = (a | 0) < (d | 0) ? a : d;
        f = (g | 0) < (f | 0) ? g : f;
        if ((f | 0) <= 0) { return; }
        b[c >> 2] = d - f;
        b[m >> 2] = a - f;
        b[n >> 2] = g - f;
        return;
      }

      function Ca(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0;
        c = b[a >> 2] | 0;
        h = a + 4 | 0;
        d = b[h >> 2] | 0;

        if ((c | 0) < 0) {
          d = d - c | 0;
          b[h >> 2] = d;
          g = a + 8 | 0;
          b[g >> 2] = (b[g >> 2] | 0) - c;
          b[a >> 2] = 0;
          c = 0;
        }

        if ((d | 0) < 0) {
          c = c - d | 0;
          b[a >> 2] = c;
          g = a + 8 | 0;
          f = (b[g >> 2] | 0) - d | 0;
          b[g >> 2] = f;
          b[h >> 2] = 0;
          d = 0;
        } else {
          f = a + 8 | 0;
          g = f;
          f = b[f >> 2] | 0;
        }

        if ((f | 0) < 0) {
          c = c - f | 0;
          b[a >> 2] = c;
          d = d - f | 0;
          b[h >> 2] = d;
          b[g >> 2] = 0;
          f = 0;
        }

        e = (d | 0) < (c | 0) ? d : c;
        e = (f | 0) < (e | 0) ? f : e;
        if ((e | 0) <= 0) { return; }
        b[a >> 2] = c - e;
        b[h >> 2] = d - e;
        b[g >> 2] = f - e;
        return;
      }

      function Da(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0.0,
            f = 0;
        f = b[a + 8 >> 2] | 0;
        d = +((b[a + 4 >> 2] | 0) - f | 0);
        e[c >> 3] = +((b[a >> 2] | 0) - f | 0) - d * .5;
        e[c + 8 >> 3] = d * .8660254037844386;
        return;
      }

      function Ea(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        b[d >> 2] = (b[c >> 2] | 0) + (b[a >> 2] | 0);
        b[d + 4 >> 2] = (b[c + 4 >> 2] | 0) + (b[a + 4 >> 2] | 0);
        b[d + 8 >> 2] = (b[c + 8 >> 2] | 0) + (b[a + 8 >> 2] | 0);
        return;
      }

      function Fa(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        b[d >> 2] = (b[a >> 2] | 0) - (b[c >> 2] | 0);
        b[d + 4 >> 2] = (b[a + 4 >> 2] | 0) - (b[c + 4 >> 2] | 0);
        b[d + 8 >> 2] = (b[a + 8 >> 2] | 0) - (b[c + 8 >> 2] | 0);
        return;
      }

      function Ga(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0,
            e = 0;
        d = B(b[a >> 2] | 0, c) | 0;
        b[a >> 2] = d;
        d = a + 4 | 0;
        e = B(b[d >> 2] | 0, c) | 0;
        b[d >> 2] = e;
        a = a + 8 | 0;
        c = B(b[a >> 2] | 0, c) | 0;
        b[a >> 2] = c;
        return;
      }

      function Ha(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        h = b[a >> 2] | 0;
        i = (h | 0) < 0;
        e = (b[a + 4 >> 2] | 0) - (i ? h : 0) | 0;
        g = (e | 0) < 0;
        f = (g ? 0 - e | 0 : 0) + ((b[a + 8 >> 2] | 0) - (i ? h : 0)) | 0;
        d = (f | 0) < 0;
        a = d ? 0 : f;
        c = (g ? 0 : e) - (d ? f : 0) | 0;
        f = (i ? 0 : h) - (g ? e : 0) - (d ? f : 0) | 0;
        d = (c | 0) < (f | 0) ? c : f;
        d = (a | 0) < (d | 0) ? a : d;
        e = (d | 0) > 0;
        a = a - (e ? d : 0) | 0;
        c = c - (e ? d : 0) | 0;

        a: do { switch (f - (e ? d : 0) | 0) {
          case 0:
            switch (c | 0) {
              case 0:
                {
                  i = (a | 0) == 0 ? 0 : (a | 0) == 1 ? 1 : 7;
                  return i | 0;
                }

              case 1:
                {
                  i = (a | 0) == 0 ? 2 : (a | 0) == 1 ? 3 : 7;
                  return i | 0;
                }

              default:
                break a;
            }

          case 1:
            switch (c | 0) {
              case 0:
                {
                  i = (a | 0) == 0 ? 4 : (a | 0) == 1 ? 5 : 7;
                  return i | 0;
                }

              case 1:
                {
                  if (!a) { a = 6; }else { break a; }
                  return a | 0;
                }

              default:
                break a;
            }

        } } while (0);

        i = 7;
        return i | 0;
      }

      function Ia(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        h = a + 8 | 0;
        d = b[h >> 2] | 0;
        c = (b[a >> 2] | 0) - d | 0;
        i = a + 4 | 0;
        d = (b[i >> 2] | 0) - d | 0;
        e = Vc(+((c * 3 | 0) - d | 0) / 7.0) | 0;
        b[a >> 2] = e;
        c = Vc(+((d << 1) + c | 0) / 7.0) | 0;
        b[i >> 2] = c;
        b[h >> 2] = 0;
        d = c - e | 0;

        if ((e | 0) < 0) {
          g = 0 - e | 0;
          b[i >> 2] = d;
          b[h >> 2] = g;
          b[a >> 2] = 0;
          c = d;
          e = 0;
          d = g;
        } else { d = 0; }

        if ((c | 0) < 0) {
          e = e - c | 0;
          b[a >> 2] = e;
          d = d - c | 0;
          b[h >> 2] = d;
          b[i >> 2] = 0;
          c = 0;
        }

        g = e - d | 0;
        f = c - d | 0;

        if ((d | 0) < 0) {
          b[a >> 2] = g;
          b[i >> 2] = f;
          b[h >> 2] = 0;
          c = f;
          f = g;
          d = 0;
        } else { f = e; }

        e = (c | 0) < (f | 0) ? c : f;
        e = (d | 0) < (e | 0) ? d : e;
        if ((e | 0) <= 0) { return; }
        b[a >> 2] = f - e;
        b[i >> 2] = c - e;
        b[h >> 2] = d - e;
        return;
      }

      function Ja(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        h = a + 8 | 0;
        d = b[h >> 2] | 0;
        c = (b[a >> 2] | 0) - d | 0;
        i = a + 4 | 0;
        d = (b[i >> 2] | 0) - d | 0;
        e = Vc(+((c << 1) + d | 0) / 7.0) | 0;
        b[a >> 2] = e;
        c = Vc(+((d * 3 | 0) - c | 0) / 7.0) | 0;
        b[i >> 2] = c;
        b[h >> 2] = 0;
        d = c - e | 0;

        if ((e | 0) < 0) {
          g = 0 - e | 0;
          b[i >> 2] = d;
          b[h >> 2] = g;
          b[a >> 2] = 0;
          c = d;
          e = 0;
          d = g;
        } else { d = 0; }

        if ((c | 0) < 0) {
          e = e - c | 0;
          b[a >> 2] = e;
          d = d - c | 0;
          b[h >> 2] = d;
          b[i >> 2] = 0;
          c = 0;
        }

        g = e - d | 0;
        f = c - d | 0;

        if ((d | 0) < 0) {
          b[a >> 2] = g;
          b[i >> 2] = f;
          b[h >> 2] = 0;
          c = f;
          f = g;
          d = 0;
        } else { f = e; }

        e = (c | 0) < (f | 0) ? c : f;
        e = (d | 0) < (e | 0) ? d : e;
        if ((e | 0) <= 0) { return; }
        b[a >> 2] = f - e;
        b[i >> 2] = c - e;
        b[h >> 2] = d - e;
        return;
      }

      function Ka(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        c = b[a >> 2] | 0;
        h = a + 4 | 0;
        d = b[h >> 2] | 0;
        i = a + 8 | 0;
        e = b[i >> 2] | 0;
        f = d + (c * 3 | 0) | 0;
        b[a >> 2] = f;
        d = e + (d * 3 | 0) | 0;
        b[h >> 2] = d;
        c = (e * 3 | 0) + c | 0;
        b[i >> 2] = c;
        e = d - f | 0;

        if ((f | 0) < 0) {
          c = c - f | 0;
          b[h >> 2] = e;
          b[i >> 2] = c;
          b[a >> 2] = 0;
          d = e;
          e = 0;
        } else { e = f; }

        if ((d | 0) < 0) {
          e = e - d | 0;
          b[a >> 2] = e;
          c = c - d | 0;
          b[i >> 2] = c;
          b[h >> 2] = 0;
          d = 0;
        }

        g = e - c | 0;
        f = d - c | 0;

        if ((c | 0) < 0) {
          b[a >> 2] = g;
          b[h >> 2] = f;
          b[i >> 2] = 0;
          e = g;
          c = 0;
        } else { f = d; }

        d = (f | 0) < (e | 0) ? f : e;
        d = (c | 0) < (d | 0) ? c : d;
        if ((d | 0) <= 0) { return; }
        b[a >> 2] = e - d;
        b[h >> 2] = f - d;
        b[i >> 2] = c - d;
        return;
      }

      function La(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        f = b[a >> 2] | 0;
        h = a + 4 | 0;
        c = b[h >> 2] | 0;
        i = a + 8 | 0;
        d = b[i >> 2] | 0;
        e = (c * 3 | 0) + f | 0;
        f = d + (f * 3 | 0) | 0;
        b[a >> 2] = f;
        b[h >> 2] = e;
        c = (d * 3 | 0) + c | 0;
        b[i >> 2] = c;
        d = e - f | 0;

        if ((f | 0) < 0) {
          c = c - f | 0;
          b[h >> 2] = d;
          b[i >> 2] = c;
          b[a >> 2] = 0;
          f = 0;
        } else { d = e; }

        if ((d | 0) < 0) {
          f = f - d | 0;
          b[a >> 2] = f;
          c = c - d | 0;
          b[i >> 2] = c;
          b[h >> 2] = 0;
          d = 0;
        }

        g = f - c | 0;
        e = d - c | 0;

        if ((c | 0) < 0) {
          b[a >> 2] = g;
          b[h >> 2] = e;
          b[i >> 2] = 0;
          f = g;
          c = 0;
        } else { e = d; }

        d = (e | 0) < (f | 0) ? e : f;
        d = (c | 0) < (d | 0) ? c : d;
        if ((d | 0) <= 0) { return; }
        b[a >> 2] = f - d;
        b[h >> 2] = e - d;
        b[i >> 2] = c - d;
        return;
      }

      function Ma(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        if ((c + -1 | 0) >>> 0 >= 6) { return; }
        f = (b[15472 + (c * 12 | 0) >> 2] | 0) + (b[a >> 2] | 0) | 0;
        b[a >> 2] = f;
        i = a + 4 | 0;
        e = (b[15472 + (c * 12 | 0) + 4 >> 2] | 0) + (b[i >> 2] | 0) | 0;
        b[i >> 2] = e;
        h = a + 8 | 0;
        c = (b[15472 + (c * 12 | 0) + 8 >> 2] | 0) + (b[h >> 2] | 0) | 0;
        b[h >> 2] = c;
        d = e - f | 0;

        if ((f | 0) < 0) {
          c = c - f | 0;
          b[i >> 2] = d;
          b[h >> 2] = c;
          b[a >> 2] = 0;
          e = 0;
        } else {
          d = e;
          e = f;
        }

        if ((d | 0) < 0) {
          e = e - d | 0;
          b[a >> 2] = e;
          c = c - d | 0;
          b[h >> 2] = c;
          b[i >> 2] = 0;
          d = 0;
        }

        g = e - c | 0;
        f = d - c | 0;

        if ((c | 0) < 0) {
          b[a >> 2] = g;
          b[i >> 2] = f;
          b[h >> 2] = 0;
          e = g;
          c = 0;
        } else { f = d; }

        d = (f | 0) < (e | 0) ? f : e;
        d = (c | 0) < (d | 0) ? c : d;
        if ((d | 0) <= 0) { return; }
        b[a >> 2] = e - d;
        b[i >> 2] = f - d;
        b[h >> 2] = c - d;
        return;
      }

      function Na(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        f = b[a >> 2] | 0;
        h = a + 4 | 0;
        c = b[h >> 2] | 0;
        i = a + 8 | 0;
        d = b[i >> 2] | 0;
        e = c + f | 0;
        f = d + f | 0;
        b[a >> 2] = f;
        b[h >> 2] = e;
        c = d + c | 0;
        b[i >> 2] = c;
        d = e - f | 0;

        if ((f | 0) < 0) {
          c = c - f | 0;
          b[h >> 2] = d;
          b[i >> 2] = c;
          b[a >> 2] = 0;
          e = 0;
        } else {
          d = e;
          e = f;
        }

        if ((d | 0) < 0) {
          e = e - d | 0;
          b[a >> 2] = e;
          c = c - d | 0;
          b[i >> 2] = c;
          b[h >> 2] = 0;
          d = 0;
        }

        g = e - c | 0;
        f = d - c | 0;

        if ((c | 0) < 0) {
          b[a >> 2] = g;
          b[h >> 2] = f;
          b[i >> 2] = 0;
          e = g;
          c = 0;
        } else { f = d; }

        d = (f | 0) < (e | 0) ? f : e;
        d = (c | 0) < (d | 0) ? c : d;
        if ((d | 0) <= 0) { return; }
        b[a >> 2] = e - d;
        b[h >> 2] = f - d;
        b[i >> 2] = c - d;
        return;
      }

      function Oa(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        c = b[a >> 2] | 0;
        h = a + 4 | 0;
        e = b[h >> 2] | 0;
        i = a + 8 | 0;
        d = b[i >> 2] | 0;
        f = e + c | 0;
        b[a >> 2] = f;
        e = d + e | 0;
        b[h >> 2] = e;
        c = d + c | 0;
        b[i >> 2] = c;
        d = e - f | 0;

        if ((f | 0) < 0) {
          c = c - f | 0;
          b[h >> 2] = d;
          b[i >> 2] = c;
          b[a >> 2] = 0;
          e = 0;
        } else {
          d = e;
          e = f;
        }

        if ((d | 0) < 0) {
          e = e - d | 0;
          b[a >> 2] = e;
          c = c - d | 0;
          b[i >> 2] = c;
          b[h >> 2] = 0;
          d = 0;
        }

        g = e - c | 0;
        f = d - c | 0;

        if ((c | 0) < 0) {
          b[a >> 2] = g;
          b[h >> 2] = f;
          b[i >> 2] = 0;
          e = g;
          c = 0;
        } else { f = d; }

        d = (f | 0) < (e | 0) ? f : e;
        d = (c | 0) < (d | 0) ? c : d;
        if ((d | 0) <= 0) { return; }
        b[a >> 2] = e - d;
        b[h >> 2] = f - d;
        b[i >> 2] = c - d;
        return;
      }

      function Pa(a) {
        a = a | 0;

        switch (a | 0) {
          case 1:
            {
              a = 5;
              break;
            }

          case 5:
            {
              a = 4;
              break;
            }

          case 4:
            {
              a = 6;
              break;
            }

          case 6:
            {
              a = 2;
              break;
            }

          case 2:
            {
              a = 3;
              break;
            }

          case 3:
            {
              a = 1;
              break;
            }

        }

        return a | 0;
      }

      function Qa(a) {
        a = a | 0;

        switch (a | 0) {
          case 1:
            {
              a = 3;
              break;
            }

          case 3:
            {
              a = 2;
              break;
            }

          case 2:
            {
              a = 6;
              break;
            }

          case 6:
            {
              a = 4;
              break;
            }

          case 4:
            {
              a = 5;
              break;
            }

          case 5:
            {
              a = 1;
              break;
            }

        }

        return a | 0;
      }

      function Ra(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        c = b[a >> 2] | 0;
        h = a + 4 | 0;
        d = b[h >> 2] | 0;
        i = a + 8 | 0;
        e = b[i >> 2] | 0;
        f = d + (c << 1) | 0;
        b[a >> 2] = f;
        d = e + (d << 1) | 0;
        b[h >> 2] = d;
        c = (e << 1) + c | 0;
        b[i >> 2] = c;
        e = d - f | 0;

        if ((f | 0) < 0) {
          c = c - f | 0;
          b[h >> 2] = e;
          b[i >> 2] = c;
          b[a >> 2] = 0;
          d = e;
          e = 0;
        } else { e = f; }

        if ((d | 0) < 0) {
          e = e - d | 0;
          b[a >> 2] = e;
          c = c - d | 0;
          b[i >> 2] = c;
          b[h >> 2] = 0;
          d = 0;
        }

        g = e - c | 0;
        f = d - c | 0;

        if ((c | 0) < 0) {
          b[a >> 2] = g;
          b[h >> 2] = f;
          b[i >> 2] = 0;
          e = g;
          c = 0;
        } else { f = d; }

        d = (f | 0) < (e | 0) ? f : e;
        d = (c | 0) < (d | 0) ? c : d;
        if ((d | 0) <= 0) { return; }
        b[a >> 2] = e - d;
        b[h >> 2] = f - d;
        b[i >> 2] = c - d;
        return;
      }

      function Sa(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        f = b[a >> 2] | 0;
        h = a + 4 | 0;
        c = b[h >> 2] | 0;
        i = a + 8 | 0;
        d = b[i >> 2] | 0;
        e = (c << 1) + f | 0;
        f = d + (f << 1) | 0;
        b[a >> 2] = f;
        b[h >> 2] = e;
        c = (d << 1) + c | 0;
        b[i >> 2] = c;
        d = e - f | 0;

        if ((f | 0) < 0) {
          c = c - f | 0;
          b[h >> 2] = d;
          b[i >> 2] = c;
          b[a >> 2] = 0;
          f = 0;
        } else { d = e; }

        if ((d | 0) < 0) {
          f = f - d | 0;
          b[a >> 2] = f;
          c = c - d | 0;
          b[i >> 2] = c;
          b[h >> 2] = 0;
          d = 0;
        }

        g = f - c | 0;
        e = d - c | 0;

        if ((c | 0) < 0) {
          b[a >> 2] = g;
          b[h >> 2] = e;
          b[i >> 2] = 0;
          f = g;
          c = 0;
        } else { e = d; }

        d = (e | 0) < (f | 0) ? e : f;
        d = (c | 0) < (d | 0) ? c : d;
        if ((d | 0) <= 0) { return; }
        b[a >> 2] = f - d;
        b[h >> 2] = e - d;
        b[i >> 2] = c - d;
        return;
      }

      function Ta(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        h = (b[a >> 2] | 0) - (b[c >> 2] | 0) | 0;
        i = (h | 0) < 0;
        e = (b[a + 4 >> 2] | 0) - (b[c + 4 >> 2] | 0) - (i ? h : 0) | 0;
        g = (e | 0) < 0;
        f = (i ? 0 - h | 0 : 0) + (b[a + 8 >> 2] | 0) - (b[c + 8 >> 2] | 0) + (g ? 0 - e | 0 : 0) | 0;
        a = (f | 0) < 0;
        c = a ? 0 : f;
        d = (g ? 0 : e) - (a ? f : 0) | 0;
        f = (i ? 0 : h) - (g ? e : 0) - (a ? f : 0) | 0;
        a = (d | 0) < (f | 0) ? d : f;
        a = (c | 0) < (a | 0) ? c : a;
        e = (a | 0) > 0;
        c = c - (e ? a : 0) | 0;
        d = d - (e ? a : 0) | 0;
        a = f - (e ? a : 0) | 0;
        a = (a | 0) > -1 ? a : 0 - a | 0;
        d = (d | 0) > -1 ? d : 0 - d | 0;
        c = (c | 0) > -1 ? c : 0 - c | 0;
        c = (d | 0) > (c | 0) ? d : c;
        return ((a | 0) > (c | 0) ? a : c) | 0;
      }

      function Ua(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0;
        d = b[a + 8 >> 2] | 0;
        b[c >> 2] = (b[a >> 2] | 0) - d;
        b[c + 4 >> 2] = (b[a + 4 >> 2] | 0) - d;
        return;
      }

      function Va(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        e = b[a >> 2] | 0;
        b[c >> 2] = e;
        a = b[a + 4 >> 2] | 0;
        h = c + 4 | 0;
        b[h >> 2] = a;
        i = c + 8 | 0;
        b[i >> 2] = 0;
        d = a - e | 0;

        if ((e | 0) < 0) {
          a = 0 - e | 0;
          b[h >> 2] = d;
          b[i >> 2] = a;
          b[c >> 2] = 0;
          e = 0;
        } else {
          d = a;
          a = 0;
        }

        if ((d | 0) < 0) {
          e = e - d | 0;
          b[c >> 2] = e;
          a = a - d | 0;
          b[i >> 2] = a;
          b[h >> 2] = 0;
          d = 0;
        }

        g = e - a | 0;
        f = d - a | 0;

        if ((a | 0) < 0) {
          b[c >> 2] = g;
          b[h >> 2] = f;
          b[i >> 2] = 0;
          d = f;
          f = g;
          a = 0;
        } else { f = e; }

        e = (d | 0) < (f | 0) ? d : f;
        e = (a | 0) < (e | 0) ? a : e;
        if ((e | 0) <= 0) { return; }
        b[c >> 2] = f - e;
        b[h >> 2] = d - e;
        b[i >> 2] = a - e;
        return;
      }

      function Wa(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0;
        c = a + 8 | 0;
        f = b[c >> 2] | 0;
        d = f - (b[a >> 2] | 0) | 0;
        b[a >> 2] = d;
        e = a + 4 | 0;
        a = (b[e >> 2] | 0) - f | 0;
        b[e >> 2] = a;
        b[c >> 2] = 0 - (a + d);
        return;
      }

      function Xa(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        d = b[a >> 2] | 0;
        c = 0 - d | 0;
        b[a >> 2] = c;
        h = a + 8 | 0;
        b[h >> 2] = 0;
        i = a + 4 | 0;
        e = b[i >> 2] | 0;
        f = e + d | 0;

        if ((d | 0) > 0) {
          b[i >> 2] = f;
          b[h >> 2] = d;
          b[a >> 2] = 0;
          c = 0;
          e = f;
        } else { d = 0; }

        if ((e | 0) < 0) {
          g = c - e | 0;
          b[a >> 2] = g;
          d = d - e | 0;
          b[h >> 2] = d;
          b[i >> 2] = 0;
          f = g - d | 0;
          c = 0 - d | 0;

          if ((d | 0) < 0) {
            b[a >> 2] = f;
            b[i >> 2] = c;
            b[h >> 2] = 0;
            e = c;
            d = 0;
          } else {
            e = 0;
            f = g;
          }
        } else { f = c; }

        c = (e | 0) < (f | 0) ? e : f;
        c = (d | 0) < (c | 0) ? d : c;
        if ((c | 0) <= 0) { return; }
        b[a >> 2] = f - c;
        b[i >> 2] = e - c;
        b[h >> 2] = d - c;
        return;
      }

      function Ya(a, b, c) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        var d = 0,
            e = 0;
        d = S;
        S = S + 16 | 0;
        e = d;
        Za(a, b, c, e);
        Ba(e, c + 4 | 0);
        S = d;
        return;
      }

      function Za(a, c, d, f) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        f = f | 0;
        var g = 0.0,
            h = 0,
            i = 0.0,
            j = 0.0,
            k = 0;
        k = S;
        S = S + 32 | 0;
        h = k;
        Jc(a, h);
        b[d >> 2] = 0;
        g = +Ic(15888, h);
        i = +Ic(15912, h);

        if (i < g) {
          b[d >> 2] = 1;
          g = i;
        }

        i = +Ic(15936, h);

        if (i < g) {
          b[d >> 2] = 2;
          g = i;
        }

        i = +Ic(15960, h);

        if (i < g) {
          b[d >> 2] = 3;
          g = i;
        }

        i = +Ic(15984, h);

        if (i < g) {
          b[d >> 2] = 4;
          g = i;
        }

        i = +Ic(16008, h);

        if (i < g) {
          b[d >> 2] = 5;
          g = i;
        }

        i = +Ic(16032, h);

        if (i < g) {
          b[d >> 2] = 6;
          g = i;
        }

        i = +Ic(16056, h);

        if (i < g) {
          b[d >> 2] = 7;
          g = i;
        }

        i = +Ic(16080, h);

        if (i < g) {
          b[d >> 2] = 8;
          g = i;
        }

        i = +Ic(16104, h);

        if (i < g) {
          b[d >> 2] = 9;
          g = i;
        }

        i = +Ic(16128, h);

        if (i < g) {
          b[d >> 2] = 10;
          g = i;
        }

        i = +Ic(16152, h);

        if (i < g) {
          b[d >> 2] = 11;
          g = i;
        }

        i = +Ic(16176, h);

        if (i < g) {
          b[d >> 2] = 12;
          g = i;
        }

        i = +Ic(16200, h);

        if (i < g) {
          b[d >> 2] = 13;
          g = i;
        }

        i = +Ic(16224, h);

        if (i < g) {
          b[d >> 2] = 14;
          g = i;
        }

        i = +Ic(16248, h);

        if (i < g) {
          b[d >> 2] = 15;
          g = i;
        }

        i = +Ic(16272, h);

        if (i < g) {
          b[d >> 2] = 16;
          g = i;
        }

        i = +Ic(16296, h);

        if (i < g) {
          b[d >> 2] = 17;
          g = i;
        }

        i = +Ic(16320, h);

        if (i < g) {
          b[d >> 2] = 18;
          g = i;
        }

        i = +Ic(16344, h);

        if (i < g) {
          b[d >> 2] = 19;
          g = i;
        }

        i = +w(+(1.0 - g * .5));

        if (i < 1.0e-16) {
          b[f >> 2] = 0;
          b[f + 4 >> 2] = 0;
          b[f + 8 >> 2] = 0;
          b[f + 12 >> 2] = 0;
          S = k;
          return;
        }

        d = b[d >> 2] | 0;
        g = +e[16368 + (d * 24 | 0) >> 3];
        g = +gb(g - +gb(+lb(15568 + (d << 4) | 0, a)));
        if (!(Rb(c) | 0)) { j = g; }else { j = +gb(g + -.3334731722518321); }
        g = +v(+i) / .381966011250105;

        if ((c | 0) > 0) {
          h = 0;

          do {
            g = g * 2.6457513110645907;
            h = h + 1 | 0;
          } while ((h | 0) != (c | 0));
        }

        i = +t(+j) * g;
        e[f >> 3] = i;
        j = +u(+j) * g;
        e[f + 8 >> 3] = j;
        S = k;
        return;
      }

      function _a(a, c, d, f, g) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        f = f | 0;
        g = g | 0;
        var h = 0.0,
            i = 0.0;
        h = +Fc(a);

        if (h < 1.0e-16) {
          c = 15568 + (c << 4) | 0;
          b[g >> 2] = b[c >> 2];
          b[g + 4 >> 2] = b[c + 4 >> 2];
          b[g + 8 >> 2] = b[c + 8 >> 2];
          b[g + 12 >> 2] = b[c + 12 >> 2];
          return;
        }

        i = +z(+ +e[a + 8 >> 3], + +e[a >> 3]);

        if ((d | 0) > 0) {
          a = 0;

          do {
            h = h / 2.6457513110645907;
            a = a + 1 | 0;
          } while ((a | 0) != (d | 0));
        }

        if (!f) {
          h = +y(+(h * .381966011250105));
          if (Rb(d) | 0) { i = +gb(i + .3334731722518321); }
        } else {
          h = h / 3.0;
          d = (Rb(d) | 0) == 0;
          h = +y(+((d ? h : h / 2.6457513110645907) * .381966011250105));
        }

        mb(15568 + (c << 4) | 0, +gb(+e[16368 + (c * 24 | 0) >> 3] - i), h, g);
        return;
      }

      function $a(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0;
        e = S;
        S = S + 16 | 0;
        f = e;
        Da(a + 4 | 0, f);

        _a(f, b[a >> 2] | 0, c, 0, d);

        S = e;
        return;
      }

      function ab(a, c, d, f, g) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        f = f | 0;
        g = g | 0;
        var h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0,
            x = 0,
            y = 0,
            z = 0,
            A = 0,
            B = 0,
            C = 0,
            D = 0,
            E = 0,
            F = 0,
            G = 0,
            I = 0.0,
            J = 0.0;
        G = S;
        S = S + 272 | 0;
        h = G + 256 | 0;
        u = G + 240 | 0;
        D = G;
        E = G + 224 | 0;
        F = G + 208 | 0;
        v = G + 176 | 0;
        w = G + 160 | 0;
        x = G + 192 | 0;
        y = G + 144 | 0;
        z = G + 128 | 0;
        A = G + 112 | 0;
        B = G + 96 | 0;
        C = G + 80 | 0;
        b[h >> 2] = c;
        b[u >> 2] = b[a >> 2];
        b[u + 4 >> 2] = b[a + 4 >> 2];
        b[u + 8 >> 2] = b[a + 8 >> 2];
        b[u + 12 >> 2] = b[a + 12 >> 2];
        bb(u, h, D);
        b[g >> 2] = 0;
        u = f + d + ((f | 0) == 5 & 1) | 0;

        if ((u | 0) <= (d | 0)) {
          S = G;
          return;
        }

        k = b[h >> 2] | 0;
        l = E + 4 | 0;
        m = v + 4 | 0;
        n = d + 5 | 0;
        o = 16848 + (k << 2) | 0;
        p = 16928 + (k << 2) | 0;
        q = z + 8 | 0;
        r = A + 8 | 0;
        s = B + 8 | 0;
        t = F + 4 | 0;
        j = d;

        a: while (1) {
          i = D + (((j | 0) % 5 | 0) << 4) | 0;
          b[F >> 2] = b[i >> 2];
          b[F + 4 >> 2] = b[i + 4 >> 2];
          b[F + 8 >> 2] = b[i + 8 >> 2];
          b[F + 12 >> 2] = b[i + 12 >> 2];

          do {} while ((cb(F, k, 0, 1) | 0) == 2);

          if ((j | 0) > (d | 0) & (Rb(c) | 0) != 0) {
            b[v >> 2] = b[F >> 2];
            b[v + 4 >> 2] = b[F + 4 >> 2];
            b[v + 8 >> 2] = b[F + 8 >> 2];
            b[v + 12 >> 2] = b[F + 12 >> 2];
            Da(l, w);
            f = b[v >> 2] | 0;
            h = b[17008 + (f * 80 | 0) + (b[E >> 2] << 2) >> 2] | 0;
            b[v >> 2] = b[18608 + (f * 80 | 0) + (h * 20 | 0) >> 2];
            i = b[18608 + (f * 80 | 0) + (h * 20 | 0) + 16 >> 2] | 0;

            if ((i | 0) > 0) {
              a = 0;

              do {
                Na(m);
                a = a + 1 | 0;
              } while ((a | 0) < (i | 0));
            }

            i = 18608 + (f * 80 | 0) + (h * 20 | 0) + 4 | 0;
            b[x >> 2] = b[i >> 2];
            b[x + 4 >> 2] = b[i + 4 >> 2];
            b[x + 8 >> 2] = b[i + 8 >> 2];
            Ga(x, (b[o >> 2] | 0) * 3 | 0);
            Ea(m, x, m);
            Ca(m);
            Da(m, y);
            I = +(b[p >> 2] | 0);
            e[z >> 3] = I * 3.0;
            e[q >> 3] = 0.0;
            J = I * -1.5;
            e[A >> 3] = J;
            e[r >> 3] = I * 2.598076211353316;
            e[B >> 3] = J;
            e[s >> 3] = I * -2.598076211353316;

            switch (b[17008 + ((b[v >> 2] | 0) * 80 | 0) + (b[F >> 2] << 2) >> 2] | 0) {
              case 1:
                {
                  a = A;
                  f = z;
                  break;
                }

              case 3:
                {
                  a = B;
                  f = A;
                  break;
                }

              case 2:
                {
                  a = z;
                  f = B;
                  break;
                }

              default:
                {
                  a = 12;
                  break a;
                }
            }

            Gc(w, y, f, a, C);

            _a(C, b[v >> 2] | 0, k, 1, g + 8 + (b[g >> 2] << 4) | 0);

            b[g >> 2] = (b[g >> 2] | 0) + 1;
          }

          if ((j | 0) < (n | 0)) {
            Da(t, v);

            _a(v, b[F >> 2] | 0, k, 1, g + 8 + (b[g >> 2] << 4) | 0);

            b[g >> 2] = (b[g >> 2] | 0) + 1;
          }
          b[E >> 2] = b[F >> 2];
          b[E + 4 >> 2] = b[F + 4 >> 2];
          b[E + 8 >> 2] = b[F + 8 >> 2];
          b[E + 12 >> 2] = b[F + 12 >> 2];
          j = j + 1 | 0;

          if ((j | 0) >= (u | 0)) {
            a = 3;
            break;
          }
        }

        if ((a | 0) == 3) {
          S = G;
          return;
        } else if ((a | 0) == 12) { H(22474, 22521, 581, 22531); }
      }

      function bb(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0;
        j = S;
        S = S + 128 | 0;
        e = j + 64 | 0;
        f = j;
        g = e;
        h = 20208;
        i = g + 60 | 0;

        do {
          b[g >> 2] = b[h >> 2];
          g = g + 4 | 0;
          h = h + 4 | 0;
        } while ((g | 0) < (i | 0));

        g = f;
        h = 20272;
        i = g + 60 | 0;

        do {
          b[g >> 2] = b[h >> 2];
          g = g + 4 | 0;
          h = h + 4 | 0;
        } while ((g | 0) < (i | 0));

        i = (Rb(b[c >> 2] | 0) | 0) == 0;
        e = i ? e : f;
        f = a + 4 | 0;
        Ra(f);
        Sa(f);

        if (Rb(b[c >> 2] | 0) | 0) {
          La(f);
          b[c >> 2] = (b[c >> 2] | 0) + 1;
        }

        b[d >> 2] = b[a >> 2];
        c = d + 4 | 0;
        Ea(f, e, c);
        Ca(c);
        b[d + 16 >> 2] = b[a >> 2];
        c = d + 20 | 0;
        Ea(f, e + 12 | 0, c);
        Ca(c);
        b[d + 32 >> 2] = b[a >> 2];
        c = d + 36 | 0;
        Ea(f, e + 24 | 0, c);
        Ca(c);
        b[d + 48 >> 2] = b[a >> 2];
        c = d + 52 | 0;
        Ea(f, e + 36 | 0, c);
        Ca(c);
        b[d + 64 >> 2] = b[a >> 2];
        d = d + 68 | 0;
        Ea(f, e + 48 | 0, d);
        Ca(d);
        S = j;
        return;
      }

      function cb(a, c, d, e) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        var f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;
        p = S;
        S = S + 32 | 0;
        n = p + 12 | 0;
        i = p;
        o = a + 4 | 0;
        m = b[16928 + (c << 2) >> 2] | 0;
        l = (e | 0) != 0;
        m = l ? m * 3 | 0 : m;
        f = b[o >> 2] | 0;
        k = a + 8 | 0;
        h = b[k >> 2] | 0;

        if (l) {
          g = a + 12 | 0;
          e = b[g >> 2] | 0;
          f = h + f + e | 0;

          if ((f | 0) == (m | 0)) {
            o = 1;
            S = p;
            return o | 0;
          } else { j = g; }
        } else {
          j = a + 12 | 0;
          e = b[j >> 2] | 0;
          f = h + f + e | 0;
        }

        if ((f | 0) <= (m | 0)) {
          o = 0;
          S = p;
          return o | 0;
        }

        do { if ((e | 0) > 0) {
          e = b[a >> 2] | 0;

          if ((h | 0) > 0) {
            g = 18608 + (e * 80 | 0) + 60 | 0;
            e = a;
            break;
          }

          e = 18608 + (e * 80 | 0) + 40 | 0;

          if (!d) {
            g = e;
            e = a;
          } else {
            Aa(n, m, 0, 0);
            Fa(o, n, i);
            Oa(i);
            Ea(i, n, o);
            g = e;
            e = a;
          }
        } else {
          g = 18608 + ((b[a >> 2] | 0) * 80 | 0) + 20 | 0;
          e = a;
        } } while (0);

        b[e >> 2] = b[g >> 2];
        f = g + 16 | 0;

        if ((b[f >> 2] | 0) > 0) {
          e = 0;

          do {
            Na(o);
            e = e + 1 | 0;
          } while ((e | 0) < (b[f >> 2] | 0));
        }

        a = g + 4 | 0;
        b[n >> 2] = b[a >> 2];
        b[n + 4 >> 2] = b[a + 4 >> 2];
        b[n + 8 >> 2] = b[a + 8 >> 2];
        c = b[16848 + (c << 2) >> 2] | 0;
        Ga(n, l ? c * 3 | 0 : c);
        Ea(o, n, o);
        Ca(o);
        if (l) { e = ((b[k >> 2] | 0) + (b[o >> 2] | 0) + (b[j >> 2] | 0) | 0) == (m | 0) ? 1 : 2; }else { e = 2; }
        o = e;
        S = p;
        return o | 0;
      }

      function db(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0;

        do { c = cb(a, b, 0, 1) | 0; } while ((c | 0) == 2);

        return c | 0;
      }

      function eb(a, c, d, f, g) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        f = f | 0;
        g = g | 0;
        var h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0,
            x = 0,
            y = 0,
            z = 0,
            A = 0,
            B = 0,
            C = 0.0,
            D = 0.0;
        B = S;
        S = S + 240 | 0;
        h = B + 224 | 0;
        x = B + 208 | 0;
        y = B;
        z = B + 192 | 0;
        A = B + 176 | 0;
        s = B + 160 | 0;
        t = B + 144 | 0;
        u = B + 128 | 0;
        v = B + 112 | 0;
        w = B + 96 | 0;
        b[h >> 2] = c;
        b[x >> 2] = b[a >> 2];
        b[x + 4 >> 2] = b[a + 4 >> 2];
        b[x + 8 >> 2] = b[a + 8 >> 2];
        b[x + 12 >> 2] = b[a + 12 >> 2];
        fb(x, h, y);
        b[g >> 2] = 0;
        r = f + d + ((f | 0) == 6 & 1) | 0;

        if ((r | 0) <= (d | 0)) {
          S = B;
          return;
        }

        k = b[h >> 2] | 0;
        l = d + 6 | 0;
        m = 16928 + (k << 2) | 0;
        n = t + 8 | 0;
        o = u + 8 | 0;
        p = v + 8 | 0;
        q = z + 4 | 0;
        i = 0;
        j = d;
        f = -1;

        a: while (1) {
          h = (j | 0) % 6 | 0;
          a = y + (h << 4) | 0;
          b[z >> 2] = b[a >> 2];
          b[z + 4 >> 2] = b[a + 4 >> 2];
          b[z + 8 >> 2] = b[a + 8 >> 2];
          b[z + 12 >> 2] = b[a + 12 >> 2];
          a = i;
          i = cb(z, k, 0, 1) | 0;

          if ((j | 0) > (d | 0) & (Rb(c) | 0) != 0 ? (a | 0) != 1 ? (b[z >> 2] | 0) != (f | 0) : 0 : 0) {
            Da(y + (((h + 5 | 0) % 6 | 0) << 4) + 4 | 0, A);
            Da(y + (h << 4) + 4 | 0, s);
            C = +(b[m >> 2] | 0);
            e[t >> 3] = C * 3.0;
            e[n >> 3] = 0.0;
            D = C * -1.5;
            e[u >> 3] = D;
            e[o >> 3] = C * 2.598076211353316;
            e[v >> 3] = D;
            e[p >> 3] = C * -2.598076211353316;
            h = b[x >> 2] | 0;

            switch (b[17008 + (h * 80 | 0) + (((f | 0) == (h | 0) ? b[z >> 2] | 0 : f) << 2) >> 2] | 0) {
              case 1:
                {
                  a = u;
                  f = t;
                  break;
                }

              case 3:
                {
                  a = v;
                  f = u;
                  break;
                }

              case 2:
                {
                  a = t;
                  f = v;
                  break;
                }

              default:
                {
                  a = 8;
                  break a;
                }
            }

            Gc(A, s, f, a, w);

            if (!(Hc(A, w) | 0) ? !(Hc(s, w) | 0) : 0) {
              _a(w, b[x >> 2] | 0, k, 1, g + 8 + (b[g >> 2] << 4) | 0);

              b[g >> 2] = (b[g >> 2] | 0) + 1;
            }
          }

          if ((j | 0) < (l | 0)) {
            Da(q, A);

            _a(A, b[z >> 2] | 0, k, 1, g + 8 + (b[g >> 2] << 4) | 0);

            b[g >> 2] = (b[g >> 2] | 0) + 1;
          }

          j = j + 1 | 0;

          if ((j | 0) >= (r | 0)) {
            a = 3;
            break;
          } else { f = b[z >> 2] | 0; }
        }

        if ((a | 0) == 3) {
          S = B;
          return;
        } else if ((a | 0) == 8) { H(22557, 22521, 746, 22602); }
      }

      function fb(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0;
        j = S;
        S = S + 160 | 0;
        e = j + 80 | 0;
        f = j;
        g = e;
        h = 20336;
        i = g + 72 | 0;

        do {
          b[g >> 2] = b[h >> 2];
          g = g + 4 | 0;
          h = h + 4 | 0;
        } while ((g | 0) < (i | 0));

        g = f;
        h = 20416;
        i = g + 72 | 0;

        do {
          b[g >> 2] = b[h >> 2];
          g = g + 4 | 0;
          h = h + 4 | 0;
        } while ((g | 0) < (i | 0));

        i = (Rb(b[c >> 2] | 0) | 0) == 0;
        e = i ? e : f;
        f = a + 4 | 0;
        Ra(f);
        Sa(f);

        if (Rb(b[c >> 2] | 0) | 0) {
          La(f);
          b[c >> 2] = (b[c >> 2] | 0) + 1;
        }

        b[d >> 2] = b[a >> 2];
        c = d + 4 | 0;
        Ea(f, e, c);
        Ca(c);
        b[d + 16 >> 2] = b[a >> 2];
        c = d + 20 | 0;
        Ea(f, e + 12 | 0, c);
        Ca(c);
        b[d + 32 >> 2] = b[a >> 2];
        c = d + 36 | 0;
        Ea(f, e + 24 | 0, c);
        Ca(c);
        b[d + 48 >> 2] = b[a >> 2];
        c = d + 52 | 0;
        Ea(f, e + 36 | 0, c);
        Ca(c);
        b[d + 64 >> 2] = b[a >> 2];
        c = d + 68 | 0;
        Ea(f, e + 48 | 0, c);
        Ca(c);
        b[d + 80 >> 2] = b[a >> 2];
        d = d + 84 | 0;
        Ea(f, e + 60 | 0, d);
        Ca(d);
        S = j;
        return;
      }

      function gb(a) {
        a = +a;
        var b = 0.0;
        b = a < 0.0 ? a + 6.283185307179586 : a;
        return +(!(a >= 6.283185307179586) ? b : b + -6.283185307179586);
      }

      function hb(a, b) {
        a = a | 0;
        b = b | 0;

        if (!(+q(+(+e[a >> 3] - +e[b >> 3])) < 1.7453292519943298e-11)) {
          b = 0;
          return b | 0;
        }

        b = +q(+(+e[a + 8 >> 3] - +e[b + 8 >> 3])) < 1.7453292519943298e-11;
        return b | 0;
      }

      function ib(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0.0,
            d = 0.0,
            f = 0.0,
            g = 0.0;
        f = +e[b >> 3];
        d = +e[a >> 3];
        g = +u(+((f - d) * .5));
        c = +u(+((+e[b + 8 >> 3] - +e[a + 8 >> 3]) * .5));
        c = g * g + c * (+t(+f) * +t(+d) * c);
        return +(+z(+ +r(+c), + +r(+(1.0 - c))) * 2.0);
      }

      function jb(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0.0,
            d = 0.0,
            f = 0.0,
            g = 0.0;
        f = +e[b >> 3];
        d = +e[a >> 3];
        g = +u(+((f - d) * .5));
        c = +u(+((+e[b + 8 >> 3] - +e[a + 8 >> 3]) * .5));
        c = g * g + c * (+t(+f) * +t(+d) * c);
        return +(+z(+ +r(+c), + +r(+(1.0 - c))) * 2.0 * 6371.007180918475);
      }

      function kb(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0.0,
            d = 0.0,
            f = 0.0,
            g = 0.0;
        f = +e[b >> 3];
        d = +e[a >> 3];
        g = +u(+((f - d) * .5));
        c = +u(+((+e[b + 8 >> 3] - +e[a + 8 >> 3]) * .5));
        c = g * g + c * (+t(+f) * +t(+d) * c);
        return +(+z(+ +r(+c), + +r(+(1.0 - c))) * 2.0 * 6371.007180918475 * 1.0e3);
      }

      function lb(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0.0,
            d = 0.0,
            f = 0.0,
            g = 0.0,
            h = 0.0;
        g = +e[b >> 3];
        d = +t(+g);
        f = +e[b + 8 >> 3] - +e[a + 8 >> 3];
        h = d * +u(+f);
        c = +e[a >> 3];
        return + +z(+h, +(+u(+g) * +t(+c) - +t(+f) * (d * +u(+c))));
      }

      function mb(a, c, d, f) {
        a = a | 0;
        c = +c;
        d = +d;
        f = f | 0;
        var g = 0,
            h = 0.0,
            i = 0.0,
            j = 0.0;

        if (d < 1.0e-16) {
          b[f >> 2] = b[a >> 2];
          b[f + 4 >> 2] = b[a + 4 >> 2];
          b[f + 8 >> 2] = b[a + 8 >> 2];
          b[f + 12 >> 2] = b[a + 12 >> 2];
          return;
        }

        h = c < 0.0 ? c + 6.283185307179586 : c;
        h = !(c >= 6.283185307179586) ? h : h + -6.283185307179586;

        do { if (h < 1.0e-16) {
          c = +e[a >> 3] + d;
          e[f >> 3] = c;
          g = f;
        } else {
          g = +q(+(h + -3.141592653589793)) < 1.0e-16;
          c = +e[a >> 3];

          if (g) {
            c = c - d;
            e[f >> 3] = c;
            g = f;
            break;
          }

          i = +t(+d);
          d = +u(+d);
          c = i * +u(+c) + +t(+h) * (d * +t(+c));
          c = c > 1.0 ? 1.0 : c;
          c = +x(+(c < -1.0 ? -1.0 : c));
          e[f >> 3] = c;

          if (+q(+(c + -1.5707963267948966)) < 1.0e-16) {
            e[f >> 3] = 1.5707963267948966;
            e[f + 8 >> 3] = 0.0;
            return;
          }

          if (+q(+(c + 1.5707963267948966)) < 1.0e-16) {
            e[f >> 3] = -1.5707963267948966;
            e[f + 8 >> 3] = 0.0;
            return;
          }

          j = +t(+c);
          h = d * +u(+h) / j;
          d = +e[a >> 3];
          c = (i - +u(+c) * +u(+d)) / +t(+d) / j;
          i = h > 1.0 ? 1.0 : h;
          c = c > 1.0 ? 1.0 : c;
          c = +e[a + 8 >> 3] + +z(+(i < -1.0 ? -1.0 : i), +(c < -1.0 ? -1.0 : c));
          if (c > 3.141592653589793) { do { c = c + -6.283185307179586; } while (c > 3.141592653589793); }
          if (c < -3.141592653589793) { do { c = c + 6.283185307179586; } while (c < -3.141592653589793); }
          e[f + 8 >> 3] = c;
          return;
        } } while (0);

        if (+q(+(c + -1.5707963267948966)) < 1.0e-16) {
          e[g >> 3] = 1.5707963267948966;
          e[f + 8 >> 3] = 0.0;
          return;
        }

        if (+q(+(c + 1.5707963267948966)) < 1.0e-16) {
          e[g >> 3] = -1.5707963267948966;
          e[f + 8 >> 3] = 0.0;
          return;
        }

        c = +e[a + 8 >> 3];
        if (c > 3.141592653589793) { do { c = c + -6.283185307179586; } while (c > 3.141592653589793); }
        if (c < -3.141592653589793) { do { c = c + 6.283185307179586; } while (c < -3.141592653589793); }
        e[f + 8 >> 3] = c;
        return;
      }

      function nb(a) {
        a = a | 0;
        return + +e[20496 + (a << 3) >> 3];
      }

      function ob(a) {
        a = a | 0;
        return + +e[20624 + (a << 3) >> 3];
      }

      function pb(a) {
        a = a | 0;
        return + +e[20752 + (a << 3) >> 3];
      }

      function qb(a) {
        a = a | 0;
        return + +e[20880 + (a << 3) >> 3];
      }

      function rb(a) {
        a = a | 0;
        var c = 0;
        c = 21008 + (a << 3) | 0;
        a = b[c >> 2] | 0;
        F(b[c + 4 >> 2] | 0);
        return a | 0;
      }

      function sb(a, b, c) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        var d = 0.0,
            f = 0.0,
            g = 0.0,
            h = 0.0,
            i = 0.0,
            j = 0.0,
            k = 0.0,
            l = 0.0,
            m = 0.0,
            n = 0.0;
        n = +e[b >> 3];
        l = +e[a >> 3];
        j = +u(+((n - l) * .5));
        g = +e[b + 8 >> 3];
        k = +e[a + 8 >> 3];
        h = +u(+((g - k) * .5));
        i = +t(+l);
        m = +t(+n);
        h = j * j + h * (m * i * h);
        h = +z(+ +r(+h), + +r(+(1.0 - h))) * 2.0;
        j = +e[c >> 3];
        n = +u(+((j - n) * .5));
        d = +e[c + 8 >> 3];
        g = +u(+((d - g) * .5));
        f = +t(+j);
        g = n * n + g * (m * f * g);
        g = +z(+ +r(+g), + +r(+(1.0 - g))) * 2.0;
        j = +u(+((l - j) * .5));
        d = +u(+((k - d) * .5));
        d = j * j + d * (i * f * d);
        d = +z(+ +r(+d), + +r(+(1.0 - d))) * 2.0;
        f = (h + g + d) * .5;
        return +(+y(+ +r(+(+v(+(f * .5)) * +v(+((f - h) * .5)) * +v(+((f - g) * .5)) * +v(+((f - d) * .5))))) * 4.0);
      }

      function tb(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0.0,
            e = 0,
            f = 0,
            g = 0,
            h = 0;
        g = S;
        S = S + 192 | 0;
        e = g + 168 | 0;
        f = g;
        Vb(a, c, e);
        Wb(a, c, f);
        c = b[f >> 2] | 0;

        if ((c | 0) <= 0) {
          d = 0.0;
          S = g;
          return +d;
        }

        d = +sb(f + 8 | 0, f + 8 + (((c | 0) != 1 & 1) << 4) | 0, e) + 0.0;

        if ((c | 0) == 1) {
          S = g;
          return +d;
        }

        a = 1;

        do {
          h = a;
          a = a + 1 | 0;
          d = d + +sb(f + 8 + (h << 4) | 0, f + 8 + (((a | 0) % (c | 0) | 0) << 4) | 0, e);
        } while ((a | 0) < (c | 0));

        S = g;
        return +d;
      }

      function ub(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0.0,
            e = 0,
            f = 0,
            g = 0,
            h = 0;
        g = S;
        S = S + 192 | 0;
        e = g + 168 | 0;
        f = g;
        Vb(a, c, e);
        Wb(a, c, f);
        c = b[f >> 2] | 0;

        if ((c | 0) > 0) {
          d = +sb(f + 8 | 0, f + 8 + (((c | 0) != 1 & 1) << 4) | 0, e) + 0.0;

          if ((c | 0) != 1) {
            a = 1;

            do {
              h = a;
              a = a + 1 | 0;
              d = d + +sb(f + 8 + (h << 4) | 0, f + 8 + (((a | 0) % (c | 0) | 0) << 4) | 0, e);
            } while ((a | 0) < (c | 0));
          }
        } else { d = 0.0; }

        S = g;
        return +(d * 6371.007180918475 * 6371.007180918475);
      }

      function vb(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0.0,
            e = 0,
            f = 0,
            g = 0,
            h = 0;
        g = S;
        S = S + 192 | 0;
        e = g + 168 | 0;
        f = g;
        Vb(a, c, e);
        Wb(a, c, f);
        c = b[f >> 2] | 0;

        if ((c | 0) > 0) {
          d = +sb(f + 8 | 0, f + 8 + (((c | 0) != 1 & 1) << 4) | 0, e) + 0.0;

          if ((c | 0) != 1) {
            a = 1;

            do {
              h = a;
              a = a + 1 | 0;
              d = d + +sb(f + 8 + (h << 4) | 0, f + 8 + (((a | 0) % (c | 0) | 0) << 4) | 0, e);
            } while ((a | 0) < (c | 0));
          }
        } else { d = 0.0; }

        S = g;
        return +(d * 6371.007180918475 * 6371.007180918475 * 1.0e3 * 1.0e3);
      }

      function wb(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0.0,
            f = 0.0,
            g = 0.0,
            h = 0,
            i = 0,
            j = 0.0,
            k = 0.0,
            l = 0.0;
        i = S;
        S = S + 176 | 0;
        h = i;
        gc(a, c, h);
        a = b[h >> 2] | 0;

        if ((a | 0) <= 1) {
          g = 0.0;
          S = i;
          return +g;
        }

        c = a + -1 | 0;
        a = 0;
        d = 0.0;
        f = +e[h + 8 >> 3];
        g = +e[h + 16 >> 3];

        do {
          a = a + 1 | 0;
          k = f;
          f = +e[h + 8 + (a << 4) >> 3];
          l = +u(+((f - k) * .5));
          j = g;
          g = +e[h + 8 + (a << 4) + 8 >> 3];
          j = +u(+((g - j) * .5));
          j = l * l + j * (+t(+f) * +t(+k) * j);
          d = d + +z(+ +r(+j), + +r(+(1.0 - j))) * 2.0;
        } while ((a | 0) < (c | 0));

        S = i;
        return +d;
      }

      function xb(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0.0,
            f = 0.0,
            g = 0.0,
            h = 0,
            i = 0,
            j = 0.0,
            k = 0.0,
            l = 0.0;
        i = S;
        S = S + 176 | 0;
        h = i;
        gc(a, c, h);
        a = b[h >> 2] | 0;

        if ((a | 0) <= 1) {
          g = 0.0;
          S = i;
          return +g;
        }

        c = a + -1 | 0;
        a = 0;
        d = 0.0;
        f = +e[h + 8 >> 3];
        g = +e[h + 16 >> 3];

        do {
          a = a + 1 | 0;
          k = f;
          f = +e[h + 8 + (a << 4) >> 3];
          l = +u(+((f - k) * .5));
          j = g;
          g = +e[h + 8 + (a << 4) + 8 >> 3];
          j = +u(+((g - j) * .5));
          j = l * l + j * (+t(+k) * +t(+f) * j);
          d = d + +z(+ +r(+j), + +r(+(1.0 - j))) * 2.0;
        } while ((a | 0) != (c | 0));

        l = d * 6371.007180918475;
        S = i;
        return +l;
      }

      function yb(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0.0,
            f = 0.0,
            g = 0.0,
            h = 0,
            i = 0,
            j = 0.0,
            k = 0.0,
            l = 0.0;
        i = S;
        S = S + 176 | 0;
        h = i;
        gc(a, c, h);
        a = b[h >> 2] | 0;

        if ((a | 0) <= 1) {
          g = 0.0;
          S = i;
          return +g;
        }

        c = a + -1 | 0;
        a = 0;
        d = 0.0;
        f = +e[h + 8 >> 3];
        g = +e[h + 16 >> 3];

        do {
          a = a + 1 | 0;
          k = f;
          f = +e[h + 8 + (a << 4) >> 3];
          l = +u(+((f - k) * .5));
          j = g;
          g = +e[h + 8 + (a << 4) + 8 >> 3];
          j = +u(+((g - j) * .5));
          j = l * l + j * (+t(+k) * +t(+f) * j);
          d = d + +z(+ +r(+j), + +r(+(1.0 - j))) * 2.0;
        } while ((a | 0) != (c | 0));

        l = d * 6371.007180918475 * 1.0e3;
        S = i;
        return +l;
      }

      function zb(a, b) {
        a = a | 0;
        b = b | 0;
        b = cd(a | 0, b | 0, 52) | 0;
        G() | 0;
        return b & 15 | 0;
      }

      function Ab(a, b) {
        a = a | 0;
        b = b | 0;
        b = cd(a | 0, b | 0, 45) | 0;
        G() | 0;
        return b & 127 | 0;
      }

      function Bb(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0;

        if (!(0 == 0 & (b & -16777216 | 0) == 134217728)) {
          b = 0;
          return b | 0;
        }

        g = cd(a | 0, b | 0, 45) | 0;
        G() | 0;
        g = g & 127;

        if (g >>> 0 > 121) {
          b = 0;
          return b | 0;
        }

        c = cd(a | 0, b | 0, 52) | 0;
        G() | 0;
        c = c & 15;

        do { if (c | 0) {
          e = 1;
          d = 0;

          while (1) {
            f = cd(a | 0, b | 0, (15 - e | 0) * 3 | 0) | 0;
            G() | 0;
            f = f & 7;
            if ((f | 0) != 0 & (d ^ 1)) { if ((f | 0) == 1 & (la(g) | 0) != 0) {
              h = 0;
              d = 13;
              break;
            } else { d = 1; } }

            if ((f | 0) == 7) {
              h = 0;
              d = 13;
              break;
            }

            if (e >>> 0 < c >>> 0) { e = e + 1 | 0; }else {
              d = 9;
              break;
            }
          }

          if ((d | 0) == 9) {
            if ((c | 0) == 15) { h = 1; }else { break; }
            return h | 0;
          } else if ((d | 0) == 13) { return h | 0; }
        } } while (0);

        while (1) {
          h = cd(a | 0, b | 0, (14 - c | 0) * 3 | 0) | 0;
          G() | 0;

          if (!((h & 7 | 0) == 7 & 0 == 0)) {
            h = 0;
            d = 13;
            break;
          }

          if (c >>> 0 < 14) { c = c + 1 | 0; }else {
            h = 1;
            d = 13;
            break;
          }
        }

        if ((d | 0) == 13) { return h | 0; }
        return 0;
      }

      function Cb(a, b, c) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        var d = 0,
            e = 0;
        d = cd(a | 0, b | 0, 52) | 0;
        G() | 0;
        d = d & 15;

        if ((d | 0) >= (c | 0)) {
          if ((d | 0) != (c | 0)) { if (c >>> 0 <= 15) {
            e = dd(c | 0, 0, 52) | 0;
            a = e | a;
            b = G() | 0 | b & -15728641;
            if ((d | 0) > (c | 0)) { do {
              e = dd(7, 0, (14 - c | 0) * 3 | 0) | 0;
              c = c + 1 | 0;
              a = e | a;
              b = G() | 0 | b;
            } while ((c | 0) < (d | 0)); }
          } else {
            b = 0;
            a = 0;
          } }
        } else {
          b = 0;
          a = 0;
        }

        F(b | 0);
        return a | 0;
      }

      function Db(a, b, c) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        a = cd(a | 0, b | 0, 52) | 0;
        G() | 0;
        a = a & 15;

        if (!((c | 0) < 16 & (a | 0) <= (c | 0))) {
          c = 0;
          return c | 0;
        }

        c = tc(7, c - a | 0) | 0;
        return c | 0;
      }

      function Eb(a, c, d, e) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        var f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0;
        h = cd(a | 0, c | 0, 52) | 0;
        G() | 0;
        h = h & 15;
        if (!((d | 0) < 16 & (h | 0) <= (d | 0))) { return; }

        if ((h | 0) == (d | 0)) {
          d = e;
          b[d >> 2] = a;
          b[d + 4 >> 2] = c;
          return;
        }

        j = tc(7, d - h | 0) | 0;
        k = (j | 0) / 7 | 0;
        i = cd(a | 0, c | 0, 45) | 0;
        G() | 0;
        if (!(la(i & 127) | 0)) { g = 0; }else {
          a: do { if (!h) { f = 0; }else {
            g = 1;

            while (1) {
              f = cd(a | 0, c | 0, (15 - g | 0) * 3 | 0) | 0;
              G() | 0;
              f = f & 7;
              if (f | 0) { break a; }
              if (g >>> 0 < h >>> 0) { g = g + 1 | 0; }else {
                f = 0;
                break;
              }
            }
          } } while (0);

          g = (f | 0) == 0;
        }
        l = dd(h + 1 | 0, 0, 52) | 0;
        f = G() | 0 | c & -15728641;
        i = (14 - h | 0) * 3 | 0;
        c = dd(7, 0, i | 0) | 0;
        c = (l | a) & ~c;
        h = f & ~(G() | 0);
        Eb(c, h, d, e);
        f = e + (k << 3) | 0;

        if (!g) {
          l = dd(1, 0, i | 0) | 0;
          Eb(l | c, G() | 0 | h, d, f);
          l = f + (k << 3) | 0;
          j = dd(2, 0, i | 0) | 0;
          Eb(j | c, G() | 0 | h, d, l);
          l = l + (k << 3) | 0;
          j = dd(3, 0, i | 0) | 0;
          Eb(j | c, G() | 0 | h, d, l);
          l = l + (k << 3) | 0;
          j = dd(4, 0, i | 0) | 0;
          Eb(j | c, G() | 0 | h, d, l);
          l = l + (k << 3) | 0;
          j = dd(5, 0, i | 0) | 0;
          Eb(j | c, G() | 0 | h, d, l);
          j = dd(6, 0, i | 0) | 0;
          Eb(j | c, G() | 0 | h, d, l + (k << 3) | 0);
          return;
        }

        g = f + (k << 3) | 0;

        if ((j | 0) > 6) {
          j = f + 8 | 0;
          l = (g >>> 0 > j >>> 0 ? g : j) + -1 + (0 - f) | 0;
          hd(f | 0, 0, l + 8 & -8 | 0) | 0;
          f = j + (l >>> 3 << 3) | 0;
        }

        l = dd(2, 0, i | 0) | 0;
        Eb(l | c, G() | 0 | h, d, f);
        l = f + (k << 3) | 0;
        j = dd(3, 0, i | 0) | 0;
        Eb(j | c, G() | 0 | h, d, l);
        l = l + (k << 3) | 0;
        j = dd(4, 0, i | 0) | 0;
        Eb(j | c, G() | 0 | h, d, l);
        l = l + (k << 3) | 0;
        j = dd(5, 0, i | 0) | 0;
        Eb(j | c, G() | 0 | h, d, l);
        j = dd(6, 0, i | 0) | 0;
        Eb(j | c, G() | 0 | h, d, l + (k << 3) | 0);
        return;
      }

      function Fb(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0,
            d = 0,
            e = 0;
        e = cd(a | 0, b | 0, 45) | 0;
        G() | 0;

        if (!(la(e & 127) | 0)) {
          e = 0;
          return e | 0;
        }

        e = cd(a | 0, b | 0, 52) | 0;
        G() | 0;
        e = e & 15;

        a: do { if (!e) { c = 0; }else {
          d = 1;

          while (1) {
            c = cd(a | 0, b | 0, (15 - d | 0) * 3 | 0) | 0;
            G() | 0;
            c = c & 7;
            if (c | 0) { break a; }
            if (d >>> 0 < e >>> 0) { d = d + 1 | 0; }else {
              c = 0;
              break;
            }
          }
        } } while (0);

        e = (c | 0) == 0 & 1;
        return e | 0;
      }

      function Gb(a, b, c) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        var d = 0,
            e = 0;
        d = cd(a | 0, b | 0, 52) | 0;
        G() | 0;
        d = d & 15;

        if ((c | 0) < 16 & (d | 0) <= (c | 0)) {
          if ((d | 0) != (c | 0)) {
            e = dd(c | 0, 0, 52) | 0;
            a = e | a;
            b = G() | 0 | b & -15728641;
            if ((d | 0) < (c | 0)) { do {
              e = dd(7, 0, (14 - d | 0) * 3 | 0) | 0;
              d = d + 1 | 0;
              a = a & ~e;
              b = b & ~(G() | 0);
            } while ((d | 0) < (c | 0)); }
          }
        } else {
          b = 0;
          a = 0;
        }

        F(b | 0);
        return a | 0;
      }

      function Hb(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0,
            x = 0,
            y = 0,
            z = 0;

        if (!d) {
          y = 0;
          return y | 0;
        }

        f = a;
        e = b[f >> 2] | 0;
        f = b[f + 4 >> 2] | 0;

        if (0 == 0 & (f & 15728640 | 0) == 0) {
          if ((d | 0) <= 0) {
            y = 0;
            return y | 0;
          }

          y = c;
          b[y >> 2] = e;
          b[y + 4 >> 2] = f;

          if ((d | 0) == 1) {
            y = 0;
            return y | 0;
          }

          e = 1;

          do {
            w = a + (e << 3) | 0;
            x = b[w + 4 >> 2] | 0;
            y = c + (e << 3) | 0;
            b[y >> 2] = b[w >> 2];
            b[y + 4 >> 2] = x;
            e = e + 1 | 0;
          } while ((e | 0) != (d | 0));

          e = 0;
          return e | 0;
        }

        w = d << 3;
        x = Wc(w) | 0;

        if (!x) {
          y = -3;
          return y | 0;
        }

        gd(x | 0, a | 0, w | 0) | 0;
        v = Yc(d, 8) | 0;

        if (!v) {
          Xc(x);
          y = -3;
          return y | 0;
        }

        e = d;

        a: while (1) {
          h = x;
          l = b[h >> 2] | 0;
          h = b[h + 4 >> 2] | 0;
          t = cd(l | 0, h | 0, 52) | 0;
          G() | 0;
          t = t & 15;
          u = t + -1 | 0;
          s = (e | 0) > 0;

          b: do { if (s) {
            r = ((e | 0) < 0) << 31 >> 31;
            p = dd(u | 0, 0, 52) | 0;
            q = G() | 0;

            if (u >>> 0 > 15) {
              f = 0;
              a = l;
              d = h;

              while (1) {
                if (!((a | 0) == 0 & (d | 0) == 0)) {
                  g = cd(a | 0, d | 0, 52) | 0;
                  G() | 0;
                  g = g & 15;
                  i = (g | 0) < (u | 0);
                  g = (g | 0) == (u | 0);
                  k = i ? 0 : g ? a : 0;
                  a = i ? 0 : g ? d : 0;
                  d = bd(k | 0, a | 0, e | 0, r | 0) | 0;
                  G() | 0;
                  g = v + (d << 3) | 0;
                  i = g;
                  j = b[i >> 2] | 0;
                  i = b[i + 4 >> 2] | 0;
                  if ((j | 0) == 0 & (i | 0) == 0) { d = k; }else {
                    p = 0;
                    o = d;
                    n = i;
                    d = k;

                    while (1) {
                      if ((p | 0) > (e | 0)) {
                        y = 41;
                        break a;
                      }

                      if ((j | 0) == (d | 0) & (n & -117440513 | 0) == (a | 0)) {
                        k = cd(j | 0, n | 0, 56) | 0;
                        G() | 0;
                        k = k & 7;
                        m = k + 1 | 0;
                        q = cd(j | 0, n | 0, 45) | 0;
                        G() | 0;

                        c: do { if (!(la(q & 127) | 0)) { i = 7; }else {
                          j = cd(j | 0, n | 0, 52) | 0;
                          G() | 0;
                          j = j & 15;

                          if (!j) {
                            i = 6;
                            break;
                          }

                          i = 1;

                          while (1) {
                            q = dd(7, 0, (15 - i | 0) * 3 | 0) | 0;

                            if (!((q & d | 0) == 0 & ((G() | 0) & a | 0) == 0)) {
                              i = 7;
                              break c;
                            }

                            if (i >>> 0 < j >>> 0) { i = i + 1 | 0; }else {
                              i = 6;
                              break;
                            }
                          }
                        } } while (0);

                        if ((k + 2 | 0) >>> 0 > i >>> 0) {
                          y = 51;
                          break a;
                        }

                        q = dd(m | 0, 0, 56) | 0;
                        a = G() | 0 | a & -117440513;
                        i = g;
                        b[i >> 2] = 0;
                        b[i + 4 >> 2] = 0;
                        i = o;
                        d = q | d;
                      } else { i = (o + 1 | 0) % (e | 0) | 0; }

                      g = v + (i << 3) | 0;
                      n = g;
                      j = b[n >> 2] | 0;
                      n = b[n + 4 >> 2] | 0;
                      if ((j | 0) == 0 & (n | 0) == 0) { break; }else {
                        p = p + 1 | 0;
                        o = i;
                      }
                    }
                  }
                  q = g;
                  b[q >> 2] = d;
                  b[q + 4 >> 2] = a;
                }

                f = f + 1 | 0;
                if ((f | 0) >= (e | 0)) { break b; }
                d = x + (f << 3) | 0;
                a = b[d >> 2] | 0;
                d = b[d + 4 >> 2] | 0;
              }
            }

            f = 0;
            a = l;
            d = h;

            while (1) {
              if (!((a | 0) == 0 & (d | 0) == 0)) {
                i = cd(a | 0, d | 0, 52) | 0;
                G() | 0;
                i = i & 15;

                if ((i | 0) >= (u | 0)) {
                  if ((i | 0) != (u | 0)) {
                    a = a | p;
                    d = d & -15728641 | q;

                    if (i >>> 0 >= t >>> 0) {
                      g = u;

                      do {
                        o = dd(7, 0, (14 - g | 0) * 3 | 0) | 0;
                        g = g + 1 | 0;
                        a = o | a;
                        d = G() | 0 | d;
                      } while (g >>> 0 < i >>> 0);
                    }
                  }
                } else {
                  a = 0;
                  d = 0;
                }

                i = bd(a | 0, d | 0, e | 0, r | 0) | 0;
                G() | 0;
                g = v + (i << 3) | 0;
                j = g;
                k = b[j >> 2] | 0;
                j = b[j + 4 >> 2] | 0;

                if (!((k | 0) == 0 & (j | 0) == 0)) {
                  o = 0;

                  while (1) {
                    if ((o | 0) > (e | 0)) {
                      y = 41;
                      break a;
                    }

                    if ((k | 0) == (a | 0) & (j & -117440513 | 0) == (d | 0)) {
                      m = cd(k | 0, j | 0, 56) | 0;
                      G() | 0;
                      m = m & 7;
                      n = m + 1 | 0;
                      z = cd(k | 0, j | 0, 45) | 0;
                      G() | 0;

                      d: do { if (!(la(z & 127) | 0)) { j = 7; }else {
                        k = cd(k | 0, j | 0, 52) | 0;
                        G() | 0;
                        k = k & 15;

                        if (!k) {
                          j = 6;
                          break;
                        }

                        j = 1;

                        while (1) {
                          z = dd(7, 0, (15 - j | 0) * 3 | 0) | 0;

                          if (!((z & a | 0) == 0 & ((G() | 0) & d | 0) == 0)) {
                            j = 7;
                            break d;
                          }

                          if (j >>> 0 < k >>> 0) { j = j + 1 | 0; }else {
                            j = 6;
                            break;
                          }
                        }
                      } } while (0);

                      if ((m + 2 | 0) >>> 0 > j >>> 0) {
                        y = 51;
                        break a;
                      }

                      z = dd(n | 0, 0, 56) | 0;
                      d = G() | 0 | d & -117440513;
                      n = g;
                      b[n >> 2] = 0;
                      b[n + 4 >> 2] = 0;
                      a = z | a;
                    } else { i = (i + 1 | 0) % (e | 0) | 0; }

                    g = v + (i << 3) | 0;
                    j = g;
                    k = b[j >> 2] | 0;
                    j = b[j + 4 >> 2] | 0;
                    if ((k | 0) == 0 & (j | 0) == 0) { break; }else { o = o + 1 | 0; }
                  }
                }

                z = g;
                b[z >> 2] = a;
                b[z + 4 >> 2] = d;
              }

              f = f + 1 | 0;
              if ((f | 0) >= (e | 0)) { break b; }
              d = x + (f << 3) | 0;
              a = b[d >> 2] | 0;
              d = b[d + 4 >> 2] | 0;
            }
          } } while (0);

          if ((e + 5 | 0) >>> 0 < 11) {
            y = 99;
            break;
          }

          q = Yc((e | 0) / 6 | 0, 8) | 0;

          if (!q) {
            y = 58;
            break;
          }

          e: do { if (s) {
            o = 0;
            n = 0;

            do {
              i = v + (o << 3) | 0;
              a = i;
              f = b[a >> 2] | 0;
              a = b[a + 4 >> 2] | 0;

              if (!((f | 0) == 0 & (a | 0) == 0)) {
                j = cd(f | 0, a | 0, 56) | 0;
                G() | 0;
                j = j & 7;
                d = j + 1 | 0;
                k = a & -117440513;
                z = cd(f | 0, a | 0, 45) | 0;
                G() | 0;

                f: do { if (la(z & 127) | 0) {
                  m = cd(f | 0, a | 0, 52) | 0;
                  G() | 0;
                  m = m & 15;

                  if (m | 0) {
                    g = 1;

                    while (1) {
                      z = dd(7, 0, (15 - g | 0) * 3 | 0) | 0;
                      if (!((f & z | 0) == 0 & (k & (G() | 0) | 0) == 0)) { break f; }
                      if (g >>> 0 < m >>> 0) { g = g + 1 | 0; }else { break; }
                    }
                  }

                  a = dd(d | 0, 0, 56) | 0;
                  f = a | f;
                  a = G() | 0 | k;
                  d = i;
                  b[d >> 2] = f;
                  b[d + 4 >> 2] = a;
                  d = j + 2 | 0;
                } } while (0);

                if ((d | 0) == 7) {
                  z = q + (n << 3) | 0;
                  b[z >> 2] = f;
                  b[z + 4 >> 2] = a & -117440513;
                  n = n + 1 | 0;
                }
              }

              o = o + 1 | 0;
            } while ((o | 0) != (e | 0));

            if (s) {
              p = ((e | 0) < 0) << 31 >> 31;
              m = dd(u | 0, 0, 52) | 0;
              o = G() | 0;

              if (u >>> 0 > 15) {
                a = 0;
                f = 0;

                while (1) {
                  do { if (!((l | 0) == 0 & (h | 0) == 0)) {
                    j = cd(l | 0, h | 0, 52) | 0;
                    G() | 0;
                    j = j & 15;
                    g = (j | 0) < (u | 0);
                    j = (j | 0) == (u | 0);
                    i = g ? 0 : j ? l : 0;
                    j = g ? 0 : j ? h : 0;
                    g = bd(i | 0, j | 0, e | 0, p | 0) | 0;
                    G() | 0;
                    d = 0;

                    while (1) {
                      if ((d | 0) > (e | 0)) {
                        y = 98;
                        break a;
                      }

                      z = v + (g << 3) | 0;
                      k = b[z + 4 >> 2] | 0;

                      if ((k & -117440513 | 0) == (j | 0) ? (b[z >> 2] | 0) == (i | 0) : 0) {
                        y = 70;
                        break;
                      }

                      g = (g + 1 | 0) % (e | 0) | 0;
                      z = v + (g << 3) | 0;
                      if ((b[z >> 2] | 0) == (i | 0) ? (b[z + 4 >> 2] | 0) == (j | 0) : 0) { break; }else { d = d + 1 | 0; }
                    }

                    if ((y | 0) == 70 ? (y = 0, 0 == 0 & (k & 117440512 | 0) == 100663296) : 0) { break; }
                    z = c + (f << 3) | 0;
                    b[z >> 2] = l;
                    b[z + 4 >> 2] = h;
                    f = f + 1 | 0;
                  } } while (0);

                  a = a + 1 | 0;

                  if ((a | 0) >= (e | 0)) {
                    e = n;
                    break e;
                  }

                  h = x + (a << 3) | 0;
                  l = b[h >> 2] | 0;
                  h = b[h + 4 >> 2] | 0;
                }
              }

              a = 0;
              f = 0;

              while (1) {
                do { if (!((l | 0) == 0 & (h | 0) == 0)) {
                  j = cd(l | 0, h | 0, 52) | 0;
                  G() | 0;
                  j = j & 15;
                  if ((j | 0) >= (u | 0)) {
                    if ((j | 0) != (u | 0)) {
                      d = l | m;
                      g = h & -15728641 | o;
                      if (j >>> 0 < t >>> 0) { j = g; }else {
                        i = u;

                        do {
                          z = dd(7, 0, (14 - i | 0) * 3 | 0) | 0;
                          i = i + 1 | 0;
                          d = z | d;
                          g = G() | 0 | g;
                        } while (i >>> 0 < j >>> 0);

                        j = g;
                      }
                    } else {
                      d = l;
                      j = h;
                    }
                  } else {
                    d = 0;
                    j = 0;
                  }
                  i = bd(d | 0, j | 0, e | 0, p | 0) | 0;
                  G() | 0;
                  g = 0;

                  while (1) {
                    if ((g | 0) > (e | 0)) {
                      y = 98;
                      break a;
                    }

                    z = v + (i << 3) | 0;
                    k = b[z + 4 >> 2] | 0;

                    if ((k & -117440513 | 0) == (j | 0) ? (b[z >> 2] | 0) == (d | 0) : 0) {
                      y = 93;
                      break;
                    }

                    i = (i + 1 | 0) % (e | 0) | 0;
                    z = v + (i << 3) | 0;
                    if ((b[z >> 2] | 0) == (d | 0) ? (b[z + 4 >> 2] | 0) == (j | 0) : 0) { break; }else { g = g + 1 | 0; }
                  }

                  if ((y | 0) == 93 ? (y = 0, 0 == 0 & (k & 117440512 | 0) == 100663296) : 0) { break; }
                  z = c + (f << 3) | 0;
                  b[z >> 2] = l;
                  b[z + 4 >> 2] = h;
                  f = f + 1 | 0;
                } } while (0);

                a = a + 1 | 0;

                if ((a | 0) >= (e | 0)) {
                  e = n;
                  break e;
                }

                h = x + (a << 3) | 0;
                l = b[h >> 2] | 0;
                h = b[h + 4 >> 2] | 0;
              }
            } else {
              f = 0;
              e = n;
            }
          } else {
            f = 0;
            e = 0;
          } } while (0);

          hd(v | 0, 0, w | 0) | 0;
          gd(x | 0, q | 0, e << 3 | 0) | 0;
          Xc(q);
          if (!e) { break; }else { c = c + (f << 3) | 0; }
        }

        if ((y | 0) == 41) {
          Xc(x);
          Xc(v);
          z = -1;
          return z | 0;
        } else if ((y | 0) == 51) {
          Xc(x);
          Xc(v);
          z = -2;
          return z | 0;
        } else if ((y | 0) == 58) {
          Xc(x);
          Xc(v);
          z = -3;
          return z | 0;
        } else if ((y | 0) == 98) {
          Xc(q);
          Xc(x);
          Xc(v);
          z = -1;
          return z | 0;
        } else if ((y | 0) == 99) { gd(c | 0, x | 0, e << 3 | 0) | 0; }

        Xc(x);
        Xc(v);
        z = 0;
        return z | 0;
      }

      function Ib(a, c, d, e, f) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        f = f | 0;
        var g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0;

        if ((c | 0) <= 0) {
          f = 0;
          return f | 0;
        }

        if ((f | 0) >= 16) {
          g = 0;

          while (1) {
            l = a + (g << 3) | 0;

            if (!((b[l >> 2] | 0) == 0 & (b[l + 4 >> 2] | 0) == 0)) {
              g = 14;
              break;
            }

            g = g + 1 | 0;

            if ((g | 0) >= (c | 0)) {
              h = 0;
              g = 16;
              break;
            }
          }

          if ((g | 0) == 14) { return ((e | 0) > 0 ? -2 : -1) | 0; }else if ((g | 0) == 16) { return h | 0; }
        }

        g = 0;
        l = 0;

        a: while (1) {
          k = a + (l << 3) | 0;
          i = k;
          h = b[i >> 2] | 0;
          i = b[i + 4 >> 2] | 0;

          do { if (!((h | 0) == 0 & (i | 0) == 0)) {
            if ((g | 0) >= (e | 0)) {
              h = -1;
              g = 16;
              break a;
            }

            j = cd(h | 0, i | 0, 52) | 0;
            G() | 0;
            j = j & 15;

            if ((j | 0) > (f | 0)) {
              h = -2;
              g = 16;
              break a;
            }

            if ((j | 0) == (f | 0)) {
              k = d + (g << 3) | 0;
              b[k >> 2] = h;
              b[k + 4 >> 2] = i;
              g = g + 1 | 0;
              break;
            }

            h = (tc(7, f - j | 0) | 0) + g | 0;

            if ((h | 0) > (e | 0)) {
              h = -1;
              g = 16;
              break a;
            }

            Eb(b[k >> 2] | 0, b[k + 4 >> 2] | 0, f, d + (g << 3) | 0);
            g = h;
          } } while (0);

          l = l + 1 | 0;

          if ((l | 0) >= (c | 0)) {
            h = 0;
            g = 16;
            break;
          }
        }

        if ((g | 0) == 16) { return h | 0; }
        return 0;
      }

      function Jb(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0,
            h = 0;

        if ((c | 0) <= 0) {
          d = 0;
          return d | 0;
        }

        if ((d | 0) >= 16) {
          e = 0;

          while (1) {
            h = a + (e << 3) | 0;

            if (!((b[h >> 2] | 0) == 0 & (b[h + 4 >> 2] | 0) == 0)) {
              e = -1;
              f = 13;
              break;
            }

            e = e + 1 | 0;

            if ((e | 0) >= (c | 0)) {
              e = 0;
              f = 13;
              break;
            }
          }

          if ((f | 0) == 13) { return e | 0; }
        }

        e = 0;
        h = 0;

        a: while (1) {
          f = a + (h << 3) | 0;
          g = b[f >> 2] | 0;
          f = b[f + 4 >> 2] | 0;

          do { if (!((g | 0) == 0 & (f | 0) == 0)) {
            f = cd(g | 0, f | 0, 52) | 0;
            G() | 0;
            f = f & 15;

            if ((f | 0) > (d | 0)) {
              e = -1;
              f = 13;
              break a;
            }

            if ((f | 0) == (d | 0)) {
              e = e + 1 | 0;
              break;
            } else {
              e = (tc(7, d - f | 0) | 0) + e | 0;
              break;
            }
          } } while (0);

          h = h + 1 | 0;

          if ((h | 0) >= (c | 0)) {
            f = 13;
            break;
          }
        }

        if ((f | 0) == 13) { return e | 0; }
        return 0;
      }

      function Kb(a, b) {
        a = a | 0;
        b = b | 0;
        b = cd(a | 0, b | 0, 52) | 0;
        G() | 0;
        return b & 1 | 0;
      }

      function Lb(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0,
            d = 0,
            e = 0;
        e = cd(a | 0, b | 0, 52) | 0;
        G() | 0;
        e = e & 15;

        if (!e) {
          e = 0;
          return e | 0;
        }

        d = 1;

        while (1) {
          c = cd(a | 0, b | 0, (15 - d | 0) * 3 | 0) | 0;
          G() | 0;
          c = c & 7;

          if (c | 0) {
            d = 5;
            break;
          }

          if (d >>> 0 < e >>> 0) { d = d + 1 | 0; }else {
            c = 0;
            d = 5;
            break;
          }
        }

        if ((d | 0) == 5) { return c | 0; }
        return 0;
      }

      function Mb(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        i = cd(a | 0, b | 0, 52) | 0;
        G() | 0;
        i = i & 15;

        if (!i) {
          h = b;
          i = a;
          F(h | 0);
          return i | 0;
        }

        h = 1;
        c = 0;

        while (1) {
          f = (15 - h | 0) * 3 | 0;
          d = dd(7, 0, f | 0) | 0;
          e = G() | 0;
          g = cd(a | 0, b | 0, f | 0) | 0;
          G() | 0;
          f = dd(Pa(g & 7) | 0, 0, f | 0) | 0;
          g = G() | 0;
          a = f | a & ~d;
          b = g | b & ~e;

          a: do { if (!c) { if (!((f & d | 0) == 0 & (g & e | 0) == 0)) {
            d = cd(a | 0, b | 0, 52) | 0;
            G() | 0;
            d = d & 15;
            if (!d) { c = 1; }else {
              c = 1;

              b: while (1) {
                g = cd(a | 0, b | 0, (15 - c | 0) * 3 | 0) | 0;
                G() | 0;

                switch (g & 7) {
                  case 1:
                    break b;

                  case 0:
                    break;

                  default:
                    {
                      c = 1;
                      break a;
                    }
                }

                if (c >>> 0 < d >>> 0) { c = c + 1 | 0; }else {
                  c = 1;
                  break a;
                }
              }

              c = 1;

              while (1) {
                g = (15 - c | 0) * 3 | 0;
                e = cd(a | 0, b | 0, g | 0) | 0;
                G() | 0;
                f = dd(7, 0, g | 0) | 0;
                b = b & ~(G() | 0);
                g = dd(Pa(e & 7) | 0, 0, g | 0) | 0;
                a = a & ~f | g;
                b = b | (G() | 0);
                if (c >>> 0 < d >>> 0) { c = c + 1 | 0; }else {
                  c = 1;
                  break;
                }
              }
            }
          } else { c = 0; } } } while (0);

          if (h >>> 0 < i >>> 0) { h = h + 1 | 0; }else { break; }
        }

        F(b | 0);
        return a | 0;
      }

      function Nb(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0;
        d = cd(a | 0, b | 0, 52) | 0;
        G() | 0;
        d = d & 15;

        if (!d) {
          c = b;
          d = a;
          F(c | 0);
          return d | 0;
        }

        c = 1;

        while (1) {
          f = (15 - c | 0) * 3 | 0;
          g = cd(a | 0, b | 0, f | 0) | 0;
          G() | 0;
          e = dd(7, 0, f | 0) | 0;
          b = b & ~(G() | 0);
          f = dd(Pa(g & 7) | 0, 0, f | 0) | 0;
          a = f | a & ~e;
          b = G() | 0 | b;
          if (c >>> 0 < d >>> 0) { c = c + 1 | 0; }else { break; }
        }

        F(b | 0);
        return a | 0;
      }

      function Ob(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        i = cd(a | 0, b | 0, 52) | 0;
        G() | 0;
        i = i & 15;

        if (!i) {
          h = b;
          i = a;
          F(h | 0);
          return i | 0;
        }

        h = 1;
        c = 0;

        while (1) {
          f = (15 - h | 0) * 3 | 0;
          d = dd(7, 0, f | 0) | 0;
          e = G() | 0;
          g = cd(a | 0, b | 0, f | 0) | 0;
          G() | 0;
          f = dd(Qa(g & 7) | 0, 0, f | 0) | 0;
          g = G() | 0;
          a = f | a & ~d;
          b = g | b & ~e;

          a: do { if (!c) { if (!((f & d | 0) == 0 & (g & e | 0) == 0)) {
            d = cd(a | 0, b | 0, 52) | 0;
            G() | 0;
            d = d & 15;
            if (!d) { c = 1; }else {
              c = 1;

              b: while (1) {
                g = cd(a | 0, b | 0, (15 - c | 0) * 3 | 0) | 0;
                G() | 0;

                switch (g & 7) {
                  case 1:
                    break b;

                  case 0:
                    break;

                  default:
                    {
                      c = 1;
                      break a;
                    }
                }

                if (c >>> 0 < d >>> 0) { c = c + 1 | 0; }else {
                  c = 1;
                  break a;
                }
              }

              c = 1;

              while (1) {
                e = (15 - c | 0) * 3 | 0;
                f = dd(7, 0, e | 0) | 0;
                g = b & ~(G() | 0);
                b = cd(a | 0, b | 0, e | 0) | 0;
                G() | 0;
                b = dd(Qa(b & 7) | 0, 0, e | 0) | 0;
                a = a & ~f | b;
                b = g | (G() | 0);
                if (c >>> 0 < d >>> 0) { c = c + 1 | 0; }else {
                  c = 1;
                  break;
                }
              }
            }
          } else { c = 0; } } } while (0);

          if (h >>> 0 < i >>> 0) { h = h + 1 | 0; }else { break; }
        }

        F(b | 0);
        return a | 0;
      }

      function Pb(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0;
        d = cd(a | 0, b | 0, 52) | 0;
        G() | 0;
        d = d & 15;

        if (!d) {
          c = b;
          d = a;
          F(c | 0);
          return d | 0;
        }

        c = 1;

        while (1) {
          g = (15 - c | 0) * 3 | 0;
          f = dd(7, 0, g | 0) | 0;
          e = b & ~(G() | 0);
          b = cd(a | 0, b | 0, g | 0) | 0;
          G() | 0;
          b = dd(Qa(b & 7) | 0, 0, g | 0) | 0;
          a = b | a & ~f;
          b = G() | 0 | e;
          if (c >>> 0 < d >>> 0) { c = c + 1 | 0; }else { break; }
        }

        F(b | 0);
        return a | 0;
      }

      function Qb(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0;
        j = S;
        S = S + 64 | 0;
        i = j + 40 | 0;
        e = j + 24 | 0;
        f = j + 12 | 0;
        g = j;
        dd(c | 0, 0, 52) | 0;
        d = G() | 0 | 134225919;

        if (!c) {
          if ((b[a + 4 >> 2] | 0) > 2) {
            h = 0;
            i = 0;
            F(h | 0);
            S = j;
            return i | 0;
          }

          if ((b[a + 8 >> 2] | 0) > 2) {
            h = 0;
            i = 0;
            F(h | 0);
            S = j;
            return i | 0;
          }

          if ((b[a + 12 >> 2] | 0) > 2) {
            h = 0;
            i = 0;
            F(h | 0);
            S = j;
            return i | 0;
          }

          dd(na(a) | 0, 0, 45) | 0;
          h = G() | 0 | d;
          i = -1;
          F(h | 0);
          S = j;
          return i | 0;
        }
        b[i >> 2] = b[a >> 2];
        b[i + 4 >> 2] = b[a + 4 >> 2];
        b[i + 8 >> 2] = b[a + 8 >> 2];
        b[i + 12 >> 2] = b[a + 12 >> 2];
        h = i + 4 | 0;

        if ((c | 0) > 0) {
          a = -1;

          while (1) {
            b[e >> 2] = b[h >> 2];
            b[e + 4 >> 2] = b[h + 4 >> 2];
            b[e + 8 >> 2] = b[h + 8 >> 2];

            if (!(c & 1)) {
              Ja(h);
              b[f >> 2] = b[h >> 2];
              b[f + 4 >> 2] = b[h + 4 >> 2];
              b[f + 8 >> 2] = b[h + 8 >> 2];
              La(f);
            } else {
              Ia(h);
              b[f >> 2] = b[h >> 2];
              b[f + 4 >> 2] = b[h + 4 >> 2];
              b[f + 8 >> 2] = b[h + 8 >> 2];
              Ka(f);
            }

            Fa(e, f, g);
            Ca(g);
            l = (15 - c | 0) * 3 | 0;
            k = dd(7, 0, l | 0) | 0;
            d = d & ~(G() | 0);
            l = dd(Ha(g) | 0, 0, l | 0) | 0;
            a = l | a & ~k;
            d = G() | 0 | d;
            if ((c | 0) > 1) { c = c + -1 | 0; }else { break; }
          }
        } else { a = -1; }

        a: do { if (((b[h >> 2] | 0) <= 2 ? (b[i + 8 >> 2] | 0) <= 2 : 0) ? (b[i + 12 >> 2] | 0) <= 2 : 0) {
          e = na(i) | 0;
          c = dd(e | 0, 0, 45) | 0;
          c = c | a;
          a = G() | 0 | d & -1040385;
          g = oa(i) | 0;

          if (!(la(e) | 0)) {
            if ((g | 0) <= 0) { break; }
            f = 0;

            while (1) {
              e = cd(c | 0, a | 0, 52) | 0;
              G() | 0;
              e = e & 15;

              if (e) {
                d = 1;

                while (1) {
                  l = (15 - d | 0) * 3 | 0;
                  i = cd(c | 0, a | 0, l | 0) | 0;
                  G() | 0;
                  k = dd(7, 0, l | 0) | 0;
                  a = a & ~(G() | 0);
                  l = dd(Pa(i & 7) | 0, 0, l | 0) | 0;
                  c = c & ~k | l;
                  a = a | (G() | 0);
                  if (d >>> 0 < e >>> 0) { d = d + 1 | 0; }else { break; }
                }
              }

              f = f + 1 | 0;
              if ((f | 0) == (g | 0)) { break a; }
            }
          }

          f = cd(c | 0, a | 0, 52) | 0;
          G() | 0;
          f = f & 15;

          b: do { if (f) {
            d = 1;

            c: while (1) {
              l = cd(c | 0, a | 0, (15 - d | 0) * 3 | 0) | 0;
              G() | 0;

              switch (l & 7) {
                case 1:
                  break c;

                case 0:
                  break;

                default:
                  break b;
              }

              if (d >>> 0 < f >>> 0) { d = d + 1 | 0; }else { break b; }
            }

            if (ra(e, b[i >> 2] | 0) | 0) {
              d = 1;

              while (1) {
                i = (15 - d | 0) * 3 | 0;
                k = dd(7, 0, i | 0) | 0;
                l = a & ~(G() | 0);
                a = cd(c | 0, a | 0, i | 0) | 0;
                G() | 0;
                a = dd(Qa(a & 7) | 0, 0, i | 0) | 0;
                c = c & ~k | a;
                a = l | (G() | 0);
                if (d >>> 0 < f >>> 0) { d = d + 1 | 0; }else { break; }
              }
            } else {
              d = 1;

              while (1) {
                l = (15 - d | 0) * 3 | 0;
                i = cd(c | 0, a | 0, l | 0) | 0;
                G() | 0;
                k = dd(7, 0, l | 0) | 0;
                a = a & ~(G() | 0);
                l = dd(Pa(i & 7) | 0, 0, l | 0) | 0;
                c = c & ~k | l;
                a = a | (G() | 0);
                if (d >>> 0 < f >>> 0) { d = d + 1 | 0; }else { break; }
              }
            }
          } } while (0);

          if ((g | 0) > 0) {
            d = 0;

            do {
              c = Mb(c, a) | 0;
              a = G() | 0;
              d = d + 1 | 0;
            } while ((d | 0) != (g | 0));
          }
        } else {
          c = 0;
          a = 0;
        } } while (0);

        k = a;
        l = c;
        F(k | 0);
        S = j;
        return l | 0;
      }

      function Rb(a) {
        a = a | 0;
        return (a | 0) % 2 | 0 | 0;
      }

      function Sb(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0,
            e = 0;
        e = S;
        S = S + 16 | 0;
        d = e;

        if ((c >>> 0 <= 15 ? !((b[a + 4 >> 2] & 2146435072 | 0) == 2146435072) : 0) ? !((b[a + 8 + 4 >> 2] & 2146435072 | 0) == 2146435072) : 0) {
          Ya(a, c, d);
          c = Qb(d, c) | 0;
          a = G() | 0;
        } else {
          a = 0;
          c = 0;
        }

        F(a | 0);
        S = e;
        return c | 0;
      }

      function Tb(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0,
            h = 0;
        f = d + 4 | 0;
        g = cd(a | 0, c | 0, 52) | 0;
        G() | 0;
        g = g & 15;
        h = cd(a | 0, c | 0, 45) | 0;
        G() | 0;
        e = (g | 0) == 0;

        if (!(la(h & 127) | 0)) {
          if (e) {
            h = 0;
            return h | 0;
          }

          if ((b[f >> 2] | 0) == 0 ? (b[d + 8 >> 2] | 0) == 0 : 0) { e = (b[d + 12 >> 2] | 0) != 0 & 1; }else { e = 1; }
        } else if (e) {
          h = 1;
          return h | 0;
        } else { e = 1; }

        d = 1;

        while (1) {
          if (!(d & 1)) { La(f); }else { Ka(f); }
          h = cd(a | 0, c | 0, (15 - d | 0) * 3 | 0) | 0;
          G() | 0;
          Ma(f, h & 7);
          if (d >>> 0 < g >>> 0) { d = d + 1 | 0; }else { break; }
        }

        return e | 0;
      }

      function Ub(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0;
        l = S;
        S = S + 16 | 0;
        j = l;
        k = cd(a | 0, c | 0, 45) | 0;
        G() | 0;
        k = k & 127;

        a: do { if ((la(k) | 0) != 0 ? (g = cd(a | 0, c | 0, 52) | 0, G() | 0, g = g & 15, (g | 0) != 0) : 0) {
          e = 1;

          b: while (1) {
            i = cd(a | 0, c | 0, (15 - e | 0) * 3 | 0) | 0;
            G() | 0;

            switch (i & 7) {
              case 5:
                break b;

              case 0:
                break;

              default:
                {
                  e = c;
                  break a;
                }
            }

            if (e >>> 0 < g >>> 0) { e = e + 1 | 0; }else {
              e = c;
              break a;
            }
          }

          f = 1;
          e = c;

          while (1) {
            c = (15 - f | 0) * 3 | 0;
            h = dd(7, 0, c | 0) | 0;
            i = e & ~(G() | 0);
            e = cd(a | 0, e | 0, c | 0) | 0;
            G() | 0;
            e = dd(Qa(e & 7) | 0, 0, c | 0) | 0;
            a = a & ~h | e;
            e = i | (G() | 0);
            if (f >>> 0 < g >>> 0) { f = f + 1 | 0; }else { break; }
          }
        } else { e = c; } } while (0);

        i = 7728 + (k * 28 | 0) | 0;
        b[d >> 2] = b[i >> 2];
        b[d + 4 >> 2] = b[i + 4 >> 2];
        b[d + 8 >> 2] = b[i + 8 >> 2];
        b[d + 12 >> 2] = b[i + 12 >> 2];

        if (!(Tb(a, e, d) | 0)) {
          S = l;
          return;
        }

        h = d + 4 | 0;
        b[j >> 2] = b[h >> 2];
        b[j + 4 >> 2] = b[h + 4 >> 2];
        b[j + 8 >> 2] = b[h + 8 >> 2];
        g = cd(a | 0, e | 0, 52) | 0;
        G() | 0;
        i = g & 15;
        if (!(g & 1)) { g = i; }else {
          La(h);
          g = i + 1 | 0;
        }
        if (!(la(k) | 0)) { e = 0; }else {
          c: do { if (!i) { e = 0; }else {
            c = 1;

            while (1) {
              f = cd(a | 0, e | 0, (15 - c | 0) * 3 | 0) | 0;
              G() | 0;
              f = f & 7;

              if (f | 0) {
                e = f;
                break c;
              }

              if (c >>> 0 < i >>> 0) { c = c + 1 | 0; }else {
                e = 0;
                break;
              }
            }
          } } while (0);

          e = (e | 0) == 4 & 1;
        }

        if (!(cb(d, g, e, 0) | 0)) {
          if ((g | 0) != (i | 0)) {
            b[h >> 2] = b[j >> 2];
            b[h + 4 >> 2] = b[j + 4 >> 2];
            b[h + 8 >> 2] = b[j + 8 >> 2];
          }
        } else {
          if (la(k) | 0) { do {} while ((cb(d, g, 0, 0) | 0) != 0); }
          if ((g | 0) != (i | 0)) { Ja(h); }
        }

        S = l;
        return;
      }

      function Vb(a, b, c) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        var d = 0,
            e = 0;
        d = S;
        S = S + 16 | 0;
        e = d;
        Ub(a, b, e);
        b = cd(a | 0, b | 0, 52) | 0;
        G() | 0;
        $a(e, b & 15, c);
        S = d;
        return;
      }

      function Wb(a, b, c) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0;
        g = S;
        S = S + 16 | 0;
        f = g;
        Ub(a, b, f);
        d = cd(a | 0, b | 0, 45) | 0;
        G() | 0;
        d = (la(d & 127) | 0) == 0;
        e = cd(a | 0, b | 0, 52) | 0;
        G() | 0;
        e = e & 15;

        a: do { if (!d) {
          if (e | 0) {
            d = 1;

            while (1) {
              h = dd(7, 0, (15 - d | 0) * 3 | 0) | 0;
              if (!((h & a | 0) == 0 & ((G() | 0) & b | 0) == 0)) { break a; }
              if (d >>> 0 < e >>> 0) { d = d + 1 | 0; }else { break; }
            }
          }

          ab(f, e, 0, 5, c);
          S = g;
          return;
        } } while (0);

        eb(f, e, 0, 6, c);
        S = g;
        return;
      }

      function Xb(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0,
            d = 0,
            e = 0;
        d = cd(a | 0, b | 0, 45) | 0;
        G() | 0;

        if (!(la(d & 127) | 0)) {
          d = 2;
          return d | 0;
        }

        d = cd(a | 0, b | 0, 52) | 0;
        G() | 0;
        d = d & 15;

        if (!d) {
          d = 5;
          return d | 0;
        }

        c = 1;

        while (1) {
          e = dd(7, 0, (15 - c | 0) * 3 | 0) | 0;

          if (!((e & a | 0) == 0 & ((G() | 0) & b | 0) == 0)) {
            c = 2;
            a = 6;
            break;
          }

          if (c >>> 0 < d >>> 0) { c = c + 1 | 0; }else {
            c = 5;
            a = 6;
            break;
          }
        }

        if ((a | 0) == 6) { return c | 0; }
        return 0;
      }

      function Yb(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0;
        m = S;
        S = S + 128 | 0;
        k = m + 112 | 0;
        g = m + 96 | 0;
        l = m;
        f = cd(a | 0, c | 0, 52) | 0;
        G() | 0;
        i = f & 15;
        b[k >> 2] = i;
        h = cd(a | 0, c | 0, 45) | 0;
        G() | 0;
        h = h & 127;

        a: do { if (la(h) | 0) {
          if (i | 0) {
            e = 1;

            while (1) {
              j = dd(7, 0, (15 - e | 0) * 3 | 0) | 0;

              if (!((j & a | 0) == 0 & ((G() | 0) & c | 0) == 0)) {
                f = 0;
                break a;
              }

              if (e >>> 0 < i >>> 0) { e = e + 1 | 0; }else { break; }
            }
          }

          if (!(f & 1)) {
            j = dd(i + 1 | 0, 0, 52) | 0;
            l = G() | 0 | c & -15728641;
            k = dd(7, 0, (14 - i | 0) * 3 | 0) | 0;
            Yb((j | a) & ~k, l & ~(G() | 0), d);
            S = m;
            return;
          } else { f = 1; }
        } else { f = 0; } } while (0);

        Ub(a, c, g);

        if (f) {
          bb(g, k, l);
          j = 5;
        } else {
          fb(g, k, l);
          j = 6;
        }

        b: do { if (la(h) | 0) {
          if (!i) { e = 20; }else {
            e = 1;

            while (1) {
              h = dd(7, 0, (15 - e | 0) * 3 | 0) | 0;

              if (!((h & a | 0) == 0 & ((G() | 0) & c | 0) == 0)) {
                e = 8;
                break b;
              }

              if (e >>> 0 < i >>> 0) { e = e + 1 | 0; }else {
                e = 20;
                break;
              }
            }
          }
        } else { e = 8; } } while (0);

        hd(d | 0, -1, e | 0) | 0;

        if (f) {
          f = 0;

          do {
            g = l + (f << 4) | 0;
            db(g, b[k >> 2] | 0) | 0;
            g = b[g >> 2] | 0;
            e = 0;

            while (1) {
              h = d + (e << 2) | 0;
              i = b[h >> 2] | 0;
              if ((i | 0) == -1 | (i | 0) == (g | 0)) { break; }else { e = e + 1 | 0; }
            }

            b[h >> 2] = g;
            f = f + 1 | 0;
          } while ((f | 0) != (j | 0));
        } else {
          f = 0;

          do {
            g = l + (f << 4) | 0;
            cb(g, b[k >> 2] | 0, 0, 1) | 0;
            g = b[g >> 2] | 0;
            e = 0;

            while (1) {
              h = d + (e << 2) | 0;
              i = b[h >> 2] | 0;
              if ((i | 0) == -1 | (i | 0) == (g | 0)) { break; }else { e = e + 1 | 0; }
            }

            b[h >> 2] = g;
            f = f + 1 | 0;
          } while ((f | 0) != (j | 0));
        }

        S = m;
        return;
      }

      function Zb() {
        return 12;
      }

      function _b(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0;
        dd(a | 0, 0, 52) | 0;
        i = G() | 0 | 134225919;

        if ((a | 0) < 1) {
          e = 0;
          d = 0;

          do {
            if (la(e) | 0) {
              dd(e | 0, 0, 45) | 0;
              h = i | (G() | 0);
              a = c + (d << 3) | 0;
              b[a >> 2] = -1;
              b[a + 4 >> 2] = h;
              d = d + 1 | 0;
            }

            e = e + 1 | 0;
          } while ((e | 0) != 122);

          return;
        }

        h = 0;
        d = 0;

        do {
          if (la(h) | 0) {
            dd(h | 0, 0, 45) | 0;
            e = 1;
            f = -1;
            g = i | (G() | 0);

            while (1) {
              j = dd(7, 0, (15 - e | 0) * 3 | 0) | 0;
              f = f & ~j;
              g = g & ~(G() | 0);
              if ((e | 0) == (a | 0)) { break; }else { e = e + 1 | 0; }
            }

            j = c + (d << 3) | 0;
            b[j >> 2] = f;
            b[j + 4 >> 2] = g;
            d = d + 1 | 0;
          }

          h = h + 1 | 0;
        } while ((h | 0) != 122);

        return;
      }

      function $b(a, c, d, e) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        var f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0;
        i = S;
        S = S + 64 | 0;
        h = i;

        if ((a | 0) == (d | 0) & (c | 0) == (e | 0) | (0 != 0 | (c & 2013265920 | 0) != 134217728 | (0 != 0 | (e & 2013265920 | 0) != 134217728))) {
          h = 0;
          S = i;
          return h | 0;
        }

        f = cd(a | 0, c | 0, 52) | 0;
        G() | 0;
        f = f & 15;
        g = cd(d | 0, e | 0, 52) | 0;
        G() | 0;

        if ((f | 0) != (g & 15 | 0)) {
          h = 0;
          S = i;
          return h | 0;
        }

        g = f + -1 | 0;

        if (f >>> 0 > 1 ? (k = Cb(a, c, g) | 0, j = G() | 0, g = Cb(d, e, g) | 0, (k | 0) == (g | 0) & (j | 0) == (G() | 0)) : 0) {
          g = (f ^ 15) * 3 | 0;
          f = cd(a | 0, c | 0, g | 0) | 0;
          G() | 0;
          f = f & 7;
          g = cd(d | 0, e | 0, g | 0) | 0;
          G() | 0;
          g = g & 7;

          if ((f | 0) == 0 | (g | 0) == 0) {
            k = 1;
            S = i;
            return k | 0;
          }

          if ((b[21136 + (f << 2) >> 2] | 0) == (g | 0)) {
            k = 1;
            S = i;
            return k | 0;
          }

          if ((b[21168 + (f << 2) >> 2] | 0) == (g | 0)) {
            k = 1;
            S = i;
            return k | 0;
          }
        }

        f = h;
        g = f + 56 | 0;

        do {
          b[f >> 2] = 0;
          f = f + 4 | 0;
        } while ((f | 0) < (g | 0));

        $(a, c, 1, h);
        k = h;

        if (((((!((b[k >> 2] | 0) == (d | 0) ? (b[k + 4 >> 2] | 0) == (e | 0) : 0) ? (k = h + 8 | 0, !((b[k >> 2] | 0) == (d | 0) ? (b[k + 4 >> 2] | 0) == (e | 0) : 0)) : 0) ? (k = h + 16 | 0, !((b[k >> 2] | 0) == (d | 0) ? (b[k + 4 >> 2] | 0) == (e | 0) : 0)) : 0) ? (k = h + 24 | 0, !((b[k >> 2] | 0) == (d | 0) ? (b[k + 4 >> 2] | 0) == (e | 0) : 0)) : 0) ? (k = h + 32 | 0, !((b[k >> 2] | 0) == (d | 0) ? (b[k + 4 >> 2] | 0) == (e | 0) : 0)) : 0) ? (k = h + 40 | 0, !((b[k >> 2] | 0) == (d | 0) ? (b[k + 4 >> 2] | 0) == (e | 0) : 0)) : 0) {
          f = h + 48 | 0;
          f = ((b[f >> 2] | 0) == (d | 0) ? (b[f + 4 >> 2] | 0) == (e | 0) : 0) & 1;
        } else { f = 1; }

        k = f;
        S = i;
        return k | 0;
      }

      function ac(a, c, d, e) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        var f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0;
        k = S;
        S = S + 16 | 0;
        h = k;

        if (!($b(a, c, d, e) | 0)) {
          i = 0;
          j = 0;
          F(i | 0);
          S = k;
          return j | 0;
        }

        i = c & -2130706433;
        f = (Fb(a, c) | 0) == 0;
        f = f ? 1 : 2;

        while (1) {
          b[h >> 2] = 0;
          l = da(a, c, f, h) | 0;
          g = f + 1 | 0;
          if ((l | 0) == (d | 0) & (G() | 0) == (e | 0)) { break; }
          if (g >>> 0 < 7) { f = g; }else {
            f = 0;
            a = 0;
            j = 6;
            break;
          }
        }

        if ((j | 0) == 6) {
          F(f | 0);
          S = k;
          return a | 0;
        }

        l = dd(f | 0, 0, 56) | 0;
        j = i | (G() | 0) | 268435456;
        l = a | l;
        F(j | 0);
        S = k;
        return l | 0;
      }

      function bc(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0;
        c = 0 == 0 & (b & 2013265920 | 0) == 268435456;
        F((c ? b & -2130706433 | 134217728 : 0) | 0);
        return (c ? a : 0) | 0;
      }

      function cc(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0,
            e = 0,
            f = 0;
        e = S;
        S = S + 16 | 0;
        d = e;

        if (!(0 == 0 & (c & 2013265920 | 0) == 268435456)) {
          c = 0;
          d = 0;
          F(c | 0);
          S = e;
          return d | 0;
        }

        f = cd(a | 0, c | 0, 56) | 0;
        G() | 0;
        b[d >> 2] = 0;
        d = da(a, c & -2130706433 | 134217728, f & 7, d) | 0;
        c = G() | 0;
        F(c | 0);
        S = e;
        return d | 0;
      }

      function dc(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0;

        if (!(0 == 0 & (b & 2013265920 | 0) == 268435456)) {
          c = 0;
          return c | 0;
        }

        c = cd(a | 0, b | 0, 56) | 0;
        G() | 0;

        switch (c & 7) {
          case 0:
          case 7:
            {
              c = 0;
              return c | 0;
            }

        }

        c = b & -2130706433 | 134217728;

        if (0 == 0 & (b & 117440512 | 0) == 16777216 & (Fb(a, c) | 0) != 0) {
          c = 0;
          return c | 0;
        }

        c = Bb(a, c) | 0;
        return c | 0;
      }

      function ec(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        g = S;
        S = S + 16 | 0;
        e = g;
        h = 0 == 0 & (c & 2013265920 | 0) == 268435456;
        f = c & -2130706433 | 134217728;
        i = d;
        b[i >> 2] = h ? a : 0;
        b[i + 4 >> 2] = h ? f : 0;

        if (h) {
          c = cd(a | 0, c | 0, 56) | 0;
          G() | 0;
          b[e >> 2] = 0;
          a = da(a, f, c & 7, e) | 0;
          c = G() | 0;
        } else {
          a = 0;
          c = 0;
        }

        i = d + 8 | 0;
        b[i >> 2] = a;
        b[i + 4 >> 2] = c;
        S = g;
        return;
      }

      function fc(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0;
        f = (Fb(a, c) | 0) == 0;
        c = c & -2130706433;
        e = d;
        b[e >> 2] = f ? a : 0;
        b[e + 4 >> 2] = f ? c | 285212672 : 0;
        e = d + 8 | 0;
        b[e >> 2] = a;
        b[e + 4 >> 2] = c | 301989888;
        e = d + 16 | 0;
        b[e >> 2] = a;
        b[e + 4 >> 2] = c | 318767104;
        e = d + 24 | 0;
        b[e >> 2] = a;
        b[e + 4 >> 2] = c | 335544320;
        e = d + 32 | 0;
        b[e >> 2] = a;
        b[e + 4 >> 2] = c | 352321536;
        d = d + 40 | 0;
        b[d >> 2] = a;
        b[d + 4 >> 2] = c | 369098752;
        return;
      }

      function gc(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        h = S;
        S = S + 16 | 0;
        g = h;
        e = cd(a | 0, c | 0, 56) | 0;
        G() | 0;
        i = 0 == 0 & (c & 2013265920 | 0) == 268435456;
        f = i ? a : 0;
        a = i ? c & -2130706433 | 134217728 : 0;
        c = Lc(f, a, e & 7) | 0;

        if ((c | 0) == -1) {
          b[d >> 2] = 0;
          S = h;
          return;
        }

        Ub(f, a, g);
        e = cd(f | 0, a | 0, 52) | 0;
        G() | 0;
        e = e & 15;
        if (!(Fb(f, a) | 0)) { eb(g, e, c, 2, d); }else { ab(g, e, c, 2, d); }
        S = h;
        return;
      }

      function hc(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0;
        c = Yc(1, 12) | 0;
        if (!c) { H(22691, 22646, 49, 22704); }
        d = a + 4 | 0;
        e = b[d >> 2] | 0;

        if (e | 0) {
          e = e + 8 | 0;
          b[e >> 2] = c;
          b[d >> 2] = c;
          return c | 0;
        }

        if (b[a >> 2] | 0) { H(22721, 22646, 61, 22744); }
        e = a;
        b[e >> 2] = c;
        b[d >> 2] = c;
        return c | 0;
      }

      function ic(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0,
            e = 0;
        e = Wc(24) | 0;
        if (!e) { H(22758, 22646, 78, 22772); }
        b[e >> 2] = b[c >> 2];
        b[e + 4 >> 2] = b[c + 4 >> 2];
        b[e + 8 >> 2] = b[c + 8 >> 2];
        b[e + 12 >> 2] = b[c + 12 >> 2];
        b[e + 16 >> 2] = 0;
        c = a + 4 | 0;
        d = b[c >> 2] | 0;

        if (d | 0) {
          b[d + 16 >> 2] = e;
          b[c >> 2] = e;
          return e | 0;
        }

        if (b[a >> 2] | 0) { H(22787, 22646, 82, 22772); }
        b[a >> 2] = e;
        b[c >> 2] = e;
        return e | 0;
      }

      function jc(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0;
        if (!a) { return; }
        e = 1;

        while (1) {
          c = b[a >> 2] | 0;
          if (c | 0) { do {
            d = b[c >> 2] | 0;
            if (d | 0) { do {
              f = d;
              d = b[d + 16 >> 2] | 0;
              Xc(f);
            } while ((d | 0) != 0); }
            f = c;
            c = b[c + 8 >> 2] | 0;
            Xc(f);
          } while ((c | 0) != 0); }
          c = a;
          a = b[a + 8 >> 2] | 0;
          if (!e) { Xc(c); }
          if (!a) { break; }else { e = 0; }
        }

        return;
      }

      function kc(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            f = 0,
            g = 0,
            h = 0.0,
            i = 0,
            j = 0.0,
            k = 0.0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            r = 0,
            s = 0.0,
            t = 0.0,
            u = 0.0,
            v = 0.0,
            w = 0.0,
            x = 0.0,
            y = 0,
            z = 0,
            A = 0,
            B = 0,
            C = 0,
            D = 0,
            E = 0,
            F = 0,
            G = 0,
            I = 0,
            J = 0,
            K = 0;
        g = a + 8 | 0;

        if (b[g >> 2] | 0) {
          K = 1;
          return K | 0;
        }

        f = b[a >> 2] | 0;

        if (!f) {
          K = 0;
          return K | 0;
        }

        c = f;
        d = 0;

        do {
          d = d + 1 | 0;
          c = b[c + 8 >> 2] | 0;
        } while ((c | 0) != 0);

        if (d >>> 0 < 2) {
          K = 0;
          return K | 0;
        }

        I = Wc(d << 2) | 0;
        if (!I) { H(22807, 22646, 317, 22826); }
        G = Wc(d << 5) | 0;
        if (!G) { H(22848, 22646, 321, 22826); }
        b[a >> 2] = 0;
        z = a + 4 | 0;
        b[z >> 2] = 0;
        b[g >> 2] = 0;
        d = 0;
        F = 0;
        y = 0;
        n = 0;

        a: while (1) {
          m = b[f >> 2] | 0;

          if (m) {
            h = 0.0;
            i = m;

            do {
              k = +e[i + 8 >> 3];
              c = i;
              i = b[i + 16 >> 2] | 0;
              l = (i | 0) == 0;
              g = l ? m : i;
              j = +e[g + 8 >> 3];

              if (+q(+(k - j)) > 3.141592653589793) {
                K = 14;
                break;
              }

              h = h + (j - k) * (+e[c >> 3] + +e[g >> 3]);
            } while (!l);

            if ((K | 0) == 14) {
              K = 0;
              h = 0.0;
              c = m;

              do {
                x = +e[c + 8 >> 3];
                E = c + 16 | 0;
                D = b[E >> 2] | 0;
                D = (D | 0) == 0 ? m : D;
                w = +e[D + 8 >> 3];
                h = h + (+e[c >> 3] + +e[D >> 3]) * ((w < 0.0 ? w + 6.283185307179586 : w) - (x < 0.0 ? x + 6.283185307179586 : x));
                c = b[((c | 0) == 0 ? f : E) >> 2] | 0;
              } while ((c | 0) != 0);
            }

            if (h > 0.0) {
              b[I + (F << 2) >> 2] = f;
              F = F + 1 | 0;
              g = y;
              c = n;
            } else { K = 19; }
          } else { K = 19; }

          if ((K | 0) == 19) {
            K = 0;

            do { if (!d) {
              if (!n) {
                if (!(b[a >> 2] | 0)) {
                  g = z;
                  i = a;
                  c = f;
                  d = a;
                  break;
                } else {
                  K = 27;
                  break a;
                }
              } else {
                g = z;
                i = n + 8 | 0;
                c = f;
                d = a;
                break;
              }
            } else {
              c = d + 8 | 0;

              if (b[c >> 2] | 0) {
                K = 21;
                break a;
              }

              d = Yc(1, 12) | 0;

              if (!d) {
                K = 23;
                break a;
              }

              b[c >> 2] = d;
              g = d + 4 | 0;
              i = d;
              c = n;
            } } while (0);

            b[i >> 2] = f;
            b[g >> 2] = f;
            i = G + (y << 5) | 0;
            l = b[f >> 2] | 0;

            if (l) {
              m = G + (y << 5) + 8 | 0;
              e[m >> 3] = 1797693134862315708145274.0e284;
              n = G + (y << 5) + 24 | 0;
              e[n >> 3] = 1797693134862315708145274.0e284;
              e[i >> 3] = -1797693134862315708145274.0e284;
              o = G + (y << 5) + 16 | 0;
              e[o >> 3] = -1797693134862315708145274.0e284;
              u = 1797693134862315708145274.0e284;
              v = -1797693134862315708145274.0e284;
              g = 0;
              p = l;
              k = 1797693134862315708145274.0e284;
              s = 1797693134862315708145274.0e284;
              t = -1797693134862315708145274.0e284;
              j = -1797693134862315708145274.0e284;

              while (1) {
                h = +e[p >> 3];
                x = +e[p + 8 >> 3];
                p = b[p + 16 >> 2] | 0;
                r = (p | 0) == 0;
                w = +e[(r ? l : p) + 8 >> 3];

                if (h < k) {
                  e[m >> 3] = h;
                  k = h;
                }

                if (x < s) {
                  e[n >> 3] = x;
                  s = x;
                }

                if (h > t) { e[i >> 3] = h; }else { h = t; }

                if (x > j) {
                  e[o >> 3] = x;
                  j = x;
                }

                u = x > 0.0 & x < u ? x : u;
                v = x < 0.0 & x > v ? x : v;
                g = g | +q(+(x - w)) > 3.141592653589793;
                if (r) { break; }else { t = h; }
              }

              if (g) {
                e[o >> 3] = v;
                e[n >> 3] = u;
              }
            } else {
              b[i >> 2] = 0;
              b[i + 4 >> 2] = 0;
              b[i + 8 >> 2] = 0;
              b[i + 12 >> 2] = 0;
              b[i + 16 >> 2] = 0;
              b[i + 20 >> 2] = 0;
              b[i + 24 >> 2] = 0;
              b[i + 28 >> 2] = 0;
            }

            g = y + 1 | 0;
          }

          E = f + 8 | 0;
          f = b[E >> 2] | 0;
          b[E >> 2] = 0;

          if (!f) {
            K = 45;
            break;
          } else {
            y = g;
            n = c;
          }
        }

        if ((K | 0) == 21) { H(22624, 22646, 35, 22658); }else if ((K | 0) == 23) { H(22678, 22646, 37, 22658); }else if ((K | 0) == 27) { H(22721, 22646, 61, 22744); }else if ((K | 0) == 45) {
          b: do { if ((F | 0) > 0) {
            E = (g | 0) == 0;
            C = g << 2;
            D = (a | 0) == 0;
            B = 0;
            c = 0;

            while (1) {
              A = b[I + (B << 2) >> 2] | 0;

              if (!E) {
                y = Wc(C) | 0;

                if (!y) {
                  K = 50;
                  break;
                }

                z = Wc(C) | 0;

                if (!z) {
                  K = 52;
                  break;
                }

                c: do { if (!D) {
                  g = 0;
                  d = 0;
                  i = a;

                  while (1) {
                    f = G + (g << 5) | 0;

                    if (lc(b[i >> 2] | 0, f, b[A >> 2] | 0) | 0) {
                      b[y + (d << 2) >> 2] = i;
                      b[z + (d << 2) >> 2] = f;
                      r = d + 1 | 0;
                    } else { r = d; }

                    i = b[i + 8 >> 2] | 0;
                    if (!i) { break; }else {
                      g = g + 1 | 0;
                      d = r;
                    }
                  }

                  if ((r | 0) > 0) {
                    f = b[y >> 2] | 0;
                    if ((r | 0) == 1) { d = f; }else {
                      o = 0;
                      p = -1;
                      d = f;
                      n = f;

                      while (1) {
                        l = b[n >> 2] | 0;
                        f = 0;
                        i = 0;

                        while (1) {
                          g = b[b[y + (i << 2) >> 2] >> 2] | 0;
                          if ((g | 0) == (l | 0)) { m = f; }else { m = f + ((lc(g, b[z + (i << 2) >> 2] | 0, b[l >> 2] | 0) | 0) & 1) | 0; }
                          i = i + 1 | 0;
                          if ((i | 0) == (r | 0)) { break; }else { f = m; }
                        }

                        g = (m | 0) > (p | 0);
                        d = g ? n : d;
                        f = o + 1 | 0;
                        if ((f | 0) == (r | 0)) { break c; }
                        o = f;
                        p = g ? m : p;
                        n = b[y + (f << 2) >> 2] | 0;
                      }
                    }
                  } else { d = 0; }
                } else { d = 0; } } while (0);

                Xc(y);
                Xc(z);

                if (d) {
                  g = d + 4 | 0;
                  f = b[g >> 2] | 0;

                  if (!f) {
                    if (b[d >> 2] | 0) {
                      K = 70;
                      break;
                    }
                  } else { d = f + 8 | 0; }

                  b[d >> 2] = A;
                  b[g >> 2] = A;
                } else { K = 73; }
              } else { K = 73; }

              if ((K | 0) == 73) {
                K = 0;
                c = b[A >> 2] | 0;
                if (c | 0) { do {
                  z = c;
                  c = b[c + 16 >> 2] | 0;
                  Xc(z);
                } while ((c | 0) != 0); }
                Xc(A);
                c = 2;
              }

              B = B + 1 | 0;

              if ((B | 0) >= (F | 0)) {
                J = c;
                break b;
              }
            }

            if ((K | 0) == 50) { H(22863, 22646, 249, 22882); }else if ((K | 0) == 52) { H(22901, 22646, 252, 22882); }else if ((K | 0) == 70) { H(22721, 22646, 61, 22744); }
          } else { J = 0; } } while (0);

          Xc(I);
          Xc(G);
          K = J;
          return K | 0;
        }
        return 0;
      }

      function lc(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var f = 0.0,
            g = 0.0,
            h = 0.0,
            i = 0.0,
            j = 0.0,
            k = 0.0,
            l = 0.0,
            m = 0;

        if (!(xa(c, d) | 0)) {
          a = 0;
          return a | 0;
        }

        c = wa(c) | 0;
        l = +e[d >> 3];
        f = +e[d + 8 >> 3];
        f = c & f < 0.0 ? f + 6.283185307179586 : f;
        a = b[a >> 2] | 0;

        if (!a) {
          a = 0;
          return a | 0;
        }

        if (c) {
          c = 0;
          d = a;

          a: while (1) {
            while (1) {
              i = +e[d >> 3];
              k = +e[d + 8 >> 3];
              d = d + 16 | 0;
              m = b[d >> 2] | 0;
              m = (m | 0) == 0 ? a : m;
              h = +e[m >> 3];
              g = +e[m + 8 >> 3];

              if (i > h) {
                j = i;
                i = k;
              } else {
                j = h;
                h = i;
                i = g;
                g = k;
              }

              if (!(l < h | l > j)) { break; }
              d = b[d >> 2] | 0;

              if (!d) {
                d = 22;
                break a;
              }
            }

            k = g < 0.0 ? g + 6.283185307179586 : g;
            i = i < 0.0 ? i + 6.283185307179586 : i;
            f = i == f | k == f ? f + -2.220446049250313e-16 : f;
            k = k + (l - h) / (j - h) * (i - k);
            if ((k < 0.0 ? k + 6.283185307179586 : k) > f) { c = c ^ 1; }
            d = b[d >> 2] | 0;

            if (!d) {
              d = 22;
              break;
            }
          }

          if ((d | 0) == 22) { return c | 0; }
        } else {
          c = 0;
          d = a;

          b: while (1) {
            while (1) {
              i = +e[d >> 3];
              k = +e[d + 8 >> 3];
              d = d + 16 | 0;
              m = b[d >> 2] | 0;
              m = (m | 0) == 0 ? a : m;
              h = +e[m >> 3];
              g = +e[m + 8 >> 3];

              if (i > h) {
                j = i;
                i = k;
              } else {
                j = h;
                h = i;
                i = g;
                g = k;
              }

              if (!(l < h | l > j)) { break; }
              d = b[d >> 2] | 0;

              if (!d) {
                d = 22;
                break b;
              }
            }

            f = i == f | g == f ? f + -2.220446049250313e-16 : f;
            if (g + (l - h) / (j - h) * (i - g) > f) { c = c ^ 1; }
            d = b[d >> 2] | 0;

            if (!d) {
              d = 22;
              break;
            }
          }

          if ((d | 0) == 22) { return c | 0; }
        }

        return 0;
      }

      function mc(c, d, e, f, g) {
        c = c | 0;
        d = d | 0;
        e = e | 0;
        f = f | 0;
        g = g | 0;
        var h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0,
            s = 0,
            t = 0,
            u = 0;
        u = S;
        S = S + 32 | 0;
        t = u + 16 | 0;
        s = u;
        h = cd(c | 0, d | 0, 52) | 0;
        G() | 0;
        h = h & 15;
        p = cd(e | 0, f | 0, 52) | 0;
        G() | 0;

        if ((h | 0) != (p & 15 | 0)) {
          t = 1;
          S = u;
          return t | 0;
        }

        l = cd(c | 0, d | 0, 45) | 0;
        G() | 0;
        l = l & 127;
        m = cd(e | 0, f | 0, 45) | 0;
        G() | 0;
        m = m & 127;
        p = (l | 0) != (m | 0);

        if (p) {
          j = ta(l, m) | 0;

          if ((j | 0) == 7) {
            t = 2;
            S = u;
            return t | 0;
          }

          k = ta(m, l) | 0;
          if ((k | 0) == 7) { H(22925, 22949, 151, 22959); }else {
            q = j;
            i = k;
          }
        } else {
          q = 0;
          i = 0;
        }

        n = la(l) | 0;
        o = la(m) | 0;
        b[t >> 2] = 0;
        b[t + 4 >> 2] = 0;
        b[t + 8 >> 2] = 0;
        b[t + 12 >> 2] = 0;

        do { if (!q) {
          Tb(e, f, t) | 0;

          if ((n | 0) != 0 & (o | 0) != 0) {
            if ((m | 0) != (l | 0)) { H(23077, 22949, 243, 22959); }
            i = Lb(c, d) | 0;
            h = Lb(e, f) | 0;

            if (!(a[22032 + (i * 7 | 0) + h >> 0] | 0)) {
              i = b[21200 + (i * 28 | 0) + (h << 2) >> 2] | 0;

              if ((i | 0) > 0) {
                j = t + 4 | 0;
                h = 0;

                do {
                  Oa(j);
                  h = h + 1 | 0;
                } while ((h | 0) != (i | 0));

                r = 50;
              } else { r = 50; }
            } else { h = 5; }
          } else { r = 50; }
        } else {
          m = b[4304 + (l * 28 | 0) + (q << 2) >> 2] | 0;
          j = (m | 0) > 0;
          if (!o) {
            if (j) {
              l = 0;
              k = e;
              j = f;

              do {
                k = Pb(k, j) | 0;
                j = G() | 0;
                i = Qa(i) | 0;
                l = l + 1 | 0;
              } while ((l | 0) != (m | 0));

              m = i;
              l = k;
              k = j;
            } else {
              m = i;
              l = e;
              k = f;
            }
          } else if (j) {
            l = 0;
            k = e;
            j = f;

            do {
              k = Ob(k, j) | 0;
              j = G() | 0;
              i = Qa(i) | 0;
              if ((i | 0) == 1) { i = Qa(1) | 0; }
              l = l + 1 | 0;
            } while ((l | 0) != (m | 0));

            m = i;
            l = k;
            k = j;
          } else {
            m = i;
            l = e;
            k = f;
          }
          Tb(l, k, t) | 0;
          if (!p) { H(22972, 22949, 181, 22959); }
          j = (n | 0) != 0;
          i = (o | 0) != 0;
          if (j & i) { H(22999, 22949, 182, 22959); }
          if (!j) {
            if (i) {
              i = Lb(l, k) | 0;

              if (a[22032 + (i * 7 | 0) + m >> 0] | 0) {
                h = 4;
                break;
              }

              l = 0;
              k = b[21200 + (m * 28 | 0) + (i << 2) >> 2] | 0;
              r = 26;
            } else { i = 0; }
          } else {
            i = Lb(c, d) | 0;

            if (a[22032 + (i * 7 | 0) + q >> 0] | 0) {
              h = 3;
              break;
            }

            k = b[21200 + (i * 28 | 0) + (q << 2) >> 2] | 0;
            l = k;
            r = 26;
          }

          if ((r | 0) == 26) {
            if ((k | 0) <= -1) { H(23030, 22949, 212, 22959); }
            if ((l | 0) <= -1) { H(23053, 22949, 213, 22959); }

            if ((k | 0) > 0) {
              j = t + 4 | 0;
              i = 0;

              do {
                Oa(j);
                i = i + 1 | 0;
              } while ((i | 0) != (k | 0));

              i = l;
            } else { i = l; }
          }
          b[s >> 2] = 0;
          b[s + 4 >> 2] = 0;
          b[s + 8 >> 2] = 0;
          Ma(s, q);
          if (h | 0) { while (1) {
            if (!(Rb(h) | 0)) { La(s); }else { Ka(s); }
            if ((h | 0) > 1) { h = h + -1 | 0; }else { break; }
          } }

          if ((i | 0) > 0) {
            h = 0;

            do {
              Oa(s);
              h = h + 1 | 0;
            } while ((h | 0) != (i | 0));
          }

          r = t + 4 | 0;
          Ea(r, s, r);
          Ca(r);
          r = 50;
        } } while (0);

        if ((r | 0) == 50) {
          h = t + 4 | 0;
          b[g >> 2] = b[h >> 2];
          b[g + 4 >> 2] = b[h + 4 >> 2];
          b[g + 8 >> 2] = b[h + 8 >> 2];
          h = 0;
        }

        t = h;
        S = u;
        return t | 0;
      }

      function nc(a, c, d, e) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        var f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0,
            s = 0,
            t = 0;
        p = S;
        S = S + 48 | 0;
        h = p + 36 | 0;
        i = p + 24 | 0;
        j = p + 12 | 0;
        k = p;
        g = cd(a | 0, c | 0, 52) | 0;
        G() | 0;
        g = g & 15;
        n = cd(a | 0, c | 0, 45) | 0;
        G() | 0;
        n = n & 127;
        l = la(n) | 0;
        dd(g | 0, 0, 52) | 0;
        r = G() | 0 | 134225919;
        q = e;
        b[q >> 2] = -1;
        b[q + 4 >> 2] = r;

        if (!g) {
          if ((b[d >> 2] | 0) > 1) {
            r = 1;
            S = p;
            return r | 0;
          }

          if ((b[d + 4 >> 2] | 0) > 1) {
            r = 1;
            S = p;
            return r | 0;
          }

          if ((b[d + 8 >> 2] | 0) > 1) {
            r = 1;
            S = p;
            return r | 0;
          }

          f = sa(n, Ha(d) | 0) | 0;

          if ((f | 0) == 127) {
            r = 1;
            S = p;
            return r | 0;
          }

          o = dd(f | 0, 0, 45) | 0;
          q = G() | 0;
          n = e;
          q = b[n + 4 >> 2] & -1040385 | q;
          r = e;
          b[r >> 2] = b[n >> 2] | o;
          b[r + 4 >> 2] = q;
          r = 0;
          S = p;
          return r | 0;
        }
        b[h >> 2] = b[d >> 2];
        b[h + 4 >> 2] = b[d + 4 >> 2];
        b[h + 8 >> 2] = b[d + 8 >> 2];

        while (1) {
          b[i >> 2] = b[h >> 2];
          b[i + 4 >> 2] = b[h + 4 >> 2];
          b[i + 8 >> 2] = b[h + 8 >> 2];

          if (!(Rb(g) | 0)) {
            Ja(h);
            b[j >> 2] = b[h >> 2];
            b[j + 4 >> 2] = b[h + 4 >> 2];
            b[j + 8 >> 2] = b[h + 8 >> 2];
            La(j);
          } else {
            Ia(h);
            b[j >> 2] = b[h >> 2];
            b[j + 4 >> 2] = b[h + 4 >> 2];
            b[j + 8 >> 2] = b[h + 8 >> 2];
            Ka(j);
          }

          Fa(i, j, k);
          Ca(k);
          q = e;
          s = b[q >> 2] | 0;
          q = b[q + 4 >> 2] | 0;
          t = (15 - g | 0) * 3 | 0;
          d = dd(7, 0, t | 0) | 0;
          q = q & ~(G() | 0);
          t = dd(Ha(k) | 0, 0, t | 0) | 0;
          q = G() | 0 | q;
          r = e;
          b[r >> 2] = t | s & ~d;
          b[r + 4 >> 2] = q;
          if ((g | 0) > 1) { g = g + -1 | 0; }else { break; }
        }

        a: do { if (((b[h >> 2] | 0) <= 1 ? (b[h + 4 >> 2] | 0) <= 1 : 0) ? (b[h + 8 >> 2] | 0) <= 1 : 0) {
          g = Ha(h) | 0;
          i = sa(n, g) | 0;
          if ((i | 0) == 127) { k = 0; }else { k = la(i) | 0; }

          b: do { if (!g) {
            if ((l | 0) != 0 & (k | 0) != 0) {
              t = Lb(a, c) | 0;
              g = e;
              g = 21408 + (t * 28 | 0) + ((Lb(b[g >> 2] | 0, b[g + 4 >> 2] | 0) | 0) << 2) | 0;
              g = b[g >> 2] | 0;
              if ((g | 0) <= -1) { H(23201, 22949, 433, 23134); }

              if (!g) {
                f = i;
                g = 55;
              } else {
                h = e;
                f = 0;
                d = b[h >> 2] | 0;
                h = b[h + 4 >> 2] | 0;

                do {
                  d = Nb(d, h) | 0;
                  h = G() | 0;
                  t = e;
                  b[t >> 2] = d;
                  b[t + 4 >> 2] = h;
                  f = f + 1 | 0;
                } while ((f | 0) < (g | 0));

                f = i;
                g = 54;
              }
            } else {
              f = i;
              g = 54;
            }
          } else {
            if (l) {
              h = 21408 + ((Lb(a, c) | 0) * 28 | 0) + (g << 2) | 0;
              h = b[h >> 2] | 0;

              if ((h | 0) > 0) {
                d = 0;

                do {
                  g = Pa(g) | 0;
                  d = d + 1 | 0;
                } while ((d | 0) != (h | 0));
              }

              if ((g | 0) == 1) {
                f = 3;
                break a;
              }

              d = sa(n, g) | 0;
              if ((d | 0) == 127) { H(23104, 22949, 376, 23134); }

              if (!(la(d) | 0)) {
                o = h;
                m = g;
                f = d;
              } else { H(23147, 22949, 377, 23134); }
            } else {
              o = 0;
              m = g;
              f = i;
            }

            j = b[4304 + (n * 28 | 0) + (m << 2) >> 2] | 0;
            if ((j | 0) <= -1) { H(23178, 22949, 384, 23134); }

            if (!k) {
              if ((o | 0) <= -1) { H(23030, 22949, 417, 23134); }

              if (o | 0) {
                h = e;
                g = 0;
                d = b[h >> 2] | 0;
                h = b[h + 4 >> 2] | 0;

                do {
                  d = Nb(d, h) | 0;
                  h = G() | 0;
                  t = e;
                  b[t >> 2] = d;
                  b[t + 4 >> 2] = h;
                  g = g + 1 | 0;
                } while ((g | 0) < (o | 0));
              }

              if ((j | 0) <= 0) {
                g = 54;
                break;
              }

              h = e;
              g = 0;
              d = b[h >> 2] | 0;
              h = b[h + 4 >> 2] | 0;

              while (1) {
                d = Nb(d, h) | 0;
                h = G() | 0;
                t = e;
                b[t >> 2] = d;
                b[t + 4 >> 2] = h;
                g = g + 1 | 0;

                if ((g | 0) == (j | 0)) {
                  g = 54;
                  break b;
                }
              }
            }

            i = ta(f, n) | 0;
            if ((i | 0) == 7) { H(22925, 22949, 393, 23134); }
            g = e;
            d = b[g >> 2] | 0;
            g = b[g + 4 >> 2] | 0;

            if ((j | 0) > 0) {
              h = 0;

              do {
                d = Nb(d, g) | 0;
                g = G() | 0;
                t = e;
                b[t >> 2] = d;
                b[t + 4 >> 2] = g;
                h = h + 1 | 0;
              } while ((h | 0) != (j | 0));
            }

            d = Lb(d, g) | 0;
            t = ma(f) | 0;
            d = b[(t ? 21824 : 21616) + (i * 28 | 0) + (d << 2) >> 2] | 0;
            if ((d | 0) <= -1) { H(23030, 22949, 412, 23134); }
            if (!d) { g = 54; }else {
              i = e;
              g = 0;
              h = b[i >> 2] | 0;
              i = b[i + 4 >> 2] | 0;

              do {
                h = Mb(h, i) | 0;
                i = G() | 0;
                t = e;
                b[t >> 2] = h;
                b[t + 4 >> 2] = i;
                g = g + 1 | 0;
              } while ((g | 0) < (d | 0));

              g = 54;
            }
          } } while (0);

          if ((g | 0) == 54) { if (k) { g = 55; } }

          if ((g | 0) == 55) {
            t = e;

            if ((Lb(b[t >> 2] | 0, b[t + 4 >> 2] | 0) | 0) == 1) {
              f = 4;
              break;
            }
          }

          t = e;
          r = b[t >> 2] | 0;
          t = b[t + 4 >> 2] & -1040385;
          s = dd(f | 0, 0, 45) | 0;
          t = t | (G() | 0);
          f = e;
          b[f >> 2] = r | s;
          b[f + 4 >> 2] = t;
          f = 0;
        } else { f = 2; } } while (0);

        t = f;
        S = p;
        return t | 0;
      }

      function oc(a, b, c, d, e) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        var f = 0,
            g = 0;
        g = S;
        S = S + 16 | 0;
        f = g;
        a = mc(a, b, c, d, f) | 0;

        if (!a) {
          Ua(f, e);
          a = 0;
        }

        S = g;
        return a | 0;
      }

      function pc(a, b, c, d) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0;
        e = S;
        S = S + 16 | 0;
        f = e;
        Va(c, f);
        d = nc(a, b, f, d) | 0;
        S = e;
        return d | 0;
      }

      function qc(a, b, c, d) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0;
        g = S;
        S = S + 32 | 0;
        e = g + 12 | 0;
        f = g;
        if ((mc(a, b, a, b, e) | 0) == 0 ? (mc(a, b, c, d, f) | 0) == 0 : 0) { a = Ta(e, f) | 0; }else { a = -1; }
        S = g;
        return a | 0;
      }

      function rc(a, b, c, d) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0;
        g = S;
        S = S + 32 | 0;
        e = g + 12 | 0;
        f = g;
        if ((mc(a, b, a, b, e) | 0) == 0 ? (mc(a, b, c, d, f) | 0) == 0 : 0) { a = Ta(e, f) | 0; }else { a = -1; }
        S = g;
        return (a >>> 31 ^ 1) + a | 0;
      }

      function sc(a, c, d, e, f) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        f = f | 0;
        var g = 0,
            h = 0,
            i = 0.0,
            j = 0.0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0.0,
            p = 0.0,
            r = 0.0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0,
            x = 0,
            y = 0.0;
        x = S;
        S = S + 48 | 0;
        g = x + 24 | 0;
        h = x + 12 | 0;
        w = x;

        if ((mc(a, c, a, c, g) | 0) == 0 ? (mc(a, c, d, e, h) | 0) == 0 : 0) {
          v = Ta(g, h) | 0;

          if ((v | 0) < 0) {
            w = v;
            S = x;
            return w | 0;
          }
          b[g >> 2] = 0;
          b[g + 4 >> 2] = 0;
          b[g + 8 >> 2] = 0;
          b[h >> 2] = 0;
          b[h + 4 >> 2] = 0;
          b[h + 8 >> 2] = 0;
          mc(a, c, a, c, g) | 0;
          mc(a, c, d, e, h) | 0;
          Wa(g);
          Wa(h);

          if (!v) {
            e = g + 4 | 0;
            n = g + 8 | 0;
            s = e;
            t = n;
            u = g;
            d = b[g >> 2] | 0;
            e = b[e >> 2] | 0;
            g = b[n >> 2] | 0;
            p = 0.0;
            r = 0.0;
            o = 0.0;
          } else {
            l = b[g >> 2] | 0;
            o = +(v | 0);
            s = g + 4 | 0;
            m = b[s >> 2] | 0;
            t = g + 8 | 0;
            n = b[t >> 2] | 0;
            u = g;
            d = l;
            e = m;
            g = n;
            p = +((b[h >> 2] | 0) - l | 0) / o;
            r = +((b[h + 4 >> 2] | 0) - m | 0) / o;
            o = +((b[h + 8 >> 2] | 0) - n | 0) / o;
          }

          b[w >> 2] = d;
          n = w + 4 | 0;
          b[n >> 2] = e;
          m = w + 8 | 0;
          b[m >> 2] = g;
          l = 0;

          while (1) {
            j = +(l | 0);
            y = p * j + +(d | 0);
            i = r * j + +(b[s >> 2] | 0);
            j = o * j + +(b[t >> 2] | 0);
            e = ~~+fd(+y);
            h = ~~+fd(+i);
            d = ~~+fd(+j);
            y = +q(+(+(e | 0) - y));
            i = +q(+(+(h | 0) - i));
            j = +q(+(+(d | 0) - j));

            do { if (!(y > i & y > j)) {
              k = 0 - e | 0;

              if (i > j) {
                g = k - d | 0;
                break;
              } else {
                g = h;
                d = k - h | 0;
                break;
              }
            } else {
              e = 0 - (h + d) | 0;
              g = h;
            } } while (0);

            b[w >> 2] = e;
            b[n >> 2] = g;
            b[m >> 2] = d;
            Xa(w);
            nc(a, c, w, f + (l << 3) | 0) | 0;
            if ((l | 0) == (v | 0)) { break; }
            l = l + 1 | 0;
            d = b[u >> 2] | 0;
          }

          w = 0;
          S = x;
          return w | 0;
        }

        w = -1;
        S = x;
        return w | 0;
      }

      function tc(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0;

        if (!b) {
          c = 1;
          return c | 0;
        }

        c = a;
        a = 1;

        do {
          a = B((b & 1 | 0) == 0 ? 1 : c, a) | 0;
          b = b >> 1;
          c = B(c, c) | 0;
        } while ((b | 0) != 0);

        return a | 0;
      }

      function uc(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var f = 0.0,
            g = 0.0,
            h = 0.0,
            i = 0.0,
            j = 0.0,
            k = 0.0,
            l = 0,
            m = 0,
            n = 0,
            o = 0.0;

        if (!(xa(c, d) | 0)) {
          n = 0;
          return n | 0;
        }

        c = wa(c) | 0;
        o = +e[d >> 3];
        f = +e[d + 8 >> 3];
        f = c & f < 0.0 ? f + 6.283185307179586 : f;
        n = b[a >> 2] | 0;

        if ((n | 0) <= 0) {
          n = 0;
          return n | 0;
        }

        m = b[a + 4 >> 2] | 0;

        if (c) {
          c = 0;
          d = -1;
          a = 0;

          a: while (1) {
            l = a;

            while (1) {
              i = +e[m + (l << 4) >> 3];
              k = +e[m + (l << 4) + 8 >> 3];
              a = (d + 2 | 0) % (n | 0) | 0;
              h = +e[m + (a << 4) >> 3];
              g = +e[m + (a << 4) + 8 >> 3];

              if (i > h) {
                j = i;
                i = k;
              } else {
                j = h;
                h = i;
                i = g;
                g = k;
              }

              if (!(o < h | o > j)) { break; }
              d = l + 1 | 0;

              if ((d | 0) < (n | 0)) {
                a = l;
                l = d;
                d = a;
              } else {
                d = 22;
                break a;
              }
            }

            k = g < 0.0 ? g + 6.283185307179586 : g;
            i = i < 0.0 ? i + 6.283185307179586 : i;
            f = i == f | k == f ? f + -2.220446049250313e-16 : f;
            k = k + (o - h) / (j - h) * (i - k);
            if ((k < 0.0 ? k + 6.283185307179586 : k) > f) { c = c ^ 1; }
            a = l + 1 | 0;

            if ((a | 0) >= (n | 0)) {
              d = 22;
              break;
            } else { d = l; }
          }

          if ((d | 0) == 22) { return c | 0; }
        } else {
          c = 0;
          d = -1;
          a = 0;

          b: while (1) {
            l = a;

            while (1) {
              i = +e[m + (l << 4) >> 3];
              k = +e[m + (l << 4) + 8 >> 3];
              a = (d + 2 | 0) % (n | 0) | 0;
              h = +e[m + (a << 4) >> 3];
              g = +e[m + (a << 4) + 8 >> 3];

              if (i > h) {
                j = i;
                i = k;
              } else {
                j = h;
                h = i;
                i = g;
                g = k;
              }

              if (!(o < h | o > j)) { break; }
              d = l + 1 | 0;

              if ((d | 0) < (n | 0)) {
                a = l;
                l = d;
                d = a;
              } else {
                d = 22;
                break b;
              }
            }

            f = i == f | g == f ? f + -2.220446049250313e-16 : f;
            if (g + (o - h) / (j - h) * (i - g) > f) { c = c ^ 1; }
            a = l + 1 | 0;

            if ((a | 0) >= (n | 0)) {
              d = 22;
              break;
            } else { d = l; }
          }

          if ((d | 0) == 22) { return c | 0; }
        }

        return 0;
      }

      function vc(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0.0,
            f = 0.0,
            g = 0.0,
            h = 0.0,
            i = 0.0,
            j = 0.0,
            k = 0.0,
            l = 0.0,
            m = 0.0,
            n = 0,
            o = 0,
            p = 0,
            r = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0;
        r = b[a >> 2] | 0;

        if (!r) {
          b[c >> 2] = 0;
          b[c + 4 >> 2] = 0;
          b[c + 8 >> 2] = 0;
          b[c + 12 >> 2] = 0;
          b[c + 16 >> 2] = 0;
          b[c + 20 >> 2] = 0;
          b[c + 24 >> 2] = 0;
          b[c + 28 >> 2] = 0;
          return;
        }

        s = c + 8 | 0;
        e[s >> 3] = 1797693134862315708145274.0e284;
        t = c + 24 | 0;
        e[t >> 3] = 1797693134862315708145274.0e284;
        e[c >> 3] = -1797693134862315708145274.0e284;
        u = c + 16 | 0;
        e[u >> 3] = -1797693134862315708145274.0e284;
        if ((r | 0) <= 0) { return; }
        o = b[a + 4 >> 2] | 0;
        l = 1797693134862315708145274.0e284;
        m = -1797693134862315708145274.0e284;
        n = 0;
        a = -1;
        h = 1797693134862315708145274.0e284;
        i = 1797693134862315708145274.0e284;
        k = -1797693134862315708145274.0e284;
        f = -1797693134862315708145274.0e284;
        p = 0;

        while (1) {
          d = +e[o + (p << 4) >> 3];
          j = +e[o + (p << 4) + 8 >> 3];
          a = a + 2 | 0;
          g = +e[o + (((a | 0) == (r | 0) ? 0 : a) << 4) + 8 >> 3];

          if (d < h) {
            e[s >> 3] = d;
            h = d;
          }

          if (j < i) {
            e[t >> 3] = j;
            i = j;
          }

          if (d > k) { e[c >> 3] = d; }else { d = k; }

          if (j > f) {
            e[u >> 3] = j;
            f = j;
          }

          l = j > 0.0 & j < l ? j : l;
          m = j < 0.0 & j > m ? j : m;
          n = n | +q(+(j - g)) > 3.141592653589793;
          a = p + 1 | 0;
          if ((a | 0) == (r | 0)) { break; }else {
            v = p;
            k = d;
            p = a;
            a = v;
          }
        }

        if (!n) { return; }
        e[u >> 3] = m;
        e[t >> 3] = l;
        return;
      }

      function wc(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0,
            f = 0,
            g = 0,
            h = 0.0,
            i = 0.0,
            j = 0.0,
            k = 0.0,
            l = 0.0,
            m = 0.0,
            n = 0.0,
            o = 0.0,
            p = 0.0,
            r = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0,
            x = 0,
            y = 0,
            z = 0,
            A = 0;
        r = b[a >> 2] | 0;

        if (r) {
          s = c + 8 | 0;
          e[s >> 3] = 1797693134862315708145274.0e284;
          t = c + 24 | 0;
          e[t >> 3] = 1797693134862315708145274.0e284;
          e[c >> 3] = -1797693134862315708145274.0e284;
          u = c + 16 | 0;
          e[u >> 3] = -1797693134862315708145274.0e284;

          if ((r | 0) > 0) {
            g = b[a + 4 >> 2] | 0;
            o = 1797693134862315708145274.0e284;
            p = -1797693134862315708145274.0e284;
            f = 0;
            d = -1;
            k = 1797693134862315708145274.0e284;
            l = 1797693134862315708145274.0e284;
            n = -1797693134862315708145274.0e284;
            i = -1797693134862315708145274.0e284;
            v = 0;

            while (1) {
              h = +e[g + (v << 4) >> 3];
              m = +e[g + (v << 4) + 8 >> 3];
              z = d + 2 | 0;
              j = +e[g + (((z | 0) == (r | 0) ? 0 : z) << 4) + 8 >> 3];

              if (h < k) {
                e[s >> 3] = h;
                k = h;
              }

              if (m < l) {
                e[t >> 3] = m;
                l = m;
              }

              if (h > n) { e[c >> 3] = h; }else { h = n; }

              if (m > i) {
                e[u >> 3] = m;
                i = m;
              }

              o = m > 0.0 & m < o ? m : o;
              p = m < 0.0 & m > p ? m : p;
              f = f | +q(+(m - j)) > 3.141592653589793;
              d = v + 1 | 0;
              if ((d | 0) == (r | 0)) { break; }else {
                z = v;
                n = h;
                v = d;
                d = z;
              }
            }

            if (f) {
              e[u >> 3] = p;
              e[t >> 3] = o;
            }
          }
        } else {
          b[c >> 2] = 0;
          b[c + 4 >> 2] = 0;
          b[c + 8 >> 2] = 0;
          b[c + 12 >> 2] = 0;
          b[c + 16 >> 2] = 0;
          b[c + 20 >> 2] = 0;
          b[c + 24 >> 2] = 0;
          b[c + 28 >> 2] = 0;
        }

        z = a + 8 | 0;
        d = b[z >> 2] | 0;
        if ((d | 0) <= 0) { return; }
        y = a + 12 | 0;
        x = 0;

        do {
          g = b[y >> 2] | 0;
          f = x;
          x = x + 1 | 0;
          t = c + (x << 5) | 0;
          u = b[g + (f << 3) >> 2] | 0;

          if (u) {
            v = c + (x << 5) + 8 | 0;
            e[v >> 3] = 1797693134862315708145274.0e284;
            a = c + (x << 5) + 24 | 0;
            e[a >> 3] = 1797693134862315708145274.0e284;
            e[t >> 3] = -1797693134862315708145274.0e284;
            w = c + (x << 5) + 16 | 0;
            e[w >> 3] = -1797693134862315708145274.0e284;

            if ((u | 0) > 0) {
              r = b[g + (f << 3) + 4 >> 2] | 0;
              o = 1797693134862315708145274.0e284;
              p = -1797693134862315708145274.0e284;
              g = 0;
              f = -1;
              s = 0;
              k = 1797693134862315708145274.0e284;
              l = 1797693134862315708145274.0e284;
              m = -1797693134862315708145274.0e284;
              i = -1797693134862315708145274.0e284;

              while (1) {
                h = +e[r + (s << 4) >> 3];
                n = +e[r + (s << 4) + 8 >> 3];
                f = f + 2 | 0;
                j = +e[r + (((f | 0) == (u | 0) ? 0 : f) << 4) + 8 >> 3];

                if (h < k) {
                  e[v >> 3] = h;
                  k = h;
                }

                if (n < l) {
                  e[a >> 3] = n;
                  l = n;
                }

                if (h > m) { e[t >> 3] = h; }else { h = m; }

                if (n > i) {
                  e[w >> 3] = n;
                  i = n;
                }

                o = n > 0.0 & n < o ? n : o;
                p = n < 0.0 & n > p ? n : p;
                g = g | +q(+(n - j)) > 3.141592653589793;
                f = s + 1 | 0;
                if ((f | 0) == (u | 0)) { break; }else {
                  A = s;
                  s = f;
                  m = h;
                  f = A;
                }
              }

              if (g) {
                e[w >> 3] = p;
                e[a >> 3] = o;
              }
            }
          } else {
            b[t >> 2] = 0;
            b[t + 4 >> 2] = 0;
            b[t + 8 >> 2] = 0;
            b[t + 12 >> 2] = 0;
            b[t + 16 >> 2] = 0;
            b[t + 20 >> 2] = 0;
            b[t + 24 >> 2] = 0;
            b[t + 28 >> 2] = 0;
            d = b[z >> 2] | 0;
          }
        } while ((x | 0) < (d | 0));

        return;
      }

      function xc(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0;

        if (!(uc(a, c, d) | 0)) {
          f = 0;
          return f | 0;
        }

        f = a + 8 | 0;

        if ((b[f >> 2] | 0) <= 0) {
          f = 1;
          return f | 0;
        }

        e = a + 12 | 0;
        a = 0;

        while (1) {
          g = a;
          a = a + 1 | 0;

          if (uc((b[e >> 2] | 0) + (g << 3) | 0, c + (a << 5) | 0, d) | 0) {
            a = 0;
            e = 6;
            break;
          }

          if ((a | 0) >= (b[f >> 2] | 0)) {
            a = 1;
            e = 6;
            break;
          }
        }

        if ((e | 0) == 6) { return a | 0; }
        return 0;
      }

      function yc() {
        return 8;
      }

      function zc() {
        return 16;
      }

      function Ac() {
        return 168;
      }

      function Bc() {
        return 8;
      }

      function Cc() {
        return 16;
      }

      function Dc() {
        return 12;
      }

      function Ec() {
        return 8;
      }

      function Fc(a) {
        a = a | 0;
        var b = 0.0,
            c = 0.0;
        c = +e[a >> 3];
        b = +e[a + 8 >> 3];
        return + +r(+(c * c + b * b));
      }

      function Gc(a, b, c, d, f) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        d = d | 0;
        f = f | 0;
        var g = 0.0,
            h = 0.0,
            i = 0.0,
            j = 0.0,
            k = 0.0,
            l = 0.0,
            m = 0.0,
            n = 0.0;
        k = +e[a >> 3];
        j = +e[b >> 3] - k;
        i = +e[a + 8 >> 3];
        h = +e[b + 8 >> 3] - i;
        m = +e[c >> 3];
        g = +e[d >> 3] - m;
        n = +e[c + 8 >> 3];
        l = +e[d + 8 >> 3] - n;
        g = (g * (i - n) - (k - m) * l) / (j * l - h * g);
        e[f >> 3] = k + j * g;
        e[f + 8 >> 3] = i + h * g;
        return;
      }

      function Hc(a, b) {
        a = a | 0;
        b = b | 0;

        if (!(+e[a >> 3] == +e[b >> 3])) {
          b = 0;
          return b | 0;
        }

        b = +e[a + 8 >> 3] == +e[b + 8 >> 3];
        return b | 0;
      }

      function Ic(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0.0,
            d = 0.0,
            f = 0.0;
        f = +e[a >> 3] - +e[b >> 3];
        d = +e[a + 8 >> 3] - +e[b + 8 >> 3];
        c = +e[a + 16 >> 3] - +e[b + 16 >> 3];
        return +(f * f + d * d + c * c);
      }

      function Jc(a, b) {
        a = a | 0;
        b = b | 0;
        var c = 0.0,
            d = 0.0,
            f = 0.0;
        c = +e[a >> 3];
        d = +t(+c);
        c = +u(+c);
        e[b + 16 >> 3] = c;
        c = +e[a + 8 >> 3];
        f = d * +t(+c);
        e[b >> 3] = f;
        c = d * +u(+c);
        e[b + 8 >> 3] = c;
        return;
      }

      function Kc(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0;
        k = S;
        S = S + 32 | 0;
        f = k + 16 | 0;
        g = k;
        Ub(a, c, f);
        h = Ab(a, c) | 0;
        j = Lb(a, c) | 0;
        pa(h, g);
        c = qa(h, b[f >> 2] | 0) | 0;

        if (!(la(h) | 0)) {
          j = c;
          S = k;
          return j | 0;
        }

        do { switch (h | 0) {
          case 4:
            {
              a = 0;
              d = 14;
              break;
            }

          case 14:
            {
              a = 1;
              d = 14;
              break;
            }

          case 24:
            {
              a = 2;
              d = 14;
              break;
            }

          case 38:
            {
              a = 3;
              d = 14;
              break;
            }

          case 49:
            {
              a = 4;
              d = 14;
              break;
            }

          case 58:
            {
              a = 5;
              d = 14;
              break;
            }

          case 63:
            {
              a = 6;
              d = 14;
              break;
            }

          case 72:
            {
              a = 7;
              d = 14;
              break;
            }

          case 83:
            {
              a = 8;
              d = 14;
              break;
            }

          case 97:
            {
              a = 9;
              d = 14;
              break;
            }

          case 107:
            {
              a = 10;
              d = 14;
              break;
            }

          case 117:
            {
              a = 11;
              d = 14;
              break;
            }

          default:
            {
              i = 0;
              e = 0;
            }
        } } while (0);

        if ((d | 0) == 14) {
          i = b[22096 + (a * 24 | 0) + 8 >> 2] | 0;
          e = b[22096 + (a * 24 | 0) + 16 >> 2] | 0;
        }

        a = b[f >> 2] | 0;

        if ((a | 0) != (b[g >> 2] | 0)) {
          h = ma(h) | 0;
          a = b[f >> 2] | 0;
          if (h | (a | 0) == (e | 0)) { c = (c + 1 | 0) % 6 | 0; }
        }

        if ((j | 0) == 3 & (a | 0) == (e | 0)) {
          j = (c + 5 | 0) % 6 | 0;
          S = k;
          return j | 0;
        }

        if (!((j | 0) == 5 & (a | 0) == (i | 0))) {
          j = c;
          S = k;
          return j | 0;
        }

        j = (c + 1 | 0) % 6 | 0;
        S = k;
        return j | 0;
      }

      function Lc(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0,
            f = 0;
        e = Fb(a, c) | 0;

        if ((d + -1 | 0) >>> 0 > 5) {
          d = -1;
          return d | 0;
        }

        f = (e | 0) != 0;

        if ((d | 0) == 1 & f) {
          d = -1;
          return d | 0;
        }

        e = Kc(a, c) | 0;

        if (f) {
          d = (5 - e + (b[22384 + (d << 2) >> 2] | 0) | 0) % 5 | 0;
          return d | 0;
        } else {
          d = (6 - e + (b[22416 + (d << 2) >> 2] | 0) | 0) % 6 | 0;
          return d | 0;
        }
      }

      function Mc(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var e = 0;

        if ((c | 0) > 0) {
          e = Yc(c, 4) | 0;
          b[a >> 2] = e;
          if (!e) { H(23230, 23253, 40, 23267); }
        } else { b[a >> 2] = 0; }

        b[a + 4 >> 2] = c;
        b[a + 8 >> 2] = 0;
        b[a + 12 >> 2] = d;
        return;
      }

      function Nc(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0;
        g = a + 4 | 0;
        h = a + 12 | 0;
        i = a + 8 | 0;

        a: while (1) {
          d = b[g >> 2] | 0;
          c = 0;

          while (1) {
            if ((c | 0) >= (d | 0)) { break a; }
            f = b[a >> 2] | 0;
            j = b[f + (c << 2) >> 2] | 0;
            if (!j) { c = c + 1 | 0; }else { break; }
          }

          c = f + (~~(+q(+(+s(10.0, + +(15 - (b[h >> 2] | 0) | 0)) * (+e[j >> 3] + +e[j + 8 >> 3]))) % +(d | 0)) >>> 0 << 2) | 0;
          d = b[c >> 2] | 0;

          b: do { if (d | 0) {
            f = j + 32 | 0;
            if ((d | 0) == (j | 0)) { b[c >> 2] = b[f >> 2]; }else {
              d = d + 32 | 0;
              c = b[d >> 2] | 0;
              if (!c) { break; }

              while (1) {
                if ((c | 0) == (j | 0)) { break; }
                d = c + 32 | 0;
                c = b[d >> 2] | 0;
                if (!c) { break b; }
              }

              b[d >> 2] = b[f >> 2];
            }
            Xc(j);
            b[i >> 2] = (b[i >> 2] | 0) + -1;
          } } while (0);
        }

        Xc(b[a >> 2] | 0);
        return;
      }

      function Oc(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0;
        e = b[a + 4 >> 2] | 0;
        d = 0;

        while (1) {
          if ((d | 0) >= (e | 0)) {
            c = 0;
            d = 4;
            break;
          }

          c = b[(b[a >> 2] | 0) + (d << 2) >> 2] | 0;
          if (!c) { d = d + 1 | 0; }else {
            d = 4;
            break;
          }
        }

        if ((d | 0) == 4) { return c | 0; }
        return 0;
      }

      function Pc(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0,
            f = 0,
            g = 0,
            h = 0;
        d = ~~(+q(+(+s(10.0, + +(15 - (b[a + 12 >> 2] | 0) | 0)) * (+e[c >> 3] + +e[c + 8 >> 3]))) % +(b[a + 4 >> 2] | 0)) >>> 0;
        d = (b[a >> 2] | 0) + (d << 2) | 0;
        f = b[d >> 2] | 0;

        if (!f) {
          h = 1;
          return h | 0;
        }

        h = c + 32 | 0;

        do { if ((f | 0) != (c | 0)) {
          d = b[f + 32 >> 2] | 0;

          if (!d) {
            h = 1;
            return h | 0;
          }

          g = d;

          while (1) {
            if ((g | 0) == (c | 0)) {
              g = 8;
              break;
            }

            d = b[g + 32 >> 2] | 0;

            if (!d) {
              d = 1;
              g = 10;
              break;
            } else {
              f = g;
              g = d;
            }
          }

          if ((g | 0) == 8) {
            b[f + 32 >> 2] = b[h >> 2];
            break;
          } else if ((g | 0) == 10) { return d | 0; }
        } else { b[d >> 2] = b[h >> 2]; } } while (0);

        Xc(c);
        h = a + 8 | 0;
        b[h >> 2] = (b[h >> 2] | 0) + -1;
        h = 0;
        return h | 0;
      }

      function Qc(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var f = 0,
            g = 0,
            h = 0,
            i = 0;
        h = Wc(40) | 0;
        if (!h) { H(23283, 23253, 98, 23296); }
        b[h >> 2] = b[c >> 2];
        b[h + 4 >> 2] = b[c + 4 >> 2];
        b[h + 8 >> 2] = b[c + 8 >> 2];
        b[h + 12 >> 2] = b[c + 12 >> 2];
        g = h + 16 | 0;
        b[g >> 2] = b[d >> 2];
        b[g + 4 >> 2] = b[d + 4 >> 2];
        b[g + 8 >> 2] = b[d + 8 >> 2];
        b[g + 12 >> 2] = b[d + 12 >> 2];
        b[h + 32 >> 2] = 0;
        g = ~~(+q(+(+s(10.0, + +(15 - (b[a + 12 >> 2] | 0) | 0)) * (+e[c >> 3] + +e[c + 8 >> 3]))) % +(b[a + 4 >> 2] | 0)) >>> 0;
        g = (b[a >> 2] | 0) + (g << 2) | 0;
        f = b[g >> 2] | 0;

        do { if (!f) { b[g >> 2] = h; }else {
          while (1) {
            if (hb(f, c) | 0 ? hb(f + 16 | 0, d) | 0 : 0) { break; }
            g = b[f + 32 >> 2] | 0;
            f = (g | 0) == 0 ? f : g;

            if (!(b[f + 32 >> 2] | 0)) {
              i = 10;
              break;
            }
          }

          if ((i | 0) == 10) {
            b[f + 32 >> 2] = h;
            break;
          }

          Xc(h);
          i = f;
          return i | 0;
        } } while (0);

        i = a + 8 | 0;
        b[i >> 2] = (b[i >> 2] | 0) + 1;
        i = h;
        return i | 0;
      }

      function Rc(a, c, d) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        var f = 0,
            g = 0;
        g = ~~(+q(+(+s(10.0, + +(15 - (b[a + 12 >> 2] | 0) | 0)) * (+e[c >> 3] + +e[c + 8 >> 3]))) % +(b[a + 4 >> 2] | 0)) >>> 0;
        g = b[(b[a >> 2] | 0) + (g << 2) >> 2] | 0;

        if (!g) {
          d = 0;
          return d | 0;
        }

        if (!d) {
          a = g;

          while (1) {
            if (hb(a, c) | 0) {
              f = 10;
              break;
            }

            a = b[a + 32 >> 2] | 0;

            if (!a) {
              a = 0;
              f = 10;
              break;
            }
          }

          if ((f | 0) == 10) { return a | 0; }
        }

        a = g;

        while (1) {
          if (hb(a, c) | 0 ? hb(a + 16 | 0, d) | 0 : 0) {
            f = 10;
            break;
          }

          a = b[a + 32 >> 2] | 0;

          if (!a) {
            a = 0;
            f = 10;
            break;
          }
        }

        if ((f | 0) == 10) { return a | 0; }
        return 0;
      }

      function Sc(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0;
        d = ~~(+q(+(+s(10.0, + +(15 - (b[a + 12 >> 2] | 0) | 0)) * (+e[c >> 3] + +e[c + 8 >> 3]))) % +(b[a + 4 >> 2] | 0)) >>> 0;
        a = b[(b[a >> 2] | 0) + (d << 2) >> 2] | 0;

        if (!a) {
          d = 0;
          return d | 0;
        }

        while (1) {
          if (hb(a, c) | 0) {
            c = 5;
            break;
          }

          a = b[a + 32 >> 2] | 0;

          if (!a) {
            a = 0;
            c = 5;
            break;
          }
        }

        if ((c | 0) == 5) { return a | 0; }
        return 0;
      }

      function Tc() {
        return 23312;
      }

      function Uc(a) {
        a = +a;
        return + +id(+a);
      }

      function Vc(a) {
        a = +a;
        return ~~+Uc(a) | 0;
      }

      function Wc(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0;
        w = S;
        S = S + 16 | 0;
        n = w;

        do { if (a >>> 0 < 245) {
          k = a >>> 0 < 11 ? 16 : a + 11 & -8;
          a = k >>> 3;
          m = b[5829] | 0;
          d = m >>> a;

          if (d & 3 | 0) {
            c = (d & 1 ^ 1) + a | 0;
            a = 23356 + (c << 1 << 2) | 0;
            d = a + 8 | 0;
            e = b[d >> 2] | 0;
            f = e + 8 | 0;
            g = b[f >> 2] | 0;
            if ((g | 0) == (a | 0)) { b[5829] = m & ~(1 << c); }else {
              b[g + 12 >> 2] = a;
              b[d >> 2] = g;
            }
            v = c << 3;
            b[e + 4 >> 2] = v | 3;
            v = e + v + 4 | 0;
            b[v >> 2] = b[v >> 2] | 1;
            v = f;
            S = w;
            return v | 0;
          }

          l = b[5831] | 0;

          if (k >>> 0 > l >>> 0) {
            if (d | 0) {
              c = 2 << a;
              c = d << a & (c | 0 - c);
              c = (c & 0 - c) + -1 | 0;
              i = c >>> 12 & 16;
              c = c >>> i;
              d = c >>> 5 & 8;
              c = c >>> d;
              g = c >>> 2 & 4;
              c = c >>> g;
              a = c >>> 1 & 2;
              c = c >>> a;
              e = c >>> 1 & 1;
              e = (d | i | g | a | e) + (c >>> e) | 0;
              c = 23356 + (e << 1 << 2) | 0;
              a = c + 8 | 0;
              g = b[a >> 2] | 0;
              i = g + 8 | 0;
              d = b[i >> 2] | 0;

              if ((d | 0) == (c | 0)) {
                a = m & ~(1 << e);
                b[5829] = a;
              } else {
                b[d + 12 >> 2] = c;
                b[a >> 2] = d;
                a = m;
              }

              v = e << 3;
              h = v - k | 0;
              b[g + 4 >> 2] = k | 3;
              f = g + k | 0;
              b[f + 4 >> 2] = h | 1;
              b[g + v >> 2] = h;

              if (l | 0) {
                e = b[5834] | 0;
                c = l >>> 3;
                d = 23356 + (c << 1 << 2) | 0;
                c = 1 << c;

                if (!(a & c)) {
                  b[5829] = a | c;
                  c = d;
                  a = d + 8 | 0;
                } else {
                  a = d + 8 | 0;
                  c = b[a >> 2] | 0;
                }

                b[a >> 2] = e;
                b[c + 12 >> 2] = e;
                b[e + 8 >> 2] = c;
                b[e + 12 >> 2] = d;
              }

              b[5831] = h;
              b[5834] = f;
              v = i;
              S = w;
              return v | 0;
            }

            g = b[5830] | 0;

            if (g) {
              d = (g & 0 - g) + -1 | 0;
              f = d >>> 12 & 16;
              d = d >>> f;
              e = d >>> 5 & 8;
              d = d >>> e;
              h = d >>> 2 & 4;
              d = d >>> h;
              i = d >>> 1 & 2;
              d = d >>> i;
              j = d >>> 1 & 1;
              j = b[23620 + ((e | f | h | i | j) + (d >>> j) << 2) >> 2] | 0;
              d = j;
              i = j;
              j = (b[j + 4 >> 2] & -8) - k | 0;

              while (1) {
                a = b[d + 16 >> 2] | 0;

                if (!a) {
                  a = b[d + 20 >> 2] | 0;
                  if (!a) { break; }
                }

                h = (b[a + 4 >> 2] & -8) - k | 0;
                f = h >>> 0 < j >>> 0;
                d = a;
                i = f ? a : i;
                j = f ? h : j;
              }

              h = i + k | 0;

              if (h >>> 0 > i >>> 0) {
                f = b[i + 24 >> 2] | 0;
                c = b[i + 12 >> 2] | 0;

                do { if ((c | 0) == (i | 0)) {
                  a = i + 20 | 0;
                  c = b[a >> 2] | 0;

                  if (!c) {
                    a = i + 16 | 0;
                    c = b[a >> 2] | 0;

                    if (!c) {
                      d = 0;
                      break;
                    }
                  }

                  while (1) {
                    e = c + 20 | 0;
                    d = b[e >> 2] | 0;

                    if (!d) {
                      e = c + 16 | 0;
                      d = b[e >> 2] | 0;
                      if (!d) { break; }else {
                        c = d;
                        a = e;
                      }
                    } else {
                      c = d;
                      a = e;
                    }
                  }

                  b[a >> 2] = 0;
                  d = c;
                } else {
                  d = b[i + 8 >> 2] | 0;
                  b[d + 12 >> 2] = c;
                  b[c + 8 >> 2] = d;
                  d = c;
                } } while (0);

                do { if (f | 0) {
                  c = b[i + 28 >> 2] | 0;
                  a = 23620 + (c << 2) | 0;

                  if ((i | 0) == (b[a >> 2] | 0)) {
                    b[a >> 2] = d;

                    if (!d) {
                      b[5830] = g & ~(1 << c);
                      break;
                    }
                  } else {
                    v = f + 16 | 0;
                    b[((b[v >> 2] | 0) == (i | 0) ? v : f + 20 | 0) >> 2] = d;
                    if (!d) { break; }
                  }

                  b[d + 24 >> 2] = f;
                  c = b[i + 16 >> 2] | 0;

                  if (c | 0) {
                    b[d + 16 >> 2] = c;
                    b[c + 24 >> 2] = d;
                  }

                  c = b[i + 20 >> 2] | 0;

                  if (c | 0) {
                    b[d + 20 >> 2] = c;
                    b[c + 24 >> 2] = d;
                  }
                } } while (0);

                if (j >>> 0 < 16) {
                  v = j + k | 0;
                  b[i + 4 >> 2] = v | 3;
                  v = i + v + 4 | 0;
                  b[v >> 2] = b[v >> 2] | 1;
                } else {
                  b[i + 4 >> 2] = k | 3;
                  b[h + 4 >> 2] = j | 1;
                  b[h + j >> 2] = j;

                  if (l | 0) {
                    e = b[5834] | 0;
                    c = l >>> 3;
                    d = 23356 + (c << 1 << 2) | 0;
                    c = 1 << c;

                    if (!(c & m)) {
                      b[5829] = c | m;
                      c = d;
                      a = d + 8 | 0;
                    } else {
                      a = d + 8 | 0;
                      c = b[a >> 2] | 0;
                    }

                    b[a >> 2] = e;
                    b[c + 12 >> 2] = e;
                    b[e + 8 >> 2] = c;
                    b[e + 12 >> 2] = d;
                  }

                  b[5831] = j;
                  b[5834] = h;
                }

                v = i + 8 | 0;
                S = w;
                return v | 0;
              } else { m = k; }
            } else { m = k; }
          } else { m = k; }
        } else if (a >>> 0 <= 4294967231) {
          a = a + 11 | 0;
          k = a & -8;
          e = b[5830] | 0;

          if (e) {
            f = 0 - k | 0;
            a = a >>> 8;
            if (a) {
              if (k >>> 0 > 16777215) { j = 31; }else {
                m = (a + 1048320 | 0) >>> 16 & 8;
                q = a << m;
                i = (q + 520192 | 0) >>> 16 & 4;
                q = q << i;
                j = (q + 245760 | 0) >>> 16 & 2;
                j = 14 - (i | m | j) + (q << j >>> 15) | 0;
                j = k >>> (j + 7 | 0) & 1 | j << 1;
              }
            } else { j = 0; }
            d = b[23620 + (j << 2) >> 2] | 0;

            a: do { if (!d) {
              d = 0;
              a = 0;
              q = 61;
            } else {
              a = 0;
              i = k << ((j | 0) == 31 ? 0 : 25 - (j >>> 1) | 0);
              g = 0;

              while (1) {
                h = (b[d + 4 >> 2] & -8) - k | 0;
                if (h >>> 0 < f >>> 0) { if (!h) {
                  a = d;
                  f = 0;
                  q = 65;
                  break a;
                } else {
                  a = d;
                  f = h;
                } }
                q = b[d + 20 >> 2] | 0;
                d = b[d + 16 + (i >>> 31 << 2) >> 2] | 0;
                g = (q | 0) == 0 | (q | 0) == (d | 0) ? g : q;

                if (!d) {
                  d = g;
                  q = 61;
                  break;
                } else { i = i << 1; }
              }
            } } while (0);

            if ((q | 0) == 61) {
              if ((d | 0) == 0 & (a | 0) == 0) {
                a = 2 << j;
                a = (a | 0 - a) & e;

                if (!a) {
                  m = k;
                  break;
                }

                m = (a & 0 - a) + -1 | 0;
                h = m >>> 12 & 16;
                m = m >>> h;
                g = m >>> 5 & 8;
                m = m >>> g;
                i = m >>> 2 & 4;
                m = m >>> i;
                j = m >>> 1 & 2;
                m = m >>> j;
                d = m >>> 1 & 1;
                a = 0;
                d = b[23620 + ((g | h | i | j | d) + (m >>> d) << 2) >> 2] | 0;
              }

              if (!d) {
                i = a;
                h = f;
              } else { q = 65; }
            }

            if ((q | 0) == 65) {
              g = d;

              while (1) {
                m = (b[g + 4 >> 2] & -8) - k | 0;
                d = m >>> 0 < f >>> 0;
                f = d ? m : f;
                a = d ? g : a;
                d = b[g + 16 >> 2] | 0;
                if (!d) { d = b[g + 20 >> 2] | 0; }

                if (!d) {
                  i = a;
                  h = f;
                  break;
                } else { g = d; }
              }
            }

            if (((i | 0) != 0 ? h >>> 0 < ((b[5831] | 0) - k | 0) >>> 0 : 0) ? (l = i + k | 0, l >>> 0 > i >>> 0) : 0) {
              g = b[i + 24 >> 2] | 0;
              c = b[i + 12 >> 2] | 0;

              do { if ((c | 0) == (i | 0)) {
                a = i + 20 | 0;
                c = b[a >> 2] | 0;

                if (!c) {
                  a = i + 16 | 0;
                  c = b[a >> 2] | 0;

                  if (!c) {
                    c = 0;
                    break;
                  }
                }

                while (1) {
                  f = c + 20 | 0;
                  d = b[f >> 2] | 0;

                  if (!d) {
                    f = c + 16 | 0;
                    d = b[f >> 2] | 0;
                    if (!d) { break; }else {
                      c = d;
                      a = f;
                    }
                  } else {
                    c = d;
                    a = f;
                  }
                }

                b[a >> 2] = 0;
              } else {
                v = b[i + 8 >> 2] | 0;
                b[v + 12 >> 2] = c;
                b[c + 8 >> 2] = v;
              } } while (0);

              do { if (g) {
                a = b[i + 28 >> 2] | 0;
                d = 23620 + (a << 2) | 0;

                if ((i | 0) == (b[d >> 2] | 0)) {
                  b[d >> 2] = c;

                  if (!c) {
                    e = e & ~(1 << a);
                    b[5830] = e;
                    break;
                  }
                } else {
                  v = g + 16 | 0;
                  b[((b[v >> 2] | 0) == (i | 0) ? v : g + 20 | 0) >> 2] = c;
                  if (!c) { break; }
                }

                b[c + 24 >> 2] = g;
                a = b[i + 16 >> 2] | 0;

                if (a | 0) {
                  b[c + 16 >> 2] = a;
                  b[a + 24 >> 2] = c;
                }

                a = b[i + 20 >> 2] | 0;

                if (a) {
                  b[c + 20 >> 2] = a;
                  b[a + 24 >> 2] = c;
                }
              } } while (0);

              b: do { if (h >>> 0 < 16) {
                v = h + k | 0;
                b[i + 4 >> 2] = v | 3;
                v = i + v + 4 | 0;
                b[v >> 2] = b[v >> 2] | 1;
              } else {
                b[i + 4 >> 2] = k | 3;
                b[l + 4 >> 2] = h | 1;
                b[l + h >> 2] = h;
                c = h >>> 3;

                if (h >>> 0 < 256) {
                  d = 23356 + (c << 1 << 2) | 0;
                  a = b[5829] | 0;
                  c = 1 << c;

                  if (!(a & c)) {
                    b[5829] = a | c;
                    c = d;
                    a = d + 8 | 0;
                  } else {
                    a = d + 8 | 0;
                    c = b[a >> 2] | 0;
                  }

                  b[a >> 2] = l;
                  b[c + 12 >> 2] = l;
                  b[l + 8 >> 2] = c;
                  b[l + 12 >> 2] = d;
                  break;
                }

                c = h >>> 8;
                if (c) {
                  if (h >>> 0 > 16777215) { d = 31; }else {
                    u = (c + 1048320 | 0) >>> 16 & 8;
                    v = c << u;
                    t = (v + 520192 | 0) >>> 16 & 4;
                    v = v << t;
                    d = (v + 245760 | 0) >>> 16 & 2;
                    d = 14 - (t | u | d) + (v << d >>> 15) | 0;
                    d = h >>> (d + 7 | 0) & 1 | d << 1;
                  }
                } else { d = 0; }
                c = 23620 + (d << 2) | 0;
                b[l + 28 >> 2] = d;
                a = l + 16 | 0;
                b[a + 4 >> 2] = 0;
                b[a >> 2] = 0;
                a = 1 << d;

                if (!(e & a)) {
                  b[5830] = e | a;
                  b[c >> 2] = l;
                  b[l + 24 >> 2] = c;
                  b[l + 12 >> 2] = l;
                  b[l + 8 >> 2] = l;
                  break;
                }

                c = b[c >> 2] | 0;

                c: do { if ((b[c + 4 >> 2] & -8 | 0) != (h | 0)) {
                  e = h << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);

                  while (1) {
                    d = c + 16 + (e >>> 31 << 2) | 0;
                    a = b[d >> 2] | 0;
                    if (!a) { break; }

                    if ((b[a + 4 >> 2] & -8 | 0) == (h | 0)) {
                      c = a;
                      break c;
                    } else {
                      e = e << 1;
                      c = a;
                    }
                  }

                  b[d >> 2] = l;
                  b[l + 24 >> 2] = c;
                  b[l + 12 >> 2] = l;
                  b[l + 8 >> 2] = l;
                  break b;
                } } while (0);

                u = c + 8 | 0;
                v = b[u >> 2] | 0;
                b[v + 12 >> 2] = l;
                b[u >> 2] = l;
                b[l + 8 >> 2] = v;
                b[l + 12 >> 2] = c;
                b[l + 24 >> 2] = 0;
              } } while (0);

              v = i + 8 | 0;
              S = w;
              return v | 0;
            } else { m = k; }
          } else { m = k; }
        } else { m = -1; } } while (0);

        d = b[5831] | 0;

        if (d >>> 0 >= m >>> 0) {
          c = d - m | 0;
          a = b[5834] | 0;

          if (c >>> 0 > 15) {
            v = a + m | 0;
            b[5834] = v;
            b[5831] = c;
            b[v + 4 >> 2] = c | 1;
            b[a + d >> 2] = c;
            b[a + 4 >> 2] = m | 3;
          } else {
            b[5831] = 0;
            b[5834] = 0;
            b[a + 4 >> 2] = d | 3;
            v = a + d + 4 | 0;
            b[v >> 2] = b[v >> 2] | 1;
          }

          v = a + 8 | 0;
          S = w;
          return v | 0;
        }

        h = b[5832] | 0;

        if (h >>> 0 > m >>> 0) {
          t = h - m | 0;
          b[5832] = t;
          v = b[5835] | 0;
          u = v + m | 0;
          b[5835] = u;
          b[u + 4 >> 2] = t | 1;
          b[v + 4 >> 2] = m | 3;
          v = v + 8 | 0;
          S = w;
          return v | 0;
        }

        if (!(b[5947] | 0)) {
          b[5949] = 4096;
          b[5948] = 4096;
          b[5950] = -1;
          b[5951] = -1;
          b[5952] = 0;
          b[5940] = 0;
          b[5947] = n & -16 ^ 1431655768;
          a = 4096;
        } else { a = b[5949] | 0; }

        i = m + 48 | 0;
        j = m + 47 | 0;
        g = a + j | 0;
        f = 0 - a | 0;
        k = g & f;

        if (k >>> 0 <= m >>> 0) {
          v = 0;
          S = w;
          return v | 0;
        }

        a = b[5939] | 0;

        if (a | 0 ? (l = b[5937] | 0, n = l + k | 0, n >>> 0 <= l >>> 0 | n >>> 0 > a >>> 0) : 0) {
          v = 0;
          S = w;
          return v | 0;
        }

        d: do { if (!(b[5940] & 4)) {
          d = b[5835] | 0;

          e: do { if (d) {
            e = 23764;

            while (1) {
              n = b[e >> 2] | 0;
              if (n >>> 0 <= d >>> 0 ? (n + (b[e + 4 >> 2] | 0) | 0) >>> 0 > d >>> 0 : 0) { break; }
              a = b[e + 8 >> 2] | 0;

              if (!a) {
                q = 128;
                break e;
              } else { e = a; }
            }

            c = g - h & f;

            if (c >>> 0 < 2147483647) {
              a = jd(c | 0) | 0;

              if ((a | 0) == ((b[e >> 2] | 0) + (b[e + 4 >> 2] | 0) | 0)) {
                if ((a | 0) != (-1 | 0)) {
                  h = c;
                  g = a;
                  q = 145;
                  break d;
                }
              } else {
                e = a;
                q = 136;
              }
            } else { c = 0; }
          } else { q = 128; } } while (0);

          do { if ((q | 0) == 128) {
            d = jd(0) | 0;

            if ((d | 0) != (-1 | 0) ? (c = d, o = b[5948] | 0, p = o + -1 | 0, c = ((p & c | 0) == 0 ? 0 : (p + c & 0 - o) - c | 0) + k | 0, o = b[5937] | 0, p = c + o | 0, c >>> 0 > m >>> 0 & c >>> 0 < 2147483647) : 0) {
              n = b[5939] | 0;

              if (n | 0 ? p >>> 0 <= o >>> 0 | p >>> 0 > n >>> 0 : 0) {
                c = 0;
                break;
              }

              a = jd(c | 0) | 0;

              if ((a | 0) == (d | 0)) {
                h = c;
                g = d;
                q = 145;
                break d;
              } else {
                e = a;
                q = 136;
              }
            } else { c = 0; }
          } } while (0);

          do { if ((q | 0) == 136) {
            d = 0 - c | 0;
            if (!(i >>> 0 > c >>> 0 & (c >>> 0 < 2147483647 & (e | 0) != (-1 | 0)))) { if ((e | 0) == (-1 | 0)) {
              c = 0;
              break;
            } else {
              h = c;
              g = e;
              q = 145;
              break d;
            } }
            a = b[5949] | 0;
            a = j - c + a & 0 - a;

            if (a >>> 0 >= 2147483647) {
              h = c;
              g = e;
              q = 145;
              break d;
            }

            if ((jd(a | 0) | 0) == (-1 | 0)) {
              jd(d | 0) | 0;
              c = 0;
              break;
            } else {
              h = a + c | 0;
              g = e;
              q = 145;
              break d;
            }
          } } while (0);

          b[5940] = b[5940] | 4;
          q = 143;
        } else {
          c = 0;
          q = 143;
        } } while (0);

        if (((q | 0) == 143 ? k >>> 0 < 2147483647 : 0) ? (t = jd(k | 0) | 0, p = jd(0) | 0, r = p - t | 0, s = r >>> 0 > (m + 40 | 0) >>> 0, !((t | 0) == (-1 | 0) | s ^ 1 | t >>> 0 < p >>> 0 & ((t | 0) != (-1 | 0) & (p | 0) != (-1 | 0)) ^ 1)) : 0) {
          h = s ? r : c;
          g = t;
          q = 145;
        }

        if ((q | 0) == 145) {
          c = (b[5937] | 0) + h | 0;
          b[5937] = c;
          if (c >>> 0 > (b[5938] | 0) >>> 0) { b[5938] = c; }
          j = b[5835] | 0;

          f: do { if (j) {
            c = 23764;

            while (1) {
              a = b[c >> 2] | 0;
              d = b[c + 4 >> 2] | 0;

              if ((g | 0) == (a + d | 0)) {
                q = 154;
                break;
              }

              e = b[c + 8 >> 2] | 0;
              if (!e) { break; }else { c = e; }
            }

            if (((q | 0) == 154 ? (u = c + 4 | 0, (b[c + 12 >> 2] & 8 | 0) == 0) : 0) ? g >>> 0 > j >>> 0 & a >>> 0 <= j >>> 0 : 0) {
              b[u >> 2] = d + h;
              v = (b[5832] | 0) + h | 0;
              t = j + 8 | 0;
              t = (t & 7 | 0) == 0 ? 0 : 0 - t & 7;
              u = j + t | 0;
              t = v - t | 0;
              b[5835] = u;
              b[5832] = t;
              b[u + 4 >> 2] = t | 1;
              b[j + v + 4 >> 2] = 40;
              b[5836] = b[5951];
              break;
            }

            if (g >>> 0 < (b[5833] | 0) >>> 0) { b[5833] = g; }
            d = g + h | 0;
            c = 23764;

            while (1) {
              if ((b[c >> 2] | 0) == (d | 0)) {
                q = 162;
                break;
              }

              a = b[c + 8 >> 2] | 0;
              if (!a) { break; }else { c = a; }
            }

            if ((q | 0) == 162 ? (b[c + 12 >> 2] & 8 | 0) == 0 : 0) {
              b[c >> 2] = g;
              l = c + 4 | 0;
              b[l >> 2] = (b[l >> 2] | 0) + h;
              l = g + 8 | 0;
              l = g + ((l & 7 | 0) == 0 ? 0 : 0 - l & 7) | 0;
              c = d + 8 | 0;
              c = d + ((c & 7 | 0) == 0 ? 0 : 0 - c & 7) | 0;
              k = l + m | 0;
              i = c - l - m | 0;
              b[l + 4 >> 2] = m | 3;

              g: do { if ((j | 0) == (c | 0)) {
                v = (b[5832] | 0) + i | 0;
                b[5832] = v;
                b[5835] = k;
                b[k + 4 >> 2] = v | 1;
              } else {
                if ((b[5834] | 0) == (c | 0)) {
                  v = (b[5831] | 0) + i | 0;
                  b[5831] = v;
                  b[5834] = k;
                  b[k + 4 >> 2] = v | 1;
                  b[k + v >> 2] = v;
                  break;
                }

                a = b[c + 4 >> 2] | 0;

                if ((a & 3 | 0) == 1) {
                  h = a & -8;
                  e = a >>> 3;

                  h: do { if (a >>> 0 < 256) {
                    a = b[c + 8 >> 2] | 0;
                    d = b[c + 12 >> 2] | 0;

                    if ((d | 0) == (a | 0)) {
                      b[5829] = b[5829] & ~(1 << e);
                      break;
                    } else {
                      b[a + 12 >> 2] = d;
                      b[d + 8 >> 2] = a;
                      break;
                    }
                  } else {
                    g = b[c + 24 >> 2] | 0;
                    a = b[c + 12 >> 2] | 0;

                    do { if ((a | 0) == (c | 0)) {
                      d = c + 16 | 0;
                      e = d + 4 | 0;
                      a = b[e >> 2] | 0;

                      if (!a) {
                        a = b[d >> 2] | 0;

                        if (!a) {
                          a = 0;
                          break;
                        }
                      } else { d = e; }

                      while (1) {
                        f = a + 20 | 0;
                        e = b[f >> 2] | 0;

                        if (!e) {
                          f = a + 16 | 0;
                          e = b[f >> 2] | 0;
                          if (!e) { break; }else {
                            a = e;
                            d = f;
                          }
                        } else {
                          a = e;
                          d = f;
                        }
                      }

                      b[d >> 2] = 0;
                    } else {
                      v = b[c + 8 >> 2] | 0;
                      b[v + 12 >> 2] = a;
                      b[a + 8 >> 2] = v;
                    } } while (0);

                    if (!g) { break; }
                    d = b[c + 28 >> 2] | 0;
                    e = 23620 + (d << 2) | 0;

                    do { if ((b[e >> 2] | 0) != (c | 0)) {
                      v = g + 16 | 0;
                      b[((b[v >> 2] | 0) == (c | 0) ? v : g + 20 | 0) >> 2] = a;
                      if (!a) { break h; }
                    } else {
                      b[e >> 2] = a;
                      if (a | 0) { break; }
                      b[5830] = b[5830] & ~(1 << d);
                      break h;
                    } } while (0);

                    b[a + 24 >> 2] = g;
                    d = c + 16 | 0;
                    e = b[d >> 2] | 0;

                    if (e | 0) {
                      b[a + 16 >> 2] = e;
                      b[e + 24 >> 2] = a;
                    }

                    d = b[d + 4 >> 2] | 0;
                    if (!d) { break; }
                    b[a + 20 >> 2] = d;
                    b[d + 24 >> 2] = a;
                  } } while (0);

                  c = c + h | 0;
                  f = h + i | 0;
                } else { f = i; }

                c = c + 4 | 0;
                b[c >> 2] = b[c >> 2] & -2;
                b[k + 4 >> 2] = f | 1;
                b[k + f >> 2] = f;
                c = f >>> 3;

                if (f >>> 0 < 256) {
                  d = 23356 + (c << 1 << 2) | 0;
                  a = b[5829] | 0;
                  c = 1 << c;

                  if (!(a & c)) {
                    b[5829] = a | c;
                    c = d;
                    a = d + 8 | 0;
                  } else {
                    a = d + 8 | 0;
                    c = b[a >> 2] | 0;
                  }

                  b[a >> 2] = k;
                  b[c + 12 >> 2] = k;
                  b[k + 8 >> 2] = c;
                  b[k + 12 >> 2] = d;
                  break;
                }

                c = f >>> 8;

                do { if (!c) { e = 0; }else {
                  if (f >>> 0 > 16777215) {
                    e = 31;
                    break;
                  }

                  u = (c + 1048320 | 0) >>> 16 & 8;
                  v = c << u;
                  t = (v + 520192 | 0) >>> 16 & 4;
                  v = v << t;
                  e = (v + 245760 | 0) >>> 16 & 2;
                  e = 14 - (t | u | e) + (v << e >>> 15) | 0;
                  e = f >>> (e + 7 | 0) & 1 | e << 1;
                } } while (0);

                c = 23620 + (e << 2) | 0;
                b[k + 28 >> 2] = e;
                a = k + 16 | 0;
                b[a + 4 >> 2] = 0;
                b[a >> 2] = 0;
                a = b[5830] | 0;
                d = 1 << e;

                if (!(a & d)) {
                  b[5830] = a | d;
                  b[c >> 2] = k;
                  b[k + 24 >> 2] = c;
                  b[k + 12 >> 2] = k;
                  b[k + 8 >> 2] = k;
                  break;
                }

                c = b[c >> 2] | 0;

                i: do { if ((b[c + 4 >> 2] & -8 | 0) != (f | 0)) {
                  e = f << ((e | 0) == 31 ? 0 : 25 - (e >>> 1) | 0);

                  while (1) {
                    d = c + 16 + (e >>> 31 << 2) | 0;
                    a = b[d >> 2] | 0;
                    if (!a) { break; }

                    if ((b[a + 4 >> 2] & -8 | 0) == (f | 0)) {
                      c = a;
                      break i;
                    } else {
                      e = e << 1;
                      c = a;
                    }
                  }

                  b[d >> 2] = k;
                  b[k + 24 >> 2] = c;
                  b[k + 12 >> 2] = k;
                  b[k + 8 >> 2] = k;
                  break g;
                } } while (0);

                u = c + 8 | 0;
                v = b[u >> 2] | 0;
                b[v + 12 >> 2] = k;
                b[u >> 2] = k;
                b[k + 8 >> 2] = v;
                b[k + 12 >> 2] = c;
                b[k + 24 >> 2] = 0;
              } } while (0);

              v = l + 8 | 0;
              S = w;
              return v | 0;
            }

            c = 23764;

            while (1) {
              a = b[c >> 2] | 0;
              if (a >>> 0 <= j >>> 0 ? (v = a + (b[c + 4 >> 2] | 0) | 0, v >>> 0 > j >>> 0) : 0) { break; }
              c = b[c + 8 >> 2] | 0;
            }

            f = v + -47 | 0;
            a = f + 8 | 0;
            a = f + ((a & 7 | 0) == 0 ? 0 : 0 - a & 7) | 0;
            f = j + 16 | 0;
            a = a >>> 0 < f >>> 0 ? j : a;
            c = a + 8 | 0;
            d = h + -40 | 0;
            t = g + 8 | 0;
            t = (t & 7 | 0) == 0 ? 0 : 0 - t & 7;
            u = g + t | 0;
            t = d - t | 0;
            b[5835] = u;
            b[5832] = t;
            b[u + 4 >> 2] = t | 1;
            b[g + d + 4 >> 2] = 40;
            b[5836] = b[5951];
            d = a + 4 | 0;
            b[d >> 2] = 27;
            b[c >> 2] = b[5941];
            b[c + 4 >> 2] = b[5942];
            b[c + 8 >> 2] = b[5943];
            b[c + 12 >> 2] = b[5944];
            b[5941] = g;
            b[5942] = h;
            b[5944] = 0;
            b[5943] = c;
            c = a + 24 | 0;

            do {
              u = c;
              c = c + 4 | 0;
              b[c >> 2] = 7;
            } while ((u + 8 | 0) >>> 0 < v >>> 0);

            if ((a | 0) != (j | 0)) {
              g = a - j | 0;
              b[d >> 2] = b[d >> 2] & -2;
              b[j + 4 >> 2] = g | 1;
              b[a >> 2] = g;
              c = g >>> 3;

              if (g >>> 0 < 256) {
                d = 23356 + (c << 1 << 2) | 0;
                a = b[5829] | 0;
                c = 1 << c;

                if (!(a & c)) {
                  b[5829] = a | c;
                  c = d;
                  a = d + 8 | 0;
                } else {
                  a = d + 8 | 0;
                  c = b[a >> 2] | 0;
                }

                b[a >> 2] = j;
                b[c + 12 >> 2] = j;
                b[j + 8 >> 2] = c;
                b[j + 12 >> 2] = d;
                break;
              }

              c = g >>> 8;
              if (c) {
                if (g >>> 0 > 16777215) { e = 31; }else {
                  u = (c + 1048320 | 0) >>> 16 & 8;
                  v = c << u;
                  t = (v + 520192 | 0) >>> 16 & 4;
                  v = v << t;
                  e = (v + 245760 | 0) >>> 16 & 2;
                  e = 14 - (t | u | e) + (v << e >>> 15) | 0;
                  e = g >>> (e + 7 | 0) & 1 | e << 1;
                }
              } else { e = 0; }
              d = 23620 + (e << 2) | 0;
              b[j + 28 >> 2] = e;
              b[j + 20 >> 2] = 0;
              b[f >> 2] = 0;
              c = b[5830] | 0;
              a = 1 << e;

              if (!(c & a)) {
                b[5830] = c | a;
                b[d >> 2] = j;
                b[j + 24 >> 2] = d;
                b[j + 12 >> 2] = j;
                b[j + 8 >> 2] = j;
                break;
              }

              c = b[d >> 2] | 0;

              j: do { if ((b[c + 4 >> 2] & -8 | 0) != (g | 0)) {
                e = g << ((e | 0) == 31 ? 0 : 25 - (e >>> 1) | 0);

                while (1) {
                  d = c + 16 + (e >>> 31 << 2) | 0;
                  a = b[d >> 2] | 0;
                  if (!a) { break; }

                  if ((b[a + 4 >> 2] & -8 | 0) == (g | 0)) {
                    c = a;
                    break j;
                  } else {
                    e = e << 1;
                    c = a;
                  }
                }

                b[d >> 2] = j;
                b[j + 24 >> 2] = c;
                b[j + 12 >> 2] = j;
                b[j + 8 >> 2] = j;
                break f;
              } } while (0);

              u = c + 8 | 0;
              v = b[u >> 2] | 0;
              b[v + 12 >> 2] = j;
              b[u >> 2] = j;
              b[j + 8 >> 2] = v;
              b[j + 12 >> 2] = c;
              b[j + 24 >> 2] = 0;
            }
          } else {
            v = b[5833] | 0;
            if ((v | 0) == 0 | g >>> 0 < v >>> 0) { b[5833] = g; }
            b[5941] = g;
            b[5942] = h;
            b[5944] = 0;
            b[5838] = b[5947];
            b[5837] = -1;
            b[5842] = 23356;
            b[5841] = 23356;
            b[5844] = 23364;
            b[5843] = 23364;
            b[5846] = 23372;
            b[5845] = 23372;
            b[5848] = 23380;
            b[5847] = 23380;
            b[5850] = 23388;
            b[5849] = 23388;
            b[5852] = 23396;
            b[5851] = 23396;
            b[5854] = 23404;
            b[5853] = 23404;
            b[5856] = 23412;
            b[5855] = 23412;
            b[5858] = 23420;
            b[5857] = 23420;
            b[5860] = 23428;
            b[5859] = 23428;
            b[5862] = 23436;
            b[5861] = 23436;
            b[5864] = 23444;
            b[5863] = 23444;
            b[5866] = 23452;
            b[5865] = 23452;
            b[5868] = 23460;
            b[5867] = 23460;
            b[5870] = 23468;
            b[5869] = 23468;
            b[5872] = 23476;
            b[5871] = 23476;
            b[5874] = 23484;
            b[5873] = 23484;
            b[5876] = 23492;
            b[5875] = 23492;
            b[5878] = 23500;
            b[5877] = 23500;
            b[5880] = 23508;
            b[5879] = 23508;
            b[5882] = 23516;
            b[5881] = 23516;
            b[5884] = 23524;
            b[5883] = 23524;
            b[5886] = 23532;
            b[5885] = 23532;
            b[5888] = 23540;
            b[5887] = 23540;
            b[5890] = 23548;
            b[5889] = 23548;
            b[5892] = 23556;
            b[5891] = 23556;
            b[5894] = 23564;
            b[5893] = 23564;
            b[5896] = 23572;
            b[5895] = 23572;
            b[5898] = 23580;
            b[5897] = 23580;
            b[5900] = 23588;
            b[5899] = 23588;
            b[5902] = 23596;
            b[5901] = 23596;
            b[5904] = 23604;
            b[5903] = 23604;
            v = h + -40 | 0;
            t = g + 8 | 0;
            t = (t & 7 | 0) == 0 ? 0 : 0 - t & 7;
            u = g + t | 0;
            t = v - t | 0;
            b[5835] = u;
            b[5832] = t;
            b[u + 4 >> 2] = t | 1;
            b[g + v + 4 >> 2] = 40;
            b[5836] = b[5951];
          } } while (0);

          c = b[5832] | 0;

          if (c >>> 0 > m >>> 0) {
            t = c - m | 0;
            b[5832] = t;
            v = b[5835] | 0;
            u = v + m | 0;
            b[5835] = u;
            b[u + 4 >> 2] = t | 1;
            b[v + 4 >> 2] = m | 3;
            v = v + 8 | 0;
            S = w;
            return v | 0;
          }
        }

        v = Tc() | 0;
        b[v >> 2] = 12;
        v = 0;
        S = w;
        return v | 0;
      }

      function Xc(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0;
        if (!a) { return; }
        d = a + -8 | 0;
        f = b[5833] | 0;
        a = b[a + -4 >> 2] | 0;
        c = a & -8;
        j = d + c | 0;

        do { if (!(a & 1)) {
          e = b[d >> 2] | 0;
          if (!(a & 3)) { return; }
          h = d + (0 - e) | 0;
          g = e + c | 0;
          if (h >>> 0 < f >>> 0) { return; }

          if ((b[5834] | 0) == (h | 0)) {
            a = j + 4 | 0;
            c = b[a >> 2] | 0;

            if ((c & 3 | 0) != 3) {
              i = h;
              c = g;
              break;
            }

            b[5831] = g;
            b[a >> 2] = c & -2;
            b[h + 4 >> 2] = g | 1;
            b[h + g >> 2] = g;
            return;
          }

          d = e >>> 3;

          if (e >>> 0 < 256) {
            a = b[h + 8 >> 2] | 0;
            c = b[h + 12 >> 2] | 0;

            if ((c | 0) == (a | 0)) {
              b[5829] = b[5829] & ~(1 << d);
              i = h;
              c = g;
              break;
            } else {
              b[a + 12 >> 2] = c;
              b[c + 8 >> 2] = a;
              i = h;
              c = g;
              break;
            }
          }

          f = b[h + 24 >> 2] | 0;
          a = b[h + 12 >> 2] | 0;

          do { if ((a | 0) == (h | 0)) {
            c = h + 16 | 0;
            d = c + 4 | 0;
            a = b[d >> 2] | 0;

            if (!a) {
              a = b[c >> 2] | 0;

              if (!a) {
                a = 0;
                break;
              }
            } else { c = d; }

            while (1) {
              e = a + 20 | 0;
              d = b[e >> 2] | 0;

              if (!d) {
                e = a + 16 | 0;
                d = b[e >> 2] | 0;
                if (!d) { break; }else {
                  a = d;
                  c = e;
                }
              } else {
                a = d;
                c = e;
              }
            }

            b[c >> 2] = 0;
          } else {
            i = b[h + 8 >> 2] | 0;
            b[i + 12 >> 2] = a;
            b[a + 8 >> 2] = i;
          } } while (0);

          if (f) {
            c = b[h + 28 >> 2] | 0;
            d = 23620 + (c << 2) | 0;

            if ((b[d >> 2] | 0) == (h | 0)) {
              b[d >> 2] = a;

              if (!a) {
                b[5830] = b[5830] & ~(1 << c);
                i = h;
                c = g;
                break;
              }
            } else {
              i = f + 16 | 0;
              b[((b[i >> 2] | 0) == (h | 0) ? i : f + 20 | 0) >> 2] = a;

              if (!a) {
                i = h;
                c = g;
                break;
              }
            }

            b[a + 24 >> 2] = f;
            c = h + 16 | 0;
            d = b[c >> 2] | 0;

            if (d | 0) {
              b[a + 16 >> 2] = d;
              b[d + 24 >> 2] = a;
            }

            c = b[c + 4 >> 2] | 0;

            if (c) {
              b[a + 20 >> 2] = c;
              b[c + 24 >> 2] = a;
              i = h;
              c = g;
            } else {
              i = h;
              c = g;
            }
          } else {
            i = h;
            c = g;
          }
        } else {
          i = d;
          h = d;
        } } while (0);

        if (h >>> 0 >= j >>> 0) { return; }
        a = j + 4 | 0;
        e = b[a >> 2] | 0;
        if (!(e & 1)) { return; }

        if (!(e & 2)) {
          if ((b[5835] | 0) == (j | 0)) {
            j = (b[5832] | 0) + c | 0;
            b[5832] = j;
            b[5835] = i;
            b[i + 4 >> 2] = j | 1;
            if ((i | 0) != (b[5834] | 0)) { return; }
            b[5834] = 0;
            b[5831] = 0;
            return;
          }

          if ((b[5834] | 0) == (j | 0)) {
            j = (b[5831] | 0) + c | 0;
            b[5831] = j;
            b[5834] = h;
            b[i + 4 >> 2] = j | 1;
            b[h + j >> 2] = j;
            return;
          }

          f = (e & -8) + c | 0;
          d = e >>> 3;

          do { if (e >>> 0 < 256) {
            c = b[j + 8 >> 2] | 0;
            a = b[j + 12 >> 2] | 0;

            if ((a | 0) == (c | 0)) {
              b[5829] = b[5829] & ~(1 << d);
              break;
            } else {
              b[c + 12 >> 2] = a;
              b[a + 8 >> 2] = c;
              break;
            }
          } else {
            g = b[j + 24 >> 2] | 0;
            a = b[j + 12 >> 2] | 0;

            do { if ((a | 0) == (j | 0)) {
              c = j + 16 | 0;
              d = c + 4 | 0;
              a = b[d >> 2] | 0;

              if (!a) {
                a = b[c >> 2] | 0;

                if (!a) {
                  d = 0;
                  break;
                }
              } else { c = d; }

              while (1) {
                e = a + 20 | 0;
                d = b[e >> 2] | 0;

                if (!d) {
                  e = a + 16 | 0;
                  d = b[e >> 2] | 0;
                  if (!d) { break; }else {
                    a = d;
                    c = e;
                  }
                } else {
                  a = d;
                  c = e;
                }
              }

              b[c >> 2] = 0;
              d = a;
            } else {
              d = b[j + 8 >> 2] | 0;
              b[d + 12 >> 2] = a;
              b[a + 8 >> 2] = d;
              d = a;
            } } while (0);

            if (g | 0) {
              a = b[j + 28 >> 2] | 0;
              c = 23620 + (a << 2) | 0;

              if ((b[c >> 2] | 0) == (j | 0)) {
                b[c >> 2] = d;

                if (!d) {
                  b[5830] = b[5830] & ~(1 << a);
                  break;
                }
              } else {
                e = g + 16 | 0;
                b[((b[e >> 2] | 0) == (j | 0) ? e : g + 20 | 0) >> 2] = d;
                if (!d) { break; }
              }

              b[d + 24 >> 2] = g;
              a = j + 16 | 0;
              c = b[a >> 2] | 0;

              if (c | 0) {
                b[d + 16 >> 2] = c;
                b[c + 24 >> 2] = d;
              }

              a = b[a + 4 >> 2] | 0;

              if (a | 0) {
                b[d + 20 >> 2] = a;
                b[a + 24 >> 2] = d;
              }
            }
          } } while (0);

          b[i + 4 >> 2] = f | 1;
          b[h + f >> 2] = f;

          if ((i | 0) == (b[5834] | 0)) {
            b[5831] = f;
            return;
          }
        } else {
          b[a >> 2] = e & -2;
          b[i + 4 >> 2] = c | 1;
          b[h + c >> 2] = c;
          f = c;
        }

        a = f >>> 3;

        if (f >>> 0 < 256) {
          d = 23356 + (a << 1 << 2) | 0;
          c = b[5829] | 0;
          a = 1 << a;

          if (!(c & a)) {
            b[5829] = c | a;
            a = d;
            c = d + 8 | 0;
          } else {
            c = d + 8 | 0;
            a = b[c >> 2] | 0;
          }

          b[c >> 2] = i;
          b[a + 12 >> 2] = i;
          b[i + 8 >> 2] = a;
          b[i + 12 >> 2] = d;
          return;
        }

        a = f >>> 8;
        if (a) {
          if (f >>> 0 > 16777215) { e = 31; }else {
            h = (a + 1048320 | 0) >>> 16 & 8;
            j = a << h;
            g = (j + 520192 | 0) >>> 16 & 4;
            j = j << g;
            e = (j + 245760 | 0) >>> 16 & 2;
            e = 14 - (g | h | e) + (j << e >>> 15) | 0;
            e = f >>> (e + 7 | 0) & 1 | e << 1;
          }
        } else { e = 0; }
        a = 23620 + (e << 2) | 0;
        b[i + 28 >> 2] = e;
        b[i + 20 >> 2] = 0;
        b[i + 16 >> 2] = 0;
        c = b[5830] | 0;
        d = 1 << e;

        a: do { if (!(c & d)) {
          b[5830] = c | d;
          b[a >> 2] = i;
          b[i + 24 >> 2] = a;
          b[i + 12 >> 2] = i;
          b[i + 8 >> 2] = i;
        } else {
          a = b[a >> 2] | 0;

          b: do { if ((b[a + 4 >> 2] & -8 | 0) != (f | 0)) {
            e = f << ((e | 0) == 31 ? 0 : 25 - (e >>> 1) | 0);

            while (1) {
              d = a + 16 + (e >>> 31 << 2) | 0;
              c = b[d >> 2] | 0;
              if (!c) { break; }

              if ((b[c + 4 >> 2] & -8 | 0) == (f | 0)) {
                a = c;
                break b;
              } else {
                e = e << 1;
                a = c;
              }
            }

            b[d >> 2] = i;
            b[i + 24 >> 2] = a;
            b[i + 12 >> 2] = i;
            b[i + 8 >> 2] = i;
            break a;
          } } while (0);

          h = a + 8 | 0;
          j = b[h >> 2] | 0;
          b[j + 12 >> 2] = i;
          b[h >> 2] = i;
          b[i + 8 >> 2] = j;
          b[i + 12 >> 2] = a;
          b[i + 24 >> 2] = 0;
        } } while (0);

        j = (b[5837] | 0) + -1 | 0;
        b[5837] = j;
        if (j | 0) { return; }
        a = 23772;

        while (1) {
          a = b[a >> 2] | 0;
          if (!a) { break; }else { a = a + 8 | 0; }
        }

        b[5837] = -1;
        return;
      }

      function Yc(a, c) {
        a = a | 0;
        c = c | 0;
        var d = 0;

        if (a) {
          d = B(c, a) | 0;
          if ((c | a) >>> 0 > 65535) { d = ((d >>> 0) / (a >>> 0) | 0 | 0) == (c | 0) ? d : -1; }
        } else { d = 0; }

        a = Wc(d) | 0;
        if (!a) { return a | 0; }
        if (!(b[a + -4 >> 2] & 3)) { return a | 0; }
        hd(a | 0, 0, d | 0) | 0;
        return a | 0;
      }

      function Zc(a, b, c, d) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        d = d | 0;
        c = a + c >>> 0;
        return (F(b + d + (c >>> 0 < a >>> 0 | 0) >>> 0 | 0), c | 0) | 0;
      }

      function _c(a, b, c, d) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        d = d | 0;
        d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
        return (F(d | 0), a - c >>> 0 | 0) | 0;
      }

      function $c(a) {
        a = a | 0;
        return (a ? 31 - (D(a ^ a - 1) | 0) | 0 : 32) | 0;
      }

      function ad(a, c, d, e, f) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        f = f | 0;
        var g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;
        l = a;
        j = c;
        k = j;
        h = d;
        n = e;
        i = n;

        if (!k) {
          g = (f | 0) != 0;

          if (!i) {
            if (g) {
              b[f >> 2] = (l >>> 0) % (h >>> 0);
              b[f + 4 >> 2] = 0;
            }

            n = 0;
            f = (l >>> 0) / (h >>> 0) >>> 0;
            return (F(n | 0), f) | 0;
          } else {
            if (!g) {
              n = 0;
              f = 0;
              return (F(n | 0), f) | 0;
            }

            b[f >> 2] = a | 0;
            b[f + 4 >> 2] = c & 0;
            n = 0;
            f = 0;
            return (F(n | 0), f) | 0;
          }
        }

        g = (i | 0) == 0;

        do { if (h) {
          if (!g) {
            g = (D(i | 0) | 0) - (D(k | 0) | 0) | 0;

            if (g >>> 0 <= 31) {
              m = g + 1 | 0;
              i = 31 - g | 0;
              c = g - 31 >> 31;
              h = m;
              a = l >>> (m >>> 0) & c | k << i;
              c = k >>> (m >>> 0) & c;
              g = 0;
              i = l << i;
              break;
            }

            if (!f) {
              n = 0;
              f = 0;
              return (F(n | 0), f) | 0;
            }

            b[f >> 2] = a | 0;
            b[f + 4 >> 2] = j | c & 0;
            n = 0;
            f = 0;
            return (F(n | 0), f) | 0;
          }

          g = h - 1 | 0;

          if (g & h | 0) {
            i = (D(h | 0) | 0) + 33 - (D(k | 0) | 0) | 0;
            p = 64 - i | 0;
            m = 32 - i | 0;
            j = m >> 31;
            o = i - 32 | 0;
            c = o >> 31;
            h = i;
            a = m - 1 >> 31 & k >>> (o >>> 0) | (k << m | l >>> (i >>> 0)) & c;
            c = c & k >>> (i >>> 0);
            g = l << p & j;
            i = (k << p | l >>> (o >>> 0)) & j | l << m & i - 33 >> 31;
            break;
          }

          if (f | 0) {
            b[f >> 2] = g & l;
            b[f + 4 >> 2] = 0;
          }

          if ((h | 0) == 1) {
            o = j | c & 0;
            p = a | 0 | 0;
            return (F(o | 0), p) | 0;
          } else {
            p = $c(h | 0) | 0;
            o = k >>> (p >>> 0) | 0;
            p = k << 32 - p | l >>> (p >>> 0) | 0;
            return (F(o | 0), p) | 0;
          }
        } else {
          if (g) {
            if (f | 0) {
              b[f >> 2] = (k >>> 0) % (h >>> 0);
              b[f + 4 >> 2] = 0;
            }

            o = 0;
            p = (k >>> 0) / (h >>> 0) >>> 0;
            return (F(o | 0), p) | 0;
          }

          if (!l) {
            if (f | 0) {
              b[f >> 2] = 0;
              b[f + 4 >> 2] = (k >>> 0) % (i >>> 0);
            }

            o = 0;
            p = (k >>> 0) / (i >>> 0) >>> 0;
            return (F(o | 0), p) | 0;
          }

          g = i - 1 | 0;

          if (!(g & i)) {
            if (f | 0) {
              b[f >> 2] = a | 0;
              b[f + 4 >> 2] = g & k | c & 0;
            }

            o = 0;
            p = k >>> (($c(i | 0) | 0) >>> 0);
            return (F(o | 0), p) | 0;
          }

          g = (D(i | 0) | 0) - (D(k | 0) | 0) | 0;

          if (g >>> 0 <= 30) {
            c = g + 1 | 0;
            i = 31 - g | 0;
            h = c;
            a = k << i | l >>> (c >>> 0);
            c = k >>> (c >>> 0);
            g = 0;
            i = l << i;
            break;
          }

          if (!f) {
            o = 0;
            p = 0;
            return (F(o | 0), p) | 0;
          }

          b[f >> 2] = a | 0;
          b[f + 4 >> 2] = j | c & 0;
          o = 0;
          p = 0;
          return (F(o | 0), p) | 0;
        } } while (0);

        if (!h) {
          k = i;
          j = 0;
          i = 0;
        } else {
          m = d | 0 | 0;
          l = n | e & 0;
          k = Zc(m | 0, l | 0, -1, -1) | 0;
          d = G() | 0;
          j = i;
          i = 0;

          do {
            e = j;
            j = g >>> 31 | j << 1;
            g = i | g << 1;
            e = a << 1 | e >>> 31 | 0;
            n = a >>> 31 | c << 1 | 0;
            _c(k | 0, d | 0, e | 0, n | 0) | 0;
            p = G() | 0;
            o = p >> 31 | ((p | 0) < 0 ? -1 : 0) << 1;
            i = o & 1;
            a = _c(e | 0, n | 0, o & m | 0, (((p | 0) < 0 ? -1 : 0) >> 31 | ((p | 0) < 0 ? -1 : 0) << 1) & l | 0) | 0;
            c = G() | 0;
            h = h - 1 | 0;
          } while ((h | 0) != 0);

          k = j;
          j = 0;
        }

        h = 0;

        if (f | 0) {
          b[f >> 2] = a;
          b[f + 4 >> 2] = c;
        }

        o = (g | 0) >>> 31 | (k | h) << 1 | (h << 1 | g >>> 31) & 0 | j;
        p = (g << 1 | 0 >>> 31) & -2 | i;
        return (F(o | 0), p) | 0;
      }

      function bd(a, c, d, e) {
        a = a | 0;
        c = c | 0;
        d = d | 0;
        e = e | 0;
        var f = 0,
            g = 0;
        g = S;
        S = S + 16 | 0;
        f = g | 0;
        ad(a, c, d, e, f) | 0;
        S = g;
        return (F(b[f + 4 >> 2] | 0), b[f >> 2] | 0) | 0;
      }

      function cd(a, b, c) {
        a = a | 0;
        b = b | 0;
        c = c | 0;

        if ((c | 0) < 32) {
          F(b >>> c | 0);
          return a >>> c | (b & (1 << c) - 1) << 32 - c;
        }

        F(0);
        return b >>> c - 32 | 0;
      }

      function dd(a, b, c) {
        a = a | 0;
        b = b | 0;
        c = c | 0;

        if ((c | 0) < 32) {
          F(b << c | (a & (1 << c) - 1 << 32 - c) >>> 32 - c | 0);
          return a << c;
        }

        F(a << c - 32 | 0);
        return 0;
      }

      function ed(a, b) {
        a = +a;
        b = +b;
        if (a != a) { return +b; }
        if (b != b) { return +a; }
        return +C(+a, +b);
      }

      function fd(a) {
        a = +a;
        return a >= 0.0 ? +p(a + .5) : +A(a - .5);
      }

      function gd(c, d, e) {
        c = c | 0;
        d = d | 0;
        e = e | 0;
        var f = 0,
            g = 0,
            h = 0;

        if ((e | 0) >= 8192) {
          K(c | 0, d | 0, e | 0) | 0;
          return c | 0;
        }

        h = c | 0;
        g = c + e | 0;

        if ((c & 3) == (d & 3)) {
          while (c & 3) {
            if (!e) { return h | 0; }
            a[c >> 0] = a[d >> 0] | 0;
            c = c + 1 | 0;
            d = d + 1 | 0;
            e = e - 1 | 0;
          }

          e = g & -4 | 0;
          f = e - 64 | 0;

          while ((c | 0) <= (f | 0)) {
            b[c >> 2] = b[d >> 2];
            b[c + 4 >> 2] = b[d + 4 >> 2];
            b[c + 8 >> 2] = b[d + 8 >> 2];
            b[c + 12 >> 2] = b[d + 12 >> 2];
            b[c + 16 >> 2] = b[d + 16 >> 2];
            b[c + 20 >> 2] = b[d + 20 >> 2];
            b[c + 24 >> 2] = b[d + 24 >> 2];
            b[c + 28 >> 2] = b[d + 28 >> 2];
            b[c + 32 >> 2] = b[d + 32 >> 2];
            b[c + 36 >> 2] = b[d + 36 >> 2];
            b[c + 40 >> 2] = b[d + 40 >> 2];
            b[c + 44 >> 2] = b[d + 44 >> 2];
            b[c + 48 >> 2] = b[d + 48 >> 2];
            b[c + 52 >> 2] = b[d + 52 >> 2];
            b[c + 56 >> 2] = b[d + 56 >> 2];
            b[c + 60 >> 2] = b[d + 60 >> 2];
            c = c + 64 | 0;
            d = d + 64 | 0;
          }

          while ((c | 0) < (e | 0)) {
            b[c >> 2] = b[d >> 2];
            c = c + 4 | 0;
            d = d + 4 | 0;
          }
        } else {
          e = g - 4 | 0;

          while ((c | 0) < (e | 0)) {
            a[c >> 0] = a[d >> 0] | 0;
            a[c + 1 >> 0] = a[d + 1 >> 0] | 0;
            a[c + 2 >> 0] = a[d + 2 >> 0] | 0;
            a[c + 3 >> 0] = a[d + 3 >> 0] | 0;
            c = c + 4 | 0;
            d = d + 4 | 0;
          }
        }

        while ((c | 0) < (g | 0)) {
          a[c >> 0] = a[d >> 0] | 0;
          c = c + 1 | 0;
          d = d + 1 | 0;
        }

        return h | 0;
      }

      function hd(c, d, e) {
        c = c | 0;
        d = d | 0;
        e = e | 0;
        var f = 0,
            g = 0,
            h = 0,
            i = 0;
        h = c + e | 0;
        d = d & 255;

        if ((e | 0) >= 67) {
          while (c & 3) {
            a[c >> 0] = d;
            c = c + 1 | 0;
          }

          f = h & -4 | 0;
          i = d | d << 8 | d << 16 | d << 24;
          g = f - 64 | 0;

          while ((c | 0) <= (g | 0)) {
            b[c >> 2] = i;
            b[c + 4 >> 2] = i;
            b[c + 8 >> 2] = i;
            b[c + 12 >> 2] = i;
            b[c + 16 >> 2] = i;
            b[c + 20 >> 2] = i;
            b[c + 24 >> 2] = i;
            b[c + 28 >> 2] = i;
            b[c + 32 >> 2] = i;
            b[c + 36 >> 2] = i;
            b[c + 40 >> 2] = i;
            b[c + 44 >> 2] = i;
            b[c + 48 >> 2] = i;
            b[c + 52 >> 2] = i;
            b[c + 56 >> 2] = i;
            b[c + 60 >> 2] = i;
            c = c + 64 | 0;
          }

          while ((c | 0) < (f | 0)) {
            b[c >> 2] = i;
            c = c + 4 | 0;
          }
        }

        while ((c | 0) < (h | 0)) {
          a[c >> 0] = d;
          c = c + 1 | 0;
        }

        return h - e | 0;
      }

      function id(a) {
        a = +a;
        return a >= 0.0 ? +p(a + .5) : +A(a - .5);
      }

      function jd(a) {
        a = a | 0;
        var c = 0,
            d = 0,
            e = 0;
        e = J() | 0;
        d = b[g >> 2] | 0;
        c = d + a | 0;

        if ((a | 0) > 0 & (c | 0) < (d | 0) | (c | 0) < 0) {
          M(c | 0) | 0;
          I(12);
          return -1;
        }

        if ((c | 0) > (e | 0)) { if (!(L(c | 0) | 0)) {
          I(12);
          return -1;
        } }
        b[g >> 2] = c;
        return d | 0;
      } // EMSCRIPTEN_END_FUNCS


      return {
        ___uremdi3: bd,
        _bitshift64Lshr: cd,
        _bitshift64Shl: dd,
        _calloc: Yc,
        _cellAreaKm2: ub,
        _cellAreaM2: vb,
        _cellAreaRads2: tb,
        _compact: Hb,
        _destroyLinkedPolygon: jc,
        _edgeLengthKm: pb,
        _edgeLengthM: qb,
        _emscripten_replace_memory: V,
        _exactEdgeLengthKm: xb,
        _exactEdgeLengthM: yb,
        _exactEdgeLengthRads: wb,
        _experimentalH3ToLocalIj: oc,
        _experimentalLocalIjToH3: pc,
        _free: Xc,
        _geoToH3: Sb,
        _getDestinationH3IndexFromUnidirectionalEdge: cc,
        _getH3IndexesFromUnidirectionalEdge: ec,
        _getH3UnidirectionalEdge: ac,
        _getH3UnidirectionalEdgeBoundary: gc,
        _getH3UnidirectionalEdgesFromHexagon: fc,
        _getOriginH3IndexFromUnidirectionalEdge: bc,
        _getPentagonIndexes: _b,
        _getRes0Indexes: va,
        _h3Distance: qc,
        _h3GetBaseCell: Ab,
        _h3GetFaces: Yb,
        _h3GetResolution: zb,
        _h3IndexesAreNeighbors: $b,
        _h3IsPentagon: Fb,
        _h3IsResClassIII: Kb,
        _h3IsValid: Bb,
        _h3Line: sc,
        _h3LineSize: rc,
        _h3SetToLinkedGeo: ka,
        _h3ToCenterChild: Gb,
        _h3ToChildren: Eb,
        _h3ToGeo: Vb,
        _h3ToGeoBoundary: Wb,
        _h3ToParent: Cb,
        _h3UnidirectionalEdgeIsValid: dc,
        _hexAreaKm2: nb,
        _hexAreaM2: ob,
        _hexRing: ea,
        _i64Subtract: _c,
        _kRing: $,
        _kRingDistances: aa,
        _llvm_minnum_f64: ed,
        _llvm_round_f64: fd,
        _malloc: Wc,
        _maxFaceCount: Xb,
        _maxH3ToChildrenSize: Db,
        _maxKringSize: _,
        _maxPolyfillSize: fa,
        _maxUncompactSize: Jb,
        _memcpy: gd,
        _memset: hd,
        _numHexagons: rb,
        _pentagonIndexCount: Zb,
        _pointDistKm: jb,
        _pointDistM: kb,
        _pointDistRads: ib,
        _polyfill: ga,
        _res0IndexCount: ua,
        _round: id,
        _sbrk: jd,
        _sizeOfCoordIJ: Ec,
        _sizeOfGeoBoundary: Ac,
        _sizeOfGeoCoord: zc,
        _sizeOfGeoPolygon: Cc,
        _sizeOfGeofence: Bc,
        _sizeOfH3Index: yc,
        _sizeOfLinkedGeoPolygon: Dc,
        _uncompact: Ib,
        establishStackSpace: Z,
        stackAlloc: W,
        stackRestore: Y,
        stackSave: X
      };
    }( // EMSCRIPTEN_END_ASM
    asmGlobalArg, asmLibraryArg, buffer);

    Module["___uremdi3"] = asm["___uremdi3"];

    Module["_bitshift64Lshr"] = asm["_bitshift64Lshr"];

    Module["_bitshift64Shl"] = asm["_bitshift64Shl"];

    Module["_calloc"] = asm["_calloc"];

    Module["_cellAreaKm2"] = asm["_cellAreaKm2"];

    Module["_cellAreaM2"] = asm["_cellAreaM2"];

    Module["_cellAreaRads2"] = asm["_cellAreaRads2"];

    Module["_compact"] = asm["_compact"];

    Module["_destroyLinkedPolygon"] = asm["_destroyLinkedPolygon"];

    Module["_edgeLengthKm"] = asm["_edgeLengthKm"];

    Module["_edgeLengthM"] = asm["_edgeLengthM"];

    var _emscripten_replace_memory = Module["_emscripten_replace_memory"] = asm["_emscripten_replace_memory"];

    Module["_exactEdgeLengthKm"] = asm["_exactEdgeLengthKm"];

    Module["_exactEdgeLengthM"] = asm["_exactEdgeLengthM"];

    Module["_exactEdgeLengthRads"] = asm["_exactEdgeLengthRads"];

    Module["_experimentalH3ToLocalIj"] = asm["_experimentalH3ToLocalIj"];

    Module["_experimentalLocalIjToH3"] = asm["_experimentalLocalIjToH3"];

    Module["_free"] = asm["_free"];

    Module["_geoToH3"] = asm["_geoToH3"];

    Module["_getDestinationH3IndexFromUnidirectionalEdge"] = asm["_getDestinationH3IndexFromUnidirectionalEdge"];

    Module["_getH3IndexesFromUnidirectionalEdge"] = asm["_getH3IndexesFromUnidirectionalEdge"];

    Module["_getH3UnidirectionalEdge"] = asm["_getH3UnidirectionalEdge"];

    Module["_getH3UnidirectionalEdgeBoundary"] = asm["_getH3UnidirectionalEdgeBoundary"];

    Module["_getH3UnidirectionalEdgesFromHexagon"] = asm["_getH3UnidirectionalEdgesFromHexagon"];

    Module["_getOriginH3IndexFromUnidirectionalEdge"] = asm["_getOriginH3IndexFromUnidirectionalEdge"];

    Module["_getPentagonIndexes"] = asm["_getPentagonIndexes"];

    Module["_getRes0Indexes"] = asm["_getRes0Indexes"];

    Module["_h3Distance"] = asm["_h3Distance"];

    Module["_h3GetBaseCell"] = asm["_h3GetBaseCell"];

    Module["_h3GetFaces"] = asm["_h3GetFaces"];

    Module["_h3GetResolution"] = asm["_h3GetResolution"];

    Module["_h3IndexesAreNeighbors"] = asm["_h3IndexesAreNeighbors"];

    Module["_h3IsPentagon"] = asm["_h3IsPentagon"];

    Module["_h3IsResClassIII"] = asm["_h3IsResClassIII"];

    Module["_h3IsValid"] = asm["_h3IsValid"];

    Module["_h3Line"] = asm["_h3Line"];

    Module["_h3LineSize"] = asm["_h3LineSize"];

    Module["_h3SetToLinkedGeo"] = asm["_h3SetToLinkedGeo"];

    Module["_h3ToCenterChild"] = asm["_h3ToCenterChild"];

    Module["_h3ToChildren"] = asm["_h3ToChildren"];

    Module["_h3ToGeo"] = asm["_h3ToGeo"];

    Module["_h3ToGeoBoundary"] = asm["_h3ToGeoBoundary"];

    Module["_h3ToParent"] = asm["_h3ToParent"];

    Module["_h3UnidirectionalEdgeIsValid"] = asm["_h3UnidirectionalEdgeIsValid"];

    Module["_hexAreaKm2"] = asm["_hexAreaKm2"];

    Module["_hexAreaM2"] = asm["_hexAreaM2"];

    Module["_hexRing"] = asm["_hexRing"];

    Module["_i64Subtract"] = asm["_i64Subtract"];

    Module["_kRing"] = asm["_kRing"];

    Module["_kRingDistances"] = asm["_kRingDistances"];

    Module["_llvm_minnum_f64"] = asm["_llvm_minnum_f64"];

    Module["_llvm_round_f64"] = asm["_llvm_round_f64"];

    Module["_malloc"] = asm["_malloc"];

    Module["_maxFaceCount"] = asm["_maxFaceCount"];

    Module["_maxH3ToChildrenSize"] = asm["_maxH3ToChildrenSize"];

    Module["_maxKringSize"] = asm["_maxKringSize"];

    Module["_maxPolyfillSize"] = asm["_maxPolyfillSize"];

    Module["_maxUncompactSize"] = asm["_maxUncompactSize"];

    Module["_memcpy"] = asm["_memcpy"];

    Module["_memset"] = asm["_memset"];

    Module["_numHexagons"] = asm["_numHexagons"];

    Module["_pentagonIndexCount"] = asm["_pentagonIndexCount"];

    Module["_pointDistKm"] = asm["_pointDistKm"];

    Module["_pointDistM"] = asm["_pointDistM"];

    Module["_pointDistRads"] = asm["_pointDistRads"];

    Module["_polyfill"] = asm["_polyfill"];

    Module["_res0IndexCount"] = asm["_res0IndexCount"];

    Module["_round"] = asm["_round"];

    Module["_sbrk"] = asm["_sbrk"];

    Module["_sizeOfCoordIJ"] = asm["_sizeOfCoordIJ"];

    Module["_sizeOfGeoBoundary"] = asm["_sizeOfGeoBoundary"];

    Module["_sizeOfGeoCoord"] = asm["_sizeOfGeoCoord"];

    Module["_sizeOfGeoPolygon"] = asm["_sizeOfGeoPolygon"];

    Module["_sizeOfGeofence"] = asm["_sizeOfGeofence"];

    Module["_sizeOfH3Index"] = asm["_sizeOfH3Index"];

    Module["_sizeOfLinkedGeoPolygon"] = asm["_sizeOfLinkedGeoPolygon"];

    Module["_uncompact"] = asm["_uncompact"];

    Module["establishStackSpace"] = asm["establishStackSpace"];
    var stackAlloc = Module["stackAlloc"] = asm["stackAlloc"];
    var stackRestore = Module["stackRestore"] = asm["stackRestore"];
    var stackSave = Module["stackSave"] = asm["stackSave"];
    Module["asm"] = asm;
    Module["cwrap"] = cwrap;
    Module["setValue"] = setValue;
    Module["getValue"] = getValue;
    Module["getTempRet0"] = getTempRet0;

    if (memoryInitializer) {
      if (!isDataURI(memoryInitializer)) {
        memoryInitializer = locateFile(memoryInitializer);
      }

      if (ENVIRONMENT_IS_NODE || ENVIRONMENT_IS_SHELL) {
        var data = readBinary(memoryInitializer);
        HEAPU8.set(data, GLOBAL_BASE);
      } else {
        addRunDependency();

        var applyMemoryInitializer = function (data) {
          if (data.byteLength) { data = new Uint8Array(data); }
          HEAPU8.set(data, GLOBAL_BASE);
          if (Module["memoryInitializerRequest"]) { delete Module["memoryInitializerRequest"].response; }
          removeRunDependency();
        };

        var doBrowserLoad = function () {
          readAsync(memoryInitializer, applyMemoryInitializer, function () {
            throw "could not load memory initializer " + memoryInitializer;
          });
        };

        var memoryInitializerBytes = tryParseAsDataURI(memoryInitializer);

        if (memoryInitializerBytes) {
          applyMemoryInitializer(memoryInitializerBytes.buffer);
        } else if (Module["memoryInitializerRequest"]) {
          var useRequest = function () {
            var request = Module["memoryInitializerRequest"];
            var response = request.response;

            if (request.status !== 200 && request.status !== 0) {
              var data = tryParseAsDataURI(Module["memoryInitializerRequestURL"]);

              if (data) {
                response = data.buffer;
              } else {
                console.warn("a problem seems to have happened with Module.memoryInitializerRequest, status: " + request.status + ", retrying " + memoryInitializer);
                doBrowserLoad();
                return;
              }
            }

            applyMemoryInitializer(response);
          };

          if (Module["memoryInitializerRequest"].response) {
            setTimeout(useRequest, 0);
          } else {
            Module["memoryInitializerRequest"].addEventListener("load", useRequest);
          }
        } else {
          doBrowserLoad();
        }
      }
    }

    var calledRun;

    dependenciesFulfilled = function runCaller() {
      if (!calledRun) { run(); }
      if (!calledRun) { dependenciesFulfilled = runCaller; }
    };

    function run(args) {

      if (runDependencies > 0) {
        return;
      }

      preRun();
      if (runDependencies > 0) { return; }

      function doRun() {
        if (calledRun) { return; }
        calledRun = true;
        if (ABORT) { return; }
        initRuntime();
        preMain();
        if (Module["onRuntimeInitialized"]) { Module["onRuntimeInitialized"](); }
        postRun();
      }

      if (Module["setStatus"]) {
        Module["setStatus"]("Running...");
        setTimeout(function () {
          setTimeout(function () {
            Module["setStatus"]("");
          }, 1);
          doRun();
        }, 1);
      } else {
        doRun();
      }
    }

    Module["run"] = run;

    function abort(what) {
      if (Module["onAbort"]) {
        Module["onAbort"](what);
      }

      what += "";
      out(what);
      err(what);
      ABORT = true;
      throw "abort(" + what + "). Build with -s ASSERTIONS=1 for more info.";
    }

    Module["abort"] = abort;

    if (Module["preInit"]) {
      if (typeof Module["preInit"] == "function") { Module["preInit"] = [Module["preInit"]]; }

      while (Module["preInit"].length > 0) {
        Module["preInit"].pop()();
      }
    }
    run();
    return libh3;
  }(typeof libh3 === 'object' ? libh3 : {});

  /*
   * Copyright 2018-2019 Uber Technologies, Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *         http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  // Define the C bindings for the h3 library
  // Add some aliases to make the function definitions more intelligible
  var NUMBER = 'number';
  var BOOLEAN = NUMBER;
  var H3_LOWER = NUMBER;
  var H3_UPPER = NUMBER;
  var RESOLUTION = NUMBER;
  var POINTER = NUMBER; // Define the bindings to functions in the C lib. Functions are defined as
  // [name, return type, [arg types]]. You must run `npm run build-emscripten`
  // before new functions added here will be available.

  var BINDINGS = [// The size functions are inserted via build/sizes.h
  ['sizeOfH3Index', NUMBER], ['sizeOfGeoCoord', NUMBER], ['sizeOfGeoBoundary', NUMBER], ['sizeOfGeoPolygon', NUMBER], ['sizeOfGeofence', NUMBER], ['sizeOfLinkedGeoPolygon', NUMBER], ['sizeOfCoordIJ', NUMBER], // The remaining functions are defined in the core lib in h3Api.h
  ['h3IsValid', BOOLEAN, [H3_LOWER, H3_UPPER]], ['geoToH3', H3_LOWER, [NUMBER, NUMBER, RESOLUTION]], ['h3ToGeo', null, [H3_LOWER, H3_UPPER, POINTER]], ['h3ToGeoBoundary', null, [H3_LOWER, H3_UPPER, POINTER]], ['maxKringSize', NUMBER, [NUMBER]], ['kRing', null, [H3_LOWER, H3_UPPER, NUMBER, POINTER]], ['kRingDistances', null, [H3_LOWER, H3_UPPER, NUMBER, POINTER, POINTER]], ['hexRing', null, [H3_LOWER, H3_UPPER, NUMBER, POINTER]], ['maxPolyfillSize', NUMBER, [POINTER, RESOLUTION]], ['polyfill', null, [POINTER, RESOLUTION, POINTER]], ['h3SetToLinkedGeo', null, [POINTER, NUMBER, POINTER]], ['destroyLinkedPolygon', null, [POINTER]], ['compact', NUMBER, [POINTER, POINTER, NUMBER]], ['uncompact', NUMBER, [POINTER, NUMBER, POINTER, NUMBER, RESOLUTION]], ['maxUncompactSize', NUMBER, [POINTER, NUMBER, RESOLUTION]], ['h3IsPentagon', BOOLEAN, [H3_LOWER, H3_UPPER]], ['h3IsResClassIII', BOOLEAN, [H3_LOWER, H3_UPPER]], ['h3GetBaseCell', NUMBER, [H3_LOWER, H3_UPPER]], ['h3GetResolution', NUMBER, [H3_LOWER, H3_UPPER]], ['maxFaceCount', NUMBER, [H3_LOWER, H3_UPPER]], ['h3GetFaces', null, [H3_LOWER, H3_UPPER, POINTER]], ['h3ToParent', H3_LOWER, [H3_LOWER, H3_UPPER, RESOLUTION]], ['h3ToChildren', null, [H3_LOWER, H3_UPPER, RESOLUTION, POINTER]], ['h3ToCenterChild', H3_LOWER, [H3_LOWER, H3_UPPER, RESOLUTION]], ['maxH3ToChildrenSize', NUMBER, [H3_LOWER, H3_UPPER, RESOLUTION]], ['h3IndexesAreNeighbors', BOOLEAN, [H3_LOWER, H3_UPPER, H3_LOWER, H3_UPPER]], ['getH3UnidirectionalEdge', H3_LOWER, [H3_LOWER, H3_UPPER, H3_LOWER, H3_UPPER]], ['getOriginH3IndexFromUnidirectionalEdge', H3_LOWER, [H3_LOWER, H3_UPPER]], ['getDestinationH3IndexFromUnidirectionalEdge', H3_LOWER, [H3_LOWER, H3_UPPER]], ['h3UnidirectionalEdgeIsValid', BOOLEAN, [H3_LOWER, H3_UPPER]], ['getH3IndexesFromUnidirectionalEdge', null, [H3_LOWER, H3_UPPER, POINTER]], ['getH3UnidirectionalEdgesFromHexagon', null, [H3_LOWER, H3_UPPER, POINTER]], ['getH3UnidirectionalEdgeBoundary', null, [H3_LOWER, H3_UPPER, POINTER]], ['h3Distance', NUMBER, [H3_LOWER, H3_UPPER, H3_LOWER, H3_UPPER]], ['h3Line', NUMBER, [H3_LOWER, H3_UPPER, H3_LOWER, H3_UPPER, POINTER]], ['h3LineSize', NUMBER, [H3_LOWER, H3_UPPER, H3_LOWER, H3_UPPER]], ['experimentalH3ToLocalIj', NUMBER, [H3_LOWER, H3_UPPER, H3_LOWER, H3_UPPER, POINTER]], ['experimentalLocalIjToH3', NUMBER, [H3_LOWER, H3_UPPER, POINTER, POINTER]], ['hexAreaM2', NUMBER, [RESOLUTION]], ['hexAreaKm2', NUMBER, [RESOLUTION]], ['edgeLengthM', NUMBER, [RESOLUTION]], ['edgeLengthKm', NUMBER, [RESOLUTION]], ['pointDistM', NUMBER, [POINTER, POINTER]], ['pointDistKm', NUMBER, [POINTER, POINTER]], ['pointDistRads', NUMBER, [POINTER, POINTER]], ['cellAreaM2', NUMBER, [H3_LOWER, H3_UPPER]], ['cellAreaKm2', NUMBER, [H3_LOWER, H3_UPPER]], ['cellAreaRads2', NUMBER, [H3_LOWER, H3_UPPER]], ['exactEdgeLengthM', NUMBER, [H3_LOWER, H3_UPPER]], ['exactEdgeLengthKm', NUMBER, [H3_LOWER, H3_UPPER]], ['exactEdgeLengthRads', NUMBER, [H3_LOWER, H3_UPPER]], ['numHexagons', NUMBER, [RESOLUTION]], ['getRes0Indexes', null, [POINTER]], ['res0IndexCount', NUMBER], ['getPentagonIndexes', null, [NUMBER, POINTER]], ['pentagonIndexCount', NUMBER]];

  /*
   * Copyright 2018-2019 Uber Technologies, Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *         http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var H3 = {}; // Create the bound functions themselves

  BINDINGS.forEach(function bind(def) {
    H3[def[0]] = libh3.cwrap.apply(libh3, def);
  }); // Alias the hexidecimal base for legibility

  var BASE_16 = 16; // ----------------------------------------------------------------------------
  // Byte size imports

  var SZ_INT = 4;
  var SZ_DBL = 8;
  var SZ_H3INDEX = H3.sizeOfH3Index();
  var SZ_GEOCOORD = H3.sizeOfGeoCoord();
  var SZ_GEOBOUNDARY = H3.sizeOfGeoBoundary();
  var SZ_GEOPOLYGON = H3.sizeOfGeoPolygon();
  var SZ_GEOFENCE = H3.sizeOfGeofence();
  H3.sizeOfLinkedGeoPolygon();
  H3.sizeOfCoordIJ(); // ----------------------------------------------------------------------------
  // Utilities and helpers

  /**
   * Validate a resolution, throwing an error if invalid
   * @private
   * @param  {mixed} res Value to validate
   * @throws {Error}     Error if invalid
   */

  function validateRes(res) {
    if (typeof res !== 'number' || res < 0 || res > 15 || Math.floor(res) !== res) {
      throw new Error(("Invalid resolution: " + res));
    }
  }

  var INVALID_HEXIDECIMAL_CHAR = /[^0-9a-fA-F]/;
  /**
   * Convert an H3 index (64-bit hexidecimal string) into a "split long" - a pair of 32-bit ints
   * @private
   * @param  {H3IndexInput} h3Index  H3 index to check
   * @return {number[]}         A two-element array with 32 lower bits and 32 upper bits
   */

  function h3IndexToSplitLong(h3Index) {
    if (Array.isArray(h3Index) && h3Index.length === 2 && Number.isInteger(h3Index[0]) && Number.isInteger(h3Index[1])) {
      return h3Index;
    }

    if (typeof h3Index !== 'string' || INVALID_HEXIDECIMAL_CHAR.test(h3Index)) {
      return [0, 0];
    }

    var upper = parseInt(h3Index.substring(0, h3Index.length - 8), BASE_16);
    var lower = parseInt(h3Index.substring(h3Index.length - 8), BASE_16);
    return [lower, upper];
  }
  /**
   * Convert a 32-bit int to a hexdecimal string
   * @private
   * @param  {number} num  Integer to convert
   * @return {H3Index}     Hexidecimal string
   */

  function hexFrom32Bit(num) {
    if (num >= 0) {
      return num.toString(BASE_16);
    } // Handle negative numbers


    num = num & 0x7fffffff;
    var tempStr = zeroPad(8, num.toString(BASE_16));
    var topNum = (parseInt(tempStr[0], BASE_16) + 8).toString(BASE_16);
    tempStr = topNum + tempStr.substring(1);
    return tempStr;
  }
  /**
   * Get a H3 index from a split long (pair of 32-bit ints)
   * @private
   * @param  {number} lower Lower 32 bits
   * @param  {number} upper Upper 32 bits
   * @return {H3Index}       H3 index
   */


  function splitLongToh3Index(lower, upper) {
    return hexFrom32Bit(upper) + zeroPad(8, hexFrom32Bit(lower));
  }
  /**
   * Zero-pad a string to a given length
   * @private
   * @param  {number} fullLen Target length
   * @param  {string} numStr  String to zero-pad
   * @return {string}         Zero-padded string
   */

  function zeroPad(fullLen, numStr) {
    var numZeroes = fullLen - numStr.length;
    var outStr = '';

    for (var i = 0; i < numZeroes; i++) {
      outStr += '0';
    }

    outStr = outStr + numStr;
    return outStr;
  }
  /**
   * Populate a C-appropriate Geofence struct from a polygon array
   * @private
   * @param  {Array[]} polygonArray Polygon, as an array of coordinate pairs
   * @param  {number}  geofence     C pointer to a Geofence struct
   * @param  {boolean} isGeoJson    Whether coordinates are in [lng, lat] order per GeoJSON spec
   * @return {number}               C pointer to populated Geofence struct
   */


  function polygonArrayToGeofence(polygonArray, geofence, isGeoJson) {
    var numVerts = polygonArray.length;

    var geoCoordArray = libh3._calloc(numVerts, SZ_GEOCOORD); // Support [lng, lat] pairs if GeoJSON is specified


    var latIndex = isGeoJson ? 1 : 0;
    var lngIndex = isGeoJson ? 0 : 1;

    for (var i = 0; i < numVerts * 2; i += 2) {
      libh3.HEAPF64.set([polygonArray[i / 2][latIndex], polygonArray[i / 2][lngIndex]].map(degsToRads), geoCoordArray / SZ_DBL + i);
    }

    libh3.HEAPU32.set([numVerts, geoCoordArray], geofence / SZ_INT);
    return geofence;
  }
  /**
   * Create a C-appropriate GeoPolygon struct from an array of polygons
   * @private
   * @param  {Array[]} coordinates  Array of polygons, each an array of coordinate pairs
   * @param  {boolean} isGeoJson    Whether coordinates are in [lng, lat] order per GeoJSON spec
   * @return {number}               C pointer to populated GeoPolygon struct
   */


  function coordinatesToGeoPolygon(coordinates, isGeoJson) {
    // Any loops beyond the first loop are holes
    var numHoles = coordinates.length - 1;

    var geoPolygon = libh3._calloc(SZ_GEOPOLYGON); // Byte positions within the struct


    var geofenceOffset = 0;
    var numHolesOffset = geofenceOffset + SZ_GEOFENCE;
    var holesOffset = numHolesOffset + SZ_INT; // geofence is first part of struct

    polygonArrayToGeofence(coordinates[0], geoPolygon + geofenceOffset, isGeoJson);
    var holes;

    if (numHoles > 0) {
      holes = libh3._calloc(numHoles, SZ_GEOFENCE);

      for (var i = 0; i < numHoles; i++) {
        polygonArrayToGeofence(coordinates[i + 1], holes + SZ_GEOFENCE * i, isGeoJson);
      }
    }

    libh3.setValue(geoPolygon + numHolesOffset, numHoles, 'i32');
    libh3.setValue(geoPolygon + holesOffset, holes, 'i32');
    return geoPolygon;
  }
  /**
   * Free memory allocated for a GeoPolygon struct. It is an error to access the struct
   * after passing it to this method.
   * @private
   * @return {number} geoPolygon C pointer to populated GeoPolygon struct
   */


  function destroyGeoPolygon(geoPolygon) {
    // Byte positions within the struct
    var geofenceOffset = 0;
    var numHolesOffset = geofenceOffset + SZ_GEOFENCE;
    var holesOffset = numHolesOffset + SZ_INT; // Offset of the geofence vertex array pointer within the Geofence struct

    var geofenceArrayOffset = SZ_INT; // Free the outer vertex array

    libh3._free(libh3.getValue(geoPolygon + geofenceOffset + geofenceArrayOffset, 'i8*')); // Free the vertex array for the holes, if any


    var numHoles = libh3.getValue(geoPolygon + numHolesOffset, 'i32');

    if (numHoles > 0) {
      var holes = libh3.getValue(geoPolygon + holesOffset, 'i32');

      for (var i = 0; i < numHoles; i++) {
        libh3._free(libh3.getValue(holes + SZ_GEOFENCE * i + geofenceArrayOffset, 'i8*'));
      }

      libh3._free(holes);
    }

    libh3._free(geoPolygon);
  }
  /**
   * Read a long value, returning the lower and upper portions as separate 32-bit integers.
   * Because the upper bits are returned via side effect, the argument to this function is
   * intended to be the invocation that caused the side effect, e.g. readLong(H3.getSomeLong())
   * @private
   * @param  {number} invocation Invoked function returning a long value. The actual return
   *                             value of these functions is a 32-bit integer.
   * @return {number}            Long value as a [lower, upper] pair
   */


  function readLong(invocation) {
    // Upper 32-bits of the long set via side-effect
    var upper = libh3.getTempRet0();
    return [invocation, upper];
  }
  /**
   * Read an H3 index from a C return value. As with readLong, the argument to this function
   * is intended to be an invocation, e.g. readH3Index(H3.getSomeAddress()), to help ensure that
   * the temp value storing the upper bits of the long is still set.
   * @private
   * @param  {number} invocation  Invoked function returning a single H3 index
   * @return {H3Index}            H3 index, or null if index was invalid
   */


  function readH3Index(invocation) {
    var ref = readLong(invocation);
    var lower = ref[0];
    var upper = ref[1]; // The lower bits are allowed to be 0s, but if the upper bits are 0
    // this represents an invalid H3 index

    return upper ? splitLongToh3Index(lower, upper) : null;
  }
  /**
   * Read an H3 index from a pointer to C memory.
   * @private
   * @param  {number} cAddress  Pointer to allocated C memory
   * @param {number} offset     Offset, in number of H3 indexes, in case we're
   *                            reading an array
   * @return {H3Index}          H3 index, or null if index was invalid
   */


  function readH3IndexFromPointer(cAddress, offset) {
    if ( offset === void 0 ) offset = 0;

    var lower = libh3.getValue(cAddress + SZ_INT * offset * 2, 'i32');
    var upper = libh3.getValue(cAddress + SZ_INT * (offset * 2 + 1), 'i32'); // The lower bits are allowed to be 0s, but if the upper bits are 0
    // this represents an invalid H3 index

    return upper ? splitLongToh3Index(lower, upper) : null;
  }
  /**
   * Read an array of 64-bit H3 indexes from C and convert to a JS array of
   * H3 index strings
   * @private
   * @param  {number} cAddress    Pointer to C ouput array
   * @param  {number} maxCount    Max number of hexagons in array. Hexagons with
   *                              the value 0 will be skipped, so this isn't
   *                              necessarily the length of the output array.
   * @return {H3Index[]}          Array of H3 indexes
   */


  function readArrayOfHexagons(cAddress, maxCount) {
    var out = [];

    for (var i = 0; i < maxCount; i++) {
      var h3Index = readH3IndexFromPointer(cAddress, i);

      if (h3Index !== null) {
        out.push(h3Index);
      }
    }

    return out;
  }

  function readSingleCoord(cAddress) {
    return radsToDegs(libh3.getValue(cAddress, 'double'));
  }
  /**
   * Read a GeoCoord from C and return a [lat, lng] pair.
   * @private
   * @param  {number} cAddress    Pointer to C struct
   * @return {number[]}           [lat, lng] pair
   */


  function readGeoCoord(cAddress) {
    return [readSingleCoord(cAddress), readSingleCoord(cAddress + SZ_DBL)];
  }
  /**
   * Read a GeoCoord from C and return a GeoJSON-style [lng, lat] pair.
   * @private
   * @param  {number} cAddress    Pointer to C struct
   * @return {number[]}           [lng, lat] pair
   */


  function readGeoCoordGeoJson(cAddress) {
    return [readSingleCoord(cAddress + SZ_DBL), readSingleCoord(cAddress)];
  }
  /**
   * Read the GeoBoundary structure into a list of geo coordinate pairs
   * @private
   * @param {number}  geoBoundary     C pointer to GeoBoundary struct
   * @param {boolean} geoJsonCoords   Whether to provide GeoJSON coordinate order: [lng, lat]
   * @param {boolean} closedLoop      Whether to close the loop
   * @return {Array[]}                Array of geo coordinate pairs
   */


  function readGeoBoundary(geoBoundary, geoJsonCoords, closedLoop) {
    var numVerts = libh3.getValue(geoBoundary, 'i32'); // Note that though numVerts is an int, the coordinate doubles have to be
    // aligned to 8 bytes, hence the 8-byte offset here

    var vertsPos = geoBoundary + SZ_DBL;
    var out = []; // Support [lng, lat] pairs if GeoJSON is specified

    var readCoord = geoJsonCoords ? readGeoCoordGeoJson : readGeoCoord;

    for (var i = 0; i < numVerts * 2; i += 2) {
      out.push(readCoord(vertsPos + SZ_DBL * i));
    }

    if (closedLoop) {
      // Close loop if GeoJSON is specified
      out.push(out[0]);
    }

    return out;
  }
  /**
   * Get the hexagon containing a lat,lon point
   * @static
   * @param  {number} lat Latitude of point
   * @param  {number} lng Longtitude of point
   * @param  {number} res Resolution of hexagons to return
   * @return {H3Index}    H3 index
   */

  function geoToH3(lat, lng, res) {
    var latlng = libh3._malloc(SZ_GEOCOORD); // Slightly more efficient way to set the memory


    libh3.HEAPF64.set([lat, lng].map(degsToRads), latlng / SZ_DBL); // Read value as a split long

    var h3Index = readH3Index(H3.geoToH3(latlng, res));

    libh3._free(latlng);

    return h3Index;
  }
  /**
   * Get the lat,lon center of a given hexagon
   * @static
   * @param  {H3IndexInput} h3Index  H3 index
   * @return {number[]}         Point as a [lat, lng] pair
   */

  function h3ToGeo(h3Index) {
    var latlng = libh3._malloc(SZ_GEOCOORD);

    var ref = h3IndexToSplitLong(h3Index);
    var lower = ref[0];
    var upper = ref[1];
    H3.h3ToGeo(lower, upper, latlng);
    var out = readGeoCoord(latlng);

    libh3._free(latlng);

    return out;
  }
  /**
   * Get the vertices of a given hexagon (or pentagon), as an array of [lat, lng]
   * points. For pentagons and hexagons on the edge of an icosahedron face, this
   * function may return up to 10 vertices.
   * @static
   * @param  {H3Index} h3Index          H3 index
   * @param {boolean} [formatAsGeoJson] Whether to provide GeoJSON output: [lng, lat], closed loops
   * @return {number[][]}               Array of [lat, lng] pairs
   */

  function h3ToGeoBoundary(h3Index, formatAsGeoJson) {
    var geoBoundary = libh3._malloc(SZ_GEOBOUNDARY);

    var ref = h3IndexToSplitLong(h3Index);
    var lower = ref[0];
    var upper = ref[1];
    H3.h3ToGeoBoundary(lower, upper, geoBoundary);
    var out = readGeoBoundary(geoBoundary, formatAsGeoJson, formatAsGeoJson);

    libh3._free(geoBoundary);

    return out;
  } // ----------------------------------------------------------------------------
  /**
   * Get all hexagons with centers contained in a given polygon. The polygon
   * is specified with GeoJson semantics as an array of loops. Each loop is
   * an array of [lat, lng] pairs (or [lng, lat] if isGeoJson is specified).
   * The first loop is the perimeter of the polygon, and subsequent loops are
   * expected to be holes.
   * @static
   * @param  {number[][] | number[][][]} coordinates
   *                                  Array of loops, or a single loop
   * @param  {number} res             Resolution of hexagons to return
   * @param  {boolean} [isGeoJson]    Whether to expect GeoJson-style [lng, lat]
   *                                  pairs instead of [lat, lng]
   * @return {H3Index[]}              H3 indexes for all hexagons in polygon
   */

  function polyfill(coordinates, res, isGeoJson) {
    validateRes(res);
    isGeoJson = Boolean(isGeoJson); // Guard against empty input

    if (coordinates.length === 0 || coordinates[0].length === 0) {
      return [];
    } // Wrap to expected format if a single loop is provided


    if (typeof coordinates[0][0] === 'number') {
      coordinates = [coordinates];
    }

    var geoPolygon = coordinatesToGeoPolygon(coordinates, isGeoJson);
    var arrayLen = H3.maxPolyfillSize(geoPolygon, res);

    var hexagons = libh3._calloc(arrayLen, SZ_H3INDEX);

    H3.polyfill(geoPolygon, res, hexagons);
    var out = readArrayOfHexagons(hexagons, arrayLen);

    libh3._free(hexagons);

    destroyGeoPolygon(geoPolygon);
    return out;
  }
  /**
   * Convert degrees to radians
   * @static
   * @param  {number} deg Value in degrees
   * @return {number}     Value in radians
   */

  function degsToRads(deg) {
    return deg * Math.PI / 180;
  }
  /**
   * Convert radians to degrees
   * @static
   * @param  {number} rad Value in radians
   * @return {number}     Value in degrees
   */

  function radsToDegs(rad) {
    return rad * 180 / Math.PI;
  }

  var THREE$8 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    BufferAttribute: three$1.BufferAttribute,
    BufferGeometry: three$1.BufferGeometry,
    Color: three$1.Color,
    DoubleSide: three$1.DoubleSide,
    Mesh: three$1.Mesh,
    MeshBasicMaterial: three$1.MeshBasicMaterial,
    MeshLambertMaterial: three$1.MeshLambertMaterial,
    Object3D: three$1.Object3D
  };
  // support multiple method names for backwards threejs compatibility

  var applyMatrix4Fn = new THREE$8.BufferGeometry().applyMatrix4 ? 'applyMatrix4' : 'applyMatrix';
  var HexBinLayerKapsule = index$2({
    props: {
      hexBinPointsData: {
        "default": []
      },
      hexBinPointLat: {
        "default": 'lat'
      },
      hexBinPointLng: {
        "default": 'lng'
      },
      hexBinPointWeight: {
        "default": 1
      },
      hexBinResolution: {
        "default": 4
      },
      // 0-15. Level 0 partitions the earth in 122 (mostly) hexagonal cells. Each subsequent level sub-divides the previous in roughly 7 hexagons.
      hexMargin: {
        "default": 0.2
      },
      // in fraction of diameter
      hexTopCurvatureResolution: {
        "default": 5
      },
      // in angular degrees
      hexTopColor: {
        "default": function _default() {
          return '#ffffaa';
        }
      },
      hexSideColor: {
        "default": function _default() {
          return '#ffffaa';
        }
      },
      hexAltitude: {
        "default": function _default(_ref) {
          var sumWeight = _ref.sumWeight;
          return sumWeight * 0.01;
        }
      },
      // in units of globe radius
      hexBinMerge: {
        "default": false
      },
      // boolean. Whether to merge all hex geometries into a single mesh for rendering performance
      hexTransitionDuration: {
        "default": 1000,
        triggerUpdate: false
      } // ms

    },
    init: function init(threeObj, state) {
      // Clear the scene
      emptyObject(threeObj); // Main three object to manipulate

      state.scene = threeObj;
    },
    update: function update(state) {
      // Accessors
      var latAccessor = index$1(state.hexBinPointLat);
      var lngAccessor = index$1(state.hexBinPointLng);
      var weightAccessor = index$1(state.hexBinPointWeight);
      var altitudeAccessor = index$1(state.hexAltitude);
      var topColorAccessor = index$1(state.hexTopColor);
      var sideColorAccessor = index$1(state.hexSideColor);
      var marginAccessor = index$1(state.hexMargin);
      var byH3Idx = index(state.hexBinPointsData.map(function (d) {
        return _objectSpread2$1(_objectSpread2$1({}, d), {}, {
          h3Idx: geoToH3(latAccessor(d), lngAccessor(d), state.hexBinResolution)
        });
      }), 'h3Idx');
      var hexBins = Object.entries(byH3Idx).map(function (_ref2) {
        var _ref3 = _slicedToArray$5(_ref2, 2),
            h3Idx = _ref3[0],
            points = _ref3[1];

        return {
          h3Idx: h3Idx,
          points: points,
          sumWeight: points.reduce(function (agg, d) {
            return agg + +weightAccessor(d);
          }, 0)
        };
      });
      var hexMaterials = {}; // indexed by color

      var scene = state.hexBinMerge ? new THREE$8.Object3D() : state.scene; // use fake scene if merging hex points

      threeDigest(hexBins, scene, {
        createObj: createObj,
        updateObj: updateObj,
        idAccessor: function idAccessor(d) {
          return d.h3Idx;
        }
      });

      if (state.hexBinMerge) {
        // merge points into a single mesh
        var hexPointsGeometry = !hexBins.length ? new THREE$8.BufferGeometry() : BufferGeometryUtils.mergeBufferGeometries(hexBins.map(function (d) {
          var obj = d.__threeObj;
          d.__threeObj = undefined; // unbind merged points
          // use non-indexed geometry so that groups can be colored separately, otherwise different groups share vertices

          var geom = obj.geometry.toNonIndexed(); // apply mesh world transform to vertices

          obj.updateMatrix();
          geom[applyMatrix4Fn](obj.matrix); // color vertices

          var topColor = new THREE$8.Color(topColorAccessor(d));
          var sideColor = new THREE$8.Color(sideColorAccessor(d));
          var nVertices = geom.attributes.position.count;
          var topFaceIdx = geom.groups[0].count; // starting vertex index of top group

          var colors = new Float32Array(nVertices * 3);

          for (var i = 0, len = nVertices; i < len; i++) {
            var idx = i * 3;
            var c = i >= topFaceIdx ? topColor : sideColor;
            colors[idx] = c.r;
            colors[idx + 1] = c.g;
            colors[idx + 2] = c.b;
          }

          geom.setAttribute('color', new THREE$8.BufferAttribute(colors, 3));
          return geom;
        }));
        var hexPoints = new THREE$8.Mesh(hexPointsGeometry, new THREE$8.MeshBasicMaterial({
          color: 0xffffff,
          vertexColors: true,
          morphTargets: false,
          side: THREE$8.DoubleSide
        }));
        hexPoints.__globeObjType = 'hexBinPoints'; // Add object type

        hexPoints.__data = hexBins; // Attach obj data

        emptyObject(state.scene);
        state.scene.add(hexPoints);
      } //


      function createObj(d) {
        var obj = new THREE$8.Mesh();
        obj.__hexCenter = h3ToGeo(d.h3Idx);
        obj.__hexGeoJson = h3ToGeoBoundary(d.h3Idx, true).reverse(); // correct polygon winding
        // stitch longitudes at the anti-meridian

        var centerLng = obj.__hexCenter[1];

        obj.__hexGeoJson.forEach(function (d) {
          var edgeLng = d[0];

          if (Math.abs(centerLng - edgeLng) > 170) {
            // normalize large lng distances
            d[0] += centerLng > edgeLng ? 360 : -360;
          }
        });

        obj.__globeObjType = 'hexbin'; // Add object type

        return obj;
      }

      function updateObj(obj, d) {
        // compute new geojson with relative margin
        var relNum = function relNum(st, end, rat) {
          return st - (st - end) * rat;
        };

        var margin = Math.max(0, Math.min(1, +marginAccessor(d)));

        var _obj$__hexCenter = _slicedToArray$5(obj.__hexCenter, 2),
            clat = _obj$__hexCenter[0],
            clng = _obj$__hexCenter[1];

        var geoJson = margin === 0 ? obj.__hexGeoJson : obj.__hexGeoJson.map(function (_ref4) {
          var _ref5 = _slicedToArray$5(_ref4, 2),
              elng = _ref5[0],
              elat = _ref5[1];

          return [[elng, clng], [elat, clat]].map(function (_ref6) {
            var _ref7 = _slicedToArray$5(_ref6, 2),
                st = _ref7[0],
                end = _ref7[1];

            return relNum(st, end, margin);
          });
        });
        var topCurvatureResolution = state.hexTopCurvatureResolution;
        obj.geometry = new ConicPolygonBufferGeometry([geoJson], 0, GLOBE_RADIUS, false, true, true, topCurvatureResolution);
        var targetD = {
          alt: +altitudeAccessor(d)
        };

        var applyUpdate = function applyUpdate(td) {
          var _obj$__currentTargetD = obj.__currentTargetD = td,
              alt = _obj$__currentTargetD.alt;

          obj.scale.x = obj.scale.y = obj.scale.z = 1 + alt; // scale according to altitude
        };

        var currentTargetD = obj.__currentTargetD || Object.assign({}, targetD, {
          alt: -1e-3
        });

        if (Object.keys(targetD).some(function (k) {
          return currentTargetD[k] !== targetD[k];
        })) {
          if (state.hexBinMerge || !state.hexTransitionDuration || state.hexTransitionDuration < 0) {
            // set final position
            applyUpdate(targetD);
          } else {
            // animate
            new exports$1.Tween(currentTargetD).to(targetD, state.hexTransitionDuration).easing(exports$1.Easing.Quadratic.InOut).onUpdate(applyUpdate).start();
          }
        }

        if (!state.hexBinMerge) {
          // Update materials on individual hex points
          var sideColor = sideColorAccessor(d);
          var topColor = topColorAccessor(d);
          [sideColor, topColor].forEach(function (color) {
            if (!hexMaterials.hasOwnProperty(color)) {
              var opacity = colorAlpha(color);
              hexMaterials[color] = new THREE$8.MeshLambertMaterial({
                color: colorStr2Hex(color),
                transparent: opacity < 1,
                opacity: opacity,
                side: THREE$8.DoubleSide
              });
            }
          });
          obj.material = [sideColor, topColor].map(function (color) {
            return hexMaterials[color];
          });
        }
      }
    }
  });

  var THREE$7 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    DoubleSide: three$1.DoubleSide,
    Group: three$1.Group,
    Line: three$1.Line,
    LineBasicMaterial: three$1.LineBasicMaterial,
    Mesh: three$1.Mesh,
    MeshBasicMaterial: three$1.MeshBasicMaterial
  };

  var PolygonsLayerKapsule = index$2({
    props: {
      polygonsData: {
        "default": []
      },
      polygonGeoJsonGeometry: {
        "default": 'geometry'
      },
      polygonSideColor: {
        "default": function _default() {
          return '#ffffaa';
        }
      },
      polygonSideMaterial: {},
      polygonCapColor: {
        "default": function _default() {
          return '#ffffaa';
        }
      },
      polygonCapMaterial: {},
      polygonStrokeColor: {},
      polygonAltitude: {
        "default": 0.01
      },
      // in units of globe radius
      polygonCapCurvatureResolution: {
        "default": 5
      },
      // in angular degrees
      polygonsTransitionDuration: {
        "default": 1000,
        triggerUpdate: false
      } // ms

    },
    init: function init(threeObj, state) {
      // Clear the scene
      emptyObject(threeObj); // Main three object to manipulate

      state.scene = threeObj;
    },
    update: function update(state) {
      // Data accessors
      var geoJsonAccessor = index$1(state.polygonGeoJsonGeometry);
      var altitudeAccessor = index$1(state.polygonAltitude);
      var capCurvatureResolutionAccessor = index$1(state.polygonCapCurvatureResolution);
      var capColorAccessor = index$1(state.polygonCapColor);
      var capMaterialAccessor = index$1(state.polygonCapMaterial);
      var sideColorAccessor = index$1(state.polygonSideColor);
      var sideMaterialAccessor = index$1(state.polygonSideMaterial);
      var strokeColorAccessor = index$1(state.polygonStrokeColor);
      var singlePolygons = [];
      state.polygonsData.forEach(function (polygon) {
        var objAttrs = {
          data: polygon,
          capColor: capColorAccessor(polygon),
          capMaterial: capMaterialAccessor(polygon),
          sideColor: sideColorAccessor(polygon),
          sideMaterial: sideMaterialAccessor(polygon),
          strokeColor: strokeColorAccessor(polygon),
          altitude: +altitudeAccessor(polygon),
          capCurvatureResolution: +capCurvatureResolutionAccessor(polygon)
        };
        var geoJson = geoJsonAccessor(polygon);
        var geoId = polygon.__id || "".concat(Math.round(Math.random() * 1e9)); // generate and stamp polygon ids to keep track in digest

        polygon.__id = geoId;

        if (geoJson.type === 'Polygon') {
          singlePolygons.push(_objectSpread2$1({
            id: "".concat(geoId, "_0"),
            coords: geoJson.coordinates
          }, objAttrs));
        } else if (geoJson.type === 'MultiPolygon') {
          singlePolygons.push.apply(singlePolygons, _toConsumableArray$3(geoJson.coordinates.map(function (coords, idx) {
            return _objectSpread2$1({
              id: "".concat(geoId, "_").concat(idx),
              coords: coords
            }, objAttrs);
          })));
        } else {
          console.warn("Unsupported GeoJson geometry type: ".concat(geoJson.type, ". Skipping geometry..."));
        }
      });
      threeDigest(singlePolygons, state.scene, {
        idAccessor: function idAccessor(d) {
          return d.id;
        },
        createObj: function createObj() {
          var obj = new THREE$7.Group();
          obj.__defaultSideMaterial = new THREE$7.MeshBasicMaterial({
            side: THREE$7.DoubleSide,
            depthWrite: true
          });
          obj.__defaultCapMaterial = new THREE$7.MeshBasicMaterial({
            side: THREE$7.DoubleSide,
            depthWrite: true
          }); // conic geometry

          obj.add(new THREE$7.Mesh(undefined, [obj.__defaultSideMaterial, // side material
          obj.__defaultCapMaterial // cap material
          ])); // polygon stroke

          obj.add(new THREE$7.Line(undefined, new THREE$7.LineBasicMaterial()));
          obj.__globeObjType = 'polygon'; // Add object type

          return obj;
        },
        updateObj: function updateObj(obj, _ref) {
          var coords = _ref.coords,
              capColor = _ref.capColor,
              capMaterial = _ref.capMaterial,
              sideColor = _ref.sideColor,
              sideMaterial = _ref.sideMaterial,
              strokeColor = _ref.strokeColor,
              altitude = _ref.altitude,
              capCurvatureResolution = _ref.capCurvatureResolution;

          var _obj$children = _slicedToArray$5(obj.children, 2),
              conicObj = _obj$children[0],
              strokeObj = _obj$children[1]; // hide stroke if no color set


          var addStroke = !!strokeColor;
          strokeObj.visible = addStroke; // regenerate geometries if needed

          !objMatch(conicObj.geometry.parameters || {}, {
            polygonGeoJson: coords,
            curvatureResolution: capCurvatureResolution
          }) && (conicObj.geometry = new ConicPolygonBufferGeometry(coords, 0, GLOBE_RADIUS, false, true, true, capCurvatureResolution));
          addStroke && (!strokeObj.geometry.parameters || strokeObj.geometry.parameters.geoJson.coordinates !== coords || strokeObj.geometry.parameters.resolution !== capCurvatureResolution) && (strokeObj.geometry = new GeoJsonGeometry({
            type: 'Polygon',
            coordinates: coords
          }, GLOBE_RADIUS, capCurvatureResolution)); // replace side/cap materials if defined

          conicObj.material[0] = sideMaterial || obj.__defaultSideMaterial;
          conicObj.material[1] = capMaterial || obj.__defaultCapMaterial; // update default material colors

          [!sideMaterial && sideColor, !capMaterial && capColor].forEach(function (color, materialIdx) {
            if (!color) return; // skip custom materials
            // conic object

            var material = conicObj.material[materialIdx];
            var opacity = colorAlpha(color);
            material.color.set(colorStr2Hex(color));
            material.transparent = opacity < 1;
            material.opacity = opacity;
          });

          if (addStroke) {
            // stroke object
            var material = strokeObj.material;
            var opacity = colorAlpha(strokeColor);
            material.color.set(colorStr2Hex(strokeColor));
            material.transparent = opacity < 1;
            material.opacity = opacity;
          }

          var targetD = {
            alt: altitude
          };

          var applyUpdate = function applyUpdate(td) {
            var _obj$__currentTargetD = obj.__currentTargetD = td,
                alt = _obj$__currentTargetD.alt;

            conicObj.scale.x = conicObj.scale.y = conicObj.scale.z = 1 + alt;
            addStroke && (strokeObj.scale.x = strokeObj.scale.y = strokeObj.scale.z = 1 + alt + 1e-4); // stroke slightly above the conic mesh
          };

          var currentTargetD = obj.__currentTargetD || Object.assign({}, targetD, {
            alt: -1e-3
          });

          if (Object.keys(targetD).some(function (k) {
            return currentTargetD[k] !== targetD[k];
          })) {
            if (!state.polygonsTransitionDuration || state.polygonsTransitionDuration < 0 || currentTargetD.alt === targetD.alt) {
              // set final position
              applyUpdate(targetD);
            } else {
              // animate
              new exports$1.Tween(currentTargetD).to(targetD, state.polygonsTransitionDuration).easing(exports$1.Easing.Quadratic.InOut).onUpdate(applyUpdate).start();
            }
          }
        }
      });
    }
  });

  function objMatch(obj, attrs) {
    var compFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
      return function (a, b) {
        return a === b;
      };
    };
    return Object.entries(attrs).every(function (_ref2) {
      var _ref3 = _slicedToArray$5(_ref2, 2),
          k = _ref3[0],
          v = _ref3[1];

      return obj.hasOwnProperty(k) && compFn(k)(obj[k], v);
    });
  }

  var THREE$6 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    BufferGeometry: three$1.BufferGeometry,
    DoubleSide: three$1.DoubleSide,
    Mesh: three$1.Mesh,
    MeshLambertMaterial: three$1.MeshLambertMaterial
  };

  var HexedPolygonsLayerKapsule = index$2({
    props: {
      hexPolygonsData: {
        "default": []
      },
      hexPolygonGeoJsonGeometry: {
        "default": 'geometry'
      },
      hexPolygonColor: {
        "default": function _default() {
          return '#ffffaa';
        }
      },
      hexPolygonAltitude: {
        "default": 0.001
      },
      // in units of globe radius
      hexPolygonResolution: {
        "default": 3
      },
      // 0-15. Level 0 partitions the earth in 122 (mostly) hexagonal cells. Each subsequent level sub-divides the previous in roughly 7 hexagons.
      hexPolygonMargin: {
        "default": 0.2
      },
      // in fraction of hex diameter
      hexPolygonCurvatureResolution: {
        "default": 5
      },
      // in angular degrees
      hexPolygonsTransitionDuration: {
        "default": 0,
        triggerUpdate: false
      } // ms

    },
    init: function init(threeObj, state) {
      // Clear the scene
      emptyObject(threeObj); // Main three object to manipulate

      state.scene = threeObj;
    },
    update: function update(state) {
      // Accessors
      var geoJsonAccessor = index$1(state.hexPolygonGeoJsonGeometry);
      var colorAccessor = index$1(state.hexPolygonColor);
      var altitudeAccessor = index$1(state.hexPolygonAltitude);
      var resolutionAccessor = index$1(state.hexPolygonResolution);
      var marginAccessor = index$1(state.hexPolygonMargin);
      var curvatureResolutionAccessor = index$1(state.hexPolygonCurvatureResolution);
      threeDigest(state.hexPolygonsData, state.scene, {
        createObj: function createObj(d) {
          var obj = new THREE$6.Mesh(undefined, new THREE$6.MeshLambertMaterial({
            side: THREE$6.DoubleSide
          }));
          obj.__globeObjType = 'hexPolygon'; // Add object type

          return obj;
        },
        updateObj: function updateObj(obj, d) {
          var geoJson = geoJsonAccessor(d);
          var h3Res = resolutionAccessor(d);
          var alt = altitudeAccessor(d);
          var margin = Math.max(0, Math.min(1, +marginAccessor(d)));
          var curvatureResolution = curvatureResolutionAccessor(d); // update material

          var color = colorAccessor(d);
          var opacity = colorAlpha(color);
          obj.material.color.set(colorStr2Hex(color));
          obj.material.transparent = opacity < 1;
          obj.material.opacity = opacity;
          var h3Idxs = [];

          if (geoJson.type === 'Polygon') {
            h3Idxs.push.apply(h3Idxs, _toConsumableArray$3(polyfill(geoJson.coordinates, h3Res, true)));
          } else if (geoJson.type === 'MultiPolygon') {
            geoJson.coordinates.forEach(function (coords) {
              return h3Idxs.push.apply(h3Idxs, _toConsumableArray$3(polyfill(coords, h3Res, true)));
            });
          } else {
            console.warn("Unsupported GeoJson geometry type: ".concat(geoJson.type, ". Skipping geometry..."));
          }

          var hexBins = h3Idxs.map(function (h3Idx) {
            var hexCenter = h3ToGeo(h3Idx);
            var hexGeoJson = h3ToGeoBoundary(h3Idx, true).reverse(); // correct polygon winding
            // stitch longitudes at the anti-meridian

            var centerLng = hexCenter[1];
            hexGeoJson.forEach(function (d) {
              var edgeLng = d[0];

              if (Math.abs(centerLng - edgeLng) > 170) {
                // normalize large lng distances
                d[0] += centerLng > edgeLng ? 360 : -360;
              }
            });
            return {
              h3Idx: h3Idx,
              hexCenter: hexCenter,
              hexGeoJson: hexGeoJson
            };
          });
          var targetD = {
            alt: alt,
            margin: margin,
            curvatureResolution: curvatureResolution
          };

          var applyUpdate = function applyUpdate(td) {
            var _obj$__currentTargetD = obj.__currentTargetD = td,
                alt = _obj$__currentTargetD.alt,
                margin = _obj$__currentTargetD.margin,
                curvatureResolution = _obj$__currentTargetD.curvatureResolution;

            obj.geometry = !hexBins.length ? new THREE$6.BufferGeometry() : BufferGeometryUtils.mergeBufferGeometries(hexBins.map(function (h) {
              // compute new geojson with relative margin
              var relNum = function relNum(st, end, rat) {
                return st - (st - end) * rat;
              };

              var _h$hexCenter = _slicedToArray$5(h.hexCenter, 2),
                  clat = _h$hexCenter[0],
                  clng = _h$hexCenter[1];

              var geoJson = margin === 0 ? h.hexGeoJson : h.hexGeoJson.map(function (_ref) {
                var _ref2 = _slicedToArray$5(_ref, 2),
                    elng = _ref2[0],
                    elat = _ref2[1];

                return [[elng, clng], [elat, clat]].map(function (_ref3) {
                  var _ref4 = _slicedToArray$5(_ref3, 2),
                      st = _ref4[0],
                      end = _ref4[1];

                  return relNum(st, end, margin);
                });
              });
              return new ConicPolygonBufferGeometry([geoJson], GLOBE_RADIUS, GLOBE_RADIUS * (1 + alt), false, true, false, curvatureResolution);
            }));
          };

          var currentTargetD = obj.__currentTargetD || Object.assign({}, targetD, {
            alt: -1e-3
          });

          if (Object.keys(targetD).some(function (k) {
            return currentTargetD[k] !== targetD[k];
          })) {
            if (!state.hexPolygonsTransitionDuration || state.hexPolygonsTransitionDuration < 0) {
              // set final position
              applyUpdate(targetD);
            } else {
              // animate
              new exports$1.Tween(currentTargetD).to(targetD, state.hexPolygonsTransitionDuration).easing(exports$1.Easing.Quadratic.InOut).onUpdate(applyUpdate).start();
            }
          }
        }
      });
    }
  });

  const THREE$2$1 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    Box3: three$1.Box3,
    BufferGeometry: three$1.BufferGeometry,
    Float32BufferAttribute: three$1.Float32BufferAttribute,
    InstancedBufferGeometry: three$1.InstancedBufferGeometry,
    InstancedInterleavedBuffer: three$1.InstancedInterleavedBuffer,
    InterleavedBufferAttribute: three$1.InterleavedBufferAttribute,
    Sphere: three$1.Sphere,
    Vector3: three$1.Vector3,
    WireframeGeometry: three$1.WireframeGeometry
  }; // support multiple method names for backwards threejs compatibility

  var setAttributeFn$1 = new THREE$2$1.BufferGeometry().setAttribute ? 'setAttribute' : 'addAttribute';

  const _box$1 = new THREE$2$1.Box3();

  const _vector = new THREE$2$1.Vector3();

  class LineSegmentsGeometry extends THREE$2$1.InstancedBufferGeometry {
    constructor() {
      super();
      this.type = 'LineSegmentsGeometry';
      const positions = [-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0];
      const uvs = [-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2];
      const index = [0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5];
      this.setIndex(index);
      this[setAttributeFn$1]('position', new THREE$2$1.Float32BufferAttribute(positions, 3));
      this[setAttributeFn$1]('uv', new THREE$2$1.Float32BufferAttribute(uvs, 2));
    }

    applyMatrix4(matrix) {
      const start = this.attributes.instanceStart;
      const end = this.attributes.instanceEnd;

      if (start !== undefined) {
        start.applyMatrix4(matrix);
        end.applyMatrix4(matrix);
        start.needsUpdate = true;
      }

      if (this.boundingBox !== null) {
        this.computeBoundingBox();
      }

      if (this.boundingSphere !== null) {
        this.computeBoundingSphere();
      }

      return this;
    }

    setPositions(array) {
      let lineSegments;

      if (array instanceof Float32Array) {
        lineSegments = array;
      } else if (Array.isArray(array)) {
        lineSegments = new Float32Array(array);
      }

      const instanceBuffer = new THREE$2$1.InstancedInterleavedBuffer(lineSegments, 6, 1); // xyz, xyz

      this[setAttributeFn$1]('instanceStart', new THREE$2$1.InterleavedBufferAttribute(instanceBuffer, 3, 0)); // xyz

      this[setAttributeFn$1]('instanceEnd', new THREE$2$1.InterleavedBufferAttribute(instanceBuffer, 3, 3)); // xyz
      //

      this.computeBoundingBox();
      this.computeBoundingSphere();
      return this;
    }

    setColors(array) {
      let colors;

      if (array instanceof Float32Array) {
        colors = array;
      } else if (Array.isArray(array)) {
        colors = new Float32Array(array);
      }

      const instanceColorBuffer = new THREE$2$1.InstancedInterleavedBuffer(colors, 6, 1); // rgb, rgb

      this[setAttributeFn$1]('instanceColorStart', new THREE$2$1.InterleavedBufferAttribute(instanceColorBuffer, 3, 0)); // rgb

      this[setAttributeFn$1]('instanceColorEnd', new THREE$2$1.InterleavedBufferAttribute(instanceColorBuffer, 3, 3)); // rgb

      return this;
    }

    fromWireframeGeometry(geometry) {
      this.setPositions(geometry.attributes.position.array);
      return this;
    }

    fromEdgesGeometry(geometry) {
      this.setPositions(geometry.attributes.position.array);
      return this;
    }

    fromMesh(mesh) {
      this.fromWireframeGeometry(new THREE$2$1.WireframeGeometry(mesh.geometry)); // set colors, maybe

      return this;
    }

    romLineSegments(lineSegments) {
      const geometry = lineSegments.geometry;

      if (geometry.isGeometry) {
        console.error('LineSegmentsGeometry no longer supports Geometry. Use THREE.BufferGeometry instead.');
        return;
      } else if (geometry.isBufferGeometry) {
        this.setPositions(geometry.attributes.position.array); // assumes non-indexed
      } // set colors, maybe


      return this;
    }

    computeBoundingBox() {
      if (this.boundingBox === null) {
        this.boundingBox = new THREE$2$1.Box3();
      }

      const start = this.attributes.instanceStart;
      const end = this.attributes.instanceEnd;

      if (start !== undefined && end !== undefined) {
        this.boundingBox.setFromBufferAttribute(start);

        _box$1.setFromBufferAttribute(end);

        this.boundingBox.union(_box$1);
      }
    }

    computeBoundingSphere() {
      if (this.boundingSphere === null) {
        this.boundingSphere = new THREE$2$1.Sphere();
      }

      if (this.boundingBox === null) {
        this.computeBoundingBox();
      }

      const start = this.attributes.instanceStart;
      const end = this.attributes.instanceEnd;

      if (start !== undefined && end !== undefined) {
        const center = this.boundingSphere.center;
        this.boundingBox.getCenter(center);
        let maxRadiusSq = 0;

        for (let i = 0, il = start.count; i < il; i++) {
          _vector.fromBufferAttribute(start, i);

          maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(_vector));

          _vector.fromBufferAttribute(end, i);

          maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(_vector));
        }

        this.boundingSphere.radius = Math.sqrt(maxRadiusSq);

        if (isNaN(this.boundingSphere.radius)) {
          console.error('THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.', this);
        }
      }
    }

    toJSON() {// todo
    }

    applyMatrix(matrix) {
      console.warn('THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4().');
      return this.applyMatrix4(matrix);
    }

  }

  LineSegmentsGeometry.prototype.isLineSegmentsGeometry = true;

  /**
   * parameters = {
   *  color: <hex>,
   *  linewidth: <float>,
   *  dashed: <boolean>,
   *  dashScale: <float>,
   *  dashSize: <float>,
   *  dashOffset: <float>,
   *  gapSize: <float>,
   *  resolution: <Vector2>, // to be set by renderer
   * }
   */
  const THREE$1$1 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    ShaderLib: three$1.ShaderLib,
    ShaderMaterial: three$1.ShaderMaterial,
    UniformsLib: three$1.UniformsLib,
    UniformsUtils: three$1.UniformsUtils,
    Vector2: three$1.Vector2
  };
  THREE$1$1.UniformsLib.line = {
    linewidth: {
      value: 1
    },
    resolution: {
      value: new three$1.Vector2(1, 1)
    },
    dashScale: {
      value: 1
    },
    dashSize: {
      value: 1
    },
    dashOffset: {
      value: 0
    },
    gapSize: {
      value: 1
    },
    // todo FIX - maybe change to totalSize
    opacity: {
      value: 1
    }
  };
  THREE$1$1.ShaderLib['line'] = {
    uniforms: THREE$1$1.UniformsUtils.merge([THREE$1$1.UniformsLib.common, THREE$1$1.UniformsLib.fog, THREE$1$1.UniformsLib.line]),
    vertexShader: `
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		varying vec2 vUv;

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			vUv = uv;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec2 ndcStart = clipStart.xy / clipStart.w;
			vec2 ndcEnd = clipEnd.xy / clipEnd.w;

			// direction
			vec2 dir = ndcEnd - ndcStart;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			// perpendicular to dir
			vec2 offset = vec2( dir.y, - dir.x );

			// undo aspect ratio adjustment
			dir.x /= aspect;
			offset.x /= aspect;

			// sign flip
			if ( position.x < 0.0 ) offset *= - 1.0;

			// endcaps
			if ( position.y < 0.0 ) {

				offset += - dir;

			} else if ( position.y > 1.0 ) {

				offset += dir;

			}

			// adjust for linewidth
			offset *= linewidth;

			// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
			offset /= resolution.y;

			// select end
			vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

			// back to clip space
			offset *= clip.w;

			clip.xy += offset;

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,
    fragmentShader: `
		uniform vec3 diffuse;
		uniform float opacity;

		#ifdef USE_DASH

			uniform float dashSize;
			uniform float dashOffset;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		varying vec2 vUv;

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			if ( abs( vUv.y ) > 1.0 ) {

				float a = vUv.x;
				float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
				float len2 = a * a + b * b;

				if ( len2 > 1.0 ) discard;

			}

			vec4 diffuseColor = vec4( diffuse, opacity );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, diffuseColor.a );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`
  };

  class LineMaterial extends THREE$1$1.ShaderMaterial {
    constructor(parameters) {
      super({
        type: 'LineMaterial',
        uniforms: THREE$1$1.UniformsUtils.clone(THREE$1$1.ShaderLib['line'].uniforms),
        vertexShader: THREE$1$1.ShaderLib['line'].vertexShader,
        fragmentShader: THREE$1$1.ShaderLib['line'].fragmentShader,
        clipping: true // required for clipping support

      });
      this.dashed = false;
      Object.defineProperties(this, {
        color: {
          enumerable: true,
          get: function () {
            return this.uniforms.diffuse.value;
          },
          set: function (value) {
            this.uniforms.diffuse.value = value;
          }
        },
        linewidth: {
          enumerable: true,
          get: function () {
            return this.uniforms.linewidth.value;
          },
          set: function (value) {
            this.uniforms.linewidth.value = value;
          }
        },
        dashScale: {
          enumerable: true,
          get: function () {
            return this.uniforms.dashScale.value;
          },
          set: function (value) {
            this.uniforms.dashScale.value = value;
          }
        },
        dashSize: {
          enumerable: true,
          get: function () {
            return this.uniforms.dashSize.value;
          },
          set: function (value) {
            this.uniforms.dashSize.value = value;
          }
        },
        dashOffset: {
          enumerable: true,
          get: function () {
            return this.uniforms.dashOffset.value;
          },
          set: function (value) {
            this.uniforms.dashOffset.value = value;
          }
        },
        gapSize: {
          enumerable: true,
          get: function () {
            return this.uniforms.gapSize.value;
          },
          set: function (value) {
            this.uniforms.gapSize.value = value;
          }
        },
        opacity: {
          enumerable: true,
          get: function () {
            return this.uniforms.opacity.value;
          },
          set: function (value) {
            this.uniforms.opacity.value = value;
          }
        },
        resolution: {
          enumerable: true,
          get: function () {
            return this.uniforms.resolution.value;
          },
          set: function (value) {
            this.uniforms.resolution.value.copy(value);
          }
        },
        alphaToCoverage: {
          enumerable: true,
          get: function () {
            return Boolean('ALPHA_TO_COVERAGE' in this.defines);
          },
          set: function (value) {
            if (Boolean(value) !== Boolean('ALPHA_TO_COVERAGE' in this.defines)) {
              this.needsUpdate = true;
            }

            if (value) {
              this.defines.ALPHA_TO_COVERAGE = '';
              this.extensions.derivatives = true;
            } else {
              delete this.defines.ALPHA_TO_COVERAGE;
              this.extensions.derivatives = false;
            }
          }
        }
      });
      this.setValues(parameters);
    }

  }

  LineMaterial.prototype.isLineMaterial = true;

  const THREE$5 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    Box3: three$1.Box3,
    BufferGeometry: three$1.BufferGeometry,
    InstancedInterleavedBuffer: three$1.InstancedInterleavedBuffer,
    InterleavedBufferAttribute: three$1.InterleavedBufferAttribute,
    Line3: three$1.Line3,
    MathUtils: three$1.MathUtils,
    Matrix4: three$1.Matrix4,
    Mesh: three$1.Mesh,
    Sphere: three$1.Sphere,
    Vector3: three$1.Vector3,
    Vector4: three$1.Vector4
  };

  var setAttributeFn$2 = new THREE$5.BufferGeometry().setAttribute ? 'setAttribute' : 'addAttribute';

  const _start = new THREE$5.Vector3();

  const _end = new THREE$5.Vector3();

  const _start4 = new THREE$5.Vector4();

  const _end4 = new THREE$5.Vector4();

  const _ssOrigin = new THREE$5.Vector4();

  const _ssOrigin3 = new THREE$5.Vector3();

  const _mvMatrix = new THREE$5.Matrix4();

  const _line = new THREE$5.Line3();

  const _closestPoint = new THREE$5.Vector3();

  const _box = new THREE$5.Box3();

  const _sphere = new THREE$5.Sphere();

  const _clipToWorldVector = new THREE$5.Vector4();

  class LineSegments2 extends THREE$5.Mesh {
    constructor(geometry = new LineSegmentsGeometry(), material = new LineMaterial({
      color: Math.random() * 0xffffff
    })) {
      super(geometry, material);
      this.type = 'LineSegments2';
    } // for backwards-compatability, but could be a method of LineSegmentsGeometry...


    computeLineDistances() {
      const geometry = this.geometry;
      const instanceStart = geometry.attributes.instanceStart;
      const instanceEnd = geometry.attributes.instanceEnd;
      const lineDistances = new Float32Array(2 * instanceStart.count);

      for (let i = 0, j = 0, l = instanceStart.count; i < l; i++, j += 2) {
        _start.fromBufferAttribute(instanceStart, i);

        _end.fromBufferAttribute(instanceEnd, i);

        lineDistances[j] = j === 0 ? 0 : lineDistances[j - 1];
        lineDistances[j + 1] = lineDistances[j] + _start.distanceTo(_end);
      }

      const instanceDistanceBuffer = new THREE$5.InstancedInterleavedBuffer(lineDistances, 2, 1); // d0, d1

      geometry[setAttributeFn$2]('instanceDistanceStart', new THREE$5.InterleavedBufferAttribute(instanceDistanceBuffer, 1, 0)); // d0

      geometry[setAttributeFn$2]('instanceDistanceEnd', new THREE$5.InterleavedBufferAttribute(instanceDistanceBuffer, 1, 1)); // d1

      return this;
    }

    raycast(raycaster, intersects) {
      if (raycaster.camera === null) {
        console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2.');
      }

      const threshold = raycaster.params.Line2 !== undefined ? raycaster.params.Line2.threshold || 0 : 0;
      const ray = raycaster.ray;
      const camera = raycaster.camera;
      const projectionMatrix = camera.projectionMatrix;
      const matrixWorld = this.matrixWorld;
      const geometry = this.geometry;
      const material = this.material;
      const resolution = material.resolution;
      const lineWidth = material.linewidth + threshold;
      const instanceStart = geometry.attributes.instanceStart;
      const instanceEnd = geometry.attributes.instanceEnd; // camera forward is negative

      const near = -camera.near; // clip space is [ - 1, 1 ] so multiply by two to get the full
      // width in clip space

      const ssMaxWidth = 2.0 * Math.max(lineWidth / resolution.width, lineWidth / resolution.height); //
      // check if we intersect the sphere bounds

      if (geometry.boundingSphere === null) {
        geometry.computeBoundingSphere();
      }

      _sphere.copy(geometry.boundingSphere).applyMatrix4(matrixWorld);

      const distanceToSphere = Math.max(camera.near, _sphere.distanceToPoint(ray.origin)); // get the w component to scale the world space line width

      _clipToWorldVector.set(0, 0, -distanceToSphere, 1.0).applyMatrix4(camera.projectionMatrix);

      _clipToWorldVector.multiplyScalar(1.0 / _clipToWorldVector.w);

      _clipToWorldVector.applyMatrix4(camera.projectionMatrixInverse); // increase the sphere bounds by the worst case line screen space width


      const sphereMargin = Math.abs(ssMaxWidth / _clipToWorldVector.w) * 0.5;
      _sphere.radius += sphereMargin;

      if (raycaster.ray.intersectsSphere(_sphere) === false) {
        return;
      } //
      // check if we intersect the box bounds


      if (geometry.boundingBox === null) {
        geometry.computeBoundingBox();
      }

      _box.copy(geometry.boundingBox).applyMatrix4(matrixWorld);

      const distanceToBox = Math.max(camera.near, _box.distanceToPoint(ray.origin)); // get the w component to scale the world space line width

      _clipToWorldVector.set(0, 0, -distanceToBox, 1.0).applyMatrix4(camera.projectionMatrix);

      _clipToWorldVector.multiplyScalar(1.0 / _clipToWorldVector.w);

      _clipToWorldVector.applyMatrix4(camera.projectionMatrixInverse); // increase the sphere bounds by the worst case line screen space width


      const boxMargin = Math.abs(ssMaxWidth / _clipToWorldVector.w) * 0.5;
      _box.max.x += boxMargin;
      _box.max.y += boxMargin;
      _box.max.z += boxMargin;
      _box.min.x -= boxMargin;
      _box.min.y -= boxMargin;
      _box.min.z -= boxMargin;

      if (raycaster.ray.intersectsBox(_box) === false) {
        return;
      } //
      // pick a point 1 unit out along the ray to avoid the ray origin
      // sitting at the camera origin which will cause "w" to be 0 when
      // applying the projection matrix.


      ray.at(1, _ssOrigin); // ndc space [ - 1.0, 1.0 ]

      _ssOrigin.w = 1;

      _ssOrigin.applyMatrix4(camera.matrixWorldInverse);

      _ssOrigin.applyMatrix4(projectionMatrix);

      _ssOrigin.multiplyScalar(1 / _ssOrigin.w); // screen space


      _ssOrigin.x *= resolution.x / 2;
      _ssOrigin.y *= resolution.y / 2;
      _ssOrigin.z = 0;

      _ssOrigin3.copy(_ssOrigin);

      _mvMatrix.multiplyMatrices(camera.matrixWorldInverse, matrixWorld);

      for (let i = 0, l = instanceStart.count; i < l; i++) {
        _start4.fromBufferAttribute(instanceStart, i);

        _end4.fromBufferAttribute(instanceEnd, i);

        _start.w = 1;
        _end.w = 1; // camera space

        _start4.applyMatrix4(_mvMatrix);

        _end4.applyMatrix4(_mvMatrix); // skip the segment if it's entirely behind the camera


        var isBehindCameraNear = _start4.z > near && _end4.z > near;

        if (isBehindCameraNear) {
          continue;
        } // trim the segment if it extends behind camera near


        if (_start4.z > near) {
          const deltaDist = _start4.z - _end4.z;
          const t = (_start4.z - near) / deltaDist;

          _start4.lerp(_end4, t);
        } else if (_end4.z > near) {
          const deltaDist = _end4.z - _start4.z;
          const t = (_end4.z - near) / deltaDist;

          _end4.lerp(_start4, t);
        } // clip space


        _start4.applyMatrix4(projectionMatrix);

        _end4.applyMatrix4(projectionMatrix); // ndc space [ - 1.0, 1.0 ]


        _start4.multiplyScalar(1 / _start4.w);

        _end4.multiplyScalar(1 / _end4.w); // screen space


        _start4.x *= resolution.x / 2;
        _start4.y *= resolution.y / 2;
        _end4.x *= resolution.x / 2;
        _end4.y *= resolution.y / 2; // create 2d segment

        _line.start.copy(_start4);

        _line.start.z = 0;

        _line.end.copy(_end4);

        _line.end.z = 0; // get closest point on ray to segment

        const param = _line.closestPointToPointParameter(_ssOrigin3, true);

        _line.at(param, _closestPoint); // check if the intersection point is within clip space


        const zPos = THREE$5.MathUtils.lerp(_start4.z, _end4.z, param);
        const isInClipSpace = zPos >= -1 && zPos <= 1;
        const isInside = _ssOrigin3.distanceTo(_closestPoint) < lineWidth * 0.5;

        if (isInClipSpace && isInside) {
          _line.start.fromBufferAttribute(instanceStart, i);

          _line.end.fromBufferAttribute(instanceEnd, i);

          _line.start.applyMatrix4(matrixWorld);

          _line.end.applyMatrix4(matrixWorld);

          const pointOnLine = new THREE$5.Vector3();
          const point = new THREE$5.Vector3();
          ray.distanceSqToSegment(_line.start, _line.end, point, pointOnLine);
          intersects.push({
            point: point,
            pointOnLine: pointOnLine,
            distance: ray.origin.distanceTo(point),
            object: this,
            face: null,
            faceIndex: i,
            uv: null,
            uv2: null
          });
        }
      }
    }

  }

  LineSegments2.prototype.LineSegments2 = true;

  class LineGeometry extends LineSegmentsGeometry {
    constructor() {
      super();
      this.type = 'LineGeometry';
    }

    setPositions(array) {
      // converts [ x1, y1, z1,  x2, y2, z2, ... ] to pairs format
      var length = array.length - 3;
      var points = new Float32Array(2 * length);

      for (var i = 0; i < length; i += 3) {
        points[2 * i] = array[i];
        points[2 * i + 1] = array[i + 1];
        points[2 * i + 2] = array[i + 2];
        points[2 * i + 3] = array[i + 3];
        points[2 * i + 4] = array[i + 4];
        points[2 * i + 5] = array[i + 5];
      }

      super.setPositions(points);
      return this;
    }

    setColors(array) {
      // converts [ r1, g1, b1,  r2, g2, b2, ... ] to pairs format
      var length = array.length - 3;
      var colors = new Float32Array(2 * length);

      for (var i = 0; i < length; i += 3) {
        colors[2 * i] = array[i];
        colors[2 * i + 1] = array[i + 1];
        colors[2 * i + 2] = array[i + 2];
        colors[2 * i + 3] = array[i + 3];
        colors[2 * i + 4] = array[i + 4];
        colors[2 * i + 5] = array[i + 5];
      }

      super.setColors(colors);
      return this;
    }

    fromLine(line) {
      var geometry = line.geometry;

      if (geometry.isGeometry) {
        console.error('LineGeometry no longer supports Geometry. Use THREE.BufferGeometry instead.');
        return;
      } else if (geometry.isBufferGeometry) {
        this.setPositions(geometry.attributes.position.array); // assumes non-indexed
      } // set colors, maybe


      return this;
    }

    copy() {
      // todo
      return this;
    }

  }

  LineGeometry.prototype.isLineGeometry = true;

  class Line2 extends LineSegments2 {
    constructor(geometry = new LineGeometry(), material = new LineMaterial({
      color: Math.random() * 0xffffff
    })) {
      super(geometry, material);
      this.type = 'Line2';
    }

  }

  Line2.prototype.isLine2 = true;

  var THREE$4 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    Vector3: three$1.Vector3
  };
  function interpolateVectors(fromPnts, toPnts) {
    var extendArr = function extendArr(arr, length) {
      var repeatItem = arr[arr.length - 1];
      return [].concat(_toConsumableArray$3(arr), _toConsumableArray$3(_toConsumableArray$3(new Array(length - arr.length)).map(function () {
        return repeatItem;
      })));
    };

    var arrLength = Math.max(fromPnts.length, toPnts.length);
    var interpolator = interpolateArray.apply(void 0, _toConsumableArray$3([fromPnts, toPnts].map(function (pnts) {
      return pnts.map(function (_ref) {
        var x = _ref.x,
            y = _ref.y,
            z = _ref.z;
        return [x, y, z];
      });
    }).map(function (arr) {
      return extendArr(arr, arrLength);
    })));
    return function (k) {
      return k === 0 ? fromPnts : k === 1 ? toPnts : interpolator(k).map(function (_ref2) {
        var _ref3 = _slicedToArray$5(_ref2, 3),
            x = _ref3[0],
            y = _ref3[1],
            z = _ref3[2];

        return new THREE$4.Vector3(x, y, z);
      });
    };
  }

  var THREE$3 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    BufferGeometry: three$1.BufferGeometry,
    Color: three$1.Color,
    Float32BufferAttribute: three$1.Float32BufferAttribute,
    Group: three$1.Group,
    Line: three$1.Line,
    NoColors: three$1.NoColors,
    NormalBlending: three$1.NormalBlending,
    ShaderMaterial: three$1.ShaderMaterial,
    Vector3: three$1.Vector3,
    VertexColors: three$1.VertexColors
  };
  // support both modes for backwards threejs compatibility

  var setAttributeFn = new THREE$3.BufferGeometry().setAttribute ? 'setAttribute' : 'addAttribute';
  var gradientShaders = {
    uniforms: {
      // dash param defaults, all relative to full length
      dashOffset: {
        value: 0
      },
      dashSize: {
        value: 1
      },
      gapSize: {
        value: 0
      },
      dashTranslate: {
        value: 0
      } // used for animating the dash

    },
    vertexShader: "\n    uniform float dashTranslate;\n\n    attribute vec4 vertexColor;\n    varying vec4 vColor;\n\n    attribute float vertexRelDistance;\n    varying float vRelDistance;\n\n    void main() {\n      // pass through colors and distances\n      vColor = vertexColor;\n      vRelDistance = vertexRelDistance + dashTranslate;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }\n  ",
    fragmentShader: "\n    uniform float dashOffset;\n    uniform float dashSize;\n    uniform float gapSize;\n\n    varying vec4 vColor;\n    varying float vRelDistance;\n\n    void main() {\n      // ignore pixels in the gap\n      if (vRelDistance < dashOffset) discard;\n      if (mod(vRelDistance - dashOffset, dashSize + gapSize) > dashSize) discard;\n\n      // set px color: [r, g, b, a], interpolated between vertices\n      gl_FragColor = vColor;\n    }\n  "
  };
  var PathsLayerKapsule = index$2({
    props: {
      pathsData: {
        "default": []
      },
      pathPoints: {
        "default": function _default(pnts) {
          return pnts;
        }
      },
      pathPointLat: {
        "default": function _default(arr) {
          return arr[0];
        }
      },
      pathPointLng: {
        "default": function _default(arr) {
          return arr[1];
        }
      },
      pathPointAlt: {
        "default": 1e-3
      },
      pathResolution: {
        "default": 2
      },
      // in deg
      pathColor: {
        "default": function _default() {
          return '#ffffaa';
        }
      },
      pathStroke: {},
      // in deg
      pathDashLength: {
        "default": 1
      },
      // in units of line length
      pathDashGap: {
        "default": 0
      },
      pathDashInitialGap: {
        "default": 0
      },
      pathDashAnimateTime: {
        "default": 0
      },
      // ms
      pathTransitionDuration: {
        "default": 1000,
        triggerUpdate: false
      },
      // ms
      rendererSize: {} // necessary to set correct fatline proportions

    },
    init: function init(threeObj, state) {
      // Clear the scene
      emptyObject(threeObj); // Main three object to manipulate

      state.scene = threeObj; // Kick-off dash animations

      new FrameTicker().onTick.add(function (_, timeDelta) {
        state.pathsData.filter(function (d) {
          return d.__threeObj && d.__threeObj.children.length && d.__threeObj.children[0].material && d.__threeObj.children[0].__dashAnimateStep;
        }).forEach(function (d) {
          var obj = d.__threeObj.children[0];
          var step = obj.__dashAnimateStep * timeDelta;

          if (obj.type === 'Line') {
            var curTranslate = obj.material.uniforms.dashTranslate.value % 1e9; // reset after 1B loops

            obj.material.uniforms.dashTranslate.value = curTranslate + step;
          } else if (obj.type === 'Line2') {
            // fatline
            var offset = obj.material.dashOffset - step;
            var dashLength = obj.material.dashSize + obj.material.gapSize;

            while (offset <= -dashLength) {
              offset += dashLength;
            } // cycle within dash length


            obj.material.dashOffset = offset;
          }
        });
      });
    },
    update: function update(state) {
      // Data accessors
      var pointsAccessor = index$1(state.pathPoints);
      var pointLatAccessor = index$1(state.pathPointLat);
      var pointLngAccessor = index$1(state.pathPointLng);
      var pointAltAccessor = index$1(state.pathPointAlt);
      var strokeAccessor = index$1(state.pathStroke);
      var colorAccessor = index$1(state.pathColor);
      var dashLengthAccessor = index$1(state.pathDashLength);
      var dashGapAccessor = index$1(state.pathDashGap);
      var dashInitialGapAccessor = index$1(state.pathDashInitialGap);
      var dashAnimateTimeAccessor = index$1(state.pathDashAnimateTime);
      var sharedShaderMaterial = new THREE$3.ShaderMaterial(_objectSpread2$1(_objectSpread2$1({}, gradientShaders), {}, {
        transparent: true,
        blending: THREE$3.NormalBlending
      }));
      threeDigest(state.pathsData, state.scene, {
        createObj: function createObj() {
          var obj = new THREE$3.Group(); // populated in updateObj

          obj.__globeObjType = 'path'; // Add object type

          return obj;
        },
        updateObj: function updateObj(group, path) {
          var stroke = strokeAccessor(path);
          var useFatLine = stroke !== null && stroke !== undefined;

          if (!group.children.length || useFatLine === (group.children[0].type === 'Line')) {
            // create or swap object types
            emptyObject(group);

            var _obj = useFatLine ? new Line2(new LineGeometry(), new LineMaterial()) : new THREE$3.Line(new THREE$3.BufferGeometry(), sharedShaderMaterial.clone() // Separate material instance per object to have dedicated uniforms (but shared shaders)
            );

            group.add(_obj);
          }

          var obj = group.children[0];
          var points = calcPath(pointsAccessor(path), pointLatAccessor, pointLngAccessor, pointAltAccessor, state.pathResolution); // set dash animation step

          var dashAnimateTime = dashAnimateTimeAccessor(path);
          obj.__dashAnimateStep = dashAnimateTime > 0 ? 1000 / dashAnimateTime : 0; // per second

          if (!useFatLine) {
            // set dash uniforms
            Object.assign(obj.material.uniforms, {
              dashSize: {
                value: dashLengthAccessor(path)
              },
              gapSize: {
                value: dashGapAccessor(path)
              },
              dashOffset: {
                value: dashInitialGapAccessor(path)
              }
            }); // calculate vertex colors (to create gradient)

            var vertexColorArray = calcColorVertexArray(colorAccessor(path), // single or array of colors
            points.length // numSegments
            ); // calculate vertex relative distances (for dashed lines)

            var vertexRelDistanceArray = calcVertexRelDistances(points.length, // numSegments
            1, // num vertices per segment
            true // run from end to start, to animate in the correct direction
            );
            obj.geometry[setAttributeFn]('vertexColor', vertexColorArray);
            obj.geometry[setAttributeFn]('vertexRelDistance', vertexRelDistanceArray);
          } else {
            // fat lines
            obj.material.resolution = state.rendererSize;
            {
              // set dash styling
              var dashLength = dashLengthAccessor(path);
              var dashGap = dashGapAccessor(path);
              var dashInitialGap = dashInitialGapAccessor(path);
              obj.material.dashed = dashGap > 0; // temp hack to activate line dashes

              obj.material.dashed ? obj.material.defines.USE_DASH = "" : delete obj.material.defines.USE_DASH;

              if (obj.material.dashed) {
                obj.material.dashScale = 1 / calcLineDistance(points); // dash sizes relative to full line length

                obj.material.dashSize = dashLength;
                obj.material.gapSize = dashGap;
                obj.material.dashOffset = -dashInitialGap;
              }
            }
            {
              // set line colors
              var colors = colorAccessor(path);

              if (colors instanceof Array) {
                // calculate vertex colors (to create gradient)
                var _vertexColorArray = calcColorVertexArray(colorAccessor(path), // single or array of colors
                points.length - 1, // numSegments
                1, // num vertices per segment
                false);

                obj.geometry.setColors(_vertexColorArray.array);
                obj.material.vertexColors = THREE$3.VertexColors;
              } else {
                // single color
                var color = colors;
                var opacity = colorAlpha(color);
                obj.material.color = new THREE$3.Color(colorStr2Hex(color));
                obj.material.transparent = opacity < 1;
                obj.material.opacity = opacity;
                obj.material.vertexColors = THREE$3.NoColors;
              }
            }
            obj.material.needsUpdate = true;
          } // animate from start to finish by default


          var pointsInterpolator = interpolateVectors(path.__currentTargetD && path.__currentTargetD.points || [points[0]], points);

          var applyUpdate = function applyUpdate(td) {
            var _path$__currentTarget = path.__currentTargetD = td,
                stroke = _path$__currentTarget.stroke,
                interpolK = _path$__currentTarget.interpolK;

            var kPoints = path.__currentTargetD.points = pointsInterpolator(interpolK);

            if (useFatLine) {
              var _ref;

              obj.geometry.setPositions((_ref = []).concat.apply(_ref, _toConsumableArray$3(kPoints.map(function (_ref2) {
                var x = _ref2.x,
                    y = _ref2.y,
                    z = _ref2.z;
                return [x, y, z];
              }))));
              obj.material.linewidth = stroke; // necessary for dashed lines

              obj.material.dashed && obj.computeLineDistances();
            } else {
              obj.geometry.setFromPoints(kPoints);
              obj.geometry.computeBoundingSphere();
            }
          };

          var targetD = {
            stroke: stroke,
            interpolK: 1
          };
          var currentTargetD = Object.assign({}, path.__currentTargetD || targetD, {
            interpolK: 0
          });

          if (Object.keys(targetD).some(function (k) {
            return currentTargetD[k] !== targetD[k];
          })) {
            if (!state.pathTransitionDuration || state.pathTransitionDuration < 0) {
              // set final position
              applyUpdate(targetD);
            } else {
              // animate
              new exports$1.Tween(currentTargetD).to(targetD, state.pathTransitionDuration).easing(exports$1.Easing.Quadratic.InOut).onUpdate(applyUpdate).start();
            }
          }
        }
      }); //

      function calcLineDistance(pnts) {
        var totalDist = 0;
        var prevPnt;
        pnts.forEach(function (pnt) {
          prevPnt && (totalDist += prevPnt.distanceTo(pnt));
          prevPnt = pnt;
        });
        return totalDist;
      }

      function calcPath(points, latAccessor, lngAccessor, altAccessor, angularResolution) {
        var getInterpolatedVals = function getInterpolatedVals(start, end, numPnts) {
          var result = [];

          for (var i = 1; i <= numPnts; i++) {
            result.push(start + (end - start) * i / (numPnts + 1));
          }

          return result;
        };

        var interpolateLine = function interpolateLine() {
          var lineCoords = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var maxDegDistance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          var result = [];
          var prevPnt = null;
          lineCoords.forEach(function (pnt) {
            if (prevPnt) {
              // cross the anti-meridian if that's the closest distance between points
              while (Math.abs(prevPnt[1] - pnt[1]) > 180) {
                prevPnt[1] += 360 * (prevPnt[1] < pnt[1] ? 1 : -1);
              }

              var dist = Math.sqrt(Math.pow(pnt[0] - prevPnt[0], 2) + Math.pow(pnt[1] - prevPnt[1], 2));

              if (dist > maxDegDistance) {
                var numAdditionalPnts = Math.floor(dist / maxDegDistance);
                var lats = getInterpolatedVals(prevPnt[0], pnt[0], numAdditionalPnts);
                var lngs = getInterpolatedVals(prevPnt[1], pnt[1], numAdditionalPnts);
                var alts = getInterpolatedVals(prevPnt[2], pnt[2], numAdditionalPnts);

                for (var i = 0, len = lats.length; i < len; i++) {
                  result.push([lats[i], lngs[i], alts[i]]);
                }
              }
            }

            result.push(prevPnt = pnt);
          });
          return result;
        };

        var getVec = function getVec(_ref3) {
          var _ref4 = _slicedToArray$5(_ref3, 3),
              lat = _ref4[0],
              lng = _ref4[1],
              alt = _ref4[2];

          var _polar2Cartesian = polar2Cartesian$2(lat, lng, alt),
              x = _polar2Cartesian.x,
              y = _polar2Cartesian.y,
              z = _polar2Cartesian.z;

          return new THREE$3.Vector3(x, y, z);
        };

        return interpolateLine(points.map(function (pnt) {
          return [latAccessor(pnt), lngAccessor(pnt), altAccessor(pnt)];
        }), angularResolution).map(getVec);
      }

      function calcColorVertexArray(colors, numSegments) {
        var numVerticesPerSegment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var includeAlpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
        var numVerticesGroup = numSegments + 1; // one between every two segments and two at the ends

        var getVertexColor;

        if (colors instanceof Array) {
          // array of colors, interpolate at each step
          var colorScale = linear$1().domain(colors.map(function (_, idx) {
            return idx / (colors.length - 1);
          })) // same number of stops as colors
          .range(colors);

          getVertexColor = function getVertexColor(t) {
            return color2ShaderArr(colorScale(t), includeAlpha);
          };
        } else {
          // single color, use constant
          var vertexColor = color2ShaderArr(colors, includeAlpha);

          getVertexColor = function getVertexColor() {
            return vertexColor;
          };
        }

        var numArgs = includeAlpha ? 4 : 3;
        var vertexColorArray = new THREE$3.Float32BufferAttribute(numVerticesGroup * numArgs * numVerticesPerSegment, numArgs);

        for (var v = 0, l = numVerticesGroup; v < l; v++) {
          var _vertexColor = getVertexColor(v / (l - 1));

          for (var s = 0; s < numVerticesPerSegment; s++) {
            vertexColorArray.set(_vertexColor, (v * numVerticesPerSegment + s) * numArgs);
          }
        }

        return vertexColorArray;
      }

      function calcVertexRelDistances(numSegments) {
        var numVerticesPerSegment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var invert = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var numVerticesGroup = numSegments + 1; // one between every two segments and two at the ends

        var arrLen = numVerticesGroup * numVerticesPerSegment;
        var vertexDistanceArray = new THREE$3.Float32BufferAttribute(arrLen, 1);

        for (var v = 0, l = numVerticesGroup; v < l; v++) {
          var relDistance = v / (l - 1);

          for (var s = 0; s < numVerticesPerSegment; s++) {
            var idx = v * numVerticesPerSegment + s;
            var pos = invert ? arrLen - 1 - idx : idx;
            vertexDistanceArray.setX(pos, relDistance);
          }
        }

        return vertexDistanceArray;
      }
    }
  });

  var THREE$2 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    Euler: three$1.Euler,
    Mesh: three$1.Mesh,
    MeshLambertMaterial: three$1.MeshLambertMaterial,
    SphereBufferGeometry: three$1.SphereBufferGeometry
  };

  var TilesLayerKapsule = index$2({
    props: {
      tilesData: {
        "default": []
      },
      tileLat: {
        "default": 'lat'
      },
      // tile centroid
      tileLng: {
        "default": 'lng'
      },
      tileAltitude: {
        "default": 0.01
      },
      // in units of globe radius
      tileWidth: {
        "default": 1
      },
      // in lng degrees
      tileHeight: {
        "default": 1
      },
      // in lat degrees
      tileUseGlobeProjection: {
        "default": true
      },
      // whether to size tiles relative to the globe coordinate system, or independently
      tileMaterial: {
        "default": function _default() {
          return new THREE$2.MeshLambertMaterial({
            color: '#ffbb88',
            opacity: 0.4,
            transparent: true
          });
        }
      },
      tileCurvatureResolution: {
        "default": 5
      },
      // in angular degrees
      tilesTransitionDuration: {
        "default": 1000,
        triggerUpdate: false
      } // ms

    },
    init: function init(threeObj, state) {
      // Clear the scene
      emptyObject(threeObj); // Main three object to manipulate

      state.scene = threeObj;
    },
    update: function update(state) {
      // Data accessors
      var latAccessor = index$1(state.tileLat);
      var lngAccessor = index$1(state.tileLng);
      var altitudeAccessor = index$1(state.tileAltitude);
      var widthAccessor = index$1(state.tileWidth);
      var heightAccessor = index$1(state.tileHeight);
      var useGlobeProjectionAccessor = index$1(state.tileUseGlobeProjection);
      var materialAccessor = index$1(state.tileMaterial);
      var curvatureResolutionAccessor = index$1(state.tileCurvatureResolution);
      threeDigest(state.tilesData, state.scene, {
        createObj: function createObj() {
          var obj = new THREE$2.Mesh();
          obj.__globeObjType = 'tile'; // Add object type

          return obj;
        },
        updateObj: function updateObj(obj, d) {
          obj.material = materialAccessor(d); // set material

          var useGlobeProjection = useGlobeProjectionAccessor(d);
          var curvatureResolution = curvatureResolutionAccessor(d); // animations

          var applyPosition = function applyPosition(td) {
            var _obj$__currentTargetD = obj.__currentTargetD = td,
                lat = _obj$__currentTargetD.lat,
                lng = _obj$__currentTargetD.lng,
                alt = _obj$__currentTargetD.alt,
                width = _obj$__currentTargetD.width,
                height = _obj$__currentTargetD.height;

            var rotLng = deg2Rad(lng);
            var rotLat = deg2Rad(-lat);
            obj.geometry = new THREE$2.SphereBufferGeometry(GLOBE_RADIUS * (1 + alt), Math.ceil(width / curvatureResolution), Math.ceil(height / curvatureResolution), deg2Rad(90 - width / 2) + (useGlobeProjection ? rotLng : 0), deg2Rad(width), deg2Rad(90 - height / 2) + (useGlobeProjection ? rotLat : 0), deg2Rad(height));

            if (!useGlobeProjection) {
              // rotate obj instead. order matters, rotate longitudinally first.
              obj.setRotationFromEuler(new THREE$2.Euler(rotLat, rotLng, 0, 'YXZ'));
            }
          };

          var targetD = {
            lat: +latAccessor(d),
            lng: +lngAccessor(d),
            alt: +altitudeAccessor(d),
            width: +widthAccessor(d),
            height: +heightAccessor(d)
          };
          var currentTargetD = obj.__currentTargetD || Object.assign({}, targetD, {
            width: 0,
            height: 0
          });

          if (Object.keys(targetD).some(function (k) {
            return currentTargetD[k] !== targetD[k];
          })) {
            if (!state.tilesTransitionDuration || state.tilesTransitionDuration < 0) {
              // set final position
              applyPosition(targetD);
            } else {
              // animate
              new exports$1.Tween(currentTargetD).to(targetD, state.tilesTransitionDuration).easing(exports$1.Easing.Quadratic.InOut).onUpdate(applyPosition).start();
            }
          }
        }
      });
    }
  });

  var deg2Rad = function deg2Rad(deg) {
    return deg * Math.PI / 180;
  };

  var glyphs={"0":{x_min:73,x_max:715,ha:792,o:"m 394 -29 q 153 129 242 -29 q 73 479 73 272 q 152 829 73 687 q 394 989 241 989 q 634 829 545 989 q 715 479 715 684 q 635 129 715 270 q 394 -29 546 -29 m 394 89 q 546 211 489 89 q 598 479 598 322 q 548 748 598 640 q 394 871 491 871 q 241 748 298 871 q 190 479 190 637 q 239 211 190 319 q 394 89 296 89 "},"1":{x_min:215.671875,x_max:574,ha:792,o:"m 574 0 l 442 0 l 442 697 l 215 697 l 215 796 q 386 833 330 796 q 475 986 447 875 l 574 986 l 574 0 "},"2":{x_min:59,x_max:731,ha:792,o:"m 731 0 l 59 0 q 197 314 59 188 q 457 487 199 315 q 598 691 598 580 q 543 819 598 772 q 411 867 488 867 q 272 811 328 867 q 209 630 209 747 l 81 630 q 182 901 81 805 q 408 986 271 986 q 629 909 536 986 q 731 694 731 826 q 613 449 731 541 q 378 316 495 383 q 201 122 235 234 l 731 122 l 731 0 "},"3":{x_min:54,x_max:737,ha:792,o:"m 737 284 q 635 55 737 141 q 399 -25 541 -25 q 156 52 248 -25 q 54 308 54 140 l 185 308 q 245 147 185 202 q 395 96 302 96 q 539 140 484 96 q 602 280 602 190 q 510 429 602 390 q 324 454 451 454 l 324 565 q 487 584 441 565 q 565 719 565 617 q 515 835 565 791 q 395 879 466 879 q 255 824 307 879 q 203 661 203 769 l 78 661 q 166 909 78 822 q 387 992 250 992 q 603 921 513 992 q 701 723 701 844 q 669 607 701 656 q 578 524 637 558 q 696 434 655 499 q 737 284 737 369 "},"4":{x_min:48,x_max:742.453125,ha:792,o:"m 742 243 l 602 243 l 602 0 l 476 0 l 476 243 l 48 243 l 48 368 l 476 958 l 602 958 l 602 354 l 742 354 l 742 243 m 476 354 l 476 792 l 162 354 l 476 354 "},"5":{x_min:54.171875,x_max:738,ha:792,o:"m 738 314 q 626 60 738 153 q 382 -23 526 -23 q 155 47 248 -23 q 54 256 54 125 l 183 256 q 259 132 204 174 q 382 91 314 91 q 533 149 471 91 q 602 314 602 213 q 538 469 602 411 q 386 528 475 528 q 284 506 332 528 q 197 439 237 484 l 81 439 l 159 958 l 684 958 l 684 840 l 254 840 l 214 579 q 306 627 258 612 q 407 643 354 643 q 636 552 540 643 q 738 314 738 457 "},"6":{x_min:53,x_max:739,ha:792,o:"m 739 312 q 633 62 739 162 q 400 -31 534 -31 q 162 78 257 -31 q 53 439 53 206 q 178 859 53 712 q 441 986 284 986 q 643 912 559 986 q 732 713 732 833 l 601 713 q 544 830 594 786 q 426 875 494 875 q 268 793 331 875 q 193 517 193 697 q 301 597 240 570 q 427 624 362 624 q 643 540 552 624 q 739 312 739 451 m 603 298 q 540 461 603 400 q 404 516 484 516 q 268 461 323 516 q 207 300 207 401 q 269 137 207 198 q 405 83 325 83 q 541 137 486 83 q 603 298 603 197 "},"7":{x_min:58.71875,x_max:730.953125,ha:792,o:"m 730 839 q 469 448 560 641 q 335 0 378 255 l 192 0 q 328 441 235 252 q 593 830 421 630 l 58 830 l 58 958 l 730 958 l 730 839 "},"8":{x_min:55,x_max:736,ha:792,o:"m 571 527 q 694 424 652 491 q 736 280 736 358 q 648 71 736 158 q 395 -26 551 -26 q 142 69 238 -26 q 55 279 55 157 q 96 425 55 359 q 220 527 138 491 q 120 615 153 562 q 88 726 88 668 q 171 904 88 827 q 395 986 261 986 q 618 905 529 986 q 702 727 702 830 q 670 616 702 667 q 571 527 638 565 m 394 565 q 519 610 475 565 q 563 717 563 655 q 521 823 563 781 q 392 872 474 872 q 265 824 312 872 q 224 720 224 783 q 265 613 224 656 q 394 565 312 565 m 395 91 q 545 150 488 91 q 597 280 597 204 q 546 408 597 355 q 395 465 492 465 q 244 408 299 465 q 194 280 194 356 q 244 150 194 203 q 395 91 299 91 "},"9":{x_min:53,x_max:739,ha:792,o:"m 739 524 q 619 94 739 241 q 362 -32 516 -32 q 150 47 242 -32 q 59 244 59 126 l 191 244 q 246 129 191 176 q 373 82 301 82 q 526 161 466 82 q 597 440 597 255 q 363 334 501 334 q 130 432 216 334 q 53 650 53 521 q 134 880 53 786 q 383 986 226 986 q 659 841 566 986 q 739 524 739 719 m 388 449 q 535 514 480 449 q 585 658 585 573 q 535 805 585 744 q 388 873 480 873 q 242 809 294 873 q 191 658 191 745 q 239 514 191 572 q 388 449 292 449 "},"ο":{x_min:0,x_max:712,ha:815,o:"m 356 -25 q 96 88 192 -25 q 0 368 0 201 q 92 642 0 533 q 356 761 192 761 q 617 644 517 761 q 712 368 712 533 q 619 91 712 201 q 356 -25 520 -25 m 356 85 q 527 175 465 85 q 583 369 583 255 q 528 562 583 484 q 356 651 466 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 356 85 250 85 "},S:{x_min:0,x_max:788,ha:890,o:"m 788 291 q 662 54 788 144 q 397 -26 550 -26 q 116 68 226 -26 q 0 337 0 168 l 131 337 q 200 152 131 220 q 384 85 269 85 q 557 129 479 85 q 650 270 650 183 q 490 429 650 379 q 194 513 341 470 q 33 739 33 584 q 142 964 33 881 q 388 1041 242 1041 q 644 957 543 1041 q 756 716 756 867 l 625 716 q 561 874 625 816 q 395 933 497 933 q 243 891 309 933 q 164 759 164 841 q 325 609 164 656 q 625 526 475 568 q 788 291 788 454 "},"¦":{x_min:343,x_max:449,ha:792,o:"m 449 462 l 343 462 l 343 986 l 449 986 l 449 462 m 449 -242 l 343 -242 l 343 280 l 449 280 l 449 -242 "},"/":{x_min:183.25,x_max:608.328125,ha:792,o:"m 608 1041 l 266 -129 l 183 -129 l 520 1041 l 608 1041 "},"Τ":{x_min:-0.4375,x_max:777.453125,ha:839,o:"m 777 893 l 458 893 l 458 0 l 319 0 l 319 892 l 0 892 l 0 1013 l 777 1013 l 777 893 "},y:{x_min:0,x_max:684.78125,ha:771,o:"m 684 738 l 388 -83 q 311 -216 356 -167 q 173 -279 252 -279 q 97 -266 133 -279 l 97 -149 q 132 -155 109 -151 q 168 -160 155 -160 q 240 -114 213 -160 q 274 -26 248 -98 l 0 738 l 137 737 l 341 139 l 548 737 l 684 738 "},"Π":{x_min:0,x_max:803,ha:917,o:"m 803 0 l 667 0 l 667 886 l 140 886 l 140 0 l 0 0 l 0 1012 l 803 1012 l 803 0 "},"ΐ":{x_min:-111,x_max:339,ha:361,o:"m 339 800 l 229 800 l 229 925 l 339 925 l 339 800 m -1 800 l -111 800 l -111 925 l -1 925 l -1 800 m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 737 l 167 737 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 103 239 101 q 284 112 257 104 l 284 3 m 302 1040 l 113 819 l 30 819 l 165 1040 l 302 1040 "},g:{x_min:0,x_max:686,ha:838,o:"m 686 34 q 586 -213 686 -121 q 331 -306 487 -306 q 131 -252 216 -306 q 31 -84 31 -190 l 155 -84 q 228 -174 166 -138 q 345 -207 284 -207 q 514 -109 454 -207 q 564 89 564 -27 q 461 6 521 36 q 335 -23 401 -23 q 88 100 184 -23 q 0 370 0 215 q 87 634 0 522 q 330 758 183 758 q 457 728 398 758 q 564 644 515 699 l 564 737 l 686 737 l 686 34 m 582 367 q 529 560 582 481 q 358 652 468 652 q 189 561 250 652 q 135 369 135 482 q 189 176 135 255 q 361 85 251 85 q 529 176 468 85 q 582 367 582 255 "},"²":{x_min:0,x_max:442,ha:539,o:"m 442 383 l 0 383 q 91 566 0 492 q 260 668 176 617 q 354 798 354 727 q 315 875 354 845 q 227 905 277 905 q 136 869 173 905 q 99 761 99 833 l 14 761 q 82 922 14 864 q 232 974 141 974 q 379 926 316 974 q 442 797 442 878 q 351 635 442 704 q 183 539 321 611 q 92 455 92 491 l 442 455 l 442 383 "},"–":{x_min:0,x_max:705.5625,ha:803,o:"m 705 334 l 0 334 l 0 410 l 705 410 l 705 334 "},"Κ":{x_min:0,x_max:819.5625,ha:893,o:"m 819 0 l 650 0 l 294 509 l 139 356 l 139 0 l 0 0 l 0 1013 l 139 1013 l 139 526 l 626 1013 l 809 1013 l 395 600 l 819 0 "},"ƒ":{x_min:-46.265625,x_max:392,ha:513,o:"m 392 651 l 259 651 l 79 -279 l -46 -278 l 134 651 l 14 651 l 14 751 l 135 751 q 151 948 135 900 q 304 1041 185 1041 q 334 1040 319 1041 q 392 1034 348 1039 l 392 922 q 337 931 360 931 q 271 883 287 931 q 260 793 260 853 l 260 751 l 392 751 l 392 651 "},e:{x_min:0,x_max:714,ha:813,o:"m 714 326 l 140 326 q 200 157 140 227 q 359 87 260 87 q 488 130 431 87 q 561 245 545 174 l 697 245 q 577 48 670 123 q 358 -26 484 -26 q 97 85 195 -26 q 0 363 0 197 q 94 642 0 529 q 358 765 195 765 q 626 627 529 765 q 714 326 714 503 m 576 429 q 507 583 564 522 q 355 650 445 650 q 206 583 266 650 q 140 429 152 522 l 576 429 "},"ό":{x_min:0,x_max:712,ha:815,o:"m 356 -25 q 94 91 194 -25 q 0 368 0 202 q 92 642 0 533 q 356 761 192 761 q 617 644 517 761 q 712 368 712 533 q 619 91 712 201 q 356 -25 520 -25 m 356 85 q 527 175 465 85 q 583 369 583 255 q 528 562 583 484 q 356 651 466 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 356 85 250 85 m 576 1040 l 387 819 l 303 819 l 438 1040 l 576 1040 "},J:{x_min:0,x_max:588,ha:699,o:"m 588 279 q 287 -26 588 -26 q 58 73 126 -26 q 0 327 0 158 l 133 327 q 160 172 133 227 q 288 96 198 96 q 426 171 391 96 q 449 336 449 219 l 449 1013 l 588 1013 l 588 279 "},"»":{x_min:-1,x_max:503,ha:601,o:"m 503 302 l 280 136 l 281 256 l 429 373 l 281 486 l 280 608 l 503 440 l 503 302 m 221 302 l 0 136 l 0 255 l 145 372 l 0 486 l -1 608 l 221 440 l 221 302 "},"©":{x_min:-3,x_max:1008,ha:1106,o:"m 502 -7 q 123 151 263 -7 q -3 501 -3 294 q 123 851 -3 706 q 502 1011 263 1011 q 881 851 739 1011 q 1008 501 1008 708 q 883 151 1008 292 q 502 -7 744 -7 m 502 60 q 830 197 709 60 q 940 501 940 322 q 831 805 940 681 q 502 944 709 944 q 174 805 296 944 q 65 501 65 680 q 173 197 65 320 q 502 60 294 60 m 741 394 q 661 246 731 302 q 496 190 591 190 q 294 285 369 190 q 228 497 228 370 q 295 714 228 625 q 499 813 370 813 q 656 762 588 813 q 733 625 724 711 l 634 625 q 589 704 629 673 q 498 735 550 735 q 377 666 421 735 q 334 504 334 597 q 374 340 334 408 q 490 272 415 272 q 589 304 549 272 q 638 394 628 337 l 741 394 "},"ώ":{x_min:0,x_max:922,ha:1030,o:"m 687 1040 l 498 819 l 415 819 l 549 1040 l 687 1040 m 922 339 q 856 97 922 203 q 650 -26 780 -26 q 538 9 587 -26 q 461 103 489 44 q 387 12 436 46 q 277 -22 339 -22 q 69 97 147 -22 q 0 338 0 202 q 45 551 0 444 q 161 737 84 643 l 302 737 q 175 552 219 647 q 124 336 124 446 q 155 179 124 248 q 275 88 197 88 q 375 163 341 88 q 400 294 400 219 l 400 572 l 524 572 l 524 294 q 561 135 524 192 q 643 88 591 88 q 762 182 719 88 q 797 341 797 257 q 745 555 797 450 q 619 737 705 637 l 760 737 q 874 551 835 640 q 922 339 922 444 "},"^":{x_min:193.0625,x_max:598.609375,ha:792,o:"m 598 772 l 515 772 l 395 931 l 277 772 l 193 772 l 326 1013 l 462 1013 l 598 772 "},"«":{x_min:0,x_max:507.203125,ha:604,o:"m 506 136 l 284 302 l 284 440 l 506 608 l 507 485 l 360 371 l 506 255 l 506 136 m 222 136 l 0 302 l 0 440 l 222 608 l 221 486 l 73 373 l 222 256 l 222 136 "},D:{x_min:0,x_max:828,ha:935,o:"m 389 1013 q 714 867 593 1013 q 828 521 828 729 q 712 161 828 309 q 382 0 587 0 l 0 0 l 0 1013 l 389 1013 m 376 124 q 607 247 523 124 q 681 510 681 355 q 607 771 681 662 q 376 896 522 896 l 139 896 l 139 124 l 376 124 "},"∙":{x_min:0,x_max:142,ha:239,o:"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 "},"ÿ":{x_min:0,x_max:47,ha:125,o:"m 47 3 q 37 -7 47 -7 q 28 0 30 -7 q 39 -4 32 -4 q 45 3 45 -1 l 37 0 q 28 9 28 0 q 39 19 28 19 l 47 16 l 47 19 l 47 3 m 37 1 q 44 8 44 1 q 37 16 44 16 q 30 8 30 16 q 37 1 30 1 m 26 1 l 23 22 l 14 0 l 3 22 l 3 3 l 0 25 l 13 1 l 22 25 l 26 1 "},w:{x_min:0,x_max:1009.71875,ha:1100,o:"m 1009 738 l 783 0 l 658 0 l 501 567 l 345 0 l 222 0 l 0 738 l 130 738 l 284 174 l 432 737 l 576 738 l 721 173 l 881 737 l 1009 738 "},$:{x_min:0,x_max:700,ha:793,o:"m 664 717 l 542 717 q 490 825 531 785 q 381 872 450 865 l 381 551 q 620 446 540 522 q 700 241 700 370 q 618 45 700 116 q 381 -25 536 -25 l 381 -152 l 307 -152 l 307 -25 q 81 62 162 -25 q 0 297 0 149 l 124 297 q 169 146 124 204 q 307 81 215 89 l 307 441 q 80 536 148 469 q 13 725 13 603 q 96 910 13 839 q 307 982 180 982 l 307 1077 l 381 1077 l 381 982 q 574 917 494 982 q 664 717 664 845 m 307 565 l 307 872 q 187 831 233 872 q 142 724 142 791 q 180 618 142 656 q 307 565 218 580 m 381 76 q 562 237 562 96 q 517 361 562 313 q 381 423 472 409 l 381 76 "},"\\":{x_min:-0.015625,x_max:425.0625,ha:522,o:"m 425 -129 l 337 -129 l 0 1041 l 83 1041 l 425 -129 "},"µ":{x_min:0,x_max:697.21875,ha:747,o:"m 697 -4 q 629 -14 658 -14 q 498 97 513 -14 q 422 9 470 41 q 313 -23 374 -23 q 207 4 258 -23 q 119 81 156 32 l 119 -278 l 0 -278 l 0 738 l 124 738 l 124 343 q 165 173 124 246 q 308 83 216 83 q 452 178 402 83 q 493 359 493 255 l 493 738 l 617 738 l 617 214 q 623 136 617 160 q 673 92 637 92 q 697 96 684 92 l 697 -4 "},"Ι":{x_min:42,x_max:181,ha:297,o:"m 181 0 l 42 0 l 42 1013 l 181 1013 l 181 0 "},"Ύ":{x_min:0,x_max:1144.5,ha:1214,o:"m 1144 1012 l 807 416 l 807 0 l 667 0 l 667 416 l 325 1012 l 465 1012 l 736 533 l 1004 1012 l 1144 1012 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 "},"’":{x_min:0,x_max:139,ha:236,o:"m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 "},"Ν":{x_min:0,x_max:801,ha:915,o:"m 801 0 l 651 0 l 131 822 l 131 0 l 0 0 l 0 1013 l 151 1013 l 670 191 l 670 1013 l 801 1013 l 801 0 "},"-":{x_min:8.71875,x_max:350.390625,ha:478,o:"m 350 317 l 8 317 l 8 428 l 350 428 l 350 317 "},Q:{x_min:0,x_max:968,ha:1072,o:"m 954 5 l 887 -79 l 744 35 q 622 -11 687 2 q 483 -26 556 -26 q 127 130 262 -26 q 0 504 0 279 q 127 880 0 728 q 484 1041 262 1041 q 841 884 708 1041 q 968 507 968 735 q 933 293 968 398 q 832 104 899 188 l 954 5 m 723 191 q 802 330 777 248 q 828 499 828 412 q 744 790 828 673 q 483 922 650 922 q 228 791 322 922 q 142 505 142 673 q 227 221 142 337 q 487 91 323 91 q 632 123 566 91 l 520 215 l 587 301 l 723 191 "},"ς":{x_min:1,x_max:676.28125,ha:740,o:"m 676 460 l 551 460 q 498 595 542 546 q 365 651 448 651 q 199 578 263 651 q 136 401 136 505 q 266 178 136 241 q 508 106 387 142 q 640 -50 640 62 q 625 -158 640 -105 q 583 -278 611 -211 l 465 -278 q 498 -182 490 -211 q 515 -80 515 -126 q 381 12 515 -15 q 134 91 197 51 q 1 388 1 179 q 100 651 1 542 q 354 761 199 761 q 587 680 498 761 q 676 460 676 599 "},M:{x_min:0,x_max:954,ha:1067,o:"m 954 0 l 819 0 l 819 869 l 537 0 l 405 0 l 128 866 l 128 0 l 0 0 l 0 1013 l 200 1013 l 472 160 l 757 1013 l 954 1013 l 954 0 "},"Ψ":{x_min:0,x_max:1006,ha:1094,o:"m 1006 678 q 914 319 1006 429 q 571 200 814 200 l 571 0 l 433 0 l 433 200 q 92 319 194 200 q 0 678 0 429 l 0 1013 l 139 1013 l 139 679 q 191 417 139 492 q 433 326 255 326 l 433 1013 l 571 1013 l 571 326 l 580 326 q 813 423 747 326 q 868 679 868 502 l 868 1013 l 1006 1013 l 1006 678 "},C:{x_min:0,x_max:886,ha:944,o:"m 886 379 q 760 87 886 201 q 455 -26 634 -26 q 112 136 236 -26 q 0 509 0 283 q 118 882 0 737 q 469 1041 245 1041 q 748 955 630 1041 q 879 708 879 859 l 745 708 q 649 862 724 805 q 473 920 573 920 q 219 791 312 920 q 136 509 136 675 q 217 229 136 344 q 470 99 311 99 q 672 179 591 99 q 753 379 753 259 l 886 379 "},"!":{x_min:0,x_max:138,ha:236,o:"m 138 684 q 116 409 138 629 q 105 244 105 299 l 33 244 q 16 465 33 313 q 0 684 0 616 l 0 1013 l 138 1013 l 138 684 m 138 0 l 0 0 l 0 151 l 138 151 l 138 0 "},"{":{x_min:0,x_max:480.5625,ha:578,o:"m 480 -286 q 237 -213 303 -286 q 187 -45 187 -159 q 194 48 187 -15 q 201 141 201 112 q 164 264 201 225 q 0 314 118 314 l 0 417 q 164 471 119 417 q 201 605 201 514 q 199 665 201 644 q 193 772 193 769 q 241 941 193 887 q 480 1015 308 1015 l 480 915 q 336 866 375 915 q 306 742 306 828 q 310 662 306 717 q 314 577 314 606 q 288 452 314 500 q 176 365 256 391 q 289 275 257 337 q 314 143 314 226 q 313 84 314 107 q 310 -11 310 -5 q 339 -131 310 -94 q 480 -182 377 -182 l 480 -286 "},X:{x_min:-0.015625,x_max:854.15625,ha:940,o:"m 854 0 l 683 0 l 423 409 l 166 0 l 0 0 l 347 519 l 18 1013 l 186 1013 l 428 637 l 675 1013 l 836 1013 l 504 520 l 854 0 "},"#":{x_min:0,x_max:963.890625,ha:1061,o:"m 963 690 l 927 590 l 719 590 l 655 410 l 876 410 l 840 310 l 618 310 l 508 -3 l 393 -2 l 506 309 l 329 310 l 215 -2 l 102 -3 l 212 310 l 0 310 l 36 410 l 248 409 l 312 590 l 86 590 l 120 690 l 347 690 l 459 1006 l 573 1006 l 462 690 l 640 690 l 751 1006 l 865 1006 l 754 690 l 963 690 m 606 590 l 425 590 l 362 410 l 543 410 l 606 590 "},"ι":{x_min:42,x_max:284,ha:361,o:"m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 738 l 167 738 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 103 239 101 q 284 112 257 104 l 284 3 "},"Ά":{x_min:0,x_max:906.953125,ha:982,o:"m 283 1040 l 88 799 l 5 799 l 145 1040 l 283 1040 m 906 0 l 756 0 l 650 303 l 251 303 l 143 0 l 0 0 l 376 1012 l 529 1012 l 906 0 m 609 421 l 452 866 l 293 421 l 609 421 "},")":{x_min:0,x_max:318,ha:415,o:"m 318 365 q 257 25 318 191 q 87 -290 197 -141 l 0 -290 q 140 21 93 -128 q 193 360 193 189 q 141 704 193 537 q 0 1024 97 850 l 87 1024 q 257 706 197 871 q 318 365 318 542 "},"ε":{x_min:0,x_max:634.71875,ha:714,o:"m 634 234 q 527 38 634 110 q 300 -25 433 -25 q 98 29 183 -25 q 0 204 0 93 q 37 314 0 265 q 128 390 67 353 q 56 460 82 419 q 26 555 26 505 q 114 712 26 654 q 295 763 191 763 q 499 700 416 763 q 589 515 589 631 l 478 515 q 419 618 464 580 q 307 657 374 657 q 207 630 253 657 q 151 547 151 598 q 238 445 151 469 q 389 434 280 434 l 389 331 l 349 331 q 206 315 255 331 q 125 210 125 287 q 183 107 125 145 q 302 76 233 76 q 436 117 379 76 q 509 234 493 159 l 634 234 "},"Δ":{x_min:0,x_max:952.78125,ha:1028,o:"m 952 0 l 0 0 l 400 1013 l 551 1013 l 952 0 m 762 124 l 476 867 l 187 124 l 762 124 "},"}":{x_min:0,x_max:481,ha:578,o:"m 481 314 q 318 262 364 314 q 282 136 282 222 q 284 65 282 97 q 293 -58 293 -48 q 241 -217 293 -166 q 0 -286 174 -286 l 0 -182 q 143 -130 105 -182 q 171 -2 171 -93 q 168 81 171 22 q 165 144 165 140 q 188 275 165 229 q 306 365 220 339 q 191 455 224 391 q 165 588 165 505 q 168 681 165 624 q 171 742 171 737 q 141 865 171 827 q 0 915 102 915 l 0 1015 q 243 942 176 1015 q 293 773 293 888 q 287 675 293 741 q 282 590 282 608 q 318 466 282 505 q 481 417 364 417 l 481 314 "},"‰":{x_min:-3,x_max:1672,ha:1821,o:"m 846 0 q 664 76 732 0 q 603 244 603 145 q 662 412 603 344 q 846 489 729 489 q 1027 412 959 489 q 1089 244 1089 343 q 1029 76 1089 144 q 846 0 962 0 m 845 103 q 945 143 910 103 q 981 243 981 184 q 947 340 981 301 q 845 385 910 385 q 745 342 782 385 q 709 243 709 300 q 742 147 709 186 q 845 103 781 103 m 888 986 l 284 -25 l 199 -25 l 803 986 l 888 986 m 241 468 q 58 545 126 468 q -3 715 -3 615 q 56 881 -3 813 q 238 958 124 958 q 421 881 353 958 q 483 712 483 813 q 423 544 483 612 q 241 468 356 468 m 241 855 q 137 811 175 855 q 100 710 100 768 q 136 612 100 653 q 240 572 172 572 q 344 614 306 572 q 382 713 382 656 q 347 810 382 771 q 241 855 308 855 m 1428 0 q 1246 76 1314 0 q 1185 244 1185 145 q 1244 412 1185 344 q 1428 489 1311 489 q 1610 412 1542 489 q 1672 244 1672 343 q 1612 76 1672 144 q 1428 0 1545 0 m 1427 103 q 1528 143 1492 103 q 1564 243 1564 184 q 1530 340 1564 301 q 1427 385 1492 385 q 1327 342 1364 385 q 1291 243 1291 300 q 1324 147 1291 186 q 1427 103 1363 103 "},a:{x_min:0,x_max:698.609375,ha:794,o:"m 698 0 q 661 -12 679 -7 q 615 -17 643 -17 q 536 12 564 -17 q 500 96 508 41 q 384 6 456 37 q 236 -25 312 -25 q 65 31 130 -25 q 0 194 0 88 q 118 390 0 334 q 328 435 180 420 q 488 483 476 451 q 495 523 495 504 q 442 619 495 584 q 325 654 389 654 q 209 617 257 654 q 152 513 161 580 l 33 513 q 123 705 33 633 q 332 772 207 772 q 528 712 448 772 q 617 531 617 645 l 617 163 q 624 108 617 126 q 664 90 632 90 l 698 94 l 698 0 m 491 262 l 491 372 q 272 329 350 347 q 128 201 128 294 q 166 113 128 144 q 264 83 205 83 q 414 130 346 83 q 491 262 491 183 "},"—":{x_min:0,x_max:941.671875,ha:1039,o:"m 941 334 l 0 334 l 0 410 l 941 410 l 941 334 "},"=":{x_min:8.71875,x_max:780.953125,ha:792,o:"m 780 510 l 8 510 l 8 606 l 780 606 l 780 510 m 780 235 l 8 235 l 8 332 l 780 332 l 780 235 "},N:{x_min:0,x_max:801,ha:914,o:"m 801 0 l 651 0 l 131 823 l 131 0 l 0 0 l 0 1013 l 151 1013 l 670 193 l 670 1013 l 801 1013 l 801 0 "},"ρ":{x_min:0,x_max:712,ha:797,o:"m 712 369 q 620 94 712 207 q 362 -26 521 -26 q 230 2 292 -26 q 119 83 167 30 l 119 -278 l 0 -278 l 0 362 q 91 643 0 531 q 355 764 190 764 q 617 647 517 764 q 712 369 712 536 m 583 366 q 530 559 583 480 q 359 651 469 651 q 190 562 252 651 q 135 370 135 483 q 189 176 135 257 q 359 85 250 85 q 528 175 466 85 q 583 366 583 254 "},"¯":{x_min:0,x_max:941.671875,ha:938,o:"m 941 1033 l 0 1033 l 0 1109 l 941 1109 l 941 1033 "},Z:{x_min:0,x_max:779,ha:849,o:"m 779 0 l 0 0 l 0 113 l 621 896 l 40 896 l 40 1013 l 779 1013 l 778 887 l 171 124 l 779 124 l 779 0 "},u:{x_min:0,x_max:617,ha:729,o:"m 617 0 l 499 0 l 499 110 q 391 10 460 45 q 246 -25 322 -25 q 61 58 127 -25 q 0 258 0 136 l 0 738 l 125 738 l 125 284 q 156 148 125 202 q 273 82 197 82 q 433 165 369 82 q 493 340 493 243 l 493 738 l 617 738 l 617 0 "},k:{x_min:0,x_max:612.484375,ha:697,o:"m 612 738 l 338 465 l 608 0 l 469 0 l 251 382 l 121 251 l 121 0 l 0 0 l 0 1013 l 121 1013 l 121 402 l 456 738 l 612 738 "},"Η":{x_min:0,x_max:803,ha:917,o:"m 803 0 l 667 0 l 667 475 l 140 475 l 140 0 l 0 0 l 0 1013 l 140 1013 l 140 599 l 667 599 l 667 1013 l 803 1013 l 803 0 "},"Α":{x_min:0,x_max:906.953125,ha:985,o:"m 906 0 l 756 0 l 650 303 l 251 303 l 143 0 l 0 0 l 376 1013 l 529 1013 l 906 0 m 609 421 l 452 866 l 293 421 l 609 421 "},s:{x_min:0,x_max:604,ha:697,o:"m 604 217 q 501 36 604 104 q 292 -23 411 -23 q 86 43 166 -23 q 0 238 0 114 l 121 237 q 175 122 121 164 q 300 85 223 85 q 415 112 363 85 q 479 207 479 147 q 361 309 479 276 q 140 372 141 370 q 21 544 21 426 q 111 708 21 647 q 298 761 190 761 q 492 705 413 761 q 583 531 583 643 l 462 531 q 412 625 462 594 q 298 657 363 657 q 199 636 242 657 q 143 558 143 608 q 262 454 143 486 q 484 394 479 397 q 604 217 604 341 "},B:{x_min:0,x_max:778,ha:876,o:"m 580 546 q 724 469 670 535 q 778 311 778 403 q 673 83 778 171 q 432 0 575 0 l 0 0 l 0 1013 l 411 1013 q 629 957 541 1013 q 732 768 732 892 q 691 633 732 693 q 580 546 650 572 m 393 899 l 139 899 l 139 588 l 379 588 q 521 624 462 588 q 592 744 592 667 q 531 859 592 819 q 393 899 471 899 m 419 124 q 566 169 504 124 q 635 303 635 219 q 559 436 635 389 q 402 477 494 477 l 139 477 l 139 124 l 419 124 "},"…":{x_min:0,x_max:614,ha:708,o:"m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 m 378 0 l 236 0 l 236 151 l 378 151 l 378 0 m 614 0 l 472 0 l 472 151 l 614 151 l 614 0 "},"?":{x_min:0,x_max:607,ha:704,o:"m 607 777 q 543 599 607 674 q 422 474 482 537 q 357 272 357 391 l 236 272 q 297 487 236 395 q 411 619 298 490 q 474 762 474 691 q 422 885 474 838 q 301 933 371 933 q 179 880 228 933 q 124 706 124 819 l 0 706 q 94 963 0 872 q 302 1044 177 1044 q 511 973 423 1044 q 607 777 607 895 m 370 0 l 230 0 l 230 151 l 370 151 l 370 0 "},H:{x_min:0,x_max:803,ha:915,o:"m 803 0 l 667 0 l 667 475 l 140 475 l 140 0 l 0 0 l 0 1013 l 140 1013 l 140 599 l 667 599 l 667 1013 l 803 1013 l 803 0 "},"ν":{x_min:0,x_max:675,ha:761,o:"m 675 738 l 404 0 l 272 0 l 0 738 l 133 738 l 340 147 l 541 738 l 675 738 "},c:{x_min:1,x_max:701.390625,ha:775,o:"m 701 264 q 584 53 681 133 q 353 -26 487 -26 q 91 91 188 -26 q 1 370 1 201 q 92 645 1 537 q 353 761 190 761 q 572 688 479 761 q 690 493 666 615 l 556 493 q 487 606 545 562 q 356 650 428 650 q 186 563 246 650 q 134 372 134 487 q 188 179 134 258 q 359 88 250 88 q 492 136 437 88 q 566 264 548 185 l 701 264 "},"¶":{x_min:0,x_max:566.671875,ha:678,o:"m 21 892 l 52 892 l 98 761 l 145 892 l 176 892 l 178 741 l 157 741 l 157 867 l 108 741 l 88 741 l 40 871 l 40 741 l 21 741 l 21 892 m 308 854 l 308 731 q 252 691 308 691 q 227 691 240 691 q 207 696 213 695 l 207 712 l 253 706 q 288 733 288 706 l 288 763 q 244 741 279 741 q 193 797 193 741 q 261 860 193 860 q 287 860 273 860 q 308 854 302 855 m 288 842 l 263 843 q 213 796 213 843 q 248 756 213 756 q 288 796 288 756 l 288 842 m 566 988 l 502 988 l 502 -1 l 439 -1 l 439 988 l 317 988 l 317 -1 l 252 -1 l 252 602 q 81 653 155 602 q 0 805 0 711 q 101 989 0 918 q 309 1053 194 1053 l 566 1053 l 566 988 "},"β":{x_min:0,x_max:660,ha:745,o:"m 471 550 q 610 450 561 522 q 660 280 660 378 q 578 64 660 151 q 367 -22 497 -22 q 239 5 299 -22 q 126 82 178 32 l 126 -278 l 0 -278 l 0 593 q 54 903 0 801 q 318 1042 127 1042 q 519 964 436 1042 q 603 771 603 887 q 567 644 603 701 q 471 550 532 586 m 337 79 q 476 138 418 79 q 535 279 535 198 q 427 437 535 386 q 226 477 344 477 l 226 583 q 398 620 329 583 q 486 762 486 668 q 435 884 486 833 q 312 935 384 935 q 169 861 219 935 q 126 698 126 797 l 126 362 q 170 169 126 242 q 337 79 224 79 "},"Μ":{x_min:0,x_max:954,ha:1068,o:"m 954 0 l 819 0 l 819 868 l 537 0 l 405 0 l 128 865 l 128 0 l 0 0 l 0 1013 l 199 1013 l 472 158 l 758 1013 l 954 1013 l 954 0 "},"Ό":{x_min:0.109375,x_max:1120,ha:1217,o:"m 1120 505 q 994 132 1120 282 q 642 -29 861 -29 q 290 130 422 -29 q 167 505 167 280 q 294 883 167 730 q 650 1046 430 1046 q 999 882 868 1046 q 1120 505 1120 730 m 977 504 q 896 784 977 669 q 644 915 804 915 q 391 785 484 915 q 307 504 307 669 q 391 224 307 339 q 644 95 486 95 q 894 224 803 95 q 977 504 977 339 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 "},"Ή":{x_min:0,x_max:1158,ha:1275,o:"m 1158 0 l 1022 0 l 1022 475 l 496 475 l 496 0 l 356 0 l 356 1012 l 496 1012 l 496 599 l 1022 599 l 1022 1012 l 1158 1012 l 1158 0 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 "},"•":{x_min:0,x_max:663.890625,ha:775,o:"m 663 529 q 566 293 663 391 q 331 196 469 196 q 97 294 194 196 q 0 529 0 393 q 96 763 0 665 q 331 861 193 861 q 566 763 469 861 q 663 529 663 665 "},"¥":{x_min:0.1875,x_max:819.546875,ha:886,o:"m 563 561 l 697 561 l 696 487 l 520 487 l 482 416 l 482 380 l 697 380 l 695 308 l 482 308 l 482 0 l 342 0 l 342 308 l 125 308 l 125 380 l 342 380 l 342 417 l 303 487 l 125 487 l 125 561 l 258 561 l 0 1013 l 140 1013 l 411 533 l 679 1013 l 819 1013 l 563 561 "},"(":{x_min:0,x_max:318.0625,ha:415,o:"m 318 -290 l 230 -290 q 61 23 122 -142 q 0 365 0 190 q 62 712 0 540 q 230 1024 119 869 l 318 1024 q 175 705 219 853 q 125 360 125 542 q 176 22 125 187 q 318 -290 223 -127 "},U:{x_min:0,x_max:796,ha:904,o:"m 796 393 q 681 93 796 212 q 386 -25 566 -25 q 101 95 208 -25 q 0 393 0 211 l 0 1013 l 138 1013 l 138 391 q 204 191 138 270 q 394 107 276 107 q 586 191 512 107 q 656 391 656 270 l 656 1013 l 796 1013 l 796 393 "},"γ":{x_min:0.5,x_max:744.953125,ha:822,o:"m 744 737 l 463 54 l 463 -278 l 338 -278 l 338 54 l 154 495 q 104 597 124 569 q 13 651 67 651 l 0 651 l 0 751 l 39 753 q 168 711 121 753 q 242 594 207 676 l 403 208 l 617 737 l 744 737 "},"α":{x_min:0,x_max:765.5625,ha:809,o:"m 765 -4 q 698 -14 726 -14 q 564 97 586 -14 q 466 7 525 40 q 337 -26 407 -26 q 88 98 186 -26 q 0 369 0 212 q 88 637 0 525 q 337 760 184 760 q 465 728 407 760 q 563 637 524 696 l 563 739 l 685 739 l 685 222 q 693 141 685 168 q 748 94 708 94 q 765 96 760 94 l 765 -4 m 584 371 q 531 562 584 485 q 360 653 470 653 q 192 566 254 653 q 135 379 135 489 q 186 181 135 261 q 358 84 247 84 q 528 176 465 84 q 584 371 584 260 "},F:{x_min:0,x_max:683.328125,ha:717,o:"m 683 888 l 140 888 l 140 583 l 613 583 l 613 458 l 140 458 l 140 0 l 0 0 l 0 1013 l 683 1013 l 683 888 "},"­":{x_min:0,x_max:705.5625,ha:803,o:"m 705 334 l 0 334 l 0 410 l 705 410 l 705 334 "},":":{x_min:0,x_max:142,ha:239,o:"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 "},"Χ":{x_min:0,x_max:854.171875,ha:935,o:"m 854 0 l 683 0 l 423 409 l 166 0 l 0 0 l 347 519 l 18 1013 l 186 1013 l 427 637 l 675 1013 l 836 1013 l 504 521 l 854 0 "},"*":{x_min:116,x_max:674,ha:792,o:"m 674 768 l 475 713 l 610 544 l 517 477 l 394 652 l 272 478 l 178 544 l 314 713 l 116 766 l 153 876 l 341 812 l 342 1013 l 446 1013 l 446 811 l 635 874 l 674 768 "},"†":{x_min:0,x_max:777,ha:835,o:"m 458 804 l 777 804 l 777 683 l 458 683 l 458 0 l 319 0 l 319 681 l 0 683 l 0 804 l 319 804 l 319 1015 l 458 1013 l 458 804 "},"°":{x_min:0,x_max:347,ha:444,o:"m 173 802 q 43 856 91 802 q 0 977 0 905 q 45 1101 0 1049 q 173 1153 90 1153 q 303 1098 255 1153 q 347 977 347 1049 q 303 856 347 905 q 173 802 256 802 m 173 884 q 238 910 214 884 q 262 973 262 937 q 239 1038 262 1012 q 173 1064 217 1064 q 108 1037 132 1064 q 85 973 85 1010 q 108 910 85 937 q 173 884 132 884 "},V:{x_min:0,x_max:862.71875,ha:940,o:"m 862 1013 l 505 0 l 361 0 l 0 1013 l 143 1013 l 434 165 l 718 1012 l 862 1013 "},"Ξ":{x_min:0,x_max:734.71875,ha:763,o:"m 723 889 l 9 889 l 9 1013 l 723 1013 l 723 889 m 673 463 l 61 463 l 61 589 l 673 589 l 673 463 m 734 0 l 0 0 l 0 124 l 734 124 l 734 0 "}," ":{x_min:0,x_max:0,ha:853},"Ϋ":{x_min:0.328125,x_max:819.515625,ha:889,o:"m 588 1046 l 460 1046 l 460 1189 l 588 1189 l 588 1046 m 360 1046 l 232 1046 l 232 1189 l 360 1189 l 360 1046 m 819 1012 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1012 l 140 1012 l 411 533 l 679 1012 l 819 1012 "},"”":{x_min:0,x_max:347,ha:454,o:"m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 m 347 851 q 310 737 347 784 q 208 669 273 690 l 208 734 q 267 787 250 741 q 280 873 280 821 l 208 873 l 208 1013 l 347 1013 l 347 851 "},"@":{x_min:0,x_max:1260,ha:1357,o:"m 1098 -45 q 877 -160 1001 -117 q 633 -203 752 -203 q 155 -29 327 -203 q 0 360 0 127 q 176 802 0 616 q 687 1008 372 1008 q 1123 854 969 1008 q 1260 517 1260 718 q 1155 216 1260 341 q 868 82 1044 82 q 772 106 801 82 q 737 202 737 135 q 647 113 700 144 q 527 82 594 82 q 367 147 420 82 q 314 312 314 212 q 401 565 314 452 q 639 690 498 690 q 810 588 760 690 l 849 668 l 938 668 q 877 441 900 532 q 833 226 833 268 q 853 182 833 198 q 902 167 873 167 q 1088 272 1012 167 q 1159 512 1159 372 q 1051 793 1159 681 q 687 925 925 925 q 248 747 415 925 q 97 361 97 586 q 226 26 97 159 q 627 -122 370 -122 q 856 -87 737 -122 q 1061 8 976 -53 l 1098 -45 m 786 488 q 738 580 777 545 q 643 615 700 615 q 483 517 548 615 q 425 322 425 430 q 457 203 425 250 q 552 156 490 156 q 722 273 665 156 q 786 488 738 309 "},"Ί":{x_min:0,x_max:499,ha:613,o:"m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 m 499 0 l 360 0 l 360 1012 l 499 1012 l 499 0 "},i:{x_min:14,x_max:136,ha:275,o:"m 136 873 l 14 873 l 14 1013 l 136 1013 l 136 873 m 136 0 l 14 0 l 14 737 l 136 737 l 136 0 "},"Β":{x_min:0,x_max:778,ha:877,o:"m 580 545 q 724 468 671 534 q 778 310 778 402 q 673 83 778 170 q 432 0 575 0 l 0 0 l 0 1013 l 411 1013 q 629 957 541 1013 q 732 768 732 891 q 691 632 732 692 q 580 545 650 571 m 393 899 l 139 899 l 139 587 l 379 587 q 521 623 462 587 q 592 744 592 666 q 531 859 592 819 q 393 899 471 899 m 419 124 q 566 169 504 124 q 635 302 635 219 q 559 435 635 388 q 402 476 494 476 l 139 476 l 139 124 l 419 124 "},"υ":{x_min:0,x_max:617,ha:725,o:"m 617 352 q 540 94 617 199 q 308 -24 455 -24 q 76 94 161 -24 q 0 352 0 199 l 0 739 l 126 739 l 126 355 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 355 492 257 l 492 739 l 617 739 l 617 352 "},"]":{x_min:0,x_max:275,ha:372,o:"m 275 -281 l 0 -281 l 0 -187 l 151 -187 l 151 920 l 0 920 l 0 1013 l 275 1013 l 275 -281 "},m:{x_min:0,x_max:1019,ha:1128,o:"m 1019 0 l 897 0 l 897 454 q 860 591 897 536 q 739 660 816 660 q 613 586 659 660 q 573 436 573 522 l 573 0 l 447 0 l 447 455 q 412 591 447 535 q 294 657 372 657 q 165 586 213 657 q 122 437 122 521 l 122 0 l 0 0 l 0 738 l 117 738 l 117 640 q 202 730 150 697 q 316 763 254 763 q 437 730 381 763 q 525 642 494 697 q 621 731 559 700 q 753 763 682 763 q 943 694 867 763 q 1019 512 1019 625 l 1019 0 "},"χ":{x_min:8.328125,x_max:780.5625,ha:815,o:"m 780 -278 q 715 -294 747 -294 q 616 -257 663 -294 q 548 -175 576 -227 l 379 133 l 143 -277 l 9 -277 l 313 254 l 163 522 q 127 586 131 580 q 36 640 91 640 q 8 637 27 640 l 8 752 l 52 757 q 162 719 113 757 q 236 627 200 690 l 383 372 l 594 737 l 726 737 l 448 250 l 625 -69 q 670 -153 647 -110 q 743 -188 695 -188 q 780 -184 759 -188 l 780 -278 "},"ί":{x_min:42,x_max:326.71875,ha:361,o:"m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 737 l 167 737 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 102 239 101 q 284 112 257 104 l 284 3 m 326 1040 l 137 819 l 54 819 l 189 1040 l 326 1040 "},"Ζ":{x_min:0,x_max:779.171875,ha:850,o:"m 779 0 l 0 0 l 0 113 l 620 896 l 40 896 l 40 1013 l 779 1013 l 779 887 l 170 124 l 779 124 l 779 0 "},R:{x_min:0,x_max:781.953125,ha:907,o:"m 781 0 l 623 0 q 587 242 590 52 q 407 433 585 433 l 138 433 l 138 0 l 0 0 l 0 1013 l 396 1013 q 636 946 539 1013 q 749 731 749 868 q 711 597 749 659 q 608 502 674 534 q 718 370 696 474 q 729 207 722 352 q 781 26 736 62 l 781 0 m 373 551 q 533 594 465 551 q 614 731 614 645 q 532 859 614 815 q 373 896 465 896 l 138 896 l 138 551 l 373 551 "},o:{x_min:0,x_max:713,ha:821,o:"m 357 -25 q 94 91 194 -25 q 0 368 0 202 q 93 642 0 533 q 357 761 193 761 q 618 644 518 761 q 713 368 713 533 q 619 91 713 201 q 357 -25 521 -25 m 357 85 q 528 175 465 85 q 584 369 584 255 q 529 562 584 484 q 357 651 467 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 357 85 250 85 "},K:{x_min:0,x_max:819.46875,ha:906,o:"m 819 0 l 649 0 l 294 509 l 139 355 l 139 0 l 0 0 l 0 1013 l 139 1013 l 139 526 l 626 1013 l 809 1013 l 395 600 l 819 0 "},",":{x_min:0,x_max:142,ha:239,o:"m 142 -12 q 105 -132 142 -82 q 0 -205 68 -182 l 0 -138 q 57 -82 40 -124 q 70 0 70 -51 l 0 0 l 0 151 l 142 151 l 142 -12 "},d:{x_min:0,x_max:683,ha:796,o:"m 683 0 l 564 0 l 564 93 q 456 6 516 38 q 327 -25 395 -25 q 87 100 181 -25 q 0 365 0 215 q 90 639 0 525 q 343 763 187 763 q 564 647 486 763 l 564 1013 l 683 1013 l 683 0 m 582 373 q 529 562 582 484 q 361 653 468 653 q 190 561 253 653 q 135 365 135 479 q 189 175 135 254 q 358 85 251 85 q 529 178 468 85 q 582 373 582 258 "},"¨":{x_min:-109,x_max:247,ha:232,o:"m 247 1046 l 119 1046 l 119 1189 l 247 1189 l 247 1046 m 19 1046 l -109 1046 l -109 1189 l 19 1189 l 19 1046 "},E:{x_min:0,x_max:736.109375,ha:789,o:"m 736 0 l 0 0 l 0 1013 l 725 1013 l 725 889 l 139 889 l 139 585 l 677 585 l 677 467 l 139 467 l 139 125 l 736 125 l 736 0 "},Y:{x_min:0,x_max:820,ha:886,o:"m 820 1013 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1013 l 140 1013 l 411 534 l 679 1012 l 820 1013 "},"\"":{x_min:0,x_max:299,ha:396,o:"m 299 606 l 203 606 l 203 988 l 299 988 l 299 606 m 96 606 l 0 606 l 0 988 l 96 988 l 96 606 "},"‹":{x_min:17.984375,x_max:773.609375,ha:792,o:"m 773 40 l 18 376 l 17 465 l 773 799 l 773 692 l 159 420 l 773 149 l 773 40 "},"„":{x_min:0,x_max:364,ha:467,o:"m 141 -12 q 104 -132 141 -82 q 0 -205 67 -182 l 0 -138 q 56 -82 40 -124 q 69 0 69 -51 l 0 0 l 0 151 l 141 151 l 141 -12 m 364 -12 q 327 -132 364 -82 q 222 -205 290 -182 l 222 -138 q 279 -82 262 -124 q 292 0 292 -51 l 222 0 l 222 151 l 364 151 l 364 -12 "},"δ":{x_min:1,x_max:710,ha:810,o:"m 710 360 q 616 87 710 196 q 356 -28 518 -28 q 99 82 197 -28 q 1 356 1 192 q 100 606 1 509 q 355 703 199 703 q 180 829 288 754 q 70 903 124 866 l 70 1012 l 643 1012 l 643 901 l 258 901 q 462 763 422 794 q 636 592 577 677 q 710 360 710 485 m 584 365 q 552 501 584 447 q 451 602 521 555 q 372 611 411 611 q 197 541 258 611 q 136 355 136 472 q 190 171 136 245 q 358 85 252 85 q 528 173 465 85 q 584 365 584 252 "},"έ":{x_min:0,x_max:634.71875,ha:714,o:"m 634 234 q 527 38 634 110 q 300 -25 433 -25 q 98 29 183 -25 q 0 204 0 93 q 37 313 0 265 q 128 390 67 352 q 56 459 82 419 q 26 555 26 505 q 114 712 26 654 q 295 763 191 763 q 499 700 416 763 q 589 515 589 631 l 478 515 q 419 618 464 580 q 307 657 374 657 q 207 630 253 657 q 151 547 151 598 q 238 445 151 469 q 389 434 280 434 l 389 331 l 349 331 q 206 315 255 331 q 125 210 125 287 q 183 107 125 145 q 302 76 233 76 q 436 117 379 76 q 509 234 493 159 l 634 234 m 520 1040 l 331 819 l 248 819 l 383 1040 l 520 1040 "},"ω":{x_min:0,x_max:922,ha:1031,o:"m 922 339 q 856 97 922 203 q 650 -26 780 -26 q 538 9 587 -26 q 461 103 489 44 q 387 12 436 46 q 277 -22 339 -22 q 69 97 147 -22 q 0 339 0 203 q 45 551 0 444 q 161 738 84 643 l 302 738 q 175 553 219 647 q 124 336 124 446 q 155 179 124 249 q 275 88 197 88 q 375 163 341 88 q 400 294 400 219 l 400 572 l 524 572 l 524 294 q 561 135 524 192 q 643 88 591 88 q 762 182 719 88 q 797 342 797 257 q 745 556 797 450 q 619 738 705 638 l 760 738 q 874 551 835 640 q 922 339 922 444 "},"´":{x_min:0,x_max:96,ha:251,o:"m 96 606 l 0 606 l 0 988 l 96 988 l 96 606 "},"±":{x_min:11,x_max:781,ha:792,o:"m 781 490 l 446 490 l 446 255 l 349 255 l 349 490 l 11 490 l 11 586 l 349 586 l 349 819 l 446 819 l 446 586 l 781 586 l 781 490 m 781 21 l 11 21 l 11 115 l 781 115 l 781 21 "},"|":{x_min:343,x_max:449,ha:792,o:"m 449 462 l 343 462 l 343 986 l 449 986 l 449 462 m 449 -242 l 343 -242 l 343 280 l 449 280 l 449 -242 "},"ϋ":{x_min:0,x_max:617,ha:725,o:"m 482 800 l 372 800 l 372 925 l 482 925 l 482 800 m 239 800 l 129 800 l 129 925 l 239 925 l 239 800 m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 "},"§":{x_min:0,x_max:593,ha:690,o:"m 593 425 q 554 312 593 369 q 467 233 516 254 q 537 83 537 172 q 459 -74 537 -12 q 288 -133 387 -133 q 115 -69 184 -133 q 47 96 47 -6 l 166 96 q 199 7 166 40 q 288 -26 232 -26 q 371 -5 332 -26 q 420 60 420 21 q 311 201 420 139 q 108 309 210 255 q 0 490 0 383 q 33 602 0 551 q 124 687 66 654 q 75 743 93 712 q 58 812 58 773 q 133 984 58 920 q 300 1043 201 1043 q 458 987 394 1043 q 529 814 529 925 l 411 814 q 370 908 404 877 q 289 939 336 939 q 213 911 246 939 q 180 841 180 883 q 286 720 180 779 q 484 612 480 615 q 593 425 593 534 m 467 409 q 355 544 467 473 q 196 630 228 612 q 146 587 162 609 q 124 525 124 558 q 239 387 124 462 q 398 298 369 315 q 448 345 429 316 q 467 409 467 375 "},b:{x_min:0,x_max:685,ha:783,o:"m 685 372 q 597 99 685 213 q 347 -25 501 -25 q 219 5 277 -25 q 121 93 161 36 l 121 0 l 0 0 l 0 1013 l 121 1013 l 121 634 q 214 723 157 692 q 341 754 272 754 q 591 637 493 754 q 685 372 685 526 m 554 356 q 499 550 554 470 q 328 644 437 644 q 162 556 223 644 q 108 369 108 478 q 160 176 108 256 q 330 83 221 83 q 498 169 435 83 q 554 356 554 245 "},q:{x_min:0,x_max:683,ha:876,o:"m 683 -278 l 564 -278 l 564 97 q 474 8 533 39 q 345 -23 415 -23 q 91 93 188 -23 q 0 364 0 203 q 87 635 0 522 q 337 760 184 760 q 466 727 408 760 q 564 637 523 695 l 564 737 l 683 737 l 683 -278 m 582 375 q 527 564 582 488 q 358 652 466 652 q 190 565 253 652 q 135 377 135 488 q 189 179 135 261 q 361 84 251 84 q 530 179 469 84 q 582 375 582 260 "},"Ω":{x_min:-0.171875,x_max:969.5625,ha:1068,o:"m 969 0 l 555 0 l 555 123 q 744 308 675 194 q 814 558 814 423 q 726 812 814 709 q 484 922 633 922 q 244 820 334 922 q 154 567 154 719 q 223 316 154 433 q 412 123 292 199 l 412 0 l 0 0 l 0 124 l 217 124 q 68 327 122 210 q 15 572 15 444 q 144 911 15 781 q 484 1041 274 1041 q 822 909 691 1041 q 953 569 953 777 q 899 326 953 443 q 750 124 846 210 l 969 124 l 969 0 "},"ύ":{x_min:0,x_max:617,ha:725,o:"m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 m 535 1040 l 346 819 l 262 819 l 397 1040 l 535 1040 "},z:{x_min:-0.015625,x_max:613.890625,ha:697,o:"m 613 0 l 0 0 l 0 100 l 433 630 l 20 630 l 20 738 l 594 738 l 593 636 l 163 110 l 613 110 l 613 0 "},"™":{x_min:0,x_max:894,ha:1000,o:"m 389 951 l 229 951 l 229 503 l 160 503 l 160 951 l 0 951 l 0 1011 l 389 1011 l 389 951 m 894 503 l 827 503 l 827 939 l 685 503 l 620 503 l 481 937 l 481 503 l 417 503 l 417 1011 l 517 1011 l 653 580 l 796 1010 l 894 1011 l 894 503 "},"ή":{x_min:0.78125,x_max:697,ha:810,o:"m 697 -278 l 572 -278 l 572 454 q 540 587 572 536 q 425 650 501 650 q 271 579 337 650 q 206 420 206 509 l 206 0 l 81 0 l 81 489 q 73 588 81 562 q 0 644 56 644 l 0 741 q 68 755 38 755 q 158 721 124 755 q 200 630 193 687 q 297 726 234 692 q 434 761 359 761 q 620 692 544 761 q 697 516 697 624 l 697 -278 m 479 1040 l 290 819 l 207 819 l 341 1040 l 479 1040 "},"Θ":{x_min:0,x_max:960,ha:1056,o:"m 960 507 q 833 129 960 280 q 476 -32 698 -32 q 123 129 255 -32 q 0 507 0 280 q 123 883 0 732 q 476 1045 255 1045 q 832 883 696 1045 q 960 507 960 732 m 817 500 q 733 789 817 669 q 476 924 639 924 q 223 792 317 924 q 142 507 142 675 q 222 222 142 339 q 476 89 315 89 q 730 218 636 89 q 817 500 817 334 m 716 449 l 243 449 l 243 571 l 716 571 l 716 449 "},"®":{x_min:-3,x_max:1008,ha:1106,o:"m 503 532 q 614 562 566 532 q 672 658 672 598 q 614 747 672 716 q 503 772 569 772 l 338 772 l 338 532 l 503 532 m 502 -7 q 123 151 263 -7 q -3 501 -3 294 q 123 851 -3 706 q 502 1011 263 1011 q 881 851 739 1011 q 1008 501 1008 708 q 883 151 1008 292 q 502 -7 744 -7 m 502 60 q 830 197 709 60 q 940 501 940 322 q 831 805 940 681 q 502 944 709 944 q 174 805 296 944 q 65 501 65 680 q 173 197 65 320 q 502 60 294 60 m 788 146 l 678 146 q 653 316 655 183 q 527 449 652 449 l 338 449 l 338 146 l 241 146 l 241 854 l 518 854 q 688 808 621 854 q 766 658 766 755 q 739 563 766 607 q 668 497 713 519 q 751 331 747 472 q 788 164 756 190 l 788 146 "},"~":{x_min:0,x_max:833,ha:931,o:"m 833 958 q 778 753 833 831 q 594 665 716 665 q 402 761 502 665 q 240 857 302 857 q 131 795 166 857 q 104 665 104 745 l 0 665 q 54 867 0 789 q 237 958 116 958 q 429 861 331 958 q 594 765 527 765 q 704 827 670 765 q 729 958 729 874 l 833 958 "},"Ε":{x_min:0,x_max:736.21875,ha:778,o:"m 736 0 l 0 0 l 0 1013 l 725 1013 l 725 889 l 139 889 l 139 585 l 677 585 l 677 467 l 139 467 l 139 125 l 736 125 l 736 0 "},"³":{x_min:0,x_max:450,ha:547,o:"m 450 552 q 379 413 450 464 q 220 366 313 366 q 69 414 130 366 q 0 567 0 470 l 85 567 q 126 470 85 504 q 225 437 168 437 q 320 467 280 437 q 360 552 360 498 q 318 632 360 608 q 213 657 276 657 q 195 657 203 657 q 176 657 181 657 l 176 722 q 279 733 249 722 q 334 815 334 752 q 300 881 334 856 q 220 907 267 907 q 133 875 169 907 q 97 781 97 844 l 15 781 q 78 926 15 875 q 220 972 135 972 q 364 930 303 972 q 426 817 426 888 q 344 697 426 733 q 421 642 392 681 q 450 552 450 603 "},"[":{x_min:0,x_max:273.609375,ha:371,o:"m 273 -281 l 0 -281 l 0 1013 l 273 1013 l 273 920 l 124 920 l 124 -187 l 273 -187 l 273 -281 "},L:{x_min:0,x_max:645.828125,ha:696,o:"m 645 0 l 0 0 l 0 1013 l 140 1013 l 140 126 l 645 126 l 645 0 "},"σ":{x_min:0,x_max:803.390625,ha:894,o:"m 803 628 l 633 628 q 713 368 713 512 q 618 93 713 204 q 357 -25 518 -25 q 94 91 194 -25 q 0 368 0 201 q 94 644 0 533 q 356 761 194 761 q 481 750 398 761 q 608 739 564 739 l 803 739 l 803 628 m 360 85 q 529 180 467 85 q 584 374 584 262 q 527 566 584 490 q 352 651 463 651 q 187 559 247 651 q 135 368 135 478 q 189 175 135 254 q 360 85 251 85 "},"ζ":{x_min:0,x_max:573,ha:642,o:"m 573 -40 q 553 -162 573 -97 q 510 -278 543 -193 l 400 -278 q 441 -187 428 -219 q 462 -90 462 -132 q 378 -14 462 -14 q 108 45 197 -14 q 0 290 0 117 q 108 631 0 462 q 353 901 194 767 l 55 901 l 55 1012 l 561 1012 l 561 924 q 261 669 382 831 q 128 301 128 489 q 243 117 128 149 q 458 98 350 108 q 573 -40 573 80 "},"θ":{x_min:0,x_max:674,ha:778,o:"m 674 496 q 601 160 674 304 q 336 -26 508 -26 q 73 153 165 -26 q 0 485 0 296 q 72 840 0 683 q 343 1045 166 1045 q 605 844 516 1045 q 674 496 674 692 m 546 579 q 498 798 546 691 q 336 935 437 935 q 178 798 237 935 q 126 579 137 701 l 546 579 m 546 475 l 126 475 q 170 233 126 348 q 338 80 230 80 q 504 233 447 80 q 546 475 546 346 "},"Ο":{x_min:0,x_max:958,ha:1054,o:"m 485 1042 q 834 883 703 1042 q 958 511 958 735 q 834 136 958 287 q 481 -26 701 -26 q 126 130 261 -26 q 0 504 0 279 q 127 880 0 729 q 485 1042 263 1042 m 480 98 q 731 225 638 98 q 815 504 815 340 q 733 783 815 670 q 480 913 640 913 q 226 785 321 913 q 142 504 142 671 q 226 224 142 339 q 480 98 319 98 "},"Γ":{x_min:0,x_max:705.28125,ha:749,o:"m 705 886 l 140 886 l 140 0 l 0 0 l 0 1012 l 705 1012 l 705 886 "}," ":{x_min:0,x_max:0,ha:375},"%":{x_min:-3,x_max:1089,ha:1186,o:"m 845 0 q 663 76 731 0 q 602 244 602 145 q 661 412 602 344 q 845 489 728 489 q 1027 412 959 489 q 1089 244 1089 343 q 1029 76 1089 144 q 845 0 962 0 m 844 103 q 945 143 909 103 q 981 243 981 184 q 947 340 981 301 q 844 385 909 385 q 744 342 781 385 q 708 243 708 300 q 741 147 708 186 q 844 103 780 103 m 888 986 l 284 -25 l 199 -25 l 803 986 l 888 986 m 241 468 q 58 545 126 468 q -3 715 -3 615 q 56 881 -3 813 q 238 958 124 958 q 421 881 353 958 q 483 712 483 813 q 423 544 483 612 q 241 468 356 468 m 241 855 q 137 811 175 855 q 100 710 100 768 q 136 612 100 653 q 240 572 172 572 q 344 614 306 572 q 382 713 382 656 q 347 810 382 771 q 241 855 308 855 "},P:{x_min:0,x_max:726,ha:806,o:"m 424 1013 q 640 931 555 1013 q 726 719 726 850 q 637 506 726 587 q 413 426 548 426 l 140 426 l 140 0 l 0 0 l 0 1013 l 424 1013 m 379 889 l 140 889 l 140 548 l 372 548 q 522 589 459 548 q 593 720 593 637 q 528 845 593 801 q 379 889 463 889 "},"Έ":{x_min:0,x_max:1078.21875,ha:1118,o:"m 1078 0 l 342 0 l 342 1013 l 1067 1013 l 1067 889 l 481 889 l 481 585 l 1019 585 l 1019 467 l 481 467 l 481 125 l 1078 125 l 1078 0 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 "},"Ώ":{x_min:0.125,x_max:1136.546875,ha:1235,o:"m 1136 0 l 722 0 l 722 123 q 911 309 842 194 q 981 558 981 423 q 893 813 981 710 q 651 923 800 923 q 411 821 501 923 q 321 568 321 720 q 390 316 321 433 q 579 123 459 200 l 579 0 l 166 0 l 166 124 l 384 124 q 235 327 289 210 q 182 572 182 444 q 311 912 182 782 q 651 1042 441 1042 q 989 910 858 1042 q 1120 569 1120 778 q 1066 326 1120 443 q 917 124 1013 210 l 1136 124 l 1136 0 m 277 1040 l 83 800 l 0 800 l 140 1041 l 277 1040 "},_:{x_min:0,x_max:705.5625,ha:803,o:"m 705 -334 l 0 -334 l 0 -234 l 705 -234 l 705 -334 "},"Ϊ":{x_min:-110,x_max:246,ha:275,o:"m 246 1046 l 118 1046 l 118 1189 l 246 1189 l 246 1046 m 18 1046 l -110 1046 l -110 1189 l 18 1189 l 18 1046 m 136 0 l 0 0 l 0 1012 l 136 1012 l 136 0 "},"+":{x_min:23,x_max:768,ha:792,o:"m 768 372 l 444 372 l 444 0 l 347 0 l 347 372 l 23 372 l 23 468 l 347 468 l 347 840 l 444 840 l 444 468 l 768 468 l 768 372 "},"½":{x_min:0,x_max:1050,ha:1149,o:"m 1050 0 l 625 0 q 712 178 625 108 q 878 277 722 187 q 967 385 967 328 q 932 456 967 429 q 850 484 897 484 q 759 450 798 484 q 721 352 721 416 l 640 352 q 706 502 640 448 q 851 551 766 551 q 987 509 931 551 q 1050 385 1050 462 q 976 251 1050 301 q 829 179 902 215 q 717 68 740 133 l 1050 68 l 1050 0 m 834 985 l 215 -28 l 130 -28 l 750 984 l 834 985 m 224 422 l 142 422 l 142 811 l 0 811 l 0 867 q 104 889 62 867 q 164 973 157 916 l 224 973 l 224 422 "},"Ρ":{x_min:0,x_max:720,ha:783,o:"m 424 1013 q 637 933 554 1013 q 720 723 720 853 q 633 508 720 591 q 413 426 546 426 l 140 426 l 140 0 l 0 0 l 0 1013 l 424 1013 m 378 889 l 140 889 l 140 548 l 371 548 q 521 589 458 548 q 592 720 592 637 q 527 845 592 801 q 378 889 463 889 "},"'":{x_min:0,x_max:139,ha:236,o:"m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 "},"ª":{x_min:0,x_max:350,ha:397,o:"m 350 625 q 307 616 328 616 q 266 631 281 616 q 247 673 251 645 q 190 628 225 644 q 116 613 156 613 q 32 641 64 613 q 0 722 0 669 q 72 826 0 800 q 247 866 159 846 l 247 887 q 220 934 247 916 q 162 953 194 953 q 104 934 129 953 q 76 882 80 915 l 16 882 q 60 976 16 941 q 166 1011 104 1011 q 266 979 224 1011 q 308 891 308 948 l 308 706 q 311 679 308 688 q 331 670 315 670 l 350 672 l 350 625 m 247 757 l 247 811 q 136 790 175 798 q 64 726 64 773 q 83 682 64 697 q 132 667 103 667 q 207 690 174 667 q 247 757 247 718 "},"΅":{x_min:0,x_max:450,ha:553,o:"m 450 800 l 340 800 l 340 925 l 450 925 l 450 800 m 406 1040 l 212 800 l 129 800 l 269 1040 l 406 1040 m 110 800 l 0 800 l 0 925 l 110 925 l 110 800 "},T:{x_min:0,x_max:777,ha:835,o:"m 777 894 l 458 894 l 458 0 l 319 0 l 319 894 l 0 894 l 0 1013 l 777 1013 l 777 894 "},"Φ":{x_min:0,x_max:915,ha:997,o:"m 527 0 l 389 0 l 389 122 q 110 231 220 122 q 0 509 0 340 q 110 785 0 677 q 389 893 220 893 l 389 1013 l 527 1013 l 527 893 q 804 786 693 893 q 915 509 915 679 q 805 231 915 341 q 527 122 696 122 l 527 0 m 527 226 q 712 310 641 226 q 779 507 779 389 q 712 705 779 627 q 527 787 641 787 l 527 226 m 389 226 l 389 787 q 205 698 275 775 q 136 505 136 620 q 206 308 136 391 q 389 226 276 226 "},"⁋":{x_min:0,x_max:0,ha:694},j:{x_min:-77.78125,x_max:167,ha:349,o:"m 167 871 l 42 871 l 42 1013 l 167 1013 l 167 871 m 167 -80 q 121 -231 167 -184 q -26 -278 76 -278 l -77 -278 l -77 -164 l -41 -164 q 26 -143 11 -164 q 42 -65 42 -122 l 42 737 l 167 737 l 167 -80 "},"Σ":{x_min:0,x_max:756.953125,ha:819,o:"m 756 0 l 0 0 l 0 107 l 395 523 l 22 904 l 22 1013 l 745 1013 l 745 889 l 209 889 l 566 523 l 187 125 l 756 125 l 756 0 "},"›":{x_min:18.0625,x_max:774,ha:792,o:"m 774 376 l 18 40 l 18 149 l 631 421 l 18 692 l 18 799 l 774 465 l 774 376 "},"<":{x_min:17.984375,x_max:773.609375,ha:792,o:"m 773 40 l 18 376 l 17 465 l 773 799 l 773 692 l 159 420 l 773 149 l 773 40 "},"£":{x_min:0,x_max:704.484375,ha:801,o:"m 704 41 q 623 -10 664 5 q 543 -26 583 -26 q 359 15 501 -26 q 243 36 288 36 q 158 23 197 36 q 73 -21 119 10 l 6 76 q 125 195 90 150 q 175 331 175 262 q 147 443 175 383 l 0 443 l 0 512 l 108 512 q 43 734 43 623 q 120 929 43 854 q 358 1010 204 1010 q 579 936 487 1010 q 678 729 678 857 l 678 684 l 552 684 q 504 838 552 780 q 362 896 457 896 q 216 852 263 896 q 176 747 176 815 q 199 627 176 697 q 248 512 217 574 l 468 512 l 468 443 l 279 443 q 297 356 297 398 q 230 194 297 279 q 153 107 211 170 q 227 133 190 125 q 293 142 264 142 q 410 119 339 142 q 516 96 482 96 q 579 105 550 96 q 648 142 608 115 l 704 41 "},t:{x_min:0,x_max:367,ha:458,o:"m 367 0 q 312 -5 339 -2 q 262 -8 284 -8 q 145 28 183 -8 q 108 143 108 64 l 108 638 l 0 638 l 0 738 l 108 738 l 108 944 l 232 944 l 232 738 l 367 738 l 367 638 l 232 638 l 232 185 q 248 121 232 140 q 307 102 264 102 q 345 104 330 102 q 367 107 360 107 l 367 0 "},"¬":{x_min:0,x_max:706,ha:803,o:"m 706 411 l 706 158 l 630 158 l 630 335 l 0 335 l 0 411 l 706 411 "},"λ":{x_min:0,x_max:750,ha:803,o:"m 750 -7 q 679 -15 716 -15 q 538 59 591 -15 q 466 214 512 97 l 336 551 l 126 0 l 0 0 l 270 705 q 223 837 247 770 q 116 899 190 899 q 90 898 100 899 l 90 1004 q 152 1011 125 1011 q 298 938 244 1011 q 373 783 326 901 l 605 192 q 649 115 629 136 q 716 95 669 95 l 736 95 q 750 97 745 97 l 750 -7 "},W:{x_min:0,x_max:1263.890625,ha:1351,o:"m 1263 1013 l 995 0 l 859 0 l 627 837 l 405 0 l 265 0 l 0 1013 l 136 1013 l 342 202 l 556 1013 l 701 1013 l 921 207 l 1133 1012 l 1263 1013 "},">":{x_min:18.0625,x_max:774,ha:792,o:"m 774 376 l 18 40 l 18 149 l 631 421 l 18 692 l 18 799 l 774 465 l 774 376 "},v:{x_min:0,x_max:675.15625,ha:761,o:"m 675 738 l 404 0 l 272 0 l 0 738 l 133 737 l 340 147 l 541 737 l 675 738 "},"τ":{x_min:0.28125,x_max:644.5,ha:703,o:"m 644 628 l 382 628 l 382 179 q 388 120 382 137 q 436 91 401 91 q 474 94 447 91 q 504 97 501 97 l 504 0 q 454 -9 482 -5 q 401 -14 426 -14 q 278 67 308 -14 q 260 233 260 118 l 260 628 l 0 628 l 0 739 l 644 739 l 644 628 "},"ξ":{x_min:0,x_max:624.9375,ha:699,o:"m 624 -37 q 608 -153 624 -96 q 563 -278 593 -211 l 454 -278 q 491 -183 486 -200 q 511 -83 511 -126 q 484 -23 511 -44 q 370 1 452 1 q 323 0 354 1 q 283 -1 293 -1 q 84 76 169 -1 q 0 266 0 154 q 56 431 0 358 q 197 538 108 498 q 94 613 134 562 q 54 730 54 665 q 77 823 54 780 q 143 901 101 867 l 27 901 l 27 1012 l 576 1012 l 576 901 l 380 901 q 244 863 303 901 q 178 745 178 820 q 312 600 178 636 q 532 582 380 582 l 532 479 q 276 455 361 479 q 118 281 118 410 q 165 173 118 217 q 274 120 208 133 q 494 101 384 110 q 624 -37 624 76 "},"&":{x_min:-3,x_max:894.25,ha:992,o:"m 894 0 l 725 0 l 624 123 q 471 0 553 40 q 306 -41 390 -41 q 168 -7 231 -41 q 62 92 105 26 q 14 187 31 139 q -3 276 -3 235 q 55 433 -3 358 q 248 581 114 508 q 170 689 196 640 q 137 817 137 751 q 214 985 137 922 q 384 1041 284 1041 q 548 988 483 1041 q 622 824 622 928 q 563 666 622 739 q 431 556 516 608 l 621 326 q 649 407 639 361 q 663 493 653 426 l 781 493 q 703 229 781 352 l 894 0 m 504 818 q 468 908 504 877 q 384 940 433 940 q 293 907 331 940 q 255 818 255 875 q 289 714 255 767 q 363 628 313 678 q 477 729 446 682 q 504 818 504 771 m 556 209 l 314 499 q 179 395 223 449 q 135 283 135 341 q 146 222 135 253 q 183 158 158 192 q 333 80 241 80 q 556 209 448 80 "},"Λ":{x_min:0,x_max:862.5,ha:942,o:"m 862 0 l 719 0 l 426 847 l 143 0 l 0 0 l 356 1013 l 501 1013 l 862 0 "},I:{x_min:41,x_max:180,ha:293,o:"m 180 0 l 41 0 l 41 1013 l 180 1013 l 180 0 "},G:{x_min:0,x_max:921,ha:1011,o:"m 921 0 l 832 0 l 801 136 q 655 15 741 58 q 470 -28 568 -28 q 126 133 259 -28 q 0 499 0 284 q 125 881 0 731 q 486 1043 259 1043 q 763 957 647 1043 q 905 709 890 864 l 772 709 q 668 866 747 807 q 486 926 589 926 q 228 795 322 926 q 142 507 142 677 q 228 224 142 342 q 483 94 323 94 q 712 195 625 94 q 796 435 796 291 l 477 435 l 477 549 l 921 549 l 921 0 "},"ΰ":{x_min:0,x_max:617,ha:725,o:"m 524 800 l 414 800 l 414 925 l 524 925 l 524 800 m 183 800 l 73 800 l 73 925 l 183 925 l 183 800 m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 m 489 1040 l 300 819 l 216 819 l 351 1040 l 489 1040 "},"`":{x_min:0,x_max:138.890625,ha:236,o:"m 138 699 l 0 699 l 0 861 q 36 974 0 929 q 138 1041 72 1020 l 138 977 q 82 931 95 969 q 69 839 69 893 l 138 839 l 138 699 "},"·":{x_min:0,x_max:142,ha:239,o:"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 "},"Υ":{x_min:0.328125,x_max:819.515625,ha:889,o:"m 819 1013 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1013 l 140 1013 l 411 533 l 679 1013 l 819 1013 "},r:{x_min:0,x_max:355.5625,ha:432,o:"m 355 621 l 343 621 q 179 569 236 621 q 122 411 122 518 l 122 0 l 0 0 l 0 737 l 117 737 l 117 604 q 204 719 146 686 q 355 753 262 753 l 355 621 "},x:{x_min:0,x_max:675,ha:764,o:"m 675 0 l 525 0 l 331 286 l 144 0 l 0 0 l 256 379 l 12 738 l 157 737 l 336 473 l 516 738 l 661 738 l 412 380 l 675 0 "},"μ":{x_min:0,x_max:696.609375,ha:747,o:"m 696 -4 q 628 -14 657 -14 q 498 97 513 -14 q 422 8 470 41 q 313 -24 374 -24 q 207 3 258 -24 q 120 80 157 31 l 120 -278 l 0 -278 l 0 738 l 124 738 l 124 343 q 165 172 124 246 q 308 82 216 82 q 451 177 402 82 q 492 358 492 254 l 492 738 l 616 738 l 616 214 q 623 136 616 160 q 673 92 636 92 q 696 95 684 92 l 696 -4 "},h:{x_min:0,x_max:615,ha:724,o:"m 615 472 l 615 0 l 490 0 l 490 454 q 456 590 490 535 q 338 654 416 654 q 186 588 251 654 q 122 436 122 522 l 122 0 l 0 0 l 0 1013 l 122 1013 l 122 633 q 218 727 149 694 q 362 760 287 760 q 552 676 484 760 q 615 472 615 600 "},".":{x_min:0,x_max:142,ha:239,o:"m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 "},"φ":{x_min:-2,x_max:878,ha:974,o:"m 496 -279 l 378 -279 l 378 -17 q 101 88 204 -17 q -2 367 -2 194 q 68 626 -2 510 q 283 758 151 758 l 283 646 q 167 537 209 626 q 133 373 133 462 q 192 177 133 254 q 378 93 259 93 l 378 758 q 445 764 426 763 q 476 765 464 765 q 765 659 653 765 q 878 377 878 553 q 771 96 878 209 q 496 -17 665 -17 l 496 -279 m 496 93 l 514 93 q 687 183 623 93 q 746 380 746 265 q 691 569 746 491 q 522 658 629 658 l 496 656 l 496 93 "},";":{x_min:0,x_max:142,ha:239,o:"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 m 142 -12 q 105 -132 142 -82 q 0 -206 68 -182 l 0 -138 q 58 -82 43 -123 q 68 0 68 -56 l 0 0 l 0 151 l 142 151 l 142 -12 "},f:{x_min:0,x_max:378,ha:472,o:"m 378 638 l 246 638 l 246 0 l 121 0 l 121 638 l 0 638 l 0 738 l 121 738 q 137 935 121 887 q 290 1028 171 1028 q 320 1027 305 1028 q 378 1021 334 1026 l 378 908 q 323 918 346 918 q 257 870 273 918 q 246 780 246 840 l 246 738 l 378 738 l 378 638 "},"“":{x_min:1,x_max:348.21875,ha:454,o:"m 140 670 l 1 670 l 1 830 q 37 943 1 897 q 140 1011 74 990 l 140 947 q 82 900 97 940 q 68 810 68 861 l 140 810 l 140 670 m 348 670 l 209 670 l 209 830 q 245 943 209 897 q 348 1011 282 990 l 348 947 q 290 900 305 940 q 276 810 276 861 l 348 810 l 348 670 "},A:{x_min:0.03125,x_max:906.953125,ha:1008,o:"m 906 0 l 756 0 l 648 303 l 251 303 l 142 0 l 0 0 l 376 1013 l 529 1013 l 906 0 m 610 421 l 452 867 l 293 421 l 610 421 "},"‘":{x_min:1,x_max:139.890625,ha:236,o:"m 139 670 l 1 670 l 1 830 q 37 943 1 897 q 139 1011 74 990 l 139 947 q 82 900 97 940 q 68 810 68 861 l 139 810 l 139 670 "},"ϊ":{x_min:-70,x_max:283,ha:361,o:"m 283 800 l 173 800 l 173 925 l 283 925 l 283 800 m 40 800 l -70 800 l -70 925 l 40 925 l 40 800 m 283 3 q 232 -10 257 -5 q 181 -15 206 -15 q 84 26 118 -15 q 41 200 41 79 l 41 737 l 166 737 l 167 215 q 171 141 167 157 q 225 101 182 101 q 247 103 238 101 q 283 112 256 104 l 283 3 "},"π":{x_min:-0.21875,x_max:773.21875,ha:857,o:"m 773 -7 l 707 -11 q 575 40 607 -11 q 552 174 552 77 l 552 226 l 552 626 l 222 626 l 222 0 l 97 0 l 97 626 l 0 626 l 0 737 l 773 737 l 773 626 l 676 626 l 676 171 q 695 103 676 117 q 773 90 714 90 l 773 -7 "},"ά":{x_min:0,x_max:765.5625,ha:809,o:"m 765 -4 q 698 -14 726 -14 q 564 97 586 -14 q 466 7 525 40 q 337 -26 407 -26 q 88 98 186 -26 q 0 369 0 212 q 88 637 0 525 q 337 760 184 760 q 465 727 407 760 q 563 637 524 695 l 563 738 l 685 738 l 685 222 q 693 141 685 168 q 748 94 708 94 q 765 95 760 94 l 765 -4 m 584 371 q 531 562 584 485 q 360 653 470 653 q 192 566 254 653 q 135 379 135 489 q 186 181 135 261 q 358 84 247 84 q 528 176 465 84 q 584 371 584 260 m 604 1040 l 415 819 l 332 819 l 466 1040 l 604 1040 "},O:{x_min:0,x_max:958,ha:1057,o:"m 485 1041 q 834 882 702 1041 q 958 512 958 734 q 834 136 958 287 q 481 -26 702 -26 q 126 130 261 -26 q 0 504 0 279 q 127 880 0 728 q 485 1041 263 1041 m 480 98 q 731 225 638 98 q 815 504 815 340 q 733 783 815 669 q 480 912 640 912 q 226 784 321 912 q 142 504 142 670 q 226 224 142 339 q 480 98 319 98 "},n:{x_min:0,x_max:615,ha:724,o:"m 615 463 l 615 0 l 490 0 l 490 454 q 453 592 490 537 q 331 656 410 656 q 178 585 240 656 q 117 421 117 514 l 117 0 l 0 0 l 0 738 l 117 738 l 117 630 q 218 728 150 693 q 359 764 286 764 q 552 675 484 764 q 615 463 615 593 "},l:{x_min:41,x_max:166,ha:279,o:"m 166 0 l 41 0 l 41 1013 l 166 1013 l 166 0 "},"¤":{x_min:40.09375,x_max:728.796875,ha:825,o:"m 728 304 l 649 224 l 512 363 q 383 331 458 331 q 256 363 310 331 l 119 224 l 40 304 l 177 441 q 150 553 150 493 q 184 673 150 621 l 40 818 l 119 898 l 267 749 q 321 766 291 759 q 384 773 351 773 q 447 766 417 773 q 501 749 477 759 l 649 898 l 728 818 l 585 675 q 612 618 604 648 q 621 553 621 587 q 591 441 621 491 l 728 304 m 384 682 q 280 643 318 682 q 243 551 243 604 q 279 461 243 499 q 383 423 316 423 q 487 461 449 423 q 525 553 525 500 q 490 641 525 605 q 384 682 451 682 "},"κ":{x_min:0,x_max:632.328125,ha:679,o:"m 632 0 l 482 0 l 225 384 l 124 288 l 124 0 l 0 0 l 0 738 l 124 738 l 124 446 l 433 738 l 596 738 l 312 466 l 632 0 "},p:{x_min:0,x_max:685,ha:786,o:"m 685 364 q 598 96 685 205 q 350 -23 504 -23 q 121 89 205 -23 l 121 -278 l 0 -278 l 0 738 l 121 738 l 121 633 q 220 726 159 691 q 351 761 280 761 q 598 636 504 761 q 685 364 685 522 m 557 371 q 501 560 557 481 q 330 651 437 651 q 162 559 223 651 q 108 366 108 479 q 162 177 108 254 q 333 87 224 87 q 502 178 441 87 q 557 371 557 258 "},"‡":{x_min:0,x_max:777,ha:835,o:"m 458 238 l 458 0 l 319 0 l 319 238 l 0 238 l 0 360 l 319 360 l 319 681 l 0 683 l 0 804 l 319 804 l 319 1015 l 458 1013 l 458 804 l 777 804 l 777 683 l 458 683 l 458 360 l 777 360 l 777 238 l 458 238 "},"ψ":{x_min:0,x_max:808,ha:907,o:"m 465 -278 l 341 -278 l 341 -15 q 87 102 180 -15 q 0 378 0 210 l 0 739 l 133 739 l 133 379 q 182 195 133 275 q 341 98 242 98 l 341 922 l 465 922 l 465 98 q 623 195 563 98 q 675 382 675 278 l 675 742 l 808 742 l 808 381 q 720 104 808 213 q 466 -13 627 -13 l 465 -278 "},"η":{x_min:0.78125,x_max:697,ha:810,o:"m 697 -278 l 572 -278 l 572 454 q 540 587 572 536 q 425 650 501 650 q 271 579 337 650 q 206 420 206 509 l 206 0 l 81 0 l 81 489 q 73 588 81 562 q 0 644 56 644 l 0 741 q 68 755 38 755 q 158 720 124 755 q 200 630 193 686 q 297 726 234 692 q 434 761 359 761 q 620 692 544 761 q 697 516 697 624 l 697 -278 "}};var cssFontWeight="normal";var ascender=1189;var underlinePosition=-100;var cssFontStyle="normal";var boundingBox={yMin:-334,xMin:-111,yMax:1189,xMax:1672};var resolution=1000;var original_font_information={postscript_name:"Helvetiker-Regular",version_string:"Version 1.00 2004 initial release",vendor_url:"http://www.magenta.gr/",full_font_name:"Helvetiker",font_family_name:"Helvetiker",copyright:"Copyright (c) Μagenta ltd, 2004",description:"",trademark:"",designer:"",designer_url:"",unique_font_identifier:"Μagenta ltd:Helvetiker:22-10-104",license_url:"http://www.ellak.gr/fonts/MgOpen/license.html",license_description:"Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r\n\r\nPermission is hereby granted, free of charge, to any person obtaining a copy of the fonts accompanying this license (\"Fonts\") and associated documentation files (the \"Font Software\"), to reproduce and distribute the Font Software, including without limitation the rights to use, copy, merge, publish, distribute, and/or sell copies of the Font Software, and to permit persons to whom the Font Software is furnished to do so, subject to the following conditions: \r\n\r\nThe above copyright and this permission notice shall be included in all copies of one or more of the Font Software typefaces.\r\n\r\nThe Font Software may be modified, altered, or added to, and in particular the designs of glyphs or characters in the Fonts may be modified and additional glyphs or characters may be added to the Fonts, only if the fonts are renamed to names not containing the word \"MgOpen\", or if the modifications are accepted for inclusion in the Font Software itself by the each appointed Administrator.\r\n\r\nThis License becomes null and void to the extent applicable to Fonts or Font Software that has been modified and is distributed under the \"MgOpen\" name.\r\n\r\nThe Font Software may be sold as part of a larger software package but no copy of one or more of the Font Software typefaces may be sold by itself. \r\n\r\nTHE FONT SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.",manufacturer_name:"Μagenta ltd",font_sub_family_name:"Regular"};var descender=-334;var familyName="Helvetiker";var lineHeight=1522;var underlineThickness=50;var defaultTypeFace = {glyphs:glyphs,cssFontWeight:cssFontWeight,ascender:ascender,underlinePosition:underlinePosition,cssFontStyle:cssFontStyle,boundingBox:boundingBox,resolution:resolution,original_font_information:original_font_information,descender:descender,familyName:familyName,lineHeight:lineHeight,underlineThickness:underlineThickness};

  var THREE$1 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    CircleBufferGeometry: three$1.CircleBufferGeometry,
    Font: three$1.Font,
    Group: three$1.Group,
    Mesh: three$1.Mesh,
    MeshLambertMaterial: three$1.MeshLambertMaterial,
    TextBufferGeometry: three$1.TextBufferGeometry,
    Vector3: three$1.Vector3
  };

  var LabelsLayerKapsule = index$2({
    props: {
      labelsData: {
        "default": []
      },
      labelLat: {
        "default": 'lat'
      },
      labelLng: {
        "default": 'lng'
      },
      labelAltitude: {
        "default": 0
      },
      // in units of globe radius
      labelText: {
        "default": 'text'
      },
      labelSize: {
        "default": 0.5
      },
      // text height in deg
      labelTypeFace: {
        "default": defaultTypeFace,
        onChange: function onChange(tf, state) {
          state.font = new THREE$1.Font(tf);
        }
      },
      labelColor: {
        "default": function _default() {
          return 'lightgrey';
        }
      },
      labelRotation: {
        "default": 0
      },
      // clockwise degrees, relative to the latitute parallel plane
      labelResolution: {
        "default": 3
      },
      // how many segments in the text's curves
      labelIncludeDot: {
        "default": true
      },
      labelDotRadius: {
        "default": 0.1
      },
      // in deg
      labelDotOrientation: {
        "default": function _default() {
          return 'bottom';
        }
      },
      // right, top, bottom
      labelsTransitionDuration: {
        "default": 1000,
        triggerUpdate: false
      } // ms

    },
    init: function init(threeObj, state) {
      // Clear the scene
      emptyObject(threeObj); // Main three object to manipulate

      state.scene = threeObj;
    },
    update: function update(state) {
      // Data accessors
      var latAccessor = index$1(state.labelLat);
      var lngAccessor = index$1(state.labelLng);
      var altitudeAccessor = index$1(state.labelAltitude);
      var textAccessor = index$1(state.labelText);
      var sizeAccessor = index$1(state.labelSize);
      var rotationAccessor = index$1(state.labelRotation);
      var colorAccessor = index$1(state.labelColor);
      var includeDotAccessor = index$1(state.labelIncludeDot);
      var dotRadiusAccessor = index$1(state.labelDotRadius);
      var dotOrientationAccessor = index$1(state.labelDotOrientation);
      var orientations = new Set(['right', 'top', 'bottom']);
      var pxPerDeg = 2 * Math.PI * GLOBE_RADIUS / 360;
      var circleGeometry = new THREE$1.CircleBufferGeometry(1, 16);
      threeDigest(state.labelsData, state.scene, {
        createObj: function createObj() {
          var material = new THREE$1.MeshLambertMaterial();
          var obj = new THREE$1.Group(); // container

          obj.add(new THREE$1.Mesh(circleGeometry, material)); // dot

          obj.add(new THREE$1.Mesh(undefined, material)); // text

          obj.__globeObjType = 'label'; // Add object type

          return obj;
        },
        updateObj: function updateObj(obj, d) {
          var _obj$children = _slicedToArray$5(obj.children, 2),
              dotObj = _obj$children[0],
              textObj = _obj$children[1]; // update color


          var color = colorAccessor(d);
          var opacity = colorAlpha(color);
          textObj.material.color.set(colorStr2Hex(color));
          textObj.material.transparent = opacity < 1;
          textObj.material.opacity = opacity; // update dot

          var includeDot = includeDotAccessor(d);
          var dotOrient = dotOrientationAccessor(d);
          !includeDot || !orientations.has(dotOrient) && (dotOrient = 'bottom'); // size dot

          var dotR = includeDot ? +dotRadiusAccessor(d) * pxPerDeg : 1e-12;
          dotObj.scale.x = dotObj.scale.y = dotR; // create text geometry

          var textHeight = +sizeAccessor(d) * pxPerDeg;
          textObj.geometry = new THREE$1.TextBufferGeometry(textAccessor(d), {
            font: state.font,
            size: textHeight,
            height: 0,
            curveSegments: state.labelResolution
          }); // center text (otherwise anchor is on bottom-left)

          dotOrient !== 'right' && textObj.geometry.center();

          if (includeDot) {
            // translate text
            var padding = dotR + textHeight / 2;
            dotOrient === 'right' && (textObj.position.x = padding);
            textObj.position.y = {
              right: -textHeight / 2,
              // center vertically
              top: padding + textHeight / 2,
              bottom: -padding - textHeight / 2
            }[dotOrient];
          } // animations


          var applyPosition = function applyPosition(td) {
            var _obj$__currentTargetD = obj.__currentTargetD = td,
                lat = _obj$__currentTargetD.lat,
                lng = _obj$__currentTargetD.lng,
                alt = _obj$__currentTargetD.alt,
                rot = _obj$__currentTargetD.rot,
                scale = _obj$__currentTargetD.scale; // position center


            Object.assign(obj.position, polar2Cartesian$2(lat, lng, alt)); // rotate

            obj.lookAt(state.scene.localToWorld(new THREE$1.Vector3(0, 0, 0))); // face globe (local) center

            obj.rotateY(Math.PI); // face outwards
            // rotate clockwise relative to lat parallel

            obj.rotateZ(-rot * Math.PI / 180); // scale it

            obj.scale.x = obj.scale.y = obj.scale.z = scale;
          };

          var targetD = {
            lat: +latAccessor(d),
            lng: +lngAccessor(d),
            alt: +altitudeAccessor(d),
            rot: +rotationAccessor(d),
            scale: 1
          };
          var currentTargetD = obj.__currentTargetD || Object.assign({}, targetD, {
            scale: 1e-12
          });

          if (Object.keys(targetD).some(function (k) {
            return currentTargetD[k] !== targetD[k];
          })) {
            if (!state.labelsTransitionDuration || state.labelsTransitionDuration < 0) {
              // set final position
              applyPosition(targetD);
            } else {
              // animate
              new exports$1.Tween(currentTargetD).to(targetD, state.labelsTransitionDuration).easing(exports$1.Easing.Quadratic.InOut).onUpdate(applyPosition).start();
            }
          }
        }
      });
    }
  });

  var CustomLayerKapsule = index$2({
    props: {
      customLayerData: {
        "default": []
      },
      customThreeObject: {},
      customThreeObjectUpdate: {
        triggerUpdate: false
      }
    },
    init: function init(threeObj, state) {
      // Clear the scene
      emptyObject(threeObj); // Main three object to manipulate

      state.scene = threeObj;
    },
    update: function update(state) {
      if (!state.customThreeObjectUpdate) {
        emptyObject(state.scene);
      } // Clear the existing objects to create all new, if there's no update method (brute-force)


      var customObjectAccessor = index$1(state.customThreeObject);
      var customObjectUpdateAccessor = index$1(state.customThreeObjectUpdate);
      threeDigest(state.customLayerData, state.scene, {
        createObj: function createObj(d) {
          var obj = customObjectAccessor(d, GLOBE_RADIUS);

          if (obj) {
            if (state.customThreeObject === obj) {
              // clone object if it's a shared object among all points
              obj = obj.clone();
            }

            obj.__globeObjType = 'custom'; // Add object type
          }

          return obj;
        },
        updateObj: function updateObj(obj, d) {
          return customObjectUpdateAccessor(obj, d, GLOBE_RADIUS);
        }
      });
    }
  });

  var THREE = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
  : {
    Group: three$1.Group,
    Vector2: three$1.Vector2,
    Vector3: three$1.Vector3
  };

  var layers = ['globeLayer', 'pointsLayer', 'arcsLayer', 'hexBinLayer', 'polygonsLayer', 'hexedPolygonsLayer', 'pathsLayer', 'tilesLayer', 'labelsLayer', 'customLayer']; // Expose config from layers

  var bindGlobeLayer = linkKapsule('globeLayer', GlobeLayerKapsule);
  var linkedGlobeLayerProps = Object.assign.apply(Object, _toConsumableArray$3(['globeImageUrl', 'bumpImageUrl', 'showGlobe', 'showGraticules', 'showAtmosphere', 'atmosphereColor', 'atmosphereAltitude'].map(function (p) {
    return _defineProperty$1({}, p, bindGlobeLayer.linkProp(p));
  })));
  var linkedGlobeLayerMethods = Object.assign.apply(Object, _toConsumableArray$3(['globeMaterial'].map(function (p) {
    return _defineProperty$1({}, p, bindGlobeLayer.linkMethod(p));
  })));
  var bindPointsLayer = linkKapsule('pointsLayer', PointsLayerKapsule);
  var linkedPointsLayerProps = Object.assign.apply(Object, _toConsumableArray$3(['pointsData', 'pointLat', 'pointLng', 'pointColor', 'pointAltitude', 'pointRadius', 'pointResolution', 'pointsMerge', 'pointsTransitionDuration'].map(function (p) {
    return _defineProperty$1({}, p, bindPointsLayer.linkProp(p));
  })));
  var bindArcsLayer = linkKapsule('arcsLayer', ArcsLayerKapsule);
  var linkedArcsLayerProps = Object.assign.apply(Object, _toConsumableArray$3(['arcsData', 'arcStartLat', 'arcStartLng', 'arcEndLat', 'arcEndLng', 'arcColor', 'arcAltitude', 'arcAltitudeAutoScale', 'arcStroke', 'arcCurveResolution', 'arcCircularResolution', 'arcDashLength', 'arcDashGap', 'arcDashInitialGap', 'arcDashAnimateTime', 'arcsTransitionDuration'].map(function (p) {
    return _defineProperty$1({}, p, bindArcsLayer.linkProp(p));
  })));
  var bindHexBinLayer = linkKapsule('hexBinLayer', HexBinLayerKapsule);
  var linkedHexBinLayerProps = Object.assign.apply(Object, _toConsumableArray$3(['hexBinPointsData', 'hexBinPointLat', 'hexBinPointLng', 'hexBinPointWeight', 'hexBinResolution', 'hexMargin', 'hexTopCurvatureResolution', 'hexTopColor', 'hexSideColor', 'hexAltitude', 'hexBinMerge', 'hexTransitionDuration'].map(function (p) {
    return _defineProperty$1({}, p, bindHexBinLayer.linkProp(p));
  })));
  var bindHexedPolygonsLayer = linkKapsule('hexedPolygonsLayer', HexedPolygonsLayerKapsule);
  var linkedHexedPolygonsLayerProps = Object.assign.apply(Object, _toConsumableArray$3(['hexPolygonsData', 'hexPolygonGeoJsonGeometry', 'hexPolygonColor', 'hexPolygonAltitude', 'hexPolygonResolution', 'hexPolygonMargin', 'hexPolygonCurvatureResolution', 'hexPolygonsTransitionDuration'].map(function (p) {
    return _defineProperty$1({}, p, bindHexedPolygonsLayer.linkProp(p));
  })));
  var bindPolygonsLayer = linkKapsule('polygonsLayer', PolygonsLayerKapsule);
  var linkedPolygonsLayerProps = Object.assign.apply(Object, _toConsumableArray$3(['polygonsData', 'polygonGeoJsonGeometry', 'polygonCapColor', 'polygonCapMaterial', 'polygonSideColor', 'polygonSideMaterial', 'polygonStrokeColor', 'polygonAltitude', 'polygonCapCurvatureResolution', 'polygonsTransitionDuration'].map(function (p) {
    return _defineProperty$1({}, p, bindPolygonsLayer.linkProp(p));
  })));
  var bindPathsLayer = linkKapsule('pathsLayer', PathsLayerKapsule);
  var linkedPathsLayerProps = Object.assign.apply(Object, _toConsumableArray$3(['pathsData', 'pathPoints', 'pathPointLat', 'pathPointLng', 'pathPointAlt', 'pathResolution', 'pathColor', 'pathStroke', 'pathDashLength', 'pathDashGap', 'pathDashInitialGap', 'pathDashAnimateTime', 'pathTransitionDuration'].map(function (p) {
    return _defineProperty$1({}, p, bindPathsLayer.linkProp(p));
  })));
  var bindTilesLayer = linkKapsule('tilesLayer', TilesLayerKapsule);
  var linkedTilesLayerProps = Object.assign.apply(Object, _toConsumableArray$3(['tilesData', 'tileLat', 'tileLng', 'tileAltitude', 'tileWidth', 'tileHeight', 'tileUseGlobeProjection', 'tileMaterial', 'tileCurvatureResolution', 'tilesTransitionDuration'].map(function (p) {
    return _defineProperty$1({}, p, bindTilesLayer.linkProp(p));
  })));
  var bindLabelsLayer = linkKapsule('labelsLayer', LabelsLayerKapsule);
  var linkedLabelsLayerProps = Object.assign.apply(Object, _toConsumableArray$3(['labelsData', 'labelLat', 'labelLng', 'labelAltitude', 'labelRotation', 'labelText', 'labelSize', 'labelTypeFace', 'labelColor', 'labelResolution', 'labelIncludeDot', 'labelDotRadius', 'labelDotOrientation', 'labelsTransitionDuration'].map(function (p) {
    return _defineProperty$1({}, p, bindLabelsLayer.linkProp(p));
  })));
  var bindCustomLayer = linkKapsule('customLayer', CustomLayerKapsule);
  var linkedCustomLayerProps = Object.assign.apply(Object, _toConsumableArray$3(['customLayerData', 'customThreeObject', 'customThreeObjectUpdate'].map(function (p) {
    return _defineProperty$1({}, p, bindCustomLayer.linkProp(p));
  }))); //

  var Globe = index$2({
    props: _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({
      onGlobeReady: {
        triggerUpdate: false
      },
      rendererSize: {
        "default": new THREE.Vector2(window.innerWidth, window.innerHeight),
        onChange: function onChange(rendererSize, state) {
          state.pathsLayer.rendererSize(rendererSize);
        },
        triggerUpdate: false
      }
    }, linkedGlobeLayerProps), linkedPointsLayerProps), linkedArcsLayerProps), linkedHexBinLayerProps), linkedPolygonsLayerProps), linkedHexedPolygonsLayerProps), linkedPathsLayerProps), linkedTilesLayerProps), linkedLabelsLayerProps), linkedCustomLayerProps),
    methods: _objectSpread2$1({
      getCoords: function getCoords(state) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return polar2Cartesian$2.apply(void 0, args);
      },
      toGeoCoords: function toGeoCoords(state) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        return cartesian2Polar.apply(void 0, args);
      }
    }, linkedGlobeLayerMethods),
    stateInit: function stateInit() {
      return {
        globeLayer: GlobeLayerKapsule(),
        pointsLayer: PointsLayerKapsule(),
        arcsLayer: ArcsLayerKapsule(),
        hexBinLayer: HexBinLayerKapsule(),
        polygonsLayer: PolygonsLayerKapsule(),
        hexedPolygonsLayer: HexedPolygonsLayerKapsule(),
        pathsLayer: PathsLayerKapsule(),
        tilesLayer: TilesLayerKapsule(),
        labelsLayer: LabelsLayerKapsule(),
        customLayer: CustomLayerKapsule()
      };
    },
    init: function init(threeObj, state, _ref12) {
      var _ref12$animateIn = _ref12.animateIn,
          animateIn = _ref12$animateIn === void 0 ? true : _ref12$animateIn,
          _ref12$waitForGlobeRe = _ref12.waitForGlobeReady,
          waitForGlobeReady = _ref12$waitForGlobeRe === void 0 ? true : _ref12$waitForGlobeRe;
      // Clear the scene
      emptyObject(threeObj); // Main three object to manipulate

      threeObj.add(state.scene = new THREE.Group());
      state.scene.visible = false; // hide scene before globe initialization
      // Add all layers groups

      layers.forEach(function (layer) {
        var g = new THREE.Group();
        state.scene.add(g);
        state[layer](g);
      });

      var initGlobe = function initGlobe() {
        if (animateIn) {
          // Animate build-in just once
          state.scene.scale.set(1e-6, 1e-6, 1e-6);
          new exports$1.Tween({
            k: 1e-6
          }).to({
            k: 1
          }, 600).easing(exports$1.Easing.Quadratic.Out).onUpdate(function (_ref13) {
            var k = _ref13.k;
            return state.scene.scale.set(k, k, k);
          }).start();
          var rotAxis = new THREE.Vector3(0, 1, 0);
          new exports$1.Tween({
            rot: Math.PI * 2
          }).to({
            rot: 0
          }, 1200).easing(exports$1.Easing.Quintic.Out).onUpdate(function (_ref14) {
            var rot = _ref14.rot;
            return state.scene.setRotationFromAxisAngle(rotAxis, rot);
          }).start();
        }

        state.scene.visible = true;
        state.onGlobeReady && state.onGlobeReady();
      };

      waitForGlobeReady ? state.globeLayer.onReady(initGlobe) : initGlobe(); // run tween updates

      (function onFrame() {
        requestAnimationFrame(onFrame);
        exports$1.update();
      })(); // IIFE

    },
    update: function update(state) {}
  });

  function fromKapsule (kapsule) {
    var baseClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object;
    var initKapsuleWithSelf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var FromKapsule = /*#__PURE__*/function (_baseClass) {
      _inherits$2(FromKapsule, _baseClass);

      var _super = _createSuper$2(FromKapsule);

      function FromKapsule() {
        var _this;

        _classCallCheck$3(this, FromKapsule);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _super.call.apply(_super, [this].concat(args));
        _this.__kapsuleInstance = kapsule.apply(void 0, args).apply(void 0, [].concat(_toConsumableArray$3(initKapsuleWithSelf ? [_assertThisInitialized$2(_this)] : []), args));
        return _this;
      }

      return FromKapsule;
    }(baseClass); // attach kapsule props/methods to class prototype


    Object.keys(kapsule()).forEach(function (m) {
      return FromKapsule.prototype[m] = function () {
        var _this$__kapsuleInstan;

        var returnVal = (_this$__kapsuleInstan = this.__kapsuleInstance)[m].apply(_this$__kapsuleInstan, arguments);

        return returnVal === this.__kapsuleInstance ? this // chain based on this class, not the kapsule obj
        : returnVal;
      };
    });
    return FromKapsule;
  }

  var three = window.THREE ? window.THREE : {
    Group: three$1.Group
  }; // Prefer consumption from global THREE, if exists
  var threeGlobe = fromKapsule(Globe, three.Group, true);

  return threeGlobe;

})));
//# sourceMappingURL=three-globe.js.map