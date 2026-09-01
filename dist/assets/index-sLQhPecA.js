(function () {
  const S = document.createElement("link").relList;
  if (S && S.supports && S.supports("modulepreload")) return;
  for (const N of document.querySelectorAll('link[rel="modulepreload"]')) k(N);
  new MutationObserver((N) => {
    for (const v of N)
      if (v.type === "childList")
        for (const b of v.addedNodes)
          b.tagName === "LINK" && b.rel === "modulepreload" && k(b);
  }).observe(document, { childList: !0, subtree: !0 });
  function p(N) {
    const v = {};
    return (
      N.integrity && (v.integrity = N.integrity),
      N.referrerPolicy && (v.referrerPolicy = N.referrerPolicy),
      N.crossOrigin === "use-credentials"
        ? (v.credentials = "include")
        : N.crossOrigin === "anonymous"
          ? (v.credentials = "omit")
          : (v.credentials = "same-origin"),
      v
    );
  }
  function k(N) {
    if (N.ep) return;
    N.ep = !0;
    const v = p(N);
    fetch(N.href, v);
  }
})();
function $d(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default")
    ? g.default
    : g;
}
var Fi = { exports: {} },
  Er = {},
  _i = { exports: {} },
  oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zu;
function Ud() {
  if (zu) return oe;
  zu = 1;
  var g = Symbol.for("react.element"),
    S = Symbol.for("react.portal"),
    p = Symbol.for("react.fragment"),
    k = Symbol.for("react.strict_mode"),
    N = Symbol.for("react.profiler"),
    v = Symbol.for("react.provider"),
    b = Symbol.for("react.context"),
    F = Symbol.for("react.forward_ref"),
    M = Symbol.for("react.suspense"),
    I = Symbol.for("react.memo"),
    Y = Symbol.for("react.lazy"),
    L = Symbol.iterator;
  function A(d) {
    return d === null || typeof d != "object"
      ? null
      : ((d = (L && d[L]) || d["@@iterator"]),
        typeof d == "function" ? d : null);
  }
  var J = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    re = Object.assign,
    ne = {};
  function te(d, y, V) {
    ((this.props = d),
      (this.context = y),
      (this.refs = ne),
      (this.updater = V || J));
  }
  ((te.prototype.isReactComponent = {}),
    (te.prototype.setState = function (d, y) {
      if (typeof d != "object" && typeof d != "function" && d != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, d, y, "setState");
    }),
    (te.prototype.forceUpdate = function (d) {
      this.updater.enqueueForceUpdate(this, d, "forceUpdate");
    }));
  function Ue() {}
  Ue.prototype = te.prototype;
  function He(d, y, V) {
    ((this.props = d),
      (this.context = y),
      (this.refs = ne),
      (this.updater = V || J));
  }
  var De = (He.prototype = new Ue());
  ((De.constructor = He), re(De, te.prototype), (De.isPureReactComponent = !0));
  var je = Array.isArray,
    Me = Object.prototype.hasOwnProperty,
    de = { current: null },
    be = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ie(d, y, V) {
    var Q,
      Z = {},
      ee = null,
      q = null;
    if (y != null)
      for (Q in (y.ref !== void 0 && (q = y.ref),
      y.key !== void 0 && (ee = "" + y.key),
      y))
        Me.call(y, Q) && !be.hasOwnProperty(Q) && (Z[Q] = y[Q]);
    var K = arguments.length - 2;
    if (K === 1) Z.children = V;
    else if (1 < K) {
      for (var le = Array(K), Ne = 0; Ne < K; Ne++) le[Ne] = arguments[Ne + 2];
      Z.children = le;
    }
    if (d && d.defaultProps)
      for (Q in ((K = d.defaultProps), K)) Z[Q] === void 0 && (Z[Q] = K[Q]);
    return {
      $$typeof: g,
      type: d,
      key: ee,
      ref: q,
      props: Z,
      _owner: de.current,
    };
  }
  function Fe(d, y) {
    return {
      $$typeof: g,
      type: d.type,
      key: y,
      ref: d.ref,
      props: d.props,
      _owner: d._owner,
    };
  }
  function Re(d) {
    return typeof d == "object" && d !== null && d.$$typeof === g;
  }
  function $(d) {
    var y = { "=": "=0", ":": "=2" };
    return (
      "$" +
      d.replace(/[=:]/g, function (V) {
        return y[V];
      })
    );
  }
  var z = /\/+/g;
  function X(d, y) {
    return typeof d == "object" && d !== null && d.key != null
      ? $("" + d.key)
      : y.toString(36);
  }
  function U(d, y, V, Q, Z) {
    var ee = typeof d;
    (ee === "undefined" || ee === "boolean") && (d = null);
    var q = !1;
    if (d === null) q = !0;
    else
      switch (ee) {
        case "string":
        case "number":
          q = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case g:
            case S:
              q = !0;
          }
      }
    if (q)
      return (
        (q = d),
        (Z = Z(q)),
        (d = Q === "" ? "." + X(q, 0) : Q),
        je(Z)
          ? ((V = ""),
            d != null && (V = d.replace(z, "$&/") + "/"),
            U(Z, y, V, "", function (Ne) {
              return Ne;
            }))
          : Z != null &&
            (Re(Z) &&
              (Z = Fe(
                Z,
                V +
                  (!Z.key || (q && q.key === Z.key)
                    ? ""
                    : ("" + Z.key).replace(z, "$&/") + "/") +
                  d,
              )),
            y.push(Z)),
        1
      );
    if (((q = 0), (Q = Q === "" ? "." : Q + ":"), je(d)))
      for (var K = 0; K < d.length; K++) {
        ee = d[K];
        var le = Q + X(ee, K);
        q += U(ee, y, V, le, Z);
      }
    else if (((le = A(d)), typeof le == "function"))
      for (d = le.call(d), K = 0; !(ee = d.next()).done; )
        ((ee = ee.value), (le = Q + X(ee, K++)), (q += U(ee, y, V, le, Z)));
    else if (ee === "object")
      throw (
        (y = String(d)),
        Error(
          "Objects are not valid as a React child (found: " +
            (y === "[object Object]"
              ? "object with keys {" + Object.keys(d).join(", ") + "}"
              : y) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return q;
  }
  function me(d, y, V) {
    if (d == null) return d;
    var Q = [],
      Z = 0;
    return (
      U(d, Q, "", "", function (ee) {
        return y.call(V, ee, Z++);
      }),
      Q
    );
  }
  function he(d) {
    if (d._status === -1) {
      var y = d._result;
      ((y = y()),
        y.then(
          function (V) {
            (d._status === 0 || d._status === -1) &&
              ((d._status = 1), (d._result = V));
          },
          function (V) {
            (d._status === 0 || d._status === -1) &&
              ((d._status = 2), (d._result = V));
          },
        ),
        d._status === -1 && ((d._status = 0), (d._result = y)));
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var ce = { current: null },
    C = { transition: null },
    O = {
      ReactCurrentDispatcher: ce,
      ReactCurrentBatchConfig: C,
      ReactCurrentOwner: de,
    };
  function _() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (oe.Children = {
      map: me,
      forEach: function (d, y, V) {
        me(
          d,
          function () {
            y.apply(this, arguments);
          },
          V,
        );
      },
      count: function (d) {
        var y = 0;
        return (
          me(d, function () {
            y++;
          }),
          y
        );
      },
      toArray: function (d) {
        return (
          me(d, function (y) {
            return y;
          }) || []
        );
      },
      only: function (d) {
        if (!Re(d))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return d;
      },
    }),
    (oe.Component = te),
    (oe.Fragment = p),
    (oe.Profiler = N),
    (oe.PureComponent = He),
    (oe.StrictMode = k),
    (oe.Suspense = M),
    (oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O),
    (oe.act = _),
    (oe.cloneElement = function (d, y, V) {
      if (d == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            d +
            ".",
        );
      var Q = re({}, d.props),
        Z = d.key,
        ee = d.ref,
        q = d._owner;
      if (y != null) {
        if (
          (y.ref !== void 0 && ((ee = y.ref), (q = de.current)),
          y.key !== void 0 && (Z = "" + y.key),
          d.type && d.type.defaultProps)
        )
          var K = d.type.defaultProps;
        for (le in y)
          Me.call(y, le) &&
            !be.hasOwnProperty(le) &&
            (Q[le] = y[le] === void 0 && K !== void 0 ? K[le] : y[le]);
      }
      var le = arguments.length - 2;
      if (le === 1) Q.children = V;
      else if (1 < le) {
        K = Array(le);
        for (var Ne = 0; Ne < le; Ne++) K[Ne] = arguments[Ne + 2];
        Q.children = K;
      }
      return {
        $$typeof: g,
        type: d.type,
        key: Z,
        ref: ee,
        props: Q,
        _owner: q,
      };
    }),
    (oe.createContext = function (d) {
      return (
        (d = {
          $$typeof: b,
          _currentValue: d,
          _currentValue2: d,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (d.Provider = { $$typeof: v, _context: d }),
        (d.Consumer = d)
      );
    }),
    (oe.createElement = ie),
    (oe.createFactory = function (d) {
      var y = ie.bind(null, d);
      return ((y.type = d), y);
    }),
    (oe.createRef = function () {
      return { current: null };
    }),
    (oe.forwardRef = function (d) {
      return { $$typeof: F, render: d };
    }),
    (oe.isValidElement = Re),
    (oe.lazy = function (d) {
      return { $$typeof: Y, _payload: { _status: -1, _result: d }, _init: he };
    }),
    (oe.memo = function (d, y) {
      return { $$typeof: I, type: d, compare: y === void 0 ? null : y };
    }),
    (oe.startTransition = function (d) {
      var y = C.transition;
      C.transition = {};
      try {
        d();
      } finally {
        C.transition = y;
      }
    }),
    (oe.unstable_act = _),
    (oe.useCallback = function (d, y) {
      return ce.current.useCallback(d, y);
    }),
    (oe.useContext = function (d) {
      return ce.current.useContext(d);
    }),
    (oe.useDebugValue = function () {}),
    (oe.useDeferredValue = function (d) {
      return ce.current.useDeferredValue(d);
    }),
    (oe.useEffect = function (d, y) {
      return ce.current.useEffect(d, y);
    }),
    (oe.useId = function () {
      return ce.current.useId();
    }),
    (oe.useImperativeHandle = function (d, y, V) {
      return ce.current.useImperativeHandle(d, y, V);
    }),
    (oe.useInsertionEffect = function (d, y) {
      return ce.current.useInsertionEffect(d, y);
    }),
    (oe.useLayoutEffect = function (d, y) {
      return ce.current.useLayoutEffect(d, y);
    }),
    (oe.useMemo = function (d, y) {
      return ce.current.useMemo(d, y);
    }),
    (oe.useReducer = function (d, y, V) {
      return ce.current.useReducer(d, y, V);
    }),
    (oe.useRef = function (d) {
      return ce.current.useRef(d);
    }),
    (oe.useState = function (d) {
      return ce.current.useState(d);
    }),
    (oe.useSyncExternalStore = function (d, y, V) {
      return ce.current.useSyncExternalStore(d, y, V);
    }),
    (oe.useTransition = function () {
      return ce.current.useTransition();
    }),
    (oe.version = "18.3.1"),
    oe
  );
}
var Fu;
function Bi() {
  return (Fu || ((Fu = 1), (_i.exports = Ud())), _i.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _u;
function Hd() {
  if (_u) return Er;
  _u = 1;
  var g = Bi(),
    S = Symbol.for("react.element"),
    p = Symbol.for("react.fragment"),
    k = Object.prototype.hasOwnProperty,
    N = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(F, M, I) {
    var Y,
      L = {},
      A = null,
      J = null;
    (I !== void 0 && (A = "" + I),
      M.key !== void 0 && (A = "" + M.key),
      M.ref !== void 0 && (J = M.ref));
    for (Y in M) k.call(M, Y) && !v.hasOwnProperty(Y) && (L[Y] = M[Y]);
    if (F && F.defaultProps)
      for (Y in ((M = F.defaultProps), M)) L[Y] === void 0 && (L[Y] = M[Y]);
    return {
      $$typeof: S,
      type: F,
      key: A,
      ref: J,
      props: L,
      _owner: N.current,
    };
  }
  return ((Er.Fragment = p), (Er.jsx = b), (Er.jsxs = b), Er);
}
var Pu;
function Wd() {
  return (Pu || ((Pu = 1), (Fi.exports = Hd())), Fi.exports);
}
var a = Wd(),
  Ll = {},
  Pi = { exports: {} },
  tt = {},
  Ti = { exports: {} },
  Mi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tu;
function Vd() {
  return (
    Tu ||
      ((Tu = 1),
      (function (g) {
        function S(C, O) {
          var _ = C.length;
          C.push(O);
          e: for (; 0 < _; ) {
            var d = (_ - 1) >>> 1,
              y = C[d];
            if (0 < N(y, O)) ((C[d] = O), (C[_] = y), (_ = d));
            else break e;
          }
        }
        function p(C) {
          return C.length === 0 ? null : C[0];
        }
        function k(C) {
          if (C.length === 0) return null;
          var O = C[0],
            _ = C.pop();
          if (_ !== O) {
            C[0] = _;
            e: for (var d = 0, y = C.length, V = y >>> 1; d < V; ) {
              var Q = 2 * (d + 1) - 1,
                Z = C[Q],
                ee = Q + 1,
                q = C[ee];
              if (0 > N(Z, _))
                ee < y && 0 > N(q, Z)
                  ? ((C[d] = q), (C[ee] = _), (d = ee))
                  : ((C[d] = Z), (C[Q] = _), (d = Q));
              else if (ee < y && 0 > N(q, _))
                ((C[d] = q), (C[ee] = _), (d = ee));
              else break e;
            }
          }
          return O;
        }
        function N(C, O) {
          var _ = C.sortIndex - O.sortIndex;
          return _ !== 0 ? _ : C.id - O.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var v = performance;
          g.unstable_now = function () {
            return v.now();
          };
        } else {
          var b = Date,
            F = b.now();
          g.unstable_now = function () {
            return b.now() - F;
          };
        }
        var M = [],
          I = [],
          Y = 1,
          L = null,
          A = 3,
          J = !1,
          re = !1,
          ne = !1,
          te = typeof setTimeout == "function" ? setTimeout : null,
          Ue = typeof clearTimeout == "function" ? clearTimeout : null,
          He = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function De(C) {
          for (var O = p(I); O !== null; ) {
            if (O.callback === null) k(I);
            else if (O.startTime <= C)
              (k(I), (O.sortIndex = O.expirationTime), S(M, O));
            else break;
            O = p(I);
          }
        }
        function je(C) {
          if (((ne = !1), De(C), !re))
            if (p(M) !== null) ((re = !0), he(Me));
            else {
              var O = p(I);
              O !== null && ce(je, O.startTime - C);
            }
        }
        function Me(C, O) {
          ((re = !1), ne && ((ne = !1), Ue(ie), (ie = -1)), (J = !0));
          var _ = A;
          try {
            for (
              De(O), L = p(M);
              L !== null && (!(L.expirationTime > O) || (C && !$()));
            ) {
              var d = L.callback;
              if (typeof d == "function") {
                ((L.callback = null), (A = L.priorityLevel));
                var y = d(L.expirationTime <= O);
                ((O = g.unstable_now()),
                  typeof y == "function"
                    ? (L.callback = y)
                    : L === p(M) && k(M),
                  De(O));
              } else k(M);
              L = p(M);
            }
            if (L !== null) var V = !0;
            else {
              var Q = p(I);
              (Q !== null && ce(je, Q.startTime - O), (V = !1));
            }
            return V;
          } finally {
            ((L = null), (A = _), (J = !1));
          }
        }
        var de = !1,
          be = null,
          ie = -1,
          Fe = 5,
          Re = -1;
        function $() {
          return !(g.unstable_now() - Re < Fe);
        }
        function z() {
          if (be !== null) {
            var C = g.unstable_now();
            Re = C;
            var O = !0;
            try {
              O = be(!0, C);
            } finally {
              O ? X() : ((de = !1), (be = null));
            }
          } else de = !1;
        }
        var X;
        if (typeof He == "function")
          X = function () {
            He(z);
          };
        else if (typeof MessageChannel < "u") {
          var U = new MessageChannel(),
            me = U.port2;
          ((U.port1.onmessage = z),
            (X = function () {
              me.postMessage(null);
            }));
        } else
          X = function () {
            te(z, 0);
          };
        function he(C) {
          ((be = C), de || ((de = !0), X()));
        }
        function ce(C, O) {
          ie = te(function () {
            C(g.unstable_now());
          }, O);
        }
        ((g.unstable_IdlePriority = 5),
          (g.unstable_ImmediatePriority = 1),
          (g.unstable_LowPriority = 4),
          (g.unstable_NormalPriority = 3),
          (g.unstable_Profiling = null),
          (g.unstable_UserBlockingPriority = 2),
          (g.unstable_cancelCallback = function (C) {
            C.callback = null;
          }),
          (g.unstable_continueExecution = function () {
            re || J || ((re = !0), he(Me));
          }),
          (g.unstable_forceFrameRate = function (C) {
            0 > C || 125 < C
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Fe = 0 < C ? Math.floor(1e3 / C) : 5);
          }),
          (g.unstable_getCurrentPriorityLevel = function () {
            return A;
          }),
          (g.unstable_getFirstCallbackNode = function () {
            return p(M);
          }),
          (g.unstable_next = function (C) {
            switch (A) {
              case 1:
              case 2:
              case 3:
                var O = 3;
                break;
              default:
                O = A;
            }
            var _ = A;
            A = O;
            try {
              return C();
            } finally {
              A = _;
            }
          }),
          (g.unstable_pauseExecution = function () {}),
          (g.unstable_requestPaint = function () {}),
          (g.unstable_runWithPriority = function (C, O) {
            switch (C) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                C = 3;
            }
            var _ = A;
            A = C;
            try {
              return O();
            } finally {
              A = _;
            }
          }),
          (g.unstable_scheduleCallback = function (C, O, _) {
            var d = g.unstable_now();
            switch (
              (typeof _ == "object" && _ !== null
                ? ((_ = _.delay),
                  (_ = typeof _ == "number" && 0 < _ ? d + _ : d))
                : (_ = d),
              C)
            ) {
              case 1:
                var y = -1;
                break;
              case 2:
                y = 250;
                break;
              case 5:
                y = 1073741823;
                break;
              case 4:
                y = 1e4;
                break;
              default:
                y = 5e3;
            }
            return (
              (y = _ + y),
              (C = {
                id: Y++,
                callback: O,
                priorityLevel: C,
                startTime: _,
                expirationTime: y,
                sortIndex: -1,
              }),
              _ > d
                ? ((C.sortIndex = _),
                  S(I, C),
                  p(M) === null &&
                    C === p(I) &&
                    (ne ? (Ue(ie), (ie = -1)) : (ne = !0), ce(je, _ - d)))
                : ((C.sortIndex = y), S(M, C), re || J || ((re = !0), he(Me))),
              C
            );
          }),
          (g.unstable_shouldYield = $),
          (g.unstable_wrapCallback = function (C) {
            var O = A;
            return function () {
              var _ = A;
              A = O;
              try {
                return C.apply(this, arguments);
              } finally {
                A = _;
              }
            };
          }));
      })(Mi)),
    Mi
  );
}
var Mu;
function Qd() {
  return (Mu || ((Mu = 1), (Ti.exports = Vd())), Ti.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ru;
function Kd() {
  if (Ru) return tt;
  Ru = 1;
  var g = Bi(),
    S = Qd();
  function p(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var k = new Set(),
    N = {};
  function v(e, t) {
    (b(e, t), b(e + "Capture", t));
  }
  function b(e, t) {
    for (N[e] = t, e = 0; e < t.length; e++) k.add(t[e]);
  }
  var F = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    M = Object.prototype.hasOwnProperty,
    I =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Y = {},
    L = {};
  function A(e) {
    return M.call(L, e)
      ? !0
      : M.call(Y, e)
        ? !1
        : I.test(e)
          ? (L[e] = !0)
          : ((Y[e] = !0), !1);
  }
  function J(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function re(e, t, n, r) {
    if (t === null || typeof t > "u" || J(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function ne(e, t, n, r, l, o, i) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = i));
  }
  var te = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      te[e] = new ne(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      te[t] = new ne(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        te[e] = new ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      te[e] = new ne(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        te[e] = new ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      te[e] = new ne(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      te[e] = new ne(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      te[e] = new ne(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      te[e] = new ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var Ue = /[\-:]([a-z])/g;
  function He(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Ue, He);
      te[t] = new ne(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(Ue, He);
        te[t] = new ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(Ue, He);
      te[t] = new ne(
        t,
        1,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1,
      );
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      te[e] = new ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (te.xlinkHref = new ne(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      te[e] = new ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function De(e, t, n, r) {
    var l = te.hasOwnProperty(t) ? te[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (re(t, n, l, r) && (n = null),
      r || l === null
        ? A(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var je = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Me = Symbol.for("react.element"),
    de = Symbol.for("react.portal"),
    be = Symbol.for("react.fragment"),
    ie = Symbol.for("react.strict_mode"),
    Fe = Symbol.for("react.profiler"),
    Re = Symbol.for("react.provider"),
    $ = Symbol.for("react.context"),
    z = Symbol.for("react.forward_ref"),
    X = Symbol.for("react.suspense"),
    U = Symbol.for("react.suspense_list"),
    me = Symbol.for("react.memo"),
    he = Symbol.for("react.lazy"),
    ce = Symbol.for("react.offscreen"),
    C = Symbol.iterator;
  function O(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (C && e[C]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var _ = Object.assign,
    d;
  function y(e) {
    if (d === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        d = (t && t[1]) || "";
      }
    return (
      `
` +
      d +
      e
    );
  }
  var V = !1;
  function Q(e, t) {
    if (!e || V) return "";
    V = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (h) {
            var r = h;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (h) {
            r = h;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (h) {
          r = h;
        }
        e();
      }
    } catch (h) {
      if (h && r && typeof h.stack == "string") {
        for (
          var l = h.stack.split(`
`),
            o = r.stack.split(`
`),
            i = l.length - 1,
            s = o.length - 1;
          1 <= i && 0 <= s && l[i] !== o[s];
        )
          s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (l[i] !== o[s]) {
            if (i !== 1 || s !== 1)
              do
                if ((i--, s--, 0 > s || l[i] !== o[s])) {
                  var u =
                    `
` + l[i].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      u.includes("<anonymous>") &&
                      (u = u.replace("<anonymous>", e.displayName)),
                    u
                  );
                }
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      ((V = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function Z(e) {
    switch (e.tag) {
      case 5:
        return y(e.type);
      case 16:
        return y("Lazy");
      case 13:
        return y("Suspense");
      case 19:
        return y("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = Q(e.type, !1)), e);
      case 11:
        return ((e = Q(e.type.render, !1)), e);
      case 1:
        return ((e = Q(e.type, !0)), e);
      default:
        return "";
    }
  }
  function ee(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case be:
        return "Fragment";
      case de:
        return "Portal";
      case Fe:
        return "Profiler";
      case ie:
        return "StrictMode";
      case X:
        return "Suspense";
      case U:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case $:
          return (e.displayName || "Context") + ".Consumer";
        case Re:
          return (e._context.displayName || "Context") + ".Provider";
        case z:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case me:
          return (
            (t = e.displayName || null),
            t !== null ? t : ee(e.type) || "Memo"
          );
        case he:
          ((t = e._payload), (e = e._init));
          try {
            return ee(e(t));
          } catch {}
      }
    return null;
  }
  function q(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ee(t);
      case 8:
        return t === ie ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function K(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function le(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ne(e) {
    var t = le(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (i) {
            ((r = "" + i), o.call(this, i));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (i) {
            r = "" + i;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function nt(e) {
    e._valueTracker || (e._valueTracker = Ne(e));
  }
  function at(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = le(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function pe(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function se(e, t) {
    var n = t.checked;
    return _({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Oe(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = K(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      }));
  }
  function mt(e, t) {
    ((t = t.checked), t != null && De(e, "checked", t, !1));
  }
  function mn(e, t) {
    mt(e, t);
    var n = K(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? Il(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Il(e, t.type, K(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function Ii(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n));
  }
  function Il(e, t, n) {
    (t !== "number" || pe(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var An = Array.isArray;
  function hn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + K(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Dl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(p(91));
    return _({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Di(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(p(92));
        if (An(n)) {
          if (1 < n.length) throw Error(p(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: K(n) };
  }
  function Oi(e, t) {
    var n = K(t.value),
      r = K(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Ai(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function $i(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ol(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? $i(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Cr,
    Ui = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Cr = Cr || document.createElement("div"),
            Cr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Cr.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function $n(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Un = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Vu = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Un).forEach(function (e) {
    Vu.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Un[t] = Un[e]));
    });
  });
  function Hi(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Un.hasOwnProperty(e) && Un[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Wi(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Hi(n, t[n], r);
        (n === "float" && (n = "cssFloat"),
          r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Qu = _(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function Al(e, t) {
    if (t) {
      if (Qu[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(p(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(p(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(p(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(p(62));
    }
  }
  function $l(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ul = null;
  function Hl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Wl = null,
    gn = null,
    vn = null;
  function Vi(e) {
    if ((e = cr(e))) {
      if (typeof Wl != "function") throw Error(p(280));
      var t = e.stateNode;
      t && ((t = Jr(t)), Wl(e.stateNode, e.type, t));
    }
  }
  function Qi(e) {
    gn ? (vn ? vn.push(e) : (vn = [e])) : (gn = e);
  }
  function Ki() {
    if (gn) {
      var e = gn,
        t = vn;
      if (((vn = gn = null), Vi(e), t)) for (e = 0; e < t.length; e++) Vi(t[e]);
    }
  }
  function Gi(e, t) {
    return e(t);
  }
  function Yi() {}
  var Vl = !1;
  function Ji(e, t, n) {
    if (Vl) return e(t, n);
    Vl = !0;
    try {
      return Gi(e, t, n);
    } finally {
      ((Vl = !1), (gn !== null || vn !== null) && (Yi(), Ki()));
    }
  }
  function Hn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Jr(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(p(231, t, typeof n));
    return n;
  }
  var Ql = !1;
  if (F)
    try {
      var Wn = {};
      (Object.defineProperty(Wn, "passive", {
        get: function () {
          Ql = !0;
        },
      }),
        window.addEventListener("test", Wn, Wn),
        window.removeEventListener("test", Wn, Wn));
    } catch {
      Ql = !1;
    }
  function Ku(e, t, n, r, l, o, i, s, u) {
    var h = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, h);
    } catch (w) {
      this.onError(w);
    }
  }
  var Vn = !1,
    zr = null,
    Fr = !1,
    Kl = null,
    Gu = {
      onError: function (e) {
        ((Vn = !0), (zr = e));
      },
    };
  function Yu(e, t, n, r, l, o, i, s, u) {
    ((Vn = !1), (zr = null), Ku.apply(Gu, arguments));
  }
  function Ju(e, t, n, r, l, o, i, s, u) {
    if ((Yu.apply(this, arguments), Vn)) {
      if (Vn) {
        var h = zr;
        ((Vn = !1), (zr = null));
      } else throw Error(p(198));
      Fr || ((Fr = !0), (Kl = h));
    }
  }
  function en(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Xi(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function qi(e) {
    if (en(e) !== e) throw Error(p(188));
  }
  function Xu(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = en(e)), t === null)) throw Error(p(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return (qi(l), e);
          if (o === r) return (qi(l), t);
          o = o.sibling;
        }
        throw Error(p(188));
      }
      if (n.return !== r.return) ((n = l), (r = o));
      else {
        for (var i = !1, s = l.child; s; ) {
          if (s === n) {
            ((i = !0), (n = l), (r = o));
            break;
          }
          if (s === r) {
            ((i = !0), (r = l), (n = o));
            break;
          }
          s = s.sibling;
        }
        if (!i) {
          for (s = o.child; s; ) {
            if (s === n) {
              ((i = !0), (n = o), (r = l));
              break;
            }
            if (s === r) {
              ((i = !0), (r = o), (n = l));
              break;
            }
            s = s.sibling;
          }
          if (!i) throw Error(p(189));
        }
      }
      if (n.alternate !== r) throw Error(p(190));
    }
    if (n.tag !== 3) throw Error(p(188));
    return n.stateNode.current === n ? e : t;
  }
  function Zi(e) {
    return ((e = Xu(e)), e !== null ? ea(e) : null);
  }
  function ea(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ea(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ta = S.unstable_scheduleCallback,
    na = S.unstable_cancelCallback,
    qu = S.unstable_shouldYield,
    Zu = S.unstable_requestPaint,
    Ce = S.unstable_now,
    ec = S.unstable_getCurrentPriorityLevel,
    Gl = S.unstable_ImmediatePriority,
    ra = S.unstable_UserBlockingPriority,
    _r = S.unstable_NormalPriority,
    tc = S.unstable_LowPriority,
    la = S.unstable_IdlePriority,
    Pr = null,
    St = null;
  function nc(e) {
    if (St && typeof St.onCommitFiberRoot == "function")
      try {
        St.onCommitFiberRoot(Pr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var ht = Math.clz32 ? Math.clz32 : oc,
    rc = Math.log,
    lc = Math.LN2;
  function oc(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((rc(e) / lc) | 0)) | 0);
  }
  var Tr = 64,
    Mr = 4194304;
  function Qn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Rr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      i = n & 268435455;
    if (i !== 0) {
      var s = i & ~l;
      s !== 0 ? (r = Qn(s)) : ((o &= i), o !== 0 && (r = Qn(o)));
    } else ((i = n & ~l), i !== 0 ? (r = Qn(i)) : o !== 0 && (r = Qn(o)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        ((n = 31 - ht(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function ic(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ac(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;
    ) {
      var i = 31 - ht(o),
        s = 1 << i,
        u = l[i];
      (u === -1
        ? ((s & n) === 0 || (s & r) !== 0) && (l[i] = ic(s, t))
        : u <= t && (e.expiredLanes |= s),
        (o &= ~s));
    }
  }
  function Yl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function oa() {
    var e = Tr;
    return ((Tr <<= 1), (Tr & 4194240) === 0 && (Tr = 64), e);
  }
  function Jl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Kn(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - ht(t)),
      (e[t] = n));
  }
  function sc(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - ht(n),
        o = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o));
    }
  }
  function Xl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - ht(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var fe = 0;
  function ia(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var aa,
    ql,
    sa,
    ua,
    ca,
    Zl = !1,
    Lr = [],
    Lt = null,
    Bt = null,
    It = null,
    Gn = new Map(),
    Yn = new Map(),
    Dt = [],
    uc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function da(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Lt = null;
        break;
      case "dragenter":
      case "dragleave":
        Bt = null;
        break;
      case "mouseover":
      case "mouseout":
        It = null;
        break;
      case "pointerover":
      case "pointerout":
        Gn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Yn.delete(t.pointerId);
    }
  }
  function Jn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = cr(t)), t !== null && ql(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function cc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((Lt = Jn(Lt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((Bt = Jn(Bt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((It = Jn(It, e, t, n, r, l)), !0);
      case "pointerover":
        var o = l.pointerId;
        return (Gn.set(o, Jn(Gn.get(o) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return (
          (o = l.pointerId),
          Yn.set(o, Jn(Yn.get(o) || null, e, t, n, r, l)),
          !0
        );
    }
    return !1;
  }
  function fa(e) {
    var t = tn(e.target);
    if (t !== null) {
      var n = en(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Xi(n)), t !== null)) {
            ((e.blockedOn = t),
              ca(e.priority, function () {
                sa(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Br(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = to(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Ul = r), n.target.dispatchEvent(r), (Ul = null));
      } else return ((t = cr(n)), t !== null && ql(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function pa(e, t, n) {
    Br(e) && n.delete(t);
  }
  function dc() {
    ((Zl = !1),
      Lt !== null && Br(Lt) && (Lt = null),
      Bt !== null && Br(Bt) && (Bt = null),
      It !== null && Br(It) && (It = null),
      Gn.forEach(pa),
      Yn.forEach(pa));
  }
  function Xn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Zl ||
        ((Zl = !0),
        S.unstable_scheduleCallback(S.unstable_NormalPriority, dc)));
  }
  function qn(e) {
    function t(l) {
      return Xn(l, e);
    }
    if (0 < Lr.length) {
      Xn(Lr[0], e);
      for (var n = 1; n < Lr.length; n++) {
        var r = Lr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Lt !== null && Xn(Lt, e),
        Bt !== null && Xn(Bt, e),
        It !== null && Xn(It, e),
        Gn.forEach(t),
        Yn.forEach(t),
        n = 0;
      n < Dt.length;
      n++
    )
      ((r = Dt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Dt.length && ((n = Dt[0]), n.blockedOn === null); )
      (fa(n), n.blockedOn === null && Dt.shift());
  }
  var yn = je.ReactCurrentBatchConfig,
    Ir = !0;
  function fc(e, t, n, r) {
    var l = fe,
      o = yn.transition;
    yn.transition = null;
    try {
      ((fe = 1), eo(e, t, n, r));
    } finally {
      ((fe = l), (yn.transition = o));
    }
  }
  function pc(e, t, n, r) {
    var l = fe,
      o = yn.transition;
    yn.transition = null;
    try {
      ((fe = 4), eo(e, t, n, r));
    } finally {
      ((fe = l), (yn.transition = o));
    }
  }
  function eo(e, t, n, r) {
    if (Ir) {
      var l = to(e, t, n, r);
      if (l === null) (xo(e, t, r, Dr, n), da(e, r));
      else if (cc(l, e, t, n, r)) r.stopPropagation();
      else if ((da(e, r), t & 4 && -1 < uc.indexOf(e))) {
        for (; l !== null; ) {
          var o = cr(l);
          if (
            (o !== null && aa(o),
            (o = to(e, t, n, r)),
            o === null && xo(e, t, r, Dr, n),
            o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else xo(e, t, r, null, n);
    }
  }
  var Dr = null;
  function to(e, t, n, r) {
    if (((Dr = null), (e = Hl(r)), (e = tn(e)), e !== null))
      if (((t = en(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Xi(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Dr = e), null);
  }
  function ma(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ec()) {
          case Gl:
            return 1;
          case ra:
            return 4;
          case _r:
          case tc:
            return 16;
          case la:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ot = null,
    no = null,
    Or = null;
  function ha() {
    if (Or) return Or;
    var e,
      t = no,
      n = t.length,
      r,
      l = "value" in Ot ? Ot.value : Ot.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return (Or = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Ar(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function $r() {
    return !0;
  }
  function ga() {
    return !1;
  }
  function rt(e) {
    function t(n, r, l, o, i) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = i),
        (this.currentTarget = null));
      for (var s in e)
        e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? $r
          : ga),
        (this.isPropagationStopped = ga),
        this
      );
    }
    return (
      _(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = $r));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = $r));
        },
        persist: function () {},
        isPersistent: $r,
      }),
      t
    );
  }
  var xn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ro = rt(xn),
    Zn = _({}, xn, { view: 0, detail: 0 }),
    mc = rt(Zn),
    lo,
    oo,
    er,
    Ur = _({}, Zn, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ao,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== er &&
              (er && e.type === "mousemove"
                ? ((lo = e.screenX - er.screenX), (oo = e.screenY - er.screenY))
                : (oo = lo = 0),
              (er = e)),
            lo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : oo;
      },
    }),
    va = rt(Ur),
    hc = _({}, Ur, { dataTransfer: 0 }),
    gc = rt(hc),
    vc = _({}, Zn, { relatedTarget: 0 }),
    io = rt(vc),
    yc = _({}, xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    xc = rt(yc),
    kc = _({}, xn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    wc = rt(kc),
    Sc = _({}, xn, { data: 0 }),
    ya = rt(Sc),
    jc = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Nc = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Ec = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function bc(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Ec[e])
        ? !!t[e]
        : !1;
  }
  function ao() {
    return bc;
  }
  var Cc = _({}, Zn, {
      key: function (e) {
        if (e.key) {
          var t = jc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ar(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Nc[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ao,
      charCode: function (e) {
        return e.type === "keypress" ? Ar(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ar(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    zc = rt(Cc),
    Fc = _({}, Ur, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    xa = rt(Fc),
    _c = _({}, Zn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ao,
    }),
    Pc = rt(_c),
    Tc = _({}, xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Mc = rt(Tc),
    Rc = _({}, Ur, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Lc = rt(Rc),
    Bc = [9, 13, 27, 32],
    so = F && "CompositionEvent" in window,
    tr = null;
  F && "documentMode" in document && (tr = document.documentMode);
  var Ic = F && "TextEvent" in window && !tr,
    ka = F && (!so || (tr && 8 < tr && 11 >= tr)),
    wa = " ",
    Sa = !1;
  function ja(e, t) {
    switch (e) {
      case "keyup":
        return Bc.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Na(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var kn = !1;
  function Dc(e, t) {
    switch (e) {
      case "compositionend":
        return Na(t);
      case "keypress":
        return t.which !== 32 ? null : ((Sa = !0), wa);
      case "textInput":
        return ((e = t.data), e === wa && Sa ? null : e);
      default:
        return null;
    }
  }
  function Oc(e, t) {
    if (kn)
      return e === "compositionend" || (!so && ja(e, t))
        ? ((e = ha()), (Or = no = Ot = null), (kn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ka && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ac = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ea(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ac[e.type] : t === "textarea";
  }
  function ba(e, t, n, r) {
    (Qi(r),
      (t = Kr(t, "onChange")),
      0 < t.length &&
        ((n = new ro("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t })));
  }
  var nr = null,
    rr = null;
  function $c(e) {
    Wa(e, 0);
  }
  function Hr(e) {
    var t = En(e);
    if (at(t)) return e;
  }
  function Uc(e, t) {
    if (e === "change") return t;
  }
  var Ca = !1;
  if (F) {
    var uo;
    if (F) {
      var co = "oninput" in document;
      if (!co) {
        var za = document.createElement("div");
        (za.setAttribute("oninput", "return;"),
          (co = typeof za.oninput == "function"));
      }
      uo = co;
    } else uo = !1;
    Ca = uo && (!document.documentMode || 9 < document.documentMode);
  }
  function Fa() {
    nr && (nr.detachEvent("onpropertychange", _a), (rr = nr = null));
  }
  function _a(e) {
    if (e.propertyName === "value" && Hr(rr)) {
      var t = [];
      (ba(t, rr, e, Hl(e)), Ji($c, t));
    }
  }
  function Hc(e, t, n) {
    e === "focusin"
      ? (Fa(), (nr = t), (rr = n), nr.attachEvent("onpropertychange", _a))
      : e === "focusout" && Fa();
  }
  function Wc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Hr(rr);
  }
  function Vc(e, t) {
    if (e === "click") return Hr(t);
  }
  function Qc(e, t) {
    if (e === "input" || e === "change") return Hr(t);
  }
  function Kc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var gt = typeof Object.is == "function" ? Object.is : Kc;
  function lr(e, t) {
    if (gt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!M.call(t, l) || !gt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Pa(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ta(e, t) {
    var n = Pa(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Pa(n);
    }
  }
  function Ma(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Ma(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Ra() {
    for (var e = window, t = pe(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = pe(e.document);
    }
    return t;
  }
  function fo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Gc(e) {
    var t = Ra(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Ma(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && fo(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            o = Math.min(r.start, l);
          ((r = r.end === void 0 ? o : Math.min(r.end, l)),
            !e.extend && o > r && ((l = r), (r = o), (o = l)),
            (l = Ta(n, o)));
          var i = Ta(n, r);
          l &&
            i &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== i.node ||
              e.focusOffset !== i.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(i.node, i.offset))
              : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var Yc = F && "documentMode" in document && 11 >= document.documentMode,
    wn = null,
    po = null,
    or = null,
    mo = !1;
  function La(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    mo ||
      wn == null ||
      wn !== pe(r) ||
      ((r = wn),
      "selectionStart" in r && fo(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (or && lr(or, r)) ||
        ((or = r),
        (r = Kr(po, "onSelect")),
        0 < r.length &&
          ((t = new ro("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = wn))));
  }
  function Wr(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Sn = {
      animationend: Wr("Animation", "AnimationEnd"),
      animationiteration: Wr("Animation", "AnimationIteration"),
      animationstart: Wr("Animation", "AnimationStart"),
      transitionend: Wr("Transition", "TransitionEnd"),
    },
    ho = {},
    Ba = {};
  F &&
    ((Ba = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Sn.animationend.animation,
      delete Sn.animationiteration.animation,
      delete Sn.animationstart.animation),
    "TransitionEvent" in window || delete Sn.transitionend.transition);
  function Vr(e) {
    if (ho[e]) return ho[e];
    if (!Sn[e]) return e;
    var t = Sn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ba) return (ho[e] = t[n]);
    return e;
  }
  var Ia = Vr("animationend"),
    Da = Vr("animationiteration"),
    Oa = Vr("animationstart"),
    Aa = Vr("transitionend"),
    $a = new Map(),
    Ua =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function At(e, t) {
    ($a.set(e, t), v(t, [e]));
  }
  for (var go = 0; go < Ua.length; go++) {
    var vo = Ua[go],
      Jc = vo.toLowerCase(),
      Xc = vo[0].toUpperCase() + vo.slice(1);
    At(Jc, "on" + Xc);
  }
  (At(Ia, "onAnimationEnd"),
    At(Da, "onAnimationIteration"),
    At(Oa, "onAnimationStart"),
    At("dblclick", "onDoubleClick"),
    At("focusin", "onFocus"),
    At("focusout", "onBlur"),
    At(Aa, "onTransitionEnd"),
    b("onMouseEnter", ["mouseout", "mouseover"]),
    b("onMouseLeave", ["mouseout", "mouseover"]),
    b("onPointerEnter", ["pointerout", "pointerover"]),
    b("onPointerLeave", ["pointerout", "pointerover"]),
    v(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    v(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    v("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    v(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    v(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    v(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var ir =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    qc = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(ir),
    );
  function Ha(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), Ju(r, t, void 0, e), (e.currentTarget = null));
  }
  function Wa(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var i = r.length - 1; 0 <= i; i--) {
            var s = r[i],
              u = s.instance,
              h = s.currentTarget;
            if (((s = s.listener), u !== o && l.isPropagationStopped()))
              break e;
            (Ha(l, s, h), (o = u));
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((s = r[i]),
              (u = s.instance),
              (h = s.currentTarget),
              (s = s.listener),
              u !== o && l.isPropagationStopped())
            )
              break e;
            (Ha(l, s, h), (o = u));
          }
      }
    }
    if (Fr) throw ((e = Kl), (Fr = !1), (Kl = null), e);
  }
  function ve(e, t) {
    var n = t[Eo];
    n === void 0 && (n = t[Eo] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Va(t, e, 2, !1), n.add(r));
  }
  function yo(e, t, n) {
    var r = 0;
    (t && (r |= 4), Va(n, e, r, t));
  }
  var Qr = "_reactListening" + Math.random().toString(36).slice(2);
  function ar(e) {
    if (!e[Qr]) {
      ((e[Qr] = !0),
        k.forEach(function (n) {
          n !== "selectionchange" && (qc.has(n) || yo(n, !1, e), yo(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Qr] || ((t[Qr] = !0), yo("selectionchange", !1, t));
    }
  }
  function Va(e, t, n, r) {
    switch (ma(t)) {
      case 1:
        var l = fc;
        break;
      case 4:
        l = pc;
        break;
      default:
        l = eo;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !Ql ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function xo(e, t, n, r, l) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var s = r.stateNode.containerInfo;
          if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var u = i.tag;
              if (
                (u === 3 || u === 4) &&
                ((u = i.stateNode.containerInfo),
                u === l || (u.nodeType === 8 && u.parentNode === l))
              )
                return;
              i = i.return;
            }
          for (; s !== null; ) {
            if (((i = tn(s)), i === null)) return;
            if (((u = i.tag), u === 5 || u === 6)) {
              r = o = i;
              continue e;
            }
            s = s.parentNode;
          }
        }
        r = r.return;
      }
    Ji(function () {
      var h = o,
        w = Hl(n),
        j = [];
      e: {
        var x = $a.get(e);
        if (x !== void 0) {
          var P = ro,
            R = e;
          switch (e) {
            case "keypress":
              if (Ar(n) === 0) break e;
            case "keydown":
            case "keyup":
              P = zc;
              break;
            case "focusin":
              ((R = "focus"), (P = io));
              break;
            case "focusout":
              ((R = "blur"), (P = io));
              break;
            case "beforeblur":
            case "afterblur":
              P = io;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              P = va;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              P = gc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              P = Pc;
              break;
            case Ia:
            case Da:
            case Oa:
              P = xc;
              break;
            case Aa:
              P = Mc;
              break;
            case "scroll":
              P = mc;
              break;
            case "wheel":
              P = Lc;
              break;
            case "copy":
            case "cut":
            case "paste":
              P = wc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              P = xa;
          }
          var B = (t & 4) !== 0,
            ze = !B && e === "scroll",
            f = B ? (x !== null ? x + "Capture" : null) : x;
          B = [];
          for (var c = h, m; c !== null; ) {
            m = c;
            var E = m.stateNode;
            if (
              (m.tag === 5 &&
                E !== null &&
                ((m = E),
                f !== null &&
                  ((E = Hn(c, f)), E != null && B.push(sr(c, E, m)))),
              ze)
            )
              break;
            c = c.return;
          }
          0 < B.length &&
            ((x = new P(x, R, null, n, w)), j.push({ event: x, listeners: B }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((x = e === "mouseover" || e === "pointerover"),
            (P = e === "mouseout" || e === "pointerout"),
            x &&
              n !== Ul &&
              (R = n.relatedTarget || n.fromElement) &&
              (tn(R) || R[Ct]))
          )
            break e;
          if (
            (P || x) &&
            ((x =
              w.window === w
                ? w
                : (x = w.ownerDocument)
                  ? x.defaultView || x.parentWindow
                  : window),
            P
              ? ((R = n.relatedTarget || n.toElement),
                (P = h),
                (R = R ? tn(R) : null),
                R !== null &&
                  ((ze = en(R)), R !== ze || (R.tag !== 5 && R.tag !== 6)) &&
                  (R = null))
              : ((P = null), (R = h)),
            P !== R)
          ) {
            if (
              ((B = va),
              (E = "onMouseLeave"),
              (f = "onMouseEnter"),
              (c = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((B = xa),
                (E = "onPointerLeave"),
                (f = "onPointerEnter"),
                (c = "pointer")),
              (ze = P == null ? x : En(P)),
              (m = R == null ? x : En(R)),
              (x = new B(E, c + "leave", P, n, w)),
              (x.target = ze),
              (x.relatedTarget = m),
              (E = null),
              tn(w) === h &&
                ((B = new B(f, c + "enter", R, n, w)),
                (B.target = m),
                (B.relatedTarget = ze),
                (E = B)),
              (ze = E),
              P && R)
            )
              t: {
                for (B = P, f = R, c = 0, m = B; m; m = jn(m)) c++;
                for (m = 0, E = f; E; E = jn(E)) m++;
                for (; 0 < c - m; ) ((B = jn(B)), c--);
                for (; 0 < m - c; ) ((f = jn(f)), m--);
                for (; c--; ) {
                  if (B === f || (f !== null && B === f.alternate)) break t;
                  ((B = jn(B)), (f = jn(f)));
                }
                B = null;
              }
            else B = null;
            (P !== null && Qa(j, x, P, B, !1),
              R !== null && ze !== null && Qa(j, ze, R, B, !0));
          }
        }
        e: {
          if (
            ((x = h ? En(h) : window),
            (P = x.nodeName && x.nodeName.toLowerCase()),
            P === "select" || (P === "input" && x.type === "file"))
          )
            var D = Uc;
          else if (Ea(x))
            if (Ca) D = Qc;
            else {
              D = Wc;
              var H = Hc;
            }
          else
            (P = x.nodeName) &&
              P.toLowerCase() === "input" &&
              (x.type === "checkbox" || x.type === "radio") &&
              (D = Vc);
          if (D && (D = D(e, h))) {
            ba(j, D, n, w);
            break e;
          }
          (H && H(e, x, h),
            e === "focusout" &&
              (H = x._wrapperState) &&
              H.controlled &&
              x.type === "number" &&
              Il(x, "number", x.value));
        }
        switch (((H = h ? En(h) : window), e)) {
          case "focusin":
            (Ea(H) || H.contentEditable === "true") &&
              ((wn = H), (po = h), (or = null));
            break;
          case "focusout":
            or = po = wn = null;
            break;
          case "mousedown":
            mo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((mo = !1), La(j, n, w));
            break;
          case "selectionchange":
            if (Yc) break;
          case "keydown":
          case "keyup":
            La(j, n, w);
        }
        var W;
        if (so)
          e: {
            switch (e) {
              case "compositionstart":
                var G = "onCompositionStart";
                break e;
              case "compositionend":
                G = "onCompositionEnd";
                break e;
              case "compositionupdate":
                G = "onCompositionUpdate";
                break e;
            }
            G = void 0;
          }
        else
          kn
            ? ja(e, n) && (G = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (G = "onCompositionStart");
        (G &&
          (ka &&
            n.locale !== "ko" &&
            (kn || G !== "onCompositionStart"
              ? G === "onCompositionEnd" && kn && (W = ha())
              : ((Ot = w),
                (no = "value" in Ot ? Ot.value : Ot.textContent),
                (kn = !0))),
          (H = Kr(h, G)),
          0 < H.length &&
            ((G = new ya(G, e, null, n, w)),
            j.push({ event: G, listeners: H }),
            W ? (G.data = W) : ((W = Na(n)), W !== null && (G.data = W)))),
          (W = Ic ? Dc(e, n) : Oc(e, n)) &&
            ((h = Kr(h, "onBeforeInput")),
            0 < h.length &&
              ((w = new ya("onBeforeInput", "beforeinput", null, n, w)),
              j.push({ event: w, listeners: h }),
              (w.data = W))));
      }
      Wa(j, t);
    });
  }
  function sr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Kr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      (l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = Hn(e, n)),
        o != null && r.unshift(sr(e, o, l)),
        (o = Hn(e, t)),
        o != null && r.push(sr(e, o, l))),
        (e = e.return));
    }
    return r;
  }
  function jn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Qa(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
      var s = n,
        u = s.alternate,
        h = s.stateNode;
      if (u !== null && u === r) break;
      (s.tag === 5 &&
        h !== null &&
        ((s = h),
        l
          ? ((u = Hn(n, o)), u != null && i.unshift(sr(n, u, s)))
          : l || ((u = Hn(n, o)), u != null && i.push(sr(n, u, s)))),
        (n = n.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var Zc = /\r\n?/g,
    ed = /\u0000|\uFFFD/g;
  function Ka(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Zc,
        `
`,
      )
      .replace(ed, "");
  }
  function Gr(e, t, n) {
    if (((t = Ka(t)), Ka(e) !== t && n)) throw Error(p(425));
  }
  function Yr() {}
  var ko = null,
    wo = null;
  function So(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var jo = typeof setTimeout == "function" ? setTimeout : void 0,
    td = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ga = typeof Promise == "function" ? Promise : void 0,
    nd =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ga < "u"
          ? function (e) {
              return Ga.resolve(null).then(e).catch(rd);
            }
          : jo;
  function rd(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function No(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(l), qn(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    qn(t);
  }
  function $t(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Ya(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Nn = Math.random().toString(36).slice(2),
    jt = "__reactFiber$" + Nn,
    ur = "__reactProps$" + Nn,
    Ct = "__reactContainer$" + Nn,
    Eo = "__reactEvents$" + Nn,
    ld = "__reactListeners$" + Nn,
    od = "__reactHandles$" + Nn;
  function tn(e) {
    var t = e[jt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Ct] || n[jt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Ya(e); e !== null; ) {
            if ((n = e[jt])) return n;
            e = Ya(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function cr(e) {
    return (
      (e = e[jt] || e[Ct]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function En(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(p(33));
  }
  function Jr(e) {
    return e[ur] || null;
  }
  var bo = [],
    bn = -1;
  function Ut(e) {
    return { current: e };
  }
  function ye(e) {
    0 > bn || ((e.current = bo[bn]), (bo[bn] = null), bn--);
  }
  function ge(e, t) {
    (bn++, (bo[bn] = e.current), (e.current = t));
  }
  var Ht = {},
    We = Ut(Ht),
    Je = Ut(!1),
    nn = Ht;
  function Cn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ht;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      o;
    for (o in n) l[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Xe(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Xr() {
    (ye(Je), ye(We));
  }
  function Ja(e, t, n) {
    if (We.current !== Ht) throw Error(p(168));
    (ge(We, t), ge(Je, n));
  }
  function Xa(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(p(108, q(e) || "Unknown", l));
    return _({}, n, r);
  }
  function qr(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Ht),
      (nn = We.current),
      ge(We, e),
      ge(Je, Je.current),
      !0
    );
  }
  function qa(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(p(169));
    (n
      ? ((e = Xa(e, t, nn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ye(Je),
        ye(We),
        ge(We, e))
      : ye(Je),
      ge(Je, n));
  }
  var zt = null,
    Zr = !1,
    Co = !1;
  function Za(e) {
    zt === null ? (zt = [e]) : zt.push(e);
  }
  function id(e) {
    ((Zr = !0), Za(e));
  }
  function Wt() {
    if (!Co && zt !== null) {
      Co = !0;
      var e = 0,
        t = fe;
      try {
        var n = zt;
        for (fe = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((zt = null), (Zr = !1));
      } catch (l) {
        throw (zt !== null && (zt = zt.slice(e + 1)), ta(Gl, Wt), l);
      } finally {
        ((fe = t), (Co = !1));
      }
    }
    return null;
  }
  var zn = [],
    Fn = 0,
    el = null,
    tl = 0,
    st = [],
    ut = 0,
    rn = null,
    Ft = 1,
    _t = "";
  function ln(e, t) {
    ((zn[Fn++] = tl), (zn[Fn++] = el), (el = e), (tl = t));
  }
  function es(e, t, n) {
    ((st[ut++] = Ft), (st[ut++] = _t), (st[ut++] = rn), (rn = e));
    var r = Ft;
    e = _t;
    var l = 32 - ht(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var o = 32 - ht(t) + l;
    if (30 < o) {
      var i = l - (l % 5);
      ((o = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (Ft = (1 << (32 - ht(t) + l)) | (n << l) | r),
        (_t = o + e));
    } else ((Ft = (1 << o) | (n << l) | r), (_t = e));
  }
  function zo(e) {
    e.return !== null && (ln(e, 1), es(e, 1, 0));
  }
  function Fo(e) {
    for (; e === el; )
      ((el = zn[--Fn]), (zn[Fn] = null), (tl = zn[--Fn]), (zn[Fn] = null));
    for (; e === rn; )
      ((rn = st[--ut]),
        (st[ut] = null),
        (_t = st[--ut]),
        (st[ut] = null),
        (Ft = st[--ut]),
        (st[ut] = null));
  }
  var lt = null,
    ot = null,
    xe = !1,
    vt = null;
  function ts(e, t) {
    var n = pt(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function ns(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (lt = e), (ot = $t(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (lt = e), (ot = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = rn !== null ? { id: Ft, overflow: _t } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = pt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (lt = e),
              (ot = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function _o(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Po(e) {
    if (xe) {
      var t = ot;
      if (t) {
        var n = t;
        if (!ns(e, t)) {
          if (_o(e)) throw Error(p(418));
          t = $t(n.nextSibling);
          var r = lt;
          t && ns(e, t)
            ? ts(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (xe = !1), (lt = e));
        }
      } else {
        if (_o(e)) throw Error(p(418));
        ((e.flags = (e.flags & -4097) | 2), (xe = !1), (lt = e));
      }
    }
  }
  function rs(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
    )
      e = e.return;
    lt = e;
  }
  function nl(e) {
    if (e !== lt) return !1;
    if (!xe) return (rs(e), (xe = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !So(e.type, e.memoizedProps))),
      t && (t = ot))
    ) {
      if (_o(e)) throw (ls(), Error(p(418)));
      for (; t; ) (ts(e, t), (t = $t(t.nextSibling)));
    }
    if ((rs(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(p(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                ot = $t(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        ot = null;
      }
    } else ot = lt ? $t(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ls() {
    for (var e = ot; e; ) e = $t(e.nextSibling);
  }
  function _n() {
    ((ot = lt = null), (xe = !1));
  }
  function To(e) {
    vt === null ? (vt = [e]) : vt.push(e);
  }
  var ad = je.ReactCurrentBatchConfig;
  function dr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(p(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(p(147, e));
        var l = r,
          o = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (i) {
              var s = l.refs;
              i === null ? delete s[o] : (s[o] = i);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error(p(284));
      if (!n._owner) throw Error(p(290, e));
    }
    return e;
  }
  function rl(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        p(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function os(e) {
    var t = e._init;
    return t(e._payload);
  }
  function is(e) {
    function t(f, c) {
      if (e) {
        var m = f.deletions;
        m === null ? ((f.deletions = [c]), (f.flags |= 16)) : m.push(c);
      }
    }
    function n(f, c) {
      if (!e) return null;
      for (; c !== null; ) (t(f, c), (c = c.sibling));
      return null;
    }
    function r(f, c) {
      for (f = new Map(); c !== null; )
        (c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling));
      return f;
    }
    function l(f, c) {
      return ((f = qt(f, c)), (f.index = 0), (f.sibling = null), f);
    }
    function o(f, c, m) {
      return (
        (f.index = m),
        e
          ? ((m = f.alternate),
            m !== null
              ? ((m = m.index), m < c ? ((f.flags |= 2), c) : m)
              : ((f.flags |= 2), c))
          : ((f.flags |= 1048576), c)
      );
    }
    function i(f) {
      return (e && f.alternate === null && (f.flags |= 2), f);
    }
    function s(f, c, m, E) {
      return c === null || c.tag !== 6
        ? ((c = ji(m, f.mode, E)), (c.return = f), c)
        : ((c = l(c, m)), (c.return = f), c);
    }
    function u(f, c, m, E) {
      var D = m.type;
      return D === be
        ? w(f, c, m.props.children, E, m.key)
        : c !== null &&
            (c.elementType === D ||
              (typeof D == "object" &&
                D !== null &&
                D.$$typeof === he &&
                os(D) === c.type))
          ? ((E = l(c, m.props)), (E.ref = dr(f, c, m)), (E.return = f), E)
          : ((E = Cl(m.type, m.key, m.props, null, f.mode, E)),
            (E.ref = dr(f, c, m)),
            (E.return = f),
            E);
    }
    function h(f, c, m, E) {
      return c === null ||
        c.tag !== 4 ||
        c.stateNode.containerInfo !== m.containerInfo ||
        c.stateNode.implementation !== m.implementation
        ? ((c = Ni(m, f.mode, E)), (c.return = f), c)
        : ((c = l(c, m.children || [])), (c.return = f), c);
    }
    function w(f, c, m, E, D) {
      return c === null || c.tag !== 7
        ? ((c = pn(m, f.mode, E, D)), (c.return = f), c)
        : ((c = l(c, m)), (c.return = f), c);
    }
    function j(f, c, m) {
      if ((typeof c == "string" && c !== "") || typeof c == "number")
        return ((c = ji("" + c, f.mode, m)), (c.return = f), c);
      if (typeof c == "object" && c !== null) {
        switch (c.$$typeof) {
          case Me:
            return (
              (m = Cl(c.type, c.key, c.props, null, f.mode, m)),
              (m.ref = dr(f, null, c)),
              (m.return = f),
              m
            );
          case de:
            return ((c = Ni(c, f.mode, m)), (c.return = f), c);
          case he:
            var E = c._init;
            return j(f, E(c._payload), m);
        }
        if (An(c) || O(c))
          return ((c = pn(c, f.mode, m, null)), (c.return = f), c);
        rl(f, c);
      }
      return null;
    }
    function x(f, c, m, E) {
      var D = c !== null ? c.key : null;
      if ((typeof m == "string" && m !== "") || typeof m == "number")
        return D !== null ? null : s(f, c, "" + m, E);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Me:
            return m.key === D ? u(f, c, m, E) : null;
          case de:
            return m.key === D ? h(f, c, m, E) : null;
          case he:
            return ((D = m._init), x(f, c, D(m._payload), E));
        }
        if (An(m) || O(m)) return D !== null ? null : w(f, c, m, E, null);
        rl(f, m);
      }
      return null;
    }
    function P(f, c, m, E, D) {
      if ((typeof E == "string" && E !== "") || typeof E == "number")
        return ((f = f.get(m) || null), s(c, f, "" + E, D));
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Me:
            return (
              (f = f.get(E.key === null ? m : E.key) || null),
              u(c, f, E, D)
            );
          case de:
            return (
              (f = f.get(E.key === null ? m : E.key) || null),
              h(c, f, E, D)
            );
          case he:
            var H = E._init;
            return P(f, c, m, H(E._payload), D);
        }
        if (An(E) || O(E)) return ((f = f.get(m) || null), w(c, f, E, D, null));
        rl(c, E);
      }
      return null;
    }
    function R(f, c, m, E) {
      for (
        var D = null, H = null, W = c, G = (c = 0), Ie = null;
        W !== null && G < m.length;
        G++
      ) {
        W.index > G ? ((Ie = W), (W = null)) : (Ie = W.sibling);
        var ue = x(f, W, m[G], E);
        if (ue === null) {
          W === null && (W = Ie);
          break;
        }
        (e && W && ue.alternate === null && t(f, W),
          (c = o(ue, c, G)),
          H === null ? (D = ue) : (H.sibling = ue),
          (H = ue),
          (W = Ie));
      }
      if (G === m.length) return (n(f, W), xe && ln(f, G), D);
      if (W === null) {
        for (; G < m.length; G++)
          ((W = j(f, m[G], E)),
            W !== null &&
              ((c = o(W, c, G)),
              H === null ? (D = W) : (H.sibling = W),
              (H = W)));
        return (xe && ln(f, G), D);
      }
      for (W = r(f, W); G < m.length; G++)
        ((Ie = P(W, f, G, m[G], E)),
          Ie !== null &&
            (e &&
              Ie.alternate !== null &&
              W.delete(Ie.key === null ? G : Ie.key),
            (c = o(Ie, c, G)),
            H === null ? (D = Ie) : (H.sibling = Ie),
            (H = Ie)));
      return (
        e &&
          W.forEach(function (Zt) {
            return t(f, Zt);
          }),
        xe && ln(f, G),
        D
      );
    }
    function B(f, c, m, E) {
      var D = O(m);
      if (typeof D != "function") throw Error(p(150));
      if (((m = D.call(m)), m == null)) throw Error(p(151));
      for (
        var H = (D = null), W = c, G = (c = 0), Ie = null, ue = m.next();
        W !== null && !ue.done;
        G++, ue = m.next()
      ) {
        W.index > G ? ((Ie = W), (W = null)) : (Ie = W.sibling);
        var Zt = x(f, W, ue.value, E);
        if (Zt === null) {
          W === null && (W = Ie);
          break;
        }
        (e && W && Zt.alternate === null && t(f, W),
          (c = o(Zt, c, G)),
          H === null ? (D = Zt) : (H.sibling = Zt),
          (H = Zt),
          (W = Ie));
      }
      if (ue.done) return (n(f, W), xe && ln(f, G), D);
      if (W === null) {
        for (; !ue.done; G++, ue = m.next())
          ((ue = j(f, ue.value, E)),
            ue !== null &&
              ((c = o(ue, c, G)),
              H === null ? (D = ue) : (H.sibling = ue),
              (H = ue)));
        return (xe && ln(f, G), D);
      }
      for (W = r(f, W); !ue.done; G++, ue = m.next())
        ((ue = P(W, f, G, ue.value, E)),
          ue !== null &&
            (e &&
              ue.alternate !== null &&
              W.delete(ue.key === null ? G : ue.key),
            (c = o(ue, c, G)),
            H === null ? (D = ue) : (H.sibling = ue),
            (H = ue)));
      return (
        e &&
          W.forEach(function (Ad) {
            return t(f, Ad);
          }),
        xe && ln(f, G),
        D
      );
    }
    function ze(f, c, m, E) {
      if (
        (typeof m == "object" &&
          m !== null &&
          m.type === be &&
          m.key === null &&
          (m = m.props.children),
        typeof m == "object" && m !== null)
      ) {
        switch (m.$$typeof) {
          case Me:
            e: {
              for (var D = m.key, H = c; H !== null; ) {
                if (H.key === D) {
                  if (((D = m.type), D === be)) {
                    if (H.tag === 7) {
                      (n(f, H.sibling),
                        (c = l(H, m.props.children)),
                        (c.return = f),
                        (f = c));
                      break e;
                    }
                  } else if (
                    H.elementType === D ||
                    (typeof D == "object" &&
                      D !== null &&
                      D.$$typeof === he &&
                      os(D) === H.type)
                  ) {
                    (n(f, H.sibling),
                      (c = l(H, m.props)),
                      (c.ref = dr(f, H, m)),
                      (c.return = f),
                      (f = c));
                    break e;
                  }
                  n(f, H);
                  break;
                } else t(f, H);
                H = H.sibling;
              }
              m.type === be
                ? ((c = pn(m.props.children, f.mode, E, m.key)),
                  (c.return = f),
                  (f = c))
                : ((E = Cl(m.type, m.key, m.props, null, f.mode, E)),
                  (E.ref = dr(f, c, m)),
                  (E.return = f),
                  (f = E));
            }
            return i(f);
          case de:
            e: {
              for (H = m.key; c !== null; ) {
                if (c.key === H)
                  if (
                    c.tag === 4 &&
                    c.stateNode.containerInfo === m.containerInfo &&
                    c.stateNode.implementation === m.implementation
                  ) {
                    (n(f, c.sibling),
                      (c = l(c, m.children || [])),
                      (c.return = f),
                      (f = c));
                    break e;
                  } else {
                    n(f, c);
                    break;
                  }
                else t(f, c);
                c = c.sibling;
              }
              ((c = Ni(m, f.mode, E)), (c.return = f), (f = c));
            }
            return i(f);
          case he:
            return ((H = m._init), ze(f, c, H(m._payload), E));
        }
        if (An(m)) return R(f, c, m, E);
        if (O(m)) return B(f, c, m, E);
        rl(f, m);
      }
      return (typeof m == "string" && m !== "") || typeof m == "number"
        ? ((m = "" + m),
          c !== null && c.tag === 6
            ? (n(f, c.sibling), (c = l(c, m)), (c.return = f), (f = c))
            : (n(f, c), (c = ji(m, f.mode, E)), (c.return = f), (f = c)),
          i(f))
        : n(f, c);
    }
    return ze;
  }
  var Pn = is(!0),
    as = is(!1),
    ll = Ut(null),
    ol = null,
    Tn = null,
    Mo = null;
  function Ro() {
    Mo = Tn = ol = null;
  }
  function Lo(e) {
    var t = ll.current;
    (ye(ll), (e._currentValue = t));
  }
  function Bo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Mn(e, t) {
    ((ol = e),
      (Mo = Tn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (qe = !0), (e.firstContext = null)));
  }
  function ct(e) {
    var t = e._currentValue;
    if (Mo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Tn === null)) {
        if (ol === null) throw Error(p(308));
        ((Tn = e), (ol.dependencies = { lanes: 0, firstContext: e }));
      } else Tn = Tn.next = e;
    return t;
  }
  var on = null;
  function Io(e) {
    on === null ? (on = [e]) : on.push(e);
  }
  function ss(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Io(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Pt(e, r)
    );
  }
  function Pt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var Vt = !1;
  function Do(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function us(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function Tt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Qt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (ae & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Pt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Io(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Pt(e, n)
    );
  }
  function il(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n));
    }
  }
  function cs(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var i = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (o === null ? (l = o = i) : (o = o.next = i), (n = n.next));
        } while (n !== null);
        o === null ? (l = o = t) : (o = o.next = t);
      } else l = o = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function al(e, t, n, r) {
    var l = e.updateQueue;
    Vt = !1;
    var o = l.firstBaseUpdate,
      i = l.lastBaseUpdate,
      s = l.shared.pending;
    if (s !== null) {
      l.shared.pending = null;
      var u = s,
        h = u.next;
      ((u.next = null), i === null ? (o = h) : (i.next = h), (i = u));
      var w = e.alternate;
      w !== null &&
        ((w = w.updateQueue),
        (s = w.lastBaseUpdate),
        s !== i &&
          (s === null ? (w.firstBaseUpdate = h) : (s.next = h),
          (w.lastBaseUpdate = u)));
    }
    if (o !== null) {
      var j = l.baseState;
      ((i = 0), (w = h = u = null), (s = o));
      do {
        var x = s.lane,
          P = s.eventTime;
        if ((r & x) === x) {
          w !== null &&
            (w = w.next =
              {
                eventTime: P,
                lane: 0,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null,
              });
          e: {
            var R = e,
              B = s;
            switch (((x = t), (P = n), B.tag)) {
              case 1:
                if (((R = B.payload), typeof R == "function")) {
                  j = R.call(P, j, x);
                  break e;
                }
                j = R;
                break e;
              case 3:
                R.flags = (R.flags & -65537) | 128;
              case 0:
                if (
                  ((R = B.payload),
                  (x = typeof R == "function" ? R.call(P, j, x) : R),
                  x == null)
                )
                  break e;
                j = _({}, j, x);
                break e;
              case 2:
                Vt = !0;
            }
          }
          s.callback !== null &&
            s.lane !== 0 &&
            ((e.flags |= 64),
            (x = l.effects),
            x === null ? (l.effects = [s]) : x.push(s));
        } else
          ((P = {
            eventTime: P,
            lane: x,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            w === null ? ((h = w = P), (u = j)) : (w = w.next = P),
            (i |= x));
        if (((s = s.next), s === null)) {
          if (((s = l.shared.pending), s === null)) break;
          ((x = s),
            (s = x.next),
            (x.next = null),
            (l.lastBaseUpdate = x),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (w === null && (u = j),
        (l.baseState = u),
        (l.firstBaseUpdate = h),
        (l.lastBaseUpdate = w),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((i |= l.lane), (l = l.next));
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      ((un |= i), (e.lanes = i), (e.memoizedState = j));
    }
  }
  function ds(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(p(191, l));
          l.call(r);
        }
      }
  }
  var fr = {},
    Nt = Ut(fr),
    pr = Ut(fr),
    mr = Ut(fr);
  function an(e) {
    if (e === fr) throw Error(p(174));
    return e;
  }
  function Oo(e, t) {
    switch ((ge(mr, t), ge(pr, e), ge(Nt, fr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ol(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Ol(t, e)));
    }
    (ye(Nt), ge(Nt, t));
  }
  function Rn() {
    (ye(Nt), ye(pr), ye(mr));
  }
  function fs(e) {
    an(mr.current);
    var t = an(Nt.current),
      n = Ol(t, e.type);
    t !== n && (ge(pr, e), ge(Nt, n));
  }
  function Ao(e) {
    pr.current === e && (ye(Nt), ye(pr));
  }
  var ke = Ut(0);
  function sl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var $o = [];
  function Uo() {
    for (var e = 0; e < $o.length; e++)
      $o[e]._workInProgressVersionPrimary = null;
    $o.length = 0;
  }
  var ul = je.ReactCurrentDispatcher,
    Ho = je.ReactCurrentBatchConfig,
    sn = 0,
    we = null,
    Pe = null,
    Le = null,
    cl = !1,
    hr = !1,
    gr = 0,
    sd = 0;
  function Ve() {
    throw Error(p(321));
  }
  function Wo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!gt(e[n], t[n])) return !1;
    return !0;
  }
  function Vo(e, t, n, r, l, o) {
    if (
      ((sn = o),
      (we = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ul.current = e === null || e.memoizedState === null ? fd : pd),
      (e = n(r, l)),
      hr)
    ) {
      o = 0;
      do {
        if (((hr = !1), (gr = 0), 25 <= o)) throw Error(p(301));
        ((o += 1),
          (Le = Pe = null),
          (t.updateQueue = null),
          (ul.current = md),
          (e = n(r, l)));
      } while (hr);
    }
    if (
      ((ul.current = pl),
      (t = Pe !== null && Pe.next !== null),
      (sn = 0),
      (Le = Pe = we = null),
      (cl = !1),
      t)
    )
      throw Error(p(300));
    return e;
  }
  function Qo() {
    var e = gr !== 0;
    return ((gr = 0), e);
  }
  function Et() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Le === null ? (we.memoizedState = Le = e) : (Le = Le.next = e), Le);
  }
  function dt() {
    if (Pe === null) {
      var e = we.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Pe.next;
    var t = Le === null ? we.memoizedState : Le.next;
    if (t !== null) ((Le = t), (Pe = e));
    else {
      if (e === null) throw Error(p(310));
      ((Pe = e),
        (e = {
          memoizedState: Pe.memoizedState,
          baseState: Pe.baseState,
          baseQueue: Pe.baseQueue,
          queue: Pe.queue,
          next: null,
        }),
        Le === null ? (we.memoizedState = Le = e) : (Le = Le.next = e));
    }
    return Le;
  }
  function vr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ko(e) {
    var t = dt(),
      n = t.queue;
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = e;
    var r = Pe,
      l = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var i = l.next;
        ((l.next = o.next), (o.next = i));
      }
      ((r.baseQueue = l = o), (n.pending = null));
    }
    if (l !== null) {
      ((o = l.next), (r = r.baseState));
      var s = (i = null),
        u = null,
        h = o;
      do {
        var w = h.lane;
        if ((sn & w) === w)
          (u !== null &&
            (u = u.next =
              {
                lane: 0,
                action: h.action,
                hasEagerState: h.hasEagerState,
                eagerState: h.eagerState,
                next: null,
              }),
            (r = h.hasEagerState ? h.eagerState : e(r, h.action)));
        else {
          var j = {
            lane: w,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null,
          };
          (u === null ? ((s = u = j), (i = r)) : (u = u.next = j),
            (we.lanes |= w),
            (un |= w));
        }
        h = h.next;
      } while (h !== null && h !== o);
      (u === null ? (i = r) : (u.next = s),
        gt(r, t.memoizedState) || (qe = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = u),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((o = l.lane), (we.lanes |= o), (un |= o), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Go(e) {
    var t = dt(),
      n = t.queue;
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var i = (l = l.next);
      do ((o = e(o, i.action)), (i = i.next));
      while (i !== l);
      (gt(o, t.memoizedState) || (qe = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o));
    }
    return [o, r];
  }
  function ps() {}
  function ms(e, t) {
    var n = we,
      r = dt(),
      l = t(),
      o = !gt(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (qe = !0)),
      (r = r.queue),
      Yo(vs.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Le !== null && Le.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        yr(9, gs.bind(null, n, r, l, t), void 0, null),
        Be === null)
      )
        throw Error(p(349));
      (sn & 30) !== 0 || hs(n, t, l);
    }
    return l;
  }
  function hs(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = we.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (we.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function gs(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), ys(t) && xs(e));
  }
  function vs(e, t, n) {
    return n(function () {
      ys(t) && xs(e);
    });
  }
  function ys(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !gt(e, n);
    } catch {
      return !0;
    }
  }
  function xs(e) {
    var t = Pt(e, 1);
    t !== null && wt(t, e, 1, -1);
  }
  function ks(e) {
    var t = Et();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = dd.bind(null, we, e)),
      [t.memoizedState, e]
    );
  }
  function yr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = we.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (we.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function ws() {
    return dt().memoizedState;
  }
  function dl(e, t, n, r) {
    var l = Et();
    ((we.flags |= e),
      (l.memoizedState = yr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function fl(e, t, n, r) {
    var l = dt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Pe !== null) {
      var i = Pe.memoizedState;
      if (((o = i.destroy), r !== null && Wo(r, i.deps))) {
        l.memoizedState = yr(t, n, o, r);
        return;
      }
    }
    ((we.flags |= e), (l.memoizedState = yr(1 | t, n, o, r)));
  }
  function Ss(e, t) {
    return dl(8390656, 8, e, t);
  }
  function Yo(e, t) {
    return fl(2048, 8, e, t);
  }
  function js(e, t) {
    return fl(4, 2, e, t);
  }
  function Ns(e, t) {
    return fl(4, 4, e, t);
  }
  function Es(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function bs(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null),
      fl(4, 4, Es.bind(null, t, e), n)
    );
  }
  function Jo() {}
  function Cs(e, t) {
    var n = dt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Wo(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function zs(e, t) {
    var n = dt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Wo(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Fs(e, t, n) {
    return (sn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (qe = !0)), (e.memoizedState = n))
      : (gt(n, t) ||
          ((n = oa()), (we.lanes |= n), (un |= n), (e.baseState = !0)),
        t);
  }
  function ud(e, t) {
    var n = fe;
    ((fe = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Ho.transition;
    Ho.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((fe = n), (Ho.transition = r));
    }
  }
  function _s() {
    return dt().memoizedState;
  }
  function cd(e, t, n) {
    var r = Jt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ps(e))
    )
      Ts(t, n);
    else if (((n = ss(e, t, n, r)), n !== null)) {
      var l = Ye();
      (wt(n, e, r, l), Ms(n, t, r));
    }
  }
  function dd(e, t, n) {
    var r = Jt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Ps(e)) Ts(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var i = t.lastRenderedState,
            s = o(i, n);
          if (((l.hasEagerState = !0), (l.eagerState = s), gt(s, i))) {
            var u = t.interleaved;
            (u === null
              ? ((l.next = l), Io(t))
              : ((l.next = u.next), (u.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = ss(e, t, l, r)),
        n !== null && ((l = Ye()), wt(n, e, r, l), Ms(n, t, r)));
    }
  }
  function Ps(e) {
    var t = e.alternate;
    return e === we || (t !== null && t === we);
  }
  function Ts(e, t) {
    hr = cl = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function Ms(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n));
    }
  }
  var pl = {
      readContext: ct,
      useCallback: Ve,
      useContext: Ve,
      useEffect: Ve,
      useImperativeHandle: Ve,
      useInsertionEffect: Ve,
      useLayoutEffect: Ve,
      useMemo: Ve,
      useReducer: Ve,
      useRef: Ve,
      useState: Ve,
      useDebugValue: Ve,
      useDeferredValue: Ve,
      useTransition: Ve,
      useMutableSource: Ve,
      useSyncExternalStore: Ve,
      useId: Ve,
      unstable_isNewReconciler: !1,
    },
    fd = {
      readContext: ct,
      useCallback: function (e, t) {
        return ((Et().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: ct,
      useEffect: Ss,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          dl(4194308, 4, Es.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return dl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return dl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Et();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Et();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = cd.bind(null, we, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Et();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: ks,
      useDebugValue: Jo,
      useDeferredValue: function (e) {
        return (Et().memoizedState = e);
      },
      useTransition: function () {
        var e = ks(!1),
          t = e[0];
        return ((e = ud.bind(null, e[1])), (Et().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = we,
          l = Et();
        if (xe) {
          if (n === void 0) throw Error(p(407));
          n = n();
        } else {
          if (((n = t()), Be === null)) throw Error(p(349));
          (sn & 30) !== 0 || hs(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          Ss(vs.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          yr(9, gs.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Et(),
          t = Be.identifierPrefix;
        if (xe) {
          var n = _t,
            r = Ft;
          ((n = (r & ~(1 << (32 - ht(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = gr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = sd++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    pd = {
      readContext: ct,
      useCallback: Cs,
      useContext: ct,
      useEffect: Yo,
      useImperativeHandle: bs,
      useInsertionEffect: js,
      useLayoutEffect: Ns,
      useMemo: zs,
      useReducer: Ko,
      useRef: ws,
      useState: function () {
        return Ko(vr);
      },
      useDebugValue: Jo,
      useDeferredValue: function (e) {
        var t = dt();
        return Fs(t, Pe.memoizedState, e);
      },
      useTransition: function () {
        var e = Ko(vr)[0],
          t = dt().memoizedState;
        return [e, t];
      },
      useMutableSource: ps,
      useSyncExternalStore: ms,
      useId: _s,
      unstable_isNewReconciler: !1,
    },
    md = {
      readContext: ct,
      useCallback: Cs,
      useContext: ct,
      useEffect: Yo,
      useImperativeHandle: bs,
      useInsertionEffect: js,
      useLayoutEffect: Ns,
      useMemo: zs,
      useReducer: Go,
      useRef: ws,
      useState: function () {
        return Go(vr);
      },
      useDebugValue: Jo,
      useDeferredValue: function (e) {
        var t = dt();
        return Pe === null ? (t.memoizedState = e) : Fs(t, Pe.memoizedState, e);
      },
      useTransition: function () {
        var e = Go(vr)[0],
          t = dt().memoizedState;
        return [e, t];
      },
      useMutableSource: ps,
      useSyncExternalStore: ms,
      useId: _s,
      unstable_isNewReconciler: !1,
    };
  function yt(e, t) {
    if (e && e.defaultProps) {
      ((t = _({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Xo(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : _({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var ml = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? en(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ye(),
        l = Jt(e),
        o = Tt(r, l);
      ((o.payload = t),
        n != null && (o.callback = n),
        (t = Qt(e, o, l)),
        t !== null && (wt(t, e, l, r), il(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ye(),
        l = Jt(e),
        o = Tt(r, l);
      ((o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Qt(e, o, l)),
        t !== null && (wt(t, e, l, r), il(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ye(),
        r = Jt(e),
        l = Tt(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Qt(e, l, r)),
        t !== null && (wt(t, e, r, n), il(t, e, r)));
    },
  };
  function Rs(e, t, n, r, l, o, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !lr(n, r) || !lr(l, o)
          : !0
    );
  }
  function Ls(e, t, n) {
    var r = !1,
      l = Ht,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = ct(o))
        : ((l = Xe(t) ? nn : We.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? Cn(e, l) : Ht)),
      (t = new t(n, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = ml),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function Bs(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && ml.enqueueReplaceState(t, t.state, null));
  }
  function qo(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Do(e));
    var o = t.contextType;
    (typeof o == "object" && o !== null
      ? (l.context = ct(o))
      : ((o = Xe(t) ? nn : We.current), (l.context = Cn(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (Xo(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && ml.enqueueReplaceState(l, l.state, null),
        al(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function Ln(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += Z(r)), (r = r.return));
      while (r);
      var l = n;
    } catch (o) {
      l =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Zo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function ei(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var hd = typeof WeakMap == "function" ? WeakMap : Map;
  function Is(e, t, n) {
    ((n = Tt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (wl || ((wl = !0), (hi = r)), ei(e, t));
      }),
      n
    );
  }
  function Ds(e, t, n) {
    ((n = Tt(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          ei(e, t);
        }));
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (n.callback = function () {
          (ei(e, t),
            typeof r != "function" &&
              (Gt === null ? (Gt = new Set([this])) : Gt.add(this)));
          var i = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : "",
          });
        }),
      n
    );
  }
  function Os(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new hd();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = Fd.bind(null, e, t, n)), t.then(e, e));
  }
  function As(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function $s(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Tt(-1, 1)), (t.tag = 2), Qt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var gd = je.ReactCurrentOwner,
    qe = !1;
  function Ge(e, t, n, r) {
    t.child = e === null ? as(t, null, n, r) : Pn(t, e.child, n, r);
  }
  function Us(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      Mn(t, l),
      (r = Vo(e, t, n, r, o, l)),
      (n = Qo()),
      e !== null && !qe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Mt(e, t, l))
        : (xe && n && zo(t), (t.flags |= 1), Ge(e, t, r, l), t.child)
    );
  }
  function Hs(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !Si(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), Ws(e, t, o, r, l))
        : ((e = Cl(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var i = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : lr), n(i, r) && e.ref === t.ref)
      )
        return Mt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = qt(o, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ws(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (lr(o, r) && e.ref === t.ref)
        if (((qe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (qe = !0);
        else return ((t.lanes = e.lanes), Mt(e, t, l));
    }
    return ti(e, t, n, r, l);
  }
  function Vs(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ge(In, it),
          (it |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ge(In, it),
            (it |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = o !== null ? o.baseLanes : n),
          ge(In, it),
          (it |= r));
      }
    else
      (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ge(In, it),
        (it |= r));
    return (Ge(e, t, l, n), t.child);
  }
  function Qs(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function ti(e, t, n, r, l) {
    var o = Xe(n) ? nn : We.current;
    return (
      (o = Cn(t, o)),
      Mn(t, l),
      (n = Vo(e, t, n, r, o, l)),
      (r = Qo()),
      e !== null && !qe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Mt(e, t, l))
        : (xe && r && zo(t), (t.flags |= 1), Ge(e, t, n, l), t.child)
    );
  }
  function Ks(e, t, n, r, l) {
    if (Xe(n)) {
      var o = !0;
      qr(t);
    } else o = !1;
    if ((Mn(t, l), t.stateNode === null))
      (gl(e, t), Ls(t, n, r), qo(t, n, r, l), (r = !0));
    else if (e === null) {
      var i = t.stateNode,
        s = t.memoizedProps;
      i.props = s;
      var u = i.context,
        h = n.contextType;
      typeof h == "object" && h !== null
        ? (h = ct(h))
        : ((h = Xe(n) ? nn : We.current), (h = Cn(t, h)));
      var w = n.getDerivedStateFromProps,
        j =
          typeof w == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function";
      (j ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((s !== r || u !== h) && Bs(t, i, r, h)),
        (Vt = !1));
      var x = t.memoizedState;
      ((i.state = x),
        al(t, r, i, l),
        (u = t.memoizedState),
        s !== r || x !== u || Je.current || Vt
          ? (typeof w == "function" && (Xo(t, n, w, r), (u = t.memoizedState)),
            (s = Vt || Rs(t, n, s, r, x, u, h))
              ? (j ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = u)),
            (i.props = r),
            (i.state = u),
            (i.context = h),
            (r = s))
          : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1)));
    } else {
      ((i = t.stateNode),
        us(e, t),
        (s = t.memoizedProps),
        (h = t.type === t.elementType ? s : yt(t.type, s)),
        (i.props = h),
        (j = t.pendingProps),
        (x = i.context),
        (u = n.contextType),
        typeof u == "object" && u !== null
          ? (u = ct(u))
          : ((u = Xe(n) ? nn : We.current), (u = Cn(t, u))));
      var P = n.getDerivedStateFromProps;
      ((w =
        typeof P == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function") ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((s !== j || x !== u) && Bs(t, i, r, u)),
        (Vt = !1),
        (x = t.memoizedState),
        (i.state = x),
        al(t, r, i, l));
      var R = t.memoizedState;
      s !== j || x !== R || Je.current || Vt
        ? (typeof P == "function" && (Xo(t, n, P, r), (R = t.memoizedState)),
          (h = Vt || Rs(t, n, h, r, x, R, u) || !1)
            ? (w ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(r, R, u),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(r, R, u)),
              typeof i.componentDidUpdate == "function" && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (s === e.memoizedProps && x === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (s === e.memoizedProps && x === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = R)),
          (i.props = r),
          (i.state = R),
          (i.context = u),
          (r = h))
        : (typeof i.componentDidUpdate != "function" ||
            (s === e.memoizedProps && x === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (s === e.memoizedProps && x === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return ni(e, t, n, r, o, l);
  }
  function ni(e, t, n, r, l, o) {
    Qs(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return (l && qa(t, n, !1), Mt(e, t, o));
    ((r = t.stateNode), (gd.current = t));
    var s =
      i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = Pn(t, e.child, null, o)), (t.child = Pn(t, null, s, o)))
        : Ge(e, t, s, o),
      (t.memoizedState = r.state),
      l && qa(t, n, !0),
      t.child
    );
  }
  function Gs(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Ja(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ja(e, t.context, !1),
      Oo(e, t.containerInfo));
  }
  function Ys(e, t, n, r, l) {
    return (_n(), To(l), (t.flags |= 256), Ge(e, t, n, r), t.child);
  }
  var ri = { dehydrated: null, treeContext: null, retryLane: 0 };
  function li(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Js(e, t, n) {
    var r = t.pendingProps,
      l = ke.current,
      o = !1,
      i = (t.flags & 128) !== 0,
      s;
    if (
      ((s = i) ||
        (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      s
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      ge(ke, l & 1),
      e === null)
    )
      return (
        Po(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((i = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (i = { mode: "hidden", children: i }),
                (r & 1) === 0 && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = i))
                  : (o = zl(i, r, 0, null)),
                (e = pn(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = li(n)),
                (t.memoizedState = ri),
                e)
              : oi(t, i))
      );
    if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
      return vd(e, t, i, r, s, l, n);
    if (o) {
      ((o = r.fallback), (i = t.mode), (l = e.child), (s = l.sibling));
      var u = { mode: "hidden", children: r.children };
      return (
        (i & 1) === 0 && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = u),
            (t.deletions = null))
          : ((r = qt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        s !== null ? (o = qt(s, o)) : ((o = pn(o, i, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (i = e.child.memoizedState),
        (i =
          i === null
            ? li(n)
            : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions,
              }),
        (o.memoizedState = i),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = ri),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = qt(o, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function oi(e, t) {
    return (
      (t = zl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function hl(e, t, n, r) {
    return (
      r !== null && To(r),
      Pn(t, e.child, null, n),
      (e = oi(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function vd(e, t, n, r, l, o, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Zo(Error(p(422)))), hl(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (l = t.mode),
            (r = zl({ mode: "visible", children: r.children }, l, 0, null)),
            (o = pn(o, l, i, null)),
            (o.flags |= 2),
            (r.return = t),
            (o.return = t),
            (r.sibling = o),
            (t.child = r),
            (t.mode & 1) !== 0 && Pn(t, e.child, null, i),
            (t.child.memoizedState = li(i)),
            (t.memoizedState = ri),
            o);
    if ((t.mode & 1) === 0) return hl(e, t, i, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
      return (
        (r = s),
        (o = Error(p(419))),
        (r = Zo(o, r, void 0)),
        hl(e, t, i, r)
      );
    }
    if (((s = (i & e.childLanes) !== 0), qe || s)) {
      if (((r = Be), r !== null)) {
        switch (i & -i) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        ((l = (l & (r.suspendedLanes | i)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== o.retryLane &&
            ((o.retryLane = l), Pt(e, l), wt(r, e, l, -1)));
      }
      return (wi(), (r = Zo(Error(p(421)))), hl(e, t, i, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = _d.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (ot = $t(l.nextSibling)),
        (lt = t),
        (xe = !0),
        (vt = null),
        e !== null &&
          ((st[ut++] = Ft),
          (st[ut++] = _t),
          (st[ut++] = rn),
          (Ft = e.id),
          (_t = e.overflow),
          (rn = t)),
        (t = oi(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Xs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Bo(e.return, t, n));
  }
  function ii(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = l));
  }
  function qs(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((Ge(e, t, r.children, n), (r = ke.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Xs(e, n, t);
          else if (e.tag === 19) Xs(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      r &= 1;
    }
    if ((ge(ke, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate),
              e !== null && sl(e) === null && (l = n),
              (n = n.sibling));
          ((n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            ii(t, !1, l, n, o));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && sl(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          ii(t, !0, n, null, o);
          break;
        case "together":
          ii(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function gl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Mt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (un |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(p(153));
    if (t.child !== null) {
      for (
        e = t.child, n = qt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = qt(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function yd(e, t, n) {
    switch (t.tag) {
      case 3:
        (Gs(t), _n());
        break;
      case 5:
        fs(t);
        break;
      case 1:
        Xe(t.type) && qr(t);
        break;
      case 4:
        Oo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (ge(ll, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ge(ke, ke.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Js(e, t, n)
              : (ge(ke, ke.current & 1),
                (e = Mt(e, t, n)),
                e !== null ? e.sibling : null);
        ge(ke, ke.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return qs(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ge(ke, ke.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Vs(e, t, n));
    }
    return Mt(e, t, n);
  }
  var Zs, ai, eu, tu;
  ((Zs = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }),
    (ai = function () {}),
    (eu = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), an(Nt.current));
        var o = null;
        switch (n) {
          case "input":
            ((l = se(e, l)), (r = se(e, r)), (o = []));
            break;
          case "select":
            ((l = _({}, l, { value: void 0 })),
              (r = _({}, r, { value: void 0 })),
              (o = []));
            break;
          case "textarea":
            ((l = Dl(e, l)), (r = Dl(e, r)), (o = []));
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = Yr);
        }
        Al(n, r);
        var i;
        n = null;
        for (h in l)
          if (!r.hasOwnProperty(h) && l.hasOwnProperty(h) && l[h] != null)
            if (h === "style") {
              var s = l[h];
              for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
            } else
              h !== "dangerouslySetInnerHTML" &&
                h !== "children" &&
                h !== "suppressContentEditableWarning" &&
                h !== "suppressHydrationWarning" &&
                h !== "autoFocus" &&
                (N.hasOwnProperty(h)
                  ? o || (o = [])
                  : (o = o || []).push(h, null));
        for (h in r) {
          var u = r[h];
          if (
            ((s = l != null ? l[h] : void 0),
            r.hasOwnProperty(h) && u !== s && (u != null || s != null))
          )
            if (h === "style")
              if (s) {
                for (i in s)
                  !s.hasOwnProperty(i) ||
                    (u && u.hasOwnProperty(i)) ||
                    (n || (n = {}), (n[i] = ""));
                for (i in u)
                  u.hasOwnProperty(i) &&
                    s[i] !== u[i] &&
                    (n || (n = {}), (n[i] = u[i]));
              } else (n || (o || (o = []), o.push(h, n)), (n = u));
            else
              h === "dangerouslySetInnerHTML"
                ? ((u = u ? u.__html : void 0),
                  (s = s ? s.__html : void 0),
                  u != null && s !== u && (o = o || []).push(h, u))
                : h === "children"
                  ? (typeof u != "string" && typeof u != "number") ||
                    (o = o || []).push(h, "" + u)
                  : h !== "suppressContentEditableWarning" &&
                    h !== "suppressHydrationWarning" &&
                    (N.hasOwnProperty(h)
                      ? (u != null && h === "onScroll" && ve("scroll", e),
                        o || s === u || (o = []))
                      : (o = o || []).push(h, u));
        }
        n && (o = o || []).push("style", n);
        var h = o;
        (t.updateQueue = h) && (t.flags |= 4);
      }
    }),
    (tu = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function xr(e, t) {
    if (!xe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            (n.alternate !== null && (r = n), (n = n.sibling));
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Qe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function xd(e, t, n) {
    var r = t.pendingProps;
    switch ((Fo(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Qe(t), null);
      case 1:
        return (Xe(t.type) && Xr(), Qe(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Rn(),
          ye(Je),
          ye(We),
          Uo(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (nl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), vt !== null && (yi(vt), (vt = null)))),
          ai(e, t),
          Qe(t),
          null
        );
      case 5:
        Ao(t);
        var l = an(mr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (eu(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(p(166));
            return (Qe(t), null);
          }
          if (((e = an(Nt.current)), nl(t))) {
            ((r = t.stateNode), (n = t.type));
            var o = t.memoizedProps;
            switch (((r[jt] = t), (r[ur] = o), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (ve("cancel", r), ve("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                ve("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < ir.length; l++) ve(ir[l], r);
                break;
              case "source":
                ve("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (ve("error", r), ve("load", r));
                break;
              case "details":
                ve("toggle", r);
                break;
              case "input":
                (Oe(r, o), ve("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!o.multiple }),
                  ve("invalid", r));
                break;
              case "textarea":
                (Di(r, o), ve("invalid", r));
            }
            (Al(n, o), (l = null));
            for (var i in o)
              if (o.hasOwnProperty(i)) {
                var s = o[i];
                i === "children"
                  ? typeof s == "string"
                    ? r.textContent !== s &&
                      (o.suppressHydrationWarning !== !0 &&
                        Gr(r.textContent, s, e),
                      (l = ["children", s]))
                    : typeof s == "number" &&
                      r.textContent !== "" + s &&
                      (o.suppressHydrationWarning !== !0 &&
                        Gr(r.textContent, s, e),
                      (l = ["children", "" + s]))
                  : N.hasOwnProperty(i) &&
                    s != null &&
                    i === "onScroll" &&
                    ve("scroll", r);
              }
            switch (n) {
              case "input":
                (nt(r), Ii(r, o, !0));
                break;
              case "textarea":
                (nt(r), Ai(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Yr);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((i = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = $i(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = i.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = i.createElement(n, { is: r.is }))
                    : ((e = i.createElement(n)),
                      n === "select" &&
                        ((i = e),
                        r.multiple
                          ? (i.multiple = !0)
                          : r.size && (i.size = r.size)))
                : (e = i.createElementNS(e, n)),
              (e[jt] = t),
              (e[ur] = r),
              Zs(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((i = $l(n, r)), n)) {
                case "dialog":
                  (ve("cancel", e), ve("close", e), (l = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (ve("load", e), (l = r));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < ir.length; l++) ve(ir[l], e);
                  l = r;
                  break;
                case "source":
                  (ve("error", e), (l = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (ve("error", e), ve("load", e), (l = r));
                  break;
                case "details":
                  (ve("toggle", e), (l = r));
                  break;
                case "input":
                  (Oe(e, r), (l = se(e, r)), ve("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = _({}, r, { value: void 0 })),
                    ve("invalid", e));
                  break;
                case "textarea":
                  (Di(e, r), (l = Dl(e, r)), ve("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Al(n, l), (s = l));
              for (o in s)
                if (s.hasOwnProperty(o)) {
                  var u = s[o];
                  o === "style"
                    ? Wi(e, u)
                    : o === "dangerouslySetInnerHTML"
                      ? ((u = u ? u.__html : void 0), u != null && Ui(e, u))
                      : o === "children"
                        ? typeof u == "string"
                          ? (n !== "textarea" || u !== "") && $n(e, u)
                          : typeof u == "number" && $n(e, "" + u)
                        : o !== "suppressContentEditableWarning" &&
                          o !== "suppressHydrationWarning" &&
                          o !== "autoFocus" &&
                          (N.hasOwnProperty(o)
                            ? u != null && o === "onScroll" && ve("scroll", e)
                            : u != null && De(e, o, u, i));
                }
              switch (n) {
                case "input":
                  (nt(e), Ii(e, r, !1));
                  break;
                case "textarea":
                  (nt(e), Ai(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + K(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? hn(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        hn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Yr);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (Qe(t), null);
      case 6:
        if (e && t.stateNode != null) tu(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(p(166));
          if (((n = an(mr.current)), an(Nt.current), nl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[jt] = t),
              (o = r.nodeValue !== n) && ((e = lt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Gr(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Gr(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[jt] = t),
              (t.stateNode = r));
        }
        return (Qe(t), null);
      case 13:
        if (
          (ye(ke),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (xe && ot !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (ls(), _n(), (t.flags |= 98560), (o = !1));
          else if (((o = nl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(p(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(p(317));
              o[jt] = t;
            } else
              (_n(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Qe(t), (o = !1));
          } else (vt !== null && (yi(vt), (vt = null)), (o = !0));
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ke.current & 1) !== 0
                  ? Te === 0 && (Te = 3)
                  : wi())),
            t.updateQueue !== null && (t.flags |= 4),
            Qe(t),
            null);
      case 4:
        return (
          Rn(),
          ai(e, t),
          e === null && ar(t.stateNode.containerInfo),
          Qe(t),
          null
        );
      case 10:
        return (Lo(t.type._context), Qe(t), null);
      case 17:
        return (Xe(t.type) && Xr(), Qe(t), null);
      case 19:
        if ((ye(ke), (o = t.memoizedState), o === null)) return (Qe(t), null);
        if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
          if (r) xr(o, !1);
          else {
            if (Te !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = sl(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      xr(o, !1),
                      r = i.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (i = o.alternate),
                      i === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = i.childLanes),
                          (o.lanes = i.lanes),
                          (o.child = i.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = i.memoizedProps),
                          (o.memoizedState = i.memoizedState),
                          (o.updateQueue = i.updateQueue),
                          (o.type = i.type),
                          (e = i.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling));
                  return (ge(ke, (ke.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            o.tail !== null &&
              Ce() > Dn &&
              ((t.flags |= 128), (r = !0), xr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = sl(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                xr(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !i.alternate &&
                  !xe)
              )
                return (Qe(t), null);
            } else
              2 * Ce() - o.renderingStartTime > Dn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), xr(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((n = o.last),
              n !== null ? (n.sibling = i) : (t.child = i),
              (o.last = i));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = Ce()),
            (t.sibling = null),
            (n = ke.current),
            ge(ke, r ? (n & 1) | 2 : n & 1),
            t)
          : (Qe(t), null);
      case 22:
      case 23:
        return (
          ki(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (it & 1073741824) !== 0 &&
              (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Qe(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, t.tag));
  }
  function kd(e, t) {
    switch ((Fo(t), t.tag)) {
      case 1:
        return (
          Xe(t.type) && Xr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Rn(),
          ye(Je),
          ye(We),
          Uo(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return (Ao(t), null);
      case 13:
        if (
          (ye(ke), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(p(340));
          _n();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (ye(ke), null);
      case 4:
        return (Rn(), null);
      case 10:
        return (Lo(t.type._context), null);
      case 22:
      case 23:
        return (ki(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var vl = !1,
    Ke = !1,
    wd = typeof WeakSet == "function" ? WeakSet : Set,
    T = null;
  function Bn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Ee(e, t, r);
        }
      else n.current = null;
  }
  function si(e, t, n) {
    try {
      n();
    } catch (r) {
      Ee(e, t, r);
    }
  }
  var nu = !1;
  function Sd(e, t) {
    if (((ko = Ir), (e = Ra()), fo(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, o.nodeType);
            } catch {
              n = null;
              break e;
            }
            var i = 0,
              s = -1,
              u = -1,
              h = 0,
              w = 0,
              j = e,
              x = null;
            t: for (;;) {
              for (
                var P;
                j !== n || (l !== 0 && j.nodeType !== 3) || (s = i + l),
                  j !== o || (r !== 0 && j.nodeType !== 3) || (u = i + r),
                  j.nodeType === 3 && (i += j.nodeValue.length),
                  (P = j.firstChild) !== null;
              )
                ((x = j), (j = P));
              for (;;) {
                if (j === e) break t;
                if (
                  (x === n && ++h === l && (s = i),
                  x === o && ++w === r && (u = i),
                  (P = j.nextSibling) !== null)
                )
                  break;
                ((j = x), (x = j.parentNode));
              }
              j = P;
            }
            n = s === -1 || u === -1 ? null : { start: s, end: u };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      wo = { focusedElem: e, selectionRange: n }, Ir = !1, T = t;
      T !== null;
    )
      if (((t = T), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (T = e));
      else
        for (; T !== null; ) {
          t = T;
          try {
            var R = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (R !== null) {
                    var B = R.memoizedProps,
                      ze = R.memoizedState,
                      f = t.stateNode,
                      c = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? B : yt(t.type, B),
                        ze,
                      );
                    f.__reactInternalSnapshotBeforeUpdate = c;
                  }
                  break;
                case 3:
                  var m = t.stateNode.containerInfo;
                  m.nodeType === 1
                    ? (m.textContent = "")
                    : m.nodeType === 9 &&
                      m.documentElement &&
                      m.removeChild(m.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(p(163));
              }
          } catch (E) {
            Ee(t, t.return, E);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (T = e));
            break;
          }
          T = t.return;
        }
    return ((R = nu), (nu = !1), R);
  }
  function kr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          ((l.destroy = void 0), o !== void 0 && si(t, n, o));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function yl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function ui(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function ru(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), ru(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[jt],
          delete t[ur],
          delete t[Eo],
          delete t[ld],
          delete t[od])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function lu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ou(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || lu(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ci(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Yr)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ci(e, t, n), e = e.sibling; e !== null; )
        (ci(e, t, n), (e = e.sibling));
  }
  function di(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (di(e, t, n), e = e.sibling; e !== null; )
        (di(e, t, n), (e = e.sibling));
  }
  var Ae = null,
    xt = !1;
  function Kt(e, t, n) {
    for (n = n.child; n !== null; ) (iu(e, t, n), (n = n.sibling));
  }
  function iu(e, t, n) {
    if (St && typeof St.onCommitFiberUnmount == "function")
      try {
        St.onCommitFiberUnmount(Pr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ke || Bn(n, t);
      case 6:
        var r = Ae,
          l = xt;
        ((Ae = null),
          Kt(e, t, n),
          (Ae = r),
          (xt = l),
          Ae !== null &&
            (xt
              ? ((e = Ae),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Ae.removeChild(n.stateNode)));
        break;
      case 18:
        Ae !== null &&
          (xt
            ? ((e = Ae),
              (n = n.stateNode),
              e.nodeType === 8
                ? No(e.parentNode, n)
                : e.nodeType === 1 && No(e, n),
              qn(e))
            : No(Ae, n.stateNode));
        break;
      case 4:
        ((r = Ae),
          (l = xt),
          (Ae = n.stateNode.containerInfo),
          (xt = !0),
          Kt(e, t, n),
          (Ae = r),
          (xt = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ke &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var o = l,
              i = o.destroy;
            ((o = o.tag),
              i !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && si(n, t, i),
              (l = l.next));
          } while (l !== r);
        }
        Kt(e, t, n);
        break;
      case 1:
        if (
          !Ke &&
          (Bn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            ((r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount());
          } catch (s) {
            Ee(n, t, s);
          }
        Kt(e, t, n);
        break;
      case 21:
        Kt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ke = (r = Ke) || n.memoizedState !== null), Kt(e, t, n), (Ke = r))
          : Kt(e, t, n);
        break;
      default:
        Kt(e, t, n);
    }
  }
  function au(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new wd()),
        t.forEach(function (r) {
          var l = Pd.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function kt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var o = e,
            i = t,
            s = i;
          e: for (; s !== null; ) {
            switch (s.tag) {
              case 5:
                ((Ae = s.stateNode), (xt = !1));
                break e;
              case 3:
                ((Ae = s.stateNode.containerInfo), (xt = !0));
                break e;
              case 4:
                ((Ae = s.stateNode.containerInfo), (xt = !0));
                break e;
            }
            s = s.return;
          }
          if (Ae === null) throw Error(p(160));
          (iu(o, i, l), (Ae = null), (xt = !1));
          var u = l.alternate;
          (u !== null && (u.return = null), (l.return = null));
        } catch (h) {
          Ee(l, t, h);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) (su(t, e), (t = t.sibling));
  }
  function su(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((kt(t, e), bt(e), r & 4)) {
          try {
            (kr(3, e, e.return), yl(3, e));
          } catch (B) {
            Ee(e, e.return, B);
          }
          try {
            kr(5, e, e.return);
          } catch (B) {
            Ee(e, e.return, B);
          }
        }
        break;
      case 1:
        (kt(t, e), bt(e), r & 512 && n !== null && Bn(n, n.return));
        break;
      case 5:
        if (
          (kt(t, e),
          bt(e),
          r & 512 && n !== null && Bn(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            $n(l, "");
          } catch (B) {
            Ee(e, e.return, B);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            i = n !== null ? n.memoizedProps : o,
            s = e.type,
            u = e.updateQueue;
          if (((e.updateQueue = null), u !== null))
            try {
              (s === "input" &&
                o.type === "radio" &&
                o.name != null &&
                mt(l, o),
                $l(s, i));
              var h = $l(s, o);
              for (i = 0; i < u.length; i += 2) {
                var w = u[i],
                  j = u[i + 1];
                w === "style"
                  ? Wi(l, j)
                  : w === "dangerouslySetInnerHTML"
                    ? Ui(l, j)
                    : w === "children"
                      ? $n(l, j)
                      : De(l, w, j, h);
              }
              switch (s) {
                case "input":
                  mn(l, o);
                  break;
                case "textarea":
                  Oi(l, o);
                  break;
                case "select":
                  var x = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var P = o.value;
                  P != null
                    ? hn(l, !!o.multiple, P, !1)
                    : x !== !!o.multiple &&
                      (o.defaultValue != null
                        ? hn(l, !!o.multiple, o.defaultValue, !0)
                        : hn(l, !!o.multiple, o.multiple ? [] : "", !1));
              }
              l[ur] = o;
            } catch (B) {
              Ee(e, e.return, B);
            }
        }
        break;
      case 6:
        if ((kt(t, e), bt(e), r & 4)) {
          if (e.stateNode === null) throw Error(p(162));
          ((l = e.stateNode), (o = e.memoizedProps));
          try {
            l.nodeValue = o;
          } catch (B) {
            Ee(e, e.return, B);
          }
        }
        break;
      case 3:
        if (
          (kt(t, e), bt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            qn(t.containerInfo);
          } catch (B) {
            Ee(e, e.return, B);
          }
        break;
      case 4:
        (kt(t, e), bt(e));
        break;
      case 13:
        (kt(t, e),
          bt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (mi = Ce())),
          r & 4 && au(e));
        break;
      case 22:
        if (
          ((w = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ke = (h = Ke) || w), kt(t, e), (Ke = h)) : kt(t, e),
          bt(e),
          r & 8192)
        ) {
          if (
            ((h = e.memoizedState !== null),
            (e.stateNode.isHidden = h) && !w && (e.mode & 1) !== 0)
          )
            for (T = e, w = e.child; w !== null; ) {
              for (j = T = w; T !== null; ) {
                switch (((x = T), (P = x.child), x.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    kr(4, x, x.return);
                    break;
                  case 1:
                    Bn(x, x.return);
                    var R = x.stateNode;
                    if (typeof R.componentWillUnmount == "function") {
                      ((r = x), (n = x.return));
                      try {
                        ((t = r),
                          (R.props = t.memoizedProps),
                          (R.state = t.memoizedState),
                          R.componentWillUnmount());
                      } catch (B) {
                        Ee(r, n, B);
                      }
                    }
                    break;
                  case 5:
                    Bn(x, x.return);
                    break;
                  case 22:
                    if (x.memoizedState !== null) {
                      du(j);
                      continue;
                    }
                }
                P !== null ? ((P.return = x), (T = P)) : du(j);
              }
              w = w.sibling;
            }
          e: for (w = null, j = e; ; ) {
            if (j.tag === 5) {
              if (w === null) {
                w = j;
                try {
                  ((l = j.stateNode),
                    h
                      ? ((o = l.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((s = j.stateNode),
                        (u = j.memoizedProps.style),
                        (i =
                          u != null && u.hasOwnProperty("display")
                            ? u.display
                            : null),
                        (s.style.display = Hi("display", i))));
                } catch (B) {
                  Ee(e, e.return, B);
                }
              }
            } else if (j.tag === 6) {
              if (w === null)
                try {
                  j.stateNode.nodeValue = h ? "" : j.memoizedProps;
                } catch (B) {
                  Ee(e, e.return, B);
                }
            } else if (
              ((j.tag !== 22 && j.tag !== 23) ||
                j.memoizedState === null ||
                j === e) &&
              j.child !== null
            ) {
              ((j.child.return = j), (j = j.child));
              continue;
            }
            if (j === e) break e;
            for (; j.sibling === null; ) {
              if (j.return === null || j.return === e) break e;
              (w === j && (w = null), (j = j.return));
            }
            (w === j && (w = null),
              (j.sibling.return = j.return),
              (j = j.sibling));
          }
        }
        break;
      case 19:
        (kt(t, e), bt(e), r & 4 && au(e));
        break;
      case 21:
        break;
      default:
        (kt(t, e), bt(e));
    }
  }
  function bt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (lu(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(p(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && ($n(l, ""), (r.flags &= -33));
            var o = ou(e);
            di(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              s = ou(e);
            ci(e, s, i);
            break;
          default:
            throw Error(p(161));
        }
      } catch (u) {
        Ee(e, e.return, u);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function jd(e, t, n) {
    ((T = e), uu(e));
  }
  function uu(e, t, n) {
    for (var r = (e.mode & 1) !== 0; T !== null; ) {
      var l = T,
        o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || vl;
        if (!i) {
          var s = l.alternate,
            u = (s !== null && s.memoizedState !== null) || Ke;
          s = vl;
          var h = Ke;
          if (((vl = i), (Ke = u) && !h))
            for (T = l; T !== null; )
              ((i = T),
                (u = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? fu(l)
                  : u !== null
                    ? ((u.return = i), (T = u))
                    : fu(l));
          for (; o !== null; ) ((T = o), uu(o), (o = o.sibling));
          ((T = l), (vl = s), (Ke = h));
        }
        cu(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && o !== null
          ? ((o.return = l), (T = o))
          : cu(e);
    }
  }
  function cu(e) {
    for (; T !== null; ) {
      var t = T;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ke || yl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ke)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : yt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var o = t.updateQueue;
                o !== null && ds(t, o, r);
                break;
              case 3:
                var i = t.updateQueue;
                if (i !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  ds(t, i, n);
                }
                break;
              case 5:
                var s = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = s;
                  var u = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      u.autoFocus && n.focus();
                      break;
                    case "img":
                      u.src && (n.src = u.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var h = t.alternate;
                  if (h !== null) {
                    var w = h.memoizedState;
                    if (w !== null) {
                      var j = w.dehydrated;
                      j !== null && qn(j);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(p(163));
            }
          Ke || (t.flags & 512 && ui(t));
        } catch (x) {
          Ee(t, t.return, x);
        }
      }
      if (t === e) {
        T = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (T = n));
        break;
      }
      T = t.return;
    }
  }
  function du(e) {
    for (; T !== null; ) {
      var t = T;
      if (t === e) {
        T = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (T = n));
        break;
      }
      T = t.return;
    }
  }
  function fu(e) {
    for (; T !== null; ) {
      var t = T;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              yl(4, t);
            } catch (u) {
              Ee(t, n, u);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (u) {
                Ee(t, l, u);
              }
            }
            var o = t.return;
            try {
              ui(t);
            } catch (u) {
              Ee(t, o, u);
            }
            break;
          case 5:
            var i = t.return;
            try {
              ui(t);
            } catch (u) {
              Ee(t, i, u);
            }
        }
      } catch (u) {
        Ee(t, t.return, u);
      }
      if (t === e) {
        T = null;
        break;
      }
      var s = t.sibling;
      if (s !== null) {
        ((s.return = t.return), (T = s));
        break;
      }
      T = t.return;
    }
  }
  var Nd = Math.ceil,
    xl = je.ReactCurrentDispatcher,
    fi = je.ReactCurrentOwner,
    ft = je.ReactCurrentBatchConfig,
    ae = 0,
    Be = null,
    _e = null,
    $e = 0,
    it = 0,
    In = Ut(0),
    Te = 0,
    wr = null,
    un = 0,
    kl = 0,
    pi = 0,
    Sr = null,
    Ze = null,
    mi = 0,
    Dn = 1 / 0,
    Rt = null,
    wl = !1,
    hi = null,
    Gt = null,
    Sl = !1,
    Yt = null,
    jl = 0,
    jr = 0,
    gi = null,
    Nl = -1,
    El = 0;
  function Ye() {
    return (ae & 6) !== 0 ? Ce() : Nl !== -1 ? Nl : (Nl = Ce());
  }
  function Jt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ae & 2) !== 0 && $e !== 0
        ? $e & -$e
        : ad.transition !== null
          ? (El === 0 && (El = oa()), El)
          : ((e = fe),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : ma(e.type))),
            e);
  }
  function wt(e, t, n, r) {
    if (50 < jr) throw ((jr = 0), (gi = null), Error(p(185)));
    (Kn(e, n, r),
      ((ae & 2) === 0 || e !== Be) &&
        (e === Be && ((ae & 2) === 0 && (kl |= n), Te === 4 && Xt(e, $e)),
        et(e, r),
        n === 1 &&
          ae === 0 &&
          (t.mode & 1) === 0 &&
          ((Dn = Ce() + 500), Zr && Wt())));
  }
  function et(e, t) {
    var n = e.callbackNode;
    ac(e, t);
    var r = Rr(e, e === Be ? $e : 0);
    if (r === 0)
      (n !== null && na(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && na(n), t === 1))
        (e.tag === 0 ? id(mu.bind(null, e)) : Za(mu.bind(null, e)),
          nd(function () {
            (ae & 6) === 0 && Wt();
          }),
          (n = null));
      else {
        switch (ia(r)) {
          case 1:
            n = Gl;
            break;
          case 4:
            n = ra;
            break;
          case 16:
            n = _r;
            break;
          case 536870912:
            n = la;
            break;
          default:
            n = _r;
        }
        n = Su(n, pu.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function pu(e, t) {
    if (((Nl = -1), (El = 0), (ae & 6) !== 0)) throw Error(p(327));
    var n = e.callbackNode;
    if (On() && e.callbackNode !== n) return null;
    var r = Rr(e, e === Be ? $e : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = bl(e, r);
    else {
      t = r;
      var l = ae;
      ae |= 2;
      var o = gu();
      (Be !== e || $e !== t) && ((Rt = null), (Dn = Ce() + 500), dn(e, t));
      do
        try {
          Cd();
          break;
        } catch (s) {
          hu(e, s);
        }
      while (!0);
      (Ro(),
        (xl.current = o),
        (ae = l),
        _e !== null ? (t = 0) : ((Be = null), ($e = 0), (t = Te)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = Yl(e)), l !== 0 && ((r = l), (t = vi(e, l)))),
        t === 1)
      )
        throw ((n = wr), dn(e, 0), Xt(e, r), et(e, Ce()), n);
      if (t === 6) Xt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Ed(l) &&
            ((t = bl(e, r)),
            t === 2 && ((o = Yl(e)), o !== 0 && ((r = o), (t = vi(e, o)))),
            t === 1))
        )
          throw ((n = wr), dn(e, 0), Xt(e, r), et(e, Ce()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            fn(e, Ze, Rt);
            break;
          case 3:
            if (
              (Xt(e, r),
              (r & 130023424) === r && ((t = mi + 500 - Ce()), 10 < t))
            ) {
              if (Rr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Ye(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = jo(fn.bind(null, e, Ze, Rt), t);
              break;
            }
            fn(e, Ze, Rt);
            break;
          case 4:
            if ((Xt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - ht(r);
              ((o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o));
            }
            if (
              ((r = l),
              (r = Ce() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * Nd(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = jo(fn.bind(null, e, Ze, Rt), r);
              break;
            }
            fn(e, Ze, Rt);
            break;
          case 5:
            fn(e, Ze, Rt);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    return (et(e, Ce()), e.callbackNode === n ? pu.bind(null, e) : null);
  }
  function vi(e, t) {
    var n = Sr;
    return (
      e.current.memoizedState.isDehydrated && (dn(e, t).flags |= 256),
      (e = bl(e, t)),
      e !== 2 && ((t = Ze), (Ze = n), t !== null && yi(t)),
      e
    );
  }
  function yi(e) {
    Ze === null ? (Ze = e) : Ze.push.apply(Ze, e);
  }
  function Ed(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!gt(o(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Xt(e, t) {
    for (
      t &= ~pi,
        t &= ~kl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - ht(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function mu(e) {
    if ((ae & 6) !== 0) throw Error(p(327));
    On();
    var t = Rr(e, 0);
    if ((t & 1) === 0) return (et(e, Ce()), null);
    var n = bl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Yl(e);
      r !== 0 && ((t = r), (n = vi(e, r)));
    }
    if (n === 1) throw ((n = wr), dn(e, 0), Xt(e, t), et(e, Ce()), n);
    if (n === 6) throw Error(p(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      fn(e, Ze, Rt),
      et(e, Ce()),
      null
    );
  }
  function xi(e, t) {
    var n = ae;
    ae |= 1;
    try {
      return e(t);
    } finally {
      ((ae = n), ae === 0 && ((Dn = Ce() + 500), Zr && Wt()));
    }
  }
  function cn(e) {
    Yt !== null && Yt.tag === 0 && (ae & 6) === 0 && On();
    var t = ae;
    ae |= 1;
    var n = ft.transition,
      r = fe;
    try {
      if (((ft.transition = null), (fe = 1), e)) return e();
    } finally {
      ((fe = r), (ft.transition = n), (ae = t), (ae & 6) === 0 && Wt());
    }
  }
  function ki() {
    ((it = In.current), ye(In));
  }
  function dn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), td(n)), _e !== null))
      for (n = _e.return; n !== null; ) {
        var r = n;
        switch ((Fo(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Xr());
            break;
          case 3:
            (Rn(), ye(Je), ye(We), Uo());
            break;
          case 5:
            Ao(r);
            break;
          case 4:
            Rn();
            break;
          case 13:
            ye(ke);
            break;
          case 19:
            ye(ke);
            break;
          case 10:
            Lo(r.type._context);
            break;
          case 22:
          case 23:
            ki();
        }
        n = n.return;
      }
    if (
      ((Be = e),
      (_e = e = qt(e.current, null)),
      ($e = it = t),
      (Te = 0),
      (wr = null),
      (pi = kl = un = 0),
      (Ze = Sr = null),
      on !== null)
    ) {
      for (t = 0; t < on.length; t++)
        if (((n = on[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var i = o.next;
            ((o.next = l), (r.next = i));
          }
          n.pending = r;
        }
      on = null;
    }
    return e;
  }
  function hu(e, t) {
    do {
      var n = _e;
      try {
        if ((Ro(), (ul.current = pl), cl)) {
          for (var r = we.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          cl = !1;
        }
        if (
          ((sn = 0),
          (Le = Pe = we = null),
          (hr = !1),
          (gr = 0),
          (fi.current = null),
          n === null || n.return === null)
        ) {
          ((Te = 1), (wr = t), (_e = null));
          break;
        }
        e: {
          var o = e,
            i = n.return,
            s = n,
            u = t;
          if (
            ((t = $e),
            (s.flags |= 32768),
            u !== null && typeof u == "object" && typeof u.then == "function")
          ) {
            var h = u,
              w = s,
              j = w.tag;
            if ((w.mode & 1) === 0 && (j === 0 || j === 11 || j === 15)) {
              var x = w.alternate;
              x
                ? ((w.updateQueue = x.updateQueue),
                  (w.memoizedState = x.memoizedState),
                  (w.lanes = x.lanes))
                : ((w.updateQueue = null), (w.memoizedState = null));
            }
            var P = As(i);
            if (P !== null) {
              ((P.flags &= -257),
                $s(P, i, s, o, t),
                P.mode & 1 && Os(o, h, t),
                (t = P),
                (u = h));
              var R = t.updateQueue;
              if (R === null) {
                var B = new Set();
                (B.add(u), (t.updateQueue = B));
              } else R.add(u);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Os(o, h, t), wi());
                break e;
              }
              u = Error(p(426));
            }
          } else if (xe && s.mode & 1) {
            var ze = As(i);
            if (ze !== null) {
              ((ze.flags & 65536) === 0 && (ze.flags |= 256),
                $s(ze, i, s, o, t),
                To(Ln(u, s)));
              break e;
            }
          }
          ((o = u = Ln(u, s)),
            Te !== 4 && (Te = 2),
            Sr === null ? (Sr = [o]) : Sr.push(o),
            (o = i));
          do {
            switch (o.tag) {
              case 3:
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var f = Is(o, u, t);
                cs(o, f);
                break e;
              case 1:
                s = u;
                var c = o.type,
                  m = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof c.getDerivedStateFromError == "function" ||
                    (m !== null &&
                      typeof m.componentDidCatch == "function" &&
                      (Gt === null || !Gt.has(m))))
                ) {
                  ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                  var E = Ds(o, s, t);
                  cs(o, E);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        yu(n);
      } catch (D) {
        ((t = D), _e === n && n !== null && (_e = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function gu() {
    var e = xl.current;
    return ((xl.current = pl), e === null ? pl : e);
  }
  function wi() {
    ((Te === 0 || Te === 3 || Te === 2) && (Te = 4),
      Be === null ||
        ((un & 268435455) === 0 && (kl & 268435455) === 0) ||
        Xt(Be, $e));
  }
  function bl(e, t) {
    var n = ae;
    ae |= 2;
    var r = gu();
    (Be !== e || $e !== t) && ((Rt = null), dn(e, t));
    do
      try {
        bd();
        break;
      } catch (l) {
        hu(e, l);
      }
    while (!0);
    if ((Ro(), (ae = n), (xl.current = r), _e !== null)) throw Error(p(261));
    return ((Be = null), ($e = 0), Te);
  }
  function bd() {
    for (; _e !== null; ) vu(_e);
  }
  function Cd() {
    for (; _e !== null && !qu(); ) vu(_e);
  }
  function vu(e) {
    var t = wu(e.alternate, e, it);
    ((e.memoizedProps = e.pendingProps),
      t === null ? yu(e) : (_e = t),
      (fi.current = null));
  }
  function yu(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = xd(n, t, it)), n !== null)) {
          _e = n;
          return;
        }
      } else {
        if (((n = kd(n, t)), n !== null)) {
          ((n.flags &= 32767), (_e = n));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Te = 6), (_e = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        _e = t;
        return;
      }
      _e = t = e;
    } while (t !== null);
    Te === 0 && (Te = 5);
  }
  function fn(e, t, n) {
    var r = fe,
      l = ft.transition;
    try {
      ((ft.transition = null), (fe = 1), zd(e, t, n, r));
    } finally {
      ((ft.transition = l), (fe = r));
    }
    return null;
  }
  function zd(e, t, n, r) {
    do On();
    while (Yt !== null);
    if ((ae & 6) !== 0) throw Error(p(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(p(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var o = n.lanes | n.childLanes;
    if (
      (sc(e, o),
      e === Be && ((_e = Be = null), ($e = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Sl ||
        ((Sl = !0),
        Su(_r, function () {
          return (On(), null);
        })),
      (o = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || o)
    ) {
      ((o = ft.transition), (ft.transition = null));
      var i = fe;
      fe = 1;
      var s = ae;
      ((ae |= 4),
        (fi.current = null),
        Sd(e, n),
        su(n, e),
        Gc(wo),
        (Ir = !!ko),
        (wo = ko = null),
        (e.current = n),
        jd(n),
        Zu(),
        (ae = s),
        (fe = i),
        (ft.transition = o));
    } else e.current = n;
    if (
      (Sl && ((Sl = !1), (Yt = e), (jl = l)),
      (o = e.pendingLanes),
      o === 0 && (Gt = null),
      nc(n.stateNode),
      et(e, Ce()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (wl) throw ((wl = !1), (e = hi), (hi = null), e);
    return (
      (jl & 1) !== 0 && e.tag !== 0 && On(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === gi ? jr++ : ((jr = 0), (gi = e))) : (jr = 0),
      Wt(),
      null
    );
  }
  function On() {
    if (Yt !== null) {
      var e = ia(jl),
        t = ft.transition,
        n = fe;
      try {
        if (((ft.transition = null), (fe = 16 > e ? 16 : e), Yt === null))
          var r = !1;
        else {
          if (((e = Yt), (Yt = null), (jl = 0), (ae & 6) !== 0))
            throw Error(p(331));
          var l = ae;
          for (ae |= 4, T = e.current; T !== null; ) {
            var o = T,
              i = o.child;
            if ((T.flags & 16) !== 0) {
              var s = o.deletions;
              if (s !== null) {
                for (var u = 0; u < s.length; u++) {
                  var h = s[u];
                  for (T = h; T !== null; ) {
                    var w = T;
                    switch (w.tag) {
                      case 0:
                      case 11:
                      case 15:
                        kr(8, w, o);
                    }
                    var j = w.child;
                    if (j !== null) ((j.return = w), (T = j));
                    else
                      for (; T !== null; ) {
                        w = T;
                        var x = w.sibling,
                          P = w.return;
                        if ((ru(w), w === h)) {
                          T = null;
                          break;
                        }
                        if (x !== null) {
                          ((x.return = P), (T = x));
                          break;
                        }
                        T = P;
                      }
                  }
                }
                var R = o.alternate;
                if (R !== null) {
                  var B = R.child;
                  if (B !== null) {
                    R.child = null;
                    do {
                      var ze = B.sibling;
                      ((B.sibling = null), (B = ze));
                    } while (B !== null);
                  }
                }
                T = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && i !== null)
              ((i.return = o), (T = i));
            else
              e: for (; T !== null; ) {
                if (((o = T), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kr(9, o, o.return);
                  }
                var f = o.sibling;
                if (f !== null) {
                  ((f.return = o.return), (T = f));
                  break e;
                }
                T = o.return;
              }
          }
          var c = e.current;
          for (T = c; T !== null; ) {
            i = T;
            var m = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && m !== null)
              ((m.return = i), (T = m));
            else
              e: for (i = c; T !== null; ) {
                if (((s = T), (s.flags & 2048) !== 0))
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        yl(9, s);
                    }
                  } catch (D) {
                    Ee(s, s.return, D);
                  }
                if (s === i) {
                  T = null;
                  break e;
                }
                var E = s.sibling;
                if (E !== null) {
                  ((E.return = s.return), (T = E));
                  break e;
                }
                T = s.return;
              }
          }
          if (
            ((ae = l),
            Wt(),
            St && typeof St.onPostCommitFiberRoot == "function")
          )
            try {
              St.onPostCommitFiberRoot(Pr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((fe = n), (ft.transition = t));
      }
    }
    return !1;
  }
  function xu(e, t, n) {
    ((t = Ln(n, t)),
      (t = Is(e, t, 1)),
      (e = Qt(e, t, 1)),
      (t = Ye()),
      e !== null && (Kn(e, 1, t), et(e, t)));
  }
  function Ee(e, t, n) {
    if (e.tag === 3) xu(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          xu(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Gt === null || !Gt.has(r)))
          ) {
            ((e = Ln(n, e)),
              (e = Ds(t, e, 1)),
              (t = Qt(t, e, 1)),
              (e = Ye()),
              t !== null && (Kn(t, 1, e), et(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Fd(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Ye()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Be === e &&
        ($e & n) === n &&
        (Te === 4 || (Te === 3 && ($e & 130023424) === $e && 500 > Ce() - mi)
          ? dn(e, 0)
          : (pi |= n)),
      et(e, t));
  }
  function ku(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Mr), (Mr <<= 1), (Mr & 130023424) === 0 && (Mr = 4194304)));
    var n = Ye();
    ((e = Pt(e, t)), e !== null && (Kn(e, t, n), et(e, n)));
  }
  function _d(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), ku(e, n));
  }
  function Pd(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(p(314));
    }
    (r !== null && r.delete(t), ku(e, n));
  }
  var wu;
  wu = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Je.current) qe = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return ((qe = !1), yd(e, t, n));
        qe = (e.flags & 131072) !== 0;
      }
    else ((qe = !1), xe && (t.flags & 1048576) !== 0 && es(t, tl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (gl(e, t), (e = t.pendingProps));
        var l = Cn(t, We.current);
        (Mn(t, n), (l = Vo(null, t, r, e, l, n)));
        var o = Qo();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Xe(r) ? ((o = !0), qr(t)) : (o = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Do(t),
              (l.updater = ml),
              (t.stateNode = l),
              (l._reactInternals = t),
              qo(t, r, e, n),
              (t = ni(null, t, r, !0, o, n)))
            : ((t.tag = 0), xe && o && zo(t), Ge(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (gl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Md(r)),
            (e = yt(r, e)),
            l)
          ) {
            case 0:
              t = ti(null, t, r, e, n);
              break e;
            case 1:
              t = Ks(null, t, r, e, n);
              break e;
            case 11:
              t = Us(null, t, r, e, n);
              break e;
            case 14:
              t = Hs(null, t, r, yt(r.type, e), n);
              break e;
          }
          throw Error(p(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : yt(r, l)),
          ti(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : yt(r, l)),
          Ks(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Gs(t), e === null)) throw Error(p(387));
          ((r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            us(e, t),
            al(t, r, null, n));
          var i = t.memoizedState;
          if (((r = i.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: i.cache,
                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                transitions: i.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              ((l = Ln(Error(p(423)), t)), (t = Ys(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = Ln(Error(p(424)), t)), (t = Ys(e, t, r, n, l)));
              break e;
            } else
              for (
                ot = $t(t.stateNode.containerInfo.firstChild),
                  lt = t,
                  xe = !0,
                  vt = null,
                  n = as(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((_n(), r === l)) {
              t = Mt(e, t, n);
              break e;
            }
            Ge(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          fs(t),
          e === null && Po(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (i = l.children),
          So(r, l) ? (i = null) : o !== null && So(r, o) && (t.flags |= 32),
          Qs(e, t),
          Ge(e, t, i, n),
          t.child
        );
      case 6:
        return (e === null && Po(t), null);
      case 13:
        return Js(e, t, n);
      case 4:
        return (
          Oo(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Pn(t, null, r, n)) : Ge(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : yt(r, l)),
          Us(e, t, r, l, n)
        );
      case 7:
        return (Ge(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Ge(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Ge(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (i = l.value),
            ge(ll, r._currentValue),
            (r._currentValue = i),
            o !== null)
          )
            if (gt(o.value, i)) {
              if (o.children === l.children && !Je.current) {
                t = Mt(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var s = o.dependencies;
                if (s !== null) {
                  i = o.child;
                  for (var u = s.firstContext; u !== null; ) {
                    if (u.context === r) {
                      if (o.tag === 1) {
                        ((u = Tt(-1, n & -n)), (u.tag = 2));
                        var h = o.updateQueue;
                        if (h !== null) {
                          h = h.shared;
                          var w = h.pending;
                          (w === null
                            ? (u.next = u)
                            : ((u.next = w.next), (w.next = u)),
                            (h.pending = u));
                        }
                      }
                      ((o.lanes |= n),
                        (u = o.alternate),
                        u !== null && (u.lanes |= n),
                        Bo(o.return, n, t),
                        (s.lanes |= n));
                      break;
                    }
                    u = u.next;
                  }
                } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((i = o.return), i === null)) throw Error(p(341));
                  ((i.lanes |= n),
                    (s = i.alternate),
                    s !== null && (s.lanes |= n),
                    Bo(i, n, t),
                    (i = o.sibling));
                } else i = o.child;
                if (i !== null) i.return = o;
                else
                  for (i = o; i !== null; ) {
                    if (i === t) {
                      i = null;
                      break;
                    }
                    if (((o = i.sibling), o !== null)) {
                      ((o.return = i.return), (i = o));
                      break;
                    }
                    i = i.return;
                  }
                o = i;
              }
          (Ge(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Mn(t, n),
          (l = ct(l)),
          (r = r(l)),
          (t.flags |= 1),
          Ge(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = yt(r, t.pendingProps)),
          (l = yt(r.type, l)),
          Hs(e, t, r, l, n)
        );
      case 15:
        return Ws(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : yt(r, l)),
          gl(e, t),
          (t.tag = 1),
          Xe(r) ? ((e = !0), qr(t)) : (e = !1),
          Mn(t, n),
          Ls(t, r, l),
          qo(t, r, l, n),
          ni(null, t, r, !0, e, n)
        );
      case 19:
        return qs(e, t, n);
      case 22:
        return Vs(e, t, n);
    }
    throw Error(p(156, t.tag));
  };
  function Su(e, t) {
    return ta(e, t);
  }
  function Td(e, t, n, r) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function pt(e, t, n, r) {
    return new Td(e, t, n, r);
  }
  function Si(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Md(e) {
    if (typeof e == "function") return Si(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === z)) return 11;
      if (e === me) return 14;
    }
    return 2;
  }
  function qt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = pt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Cl(e, t, n, r, l, o) {
    var i = 2;
    if (((r = e), typeof e == "function")) Si(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
      e: switch (e) {
        case be:
          return pn(n.children, l, o, t);
        case ie:
          ((i = 8), (l |= 8));
          break;
        case Fe:
          return (
            (e = pt(12, n, t, l | 2)),
            (e.elementType = Fe),
            (e.lanes = o),
            e
          );
        case X:
          return ((e = pt(13, n, t, l)), (e.elementType = X), (e.lanes = o), e);
        case U:
          return ((e = pt(19, n, t, l)), (e.elementType = U), (e.lanes = o), e);
        case ce:
          return zl(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Re:
                i = 10;
                break e;
              case $:
                i = 9;
                break e;
              case z:
                i = 11;
                break e;
              case me:
                i = 14;
                break e;
              case he:
                ((i = 16), (r = null));
                break e;
            }
          throw Error(p(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = pt(i, n, t, l)),
      (t.elementType = e),
      (t.type = r),
      (t.lanes = o),
      t
    );
  }
  function pn(e, t, n, r) {
    return ((e = pt(7, e, r, t)), (e.lanes = n), e);
  }
  function zl(e, t, n, r) {
    return (
      (e = pt(22, e, r, t)),
      (e.elementType = ce),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function ji(e, t, n) {
    return ((e = pt(6, e, null, t)), (e.lanes = n), e);
  }
  function Ni(e, t, n) {
    return (
      (t = pt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Rd(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Jl(0)),
      (this.expirationTimes = Jl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Jl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Ei(e, t, n, r, l, o, i, s, u) {
    return (
      (e = new Rd(e, t, n, s, u)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = pt(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Do(o),
      e
    );
  }
  function Ld(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: de,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function ju(e) {
    if (!e) return Ht;
    e = e._reactInternals;
    e: {
      if (en(e) !== e || e.tag !== 1) throw Error(p(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Xe(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(p(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Xe(n)) return Xa(e, n, t);
    }
    return t;
  }
  function Nu(e, t, n, r, l, o, i, s, u) {
    return (
      (e = Ei(n, r, !0, e, l, o, i, s, u)),
      (e.context = ju(null)),
      (n = e.current),
      (r = Ye()),
      (l = Jt(n)),
      (o = Tt(r, l)),
      (o.callback = t ?? null),
      Qt(n, o, l),
      (e.current.lanes = l),
      Kn(e, l, r),
      et(e, r),
      e
    );
  }
  function Fl(e, t, n, r) {
    var l = t.current,
      o = Ye(),
      i = Jt(l);
    return (
      (n = ju(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Tt(o, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Qt(l, t, i)),
      e !== null && (wt(e, l, i, o), il(e, l, i)),
      i
    );
  }
  function _l(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Eu(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function bi(e, t) {
    (Eu(e, t), (e = e.alternate) && Eu(e, t));
  }
  function Bd() {
    return null;
  }
  var bu =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Ci(e) {
    this._internalRoot = e;
  }
  ((Pl.prototype.render = Ci.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(p(409));
      Fl(e, t, null, null);
    }),
    (Pl.prototype.unmount = Ci.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (cn(function () {
            Fl(null, e, null, null);
          }),
            (t[Ct] = null));
        }
      }));
  function Pl(e) {
    this._internalRoot = e;
  }
  Pl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ua();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Dt.length && t !== 0 && t < Dt[n].priority; n++);
      (Dt.splice(n, 0, e), n === 0 && fa(e));
    }
  };
  function zi(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Tl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Cu() {}
  function Id(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var h = _l(i);
          o.call(h);
        };
      }
      var i = Nu(t, r, e, 0, null, !1, !1, "", Cu);
      return (
        (e._reactRootContainer = i),
        (e[Ct] = i.current),
        ar(e.nodeType === 8 ? e.parentNode : e),
        cn(),
        i
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var h = _l(u);
        s.call(h);
      };
    }
    var u = Ei(e, 0, !1, null, null, !1, !1, "", Cu);
    return (
      (e._reactRootContainer = u),
      (e[Ct] = u.current),
      ar(e.nodeType === 8 ? e.parentNode : e),
      cn(function () {
        Fl(t, u, n, r);
      }),
      u
    );
  }
  function Ml(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == "function") {
        var s = l;
        l = function () {
          var u = _l(i);
          s.call(u);
        };
      }
      Fl(t, i, e, l);
    } else i = Id(n, t, e, l, r);
    return _l(i);
  }
  ((aa = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Qn(t.pendingLanes);
          n !== 0 &&
            (Xl(t, n | 1),
            et(t, Ce()),
            (ae & 6) === 0 && ((Dn = Ce() + 500), Wt()));
        }
        break;
      case 13:
        (cn(function () {
          var r = Pt(e, 1);
          if (r !== null) {
            var l = Ye();
            wt(r, e, 1, l);
          }
        }),
          bi(e, 1));
    }
  }),
    (ql = function (e) {
      if (e.tag === 13) {
        var t = Pt(e, 134217728);
        if (t !== null) {
          var n = Ye();
          wt(t, e, 134217728, n);
        }
        bi(e, 134217728);
      }
    }),
    (sa = function (e) {
      if (e.tag === 13) {
        var t = Jt(e),
          n = Pt(e, t);
        if (n !== null) {
          var r = Ye();
          wt(n, e, t, r);
        }
        bi(e, t);
      }
    }),
    (ua = function () {
      return fe;
    }),
    (ca = function (e, t) {
      var n = fe;
      try {
        return ((fe = e), t());
      } finally {
        fe = n;
      }
    }),
    (Wl = function (e, t, n) {
      switch (t) {
        case "input":
          if ((mn(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Jr(r);
                if (!l) throw Error(p(90));
                (at(r), mn(r, l));
              }
            }
          }
          break;
        case "textarea":
          Oi(e, n);
          break;
        case "select":
          ((t = n.value), t != null && hn(e, !!n.multiple, t, !1));
      }
    }),
    (Gi = xi),
    (Yi = cn));
  var Dd = { usingClientEntryPoint: !1, Events: [cr, En, Jr, Qi, Ki, xi] },
    Nr = {
      findFiberByHostInstance: tn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Od = {
      bundleType: Nr.bundleType,
      version: Nr.version,
      rendererPackageName: Nr.rendererPackageName,
      rendererConfig: Nr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: je.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Zi(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Nr.findFiberByHostInstance || Bd,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Rl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Rl.isDisabled && Rl.supportsFiber)
      try {
        ((Pr = Rl.inject(Od)), (St = Rl));
      } catch {}
  }
  return (
    (tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dd),
    (tt.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!zi(t)) throw Error(p(200));
      return Ld(e, t, null, n);
    }),
    (tt.createRoot = function (e, t) {
      if (!zi(e)) throw Error(p(299));
      var n = !1,
        r = "",
        l = bu;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Ei(e, 1, !1, null, null, n, !1, r, l)),
        (e[Ct] = t.current),
        ar(e.nodeType === 8 ? e.parentNode : e),
        new Ci(t)
      );
    }),
    (tt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(p(188))
          : ((e = Object.keys(e).join(",")), Error(p(268, e)));
      return ((e = Zi(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (tt.flushSync = function (e) {
      return cn(e);
    }),
    (tt.hydrate = function (e, t, n) {
      if (!Tl(t)) throw Error(p(200));
      return Ml(null, e, t, !0, n);
    }),
    (tt.hydrateRoot = function (e, t, n) {
      if (!zi(e)) throw Error(p(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = "",
        i = bu;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = Nu(t, null, e, 1, n ?? null, l, !1, o, i)),
        (e[Ct] = t.current),
        ar(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new Pl(t);
    }),
    (tt.render = function (e, t, n) {
      if (!Tl(t)) throw Error(p(200));
      return Ml(null, e, t, !1, n);
    }),
    (tt.unmountComponentAtNode = function (e) {
      if (!Tl(e)) throw Error(p(40));
      return e._reactRootContainer
        ? (cn(function () {
            Ml(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Ct] = null));
            });
          }),
          !0)
        : !1;
    }),
    (tt.unstable_batchedUpdates = xi),
    (tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Tl(n)) throw Error(p(200));
      if (e == null || e._reactInternals === void 0) throw Error(p(38));
      return Ml(e, t, n, !1, r);
    }),
    (tt.version = "18.3.1-next-f1338f8080-20240426"),
    tt
  );
}
var Lu;
function Gd() {
  if (Lu) return Pi.exports;
  Lu = 1;
  function g() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
      } catch (S) {
        console.error(S);
      }
  }
  return (g(), (Pi.exports = Kd()), Pi.exports);
}
var Bu;
function Yd() {
  if (Bu) return Ll;
  Bu = 1;
  var g = Gd();
  return ((Ll.createRoot = g.createRoot), (Ll.hydrateRoot = g.hydrateRoot), Ll);
}
var Jd = Yd(),
  Se = Bi(),
  Bl = { exports: {} },
  Xd = Bl.exports,
  Iu;
function qd() {
  return (
    Iu ||
      ((Iu = 1),
      (function (g, S) {
        (function (p, k) {
          g.exports = k();
        })(Xd, function () {
          return (function (p) {
            function k(v) {
              if (N[v]) return N[v].exports;
              var b = (N[v] = { exports: {}, id: v, loaded: !1 });
              return (
                p[v].call(b.exports, b, b.exports, k),
                (b.loaded = !0),
                b.exports
              );
            }
            var N = {};
            return ((k.m = p), (k.c = N), (k.p = "dist/"), k(0));
          })([
            function (p, k, N) {
              function v(U) {
                return U && U.__esModule ? U : { default: U };
              }
              var b =
                  Object.assign ||
                  function (U) {
                    for (var me = 1; me < arguments.length; me++) {
                      var he = arguments[me];
                      for (var ce in he)
                        Object.prototype.hasOwnProperty.call(he, ce) &&
                          (U[ce] = he[ce]);
                    }
                    return U;
                  },
                F = N(1),
                M = (v(F), N(6)),
                I = v(M),
                Y = N(7),
                L = v(Y),
                A = N(8),
                J = v(A),
                re = N(9),
                ne = v(re),
                te = N(10),
                Ue = v(te),
                He = N(11),
                De = v(He),
                je = N(14),
                Me = v(je),
                de = [],
                be = !1,
                ie = {
                  offset: 120,
                  delay: 0,
                  easing: "ease",
                  duration: 400,
                  disable: !1,
                  once: !1,
                  startEvent: "DOMContentLoaded",
                  throttleDelay: 99,
                  debounceDelay: 50,
                  disableMutationObserver: !1,
                },
                Fe = function () {
                  var U =
                    arguments.length > 0 &&
                    arguments[0] !== void 0 &&
                    arguments[0];
                  if ((U && (be = !0), be))
                    return (
                      (de = (0, De.default)(de, ie)),
                      (0, Ue.default)(de, ie.once),
                      de
                    );
                },
                Re = function () {
                  ((de = (0, Me.default)()), Fe());
                },
                $ = function () {
                  de.forEach(function (U, me) {
                    (U.node.removeAttribute("data-aos"),
                      U.node.removeAttribute("data-aos-easing"),
                      U.node.removeAttribute("data-aos-duration"),
                      U.node.removeAttribute("data-aos-delay"));
                  });
                },
                z = function (U) {
                  return (
                    U === !0 ||
                    (U === "mobile" && ne.default.mobile()) ||
                    (U === "phone" && ne.default.phone()) ||
                    (U === "tablet" && ne.default.tablet()) ||
                    (typeof U == "function" && U() === !0)
                  );
                },
                X = function (U) {
                  ((ie = b(ie, U)), (de = (0, Me.default)()));
                  var me = document.all && !window.atob;
                  return z(ie.disable) || me
                    ? $()
                    : (ie.disableMutationObserver ||
                        J.default.isSupported() ||
                        (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
                        (ie.disableMutationObserver = !0)),
                      document
                        .querySelector("body")
                        .setAttribute("data-aos-easing", ie.easing),
                      document
                        .querySelector("body")
                        .setAttribute("data-aos-duration", ie.duration),
                      document
                        .querySelector("body")
                        .setAttribute("data-aos-delay", ie.delay),
                      ie.startEvent === "DOMContentLoaded" &&
                      ["complete", "interactive"].indexOf(document.readyState) >
                        -1
                        ? Fe(!0)
                        : ie.startEvent === "load"
                          ? window.addEventListener(ie.startEvent, function () {
                              Fe(!0);
                            })
                          : document.addEventListener(
                              ie.startEvent,
                              function () {
                                Fe(!0);
                              },
                            ),
                      window.addEventListener(
                        "resize",
                        (0, L.default)(Fe, ie.debounceDelay, !0),
                      ),
                      window.addEventListener(
                        "orientationchange",
                        (0, L.default)(Fe, ie.debounceDelay, !0),
                      ),
                      window.addEventListener(
                        "scroll",
                        (0, I.default)(function () {
                          (0, Ue.default)(de, ie.once);
                        }, ie.throttleDelay),
                      ),
                      ie.disableMutationObserver ||
                        J.default.ready("[data-aos]", Re),
                      de);
                };
              p.exports = { init: X, refresh: Fe, refreshHard: Re };
            },
            function (p, k) {},
            ,
            ,
            ,
            ,
            function (p, k) {
              (function (N) {
                function v(z, X, U) {
                  function me(se) {
                    var Oe = Q,
                      mt = Z;
                    return ((Q = Z = void 0), (Ne = se), (q = z.apply(mt, Oe)));
                  }
                  function he(se) {
                    return ((Ne = se), (K = setTimeout(O, X)), nt ? me(se) : q);
                  }
                  function ce(se) {
                    var Oe = se - le,
                      mt = se - Ne,
                      mn = X - Oe;
                    return at ? Re(mn, ee - mt) : mn;
                  }
                  function C(se) {
                    var Oe = se - le,
                      mt = se - Ne;
                    return (
                      le === void 0 || Oe >= X || Oe < 0 || (at && mt >= ee)
                    );
                  }
                  function O() {
                    var se = $();
                    return C(se) ? _(se) : void (K = setTimeout(O, ce(se)));
                  }
                  function _(se) {
                    return (
                      (K = void 0),
                      pe && Q ? me(se) : ((Q = Z = void 0), q)
                    );
                  }
                  function d() {
                    (K !== void 0 && clearTimeout(K),
                      (Ne = 0),
                      (Q = le = Z = K = void 0));
                  }
                  function y() {
                    return K === void 0 ? q : _($());
                  }
                  function V() {
                    var se = $(),
                      Oe = C(se);
                    if (((Q = arguments), (Z = this), (le = se), Oe)) {
                      if (K === void 0) return he(le);
                      if (at) return ((K = setTimeout(O, X)), me(le));
                    }
                    return (K === void 0 && (K = setTimeout(O, X)), q);
                  }
                  var Q,
                    Z,
                    ee,
                    q,
                    K,
                    le,
                    Ne = 0,
                    nt = !1,
                    at = !1,
                    pe = !0;
                  if (typeof z != "function") throw new TypeError(A);
                  return (
                    (X = Y(X) || 0),
                    F(U) &&
                      ((nt = !!U.leading),
                      (at = "maxWait" in U),
                      (ee = at ? Fe(Y(U.maxWait) || 0, X) : ee),
                      (pe = "trailing" in U ? !!U.trailing : pe)),
                    (V.cancel = d),
                    (V.flush = y),
                    V
                  );
                }
                function b(z, X, U) {
                  var me = !0,
                    he = !0;
                  if (typeof z != "function") throw new TypeError(A);
                  return (
                    F(U) &&
                      ((me = "leading" in U ? !!U.leading : me),
                      (he = "trailing" in U ? !!U.trailing : he)),
                    v(z, X, { leading: me, maxWait: X, trailing: he })
                  );
                }
                function F(z) {
                  var X = typeof z > "u" ? "undefined" : L(z);
                  return !!z && (X == "object" || X == "function");
                }
                function M(z) {
                  return (
                    !!z && (typeof z > "u" ? "undefined" : L(z)) == "object"
                  );
                }
                function I(z) {
                  return (
                    (typeof z > "u" ? "undefined" : L(z)) == "symbol" ||
                    (M(z) && ie.call(z) == re)
                  );
                }
                function Y(z) {
                  if (typeof z == "number") return z;
                  if (I(z)) return J;
                  if (F(z)) {
                    var X = typeof z.valueOf == "function" ? z.valueOf() : z;
                    z = F(X) ? X + "" : X;
                  }
                  if (typeof z != "string") return z === 0 ? z : +z;
                  z = z.replace(ne, "");
                  var U = Ue.test(z);
                  return U || He.test(z)
                    ? De(z.slice(2), U ? 2 : 8)
                    : te.test(z)
                      ? J
                      : +z;
                }
                var L =
                    typeof Symbol == "function" &&
                    typeof Symbol.iterator == "symbol"
                      ? function (z) {
                          return typeof z;
                        }
                      : function (z) {
                          return z &&
                            typeof Symbol == "function" &&
                            z.constructor === Symbol &&
                            z !== Symbol.prototype
                            ? "symbol"
                            : typeof z;
                        },
                  A = "Expected a function",
                  J = NaN,
                  re = "[object Symbol]",
                  ne = /^\s+|\s+$/g,
                  te = /^[-+]0x[0-9a-f]+$/i,
                  Ue = /^0b[01]+$/i,
                  He = /^0o[0-7]+$/i,
                  De = parseInt,
                  je =
                    (typeof N > "u" ? "undefined" : L(N)) == "object" &&
                    N &&
                    N.Object === Object &&
                    N,
                  Me =
                    (typeof self > "u" ? "undefined" : L(self)) == "object" &&
                    self &&
                    self.Object === Object &&
                    self,
                  de = je || Me || Function("return this")(),
                  be = Object.prototype,
                  ie = be.toString,
                  Fe = Math.max,
                  Re = Math.min,
                  $ = function () {
                    return de.Date.now();
                  };
                p.exports = b;
              }).call(
                k,
                (function () {
                  return this;
                })(),
              );
            },
            function (p, k) {
              (function (N) {
                function v($, z, X) {
                  function U(pe) {
                    var se = V,
                      Oe = Q;
                    return (
                      (V = Q = void 0),
                      (le = pe),
                      (ee = $.apply(Oe, se))
                    );
                  }
                  function me(pe) {
                    return ((le = pe), (q = setTimeout(C, z)), Ne ? U(pe) : ee);
                  }
                  function he(pe) {
                    var se = pe - K,
                      Oe = pe - le,
                      mt = z - se;
                    return nt ? Fe(mt, Z - Oe) : mt;
                  }
                  function ce(pe) {
                    var se = pe - K,
                      Oe = pe - le;
                    return K === void 0 || se >= z || se < 0 || (nt && Oe >= Z);
                  }
                  function C() {
                    var pe = Re();
                    return ce(pe) ? O(pe) : void (q = setTimeout(C, he(pe)));
                  }
                  function O(pe) {
                    return (
                      (q = void 0),
                      at && V ? U(pe) : ((V = Q = void 0), ee)
                    );
                  }
                  function _() {
                    (q !== void 0 && clearTimeout(q),
                      (le = 0),
                      (V = K = Q = q = void 0));
                  }
                  function d() {
                    return q === void 0 ? ee : O(Re());
                  }
                  function y() {
                    var pe = Re(),
                      se = ce(pe);
                    if (((V = arguments), (Q = this), (K = pe), se)) {
                      if (q === void 0) return me(K);
                      if (nt) return ((q = setTimeout(C, z)), U(K));
                    }
                    return (q === void 0 && (q = setTimeout(C, z)), ee);
                  }
                  var V,
                    Q,
                    Z,
                    ee,
                    q,
                    K,
                    le = 0,
                    Ne = !1,
                    nt = !1,
                    at = !0;
                  if (typeof $ != "function") throw new TypeError(L);
                  return (
                    (z = I(z) || 0),
                    b(X) &&
                      ((Ne = !!X.leading),
                      (nt = "maxWait" in X),
                      (Z = nt ? ie(I(X.maxWait) || 0, z) : Z),
                      (at = "trailing" in X ? !!X.trailing : at)),
                    (y.cancel = _),
                    (y.flush = d),
                    y
                  );
                }
                function b($) {
                  var z = typeof $ > "u" ? "undefined" : Y($);
                  return !!$ && (z == "object" || z == "function");
                }
                function F($) {
                  return (
                    !!$ && (typeof $ > "u" ? "undefined" : Y($)) == "object"
                  );
                }
                function M($) {
                  return (
                    (typeof $ > "u" ? "undefined" : Y($)) == "symbol" ||
                    (F($) && be.call($) == J)
                  );
                }
                function I($) {
                  if (typeof $ == "number") return $;
                  if (M($)) return A;
                  if (b($)) {
                    var z = typeof $.valueOf == "function" ? $.valueOf() : $;
                    $ = b(z) ? z + "" : z;
                  }
                  if (typeof $ != "string") return $ === 0 ? $ : +$;
                  $ = $.replace(re, "");
                  var X = te.test($);
                  return X || Ue.test($)
                    ? He($.slice(2), X ? 2 : 8)
                    : ne.test($)
                      ? A
                      : +$;
                }
                var Y =
                    typeof Symbol == "function" &&
                    typeof Symbol.iterator == "symbol"
                      ? function ($) {
                          return typeof $;
                        }
                      : function ($) {
                          return $ &&
                            typeof Symbol == "function" &&
                            $.constructor === Symbol &&
                            $ !== Symbol.prototype
                            ? "symbol"
                            : typeof $;
                        },
                  L = "Expected a function",
                  A = NaN,
                  J = "[object Symbol]",
                  re = /^\s+|\s+$/g,
                  ne = /^[-+]0x[0-9a-f]+$/i,
                  te = /^0b[01]+$/i,
                  Ue = /^0o[0-7]+$/i,
                  He = parseInt,
                  De =
                    (typeof N > "u" ? "undefined" : Y(N)) == "object" &&
                    N &&
                    N.Object === Object &&
                    N,
                  je =
                    (typeof self > "u" ? "undefined" : Y(self)) == "object" &&
                    self &&
                    self.Object === Object &&
                    self,
                  Me = De || je || Function("return this")(),
                  de = Object.prototype,
                  be = de.toString,
                  ie = Math.max,
                  Fe = Math.min,
                  Re = function () {
                    return Me.Date.now();
                  };
                p.exports = v;
              }).call(
                k,
                (function () {
                  return this;
                })(),
              );
            },
            function (p, k) {
              function N(Y) {
                var L = void 0,
                  A = void 0;
                for (L = 0; L < Y.length; L += 1)
                  if (
                    ((A = Y[L]),
                    (A.dataset && A.dataset.aos) ||
                      (A.children && N(A.children)))
                  )
                    return !0;
                return !1;
              }
              function v() {
                return (
                  window.MutationObserver ||
                  window.WebKitMutationObserver ||
                  window.MozMutationObserver
                );
              }
              function b() {
                return !!v();
              }
              function F(Y, L) {
                var A = window.document,
                  J = v(),
                  re = new J(M);
                ((I = L),
                  re.observe(A.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0,
                  }));
              }
              function M(Y) {
                Y &&
                  Y.forEach(function (L) {
                    var A = Array.prototype.slice.call(L.addedNodes),
                      J = Array.prototype.slice.call(L.removedNodes),
                      re = A.concat(J);
                    if (N(re)) return I();
                  });
              }
              Object.defineProperty(k, "__esModule", { value: !0 });
              var I = function () {};
              k.default = { isSupported: b, ready: F };
            },
            function (p, k) {
              function N(A, J) {
                if (!(A instanceof J))
                  throw new TypeError("Cannot call a class as a function");
              }
              function v() {
                return (
                  navigator.userAgent || navigator.vendor || window.opera || ""
                );
              }
              Object.defineProperty(k, "__esModule", { value: !0 });
              var b = (function () {
                  function A(J, re) {
                    for (var ne = 0; ne < re.length; ne++) {
                      var te = re[ne];
                      ((te.enumerable = te.enumerable || !1),
                        (te.configurable = !0),
                        "value" in te && (te.writable = !0),
                        Object.defineProperty(J, te.key, te));
                    }
                  }
                  return function (J, re, ne) {
                    return (re && A(J.prototype, re), ne && A(J, ne), J);
                  };
                })(),
                F =
                  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                M =
                  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                I =
                  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                Y =
                  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                L = (function () {
                  function A() {
                    N(this, A);
                  }
                  return (
                    b(A, [
                      {
                        key: "phone",
                        value: function () {
                          var J = v();
                          return !(!F.test(J) && !M.test(J.substr(0, 4)));
                        },
                      },
                      {
                        key: "mobile",
                        value: function () {
                          var J = v();
                          return !(!I.test(J) && !Y.test(J.substr(0, 4)));
                        },
                      },
                      {
                        key: "tablet",
                        value: function () {
                          return this.mobile() && !this.phone();
                        },
                      },
                    ]),
                    A
                  );
                })();
              k.default = new L();
            },
            function (p, k) {
              Object.defineProperty(k, "__esModule", { value: !0 });
              var N = function (b, F, M) {
                  var I = b.node.getAttribute("data-aos-once");
                  F > b.position
                    ? b.node.classList.add("aos-animate")
                    : typeof I < "u" &&
                      (I === "false" || (!M && I !== "true")) &&
                      b.node.classList.remove("aos-animate");
                },
                v = function (b, F) {
                  var M = window.pageYOffset,
                    I = window.innerHeight;
                  b.forEach(function (Y, L) {
                    N(Y, I + M, F);
                  });
                };
              k.default = v;
            },
            function (p, k, N) {
              function v(I) {
                return I && I.__esModule ? I : { default: I };
              }
              Object.defineProperty(k, "__esModule", { value: !0 });
              var b = N(12),
                F = v(b),
                M = function (I, Y) {
                  return (
                    I.forEach(function (L, A) {
                      (L.node.classList.add("aos-init"),
                        (L.position = (0, F.default)(L.node, Y.offset)));
                    }),
                    I
                  );
                };
              k.default = M;
            },
            function (p, k, N) {
              function v(I) {
                return I && I.__esModule ? I : { default: I };
              }
              Object.defineProperty(k, "__esModule", { value: !0 });
              var b = N(13),
                F = v(b),
                M = function (I, Y) {
                  var L = 0,
                    A = 0,
                    J = window.innerHeight,
                    re = {
                      offset: I.getAttribute("data-aos-offset"),
                      anchor: I.getAttribute("data-aos-anchor"),
                      anchorPlacement: I.getAttribute(
                        "data-aos-anchor-placement",
                      ),
                    };
                  switch (
                    (re.offset &&
                      !isNaN(re.offset) &&
                      (A = parseInt(re.offset)),
                    re.anchor &&
                      document.querySelectorAll(re.anchor) &&
                      (I = document.querySelectorAll(re.anchor)[0]),
                    (L = (0, F.default)(I).top),
                    re.anchorPlacement)
                  ) {
                    case "top-bottom":
                      break;
                    case "center-bottom":
                      L += I.offsetHeight / 2;
                      break;
                    case "bottom-bottom":
                      L += I.offsetHeight;
                      break;
                    case "top-center":
                      L += J / 2;
                      break;
                    case "bottom-center":
                      L += J / 2 + I.offsetHeight;
                      break;
                    case "center-center":
                      L += J / 2 + I.offsetHeight / 2;
                      break;
                    case "top-top":
                      L += J;
                      break;
                    case "bottom-top":
                      L += I.offsetHeight + J;
                      break;
                    case "center-top":
                      L += I.offsetHeight / 2 + J;
                  }
                  return (
                    re.anchorPlacement || re.offset || isNaN(Y) || (A = Y),
                    L + A
                  );
                };
              k.default = M;
            },
            function (p, k) {
              Object.defineProperty(k, "__esModule", { value: !0 });
              var N = function (v) {
                for (
                  var b = 0, F = 0;
                  v && !isNaN(v.offsetLeft) && !isNaN(v.offsetTop);
                )
                  ((b +=
                    v.offsetLeft - (v.tagName != "BODY" ? v.scrollLeft : 0)),
                    (F +=
                      v.offsetTop - (v.tagName != "BODY" ? v.scrollTop : 0)),
                    (v = v.offsetParent));
                return { top: F, left: b };
              };
              k.default = N;
            },
            function (p, k) {
              Object.defineProperty(k, "__esModule", { value: !0 });
              var N = function (v) {
                return (
                  (v = v || document.querySelectorAll("[data-aos]")),
                  Array.prototype.map.call(v, function (b) {
                    return { node: b };
                  })
                );
              };
              k.default = N;
            },
          ]);
        });
      })(Bl)),
    Bl.exports
  );
}
var Zd = qd();
const ef = $d(Zd),
  Du = ["Full-Stack Developer", "Web Developer"],
  Ou = [
    "React",
    "Next.js",
    "TypeScript",
    "Flutter",
    "Kotlin",
    "Node.js",
    "Python",
    "Tailwind",
    "Bootstrap",
    "SQLite",
    "MySQL",
    "PostgreSQL",
    "Figma",
    "Git",
    "REST API",
    "GraphQL",
  ],
  tf = [
    { val: "3+", label: "Years Coding", color: "#A855F7" },
    { val: "15+", label: "Projects Done", color: "#06B6D4" },
    { val: "5+", label: "Tech Stacks", color: "#10B981" },
    { val: "∞", label: "Lines of Code", color: "#FBBF24" },
  ],
  nf = `
  .hero-section { min-height:100vh; display:flex; align-items:center; padding-top:80px; margin-bottom:30px;}
  .hero-name-line { font-family:'Bricolage Grotesque',sans-serif; font-weight:800; text-transform:uppercase;
    line-height:.88; letter-spacing:-.03em; }
  .hero-stroke { -webkit-text-stroke:1.5px #F0F0FF; color:transparent; }
  .hero-stat-card {
    background:rgba(10,10,31,.7); border-radius:3px; padding:1rem 1.2rem;
    border-left:3px solid; transition:all .4s; animation:float-y 4s ease-in-out infinite;
  }
  .hero-stat-card:hover { transform:translateY(-6px) scale(1.04); }
  .hero-stat-val { font-family:'Bricolage Grotesque',sans-serif; font-weight:800; font-size:1.8rem; line-height:1; }
  .hero-stat-lbl { font-family:'JetBrains Mono',monospace; font-size:.6rem; letter-spacing:.2em; opacity:.55; text-transform:uppercase; }
  .hero-ticker { border-top:1px solid rgba(168,85,247,.15); border-bottom:1px solid rgba(168,85,247,.15);
    padding:.6rem 0; overflow:hidden; position:relative; }
  .ticker-item { font-family:'JetBrains Mono',monospace; font-size:.65rem; letter-spacing:.2em; text-transform:uppercase;
    color:rgba(240,240,255,.35); flex-shrink:0; display:flex; align-items:center; gap:1rem; }
  .ticker-sep { width:4px; height:4px; border-radius:50%; background:var(--c-purple); flex-shrink:0; }
  .hero-badge { font-family:'JetBrains Mono',monospace; font-size:.6rem; letter-spacing:.2em; text-transform:uppercase;
    border:1px solid rgba(16,185,129,.3); background:rgba(16,185,129,.08); color:#10B981;
    padding:.3rem .8rem; border-radius:99px; display:inline-flex; align-items:center; gap:.5rem; }
  .hero-badge-dot { width:6px; height:6px; border-radius:50%; background:#10B981; animation:blink 1.4s ease infinite; }
  @keyframes enter-up { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:none} }
  .enter-1 { animation:enter-up .7s cubic-bezier(.16,1,.3,1) .3s both; }
  .enter-2 { animation:enter-up .7s cubic-bezier(.16,1,.3,1) .5s both; }
  .enter-3 { animation:enter-up .7s cubic-bezier(.16,1,.3,1) .7s both; }
  .enter-4 { animation:enter-up .7s cubic-bezier(.16,1,.3,1) .9s both; }
  .enter-5 { animation:enter-up .7s cubic-bezier(.16,1,.3,1) 1.1s both; }
  .enter-6 { animation:enter-up .7s cubic-bezier(.16,1,.3,1) 1.3s both; }
`;
function rf() {
  const [g, S] = Se.useState(0),
    [p, k] = Se.useState(""),
    [N, v] = Se.useState(!1);
  Se.useEffect(() => {
    const F = Du[g];
    let M;
    return (
      N
        ? p.length > 0
          ? (M = setTimeout(() => k(p.slice(0, -1)), 45))
          : (v(!1), S((g + 1) % Du.length))
        : p.length < F.length
          ? (M = setTimeout(() => k(F.slice(0, p.length + 1)), 70))
          : (M = setTimeout(() => v(!0), 1800)),
      () => clearTimeout(M)
    );
  }, [p, N, g]);
  const b = [...Ou, ...Ou];
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx("style", { children: nf }),
      a.jsx("div", {
        className: "hero-section",
        children: a.jsxs("div", {
          className: "container",
          children: [
            a.jsx("div", {
              className: "enter-1 mb-4",
              children: a.jsxs("span", {
                className: "hero-badge",
                children: [
                  a.jsx("span", { className: "hero-badge-dot" }),
                  "Available for Hire",
                ],
              }),
            }),
            a.jsxs("div", {
              className: "enter-2 mb-2",
              style: { position: "relative" },
              children: [
                a.jsxs("div", {
                  style: {
                    position: "absolute",
                    right: "-5%",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "320px",
                    height: "320px",
                    pointerEvents: "none",
                  },
                  children: [
                    a.jsx("div", {
                      style: {
                        position: "absolute",
                        inset: 0,
                        border: "1px solid rgba(168,85,247,.15)",
                        borderRadius: "50%",
                        animation: "spin 40s linear infinite",
                      },
                    }),
                    a.jsx("div", {
                      style: {
                        position: "absolute",
                        inset: "-30px",
                        border: "1px solid rgba(6,182,212,.1)",
                        borderRadius: "50%",
                        animation: "spin 25s linear infinite reverse",
                      },
                    }),
                    a.jsx("div", {
                      style: {
                        position: "absolute",
                        inset: "-60px",
                        border: "1px dashed rgba(244,63,94,.07)",
                        borderRadius: "50%",
                        animation: "spin 60s linear infinite",
                      },
                    }),
                    a.jsx("div", {
                      style: {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        width: "60px",
                        height: "60px",
                        background:
                          "radial-gradient(circle, rgba(168,85,247,.3), transparent)",
                        borderRadius: "50%",
                        filter: "blur(10px)",
                      },
                    }),
                  ],
                }),
                a.jsx("h1", {
                  className: "hero-name-line mb-0",
                  style: { fontSize: "clamp(3rem,10vw,8rem)" },
                  children: a.jsx("span", {
                    className: "glitch",
                    "data-text": "RAFFI",
                    children: "RAFFI",
                  }),
                }),
                a.jsx("h1", {
                  className: "hero-name-line mb-0 grad-text",
                  style: { fontSize: "clamp(3rem,10vw,8rem)" },
                  children: "WAHYU",
                }),
                a.jsx("h1", {
                  className: "hero-name-line hero-stroke",
                  style: { fontSize: "clamp(3rem,10vw,8rem)" },
                  children: "KURNIAWAN",
                }),
              ],
            }),
            a.jsx("div", {
              className: "enter-3 mb-4 mt-3",
              children: a.jsxs("span", {
                style: {
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: ".9rem",
                  color: "rgba(240,240,255,.5)",
                  letterSpacing: ".15em",
                },
                children: [
                  "> ",
                  a.jsx("span", { style: { color: "#06B6D4" }, children: p }),
                  a.jsx("span", {
                    className: "blink",
                    style: { color: "#A855F7" },
                    children: "|",
                  }),
                ],
              }),
            }),
            a.jsx("p", {
              className: "enter-4 mb-5",
              style: {
                maxWidth: "520px",
                color: "rgba(240,240,255,.55)",
                fontFamily: "'DM Sans',sans-serif",
                lineHeight: 1.8,
                fontSize: ".95rem",
              },
              children:
                "Merancang pengalaman digital yang memadukan antarmuka indah dengan performa optimal. Mengubah ide menjadi aplikasi yang fungsional dan mudah digunakan.",
            }),
            a.jsxs("div", {
              className: "enter-5 d-flex flex-wrap gap-3 mb-5",
              children: [
                a.jsx("a", {
                  href: "#projects",
                  className: "btn-neon btn",
                  onClick: (F) => {
                    var M;
                    (F.preventDefault(),
                      (M = document.getElementById("projects")) == null ||
                        M.scrollIntoView({ behavior: "smooth" }));
                  },
                  children: "View My Work",
                }),
                a.jsx("a", {
                  href: "mailto:raffi@example.com",
                  className: "btn-outline-neon btn",
                  children: "Get In Touch",
                }),
              ],
            }),
            a.jsx("div", {
              className: "enter-6",
              children: a.jsx("div", {
                className: "row g-3",
                style: { maxWidth: "480px" },
                children: tf.map((F, M) =>
                  a.jsx(
                    "div",
                    {
                      className: "col-6",
                      children: a.jsxs("div", {
                        className: "hero-stat-card",
                        style: {
                          borderLeftColor: F.color,
                          animationDelay: `${M * 0.3}s`,
                        },
                        children: [
                          a.jsx("div", {
                            className: "hero-stat-val",
                            style: { color: F.color },
                            children: F.val,
                          }),
                          a.jsx("div", {
                            className: "hero-stat-lbl",
                            style: { color: F.color },
                            children: F.label,
                          }),
                        ],
                      }),
                    },
                    F.label,
                  ),
                ),
              }),
            }),
          ],
        }),
      }),
      a.jsx("div", {
        className: "hero-ticker",
        children: a.jsx("div", {
          className: "marquee-track",
          children: b.map((F, M) =>
            a.jsxs(
              "span",
              {
                className: "ticker-item",
                children: [a.jsx("span", { className: "ticker-sep" }), F],
              },
              M,
            ),
          ),
        }),
      }),
    ],
  });
}
const lf = [
    {
      title: "Web Development",
      icon: "🌐",
      color: "#06B6D4",
      desc: "Membangun aplikasi web yang responsif dan optimal.",
    },
    {
      title: "Mobile Development",
      icon: "📱",
      color: "#A855F7",
      desc: "Pengembangan aplikasi mobile lintas platform menggunakan Flutter.",
    },
    {
      title: "Desktop Apps",
      icon: "💻",
      color: "#10B981",
      desc: "Pengembangan aplikasi desktop Windows menggunakan C#.",
    },
    {
      title: "Creative Work",
      icon: "🎨",
      color: "#FBBF24",
      desc: "Pembuatan miniatur bus buatan tangan dari bahan kardus.",
    },
  ],
  of = [
    { key: "name", val: "Raffi Wahyu Kurniawan", color: "#06B6D4" },
    { key: "school", val: "SMK Negeri 2 Karanganyar", color: "#A855F7" },
    { key: "major", val: "RPL (Rekayasa Perangkat Lunak)", color: "#10B981" },
    { key: "location", val: "Karanganyar, Indonesia", color: "#FBBF24" },
    { key: "hobby", val: "Membuat Miniatur", color: "#F43F5E" },
    { key: "status", val: "Open to opportunities", color: "#10B981" },
  ],
  af = `
  .about-term {
    background:rgba(5,5,16,.9); border:1px solid rgba(168,85,247,.15); border-radius:3px;
    font-family:'JetBrains Mono',monospace; font-size:.78rem; padding:1.4rem;
  }
  .about-term-header { color:#A855F7; margin-bottom:1rem; font-size:.7rem; letter-spacing:.15em; }
  .about-term-key { color:rgba(240,240,255,.35); }
  .about-term-eq  { color:rgba(240,240,255,.2); margin:0 .4rem; }
  .service-card {
    background:rgba(10,10,31,.8); border-radius:3px; padding:1.5rem; border:1px solid;
    transition:all .35s; position:relative; overflow:hidden;
  }
  .service-card::after {
    content:''; position:absolute; bottom:0; left:0; right:0; height:2px;
    background:currentColor; transform:scaleX(0); transform-origin:left; transition:transform .35s;
  }
  .service-card:hover::after { transform:scaleX(1); }
  .service-card:hover { transform:translateY(-5px); }
  .service-icon { font-size:1.8rem; margin-bottom:.8rem; display:block; }
`;
function sf() {
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx("style", { children: af }),
      a.jsx("div", {
        style: {
          padding: "6rem 0",
          borderTop: "1px solid rgba(168,85,247,.12)",
        },
        children: a.jsxs("div", {
          className: "container",
          children: [
            a.jsxs("div", {
              className: "d-flex align-items-center gap-3 mb-5",
              "data-aos": "fade-right",
              children: [
                a.jsx("span", {
                  className: "section-label",
                  style: { color: "#06B6D4" },
                  children: "02 /",
                }),
                a.jsx("span", {
                  className: "section-label",
                  style: { color: "rgba(240,240,255,.35)" },
                  children: "About Me",
                }),
                a.jsx("div", { className: "section-line" }),
              ],
            }),
            a.jsxs("div", {
              className: "row g-5 align-items-start",
              children: [
                a.jsxs("div", {
                  className: "col-lg-5",
                  "data-aos": "fade-up",
                  "data-aos-delay": "100",
                  children: [
                    a.jsxs("h2", {
                      className: "display-neo mb-4",
                      style: { fontSize: "clamp(2.5rem,6vw,4rem)" },
                      children: [
                        "Who Am",
                        a.jsx("br", {}),
                        a.jsx("span", {
                          className: "grad-text",
                          children: "I?",
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "about-term mb-4",
                      children: [
                        a.jsx("div", {
                          className: "about-term-header",
                          children: "$ whoami --verbose",
                        }),
                        of.map((g) =>
                          a.jsxs(
                            "div",
                            {
                              className: "mb-1",
                              children: [
                                a.jsx("span", {
                                  className: "about-term-key",
                                  children: g.key,
                                }),
                                a.jsx("span", {
                                  className: "about-term-eq",
                                  children: "=",
                                }),
                                a.jsxs("span", {
                                  style: { color: g.color },
                                  children: ['"', g.val, '"'],
                                }),
                              ],
                            },
                            g.key,
                          ),
                        ),
                        a.jsx("div", {
                          className: "mt-2",
                          style: { color: "rgba(240,240,255,.2)" },
                          children: "_",
                        }),
                      ],
                    }),
                    a.jsx("p", {
                      style: {
                        color: "rgba(240,240,255,.55)",
                        lineHeight: 1.9,
                        fontSize: ".9rem",
                      },
                      children:
                        "Saya adalah seorang pengembang web dan mobile yang fokus membangun aplikasi dengan tampilan antarmuka yang rapi serta performa yang optimal. Saya senang mengubah ide menjadi produk digital yang bermanfaat dan mudah digunakan.",
                    }),
                  ],
                }),
                a.jsxs("div", {
                  className: "col-lg-7",
                  "data-aos": "fade-up",
                  "data-aos-delay": "200",
                  children: [
                    a.jsx("div", {
                      className: "row g-3",
                      children: lf.map((g, S) =>
                        a.jsx(
                          "div",
                          {
                            className: "col-sm-6",
                            "data-aos": "zoom-in",
                            "data-aos-delay": 200 + S * 80,
                            children: a.jsxs("div", {
                              className: "service-card",
                              style: {
                                borderColor: `rgba(${Au(g.color)}, 0.2)`,
                                color: g.color,
                              },
                              children: [
                                a.jsx("span", {
                                  className: "service-icon",
                                  children: g.icon,
                                }),
                                a.jsx("h5", {
                                  style: {
                                    fontFamily:
                                      "'Bricolage Grotesque',sans-serif",
                                    fontWeight: 700,
                                    textTransform: "uppercase",
                                    fontSize: ".95rem",
                                    color: "#F0F0FF",
                                    marginBottom: ".5rem",
                                  },
                                  children: g.title,
                                }),
                                a.jsx("p", {
                                  style: {
                                    color: "rgba(240,240,255,.45)",
                                    fontSize: ".8rem",
                                    margin: 0,
                                    lineHeight: 1.7,
                                  },
                                  children: g.desc,
                                }),
                              ],
                            }),
                          },
                          g.title,
                        ),
                      ),
                    }),
                    a.jsx("div", {
                      className: "row g-3 mt-1",
                      children: [
                        {
                          val: "🚌",
                          text: "Bus miniatur collector",
                          color: "#FBBF24",
                        },
                        {
                          val: "🏸",
                          text: "Badminton player",
                          color: "#10B981",
                        },
                        {
                          val: "📚",
                          text: "SMK RPL student",
                          color: "#06B6D4",
                        },
                        {
                          val: "🌏",
                          text: "Based in Karanganyar",
                          color: "#A855F7",
                        },
                      ].map((g) =>
                        a.jsx(
                          "div",
                          {
                            className: "col-6 col-sm-3",
                            children: a.jsxs("div", {
                              style: {
                                textAlign: "center",
                                padding: "1rem",
                                background: "rgba(10,10,31,.5)",
                                border: `1px solid rgba(${Au(g.color)},.15)`,
                                borderRadius: 3,
                              },
                              children: [
                                a.jsx("div", {
                                  style: {
                                    fontSize: "1.5rem",
                                    marginBottom: ".4rem",
                                  },
                                  children: g.val,
                                }),
                                a.jsx("div", {
                                  style: {
                                    fontFamily: "'JetBrains Mono',monospace",
                                    fontSize: ".6rem",
                                    color: g.color,
                                    textTransform: "uppercase",
                                    letterSpacing: ".12em",
                                  },
                                  children: g.text,
                                }),
                              ],
                            }),
                          },
                          g.text,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function Au(g) {
  const S = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(g);
  return S
    ? `${parseInt(S[1], 16)},${parseInt(S[2], 16)},${parseInt(S[3], 16)}`
    : "255,255,255";
}
const uf = [
    {
      title: "Frontend",
      color: "#06B6D4",
      icon: "🖥️",
      tags: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Bootstrap",
        "HTML",
        "CSS",
        "Redux",
      ],
    },
    {
      title: "Backend",
      color: "#A855F7",
      icon: "⚙️",
      tags: [
        "Node.js",
        "Express",
        "Python",
        "PHP",
        "REST API",
        "GraphQL",
        "JWT",
        "Socket.io",
      ],
    },
    {
      title: "Mobile",
      color: "#10B981",
      icon: "📱",
      tags: ["Flutter", "Kotlin", "Android", "Dart", "Firebase", "SQLite"],
    },
    {
      title: "Tools",
      color: "#FBBF24",
      icon: "🛠️",
      tags: ["Git", "GitHub", "Docker", "VS Code", "Figma", "Postman", "Linux"],
    },
  ],
  cf = [
    { skill: "React / Next.js", pct: 88, color: "#06B6D4" },
    { skill: "Flutter", pct: 82, color: "#A855F7" },
    { skill: "Node.js", pct: 78, color: "#10B981" },
    { skill: "Python", pct: 75, color: "#FBBF24" },
    { skill: "UI/UX Design", pct: 70, color: "#F43F5E" },
    { skill: "Kotlin", pct: 65, color: "#A855F7" },
  ],
  df = `
  .skill-cat-card {
    background:rgba(10,10,31,.8); border-radius:3px; padding:1.4rem;
    border:1px solid; border-top-width:2px; transition:all .35s;
  }
  .skill-cat-card:hover { transform:translateY(-5px); }
  .skill-cat-title { font-family:'Bricolage Grotesque',sans-serif; font-weight:800; text-transform:uppercase; font-size:1rem; color:#F0F0FF; margin-bottom:1rem; }
  .avail-card {
    background:rgba(5,5,16,.9); border:1px solid rgba(16,185,129,.2); border-radius:3px; padding:1.6rem;
  }
`;
function ff() {
  const g = Se.useRef([]);
  return (
    Se.useEffect(() => {
      const S = new IntersectionObserver(
        (p) => {
          p.forEach((k) => {
            if (k.isIntersecting) {
              const N = k.target;
              N.style.width = N.dataset.pct + "%";
            }
          });
        },
        { threshold: 0.3 },
      );
      return (
        g.current.forEach((p) => p && S.observe(p)),
        () => S.disconnect()
      );
    }, []),
    a.jsxs(a.Fragment, {
      children: [
        a.jsx("style", { children: df }),
        a.jsx("div", {
          style: {
            padding: "6rem 0",
            borderTop: "1px solid rgba(168,85,247,.12)",
          },
          children: a.jsxs("div", {
            className: "container",
            children: [
              a.jsxs("div", {
                className: "d-flex align-items-center gap-3 mb-5",
                "data-aos": "fade-right",
                children: [
                  a.jsx("span", {
                    className: "section-label",
                    style: { color: "#A855F7" },
                    children: "03 /",
                  }),
                  a.jsx("span", {
                    className: "section-label",
                    style: { color: "rgba(240,240,255,.35)" },
                    children: "Skills",
                  }),
                  a.jsx("div", { className: "section-line" }),
                ],
              }),
              a.jsxs("div", {
                className: "row g-5",
                children: [
                  a.jsxs("div", {
                    className: "col-lg-7",
                    children: [
                      a.jsxs("h2", {
                        className: "display-neo mb-4",
                        style: { fontSize: "clamp(2.5rem,6vw,4rem)" },
                        children: [
                          "Tech",
                          a.jsx("br", {}),
                          a.jsx("span", {
                            className: "grad-text",
                            children: "Stack",
                          }),
                        ],
                      }),
                      a.jsx("div", {
                        className: "row g-3",
                        children: uf.map((S, p) =>
                          a.jsx(
                            "div",
                            {
                              className: "col-sm-6",
                              "data-aos": "zoom-in",
                              "data-aos-delay": p * 80,
                              children: a.jsxs("div", {
                                className: "skill-cat-card",
                                style: {
                                  borderColor: `rgba(${Ri(S.color)},.18)`,
                                  borderTopColor: S.color,
                                },
                                children: [
                                  a.jsxs("div", {
                                    className:
                                      "d-flex align-items-center gap-2 mb-2",
                                    children: [
                                      a.jsx("span", {
                                        style: { fontSize: "1.2rem" },
                                        children: S.icon,
                                      }),
                                      a.jsx("div", {
                                        className: "skill-cat-title",
                                        children: S.title,
                                      }),
                                    ],
                                  }),
                                  a.jsx("div", {
                                    className: "d-flex flex-wrap gap-1",
                                    children: S.tags.map((k) =>
                                      a.jsx(
                                        "span",
                                        {
                                          className: "chip",
                                          style: {
                                            color: S.color,
                                            borderColor: `rgba(${Ri(S.color)},.25)`,
                                            background: `rgba(${Ri(S.color)},.06)`,
                                          },
                                          children: k,
                                        },
                                        k,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                            },
                            S.title,
                          ),
                        ),
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className: "col-lg-5",
                    "data-aos": "fade-left",
                    "data-aos-delay": "150",
                    children: [
                      a.jsx("h3", {
                        style: {
                          fontFamily: "'Bricolage Grotesque',sans-serif",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          fontSize: "1rem",
                          color: "rgba(240,240,255,.4)",
                          marginBottom: "1.5rem",
                          letterSpacing: ".15em",
                        },
                        children: "Proficiency",
                      }),
                      a.jsx("div", {
                        className: "d-flex flex-column gap-4 mb-5",
                        children: cf.map((S, p) =>
                          a.jsxs(
                            "div",
                            {
                              children: [
                                a.jsxs("div", {
                                  className:
                                    "d-flex justify-content-between mb-2",
                                  children: [
                                    a.jsx("span", {
                                      style: {
                                        fontFamily:
                                          "'JetBrains Mono',monospace",
                                        fontSize: ".7rem",
                                        color: "rgba(240,240,255,.6)",
                                        letterSpacing: ".1em",
                                      },
                                      children: S.skill,
                                    }),
                                    a.jsxs("span", {
                                      style: {
                                        fontFamily:
                                          "'JetBrains Mono',monospace",
                                        fontSize: ".7rem",
                                        color: S.color,
                                      },
                                      children: [S.pct, "%"],
                                    }),
                                  ],
                                }),
                                a.jsx("div", {
                                  className: "skill-bar",
                                  children: a.jsx("div", {
                                    ref: (k) => {
                                      g.current[p] = k;
                                    },
                                    className: "skill-bar-fill",
                                    "data-pct": S.pct,
                                    style: {
                                      width: 0,
                                      background: `linear-gradient(90deg, ${S.color}99, ${S.color})`,
                                      boxShadow: `0 0 10px ${S.color}55`,
                                    },
                                  }),
                                }),
                              ],
                            },
                            S.skill,
                          ),
                        ),
                      }),
                      a.jsxs("div", {
                        className: "avail-card",
                        children: [
                          a.jsxs("div", {
                            className: "d-flex align-items-center gap-2 mb-3",
                            children: [
                              a.jsx("span", {
                                style: {
                                  width: 8,
                                  height: 8,
                                  borderRadius: "50%",
                                  background: "#10B981",
                                  display: "inline-block",
                                  animation: "blink 1.4s ease infinite",
                                },
                              }),
                              a.jsx("span", {
                                style: {
                                  fontFamily: "'JetBrains Mono',monospace",
                                  fontSize: ".65rem",
                                  color: "#10B981",
                                  letterSpacing: ".2em",
                                  textTransform: "uppercase",
                                },
                                children: "Available for Work",
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            style: {
                              fontFamily: "'JetBrains Mono',monospace",
                              fontSize: ".72rem",
                              color: "rgba(240,240,255,.5)",
                              lineHeight: 1.8,
                            },
                            children: [
                              a.jsx("div", {
                                children: '> freelance.status = "open"',
                              }),
                              a.jsx("div", {
                                children: '> fulltime.status = "open"',
                              }),
                              a.jsx("div", {
                                children: '> internship.status = "open"',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    })
  );
}
function Ri(g) {
  const S = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(g);
  return S
    ? `${parseInt(S[1], 16)},${parseInt(S[2], 16)},${parseInt(S[3], 16)}`
    : "255,255,255";
}
const $u = [
    {
      num: "01",
      cat: "web",
      color: "#06B6D4",
      title: "Kasir Toko Ravira Mart",
      desc: "Aplikasi kasir untuk Toko Ravira Mart yang dilengkapi dengan pencatatan transaksi, manajemen produk, laporan penjualan, serta pengelolaan stok secara real-time.",
      tags: ["Laravel 11", "MySQL", "Tailwind CSS"],
      img: "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/web%20kasir%20(34).png",
    },
    {
      num: "02",
      cat: "mobile",
      color: "#A855F7",
      title: "Hotel Smart System",
      desc: "Mobile app untuk pemesanan kamar hotel dan makanan secara real-time, dilengkapi fitur manajemen pesanan, detail kamar, dan tracking status layanan.",
      tags: ["Flutter", "Dart", "API"],
      img: "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/hss%20mobile.jpeg",
    },
    {
      num: "03",
      cat: "desktop",
      color: "#FBBF24",
      title: "Aplikasi Admin Sistem Reservasi Hotel",
      desc: "Aplikasi admin untuk sistem reservasi hotel yang dilengkapi dengan pengelolaan kamar, manajemen data tamu, Pengelolaan menu restorant, dan laporan reservasi.",
      tags: ["C#", "WPF", "MySQL"],
      img: "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/admin%20reservasi%20hotel.png",
    },
    {
      num: "04",
      cat: "web",
      color: "#06B6D4",
      title: "Sistem Penggajian",
      desc: "Aplikasi penggajian berbasis web yang dilengkapi fitur lengkap seperti melihat seluruh daftar absensi karyawan, manajemen data tunjangan, pengelolaan izin karyawan, perhitungan gaji otomatis, serta pencetakan slip gaji secara cepat dan akurat.",
      tags: ["Laravel", "MySQL"],
      img: "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/penggajian.png",
    },
    {
      num: "05",
      cat: "mobile",
      color: "#A855F7",
      title: "Sistem Pembayaran SPP Sekolah",
      desc: "Sistem pembayaran SPP sekolah berbasis web untuk mengelola data siswa, mencatat pembayaran bulanan, dan menampilkan laporan SPP secara otomatis.",
      tags: ["Laravel", "MySQl"],
      img: "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/web%20spp%20sekolah.png",
    },
    {
      num: "06",
      cat: "creative",
      color: "#F43F5E",
      title: "Miniatur Bus SJM BATOSAI",
      desc: "Miniatur bus SR 2 XHD Prime handmade dari kardus dengan detail eksterior dan interior yang realistis.",
      tags: ["Handmade", "Miniature"],
      img: "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/sjm%20batosai.jpg",
    },
    {
      num: "07",
      cat: "web",
      color: "#06B6D4",
      title: "Event Organizer Resto",
      desc: "Website Event Organizer Resto dengan sistem frontend dan backend untuk mengelola pemesanan acara, jadwal, dan informasi layanan.",
      tags: ["CI 3", "MySQL"],
      img: "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/event%20organizer.png",
    },
    {
      num: "08",
      cat: "creative",
      color: "#F43F5E",
      title: "Miniatur Bus ASYROF TUAN MUDA",
      desc: "Miniatur bus Jetbus 5 handmade dari kardus dengan detail eksterior dan interior yang realistis.",
      tags: ["Handmade", "Miniature"],
      img: "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/asyrof.jpg",
    },
    {
      num: "09",
      cat: "web",
      color: "#06B6D4",
      title: "Web Pemesanan Tiket Kereta",
      desc: "Sistem pemesanan tiket kereta berbasis web yang memungkinkan penumpang memesan tiket secara online, petugas melakukan proses check-in, serta admin mengelola seluruh data seperti jadwal perjalanan, kereta, gerbong, dan membuat laporan.",
      tags: ["Laravel", "MySQL"],
      img: "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/tiketing2.png",
    },
    {
      num: "10",
      cat: "web",
      color: "#06B6D4",
      title: "Website Undangan Pernikahan",
      desc: "Website undangan pernikahan sederhana yang dilengkapi fitur Countdown, Info, Story, Gallery, RSVP, Gift, serta musik autoplay untuk menyambut tamu.",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      img: "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/web%20wedding.png",
    },
    {
      num: "11",
      cat: "mobile",
      color: "#A855F7",
      title: "Mobile Absensi",
      desc: "Aplikasi mobile untuk absensi karyawan yang dilengkapi fitur absen masuk/keluar, pengajuan izin, riwayat kehadiran, dan profil karyawan.",
      tags: ["Flutter", "Dart"],
      img: "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/mobile%20absensi.png",
    },
    {
      num: "12",
      cat: "web",
      color: "#06B6D4",
      title: "Website Sigap Alam",
      desc: "SIGAP ALAM adalah aplikasi web edukasi lingkungan dan mitigasi bencana yang menyediakan informasi bencana, langkah pencegahan, serta sistem manajemen konten berbasis role (user, kontributor, admin). Aplikasi ini dibangun dengan Laravel dan Bootstrap, memiliki tampilan modern, responsif, serta sistem autentikasi yang aman.",
      tags: ["Laravel", "MySQL"],
      img: "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/sigap%20alam.png",
    },
    {
      num: "13",
      cat: "creative",
      color: "#F43F5E",
      title: "Miniatur Bus FADEL MAUDI",
      desc: "Miniatur bus Jetbus 5 handmade dari kardus dengan detail eksterior dan interior yang realistis.",
      tags: ["Handmade", "Miniature"],
      img: "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/fadel.jpg",
    },
  ],
  pf = ["all", "web", "mobile", "desktop", "creative"],
  Li = {
    web: "#06B6D4",
    mobile: "#A855F7",
    desktop: "#FBBF24",
    creative: "#F43F5E",
  },
  mf = `
  .proj-filter {
    font-family:'JetBrains Mono',monospace; font-size:.65rem; letter-spacing:.2em; text-transform:uppercase;
    padding:.45rem 1.1rem; border-radius:2px; border:1px solid rgba(168,85,247,.2);
    background:transparent; color:rgba(240,240,255,.4); transition:all .25s; cursor:none;
  }
  .proj-filter.active, .proj-filter:hover { color:#F0F0FF; border-color:rgba(168,85,247,.5); background:rgba(168,85,247,.1); }
  .proj-card {
    background:rgba(10,10,31,.8); border-radius:3px; overflow:hidden;
    border:1px solid rgba(168,85,247,.12); transition:all .4s; position:relative;
  }
  .proj-card:hover { transform:translateY(-6px); border-color:rgba(168,85,247,.3); }
  .proj-img { width:100%; height:200px; object-fit:cover; filter:saturate(.3); transition:all .5s; }
  .proj-card:hover .proj-img { filter:saturate(1); }
  .proj-num {
    position:absolute; top:1rem; right:1rem; font-family:'Bricolage Grotesque',sans-serif;
    font-weight:800; font-size:4rem; opacity:.06; line-height:1; pointer-events:none;
    color:#F0F0FF;
  }
`;
function hf() {
  const [g, S] = Se.useState("all"),
    p = g === "all" ? $u : $u.filter((k) => k.cat === g);
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx("style", { children: mf }),
      a.jsx("div", {
        style: {
          padding: "6rem 0",
          borderTop: "1px solid rgba(168,85,247,.12)",
        },
        children: a.jsxs("div", {
          className: "container",
          children: [
            a.jsxs("div", {
              className: "d-flex align-items-center gap-3 mb-5",
              "data-aos": "fade-right",
              children: [
                a.jsx("span", {
                  className: "section-label",
                  style: { color: "#10B981" },
                  children: "04 /",
                }),
                a.jsx("span", {
                  className: "section-label",
                  style: { color: "rgba(240,240,255,.35)" },
                  children: "Projects",
                }),
                a.jsx("div", { className: "section-line" }),
              ],
            }),
            a.jsxs("div", {
              className: "row align-items-end mb-5",
              children: [
                a.jsx("div", {
                  className: "col-lg-6",
                  "data-aos": "fade-up",
                  children: a.jsxs("h2", {
                    className: "display-neo",
                    style: {
                      fontSize: "clamp(2.5rem,6vw,4rem)",
                      marginBottom: 0,
                    },
                    children: [
                      "Selected",
                      a.jsx("br", {}),
                      a.jsx("span", {
                        className: "grad-text",
                        children: "Work",
                      }),
                    ],
                  }),
                }),
                a.jsx("div", {
                  className:
                    "col-lg-6 d-flex flex-wrap gap-2 justify-content-lg-end mt-4 mt-lg-0",
                  "data-aos": "fade-up",
                  "data-aos-delay": "100",
                  children: pf.map((k) =>
                    a.jsx(
                      "button",
                      {
                        onClick: () => S(k),
                        className: `proj-filter${g === k ? " active" : ""}`,
                        style:
                          g === k
                            ? {
                                borderColor: Li[k] || "#A855F7",
                                color: Li[k] || "#F0F0FF",
                                background: `rgba(${br(Li[k] || "#A855F7")},.1)`,
                              }
                            : {},
                        children: k,
                      },
                      k,
                    ),
                  ),
                }),
              ],
            }),
            a.jsx("div", {
              className: "row g-4",
              children: p.map((k, N) =>
                a.jsx(
                  "div",
                  {
                    className: "col-md-6 col-lg-4",
                    "data-aos": "fade-up",
                    "data-aos-delay": N * 80,
                    children: a.jsxs("div", {
                      className: "proj-card h-100",
                      children: [
                        a.jsxs("div", {
                          style: { position: "relative", overflow: "hidden" },
                          children: [
                            a.jsx("img", {
                              src: k.img,
                              alt: k.title,
                              className: "proj-img",
                            }),
                            a.jsx("div", {
                              style: {
                                position: "absolute",
                                inset: 0,
                                background:
                                  "linear-gradient(to top, rgba(10,10,31,1) 0%, rgba(10,10,31,.3) 60%, transparent 100%)",
                              },
                            }),
                            a.jsx("div", {
                              className: "proj-num",
                              children: k.num,
                            }),
                            a.jsx("span", {
                              className: "chip",
                              style: {
                                position: "absolute",
                                top: "1rem",
                                left: "1rem",
                                color: k.color,
                                borderColor: `rgba(${br(k.color)},.3)`,
                                background: `rgba(${br(k.color)},.1)`,
                              },
                              children: k.cat,
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          style: { padding: "1.4rem" },
                          children: [
                            a.jsx("h5", {
                              style: {
                                fontFamily: "'Bricolage Grotesque',sans-serif",
                                fontWeight: 700,
                                textTransform: "uppercase",
                                color: "#F0F0FF",
                                marginBottom: ".6rem",
                                fontSize: "1rem",
                              },
                              children: k.title,
                            }),
                            a.jsx("p", {
                              style: {
                                color: "rgba(240,240,255,.45)",
                                fontSize: ".8rem",
                                lineHeight: 1.7,
                                marginBottom: "1rem",
                              },
                              children: k.desc,
                            }),
                            a.jsx("div", {
                              className: "d-flex flex-wrap gap-1",
                              children: k.tags.map((v) =>
                                a.jsx(
                                  "span",
                                  {
                                    className: "chip",
                                    style: {
                                      color: k.color,
                                      borderColor: `rgba(${br(k.color)},.2)`,
                                      background: `rgba(${br(k.color)},.06)`,
                                    },
                                    children: v,
                                  },
                                  v,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  k.num,
                ),
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
function br(g) {
  const S = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(g);
  return S
    ? `${parseInt(S[1], 16)},${parseInt(S[2], 16)},${parseInt(S[3], 16)}`
    : "255,255,255";
}
const gf = [
    "Menginput dan mengelola data income & outcome menggunakan spreadsheet",
    "Pencatatan dan validasi data buku pada sistem perpustakaan berbasis web",
    "Menjaga akurasi dan konsistensi data secara real-time",
    "Terbiasa bekerja dengan sistem administrasi digital",
  ],
  vf = [
    "Data Management",
    "Spreadsheet",
    "Web Systems",
    "Validation",
    "Digital Admin",
  ],
  yf = [
    { hash: "a1b2c3d", msg: "Internship @ Data Administration dept." },
    { hash: "e4f5g6h", msg: "Mastered spreadsheet data workflows" },
    { hash: "i7j8k9l", msg: "Library web system validation & input" },
  ],
  xf = `
  .exp-card {
    background:rgba(10,10,31,.8); border:1px solid rgba(168,85,247,.15); border-left:3px solid #FBBF24;
    border-radius:3px; padding:2rem; position:relative; overflow:hidden; transition:all .35s;
  }
  .exp-card:hover { border-color:rgba(168,85,247,.3); }
  .exp-term {
    background:rgba(5,5,16,.9); border:1px solid rgba(168,85,247,.12); border-radius:3px; padding:1.2rem;
    font-family:'JetBrains Mono',monospace; font-size:.72rem;
  }
`;
function kf() {
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx("style", { children: xf }),
      a.jsx("div", {
        style: {
          padding: "6rem 0",
          borderTop: "1px solid rgba(168,85,247,.12)",
        },
        children: a.jsxs("div", {
          className: "container",
          children: [
            a.jsxs("div", {
              className: "d-flex align-items-center gap-3 mb-5",
              "data-aos": "fade-right",
              children: [
                a.jsx("span", {
                  className: "section-label",
                  style: { color: "#FBBF24" },
                  children: "05 /",
                }),
                a.jsx("span", {
                  className: "section-label",
                  style: { color: "rgba(240,240,255,.35)" },
                  children: "Experience",
                }),
                a.jsx("div", { className: "section-line" }),
              ],
            }),
            a.jsxs("div", {
              className: "row g-5",
              children: [
                a.jsx("div", {
                  className: "col-lg-4",
                  "data-aos": "fade-up",
                  children: a.jsxs("h2", {
                    className: "display-neo",
                    style: {
                      fontSize: "clamp(2.5rem,6vw,4rem)",
                      marginBottom: 0,
                    },
                    children: [
                      "Work",
                      a.jsx("br", {}),
                      a.jsx("span", {
                        className: "grad-text-warm",
                        children: "History",
                      }),
                    ],
                  }),
                }),
                a.jsxs("div", {
                  className: "col-lg-8",
                  "data-aos": "fade-up",
                  "data-aos-delay": "120",
                  children: [
                    a.jsxs("div", {
                      className: "exp-card mb-4",
                      children: [
                        a.jsxs("div", {
                          className:
                            "d-flex justify-content-between align-items-start flex-wrap gap-3 mb-4",
                          children: [
                            a.jsxs("div", {
                              children: [
                                a.jsx("div", {
                                  style: {
                                    fontFamily: "'JetBrains Mono',monospace",
                                    fontSize: ".65rem",
                                    color: "#FBBF24",
                                    letterSpacing: ".2em",
                                    textTransform: "uppercase",
                                    marginBottom: ".4rem",
                                  },
                                  children: "Praktik Kerja Lapangan (PKL)",
                                }),
                                a.jsx("h4", {
                                  style: {
                                    fontFamily:
                                      "'Bricolage Grotesque',sans-serif",
                                    fontWeight: 800,
                                    textTransform: "uppercase",
                                    color: "#F0F0FF",
                                    marginBottom: 0,
                                    fontSize: "1.4rem",
                                  },
                                  children: "Administrasi Data",
                                }),
                              ],
                            }),
                            a.jsx("span", {
                              style: {
                                fontFamily: "'JetBrains Mono',monospace",
                                fontSize: ".65rem",
                                color: "rgba(240,240,255,.35)",
                                border: "1px solid rgba(168,85,247,.2)",
                                padding: ".35rem .8rem",
                                borderRadius: 2,
                              },
                              children: "2023",
                            }),
                          ],
                        }),
                        a.jsx("div", {
                          className: "d-flex flex-column gap-3 mb-4",
                          children: gf.map((g, S) =>
                            a.jsxs(
                              "div",
                              {
                                className: "d-flex gap-3",
                                "data-aos": "fade-left",
                                "data-aos-delay": 200 + S * 70,
                                children: [
                                  a.jsx("span", {
                                    style: {
                                      fontFamily: "'JetBrains Mono',monospace",
                                      fontSize: ".65rem",
                                      color: "#FBBF24",
                                      flexShrink: 0,
                                      marginTop: ".1rem",
                                    },
                                    children: String(S + 1).padStart(2, "0"),
                                  }),
                                  a.jsx("span", {
                                    style: {
                                      color: "rgba(240,240,255,.55)",
                                      fontSize: ".85rem",
                                      lineHeight: 1.7,
                                    },
                                    children: g,
                                  }),
                                ],
                              },
                              S,
                            ),
                          ),
                        }),
                        a.jsxs("div", {
                          style: {
                            borderTop: "1px solid rgba(168,85,247,.12)",
                            paddingTop: "1.2rem",
                          },
                          children: [
                            a.jsx("div", {
                              style: {
                                fontFamily: "'JetBrains Mono',monospace",
                                fontSize: ".6rem",
                                color: "rgba(240,240,255,.3)",
                                letterSpacing: ".2em",
                                textTransform: "uppercase",
                                marginBottom: ".6rem",
                              },
                              children: "Skills Acquired",
                            }),
                            a.jsx("div", {
                              className: "d-flex flex-wrap gap-2",
                              children: vf.map((g) =>
                                a.jsx(
                                  "span",
                                  {
                                    className: "chip",
                                    style: {
                                      color: "#FBBF24",
                                      borderColor: "rgba(251,191,36,.25)",
                                      background: "rgba(251,191,36,.07)",
                                    },
                                    children: g,
                                  },
                                  g,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "exp-term",
                      children: [
                        a.jsx("div", {
                          style: {
                            color: "#A855F7",
                            marginBottom: ".8rem",
                            fontSize: ".65rem",
                            letterSpacing: ".12em",
                          },
                          children: "$ git log --oneline experience",
                        }),
                        yf.map((g) =>
                          a.jsxs(
                            "div",
                            {
                              style: { marginBottom: ".4rem" },
                              children: [
                                a.jsx("span", {
                                  style: { color: "#10B981" },
                                  children: g.hash,
                                }),
                                a.jsx("span", {
                                  style: {
                                    color: "rgba(240,240,255,.35)",
                                    marginLeft: ".8rem",
                                  },
                                  children: g.msg,
                                }),
                              ],
                            },
                            g.hash,
                          ),
                        ),
                        a.jsx("div", {
                          style: {
                            color: "rgba(240,240,255,.15)",
                            marginTop: ".4rem",
                          },
                          children: "...",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const wf =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";
function Sf(g) {
  const [S, p] = Se.useState(!1),
    k = () => {
      p(!0);
    },
    { src: N, alt: v, style: b, className: F, ...M } = g;
  return S
    ? a.jsx("div", {
        className: `inline-block bg-gray-100 text-center align-middle ${F ?? ""}`,
        style: b,
        children: a.jsx("div", {
          className: "flex items-center justify-center w-full h-full",
          children: a.jsx("img", {
            src: wf,
            alt: "Error loading image",
            ...M,
            "data-original-url": N,
          }),
        }),
      })
    : a.jsx("img", {
        src: N,
        alt: v,
        className: F,
        style: b,
        ...M,
        onError: k,
      });
}
const Uu = [
    {
      img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&h=600&fit=crop&auto=format",
      title: "Best Graduation Project",
      date: "Maret 2024",
      tag: "ACADEMIC",
      color: "#06B6D4",
      wide: !0,
    },
    {
      img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&h=600&fit=crop&auto=format",
      title: "Web Dev Competition — Juara 2",
      date: "November 2023",
      tag: "COMPETITION",
      color: "#A855F7",
      wide: !1,
    },
    {
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop&auto=format",
      title: "Outstanding Internship",
      date: "Agustus 2023",
      tag: "INTERNSHIP",
      color: "#10B981",
      wide: !1,
    },
    {
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=600&fit=crop&auto=format",
      title: "Mobile App Innovation Award",
      date: "Februari 2024",
      tag: "INNOVATION",
      color: "#F43F5E",
      wide: !0,
    },
  ],
  jf = `
  .ach-card {
    position:relative; overflow:hidden; cursor:none;
    border:1px solid rgba(168,85,247,.1); transition:all .4s;
  }
  .ach-card:hover { border-color:rgba(168,85,247,.4); }
  .ach-card img { filter:saturate(.3) brightness(.7); transition:all .6s; }
  .ach-card:hover img { filter:saturate(1) brightness(.85); transform:scale(1.05); }
`;
function Nf() {
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx("style", { children: jf }),
      a.jsx("div", {
        style: {
          padding: "6rem 0",
          borderTop: "1px solid rgba(168,85,247,.12)",
        },
        children: a.jsxs("div", {
          className: "container",
          children: [
            a.jsxs("div", {
              className: "d-flex align-items-center gap-3 mb-5",
              "data-aos": "fade-right",
              children: [
                a.jsx("span", {
                  className: "section-label",
                  style: { color: "#F43F5E" },
                  children: "06 /",
                }),
                a.jsx("span", {
                  className: "section-label",
                  style: { color: "rgba(240,240,255,.35)" },
                  children: "Awards & Recognition",
                }),
                a.jsx("div", { className: "section-line" }),
                a.jsxs("span", {
                  className: "section-label",
                  style: { color: "rgba(240,240,255,.2)" },
                  children: [Uu.length, " milestones"],
                }),
              ],
            }),
            a.jsxs("h2", {
              className: "display-neo mb-5",
              style: { fontSize: "clamp(2.5rem,6vw,4rem)" },
              "data-aos": "fade-up",
              children: [
                "Milestones &",
                a.jsx("br", {}),
                a.jsx("span", {
                  className: "grad-text",
                  children: "Recognition",
                }),
              ],
            }),
            a.jsx("div", {
              className: "row g-3",
              children: Uu.map((g, S) =>
                a.jsx(
                  "div",
                  {
                    className: g.wide ? "col-md-8" : "col-md-4",
                    "data-aos": "zoom-in",
                    "data-aos-delay": S * 90,
                    children: a.jsx("div", {
                      className: "ach-card",
                      children: a.jsxs("div", {
                        style: {
                          position: "relative",
                          height: g.wide ? 320 : 240,
                          overflow: "hidden",
                        },
                        children: [
                          a.jsx(Sf, {
                            src: g.img,
                            alt: g.title,
                            className: "w-100 h-100",
                            style: { objectFit: "cover" },
                          }),
                          a.jsx("div", {
                            style: {
                              position: "absolute",
                              inset: 0,
                              background:
                                "linear-gradient(to top, rgba(5,5,16,.95) 0%, rgba(5,5,16,.2) 60%, transparent 100%)",
                            },
                          }),
                          a.jsx("span", {
                            className: "chip",
                            style: {
                              position: "absolute",
                              top: "1rem",
                              left: "1rem",
                              color: g.color,
                              borderColor: `rgba(${Hu(g.color)},.35)`,
                              background: `rgba(${Hu(g.color)},.1)`,
                              backdropFilter: "blur(4px)",
                            },
                            children: g.tag,
                          }),
                          a.jsx("span", {
                            style: {
                              position: "absolute",
                              top: "1rem",
                              right: "1rem",
                              fontFamily: "'JetBrains Mono',monospace",
                              fontSize: ".6rem",
                              color: "rgba(240,240,255,.4)",
                              border: "1px solid rgba(168,85,247,.15)",
                              padding: ".3rem .6rem",
                              background: "rgba(5,5,16,.7)",
                              backdropFilter: "blur(4px)",
                            },
                            children: g.date,
                          }),
                          a.jsx("div", {
                            style: {
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              right: 0,
                              height: 2,
                              background: `linear-gradient(90deg, transparent, ${g.color}, transparent)`,
                              opacity: 0,
                              transition: "opacity .4s",
                            },
                            className: "ach-glow",
                          }),
                          a.jsx("div", {
                            style: {
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              right: 0,
                              padding: "1.2rem",
                            },
                            children: a.jsx("h5", {
                              style: {
                                fontFamily: "'Bricolage Grotesque',sans-serif",
                                fontWeight: 700,
                                textTransform: "uppercase",
                                color: "#F0F0FF",
                                marginBottom: 0,
                                fontSize: ".95rem",
                              },
                              children: g.title,
                            }),
                          }),
                        ],
                      }),
                    }),
                  },
                  S,
                ),
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
function Hu(g) {
  const S = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(g);
  return S
    ? `${parseInt(S[1], 16)},${parseInt(S[2], 16)},${parseInt(S[3], 16)}`
    : "255,255,255";
}
const Ef = [
    {
      icon: "✉️",
      label: "Email",
      val: "raffi@example.com",
      color: "#06B6D4",
      href: "mailto:raffi@example.com",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      val: "linkedin.com/in/raffi",
      color: "#A855F7",
      href: "#",
    },
    {
      icon: "🐱",
      label: "GitHub",
      val: "github.com/raffi",
      color: "#10B981",
      href: "#",
    },
    {
      icon: "💬",
      label: "WhatsApp",
      val: "+62 812 3456 7890",
      color: "#FBBF24",
      href: "#",
    },
  ],
  bf = `
  .contact-method {
    background:rgba(10,10,31,.8); border:1px solid rgba(168,85,247,.12); border-radius:3px;
    padding:1.2rem 1.4rem; display:flex; align-items:center; gap:1rem;
    transition:all .35s; text-decoration:none; cursor:none;
  }
  .contact-method:hover { transform:translateX(6px); border-color:rgba(168,85,247,.35); }
  .contact-method-icon { font-size:1.4rem; flex-shrink:0; }
  .contact-form-wrap { background:rgba(10,10,31,.6); border:1px solid rgba(168,85,247,.12); border-radius:3px; padding:2rem; }
  .sent-overlay {
    position:absolute; inset:0; background:rgba(5,5,16,.95); display:flex; align-items:center; justify-content:center;
    flex-direction:column; gap:1rem; border-radius:3px;
    animation:enter-up .4s ease;
  }
  @keyframes enter-up { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }
`;
function Cf() {
  const [g, S] = Se.useState({ name: "", email: "", msg: "" }),
    [p, k] = Se.useState(!1),
    N = (v) => {
      (v.preventDefault(), k(!0));
    };
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx("style", { children: bf }),
      a.jsx("div", {
        style: {
          padding: "6rem 0",
          borderTop: "1px solid rgba(168,85,247,.12)",
        },
        children: a.jsxs("div", {
          className: "container",
          children: [
            a.jsxs("div", {
              className: "d-flex align-items-center gap-3 mb-5",
              "data-aos": "fade-right",
              children: [
                a.jsx("span", {
                  className: "section-label",
                  style: { color: "#A855F7" },
                  children: "07 /",
                }),
                a.jsx("span", {
                  className: "section-label",
                  style: { color: "rgba(240,240,255,.35)" },
                  children: "Contact",
                }),
                a.jsx("div", { className: "section-line" }),
              ],
            }),
            a.jsxs("div", {
              className: "row g-5 align-items-start",
              children: [
                a.jsxs("div", {
                  className: "col-lg-5",
                  "data-aos": "fade-up",
                  children: [
                    a.jsxs("h2", {
                      className: "display-neo mb-3",
                      style: { fontSize: "clamp(2.5rem,6vw,4rem)" },
                      children: [
                        "Let's",
                        a.jsx("br", {}),
                        a.jsx("span", {
                          className: "grad-text",
                          children: "Connect",
                        }),
                      ],
                    }),
                    a.jsx("p", {
                      style: {
                        color: "rgba(240,240,255,.5)",
                        fontSize: ".9rem",
                        lineHeight: 1.8,
                        marginBottom: "2rem",
                      },
                      children:
                        "Tertarik untuk kolaborasi, freelance project, atau sekedar say hi? Saya selalu senang berkenalan dengan orang-orang baru di dunia tech!",
                    }),
                    a.jsx("div", {
                      className: "d-flex flex-column gap-3",
                      children: Ef.map((v, b) =>
                        a.jsxs(
                          "a",
                          {
                            href: v.href,
                            className: "contact-method",
                            style: {
                              borderLeftColor: `rgba(${zf(v.color)},.3)`,
                              borderLeftWidth: 2,
                            },
                            "data-aos": "fade-left",
                            "data-aos-delay": b * 70,
                            children: [
                              a.jsx("span", {
                                className: "contact-method-icon",
                                children: v.icon,
                              }),
                              a.jsxs("div", {
                                children: [
                                  a.jsx("div", {
                                    style: {
                                      fontFamily: "'JetBrains Mono',monospace",
                                      fontSize: ".6rem",
                                      color: v.color,
                                      letterSpacing: ".2em",
                                      textTransform: "uppercase",
                                      marginBottom: ".15rem",
                                    },
                                    children: v.label,
                                  }),
                                  a.jsx("div", {
                                    style: {
                                      fontFamily: "'JetBrains Mono',monospace",
                                      fontSize: ".75rem",
                                      color: "rgba(240,240,255,.6)",
                                    },
                                    children: v.val,
                                  }),
                                ],
                              }),
                              a.jsx("div", {
                                style: {
                                  marginLeft: "auto",
                                  color: "rgba(240,240,255,.15)",
                                  fontSize: "1rem",
                                },
                                children: "→",
                              }),
                            ],
                          },
                          v.label,
                        ),
                      ),
                    }),
                  ],
                }),
                a.jsx("div", {
                  className: "col-lg-7",
                  "data-aos": "fade-up",
                  "data-aos-delay": "150",
                  children: a.jsxs("div", {
                    className: "contact-form-wrap",
                    style: { position: "relative" },
                    children: [
                      p
                        ? a.jsxs("div", {
                            className: "sent-overlay",
                            children: [
                              a.jsx("div", {
                                style: { fontSize: "3rem" },
                                children: "🚀",
                              }),
                              a.jsx("div", {
                                className: "grad-text display-neo",
                                style: { fontSize: "1.5rem" },
                                children: "Message Sent!",
                              }),
                              a.jsx("p", {
                                style: {
                                  color: "rgba(240,240,255,.5)",
                                  fontFamily: "'JetBrains Mono',monospace",
                                  fontSize: ".75rem",
                                  textAlign: "center",
                                },
                                children:
                                  "Thanks! I will get back to you soon.",
                              }),
                              a.jsx("button", {
                                onClick: () => k(!1),
                                className: "btn-outline-neon btn btn-sm",
                                children: "Send Another",
                              }),
                            ],
                          })
                        : null,
                      a.jsx("div", {
                        style: {
                          fontFamily: "'JetBrains Mono',monospace",
                          fontSize: ".65rem",
                          color: "#A855F7",
                          letterSpacing: ".15em",
                          marginBottom: "1.5rem",
                        },
                        children: "$ new Message()",
                      }),
                      a.jsxs("form", {
                        onSubmit: N,
                        children: [
                          a.jsxs("div", {
                            className: "mb-3",
                            children: [
                              a.jsx("label", {
                                style: {
                                  fontFamily: "'JetBrains Mono',monospace",
                                  fontSize: ".65rem",
                                  color: "rgba(240,240,255,.35)",
                                  letterSpacing: ".15em",
                                  textTransform: "uppercase",
                                  display: "block",
                                  marginBottom: ".5rem",
                                },
                                children: "name",
                              }),
                              a.jsx("input", {
                                className: "form-neo w-100",
                                value: g.name,
                                onChange: (v) =>
                                  S({ ...g, name: v.target.value }),
                                placeholder: "Your name",
                                required: !0,
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            className: "mb-3",
                            children: [
                              a.jsx("label", {
                                style: {
                                  fontFamily: "'JetBrains Mono',monospace",
                                  fontSize: ".65rem",
                                  color: "rgba(240,240,255,.35)",
                                  letterSpacing: ".15em",
                                  textTransform: "uppercase",
                                  display: "block",
                                  marginBottom: ".5rem",
                                },
                                children: "email",
                              }),
                              a.jsx("input", {
                                type: "email",
                                className: "form-neo w-100",
                                value: g.email,
                                onChange: (v) =>
                                  S({ ...g, email: v.target.value }),
                                placeholder: "your@email.com",
                                required: !0,
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            className: "mb-4",
                            children: [
                              a.jsx("label", {
                                style: {
                                  fontFamily: "'JetBrains Mono',monospace",
                                  fontSize: ".65rem",
                                  color: "rgba(240,240,255,.35)",
                                  letterSpacing: ".15em",
                                  textTransform: "uppercase",
                                  display: "block",
                                  marginBottom: ".5rem",
                                },
                                children: "message",
                              }),
                              a.jsx("textarea", {
                                className: "form-neo w-100",
                                rows: 5,
                                value: g.msg,
                                onChange: (v) =>
                                  S({ ...g, msg: v.target.value }),
                                placeholder:
                                  "Hey Raffi, let's work together on...",
                                required: !0,
                                style: { resize: "none" },
                              }),
                            ],
                          }),
                          a.jsx("button", {
                            type: "submit",
                            className: "btn-neon btn w-100",
                            children: "Send Message →",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function zf(g) {
  const S = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(g);
  return S
    ? `${parseInt(S[1], 16)},${parseInt(S[2], 16)},${parseInt(S[3], 16)}`
    : "255,255,255";
}
const Wu = [
    { id: "about", label: "About", color: "#06B6D4" },
    { id: "skills", label: "Skills", color: "#A855F7" },
    { id: "projects", label: "Work", color: "#10B981" },
    { id: "experience", label: "Exp", color: "#FBBF24" },
    { id: "achievements", label: "Awards", color: "#F43F5E" },
    { id: "contact", label: "Contact", color: "#A855F7" },
  ],
  Ff = `
  .nav-link-neo {
    font-family:'JetBrains Mono',monospace; font-size:.7rem; letter-spacing:.18em;
    text-transform:uppercase; text-decoration:none; color:rgba(240,240,255,.5);
    padding:.4rem .1rem; border-bottom:1px solid transparent; transition:all .25s; position:relative;
    cursor:none;
  }
  .nav-link-neo:hover { color:#F0F0FF; }
  .nav-link-neo.active { border-bottom-color:currentColor; }
  .nav-logo-box {
    width:36px; height:36px; border-radius:3px; display:flex; align-items:center; justify-content:center;
    background:linear-gradient(135deg,#7C3AED,#06B6D4); font-family:'Bricolage Grotesque',sans-serif;
    font-weight:800; font-size:.85rem; color:#fff; letter-spacing:.05em; flex-shrink:0;
    cursor:none; border:none;
  }
  .nav-hire {
    font-family:'JetBrains Mono',monospace; font-size:.65rem; letter-spacing:.18em; text-transform:uppercase;
    background:linear-gradient(135deg,#7C3AED,#A855F7,#06B6D4); background-size:200%;
    border:none; color:#fff; padding:.5rem 1.1rem; border-radius:2px; cursor:none;
    animation:grad-shift 3s ease infinite; transition:box-shadow .3s;
    text-decoration:none; display:inline-block;
  }
  .nav-hire:hover { color:#fff; box-shadow:0 4px 24px rgba(168,85,247,.45); }
  .mob-menu {
    position:fixed; inset:0; z-index:888;
    background:linear-gradient(135deg,rgba(5,5,16,.97),rgba(10,10,31,.97));
    backdrop-filter:blur(20px); display:flex; flex-direction:column;
    align-items:center; justify-content:center; gap:2.5rem;
    transition:opacity .35s, transform .35s;
  }
  .mob-menu.closed { opacity:0; pointer-events:none; transform:translateY(-12px); }
  .mob-link {
    font-family:'Bricolage Grotesque',sans-serif; font-weight:800; font-size:2.5rem;
    text-transform:uppercase; text-decoration:none; color:#F0F0FF; transition:color .2s;
    background:none; border:none; cursor:none;
  }
  @media(min-width:768px){ .mob-toggle{display:none!important;} }
  @media(max-width:767px){ .nav-links-desk{display:none!important;} .nav-hire-desk{display:none!important;} }
`;
function _f({ activeSection: g }) {
  const [S, p] = Se.useState(!1),
    [k, N] = Se.useState(!1);
  Se.useEffect(() => {
    const b = () => p(window.scrollY > 40);
    return (
      window.addEventListener("scroll", b, { passive: !0 }),
      () => window.removeEventListener("scroll", b)
    );
  }, []);
  const v = (b) => {
    var F;
    ((F = document.getElementById(b)) == null ||
      F.scrollIntoView({ behavior: "smooth" }),
      N(!1));
  };
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx("style", { children: Ff }),
      a.jsx("nav", {
        className: `navbar-neo ${S ? " scrolled" : ""}`,
        style: { zIndex: 999, padding: ".9rem 0" },
        children: a.jsxs("div", {
          className:
            "container-fluid px-3 d-flex align-items-center justify-content-between",
          children: [
            " ",
            a.jsx("button", {
              onClick: () => v("home"),
              className: "nav-logo-box",
              "aria-label": "Home",
              children: "RWK",
            }),
            a.jsx("div", {
              className: "nav-links-desk d-flex align-items-center gap-4",
              children: Wu.map((b) =>
                a.jsx(
                  "button",
                  {
                    onClick: () => v(b.id),
                    className: `nav-link-neo${g === b.id ? " active" : ""}`,
                    style: { color: g === b.id ? b.color : void 0 },
                    children: b.label,
                  },
                  b.id,
                ),
              ),
            }),
            a.jsx("a", {
              href: "mailto:raffi@example.com",
              className: "nav-hire nav-hire-desk",
              children: "Hire Me",
            }),
            a.jsxs("button", {
              className: "mob-toggle btn p-1 border-0 bg-transparent",
              onClick: () => N(!k),
              style: { zIndex: 999, position: "relative" },
              children: [
                a.jsx("div", {
                  style: {
                    width: 22,
                    height: 2,
                    background: "#F0F0FF",
                    margin: "5px 0",
                    transition: "all .3s",
                    transform: k ? "rotate(45deg) translate(5px,5px)" : "none",
                  },
                }),
                a.jsx("div", {
                  style: {
                    width: 22,
                    height: 2,
                    background: "#F0F0FF",
                    margin: "5px 0",
                    transition: "all .3s",
                    opacity: k ? 0 : 1,
                  },
                }),
                a.jsx("div", {
                  style: {
                    width: 22,
                    height: 2,
                    background: "#F0F0FF",
                    margin: "5px 0",
                    transition: "all .3s",
                    transform: k
                      ? "rotate(-45deg) translate(5px,-5px)"
                      : "none",
                  },
                }),
              ],
            }),
          ],
        }),
      }),
      a.jsxs("div", {
        className: `mob-menu${k ? "" : " closed"}`,
        children: [
          Wu.map((b) =>
            a.jsx(
              "button",
              {
                onClick: () => v(b.id),
                className: "mob-link",
                style: { color: g === b.id ? b.color : "#F0F0FF" },
                children: b.label,
              },
              b.id,
            ),
          ),
          a.jsx("a", {
            href: "mailto:raffi@example.com",
            className: "nav-hire mt-2",
            children: "Hire Me",
          }),
        ],
      }),
    ],
  });
}
const Pf = `
  @keyframes pl-scan { from{top:0} to{top:100%} }
  @keyframes pl-bar   { from{width:0} to{width:100%} }
  @keyframes pl-glitch-a {
    0%,89%,100%{opacity:0} 90%{opacity:.8;transform:translateX(-6px)} 91%{opacity:0}
  }
  @keyframes pl-glitch-b {
    0%,92%,100%{opacity:0} 93%{opacity:.6;transform:translateX(6px)} 94%{opacity:0}
  }
  @keyframes pl-count { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:none} }
  @keyframes pl-ring-a { from{transform:rotate(0deg) scale(1)} to{transform:rotate(360deg) scale(1.08)} }
  @keyframes pl-ring-b { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
  @keyframes pl-fade-out { from{opacity:1} to{opacity:0;pointer-events:none} }
  .pl-root {
    position:fixed; inset:0; z-index:99999;
    background:#050510; display:flex; align-items:center; justify-content:center;
    flex-direction:column; gap:0;
    transition: opacity .7s ease;
  }
  .pl-root.done { animation: pl-fade-out .7s ease forwards; }
  .pl-scan-line {
    position:absolute; left:0; right:0; height:2px; pointer-events:none;
    background:linear-gradient(90deg,transparent,rgba(168,85,247,.6),rgba(6,182,212,.6),transparent);
    animation:pl-scan 2.4s linear infinite; filter:blur(1px);
  }
  .pl-logo {
    position:relative; font-family:'Bricolage Grotesque',sans-serif; font-weight:800;
    font-size:clamp(3rem,10vw,6rem); text-transform:uppercase; letter-spacing:-.03em;
    color:#F0F0FF; line-height:1; margin-bottom:2.5rem; text-align:center;
  }
  .pl-logo::before {
    content:attr(data-text); position:absolute; inset:0; color:#06B6D4;
    animation:pl-glitch-a 5s infinite; clip-path:polygon(0 10%,100% 10%,100% 40%,0 40%);
    font-size:inherit; font-weight:inherit; line-height:inherit;
  }
  .pl-logo::after {
    content:attr(data-text); position:absolute; inset:0; color:#F43F5E;
    animation:pl-glitch-b 5s infinite; clip-path:polygon(0 60%,100% 60%,100% 85%,0 85%);
    font-size:inherit; font-weight:inherit; line-height:inherit;
  }
  .pl-ring-wrap { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; pointer-events:none; }
  .pl-ring {
    position:absolute; border-radius:50%; border:1px solid;
    box-sizing:border-box;
  }
  .pl-ring-a { width:160px;height:160px; border-color:rgba(168,85,247,.3); animation:pl-ring-a 8s linear infinite; }
  .pl-ring-b { width:220px;height:220px; border-color:rgba(6,182,212,.2); animation:pl-ring-b 12s linear infinite; }
  .pl-ring-c { width:300px;height:300px; border-color:rgba(244,63,94,.12); animation:pl-ring-a 18s linear infinite; }
  .pl-bar-wrap {
    width:min(360px,80vw); height:2px; background:rgba(255,255,255,.06); border-radius:99px; overflow:hidden;
    position:relative;
  }
  .pl-bar-fill {
    height:100%; border-radius:99px;
    background:linear-gradient(90deg,#7C3AED,#A855F7,#06B6D4);
    animation:pl-bar 5.2s cubic-bezier(.16,1,.3,1) forwards;
  }
  .pl-pct {
    font-family:'JetBrains Mono',monospace; font-size:.7rem; letter-spacing:.2em;
    color:rgba(168,85,247,.8); margin-top:1rem; animation:pl-count .3s ease;
  }
  .pl-sub {
    font-family:'JetBrains Mono',monospace; font-size:.65rem; letter-spacing:.3em;
    text-transform:uppercase; color:rgba(107,107,138,.7); margin-top:.6rem;
  }
`;
function Tf({ onDone: g }) {
  const [S, p] = Se.useState(0),
    [k, N] = Se.useState(!1);
  return (
    Se.useEffect(() => {
      const v = [0, 8, 15, 27, 40, 55, 68, 80, 91, 100];
      let b = 0;
      const F = () => {
          (b++,
            b < v.length
              ? (p(v[b]), setTimeout(F, b < 6 ? 400 : 160))
              : (setTimeout(() => N(!0), 300), setTimeout(() => g(), 1e3)));
        },
        M = setTimeout(F, 200);
      return () => clearTimeout(M);
    }, [g]),
    a.jsxs(a.Fragment, {
      children: [
        a.jsx("style", { children: Pf }),
        a.jsxs("div", {
          className: `pl-root${k ? " done" : ""}`,
          children: [
            a.jsx("div", { className: "pl-scan-line" }),
            a.jsxs("div", {
              className: "pl-ring-wrap",
              children: [
                a.jsx("div", { className: "pl-ring pl-ring-c" }),
                a.jsx("div", { className: "pl-ring pl-ring-b" }),
                a.jsx("div", { className: "pl-ring pl-ring-a" }),
              ],
            }),
            a.jsx("div", {
              className: "pl-logo",
              "data-text": "RWK",
              children: "RWK",
            }),
            a.jsx("div", {
              className: "pl-bar-wrap",
              children: a.jsx("div", { className: "pl-bar-fill" }),
            }),
            a.jsxs("div", { className: "pl-pct", children: [S, "%"] }),
            a.jsx("div", {
              className: "pl-sub",
              children: "Initializing Portfolio...",
            }),
          ],
        }),
      ],
    })
  );
}
const Mf = `
  /* ── Fonts ── */
  @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,700;12..96,800&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap');

  /* ── Root palette ── */
  :root {
    --c-bg:      #050510;
    --c-surface: #0A0A1F;
    --c-border:  rgba(168,85,247,0.18);
    --c-purple:  #A855F7;
    --c-cyan:    #06B6D4;
    --c-rose:    #F43F5E;
    --c-emerald: #10B981;
    --c-gold:    #FBBF24;
    --c-fg:      #F0F0FF;
    --c-muted:   #6B6B8A;
    --bs-body-bg: #050510;
    --bs-body-color: #F0F0FF;
    --bs-font-sans-serif: 'DM Sans', sans-serif;
  }

  *, *::before, *::after { box-sizing: border-box; cursor: none !important; }
  html { scroll-behavior: smooth; }
  body { background: var(--c-bg); color: var(--c-fg); overflow-x: clip; }
  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: var(--c-bg); }
  ::-webkit-scrollbar-thumb { background: linear-gradient(var(--c-purple), var(--c-cyan)); }

  /* ── Custom cursor ── */
  .cursor-dot {
    position: fixed; width: 10px; height: 10px; border-radius: 50%;
    background: linear-gradient(135deg, var(--c-purple), var(--c-cyan));
    pointer-events: none; z-index: 9999; transform: translate(-50%,-50%);
    mix-blend-mode: screen; transition: transform .15s;
  }
  .cursor-ring {
    position: fixed; width: 36px; height: 36px;
    border: 1px solid rgba(168,85,247,0.5); border-radius: 50%;
    pointer-events: none; z-index: 9998; transform: translate(-50%,-50%);
    transition: left .09s ease, top .09s ease;
  }

  /* ── Aurora background ── */
  .aurora { position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; }
  .aurora-blob {
    position: absolute; border-radius: 50%; filter: blur(70px);
    animation: aurora-float 20s ease-in-out infinite alternate;
  }
  @keyframes aurora-float {
    from { transform: translate(0,0) scale(1); }
    to   { transform: translate(40px,-60px) scale(1.15); }
  }

  /* ── Gradient text ── */
  .grad-text {
    background: linear-gradient(135deg, var(--c-purple), var(--c-cyan), var(--c-rose));
    background-size: 200% 200%; -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; background-clip: text;
    animation: grad-shift 5s ease infinite;
  }
  .grad-text-warm {
    background: linear-gradient(135deg, var(--c-gold), var(--c-rose), var(--c-purple));
    background-size: 200% 200%; -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; background-clip: text;
    animation: grad-shift 5s ease infinite;
  }
  @keyframes grad-shift {
    0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%}
  }

  /* ── Glitch ── */
  .glitch { animation: glitch-main 7s infinite; position: relative; }
  .glitch::before, .glitch::after {
    content: attr(data-text); position: absolute; inset: 0;
    font-size: inherit; font-weight: inherit; line-height: inherit;
    font-family: inherit;
  }
  .glitch::before { animation: glitch-cyan 7s infinite; }
  .glitch::after  { animation: glitch-rose 7s infinite; }
  @keyframes glitch-main {
    0%,88%,100%{transform:none}
    89%{transform:skewX(-2deg) translateX(-4px)}
    90%{transform:skewX(1deg) translateX(4px)}
    91%{transform:none}
    92%{transform:skewX(-1.5deg) translateX(-6px)}
    93%{transform:none}
  }
  @keyframes glitch-cyan {
    0%,88%,100%{opacity:0;transform:none}
    89%{opacity:.7;clip-path:polygon(0 10%,100% 10%,100% 28%,0 28%);transform:translateX(-8px);color:var(--c-cyan)}
    90%{clip-path:polygon(0 60%,100% 60%,100% 78%,0 78%);transform:translateX(8px)}
    91%{opacity:0}
  }
  @keyframes glitch-rose {
    0%,90%,100%{opacity:0;transform:none}
    91%{opacity:.6;clip-path:polygon(0 40%,100% 40%,100% 55%,0 55%);transform:translateX(6px);color:var(--c-rose)}
    92%{clip-path:polygon(0 2%,100% 2%,100% 18%,0 18%);transform:translateX(-6px)}
    93%{opacity:0}
  }

  /* ── Blink cursor ── */
  .blink { animation: blink 1s step-end infinite; }
  @keyframes blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }

  /* ── Marquee ── */
  .marquee-wrap { overflow: hidden; }
  .marquee-track { display: flex; gap: 2rem; animation: marquee 22s linear infinite; white-space: nowrap; width: 100%;}
  @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }

  /* ── Float ── */
  .float-anim { animation: float-y 4s ease-in-out infinite; }
  @keyframes float-y { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }

  /* ── Spin ── */
  .spin-slow  { animation: spin 40s linear infinite; }
  .spin-rev   { animation: spin 25s linear infinite reverse; }
  @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }

  /* ── Neon glow button ── */
  .btn-neon {
    background: linear-gradient(135deg, #7C3AED, #A855F7, #06B6D4);
    background-size: 200% 200%; animation: grad-shift 3s ease infinite;
    border: none; color: #fff; font-family: 'JetBrains Mono', monospace;
    font-size: .75rem; letter-spacing: .15em; text-transform: uppercase;
    font-weight: 700; padding: .9rem 2rem; transition: all .3s;
  }
  .btn-neon:hover { color: #fff; transform: translateY(-2px); box-shadow: 0 8px 40px rgba(168,85,247,.5); }
  .btn-outline-neon {
    background: transparent; border: 1px solid rgba(168,85,247,.4);
    color: var(--c-fg); font-family: 'JetBrains Mono', monospace;
    font-size: .75rem; letter-spacing: .15em; text-transform: uppercase;
    padding: .9rem 2rem; transition: all .3s;
  }
  .btn-outline-neon:hover { border-color: var(--c-purple); color: var(--c-purple); box-shadow: 0 0 20px rgba(168,85,247,.2); }

  /* ── Cards ── */
  .card-neo {
    background: var(--c-surface); border: 1px solid var(--c-border);
    border-radius: 4px; transition: all .35s;
  }
  .card-neo:hover { transform: translateY(-5px); }

  /* ── Section header line ── */
  .section-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: .7rem; letter-spacing: .25em; text-transform: uppercase;
  }
  .section-line { height: 1px; flex: 1; background: linear-gradient(90deg, rgba(168,85,247,.3), transparent); }

  /* ── Display heading ── */
  .display-neo {
    font-family: 'Bricolage Grotesque', sans-serif;
    font-weight: 800; text-transform: uppercase; line-height: .9;
  }

  /* ── Skill bar ── */
  .skill-bar { height: 4px; background: rgba(255,255,255,.06); border-radius: 99px; overflow: hidden; }
  .skill-bar-fill { height: 100%; border-radius: 99px; transition: width 1.4s cubic-bezier(.16,1,.3,1); }

  /* ── Radial decorators ── */
  .ring-deco {
    position: absolute; border-radius: 50%; border: 1px solid;
    pointer-events: none;
  }

  /* ── Tag chip ── */
  .chip {
    font-family: 'JetBrains Mono', monospace; font-size: .65rem;
    padding: .3rem .65rem; border: 1px solid; border-radius: 2px;
    display: inline-block; transition: all .2s;
  }
  .chip:hover { transform: scale(1.05); }

  /* ── Progress ── */
  .progress { height: 4px; background: rgba(255,255,255,.06); border-radius: 99px; }
  .progress-bar { border-radius: 99px; }

  /* ── Form ── */
  .form-neo {
    background: rgba(5,5,16,.8); border: 1px solid rgba(168,85,247,.2);
    color: var(--c-fg); font-family: 'JetBrains Mono', monospace;
    font-size: .8rem; padding: .85rem 1rem; border-radius: 2px;
    transition: border-color .3s, box-shadow .3s;
  }
  .form-neo::placeholder { color: var(--c-muted); }
  .form-neo:focus {
    outline: none; background: rgba(5,5,16,.8);
    border-color: rgba(168,85,247,.6); color: var(--c-fg);
    box-shadow: 0 0 16px rgba(168,85,247,.15);
  }

  /* ── Navbar overrides ── */
  .navbar-neo {
    background: transparent; transition: background .3s, border-bottom .3s;
  }
  .navbar-neo.scrolled {
    background: rgba(5,5,16,.9); backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(168,85,247,.15);
  }

  /* ── AOS custom ── */
  [data-aos] { opacity: 0; }
  [data-aos].aos-animate { opacity: 1; }
`;
function Rf() {
  const [g, S] = Se.useState(!1),
    [p, k] = Se.useState("home"),
    N = Se.useRef(null),
    v = Se.useRef(null);
  return (
    Se.useEffect(() => {
      ef.init({
        duration: 700,
        easing: "ease-out-cubic",
        once: !0,
        offset: 80,
      });
    }, []),
    Se.useEffect(() => {
      const b = [
          "home",
          "about",
          "skills",
          "projects",
          "experience",
          "achievements",
          "contact",
        ],
        F = () => {
          for (const M of b) {
            const I = document.getElementById(M);
            if (I) {
              const Y = I.getBoundingClientRect();
              if (Y.top <= 120 && Y.bottom >= 120) {
                k(M);
                break;
              }
            }
          }
        };
      return (
        window.addEventListener("scroll", F, { passive: !0 }),
        () => window.removeEventListener("scroll", F)
      );
    }, []),
    Se.useEffect(() => {
      const b = (F) => {
        (N.current &&
          ((N.current.style.left = F.clientX + "px"),
          (N.current.style.top = F.clientY + "px")),
          v.current &&
            ((v.current.style.left = F.clientX + "px"),
            (v.current.style.top = F.clientY + "px")));
      };
      return (
        window.addEventListener("mousemove", b),
        () => window.removeEventListener("mousemove", b)
      );
    }, []),
    a.jsxs(a.Fragment, {
      children: [
        a.jsx("style", { children: Mf }),
        a.jsx("div", { ref: N, className: "cursor-dot" }),
        a.jsx("div", { ref: v, className: "cursor-ring" }),
        a.jsxs("div", {
          className: "aurora",
          children: [
            a.jsx("div", {
              className: "aurora-blob",
              style: {
                top: "-15%",
                left: "-10%",
                width: "55vw",
                height: "55vw",
                background:
                  "radial-gradient(circle, rgba(168,85,247,.2) 0%, transparent 70%)",
                animationDuration: "20s",
              },
            }),
            a.jsx("div", {
              className: "aurora-blob",
              style: {
                top: "35%",
                right: "0",
                position: "relative",
                overflow: "hidden",
                width: "48vw",
                height: "48vw",
                background:
                  "radial-gradient(circle, rgba(6,182,212,.16) 0%, transparent 70%)",
                animationDuration: "26s",
                animationDirection: "alternate-reverse",
              },
            }),
            a.jsx("div", {
              className: "aurora-blob",
              style: {
                bottom: "-10%",
                left: "25%",
                width: "42vw",
                height: "42vw",
                background:
                  "radial-gradient(circle, rgba(244,63,94,.12) 0%, transparent 70%)",
                animationDuration: "32s",
              },
            }),
            a.jsx("div", {
              className: "aurora-blob",
              style: {
                top: "60%",
                left: "-5%",
                width: "30vw",
                height: "30vw",
                background:
                  "radial-gradient(circle, rgba(16,185,129,.1) 0%, transparent 70%)",
                animationDuration: "18s",
                animationDirection: "alternate-reverse",
              },
            }),
          ],
        }),
        !g && a.jsx(Tf, { onDone: () => S(!0) }),
        a.jsxs("div", {
          style: {
            position: "relative",
            zIndex: 10,
            opacity: g ? 1 : 0,
            transition: "opacity .6s",
          },
          children: [
            a.jsx(_f, { activeSection: p }),
            a.jsxs("main", {
              children: [
                a.jsx("section", { id: "home", children: a.jsx(rf, {}) }),
                a.jsx("section", { id: "about", children: a.jsx(sf, {}) }),
                a.jsx("section", { id: "skills", children: a.jsx(ff, {}) }),
                a.jsx("section", { id: "projects", children: a.jsx(hf, {}) }),
                a.jsx("section", { id: "experience", children: a.jsx(kf, {}) }),
                a.jsx("section", {
                  id: "achievements",
                  children: a.jsx(Nf, {}),
                }),
                a.jsx("section", { id: "contact", children: a.jsx(Cf, {}) }),
              ],
            }),
            a.jsx("footer", {
              style: {
                borderTop: "1px solid var(--c-border)",
                padding: "2rem 0",
              },
              children: a.jsx("div", {
                className: "container",
                children: a.jsxs("div", {
                  className:
                    "d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2",
                  children: [
                    a.jsx("span", {
                      className: "grad-text section-label fw-bold",
                      children: "© 2026 Raffi Wahyu Kurniawan",
                    }),
                    a.jsx("span", {
                      className: "section-label",
                      style: { color: "var(--c-muted)" },
                      children: "Full-Stack Developer · Indonesia",
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      ],
    })
  );
}
Jd.createRoot(document.getElementById("root")).render(a.jsx(Rf, {}));
