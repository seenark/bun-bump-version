// @bun
// node_modules/elysia/dist/bun/index.js
var eW = Object.create;
var { defineProperty: S6, getPrototypeOf: $X, getOwnPropertyNames: YX } = Object;
var WX = Object.prototype.hasOwnProperty;
var X1 = ($, Y, W) => {
  W = $ != null ? eW($X($)) : {};
  const X = Y || !$ || !$.__esModule ? S6(W, "default", { value: $, enumerable: true }) : W;
  for (let Z of YX($))
    if (!WX.call(X, Z))
      S6(X, Z, { get: () => $[Z], enumerable: true });
  return X;
};
var J0 = ($, Y) => () => (Y || $((Y = { exports: {} }).exports, Y), Y.exports);
var b6 = J0((O7, a$) => {
  var r1 = function() {
  }, QX = function($, Y, W) {
    this.fn = $, this.context = Y, this.once = W || false;
  }, I6 = function($, Y, W, X, Z) {
    if (typeof W !== "function")
      throw new TypeError("The listener must be a function");
    var Q = new QX(W, X || $, Z), J = _0 ? _0 + Y : Y;
    if (!$._events[J])
      $._events[J] = Q, $._eventsCount++;
    else if (!$._events[J].fn)
      $._events[J].push(Q);
    else
      $._events[J] = [$._events[J], Q];
    return $;
  }, K$ = function($, Y) {
    if (--$._eventsCount === 0)
      $._events = new r1;
    else
      delete $._events[Y];
  }, b0 = function() {
    this._events = new r1, this._eventsCount = 0;
  }, ZX = Object.prototype.hasOwnProperty, _0 = "~";
  if (Object.create) {
    if (r1.prototype = Object.create(null), !new r1().__proto__)
      _0 = false;
  }
  b0.prototype.eventNames = function $() {
    var Y = [], W, X;
    if (this._eventsCount === 0)
      return Y;
    for (X in W = this._events)
      if (ZX.call(W, X))
        Y.push(_0 ? X.slice(1) : X);
    if (Object.getOwnPropertySymbols)
      return Y.concat(Object.getOwnPropertySymbols(W));
    return Y;
  };
  b0.prototype.listeners = function $(Y) {
    var W = _0 ? _0 + Y : Y, X = this._events[W];
    if (!X)
      return [];
    if (X.fn)
      return [X.fn];
    for (var Z = 0, Q = X.length, J = new Array(Q);Z < Q; Z++)
      J[Z] = X[Z].fn;
    return J;
  };
  b0.prototype.listenerCount = function $(Y) {
    var W = _0 ? _0 + Y : Y, X = this._events[W];
    if (!X)
      return 0;
    if (X.fn)
      return 1;
    return X.length;
  };
  b0.prototype.emit = function $(Y, W, X, Z, Q, J) {
    var z = _0 ? _0 + Y : Y;
    if (!this._events[z])
      return false;
    var A = this._events[z], F = arguments.length, w, K;
    if (A.fn) {
      if (A.once)
        this.removeListener(Y, A.fn, undefined, true);
      switch (F) {
        case 1:
          return A.fn.call(A.context), true;
        case 2:
          return A.fn.call(A.context, W), true;
        case 3:
          return A.fn.call(A.context, W, X), true;
        case 4:
          return A.fn.call(A.context, W, X, Z), true;
        case 5:
          return A.fn.call(A.context, W, X, Z, Q), true;
        case 6:
          return A.fn.call(A.context, W, X, Z, Q, J), true;
      }
      for (K = 1, w = new Array(F - 1);K < F; K++)
        w[K - 1] = arguments[K];
      A.fn.apply(A.context, w);
    } else {
      var b = A.length, O;
      for (K = 0;K < b; K++) {
        if (A[K].once)
          this.removeListener(Y, A[K].fn, undefined, true);
        switch (F) {
          case 1:
            A[K].fn.call(A[K].context);
            break;
          case 2:
            A[K].fn.call(A[K].context, W);
            break;
          case 3:
            A[K].fn.call(A[K].context, W, X);
            break;
          case 4:
            A[K].fn.call(A[K].context, W, X, Z);
            break;
          default:
            if (!w)
              for (O = 1, w = new Array(F - 1);O < F; O++)
                w[O - 1] = arguments[O];
            A[K].fn.apply(A[K].context, w);
        }
      }
    }
    return true;
  };
  b0.prototype.on = function $(Y, W, X) {
    return I6(this, Y, W, X, false);
  };
  b0.prototype.once = function $(Y, W, X) {
    return I6(this, Y, W, X, true);
  };
  b0.prototype.removeListener = function $(Y, W, X, Z) {
    var Q = _0 ? _0 + Y : Y;
    if (!this._events[Q])
      return this;
    if (!W)
      return K$(this, Q), this;
    var J = this._events[Q];
    if (J.fn) {
      if (J.fn === W && (!Z || J.once) && (!X || J.context === X))
        K$(this, Q);
    } else {
      for (var z = 0, A = [], F = J.length;z < F; z++)
        if (J[z].fn !== W || Z && !J[z].once || X && J[z].context !== X)
          A.push(J[z]);
      if (A.length)
        this._events[Q] = A.length === 1 ? A[0] : A;
      else
        K$(this, Q);
    }
    return this;
  };
  b0.prototype.removeAllListeners = function $(Y) {
    var W;
    if (Y) {
      if (W = _0 ? _0 + Y : Y, this._events[W])
        K$(this, W);
    } else
      this._events = new r1, this._eventsCount = 0;
    return this;
  };
  b0.prototype.off = b0.prototype.removeListener;
  b0.prototype.addListener = b0.prototype.on;
  b0.prefixed = _0;
  b0.EventEmitter = b0;
  if (typeof a$ !== "undefined")
    a$.exports = b0;
});
var V0 = J0((d6) => {
  var JX = function($) {
    return j$($) && (Symbol.asyncIterator in $);
  }, zX = function($) {
    return j$($) && (Symbol.iterator in $);
  }, HX = function($) {
    return ArrayBuffer.isView($);
  }, qX = function($) {
    return $ instanceof Promise;
  }, MX = function($) {
    return $ instanceof Uint8Array;
  }, NX = function($) {
    return $ instanceof Date && Number.isFinite($.getTime());
  }, UX = function($, Y) {
    return Y in $;
  }, AX = function($) {
    return j$($) && f6($.constructor) && $.constructor.name === "Object";
  }, j$ = function($) {
    return $ !== null && typeof $ === "object";
  }, BX = function($) {
    return Array.isArray($) && !ArrayBuffer.isView($);
  }, E6 = function($) {
    return $ === undefined;
  }, V6 = function($) {
    return $ === null;
  }, x6 = function($) {
    return typeof $ === "boolean";
  }, e$ = function($) {
    return typeof $ === "number";
  }, FX = function($) {
    return e$($) && Number.isInteger($);
  }, k6 = function($) {
    return typeof $ === "bigint";
  }, g6 = function($) {
    return typeof $ === "string";
  }, f6 = function($) {
    return typeof $ === "function";
  }, T6 = function($) {
    return typeof $ === "symbol";
  }, DX = function($) {
    return k6($) || x6($) || V6($) || e$($) || g6($) || T6($) || E6($);
  };
  Object.defineProperty(d6, "__esModule", { value: true });
  d6.IsValueType = d6.IsSymbol = d6.IsFunction = d6.IsString = d6.IsBigInt = d6.IsInteger = d6.IsNumber = d6.IsBoolean = d6.IsNull = d6.IsUndefined = d6.IsArray = d6.IsObject = d6.IsPlainObject = d6.HasPropertyKey = d6.IsDate = d6.IsUint8Array = d6.IsPromise = d6.IsTypedArray = d6.IsIterator = d6.IsAsyncIterator = undefined;
  d6.IsAsyncIterator = JX;
  d6.IsIterator = zX;
  d6.IsTypedArray = HX;
  d6.IsPromise = qX;
  d6.IsUint8Array = MX;
  d6.IsDate = NX;
  d6.HasPropertyKey = UX;
  d6.IsPlainObject = AX;
  d6.IsObject = j$;
  d6.IsArray = BX;
  d6.IsUndefined = E6;
  d6.IsNull = V6;
  d6.IsBoolean = x6;
  d6.IsNumber = e$;
  d6.IsInteger = FX;
  d6.IsBigInt = k6;
  d6.IsString = g6;
  d6.IsFunction = f6;
  d6.IsSymbol = T6;
  d6.IsValueType = DX;
});
var f0 = J0((m6) => {
  Object.defineProperty(m6, "__esModule", { value: true });
  m6.Type = m6.JsonType = m6.JavaScriptTypeBuilder = m6.JsonTypeBuilder = m6.TypeBuilder = m6.TypeBuilderError = m6.TransformEncodeBuilder = m6.TransformDecodeBuilder = m6.TemplateLiteralDslParser = m6.TemplateLiteralGenerator = m6.TemplateLiteralGeneratorError = m6.TemplateLiteralFinite = m6.TemplateLiteralFiniteError = m6.TemplateLiteralParser = m6.TemplateLiteralParserError = m6.TemplateLiteralResolver = m6.TemplateLiteralPattern = m6.TemplateLiteralPatternError = m6.UnionResolver = m6.KeyArrayResolver = m6.KeyArrayResolverError = m6.KeyResolver = m6.ObjectMap = m6.Intrinsic = m6.IndexedAccessor = m6.TypeClone = m6.TypeExtends = m6.TypeExtendsResult = m6.TypeExtendsError = m6.ExtendsUndefined = m6.TypeGuard = m6.TypeGuardUnknownTypeError = m6.ValueGuard = m6.FormatRegistry = m6.TypeBoxError = m6.TypeRegistry = m6.PatternStringExact = m6.PatternNumberExact = m6.PatternBooleanExact = m6.PatternString = m6.PatternNumber = m6.PatternBoolean = m6.Kind = m6.Hint = m6.Optional = m6.Readonly = m6.Transform = undefined;
  m6.Transform = Symbol.for("TypeBox.Transform");
  m6.Readonly = Symbol.for("TypeBox.Readonly");
  m6.Optional = Symbol.for("TypeBox.Optional");
  m6.Hint = Symbol.for("TypeBox.Hint");
  m6.Kind = Symbol.for("TypeBox.Kind");
  m6.PatternBoolean = "(true|false)";
  m6.PatternNumber = "(0|[1-9][0-9]*)";
  m6.PatternString = "(.*)";
  m6.PatternBooleanExact = `^${m6.PatternBoolean}$`;
  m6.PatternNumberExact = `^${m6.PatternNumber}$`;
  m6.PatternStringExact = `^${m6.PatternString}$`;
  var $8;
  (function($) {
    const Y = new Map;
    function W() {
      return new Map(Y);
    }
    $.Entries = W;
    function X() {
      return Y.clear();
    }
    $.Clear = X;
    function Z(A) {
      return Y.delete(A);
    }
    $.Delete = Z;
    function Q(A) {
      return Y.has(A);
    }
    $.Has = Q;
    function J(A, F) {
      Y.set(A, F);
    }
    $.Set = J;
    function z(A) {
      return Y.get(A);
    }
    $.Get = z;
  })($8 || (m6.TypeRegistry = $8 = {}));

  class e0 extends Error {
    constructor($) {
      super($);
    }
  }
  m6.TypeBoxError = e0;
  var v6;
  (function($) {
    const Y = new Map;
    function W() {
      return new Map(Y);
    }
    $.Entries = W;
    function X() {
      return Y.clear();
    }
    $.Clear = X;
    function Z(A) {
      return Y.delete(A);
    }
    $.Delete = Z;
    function Q(A) {
      return Y.has(A);
    }
    $.Has = Q;
    function J(A, F) {
      Y.set(A, F);
    }
    $.Set = J;
    function z(A) {
      return Y.get(A);
    }
    $.Get = z;
  })(v6 || (m6.FormatRegistry = v6 = {}));
  var x;
  (function($) {
    function Y(F) {
      return Array.isArray(F);
    }
    $.IsArray = Y;
    function W(F) {
      return typeof F === "bigint";
    }
    $.IsBigInt = W;
    function X(F) {
      return typeof F === "boolean";
    }
    $.IsBoolean = X;
    function Z(F) {
      return F === null;
    }
    $.IsNull = Z;
    function Q(F) {
      return typeof F === "number";
    }
    $.IsNumber = Q;
    function J(F) {
      return typeof F === "object" && F !== null;
    }
    $.IsObject = J;
    function z(F) {
      return typeof F === "string";
    }
    $.IsString = z;
    function A(F) {
      return F === undefined;
    }
    $.IsUndefined = A;
  })(x || (m6.ValueGuard = x = {}));

  class i6 extends e0 {
  }
  m6.TypeGuardUnknownTypeError = i6;
  var B;
  (function($) {
    function Y(M) {
      try {
        return new RegExp(M), true;
      } catch {
        return false;
      }
    }
    function W(M) {
      if (!x.IsString(M))
        return false;
      for (let l = 0;l < M.length; l++) {
        const S0 = M.charCodeAt(l);
        if (S0 >= 7 && S0 <= 13 || S0 === 27 || S0 === 127)
          return false;
      }
      return true;
    }
    function X(M) {
      return J(M) || X0(M);
    }
    function Z(M) {
      return x.IsUndefined(M) || x.IsBigInt(M);
    }
    function Q(M) {
      return x.IsUndefined(M) || x.IsNumber(M);
    }
    function J(M) {
      return x.IsUndefined(M) || x.IsBoolean(M);
    }
    function z(M) {
      return x.IsUndefined(M) || x.IsString(M);
    }
    function A(M) {
      return x.IsUndefined(M) || x.IsString(M) && W(M) && Y(M);
    }
    function F(M) {
      return x.IsUndefined(M) || x.IsString(M) && W(M);
    }
    function w(M) {
      return x.IsUndefined(M) || X0(M);
    }
    function K(M) {
      return R(M, "Any") && z(M.$id);
    }
    $.TAny = K;
    function b(M) {
      return R(M, "Array") && M.type === "array" && z(M.$id) && X0(M.items) && Q(M.minItems) && Q(M.maxItems) && J(M.uniqueItems) && w(M.contains) && Q(M.minContains) && Q(M.maxContains);
    }
    $.TArray = b;
    function O(M) {
      return R(M, "AsyncIterator") && M.type === "AsyncIterator" && z(M.$id) && X0(M.items);
    }
    $.TAsyncIterator = O;
    function N(M) {
      return R(M, "BigInt") && M.type === "bigint" && z(M.$id) && Z(M.exclusiveMaximum) && Z(M.exclusiveMinimum) && Z(M.maximum) && Z(M.minimum) && Z(M.multipleOf);
    }
    $.TBigInt = N;
    function L(M) {
      return R(M, "Boolean") && M.type === "boolean" && z(M.$id);
    }
    $.TBoolean = L;
    function j(M) {
      return R(M, "Constructor") && M.type === "Constructor" && z(M.$id) && x.IsArray(M.parameters) && M.parameters.every((l) => X0(l)) && X0(M.returns);
    }
    $.TConstructor = j;
    function U(M) {
      return R(M, "Date") && M.type === "Date" && z(M.$id) && Q(M.exclusiveMaximumTimestamp) && Q(M.exclusiveMinimumTimestamp) && Q(M.maximumTimestamp) && Q(M.minimumTimestamp) && Q(M.multipleOfTimestamp);
    }
    $.TDate = U;
    function D(M) {
      return R(M, "Function") && M.type === "Function" && z(M.$id) && x.IsArray(M.parameters) && M.parameters.every((l) => X0(l)) && X0(M.returns);
    }
    $.TFunction = D;
    function I(M) {
      return R(M, "Integer") && M.type === "integer" && z(M.$id) && Q(M.exclusiveMaximum) && Q(M.exclusiveMinimum) && Q(M.maximum) && Q(M.minimum) && Q(M.multipleOf);
    }
    $.TInteger = I;
    function G(M) {
      return R(M, "Intersect") && (x.IsString(M.type) && M.type !== "object" ? false : true) && x.IsArray(M.allOf) && M.allOf.every((l) => X0(l) && !D0(l)) && z(M.type) && (J(M.unevaluatedProperties) || w(M.unevaluatedProperties)) && z(M.$id);
    }
    $.TIntersect = G;
    function V(M) {
      return R(M, "Iterator") && M.type === "Iterator" && z(M.$id) && X0(M.items);
    }
    $.TIterator = V;
    function R(M, l) {
      return n(M) && M[m6.Kind] === l;
    }
    $.TKindOf = R;
    function n(M) {
      return x.IsObject(M) && (m6.Kind in M) && x.IsString(M[m6.Kind]);
    }
    $.TKind = n;
    function o(M) {
      return w0(M) && x.IsString(M.const);
    }
    $.TLiteralString = o;
    function $0(M) {
      return w0(M) && x.IsNumber(M.const);
    }
    $.TLiteralNumber = $0;
    function h0(M) {
      return w0(M) && x.IsBoolean(M.const);
    }
    $.TLiteralBoolean = h0;
    function w0(M) {
      return R(M, "Literal") && z(M.$id) && (x.IsBoolean(M.const) || x.IsNumber(M.const) || x.IsString(M.const));
    }
    $.TLiteral = w0;
    function k0(M) {
      return R(M, "Never") && x.IsObject(M.not) && Object.getOwnPropertyNames(M.not).length === 0;
    }
    $.TNever = k0;
    function A0(M) {
      return R(M, "Not") && X0(M.not);
    }
    $.TNot = A0;
    function v0(M) {
      return R(M, "Null") && M.type === "null" && z(M.$id);
    }
    $.TNull = v0;
    function H0(M) {
      return R(M, "Number") && M.type === "number" && z(M.$id) && Q(M.exclusiveMaximum) && Q(M.exclusiveMinimum) && Q(M.maximum) && Q(M.minimum) && Q(M.multipleOf);
    }
    $.TNumber = H0;
    function p0(M) {
      return R(M, "Object") && M.type === "object" && z(M.$id) && x.IsObject(M.properties) && X(M.additionalProperties) && Q(M.minProperties) && Q(M.maxProperties) && Object.entries(M.properties).every(([l, S0]) => W(l) && X0(S0));
    }
    $.TObject = p0;
    function g0(M) {
      return R(M, "Promise") && M.type === "Promise" && z(M.$id) && X0(M.item);
    }
    $.TPromise = g0;
    function N0(M) {
      return R(M, "Record") && M.type === "object" && z(M.$id) && X(M.additionalProperties) && x.IsObject(M.patternProperties) && ((l) => {
        const S0 = Object.getOwnPropertyNames(l.patternProperties);
        return S0.length === 1 && Y(S0[0]) && x.IsObject(l.patternProperties) && X0(l.patternProperties[S0[0]]);
      })(M);
    }
    $.TRecord = N0;
    function E(M) {
      return x.IsObject(M) && (m6.Hint in M) && M[m6.Hint] === "Recursive";
    }
    $.TRecursive = E;
    function d(M) {
      return R(M, "Ref") && z(M.$id) && x.IsString(M.$ref);
    }
    $.TRef = d;
    function u(M) {
      return R(M, "String") && M.type === "string" && z(M.$id) && Q(M.minLength) && Q(M.maxLength) && A(M.pattern) && F(M.format);
    }
    $.TString = u;
    function t(M) {
      return R(M, "Symbol") && M.type === "symbol" && z(M.$id);
    }
    $.TSymbol = t;
    function q0(M) {
      return R(M, "TemplateLiteral") && M.type === "string" && x.IsString(M.pattern) && M.pattern[0] === "^" && M.pattern[M.pattern.length - 1] === "$";
    }
    $.TTemplateLiteral = q0;
    function E0(M) {
      return R(M, "This") && z(M.$id) && x.IsString(M.$ref);
    }
    $.TThis = E0;
    function D0(M) {
      return x.IsObject(M) && (m6.Transform in M);
    }
    $.TTransform = D0;
    function a(M) {
      return R(M, "Tuple") && M.type === "array" && z(M.$id) && x.IsNumber(M.minItems) && x.IsNumber(M.maxItems) && M.minItems === M.maxItems && (x.IsUndefined(M.items) && x.IsUndefined(M.additionalItems) && M.minItems === 0 || x.IsArray(M.items) && M.items.every((l) => X0(l)));
    }
    $.TTuple = a;
    function F1(M) {
      return R(M, "Undefined") && M.type === "undefined" && z(M.$id);
    }
    $.TUndefined = F1;
    function P(M) {
      return _(M) && M.anyOf.every((l) => o(l) || $0(l));
    }
    $.TUnionLiteral = P;
    function _(M) {
      return R(M, "Union") && z(M.$id) && x.IsObject(M) && x.IsArray(M.anyOf) && M.anyOf.every((l) => X0(l));
    }
    $.TUnion = _;
    function S(M) {
      return R(M, "Uint8Array") && M.type === "Uint8Array" && z(M.$id) && Q(M.minByteLength) && Q(M.maxByteLength);
    }
    $.TUint8Array = S;
    function p(M) {
      return R(M, "Unknown") && z(M.$id);
    }
    $.TUnknown = p;
    function f(M) {
      return R(M, "Unsafe");
    }
    $.TUnsafe = f;
    function T(M) {
      return R(M, "Void") && M.type === "void" && z(M.$id);
    }
    $.TVoid = T;
    function W0(M) {
      return x.IsObject(M) && M[m6.Readonly] === "Readonly";
    }
    $.TReadonly = W0;
    function K0(M) {
      return x.IsObject(M) && M[m6.Optional] === "Optional";
    }
    $.TOptional = K0;
    function X0(M) {
      return x.IsObject(M) && (K(M) || b(M) || L(M) || N(M) || O(M) || j(M) || U(M) || D(M) || I(M) || G(M) || V(M) || w0(M) || k0(M) || A0(M) || v0(M) || H0(M) || p0(M) || g0(M) || N0(M) || d(M) || u(M) || t(M) || q0(M) || E0(M) || a(M) || F1(M) || _(M) || S(M) || p(M) || f(M) || T(M) || n(M) && $8.Has(M[m6.Kind]));
    }
    $.TSchema = X0;
  })(B || (m6.TypeGuard = B = {}));
  var p6;
  (function($) {
    function Y(W) {
      return W[m6.Kind] === "Intersect" ? W.allOf.every((X) => Y(X)) : W[m6.Kind] === "Union" ? W.anyOf.some((X) => Y(X)) : W[m6.Kind] === "Undefined" ? true : W[m6.Kind] === "Not" ? !Y(W.not) : false;
    }
    $.Check = Y;
  })(p6 || (m6.ExtendsUndefined = p6 = {}));

  class Z8 extends e0 {
  }
  m6.TypeExtendsError = Z8;
  var C;
  (function($) {
    $[$.Union = 0] = "Union", $[$.True = 1] = "True", $[$.False = 2] = "False";
  })(C || (m6.TypeExtendsResult = C = {}));
  var j1;
  (function($) {
    function Y(H) {
      return H === C.False ? H : C.True;
    }
    function W(H) {
      throw new Z8(H);
    }
    function X(H) {
      return B.TNever(H) || B.TIntersect(H) || B.TUnion(H) || B.TUnknown(H) || B.TAny(H);
    }
    function Z(H, q) {
      return B.TNever(q) ? R(H, q) : B.TIntersect(q) ? D(H, q) : B.TUnion(q) ? s$(H, q) : B.TUnknown(q) ? O6(H, q) : B.TAny(q) ? Q(H, q) : W("StructuralRight");
    }
    function Q(H, q) {
      return C.True;
    }
    function J(H, q) {
      return B.TIntersect(q) ? D(H, q) : B.TUnion(q) && q.anyOf.some((Y0) => B.TAny(Y0) || B.TUnknown(Y0)) ? C.True : B.TUnion(q) ? C.Union : B.TUnknown(q) ? C.True : B.TAny(q) ? C.True : C.Union;
    }
    function z(H, q) {
      return B.TUnknown(H) ? C.False : B.TAny(H) ? C.Union : B.TNever(H) ? C.True : C.False;
    }
    function A(H, q) {
      return B.TObject(q) && q0(q) ? C.True : X(q) ? Z(H, q) : !B.TArray(q) ? C.False : Y(Q0(H.items, q.items));
    }
    function F(H, q) {
      return X(q) ? Z(H, q) : !B.TAsyncIterator(q) ? C.False : Y(Q0(H.items, q.items));
    }
    function w(H, q) {
      return X(q) ? Z(H, q) : B.TObject(q) ? a(H, q) : B.TRecord(q) ? p(H, q) : B.TBigInt(q) ? C.True : C.False;
    }
    function K(H, q) {
      return B.TLiteral(H) && x.IsBoolean(H.const) ? C.True : B.TBoolean(H) ? C.True : C.False;
    }
    function b(H, q) {
      return X(q) ? Z(H, q) : B.TObject(q) ? a(H, q) : B.TRecord(q) ? p(H, q) : B.TBoolean(q) ? C.True : C.False;
    }
    function O(H, q) {
      return X(q) ? Z(H, q) : B.TObject(q) ? a(H, q) : !B.TConstructor(q) ? C.False : H.parameters.length > q.parameters.length ? C.False : !H.parameters.every((Y0, n0) => Y(Q0(q.parameters[n0], Y0)) === C.True) ? C.False : Y(Q0(H.returns, q.returns));
    }
    function N(H, q) {
      return X(q) ? Z(H, q) : B.TObject(q) ? a(H, q) : B.TRecord(q) ? p(H, q) : B.TDate(q) ? C.True : C.False;
    }
    function L(H, q) {
      return X(q) ? Z(H, q) : B.TObject(q) ? a(H, q) : !B.TFunction(q) ? C.False : H.parameters.length > q.parameters.length ? C.False : !H.parameters.every((Y0, n0) => Y(Q0(q.parameters[n0], Y0)) === C.True) ? C.False : Y(Q0(H.returns, q.returns));
    }
    function j(H, q) {
      return B.TLiteral(H) && x.IsNumber(H.const) ? C.True : B.TNumber(H) || B.TInteger(H) ? C.True : C.False;
    }
    function U(H, q) {
      return B.TInteger(q) || B.TNumber(q) ? C.True : X(q) ? Z(H, q) : B.TObject(q) ? a(H, q) : B.TRecord(q) ? p(H, q) : C.False;
    }
    function D(H, q) {
      return q.allOf.every((Y0) => Q0(H, Y0) === C.True) ? C.True : C.False;
    }
    function I(H, q) {
      return H.allOf.some((Y0) => Q0(Y0, q) === C.True) ? C.True : C.False;
    }
    function G(H, q) {
      return X(q) ? Z(H, q) : !B.TIterator(q) ? C.False : Y(Q0(H.items, q.items));
    }
    function V(H, q) {
      return B.TLiteral(q) && q.const === H.const ? C.True : X(q) ? Z(H, q) : B.TObject(q) ? a(H, q) : B.TRecord(q) ? p(H, q) : B.TString(q) ? T(H, q) : B.TNumber(q) ? w0(H, q) : B.TInteger(q) ? j(H, q) : B.TBoolean(q) ? K(H, q) : C.False;
    }
    function R(H, q) {
      return C.False;
    }
    function n(H, q) {
      return C.True;
    }
    function o(H) {
      let [q, Y0] = [H, 0];
      while (true) {
        if (!B.TNot(q))
          break;
        q = q.not, Y0 += 1;
      }
      return Y0 % 2 === 0 ? q : m6.Type.Unknown();
    }
    function $0(H, q) {
      return B.TNot(H) ? Q0(o(H), q) : B.TNot(q) ? Q0(H, o(q)) : W("Invalid fallthrough for Not");
    }
    function h0(H, q) {
      return X(q) ? Z(H, q) : B.TObject(q) ? a(H, q) : B.TRecord(q) ? p(H, q) : B.TNull(q) ? C.True : C.False;
    }
    function w0(H, q) {
      return B.TLiteralNumber(H) ? C.True : B.TNumber(H) || B.TInteger(H) ? C.True : C.False;
    }
    function k0(H, q) {
      return X(q) ? Z(H, q) : B.TObject(q) ? a(H, q) : B.TRecord(q) ? p(H, q) : B.TInteger(q) || B.TNumber(q) ? C.True : C.False;
    }
    function A0(H, q) {
      return Object.getOwnPropertyNames(H.properties).length === q;
    }
    function v0(H) {
      return q0(H);
    }
    function H0(H) {
      return A0(H, 0) || A0(H, 1) && ("description" in H.properties) && B.TUnion(H.properties.description) && H.properties.description.anyOf.length === 2 && (B.TString(H.properties.description.anyOf[0]) && B.TUndefined(H.properties.description.anyOf[1]) || B.TString(H.properties.description.anyOf[1]) && B.TUndefined(H.properties.description.anyOf[0]));
    }
    function p0(H) {
      return A0(H, 0);
    }
    function g0(H) {
      return A0(H, 0);
    }
    function N0(H) {
      return A0(H, 0);
    }
    function E(H) {
      return A0(H, 0);
    }
    function d(H) {
      return q0(H);
    }
    function u(H) {
      const q = m6.Type.Number();
      return A0(H, 0) || A0(H, 1) && ("length" in H.properties) && Y(Q0(H.properties.length, q)) === C.True;
    }
    function t(H) {
      return A0(H, 0);
    }
    function q0(H) {
      const q = m6.Type.Number();
      return A0(H, 0) || A0(H, 1) && ("length" in H.properties) && Y(Q0(H.properties.length, q)) === C.True;
    }
    function E0(H) {
      const q = m6.Type.Function([m6.Type.Any()], m6.Type.Any());
      return A0(H, 0) || A0(H, 1) && ("then" in H.properties) && Y(Q0(H.properties.then, q)) === C.True;
    }
    function D0(H, q) {
      return Q0(H, q) === C.False ? C.False : B.TOptional(H) && !B.TOptional(q) ? C.False : C.True;
    }
    function a(H, q) {
      return B.TUnknown(H) ? C.False : B.TAny(H) ? C.Union : B.TNever(H) || B.TLiteralString(H) && v0(q) || B.TLiteralNumber(H) && p0(q) || B.TLiteralBoolean(H) && g0(q) || B.TSymbol(H) && H0(q) || B.TBigInt(H) && N0(q) || B.TString(H) && v0(q) || B.TSymbol(H) && H0(q) || B.TNumber(H) && p0(q) || B.TInteger(H) && p0(q) || B.TBoolean(H) && g0(q) || B.TUint8Array(H) && d(q) || B.TDate(H) && E(q) || B.TConstructor(H) && t(q) || B.TFunction(H) && u(q) ? C.True : B.TRecord(H) && B.TString(_(H)) ? (() => {
        return q[m6.Hint] === "Record" ? C.True : C.False;
      })() : B.TRecord(H) && B.TNumber(_(H)) ? (() => {
        return A0(q, 0) ? C.True : C.False;
      })() : C.False;
    }
    function F1(H, q) {
      return X(q) ? Z(H, q) : B.TRecord(q) ? p(H, q) : !B.TObject(q) ? C.False : (() => {
        for (let Y0 of Object.getOwnPropertyNames(q.properties)) {
          if (!(Y0 in H.properties))
            return C.False;
          if (D0(H.properties[Y0], q.properties[Y0]) === C.False)
            return C.False;
        }
        return C.True;
      })();
    }
    function P(H, q) {
      return X(q) ? Z(H, q) : B.TObject(q) && E0(q) ? C.True : !B.TPromise(q) ? C.False : Y(Q0(H.item, q.item));
    }
    function _(H) {
      return m6.PatternNumberExact in H.patternProperties ? m6.Type.Number() : (m6.PatternStringExact in H.patternProperties) ? m6.Type.String() : W("Unknown record key pattern");
    }
    function S(H) {
      return m6.PatternNumberExact in H.patternProperties ? H.patternProperties[m6.PatternNumberExact] : (m6.PatternStringExact in H.patternProperties) ? H.patternProperties[m6.PatternStringExact] : W("Unable to get record value schema");
    }
    function p(H, q) {
      const [Y0, n0] = [_(q), S(q)];
      return B.TLiteralString(H) && B.TNumber(Y0) && Y(Q0(H, n0)) === C.True ? C.True : B.TUint8Array(H) && B.TNumber(Y0) ? Q0(H, n0) : B.TString(H) && B.TNumber(Y0) ? Q0(H, n0) : B.TArray(H) && B.TNumber(Y0) ? Q0(H, n0) : B.TObject(H) ? (() => {
        for (let aW of Object.getOwnPropertyNames(H.properties))
          if (D0(n0, H.properties[aW]) === C.False)
            return C.False;
        return C.True;
      })() : C.False;
    }
    function f(H, q) {
      return X(q) ? Z(H, q) : B.TObject(q) ? a(H, q) : !B.TRecord(q) ? C.False : Q0(S(H), S(q));
    }
    function T(H, q) {
      return B.TLiteral(H) && x.IsString(H.const) ? C.True : B.TString(H) ? C.True : C.False;
    }
    function W0(H, q) {
      return X(q) ? Z(H, q) : B.TObject(q) ? a(H, q) : B.TRecord(q) ? p(H, q) : B.TString(q) ? C.True : C.False;
    }
    function K0(H, q) {
      return X(q) ? Z(H, q) : B.TObject(q) ? a(H, q) : B.TRecord(q) ? p(H, q) : B.TSymbol(q) ? C.True : C.False;
    }
    function X0(H, q) {
      return B.TTemplateLiteral(H) ? Q0(Z1.Resolve(H), q) : B.TTemplateLiteral(q) ? Q0(H, Z1.Resolve(q)) : W("Invalid fallthrough for TemplateLiteral");
    }
    function M(H, q) {
      return B.TArray(q) && H.items !== undefined && H.items.every((Y0) => Q0(Y0, q.items) === C.True);
    }
    function l(H, q) {
      return B.TNever(H) ? C.True : B.TUnknown(H) ? C.False : B.TAny(H) ? C.Union : C.False;
    }
    function S0(H, q) {
      return X(q) ? Z(H, q) : B.TObject(q) && q0(q) ? C.True : B.TArray(q) && M(H, q) ? C.True : !B.TTuple(q) ? C.False : x.IsUndefined(H.items) && !x.IsUndefined(q.items) || !x.IsUndefined(H.items) && x.IsUndefined(q.items) ? C.False : x.IsUndefined(H.items) && !x.IsUndefined(q.items) ? C.True : H.items.every((Y0, n0) => Q0(Y0, q.items[n0]) === C.True) ? C.True : C.False;
    }
    function l$(H, q) {
      return X(q) ? Z(H, q) : B.TObject(q) ? a(H, q) : B.TRecord(q) ? p(H, q) : B.TUint8Array(q) ? C.True : C.False;
    }
    function t$(H, q) {
      return X(q) ? Z(H, q) : B.TObject(q) ? a(H, q) : B.TRecord(q) ? p(H, q) : B.TVoid(q) ? tW(H, q) : B.TUndefined(q) ? C.True : C.False;
    }
    function s$(H, q) {
      return q.anyOf.some((Y0) => Q0(H, Y0) === C.True) ? C.True : C.False;
    }
    function cW(H, q) {
      return H.anyOf.every((Y0) => Q0(Y0, q) === C.True) ? C.True : C.False;
    }
    function O6(H, q) {
      return C.True;
    }
    function lW(H, q) {
      return B.TNever(q) ? R(H, q) : B.TIntersect(q) ? D(H, q) : B.TUnion(q) ? s$(H, q) : B.TAny(q) ? Q(H, q) : B.TString(q) ? T(H, q) : B.TNumber(q) ? w0(H, q) : B.TInteger(q) ? j(H, q) : B.TBoolean(q) ? K(H, q) : B.TArray(q) ? z(H, q) : B.TTuple(q) ? l(H, q) : B.TObject(q) ? a(H, q) : B.TUnknown(q) ? C.True : C.False;
    }
    function tW(H, q) {
      return B.TUndefined(H) ? C.True : B.TUndefined(H) ? C.True : C.False;
    }
    function sW(H, q) {
      return B.TIntersect(q) ? D(H, q) : B.TUnion(q) ? s$(H, q) : B.TUnknown(q) ? O6(H, q) : B.TAny(q) ? Q(H, q) : B.TObject(q) ? a(H, q) : B.TVoid(q) ? C.True : C.False;
    }
    function Q0(H, q) {
      return B.TTemplateLiteral(H) || B.TTemplateLiteral(q) ? X0(H, q) : B.TNot(H) || B.TNot(q) ? $0(H, q) : B.TAny(H) ? J(H, q) : B.TArray(H) ? A(H, q) : B.TBigInt(H) ? w(H, q) : B.TBoolean(H) ? b(H, q) : B.TAsyncIterator(H) ? F(H, q) : B.TConstructor(H) ? O(H, q) : B.TDate(H) ? N(H, q) : B.TFunction(H) ? L(H, q) : B.TInteger(H) ? U(H, q) : B.TIntersect(H) ? I(H, q) : B.TIterator(H) ? G(H, q) : B.TLiteral(H) ? V(H, q) : B.TNever(H) ? n(H, q) : B.TNull(H) ? h0(H, q) : B.TNumber(H) ? k0(H, q) : B.TObject(H) ? F1(H, q) : B.TRecord(H) ? f(H, q) : B.TString(H) ? W0(H, q) : B.TSymbol(H) ? K0(H, q) : B.TTuple(H) ? S0(H, q) : B.TPromise(H) ? P(H, q) : B.TUint8Array(H) ? l$(H, q) : B.TUndefined(H) ? t$(H, q) : B.TUnion(H) ? cW(H, q) : B.TUnknown(H) ? lW(H, q) : B.TVoid(H) ? sW(H, q) : W(`Unknown left type operand '${H[m6.Kind]}'`);
    }
    function rW(H, q) {
      return Q0(H, q);
    }
    $.Extends = rW;
  })(j1 || (m6.TypeExtends = j1 = {}));
  var i;
  (function($) {
    function Y(J) {
      const z = Object.getOwnPropertyNames(J).reduce((F, w) => ({ ...F, [w]: X(J[w]) }), {}), A = Object.getOwnPropertySymbols(J).reduce((F, w) => ({ ...F, [w]: X(J[w]) }), {});
      return { ...z, ...A };
    }
    function W(J) {
      return J.map((z) => X(z));
    }
    function X(J) {
      return x.IsArray(J) ? W(J) : x.IsObject(J) ? Y(J) : J;
    }
    function Z(J) {
      return J.map((z) => Q(z));
    }
    $.Rest = Z;
    function Q(J, z = {}) {
      return { ...X(J), ...z };
    }
    $.Type = Q;
  })(i || (m6.TypeClone = i = {}));
  var Y8;
  (function($) {
    function Y(O) {
      return O.map((N) => {
        const { [m6.Optional]: L, ...j } = i.Type(N);
        return j;
      });
    }
    function W(O) {
      return O.every((N) => B.TOptional(N));
    }
    function X(O) {
      return O.some((N) => B.TOptional(N));
    }
    function Z(O) {
      return W(O.allOf) ? m6.Type.Optional(m6.Type.Intersect(Y(O.allOf))) : O;
    }
    function Q(O) {
      return X(O.anyOf) ? m6.Type.Optional(m6.Type.Union(Y(O.anyOf))) : O;
    }
    function J(O) {
      return O[m6.Kind] === "Intersect" ? Z(O) : O[m6.Kind] === "Union" ? Q(O) : O;
    }
    function z(O, N) {
      const L = O.allOf.reduce((j, U) => {
        const D = K(U, N);
        return D[m6.Kind] === "Never" ? j : [...j, D];
      }, []);
      return J(m6.Type.Intersect(L));
    }
    function A(O, N) {
      const L = O.anyOf.map((j) => K(j, N));
      return J(m6.Type.Union(L));
    }
    function F(O, N) {
      const L = O.properties[N];
      return x.IsUndefined(L) ? m6.Type.Never() : m6.Type.Union([L]);
    }
    function w(O, N) {
      const L = O.items;
      if (x.IsUndefined(L))
        return m6.Type.Never();
      const j = L[N];
      if (x.IsUndefined(j))
        return m6.Type.Never();
      return j;
    }
    function K(O, N) {
      return O[m6.Kind] === "Intersect" ? z(O, N) : O[m6.Kind] === "Union" ? A(O, N) : O[m6.Kind] === "Object" ? F(O, N) : O[m6.Kind] === "Tuple" ? w(O, N) : m6.Type.Never();
    }
    function b(O, N, L = {}) {
      const j = N.map((U) => K(O, U.toString()));
      return J(m6.Type.Union(j, L));
    }
    $.Resolve = b;
  })(Y8 || (m6.IndexedAccessor = Y8 = {}));
  var V1;
  (function($) {
    function Y(w) {
      const [K, b] = [w.slice(0, 1), w.slice(1)];
      return `${K.toLowerCase()}${b}`;
    }
    function W(w) {
      const [K, b] = [w.slice(0, 1), w.slice(1)];
      return `${K.toUpperCase()}${b}`;
    }
    function X(w) {
      return w.toUpperCase();
    }
    function Z(w) {
      return w.toLowerCase();
    }
    function Q(w, K) {
      const b = f1.ParseExact(w.pattern);
      if (!T1.Check(b))
        return { ...w, pattern: J(w.pattern, K) };
      const L = [...d1.Generate(b)].map((D) => m6.Type.Literal(D)), j = z(L, K), U = m6.Type.Union(j);
      return m6.Type.TemplateLiteral([U]);
    }
    function J(w, K) {
      return typeof w === "string" ? K === "Uncapitalize" ? Y(w) : K === "Capitalize" ? W(w) : K === "Uppercase" ? X(w) : K === "Lowercase" ? Z(w) : w : w.toString();
    }
    function z(w, K) {
      if (w.length === 0)
        return [];
      const [b, ...O] = w;
      return [F(b, K), ...z(O, K)];
    }
    function A(w, K) {
      return B.TTemplateLiteral(w) ? Q(w, K) : B.TUnion(w) ? m6.Type.Union(z(w.anyOf, K)) : B.TLiteral(w) ? m6.Type.Literal(J(w.const, K)) : w;
    }
    function F(w, K) {
      return A(w, K);
    }
    $.Map = F;
  })(V1 || (m6.Intrinsic = V1 = {}));
  var x1;
  (function($) {
    function Y(J, z) {
      return m6.Type.Intersect(J.allOf.map((A) => Z(A, z)), { ...J });
    }
    function W(J, z) {
      return m6.Type.Union(J.anyOf.map((A) => Z(A, z)), { ...J });
    }
    function X(J, z) {
      return z(J);
    }
    function Z(J, z) {
      return J[m6.Kind] === "Intersect" ? Y(J, z) : J[m6.Kind] === "Union" ? W(J, z) : J[m6.Kind] === "Object" ? X(J, z) : J;
    }
    function Q(J, z, A) {
      return { ...Z(i.Type(J), z), ...A };
    }
    $.Map = Q;
  })(x1 || (m6.ObjectMap = x1 = {}));
  var P$;
  (function($) {
    function Y(F) {
      return F[0] === "^" && F[F.length - 1] === "$" ? F.slice(1, F.length - 1) : F;
    }
    function W(F, w) {
      return F.allOf.reduce((K, b) => [...K, ...J(b, w)], []);
    }
    function X(F, w) {
      const K = F.anyOf.map((b) => J(b, w));
      return [...K.reduce((b, O) => O.map((N) => K.every((L) => L.includes(N)) ? b.add(N) : b)[0], new Set)];
    }
    function Z(F, w) {
      return Object.getOwnPropertyNames(F.properties);
    }
    function Q(F, w) {
      return w.includePatterns ? Object.getOwnPropertyNames(F.patternProperties) : [];
    }
    function J(F, w) {
      return B.TIntersect(F) ? W(F, w) : B.TUnion(F) ? X(F, w) : B.TObject(F) ? Z(F, w) : B.TRecord(F) ? Q(F, w) : [];
    }
    function z(F, w) {
      return [...new Set(J(F, w))];
    }
    $.ResolveKeys = z;
    function A(F) {
      return `^(${z(F, { includePatterns: true }).map((b) => `(${Y(b)})`).join("|")})$`;
    }
    $.ResolvePattern = A;
  })(P$ || (m6.KeyResolver = P$ = {}));

  class Q8 extends e0 {
  }
  m6.KeyArrayResolverError = Q8;
  var a1;
  (function($) {
    function Y(W) {
      return Array.isArray(W) ? W : B.TUnionLiteral(W) ? W.anyOf.map((X) => X.const.toString()) : B.TLiteral(W) ? [W.const] : B.TTemplateLiteral(W) ? (() => {
        const X = f1.ParseExact(W.pattern);
        if (!T1.Check(X))
          throw new Q8("Cannot resolve keys from infinite template expression");
        return [...d1.Generate(X)];
      })() : [];
    }
    $.Resolve = Y;
  })(a1 || (m6.KeyArrayResolver = a1 = {}));
  var W8;
  (function($) {
    function* Y(X) {
      for (let Z of X.anyOf)
        if (Z[m6.Kind] === "Union")
          yield* Y(Z);
        else
          yield Z;
    }
    function W(X) {
      return m6.Type.Union([...Y(X)], { ...X });
    }
    $.Resolve = W;
  })(W8 || (m6.UnionResolver = W8 = {}));

  class J8 extends e0 {
  }
  m6.TemplateLiteralPatternError = J8;
  var O$;
  (function($) {
    function Y(Q) {
      throw new J8(Q);
    }
    function W(Q) {
      return Q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function X(Q, J) {
      return B.TTemplateLiteral(Q) ? Q.pattern.slice(1, Q.pattern.length - 1) : B.TUnion(Q) ? `(${Q.anyOf.map((z) => X(z, J)).join("|")})` : B.TNumber(Q) ? `${J}${m6.PatternNumber}` : B.TInteger(Q) ? `${J}${m6.PatternNumber}` : B.TBigInt(Q) ? `${J}${m6.PatternNumber}` : B.TString(Q) ? `${J}${m6.PatternString}` : B.TLiteral(Q) ? `${J}${W(Q.const.toString())}` : B.TBoolean(Q) ? `${J}${m6.PatternBoolean}` : Y(`Unexpected Kind '${Q[m6.Kind]}'`);
    }
    function Z(Q) {
      return `^${Q.map((J) => X(J, "")).join("")}\$`;
    }
    $.Create = Z;
  })(O$ || (m6.TemplateLiteralPattern = O$ = {}));
  var Z1;
  (function($) {
    function Y(W) {
      const X = f1.ParseExact(W.pattern);
      if (!T1.Check(X))
        return m6.Type.String();
      const Z = [...d1.Generate(X)].map((Q) => m6.Type.Literal(Q));
      return m6.Type.Union(Z);
    }
    $.Resolve = Y;
  })(Z1 || (m6.TemplateLiteralResolver = Z1 = {}));

  class S$ extends e0 {
  }
  m6.TemplateLiteralParserError = S$;
  var f1;
  (function($) {
    function Y(O, N, L) {
      return O[N] === L && O.charCodeAt(N - 1) !== 92;
    }
    function W(O, N) {
      return Y(O, N, "(");
    }
    function X(O, N) {
      return Y(O, N, ")");
    }
    function Z(O, N) {
      return Y(O, N, "|");
    }
    function Q(O) {
      if (!(W(O, 0) && X(O, O.length - 1)))
        return false;
      let N = 0;
      for (let L = 0;L < O.length; L++) {
        if (W(O, L))
          N += 1;
        if (X(O, L))
          N -= 1;
        if (N === 0 && L !== O.length - 1)
          return false;
      }
      return true;
    }
    function J(O) {
      return O.slice(1, O.length - 1);
    }
    function z(O) {
      let N = 0;
      for (let L = 0;L < O.length; L++) {
        if (W(O, L))
          N += 1;
        if (X(O, L))
          N -= 1;
        if (Z(O, L) && N === 0)
          return true;
      }
      return false;
    }
    function A(O) {
      for (let N = 0;N < O.length; N++)
        if (W(O, N))
          return true;
      return false;
    }
    function F(O) {
      let [N, L] = [0, 0];
      const j = [];
      for (let D = 0;D < O.length; D++) {
        if (W(O, D))
          N += 1;
        if (X(O, D))
          N -= 1;
        if (Z(O, D) && N === 0) {
          const I = O.slice(L, D);
          if (I.length > 0)
            j.push(K(I));
          L = D + 1;
        }
      }
      const U = O.slice(L);
      if (U.length > 0)
        j.push(K(U));
      if (j.length === 0)
        return { type: "const", const: "" };
      if (j.length === 1)
        return j[0];
      return { type: "or", expr: j };
    }
    function w(O) {
      function N(U, D) {
        if (!W(U, D))
          throw new S$("TemplateLiteralParser: Index must point to open parens");
        let I = 0;
        for (let G = D;G < U.length; G++) {
          if (W(U, G))
            I += 1;
          if (X(U, G))
            I -= 1;
          if (I === 0)
            return [D, G];
        }
        throw new S$("TemplateLiteralParser: Unclosed group parens in expression");
      }
      function L(U, D) {
        for (let I = D;I < U.length; I++)
          if (W(U, I))
            return [D, I];
        return [D, U.length];
      }
      const j = [];
      for (let U = 0;U < O.length; U++)
        if (W(O, U)) {
          const [D, I] = N(O, U), G = O.slice(D, I + 1);
          j.push(K(G)), U = I;
        } else {
          const [D, I] = L(O, U), G = O.slice(D, I);
          if (G.length > 0)
            j.push(K(G));
          U = I - 1;
        }
      return j.length === 0 ? { type: "const", const: "" } : j.length === 1 ? j[0] : { type: "and", expr: j };
    }
    function K(O) {
      return Q(O) ? K(J(O)) : z(O) ? F(O) : A(O) ? w(O) : { type: "const", const: O };
    }
    $.Parse = K;
    function b(O) {
      return K(O.slice(1, O.length - 1));
    }
    $.ParseExact = b;
  })(f1 || (m6.TemplateLiteralParser = f1 = {}));

  class z8 extends e0 {
  }
  m6.TemplateLiteralFiniteError = z8;
  var T1;
  (function($) {
    function Y(J) {
      throw new z8(J);
    }
    function W(J) {
      return J.type === "or" && J.expr.length === 2 && J.expr[0].type === "const" && J.expr[0].const === "0" && J.expr[1].type === "const" && J.expr[1].const === "[1-9][0-9]*";
    }
    function X(J) {
      return J.type === "or" && J.expr.length === 2 && J.expr[0].type === "const" && J.expr[0].const === "true" && J.expr[1].type === "const" && J.expr[1].const === "false";
    }
    function Z(J) {
      return J.type === "const" && J.const === ".*";
    }
    function Q(J) {
      return X(J) ? true : W(J) || Z(J) ? false : J.type === "and" ? J.expr.every((z) => Q(z)) : J.type === "or" ? J.expr.every((z) => Q(z)) : J.type === "const" ? true : Y("Unknown expression type");
    }
    $.Check = Q;
  })(T1 || (m6.TemplateLiteralFinite = T1 = {}));

  class H8 extends e0 {
  }
  m6.TemplateLiteralGeneratorError = H8;
  var d1;
  (function($) {
    function* Y(J) {
      if (J.length === 1)
        return yield* J[0];
      for (let z of J[0])
        for (let A of Y(J.slice(1)))
          yield `${z}${A}`;
    }
    function* W(J) {
      return yield* Y(J.expr.map((z) => [...Q(z)]));
    }
    function* X(J) {
      for (let z of J.expr)
        yield* Q(z);
    }
    function* Z(J) {
      return yield J.const;
    }
    function* Q(J) {
      return J.type === "and" ? yield* W(J) : J.type === "or" ? yield* X(J) : J.type === "const" ? yield* Z(J) : (() => {
        throw new H8("Unknown expression");
      })();
    }
    $.Generate = Q;
  })(d1 || (m6.TemplateLiteralGenerator = d1 = {}));
  var X8;
  (function($) {
    function* Y(Q) {
      const J = Q.trim().replace(/"|'/g, "");
      return J === "boolean" ? yield m6.Type.Boolean() : J === "number" ? yield m6.Type.Number() : J === "bigint" ? yield m6.Type.BigInt() : J === "string" ? yield m6.Type.String() : yield (() => {
        const z = J.split("|").map((A) => m6.Type.Literal(A.trim()));
        return z.length === 0 ? m6.Type.Never() : z.length === 1 ? z[0] : m6.Type.Union(z);
      })();
    }
    function* W(Q) {
      if (Q[1] !== "{") {
        const J = m6.Type.Literal("$"), z = X(Q.slice(1));
        return yield* [J, ...z];
      }
      for (let J = 2;J < Q.length; J++)
        if (Q[J] === "}") {
          const z = Y(Q.slice(2, J)), A = X(Q.slice(J + 1));
          return yield* [...z, ...A];
        }
      yield m6.Type.Literal(Q);
    }
    function* X(Q) {
      for (let J = 0;J < Q.length; J++)
        if (Q[J] === "$") {
          const z = m6.Type.Literal(Q.slice(0, J)), A = W(Q.slice(J));
          return yield* [z, ...A];
        }
      yield m6.Type.Literal(Q);
    }
    function Z(Q) {
      return [...X(Q)];
    }
    $.Parse = Z;
  })(X8 || (m6.TemplateLiteralDslParser = X8 = {}));

  class q8 {
    constructor($) {
      this.schema = $;
    }
    Decode($) {
      return new M8(this.schema, $);
    }
  }
  m6.TransformDecodeBuilder = q8;

  class M8 {
    constructor($, Y) {
      this.schema = $, this.decode = Y;
    }
    Encode($) {
      const Y = i.Type(this.schema);
      return B.TTransform(Y) ? (() => {
        const Z = { Encode: (Q) => Y[m6.Transform].Encode($(Q)), Decode: (Q) => this.decode(Y[m6.Transform].Decode(Q)) };
        return { ...Y, [m6.Transform]: Z };
      })() : (() => {
        const W = { Decode: this.decode, Encode: $ };
        return { ...Y, [m6.Transform]: W };
      })();
    }
  }
  m6.TransformEncodeBuilder = M8;
  var TX = 0;

  class N8 extends e0 {
  }
  m6.TypeBuilderError = N8;

  class U8 {
    Create($) {
      return $;
    }
    Throw($) {
      throw new N8($);
    }
    Discard($, Y) {
      return Y.reduce((W, X) => {
        const { [X]: Z, ...Q } = W;
        return Q;
      }, $);
    }
    Strict($) {
      return JSON.parse(JSON.stringify($));
    }
  }
  m6.TypeBuilder = U8;

  class L$ extends U8 {
    ReadonlyOptional($) {
      return this.Readonly(this.Optional($));
    }
    Readonly($) {
      return { ...i.Type($), [m6.Readonly]: "Readonly" };
    }
    Optional($) {
      return { ...i.Type($), [m6.Optional]: "Optional" };
    }
    Any($ = {}) {
      return this.Create({ ...$, [m6.Kind]: "Any" });
    }
    Array($, Y = {}) {
      return this.Create({ ...Y, [m6.Kind]: "Array", type: "array", items: i.Type($) });
    }
    Boolean($ = {}) {
      return this.Create({ ...$, [m6.Kind]: "Boolean", type: "boolean" });
    }
    Capitalize($, Y = {}) {
      return { ...V1.Map(i.Type($), "Capitalize"), ...Y };
    }
    Composite($, Y) {
      const W = m6.Type.Intersect($, {}), Z = P$.ResolveKeys(W, { includePatterns: false }).reduce((Q, J) => ({ ...Q, [J]: m6.Type.Index(W, [J]) }), {});
      return m6.Type.Object(Z, Y);
    }
    Enum($, Y = {}) {
      const W = Object.getOwnPropertyNames($).filter((Q) => isNaN(Q)).map((Q) => $[Q]), Z = [...new Set(W)].map((Q) => m6.Type.Literal(Q));
      return this.Union(Z, { ...Y, [m6.Hint]: "Enum" });
    }
    Extends($, Y, W, X, Z = {}) {
      switch (j1.Extends($, Y)) {
        case C.Union:
          return this.Union([i.Type(W, Z), i.Type(X, Z)]);
        case C.True:
          return i.Type(W, Z);
        case C.False:
          return i.Type(X, Z);
      }
    }
    Exclude($, Y, W = {}) {
      return B.TTemplateLiteral($) ? this.Exclude(Z1.Resolve($), Y, W) : B.TTemplateLiteral(Y) ? this.Exclude($, Z1.Resolve(Y), W) : B.TUnion($) ? (() => {
        const X = $.anyOf.filter((Z) => j1.Extends(Z, Y) === C.False);
        return X.length === 1 ? i.Type(X[0], W) : this.Union(X, W);
      })() : j1.Extends($, Y) !== C.False ? this.Never(W) : i.Type($, W);
    }
    Extract($, Y, W = {}) {
      return B.TTemplateLiteral($) ? this.Extract(Z1.Resolve($), Y, W) : B.TTemplateLiteral(Y) ? this.Extract($, Z1.Resolve(Y), W) : B.TUnion($) ? (() => {
        const X = $.anyOf.filter((Z) => j1.Extends(Z, Y) !== C.False);
        return X.length === 1 ? i.Type(X[0], W) : this.Union(X, W);
      })() : j1.Extends($, Y) !== C.False ? i.Type($, W) : this.Never(W);
    }
    Index($, Y, W = {}) {
      return B.TArray($) && B.TNumber(Y) ? (() => {
        return i.Type($.items, W);
      })() : B.TTuple($) && B.TNumber(Y) ? (() => {
        const Z = (x.IsUndefined($.items) ? [] : $.items).map((Q) => i.Type(Q));
        return this.Union(Z, W);
      })() : (() => {
        const X = a1.Resolve(Y), Z = i.Type($);
        return Y8.Resolve(Z, X, W);
      })();
    }
    Integer($ = {}) {
      return this.Create({ ...$, [m6.Kind]: "Integer", type: "integer" });
    }
    Intersect($, Y = {}) {
      if ($.length === 0)
        return m6.Type.Never();
      if ($.length === 1)
        return i.Type($[0], Y);
      if ($.some((Q) => B.TTransform(Q)))
        this.Throw("Cannot intersect transform types");
      const W = $.every((Q) => B.TObject(Q)), X = i.Rest($), Z = B.TSchema(Y.unevaluatedProperties) ? { unevaluatedProperties: i.Type(Y.unevaluatedProperties) } : {};
      return Y.unevaluatedProperties === false || B.TSchema(Y.unevaluatedProperties) || W ? this.Create({ ...Y, ...Z, [m6.Kind]: "Intersect", type: "object", allOf: X }) : this.Create({ ...Y, ...Z, [m6.Kind]: "Intersect", allOf: X });
    }
    KeyOf($, Y = {}) {
      return B.TRecord($) ? (() => {
        const W = Object.getOwnPropertyNames($.patternProperties)[0];
        return W === m6.PatternNumberExact ? this.Number(Y) : W === m6.PatternStringExact ? this.String(Y) : this.Throw("Unable to resolve key type from Record key pattern");
      })() : B.TTuple($) ? (() => {
        const X = (x.IsUndefined($.items) ? [] : $.items).map((Z, Q) => m6.Type.Literal(Q.toString()));
        return this.Union(X, Y);
      })() : B.TArray($) ? (() => {
        return this.Number(Y);
      })() : (() => {
        const W = P$.ResolveKeys($, { includePatterns: false });
        if (W.length === 0)
          return this.Never(Y);
        const X = W.map((Z) => this.Literal(Z));
        return this.Union(X, Y);
      })();
    }
    Literal($, Y = {}) {
      return this.Create({ ...Y, [m6.Kind]: "Literal", const: $, type: typeof $ });
    }
    Lowercase($, Y = {}) {
      return { ...V1.Map(i.Type($), "Lowercase"), ...Y };
    }
    Never($ = {}) {
      return this.Create({ ...$, [m6.Kind]: "Never", not: {} });
    }
    Not($, Y) {
      return this.Create({ ...Y, [m6.Kind]: "Not", not: i.Type($) });
    }
    Null($ = {}) {
      return this.Create({ ...$, [m6.Kind]: "Null", type: "null" });
    }
    Number($ = {}) {
      return this.Create({ ...$, [m6.Kind]: "Number", type: "number" });
    }
    Object($, Y = {}) {
      const W = Object.getOwnPropertyNames($), X = W.filter((z) => B.TOptional($[z])), Z = W.filter((z) => !X.includes(z)), Q = B.TSchema(Y.additionalProperties) ? { additionalProperties: i.Type(Y.additionalProperties) } : {}, J = W.reduce((z, A) => ({ ...z, [A]: i.Type($[A]) }), {});
      return Z.length > 0 ? this.Create({ ...Y, ...Q, [m6.Kind]: "Object", type: "object", properties: J, required: Z }) : this.Create({ ...Y, ...Q, [m6.Kind]: "Object", type: "object", properties: J });
    }
    Omit($, Y, W = {}) {
      const X = a1.Resolve(Y);
      return x1.Map(this.Discard(i.Type($), ["$id", m6.Transform]), (Z) => {
        if (x.IsArray(Z.required)) {
          if (Z.required = Z.required.filter((Q) => !X.includes(Q)), Z.required.length === 0)
            delete Z.required;
        }
        for (let Q of Object.getOwnPropertyNames(Z.properties))
          if (X.includes(Q))
            delete Z.properties[Q];
        return this.Create(Z);
      }, W);
    }
    Partial($, Y = {}) {
      return x1.Map(this.Discard(i.Type($), ["$id", m6.Transform]), (W) => {
        const X = Object.getOwnPropertyNames(W.properties).reduce((Z, Q) => {
          return { ...Z, [Q]: this.Optional(W.properties[Q]) };
        }, {});
        return this.Object(X, this.Discard(W, ["required"]));
      }, Y);
    }
    Pick($, Y, W = {}) {
      const X = a1.Resolve(Y);
      return x1.Map(this.Discard(i.Type($), ["$id", m6.Transform]), (Z) => {
        if (x.IsArray(Z.required)) {
          if (Z.required = Z.required.filter((Q) => X.includes(Q)), Z.required.length === 0)
            delete Z.required;
        }
        for (let Q of Object.getOwnPropertyNames(Z.properties))
          if (!X.includes(Q))
            delete Z.properties[Q];
        return this.Create(Z);
      }, W);
    }
    Record($, Y, W = {}) {
      return B.TTemplateLiteral($) ? (() => {
        const X = f1.ParseExact($.pattern);
        return T1.Check(X) ? this.Object([...d1.Generate(X)].reduce((Z, Q) => ({ ...Z, [Q]: i.Type(Y) }), {}), W) : this.Create({ ...W, [m6.Kind]: "Record", type: "object", patternProperties: { [$.pattern]: i.Type(Y) } });
      })() : B.TUnion($) ? (() => {
        const X = W8.Resolve($);
        if (B.TUnionLiteral(X)) {
          const Z = X.anyOf.reduce((Q, J) => ({ ...Q, [J.const]: i.Type(Y) }), {});
          return this.Object(Z, { ...W, [m6.Hint]: "Record" });
        } else
          this.Throw("Record key of type union contains non-literal types");
      })() : B.TLiteral($) ? (() => {
        return x.IsString($.const) || x.IsNumber($.const) ? this.Object({ [$.const]: i.Type(Y) }, W) : this.Throw("Record key of type literal is not of type string or number");
      })() : B.TInteger($) || B.TNumber($) ? (() => {
        return this.Create({ ...W, [m6.Kind]: "Record", type: "object", patternProperties: { [m6.PatternNumberExact]: i.Type(Y) } });
      })() : B.TString($) ? (() => {
        const X = x.IsUndefined($.pattern) ? m6.PatternStringExact : $.pattern;
        return this.Create({ ...W, [m6.Kind]: "Record", type: "object", patternProperties: { [X]: i.Type(Y) } });
      })() : this.Never();
    }
    Recursive($, Y = {}) {
      if (x.IsUndefined(Y.$id))
        Y.$id = `T${TX++}`;
      const W = $({ [m6.Kind]: "This", $ref: `${Y.$id}` });
      return W.$id = Y.$id, this.Create({ ...Y, [m6.Hint]: "Recursive", ...W });
    }
    Ref($, Y = {}) {
      if (x.IsString($))
        return this.Create({ ...Y, [m6.Kind]: "Ref", $ref: $ });
      if (x.IsUndefined($.$id))
        this.Throw("Reference target type must specify an $id");
      return this.Create({ ...Y, [m6.Kind]: "Ref", $ref: $.$id });
    }
    Required($, Y = {}) {
      return x1.Map(this.Discard(i.Type($), ["$id", m6.Transform]), (W) => {
        const X = Object.getOwnPropertyNames(W.properties).reduce((Z, Q) => {
          return { ...Z, [Q]: this.Discard(W.properties[Q], [m6.Optional]) };
        }, {});
        return this.Object(X, W);
      }, Y);
    }
    Rest($) {
      return B.TTuple($) && !x.IsUndefined($.items) ? i.Rest($.items) : B.TIntersect($) ? i.Rest($.allOf) : B.TUnion($) ? i.Rest($.anyOf) : [];
    }
    String($ = {}) {
      return this.Create({ ...$, [m6.Kind]: "String", type: "string" });
    }
    TemplateLiteral($, Y = {}) {
      const W = x.IsString($) ? O$.Create(X8.Parse($)) : O$.Create($);
      return this.Create({ ...Y, [m6.Kind]: "TemplateLiteral", type: "string", pattern: W });
    }
    Transform($) {
      return new q8($);
    }
    Tuple($, Y = {}) {
      const [W, X, Z] = [false, $.length, $.length], Q = i.Rest($), J = $.length > 0 ? { ...Y, [m6.Kind]: "Tuple", type: "array", items: Q, additionalItems: W, minItems: X, maxItems: Z } : { ...Y, [m6.Kind]: "Tuple", type: "array", minItems: X, maxItems: Z };
      return this.Create(J);
    }
    Uncapitalize($, Y = {}) {
      return { ...V1.Map(i.Type($), "Uncapitalize"), ...Y };
    }
    Union($, Y = {}) {
      return B.TTemplateLiteral($) ? Z1.Resolve($) : (() => {
        const W = $;
        if (W.length === 0)
          return this.Never(Y);
        if (W.length === 1)
          return this.Create(i.Type(W[0], Y));
        const X = i.Rest(W);
        return this.Create({ ...Y, [m6.Kind]: "Union", anyOf: X });
      })();
    }
    Unknown($ = {}) {
      return this.Create({ ...$, [m6.Kind]: "Unknown" });
    }
    Unsafe($ = {}) {
      return this.Create({ ...$, [m6.Kind]: $[m6.Kind] || "Unsafe" });
    }
    Uppercase($, Y = {}) {
      return { ...V1.Map(i.Type($), "Uppercase"), ...Y };
    }
  }
  m6.JsonTypeBuilder = L$;

  class A8 extends L$ {
    AsyncIterator($, Y = {}) {
      return this.Create({ ...Y, [m6.Kind]: "AsyncIterator", type: "AsyncIterator", items: i.Type($) });
    }
    Awaited($, Y = {}) {
      const W = (X) => X.length > 0 ? (() => {
        const [Z, ...Q] = X;
        return [this.Awaited(Z), ...W(Q)];
      })() : X;
      return B.TIntersect($) ? m6.Type.Intersect(W($.allOf)) : B.TUnion($) ? m6.Type.Union(W($.anyOf)) : B.TPromise($) ? this.Awaited($.item) : i.Type($, Y);
    }
    BigInt($ = {}) {
      return this.Create({ ...$, [m6.Kind]: "BigInt", type: "bigint" });
    }
    ConstructorParameters($, Y = {}) {
      return this.Tuple([...$.parameters], { ...Y });
    }
    Constructor($, Y, W) {
      const [X, Z] = [i.Rest($), i.Type(Y)];
      return this.Create({ ...W, [m6.Kind]: "Constructor", type: "Constructor", parameters: X, returns: Z });
    }
    Date($ = {}) {
      return this.Create({ ...$, [m6.Kind]: "Date", type: "Date" });
    }
    Function($, Y, W) {
      const [X, Z] = [i.Rest($), i.Type(Y)];
      return this.Create({ ...W, [m6.Kind]: "Function", type: "Function", parameters: X, returns: Z });
    }
    InstanceType($, Y = {}) {
      return i.Type($.returns, Y);
    }
    Iterator($, Y = {}) {
      return this.Create({ ...Y, [m6.Kind]: "Iterator", type: "Iterator", items: i.Type($) });
    }
    Parameters($, Y = {}) {
      return this.Tuple($.parameters, { ...Y });
    }
    Promise($, Y = {}) {
      return this.Create({ ...Y, [m6.Kind]: "Promise", type: "Promise", item: i.Type($) });
    }
    RegExp($, Y = {}) {
      const W = x.IsString($) ? $ : $.source;
      return this.Create({ ...Y, [m6.Kind]: "String", type: "string", pattern: W });
    }
    RegEx($, Y = {}) {
      return this.RegExp($, Y);
    }
    ReturnType($, Y = {}) {
      return i.Type($.returns, Y);
    }
    Symbol($) {
      return this.Create({ ...$, [m6.Kind]: "Symbol", type: "symbol" });
    }
    Undefined($ = {}) {
      return this.Create({ ...$, [m6.Kind]: "Undefined", type: "undefined" });
    }
    Uint8Array($ = {}) {
      return this.Create({ ...$, [m6.Kind]: "Uint8Array", type: "Uint8Array" });
    }
    Void($ = {}) {
      return this.Create({ ...$, [m6.Kind]: "Void", type: "void" });
    }
  }
  m6.JavaScriptTypeBuilder = A8;
  m6.JsonType = new L$;
  m6.Type = new A8;
});
var P8 = J0((o6) => {
  var w8 = function($, Y) {
    switch (Y) {
      case y.ValueErrorType.ArrayContains:
        return "Expected array to contain at least one matching value";
      case y.ValueErrorType.ArrayMaxContains:
        return `Expected array to contain no more than ${$.maxContains} matching values`;
      case y.ValueErrorType.ArrayMinContains:
        return `Expected array to contain at least ${$.minContains} matching values`;
      case y.ValueErrorType.ArrayMaxItems:
        return `Expected array length to be less or equal to ${$.maxItems}`;
      case y.ValueErrorType.ArrayMinItems:
        return `Expected array length to be greater or equal to ${$.minItems}`;
      case y.ValueErrorType.ArrayUniqueItems:
        return "Expected array elements to be unique";
      case y.ValueErrorType.Array:
        return "Expected array";
      case y.ValueErrorType.AsyncIterator:
        return "Expected AsyncIterator";
      case y.ValueErrorType.BigIntExclusiveMaximum:
        return `Expected bigint to be less than ${$.exclusiveMaximum}`;
      case y.ValueErrorType.BigIntExclusiveMinimum:
        return `Expected bigint to be greater than ${$.exclusiveMinimum}`;
      case y.ValueErrorType.BigIntMaximum:
        return `Expected bigint to be less or equal to ${$.maximum}`;
      case y.ValueErrorType.BigIntMinimum:
        return `Expected bigint to be greater or equal to ${$.minimum}`;
      case y.ValueErrorType.BigIntMultipleOf:
        return `Expected bigint to be a multiple of ${$.multipleOf}`;
      case y.ValueErrorType.BigInt:
        return "Expected bigint";
      case y.ValueErrorType.Boolean:
        return "Expected boolean";
      case y.ValueErrorType.DateExclusiveMinimumTimestamp:
        return `Expected Date timestamp to be greater than ${$.exclusiveMinimumTimestamp}`;
      case y.ValueErrorType.DateExclusiveMaximumTimestamp:
        return `Expected Date timestamp to be less than ${$.exclusiveMaximumTimestamp}`;
      case y.ValueErrorType.DateMinimumTimestamp:
        return `Expected Date timestamp to be greater or equal to ${$.minimumTimestamp}`;
      case y.ValueErrorType.DateMaximumTimestamp:
        return `Expected Date timestamp to be less or equal to ${$.maximumTimestamp}`;
      case y.ValueErrorType.DateMultipleOfTimestamp:
        return `Expected Date timestamp to be a multiple of ${$.multipleOfTimestamp}`;
      case y.ValueErrorType.Date:
        return "Expected Date";
      case y.ValueErrorType.Function:
        return "Expected function";
      case y.ValueErrorType.IntegerExclusiveMaximum:
        return `Expected integer to be less than ${$.exclusiveMaximum}`;
      case y.ValueErrorType.IntegerExclusiveMinimum:
        return `Expected integer to be greater than ${$.exclusiveMinimum}`;
      case y.ValueErrorType.IntegerMaximum:
        return `Expected integer to be less or equal to ${$.maximum}`;
      case y.ValueErrorType.IntegerMinimum:
        return `Expected integer to be greater or equal to ${$.minimum}`;
      case y.ValueErrorType.IntegerMultipleOf:
        return `Expected integer to be a multiple of ${$.multipleOf}`;
      case y.ValueErrorType.Integer:
        return "Expected integer";
      case y.ValueErrorType.IntersectUnevaluatedProperties:
        return "Unexpected property";
      case y.ValueErrorType.Intersect:
        return "Expected all values to match";
      case y.ValueErrorType.Iterator:
        return "Expected Iterator";
      case y.ValueErrorType.Literal:
        return `Expected ${typeof $.const === "string" ? `'${$.const}'` : $.const}`;
      case y.ValueErrorType.Never:
        return "Never";
      case y.ValueErrorType.Not:
        return "Value should not match";
      case y.ValueErrorType.Null:
        return "Expected null";
      case y.ValueErrorType.NumberExclusiveMaximum:
        return `Expected number to be less than ${$.exclusiveMaximum}`;
      case y.ValueErrorType.NumberExclusiveMinimum:
        return `Expected number to be greater than ${$.exclusiveMinimum}`;
      case y.ValueErrorType.NumberMaximum:
        return `Expected number to be less or equal to ${$.maximum}`;
      case y.ValueErrorType.NumberMinimum:
        return `Expected number to be greater or equal to ${$.minimum}`;
      case y.ValueErrorType.NumberMultipleOf:
        return `Expected number to be a multiple of ${$.multipleOf}`;
      case y.ValueErrorType.Number:
        return "Expected number";
      case y.ValueErrorType.Object:
        return "Expected object";
      case y.ValueErrorType.ObjectAdditionalProperties:
        return "Unexpected property";
      case y.ValueErrorType.ObjectMaxProperties:
        return `Expected object to have no more than ${$.maxProperties} properties`;
      case y.ValueErrorType.ObjectMinProperties:
        return `Expected object to have at least ${$.minProperties} properties`;
      case y.ValueErrorType.ObjectRequiredProperty:
        return "Required property";
      case y.ValueErrorType.Promise:
        return "Expected Promise";
      case y.ValueErrorType.StringFormatUnknown:
        return `Unknown format '${$.format}'`;
      case y.ValueErrorType.StringFormat:
        return `Expected string to match '${$.format}' format`;
      case y.ValueErrorType.StringMaxLength:
        return `Expected string length less or equal to ${$.maxLength}`;
      case y.ValueErrorType.StringMinLength:
        return `Expected string length greater or equal to ${$.minLength}`;
      case y.ValueErrorType.StringPattern:
        return `Expected string to match '${$.pattern}'`;
      case y.ValueErrorType.String:
        return "Expected string";
      case y.ValueErrorType.Symbol:
        return "Expected symbol";
      case y.ValueErrorType.TupleLength:
        return `Expected tuple to have ${$.maxItems || 0} elements`;
      case y.ValueErrorType.Tuple:
        return "Expected tuple";
      case y.ValueErrorType.Uint8ArrayMaxByteLength:
        return `Expected byte length less or equal to ${$.maxByteLength}`;
      case y.ValueErrorType.Uint8ArrayMinByteLength:
        return `Expected byte length greater or equal to ${$.minByteLength}`;
      case y.ValueErrorType.Uint8Array:
        return "Expected Uint8Array";
      case y.ValueErrorType.Undefined:
        return "Expected undefined";
      case y.ValueErrorType.Union:
        return "Expected union value";
      case y.ValueErrorType.Void:
        return "Expected void";
      case y.ValueErrorType.Kind:
        return `Expected kind '${$[Q1.Kind]}'`;
      default:
        return "Unknown error type";
    }
  };
  Object.defineProperty(o6, "__esModule", { value: true });
  o6.DefaultErrorFunction = o6.TypeSystemPolicy = o6.TypeSystemErrorFunction = o6.TypeSystem = o6.TypeSystemDuplicateFormat = o6.TypeSystemDuplicateTypeKind = undefined;
  var C$ = V0(), y = Y$(), Q1 = f0();

  class K8 extends Q1.TypeBoxError {
    constructor($) {
      super(`Duplicate type kind '${$}' detected`);
    }
  }
  o6.TypeSystemDuplicateTypeKind = K8;

  class j8 extends Q1.TypeBoxError {
    constructor($) {
      super(`Duplicate string format '${$}' detected`);
    }
  }
  o6.TypeSystemDuplicateFormat = j8;
  var u6;
  (function($) {
    function Y(X, Z) {
      if (Q1.TypeRegistry.Has(X))
        throw new K8(X);
      return Q1.TypeRegistry.Set(X, Z), (Q = {}) => Q1.Type.Unsafe({ ...Q, [Q1.Kind]: X });
    }
    $.Type = Y;
    function W(X, Z) {
      if (Q1.FormatRegistry.Has(X))
        throw new j8(X);
      return Q1.FormatRegistry.Set(X, Z), X;
    }
    $.Format = W;
  })(u6 || (o6.TypeSystem = u6 = {}));
  var h6;
  (function($) {
    let Y = w8;
    function W() {
      Y = w8;
    }
    $.Reset = W;
    function X(Q) {
      Y = Q;
    }
    $.Set = X;
    function Z() {
      return Y;
    }
    $.Get = Z;
  })(h6 || (o6.TypeSystemErrorFunction = h6 = {}));
  var n6;
  (function($) {
    $.ExactOptionalPropertyTypes = false, $.AllowArrayObject = false, $.AllowNaN = false, $.AllowNullVoid = false;
    function Y(J, z) {
      return $.ExactOptionalPropertyTypes ? z in J : J[z] !== undefined;
    }
    $.IsExactOptionalProperty = Y;
    function W(J) {
      const z = (0, C$.IsObject)(J);
      return $.AllowArrayObject ? z : z && !(0, C$.IsArray)(J);
    }
    $.IsObjectLike = W;
    function X(J) {
      return W(J) && !(J instanceof Date) && !(J instanceof Uint8Array);
    }
    $.IsRecordLike = X;
    function Z(J) {
      const z = (0, C$.IsNumber)(J);
      return $.AllowNaN ? z : z && Number.isFinite(J);
    }
    $.IsNumberLike = Z;
    function Q(J) {
      const z = (0, C$.IsUndefined)(J);
      return $.AllowNullVoid ? z || J === null : z;
    }
    $.IsVoidLike = Q;
  })(n6 || (o6.TypeSystemPolicy = n6 = {}));
  o6.DefaultErrorFunction = w8;
});
var D1 = J0((l6) => {
  var IZ = function($, Y) {
    const W = Y.findIndex((X) => X.$id === $.$ref);
    if (W === -1)
      throw new O8($);
    return Y[W];
  };
  Object.defineProperty(l6, "__esModule", { value: true });
  l6.Deref = l6.TypeDereferenceError = undefined;
  var CZ = f0();

  class O8 extends CZ.TypeBoxError {
    constructor($) {
      super(`Unable to dereference schema with $id '${$.$id}'`);
      this.schema = $;
    }
  }
  l6.TypeDereferenceError = O8;
  l6.Deref = IZ;
});
var W$ = J0((e6) => {
  function* EZ($) {
    const Y = $ === 0 ? 1 : Math.ceil(Math.floor(Math.log2($) + 1) / 8);
    for (let W = 0;W < Y; W++)
      yield $ >> 8 * (Y - 1 - W) & 255;
  }
  var VZ = function($) {
    G0(T0.Array);
    for (let Y of $)
      v1(Y);
  }, xZ = function($) {
    G0(T0.Boolean), G0($ ? 1 : 0);
  }, kZ = function($) {
    G0(T0.BigInt), r6.setBigInt64(0, $);
    for (let Y of a6)
      G0(Y);
  }, gZ = function($) {
    G0(T0.Date), v1($.getTime());
  }, fZ = function($) {
    G0(T0.Null);
  }, TZ = function($) {
    G0(T0.Number), r6.setFloat64(0, $);
    for (let Y of a6)
      G0(Y);
  }, dZ = function($) {
    G0(T0.Object);
    for (let Y of globalThis.Object.keys($).sort())
      v1(Y), v1($[Y]);
  }, yZ = function($) {
    G0(T0.String);
    for (let Y = 0;Y < $.length; Y++)
      for (let W of EZ($.charCodeAt(Y)))
        G0(W);
  }, vZ = function($) {
    G0(T0.Symbol), v1($.description);
  }, pZ = function($) {
    G0(T0.Uint8Array);
    for (let Y = 0;Y < $.length; Y++)
      G0($[Y]);
  }, iZ = function($) {
    return G0(T0.Undefined);
  }, v1 = function($) {
    if ((0, o0.IsArray)($))
      return VZ($);
    if ((0, o0.IsBoolean)($))
      return xZ($);
    if ((0, o0.IsBigInt)($))
      return kZ($);
    if ((0, o0.IsDate)($))
      return gZ($);
    if ((0, o0.IsNull)($))
      return fZ($);
    if ((0, o0.IsNumber)($))
      return TZ($);
    if ((0, o0.IsPlainObject)($))
      return dZ($);
    if ((0, o0.IsString)($))
      return yZ($);
    if ((0, o0.IsSymbol)($))
      return vZ($);
    if ((0, o0.IsUint8Array)($))
      return pZ($);
    if ((0, o0.IsUndefined)($))
      return iZ($);
    throw new S8($);
  }, G0 = function($) {
    y1 = y1 ^ _Z[$], y1 = y1 * GZ % RZ;
  }, mZ = function($) {
    return y1 = BigInt("14695981039346656037"), v1($), y1;
  };
  Object.defineProperty(e6, "__esModule", { value: true });
  e6.Hash = e6.ByteMarker = e6.ValueHashError = undefined;
  var o0 = V0();

  class S8 extends Error {
    constructor($) {
      super("Unable to hash value");
      this.value = $;
    }
  }
  e6.ValueHashError = S8;
  var T0;
  (function($) {
    $[$.Undefined = 0] = "Undefined", $[$.Null = 1] = "Null", $[$.Boolean = 2] = "Boolean", $[$.Number = 3] = "Number", $[$.String = 4] = "String", $[$.Object = 5] = "Object", $[$.Array = 6] = "Array", $[$.Date = 7] = "Date", $[$.Uint8Array = 8] = "Uint8Array", $[$.Symbol = 9] = "Symbol", $[$.BigInt = 10] = "BigInt";
  })(T0 || (e6.ByteMarker = T0 = {}));
  var y1 = BigInt("14695981039346656037"), [GZ, RZ] = [BigInt("1099511628211"), BigInt("2") ** BigInt("64")], _Z = Array.from({ length: 256 }).map(($, Y) => BigInt(Y)), s6 = new Float64Array(1), r6 = new DataView(s6.buffer), a6 = new Uint8Array(s6.buffer);
  e6.Hash = mZ;
});
var Y$ = J0((WY) => {
  var s = function($) {
    return $ !== undefined;
  }, g = function($, Y, W, X) {
    return { type: $, schema: Y, path: W, value: X, message: p1.TypeSystemErrorFunction.Get()(Y, $) };
  };
  function* oZ($, Y, W, X) {
  }
  function* cZ($, Y, W, X) {
    if (!(0, B0.IsArray)(X))
      return yield g(k.Array, $, W, X);
    if (s($.minItems) && !(X.length >= $.minItems))
      yield g(k.ArrayMinItems, $, W, X);
    if (s($.maxItems) && !(X.length <= $.maxItems))
      yield g(k.ArrayMaxItems, $, W, X);
    for (let J = 0;J < X.length; J++)
      yield* L0($.items, Y, `${W}/${J}`, X[J]);
    if ($.uniqueItems === true && !function() {
      const J = new Set;
      for (let z of X) {
        const A = (0, nZ.Hash)(z);
        if (J.has(A))
          return false;
        else
          J.add(A);
      }
      return true;
    }())
      yield g(k.ArrayUniqueItems, $, W, X);
    if (!(s($.contains) || s($.minContains) || s($.maxContains)))
      return;
    const Z = s($.contains) ? $.contains : i0.Type.Never(), Q = X.reduce((J, z, A) => L0(Z, Y, `${W}${A}`, z).next().done === true ? J + 1 : J, 0);
    if (Q === 0)
      yield g(k.ArrayContains, $, W, X);
    if ((0, B0.IsNumber)($.minContains) && Q < $.minContains)
      yield g(k.ArrayMinContains, $, W, X);
    if ((0, B0.IsNumber)($.maxContains) && Q > $.maxContains)
      yield g(k.ArrayMaxContains, $, W, X);
  }
  function* lZ($, Y, W, X) {
    if (!(0, B0.IsAsyncIterator)(X))
      yield g(k.AsyncIterator, $, W, X);
  }
  function* tZ($, Y, W, X) {
    if (!(0, B0.IsBigInt)(X))
      return yield g(k.BigInt, $, W, X);
    if (s($.exclusiveMaximum) && !(X < $.exclusiveMaximum))
      yield g(k.BigIntExclusiveMaximum, $, W, X);
    if (s($.exclusiveMinimum) && !(X > $.exclusiveMinimum))
      yield g(k.BigIntExclusiveMinimum, $, W, X);
    if (s($.maximum) && !(X <= $.maximum))
      yield g(k.BigIntMaximum, $, W, X);
    if (s($.minimum) && !(X >= $.minimum))
      yield g(k.BigIntMinimum, $, W, X);
    if (s($.multipleOf) && X % $.multipleOf !== BigInt(0))
      yield g(k.BigIntMultipleOf, $, W, X);
  }
  function* sZ($, Y, W, X) {
    if (!(0, B0.IsBoolean)(X))
      yield g(k.Boolean, $, W, X);
  }
  function* rZ($, Y, W, X) {
    yield* L0($.returns, Y, W, X.prototype);
  }
  function* aZ($, Y, W, X) {
    if (!(0, B0.IsDate)(X))
      return yield g(k.Date, $, W, X);
    if (s($.exclusiveMaximumTimestamp) && !(X.getTime() < $.exclusiveMaximumTimestamp))
      yield g(k.DateExclusiveMaximumTimestamp, $, W, X);
    if (s($.exclusiveMinimumTimestamp) && !(X.getTime() > $.exclusiveMinimumTimestamp))
      yield g(k.DateExclusiveMinimumTimestamp, $, W, X);
    if (s($.maximumTimestamp) && !(X.getTime() <= $.maximumTimestamp))
      yield g(k.DateMaximumTimestamp, $, W, X);
    if (s($.minimumTimestamp) && !(X.getTime() >= $.minimumTimestamp))
      yield g(k.DateMinimumTimestamp, $, W, X);
    if (s($.multipleOfTimestamp) && X.getTime() % $.multipleOfTimestamp !== 0)
      yield g(k.DateMultipleOfTimestamp, $, W, X);
  }
  function* eZ($, Y, W, X) {
    if (!(0, B0.IsFunction)(X))
      yield g(k.Function, $, W, X);
  }
  function* $Q($, Y, W, X) {
    if (!(0, B0.IsInteger)(X))
      return yield g(k.Integer, $, W, X);
    if (s($.exclusiveMaximum) && !(X < $.exclusiveMaximum))
      yield g(k.IntegerExclusiveMaximum, $, W, X);
    if (s($.exclusiveMinimum) && !(X > $.exclusiveMinimum))
      yield g(k.IntegerExclusiveMinimum, $, W, X);
    if (s($.maximum) && !(X <= $.maximum))
      yield g(k.IntegerMaximum, $, W, X);
    if (s($.minimum) && !(X >= $.minimum))
      yield g(k.IntegerMinimum, $, W, X);
    if (s($.multipleOf) && X % $.multipleOf !== 0)
      yield g(k.IntegerMultipleOf, $, W, X);
  }
  function* YQ($, Y, W, X) {
    for (let Z of $.allOf) {
      const Q = L0(Z, Y, W, X).next();
      if (!Q.done)
        yield g(k.Intersect, $, W, X), yield Q.value;
    }
    if ($.unevaluatedProperties === false) {
      const Z = new RegExp(i0.KeyResolver.ResolvePattern($));
      for (let Q of Object.getOwnPropertyNames(X))
        if (!Z.test(Q))
          yield g(k.IntersectUnevaluatedProperties, $, `${W}/${Q}`, X);
    }
    if (typeof $.unevaluatedProperties === "object") {
      const Z = new RegExp(i0.KeyResolver.ResolvePattern($));
      for (let Q of Object.getOwnPropertyNames(X))
        if (!Z.test(Q)) {
          const J = L0($.unevaluatedProperties, Y, `${W}/${Q}`, X[Q]).next();
          if (!J.done)
            yield J.value;
        }
    }
  }
  function* WQ($, Y, W, X) {
    if (!(0, B0.IsIterator)(X))
      yield g(k.Iterator, $, W, X);
  }
  function* XQ($, Y, W, X) {
    if (X !== $.const)
      yield g(k.Literal, $, W, X);
  }
  function* ZQ($, Y, W, X) {
    yield g(k.Never, $, W, X);
  }
  function* QQ($, Y, W, X) {
    if (L0($.not, Y, W, X).next().done === true)
      yield g(k.Not, $, W, X);
  }
  function* JQ($, Y, W, X) {
    if (!(0, B0.IsNull)(X))
      yield g(k.Null, $, W, X);
  }
  function* zQ($, Y, W, X) {
    if (!p1.TypeSystemPolicy.IsNumberLike(X))
      return yield g(k.Number, $, W, X);
    if (s($.exclusiveMaximum) && !(X < $.exclusiveMaximum))
      yield g(k.NumberExclusiveMaximum, $, W, X);
    if (s($.exclusiveMinimum) && !(X > $.exclusiveMinimum))
      yield g(k.NumberExclusiveMinimum, $, W, X);
    if (s($.maximum) && !(X <= $.maximum))
      yield g(k.NumberMaximum, $, W, X);
    if (s($.minimum) && !(X >= $.minimum))
      yield g(k.NumberMinimum, $, W, X);
    if (s($.multipleOf) && X % $.multipleOf !== 0)
      yield g(k.NumberMultipleOf, $, W, X);
  }
  function* HQ($, Y, W, X) {
    if (!p1.TypeSystemPolicy.IsObjectLike(X))
      return yield g(k.Object, $, W, X);
    if (s($.minProperties) && !(Object.getOwnPropertyNames(X).length >= $.minProperties))
      yield g(k.ObjectMinProperties, $, W, X);
    if (s($.maxProperties) && !(Object.getOwnPropertyNames(X).length <= $.maxProperties))
      yield g(k.ObjectMaxProperties, $, W, X);
    const Z = Array.isArray($.required) ? $.required : [], Q = Object.getOwnPropertyNames($.properties), J = Object.getOwnPropertyNames(X);
    for (let z of Z) {
      if (J.includes(z))
        continue;
      yield g(k.ObjectRequiredProperty, $.properties[z], `${W}/${z}`, undefined);
    }
    if ($.additionalProperties === false) {
      for (let z of J)
        if (!Q.includes(z))
          yield g(k.ObjectAdditionalProperties, $, `${W}/${z}`, X[z]);
    }
    if (typeof $.additionalProperties === "object")
      for (let z of J) {
        if (Q.includes(z))
          continue;
        yield* L0($.additionalProperties, Y, `${W}/${z}`, X[z]);
      }
    for (let z of Q) {
      const A = $.properties[z];
      if ($.required && $.required.includes(z)) {
        if (yield* L0(A, Y, `${W}/${z}`, X[z]), i0.ExtendsUndefined.Check($) && !(z in X))
          yield g(k.ObjectRequiredProperty, A, `${W}/${z}`, undefined);
      } else if (p1.TypeSystemPolicy.IsExactOptionalProperty(X, z))
        yield* L0(A, Y, `${W}/${z}`, X[z]);
    }
  }
  function* qQ($, Y, W, X) {
    if (!(0, B0.IsPromise)(X))
      yield g(k.Promise, $, W, X);
  }
  function* MQ($, Y, W, X) {
    if (!p1.TypeSystemPolicy.IsRecordLike(X))
      return yield g(k.Object, $, W, X);
    if (s($.minProperties) && !(Object.getOwnPropertyNames(X).length >= $.minProperties))
      yield g(k.ObjectMinProperties, $, W, X);
    if (s($.maxProperties) && !(Object.getOwnPropertyNames(X).length <= $.maxProperties))
      yield g(k.ObjectMaxProperties, $, W, X);
    const [Z, Q] = Object.entries($.patternProperties)[0], J = new RegExp(Z);
    for (let [z, A] of Object.entries(X))
      if (J.test(z))
        yield* L0(Q, Y, `${W}/${z}`, A);
    if (typeof $.additionalProperties === "object") {
      for (let [z, A] of Object.entries(X))
        if (!J.test(z))
          yield* L0($.additionalProperties, Y, `${W}/${z}`, A);
    }
    if ($.additionalProperties === false)
      for (let [z, A] of Object.entries(X)) {
        if (J.test(z))
          continue;
        return yield g(k.ObjectAdditionalProperties, $, `${W}/${z}`, A);
      }
  }
  function* NQ($, Y, W, X) {
    yield* L0((0, YY.Deref)($, Y), Y, W, X);
  }
  function* UQ($, Y, W, X) {
    if (!(0, B0.IsString)(X))
      return yield g(k.String, $, W, X);
    if (s($.minLength) && !(X.length >= $.minLength))
      yield g(k.StringMinLength, $, W, X);
    if (s($.maxLength) && !(X.length <= $.maxLength))
      yield g(k.StringMaxLength, $, W, X);
    if ((0, B0.IsString)($.pattern)) {
      if (!new RegExp($.pattern).test(X))
        yield g(k.StringPattern, $, W, X);
    }
    if ((0, B0.IsString)($.format)) {
      if (!i0.FormatRegistry.Has($.format))
        yield g(k.StringFormatUnknown, $, W, X);
      else if (!i0.FormatRegistry.Get($.format)(X))
        yield g(k.StringFormat, $, W, X);
    }
  }
  function* AQ($, Y, W, X) {
    if (!(0, B0.IsSymbol)(X))
      yield g(k.Symbol, $, W, X);
  }
  function* BQ($, Y, W, X) {
    if (!(0, B0.IsString)(X))
      return yield g(k.String, $, W, X);
    if (!new RegExp($.pattern).test(X))
      yield g(k.StringPattern, $, W, X);
  }
  function* FQ($, Y, W, X) {
    yield* L0((0, YY.Deref)($, Y), Y, W, X);
  }
  function* DQ($, Y, W, X) {
    if (!(0, B0.IsArray)(X))
      return yield g(k.Tuple, $, W, X);
    if ($.items === undefined && X.length !== 0)
      return yield g(k.TupleLength, $, W, X);
    if (X.length !== $.maxItems)
      return yield g(k.TupleLength, $, W, X);
    if (!$.items)
      return;
    for (let Z = 0;Z < $.items.length; Z++)
      yield* L0($.items[Z], Y, `${W}/${Z}`, X[Z]);
  }
  function* wQ($, Y, W, X) {
    if (!(0, B0.IsUndefined)(X))
      yield g(k.Undefined, $, W, X);
  }
  function* KQ($, Y, W, X) {
    let Z = 0;
    for (let Q of $.anyOf) {
      const J = [...L0(Q, Y, W, X)];
      if (J.length === 0)
        return;
      Z += J.length;
    }
    if (Z > 0)
      yield g(k.Union, $, W, X);
  }
  function* jQ($, Y, W, X) {
    if (!(0, B0.IsUint8Array)(X))
      return yield g(k.Uint8Array, $, W, X);
    if (s($.maxByteLength) && !(X.length <= $.maxByteLength))
      yield g(k.Uint8ArrayMaxByteLength, $, W, X);
    if (s($.minByteLength) && !(X.length >= $.minByteLength))
      yield g(k.Uint8ArrayMinByteLength, $, W, X);
  }
  function* PQ($, Y, W, X) {
  }
  function* OQ($, Y, W, X) {
    if (!p1.TypeSystemPolicy.IsVoidLike(X))
      yield g(k.Void, $, W, X);
  }
  function* SQ($, Y, W, X) {
    if (!i0.TypeRegistry.Get($[i0.Kind])($, X))
      yield g(k.Kind, $, W, X);
  }
  function* L0($, Y, W, X) {
    const Z = s($.$id) ? [...Y, $] : Y, Q = $;
    switch (Q[i0.Kind]) {
      case "Any":
        return yield* oZ(Q, Z, W, X);
      case "Array":
        return yield* cZ(Q, Z, W, X);
      case "AsyncIterator":
        return yield* lZ(Q, Z, W, X);
      case "BigInt":
        return yield* tZ(Q, Z, W, X);
      case "Boolean":
        return yield* sZ(Q, Z, W, X);
      case "Constructor":
        return yield* rZ(Q, Z, W, X);
      case "Date":
        return yield* aZ(Q, Z, W, X);
      case "Function":
        return yield* eZ(Q, Z, W, X);
      case "Integer":
        return yield* $Q(Q, Z, W, X);
      case "Intersect":
        return yield* YQ(Q, Z, W, X);
      case "Iterator":
        return yield* WQ(Q, Z, W, X);
      case "Literal":
        return yield* XQ(Q, Z, W, X);
      case "Never":
        return yield* ZQ(Q, Z, W, X);
      case "Not":
        return yield* QQ(Q, Z, W, X);
      case "Null":
        return yield* JQ(Q, Z, W, X);
      case "Number":
        return yield* zQ(Q, Z, W, X);
      case "Object":
        return yield* HQ(Q, Z, W, X);
      case "Promise":
        return yield* qQ(Q, Z, W, X);
      case "Record":
        return yield* MQ(Q, Z, W, X);
      case "Ref":
        return yield* NQ(Q, Z, W, X);
      case "String":
        return yield* UQ(Q, Z, W, X);
      case "Symbol":
        return yield* AQ(Q, Z, W, X);
      case "TemplateLiteral":
        return yield* BQ(Q, Z, W, X);
      case "This":
        return yield* FQ(Q, Z, W, X);
      case "Tuple":
        return yield* DQ(Q, Z, W, X);
      case "Undefined":
        return yield* wQ(Q, Z, W, X);
      case "Union":
        return yield* KQ(Q, Z, W, X);
      case "Uint8Array":
        return yield* jQ(Q, Z, W, X);
      case "Unknown":
        return yield* PQ(Q, Z, W, X);
      case "Void":
        return yield* OQ(Q, Z, W, X);
      default:
        if (!i0.TypeRegistry.Has(Q[i0.Kind]))
          throw new L8($);
        return yield* SQ(Q, Z, W, X);
    }
  }
  var LQ = function(...$) {
    const Y = $.length === 3 ? L0($[0], $[1], "", $[2]) : L0($[0], [], "", $[1]);
    return new C8(Y);
  };
  Object.defineProperty(WY, "__esModule", { value: true });
  WY.Errors = WY.ValueErrorIterator = WY.ValueErrorsUnknownTypeError = WY.ValueErrorType = undefined;
  var B0 = V0(), p1 = P8(), YY = D1(), nZ = W$(), i0 = f0(), k;
  (function($) {
    $[$.ArrayContains = 0] = "ArrayContains", $[$.ArrayMaxContains = 1] = "ArrayMaxContains", $[$.ArrayMaxItems = 2] = "ArrayMaxItems", $[$.ArrayMinContains = 3] = "ArrayMinContains", $[$.ArrayMinItems = 4] = "ArrayMinItems", $[$.ArrayUniqueItems = 5] = "ArrayUniqueItems", $[$.Array = 6] = "Array", $[$.AsyncIterator = 7] = "AsyncIterator", $[$.BigIntExclusiveMaximum = 8] = "BigIntExclusiveMaximum", $[$.BigIntExclusiveMinimum = 9] = "BigIntExclusiveMinimum", $[$.BigIntMaximum = 10] = "BigIntMaximum", $[$.BigIntMinimum = 11] = "BigIntMinimum", $[$.BigIntMultipleOf = 12] = "BigIntMultipleOf", $[$.BigInt = 13] = "BigInt", $[$.Boolean = 14] = "Boolean", $[$.DateExclusiveMaximumTimestamp = 15] = "DateExclusiveMaximumTimestamp", $[$.DateExclusiveMinimumTimestamp = 16] = "DateExclusiveMinimumTimestamp", $[$.DateMaximumTimestamp = 17] = "DateMaximumTimestamp", $[$.DateMinimumTimestamp = 18] = "DateMinimumTimestamp", $[$.DateMultipleOfTimestamp = 19] = "DateMultipleOfTimestamp", $[$.Date = 20] = "Date", $[$.Function = 21] = "Function", $[$.IntegerExclusiveMaximum = 22] = "IntegerExclusiveMaximum", $[$.IntegerExclusiveMinimum = 23] = "IntegerExclusiveMinimum", $[$.IntegerMaximum = 24] = "IntegerMaximum", $[$.IntegerMinimum = 25] = "IntegerMinimum", $[$.IntegerMultipleOf = 26] = "IntegerMultipleOf", $[$.Integer = 27] = "Integer", $[$.IntersectUnevaluatedProperties = 28] = "IntersectUnevaluatedProperties", $[$.Intersect = 29] = "Intersect", $[$.Iterator = 30] = "Iterator", $[$.Kind = 31] = "Kind", $[$.Literal = 32] = "Literal", $[$.Never = 33] = "Never", $[$.Not = 34] = "Not", $[$.Null = 35] = "Null", $[$.NumberExclusiveMaximum = 36] = "NumberExclusiveMaximum", $[$.NumberExclusiveMinimum = 37] = "NumberExclusiveMinimum", $[$.NumberMaximum = 38] = "NumberMaximum", $[$.NumberMinimum = 39] = "NumberMinimum", $[$.NumberMultipleOf = 40] = "NumberMultipleOf", $[$.Number = 41] = "Number", $[$.ObjectAdditionalProperties = 42] = "ObjectAdditionalProperties", $[$.ObjectMaxProperties = 43] = "ObjectMaxProperties", $[$.ObjectMinProperties = 44] = "ObjectMinProperties", $[$.ObjectRequiredProperty = 45] = "ObjectRequiredProperty", $[$.Object = 46] = "Object", $[$.Promise = 47] = "Promise", $[$.StringFormatUnknown = 48] = "StringFormatUnknown", $[$.StringFormat = 49] = "StringFormat", $[$.StringMaxLength = 50] = "StringMaxLength", $[$.StringMinLength = 51] = "StringMinLength", $[$.StringPattern = 52] = "StringPattern", $[$.String = 53] = "String", $[$.Symbol = 54] = "Symbol", $[$.TupleLength = 55] = "TupleLength", $[$.Tuple = 56] = "Tuple", $[$.Uint8ArrayMaxByteLength = 57] = "Uint8ArrayMaxByteLength", $[$.Uint8ArrayMinByteLength = 58] = "Uint8ArrayMinByteLength", $[$.Uint8Array = 59] = "Uint8Array", $[$.Undefined = 60] = "Undefined", $[$.Union = 61] = "Union", $[$.Void = 62] = "Void";
  })(k || (WY.ValueErrorType = k = {}));

  class L8 extends i0.TypeBoxError {
    constructor($) {
      super("Unknown type");
      this.schema = $;
    }
  }
  WY.ValueErrorsUnknownTypeError = L8;

  class C8 {
    constructor($) {
      this.iterator = $;
    }
    [Symbol.iterator]() {
      return this.iterator;
    }
    First() {
      const $ = this.iterator.next();
      return $.done ? undefined : $.value;
    }
  }
  WY.ValueErrorIterator = C8;
  WY.Errors = LQ;
});
var I$ = J0((O1) => {
  var GQ = O1 && O1.__createBinding || (Object.create ? function($, Y, W, X) {
    if (X === undefined)
      X = W;
    var Z = Object.getOwnPropertyDescriptor(Y, W);
    if (!Z || ("get" in Z ? !Y.__esModule : Z.writable || Z.configurable))
      Z = { enumerable: true, get: function() {
        return Y[W];
      } };
    Object.defineProperty($, X, Z);
  } : function($, Y, W, X) {
    if (X === undefined)
      X = W;
    $[X] = Y[W];
  }), RQ = O1 && O1.__exportStar || function($, Y) {
    for (var W in $)
      if (W !== "default" && !Object.prototype.hasOwnProperty.call(Y, W))
        GQ(Y, $, W);
  };
  Object.defineProperty(O1, "__esModule", { value: true });
  RQ(Y$(), O1);
});
var b$ = J0((QY) => {
  Object.defineProperty(QY, "__esModule", { value: true });
  QY.ValuePointer = QY.ValuePointerRootDeleteError = QY.ValuePointerRootSetError = undefined;

  class I8 extends Error {
    constructor($, Y, W) {
      super("Cannot set root value");
      this.value = $, this.path = Y, this.update = W;
    }
  }
  QY.ValuePointerRootSetError = I8;

  class b8 extends Error {
    constructor($, Y) {
      super("Cannot delete root value");
      this.value = $, this.path = Y;
    }
  }
  QY.ValuePointerRootDeleteError = b8;
  var ZY;
  (function($) {
    function Y(z) {
      return z.indexOf("~") === -1 ? z : z.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    function* W(z) {
      if (z === "")
        return;
      let [A, F] = [0, 0];
      for (let w = 0;w < z.length; w++)
        if (z.charAt(w) === "/")
          if (w === 0)
            A = w + 1;
          else
            F = w, yield Y(z.slice(A, F)), A = w + 1;
        else
          F = w;
      yield Y(z.slice(A));
    }
    $.Format = W;
    function X(z, A, F) {
      if (A === "")
        throw new I8(z, A, F);
      let [w, K, b] = [null, z, ""];
      for (let O of W(A)) {
        if (K[O] === undefined)
          K[O] = {};
        w = K, K = K[O], b = O;
      }
      w[b] = F;
    }
    $.Set = X;
    function Z(z, A) {
      if (A === "")
        throw new b8(z, A);
      let [F, w, K] = [null, z, ""];
      for (let b of W(A)) {
        if (w[b] === undefined || w[b] === null)
          return;
        F = w, w = w[b], K = b;
      }
      if (Array.isArray(F)) {
        const b = parseInt(K);
        F.splice(b, 1);
      } else
        delete F[K];
    }
    $.Delete = Z;
    function Q(z, A) {
      if (A === "")
        return true;
      let [F, w, K] = [null, z, ""];
      for (let b of W(A)) {
        if (w[b] === undefined)
          return false;
        F = w, w = w[b], K = b;
      }
      return Object.getOwnPropertyNames(F).includes(K);
    }
    $.Has = Q;
    function J(z, A) {
      if (A === "")
        return z;
      let F = z;
      for (let w of W(A)) {
        if (F[w] === undefined)
          return;
        F = F[w];
      }
      return F;
    }
    $.Get = J;
  })(ZY || (QY.ValuePointer = ZY = {}));
});
var i1 = J0((zY) => {
  var VQ = function($) {
    return [...Object.getOwnPropertyNames($), ...Object.getOwnPropertySymbols($)].reduce((W, X) => ({ ...W, [X]: G8($[X]) }), {});
  }, xQ = function($) {
    return $.map((Y) => G8(Y));
  }, kQ = function($) {
    return $.slice();
  }, gQ = function($) {
    return new Date($.toISOString());
  }, fQ = function($) {
    return $;
  }, G8 = function($) {
    if ((0, X$.IsArray)($))
      return xQ($);
    if ((0, X$.IsDate)($))
      return gQ($);
    if ((0, X$.IsPlainObject)($))
      return VQ($);
    if ((0, X$.IsTypedArray)($))
      return kQ($);
    if ((0, X$.IsValueType)($))
      return fQ($);
    throw new Error("ValueClone: Unable to clone value");
  };
  Object.defineProperty(zY, "__esModule", { value: true });
  zY.Clone = undefined;
  var X$ = V0();
  zY.Clone = G8;
});
var V8 = J0((NY) => {
  var Z$ = function($, Y) {
    return { type: "update", path: $, value: Y };
  }, qY = function($, Y) {
    return { type: "insert", path: $, value: Y };
  }, MY = function($) {
    return { type: "delete", path: $ };
  };
  function* TQ($, Y, W) {
    if (!(0, R0.IsPlainObject)(W))
      return yield Z$($, W);
    const X = [...Object.keys(Y), ...Object.getOwnPropertySymbols(Y)], Z = [...Object.keys(W), ...Object.getOwnPropertySymbols(W)];
    for (let Q of X) {
      if ((0, R0.IsSymbol)(Q))
        throw new m1(Q);
      if ((0, R0.IsUndefined)(W[Q]) && Z.includes(Q))
        yield Z$(`${$}/${String(Q)}`, undefined);
    }
    for (let Q of Z) {
      if ((0, R0.IsUndefined)(Y[Q]) || (0, R0.IsUndefined)(W[Q]))
        continue;
      if ((0, R0.IsSymbol)(Q))
        throw new m1(Q);
      yield* G$(`${$}/${String(Q)}`, Y[Q], W[Q]);
    }
    for (let Q of Z) {
      if ((0, R0.IsSymbol)(Q))
        throw new m1(Q);
      if ((0, R0.IsUndefined)(Y[Q]))
        yield qY(`${$}/${String(Q)}`, W[Q]);
    }
    for (let Q of X.reverse()) {
      if ((0, R0.IsSymbol)(Q))
        throw new m1(Q);
      if ((0, R0.IsUndefined)(W[Q]) && !Z.includes(Q))
        yield MY(`${$}/${String(Q)}`);
    }
  }
  function* dQ($, Y, W) {
    if (!(0, R0.IsArray)(W))
      return yield Z$($, W);
    for (let X = 0;X < Math.min(Y.length, W.length); X++)
      yield* G$(`${$}/${X}`, Y[X], W[X]);
    for (let X = 0;X < W.length; X++) {
      if (X < Y.length)
        continue;
      yield qY(`${$}/${X}`, W[X]);
    }
    for (let X = Y.length - 1;X >= 0; X--) {
      if (X < W.length)
        continue;
      yield MY(`${$}/${X}`);
    }
  }
  function* yQ($, Y, W) {
    if (!(0, R0.IsTypedArray)(W) || Y.length !== W.length || Object.getPrototypeOf(Y).constructor.name !== Object.getPrototypeOf(W).constructor.name)
      return yield Z$($, W);
    for (let X = 0;X < Math.min(Y.length, W.length); X++)
      yield* G$(`${$}/${X}`, Y[X], W[X]);
  }
  function* vQ($, Y, W) {
    if (Y === W)
      return;
    yield Z$($, W);
  }
  function* G$($, Y, W) {
    if ((0, R0.IsPlainObject)(Y))
      return yield* TQ($, Y, W);
    if ((0, R0.IsArray)(Y))
      return yield* dQ($, Y, W);
    if ((0, R0.IsTypedArray)(Y))
      return yield* yQ($, Y, W);
    if ((0, R0.IsValueType)(Y))
      return yield* vQ($, Y, W);
    throw new E8(Y);
  }
  var pQ = function($, Y) {
    return [...G$("", $, Y)];
  }, iQ = function($) {
    return $.length > 0 && $[0].path === "" && $[0].type === "update";
  }, mQ = function($) {
    return $.length === 0;
  }, uQ = function($, Y) {
    if (iQ(Y))
      return (0, _8.Clone)(Y[0].value);
    if (mQ(Y))
      return (0, _8.Clone)($);
    const W = (0, _8.Clone)($);
    for (let X of Y)
      switch (X.type) {
        case "insert": {
          R8.ValuePointer.Set(W, X.path, X.value);
          break;
        }
        case "update": {
          R8.ValuePointer.Set(W, X.path, X.value);
          break;
        }
        case "delete": {
          R8.ValuePointer.Delete(W, X.path);
          break;
        }
      }
    return W;
  };
  Object.defineProperty(NY, "__esModule", { value: true });
  NY.Patch = NY.Diff = NY.ValueDeltaUnableToDiffUnknownValue = NY.ValueDeltaObjectWithSymbolKeyError = NY.Edit = NY.Delete = NY.Update = NY.Insert = undefined;
  var R0 = V0(), m0 = f0(), R8 = b$(), _8 = i1();
  NY.Insert = m0.Type.Object({ type: m0.Type.Literal("insert"), path: m0.Type.String(), value: m0.Type.Unknown() });
  NY.Update = m0.Type.Object({ type: m0.Type.Literal("update"), path: m0.Type.String(), value: m0.Type.Unknown() });
  NY.Delete = m0.Type.Object({ type: m0.Type.Literal("delete"), path: m0.Type.String() });
  NY.Edit = m0.Type.Union([NY.Insert, NY.Update, NY.Delete]);

  class m1 extends Error {
    constructor($) {
      super("Cannot diff objects with symbol keys");
      this.key = $;
    }
  }
  NY.ValueDeltaObjectWithSymbolKeyError = m1;

  class E8 extends Error {
    constructor($) {
      super("Unable to create diff edits for unknown value");
      this.value = $;
    }
  }
  NY.ValueDeltaUnableToDiffUnknownValue = E8;
  NY.Diff = pQ;
  NY.Patch = uQ;
});
var jY = J0((wY) => {
  var lQ = function($, Y, W, X) {
    if (!(0, d0.IsPlainObject)(W))
      R$.ValuePointer.Set($, Y, (0, x8.Clone)(X));
    else {
      const Z = Object.keys(W), Q = Object.keys(X);
      for (let J of Z)
        if (!Q.includes(J))
          delete W[J];
      for (let J of Q)
        if (!Z.includes(J))
          W[J] = null;
      for (let J of Q)
        f8($, `${Y}/${J}`, W[J], X[J]);
    }
  }, tQ = function($, Y, W, X) {
    if (!(0, d0.IsArray)(W))
      R$.ValuePointer.Set($, Y, (0, x8.Clone)(X));
    else {
      for (let Z = 0;Z < X.length; Z++)
        f8($, `${Y}/${Z}`, W[Z], X[Z]);
      W.splice(X.length);
    }
  }, sQ = function($, Y, W, X) {
    if ((0, d0.IsTypedArray)(W) && W.length === X.length)
      for (let Z = 0;Z < W.length; Z++)
        W[Z] = X[Z];
    else
      R$.ValuePointer.Set($, Y, (0, x8.Clone)(X));
  }, rQ = function($, Y, W, X) {
    if (W === X)
      return;
    R$.ValuePointer.Set($, Y, X);
  }, f8 = function($, Y, W, X) {
    if ((0, d0.IsArray)(X))
      return tQ($, Y, W, X);
    if ((0, d0.IsTypedArray)(X))
      return sQ($, Y, W, X);
    if ((0, d0.IsPlainObject)(X))
      return lQ($, Y, W, X);
    if ((0, d0.IsValueType)(X))
      return rQ($, Y, W, X);
  }, DY = function($) {
    return (0, d0.IsTypedArray)($) || (0, d0.IsValueType)($);
  }, aQ = function($, Y) {
    return (0, d0.IsPlainObject)($) && (0, d0.IsArray)(Y) || (0, d0.IsArray)($) && (0, d0.IsPlainObject)(Y);
  }, eQ = function($, Y) {
    if (DY($) || DY(Y))
      throw new g8;
    if (aQ($, Y))
      throw new k8;
    f8($, "", $, Y);
  };
  Object.defineProperty(wY, "__esModule", { value: true });
  wY.Mutate = wY.ValueMutateInvalidRootMutationError = wY.ValueMutateTypeMismatchError = undefined;
  var d0 = V0(), R$ = b$(), x8 = i1();

  class k8 extends Error {
    constructor() {
      super("Cannot assign due type mismatch of assignable values");
    }
  }
  wY.ValueMutateTypeMismatchError = k8;

  class g8 extends Error {
    constructor() {
      super("Only object and array types can be mutated at the root level");
    }
  }
  wY.ValueMutateInvalidRootMutationError = g8;
  wY.Mutate = eQ;
});
var SY = J0((PY) => {
  var W4 = function($, Y) {
    if (!(0, J1.IsPlainObject)(Y))
      return false;
    const W = [...Object.keys($), ...Object.getOwnPropertySymbols($)], X = [...Object.keys(Y), ...Object.getOwnPropertySymbols(Y)];
    if (W.length !== X.length)
      return false;
    return W.every((Z) => _$($[Z], Y[Z]));
  }, X4 = function($, Y) {
    return (0, J1.IsDate)(Y) && $.getTime() === Y.getTime();
  }, Z4 = function($, Y) {
    if (!(0, J1.IsArray)(Y) || $.length !== Y.length)
      return false;
    return $.every((W, X) => _$(W, Y[X]));
  }, Q4 = function($, Y) {
    if (!(0, J1.IsTypedArray)(Y) || $.length !== Y.length || Object.getPrototypeOf($).constructor.name !== Object.getPrototypeOf(Y).constructor.name)
      return false;
    return $.every((W, X) => _$(W, Y[X]));
  }, J4 = function($, Y) {
    return $ === Y;
  }, _$ = function($, Y) {
    if ((0, J1.IsPlainObject)($))
      return W4($, Y);
    if ((0, J1.IsDate)($))
      return X4($, Y);
    if ((0, J1.IsTypedArray)($))
      return Q4($, Y);
    if ((0, J1.IsArray)($))
      return Z4($, Y);
    if ((0, J1.IsValueType)($))
      return J4($, Y);
    throw new Error("ValueEquals: Unable to compare value");
  };
  Object.defineProperty(PY, "__esModule", { value: true });
  PY.Equal = undefined;
  var J1 = V0();
  PY.Equal = _$;
});
var E$ = J0((z1) => {
  var z4 = z1 && z1.__createBinding || (Object.create ? function($, Y, W, X) {
    if (X === undefined)
      X = W;
    var Z = Object.getOwnPropertyDescriptor(Y, W);
    if (!Z || ("get" in Z ? !Y.__esModule : Z.writable || Z.configurable))
      Z = { enumerable: true, get: function() {
        return Y[W];
      } };
    Object.defineProperty($, X, Z);
  } : function($, Y, W, X) {
    if (X === undefined)
      X = W;
    $[X] = Y[W];
  }), H4 = z1 && z1.__exportStar || function($, Y) {
    for (var W in $)
      if (W !== "default" && !Object.prototype.hasOwnProperty.call(Y, W))
        z4(Y, $, W);
  };
  Object.defineProperty(z1, "__esModule", { value: true });
  z1.ValueErrorType = undefined;
  var q4 = Y$();
  Object.defineProperty(z1, "ValueErrorType", { enumerable: true, get: function() {
    return q4.ValueErrorType;
  } });
  H4(P8(), z1);
});
var J$ = J0((CY) => {
  var N4 = function($) {
    return $[C0.Kind] === "Any" || $[C0.Kind] === "Unknown";
  }, r = function($) {
    return $ !== undefined;
  }, U4 = function($, Y, W) {
    return true;
  }, A4 = function($, Y, W) {
    if (!(0, F0.IsArray)(W))
      return false;
    if (r($.minItems) && !(W.length >= $.minItems))
      return false;
    if (r($.maxItems) && !(W.length <= $.maxItems))
      return false;
    if (!W.every((Q) => I0($.items, Y, Q)))
      return false;
    if ($.uniqueItems === true && !function() {
      const Q = new Set;
      for (let J of W) {
        const z = (0, M4.Hash)(J);
        if (Q.has(z))
          return false;
        else
          Q.add(z);
      }
      return true;
    }())
      return false;
    if (!(r($.contains) || (0, F0.IsNumber)($.minContains) || (0, F0.IsNumber)($.maxContains)))
      return true;
    const X = r($.contains) ? $.contains : C0.Type.Never(), Z = W.reduce((Q, J) => I0(X, Y, J) ? Q + 1 : Q, 0);
    if (Z === 0)
      return false;
    if ((0, F0.IsNumber)($.minContains) && Z < $.minContains)
      return false;
    if ((0, F0.IsNumber)($.maxContains) && Z > $.maxContains)
      return false;
    return true;
  }, B4 = function($, Y, W) {
    return (0, F0.IsAsyncIterator)(W);
  }, F4 = function($, Y, W) {
    if (!(0, F0.IsBigInt)(W))
      return false;
    if (r($.exclusiveMaximum) && !(W < $.exclusiveMaximum))
      return false;
    if (r($.exclusiveMinimum) && !(W > $.exclusiveMinimum))
      return false;
    if (r($.maximum) && !(W <= $.maximum))
      return false;
    if (r($.minimum) && !(W >= $.minimum))
      return false;
    if (r($.multipleOf) && W % $.multipleOf !== BigInt(0))
      return false;
    return true;
  }, D4 = function($, Y, W) {
    return (0, F0.IsBoolean)(W);
  }, w4 = function($, Y, W) {
    return I0($.returns, Y, W.prototype);
  }, K4 = function($, Y, W) {
    if (!(0, F0.IsDate)(W))
      return false;
    if (r($.exclusiveMaximumTimestamp) && !(W.getTime() < $.exclusiveMaximumTimestamp))
      return false;
    if (r($.exclusiveMinimumTimestamp) && !(W.getTime() > $.exclusiveMinimumTimestamp))
      return false;
    if (r($.maximumTimestamp) && !(W.getTime() <= $.maximumTimestamp))
      return false;
    if (r($.minimumTimestamp) && !(W.getTime() >= $.minimumTimestamp))
      return false;
    if (r($.multipleOfTimestamp) && W.getTime() % $.multipleOfTimestamp !== 0)
      return false;
    return true;
  }, j4 = function($, Y, W) {
    return (0, F0.IsFunction)(W);
  }, P4 = function($, Y, W) {
    if (!(0, F0.IsInteger)(W))
      return false;
    if (r($.exclusiveMaximum) && !(W < $.exclusiveMaximum))
      return false;
    if (r($.exclusiveMinimum) && !(W > $.exclusiveMinimum))
      return false;
    if (r($.maximum) && !(W <= $.maximum))
      return false;
    if (r($.minimum) && !(W >= $.minimum))
      return false;
    if (r($.multipleOf) && W % $.multipleOf !== 0)
      return false;
    return true;
  }, O4 = function($, Y, W) {
    const X = $.allOf.every((Z) => I0(Z, Y, W));
    if ($.unevaluatedProperties === false) {
      const Z = new RegExp(C0.KeyResolver.ResolvePattern($)), Q = Object.getOwnPropertyNames(W).every((J) => Z.test(J));
      return X && Q;
    } else if (C0.TypeGuard.TSchema($.unevaluatedProperties)) {
      const Z = new RegExp(C0.KeyResolver.ResolvePattern($)), Q = Object.getOwnPropertyNames(W).every((J) => Z.test(J) || I0($.unevaluatedProperties, Y, W[J]));
      return X && Q;
    } else
      return X;
  }, S4 = function($, Y, W) {
    return (0, F0.IsIterator)(W);
  }, L4 = function($, Y, W) {
    return W === $.const;
  }, C4 = function($, Y, W) {
    return false;
  }, I4 = function($, Y, W) {
    return !I0($.not, Y, W);
  }, b4 = function($, Y, W) {
    return (0, F0.IsNull)(W);
  }, G4 = function($, Y, W) {
    if (!Q$.TypeSystemPolicy.IsNumberLike(W))
      return false;
    if (r($.exclusiveMaximum) && !(W < $.exclusiveMaximum))
      return false;
    if (r($.exclusiveMinimum) && !(W > $.exclusiveMinimum))
      return false;
    if (r($.minimum) && !(W >= $.minimum))
      return false;
    if (r($.maximum) && !(W <= $.maximum))
      return false;
    if (r($.multipleOf) && W % $.multipleOf !== 0)
      return false;
    return true;
  }, R4 = function($, Y, W) {
    if (!Q$.TypeSystemPolicy.IsObjectLike(W))
      return false;
    if (r($.minProperties) && !(Object.getOwnPropertyNames(W).length >= $.minProperties))
      return false;
    if (r($.maxProperties) && !(Object.getOwnPropertyNames(W).length <= $.maxProperties))
      return false;
    const X = Object.getOwnPropertyNames($.properties);
    for (let Z of X) {
      const Q = $.properties[Z];
      if ($.required && $.required.includes(Z)) {
        if (!I0(Q, Y, W[Z]))
          return false;
        if ((C0.ExtendsUndefined.Check(Q) || N4(Q)) && !(Z in W))
          return false;
      } else if (Q$.TypeSystemPolicy.IsExactOptionalProperty(W, Z) && !I0(Q, Y, W[Z]))
        return false;
    }
    if ($.additionalProperties === false) {
      const Z = Object.getOwnPropertyNames(W);
      if ($.required && $.required.length === X.length && Z.length === X.length)
        return true;
      else
        return Z.every((Q) => X.includes(Q));
    } else if (typeof $.additionalProperties === "object")
      return Object.getOwnPropertyNames(W).every((Q) => X.includes(Q) || I0($.additionalProperties, Y, W[Q]));
    else
      return true;
  }, _4 = function($, Y, W) {
    return (0, F0.IsPromise)(W);
  }, E4 = function($, Y, W) {
    if (!Q$.TypeSystemPolicy.IsRecordLike(W))
      return false;
    if (r($.minProperties) && !(Object.getOwnPropertyNames(W).length >= $.minProperties))
      return false;
    if (r($.maxProperties) && !(Object.getOwnPropertyNames(W).length <= $.maxProperties))
      return false;
    const [X, Z] = Object.entries($.patternProperties)[0], Q = new RegExp(X), J = Object.entries(W).every(([F, w]) => {
      return Q.test(F) ? I0(Z, Y, w) : true;
    }), z = typeof $.additionalProperties === "object" ? Object.entries(W).every(([F, w]) => {
      return !Q.test(F) ? I0($.additionalProperties, Y, w) : true;
    }) : true, A = $.additionalProperties === false ? Object.getOwnPropertyNames(W).every((F) => {
      return Q.test(F);
    }) : true;
    return J && z && A;
  }, V4 = function($, Y, W) {
    return I0((0, LY.Deref)($, Y), Y, W);
  }, x4 = function($, Y, W) {
    if (!(0, F0.IsString)(W))
      return false;
    if (r($.minLength)) {
      if (!(W.length >= $.minLength))
        return false;
    }
    if (r($.maxLength)) {
      if (!(W.length <= $.maxLength))
        return false;
    }
    if (r($.pattern)) {
      if (!new RegExp($.pattern).test(W))
        return false;
    }
    if (r($.format)) {
      if (!C0.FormatRegistry.Has($.format))
        return false;
      return C0.FormatRegistry.Get($.format)(W);
    }
    return true;
  }, k4 = function($, Y, W) {
    return (0, F0.IsSymbol)(W);
  }, g4 = function($, Y, W) {
    return (0, F0.IsString)(W) && new RegExp($.pattern).test(W);
  }, f4 = function($, Y, W) {
    return I0((0, LY.Deref)($, Y), Y, W);
  }, T4 = function($, Y, W) {
    if (!(0, F0.IsArray)(W))
      return false;
    if ($.items === undefined && W.length !== 0)
      return false;
    if (W.length !== $.maxItems)
      return false;
    if (!$.items)
      return true;
    for (let X = 0;X < $.items.length; X++)
      if (!I0($.items[X], Y, W[X]))
        return false;
    return true;
  }, d4 = function($, Y, W) {
    return (0, F0.IsUndefined)(W);
  }, y4 = function($, Y, W) {
    return $.anyOf.some((X) => I0(X, Y, W));
  }, v4 = function($, Y, W) {
    if (!(0, F0.IsUint8Array)(W))
      return false;
    if (r($.maxByteLength) && !(W.length <= $.maxByteLength))
      return false;
    if (r($.minByteLength) && !(W.length >= $.minByteLength))
      return false;
    return true;
  }, p4 = function($, Y, W) {
    return true;
  }, i4 = function($, Y, W) {
    return Q$.TypeSystemPolicy.IsVoidLike(W);
  }, m4 = function($, Y, W) {
    if (!C0.TypeRegistry.Has($[C0.Kind]))
      return false;
    return C0.TypeRegistry.Get($[C0.Kind])($, W);
  }, I0 = function($, Y, W) {
    const X = r($.$id) ? [...Y, $] : Y, Z = $;
    switch (Z[C0.Kind]) {
      case "Any":
        return U4(Z, X, W);
      case "Array":
        return A4(Z, X, W);
      case "AsyncIterator":
        return B4(Z, X, W);
      case "BigInt":
        return F4(Z, X, W);
      case "Boolean":
        return D4(Z, X, W);
      case "Constructor":
        return w4(Z, X, W);
      case "Date":
        return K4(Z, X, W);
      case "Function":
        return j4(Z, X, W);
      case "Integer":
        return P4(Z, X, W);
      case "Intersect":
        return O4(Z, X, W);
      case "Iterator":
        return S4(Z, X, W);
      case "Literal":
        return L4(Z, X, W);
      case "Never":
        return C4(Z, X, W);
      case "Not":
        return I4(Z, X, W);
      case "Null":
        return b4(Z, X, W);
      case "Number":
        return G4(Z, X, W);
      case "Object":
        return R4(Z, X, W);
      case "Promise":
        return _4(Z, X, W);
      case "Record":
        return E4(Z, X, W);
      case "Ref":
        return V4(Z, X, W);
      case "String":
        return x4(Z, X, W);
      case "Symbol":
        return k4(Z, X, W);
      case "TemplateLiteral":
        return g4(Z, X, W);
      case "This":
        return f4(Z, X, W);
      case "Tuple":
        return T4(Z, X, W);
      case "Undefined":
        return d4(Z, X, W);
      case "Union":
        return y4(Z, X, W);
      case "Uint8Array":
        return v4(Z, X, W);
      case "Unknown":
        return p4(Z, X, W);
      case "Void":
        return i4(Z, X, W);
      default:
        if (!C0.TypeRegistry.Has(Z[C0.Kind]))
          throw new T8(Z);
        return m4(Z, X, W);
    }
  }, u4 = function(...$) {
    return $.length === 3 ? I0($[0], $[1], $[2]) : I0($[0], [], $[1]);
  };
  Object.defineProperty(CY, "__esModule", { value: true });
  CY.Check = CY.ValueCheckUnknownTypeError = undefined;
  var F0 = V0(), Q$ = E$(), LY = D1(), M4 = W$(), C0 = f0();

  class T8 extends C0.TypeBoxError {
    constructor($) {
      super("Unknown type");
      this.schema = $;
    }
  }
  CY.ValueCheckUnknownTypeError = T8;
  CY.Check = u4;
});
var u8 = J0((_Y) => {
  var o4 = function($, Y) {
    if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    else
      return {};
  }, c4 = function($, Y) {
    if ($.uniqueItems === true && !(0, e.HasPropertyKey)($, "default"))
      throw new Error("ValueCreate.Array: Array with the uniqueItems constraint requires a default value");
    else if (("contains" in $) && !(0, e.HasPropertyKey)($, "default"))
      throw new Error("ValueCreate.Array: Array with the contains constraint requires a default value");
    else if ("default" in $)
      return $.default;
    else if ($.minItems !== undefined)
      return Array.from({ length: $.minItems }).map((W) => {
        return y0($.items, Y);
      });
    else
      return [];
  }, l4 = function($, Y) {
    if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    else
      return async function* () {
      }();
  }, t4 = function($, Y) {
    if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    else
      return BigInt(0);
  }, s4 = function($, Y) {
    if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    else
      return false;
  }, r4 = function($, Y) {
    if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    else {
      const W = y0($.returns, Y);
      if (typeof W === "object" && !Array.isArray(W))
        return class {
          constructor() {
            for (let [X, Z] of Object.entries(W)) {
              const Q = this;
              Q[X] = Z;
            }
          }
        };
      else
        return class {
        };
    }
  }, a4 = function($, Y) {
    if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    else if ($.minimumTimestamp !== undefined)
      return new Date($.minimumTimestamp);
    else
      return new Date(0);
  }, e4 = function($, Y) {
    if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    else
      return () => y0($.returns, Y);
  }, $J = function($, Y) {
    if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    else if ($.minimum !== undefined)
      return $.minimum;
    else
      return 0;
  }, YJ = function($, Y) {
    if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    else {
      const W = $.allOf.reduce((X, Z) => {
        const Q = y0(Z, Y);
        return typeof Q === "object" ? { ...X, ...Q } : Q;
      }, {});
      if (!(0, n4.Check)($, Y, W))
        throw new p8($);
      return W;
    }
  }, WJ = function($, Y) {
    if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    else
      return function* () {
      }();
  }, XJ = function($, Y) {
    if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    else
      return $.const;
  }, ZJ = function($, Y) {
    throw new y8($);
  }, QJ = function($, Y) {
    if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    else
      throw new v8($);
  }, JJ = function($, Y) {
    if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    else
      return null;
  }, zJ = function($, Y) {
    if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    else if ($.minimum !== undefined)
      return $.minimum;
    else
      return 0;
  }, HJ = function($, Y) {
    if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    else {
      const W = new Set($.required);
      return $.default || Object.entries($.properties).reduce((X, [Z, Q]) => {
        return W.has(Z) ? { ...X, [Z]: y0(Q, Y) } : { ...X };
      }, {});
    }
  }, qJ = function($, Y) {
    if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    else
      return Promise.resolve(y0($.item, Y));
  }, MJ = function($, Y) {
    const [W, X] = Object.entries($.patternProperties)[0];
    if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    else if (!(W === x0.PatternStringExact || W === x0.PatternNumberExact))
      return W.slice(1, W.length - 1).split("|").reduce((Q, J) => {
        return { ...Q, [J]: y0(X, Y) };
      }, {});
    else
      return {};
  }, NJ = function($, Y) {
    if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    else
      return y0((0, GY.Deref)($, Y), Y);
  }, UJ = function($, Y) {
    if ($.pattern !== undefined)
      if (!(0, e.HasPropertyKey)($, "default"))
        throw new Error("ValueCreate.String: String types with patterns must specify a default value");
      else
        return $.default;
    else if ($.format !== undefined)
      if (!(0, e.HasPropertyKey)($, "default"))
        throw new Error("ValueCreate.String: String types with formats must specify a default value");
      else
        return $.default;
    else if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    else if ($.minLength !== undefined)
      return Array.from({ length: $.minLength }).map(() => ".").join("");
    else
      return "";
  }, AJ = function($, Y) {
    if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    else if ("value" in $)
      return Symbol.for($.value);
    else
      return Symbol();
  }, BJ = function($, Y) {
    if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    const W = x0.TemplateLiteralParser.ParseExact($.pattern);
    if (!x0.TemplateLiteralFinite.Check(W))
      throw new i8($);
    return x0.TemplateLiteralGenerator.Generate(W).next().value;
  }, FJ = function($, Y) {
    if (RY++ > bY)
      throw new m8($, bY);
    if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    else
      return y0((0, GY.Deref)($, Y), Y);
  }, DJ = function($, Y) {
    if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    if ($.items === undefined)
      return [];
    else
      return Array.from({ length: $.minItems }).map((W, X) => y0($.items[X], Y));
  }, wJ = function($, Y) {
    if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    else
      return;
  }, KJ = function($, Y) {
    if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    else if ($.anyOf.length === 0)
      throw new Error("ValueCreate.Union: Cannot create Union with zero variants");
    else
      return y0($.anyOf[0], Y);
  }, jJ = function($, Y) {
    if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    else if ($.minByteLength !== undefined)
      return new Uint8Array($.minByteLength);
    else
      return new Uint8Array(0);
  }, PJ = function($, Y) {
    if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    else
      return {};
  }, OJ = function($, Y) {
    if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    else
      return;
  }, SJ = function($, Y) {
    if ((0, e.HasPropertyKey)($, "default"))
      return $.default;
    else
      throw new Error("User defined types must specify a default value");
  }, y0 = function($, Y) {
    const W = (0, e.IsString)($.$id) ? [...Y, $] : Y, X = $;
    switch (X[x0.Kind]) {
      case "Any":
        return o4(X, W);
      case "Array":
        return c4(X, W);
      case "AsyncIterator":
        return l4(X, W);
      case "BigInt":
        return t4(X, W);
      case "Boolean":
        return s4(X, W);
      case "Constructor":
        return r4(X, W);
      case "Date":
        return a4(X, W);
      case "Function":
        return e4(X, W);
      case "Integer":
        return $J(X, W);
      case "Intersect":
        return YJ(X, W);
      case "Iterator":
        return WJ(X, W);
      case "Literal":
        return XJ(X, W);
      case "Never":
        return ZJ(X, W);
      case "Not":
        return QJ(X, W);
      case "Null":
        return JJ(X, W);
      case "Number":
        return zJ(X, W);
      case "Object":
        return HJ(X, W);
      case "Promise":
        return qJ(X, W);
      case "Record":
        return MJ(X, W);
      case "Ref":
        return NJ(X, W);
      case "String":
        return UJ(X, W);
      case "Symbol":
        return AJ(X, W);
      case "TemplateLiteral":
        return BJ(X, W);
      case "This":
        return FJ(X, W);
      case "Tuple":
        return DJ(X, W);
      case "Undefined":
        return wJ(X, W);
      case "Union":
        return KJ(X, W);
      case "Uint8Array":
        return jJ(X, W);
      case "Unknown":
        return PJ(X, W);
      case "Void":
        return OJ(X, W);
      default:
        if (!x0.TypeRegistry.Has(X[x0.Kind]))
          throw new d8(X);
        return SJ(X, W);
    }
  }, LJ = function(...$) {
    return RY = 0, $.length === 2 ? y0($[0], $[1]) : y0($[0], []);
  };
  Object.defineProperty(_Y, "__esModule", { value: true });
  _Y.Create = _Y.ValueCreateRecursiveInstantiationError = _Y.ValueCreateTempateLiteralTypeError = _Y.ValueCreateIntersectTypeError = _Y.ValueCreateNotTypeError = _Y.ValueCreateNeverTypeError = _Y.ValueCreateUnknownTypeError = undefined;
  var e = V0(), n4 = J$(), GY = D1(), x0 = f0();

  class d8 extends x0.TypeBoxError {
    constructor($) {
      super("Unknown type");
      this.schema = $;
    }
  }
  _Y.ValueCreateUnknownTypeError = d8;

  class y8 extends x0.TypeBoxError {
    constructor($) {
      super("Never types cannot be created");
      this.schema = $;
    }
  }
  _Y.ValueCreateNeverTypeError = y8;

  class v8 extends x0.TypeBoxError {
    constructor($) {
      super("Not types must have a default value");
      this.schema = $;
    }
  }
  _Y.ValueCreateNotTypeError = v8;

  class p8 extends x0.TypeBoxError {
    constructor($) {
      super("Intersect produced invalid value. Consider using a default value.");
      this.schema = $;
    }
  }
  _Y.ValueCreateIntersectTypeError = p8;

  class i8 extends x0.TypeBoxError {
    constructor($) {
      super("Can only create template literal values from patterns that produce finite sequences. Consider using a default value.");
      this.schema = $;
    }
  }
  _Y.ValueCreateTempateLiteralTypeError = i8;

  class m8 extends x0.TypeBoxError {
    constructor($, Y) {
      super("Value cannot be created as recursive type may produce value of infinite size. Consider using a default.");
      this.schema = $, this.recursiveMaxDepth = Y;
    }
  }
  _Y.ValueCreateRecursiveInstantiationError = m8;
  var bY = 512, RY = 0;
  _Y.Create = LJ;
});
var dY = J0((fY) => {
  var kY = function($, Y, W) {
    return (0, u0.Check)($, Y, W) ? (0, u1.Clone)(W) : (0, q1.Create)($, Y);
  }, n8 = function($, Y, W) {
    return (0, u0.Check)($, Y, W) ? W : (0, q1.Create)($, Y);
  }, EJ = function($, Y, W) {
    if ((0, u0.Check)($, Y, W))
      return (0, u1.Clone)(W);
    const X = (0, w1.IsArray)(W) ? (0, u1.Clone)(W) : (0, q1.Create)($, Y), Z = (0, w1.IsNumber)($.minItems) && X.length < $.minItems ? [...X, ...Array.from({ length: $.minItems - X.length }, () => null)] : X, J = ((0, w1.IsNumber)($.maxItems) && Z.length > $.maxItems ? Z.slice(0, $.maxItems) : Z).map((A) => $1($.items, Y, A));
    if ($.uniqueItems !== true)
      return J;
    const z = [...new Set(J)];
    if (!(0, u0.Check)($, Y, z))
      throw new o8($, z);
    return z;
  }, VJ = function($, Y, W) {
    if ((0, u0.Check)($, Y, W))
      return (0, q1.Create)($, Y);
    const X = new Set($.returns.required || []), Z = function() {
    };
    for (let [Q, J] of Object.entries($.returns.properties)) {
      if (!X.has(Q) && W.prototype[Q] === undefined)
        continue;
      Z.prototype[Q] = $1(J, Y, W.prototype[Q]);
    }
    return Z;
  }, xJ = function($, Y, W) {
    const X = (0, q1.Create)($, Y), Z = (0, w1.IsPlainObject)(X) && (0, w1.IsPlainObject)(W) ? { ...X, ...W } : W;
    return (0, u0.Check)($, Y, Z) ? Z : (0, q1.Create)($, Y);
  }, kJ = function($, Y, W) {
    throw new c8($);
  }, gJ = function($, Y, W) {
    if ((0, u0.Check)($, Y, W))
      return W;
    if (W === null || typeof W !== "object")
      return (0, q1.Create)($, Y);
    const X = new Set($.required || []), Z = {};
    for (let [Q, J] of Object.entries($.properties)) {
      if (!X.has(Q) && W[Q] === undefined)
        continue;
      Z[Q] = $1(J, Y, W[Q]);
    }
    if (typeof $.additionalProperties === "object") {
      const Q = Object.getOwnPropertyNames($.properties);
      for (let J of Object.getOwnPropertyNames(W)) {
        if (Q.includes(J))
          continue;
        Z[J] = $1($.additionalProperties, Y, W[J]);
      }
    }
    return Z;
  }, fJ = function($, Y, W) {
    if ((0, u0.Check)($, Y, W))
      return (0, u1.Clone)(W);
    if (W === null || typeof W !== "object" || Array.isArray(W) || W instanceof Date)
      return (0, q1.Create)($, Y);
    const X = Object.getOwnPropertyNames($.patternProperties)[0], Z = $.patternProperties[X], Q = {};
    for (let [J, z] of Object.entries(W))
      Q[J] = $1(Z, Y, z);
    return Q;
  }, TJ = function($, Y, W) {
    return $1((0, VY.Deref)($, Y), Y, W);
  }, dJ = function($, Y, W) {
    return $1((0, VY.Deref)($, Y), Y, W);
  }, yJ = function($, Y, W) {
    if ((0, u0.Check)($, Y, W))
      return (0, u1.Clone)(W);
    if (!(0, w1.IsArray)(W))
      return (0, q1.Create)($, Y);
    if ($.items === undefined)
      return [];
    return $.items.map((X, Z) => $1(X, Y, W[Z]));
  }, vJ = function($, Y, W) {
    return (0, u0.Check)($, Y, W) ? (0, u1.Clone)(W) : h8.Create($, Y, W);
  }, $1 = function($, Y, W) {
    const X = (0, w1.IsString)($.$id) ? [...Y, $] : Y, Z = $;
    switch ($[H1.Kind]) {
      case "Array":
        return EJ(Z, X, W);
      case "Constructor":
        return VJ(Z, X, W);
      case "Intersect":
        return xJ(Z, X, W);
      case "Never":
        return kJ(Z, X, W);
      case "Object":
        return gJ(Z, X, W);
      case "Record":
        return fJ(Z, X, W);
      case "Ref":
        return TJ(Z, X, W);
      case "This":
        return dJ(Z, X, W);
      case "Tuple":
        return yJ(Z, X, W);
      case "Union":
        return vJ(Z, X, W);
      case "Date":
      case "Symbol":
      case "Uint8Array":
        return kY($, Y, W);
      case "Any":
      case "AsyncIterator":
      case "BigInt":
      case "Boolean":
      case "Function":
      case "Integer":
      case "Iterator":
      case "Literal":
      case "Not":
      case "Null":
      case "Number":
      case "Promise":
      case "String":
      case "TemplateLiteral":
      case "Undefined":
      case "Unknown":
      case "Void":
        return n8(Z, X, W);
      default:
        if (!H1.TypeRegistry.Has(Z[H1.Kind]))
          throw new l8(Z);
        return n8(Z, X, W);
    }
  }, gY = function(...$) {
    return $.length === 3 ? $1($[0], $[1], $[2]) : $1($[0], [], $[1]);
  };
  Object.defineProperty(fY, "__esModule", { value: true });
  fY.Cast = fY.Default = fY.DefaultClone = fY.ValueCastUnknownTypeError = fY.ValueCastRecursiveTypeError = fY.ValueCastNeverTypeError = fY.ValueCastArrayUniqueItemsTypeError = undefined;
  var w1 = V0(), q1 = u8(), u0 = J$(), u1 = i1(), VY = D1(), H1 = f0();

  class o8 extends H1.TypeBoxError {
    constructor($, Y) {
      super("Array cast produced invalid data due to uniqueItems constraint");
      this.schema = $, this.value = Y;
    }
  }
  fY.ValueCastArrayUniqueItemsTypeError = o8;

  class c8 extends H1.TypeBoxError {
    constructor($) {
      super("Never types cannot be cast");
      this.schema = $;
    }
  }
  fY.ValueCastNeverTypeError = c8;

  class xY extends H1.TypeBoxError {
    constructor($) {
      super("Cannot cast recursive schemas");
      this.schema = $;
    }
  }
  fY.ValueCastRecursiveTypeError = xY;

  class l8 extends H1.TypeBoxError {
    constructor($) {
      super("Unknown type");
      this.schema = $;
    }
  }
  fY.ValueCastUnknownTypeError = l8;
  var h8;
  (function($) {
    function Y(Z, Q, J) {
      if (Z[H1.Kind] === "Object" && typeof J === "object" && !(0, w1.IsNull)(J)) {
        const z = Z, A = Object.getOwnPropertyNames(J), F = Object.entries(z.properties), [w, K] = [1 / F.length, F.length];
        return F.reduce((b, [O, N]) => {
          const L = N[H1.Kind] === "Literal" && N.const === J[O] ? K : 0, j = (0, u0.Check)(N, Q, J[O]) ? w : 0, U = A.includes(O) ? w : 0;
          return b + (L + j + U);
        }, 0);
      } else
        return (0, u0.Check)(Z, Q, J) ? 1 : 0;
    }
    function W(Z, Q, J) {
      let [z, A] = [Z.anyOf[0], 0];
      for (let F of Z.anyOf) {
        const w = Y(F, Q, J);
        if (w > A)
          z = F, A = w;
      }
      return z;
    }
    function X(Z, Q, J) {
      if ("default" in Z)
        return Z.default;
      else {
        const z = W(Z, Q, J);
        return gY(z, Q, J);
      }
    }
    $.Create = X;
  })(h8 || (h8 = {}));
  fY.DefaultClone = kY;
  fY.Default = n8;
  fY.Cast = gY;
});
var hY = J0((mY) => {
  var V$ = function($) {
    return (0, Z0.IsString)($) && !isNaN($) && !isNaN(parseFloat($));
  }, lJ = function($) {
    return (0, Z0.IsBigInt)($) || (0, Z0.IsBoolean)($) || (0, Z0.IsNumber)($);
  }, z$ = function($) {
    return $ === true || (0, Z0.IsNumber)($) && $ === 1 || (0, Z0.IsBigInt)($) && $ === BigInt("1") || (0, Z0.IsString)($) && ($.toLowerCase() === "true" || $ === "1");
  }, H$ = function($) {
    return $ === false || (0, Z0.IsNumber)($) && ($ === 0 || Object.is($, -0)) || (0, Z0.IsBigInt)($) && $ === BigInt("0") || (0, Z0.IsString)($) && ($.toLowerCase() === "false" || $ === "0" || $ === "-0");
  }, tJ = function($) {
    return (0, Z0.IsString)($) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test($);
  }, sJ = function($) {
    return (0, Z0.IsString)($) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test($);
  }, rJ = function($) {
    return (0, Z0.IsString)($) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test($);
  }, aJ = function($) {
    return (0, Z0.IsString)($) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test($);
  }, eJ = function($) {
    return (0, Z0.IsString)($) && /^\d\d\d\d-[0-1]\d-[0-3]\d$/i.test($);
  }, $9 = function($, Y) {
    const W = pY($);
    return W === Y ? W : $;
  }, Y9 = function($, Y) {
    const W = iY($);
    return W === Y ? W : $;
  }, W9 = function($, Y) {
    const W = vY($);
    return W === Y ? W : $;
  }, X9 = function($, Y) {
    if (typeof $.const === "string")
      return $9(Y, $.const);
    else if (typeof $.const === "number")
      return Y9(Y, $.const);
    else if (typeof $.const === "boolean")
      return W9(Y, $.const);
    else
      return (0, oJ.Clone)(Y);
  }, vY = function($) {
    return z$($) ? true : H$($) ? false : $;
  }, Z9 = function($) {
    return V$($) ? BigInt(parseInt($)) : (0, Z0.IsNumber)($) ? BigInt($ | 0) : H$($) ? BigInt(0) : z$($) ? BigInt(1) : $;
  }, pY = function($) {
    return lJ($) ? $.toString() : (0, Z0.IsSymbol)($) && $.description !== undefined ? $.description.toString() : $;
  }, iY = function($) {
    return V$($) ? parseFloat($) : z$($) ? 1 : H$($) ? 0 : $;
  }, Q9 = function($) {
    return V$($) ? parseInt($) : (0, Z0.IsNumber)($) ? $ | 0 : z$($) ? 1 : H$($) ? 0 : $;
  }, J9 = function($) {
    return (0, Z0.IsString)($) && $.toLowerCase() === "null" ? null : $;
  }, z9 = function($) {
    return (0, Z0.IsString)($) && $ === "undefined" ? undefined : $;
  }, H9 = function($) {
    return (0, Z0.IsDate)($) ? $ : (0, Z0.IsNumber)($) ? new Date($) : z$($) ? new Date(1) : H$($) ? new Date(0) : V$($) ? new Date(parseInt($)) : sJ($) ? new Date(`1970-01-01T${$}.000Z`) : tJ($) ? new Date(`1970-01-01T${$}`) : aJ($) ? new Date(`${$}.000Z`) : rJ($) ? new Date($) : eJ($) ? new Date(`${$}T00:00:00.000Z`) : $;
  }, t8 = function($) {
    return $;
  }, q9 = function($, Y, W) {
    if ((0, Z0.IsArray)(W))
      return W.map((X) => c0($.items, Y, X));
    return W;
  }, M9 = function($, Y, W) {
    return Z9(W);
  }, N9 = function($, Y, W) {
    return vY(W);
  }, U9 = function($, Y, W) {
    return H9(W);
  }, A9 = function($, Y, W) {
    return Q9(W);
  }, B9 = function($, Y, W) {
    return $.allOf.every((X) => h1.TypeGuard.TObject(X)) ? c0(h1.Type.Composite($.allOf), Y, W) : c0($.allOf[0], Y, W);
  }, F9 = function($, Y, W) {
    return X9($, W);
  }, D9 = function($, Y, W) {
    return J9(W);
  }, w9 = function($, Y, W) {
    return iY(W);
  }, K9 = function($, Y, W) {
    if ((0, Z0.IsObject)(W))
      return Object.getOwnPropertyNames($.properties).reduce((X, Z) => {
        return W[Z] !== undefined ? { ...X, [Z]: c0($.properties[Z], Y, W[Z]) } : { ...X };
      }, W);
    return W;
  }, j9 = function($, Y, W) {
    const X = Object.getOwnPropertyNames($.patternProperties)[0], Z = $.patternProperties[X], Q = {};
    for (let [J, z] of Object.entries(W))
      Q[J] = c0(Z, Y, z);
    return Q;
  }, P9 = function($, Y, W) {
    return c0((0, yY.Deref)($, Y), Y, W);
  }, O9 = function($, Y, W) {
    return pY(W);
  }, S9 = function($, Y, W) {
    return (0, Z0.IsString)(W) || (0, Z0.IsNumber)(W) ? Symbol(W) : W;
  }, L9 = function($, Y, W) {
    return c0((0, yY.Deref)($, Y), Y, W);
  }, C9 = function($, Y, W) {
    if ((0, Z0.IsArray)(W) && !(0, Z0.IsUndefined)($.items))
      return W.map((X, Z) => {
        return Z < $.items.length ? c0($.items[Z], Y, X) : X;
      });
    return W;
  }, I9 = function($, Y, W) {
    return z9(W);
  }, b9 = function($, Y, W) {
    for (let X of $.anyOf) {
      const Z = c0(X, Y, W);
      if ((0, cJ.Check)(X, Y, Z))
        return Z;
    }
    return W;
  }, c0 = function($, Y, W) {
    const X = (0, Z0.IsString)($.$id) ? [...Y, $] : Y, Z = $;
    switch ($[h1.Kind]) {
      case "Array":
        return q9(Z, X, W);
      case "BigInt":
        return M9(Z, X, W);
      case "Boolean":
        return N9(Z, X, W);
      case "Date":
        return U9(Z, X, W);
      case "Integer":
        return A9(Z, X, W);
      case "Intersect":
        return B9(Z, X, W);
      case "Literal":
        return F9(Z, X, W);
      case "Null":
        return D9(Z, X, W);
      case "Number":
        return w9(Z, X, W);
      case "Object":
        return K9(Z, X, W);
      case "Record":
        return j9(Z, X, W);
      case "Ref":
        return P9(Z, X, W);
      case "String":
        return O9(Z, X, W);
      case "Symbol":
        return S9(Z, X, W);
      case "This":
        return L9(Z, X, W);
      case "Tuple":
        return C9(Z, X, W);
      case "Undefined":
        return I9(Z, X, W);
      case "Union":
        return b9(Z, X, W);
      case "Any":
      case "AsyncIterator":
      case "Constructor":
      case "Function":
      case "Iterator":
      case "Never":
      case "Promise":
      case "TemplateLiteral":
      case "Uint8Array":
      case "Unknown":
      case "Void":
        return t8(W);
      default:
        if (!h1.TypeRegistry.Has(Z[h1.Kind]))
          throw new s8(Z);
        return t8(W);
    }
  }, G9 = function(...$) {
    return $.length === 3 ? c0($[0], $[1], $[2]) : c0($[0], [], $[1]);
  };
  Object.defineProperty(mY, "__esModule", { value: true });
  mY.Convert = mY.Default = mY.ValueConvertUnknownTypeError = undefined;
  var Z0 = V0(), oJ = i1(), cJ = J$(), yY = D1(), h1 = f0();

  class s8 extends h1.TypeBoxError {
    constructor($) {
      super("Unknown type");
      this.schema = $;
    }
  }
  mY.ValueConvertUnknownTypeError = s8;
  mY.Default = t8;
  mY.Convert = G9;
});
var e8 = J0((sY) => {
  Object.defineProperty(sY, "__esModule", { value: true });
  sY.EncodeTransform = sY.DecodeTransform = sY.HasTransform = sY.TransformEncodeError = sY.TransformDecodeError = sY.TransformEncodeCheckError = sY.TransformDecodeCheckError = sY.TransformUnknownTypeError = undefined;
  var l0 = V0(), n1 = D1(), h = f0();

  class q$ extends h.TypeBoxError {
    constructor($) {
      super("Unknown type");
      this.schema = $;
    }
  }
  sY.TransformUnknownTypeError = q$;

  class lY extends h.TypeBoxError {
    constructor($, Y, W) {
      super("Unable to decode due to invalid value");
      this.schema = $, this.value = Y, this.error = W;
    }
  }
  sY.TransformDecodeCheckError = lY;

  class tY extends h.TypeBoxError {
    constructor($, Y, W) {
      super("Unable to encode due to invalid value");
      this.schema = $, this.value = Y, this.error = W;
    }
  }
  sY.TransformEncodeCheckError = tY;

  class r8 extends h.TypeBoxError {
    constructor($, Y, W) {
      super(`${W instanceof Error ? W.message : "Unknown error"}`);
      this.schema = $, this.value = Y;
    }
  }
  sY.TransformDecodeError = r8;

  class a8 extends h.TypeBoxError {
    constructor($, Y, W) {
      super(`${W instanceof Error ? W.message : "Unknown error"}`);
      this.schema = $, this.value = Y;
    }
  }
  sY.TransformEncodeError = a8;
  var nY;
  (function($) {
    function Y(D, I) {
      return h.TypeGuard.TTransform(D) || L(D.items, I);
    }
    function W(D, I) {
      return h.TypeGuard.TTransform(D) || L(D.items, I);
    }
    function X(D, I) {
      return h.TypeGuard.TTransform(D) || L(D.returns, I) || D.parameters.some((G) => L(G, I));
    }
    function Z(D, I) {
      return h.TypeGuard.TTransform(D) || L(D.returns, I) || D.parameters.some((G) => L(G, I));
    }
    function Q(D, I) {
      return h.TypeGuard.TTransform(D) || h.TypeGuard.TTransform(D.unevaluatedProperties) || D.allOf.some((G) => L(G, I));
    }
    function J(D, I) {
      return h.TypeGuard.TTransform(D) || L(D.items, I);
    }
    function z(D, I) {
      return h.TypeGuard.TTransform(D) || L(D.not, I);
    }
    function A(D, I) {
      return h.TypeGuard.TTransform(D) || Object.values(D.properties).some((G) => L(G, I)) || h.TypeGuard.TSchema(D.additionalProperties) && L(D.additionalProperties, I);
    }
    function F(D, I) {
      return h.TypeGuard.TTransform(D) || L(D.item, I);
    }
    function w(D, I) {
      const G = Object.getOwnPropertyNames(D.patternProperties)[0], V = D.patternProperties[G];
      return h.TypeGuard.TTransform(D) || L(V, I) || h.TypeGuard.TSchema(D.additionalProperties) && h.TypeGuard.TTransform(D.additionalProperties);
    }
    function K(D, I) {
      if (h.TypeGuard.TTransform(D))
        return true;
      return L((0, n1.Deref)(D, I), I);
    }
    function b(D, I) {
      if (h.TypeGuard.TTransform(D))
        return true;
      return L((0, n1.Deref)(D, I), I);
    }
    function O(D, I) {
      return h.TypeGuard.TTransform(D) || h.TypeGuard.TSchema(D.items) && D.items.some((G) => L(G, I));
    }
    function N(D, I) {
      return h.TypeGuard.TTransform(D) || D.anyOf.some((G) => L(G, I));
    }
    function L(D, I) {
      const G = (0, l0.IsString)(D.$id) ? [...I, D] : I, V = D;
      if (D.$id && j.has(D.$id))
        return false;
      if (D.$id)
        j.add(D.$id);
      switch (D[h.Kind]) {
        case "Array":
          return Y(V, G);
        case "AsyncIterator":
          return W(V, G);
        case "Constructor":
          return X(V, G);
        case "Function":
          return Z(V, G);
        case "Intersect":
          return Q(V, G);
        case "Iterator":
          return J(V, G);
        case "Not":
          return z(V, G);
        case "Object":
          return A(V, G);
        case "Promise":
          return F(V, G);
        case "Record":
          return w(V, G);
        case "Ref":
          return K(V, G);
        case "This":
          return b(V, G);
        case "Tuple":
          return O(V, G);
        case "Union":
          return N(V, G);
        case "Any":
        case "BigInt":
        case "Boolean":
        case "Date":
        case "Integer":
        case "Literal":
        case "Never":
        case "Null":
        case "Number":
        case "String":
        case "Symbol":
        case "TemplateLiteral":
        case "Undefined":
        case "Uint8Array":
        case "Unknown":
        case "Void":
          return h.TypeGuard.TTransform(D);
        default:
          if (!h.TypeRegistry.Has(V[h.Kind]))
            throw new q$(V);
          return h.TypeGuard.TTransform(D);
      }
    }
    const j = new Set;
    function U(D, I) {
      return j.clear(), L(D, I);
    }
    $.Has = U;
  })(nY || (sY.HasTransform = nY = {}));
  var oY;
  (function($) {
    function Y(N, L) {
      try {
        return h.TypeGuard.TTransform(N) ? N[h.Transform].Decode(L) : L;
      } catch (j) {
        throw new r8(N, L, j);
      }
    }
    function W(N, L, j) {
      const U = j.map((D) => K(N.items, L, D));
      return Y(N, U);
    }
    function X(N, L, j) {
      if (!(0, l0.IsPlainObject)(j) || (0, l0.IsValueType)(j))
        return Y(N, j);
      const U = h.KeyResolver.ResolveKeys(N, { includePatterns: false }), D = Object.entries(j).reduce((G, [V, R]) => {
        return !U.includes(V) ? { ...G, [V]: R } : { ...G, [V]: Y(h.IndexedAccessor.Resolve(N, [V]), R) };
      }, {});
      if (!h.TypeGuard.TTransform(N.unevaluatedProperties))
        return Y(N, D);
      const I = Object.entries(D).reduce((G, [V, R]) => {
        return U.includes(V) ? { ...G, [V]: R } : { ...G, [V]: Y(N.unevaluatedProperties, R) };
      }, {});
      return Y(N, I);
    }
    function Z(N, L, j) {
      const U = K(N.not, L, j);
      return Y(N, U);
    }
    function Q(N, L, j) {
      if (!(0, l0.IsPlainObject)(j))
        return Y(N, j);
      const U = Object.entries(j).reduce((G, [V, R]) => {
        return !(V in N.properties) ? { ...G, [V]: R } : { ...G, [V]: K(N.properties[V], L, R) };
      }, {});
      if (!h.TypeGuard.TSchema(N.additionalProperties))
        return Y(N, U);
      const D = N.additionalProperties, I = Object.entries(U).reduce((G, [V, R]) => {
        return V in N.properties ? { ...G, [V]: R } : { ...G, [V]: K(D, L, R) };
      }, {});
      return Y(N, I);
    }
    function J(N, L, j) {
      if (!(0, l0.IsPlainObject)(j))
        return Y(N, j);
      const U = Object.getOwnPropertyNames(N.patternProperties)[0], D = N.patternProperties[U], I = new RegExp(U), G = Object.entries(j).reduce((n, [o, $0]) => {
        return !I.test(o) ? { ...n, [o]: $0 } : { ...n, [o]: K(D, L, $0) };
      }, {});
      if (!h.TypeGuard.TSchema(N.additionalProperties))
        return Y(N, G);
      const V = N.additionalProperties, R = Object.entries(G).reduce((n, [o, $0]) => {
        return I.test(o) ? { ...n, [o]: $0 } : { ...n, [o]: K(V, L, $0) };
      }, {});
      return Y(N, R);
    }
    function z(N, L, j) {
      const U = (0, n1.Deref)(N, L), D = K(U, L, j);
      return Y(N, D);
    }
    function A(N, L, j) {
      const U = (0, n1.Deref)(N, L), D = K(U, L, j);
      return Y(N, D);
    }
    function F(N, L, j) {
      const U = (0, l0.IsArray)(N.items) ? N.items.map((D, I) => K(D, L, j[I])) : [];
      return Y(N, U);
    }
    function w(N, L, j) {
      const U = Y(N, j);
      for (let D of N.anyOf) {
        if (!b(D, L, U))
          continue;
        return K(D, L, U);
      }
      return U;
    }
    function K(N, L, j) {
      const U = typeof N.$id === "string" ? [...L, N] : L, D = N;
      switch (N[h.Kind]) {
        case "Array":
          return W(D, U, j);
        case "Intersect":
          return X(D, U, j);
        case "Not":
          return Z(D, U, j);
        case "Object":
          return Q(D, U, j);
        case "Record":
          return J(D, U, j);
        case "Ref":
          return z(D, U, j);
        case "Symbol":
          return Y(D, j);
        case "This":
          return A(D, U, j);
        case "Tuple":
          return F(D, U, j);
        case "Union":
          return w(D, U, j);
        case "Any":
        case "AsyncIterator":
        case "BigInt":
        case "Boolean":
        case "Constructor":
        case "Date":
        case "Function":
        case "Integer":
        case "Iterator":
        case "Literal":
        case "Never":
        case "Null":
        case "Number":
        case "Promise":
        case "String":
        case "TemplateLiteral":
        case "Undefined":
        case "Uint8Array":
        case "Unknown":
        case "Void":
          return Y(D, j);
        default:
          if (!h.TypeRegistry.Has(D[h.Kind]))
            throw new q$(D);
          return Y(D, j);
      }
    }
    let b = () => false;
    function O(N, L, j, U) {
      return b = U, K(N, L, j);
    }
    $.Decode = O;
  })(oY || (sY.DecodeTransform = oY = {}));
  var cY;
  (function($) {
    function Y(N, L) {
      try {
        return h.TypeGuard.TTransform(N) ? N[h.Transform].Encode(L) : L;
      } catch (j) {
        throw new a8(N, L, j);
      }
    }
    function W(N, L, j) {
      return Y(N, j).map((D) => K(N.items, L, D));
    }
    function X(N, L, j) {
      const U = Y(N, j);
      if (!(0, l0.IsPlainObject)(j) || (0, l0.IsValueType)(j))
        return U;
      const D = h.KeyResolver.ResolveKeys(N, { includePatterns: false }), I = Object.entries(U).reduce((G, [V, R]) => {
        return !D.includes(V) ? { ...G, [V]: R } : { ...G, [V]: Y(h.IndexedAccessor.Resolve(N, [V]), R) };
      }, {});
      if (!h.TypeGuard.TTransform(N.unevaluatedProperties))
        return Y(N, I);
      return Object.entries(I).reduce((G, [V, R]) => {
        return D.includes(V) ? { ...G, [V]: R } : { ...G, [V]: Y(N.unevaluatedProperties, R) };
      }, {});
    }
    function Z(N, L, j) {
      const U = Y(N, j);
      return Y(N.not, U);
    }
    function Q(N, L, j) {
      const U = Y(N, j);
      if (!(0, l0.IsPlainObject)(j))
        return U;
      const D = Object.entries(U).reduce((G, [V, R]) => {
        return !(V in N.properties) ? { ...G, [V]: R } : { ...G, [V]: K(N.properties[V], L, R) };
      }, {});
      if (!h.TypeGuard.TSchema(N.additionalProperties))
        return D;
      const I = N.additionalProperties;
      return Object.entries(D).reduce((G, [V, R]) => {
        return V in N.properties ? { ...G, [V]: R } : { ...G, [V]: K(I, L, R) };
      }, {});
    }
    function J(N, L, j) {
      const U = Y(N, j);
      if (!(0, l0.IsPlainObject)(j))
        return U;
      const D = Object.getOwnPropertyNames(N.patternProperties)[0], I = N.patternProperties[D], G = new RegExp(D), V = Object.entries(U).reduce((n, [o, $0]) => {
        return !G.test(o) ? { ...n, [o]: $0 } : { ...n, [o]: K(I, L, $0) };
      }, {});
      if (!h.TypeGuard.TSchema(N.additionalProperties))
        return Y(N, V);
      const R = N.additionalProperties;
      return Object.entries(V).reduce((n, [o, $0]) => {
        return G.test(o) ? { ...n, [o]: $0 } : { ...n, [o]: K(R, L, $0) };
      }, {});
    }
    function z(N, L, j) {
      const U = (0, n1.Deref)(N, L), D = K(U, L, j);
      return Y(N, D);
    }
    function A(N, L, j) {
      const U = (0, n1.Deref)(N, L), D = K(U, L, j);
      return Y(N, D);
    }
    function F(N, L, j) {
      const U = Y(N, j);
      return (0, l0.IsArray)(N.items) ? N.items.map((D, I) => K(D, L, U[I])) : [];
    }
    function w(N, L, j) {
      for (let U of N.anyOf) {
        if (!b(U, L, j))
          continue;
        const D = K(U, L, j);
        return Y(N, D);
      }
      return Y(N, j);
    }
    function K(N, L, j) {
      const U = typeof N.$id === "string" ? [...L, N] : L, D = N;
      switch (N[h.Kind]) {
        case "Array":
          return W(D, U, j);
        case "Intersect":
          return X(D, U, j);
        case "Not":
          return Z(D, U, j);
        case "Object":
          return Q(D, U, j);
        case "Record":
          return J(D, U, j);
        case "Ref":
          return z(D, U, j);
        case "This":
          return A(D, U, j);
        case "Tuple":
          return F(D, U, j);
        case "Union":
          return w(D, U, j);
        case "Any":
        case "AsyncIterator":
        case "BigInt":
        case "Boolean":
        case "Constructor":
        case "Date":
        case "Function":
        case "Integer":
        case "Iterator":
        case "Literal":
        case "Never":
        case "Null":
        case "Number":
        case "Promise":
        case "String":
        case "Symbol":
        case "TemplateLiteral":
        case "Undefined":
        case "Uint8Array":
        case "Unknown":
        case "Void":
          return Y(D, j);
        default:
          if (!h.TypeRegistry.Has(D[h.Kind]))
            throw new q$(D);
          return Y(D, j);
      }
    }
    let b = () => false;
    function O(N, L, j, U) {
      return b = U, K(N, L, j);
    }
    $.Encode = O;
  })(cY || (sY.EncodeTransform = cY = {}));
});
var JW = J0((ZW) => {
  Object.defineProperty(ZW, "__esModule", { value: true });
  ZW.Value = undefined;
  var aY = I$(), d9 = jY(), y9 = W$(), v9 = SY(), eY = dY(), p9 = i1(), $W = hY(), YW = u8(), x$ = J$(), WW = V8(), k$ = e8(), XW;
  (function($) {
    function Y(...N) {
      return eY.Cast.apply(eY, N);
    }
    $.Cast = Y;
    function W(...N) {
      return YW.Create.apply(YW, N);
    }
    $.Create = W;
    function X(...N) {
      return x$.Check.apply(x$, N);
    }
    $.Check = X;
    function Z(...N) {
      return $W.Convert.apply($W, N);
    }
    $.Convert = Z;
    function Q(N) {
      return p9.Clone(N);
    }
    $.Clone = Q;
    function J(...N) {
      const [L, j, U] = N.length === 3 ? [N[0], N[1], N[2]] : [N[0], [], N[1]];
      if (!X(L, j, U))
        throw new k$.TransformDecodeCheckError(L, U, A(L, j, U).First());
      return k$.DecodeTransform.Decode(L, j, U, x$.Check);
    }
    $.Decode = J;
    function z(...N) {
      const [L, j, U] = N.length === 3 ? [N[0], N[1], N[2]] : [N[0], [], N[1]], D = k$.EncodeTransform.Encode(L, j, U, x$.Check);
      if (!X(L, j, D))
        throw new k$.TransformEncodeCheckError(L, U, A(L, j, U).First());
      return D;
    }
    $.Encode = z;
    function A(...N) {
      return aY.Errors.apply(aY, N);
    }
    $.Errors = A;
    function F(N, L) {
      return v9.Equal(N, L);
    }
    $.Equal = F;
    function w(N, L) {
      return WW.Diff(N, L);
    }
    $.Diff = w;
    function K(N) {
      return y9.Hash(N);
    }
    $.Hash = K;
    function b(N, L) {
      return WW.Patch(N, L);
    }
    $.Patch = b;
    function O(N, L) {
      d9.Mutate(N, L);
    }
    $.Mutate = O;
  })(XW || (ZW.Value = XW = {}));
});
var $6 = J0((Y1) => {
  Object.defineProperty(Y1, "__esModule", { value: true });
  Y1.Value = Y1.ValuePointer = Y1.Delete = Y1.Update = Y1.Insert = Y1.Edit = Y1.ValueErrorIterator = Y1.ValueErrorType = undefined;
  var zW = I$();
  Object.defineProperty(Y1, "ValueErrorType", { enumerable: true, get: function() {
    return zW.ValueErrorType;
  } });
  Object.defineProperty(Y1, "ValueErrorIterator", { enumerable: true, get: function() {
    return zW.ValueErrorIterator;
  } });
  var g$ = V8();
  Object.defineProperty(Y1, "Edit", { enumerable: true, get: function() {
    return g$.Edit;
  } });
  Object.defineProperty(Y1, "Insert", { enumerable: true, get: function() {
    return g$.Insert;
  } });
  Object.defineProperty(Y1, "Update", { enumerable: true, get: function() {
    return g$.Update;
  } });
  Object.defineProperty(Y1, "Delete", { enumerable: true, get: function() {
    return g$.Delete;
  } });
  var i9 = b$();
  Object.defineProperty(Y1, "ValuePointer", { enumerable: true, get: function() {
    return i9.ValuePointer;
  } });
  var m9 = JW();
  Object.defineProperty(Y1, "Value", { enumerable: true, get: function() {
    return m9.Value;
  } });
});
var AW = J0((NW) => {
  Object.defineProperty(NW, "__esModule", { value: true });
  NW.TypeCompiler = NW.Policy = NW.TypeCompilerTypeGuardError = NW.TypeCompilerUnknownTypeError = NW.TypeCheck = undefined;
  var U$ = e8(), c = V0(), r9 = Y$(), A$ = E$(), a9 = D1(), e9 = W$(), U0 = f0();

  class Q6 {
    constructor($, Y, W, X) {
      this.schema = $, this.references = Y, this.checkFunc = W, this.code = X, this.hasTransform = U$.HasTransform.Has($, Y);
    }
    Code() {
      return this.code;
    }
    Errors($) {
      return (0, r9.Errors)(this.schema, this.references, $);
    }
    Check($) {
      return this.checkFunc($);
    }
    Decode($) {
      if (!this.checkFunc($))
        throw new U$.TransformDecodeCheckError(this.schema, $, this.Errors($).First());
      return this.hasTransform ? U$.DecodeTransform.Decode(this.schema, this.references, $, (Y, W, X) => this.Check(X)) : $;
    }
    Encode($) {
      const Y = this.hasTransform ? U$.EncodeTransform.Encode(this.schema, this.references, $, (W, X, Z) => this.Check(Z)) : $;
      if (!this.checkFunc(Y))
        throw new U$.TransformEncodeCheckError(this.schema, $, this.Errors($).First());
      return Y;
    }
  }
  NW.TypeCheck = Q6;
  var M1;
  (function($) {
    function Y(Q) {
      return Q === 36;
    }
    $.DollarSign = Y;
    function W(Q) {
      return Q === 95;
    }
    $.IsUnderscore = W;
    function X(Q) {
      return Q >= 65 && Q <= 90 || Q >= 97 && Q <= 122;
    }
    $.IsAlpha = X;
    function Z(Q) {
      return Q >= 48 && Q <= 57;
    }
    $.IsNumeric = Z;
  })(M1 || (M1 = {}));
  var v$;
  (function($) {
    function Y(Q) {
      if (Q.length === 0)
        return false;
      return M1.IsNumeric(Q.charCodeAt(0));
    }
    function W(Q) {
      if (Y(Q))
        return false;
      for (let J = 0;J < Q.length; J++) {
        const z = Q.charCodeAt(J);
        if (!(M1.IsAlpha(z) || M1.IsNumeric(z) || M1.DollarSign(z) || M1.IsUnderscore(z)))
          return false;
      }
      return true;
    }
    function X(Q) {
      return Q.replace(/'/g, "\\'");
    }
    function Z(Q, J) {
      return W(J) ? `${Q}.${J}` : `${Q}['${X(J)}']`;
    }
    $.Encode = Z;
  })(v$ || (v$ = {}));
  var X6;
  (function($) {
    function Y(W) {
      const X = [];
      for (let Z = 0;Z < W.length; Z++) {
        const Q = W.charCodeAt(Z);
        if (M1.IsNumeric(Q) || M1.IsAlpha(Q))
          X.push(W.charAt(Z));
        else
          X.push(`_${Q}_`);
      }
      return X.join("").replace(/__/g, "_");
    }
    $.Encode = Y;
  })(X6 || (X6 = {}));
  var Z6;
  (function($) {
    function Y(W) {
      return W.replace(/'/g, "\\'");
    }
    $.Escape = Y;
  })(Z6 || (Z6 = {}));

  class J6 extends U0.TypeBoxError {
    constructor($) {
      super("Unknown type");
      this.schema = $;
    }
  }
  NW.TypeCompilerUnknownTypeError = J6;

  class p$ extends U0.TypeBoxError {
    constructor($) {
      super("Preflight validation check failed to guard for the given schema");
      this.schema = $;
    }
  }
  NW.TypeCompilerTypeGuardError = p$;
  var L1;
  (function($) {
    function Y(J, z, A) {
      return A$.TypeSystemPolicy.ExactOptionalPropertyTypes ? `('${z}' in ${J} ? ${A} : true)` : `(${v$.Encode(J, z)} !== undefined ? ${A} : true)`;
    }
    $.IsExactOptionalProperty = Y;
    function W(J) {
      return !A$.TypeSystemPolicy.AllowArrayObject ? `(typeof ${J} === 'object' && ${J} !== null && !Array.isArray(${J}))` : `(typeof ${J} === 'object' && ${J} !== null)`;
    }
    $.IsObjectLike = W;
    function X(J) {
      return !A$.TypeSystemPolicy.AllowArrayObject ? `(typeof ${J} === 'object' && ${J} !== null && !Array.isArray(${J}) && !(${J} instanceof Date) && !(${J} instanceof Uint8Array))` : `(typeof ${J} === 'object' && ${J} !== null && !(${J} instanceof Date) && !(${J} instanceof Uint8Array))`;
    }
    $.IsRecordLike = X;
    function Z(J) {
      return !A$.TypeSystemPolicy.AllowNaN ? `(typeof ${J} === 'number' && Number.isFinite(${J}))` : `typeof ${J} === 'number'`;
    }
    $.IsNumberLike = Z;
    function Q(J) {
      return A$.TypeSystemPolicy.AllowNullVoid ? `(${J} === undefined || ${J} === null)` : `${J} === undefined`;
    }
    $.IsVoidLike = Q;
  })(L1 || (NW.Policy = L1 = {}));
  var MW;
  (function($) {
    function Y(P) {
      return P[U0.Kind] === "Any" || P[U0.Kind] === "Unknown";
    }
    function* W(P, _, S) {
      yield "true";
    }
    function* X(P, _, S) {
      yield `Array.isArray(${S})`;
      const [p, f] = [q0("value", "any"), q0("acc", "number")];
      if ((0, c.IsNumber)(P.maxItems))
        yield `${S}.length <= ${P.maxItems}`;
      if ((0, c.IsNumber)(P.minItems))
        yield `${S}.length >= ${P.minItems}`;
      const T = E(P.items, _, "value");
      if (yield `${S}.every((${p}) => ${T})`, U0.TypeGuard.TSchema(P.contains) || (0, c.IsNumber)(P.minContains) || (0, c.IsNumber)(P.maxContains)) {
        const W0 = U0.TypeGuard.TSchema(P.contains) ? P.contains : U0.Type.Never(), K0 = E(W0, _, "value"), X0 = (0, c.IsNumber)(P.minContains) ? [`(count >= ${P.minContains})`] : [], M = (0, c.IsNumber)(P.maxContains) ? [`(count <= ${P.maxContains})`] : [], l = `const count = ${S}.reduce((${f}, ${p}) => ${K0} ? acc + 1 : acc, 0)`, S0 = ["(count > 0)", ...X0, ...M].join(" && ");
        yield `((${p}) => { ${l}; return ${S0}})(${S})`;
      }
      if (P.uniqueItems === true)
        yield `((${p}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${S})`;
    }
    function* Z(P, _, S) {
      yield `(typeof value === 'object' && Symbol.asyncIterator in ${S})`;
    }
    function* Q(P, _, S) {
      if (yield `(typeof ${S} === 'bigint')`, (0, c.IsBigInt)(P.exclusiveMaximum))
        yield `${S} < BigInt(${P.exclusiveMaximum})`;
      if ((0, c.IsBigInt)(P.exclusiveMinimum))
        yield `${S} > BigInt(${P.exclusiveMinimum})`;
      if ((0, c.IsBigInt)(P.maximum))
        yield `${S} <= BigInt(${P.maximum})`;
      if ((0, c.IsBigInt)(P.minimum))
        yield `${S} >= BigInt(${P.minimum})`;
      if ((0, c.IsBigInt)(P.multipleOf))
        yield `(${S} % BigInt(${P.multipleOf})) === 0`;
    }
    function* J(P, _, S) {
      yield `(typeof ${S} === 'boolean')`;
    }
    function* z(P, _, S) {
      yield* g0(P.returns, _, `${S}.prototype`);
    }
    function* A(P, _, S) {
      if (yield `(${S} instanceof Date) && Number.isFinite(${S}.getTime())`, (0, c.IsNumber)(P.exclusiveMaximumTimestamp))
        yield `${S}.getTime() < ${P.exclusiveMaximumTimestamp}`;
      if ((0, c.IsNumber)(P.exclusiveMinimumTimestamp))
        yield `${S}.getTime() > ${P.exclusiveMinimumTimestamp}`;
      if ((0, c.IsNumber)(P.maximumTimestamp))
        yield `${S}.getTime() <= ${P.maximumTimestamp}`;
      if ((0, c.IsNumber)(P.minimumTimestamp))
        yield `${S}.getTime() >= ${P.minimumTimestamp}`;
      if ((0, c.IsNumber)(P.multipleOfTimestamp))
        yield `(${S}.getTime() % ${P.multipleOfTimestamp}) === 0`;
    }
    function* F(P, _, S) {
      yield `(typeof ${S} === 'function')`;
    }
    function* w(P, _, S) {
      if (yield `(typeof ${S} === 'number' && Number.isInteger(${S}))`, (0, c.IsNumber)(P.exclusiveMaximum))
        yield `${S} < ${P.exclusiveMaximum}`;
      if ((0, c.IsNumber)(P.exclusiveMinimum))
        yield `${S} > ${P.exclusiveMinimum}`;
      if ((0, c.IsNumber)(P.maximum))
        yield `${S} <= ${P.maximum}`;
      if ((0, c.IsNumber)(P.minimum))
        yield `${S} >= ${P.minimum}`;
      if ((0, c.IsNumber)(P.multipleOf))
        yield `(${S} % ${P.multipleOf}) === 0`;
    }
    function* K(P, _, S) {
      const p = P.allOf.map((f) => E(f, _, S)).join(" && ");
      if (P.unevaluatedProperties === false) {
        const f = u(`${new RegExp(U0.KeyResolver.ResolvePattern(P))};`), T = `Object.getOwnPropertyNames(${S}).every(key => ${f}.test(key))`;
        yield `(${p} && ${T})`;
      } else if (U0.TypeGuard.TSchema(P.unevaluatedProperties)) {
        const f = u(`${new RegExp(U0.KeyResolver.ResolvePattern(P))};`), T = `Object.getOwnPropertyNames(${S}).every(key => ${f}.test(key) || ${E(P.unevaluatedProperties, _, `${S}[key]`)})`;
        yield `(${p} && ${T})`;
      } else
        yield `(${p})`;
    }
    function* b(P, _, S) {
      yield `(typeof value === 'object' && Symbol.iterator in ${S})`;
    }
    function* O(P, _, S) {
      if (typeof P.const === "number" || typeof P.const === "boolean")
        yield `(${S} === ${P.const})`;
      else
        yield `(${S} === '${Z6.Escape(P.const)}')`;
    }
    function* N(P, _, S) {
      yield "false";
    }
    function* L(P, _, S) {
      yield `(!${E(P.not, _, S)})`;
    }
    function* j(P, _, S) {
      yield `(${S} === null)`;
    }
    function* U(P, _, S) {
      if (yield L1.IsNumberLike(S), (0, c.IsNumber)(P.exclusiveMaximum))
        yield `${S} < ${P.exclusiveMaximum}`;
      if ((0, c.IsNumber)(P.exclusiveMinimum))
        yield `${S} > ${P.exclusiveMinimum}`;
      if ((0, c.IsNumber)(P.maximum))
        yield `${S} <= ${P.maximum}`;
      if ((0, c.IsNumber)(P.minimum))
        yield `${S} >= ${P.minimum}`;
      if ((0, c.IsNumber)(P.multipleOf))
        yield `(${S} % ${P.multipleOf}) === 0`;
    }
    function* D(P, _, S) {
      if (yield L1.IsObjectLike(S), (0, c.IsNumber)(P.minProperties))
        yield `Object.getOwnPropertyNames(${S}).length >= ${P.minProperties}`;
      if ((0, c.IsNumber)(P.maxProperties))
        yield `Object.getOwnPropertyNames(${S}).length <= ${P.maxProperties}`;
      const p = Object.getOwnPropertyNames(P.properties);
      for (let f of p) {
        const T = v$.Encode(S, f), W0 = P.properties[f];
        if (P.required && P.required.includes(f)) {
          if (yield* g0(W0, _, T), U0.ExtendsUndefined.Check(W0) || Y(W0))
            yield `('${f}' in ${S})`;
        } else {
          const K0 = E(W0, _, T);
          yield L1.IsExactOptionalProperty(S, f, K0);
        }
      }
      if (P.additionalProperties === false)
        if (P.required && P.required.length === p.length)
          yield `Object.getOwnPropertyNames(${S}).length === ${p.length}`;
        else {
          const f = `[${p.map((T) => `'${T}'`).join(", ")}]`;
          yield `Object.getOwnPropertyNames(${S}).every(key => ${f}.includes(key))`;
        }
      if (typeof P.additionalProperties === "object") {
        const f = E(P.additionalProperties, _, `${S}[key]`), T = `[${p.map((W0) => `'${W0}'`).join(", ")}]`;
        yield `(Object.getOwnPropertyNames(${S}).every(key => ${T}.includes(key) || ${f}))`;
      }
    }
    function* I(P, _, S) {
      yield `(typeof value === 'object' && typeof ${S}.then === 'function')`;
    }
    function* G(P, _, S) {
      if (yield L1.IsRecordLike(S), (0, c.IsNumber)(P.minProperties))
        yield `Object.getOwnPropertyNames(${S}).length >= ${P.minProperties}`;
      if ((0, c.IsNumber)(P.maxProperties))
        yield `Object.getOwnPropertyNames(${S}).length <= ${P.maxProperties}`;
      const [p, f] = Object.entries(P.patternProperties)[0], T = u(`${new RegExp(p)}`), W0 = E(f, _, "value"), K0 = U0.TypeGuard.TSchema(P.additionalProperties) ? E(P.additionalProperties, _, S) : P.additionalProperties === false ? "false" : "true", X0 = `(${T}.test(key) ? ${W0} : ${K0})`;
      yield `(Object.entries(${S}).every(([key, value]) => ${X0}))`;
    }
    function* V(P, _, S) {
      const p = (0, a9.Deref)(P, _);
      if (N0.functions.has(P.$ref))
        return yield `${d(P.$ref)}(${S})`;
      yield* g0(p, _, S);
    }
    function* R(P, _, S) {
      if (yield `(typeof ${S} === 'string')`, (0, c.IsNumber)(P.maxLength))
        yield `${S}.length <= ${P.maxLength}`;
      if ((0, c.IsNumber)(P.minLength))
        yield `${S}.length >= ${P.minLength}`;
      if (P.pattern !== undefined)
        yield `${u(`${new RegExp(P.pattern)};`)}.test(${S})`;
      if (P.format !== undefined)
        yield `format('${P.format}', ${S})`;
    }
    function* n(P, _, S) {
      yield `(typeof ${S} === 'symbol')`;
    }
    function* o(P, _, S) {
      yield `(typeof ${S} === 'string')`, yield `${u(`${new RegExp(P.pattern)};`)}.test(${S})`;
    }
    function* $0(P, _, S) {
      yield `${d(P.$ref)}(${S})`;
    }
    function* h0(P, _, S) {
      if (yield `Array.isArray(${S})`, P.items === undefined)
        return yield `${S}.length === 0`;
      yield `(${S}.length === ${P.maxItems})`;
      for (let p = 0;p < P.items.length; p++)
        yield `${E(P.items[p], _, `${S}[${p}]`)}`;
    }
    function* w0(P, _, S) {
      yield `${S} === undefined`;
    }
    function* k0(P, _, S) {
      yield `(${P.anyOf.map((f) => E(f, _, S)).join(" || ")})`;
    }
    function* A0(P, _, S) {
      if (yield `${S} instanceof Uint8Array`, (0, c.IsNumber)(P.maxByteLength))
        yield `(${S}.length <= ${P.maxByteLength})`;
      if ((0, c.IsNumber)(P.minByteLength))
        yield `(${S}.length >= ${P.minByteLength})`;
    }
    function* v0(P, _, S) {
      yield "true";
    }
    function* H0(P, _, S) {
      yield L1.IsVoidLike(S);
    }
    function* p0(P, _, S) {
      const p = N0.instances.size;
      N0.instances.set(p, P), yield `kind('${P[U0.Kind]}', ${p}, ${S})`;
    }
    function* g0(P, _, S, p = true) {
      const f = (0, c.IsString)(P.$id) ? [..._, P] : _, T = P;
      if (p && (0, c.IsString)(P.$id)) {
        const W0 = d(P.$id);
        if (N0.functions.has(W0))
          return yield `${W0}(${S})`;
        else {
          const K0 = t(W0, P, _, "value", false);
          return N0.functions.set(W0, K0), yield `${W0}(${S})`;
        }
      }
      switch (T[U0.Kind]) {
        case "Any":
          return yield* W(T, f, S);
        case "Array":
          return yield* X(T, f, S);
        case "AsyncIterator":
          return yield* Z(T, f, S);
        case "BigInt":
          return yield* Q(T, f, S);
        case "Boolean":
          return yield* J(T, f, S);
        case "Constructor":
          return yield* z(T, f, S);
        case "Date":
          return yield* A(T, f, S);
        case "Function":
          return yield* F(T, f, S);
        case "Integer":
          return yield* w(T, f, S);
        case "Intersect":
          return yield* K(T, f, S);
        case "Iterator":
          return yield* b(T, f, S);
        case "Literal":
          return yield* O(T, f, S);
        case "Never":
          return yield* N(T, f, S);
        case "Not":
          return yield* L(T, f, S);
        case "Null":
          return yield* j(T, f, S);
        case "Number":
          return yield* U(T, f, S);
        case "Object":
          return yield* D(T, f, S);
        case "Promise":
          return yield* I(T, f, S);
        case "Record":
          return yield* G(T, f, S);
        case "Ref":
          return yield* V(T, f, S);
        case "String":
          return yield* R(T, f, S);
        case "Symbol":
          return yield* n(T, f, S);
        case "TemplateLiteral":
          return yield* o(T, f, S);
        case "This":
          return yield* $0(T, f, S);
        case "Tuple":
          return yield* h0(T, f, S);
        case "Undefined":
          return yield* w0(T, f, S);
        case "Union":
          return yield* k0(T, f, S);
        case "Uint8Array":
          return yield* A0(T, f, S);
        case "Unknown":
          return yield* v0(T, f, S);
        case "Void":
          return yield* H0(T, f, S);
        default:
          if (!U0.TypeRegistry.Has(T[U0.Kind]))
            throw new J6(P);
          return yield* p0(T, f, S);
      }
    }
    const N0 = { language: "javascript", functions: new Map, variables: new Map, instances: new Map };
    function E(P, _, S, p = true) {
      return `(${[...g0(P, _, S, p)].join(" && ")})`;
    }
    function d(P) {
      return `check_${X6.Encode(P)}`;
    }
    function u(P) {
      const _ = `local_${N0.variables.size}`;
      return N0.variables.set(_, `const ${_} = ${P}`), _;
    }
    function t(P, _, S, p, f = true) {
      const [T, W0] = ["\n", (l) => "".padStart(l, " ")], K0 = q0("value", "any"), X0 = E0("boolean"), M = [...g0(_, S, p, f)].map((l) => `${W0(4)}${l}`).join(` &&${T}`);
      return `function ${P}(${K0})${X0} {${T}${W0(2)}return (${T}${M}${T}${W0(2)})\n}`;
    }
    function q0(P, _) {
      const S = N0.language === "typescript" ? `: ${_}` : "";
      return `${P}${S}`;
    }
    function E0(P) {
      return N0.language === "typescript" ? `: ${P}` : "";
    }
    function D0(P, _, S) {
      const p = t("check", P, _, "value"), f = q0("value", "any"), T = E0("boolean"), W0 = [...N0.functions.values()], K0 = [...N0.variables.values()], X0 = (0, c.IsString)(P.$id) ? `return function check(${f})${T} {\n  return ${d(P.$id)}(value)\n}` : `return ${p}`;
      return [...K0, ...W0, X0].join("\n");
    }
    function a(...P) {
      const _ = { language: "javascript" }, [S, p, f] = P.length === 2 && (0, c.IsArray)(P[1]) ? [P[0], P[1], _] : P.length === 2 && !(0, c.IsArray)(P[1]) ? [P[0], [], P[1]] : P.length === 3 ? [P[0], P[1], P[2]] : P.length === 1 ? [P[0], [], _] : [null, [], _];
      if (N0.language = f.language, N0.variables.clear(), N0.functions.clear(), N0.instances.clear(), !U0.TypeGuard.TSchema(S))
        throw new p$(S);
      for (let T of p)
        if (!U0.TypeGuard.TSchema(T))
          throw new p$(T);
      return D0(S, p, f);
    }
    $.Code = a;
    function F1(P, _ = []) {
      const S = a(P, _, { language: "javascript" }), p = globalThis.Function("kind", "format", "hash", S), f = new Map(N0.instances);
      function T(M, l, S0) {
        if (!U0.TypeRegistry.Has(M) || !f.has(l))
          return false;
        const l$ = U0.TypeRegistry.Get(M), t$ = f.get(l);
        return l$(t$, S0);
      }
      function W0(M, l) {
        if (!U0.FormatRegistry.Has(M))
          return false;
        return U0.FormatRegistry.Get(M)(l);
      }
      function K0(M) {
        return (0, e9.Hash)(M);
      }
      const X0 = p(T, W0, K0);
      return new Q6(P, _, X0, S);
    }
    $.Compile = F1;
  })(MW || (NW.TypeCompiler = MW = {}));
});
var FW = J0((t0) => {
  var Z7 = t0 && t0.__createBinding || (Object.create ? function($, Y, W, X) {
    if (X === undefined)
      X = W;
    var Z = Object.getOwnPropertyDescriptor(Y, W);
    if (!Z || ("get" in Z ? !Y.__esModule : Z.writable || Z.configurable))
      Z = { enumerable: true, get: function() {
        return Y[W];
      } };
    Object.defineProperty($, X, Z);
  } : function($, Y, W, X) {
    if (X === undefined)
      X = W;
    $[X] = Y[W];
  }), Q7 = t0 && t0.__exportStar || function($, Y) {
    for (var W in $)
      if (W !== "default" && !Object.prototype.hasOwnProperty.call(Y, W))
        Z7(Y, $, W);
  };
  Object.defineProperty(t0, "__esModule", { value: true });
  t0.ValueErrorIterator = t0.ValueErrorType = undefined;
  var BW = I$();
  Object.defineProperty(t0, "ValueErrorType", { enumerable: true, get: function() {
    return BW.ValueErrorType;
  } });
  Object.defineProperty(t0, "ValueErrorIterator", { enumerable: true, get: function() {
    return BW.ValueErrorIterator;
  } });
  Q7(AW(), t0);
});
var bW = J0((K5, IW) => {
  var H7 = function($) {
    var Y = $.indexOf("%");
    if (Y === -1)
      return $;
    var W = $.length, X = "", Z = 0, Q = 0, J = Y, z = LW;
    while (Y > -1 && Y < W) {
      var A = CW($[Y + 1], 4), F = CW($[Y + 2], 0), w = A | F, K = A6[w];
      if (z = A6[256 + z + K], Q = Q << 6 | w & A6[364 + K], z === LW)
        X += $.slice(Z, J), X += Q <= 65535 ? String.fromCharCode(Q) : String.fromCharCode(55232 + (Q >> 10), 56320 + (Q & 1023)), Q = 0, Z = Y + 3, Y = J = $.indexOf("%", Z);
      else if (z === z7)
        return null;
      else {
        if (Y += 3, Y < W && $.charCodeAt(Y) === 37)
          continue;
        return null;
      }
    }
    return X + $.slice(Z);
  }, CW = function($, Y) {
    var W = q7[$];
    return W === undefined ? 255 : W << Y;
  }, LW = 12, z7 = 0, A6 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 7, 10, 9, 9, 9, 11, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 24, 36, 48, 60, 72, 84, 96, 0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 63, 63, 63, 0, 31, 15, 15, 15, 7, 7, 7], q7 = { "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, a: 10, A: 10, b: 11, B: 11, c: 12, C: 12, d: 13, D: 13, e: 14, E: 14, f: 15, F: 15 };
  IW.exports = H7;
});
var VW = J0((j5, EW) => {
  var M7 = function($) {
    const Y = new _W;
    if (typeof $ !== "string")
      return Y;
    let W = $.length, X = "", Z = "", Q = -1, J = -1, z = false, A = false, F = false, w = false, K = false, b = 0;
    for (let O = 0;O < W + 1; O++)
      if (b = O !== W ? $.charCodeAt(O) : 38, b === 38) {
        if (K = J > Q, !K)
          J = O;
        if (X = $.slice(Q + 1, J), K || X.length > 0) {
          if (F)
            X = X.replace(RW, " ");
          if (z)
            X = GW(X) || X;
          if (K) {
            if (Z = $.slice(J + 1, O), w)
              Z = Z.replace(RW, " ");
            if (A)
              Z = GW(Z) || Z;
          }
          const N = Y[X];
          if (N === undefined)
            Y[X] = Z;
          else if (N.pop)
            N.push(Z);
          else
            Y[X] = [N, Z];
        }
        Z = "", Q = O, J = O, z = false, A = false, F = false, w = false;
      } else if (b === 61)
        if (J <= Q)
          J = O;
        else
          A = true;
      else if (b === 43)
        if (J > Q)
          w = true;
        else
          F = true;
      else if (b === 37)
        if (J > Q)
          A = true;
        else
          z = true;
    return Y;
  }, GW = bW(), RW = /\+/g, _W = function() {
  };
  _W.prototype = Object.create(null);
  EW.exports = M7;
});
var kW = J0((P5, xW) => {
  var U7 = function($) {
    const Y = $.length;
    if (Y === 0)
      return "";
    let W = "", X = 0, Z = 0;
    $:
      for (;Z < Y; Z++) {
        let Q = $.charCodeAt(Z);
        while (Q < 128) {
          if (N7[Q] !== 1) {
            if (X < Z)
              W += $.slice(X, Z);
            X = Z + 1, W += W1[Q];
          }
          if (++Z === Y)
            break $;
          Q = $.charCodeAt(Z);
        }
        if (X < Z)
          W += $.slice(X, Z);
        if (Q < 2048) {
          X = Z + 1, W += W1[192 | Q >> 6] + W1[128 | Q & 63];
          continue;
        }
        if (Q < 55296 || Q >= 57344) {
          X = Z + 1, W += W1[224 | Q >> 12] + W1[128 | Q >> 6 & 63] + W1[128 | Q & 63];
          continue;
        }
        if (++Z, Z >= Y)
          throw new Error("URI malformed");
        const J = $.charCodeAt(Z) & 1023;
        X = Z + 1, Q = 65536 + ((Q & 1023) << 10 | J), W += W1[240 | Q >> 18] + W1[128 | Q >> 12 & 63] + W1[128 | Q >> 6 & 63] + W1[128 | Q & 63];
      }
    if (X === 0)
      return $;
    if (X < Y)
      return W + $.slice(X);
    return W;
  }, W1 = Array.from({ length: 256 }, ($, Y) => "%" + ((Y < 16 ? "0" : "") + Y.toString(16)).toUpperCase()), N7 = new Int8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0]);
  xW.exports = { encodeString: U7 };
});
var TW = J0((O5, fW) => {
  var gW = function($) {
    const Y = typeof $;
    if (Y === "string")
      return B6($);
    else if (Y === "bigint")
      return $.toString();
    else if (Y === "boolean")
      return $ ? "true" : "false";
    else if (Y === "number" && Number.isFinite($))
      return $ < 1000000000000000000000 ? "" + $ : B6("" + $);
    return "";
  }, A7 = function($) {
    let Y = "";
    if ($ === null || typeof $ !== "object")
      return Y;
    const W = "&", X = Object.keys($), Z = X.length;
    let Q = 0;
    for (let J = 0;J < Z; J++) {
      const z = X[J], A = $[z], F = B6(z) + "=";
      if (J)
        Y += W;
      if (Array.isArray(A)) {
        Q = A.length;
        for (let w = 0;w < Q; w++) {
          if (w)
            Y += W;
          Y += F, Y += gW(A[w]);
        }
      } else
        Y += F, Y += gW(A);
    }
    return Y;
  }, { encodeString: B6 } = kW();
  fW.exports = A7;
});
var F6 = J0((S5, D$) => {
  var dW = VW(), yW = TW(), vW = { parse: dW, stringify: yW };
  D$.exports = vW;
  D$.exports.default = vW;
  D$.exports.parse = dW;
  D$.exports.stringify = yW;
});
var _1 = ($, Y) => ({ part: $, store: null, inert: Y !== undefined ? new Map(Y.map((W) => [W.part.charCodeAt(0), W])) : null, params: null, wildcardStore: null });
var L6 = ($, Y) => ({ ...$, part: Y });
var C6 = ($) => ({ paramName: $, store: null, inert: null });

class E1 {
  root = {};
  history = [];
  static regex = { static: /:.+?(?=\/|$)/, params: /:.+?(?=\/|$)/g };
  add($, Y, W) {
    let X;
    if (typeof Y != "string")
      throw TypeError("Route path must be a string");
    Y === "" ? Y = "/" : Y[0] !== "/" && (Y = `/${Y}`), this.history.push([$, Y, W]);
    let Z = Y[Y.length - 1] === "*";
    Z && (Y = Y.slice(0, -1));
    let Q = Y.split(E1.regex.static), J = Y.match(E1.regex.params) || [];
    Q[Q.length - 1] === "" && Q.pop(), X = this.root[$] ? this.root[$] : this.root[$] = _1("/");
    let z = 0;
    for (let A = 0;A < Q.length; ++A) {
      let F = Q[A];
      if (A > 0) {
        let w = J[z++].slice(1);
        if (X.params === null)
          X.params = C6(w);
        else if (X.params.paramName !== w)
          throw Error(`Cannot create route "${Y}" with parameter "${w}" because a route already exists with a different parameter name ("${X.params.paramName}") in the same location`);
        let K = X.params;
        if (K.inert === null) {
          X = K.inert = _1(F);
          continue;
        }
        X = K.inert;
      }
      for (let w = 0;; ) {
        if (w === F.length) {
          if (w < X.part.length) {
            let K = L6(X, X.part.slice(w));
            Object.assign(X, _1(F, [K]));
          }
          break;
        }
        if (w === X.part.length) {
          if (X.inert === null)
            X.inert = new Map;
          else if (X.inert.has(F.charCodeAt(w))) {
            X = X.inert.get(F.charCodeAt(w)), F = F.slice(w), w = 0;
            continue;
          }
          let K = _1(F.slice(w));
          X.inert.set(F.charCodeAt(w), K), X = K;
          break;
        }
        if (F[w] !== X.part[w]) {
          let K = L6(X, X.part.slice(w)), b = _1(F.slice(w));
          Object.assign(X, _1(X.part.slice(0, w), [K, b])), X = b;
          break;
        }
        ++w;
      }
    }
    if (z < J.length) {
      let A = J[z], F = A.slice(1);
      if (X.params === null)
        X.params = C6(F);
      else if (X.params.paramName !== F)
        throw Error(`Cannot create route "${Y}" with parameter "${F}" because a route already exists with a different parameter name ("${X.params.paramName}") in the same location`);
      return X.params.store === null && (X.params.store = W), X.params.store;
    }
    return Z ? (X.wildcardStore === null && (X.wildcardStore = W), X.wildcardStore) : (X.store === null && (X.store = W), X.store);
  }
  find($, Y) {
    let W = this.root[$];
    return W ? r$(Y, Y.length, W, 0) : null;
  }
}
var r$ = ($, Y, W, X) => {
  let Z = W?.part, Q = X + Z.length;
  if (Z.length > 1) {
    if (Q > Y)
      return null;
    if (Z.length < 15) {
      for (let J = 1, z = X + 1;J < Z.length; ++J, ++z)
        if (Z.charCodeAt(J) !== $.charCodeAt(z))
          return null;
    } else if ($.substring(X, Q) !== Z)
      return null;
  }
  if (Q === Y)
    return W.store !== null ? { store: W.store, params: {} } : W.wildcardStore !== null ? { store: W.wildcardStore, params: { "*": "" } } : null;
  if (W.inert !== null) {
    let J = W.inert.get($.charCodeAt(Q));
    if (J !== undefined) {
      let z = r$($, Y, J, Q);
      if (z !== null)
        return z;
    }
  }
  if (W.params !== null) {
    let J = W.params, z = $.indexOf("/", Q);
    if (z !== Q) {
      if (z === -1 || z >= Y) {
        if (J.store !== null) {
          let A = {};
          return A[J.paramName] = $.substring(Q, Y), { store: J.store, params: A };
        }
      } else if (J.inert !== null) {
        let A = r$($, Y, J.inert, z);
        if (A !== null)
          return A.params[J.paramName] = $.substring(Q, z), A;
      }
    }
  }
  return W.wildcardStore !== null ? { store: W.wildcardStore, params: { "*": $.substring(Q, Y) } } : null;
};
var G6 = X1(b6(), 1);
var R6 = G6.default;
var _6 = ($, Y) => {
  return (W) => {
    const X = W.id;
    if (W.event === "request" && W.type === "begin") {
      const Z = () => {
        let N, L, j = -1;
        const U = [], D = [];
        let I = false;
        const G = new Promise((n) => {
          N = (o) => {
            if (I)
              return;
            else
              I = true;
            n(o);
          };
        });
        let V = false;
        const R = new Promise((n) => {
          L = (o) => {
            if (V)
              return;
            else
              V = true;
            if (j === -1)
              j = 0;
            for (;j < D.length; j++) {
              let $0;
              const h0 = { name: "anonymous", time: performance.now(), skip: true, end: new Promise((w0) => {
                w0($0);
              }), children: [] };
              $0 = performance.now(), U[j](h0);
            }
            n(o);
          };
        });
        return { signal: G, consumeChild(n) {
          switch (n.type) {
            case "begin":
              U[++j]({ name: n.name, time: n.time, skip: false, end: new Promise((o) => {
                D.push(o);
              }) });
              break;
            case "end":
              D[j](n.time);
              break;
          }
        }, consume(n) {
          switch (n.type) {
            case "begin":
              const o = [], $0 = n.unit ?? 0;
              for (let h0 = 0;h0 < $0; h0++) {
                let w0;
                o.push(new Promise((k0) => {
                  w0 = k0;
                })), U.push(w0);
              }
              N({ name: n.name, time: n.time, skip: false, end: R, children: o });
              break;
            case "end":
              L(n.time);
              break;
          }
        }, resolve() {
          if (I && V)
            return;
          let n;
          const o = { name: "anonymous", time: performance.now(), skip: true, end: new Promise(($0) => {
            $0(n);
          }), children: [] };
          n = performance.now(), N(o), L(n);
        } };
      }, Q = Z(), J = Z(), z = Z(), A = Z(), F = Z(), w = Z(), K = Z(), b = Z();
      Q.consume(W);
      const O = (N) => {
        if (N.id === X)
          switch (N.event) {
            case "request":
              Q.consume(N);
              break;
            case "request.unit":
              Q.consumeChild(N);
              break;
            case "parse":
              J.consume(N);
              break;
            case "parse.unit":
              J.consumeChild(N);
              break;
            case "transform":
              z.consume(N);
              break;
            case "transform.unit":
              z.consumeChild(N);
              break;
            case "beforeHandle":
              A.consume(N);
              break;
            case "beforeHandle.unit":
              A.consumeChild(N);
              break;
            case "handle":
              F.consume(N);
              break;
            case "afterHandle":
              w.consume(N);
              break;
            case "afterHandle.unit":
              w.consumeChild(N);
              break;
            case "error":
              K.consume(N);
              break;
            case "error.unit":
              K.consumeChild(N);
              break;
            case "response":
              if (N.type === "begin")
                Q.resolve(), J.resolve(), z.resolve(), A.resolve(), F.resolve(), w.resolve(), K.resolve();
              else
                $.off("event", O);
              b.consume(N);
              break;
            case "response.unit":
              b.consumeChild(N);
              break;
          }
      };
      $.on("event", O), Y({ id: W.id, context: W.ctx, set: W.ctx?.set, store: W.ctx?.store, time: W.time, request: Q.signal, parse: J.signal, transform: z.signal, beforeHandle: A.signal, handle: F.signal, afterHandle: w.signal, error: K.signal, response: b.signal });
    }
  };
};
var Y6 = X1($6(), 1);
var HW = typeof Bun !== "undefined" ? Bun.env : typeof process !== "undefined" ? process?.env : undefined;
var o1 = Symbol("ErrorCode");
var M$ = (HW?.NODE_ENV ?? HW?.ENV) === "production";

class f$ extends Error {
  code = "INTERNAL_SERVER_ERROR";
  status = 500;
  constructor($) {
    super($ ?? "INTERNAL_SERVER_ERROR");
  }
}

class S1 extends Error {
  code = "NOT_FOUND";
  status = 404;
  constructor($) {
    super($ ?? "NOT_FOUND");
  }
}
class N$ extends Error {
  $;
  code = "INVALID_COOKIE_SIGNATURE";
  status = 400;
  constructor($, Y) {
    super(Y ?? `"${$}" has invalid cookie signature`);
    this.key = $;
  }
}

class j0 extends Error {
  $;
  Y;
  W;
  code = "VALIDATION";
  status = 400;
  constructor($, Y, W) {
    const X = M$ ? undefined : Y.Errors(W).First(), Z = X?.schema.error ? typeof X.schema.error === "function" ? X.schema.error($, Y, W) : X.schema.error : undefined, Q = M$ ? Z ?? `Invalid ${$ ?? X?.schema.error ?? X?.message}` : Z ?? `Invalid ${$}, '${X?.path?.slice(1) || "type"}': ${X?.message}` + "\n\nExpected: " + JSON.stringify(Y6.Value.Create(Y.schema), null, 2) + "\n\nFound: " + JSON.stringify(W, null, 2);
    super(Q);
    this.type = $;
    this.validator = Y;
    this.value = W;
    Object.setPrototypeOf(this, j0.prototype);
  }
  get all() {
    return [...this.validator.Errors(this.value)];
  }
  get model() {
    return Y6.Value.Create(this.validator.schema);
  }
  toResponse($) {
    return new Response(this.message, { status: 400, headers: $ });
  }
}
var W6 = { open($) {
  $.data.open?.($);
}, message($, Y) {
  $.data.message?.($, Y);
}, drain($) {
  $.data.drain?.($);
}, close($, Y, W) {
  $.data.close?.($, Y, W);
} };

class c1 {
  $;
  Y;
  validator;
  constructor($, Y) {
    this.raw = $;
    this.data = Y;
    this.validator = $.data.validator;
  }
  get publish() {
    return ($, Y = undefined, W) => {
      if (this.validator?.Check(Y) === false)
        throw new j0("message", this.validator, Y);
      if (typeof Y === "object")
        Y = JSON.stringify(Y);
      return this.raw.publish($, Y, W), this;
    };
  }
  get send() {
    return ($) => {
      if (this.validator?.Check($) === false)
        throw new j0("message", this.validator, $);
      if (typeof $ === "object")
        $ = JSON.stringify($);
      return this.raw.send($), this;
    };
  }
  get subscribe() {
    return ($) => {
      return this.raw.subscribe($), this;
    };
  }
  get unsubscribe() {
    return ($) => {
      return this.raw.unsubscribe($), this;
    };
  }
  get cork() {
    return ($) => {
      return this.raw.cork($), this;
    };
  }
  get close() {
    return () => {
      return this.raw.close(), this;
    };
  }
  get terminate() {
    return this.raw.terminate.bind(this.raw);
  }
  get isSubscribed() {
    return this.raw.isSubscribed.bind(this.raw);
  }
  get remoteAddress() {
    return this.raw.remoteAddress;
  }
}
var n9 = function($, Y) {
  if (typeof $ !== "string")
    throw new TypeError("argument str must be a string");
  var W = {}, X = Y || {}, Z = X.decode || c9, Q = 0;
  while (Q < $.length) {
    var J = $.indexOf("=", Q);
    if (J === -1)
      break;
    var z = $.indexOf(";", Q);
    if (z === -1)
      z = $.length;
    else if (z < J) {
      Q = $.lastIndexOf(";", J - 1) + 1;
      continue;
    }
    var A = $.slice(Q, J).trim();
    if (W[A] === undefined) {
      var F = $.slice(J + 1, z).trim();
      if (F.charCodeAt(0) === 34)
        F = F.slice(1, -1);
      W[A] = s9(F, Z);
    }
    Q = z + 1;
  }
  return W;
};
var o9 = function($, Y, W) {
  var X = W || {}, Z = X.encode || l9;
  if (typeof Z !== "function")
    throw new TypeError("option encode is invalid");
  if (!T$.test($))
    throw new TypeError("argument name is invalid");
  var Q = Z(Y);
  if (Q && !T$.test(Q))
    throw new TypeError("argument val is invalid");
  var J = $ + "=" + Q;
  if (X.maxAge != null) {
    var z = X.maxAge - 0;
    if (isNaN(z) || !isFinite(z))
      throw new TypeError("option maxAge is invalid");
    J += "; Max-Age=" + Math.floor(z);
  }
  if (X.domain) {
    if (!T$.test(X.domain))
      throw new TypeError("option domain is invalid");
    J += "; Domain=" + X.domain;
  }
  if (X.path) {
    if (!T$.test(X.path))
      throw new TypeError("option path is invalid");
    J += "; Path=" + X.path;
  }
  if (X.expires) {
    var A = X.expires;
    if (!t9(A) || isNaN(A.valueOf()))
      throw new TypeError("option expires is invalid");
    J += "; Expires=" + A.toUTCString();
  }
  if (X.httpOnly)
    J += "; HttpOnly";
  if (X.secure)
    J += "; Secure";
  if (X.priority) {
    var F = typeof X.priority === "string" ? X.priority.toLowerCase() : X.priority;
    switch (F) {
      case "low":
        J += "; Priority=Low";
        break;
      case "medium":
        J += "; Priority=Medium";
        break;
      case "high":
        J += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (X.sameSite) {
    var w = typeof X.sameSite === "string" ? X.sameSite.toLowerCase() : X.sameSite;
    switch (w) {
      case true:
        J += "; SameSite=Strict";
        break;
      case "lax":
        J += "; SameSite=Lax";
        break;
      case "strict":
        J += "; SameSite=Strict";
        break;
      case "none":
        J += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return J;
};
var c9 = function($) {
  return $.indexOf("%") !== -1 ? decodeURIComponent($) : $;
};
var l9 = function($) {
  return encodeURIComponent($);
};
var t9 = function($) {
  return h9.call($) === "[object Date]" || $ instanceof Date;
};
var s9 = function($, Y) {
  try {
    return Y($);
  } catch (W) {
    return $;
  }
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var d$ = n9;
var y$ = o9;
var h9 = Object.prototype.toString;
var T$ = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
var i$ = X1(f0(), 1);
var B$ = X1($6(), 1);
var H6 = X1(FW(), 1);
var z6 = ($) => $ && typeof $ === "object" && !Array.isArray($);
var J7 = ($) => typeof $ === "function" && /^\s*class\s+/.test($.toString()) || $.toString() === "[object Module]" || A1(Object.getPrototypeOf($));
var N1 = ($, Y, { skipKeys: W } = {}) => {
  if (z6($) && z6(Y))
    for (let [X, Z] of Object.entries(Y)) {
      if (W?.includes(X))
        continue;
      if (!z6(Z)) {
        $[X] = Z;
        continue;
      }
      if (!(X in $)) {
        $[X] = Z;
        continue;
      }
      if (J7(Z)) {
        $[X] = Z;
        continue;
      }
      $[X] = N1($[X], Z);
    }
  return $;
};
var DW = ($, Y) => N1($, Y, { skipKeys: ["properties"] });
var P0 = ($, Y) => {
  const W = [...Array.isArray($) ? $ : [$]], X = [];
  for (let Z of W)
    if (Z.$elysiaChecksum)
      X.push(Z.$elysiaChecksum);
  for (let Z of Array.isArray(Y) ? Y : [Y])
    if (!X.includes(Z?.$elysiaChecksum))
      W.push(Z);
  return W;
};
var C1 = ($, Y) => {
  return { body: Y?.body ?? $?.body, headers: Y?.headers ?? $?.headers, params: Y?.params ?? $?.params, query: Y?.query ?? $?.query, response: Y?.response ?? $?.response, type: $?.type || Y?.type, detail: N1(Y?.detail ?? {}, $?.detail ?? {}), parse: P0($?.parse ?? [], Y?.parse ?? []), transform: P0($?.transform ?? [], Y?.transform ?? []), beforeHandle: P0($?.beforeHandle ?? [], Y?.beforeHandle ?? []), afterHandle: P0($?.afterHandle ?? [], Y?.afterHandle ?? []), onResponse: P0($?.onResponse ?? [], Y?.onResponse ?? []), trace: P0($?.trace ?? [], Y?.trace ?? []), error: P0($?.error ?? [], Y?.error ?? []) };
};
var U1 = ($, { models: Y = {}, additionalProperties: W = false, dynamic: X = false }) => {
  if (!$)
    return;
  if (typeof $ === "string" && !($ in Y))
    return;
  const Z = typeof $ === "string" ? Y[$] : $;
  if (Z.type === "object" && ("additionalProperties" in Z) === false)
    Z.additionalProperties = W;
  if (X)
    return { schema: Z, references: "", checkFunc: () => {
    }, code: "", Check: (Q) => B$.Value.Check(Z, Q), Errors: (Q) => B$.Value.Errors(Z, Q), Code: () => "" };
  return H6.TypeCompiler.Compile(Z);
};
var q6 = ($, { models: Y = {}, additionalProperties: W = false, dynamic: X = false }) => {
  if (!$)
    return;
  if (typeof $ === "string" && !($ in Y))
    return;
  const Z = typeof $ === "string" ? Y[$] : $, Q = (z) => {
    if (X)
      return { schema: z, references: "", checkFunc: () => {
      }, code: "", Check: (A) => B$.Value.Check(z, A), Errors: (A) => B$.Value.Errors(z, A), Code: () => "" };
    return H6.TypeCompiler.Compile(z);
  };
  if (i$.Kind in Z) {
    if (("additionalProperties" in Z) === false)
      Z.additionalProperties = W;
    return { 200: Q(Z) };
  }
  const J = {};
  return Object.keys(Z).forEach((z) => {
    const A = Z[+z];
    if (typeof A === "string") {
      if (A in Y) {
        const F = Y[A];
        F.type === "object" && ("additionalProperties" in F), J[+z] = (i$.Kind in F) ? Q(F) : F;
      }
      return;
    }
    if (A.type === "object" && ("additionalProperties" in A) === false)
      A.additionalProperties = W;
    J[+z] = (i$.Kind in A) ? Q(A) : A;
  }), J;
};
var M6 = ($) => {
  let Y = 9;
  for (let W = 0;W < $.length; )
    Y = Math.imul(Y ^ $.charCodeAt(W++), 387420489);
  return Y = Y ^ Y >>> 9;
};
var m$ = ($, Y, W) => {
  const X = (Z) => {
    if (W)
      Z.$elysiaChecksum = W;
    return Z;
  };
  return { start: P0($.start, ("start" in Y ? Y.start ?? [] : []).map(X)), request: P0($.request, ("request" in Y ? Y.request ?? [] : []).map(X)), parse: P0($.parse, "parse" in Y ? Y?.parse ?? [] : []).map(X), transform: P0($.transform, (Y?.transform ?? []).map(X)), beforeHandle: P0($.beforeHandle, (Y?.beforeHandle ?? []).map(X)), afterHandle: P0($.afterHandle, (Y?.afterHandle ?? []).map(X)), onResponse: P0($.onResponse, (Y?.onResponse ?? []).map(X)), trace: P0($.trace, ("trace" in Y ? Y.trace ?? [] : []).map(X)), error: P0($.error, (Y?.error ?? []).map(X)), stop: P0($.stop, ("stop" in Y ? Y.stop ?? [] : []).map(X)) };
};
var wW = ($, Y = true) => {
  if (!$)
    return $;
  if (typeof $ === "function") {
    if (Y)
      $.$elysiaHookType = "global";
    else
      $.$elysiaHookType = undefined;
    return $;
  }
  return $.map((W) => {
    if (Y)
      W.$elysiaHookType = "global";
    else
      W.$elysiaHookType = undefined;
    return W;
  });
};
var l1 = ($) => {
  if (!$)
    return $;
  if (typeof $ === "function")
    return $.$elysiaHookType === "global" ? $ : undefined;
  return $.filter((Y) => Y.$elysiaHookType === "global");
};
var N6 = ($) => {
  return { ...$, type: $?.type, detail: $?.detail, parse: l1($?.parse), transform: l1($?.transform), beforeHandle: l1($?.beforeHandle), afterHandle: l1($?.afterHandle), onResponse: l1($?.onResponse), error: l1($?.error) };
};
var U6 = { Continue: 100, "Switching Protocols": 101, Processing: 102, "Early Hints": 103, OK: 200, Created: 201, Accepted: 202, "Non-Authoritative Information": 203, "No Content": 204, "Reset Content": 205, "Partial Content": 206, "Multi-Status": 207, "Already Reported": 208, "Multiple Choices": 300, "Moved Permanently": 301, Found: 302, "See Other": 303, "Not Modified": 304, "Temporary Redirect": 307, "Permanent Redirect": 308, "Bad Request": 400, Unauthorized: 401, "Payment Required": 402, Forbidden: 403, "Not Found": 404, "Method Not Allowed": 405, "Not Acceptable": 406, "Proxy Authentication Required": 407, "Request Timeout": 408, Conflict: 409, Gone: 410, "Length Required": 411, "Precondition Failed": 412, "Payload Too Large": 413, "URI Too Long": 414, "Unsupported Media Type": 415, "Range Not Satisfiable": 416, "Expectation Failed": 417, "I'm a teapot": 418, "Misdirected Request": 421, "Unprocessable Content": 422, Locked: 423, "Failed Dependency": 424, "Too Early": 425, "Upgrade Required": 426, "Precondition Required": 428, "Too Many Requests": 429, "Request Header Fields Too Large": 431, "Unavailable For Legal Reasons": 451, "Internal Server Error": 500, "Not Implemented": 501, "Bad Gateway": 502, "Service Unavailable": 503, "Gateway Timeout": 504, "HTTP Version Not Supported": 505, "Variant Also Negotiates": 506, "Insufficient Storage": 507, "Loop Detected": 508, "Not Extended": 510, "Network Authentication Required": 511 };
var KW = import.meta.require("crypto");
var I1 = function($, Y) {
  if (typeof $ != "string")
    throw new TypeError("Cookie value must be provided as a string.");
  if (Y == null)
    throw new TypeError("Secret key must be provided.");
  return $ + "." + KW.createHmac("sha256", Y).update($).digest("base64").replace(/\=+$/, "");
};
var u$ = function($, Y) {
  if (typeof $ != "string")
    throw new TypeError("Signed cookie string must be provided.");
  if (Y == null)
    throw new TypeError("Secret key must be provided.");
  var W = $.slice(0, $.lastIndexOf(".")), X = I1(W, Y), Z = Buffer.from(X), Q = Buffer.from($);
  return Z.length === Q.length && KW.timingSafeEqual(Z, Q) ? W : false;
};

class s0 {
  $;
  Y;
  name;
  setter;
  constructor($, Y = {}) {
    this._value = $;
    this.property = Y;
  }
  get() {
    return this._value;
  }
  get value() {
    return this._value;
  }
  set value($) {
    if (typeof $ === "object") {
      if (JSON.stringify(this.value) === JSON.stringify($))
        return;
    } else if (this.value === $)
      return;
    this._value = $, this.sync();
  }
  add($) {
    const Y = Object.assign(this.property, typeof $ === "function" ? $(Object.assign(this.property, this.value)) : $);
    if ("value" in Y)
      this._value = Y.value, delete Y.value;
    return this.property = Y, this.sync();
  }
  set($) {
    const Y = typeof $ === "function" ? $(Object.assign(this.property, this.value)) : $;
    if ("value" in Y)
      this._value = Y.value, delete Y.value;
    return this.property = Y, this.sync();
  }
  remove() {
    if (this.value === undefined)
      return;
    this.set({ value: "", expires: new Date });
  }
  get domain() {
    return this.property.domain;
  }
  set domain($) {
    this.property.domain = $, this.sync();
  }
  get expires() {
    return this.property.expires;
  }
  set expires($) {
    this.property.expires = $, this.sync();
  }
  get httpOnly() {
    return this.property.httpOnly;
  }
  set httpOnly($) {
    this.property.httpOnly = $, this.sync();
  }
  get maxAge() {
    return this.property.maxAge;
  }
  set maxAge($) {
    this.property.maxAge = $, this.sync();
  }
  get path() {
    return this.property.path;
  }
  set path($) {
    this.property.path = $, this.sync();
  }
  get priority() {
    return this.property.priority;
  }
  set priority($) {
    this.property.priority = $, this.sync();
  }
  get sameSite() {
    return this.property.sameSite;
  }
  set sameSite($) {
    this.property.sameSite = $, this.sync();
  }
  get secure() {
    return this.property.secure;
  }
  set secure($) {
    this.property.secure = $, this.sync();
  }
  toString() {
    return typeof this.value === "object" ? JSON.stringify(this.value) : this.value?.toString() ?? "";
  }
  sync() {
    if (!this.name || !this.setter)
      return this;
    if (!this.setter.cookie)
      this.setter.cookie = { [this.name]: Object.assign(this.property, { value: this.toString() }) };
    else
      this.setter.cookie[this.name] = Object.assign(this.property, { value: this.toString() });
    return this;
  }
}
var jW = ($, Y) => new Proxy($, { get(W, X) {
  if (X in W)
    return W[X];
  const Z = new s0(undefined);
  return Z.setter = Y, Z.name = X, Z;
}, set(W, X, Z) {
  if (!(Z instanceof s0))
    return false;
  if (!Y.cookie)
    Y.cookie = {};
  return Z.setter = Y, Z.name = X, Z.sync(), W[X] = Z, true;
} });
var h$ = ($, Y, { secret: W, sign: X } = {}) => {
  if (!Y)
    return jW({}, $);
  const Z = {}, Q = typeof W === "string";
  if (X && X !== true && !Array.isArray(X))
    X = [X];
  const J = Object.keys(d$(Y));
  for (let z = 0;z < J.length; z++) {
    const A = J[z];
    let F = d$(Y)[A];
    if (X === true || X?.includes(A)) {
      if (!W)
        throw new Error("No secret is provided to cookie plugin");
      if (Q) {
        if (F = u$(F, W), F === false)
          throw new N$(A);
      } else {
        let b = true;
        for (let O = 0;O < W.length; O++) {
          const N = u$(F, W[O]);
          if (N !== false) {
            F = N, b = false;
            break;
          }
        }
        if (b)
          throw new N$(A);
      }
    }
    const w = F.charCodeAt(0);
    if (w === 123 || w === 91)
      try {
        const b = new s0(JSON.parse(F));
        b.setter = $, b.name = A, Z[A] = b;
        continue;
      } catch {
      }
    if (!Number.isNaN(+F))
      F = +F;
    else if (F === "true")
      F = true;
    else if (F === "false")
      F = false;
    const K = new s0(F);
    K.setter = $, K.name = A, Z[A] = K;
  }
  return jW(Z, $);
};
var PW = "toJSON" in new Headers;
var A1 = ($) => {
  for (let Y in $)
    return true;
  return false;
};
var OW = ($, Y) => {
  if (!$ || !Array.isArray(Y))
    return $;
  $.delete("Set-Cookie");
  for (let W = 0;W < Y.length; W++) {
    const X = Y[W].indexOf("=");
    $.append("Set-Cookie", `${Y[W].slice(0, X)}=${Y[W].slice(X + 1)}`);
  }
  return $;
};
var SW = ($) => {
  if (!$ || typeof $ !== "object" || !A1($))
    return;
  const Y = [];
  for (let [W, X] of Object.entries($)) {
    if (!W || !X)
      continue;
    if (Array.isArray(X.value))
      for (let Z = 0;Z < X.value.length; Z++) {
        let Q = X.value[Z];
        if (Q === undefined || Q === null)
          continue;
        if (typeof Q === "object")
          Q = JSON.stringify(Q);
        Y.push(y$(W, Q, X));
      }
    else {
      let Z = X.value;
      if (Z === undefined || Z === null)
        continue;
      if (typeof Z === "object")
        Z = JSON.stringify(Z);
      Y.push(y$(W, X.value, X));
    }
  }
  if (Y.length === 0)
    return;
  if (Y.length === 1)
    return Y[0];
  return Y;
};
var B1 = ($, Y) => {
  if (A1(Y.headers) || Y.status !== 200 || Y.redirect || Y.cookie) {
    if (typeof Y.status === "string")
      Y.status = U6[Y.status];
    if (Y.redirect) {
      if (Y.headers.Location = Y.redirect, !Y.status || Y.status < 300 || Y.status >= 400)
        Y.status = 302;
    }
    if (Y.cookie && A1(Y.cookie))
      Y.headers["Set-Cookie"] = SW(Y.cookie);
    if (Y.headers["Set-Cookie"] && Array.isArray(Y.headers["Set-Cookie"]))
      Y.headers = OW(new Headers(Y.headers), Y.headers["Set-Cookie"]);
    switch ($?.constructor?.name) {
      case "String":
      case "Blob":
        return new Response($, { status: Y.status, headers: Y.headers });
      case "Object":
      case "Array":
        return Response.json($, Y);
      case undefined:
        if (!$)
          return new Response("", Y);
        return Response.json($, Y);
      case "Response":
        const W = { ...Y.headers };
        if (PW)
          Y.headers = $.headers.toJSON();
        else
          for (let [Z, Q] of $.headers.entries())
            if (Z in Y.headers)
              Y.headers[Z] = Q;
        for (let Z in W)
          $.headers.append(Z, W[Z]);
        return $;
      case "Error":
        return F$($, Y);
      case "Promise":
        return $.then((Z) => B1(Z, Y));
      case "Function":
        return B1($(), Y);
      case "Number":
      case "Boolean":
        return new Response($.toString(), Y);
      case "Cookie":
        if ($ instanceof s0)
          return new Response($.value, Y);
        return new Response($?.toString(), Y);
      default:
        const X = JSON.stringify($);
        if (X.charCodeAt(0) === 123) {
          if (!Y.headers["Content-Type"])
            Y.headers["Content-Type"] = "application/json";
          return new Response(JSON.stringify($), Y);
        }
        return new Response(X, Y);
    }
  } else
    switch ($?.constructor?.name) {
      case "String":
      case "Blob":
        return new Response($);
      case "Object":
      case "Array":
        return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
      case undefined:
        if (!$)
          return new Response("");
        return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
      case "Response":
        return $;
      case "Error":
        return F$($, Y);
      case "Promise":
        return $.then((X) => {
          const Z = K1(X);
          if (Z !== undefined)
            return Z;
          return new Response("");
        });
      case "Function":
        return K1($());
      case "Number":
      case "Boolean":
        return new Response($.toString());
      case "Cookie":
        if ($ instanceof s0)
          return new Response($.value, Y);
        return new Response($?.toString(), Y);
      default:
        const W = JSON.stringify($);
        if (W.charCodeAt(0) === 123)
          return new Response(JSON.stringify($), { headers: { "Content-Type": "application/json" } });
        return new Response(W);
    }
};
var r0 = ($, Y) => {
  if ($ === undefined || $ === null)
    return;
  if (A1(Y.headers) || Y.status !== 200 || Y.redirect || Y.cookie) {
    if (typeof Y.status === "string")
      Y.status = U6[Y.status];
    if (Y.redirect) {
      if (Y.headers.Location = Y.redirect, !Y.status || Y.status < 300 || Y.status >= 400)
        Y.status = 302;
    }
    if (Y.cookie && A1(Y.cookie))
      Y.headers["Set-Cookie"] = SW(Y.cookie);
    if (Y.headers["Set-Cookie"] && Array.isArray(Y.headers["Set-Cookie"]))
      Y.headers = OW(new Headers(Y.headers), Y.headers["Set-Cookie"]);
    switch ($?.constructor?.name) {
      case "String":
      case "Blob":
        return new Response($, Y);
      case "Object":
      case "Array":
        return Response.json($, Y);
      case undefined:
        if (!$)
          return;
        return Response.json($, Y);
      case "Response":
        const W = Object.assign({}, Y.headers);
        if (PW)
          Y.headers = $.headers.toJSON();
        else
          for (let [Z, Q] of $.headers.entries())
            if (!(Z in Y.headers))
              Y.headers[Z] = Q;
        for (let Z in W)
          $.headers.append(Z, W[Z]);
        if ($.status !== Y.status)
          Y.status = $.status;
        return $;
      case "Promise":
        return $.then((Z) => {
          const Q = r0(Z, Y);
          if (Q !== undefined)
            return Q;
          return;
        });
      case "Error":
        return F$($, Y);
      case "Function":
        return r0($(), Y);
      case "Number":
      case "Boolean":
        return new Response($.toString(), Y);
      case "Cookie":
        if ($ instanceof s0)
          return new Response($.value, Y);
        return new Response($?.toString(), Y);
      default:
        const X = JSON.stringify($);
        if (X.charCodeAt(0) === 123) {
          if (!Y.headers["Content-Type"])
            Y.headers["Content-Type"] = "application/json";
          return new Response(JSON.stringify($), Y);
        }
        return new Response(X, Y);
    }
  } else
    switch ($?.constructor?.name) {
      case "String":
      case "Blob":
        return new Response($);
      case "Object":
      case "Array":
        return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
      case undefined:
        if (!$)
          return new Response("");
        return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
      case "Response":
        return $;
      case "Promise":
        return $.then((X) => {
          const Z = r0(X, Y);
          if (Z !== undefined)
            return Z;
          return;
        });
      case "Error":
        return F$($, Y);
      case "Function":
        return K1($());
      case "Number":
      case "Boolean":
        return new Response($.toString());
      case "Cookie":
        if ($ instanceof s0)
          return new Response($.value, Y);
        return new Response($?.toString(), Y);
      default:
        const W = JSON.stringify($);
        if (W.charCodeAt(0) === 123)
          return new Response(JSON.stringify($), { headers: { "Content-Type": "application/json" } });
        return new Response(W);
    }
};
var K1 = ($) => {
  switch ($?.constructor?.name) {
    case "String":
    case "Blob":
      return new Response($);
    case "Object":
    case "Array":
      return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
    case undefined:
      if (!$)
        return new Response("");
      return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
    case "Response":
      return $;
    case "Error":
      return F$($);
    case "Promise":
      return $.then((W) => {
        const X = K1(W);
        if (X !== undefined)
          return X;
        return new Response("");
      });
    case "Function":
      return K1($());
    case "Number":
    case "Boolean":
      return new Response($.toString());
    default:
      const Y = JSON.stringify($);
      if (Y.charCodeAt(0) === 123)
        return new Response(JSON.stringify($), { headers: { "Content-Type": "application/json" } });
      return new Response(Y);
  }
};
var F$ = ($, Y) => new Response(JSON.stringify({ name: $?.name, message: $?.message, cause: $?.cause }), { status: Y?.status !== 200 ? Y?.status ?? 500 : 500, headers: Y?.headers });
var pW = X1(F6(), 1);
var B7 = new Headers().toJSON;
var iW = new RegExp(" (\\w+) = context", "g");
var mW = { value: 0 };
var uW = ({ hasTrace: $, hasTraceSet: Y = false, hasTraceChildren: W = false, addFn: X, condition: Z = {} }) => {
  if ($) {
    const Q = W ? "\nawait new Promise(r => {queueMicrotask(() => queueMicrotask(r))})\n" : "\nawait new Promise(r => {queueMicrotask(r)})\n";
    return (J, { name: z, attribute: A = "", unit: F = 0 } = {}) => {
      const w = J.indexOf("."), K = w === -1;
      if (J !== "request" && J !== "response" && !Z[K ? J : J.slice(0, w)])
        return () => {
          if (Y && J === "afterHandle")
            X(Q);
        };
      if (K)
        z ||= J;
      else
        z ||= "anonymous";
      X("\n" + `reporter.emit('event', { 
					id,
					event: '${J}',
					type: 'begin',
					name: '${z}',
					time: performance.now(),
					${K ? `unit: ${F},` : ""}
					${A}
				})`.replace(/(\t| |\n)/g, "") + "\n");
      let b = false;
      return () => {
        if (b)
          return;
        if (b = true, X("\n" + `reporter.emit('event', {
							id,
							event: '${J}',
							type: 'end',
							time: performance.now()
						})`.replace(/(\t| |\n)/g, "") + "\n"), Y && J === "afterHandle")
          X(Q);
      };
    };
  } else
    return () => () => {
    };
};
var w$ = ($) => {
  const Y = $.indexOf(")");
  if ($.charCodeAt(Y + 2) === 61 && $.charCodeAt(Y + 5) !== 123)
    return true;
  return $.includes("return");
};
var F7 = ($, { injectResponse: Y = "" } = {}) => ({ composeValidation: (W, X = `c.${W}`) => $ ? `c.set.status = 400; throw new ValidationError(
'${W}',
${W},
${X}
)` : `c.set.status = 400; return new ValidationError(
	'${W}',
	${W},
	${X}
).toResponse(c.set.headers)`, composeResponseValidation: (W = "r") => {
  const X = $ ? `throw new ValidationError(
'response',
response[c.set.status],
${W}
)` : `return new ValidationError(
'response',
response[c.set.status],
${W}
).toResponse(c.set.headers)`;
  return `\n${Y}
		if(response[c.set.status]?.Check(${W}) === false) { 
	if(!(response instanceof Error))
		${X}
}\n`;
} });
var O0 = ($, Y) => {
  if (Y = Y.trimStart(), Y = Y.replaceAll(/^async /g, ""), /^(\w+)\(/g.test(Y))
    Y = Y.slice(Y.indexOf("("));
  const W = Y.charCodeAt(0) === 40 || Y.startsWith("function") ? Y.slice(Y.indexOf("(") + 1, Y.indexOf(")")) : Y.slice(0, Y.indexOf("=") - 1);
  if (W === "")
    return false;
  const X = W.charCodeAt(0) === 123 ? W.indexOf("...") : -1;
  if (W.charCodeAt(0) === 123) {
    if (W.includes($))
      return true;
    if (X === -1)
      return false;
  }
  if (Y.match(new RegExp(`${W}(.${$}|\\["${$}"\\])`)))
    return true;
  const Z = X !== -1 ? W.slice(X + 3, W.indexOf(" ", X + 3)) : undefined;
  if (Y.match(new RegExp(`${Z}(.${$}|\\["${$}"\\])`)))
    return true;
  const Q = [W];
  if (Z)
    Q.push(Z);
  for (let z of Y.matchAll(iW))
    Q.push(z[1]);
  const J = new RegExp(`{.*?} = (${Q.join("|")})`, "g");
  for (let [z] of Y.matchAll(J))
    if (z.includes(`{ ${$}`) || z.includes(`, ${$}`))
      return true;
  return false;
};
var s1 = ($) => {
  if ($ = $.trimStart(), $ = $.replaceAll(/^async /g, ""), /^(\w+)\(/g.test($))
    $ = $.slice($.indexOf("("));
  const Y = $.charCodeAt(0) === 40 || $.startsWith("function") ? $.slice($.indexOf("(") + 1, $.indexOf(")")) : $.slice(0, $.indexOf("=") - 1);
  if (Y === "")
    return false;
  const W = Y.charCodeAt(0) === 123 ? Y.indexOf("...") : -1, X = W !== -1 ? Y.slice(W + 3, Y.indexOf(" ", W + 3)) : undefined, Z = [Y];
  if (X)
    Z.push(X);
  for (let J of $.matchAll(iW))
    Z.push(J[1]);
  for (let J of Z)
    if (new RegExp(`\\b\\w+\\([^)]*\\b${J}\\b[^)]*\\)`).test($))
      return true;
  const Q = new RegExp(`{.*?} = (${Z.join("|")})`, "g");
  for (let [J] of $.matchAll(Q))
    if (new RegExp(`\\b\\w+\\([^)]*\\b${J}\\b[^)]*\\)`).test($))
      return true;
  return false;
};
var t1 = Symbol.for("TypeBox.Kind");
var n$ = ($, Y) => {
  if (!Y)
    return;
  if ((t1 in Y) && Y[t1] === $)
    return true;
  if (Y.type === "object") {
    const W = Y.properties;
    for (let X of Object.keys(W)) {
      const Z = W[X];
      if (Z.type === "object") {
        if (n$($, Z))
          return true;
      } else if (Z.anyOf) {
        for (let Q = 0;Q < Z.anyOf.length; Q++)
          if (n$($, Z.anyOf[Q]))
            return true;
      }
      if ((t1 in Z) && Z[t1] === $)
        return true;
    }
    return false;
  }
  return Y.properties && (t1 in Y.properties) && Y.properties[t1] === $;
};
var D6 = Symbol.for("TypeBox.Transform");
var b1 = ($) => {
  if (!$)
    return;
  if ($.type === "object") {
    const Y = $.properties;
    for (let W of Object.keys(Y)) {
      const X = Y[W];
      if (X.type === "object") {
        if (b1(X))
          return true;
      } else if (X.anyOf) {
        for (let Q = 0;Q < X.anyOf.length; Q++)
          if (b1(X.anyOf[Q]))
            return true;
      }
      if (D6 in X)
        return true;
    }
    return false;
  }
  return (D6 in $) || $.properties && (D6 in $.properties);
};
var D7 = ($) => {
  if (!$)
    return;
  const Y = $?.schema;
  if (Y && ("anyOf" in Y)) {
    let W = false;
    const X = Y.anyOf[0].type;
    for (let Z of Y.anyOf)
      if (Z.type !== X) {
        W = true;
        break;
      }
    if (!W)
      return X;
  }
  return $.schema?.type;
};
var w7 = /(?:return|=>) \S*\(/g;
var M0 = ($) => {
  if ($.constructor.name === "AsyncFunction")
    return true;
  return $.toString().match(w7);
};
var hW = ({ path: $, method: Y, hooks: W, validator: X, handler: Z, handleError: Q, definitions: J, schema: z, onRequest: A, config: F, reporter: w }) => {
  const K = F.forceErrorEncapsulation || W.error.length > 0 || typeof Bun === "undefined" || W.onResponse.length > 0 || !!W.trace.length, b = W.onResponse.length ? `\n;(async () => {${W.onResponse.map((E, d) => `await res${d}(c)`).join(";")}})();\n` : "", O = W.trace.map((E) => E.toString());
  let N = false;
  if (s1(Z.toString()))
    N = true;
  if (!N)
    for (let [E, d] of Object.entries(W)) {
      if (!Array.isArray(d) || !d.length || !["parse", "transform", "beforeHandle", "afterHandle", "onResponse"].includes(E))
        continue;
      for (let u of d) {
        if (typeof u !== "function")
          continue;
        if (s1(u.toString())) {
          N = true;
          break;
        }
      }
      if (N)
        break;
    }
  const L = { parse: O.some((E) => O0("parse", E)), transform: O.some((E) => O0("transform", E)), handle: O.some((E) => O0("handle", E)), beforeHandle: O.some((E) => O0("beforeHandle", E)), afterHandle: O.some((E) => O0("afterHandle", E)), error: K || O.some((E) => O0("error", E)) }, j = W.trace.length > 0;
  let U = "";
  if (j)
    U += "\nconst id = c.$$requestId\n";
  U += K ? "try {\n" : "";
  const D = X || Y !== "GET" && Y !== "HEAD" ? [Z, ...W.transform, ...W.beforeHandle, ...W.afterHandle].map((E) => E.toString()) : [], I = N || Y !== "GET" && Y !== "HEAD" && W.type !== "none" && (!!X.body || !!W.type || D.some((E) => O0("body", E))), G = N || X.headers || D.some((E) => O0("headers", E)), V = N || X.cookie || D.some((E) => O0("cookie", E)), R = X?.cookie?.schema;
  let n = "";
  if (R?.sign) {
    if (!R.secrets)
      throw new Error(`t.Cookie required secret which is not set in (${Y}) ${$}.`);
    const E = !R.secrets ? undefined : typeof R.secrets === "string" ? R.secrets : R.secrets[0];
    if (n += `const _setCookie = c.set.cookie
		if(_setCookie) {`, R.sign === true)
      n += `for(const [key, cookie] of Object.entries(_setCookie)) {
				c.set.cookie[key].value = signCookie(cookie.value, '${E}')
			}`;
    else
      for (let d of R.sign)
        n += `if(_setCookie['${d}']?.value) { c.set.cookie['${d}'].value = signCookie(_setCookie['${d}'].value, '${E}') }\n`;
    n += "}\n";
  }
  const { composeValidation: o, composeResponseValidation: $0 } = F7(K);
  if (G)
    U += B7 ? "c.headers = c.request.headers.toJSON()\n" : `c.headers = {}
                for (const [key, value] of c.request.headers.entries())
					c.headers[key] = value
				`;
  if (V) {
    const E = R ? `{
			secret: ${R.secrets !== undefined ? typeof R.secrets === "string" ? `'${R.secrets}'` : "[" + R.secrets.reduce((d, u) => d + `'${u}',`, "") + "]" : "undefined"},
			sign: ${R.sign === true ? true : R.sign !== undefined ? "[" + R.sign.reduce((d, u) => d + `'${u}',`, "") + "]" : "undefined"}
		}` : "undefined";
    if (G)
      U += `\nc.cookie = parseCookie(c.set, c.headers.cookie, ${E})\n`;
    else
      U += `\nc.cookie = parseCookie(c.set, c.request.headers.get('cookie'), ${E})\n`;
  }
  if (N || X.query || D.some((E) => O0("query", E)))
    U += `const url = c.request.url

		if(c.qi !== -1) {
			c.query ??= parseQuery(url.substring(c.qi + 1))
		} else {
			c.query ??= {}
		}
		`;
  const w0 = W.trace.map((E) => E.toString()), k0 = w0.some((E) => O0("set", E) || s1(E)), A0 = k0 && w0.some((E) => E.includes("children") || s1(E));
  N || W.trace.some((E) => O0("set", E.toString()));
  const v0 = k0 || V || D.some((E) => O0("set", E)) || A.some((E) => O0("set", E.toString())), H0 = uW({ hasTrace: j, hasTraceSet: k0, hasTraceChildren: A0, condition: L, addFn: (E) => {
    U += E;
  } }), p0 = I || k0 || M0(Z) || W.parse.length > 0 || W.afterHandle.some(M0) || W.beforeHandle.some(M0) || W.transform.some(M0), g0 = H0("parse", { unit: W.parse.length });
  if (I) {
    const E = D7(X?.body);
    if (W.type && !Array.isArray(W.type)) {
      if (W.type)
        switch (W.type) {
          case "json":
          case "application/json":
            U += "c.body = await c.request.json()\n";
            break;
          case "text":
          case "text/plain":
            U += "c.body = await c.request.text()\n";
            break;
          case "urlencoded":
          case "application/x-www-form-urlencoded":
            U += "c.body = parseQuery(await c.request.text())\n";
            break;
          case "arrayBuffer":
          case "application/octet-stream":
            U += "c.body = await c.request.arrayBuffer()\n";
            break;
          case "formdata":
          case "multipart/form-data":
            U += `c.body = {}

						const form = await c.request.formData()
						for (const key of form.keys()) {
							if (c.body[key])
								continue

							const value = form.getAll(key)
							if (value.length === 1)
								c.body[key] = value[0]
							else c.body[key] = value
						}\n`;
            break;
        }
      if (W.parse.length)
        U += "}}";
    } else {
      const u = (() => {
        if (W.parse.length && E && !Array.isArray(W.type)) {
          const t = X?.body?.schema;
          switch (E) {
            case "object":
              if (n$("File", t) || n$("Files", t))
                return `c.body = {}
		
								const form = await c.request.formData()
								for (const key of form.keys()) {
									if (c.body[key])
										continue
			
									const value = form.getAll(key)
									if (value.length === 1)
										c.body[key] = value[0]
									else c.body[key] = value
								}`;
              break;
            default:
              break;
          }
        }
      })();
      if (u)
        U += u;
      else {
        if (U += "\n", U += G ? "let contentType = c.headers['content-type']" : "let contentType = c.request.headers.get('content-type')", U += `
				if (contentType) {
					const index = contentType.indexOf(';')
					if (index !== -1) contentType = contentType.substring(0, index)\n`, W.parse.length) {
          U += "let used = false\n";
          const t = H0("parse", { unit: W.parse.length });
          for (let q0 = 0;q0 < W.parse.length; q0++) {
            const E0 = H0("parse.unit", { name: W.parse[q0].name }), D0 = `bo${q0}`;
            if (q0 !== 0)
              U += "if(!used) {\n";
            if (U += `let ${D0} = parse[${q0}](c, contentType)\n`, U += `if(${D0} instanceof Promise) ${D0} = await ${D0}\n`, U += `if(${D0} !== undefined) { c.body = ${D0}; used = true }\n`, E0(), q0 !== 0)
              U += "}";
          }
          t();
        }
        if (W.parse.length)
          U += "if (!used)";
        U += `
				switch (contentType) {
					case 'application/json':
						c.body = await c.request.json()
						break
				
					case 'text/plain':
						c.body = await c.request.text()
						break
				
					case 'application/x-www-form-urlencoded':
						c.body = parseQuery(await c.request.text())
						break
				
					case 'application/octet-stream':
						c.body = await c.request.arrayBuffer();
						break
				
					case 'multipart/form-data':
						c.body = {}
				
						const form = await c.request.formData()
						for (const key of form.keys()) {
							if (c.body[key])
								continue
				
							const value = form.getAll(key)
							if (value.length === 1)
								c.body[key] = value[0]
							else c.body[key] = value
						}
				
						break
					}\n`, U += "}\n";
      }
    }
    U += "\n";
  }
  if (g0(), W?.transform) {
    const E = H0("transform", { unit: W.transform.length });
    for (let d = 0;d < W.transform.length; d++) {
      const u = W.transform[d], t = H0("transform.unit", { name: u.name });
      if (u.$elysia === "derive")
        U += M0(W.transform[d]) ? `Object.assign(c, await transform[${d}](c));` : `Object.assign(c, transform[${d}](c));`;
      else
        U += M0(W.transform[d]) ? `await transform[${d}](c);` : `transform[${d}](c);`;
      t();
    }
    E();
  }
  if (X) {
    if (U += "\n", X.headers) {
      if (U += `if(headers.Check(c.headers) === false) {
				${o("headers")}
			}`, b1(X.headers.schema))
        U += "\nc.headers = headers.Decode(c.headers)\n";
    }
    if (X.params) {
      if (U += `if(params.Check(c.params) === false) {
				${o("params")}
			}`, b1(X.params.schema))
        U += "\nc.params = params.Decode(c.params)\n";
    }
    if (X.query) {
      if (U += `if(query.Check(c.query) === false) {
				${o("query")} 
			}`, b1(X.query.schema))
        U += "\nc.query = query.Decode(Object.assign({}, c.query))\n";
    }
    if (X.body) {
      if (U += `if(body.Check(c.body) === false) { 
				${o("body")}
			}`, b1(X.body.schema))
        U += "\nc.body = body.Decode(c.body)\n";
    }
    if (X.cookie) {
      if (U += `const cookieValue = {}
			for(const [key, value] of Object.entries(c.cookie))
				cookieValue[key] = value.value

			if(cookie.Check(cookieValue) === false) {
				${o("cookie", "cookieValue")}
			}`, b1(X.cookie.schema))
        U += "\nc.cookie = params.Decode(c.cookie)\n";
    }
  }
  if (W?.beforeHandle) {
    const E = H0("beforeHandle", { unit: W.beforeHandle.length });
    for (let d = 0;d < W.beforeHandle.length; d++) {
      const u = H0("beforeHandle.unit", { name: W.beforeHandle[d].name }), t = `be${d}`;
      if (!w$(W.beforeHandle[d].toString()))
        U += M0(W.beforeHandle[d]) ? `await beforeHandle[${d}](c);\n` : `beforeHandle[${d}](c);\n`, u();
      else {
        U += M0(W.beforeHandle[d]) ? `let ${t} = await beforeHandle[${d}](c);\n` : `let ${t} = beforeHandle[${d}](c);\n`, u(), U += `if(${t} !== undefined) {\n`;
        const E0 = H0("afterHandle", { unit: W.transform.length });
        if (W.afterHandle) {
          const D0 = t;
          for (let a = 0;a < W.afterHandle.length; a++) {
            const F1 = w$(W.afterHandle[a].toString()), P = H0("afterHandle.unit", { name: W.afterHandle[a].name });
            if (U += `c.response = ${D0}\n`, !F1)
              U += M0(W.afterHandle[a]) ? `await afterHandle[${a}](c, ${D0});\n` : `afterHandle[${a}](c, ${D0});\n`;
            else {
              const _ = `af${a}`;
              U += M0(W.afterHandle[a]) ? `const ${_} = await afterHandle[${a}](c);\n` : `const ${_} = afterHandle[${a}](c);\n`, U += `if(${_} !== undefined) { c.response = ${D0} = ${_} }\n`;
            }
            P();
          }
        }
        if (E0(), X.response)
          U += $0(t);
        U += n, U += `return mapEarlyResponse(${t}, c.set)}\n`;
      }
    }
    E();
  }
  if (W?.afterHandle.length) {
    const E = H0("handle", { name: Z.name });
    if (W.afterHandle.length)
      U += M0(Z) ? "let r = c.response = await handler(c);\n" : "let r = c.response = handler(c);\n";
    else
      U += M0(Z) ? "let r = await handler(c);\n" : "let r = handler(c);\n";
    E();
    const d = H0("afterHandle", { unit: W.afterHandle.length });
    for (let u = 0;u < W.afterHandle.length; u++) {
      const t = `af${u}`, q0 = w$(W.afterHandle[u].toString()), E0 = H0("afterHandle.unit", { name: W.afterHandle[u].name });
      if (!q0)
        U += M0(W.afterHandle[u]) ? `await afterHandle[${u}](c)\n` : `afterHandle[${u}](c)\n`, E0();
      else {
        if (X.response)
          U += M0(W.afterHandle[u]) ? `let ${t} = await afterHandle[${u}](c)\n` : `let ${t} = afterHandle[${u}](c)\n`;
        else
          U += M0(W.afterHandle[u]) ? `let ${t} = mapEarlyResponse(await afterHandle[${u}](c), c.set)\n` : `let ${t} = mapEarlyResponse(afterHandle[${u}](c), c.set)\n`;
        if (E0(), X.response)
          U += `if(${t} !== undefined) {`, U += $0(t), U += `${t} = mapEarlyResponse(${t}, c.set)\n`, U += `if(${t}) {`, d(), U += `return ${t} } }`;
        else
          U += `if(${t}) {`, d(), U += `return ${t}}\n`;
      }
    }
    if (d(), U += "r = c.response\n", X.response)
      U += $0();
    if (U += n, v0)
      U += "return mapResponse(r, c.set)\n";
    else
      U += "return mapCompactResponse(r)\n";
  } else {
    const E = H0("handle", { name: Z.name });
    if (X.response)
      if (U += M0(Z) ? "const r = await handler(c);\n" : "const r = handler(c);\n", E(), U += $0(), H0("afterHandle")(), U += n, v0)
        U += "return mapResponse(r, c.set)\n";
      else
        U += "return mapCompactResponse(r)\n";
    else if (L.handle || V)
      if (U += M0(Z) ? "let r = await handler(c);\n" : "let r = handler(c);\n", E(), H0("afterHandle")(), U += n, v0)
        U += "return mapResponse(r, c.set)\n";
      else
        U += "return mapCompactResponse(r)\n";
    else {
      E();
      const d = M0(Z) ? "await handler(c) " : "handler(c)";
      if (H0("afterHandle")(), v0)
        U += `return mapResponse(${d}, c.set)\n`;
      else
        U += `return mapCompactResponse(${d})\n`;
    }
  }
  if (K || b) {
    if (U += `
} catch(error) {`, !p0)
      U += "return (async () => {";
    U += `const set = c.set

		if (!set.status || set.status < 300) set.status = 500
	`;
    const E = H0("error", { unit: W.error.length });
    if (W.error.length)
      for (let d = 0;d < W.error.length; d++) {
        const u = `er${d}`, t = H0("error.unit", { name: W.error[d].name });
        if (U += `\nlet ${u} = handleErrors[${d}](
					Object.assign(c, {
						error: error,
						code: error.code ?? error[ERROR_CODE] ?? "UNKNOWN"
					})
				)\n`, M0(W.error[d]))
          U += `if (${u} instanceof Promise) ${u} = await ${u}\n`;
        t(), U += `${u} = mapEarlyResponse(${u}, set)\n`, U += `if (${u}) {`, U += `return ${u} }\n`;
      }
    if (E(), U += "return handleError(c, error)\n\n", !p0)
      U += "})()";
    if (U += "}", b || j) {
      U += " finally { ";
      const d = H0("response", { unit: W.onResponse.length });
      U += b, d(), U += "}";
    }
  }
  return U = `const { 
		handler,
		handleError,
		hooks: {
			transform,
			beforeHandle,
			afterHandle,
			parse,
			error: handleErrors,
			onResponse
		},
		validator: {
			body,
			headers,
			params,
			query,
			response,
			cookie
		},
		utils: {
			mapResponse,
			mapCompactResponse,
			mapEarlyResponse,
			parseQuery
		},
		error: {
			NotFoundError,
			ValidationError,
			InternalServerError
		},
		schema,
		definitions,
		ERROR_CODE,
		reporter,
		requestId,
		parseCookie,
		signCookie
	} = hooks

	${W.onResponse.length ? `const ${W.onResponse.map((E, d) => `res${d} = onResponse[${d}]`).join(",")}` : ""}

	return ${p0 ? "async" : ""} function(c) {
		${z && J ? "c.schema = schema; c.defs = definitions;" : ""}
		${U}
	}`, Function("hooks", U)({ handler: Z, hooks: W, validator: X, handleError: Q, utils: { mapResponse: B1, mapCompactResponse: K1, mapEarlyResponse: r0, parseQuery: pW.parse }, error: { NotFoundError: S1, ValidationError: j0, InternalServerError: f$ }, schema: z, definitions: J, ERROR_CODE: o1, reporter: w, requestId: mW, parseCookie: h$, signCookie: I1 });
};
var w6 = ($) => {
  let Y = "", W = "";
  for (let K of Object.keys($.decorators))
    Y += `,${K}: app.decorators.${K}`;
  const { router: X, staticRouter: Z } = $, Q = $.event.trace.length > 0, J = `
	const route = find(request.method, path) ${X.root.ALL ? '?? find("ALL", path)' : ""}
	if (route === null)
		return ${$.event.error.length ? "app.handleError(ctx, notFound)" : `new Response(error404, {
					status: 404
				})`}

	ctx.params = route.params

	return route.store(ctx)`;
  let z = "";
  for (let [K, { code: b, all: O }] of Object.entries(Z.map))
    z += `case '${K}':\nswitch(request.method) {\n${b}\n${O ?? "default: break map"}}\n\n`;
  const A = $.event.request.some(M0);
  W += `const {
		app,
		app: { store, router, staticRouter },
		mapEarlyResponse,
		NotFoundError,
		requestId,
		reporter
	} = data

	const notFound = new NotFoundError()

	${$.event.request.length ? "const onRequest = app.event.request" : ""}

	${Z.variables}

	const find = router.find.bind(router)
	const handleError = app.handleError.bind(this)

	${$.event.error.length ? "" : "const error404 = notFound.message.toString()"}

	return ${A ? "async" : ""} function map(request) {
	`;
  const F = $.event.trace.map((K) => K.toString()), w = uW({ hasTrace: Q, hasTraceChildren: Q && F.some((K) => K.includes("children") || s1(K)), condition: { request: F.some((K) => O0("request", K) || s1(K)) }, addFn: (K) => {
    W += K;
  } });
  if ($.event.request.length) {
    W += `
			${Q ? "const id = +requestId.value++" : ""}

			const ctx = {
				request,
				store,
				set: {
					cookie: {},
					headers: {},
					status: 200
				}
				${Q ? ",$$requestId: +id" : ""}
				${Y}
			}
		`;
    const K = w("request", { attribute: "ctx", unit: $.event.request.length });
    W += "try {\n";
    for (let b = 0;b < $.event.request.length; b++) {
      const O = $.event.request[b], N = w$(O.toString()), L = M0(O), j = w("request.unit", { name: $.event.request[b].name }), U = `re${b}`;
      if (N)
        W += `const ${U} = mapEarlyResponse(
					${L ? "await" : ""} onRequest[${b}](ctx),
					ctx.set
				)\n`, j(), W += `if(${U}) return ${U}\n`;
      else
        W += `${L ? "await" : ""} onRequest[${b}](ctx)\n`, j();
    }
    W += `} catch (error) {
			return app.handleError(ctx, error)
		}`, K(), W += `
		const url = request.url,
		s = url.indexOf('/', 11),
		i = ctx.qi = url.indexOf('?', s + 1),
		path = ctx.path = i === -1 ? url.substring(s) : url.substring(s, i);`;
  } else
    W += `
		const url = request.url,
			s = url.indexOf('/', 11),
			qi = url.indexOf('?', s + 1),
			path = qi === -1
				? url.substring(s)
				: url.substring(s, qi)

		${Q ? "const id = +requestId.value++" : ""}

		const ctx = {
			request,
			store,
			qi,
			path,
			set: {
				headers: {},
				status: 200
			}
			${Q ? ",$$requestId: id" : ""}
			${Y}
		}`, w("request", { unit: $.event.request.length, attribute: F.some((K) => O0("context", K)) || F.some((K) => O0("store", K)) || F.some((K) => O0("set", K)) ? "ctx" : "" })();
  return W += `
		map: switch(path) {
			${z}

			default:
				break
		}

		${J}
	}`, $.handleError = K6($), Function("data", W)({ app: $, mapEarlyResponse: r0, NotFoundError: S1, reporter: $.reporter, requestId: mW });
};
var K6 = ($) => {
  let Y = `const {
		app: { event: { error: onError, onResponse: res } },
		mapResponse,
		ERROR_CODE
	} = inject

	return ${$.event.error.find(M0) ? "async" : ""} function(context, error) {
		const { set } = context
		`;
  for (let W = 0;W < $.event.error.length; W++) {
    const X = $.event.error[W], Z = `${M0(X) ? "await " : ""}onError[${W}](
			Object.assign(context, {
				code: error.code ?? error[ERROR_CODE] ?? 'UNKNOWN',
				error
			})
		)`;
    if (w$(X.toString()))
      Y += `const r${W} = ${Z}; if(r${W} !== undefined) return mapResponse(r${W}, set)\n`;
    else
      Y += Z + "\n";
  }
  return Y += `if(error.constructor.name === "ValidationError") {
		set.status = error.status ?? 400
		return new Response(
			error.message, 
			{ headers: set.headers, status: set.status }
		)
	} else {
		return new Response(error.message, { headers: set.headers, status: error.status ?? 500 })
	}
}`, Function("inject", Y)({ app: $, mapResponse: B1, ERROR_CODE: o1 });
};
var o$ = X1(F6(), 1);
var j6 = ($) => async (Y) => {
  const W = { cookie: {}, status: 200, headers: {} };
  let X;
  if ($.decorators)
    X = $.decorators, X.request = Y, X.set = W, X.store = $.store;
  else
    X = { set: W, store: $.store, request: Y };
  const Z = Y.url, Q = Z.indexOf("/", 11), J = Z.indexOf("?", Q + 1), z = J === -1 ? Z.substring(Q) : Z.substring(Q, J);
  try {
    for (let j = 0;j < $.event.request.length; j++) {
      const U = $.event.request[j];
      let D = U(X);
      if (D instanceof Promise)
        D = await D;
      if (D = r0(D, W), D)
        return D;
    }
    const A = $.dynamicRouter.find(Y.method, z) ?? $.dynamicRouter.find("ALL", z);
    if (!A)
      throw new S1;
    const { handle: F, hooks: w, validator: K, content: b } = A.store;
    let O;
    if (Y.method !== "GET" && Y.method !== "HEAD")
      if (b)
        switch (b) {
          case "application/json":
            O = await Y.json();
            break;
          case "text/plain":
            O = await Y.text();
            break;
          case "application/x-www-form-urlencoded":
            O = o$.parse(await Y.text());
            break;
          case "application/octet-stream":
            O = await Y.arrayBuffer();
            break;
          case "multipart/form-data":
            O = {};
            const j = await Y.formData();
            for (let U of j.keys()) {
              if (O[U])
                continue;
              const D = j.getAll(U);
              if (D.length === 1)
                O[U] = D[0];
              else
                O[U] = D;
            }
            break;
        }
      else {
        let j = Y.headers.get("content-type");
        if (j) {
          const U = j.indexOf(";");
          if (U !== -1)
            j = j.slice(0, U);
          for (let D = 0;D < $.event.parse.length; D++) {
            let I = $.event.parse[D](X, j);
            if (I instanceof Promise)
              I = await I;
            if (I) {
              O = I;
              break;
            }
          }
          if (O === undefined)
            switch (j) {
              case "application/json":
                O = await Y.json();
                break;
              case "text/plain":
                O = await Y.text();
                break;
              case "application/x-www-form-urlencoded":
                O = o$.parse(await Y.text());
                break;
              case "application/octet-stream":
                O = await Y.arrayBuffer();
                break;
              case "multipart/form-data":
                O = {};
                const D = await Y.formData();
                for (let I of D.keys()) {
                  if (O[I])
                    continue;
                  const G = D.getAll(I);
                  if (G.length === 1)
                    O[I] = G[0];
                  else
                    O[I] = G;
                }
                break;
            }
        }
      }
    X.body = O, X.params = A?.params || undefined, X.query = J === -1 ? {} : o$.parse(Z.substring(J + 1)), X.headers = {};
    for (let [j, U] of Y.headers.entries())
      X.headers[j] = U;
    const N = K?.cookie?.schema;
    X.cookie = h$(X.set, X.headers.cookie, N ? { secret: N.secrets !== undefined ? typeof N.secrets === "string" ? N.secrets : N.secrets.join(",") : undefined, sign: N.sign === true ? true : N.sign !== undefined ? typeof N.sign === "string" ? N.sign : N.sign.join(",") : undefined } : undefined);
    for (let j = 0;j < w.transform.length; j++) {
      const U = w.transform[j](X);
      if (w.transform[j].$elysia === "derive")
        if (U instanceof Promise)
          Object.assign(X, await U);
        else
          Object.assign(X, U);
      else if (U instanceof Promise)
        await U;
    }
    if (K) {
      if (K.headers) {
        const j = {};
        for (let U in Y.headers)
          j[U] = Y.headers.get(U);
        if (K.headers.Check(j) === false)
          throw new j0("header", K.headers, j);
      }
      if (K.params?.Check(X.params) === false)
        throw new j0("params", K.params, X.params);
      if (K.query?.Check(X.query) === false)
        throw new j0("query", K.query, X.query);
      if (K.cookie) {
        const j = {};
        for (let [U, D] of Object.entries(X.cookie))
          j[U] = D.value;
        if (K.cookie?.Check(j) === false)
          throw new j0("cookie", K.cookie, j);
      }
      if (K.body?.Check(O) === false)
        throw new j0("body", K.body, O);
    }
    for (let j = 0;j < w.beforeHandle.length; j++) {
      let U = w.beforeHandle[j](X);
      if (U instanceof Promise)
        U = await U;
      if (U !== undefined) {
        X.response = U;
        for (let I = 0;I < w.afterHandle.length; I++) {
          let G = w.afterHandle[I](X);
          if (G instanceof Promise)
            G = await G;
          if (G)
            U = G;
        }
        const D = r0(U, X.set);
        if (D)
          return D;
      }
    }
    let L = F(X);
    if (L instanceof Promise)
      L = await L;
    if (!w.afterHandle.length) {
      const j = K?.response?.[L.status];
      if (j?.Check(L) === false)
        throw new j0("response", j, L);
    } else {
      X.response = L;
      for (let j = 0;j < w.afterHandle.length; j++) {
        let U = w.afterHandle[j](X);
        if (U instanceof Promise)
          U = await U;
        const D = r0(U, X.set);
        if (D !== undefined) {
          const I = K?.response?.[L.status];
          if (I?.Check(D) === false)
            throw new j0("response", I, D);
          return D;
        }
      }
    }
    if (X.set.cookie && N?.sign) {
      const j = !N.secrets ? undefined : typeof N.secrets === "string" ? N.secrets : N.secrets[0];
      if (N.sign === true)
        for (let [U, D] of Object.entries(X.set.cookie))
          X.set.cookie[U].value = I1(D.value, "${secret}");
      else
        for (let U of N.sign) {
          if (!(U in N.properties))
            continue;
          if (X.set.cookie[U]?.value)
            X.set.cookie[U].value = I1(X.set.cookie[U].value, j);
        }
    }
    return B1(L, X.set);
  } catch (A) {
    if (A.status)
      W.status = A.status;
    return $.handleError(X, A);
  } finally {
    for (let A of $.event.onResponse)
      await A(X);
  }
};
var nW = ($) => async (Y, W) => {
  const X = Object.assign(Y, W);
  X.set = Y.set;
  for (let Z = 0;Z < $.event.error.length; Z++) {
    let Q = $.event.error[Z](X);
    if (Q instanceof Promise)
      Q = await Q;
    if (Q !== undefined && Q !== null)
      return B1(Q, Y.set);
  }
  return new Response(typeof W.cause === "string" ? W.cause : W.message, { headers: Y.set.headers, status: W.status ?? 500 });
};
var G1 = X1(E$(), 1);
var z0 = X1(f0(), 1);
try {
  G1.TypeSystem.Format("email", ($) => /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test($)), G1.TypeSystem.Format("uuid", ($) => /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test($)), G1.TypeSystem.Format("date", ($) => !Number.isNaN(new Date($).getTime())), G1.TypeSystem.Format("date-time", ($) => !Number.isNaN(new Date($).getTime()));
} catch ($) {
}
var oW = ($) => {
  if (typeof $ === "string")
    switch ($.slice(-1)) {
      case "k":
        return +$.slice(0, $.length - 1) * 1024;
      case "m":
        return +$.slice(0, $.length - 1) * 1048576;
      default:
        return +$;
    }
  return $;
};
var P6 = ($, Y) => {
  if (!(Y instanceof Blob))
    return false;
  if ($.minSize && Y.size < oW($.minSize))
    return false;
  if ($.maxSize && Y.size > oW($.maxSize))
    return false;
  if ($.extension)
    if (typeof $.extension === "string") {
      if (!Y.type.startsWith($.extension))
        return false;
    } else {
      for (let W = 0;W < $.extension.length; W++)
        if (Y.type.startsWith($.extension[W]))
          return true;
      return false;
    }
  return true;
};
var K7 = G1.TypeSystem.Type("Files", ($, Y) => {
  if (!Array.isArray(Y))
    return P6($, Y);
  if ($.minItems && Y.length < $.minItems)
    return false;
  if ($.maxItems && Y.length > $.maxItems)
    return false;
  for (let W = 0;W < Y.length; W++)
    if (!P6($, Y[W]))
      return false;
  return true;
});
z0.FormatRegistry.Set("numeric", ($) => !isNaN(+$));
z0.FormatRegistry.Set("ObjectString", ($) => {
  let Y = $.charCodeAt(0);
  if (Y === 9 || Y === 10 || Y === 32)
    Y = $.trimStart().charCodeAt(0);
  if (Y !== 123 && Y !== 91)
    return false;
  try {
    return JSON.parse($), true;
  } catch {
    return false;
  }
});
var R1 = { Numeric: ($) => z0.Type.Transform(z0.Type.Union([z0.Type.String({ format: "numeric", default: 0 }), z0.Type.Number($)])).Decode((Y) => {
  const W = +Y;
  if (isNaN(W))
    return Y;
  return W;
}).Encode((Y) => Y), ObjectString: ($, Y) => z0.Type.Transform(z0.Type.Union([z0.Type.String({ format: "ObjectString" }), z0.Type.Object($, Y)])).Decode((W) => {
  if (typeof W === "string")
    try {
      return JSON.parse(W);
    } catch {
      return W;
    }
  return W;
}).Encode((W) => JSON.stringify(W)), File: G1.TypeSystem.Type("File", P6), Files: ($) => z0.Type.Transform(z0.Type.Union([K7($)])).Decode((Y) => {
  if (Array.isArray(Y))
    return Y;
  return [Y];
}).Encode((Y) => Y), Nullable: ($) => z0.Type.Union([z0.Type.Null(), $]), MaybeEmpty: ($) => z0.Type.Union([z0.Type.Null(), z0.Type.Undefined(), $]), Cookie: ($, Y) => z0.Type.Object($, Y) };
z0.Type.ObjectString = R1.ObjectString;
z0.Type.Numeric = R1.Numeric;
z0.Type.File = ($ = {}) => R1.File({ default: "File", ...$, extension: $?.type, type: "string", format: "binary" });
z0.Type.Files = ($ = {}) => R1.Files({ ...$, elysiaMeta: "Files", default: "Files", extension: $?.type, type: "array", items: { ...$, default: "Files", type: "string", format: "binary" } });
z0.Type.Nullable = ($) => R1.Nullable($);
z0.Type.MaybeEmpty = R1.MaybeEmpty;
z0.Type.Cookie = R1.Cookie;

class c$ {
  config;
  dependencies = {};
  store = {};
  decorators = {};
  definitions = { type: {}, error: {} };
  schema = {};
  event = { start: [], request: [], parse: [], transform: [], beforeHandle: [], afterHandle: [], onResponse: [], trace: [], error: [], stop: [] };
  reporter = new R6;
  server = null;
  getServer() {
    return this.server;
  }
  validator = null;
  router = new E1;
  routes = [];
  staticRouter = { handlers: [], variables: "", map: {}, all: "" };
  dynamicRouter = new E1;
  lazyLoadModules = [];
  path = "";
  constructor($) {
    this.config = { forceErrorEncapsulation: false, prefix: "", aot: true, strictPath: false, scoped: false, cookie: {}, ...$, seed: $?.seed === undefined ? "" : $?.seed };
  }
  add($, Y, W, X, { allowMeta: Z = false, skipPrefix: Q = false } = { allowMeta: false, skipPrefix: false }) {
    if (typeof Y === "string")
      Y = [Y];
    for (let J of Y) {
      if (J = J === "" ? J : J.charCodeAt(0) === 47 ? J : `/${J}`, this.config.prefix && !Q)
        J = this.config.prefix + J;
      if (X?.type)
        switch (X.type) {
          case "text":
            X.type = "text/plain";
            break;
          case "json":
            X.type = "application/json";
            break;
          case "formdata":
            X.type = "multipart/form-data";
            break;
          case "urlencoded":
            X.type = "application/x-www-form-urlencoded";
            break;
          case "arrayBuffer":
            X.type = "application/octet-stream";
            break;
          default:
            break;
        }
      const z = this.definitions.type, A = U1(X?.cookie ?? this.validator?.cookie, { dynamic: !this.config.aot, models: z, additionalProperties: true });
      if (A && A1(this.config.cookie ?? []))
        A.schema = DW(A.schema, this.config.cookie ?? {});
      const F = { body: U1(X?.body ?? this.validator?.body, { dynamic: !this.config.aot, models: z }), headers: U1(X?.headers ?? this.validator?.headers, { dynamic: !this.config.aot, models: z, additionalProperties: true }), params: U1(X?.params ?? this.validator?.params, { dynamic: !this.config.aot, models: z }), query: U1(X?.query ?? this.validator?.query, { dynamic: !this.config.aot, models: z }), cookie: A, response: q6(X?.response ?? this.validator?.response, { dynamic: !this.config.aot, models: z }) }, w = C1(this.event, X), K = J.endsWith("/") ? J.slice(0, J.length - 1) : J + "/";
      if (this.config.aot === false) {
        if (this.dynamicRouter.add($, J, { validator: F, hooks: w, content: X?.type, handle: W }), this.config.strictPath === false)
          this.dynamicRouter.add($, K, { validator: F, hooks: w, content: X?.type, handle: W });
        this.routes.push({ method: $, path: J, composed: null, handler: W, hooks: w });
        return;
      }
      const b = hW({ path: J, method: $, hooks: w, validator: F, handler: W, handleError: this.handleError, onRequest: this.event.request, config: this.config, definitions: Z ? this.definitions.type : undefined, schema: Z ? this.schema : undefined, reporter: this.reporter });
      if (this.routes.push({ method: $, path: J, composed: b, handler: W, hooks: w }), J.indexOf(":") === -1 && J.indexOf("*") === -1) {
        const O = this.staticRouter.handlers.length;
        if (this.staticRouter.handlers.push(b), this.staticRouter.variables += `const st${O} = staticRouter.handlers[${O}]\n`, !this.staticRouter.map[J])
          this.staticRouter.map[J] = { code: "" };
        if ($ === "ALL")
          this.staticRouter.map[J].all = `default: return st${O}(ctx)\n`;
        else
          this.staticRouter.map[J].code += `case '${$}': return st${O}(ctx)\n`;
        if (!this.config.strictPath) {
          if (!this.staticRouter.map[K])
            this.staticRouter.map[K] = { code: "" };
          if ($ === "ALL")
            this.staticRouter.map[K].all = `default: return st${O}(ctx)\n`;
          else
            this.staticRouter.map[K].code += `case '${$}': return st${O}(ctx)\n`;
        }
      } else if (this.router.add($, J, b), !this.config.strictPath)
        this.router.add($, J.endsWith("/") ? J.slice(0, J.length - 1) : J + "/", b);
    }
  }
  onStart($) {
    return this.on("start", $), this;
  }
  onRequest($) {
    return this.on("request", $), this;
  }
  onParse($) {
    return this.on("parse", $), this;
  }
  onTransform($) {
    return this.on("transform", $), this;
  }
  onBeforeHandle($) {
    return this.on("beforeHandle", $), this;
  }
  onAfterHandle($) {
    return this.on("afterHandle", $), this;
  }
  onResponse($) {
    return this.on("response", $), this;
  }
  trace($) {
    return this.reporter.on("event", _6(this.reporter, $)), this.on("trace", $), this;
  }
  addError($, Y) {
    return this.error($, Y);
  }
  error($, Y) {
    switch (typeof $) {
      case "string":
        return Y.prototype[o1] = $, this.definitions.error[$] = Y, this;
      case "function":
        return this.definitions.error = $(this.definitions.error), this;
    }
    for (let [W, X] of Object.entries($))
      X.prototype[o1] = W, this.definitions.error[W] = X;
    return this;
  }
  onError($) {
    return this.on("error", $), this;
  }
  onStop($) {
    return this.on("stop", $), this;
  }
  on($, Y) {
    for (let W of Array.isArray(Y) ? Y : [Y])
      switch (W = wW(W), $) {
        case "start":
          this.event.start.push(W);
          break;
        case "request":
          this.event.request.push(W);
          break;
        case "response":
          this.event.onResponse.push(W);
          break;
        case "parse":
          this.event.parse.splice(this.event.parse.length - 1, 0, W);
          break;
        case "transform":
          this.event.transform.push(W);
          break;
        case "beforeHandle":
          this.event.beforeHandle.push(W);
          break;
        case "afterHandle":
          this.event.afterHandle.push(W);
          break;
        case "trace":
          this.event.trace.push(W);
          break;
        case "error":
          this.event.error.push(W);
          break;
        case "stop":
          this.event.stop.push(W);
          break;
      }
    return this;
  }
  group($, Y, W) {
    const X = new c$({ ...this.config, prefix: "" });
    X.store = this.store;
    const Z = typeof Y === "object", Q = (Z ? W : Y)(X);
    if (this.decorators = N1(this.decorators, X.decorators), Q.event.request.length)
      this.event.request = [...this.event.request, ...Q.event.request];
    if (Q.event.onResponse.length)
      this.event.onResponse = [...this.event.onResponse, ...Q.event.onResponse];
    return this.model(Q.definitions.type), Object.values(X.routes).forEach(({ method: J, path: z, handler: A, hooks: F }) => {
      if (z = this.config.prefix + $ + z, Z) {
        const w = Y, K = F;
        this.add(J, z, A, C1(w, { ...K, error: !K.error ? Q.event.error : Array.isArray(K.error) ? [...K.error, ...Q.event.error] : [K.error, ...Q.event.error] }));
      } else
        this.add(J, z, A, C1(F, { error: Q.event.error }), { skipPrefix: true });
    }), this;
  }
  guard($, Y) {
    if (!Y)
      return this.event = m$(this.event, $), this.validator = { body: $.body, headers: $.headers, params: $.params, query: $.query, response: $.response }, this;
    const W = new c$;
    W.store = this.store;
    const X = Y(W);
    if (this.decorators = N1(this.decorators, W.decorators), X.event.request.length)
      this.event.request = [...this.event.request, ...X.event.request];
    if (X.event.onResponse.length)
      this.event.onResponse = [...this.event.onResponse, ...X.event.onResponse];
    return this.model(X.definitions.type), Object.values(W.routes).forEach(({ method: Z, path: Q, handler: J, hooks: z }) => {
      this.add(Z, Q, J, C1($, { ...z, error: !z.error ? X.event.error : Array.isArray(z.error) ? [...z.error, ...X.event.error] : [z.error, ...X.event.error] }));
    }), this;
  }
  use($) {
    if ($ instanceof Promise)
      return this.lazyLoadModules.push($.then((Y) => {
        if (typeof Y === "function")
          return Y(this);
        if (typeof Y.default === "function")
          return Y.default(this);
        return this._use(Y);
      }).then((Y) => Y.compile())), this;
    else
      return this._use($);
    return this;
  }
  _use($) {
    if (typeof $ === "function") {
      const Z = $(this);
      if (Z instanceof Promise)
        return this.lazyLoadModules.push(Z.then((Q) => Q.compile())), this;
      return Z;
    }
    const { name: Y, seed: W } = $.config;
    $.getServer = () => this.getServer();
    const X = $.config.scoped;
    if (X) {
      if (Y) {
        if (!(Y in this.dependencies))
          this.dependencies[Y] = [];
        const Z = W !== undefined ? M6(Y + JSON.stringify(W)) : 0;
        if (this.dependencies[Y].some((Q) => Z === Q))
          return this;
        this.dependencies[Y].push(Z);
      }
      if ($.model(this.definitions.type), $.error(this.definitions.error), $.onRequest((Z) => {
        Object.assign(Z, this.decorators), Object.assign(Z.store, this.store);
      }), $.config.aot)
        $.compile();
      return this.mount($.fetch);
    }
    this.decorate($.decorators), this.state($.store), this.model($.definitions.type), this.error($.definitions.error);
    for (let { method: Z, path: Q, handler: J, hooks: z } of Object.values($.routes))
      this.add(Z, Q, J, C1(z, { error: $.event.error }));
    if (!X)
      if (Y) {
        if (!(Y in this.dependencies))
          this.dependencies[Y] = [];
        const Z = W !== undefined ? M6(Y + JSON.stringify(W)) : 0;
        if (this.dependencies[Y].some((Q) => Z === Q))
          return this;
        this.dependencies[Y].push(Z), this.event = m$(this.event, N6($.event), Z);
      } else
        this.event = m$(this.event, N6($.event));
    return this;
  }
  mount($, Y) {
    if (typeof $ === "function" || $.length === 0 || $ === "/") {
      const Z = typeof $ === "function" ? $ : Y, Q = async ({ request: J, path: z }) => Z(new Request("http://a.cc" + z || "/", J));
      return this.all("/", Q, { type: "none" }), this.all("/*", Q, { type: "none" }), this;
    }
    const W = $.length, X = async ({ request: Z, path: Q }) => Y(new Request("http://a.cc" + Q.slice(W) || "/", Z));
    return this.all($, X, { type: "none" }), this.all($ + ($.endsWith("/") ? "*" : "/*"), X, { type: "none" }), this;
  }
  get($, Y, W) {
    return this.add("GET", $, Y, W), this;
  }
  post($, Y, W) {
    return this.add("POST", $, Y, W), this;
  }
  put($, Y, W) {
    return this.add("PUT", $, Y, W), this;
  }
  patch($, Y, W) {
    return this.add("PATCH", $, Y, W), this;
  }
  delete($, Y, W) {
    return this.add("DELETE", $, Y, W), this;
  }
  options($, Y, W) {
    return this.add("OPTIONS", $, Y, W), this;
  }
  all($, Y, W) {
    return this.add("ALL", $, Y, W), this;
  }
  head($, Y, W) {
    return this.add("HEAD", $, Y, W), this;
  }
  connect($, Y, W) {
    return this.add("CONNECT", $, Y, W), this;
  }
  ws($, Y) {
    const W = Y.transformMessage ? Array.isArray(Y.transformMessage) ? Y.transformMessage : [Y.transformMessage] : undefined;
    let X = null;
    const Z = U1(Y?.body, { models: this.definitions.type }), Q = U1(Y?.response, { models: this.definitions.type }), J = (z) => {
      const A = z.charCodeAt(0);
      if (A === 47 || A === 123)
        try {
          z = JSON.parse(z);
        } catch {
        }
      else if (!Number.isNaN(+z))
        z = +z;
      if (W?.length)
        for (let F = 0;F < W.length; F++) {
          const w = W[F](z);
          if (w !== undefined)
            z = w;
        }
      return z;
    };
    return this.get($, (z) => {
      const { set: A, path: F, qi: w, headers: K, query: b, params: O } = z;
      if (X === null)
        X = this.getServer();
      if (X?.upgrade(z.request, { headers: typeof Y.upgrade === "function" ? Y.upgrade(z) : Y.upgrade, data: { validator: Q, open(N) {
        Y.open?.(new c1(N, z));
      }, message: (N, L) => {
        const j = J(L);
        if (Z?.Check(j) === false)
          return void N.send(new j0("message", Z, j).message);
        Y.message?.(new c1(N, z), j);
      }, drain(N) {
        Y.drain?.(new c1(N, z));
      }, close(N, L, j) {
        Y.close?.(new c1(N, z), L, j);
      } } }))
        return;
      return A.status = 400, "Expected a websocket connection";
    }, { beforeHandle: Y.beforeHandle, transform: Y.transform, headers: Y.headers, params: Y.params, query: Y.query }), this;
  }
  route($, Y, W, { config: X, ...Z } = { config: { allowMeta: false } }) {
    return this.add($, Y, W, Z, X), this;
  }
  state($, Y) {
    switch (typeof $) {
      case "object":
        return this.store = N1(this.store, $), this;
      case "function":
        return this.store = $(this.store), this;
    }
    if (!($ in this.store))
      this.store[$] = Y;
    return this;
  }
  decorate($, Y) {
    switch (typeof $) {
      case "object":
        return this.decorators = N1(this.decorators, $), this;
      case "function":
        return this.decorators = $(this.decorators), this;
    }
    if (!($ in this.decorators))
      this.decorators[$] = Y;
    return this;
  }
  derive($) {
    return $.$elysia = "derive", this.onTransform($);
  }
  model($, Y) {
    switch (typeof $) {
      case "object":
        return Object.entries($).forEach(([W, X]) => {
          if (!(W in this.definitions.type))
            this.definitions.type[W] = X;
        }), this;
      case "function":
        return this.definitions.type = $(this.definitions.type), this;
    }
    return this.definitions.type[$] = Y, this;
  }
  mapDerive($) {
    return $.$elysia = "derive", this.onTransform($);
  }
  affix($, Y, W) {
    if (W === "")
      return this;
    const X = ["_", "-", " "], Z = (A) => A[0].toUpperCase() + A.slice(1), Q = $ === "prefix" ? (A, F) => X.includes(A.at(-1) ?? "") ? A + F : A + Z(F) : X.includes(W.at(-1) ?? "") ? (A, F) => F + A : (A, F) => F + Z(A), J = (A) => {
      const F = {};
      switch (A) {
        case "decorator":
          for (let w in this.decorators)
            F[Q(W, w)] = this.decorators[w];
          this.decorators = F;
          break;
        case "state":
          for (let w in this.store)
            F[Q(W, w)] = this.store[w];
          this.store = F;
          break;
        case "model":
          for (let w in this.definitions.type)
            F[Q(W, w)] = this.definitions.type[w];
          this.definitions.type = F;
          break;
        case "error":
          for (let w in this.definitions.error)
            F[Q(W, w)] = this.definitions.error[w];
          this.definitions.error = F;
          break;
      }
    }, z = Array.isArray(Y) ? Y : [Y];
    for (let A of z.some((F) => F === "all") ? ["decorator", "state", "model", "error"] : z)
      J(A);
    return this;
  }
  prefix($, Y) {
    return this.affix("prefix", $, Y);
  }
  suffix($, Y) {
    return this.affix("suffix", $, Y);
  }
  compile() {
    if (this.fetch = this.config.aot ? w6(this) : j6(this), typeof this.server?.reload === "function")
      this.server.reload({ ...this.server, fetch: this.fetch });
    return this;
  }
  handle = async ($) => this.fetch($);
  fetch = ($) => (this.fetch = this.config.aot ? w6(this) : j6(this))($);
  handleError = async ($, Y) => (this.handleError = this.config.aot ? K6(this) : nW(this))($, Y);
  outerErrorHandler = ($) => new Response($.message || $.name || "Error", { status: $?.status ?? 500 });
  listen = ($, Y) => {
    if (!Bun)
      throw new Error("Bun to run");
    if (this.compile(), typeof $ === "string") {
      if ($ = +$.trim(), Number.isNaN($))
        throw new Error("Port must be a numeric value");
    }
    const W = this.fetch, X = typeof $ === "object" ? { development: !M$, ...this.config.serve, ...$, websocket: { ...this.config.websocket, ...W6 }, fetch: W, error: this.outerErrorHandler } : { development: !M$, ...this.config.serve, websocket: { ...this.config.websocket, ...W6 }, port: $, fetch: W, error: this.outerErrorHandler };
    if (typeof Bun === "undefined")
      throw new Error(".listen() is designed to run on Bun only. If you are running Elysia in other environment please use a dedicated plugin or export the handler via Elysia.fetch");
    if (this.server = Bun?.serve(X), this.event.start.length)
      (async () => {
        const Z = Object.assign(this.decorators, { store: this.store, app: this });
        for (let Q = 0;Q < this.event.transform.length; Q++) {
          const J = this.event.transform[Q](Z);
          if (this.event.transform[Q].$elysia === "derive")
            if (J instanceof Promise)
              Object.assign(Z, await J);
            else
              Object.assign(Z, J);
        }
        for (let Q = 0;Q < this.event.start.length; Q++)
          this.event.start[Q](Z);
      })();
    if (Y)
      Y(this.server);
    return Promise.all(this.lazyLoadModules).then(() => {
      Bun?.gc(false);
    }), this;
  };
  stop = async () => {
    if (!this.server)
      throw new Error("Elysia isn't running. Call `app.listen` to start the server.");
    if (this.server.stop(), this.event.stop.length)
      (async () => {
        const $ = Object.assign(this.decorators, { store: this.store, app: this });
        for (let Y = 0;Y < this.event.transform.length; Y++) {
          const W = this.event.transform[Y]($);
          if (this.event.transform[Y].$elysia === "derive")
            if (W instanceof Promise)
              Object.assign($, await W);
            else
              Object.assign($, W);
        }
        for (let Y = 0;Y < this.event.stop.length; Y++)
          this.event.stop[Y]($);
      })();
  };
  get modules() {
    return Promise.all(this.lazyLoadModules);
  }
}
var export_t = z0.Type;

// node_modules/@elysiajs/cors/dist/index.js
var cors = ({ origin = true, methods = "*", allowedHeaders = "*", exposedHeaders = "*", credentials = false, maxAge = 5, preflight = true } = {
  origin: true,
  methods: "*",
  allowedHeaders: "*",
  exposedHeaders: "*",
  credentials: false,
  maxAge: 5,
  preflight: true
}) => (app) => {
  const origins = typeof origin === "boolean" ? undefined : Array.isArray(origin) ? origin : [origin];
  const processOrigin = (origin2, request, from) => {
    switch (typeof origin2) {
      case "string":
        return origin2;
      case "function":
        return origin2(request);
      case "object":
        if (origin2.test(from))
          return true;
    }
  };
  const handleOrigin = (set, request) => {
    if (origin === true) {
      set.headers["Vary"] = "*";
      set.headers["Access-Control-Allow-Origin"] = "*";
      return;
    }
    if (!origins?.length)
      return;
    const headers = [];
    if (origins.length) {
      const from = request.headers.get("Origin") ?? "";
      for (let i = 0;i < origins.length; i++) {
        const value = processOrigin(origins[i], request, from);
        if (value === true) {
          set.headers["Vary"] = origin ? "Origin" : "*";
          set.headers["Access-Control-Allow-Origin"] = request.headers.get("Origin") ?? "*";
          return;
        }
        if (value)
          headers.push(value);
      }
    }
    set.headers["Vary"] = "Origin";
    set.headers["Access-Control-Allow-Origin"] = headers.join(", ");
  };
  const handleMethod = (set) => {
    if (!methods?.length)
      return;
    if (methods === "*")
      return set.headers["Access-Control-Allow-Methods"] = "*";
    if (!Array.isArray(methods))
      return set.headers["Access-Control-Allow-Methods"] = methods;
    set.headers["Access-Control-Allow-Methods"] = methods.join(", ");
  };
  if (preflight)
    app.options("/", ({ set, request }) => {
      handleOrigin(set, request);
      handleMethod(set);
      if (exposedHeaders.length)
        set.headers["Access-Control-Allow-Headers"] = typeof allowedHeaders === "string" ? allowedHeaders : allowedHeaders.join(", ");
      if (maxAge)
        set.headers["Access-Control-Max-Age"] = maxAge.toString();
      return new Response("", {
        status: 204
      });
    }).options("/*", ({ set, request }) => {
      handleOrigin(set, request);
      handleMethod(set);
      if (exposedHeaders.length)
        set.headers["Access-Control-Allow-Headers"] = typeof allowedHeaders === "string" ? allowedHeaders : allowedHeaders.join(", ");
      if (maxAge)
        set.headers["Access-Control-Max-Age"] = maxAge.toString();
      return new Response("", {
        status: 204
      });
    });
  return app.onRequest(({ set, request }) => {
    handleOrigin(set, request);
    handleMethod(set);
    if (allowedHeaders.length)
      set.headers["Access-Control-Allow-Headers"] = typeof allowedHeaders === "string" ? allowedHeaders : allowedHeaders.join(", ");
    if (exposedHeaders.length)
      set.headers["Access-Control-Exposed-Headers"] = typeof exposedHeaders === "string" ? exposedHeaders : exposedHeaders.join(", ");
    if (credentials)
      set.headers["Access-Control-Allow-Credentials"] = "true";
  });
};

// node_modules/valibot/dist/index.js
var getIssues = function(issues) {
  return { issues };
};
var getOutput = function(output) {
  return { output };
};
var getIssue = function(info, issue) {
  return {
    reason: info?.reason,
    validation: issue.validation,
    origin: info?.origin || "value",
    message: issue.message,
    input: issue.input,
    path: issue.path,
    abortEarly: info?.abortEarly,
    abortPipeEarly: info?.abortPipeEarly,
    skipPipe: info?.skipPipe
  };
};
var getPipeInfo = function(info, reason) {
  return {
    reason,
    origin: info?.origin,
    abortEarly: info?.abortEarly,
    abortPipeEarly: info?.abortPipeEarly,
    skipPipe: info?.skipPipe
  };
};
var executePipe = function(input, pipe, parseInfo, reason) {
  if (!pipe || !pipe.length || parseInfo?.skipPipe) {
    return getOutput(input);
  }
  let pipeInfo;
  let issues;
  let output = input;
  for (const action of pipe) {
    const result = action(output);
    if (result.issues) {
      pipeInfo = pipeInfo || getPipeInfo(parseInfo, reason);
      for (const issueInfo of result.issues) {
        const issue = getIssue(pipeInfo, issueInfo);
        issues ? issues.push(issue) : issues = [issue];
      }
      if (pipeInfo.abortEarly || pipeInfo.abortPipeEarly) {
        break;
      }
    } else {
      output = result.output;
    }
  }
  return issues ? getIssues(issues) : getOutput(output);
};
var getDefaultArgs = function(arg1, arg2) {
  return Array.isArray(arg1) ? [undefined, arg1] : [arg1, arg2];
};
var getErrorMessage = function(error) {
  return typeof error === "function" ? error() : error;
};
var getSchemaIssues = function(info, reason, validation, error, input, issues) {
  return {
    issues: [
      {
        reason,
        validation,
        origin: info?.origin || "value",
        message: getErrorMessage(error),
        input,
        issues,
        abortEarly: info?.abortEarly,
        abortPipeEarly: info?.abortPipeEarly,
        skipPipe: info?.skipPipe
      }
    ]
  };
};
var object = function(object2, arg2, arg3) {
  const [error, pipe] = getDefaultArgs(arg2, arg3);
  let cachedEntries;
  return {
    schema: "object",
    object: object2,
    async: false,
    _parse(input, info) {
      if (!input || typeof input !== "object") {
        return getSchemaIssues(info, "type", "object", error || "Invalid type", input);
      }
      cachedEntries = cachedEntries || Object.entries(object2);
      let issues;
      const output = {};
      for (const [key, schema] of cachedEntries) {
        const value2 = input[key];
        const result = schema._parse(value2, info);
        if (result.issues) {
          const pathItem = {
            schema: "object",
            input,
            key,
            value: value2
          };
          for (const issue of result.issues) {
            if (issue.path) {
              issue.path.unshift(pathItem);
            } else {
              issue.path = [pathItem];
            }
            issues?.push(issue);
          }
          if (!issues) {
            issues = result.issues;
          }
          if (info?.abortEarly) {
            break;
          }
        } else {
          output[key] = result.output;
        }
      }
      return issues ? getIssues(issues) : executePipe(output, pipe, info, "object");
    }
  };
};
var string = function(arg1, arg2) {
  const [error, pipe] = getDefaultArgs(arg1, arg2);
  return {
    schema: "string",
    async: false,
    _parse(input, info) {
      if (typeof input !== "string") {
        return getSchemaIssues(info, "type", "string", error || "Invalid type", input);
      }
      return executePipe(input, pipe, info, "string");
    }
  };
};
var parse = function(schema, input, info) {
  const result = schema._parse(input, info);
  if (result.issues) {
    throw new ValiError(result.issues);
  }
  return result.output;
};
var ValiError = class extends Error {
  issues;
  constructor(issues) {
    super(issues[0].message);
    this.name = "ValiError";
    this.issues = issues;
  }
};
var BrandSymbol = Symbol("brand");

// src/index.ts
var EnvSchema = object({
  FRONTEND_URL: string("no env FRONTEND_URL")
});
var env = parse(EnvSchema, process.env);
console.log("env", env);
var app = new c$().use(cors());
app.get("/", () => "Hello Elysia");
app.post("/", ({ body, set }) => {
  console.log("body", body);
  const url = new URL(`${env.FRONTEND_URL}/payment/status`);
  const params = new URLSearchParams;
  for (const [key, value] of Object.entries(body)) {
    params.set(key, value);
  }
  url.search = params.toString();
  console.log(url.toString());
  set.status = 302;
  set.headers = {
    location: url.toString()
  };
}, {
  body: export_t.Object({
    transNo: export_t.String(),
    respCode: export_t.String(),
    status: export_t.String(),
    orderNo: export_t.String()
  })
});
app.listen(3334);
console.log(`\uD83E\uDD8A Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
