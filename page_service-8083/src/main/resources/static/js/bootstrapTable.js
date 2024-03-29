/**
 * bootstrap-table - An extended table to integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma, Material Design, Foundation)
 *
 * @version v1.15.3
 * @homepage https://bootstrap-table.com
 * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
 * @license MIT
 */

(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
      ? module.exports = t(require("jquery")) : "function" == typeof define
      && define.amd ? define(["jquery"], t) : (e = e || self, e.BootstrapTable = t(
      e.jQuery))
})(this, function (t) {
  'use strict';
  var m = String.prototype, b = Math.max, y = Math.min, w = Math.floor,
      v = Math.ceil;

  function e(e, t) {
    return t = {exports: {}}, e(t, t.exports), t.exports
  }

  function a(e) {
    return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
          return typeof e
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol
          && e !== Symbol.prototype ? "symbol" : typeof e
        }, a(e)
  }

  function n(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError(
          "Cannot call a class as a function")
    }
  }

  function i(e, t) {
    for (var o, a = 0; a < t.length; a++) {
      o = t[a], o.enumerable = o.enumerable
          || !1, o.configurable = !0, "value" in o
      && (o.writable = !0), Object.defineProperty(e, o.key, o)
    }
  }

  function s(e, t, o) {
    return t && i(e.prototype, t), o && i(e, o), e
  }

  function l(e, t) {
    return d(e) || u(e, t) || g()
  }

  function r(e) {
    return c(e) || p(e) || h()
  }

  function c(e) {
    if (Array.isArray(e)) {
      for (var t = 0, o = Array(e.length); t < e.length; t++) {
        o[t] = e[t];
      }
      return o
    }
  }

  function d(e) {
    if (Array.isArray(e)) {
      return e
    }
  }

  function p(e) {
    if (Symbol.iterator in Object(e) || "[object Arguments]"
        === Object.prototype.toString.call(e)) {
      return Array.from(e)
    }
  }

  function u(e, t) {
    var o = [], a = !0, n = !1, i = void 0;
    try {
      for (var s, l = e[Symbol.iterator]();
          !(a = (s = l.next()).done) && (o.push(s.value), !(t && o.length
              === t)); a = !0) {
        ;
      }
    } catch (e) {
      n = !0, i = e
    } finally {
      try {
        a || null == l["return"] || l["return"]()
      } finally {
        if (n) {
          throw i
        }
      }
    }
    return o
  }

  function h() {
    throw new TypeError("Invalid attempt to spread non-iterable instance")
  }

  function g() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance")
  }

  t = t && t.hasOwnProperty("default") ? t["default"] : t;
  var S, x, k,
      T = "undefined" == typeof globalThis ? "undefined" == typeof window
          ? "undefined" == typeof global ? "undefined" == typeof self ? {}
              : self : global : window : globalThis, P = "object",
      o = function (e) {
        return e && e.Math == Math && e
      }, C = o(typeof globalThis == P && globalThis) || o(
      typeof window == P && window) || o(typeof self == P && self) || o(
      typeof T == P && T) || Function("return this")(), I = function (e) {
        try {
          return !!e()
        } catch (e) {
          return !0
        }
      }, A = !I(function () {
        return 7 != Object.defineProperty({}, "a", {
          get: function () {
            return 7
          }
        }).a
      }), E = {}.propertyIsEnumerable, R = Object.getOwnPropertyDescriptor,
      _ = R && !E.call({1: 2}, 1), N = _ ? function (e) {
        var t = R(this, e);
        return !!t && t.enumerable
      } : E, f = {f: N}, F = function (e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t
        }
      }, D = {}.toString, L = function (e) {
        return D.call(e).slice(8, -1)
      }, V = "".split, B = I(function () {
        return !Object("z").propertyIsEnumerable(0)
      }) ? function (e) {
        return "String" == L(e) ? V.call(e, "") : Object(e)
      } : Object, H = function (e) {
        if (null == e) {
          throw TypeError("Can't call method on " + e);
        }
        return e
      }, M = function (e) {
        return B(H(e))
      }, U = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
      }, q = function (e, t) {
        if (!U(e)) {
          return e;
        }
        var o, a;
        if (t && "function" == typeof (o = e.toString) && !U(
            a = o.call(e))) {
          return a;
        }
        if ("function" == typeof (o = e.valueOf) && !U(a = o.call(e))) {
          return a;
        }
        if (!t && "function" == typeof (o = e.toString) && !U(
            a = o.call(e))) {
          return a;
        }
        throw TypeError("Can't convert object to primitive value")
      }, z = {}.hasOwnProperty, G = function (e, t) {
        return z.call(e, t)
      }, W = C.document, Y = U(W) && U(W.createElement), K = function (e) {
        return Y ? W.createElement(e) : {}
      }, X = !A && !I(function () {
        return 7 != Object.defineProperty(K("div"), "a", {
          get: function () {
            return 7
          }
        }).a
      }), Q = Object.getOwnPropertyDescriptor, J = A ? Q : function (e, t) {
        if (e = M(e), t = q(t, !0), X) {
          try {
            return Q(e, t)
          } catch (e) {
          }
        }
        return G(e, t) ? F(!f.f.call(e, t), e[t]) : void 0
      }, Z = {f: J}, ee = function (e) {
        if (!U(e)) {
          throw TypeError(e + " is not an object");
        }
        return e
      }, te = Object.defineProperty, oe = A ? te : function (e, t, o) {
        if (ee(e), t = q(t, !0), ee(o), X) {
          try {
            return te(e, t, o)
          } catch (e) {
          }
        }
        if ("get" in o || "set" in o) {
          throw TypeError("Accessors not supported");
        }
        return "value" in o && (e[t] = o.value), e
      }, ae = {f: oe}, ne = A ? function (e, t, o) {
        return ae.f(e, t, F(1, o))
      } : function (e, t, o) {
        return e[t] = o, e
      }, ie = function (e, t) {
        try {
          ne(C, e, t)
        } catch (o) {
          C[e] = t
        }
        return t
      }, se = e(function (e) {
        var t = C["__core-js_shared__"] || ie("__core-js_shared__", {});
        (e.exports = function (e, o) {
          return t[e] || (t[e] = void 0 === o ? {} : o)
        })("versions", []).push({
          version: "3.1.3",
          mode: "global",
          copyright: "\xA9 2019 Denis Pushkarev (zloirock.ru)"
        })
      }), le = se("native-function-to-string", Function.toString), re = C.WeakMap,
      ce = "function" == typeof re && /native code/.test(le.call(re)), de = 0,
      O = Math.random(), pe = function (e) {
        return "Symbol(" + ((void 0 === e ? "" : e) + ")_") + (++de + O).toString(
            36)
      }, ue = se("keys"), he = function (e) {
        return ue[e] || (ue[e] = pe(e))
      }, ge = {}, fe = C.WeakMap, me = function (e) {
        return k(e) ? x(e) : S(e, {})
      };
  if (ce) {
    var be = new fe, ye = be.get, we = be.has, ve = be.set;
    S = function (e, t) {
      return ve.call(be, e, t), t
    }, x = function (e) {
      return ye.call(be, e) || {}
    }, k = function (e) {
      return we.call(be, e)
    }
  } else {
    var Se = he("state");
    ge[Se] = !0, S = function (e, t) {
      return ne(e, Se, t), t
    }, x = function (e) {
      return G(e, Se) ? e[Se] : {}
    }, k = function (e) {
      return G(e, Se)
    }
  }
  var xe = {
        set: S, get: x, has: k, enforce: me, getterFor: function (e) {
          return function (t) {
            var o;
            if (!U(t) || (o = x(t)).type !== e) {
              throw TypeError(
                  "Incompatible receiver, " + e + " required");
            }
            return o
          }
        }
      }, ke = e(function (e) {
        var t = xe.get, o = xe.enforce, a = (le + "").split("toString");
        se("inspectSource", function (e) {
          return le.call(e)
        }), (e.exports = function (e, t, n, i) {
          var s = !!i && !!i.unsafe, l = !!i && !!i.enumerable,
              r = !!i && !!i.noTargetGet;
          return ("function" == typeof n && ("string" == typeof t && !G(n, "name")
          && ne(n, "name", t), o(n).source = a.join(
              "string" == typeof t ? t : "")), e === C) ? void (l ? e[t] = n : ie(t,
              n)) : void (s ? !r && e[t] && (l = !0) : delete e[t], l ? e[t] = n
              : ne(e, t, n))
        })(Function.prototype, "toString", function () {
          return "function" == typeof this && t(this).source || le.call(this)
        })
      }), Te = C, Pe = function (e) {
        return "function" == typeof e ? e : void 0
      }, Oe = function (e, t) {
        return 2 > arguments.length ? Pe(Te[e]) || Pe(C[e]) : Te[e] && Te[e][t]
            || C[e] && C[e][t]
      }, Ce = function (e) {
        return isNaN(e = +e) ? 0 : (0 < e ? w : v)(e)
      }, Ie = function (e) {
        return 0 < e ? y(Ce(e), 9007199254740991) : 0
      }, $e = function (e, t) {
        var o = Ce(e);
        return 0 > o ? b(o + t, 0) : y(o, t)
      }, Ae = function (e) {
        return function (t, o, a) {
          var n, i = M(t), s = Ie(i.length), l = $e(a, s);
          if (e && o != o) {
            for (; s > l;) {
              if (n = i[l++], n != n) {
                return !0;
              }
            }
          } else {
            for (; s > l; l++) {
              if ((e || l in i) && i[l] === o) {
                return e || l
                    || 0;
              }
            }
          }
          return !e && -1
        }
      }, Ee = {includes: Ae(!0), indexOf: Ae(!1)}, Re = Ee.indexOf,
      _e = function (e, t) {
        var o, a = M(e), n = 0, s = [];
        for (o in a) {
          !G(ge, o) && G(a, o) && s.push(o);
        }
        for (; t.length > n;) {
          G(a, o = t[n++]) && (~Re(s, o) || s.push(o));
        }
        return s
      }, Ne = ["constructor", "hasOwnProperty", "isPrototypeOf",
        "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
      Fe = Ne.concat("length", "prototype"),
      De = Object.getOwnPropertyNames || function (e) {
        return _e(e, Fe)
      }, Le = {f: De}, Ve = Object.getOwnPropertySymbols, Be = {f: Ve},
      He = Oe("Reflect", "ownKeys") || function (e) {
        var t = Le.f(ee(e)), o = Be.f;
        return o ? t.concat(o(e)) : t
      }, je = function (e, t) {
        for (var o, a = He(t), n = ae.f, s = Z.f, l = 0; l < a.length;
            l++) {
          o = a[l], G(e, o) || n(e, o, s(t, o))
        }
      }, Me = /#|\.prototype\./, Ue = function (e, t) {
        var o = ze[qe(e)];
        return o == We || o != Ge && ("function" == typeof t ? I(t) : !!t)
      }, qe = Ue.normalize = function (e) {
        return (e + "").replace(Me, ".").toLowerCase()
      }, ze = Ue.data = {}, Ge = Ue.NATIVE = "N", We = Ue.POLYFILL = "P", Ye = Ue,
      Ke = Z.f, Xe = function (e, t) {
        var o, a, n, i, s, l, r = e.target, c = e.global, d = e.stat;
        if (a = c ? C : d ? C[r] || ie(r, {}) : (C[r] || {}).prototype, a) {
          for (n in
              t) {
            if (s = t[n], e.noTargetGet ? (l = Ke(a, n), i = l && l.value)
                : i = a[n], o = Ye(c ? n : r + (d ? "." : "#") + n, e.forced), !o
            && void 0 !== i) {
              if (typeof s == typeof i) {
                continue;
              }
              je(s, i)
            }
            (e.sham || i && i.sham) && ne(s, "sham", !0), ke(a, n, s, e)
          }
        }
      }, Qe = !!Object.getOwnPropertySymbols && !I(function () {
        return !(Symbol() + "")
      }), Je = Array.isArray || function (e) {
        return "Array" == L(e)
      }, Ze = function (e) {
        return Object(H(e))
      }, et = Object.keys || function (e) {
        return _e(e, Ne)
      }, tt = A ? Object.defineProperties : function (e, t) {
        ee(e);
        for (var o, a = et(t), n = a.length, i = 0; n > i;) {
          ae.f(e, o = a[i++],
              t[o]);
        }
        return e
      }, ot = Oe("document", "documentElement"), at = he("IE_PROTO"),
      nt = "prototype", it = function () {
      }, st = function () {
        var e, t = K("iframe"), o = Ne.length, a = "<", n = "script", i = ">";
        for (t.style.display = "none", ot.appendChild(t), t.src = "java" + n + ":"
            + "", e = t.contentWindow.document, e.open(), e.write(
            a + n + i + "document.F=Object" + a + "/" + n + i), e.close(), st = e.F;
            o--;) {
          delete st[nt][Ne[o]];
        }
        return st()
      }, lt = Object.create || function (e, t) {
        var o;
        return null === e ? o = st() : (it[nt] = ee(
            e), o = new it, it[nt] = null, o[at] = e), void 0 === t ? o : tt(o, t)
      };
  ge[at] = !0;
  var rt = Le.f, ct = {}.toString,
      dt = "object" == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window) : [], pt = function (e) {
        try {
          return rt(e)
        } catch (e) {
          return dt.slice()
        }
      }, ut = {
        f: function (e) {
          return dt && "[object Window]" == ct.call(e) ? pt(e) : rt(M(e))
        }
      }, ht = C.Symbol, gt = se("wks"), ft = function (e) {
        return gt[e] || (gt[e] = Qe && ht[e] || (Qe ? ht : pe)("Symbol." + e))
      }, mt = {f: ft}, bt = ae.f, yt = function (e) {
        var t = Te.Symbol || (Te.Symbol = {});
        G(t, e) || bt(t, e, {value: mt.f(e)})
      }, wt = ae.f, vt = ft("toStringTag"), St = function (e, t, o) {
        e && !G(e = o ? e : e.prototype, vt) && wt(e, vt,
            {configurable: !0, value: t})
      }, xt = function (e) {
        if ("function" != typeof e) {
          throw TypeError(e + " is not a function");
        }
        return e
      }, kt = function (e, t, o) {
        return (xt(e), void 0 === t) ? e : 0 === o ? function () {
          return e.call(t)
        } : 1 === o ? function (o) {
          return e.call(t, o)
        } : 2 === o ? function (o, a) {
          return e.call(t, o, a)
        } : 3 === o ? function (o, a, n) {
          return e.call(t, o, a, n)
        } : function () {
          return e.apply(t, arguments)
        }
      }, Tt = ft("species"), Pt = function (e, t) {
        var o;
        return Je(e) && (o = e.constructor, "function" == typeof o && (o === Array
            || Je(o.prototype)) ? o = void 0 : U(o) && (o = o[Tt], null === o
        && (o = void 0))), new (void 0 === o ? Array : o)(0 === t ? 0 : t)
      }, Ot = [].push, Ct = function (e) {
        var t = 1 == e, o = 4 == e, a = 6 == e;
        return function (n, i, s, l) {
          for (var r, c, d = Ze(n), p = B(d), u = kt(i, s, 3), h = Ie(p.length),
              g = 0, f = l || Pt, m = t ? f(n, h) : 2 == e ? f(n, 0) : void 0;
              h > g; g++) {
            if ((5 == e || a || g in p) && (r = p[g], c = u(r, g,
                d), e)) {
              if (t) {
                m[g] = c;
              } else if (c) {
                switch (e) {
                  case 3:
                    return !0;
                  case 5:
                    return r;
                  case 6:
                    return g;
                  case 2:
                    Ot.call(m, r);
                }
              } else if (o) {
                return !1;
              }
            }
          }
          return a ? -1 : 3 == e || o ? o : m
        }
      }, It = {
        forEach: Ct(0),
        map: Ct(1),
        filter: Ct(2),
        some: Ct(3),
        every: Ct(4),
        find: Ct(5),
        findIndex: Ct(6)
      }, $t = It.forEach, At = he("hidden"), Et = "Symbol", Rt = "prototype",
      _t = ft("toPrimitive"), Nt = xe.set, Ft = xe.getterFor(Et),
      Dt = Object[Rt], Lt = C.Symbol, Vt = C.JSON, Bt = Vt && Vt.stringify,
      Ht = Z.f, jt = ae.f, Mt = ut.f, Ut = f.f, qt = se("symbols"),
      zt = se("op-symbols"), Gt = se("string-to-symbol-registry"),
      Wt = se("symbol-to-string-registry"), Yt = se("wks"), Kt = C.QObject,
      Xt = !Kt || !Kt[Rt] || !Kt[Rt].findChild, Qt = A && I(function () {
        return 7 != lt(jt({}, "a", {
          get: function () {
            return jt(this, "a", {value: 7}).a
          }
        })).a
      }) ? function (e, t, o) {
        var a = Ht(Dt, t);
        a && delete Dt[t], jt(e, t, o), a && e !== Dt && jt(Dt, t, a)
      } : jt, Jt = function (e, t) {
        var o = qt[e] = lt(Lt[Rt]);
        return Nt(o, {type: Et, tag: e, description: t}), A
        || (o.description = t), o
      }, Zt = Qe && "symbol" == typeof Lt.iterator ? function (e) {
        return "symbol" == typeof e
      } : function (e) {
        return Object(e) instanceof Lt
      }, eo = function (e, t, o) {
        e === Dt && eo(zt, t, o), ee(e);
        var a = q(t, !0);
        return ee(o), G(qt, a) ? (o.enumerable ? (G(e, At) && e[At][a]
        && (e[At][a] = !1), o = lt(o, {enumerable: F(0, !1)})) : (!G(e, At) && jt(e,
            At, F(1, {})), e[At][a] = !0), Qt(e, a, o)) : jt(e, a, o)
      }, to = function (e, t) {
        ee(e);
        var o = M(t), a = et(o).concat(io(o));
        return $t(a, function (t) {
          (!A || oo.call(o, t)) && eo(e, t, o[t])
        }), e
      }, oo = function (e) {
        var t = q(e, !0), o = Ut.call(this, t);
        return (this !== Dt || !G(qt, t) || G(zt, t)) && (!(o || !G(this, t) || !G(
            qt, t) || G(this, At) && this[At][t]) || o)
      }, ao = function (e, t) {
        var o = M(e), a = q(t, !0);
        if (o !== Dt || !G(qt, a) || G(zt, a)) {
          var n = Ht(o, a);
          return n && G(qt, a) && !(G(o, At) && o[At][a]) && (n.enumerable = !0), n
        }
      }, no = function (e) {
        var t = Mt(M(e)), o = [];
        return $t(t, function (e) {
          G(qt, e) || G(ge, e) || o.push(e)
        }), o
      }, io = function (e) {
        var t = e === Dt, o = Mt(t ? zt : M(e)), a = [];
        return $t(o, function (e) {
          G(qt, e) && (!t || G(Dt, e)) && a.push(qt[e])
        }), a
      };
  Qe || (Lt = function () {
    if (this instanceof Lt) {
      throw TypeError("Symbol is not a constructor");
    }
    var e = arguments.length && void 0 !== arguments[0] ? arguments[0] + ""
        : void 0, t = pe(e), o = function (e) {
      this === Dt && o.call(zt, e), G(this, At) && G(this[At], t)
      && (this[At][t] = !1), Qt(this, t, F(1, e))
    };
    return A && Xt && Qt(Dt, t, {configurable: !0, set: o}), Jt(t, e)
  }, ke(Lt[Rt], "toString", function () {
    return Ft(this).tag
  }), f.f = oo, ae.f = eo, Z.f = ao, Le.f = ut.f = no, Be.f = io, A && (jt(
      Lt[Rt], "description", {
        configurable: !0, get: function () {
          return Ft(this).description
        }
      }), ke(Dt, "propertyIsEnumerable", oo,
      {unsafe: !0})), mt.f = function (e) {
    return Jt(ft(e), e)
  }), Xe({global: !0, wrap: !0, forced: !Qe, sham: !Qe}, {Symbol: Lt}), $t(
      et(Yt), function (e) {
        yt(e)
      }), Xe({target: Et, stat: !0, forced: !Qe}, {
    for: function (e) {
      var t = e + "";
      if (G(Gt, t)) {
        return Gt[t];
      }
      var o = Lt(t);
      return Gt[t] = o, Wt[o] = t, o
    }, keyFor: function (e) {
      if (!Zt(e)) {
        throw TypeError(e + " is not a symbol");
      }
      return G(Wt, e) ? Wt[e] : void 0
    }, useSetter: function () {
      Xt = !0
    }, useSimple: function () {
      Xt = !1
    }
  }), Xe({target: "Object", stat: !0, forced: !Qe, sham: !A}, {
    create: function (e, t) {
      return void 0 === t ? lt(e) : to(lt(e), t)
    },
    defineProperty: eo,
    defineProperties: to,
    getOwnPropertyDescriptor: ao
  }), Xe({target: "Object", stat: !0, forced: !Qe},
      {getOwnPropertyNames: no, getOwnPropertySymbols: io}), Xe({
    target: "Object", stat: !0, forced: I(function () {
      Be.f(1)
    })
  }, {
    getOwnPropertySymbols: function (e) {
      return Be.f(Ze(e))
    }
  }), Vt && Xe({
    target: "JSON", stat: !0, forced: !Qe || I(function () {
      var e = Lt();
      return "[null]" != Bt([e]) || "{}" != Bt({a: e}) || "{}" != Bt(Object(e))
    })
  }, {
    stringify: function (e) {
      for (var t, o, a = [e], n = 1; arguments.length > n;) {
        a.push(
            arguments[n++]);
      }
      if (o = t = a[1], (U(t) || void 0 !== e) && !Zt(e)) {
        return Je(t)
        || (t = function (e, t) {
          if ("function" == typeof o && (t = o.call(this, e, t)), !Zt(t)) {
            return t
          }
        }), a[1] = t, Bt.apply(Vt, a)
      }
    }
  }), Lt[Rt][_t] || ne(Lt[Rt], _t, Lt[Rt].valueOf), St(Lt, Et), ge[At] = !0;
  var so = ae.f, lo = C.Symbol;
  if (A && "function" == typeof lo && (!("description" in lo.prototype)
      || void 0 !== lo().description)) {
    var ro = {}, co = function () {
      var e = 1 > arguments.length || void 0 === arguments[0] ? void 0
          : arguments[0] + "",
          t = this instanceof co ? new lo(e) : void 0 === e ? lo() : lo(e);
      return "" === e && (ro[t] = !0), t
    };
    je(co, lo);
    var po = co.prototype = lo.prototype;
    po.constructor = co;
    var uo = po.toString, ho = "Symbol(test)" == lo("test") + "",
        go = /^Symbol\((.*)\)[^)]+$/;
    so(po, "description", {
      configurable: !0, get: function () {
        var e = U(this) ? this.valueOf() : this, t = uo.call(e);
        if (G(ro, e)) {
          return "";
        }
        var o = ho ? t.slice(7, -1) : t.replace(go, "$1");
        return "" === o ? void 0 : o
      }
    }), Xe({global: !0, forced: !0}, {Symbol: co})
  }
  yt("iterator");
  var fo = function (e, t, o) {
        var a = q(t);
        a in e ? ae.f(e, a, F(0, o)) : e[a] = o
      }, mo = ft("species"), bo = function (e) {
        return !I(function () {
          var t = [], o = t.constructor = {};
          return o[mo] = function () {
            return {foo: 1}
          }, 1 !== t[e](Boolean).foo
        })
      }, yo = ft("isConcatSpreadable"), wo = 9007199254740991,
      vo = "Maximum allowed index exceeded", So = !I(function () {
        var e = [];
        return e[yo] = !1, e.concat()[0] !== e
      }), xo = bo("concat"), ko = function (e) {
        if (!U(e)) {
          return !1;
        }
        var t = e[yo];
        return void 0 === t ? Je(e) : !!t
      };
  Xe({target: "Array", proto: !0, forced: !So || !xo}, {
    concat: function () {
      var e, t, o, a, s, l = Ze(this), r = Pt(l, 0), c = 0;
      for (e = -1, o = arguments.length; e < o; e++) {
        if (s = -1 === e ? l
            : arguments[e], ko(s)) {
          if (a = Ie(s.length), c + a > wo) {
            throw TypeError(vo);
          }
          for (t = 0; t < a; t++, c++) {
            t in s && fo(r, c, s[t])
          }
        } else {
          if (c >= wo) {
            throw TypeError(vo);
          }
          fo(r, c++, s)
        }
      }
      return r.length = c, r
    }
  });
  var To = It.filter;
  Xe({target: "Array", proto: !0, forced: !bo("filter")}, {
    filter: function (e) {
      return To(this, e, 1 < arguments.length ? arguments[1] : void 0)
    }
  });
  var Po = ft("unscopables"), Oo = Array.prototype;
  null == Oo[Po] && ne(Oo, Po, lt(null));
  var Co = function (e) {
    Oo[Po][e] = !0
  }, Io = It.find, $o = "find", Ao = !0;
  $o in [] && [,][$o](function () {
    Ao = !1
  }), Xe({target: "Array", proto: !0, forced: Ao}, {
    find: function (e) {
      return Io(this, e, 1 < arguments.length ? arguments[1] : void 0)
    }
  }), Co($o);
  var Eo = It.findIndex, Ro = "findIndex", _o = !0;
  Ro in [] && [,][Ro](function () {
    _o = !1
  }), Xe({target: "Array", proto: !0, forced: _o}, {
    findIndex: function (e) {
      return Eo(this, e, 1 < arguments.length ? arguments[1] : void 0)
    }
  }), Co(Ro);
  var No = Ee.includes;
  Xe({target: "Array", proto: !0}, {
    includes: function (e) {
      return No(this, e, 1 < arguments.length ? arguments[1] : void 0)
    }
  }), Co("includes");
  var Fo = function (e, t) {
        var o = [][e];
        return !o || !I(function () {
          o.call(null, t || function () {
            throw 1
          }, 1)
        })
      }, Do = Ee.indexOf, Lo = [].indexOf, Vo = !!Lo && 0 > 1 / [1].indexOf(1, -0),
      Bo = Fo("indexOf");
  Xe({target: "Array", proto: !0, forced: Vo || Bo}, {
    indexOf: function (e) {
      return Vo ? Lo.apply(this, arguments) || 0 : Do(this, e,
          1 < arguments.length ? arguments[1] : void 0)
    }
  });
  var Ho, jo, Mo, Uo = !I(function () {
        function e() {
        }

        return e.prototype.constructor = null, Object.getPrototypeOf(new e)
        !== e.prototype
      }), qo = he("IE_PROTO"), zo = Object.prototype,
      Go = Uo ? Object.getPrototypeOf : function (e) {
        return e = Ze(e), G(e, qo) ? e[qo] : "function" == typeof e.constructor
        && e instanceof e.constructor ? e.constructor.prototype : e
        instanceof Object ? zo : null
      }, Wo = ft("iterator"), Yo = !1;
  [].keys && (Mo = [].keys(), "next" in Mo ? (jo = Go(Go(Mo)), jo
  !== Object.prototype && (Ho = jo)) : Yo = !0), null == Ho && (Ho = {}), G(Ho,
      Wo) || ne(Ho, Wo, function () {
    return this
  });
  var Ko = {IteratorPrototype: Ho, BUGGY_SAFARI_ITERATORS: Yo},
      Xo = Ko.IteratorPrototype, Qo = function (e, t, o) {
        return e.prototype = lt(Xo, {next: F(1, o)}), St(e, t + " Iterator", !1), e
      }, Jo = function (e) {
        if (!U(e) && null !== e) {
          throw TypeError(
              "Can't set " + (e + " as a prototype"));
        }
        return e
      }, Zo = Object.setPrototypeOf || ("__proto__" in {} ? function () {
        var e, t = !1, o = {};
        try {
          e = Object.getOwnPropertyDescriptor(Object.prototype,
              "__proto__").set, e.call(o, []), t = o instanceof Array
        } catch (e) {
        }
        return function (o, a) {
          return ee(o), Jo(a), t ? e.call(o, a) : o.__proto__ = a, o
        }
      }() : void 0), ea = Ko.IteratorPrototype, ta = Ko.BUGGY_SAFARI_ITERATORS,
      oa = ft("iterator"), aa = "keys", na = "values", ia = "entries",
      sa = function () {
        return this
      }, la = function (e, t, o, a, n, i, s) {
        Qo(o, t, a);
        var l, r, c, d = function (e) {
              return e === n && g ? g : !ta && e in u ? u[e] : e === aa ? function () {
                return new o(this, e)
              } : e === na ? function () {
                return new o(this, e)
              } : e === ia ? function () {
                return new o(this, e)
              } : function () {
                return new o(this)
              }
            }, p = !1, u = e.prototype, h = u[oa] || u["@@iterator"] || n && u[n],
            g = !ta && h || d(n), f = "Array" == t ? u.entries || h : h;
        if (f && (l = Go(f.call(new e)), ea !== Object.prototype && l.next && (Go(l)
        !== ea && (Zo ? Zo(l, ea) : "function" != typeof l[oa] && ne(l, oa,
            sa)), St(l, t + " Iterator", !0))), n == na && h && h.name !== na
        && (p = !0, g = function () {
          return h.call(this)
        }), u[oa] !== g && ne(u, oa, g), n) {
          if (r = {
            values: d(na),
            keys: i ? g : d(aa),
            entries: d(ia)
          }, s) {
            for (c in r) {
              (ta || p || !(c in u)) && ke(u, c, r[c]);
            }
          } else {
            Xe(
                {target: t, proto: !0, forced: ta || p}, r);
          }
        }
        return r
      }, ra = "Array Iterator", ca = xe.set, da = xe.getterFor(ra),
      pa = la(Array, "Array", function (e, t) {
        ca(this, {type: ra, target: M(e), index: 0, kind: t})
      }, function () {
        var e = da(this), t = e.target, o = e.kind, a = e.index++;
        return !t || a >= t.length ? (e.target = void 0, {
          value: void 0,
          done: !0
        }) : "keys" == o ? {value: a, done: !1} : "values" == o ? {
          value: t[a],
          done: !1
        } : {value: [a, t[a]], done: !1}
      }, "values");
  Co("keys"), Co("values"), Co("entries");
  var ua = [].join, ha = B != Object, ga = Fo("join", ",");
  Xe({target: "Array", proto: !0, forced: ha || ga}, {
    join: function (e) {
      return ua.call(M(this), void 0 === e ? "," : e)
    }
  });
  var fa = ft("species"), ma = [].slice;
  Xe({target: "Array", proto: !0, forced: !bo("slice")}, {
    slice: function (e, t) {
      var o, a, i, s = M(this), l = Ie(s.length), r = $e(e, l),
          c = $e(void 0 === t ? l : t, l);
      if (Je(s) && (o = s.constructor, "function" == typeof o && (o === Array
          || Je(o.prototype)) ? o = void 0 : U(o) && (o = o[fa], null === o
      && (o = void 0)), o === Array || void 0 === o)) {
        return ma.call(s, r, c);
      }
      for (a = new (void 0 === o ? Array : o)(b(c - r, 0)), i = 0; r < c;
          r++, i++) {
        r in s && fo(a, i, s[r]);
      }
      return a.length = i, a
    }
  });
  var ba = [].sort, ya = [1, 2, 3], wa = I(function () {
    ya.sort(void 0)
  }), va = I(function () {
    ya.sort(null)
  }), Sa = Fo("sort");
  Xe({target: "Array", proto: !0, forced: wa || !va || Sa}, {
    sort: function (e) {
      return void 0 === e ? ba.call(Ze(this)) : ba.call(Ze(this), xt(e))
    }
  });
  Xe({target: "Array", proto: !0, forced: !bo("splice")}, {
    splice: function (e, t) {
      var o, a, n, i, s, l, r = Ze(this), c = Ie(r.length), d = $e(e, c),
          p = arguments.length;
      if (0 === p ? o = a = 0 : 1 === p ? (o = 0, a = c - d) : (o = p
          - 2, a = y(b(Ce(t), 0), c - d)), c + o - a
      > 9007199254740991) {
        throw TypeError("Maximum allowed length exceeded");
      }
      for (n = Pt(r, a), i = 0; i < a; i++) {
        s = d + i, s in r && fo(n, i, r[s]);
      }
      if (n.length = a, o < a) {
        for (i = d; i < c - a; i++) {
          s = i + a, l = i + o, s in r ? r[l] = r[s]
              : delete r[l];
        }
        for (i = c; i > c - a + o; i--) {
          delete r[i - 1]
        }
      } else if (o > a) {
        for (i = c - a; i > d; i--) {
          s = i + a - 1, l = i + o
              - 1, s in r ? r[l] = r[s] : delete r[l];
        }
      }
      for (i = 0; i < o; i++) {
        r[i + d] = arguments[i + 2];
      }
      return r.length = c - a + o, n
    }
  });
  var xa = function (e, t, o) {
        var a, n;
        return Zo && "function" == typeof (a = t.constructor) && a !== o && U(
            n = a.prototype) && n !== o.prototype && Zo(e, n), e
      },
      ka = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF",
      Ta = "[" + ka + "]", Pa = RegExp("^" + Ta + Ta + "*"),
      Oa = RegExp(Ta + Ta + "*$"), Ca = function (e) {
        return function (t) {
          var o = H(t) + "";
          return 1 & e && (o = o.replace(Pa, "")), 2 & e && (o = o.replace(Oa,
              "")), o
        }
      }, Ia = {start: Ca(1), end: Ca(2), trim: Ca(3)}, $a = Le.f, Aa = Z.f,
      Ea = ae.f, Ra = Ia.trim, _a = "Number", Na = C[_a], Fa = Na.prototype,
      Da = L(lt(Fa)) == _a, La = function (e) {
        var t, o, a, n, i, s, l, r, c = q(e, !1);
        if ("string" == typeof c && 2 < c.length) {
          if (c = Ra(c), t = c.charCodeAt(
              0), 43 === t || 45 === t) {
            if (o = c.charCodeAt(2), 88 === o || 120 === o) {
              return NaN;
            }
          } else if (48 === t) {
            switch (c.charCodeAt(1)) {
              case 66:
              case 98:
                a = 2, n = 49;
                break;
              case 79:
              case 111:
                a = 8, n = 55;
                break;
              default:
                return +c;
            }
            for (i = c.slice(2), s = i.length, l = 0; l < s;
                l++) {
              if (r = i.charCodeAt(l), 48 > r || r > n) {
                return NaN;
              }
            }
            return parseInt(i, a)
          }
        }
        return +c
      };
  if (Ye(_a, !Na(" 0o1") || !Na("0b1") || Na("+0x1"))) {
    for (var Va, Ba = function (e) {
      var t = 1 > arguments.length ? 0 : e, o = this;
      return o instanceof Ba && (Da ? I(function () {
        Fa.valueOf.call(o)
      }) : L(o) != _a) ? xa(new Na(La(t)), o, Ba) : La(t)
    }, Ha = A ? $a(Na) : ["MAX_VALUE", "MIN_VALUE", "NaN", "NEGATIVE_INFINITY",
      "POSITIVE_INFINITY", "EPSILON", "isFinite", "isInteger", "isNaN",
      "isSafeInteger", "MAX_SAFE_INTEGER", "MIN_SAFE_INTEGER", "parseFloat",
      "parseInt", "isInteger"], ja = 0; Ha.length > ja; ja++) {
      G(Na, Va = Ha[ja])
      && !G(Ba, Va) && Ea(Ba, Va, Aa(Na, Va));
    }
    Ba.prototype = Fa, Fa.constructor = Ba, ke(C, _a, Ba)
  }
  var Ma = Object.assign, Ua = !Ma || I(function () {
    var e = {}, t = {}, o = Symbol(), a = "abcdefghijklmnopqrst";
    return e[o] = 7, a.split("").forEach(function (e) {
      t[e] = e
    }), 7 != Ma({}, e)[o] || et(Ma({}, t)).join("") != a
  }) ? function (e) {
    for (var t = Ze(e), o = arguments.length, a = 1, n = Be.f, i = f.f;
        o > a;) {
      for (var s, l = B(arguments[a++]),
          r = n ? et(l).concat(n(l)) : et(l), c = r.length, d = 0;
          c > d;) {
        s = r[d++], (!A || i.call(l, s)) && (t[s] = l[s]);
      }
    }
    return t
  } : Ma;
  Xe({target: "Object", stat: !0, forced: Object.assign !== Ua}, {assign: Ua});
  var qa = f.f, za = function (e) {
    return function (t) {
      for (var o, a = M(t), n = et(a), s = n.length, l = 0, r = [];
          s > l;) {
        o = n[l++], (!A || qa.call(a, o)) && r.push(
            e ? [o, a[o]] : a[o]);
      }
      return r
    }
  }, Ga = {entries: za(!0), values: za(!1)}, Wa = Ga.entries;
  Xe({target: "Object", stat: !0}, {
    entries: function (e) {
      return Wa(e)
    }
  });
  var Ya = ft("toStringTag"), Ka = "Arguments" == L(function () {
    return arguments
  }()), Xa = function (e, t) {
    try {
      return e[t]
    } catch (e) {
    }
  }, Qa = function (e) {
    var t, o, a;
    return void 0 === e ? "Undefined" : null === e ? "Null" : "string"
    == typeof (o = Xa(t = Object(e), Ya)) ? o : Ka ? L(t) : "Object" == (a = L(
        t)) && "function" == typeof t.callee ? "Arguments" : a
  }, Ja = ft("toStringTag"), Za = {};
  Za[Ja] = "z";
  var en = function () {
    return "[object " + Qa(this) + "]"
  }, tn = Object.prototype;
  en !== tn.toString && ke(tn, "toString", en, {unsafe: !0});
  var on = Ia.trim, an = C.parseFloat, nn = 1 / an(ka + "-0") != -Infinity,
      sn = nn ? function (e) {
        var t = on(e + ""), o = an(t);
        return 0 === o && "-" == t.charAt(0) ? -0 : o
      } : an;
  Xe({global: !0, forced: parseFloat != sn}, {parseFloat: sn});
  var ln = Ia.trim, rn = C.parseInt, cn = /^[+-]?0[Xx]/,
      dn = 8 !== rn(ka + "08") || 22 !== rn(ka + "0x16"),
      pn = dn ? function (e, t) {
        var o = ln(e + "");
        return rn(o, t >>> 0 || (cn.test(o) ? 16 : 10))
      } : rn;
  Xe({global: !0, forced: parseInt != pn}, {parseInt: pn});
  var un = function () {
    var e = ee(this), t = "";
    return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline
    && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky
    && (t += "y"), t
  }, hn = "toString", gn = RegExp.prototype, fn = gn[hn], mn = I(function () {
    return "/a/b" != fn.call({source: "a", flags: "b"})
  }), bn = fn.name != hn;
  (mn || bn) && ke(RegExp.prototype, hn, function () {
    var e = ee(this), t = e.source + "", o = e.flags,
        a = (void 0 === o && e instanceof RegExp && !("flags" in gn) ? un.call(
            e) : o) + "";
    return "/" + t + "/" + a
  }, {unsafe: !0});
  var yn = ft("match"), wn = function (e) {
    var t;
    return U(e) && (void 0 === (t = e[yn]) ? "RegExp" == L(e) : !!t)
  }, vn = function (e) {
    if (wn(e)) {
      throw TypeError("The method doesn't accept regular expressions");
    }
    return e
  }, Sn = ft("match");
  Xe({
    target: "String", proto: !0, forced: !function (e) {
      var t = /./;
      try {
        "/./"[e](t)
      } catch (o) {
        try {
          return t[Sn] = !1, "/./"[e](t)
        } catch (e) {
        }
      }
      return !1
    }("includes")
  }, {
    includes: function (e) {
      return !!~(H(this) + "").indexOf(vn(e),
          1 < arguments.length ? arguments[1] : void 0)
    }
  });
  var xn = function (e) {
        return function (t, o) {
          var a, n, i = H(t) + "", s = Ce(o), l = i.length;
          return 0 > s || s >= l ? e ? "" : void 0 : (a = i.charCodeAt(s), 55296 > a
          || 56319 < a || s + 1 === l || 56320 > (n = i.charCodeAt(s + 1)) || 57343
          < n ? e ? i.charAt(s) : a : e ? i.slice(s, s + 2) : (a - 55296 << 10) + (n
              - 56320) + 65536)
        }
      }, kn = {codeAt: xn(!1), charAt: xn(!0)}, Tn = kn.charAt,
      Pn = "String Iterator", On = xe.set, Cn = xe.getterFor(Pn);
  la(String, "String", function (e) {
    On(this, {type: Pn, string: e + "", index: 0})
  }, function () {
    var e, t = Cn(this), o = t.string, a = t.index;
    return a >= o.length ? {value: void 0, done: !0} : (e = Tn(o,
        a), t.index += e.length, {value: e, done: !1})
  });
  var In = RegExp.prototype.exec, $n = m.replace, An = In, En = function () {
    var e = /a/, t = /b*/g;
    return In.call(e, "a"), In.call(t, "a"), 0 !== e.lastIndex || 0
    !== t.lastIndex
  }(), Rn = void 0 !== /()??/.exec("")[1];
  (En || Rn) && (An = function (e) {
    var t, o, a, n, s = this;
    return Rn && (o = new RegExp("^" + s.source + "$(?!\\s)", un.call(s))), En
    && (t = s.lastIndex), a = In.call(s, e), En && a && (s.lastIndex = s.global
        ? a.index + a[0].length : t), Rn && a && 1 < a.length && $n.call(a[0],
        o, function () {
          for (n = 1; n < arguments.length - 2; n++) {
            void 0 === arguments[n]
            && (a[n] = void 0)
          }
        }), a
  });
  var _n = An, Nn = ft("species"), Fn = !I(function () {
        var e = /./;
        return e.exec = function () {
          var e = [];
          return e.groups = {a: "7"}, e
        }, "7" !== "".replace(e, "$<a>")
      }), Dn = !I(function () {
        var e = /(?:)/, t = e.exec;
        e.exec = function () {
          return t.apply(this, arguments)
        };
        var o = "ab".split(e);
        return 2 !== o.length || "a" !== o[0] || "b" !== o[1]
      }), Ln = function (e, t, o, a) {
        var n = ft(e), i = !I(function () {
          var t = {};
          return t[n] = function () {
            return 7
          }, 7 != ""[e](t)
        }), s = i && !I(function () {
          var t = !1, o = /a/;
          return o.exec = function () {
            return t = !0, null
          }, "split" === e && (o.constructor = {}, o.constructor[Nn] = function () {
            return o
          }), o[n](""), !t
        });
        if (!i || !s || "replace" === e && !Fn || "split" === e && !Dn) {
          var l = /./[n], r = o(n, ""[e], function (e, t, o, a, n) {
            return t.exec === _n ? i && !n ? {done: !0, value: l.call(t, o, a)}
                : {done: !0, value: e.call(o, t, a)} : {done: !1}
          }), c = r[0], d = r[1];
          ke(String.prototype, e, c), ke(RegExp.prototype, n,
              2 == t ? function (e, t) {
                return d.call(e, this, t)
              } : function (e) {
                return d.call(e, this)
              }), a && ne(RegExp.prototype[n], "sham", !0)
        }
      }, Vn = kn.charAt, Bn = function (e, t, o) {
        return t + (o ? Vn(e, t).length : 1)
      }, Hn = function (e, t) {
        var o = e.exec;
        if ("function" == typeof o) {
          var a = o.call(e, t);
          if ("object" != typeof a) {
            throw TypeError(
                "RegExp exec method returned something other than an Object or null");
          }
          return a
        }
        if ("RegExp" !== L(e)) {
          throw TypeError(
              "RegExp#exec called on incompatible receiver");
        }
        return _n.call(e, t)
      }, jn = /\$([$&'`]|\d\d?|<[^>]*>)/g, Mn = /\$([$&'`]|\d\d?)/g,
      Un = function (e) {
        return void 0 === e ? e : e + ""
      };
  Ln("replace", 2, function (e, t, o) {
    function a(e, o, a, i, s, l) {
      var r = a + e.length, c = i.length, n = Mn;
      return void 0 !== s && (s = Ze(s), n = jn), t.call(l, n, function (t, l) {
        var d;
        switch (l.charAt(0)) {
          case"$":
            return "$";
          case"&":
            return e;
          case"`":
            return o.slice(0, a);
          case"'":
            return o.slice(r);
          case"<":
            d = s[l.slice(1, -1)];
            break;
          default:
            var p = +l;
            if (0 == p) {
              return t;
            }
            if (p > c) {
              var n = w(p / 10);
              return 0 === n ? t : n <= c ? void 0 === i[n - 1] ? l.charAt(1)
                  : i[n - 1] + l.charAt(1) : t
            }
            d = i[p - 1];
        }
        return void 0 === d ? "" : d
      })
    }

    return [function (o, a) {
      var n = H(this), i = null == o ? void 0 : o[e];
      return void 0 === i ? t.call(n + "", o, a) : i.call(o, n, a)
    }, function (e, n) {
      var s = o(t, e, this, n);
      if (s.done) {
        return s.value;
      }
      var l = ee(e), r = this + "", c = "function" == typeof n;
      c || (n += "");
      var d = l.global;
      if (d) {
        var p = l.unicode;
        l.lastIndex = 0
      }
      for (var u, h, g = [];
          (u = Hn(l, r), null !== u) && (g.push(u), !!d);) {
        h = u[0] + "", ""
        == h && (l.lastIndex = Bn(r, Ie(l.lastIndex), p));
      }
      for (var f = "", m = 0, w = 0; w < g.length; w++) {
        u = g[w];
        for (var v = u[0] + "", S = b(y(Ce(u.index), r.length), 0), x = [],
            k = 1; k < u.length; k++) {
          x.push(Un(u[k]));
        }
        var T = u.groups;
        if (c) {
          var P = [v].concat(x, S, r);
          void 0 !== T && P.push(T);
          var O = n.apply(void 0, P) + ""
        } else {
          O = a(v, r, S, x, T, n);
        }
        S >= m && (f += r.slice(m, S) + O, m = S + v.length)
      }
      return f + r.slice(m)
    }]
  });
  var qn = Object.is || function (e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
  };
  Ln("search", 1, function (e, t, o) {
    return [function (t) {
      var o = H(this), a = null == t ? void 0 : t[e];
      return void 0 === a ? new RegExp(t)[e](o + "") : a.call(t, o)
    }, function (e) {
      var a = o(t, e, this);
      if (a.done) {
        return a.value;
      }
      var n = ee(e), i = this + "", s = n.lastIndex;
      qn(s, 0) || (n.lastIndex = 0);
      var l = Hn(n, i);
      return qn(n.lastIndex, s) || (n.lastIndex = s), null === l ? -1 : l.index
    }]
  });
  var zn = ft("species"), Gn = function (e, t) {
    var o, a = ee(e).constructor;
    return void 0 === a || null == (o = ee(a)[zn]) ? t : xt(o)
  }, Wn = [].push, Yn = 4294967295, Kn = !I(function () {
    return !RegExp(Yn, "y")
  });
  Ln("split", 2, function (e, t, o) {
    var a;
    return a = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/,
        -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(
        /(.?)(.?)/).length || 1 < ".".split(/()()/).length || "".split(
        /.?/).length ? function (e, o) {
      var a = H(this) + "", n = void 0 === o ? Yn : o >>> 0;
      if (0 === n) {
        return [];
      }
      if (void 0 === e) {
        return [a];
      }
      if (!wn(e)) {
        return t.call(a, e, n);
      }
      for (var i, s, l, r = [],
          c = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode
              ? "u" : "") + (e.sticky ? "y" : ""), d = 0,
          p = new RegExp(e.source, c + "g");
          (i = _n.call(p, a)) && (s = p.lastIndex, !(s > d && (r.push(
              a.slice(d, i.index)), 1 < i.length && i.index < a.length
          && Wn.apply(r, i.slice(1)), l = i[0].length, d = s, r.length
          >= n)));) {
        p.lastIndex === i.index && p.lastIndex++;
      }
      return d === a.length ? (l || !p.test("")) && r.push("") : r.push(
          a.slice(d)), r.length > n ? r.slice(0, n) : r
    } : function (e, o) {
      return void 0 === e && 0 === o ? [] : t.call(this, e, o)
    }, [function (t, o) {
      var n = H(this), i = null == t ? void 0 : t[e];
      return void 0 === i ? a.call(n + "", t, o) : i.call(t, n, o)
    }, function (n, s) {
      var l = o(a, n, this, s, a !== t);
      if (l.done) {
        return l.value;
      }
      var r = ee(n), c = this + "", d = Gn(r, RegExp), u = r.unicode,
          h = (r.ignoreCase ? "i" : "") + (r.multiline ? "m" : "") + (r.unicode
              ? "u" : "") + (Kn ? "y" : "g"),
          g = new d(Kn ? r : "^(?:" + r.source + ")", h),
          f = void 0 === s ? Yn : s >>> 0;
      if (0 === f) {
        return [];
      }
      if (0 === c.length) {
        return null === Hn(g, c) ? [c] : [];
      }
      for (var m = 0, b = 0, w = []; b < c.length;) {
        g.lastIndex = Kn ? b : 0;
        var v, S = Hn(g, Kn ? c : c.slice(b));
        if (null === S || (v = y(Ie(g.lastIndex + (Kn ? 0 : b)), c.length))
            === m) {
          b = Bn(c, b, u);
        } else {
          if (w.push(c.slice(m, b)), w.length === f) {
            return w;
          }
          for (var x = 1; x <= S.length - 1; x++) {
            if (w.push(S[x]), w.length
            === f) {
              return w;
            }
          }
          b = m = v
        }
      }
      return w.push(c.slice(m)), w
    }]
  }, !Kn);
  var Xn = Ia.trim;
  Xe({
    target: "String", proto: !0, forced: function (e) {
      return I(function () {
        return !!ka[e]() || "\u200B\x85\u180E" != "\u200B\x85\u180E"[e]()
            || ka[e].name !== e
      })
    }("trim")
  }, {
    trim: function () {
      return Xn(this)
    }
  });
  var Qn = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  }, Jn = It.forEach, Zn = Fo("forEach") ? function (e) {
    return Jn(this, e, 1 < arguments.length ? arguments[1] : void 0)
  } : [].forEach;
  for (var ei in Qn) {
    var ti = C[ei], oi = ti && ti.prototype;
    if (oi && oi.forEach !== Zn) {
      try {
        ne(oi, "forEach", Zn)
      } catch (e) {
        oi.forEach = Zn
      }
    }
  }
  var ai = ft("iterator"), ni = ft("toStringTag"), ii = pa.values;
  for (var si in Qn) {
    var li = C[si], ri = li && li.prototype;
    if (ri) {
      if (ri[ai] !== ii) {
        try {
          ne(ri, ai, ii)
        } catch (e) {
          ri[ai] = ii
        }
      }
      if (ri[ni] || ne(ri, ni, si), Qn[si]) {
        for (var ci in pa) {
          if (ri[ci]
              !== pa[ci]) {
            try {
              ne(ri, ci, pa[ci])
            } catch (e) {
              ri[ci] = pa[ci]
            }
          }
        }
      }
    }
  }
  var di = 4;
  try {
    var pi = t.fn.dropdown.Constructor.VERSION;
    void 0 !== pi && (di = parseInt(pi, 10))
  } catch (t) {
  }
  var ui = {
    3: {
      iconsPrefix: "glyphicon",
      icons: {
        paginationSwitchDown: "glyphicon-collapse-down icon-chevron-down",
        paginationSwitchUp: "glyphicon-collapse-up icon-chevron-up",
        refresh: "glyphicon-refresh icon-refresh",
        toggleOff: "glyphicon-list-alt icon-list-alt",
        toggleOn: "glyphicon-list-alt icon-list-alt",
        columns: "glyphicon-th icon-th",
        detailOpen: "glyphicon-plus icon-plus",
        detailClose: "glyphicon-minus icon-minus",
        fullscreen: "glyphicon-fullscreen",
        search: "glyphicon-search",
        clearSearch: "glyphicon-trash"
      },
      classes: {
        buttonsPrefix: "btn",
        buttons: "default",
        buttonsGroup: "btn-group",
        buttonsDropdown: "btn-group",
        pull: "pull",
        inputGroup: "input-group",
        input: "form-control",
        paginationDropdown: "btn-group dropdown",
        dropup: "dropup",
        dropdownActive: "active",
        paginationActive: "active",
        buttonActive: "active"
      },
      html: {
        toolbarDropdown: ["<ul class=\"dropdown-menu\" role=\"menu\">",
          "</ul>"],
        toolbarDropdownItem: "<li role=\"menuitem\"><label>%s</label></li>",
        toolbarDropdownSeperator: "<li class=\"divider\"></li>",
        pageDropdown: ["<ul class=\"dropdown-menu\" role=\"menu\">", "</ul>"],
        pageDropdownItem: "<li role=\"menuitem\" class=\"%s\"><a href=\"#\">%s</a></li>",
        dropdownCaret: "<span class=\"caret\"></span>",
        pagination: ["<ul class=\"pagination%s\">", "</ul>"],
        paginationItem: "<li class=\"page-item%s\"><a class=\"page-link\" aria-label=\"%s\" href=\"javascript:void(0)\">%s</a></li>",
        icon: "<i class=\"%s %s\"></i>",
        inputGroup: "<div class=\"input-group\">%s<span class=\"input-group-btn\">%s</span></div>",
        searchInput: "<input class=\"%s%s\" type=\"text\" placeholder=\"%s\">",
        searchButton: "<button class=\"btn btn-default\" type=\"button\" name=\"search\" title=\"%s\">%s %s</button>",
        searchClearButton: "<button class=\"btn btn-default\" type=\"button\" name=\"clearSearch\" title=\"%s\">%s %s</button>"
      }
    }, 4: {
      iconsPrefix: "fa",
      icons: {
        paginationSwitchDown: "fa-caret-square-down",
        paginationSwitchUp: "fa-caret-square-up",
        refresh: "fa-sync",
        toggleOff: "fa-toggle-off",
        toggleOn: "fa-toggle-on",
        columns: "fa-th-list",
        detailOpen: "fa-plus",
        detailClose: "fa-minus",
        fullscreen: "fa-arrows-alt",
        search: "fa-search",
        clearSearch: "fa-trash"
      },
      classes: {
        buttonsPrefix: "btn",
        buttons: "secondary",
        buttonsGroup: "btn-group",
        buttonsDropdown: "btn-group",
        pull: "float",
        inputGroup: "btn-group",
        input: "form-control",
        paginationDropdown: "btn-group dropdown",
        dropup: "dropup",
        dropdownActive: "active",
        paginationActive: "active",
        buttonActive: "active"
      },
      html: {
        toolbarDropdown: ["<div class=\"dropdown-menu dropdown-menu-right\">",
          "</div>"],
        toolbarDropdownItem: "<label class=\"dropdown-item\">%s</label>",
        pageDropdown: ["<div class=\"dropdown-menu\">", "</div>"],
        pageDropdownItem: "<a class=\"dropdown-item %s\" href=\"#\">%s</a>",
        toolbarDropdownSeperator: "<div class=\"dropdown-divider\"></div>",
        dropdownCaret: "<span class=\"caret\"></span>",
        pagination: ["<ul class=\"pagination%s\">", "</ul>"],
        paginationItem: "<li class=\"page-item%s\"><a class=\"page-link\" aria-label=\"%s\" href=\"javascript:void(0)\">%s</a></li>",
        icon: "<i class=\"%s %s\"></i>",
        inputGroup: "<div class=\"input-group\">%s<div class=\"input-group-append\">%s</div></div>",
        searchInput: "<input class=\"%s%s\" type=\"text\" placeholder=\"%s\">",
        searchButton: "<button class=\"btn btn-secondary\" type=\"button\" name=\"search\" title=\"%s\">%s %s</button>",
        searchClearButton: "<button class=\"btn btn-secondary\" type=\"button\" name=\"clearSearch\" title=\"%s\">%s %s</button>"
      }
    }
  }[di], hi = {
    height: void 0,
    classes: "table table-bordered table-hover",
    theadClasses: "",
    rowStyle: function () {
      return {}
    },
    rowAttributes: function () {
      return {}
    },
    undefinedText: "-",
    locale: void 0,
    virtualScroll: !1,
    virtualScrollItemHeight: void 0,
    sortable: !0,
    sortClass: void 0,
    silentSort: !0,
    sortName: void 0,
    sortOrder: "asc",
    sortStable: !1,
    rememberOrder: !1,
    customSort: void 0,
    columns: [[]],
    data: [],
    url: void 0,
    method: "get",
    cache: !0,
    contentType: "application/json",
    dataType: "json",
    ajax: void 0,
    ajaxOptions: {},
    queryParams: function (e) {
      return e
    },
    queryParamsType: "limit",
    responseHandler: function (e) {
      return e
    },
    totalField: "total",
    totalNotFilteredField: "totalNotFiltered",
    dataField: "rows",
    pagination: !1,
    onlyInfoPagination: !1,
    showExtendedPagination: !1,
    paginationLoop: !0,
    sidePagination: "client",
    totalRows: 0,
    totalNotFiltered: 0,
    pageNumber: 1,
    pageSize: 10,
    pageList: [10, 25, 50, 100],
    paginationHAlign: "right",
    paginationVAlign: "bottom",
    paginationDetailHAlign: "left",
    paginationPreText: "&lsaquo;",
    paginationNextText: "&rsaquo;",
    paginationSuccessivelySize: 5,
    paginationPagesBySide: 1,
    paginationUseIntermediate: !1,
    search: !1,
    searchOnEnterKey: !1,
    strictSearch: !1,
    visibleSearch: !1,
    showButtonIcons: !0,
    showButtonText: !1,
    showSearchButton: !1,
    showSearchClearButton: !1,
    trimOnSearch: !0,
    searchAlign: "right",
    searchTimeOut: 500,
    searchText: "",
    customSearch: void 0,
    showHeader: !0,
    showFooter: !1,
    footerStyle: function () {
      return {}
    },
    showColumns: !1,
    showColumnsToggleAll: !1,
    minimumCountColumns: 1,
    showPaginationSwitch: !1,
    showRefresh: !1,
    showToggle: !1,
    showFullscreen: !1,
    smartDisplay: !0,
    escape: !1,
    filterOptions: {filterAlgorithm: "and"},
    idField: void 0,
    selectItemName: "btSelectItem",
    clickToSelect: !1,
    ignoreClickToSelectOn: function (e) {
      var t = e.tagName;
      return ["A", "BUTTON"].includes(t)
    },
    singleSelect: !1,
    checkboxHeader: !0,
    maintainMetaData: !1,
    multipleSelectRow: !1,
    uniqueId: void 0,
    cardView: !1,
    detailView: !1,
    detailViewIcon: !0,
    detailViewByClick: !1,
    detailFormatter: function () {
      return ""
    },
    detailFilter: function () {
      return !0
    },
    toolbar: void 0,
    toolbarAlign: "left",
    buttonsToolbar: void 0,
    buttonsAlign: "right",
    buttonsPrefix: ui.classes.buttonsPrefix,
    buttonsClass: ui.classes.buttons,
    icons: ui.icons,
    html: ui.html,
    iconSize: void 0,
    iconsPrefix: ui.iconsPrefix,
    onAll: function () {
      return !1
    },
    onClickCell: function () {
      return !1
    },
    onDblClickCell: function () {
      return !1
    },
    onClickRow: function () {
      return !1
    },
    onDblClickRow: function () {
      return !1
    },
    onSort: function () {
      return !1
    },
    onCheck: function () {
      return !1
    },
    onUncheck: function () {
      return !1
    },
    onCheckAll: function () {
      return !1
    },
    onUncheckAll: function () {
      return !1
    },
    onCheckSome: function () {
      return !1
    },
    onUncheckSome: function () {
      return !1
    },
    onLoadSuccess: function () {
      return !1
    },
    onLoadError: function () {
      return !1
    },
    onColumnSwitch: function () {
      return !1
    },
    onPageChange: function () {
      return !1
    },
    onSearch: function () {
      return !1
    },
    onToggle: function () {
      return !1
    },
    onPreBody: function () {
      return !1
    },
    onPostBody: function () {
      return !1
    },
    onPostHeader: function () {
      return !1
    },
    onPostFooter: function () {
      return !1
    },
    onExpandRow: function () {
      return !1
    },
    onCollapseRow: function () {
      return !1
    },
    onRefreshOptions: function () {
      return !1
    },
    onRefresh: function () {
      return !1
    },
    onResetView: function () {
      return !1
    },
    onScrollBody: function () {
      return !1
    }
  }, gi = {
    formatLoadingMessage: function () {
      return "Loading, please wait"
    }, formatRecordsPerPage: function (e) {
      return "".concat(e, " rows per page")
    }, formatShowingRows: function (e, t, o, a) {
      return void 0 !== a && 0 < a && a > o ? "Showing ".concat(e,
          " to ").concat(t, " of ").concat(o, " rows (filtered from ").concat(a,
          " total rows)") : "Showing ".concat(e, " to ").concat(t,
          " of ").concat(o, " rows")
    }, formatSRPaginationPreText: function () {
      return "previous page"
    }, formatSRPaginationPageText: function (e) {
      return "to page ".concat(e)
    }, formatSRPaginationNextText: function () {
      return "next page"
    }, formatDetailPagination: function (e) {
      return "Showing ".concat(e, " rows")
    }, formatSearch: function () {
      return "Search"
    }, formatClearSearch: function () {
      return "Clear Search"
    }, formatNoMatches: function () {
      return "No matching records found"
    }, formatPaginationSwitch: function () {
      return "Hide/Show pagination"
    }, formatPaginationSwitchDown: function () {
      return "Show pagination"
    }, formatPaginationSwitchUp: function () {
      return "Hide pagination"
    }, formatRefresh: function () {
      return "Refresh"
    }, formatToggle: function () {
      return "Toggle"
    }, formatToggleOn: function () {
      return "Show card view"
    }, formatToggleOff: function () {
      return "Hide card view"
    }, formatColumns: function () {
      return "Columns"
    }, formatColumnsToggleAll: function () {
      return "Toggle all"
    }, formatFullscreen: function () {
      return "Fullscreen"
    }, formatAllRows: function () {
      return "All"
    }
  };
  Object.assign(hi, gi);
  var fi = {
    VERSION: "1.15.3",
    THEME: "bootstrap".concat(di),
    CONSTANTS: ui,
    DEFAULTS: hi,
    COLUMN_DEFAULTS: {
      field: void 0,
      title: void 0,
      titleTooltip: void 0,
      class: void 0,
      width: void 0,
      widthUnit: "px",
      rowspan: void 0,
      colspan: void 0,
      align: void 0,
      halign: void 0,
      falign: void 0,
      valign: void 0,
      cellStyle: void 0,
      radio: !1,
      checkbox: !1,
      checkboxEnabled: !0,
      clickToSelect: !0,
      showSelectTitle: !1,
      sortable: !1,
      sortName: void 0,
      order: "asc",
      sorter: void 0,
      visible: !0,
      switchable: !0,
      cardVisible: !0,
      searchable: !0,
      formatter: void 0,
      footerFormatter: void 0,
      detailFormatter: void 0,
      searchFormatter: !0,
      escape: !1,
      events: void 0
    },
    METHODS: ["getOptions", "refreshOptions", "getData", "getSelections",
      "getAllSelections", "load", "append", "prepend", "remove", "removeAll",
      "insertRow", "updateRow", "getRowByUniqueId", "updateByUniqueId",
      "removeByUniqueId", "updateCell", "updateCellByUniqueId", "showRow",
      "hideRow", "getHiddenRows", "showColumn", "hideColumn",
      "getVisibleColumns", "getHiddenColumns", "showAllColumns",
      "hideAllColumns", "mergeCells", "checkAll", "uncheckAll", "checkInvert",
      "check", "uncheck", "checkBy", "uncheckBy", "refresh", "destroy",
      "resetView", "resetWidth", "showLoading", "hideLoading",
      "togglePagination", "toggleFullscreen", "toggleView", "resetSearch",
      "filterBy", "scrollTo", "getScrollPosition", "selectPage", "prevPage",
      "nextPage", "toggleDetailView", "expandRow", "collapseRow",
      "expandAllRows", "collapseAllRows", "updateColumnTitle",
      "updateFormatText"],
    EVENTS: {
      "all.bs.table": "onAll",
      "click-row.bs.table": "onClickRow",
      "dbl-click-row.bs.table": "onDblClickRow",
      "click-cell.bs.table": "onClickCell",
      "dbl-click-cell.bs.table": "onDblClickCell",
      "sort.bs.table": "onSort",
      "check.bs.table": "onCheck",
      "uncheck.bs.table": "onUncheck",
      "check-all.bs.table": "onCheckAll",
      "uncheck-all.bs.table": "onUncheckAll",
      "check-some.bs.table": "onCheckSome",
      "uncheck-some.bs.table": "onUncheckSome",
      "load-success.bs.table": "onLoadSuccess",
      "load-error.bs.table": "onLoadError",
      "column-switch.bs.table": "onColumnSwitch",
      "page-change.bs.table": "onPageChange",
      "search.bs.table": "onSearch",
      "toggle.bs.table": "onToggle",
      "pre-body.bs.table": "onPreBody",
      "post-body.bs.table": "onPostBody",
      "post-header.bs.table": "onPostHeader",
      "post-footer.bs.table": "onPostFooter",
      "expand-row.bs.table": "onExpandRow",
      "collapse-row.bs.table": "onCollapseRow",
      "refresh-options.bs.table": "onRefreshOptions",
      "reset-view.bs.table": "onResetView",
      "refresh.bs.table": "onRefresh",
      "scroll-body.bs.table": "onScrollBody"
    },
    LOCALES: {en: gi, "en-US": gi}
  }, mi = function (e, t, o, a, n, i, s, l) {
    for (var r, c = n, d = 0, p = !!s && kt(s, l, 3); d < a;) {
      if (d in o) {
        if (r = p ? p(o[d], d, t) : o[d], 0 < i && Je(r)) {
          c = mi(e, t, r,
              Ie(r.length), c, i - 1) - 1;
        } else {
          if (9007199254740991 <= c) {
            throw TypeError(
                "Exceed the acceptable array length");
          }
          e[c] = r
        }
        c++
      }
      d++
    }
    return c
  };
  Xe({target: "Array", proto: !0}, {
    flat: function () {
      var e = arguments.length ? arguments[0] : void 0, t = Ze(this),
          o = Ie(t.length), a = Pt(t, 0);
      return a.length = mi(a, t, t, o, 0, void 0 === e ? 1 : Ce(e)), a
    }
  }), Co("flat");
  var bi = I(function () {
    et(1)
  });
  Xe({target: "Object", stat: !0, forced: bi}, {
    keys: function (e) {
      return et(Ze(e))
    }
  });
  var yi = {
    sprintf: function (e) {
      for (var t = arguments.length, o = Array(1 < t ? t - 1 : 0), a = 1; a < t;
          a++) {
        o[a - 1] = arguments[a];
      }
      var n = !0, s = 0, l = e.replace(/%s/g, function () {
        var e = o[s++];
        return "undefined" == typeof e ? (n = !1, "") : e
      });
      return n ? l : ""
    }, isEmptyObject: function () {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0]
          : {};
      return 0 === Object.entries(e).length && e.constructor === Object
    }, isNumeric: function (e) {
      return !isNaN(parseFloat(e)) && isFinite(e)
    }, getFieldTitle: function (e, t) {
      var o = !0, a = !1, n = void 0;
      try {
        for (var i, s, l = e[Symbol.iterator](); !(o = (i = l.next()).done);
            o = !0) {
          if (s = i.value, s.field === t) {
            return s.title
          }
        }
      } catch (e) {
        a = !0, n = e
      } finally {
        try {
          o || null == l.return || l.return()
        } finally {
          if (a) {
            throw n
          }
        }
      }
      return ""
    }, setFieldIndex: function (e) {
      var t = 0, o = [], a = !0, n = !1, s = void 0;
      try {
        for (var l, c, d = e[0][Symbol.iterator](); !(a = (l = d.next()).done);
            a = !0) {
          c = l.value, t += c.colspan || 1
        }
      } catch (e) {
        n = !0, s = e
      } finally {
        try {
          a || null == d.return || d.return()
        } finally {
          if (n) {
            throw s
          }
        }
      }
      for (var p = 0; p < e.length; p++) {
        o[p] = [];
        for (var u = 0; u < t; u++) {
          o[p][u] = !1
        }
      }
      for (var h = 0; h < e.length; h++) {
        var g = !0, f = !1, m = void 0;
        try {
          for (var b, y = e[h][Symbol.iterator](); !(g = (b = y.next()).done);
              g = !0) {
            var w = b.value, r = w.rowspan || 1, v = w.colspan || 1,
                S = o[h].indexOf(!1);
            w.colspanIndex = S, 1 === v ? (w.fieldIndex = S, "undefined"
            == typeof w.field && (w.field = S)) : w.colspanGroup = w.colspan;
            for (var x = 0; x < r; x++) {
              o[h + x][S] = !0;
            }
            for (var T = 0; T < v; T++) {
              o[h][S + T] = !0
            }
          }
        } catch (e) {
          f = !0, m = e
        } finally {
          try {
            g || null == y.return || y.return()
          } finally {
            if (f) {
              throw m
            }
          }
        }
      }
    }, updateFieldGroup: function (e) {
      var t = e.flat(), o = !0, a = !1, n = void 0;
      try {
        for (var s, l = e[Symbol.iterator](); !(o = (s = l.next()).done);
            o = !0) {
          var d = s.value, c = !0, p = !1, u = void 0;
          try {
            for (var h, g, f = d[Symbol.iterator](); !(c = (h = f.next()).done);
                c = !0) {
              if (g = h.value, 1 < g.colspanGroup) {
                for (var m = 0, b = function (e) {
                  var o = t.find(function (t) {
                    return t.fieldIndex === e
                  });
                  o.visible && m++
                }, y = g.colspanIndex; y < g.colspanIndex + g.colspanGroup;
                    y++) {
                  b(y);
                }
                g.colspan = m, g.visible = 0 < m
              }
            }
          } catch (e) {
            p = !0, u = e
          } finally {
            try {
              c || null == f.return || f.return()
            } finally {
              if (p) {
                throw u
              }
            }
          }
        }
      } catch (e) {
        a = !0, n = e
      } finally {
        try {
          o || null == l.return || l.return()
        } finally {
          if (a) {
            throw n
          }
        }
      }
    }, getScrollBarWidth: function () {
      if (void 0 === this.cachedWidth) {
        var e = t("<div/>").addClass("fixed-table-scroll-inner"),
            o = t("<div/>").addClass("fixed-table-scroll-outer");
        o.append(e), t("body").append(o);
        var a = e[0].offsetWidth;
        o.css("overflow", "scroll");
        var n = e[0].offsetWidth;
        a === n && (n = o[0].clientWidth), o.remove(), this.cachedWidth = a - n
      }
      return this.cachedWidth
    }, calculateObjectValue: function (e, t, o, n) {
      var i = t;
      if ("string" == typeof t) {
        var s = t.split(".");
        if (1 < s.length) {
          i = window;
          var l = !0, c = !1, d = void 0;
          try {
            for (var p, u, h = s[Symbol.iterator](); !(l = (p = h.next()).done);
                l = !0) {
              u = p.value, i = i[u]
            }
          } catch (e) {
            c = !0, d = e
          } finally {
            try {
              l || null == h.return || h.return()
            } finally {
              if (c) {
                throw d
              }
            }
          }
        } else {
          i = window[t]
        }
      }
      return null !== i && "object" === a(i) ? i : "function" == typeof i
          ? i.apply(e, o || []) : !i && "string" == typeof t
          && this.sprintf.apply(this, [t].concat(r(o))) ? this.sprintf.apply(
              this, [t].concat(r(o))) : n
    }, compareObjects: function (e, t, o) {
      var a = Object.keys(e), n = Object.keys(t);
      if (o && a.length !== n.length) {
        return !1;
      }
      for (var i, s = 0, l = a; s < l.length; s++) {
        if (i = l[s], n.includes(i)
        && e[i] !== t[i]) {
          return !1;
        }
      }
      return !0
    }, escapeHTML: function (e) {
      return "string" == typeof e ? e.replace(/&/g, "&amp;").replace(/</g,
          "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g,
          "&#039;").replace(/`/g, "&#x60;") : e
    }, getRealDataAttr: function (e) {
      for (var t = 0, o = Object.entries(e); t < o.length; t++) {
        var a = l(o[t], 2), n = a[0], i = a[1],
            s = n.split(/(?=[A-Z])/).join("-").toLowerCase();
        s !== n && (e[s] = i, delete e[n])
      }
      return e
    }, getItemField: function (e, t, o) {
      var a = e;
      if ("string" != typeof t || e.hasOwnProperty(t)) {
        return o
            ? this.escapeHTML(e[t]) : e[t];
      }
      var n = t.split("."), i = !0, s = !1, l = void 0;
      try {
        for (var r, c, d = n[Symbol.iterator](); !(i = (r = d.next()).done);
            i = !0) {
          c = r.value, a = a && a[c]
        }
      } catch (e) {
        s = !0, l = e
      } finally {
        try {
          i || null == d.return || d.return()
        } finally {
          if (s) {
            throw l
          }
        }
      }
      return o ? this.escapeHTML(a) : a
    }, isIEBrowser: function () {
      return navigator.userAgent.includes("MSIE ") || /Trident.*rv:11\./.test(
          navigator.userAgent)
    }, findIndex: function (e, t) {
      var o = !0, a = !1, n = void 0;
      try {
        for (var i, s, l = e[Symbol.iterator](); !(o = (i = l.next()).done);
            o = !0) {
          if (s = i.value, JSON.stringify(s) === JSON.stringify(
              t)) {
            return e.indexOf(s)
          }
        }
      } catch (e) {
        a = !0, n = e
      } finally {
        try {
          o || null == l.return || l.return()
        } finally {
          if (a) {
            throw n
          }
        }
      }
      return -1
    }, trToData: function (e, o) {
      var a = this, n = [], i = [];
      return o.each(function (o, s) {
        var l = {};
        l._id = t(s).attr("id"), l._class = t(s).attr(
            "class"), l._data = a.getRealDataAttr(t(s).data()), t(s).find(
            ">td,>th").each(function (n, s) {
          for (var r = +t(s).attr("colspan") || 1,
              c = +t(s).attr("rowspan") || 1, d = n; i[o] && i[o][d]; d++) {
            ;
          }
          for (var p = d; p < d + r; p++) {
            for (var u = o; u < o + c; u++) {
              i[u]
              || (i[u] = []), i[u][p] = !0;
            }
          }
          var h = e[d].field;
          l[h] = t(s).html().trim(), l["_".concat(h, "_id")] = t(s).attr(
              "id"), l["_".concat(h, "_class")] = t(s).attr(
              "class"), l["_".concat(h, "_rowspan")] = t(s).attr(
              "rowspan"), l["_".concat(h, "_colspan")] = t(s).attr(
              "colspan"), l["_".concat(h, "_title")] = t(s).attr(
              "title"), l["_".concat(h, "_data")] = a.getRealDataAttr(
              t(s).data())
        }), n.push(l)
      }), n
    }, sort: function (e, t, o, n) {
      return ((void 0 === e || null === e) && (e = ""), (void 0 === t || null
          === t) && (t = ""), n && e === t
      && (e = e._position, t = t._position), this.isNumeric(e)
      && this.isNumeric(t)) ? (e = parseFloat(e), t = parseFloat(t), e < t ? -1
          * o : e > t ? o : 0) : e === t ? 0 : ("string" != typeof e
      && (e = e.toString()), -1 === e.localeCompare(t) ? -1 * o : o)
    }
  }, wi = 50, vi = 4, Si = function () {
    function e(t) {
      var o = this;
      n(this,
          e), this.rows = t.rows, this.scrollEl = t.scrollEl, this.contentEl = t.contentEl, this.callback = t.callback, this.itemHeight = t.itemHeight, this.cache = {}, this.scrollTop = this.scrollEl.scrollTop, this.initDOM(
          this.rows), this.scrollEl.scrollTop = this.scrollTop, this.lastCluster = 0;
      var a = function () {
        o.lastCluster !== (o.lastCluster = o.getNum()) && (o.initDOM(
            o.rows), o.callback())
      };
      this.scrollEl.addEventListener("scroll", a,
          !1), this.destroy = function () {
        o.contentEl.innerHtml = "", o.scrollEl.removeEventListener("scroll", a,
            !1)
      }
    }

    return s(e, [{
      key: "initDOM", value: function (e) {
        "undefined" == typeof this.clusterHeight
        && (this.cache.data = this.contentEl.innerHTML = e[0] + e[0]
            + e[0], this.getRowsHeight(e));
        var t = this.initData(e, this.getNum()), o = t.rows.join(""),
            a = this.checkChanges("data", o),
            n = this.checkChanges("top", t.topOffset),
            i = this.checkChanges("bottom", t.bottomOffset), s = [];
        a && n ? (t.topOffset && s.push(
            this.getExtra("top", t.topOffset)), s.push(o), t.bottomOffset
        && s.push(this.getExtra("bottom",
            t.bottomOffset)), this.contentEl.innerHTML = s.join("")) : i
            && (this.contentEl.lastChild.style.height = "".concat(
                t.bottomOffset, "px"))
      }
    }, {
      key: "getRowsHeight", value: function () {
        if ("undefined" == typeof this.itemHeight) {
          var e = this.contentEl.children, t = e[w(e.length / 2)];
          this.itemHeight = t.offsetHeight
        }
        this.blockHeight = this.itemHeight * wi, this.clusterRows = wi
            * vi, this.clusterHeight = this.blockHeight * vi
      }
    }, {
      key: "getNum", value: function () {
        return this.scrollTop = this.scrollEl.scrollTop, w(
            this.scrollTop / (this.clusterHeight - this.blockHeight)) || 0
      }
    }, {
      key: "initData", value: function (e, t) {
        if (e.length < wi) {
          return {
            topOffset: 0,
            bottomOffset: 0,
            rowsAbove: 0,
            rows: e
          };
        }
        var o = b((this.clusterRows - wi) * t, 0), a = o + this.clusterRows,
            n = b(o * this.itemHeight, 0),
            s = b((e.length - a) * this.itemHeight, 0), l = [], r = o;
        1 > n && r++;
        for (var c = o; c < a; c++) {
          e[c] && l.push(e[c]);
        }
        return {topOffset: n, bottomOffset: s, rowsAbove: r, rows: l}
      }
    }, {
      key: "checkChanges", value: function (e, t) {
        var o = t !== this.cache[e];
        return this.cache[e] = t, o
      }
    }, {
      key: "getExtra", value: function (e, t) {
        var o = document.createElement("tr");
        return o.className = "virtual-scroll-".concat(e), t
        && (o.style.height = "".concat(t, "px")), o.outerHTML
      }
    }]), e
  }(), xi = function () {
    function e(o, a) {
      n(this, e), this.options = a, this.$el = t(
          o), this.$el_ = this.$el.clone(), this.timeoutId_ = 0, this.timeoutFooter_ = 0, this.init()
    }

    return s(e, [{
      key: "init", value: function () {
        this.initConstants(), this.initLocale(), this.initContainer(), this.initTable(), this.initHeader(), this.initData(), this.initHiddenRows(), this.initToolbar(), this.initPagination(), this.initBody(), this.initSearchText(), this.initServer()
      }
    }, {
      key: "initConstants", value: function () {
        var e = this.options;
        this.constants = fi.CONSTANTS, this.constants.theme = t.fn.bootstrapTable.theme;
        var o = e.buttonsPrefix ? "".concat(e.buttonsPrefix, "-") : "";
        this.constants.buttonsClass = [e.buttonsPrefix, o + e.buttonsClass,
          yi.sprintf("".concat(o, "%s"), e.iconSize)].join(" ").trim()
      }
    }, {
      key: "initLocale", value: function () {
        if (this.options.locale) {
          var e = t.fn.bootstrapTable.locales,
              o = this.options.locale.split(/-|_/);
          o[0] = o[0].toLowerCase(), o[1]
          && (o[1] = o[1].toUpperCase()), e[this.options.locale] ? t.extend(
              this.options, e[this.options.locale]) : e[o.join("-")] ? t.extend(
              this.options, e[o.join("-")]) : e[o[0]] && t.extend(this.options,
              e[o[0]])
        }
      }
    }, {
      key: "initContainer", value: function () {
        var e = ["top", "both"].includes(this.options.paginationVAlign)
            ? "<div class=\"fixed-table-pagination clearfix\"></div>" : "",
            o = ["bottom", "both"].includes(this.options.paginationVAlign)
                ? "<div class=\"fixed-table-pagination\"></div>" : "";
        this.$container = t(
            "\n      <div class=\"bootstrap-table ".concat(this.constants.theme,
                "\">\n      <div class=\"fixed-table-toolbar\"></div>\n      ").concat(
                e,
                "\n      <div class=\"fixed-table-container\">\n      <div class=\"fixed-table-header\"><table></table></div>\n      <div class=\"fixed-table-body\">\n      <div class=\"fixed-table-loading\">\n      <span class=\"loading-wrap\">\n      <span class=\"loading-text\">").concat(
                this.options.formatLoadingMessage(),
                "</span>\n      <span class=\"animation-wrap\"><span class=\"animation-dot\"></span></span>\n      </span>\n      </div>\n      </div>\n      <div class=\"fixed-table-footer\"><table><thead><tr></tr></thead></table></div>\n      </div>\n      ").concat(
                o, "\n      </div>\n    ")), this.$container.insertAfter(
            this.$el), this.$tableContainer = this.$container.find(
            ".fixed-table-container"), this.$tableHeader = this.$container.find(
            ".fixed-table-header"), this.$tableBody = this.$container.find(
            ".fixed-table-body"), this.$tableLoading = this.$container.find(
            ".fixed-table-loading"), this.$tableFooter = this.$el.find(
            "tfoot"), this.$toolbar = this.options.buttonsToolbar ? t(
            "body").find(this.options.buttonsToolbar) : this.$container.find(
            ".fixed-table-toolbar"), this.$pagination = this.$container.find(
            ".fixed-table-pagination"), this.$tableBody.append(
            this.$el), this.$container.after(
            "<div class=\"clearfix\"></div>"), this.$el.addClass(
            this.options.classes), this.$tableLoading.addClass(
            this.options.classes), this.options.height
            ? (this.$tableContainer.addClass(
                "fixed-height"), this.options.showFooter
            && this.$tableContainer.addClass(
                "has-footer"), this.options.classes.split(" ").includes(
                "table-bordered") && (this.$tableBody.append(
                "<div class=\"fixed-table-border\"></div>"), this.$tableBorder = this.$tableBody.find(
                ".fixed-table-border"), this.$tableLoading.addClass(
                "fixed-table-border")), this.$tableFooter = this.$container.find(
                ".fixed-table-footer")) : !this.$tableFooter.length
            && (this.$el.append(
                "<tfoot><tr></tr></tfoot>"), this.$tableFooter = this.$el.find(
                "tfoot"))
      }
    }, {
      key: "initTable", value: function () {
        var o = this, a = [];
        this.$header = this.$el.find(">thead"), this.$header.length
            ? this.options.theadClasses && this.$header.addClass(
            this.options.theadClasses) : this.$header = t(
                "<thead class=\"".concat(this.options.theadClasses,
                    "\"></thead>")).appendTo(this.$el), this.$header.find(
            "tr").each(function (e, o) {
          var n = [];
          t(o).find("th").each(function (e, o) {
            "undefined" != typeof t(o).data("field") && t(o).data("field",
                "".concat(t(o).data("field"))), n.push(t.extend({}, {
              title: t(o).html(),
              class: t(o).attr("class"),
              titleTooltip: t(o).attr("title"),
              rowspan: t(o).attr("rowspan") ? +t(o).attr("rowspan") : void 0,
              colspan: t(o).attr("colspan") ? +t(o).attr("colspan") : void 0
            }, t(o).data()))
          }), a.push(n)
        }), Array.isArray(this.options.columns[0])
        || (this.options.columns = [this.options.columns]), this.options.columns = t.extend(
            !0, [], a,
            this.options.columns), this.columns = [], this.fieldsColumnsIndex = [], yi.setFieldIndex(
            this.options.columns), this.options.columns.forEach(
            function (a, n) {
              a.forEach(function (a, i) {
                var s = t.extend({}, e.COLUMN_DEFAULTS, a);
                "undefined" != typeof s.fieldIndex
                && (o.columns[s.fieldIndex] = s, o.fieldsColumnsIndex[s.field] = s.fieldIndex), o.options.columns[n][i] = s
              })
            }), this.options.data.length || (this.options.data = yi.trToData(
            this.columns, this.$el.find(">tbody>tr")), [].length
        && (this.fromHtml = !0)), this.footerData = yi.trToData(this.columns,
            this.$el.find(">tfoot>tr")), this.footerData && this.$el.find(
            "tfoot").html("<tr></tr>"), !this.options.showFooter
        || this.options.cardView ? this.$tableFooter.hide()
            : this.$tableFooter.show()
      }
    }, {
      key: "initHeader", value: function () {
        var o = this, a = {}, n = [];
        this.header = {
          fields: [],
          styles: [],
          classes: [],
          formatters: [],
          detailFormatters: [],
          events: [],
          sorters: [],
          sortNames: [],
          cellStyles: [],
          searchables: []
        }, yi.updateFieldGroup(
            this.options.columns), this.options.columns.forEach(
            function (e, t) {
              n.push("<tr>"), 0 === t && !o.options.cardView
              && o.options.detailView && o.options.detailViewIcon && n.push(
                  "<th class=\"detail\" rowspan=\"".concat(
                      o.options.columns.length,
                      "\">\n          <div class=\"fht-cell\"></div>\n          </th>\n        ")), e.forEach(
                  function (e, i) {
                    if (e.visible) {
                      var s = yi.sprintf(" class=\"%s\"", e["class"]),
                          l = e.widthUnit, r = parseFloat(e.width),
                          c = yi.sprintf("text-align: %s; ",
                              e.halign ? e.halign : e.align),
                          d = yi.sprintf("text-align: %s; ", e.align),
                          p = yi.sprintf("vertical-align: %s; ", e.valign);
                      if (p += yi.sprintf("width: %s; ",
                          (e.checkbox || e.radio) && !r ? e.showSelectTitle
                              ? void 0 : "36px" : r ? r + l
                              : void 0), "undefined" != typeof e.fieldIndex) {
                        if (o.header.fields[e.fieldIndex] = e.field, o.header.styles[e.fieldIndex] = d
                            + p, o.header.classes[e.fieldIndex] = s, o.header.formatters[e.fieldIndex] = e.formatter, o.header.detailFormatters[e.fieldIndex] = e.detailFormatter, o.header.events[e.fieldIndex] = e.events, o.header.sorters[e.fieldIndex] = e.sorter, o.header.sortNames[e.fieldIndex] = e.sortName, o.header.cellStyles[e.fieldIndex] = e.cellStyle, o.header.searchables[e.fieldIndex] = e.searchable, o.options.cardView
                        && !e.cardVisible) {
                          return;
                        }
                        a[e.field] = e
                      }
                      n.push("<th".concat(
                          yi.sprintf(" title=\"%s\"", e.titleTooltip)),
                          e.checkbox || e.radio ? yi.sprintf(
                              " class=\"bs-checkbox %s\"", e["class"] || "")
                              : s, yi.sprintf(" style=\"%s\"", c + p),
                          yi.sprintf(" rowspan=\"%s\"", e.rowspan),
                          yi.sprintf(" colspan=\"%s\"", e.colspan),
                          yi.sprintf(" data-field=\"%s\"", e.field),
                          0 === i && 0 < t ? " data-not-first-th" : "",
                          ">"), n.push(yi.sprintf("<div class=\"th-inner %s\">",
                          o.options.sortable && e.sortable ? "sortable both"
                              : ""));
                      var u = o.options.escape ? yi.escapeHTML(e.title)
                          : e.title, h = u;
                      e.checkbox && (u = "", !o.options.singleSelect
                      && o.options.checkboxHeader
                      && (u = "<label><input name=\"btSelectAll\" type=\"checkbox\" /><span></span></label>"), o.header.stateField = e.field), e.radio
                      && (u = "", o.header.stateField = e.field, o.options.singleSelect = !0), !u
                      && e.showSelectTitle && (u += h), n.push(u), n.push(
                          "</div>"), n.push(
                          "<div class=\"fht-cell\"></div>"), n.push(
                          "</div>"), n.push("</th>")
                    }
                  }), n.push("</tr>")
            }), this.$header.html(n.join("")), this.$header.find(
            "th[data-field]").each(function (e, o) {
          t(o).data(a[t(o).data("field")])
        }), this.$container.off("click", ".th-inner").on("click", ".th-inner",
            function (a) {
              var e = t(a.currentTarget);
              return (!o.options.detailView || e.parent().hasClass(
                  "bs-checkbox") || e.closest(".bootstrap-table")[0]
                  === o.$container[0]) && void (o.options.sortable
                  && e.parent().data().sortable && o.onSort(a))
            }), this.$header.children().children().off("keypress").on(
            "keypress", function (a) {
              if (o.options.sortable && t(a.currentTarget).data().sortable) {
                var e = a.keyCode || a.which;
                13 === e && o.onSort(a)
              }
            });
        var i = "resize.bootstrap-table".concat(this.$el.attr("id") || "");
        t(window).off(i), !this.options.showHeader || this.options.cardView
            ? (this.$header.hide(), this.$tableHeader.hide(), this.$tableLoading.css(
                "top", 0))
            : (this.$header.show(), this.$tableHeader.show(), this.$tableLoading.css(
                "top", this.$header.outerHeight() + 1), this.getCaret(), t(
                window).on(i, function (t) {
              return o.resetWidth(t)
            })), this.$selectAll = this.$header.find(
            "[name=\"btSelectAll\"]"), this.$selectAll.off("click").on("click",
            function (e) {
              var a = e.currentTarget, n = t(a).prop("checked");
              o[n ? "checkAll" : "uncheckAll"](), o.updateSelected()
            })
      }
    }, {
      key: "initData", value: function (e, t) {
        this.options.data = "append" === t ? this.options.data.concat(e)
            : "prepend" === t ? [].concat(e).concat(this.options.data) : e
                || this.options.data, this.data = this.options.data, "server"
        === this.options.sidePagination || this.initSort()
      }
    }, {
      key: "initSort", value: function () {
        var e = this, t = this.options.sortName,
            o = "desc" === this.options.sortOrder ? -1 : 1,
            n = this.header.fields.indexOf(this.options.sortName), i = 0;
        -1 !== n && (this.options.sortStable && this.data.forEach(
            function (e, t) {
              e.hasOwnProperty("_position") || (e._position = t)
            }), this.options.customSort ? yi.calculateObjectValue(this.options,
            this.options.customSort,
            [this.options.sortName, this.options.sortOrder, this.data])
            : this.data.sort(function (i, a) {
              e.header.sortNames[n] && (t = e.header.sortNames[n]);
              var s = yi.getItemField(i, t, e.options.escape),
                  l = yi.getItemField(a, t, e.options.escape),
                  r = yi.calculateObjectValue(e.header, e.header.sorters[n],
                      [s, l, i, a]);
              return void 0 === r ? yi.sort(s, l, o, e.options.sortStable)
                  : e.options.sortStable && 0 === r ? o * (i._position
                      - a._position) : o * r
            }), void 0 !== this.options.sortClass && (clearTimeout(
            i), i = setTimeout(function () {
          e.$el.removeClass(e.options.sortClass);
          var t = e.$header.find(
              "[data-field=\"".concat(e.options.sortName, "\"]")).index();
          e.$el.find("tr td:nth-child(".concat(t + 1, ")")).addClass(
              e.options.sortClass)
        }, 250)))
      }
    }, {
      key: "onSort", value: function (e) {
        var o = e.type, a = e.currentTarget,
            n = "keypress" === o ? t(a) : t(a).parent(),
            i = this.$header.find("th").eq(n.index());
        return this.$header.add(this.$header_).find(
            "span.order").remove(), this.options.sortName === n.data("field")
            ? this.options.sortOrder = "asc" === this.options.sortOrder ? "desc"
                : "asc" : (this.options.sortName = n.data(
                "field"), this.options.sortOrder = this.options.rememberOrder
                ? "asc" === n.data("order") ? "desc" : "asc"
                : this.columns[this.fieldsColumnsIndex[n.data(
                "field")]].sortOrder
                || this.columns[this.fieldsColumnsIndex[n.data(
                    "field")]].order), this.trigger("sort",
            this.options.sortName, this.options.sortOrder), n.add(i).data(
            "order", this.options.sortOrder), this.getCaret(), "server"
        === this.options.sidePagination
            ? (this.options.pageNumber = 1, void this.initServer(
                this.options.silentSort))
            : void (this.initSort(), this.initBody())
      }
    }, {
      key: "initToolbar", value: function () {
        var e, n, s = this, l = this.options, o = [], i = 0, r = 0;
        if (this.$toolbar.find(".bs-bars").children().length && t(
            "body").append(t(l.toolbar)), this.$toolbar.html(""), ("string"
            == typeof l.toolbar || "object" === a(l.toolbar)) && t(
            yi.sprintf("<div class=\"bs-bars %s-%s\"></div>",
                this.constants.classes.pull, l.toolbarAlign)).appendTo(
            this.$toolbar).append(t(l.toolbar)), o = ["<div class=\"".concat(
            ["columns", "columns-".concat(l.buttonsAlign),
              this.constants.classes.buttonsGroup,
              "".concat(this.constants.classes.pull, "-").concat(
                  l.buttonsAlign)].join(" "), "\">")], "string"
        == typeof l.icons && (l.icons = yi.calculateObjectValue(null,
            l.icons)), l.showPaginationSwitch && o.push(
            "<button class=\"".concat(this.constants.buttonsClass,
                "\" type=\"button\" name=\"paginationSwitch\"\n        aria-label=\"Pagination Switch\" title=\"").concat(
                l.formatPaginationSwitch(), "\">\n        ").concat(
                l.showButtonIcons ? yi.sprintf(this.constants.html.icon,
                    l.iconsPrefix, l.icons.paginationSwitchDown) : "",
                "\n        ").concat(
                l.showButtonText ? l.formatPaginationSwitchUp() : "",
                "\n        </button>")), l.showRefresh && o.push(
            "<button class=\"".concat(this.constants.buttonsClass,
                "\" type=\"button\" name=\"refresh\"\n        aria-label=\"Refresh\" title=\"").concat(
                l.formatRefresh(), "\">\n        ").concat(
                l.showButtonIcons ? yi.sprintf(this.constants.html.icon,
                    l.iconsPrefix, l.icons.refresh) : "", "\n        ").concat(
                l.showButtonText ? l.formatRefresh() : "",
                "\n        </button>")), l.showToggle && o.push(
            "<button class=\"".concat(this.constants.buttonsClass,
                "\" type=\"button\" name=\"toggle\"\n        aria-label=\"Toggle\" title=\"").concat(
                l.formatToggle(), "\">\n        ").concat(
                l.showButtonIcons ? yi.sprintf(this.constants.html.icon,
                    l.iconsPrefix, l.icons.toggleOff) : "",
                "\n        ").concat(l.showButtonText ? l.formatToggleOn() : "",
                "\n        </button>")), l.showFullscreen && o.push(
            "<button class=\"".concat(this.constants.buttonsClass,
                "\" type=\"button\" name=\"fullscreen\"\n        aria-label=\"Fullscreen\" title=\"").concat(
                l.formatFullscreen(), "\">\n        ").concat(
                l.showButtonIcons ? yi.sprintf(this.constants.html.icon,
                    l.iconsPrefix, l.icons.fullscreen) : "",
                "\n        ").concat(
                l.showButtonText ? l.formatFullscreen() : "",
                "\n        </button>")), l.showColumns) {
          if (o.push("<div class=\"keep-open ".concat(
              this.constants.classes.buttonsDropdown, "\" title=\"").concat(
              l.formatColumns(), "\">\n        <button class=\"").concat(
              this.constants.buttonsClass,
              " dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\"\n        aria-label=\"Columns\" title=\"").concat(
              l.formatColumns(), "\">\n        ").concat(
              l.showButtonIcons ? yi.sprintf(this.constants.html.icon,
                  l.iconsPrefix, l.icons.columns) : "", "\n        ").concat(
              l.showButtonText ? l.formatColumns() : "", "\n        ").concat(
              this.constants.html.dropdownCaret,
              "\n        </button>\n        ").concat(
              this.constants.html.toolbarDropdown[0])), l.showColumnsToggleAll) {
            var c = this.getVisibleColumns().length === this.columns.length;
            o.push(yi.sprintf(this.constants.html.toolbarDropdownItem,
                yi.sprintf(
                    "<input type=\"checkbox\" class=\"toggle-all\" %s> <span>%s</span>",
                    c ? "checked=\"checked\"" : "",
                    l.formatColumnsToggleAll()))), o.push(
                this.constants.html.toolbarDropdownSeperator)
          }
          this.columns.forEach(function (e, t) {
            if (!(e.radio || e.checkbox) && (!l.cardView || e.cardVisible)) {
              var a = e.visible ? " checked=\"checked\"" : "";
              e.switchable && (o.push(
                  yi.sprintf(s.constants.html.toolbarDropdownItem, yi.sprintf(
                      "<input type=\"checkbox\" data-field=\"%s\" value=\"%s\"%s> <span>%s</span>",
                      e.field, t, a, e.title))), r++)
            }
          }), o.push(this.constants.html.toolbarDropdown[1], "</div>")
        }
        if (o.push("</div>"), (this.showToolbar || 2 < o.length)
        && this.$toolbar.append(o.join("")), l.showPaginationSwitch
        && this.$toolbar.find("button[name=\"paginationSwitch\"]").off(
            "click").on("click", function () {
          return s.togglePagination()
        }), l.showFullscreen && this.$toolbar.find(
            "button[name=\"fullscreen\"]").off("click").on("click",
            function () {
              return s.toggleFullscreen()
            }), l.showRefresh && this.$toolbar.find(
            "button[name=\"refresh\"]").off("click").on("click", function () {
          return s.refresh()
        }), l.showToggle && this.$toolbar.find("button[name=\"toggle\"]").off(
            "click").on("click", function () {
          s.toggleView()
        }), l.showColumns) {
          e = this.$toolbar.find(".keep-open");
          var d = e.find("input:not(\".toggle-all\")"),
              p = e.find("input.toggle-all");
          r <= l.minimumCountColumns && e.find("input").prop("disabled",
              !0), e.find("li, label").off("click").on("click", function (t) {
            t.stopImmediatePropagation()
          }), d.off("click").on("click", function (e) {
            var o = e.currentTarget, a = t(o);
            s._toggleColumn(a.val(), a.prop("checked"), !1), s.trigger(
                "column-switch", a.data("field"), a.prop("checked")), p.prop(
                "checked", d.filter(":checked").length === s.columns.length)
          }), p.off("click").on("click", function (e) {
            var o = e.currentTarget;
            s._toggleAllColumns(t(o).prop("checked"))
          })
        }
        if (l.search) {
          o = [];
          var u = yi.sprintf(this.constants.html.searchButton, l.formatSearch(),
              l.showButtonIcons ? yi.sprintf(this.constants.html.icon,
                  l.iconsPrefix, l.icons.search) : "",
              l.showButtonText ? l.formatSearch() : ""),
              h = yi.sprintf(this.constants.html.searchClearButton,
                  l.formatClearSearch(),
                  l.showButtonIcons ? yi.sprintf(this.constants.html.icon,
                      l.iconsPrefix, l.icons.clearSearch) : "",
                  l.showButtonText ? l.formatClearSearch() : ""),
              g = "<input class=\"".concat(this.constants.classes.input).concat(
                  yi.sprintf(" input-%s", l.iconSize),
                  " search-input\" type=\"text\" placeholder=\"").concat(
                  l.formatSearch(), "\">"), f = g;
          (l.showSearchButton || l.showSearchClearButton) && (f = yi.sprintf(
              this.constants.html.inputGroup, g,
              (l.showSearchButton ? u : "") + (l.showSearchClearButton ? h
              : ""))), o.push(yi.sprintf(
              "\n        <div class=\"".concat(this.constants.classes.pull,
                  "-").concat(l.searchAlign, " search ").concat(
                  this.constants.classes.inputGroup,
                  "\">\n          %s\n        </div>\n      "),
              f)), this.$toolbar.append(o.join(""));
          var m = this.$toolbar.find(".search input");
          n = l.showSearchButton ? this.$toolbar.find(
              ".search button[name=search]") : m;
          var b = l.showSearchButton ? "click" : yi.isIEBrowser() ? "mouseup"
              : "keyup drop blur";
          n.off(b).on(b, function (e) {
            l.searchOnEnterKey && 13 !== e.keyCode || [37, 38, 39, 40].includes(
                e.keyCode) || (clearTimeout(i), i = setTimeout(function () {
              s.onSearch(l.showSearchButton ? {currentTarget: m} : e)
            }, l.searchTimeOut))
          }), l.showSearchClearButton && this.$toolbar.find(
              ".search button[name=clearSearch]").click(function () {
            s.resetSearch(), s.onSearch(
                {currentTarget: s.$toolbar.find(".search input")})
          })
        }
      }
    }, {
      key: "onSearch", value: function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0]
            : {}, o = e.currentTarget, a = e.firedByInitSearchText,
            n = !(1 < arguments.length && void 0 !== arguments[1])
                || arguments[1];
        if (void 0 !== o && n) {
          var i = t(o).val().trim();
          if (this.options.trimOnSearch && t(o).val() !== i && t(o).val(
              i), this.searchText === i) {
            return;
          }
          t(o).hasClass("search-input")
          && (this.searchText = i, this.options.searchText = i)
        }
        a || (this.options.pageNumber = 1), this.initSearch(), a ? "client"
            === this.options.sidePagination && this.updatePagination()
            : this.updatePagination(), this.trigger("search", this.searchText)
      }
    }, {
      key: "initSearch", value: function () {
        var e = this;
        if (this.filterOptions = this.filterOptions
            || this.options.filterOptions, "server"
        !== this.options.sidePagination) {
          if (this.options.customSearch) {
            return void (this.data = yi.calculateObjectValue(
                this.options, this.options.customSearch,
                [this.options.data, this.searchText]));
          }
          var t = this.searchText && (this.options.escape ? yi.escapeHTML(
              this.searchText) : this.searchText).toLowerCase(),
              o = yi.isEmptyObject(this.filterColumns) ? null
                  : this.filterColumns;
          "function" == typeof this.filterOptions.filterAlgorithm
              ? this.data = this.options.data.filter(function (t) {
                return e.filterOptions.filterAlgorithm.apply(null, [t, o])
              }) : "string" == typeof this.filterOptions.filterAlgorithm
              && (this.data = o ? this.options.data.filter(function (t) {
                var a = e.filterOptions.filterAlgorithm;
                if ("and" === a) {
                  for (var n in o) {
                    if (Array.isArray(o[n]) && !o[n].includes(
                        t[n]) || !Array.isArray(o[n]) && t[n] !== o[n]) {
                      return !1;
                    }
                  }
                } else if ("or" === a) {
                  var i = !1;
                  for (var s in o) {
                    (Array.isArray(o[s]) && o[s].includes(t[s])
                        || !Array.isArray(o[s]) && t[s] === o[s]) && (i = !0);
                  }
                  return i
                }
                return !0
              }) : this.options.data);
          var a = this.getVisibleFields();
          this.data = t ? this.data.filter(function (o, n) {
            for (var i = 0; i < e.header.fields.length;
                i++) {
              if (e.header.searchables[i] && (!e.options.visibleSearch
                  || -1 !== a.indexOf(e.header.fields[i]))) {
                var s = yi.isNumeric(e.header.fields[i]) ? parseInt(
                    e.header.fields[i], 10) : e.header.fields[i],
                    l = e.columns[e.fieldsColumnsIndex[s]], r = void 0;
                if ("string" == typeof s) {
                  r = o;
                  for (var c = s.split("."), d = 0; d < c.length; d++) {
                    null
                    !== r[c[d]] && (r = r[c[d]])
                  }
                } else {
                  r = o[s];
                }
                if (l && l.searchFormatter && (r = yi.calculateObjectValue(l,
                    e.header.formatters[i], [r, o, n, l.field], r)), "string"
                == typeof r || "number"
                == typeof r) {
                  if (!e.options.strictSearch) {
                    var p = /(?:(<=|=>|=<|>=|>|<)(?:\s+)?(\d+)?|(\d+)?(\s+)?(<=|=>|=<|>=|>|<))/gm,
                        u = p.exec(t), h = !1;
                    if (u) {
                      var g = u[1] || "".concat(u[5], "l"), f = u[2] || u[3],
                          m = parseInt(r, 10), b = parseInt(f, 10);
                      switch (g) {
                        case">":
                        case"<l":
                          h = m > b;
                          break;
                        case"<":
                        case">l":
                          h = m < b;
                          break;
                        case"<=":
                        case"=<":
                        case">=l":
                        case"=>l":
                          h = m <= b;
                          break;
                        case">=":
                        case"=>":
                        case"<=l":
                        case"=<l":
                          h = m >= b;
                          break;
                        default:
                      }
                    }
                    if (h || "".concat(r).toLowerCase().includes(t)) {
                      return !0
                    }
                  } else if ("".concat(r).toLowerCase() === t) {
                    return !0
                  }
                }
              }
            }
            return !1
          }) : this.data
        }
      }
    }, {
      key: "initPagination", value: function () {
        var e = Math.round, t = this, a = this.options;
        if (!a.pagination) {
          return void this.$pagination.hide();
        }
        this.$pagination.show();
        var o, n, s, l, r, c, d, p = [], u = !1,
            h = this.getData({includeHiddenRows: !1}), g = a.pageList;
        if ("server" !== a.sidePagination
        && (a.totalRows = h.length), this.totalPages = 0, a.totalRows) {
          if (a.pageSize
              === a.formatAllRows()) {
            a.pageSize = a.totalRows, u = !0;
          } else if (a.pageSize
              === a.totalRows) {
            var f = "string" == typeof a.pageList ? a.pageList.replace("[",
                "").replace("]", "").replace(/ /g, "").toLowerCase().split(",")
                : a.pageList;
            f.includes(a.formatAllRows().toLowerCase()) && (u = !0)
          }
          this.totalPages = ~~((a.totalRows - 1) / a.pageSize)
              + 1, a.totalPages = this.totalPages
        }
        0 < this.totalPages && a.pageNumber > this.totalPages
        && (a.pageNumber = this.totalPages), this.pageFrom = (a.pageNumber - 1)
            * a.pageSize + 1, this.pageTo = a.pageNumber
            * a.pageSize, this.pageTo > a.totalRows
        && (this.pageTo = a.totalRows), this.options.pagination && "server"
        !== this.options.sidePagination
        && (this.options.totalNotFiltered = this.options.data.length), this.options.showExtendedPagination
        || (this.options.totalNotFiltered = void 0);
        var m = a.onlyInfoPagination ? a.formatDetailPagination(a.totalRows)
            : a.formatShowingRows(this.pageFrom, this.pageTo, a.totalRows,
                a.totalNotFiltered);
        if (p.push(
            "<div class=\"".concat(this.constants.classes.pull, "-").concat(
                a.paginationDetailHAlign,
                " pagination-detail\">\n      <span class=\"pagination-info\">\n      ").concat(
                m, "\n      </span>")), !a.onlyInfoPagination) {
          p.push("<span class=\"page-list\">");
          var b = ["<span class=\"".concat(
              this.constants.classes.paginationDropdown,
              "\">\n        <button class=\"").concat(
              this.constants.buttonsClass,
              " dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n        <span class=\"page-size\">\n        ").concat(
              u ? a.formatAllRows() : a.pageSize,
              "\n        </span>\n        ").concat(
              this.constants.html.dropdownCaret,
              "\n        </button>\n        ").concat(
              this.constants.html.pageDropdown[0])];
          if ("string" == typeof a.pageList) {
            var y = a.pageList.replace("[", "").replace("]", "").replace(/ /g,
                "").split(",");
            g = [];
            var w = !0, v = !1, S = void 0;
            try {
              for (var x, k, T = y[Symbol.iterator]();
                  !(w = (x = T.next()).done); w = !0) {
                k = x.value, g.push(
                    k.toLowerCase() === a.formatAllRows().toLowerCase()
                    || ["all",
                      "unlimited"].includes(k.toLowerCase()) ? a.formatAllRows()
                        : +k)
              }
            } catch (e) {
              v = !0, S = e
            } finally {
              try {
                w || null == T.return || T.return()
              } finally {
                if (v) {
                  throw S
                }
              }
            }
          }
          g.forEach(function (e, o) {
            if (!a.smartDisplay || 0 === o || g[o - 1] < a.totalRows) {
              var n;
              n = u ? e === a.formatAllRows()
                  ? t.constants.classes.dropdownActive : "" : e === a.pageSize
                  ? t.constants.classes.dropdownActive : "", b.push(
                  yi.sprintf(t.constants.html.pageDropdownItem, n, e))
            }
          }), b.push("".concat(this.constants.html.pageDropdown[1],
              "</span>")), p.push(a.formatRecordsPerPage(b.join(""))), p.push(
              "</span></div>"), p.push(
              "<div class=\"".concat(this.constants.classes.pull, "-").concat(
                  a.paginationHAlign, " pagination\">"),
              yi.sprintf(this.constants.html.pagination[0],
                  yi.sprintf(" pagination-%s", a.iconSize)),
              yi.sprintf(this.constants.html.paginationItem, " page-pre",
                  a.formatSRPaginationPreText(),
                  a.paginationPreText)), this.totalPages
          < a.paginationSuccessivelySize ? (n = 1, s = this.totalPages)
              : (n = a.pageNumber - a.paginationPagesBySide, s = n + 2
                  * a.paginationPagesBySide), a.pageNumber
          < a.paginationSuccessivelySize - 1
          && (s = a.paginationSuccessivelySize), a.paginationSuccessivelySize
          > this.totalPages - n && (n = n - (a.paginationSuccessivelySize
              - (this.totalPages - n)) + 1), 1 > n && (n = 1), s
          > this.totalPages && (s = this.totalPages);
          var P = e(a.paginationPagesBySide / 2), O = function (e) {
            var o = 1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1] : "";
            return yi.sprintf(t.constants.html.paginationItem,
                o + (e === a.pageNumber ? " ".concat(
                t.constants.classes.paginationActive) : ""),
                a.formatSRPaginationPageText(e), e)
          };
          if (1 < n) {
            var C = a.paginationPagesBySide;
            for (C >= n && (C = n - 1), o = 1; o <= C; o++) {
              p.push(O(o));
            }
            n - 1 === C + 1 ? (o = n - 1, p.push(O(o))) : n - 1 > C && (n - 2
            * a.paginationPagesBySide > a.paginationPagesBySide
            && a.paginationUseIntermediate ? (o = e((n - P) / 2 + P), p.push(
                O(o, " page-intermediate"))) : p.push(
                yi.sprintf(this.constants.html.paginationItem,
                    " page-first-separator disabled", "", "...")))
          }
          for (o = n; o <= s; o++) {
            p.push(O(o));
          }
          if (this.totalPages > s) {
            var I = this.totalPages - (a.paginationPagesBySide - 1);
            for (s >= I && (I = s + 1), s + 1 === I - 1 ? (o = s + 1, p.push(
                O(o))) : I > s + 1 && (this.totalPages - s > 2
            * a.paginationPagesBySide && a.paginationUseIntermediate ? (o = e(
                (this.totalPages - P - s) / 2 + s), p.push(
                O(o, " page-intermediate"))) : p.push(
                yi.sprintf(this.constants.html.paginationItem,
                    " page-last-separator disabled", "", "..."))), o = I;
                o <= this.totalPages; o++) {
              p.push(O(o))
            }
          }
          p.push(yi.sprintf(this.constants.html.paginationItem, " page-next",
              a.formatSRPaginationNextText(), a.paginationNextText)), p.push(
              this.constants.html.pagination[1], "</div>")
        }
        this.$pagination.html(p.join(""));
        var $ = ["bottom", "both"].includes(a.paginationVAlign) ? " ".concat(
            this.constants.classes.dropup) : "";
        this.$pagination.last().find(".page-list > span").addClass(
            $), a.onlyInfoPagination || (l = this.$pagination.find(
            ".page-list a"), r = this.$pagination.find(
            ".page-pre"), c = this.$pagination.find(
            ".page-next"), d = this.$pagination.find(".page-item").not(
            ".page-next, .page-pre, .page-last-separator, .page-first-separator"), 1
        >= this.totalPages && this.$pagination.find(
            "div.pagination").hide(), a.smartDisplay && (2 > g.length
            || a.totalRows <= g[0]) && this.$pagination.find(
            "span.page-list").hide(), this.$pagination[this.getData().length
            ? "show" : "hide"](), !a.paginationLoop && (1 === a.pageNumber
        && r.addClass("disabled"), a.pageNumber === this.totalPages
        && c.addClass("disabled")), u
        && (a.pageSize = a.formatAllRows()), l.off("click").on("click",
            function (o) {
              return t.onPageListChange(o)
            }), r.off("click").on("click", function (o) {
          return t.onPagePre(o)
        }), c.off("click").on("click", function (o) {
          return t.onPageNext(o)
        }), d.off("click").on("click", function (o) {
          return t.onPageNumber(o)
        }))
      }
    }, {
      key: "updatePagination", value: function (e) {
        e && t(e.currentTarget).hasClass("disabled")
        || (!this.options.maintainMetaData
        && this.resetRows(), this.initPagination(), "server"
        === this.options.sidePagination ? this.initServer()
            : this.initBody(), this.trigger("page-change",
            this.options.pageNumber, this.options.pageSize))
      }
    }, {
      key: "onPageListChange", value: function (e) {
        e.preventDefault();
        var o = t(e.currentTarget);
        return o.parent().addClass(
            this.constants.classes.dropdownActive).siblings().removeClass(
            this.constants.classes.dropdownActive), this.options.pageSize = o.text().toUpperCase()
        === this.options.formatAllRows().toUpperCase()
            ? this.options.formatAllRows() : +o.text(), this.$toolbar.find(
            ".page-size").text(this.options.pageSize), this.updatePagination(
            e), !1
      }
    }, {
      key: "onPagePre", value: function (e) {
        return e.preventDefault(), 0 == this.options.pageNumber - 1
            ? this.options.pageNumber = this.options.totalPages
            : this.options.pageNumber--, this.updatePagination(e), !1
      }
    }, {
      key: "onPageNext", value: function (e) {
        return e.preventDefault(), this.options.pageNumber + 1
        > this.options.totalPages ? this.options.pageNumber = 1
            : this.options.pageNumber++, this.updatePagination(e), !1
      }
    }, {
      key: "onPageNumber", value: function (e) {
        if (e.preventDefault(), this.options.pageNumber !== +t(
            e.currentTarget).text()) {
          return this.options.pageNumber = +t(
              e.currentTarget).text(), this.updatePagination(e), !1
        }
      }
    }, {
      key: "initRow", value: function (e, t) {
        var o = this, n = [], i = {}, s = [], r = "", c = {}, d = [];
        if (!(-1 < yi.findIndex(this.hiddenRows, e))) {
          if (i = yi.calculateObjectValue(this.options, this.options.rowStyle,
              [e, t], i), i && i.css) {
            for (var p = 0, u = Object.entries(i.css);
                p < u.length; p++) {
              var h = l(u[p], 2), g = h[0], f = h[1];
              s.push("".concat(g, ": ").concat(f))
            }
          }
          if (c = yi.calculateObjectValue(this.options,
              this.options.rowAttributes, [e, t], c), c) {
            for (var m = 0,
                b = Object.entries(c); m < b.length; m++) {
              var y = l(b[m], 2), g = y[0], f = y[1];
              d.push("".concat(g, "=\"").concat(yi.escapeHTML(f), "\""))
            }
          }
          if (e._data && !yi.isEmptyObject(e._data)) {
            for (var w = 0,
                S = Object.entries(e._data); w < S.length; w++) {
              var x = l(S[w], 2), T = x[0], k = x[1];
              if ("index" === T) {
                return;
              }
              r += " data-".concat(T, "='").concat(
                  "object" === a(k) ? JSON.stringify(k) : k, "'")
            }
          }
          return n.push("<tr",
              yi.sprintf(" %s", d.length ? d.join(" ") : void 0),
              yi.sprintf(" id=\"%s\"", Array.isArray(e) ? void 0 : e._id),
              yi.sprintf(" class=\"%s\"",
                  i.classes || (Array.isArray(e) ? void 0 : e._class)),
              " data-index=\"".concat(t, "\""),
              yi.sprintf(" data-uniqueid=\"%s\"",
                  yi.getItemField(e, this.options.uniqueId, !1)),
              yi.sprintf(" data-has-detail-view=\"%s\"",
                  !this.options.cardView && this.options.detailView
                  && yi.calculateObjectValue(null, this.options.detailFilter,
                      [t, e]) ? "true" : void 0), yi.sprintf("%s", r),
              ">"), this.options.cardView && n.push(
              "<td colspan=\"".concat(this.header.fields.length,
                  "\"><div class=\"card-views\">")), !this.options.cardView
          && this.options.detailView && this.options.detailViewIcon && (n.push(
              "<td>"), yi.calculateObjectValue(null, this.options.detailFilter,
              [t, e]) && n.push(
              "\n          <a class=\"detail-icon\" href=\"#\">\n          ".concat(
                  yi.sprintf(this.constants.html.icon, this.options.iconsPrefix,
                      this.options.icons.detailOpen),
                  "\n          </a>\n        ")), n.push(
              "</td>")), this.header.fields.forEach(function (a, i) {
            var r = "", d = yi.getItemField(e, a, o.options.escape), p = "",
                u = "", h = {}, g = "", f = o.header.classes[i], m = "", b = "",
                y = "", w = "", S = "", x = o.columns[i];
            if ((!o.fromHtml || "undefined" != typeof d || x.checkbox
                || x.radio) && x.visible && (!o.options.cardView
                || x.cardVisible)) {
              if (x.escape && (d = yi.escapeHTML(d)), s.concat(
                  [o.header.styles[i]]).length && (m = " style=\"".concat(
                  s.concat([o.header.styles[i]]).join("; "),
                  "\"")), e["_".concat(a, "_id")] && (g = yi.sprintf(
                  " id=\"%s\"", e["_".concat(a, "_id")])), e["_".concat(a,
                  "_class")] && (f = yi.sprintf(" class=\"%s\"",
                  e["_".concat(a, "_class")])), e["_".concat(a, "_rowspan")]
              && (y = yi.sprintf(" rowspan=\"%s\"",
                  e["_".concat(a, "_rowspan")])), e["_".concat(a, "_colspan")]
              && (w = yi.sprintf(" colspan=\"%s\"",
                  e["_".concat(a, "_colspan")])), e["_".concat(a, "_title")]
              && (S = yi.sprintf(" title=\"%s\"",
                  e["_".concat(a, "_title")])), h = yi.calculateObjectValue(
                  o.header, o.header.cellStyles[i], [d, e, t, a], h), h.classes
              && (f = " class=\"".concat(h.classes, "\"")), h.css) {
                for (var T = [], P = 0, O = Object.entries(h.css); P < O.length;
                    P++) {
                  var C = l(O[P], 2), I = C[0], $ = C[1];
                  T.push("".concat(I, ": ").concat($))
                }
                m = " style=\"".concat(T.concat(o.header.styles[i]).join("; "),
                    "\"")
              }
              if (p = yi.calculateObjectValue(x, o.header.formatters[i],
                  [d, e, t, a], d), e["_".concat(a, "_data")]
              && !yi.isEmptyObject(e["_".concat(a, "_data")])) {
                for (var A = 0,
                    E = Object.entries(e["_".concat(a, "_data")]); A < E.length;
                    A++) {
                  var R = l(E[A], 2), _ = R[0], k = R[1];
                  if ("index" === _) {
                    return;
                  }
                  b += " data-".concat(_, "=\"").concat(k, "\"")
                }
              }
              if (x.checkbox || x.radio) {
                u = x.checkbox ? "checkbox" : u, u = x.radio ? "radio" : u;
                var v = x["class"] || "",
                    c = (!0 === p || d || p && p.checked) && !1 !== p,
                    N = !x.checkboxEnabled || p && p.disabled;
                r = [o.options.cardView ? "<div class=\"card-view ".concat(v,
                    "\">") : "<td class=\"bs-checkbox ".concat(v, "\"").concat(
                    f).concat(m, ">"),
                  "<label><input  data-index=\"".concat(
                      t, "\"name=\"").concat(
                      o.options.selectItemName,
                      "\"          type=\"").concat(u,
                      "\"").concat(
                      yi.sprintf("value=\"%s\"", e[o.options.idField]),
                      "\n            ").concat(
                      yi.sprintf("checked=\"%s\"", c ? "checked" : void 0),
                      "\n            ").concat(
                      yi.sprintf("disabled=\"%s\"", N ? "disabled" : void 0),
                      " />\n            <span></span>\n            </label>"),
                  o.header.formatters[i] && "string" == typeof p ? p : "",
                  o.options.cardView ? "</div>" : "</td>"].join(
                    ""), e[o.header.stateField] = !0 === p || !!d || p
                    && p.checked
              } else if (p = "undefined" == typeof p || null === p
                  ? o.options.undefinedText : p, o.options.cardView) {
                var F = o.options.showHeader
                    ? "<span class=\"card-view-title\"".concat(m, ">").concat(
                        yi.getFieldTitle(o.columns, a), "</span>") : "";
                r = "<div class=\"card-view\">".concat(F,
                    "<span class=\"card-view-value\">").concat(p,
                    "</span></div>"), o.options.smartDisplay && "" === p
                && (r = "<div class=\"card-view\"></div>")
              } else {
                r = "<td".concat(g).concat(f).concat(m).concat(b).concat(
                    y).concat(w).concat(S, ">").concat(p, "</td>");
              }
              n.push(r)
            }
          }), this.options.cardView && n.push("</div></td>"), n.push(
              "</tr>"), n.join("")
        }
      }
    }, {
      key: "initBody", value: function (e) {
        var o = this, a = this.getData();
        this.trigger("pre-body", a), this.$body = this.$el.find(
            ">tbody"), this.$body.length || (this.$body = t(
            "<tbody></tbody>").appendTo(this.$el)), this.options.pagination
        && "server" !== this.options.sidePagination
        || (this.pageFrom = 1, this.pageTo = a.length);
        for (var n = [], s = t(document.createDocumentFragment()), l = !1,
            r = this.pageFrom - 1; r < this.pageTo; r++) {
          var c = a[r], d = this.initRow(c, r, a, s);
          l = l || !!d, d && "string" == typeof d && (this.options.virtualScroll
              ? n.push(d) : s.append(d))
        }
        l ? this.options.virtualScroll ? (this.virtualScroll
        && this.virtualScroll.destroy(), this.virtualScroll = new Si({
          rows: n,
          scrollEl: this.$tableBody[0],
          contentEl: this.$body[0],
          itemHeight: this.options.virtualScrollItemHeight,
          callback: function () {
            o.fitHeader()
          }
        })) : this.$body.html(s) : this.$body.html(
            "<tr class=\"no-records-found\">".concat(
                yi.sprintf("<td colspan=\"%s\">%s</td>",
                    this.$header.find("th").length,
                    this.options.formatNoMatches()), "</tr>")), e
        || this.scrollTo(0), this.$body.find("> tr[data-index] > td").off(
            "click dblclick").on("click dblclick", function (a) {
          var e = t(a.currentTarget), n = e.parent(),
              i = t(a.target).parents(".card-views").children(),
              s = t(a.target).parents(".card-view"), l = n.data("index"),
              r = o.data[l],
              c = o.options.cardView ? i.index(s) : e[0].cellIndex,
              d = o.getVisibleFields(),
              p = d[o.options.detailView && o.detailViewIcon
              && !o.options.cardView ? c - 1 : c],
              u = o.columns[o.fieldsColumnsIndex[p]],
              h = yi.getItemField(r, p, o.options.escape);
          if (!e.find(".detail-icon").length) {
            if (o.trigger("click" === a.type ? "click-cell" : "dbl-click-cell",
                p, h, r, e), o.trigger(
                "click" === a.type ? "click-row" : "dbl-click-row", r, n,
                p), "click" === a.type && o.options.clickToSelect
            && u.clickToSelect && !yi.calculateObjectValue(o.options,
                o.options.ignoreClickToSelectOn, [a.target])) {
              var g = n.find(
                  yi.sprintf("[name=\"%s\"]", o.options.selectItemName));
              g.length && g[0].click()
            }
            "click" === a.type && o.options.detailViewByClick
            && o.toggleDetailView(l,
                o.header.detailFormatters[o.fieldsColumnsIndex[p]])
          }
        }).off("mousedown").on("mousedown", function (t) {
          o.multipleSelectRowCtrlKey = t.ctrlKey
              || t.metaKey, o.multipleSelectRowShiftKey = t.shiftKey
        }), this.$body.find("> tr[data-index] > td > .detail-icon").off(
            "click").on("click", function (a) {
          return a.preventDefault(), o.toggleDetailView(
              t(a.currentTarget).parent().parent().data("index")), !1
        }), this.$selectItem = this.$body.find(yi.sprintf("[name=\"%s\"]",
            this.options.selectItemName)), this.$selectItem.off("click").on(
            "click", function (a) {
              a.stopImmediatePropagation();
              var e = t(a.currentTarget);
              o._toggleCheck(e.prop("checked"), e.data("index"))
            }), this.header.events.forEach(function (e, a) {
          var n = e;
          if (n) {
            "string" == typeof n && (n = yi.calculateObjectValue(null, n));
            var i = o.header.fields[a], s = o.getVisibleFields().indexOf(i);
            if (-1 !== s) {
              o.options.detailView && !o.options.cardView && (s += 1);
              var l = function (e) {
                if (!n.hasOwnProperty(e)) {
                  return "continue";
                }
                var a = n[e];
                o.$body.find(">tr:not(.no-records-found)").each(
                    function (n, l) {
                      var r = t(l), c = r.find(
                          o.options.cardView ? ".card-view" : "td").eq(s),
                          d = e.indexOf(" "), p = e.substring(0, d),
                          u = e.substring(d + 1);
                      c.find(u).off(p).on(p, function (t) {
                        var e = r.data("index"), n = o.data[e], s = n[i];
                        a.apply(o, [t, s, n, e])
                      })
                    })
              };
              for (var r in n) {
                var c = l(r)
              }
            }
          }
        }), this.updateSelected(), this.initFooter(), this.resetView(), "server"
        !== this.options.sidePagination
        && (this.options.totalRows = a.length), this.trigger("post-body", a)
      }
    }, {
      key: "initServer", value: function (e, o, a) {
        var n = this, i = {},
            s = this.header.fields.indexOf(this.options.sortName), l = {
              searchText: this.searchText,
              sortName: this.options.sortName,
              sortOrder: this.options.sortOrder
            };
        if ((this.header.sortNames[s]
        && (l.sortName = this.header.sortNames[s]), this.options.pagination
        && "server" === this.options.sidePagination
        && (l.pageSize = this.options.pageSize === this.options.formatAllRows()
            ? this.options.totalRows
            : this.options.pageSize, l.pageNumber = this.options.pageNumber), a
        || this.options.url || this.options.ajax) && ("limit"
        === this.options.queryParamsType && (l = {
          search: l.searchText,
          sort: l.sortName,
          order: l.sortOrder
        }, this.options.pagination && "server" === this.options.sidePagination
        && (l.offset = this.options.pageSize === this.options.formatAllRows()
            ? 0 : this.options.pageSize * (this.options.pageNumber
            - 1), l.limit = this.options.pageSize
        === this.options.formatAllRows() ? this.options.totalRows
            : this.options.pageSize, 0 === l.limit
        && delete l.limit)), yi.isEmptyObject(this.filterColumnsPartial)
        || (l.filter = JSON.stringify(this.filterColumnsPartial,
            null)), i = yi.calculateObjectValue(this.options,
            this.options.queryParams, [l], i), t.extend(i, o || {}), !1
        !== i)) {
          e || this.showLoading();
          var r = t.extend({},
              yi.calculateObjectValue(null, this.options.ajaxOptions), {
                type: this.options.method,
                url: a || this.options.url,
                data: "application/json" === this.options.contentType && "post"
                === this.options.method ? JSON.stringify(i) : i,
                cache: this.options.cache,
                contentType: this.options.contentType,
                dataType: this.options.dataType,
                success: function (t) {
                  var o = yi.calculateObjectValue(n.options,
                      n.options.responseHandler, [t], t);
                  n.load(o), n.trigger("load-success", o), e || n.hideLoading()
                },
                error: function (t) {
                  var o = [];
                  "server" === n.options.sidePagination
                  && (o = {}, o[n.options.totalField] = 0, o[n.options.dataField] = []), n.load(
                      o), n.trigger("load-error", t.status, t), e
                  || n.$tableLoading.hide()
                }
              });
          return this.options.ajax ? yi.calculateObjectValue(this,
              this.options.ajax, [r], null) : (this._xhr && 4
          !== this._xhr.readyState && this._xhr.abort(), this._xhr = t.ajax(
              r)), i
        }
      }
    }, {
      key: "initSearchText", value: function () {
        if (this.options.search && (this.searchText = "", ""
        !== this.options.searchText)) {
          var e = this.$toolbar.find(".search input");
          e.val(this.options.searchText), this.onSearch(
              {currentTarget: e, firedByInitSearchText: !0})
        }
      }
    }, {
      key: "getCaret", value: function () {
        var e = this;
        this.$header.find("th").each(function (o, a) {
          t(a).find(".sortable").removeClass("desc asc").addClass(
              t(a).data("field") === e.options.sortName ? e.options.sortOrder
                  : "both")
        })
      }
    }, {
      key: "updateSelected", value: function () {
        var e = this.$selectItem.filter(":enabled").length
            && this.$selectItem.filter(":enabled").length
            === this.$selectItem.filter(":enabled").filter(":checked").length;
        this.$selectAll.add(this.$selectAll_).prop("checked",
            e), this.$selectItem.each(function (e, o) {
          t(o).closest("tr")[t(o).prop("checked") ? "addClass" : "removeClass"](
              "selected")
        })
      }
    }, {
      key: "updateRows", value: function () {
        var e = this;
        this.$selectItem.each(function (o, a) {
          e.data[t(a).data("index")][e.header.stateField] = t(a).prop("checked")
        })
      }
    }, {
      key: "resetRows", value: function () {
        var e = !0, t = !1, o = void 0;
        try {
          for (var a, n, i = this.data[Symbol.iterator]();
              !(e = (a = i.next()).done);
              e = !0) {
            n = a.value, this.$selectAll.prop("checked",
                !1), this.$selectItem.prop("checked",
                !1), this.header.stateField
            && (n[this.header.stateField] = !1)
          }
        } catch (e) {
          t = !0, o = e
        } finally {
          try {
            e || null == i.return || i.return()
          } finally {
            if (t) {
              throw o
            }
          }
        }
        this.initHiddenRows()
      }
    }, {
      key: "trigger", value: function (o) {
        for (var a, n = "".concat(o, ".bs.table"), i = arguments.length,
            s = Array(1 < i ? i - 1 : 0), l = 1; l < i; l++) {
          s[l
          - 1] = arguments[l];
        }
        (a = this.options)[e.EVENTS[n]].apply(a, s), this.$el.trigger(
            t.Event(n), s), this.options.onAll(n, s), this.$el.trigger(
            t.Event("all.bs.table"), [n, s])
      }
    }, {
      key: "resetHeader", value: function () {
        var e = this;
        clearTimeout(this.timeoutId_), this.timeoutId_ = setTimeout(
            function () {
              return e.fitHeader()
            }, this.$el.is(":hidden") ? 100 : 0)
      }
    }, {
      key: "fitHeader", value: function () {
        var e = this;
        if (this.$el.is(":hidden")) {
          return void (this.timeoutId_ = setTimeout(
              function () {
                return e.fitHeader()
              }, 100));
        }
        var o = this.$tableBody.get(0),
            a = o.scrollWidth > o.clientWidth && o.scrollHeight > o.clientHeight
            + this.$header.outerHeight() ? yi.getScrollBarWidth() : 0;
        this.$el.css("margin-top", -this.$header.outerHeight());
        var n = t(":focus");
        if (0 < n.length) {
          var i = n.parents("th");
          if (0 < i.length) {
            var s = i.attr("data-field");
            if (void 0 !== s) {
              var l = this.$header.find("[data-field='".concat(s, "']"));
              0 < l.length && l.find(":input").addClass("focus-temp")
            }
          }
        }
        this.$header_ = this.$header.clone(!0,
            !0), this.$selectAll_ = this.$header_.find(
            "[name=\"btSelectAll\"]"), this.$tableHeader.css("margin-right",
            a).find("table").css("width", this.$el.outerWidth()).html("").attr(
            "class", this.$el.attr("class")).append(
            this.$header_), this.$tableLoading.css("width",
            this.$el.outerWidth());
        var r = t(".focus-temp:visible:eq(0)");
        0 < r.length && (r.focus(), this.$header.find(
            ".focus-temp").removeClass("focus-temp")), this.$header.find(
            "th[data-field]").each(function (o, a) {
          e.$header_.find(
              yi.sprintf("th[data-field=\"%s\"]", t(a).data("field"))).data(
              t(a).data())
        });
        for (var c = this.getVisibleFields(), d = this.$header_.find("th"),
            p = this.$body.find(
                ">tr:not(.no-records-found,.virtual-scroll-top)").eq(0);
            p.length && p.find(
                ">td[colspan]:not([colspan=\"1\"])").length;) {
          p = p.next();
        }
        p.find("> *").each(function (o, a) {
          var n = t(a), i = o;
          if (e.options.detailView && e.options.detailViewIcon
              && !e.options.cardView) {
            if (0 === o) {
              var s = d.filter(".detail"),
                  l = s.width() - s.find(".fht-cell").width();
              s.find(".fht-cell").width(n.innerWidth() - l)
            }
            i = o - 1
          }
          if (-1 !== i) {
            var r = e.$header_.find(yi.sprintf("th[data-field=\"%s\"]", c[i]));
            1 < r.length && (r = t(d[n[0].cellIndex]));
            var p = r.width() - r.find(".fht-cell").width();
            r.find(".fht-cell").width(n.innerWidth() - p)
          }
        }), this.horizontalScroll(), this.trigger("post-header")
      }
    }, {
      key: "initFooter", value: function () {
        if (this.options.showFooter && !this.options.cardView) {
          var e = this.getData(), t = [];
          !this.options.cardView && this.options.detailView
          && this.options.detailViewIcon && t.push(
              "<th class=\"detail\"><div class=\"th-inner\"></div><div class=\"fht-cell\"></div></th>");
          var o = !0, a = !1, n = void 0;
          try {
            for (var i, s = this.columns[Symbol.iterator]();
                !(o = (i = s.next()).done); o = !0) {
              var r = i.value, c = "", d = "", p = [], u = {},
                  h = yi.sprintf(" class=\"%s\"", r["class"]);
              if (r.visible) {
                if (this.options.cardView && !r.cardVisible) {
                  return;
                }
                if (c = yi.sprintf("text-align: %s; ",
                    r.falign ? r.falign : r.align), d = yi.sprintf(
                    "vertical-align: %s; ",
                    r.valign), u = yi.calculateObjectValue(null,
                    this.options.footerStyle, [r]), u && u.css) {
                  for (var g = 0,
                      f = Object.entries(u.css); g < f.length; g++) {
                    var m = l(f[g], 2), b = m[0], y = m[1];
                    p.push("".concat(b, ": ").concat(y))
                  }
                }
                u && u.classes && (h = yi.sprintf(" class=\"%s\"",
                    r["class"] ? [r["class"], u.classes].join(" ")
                        : u.classes)), t.push("<th", h,
                    yi.sprintf(" style=\"%s\"", c + d + p.concat().join("; ")),
                    ">"), t.push("<div class=\"th-inner\">"), t.push(
                    yi.calculateObjectValue(r, r.footerFormatter, [e],
                        this.footerData[0] && this.footerData[0][r.field]
                        || "")), t.push("</div>"), t.push(
                    "<div class=\"fht-cell\"></div>"), t.push("</div>"), t.push(
                    "</th>")
              }
            }
          } catch (e) {
            a = !0, n = e
          } finally {
            try {
              o || null == s.return || s.return()
            } finally {
              if (a) {
                throw n
              }
            }
          }
          this.$tableFooter.find("tr").html(t.join("")), this.trigger(
              "post-footer", this.$tableFooter)
        }
      }
    }, {
      key: "fitFooter", value: function () {
        var e = this;
        if (this.$el.is(":hidden")) {
          return void setTimeout(function () {
            return e.fitFooter()
          }, 100);
        }
        var o = this.$tableBody.get(0),
            a = o.scrollWidth > o.clientWidth && o.scrollHeight > o.clientHeight
            + this.$header.outerHeight() ? yi.getScrollBarWidth() : 0;
        this.$tableFooter.css("margin-right", a).find("table").css("width",
            this.$el.outerWidth()).attr("class", this.$el.attr("class"));
        for (var n = this.getVisibleFields(), s = this.$tableFooter.find("th"),
            l = this.$body.find(">tr:first-child:not(.no-records-found)");
            l.length && l.find(
                ">td[colspan]:not([colspan=\"1\"])").length;) {
          l = l.next();
        }
        l.find("> *").each(function (o, a) {
          var n = t(a), i = o;
          if (e.options.detailView && !e.options.cardView) {
            if (0 === o) {
              var l = s.filter(".detail"),
                  r = l.width() - l.find(".fht-cell").width();
              l.find(".fht-cell").width(n.innerWidth() - r)
            }
            i = o - 1
          }
          if (-1 !== i) {
            var c = s.eq(o), d = c.width() - c.find(".fht-cell").width();
            c.find(".fht-cell").width(n.innerWidth() - d)
          }
        }), this.horizontalScroll()
      }
    }, {
      key: "horizontalScroll", value: function () {
        var e = this;
        this.trigger("scroll-body"), this.$tableBody.off("scroll").on("scroll",
            function (o) {
              var a = o.currentTarget;
              e.options.showHeader && e.options.height
              && e.$tableHeader.scrollLeft(
                  t(a).scrollLeft()), e.options.showFooter
              && !e.options.cardView && e.$tableFooter.scrollLeft(
                  t(a).scrollLeft())
            })
      }
    }, {
      key: "getVisibleFields", value: function () {
        var e = [], t = !0, o = !1, a = void 0;
        try {
          for (var n, i = this.header.fields[Symbol.iterator]();
              !(t = (n = i.next()).done); t = !0) {
            var s = n.value, l = this.columns[this.fieldsColumnsIndex[s]];
            l && l.visible && e.push(s)
          }
        } catch (e) {
          o = !0, a = e
        } finally {
          try {
            t || null == i.return || i.return()
          } finally {
            if (o) {
              throw a
            }
          }
        }
        return e
      }
    }, {
      key: "initHiddenRows", value: function () {
        this.hiddenRows = []
      }
    }, {
      key: "getOptions", value: function () {
        var e = t.extend({}, this.options);
        return delete e.data, t.extend(!0, {}, e)
      }
    }, {
      key: "refreshOptions", value: function (e) {
        yi.compareObjects(this.options, e, !0) || (this.options = t.extend(
            this.options, e), this.trigger("refresh-options",
            this.options), this.destroy(), this.init())
      }
    }, {
      key: "getData", value: function (e) {
        var t = this.options.data;
        if ((this.searchText || this.options.sortName || !yi.isEmptyObject(
            this.filterColumns) || !yi.isEmptyObject(this.filterColumnsPartial))
        && (t = this.data), e && e.useCurrentPage && (t = t.slice(
            this.pageFrom - 1, this.pageTo)), e && !e.includeHiddenRows) {
          var o = this.getHiddenRows();
          t = t.filter(function (e) {
            return -1 === yi.findIndex(o, e)
          })
        }
        return t
      }
    }, {
      key: "getSelections", value: function () {
        var e = this;
        return this.data.filter(function (t) {
          return !0 === t[e.header.stateField]
        })
      }
    }, {
      key: "getAllSelections", value: function () {
        var e = this;
        return this.options.data.filter(function (t) {
          return !0 === t[e.header.stateField]
        })
      }
    }, {
      key: "load", value: function (e) {
        var t = !1, o = e;
        this.options.pagination && "server" === this.options.sidePagination
        && (this.options.totalRows = o[this.options.totalField]), this.options.pagination
        && "server" === this.options.sidePagination
        && (this.options.totalNotFiltered = o[this.options.totalNotFilteredField]), t = o.fixedScroll, o = Array.isArray(
            o) ? o : o[this.options.dataField], this.initData(
            o), this.initSearch(), this.initPagination(), this.initBody(t)
      }
    }, {
      key: "append", value: function (e) {
        this.initData(e,
            "append"), this.initSearch(), this.initPagination(), this.initSort(), this.initBody(
            !0)
      }
    }, {
      key: "prepend", value: function (e) {
        this.initData(e,
            "prepend"), this.initSearch(), this.initPagination(), this.initSort(), this.initBody(
            !0)
      }
    }, {
      key: "remove", value: function (e) {
        var t, o, a = this.options.data.length;
        if (e.hasOwnProperty("field") && e.hasOwnProperty("values")) {
          for (t = a - 1; 0 <= t;
              t--) {
            (o = this.options.data[t], !!o.hasOwnProperty(e.field))
            && e.values.includes(o[e.field]) && (this.options.data.splice(t,
                1), "server" === this.options.sidePagination
            && (this.options.totalRows -= 1));
          }
          a === this.options.data.length
          || (this.initSearch(), this.initPagination(), this.initSort(), this.initBody(
              !0))
        }
      }
    }, {
      key: "removeAll", value: function () {
        0 < this.options.data.length && (this.options.data.splice(0,
            this.options.data.length), this.initSearch(), this.initPagination(), this.initBody(
            !0))
      }
    }, {
      key: "insertRow", value: function (e) {
        e.hasOwnProperty("index") && e.hasOwnProperty("row")
        && (this.options.data.splice(e.index, 0,
            e.row), this.initSearch(), this.initPagination(), this.initSort(), this.initBody(
            !0))
      }
    }, {
      key: "updateRow", value: function (e) {
        var o = Array.isArray(e) ? e : [e], a = !0, n = !1, i = void 0;
        try {
          for (var s, l, r = o[Symbol.iterator](); !(a = (s = r.next()).done);
              a = !0) {
            (l = s.value, l.hasOwnProperty("index")
            && l.hasOwnProperty("row")) && (t.extend(this.options.data[l.index],
                l.row), l.hasOwnProperty("replace") && l.replace
                ? this.options.data[l.index] = l.row : t.extend(
                    this.options.data[l.index], l.row))
          }
        } catch (e) {
          n = !0, i = e
        } finally {
          try {
            a || null == r.return || r.return()
          } finally {
            if (n) {
              throw i
            }
          }
        }
        this.initSearch(), this.initPagination(), this.initSort(), this.initBody(
            !0)
      }
    }, {
      key: "getRowByUniqueId", value: function (e) {
        var t, o, a, n = this.options.uniqueId, s = this.options.data.length,
            l = e, r = null;
        for (t = s - 1; 0 <= t; t--) {
          if (o = this.options.data[t], o.hasOwnProperty(
              n)) {
            a = o[n];
          } else if (o._data && o._data.hasOwnProperty(
              n)) {
            a = o._data[n];
          } else {
            continue;
          }
          if ("string" == typeof a ? l = l.toString() : "number" == typeof a
              && (+a === a && 0 == a % 1 ? l = parseInt(l) : a === +a && 0 !== a
                  && (l = parseFloat(l))), a === l) {
            r = o;
            break
          }
        }
        return r
      }
    }, {
      key: "updateByUniqueId", value: function (e) {
        var o = Array.isArray(e) ? e : [e], a = !0, n = !1, i = void 0;
        try {
          for (var s, l, r = o[Symbol.iterator](); !(a = (s = r.next()).done);
              a = !0) {
            if (l = s.value, l.hasOwnProperty("id")
            && l.hasOwnProperty("row")) {
              var c = this.options.data.indexOf(this.getRowByUniqueId(l.id));
              -1 !== c && (l.hasOwnProperty("replace") && l.replace
                  ? this.options.data[c] = l.row : t.extend(
                      this.options.data[c],
                      l.row))
            }
          }
        } catch (e) {
          n = !0, i = e
        } finally {
          try {
            a || null == r.return || r.return()
          } finally {
            if (n) {
              throw i
            }
          }
        }
        this.initSearch(), this.initPagination(), this.initSort(), this.initBody(
            !0)
      }
    }, {
      key: "removeByUniqueId", value: function (e) {
        var t = this.options.data.length, o = this.getRowByUniqueId(e);
        o && this.options.data.splice(this.options.data.indexOf(o), 1), t
        === this.options.data.length
        || (this.initSearch(), this.initPagination(), this.initBody(!0))
      }
    }, {
      key: "updateCell", value: function (e) {
        e.hasOwnProperty("index") && e.hasOwnProperty("field")
        && e.hasOwnProperty("value")
        && (this.data[e.index][e.field] = e.value, !1 === e.reinit
        || (this.initSort(), this.initBody(!0)))
      }
    }, {
      key: "updateCellByUniqueId", value: function (e) {
        var t = this;
        if (e.hasOwnProperty("id") && e.hasOwnProperty("field")
            && e.hasOwnProperty("value")) {
          var o = Array.isArray(e) ? e : [e];
          o.forEach(function (e) {
            var o = e.id, a = e.field, n = e.value,
                i = t.options.data.indexOf(t.getRowByUniqueId(o));
            -1 === i || (t.options.data[i][a] = n)
          }), !1 === e.reinit || (this.initSort(), this.initBody(!0))
        }
      }
    }, {
      key: "showRow", value: function (e) {
        this._toggleRow(e, !0)
      }
    }, {
      key: "hideRow", value: function (e) {
        this._toggleRow(e, !1)
      }
    }, {
      key: "_toggleRow", value: function (e, t) {
        var o;
        if (e.hasOwnProperty("index") ? o = this.getData()[e.index]
            : e.hasOwnProperty("uniqueId") && (o = this.getRowByUniqueId(
            e.uniqueId)), !!o) {
          var a = yi.findIndex(this.hiddenRows, o);
          t || -1 !== a ? t && -1 < a && this.hiddenRows.splice(a, 1)
              : this.hiddenRows.push(o), t ? this.updatePagination()
              : (this.initBody(!0), this.initPagination())
        }
      }
    }, {
      key: "getHiddenRows", value: function (e) {
        if (e) {
          return this.initHiddenRows(), void this.initBody(!0);
        }
        var t = this.getData(), o = [], a = !0, n = !1, i = void 0;
        try {
          for (var s, l, r = t[Symbol.iterator](); !(a = (s = r.next()).done);
              a = !0) {
            l = s.value, this.hiddenRows.includes(l) && o.push(l)
          }
        } catch (e) {
          n = !0, i = e
        } finally {
          try {
            a || null == r.return || r.return()
          } finally {
            if (n) {
              throw i
            }
          }
        }
        return this.hiddenRows = o, o
      }
    }, {
      key: "showColumn", value: function (e) {
        var t = this, o = Array.isArray(e) ? e : [e];
        o.forEach(function (e) {
          t._toggleColumn(t.fieldsColumnsIndex[e], !0, !0)
        })
      }
    }, {
      key: "hideColumn", value: function (e) {
        var t = this, o = Array.isArray(e) ? e : [e];
        o.forEach(function (e) {
          t._toggleColumn(t.fieldsColumnsIndex[e], !1, !0)
        })
      }
    }, {
      key: "_toggleColumn", value: function (e, t, o) {
        if (-1 !== e && this.columns[e].visible !== t
            && (this.columns[e].visible = t, this.initHeader(), this.initSearch(), this.initPagination(), this.initBody(), this.options.showColumns)) {
          var a = this.$toolbar.find(".keep-open input").prop("disabled", !1);
          o && a.filter(yi.sprintf("[value=\"%s\"]", e)).prop("checked",
              t), a.filter(":checked").length
          <= this.options.minimumCountColumns && a.filter(":checked").prop(
              "disabled", !0)
        }
      }
    }, {
      key: "getVisibleColumns", value: function () {
        return this.columns.filter(function (e) {
          var t = e.visible;
          return t
        })
      }
    }, {
      key: "getHiddenColumns", value: function () {
        return this.columns.filter(function (e) {
          var t = e.visible;
          return !t
        })
      }
    }, {
      key: "showAllColumns", value: function () {
        this._toggleAllColumns(!0)
      }
    }, {
      key: "hideAllColumns", value: function () {
        this._toggleAllColumns(!1)
      }
    }, {
      key: "_toggleAllColumns", value: function (e) {
        var o = this, a = !0, n = !1, i = void 0;
        try {
          for (var s, l, r = this.columns.slice().reverse()[Symbol.iterator]();
              !(a = (s = r.next()).done);
              a = !0) {
            if (l = s.value, l.switchable) {
              if (!e && this.options.showColumns
                  && this.getVisibleColumns().length
                  === this.options.minimumCountColumns) {
                continue;
              }
              l.visible = e
            }
          }
        } catch (e) {
          n = !0, i = e
        } finally {
          try {
            a || null == r.return || r.return()
          } finally {
            if (n) {
              throw i
            }
          }
        }
        if (this.initHeader(), this.initSearch(), this.initPagination(), this.initBody(), this.options.showColumns) {
          var c = this.$toolbar.find(
              ".keep-open input:not(\".toggle-all\")").prop("disabled", !1);
          e ? c.prop("checked", e) : c.get().reverse().forEach(function (a) {
            c.filter(":checked").length > o.options.minimumCountColumns && t(
                a).prop("checked", e)
          }), c.filter(":checked").length <= this.options.minimumCountColumns
          && c.filter(":checked").prop("disabled", !0)
        }
      }
    }, {
      key: "mergeCells", value: function (e) {
        var t, o, a = e.index, n = this.getVisibleFields().indexOf(e.field),
            s = e.rowspan || 1, l = e.colspan || 1, r = this.$body.find(">tr");
        this.options.detailView && !this.options.cardView && (n += 1);
        var c = r.eq(a).find(">td").eq(n);
        if (!(0 > a || 0 > n || a >= this.data.length)) {
          for (t = a; t < a + s; t++) {
            for (o = n; o < n + l; o++) {
              r.eq(t).find(
                  ">td").eq(o).hide();
            }
          }
          c.attr("rowspan", s).attr("colspan", l).show()
        }
      }
    }, {
      key: "checkAll", value: function () {
        this._toggleCheckAll(!0)
      }
    }, {
      key: "uncheckAll", value: function () {
        this._toggleCheckAll(!1)
      }
    }, {
      key: "_toggleCheckAll", value: function (e) {
        var t = this.getSelections();
        this.$selectAll.add(this.$selectAll_).prop("checked",
            e), this.$selectItem.filter(":enabled").prop("checked",
            e), this.updateRows();
        var o = this.getSelections();
        return e ? void this.trigger("check-all", o, t) : void this.trigger(
            "uncheck-all", o, t)
      }
    }, {
      key: "checkInvert", value: function () {
        var e = this.$selectItem.filter(":enabled"), o = e.filter(":checked");
        e.each(function (e, o) {
          t(o).prop("checked", !t(o).prop("checked"))
        }), this.updateRows(), this.updateSelected(), this.trigger(
            "uncheck-some", o), o = this.getSelections(), this.trigger(
            "check-some", o)
      }
    }, {
      key: "check", value: function (e) {
        this._toggleCheck(!0, e)
      }
    }, {
      key: "uncheck", value: function (e) {
        this._toggleCheck(!1, e)
      }
    }, {
      key: "_toggleCheck", value: function (e, t) {
        var o = this.$selectItem.filter("[data-index=\"".concat(t, "\"]")),
            a = this.data[t];
        if (o.is(":radio") || this.options.singleSelect
            || this.options.multipleSelectRow && !this.multipleSelectRowCtrlKey
            && !this.multipleSelectRowShiftKey) {
          var n = !0, s = !1, l = void 0;
          try {
            for (var c, d, p = this.options.data[Symbol.iterator]();
                !(n = (c = p.next()).done);
                n = !0) {
              d = c.value, d[this.header.stateField] = !1
            }
          } catch (e) {
            s = !0, l = e
          } finally {
            try {
              n || null == p.return || p.return()
            } finally {
              if (s) {
                throw l
              }
            }
          }
          this.$selectItem.filter(":checked").not(o).prop("checked", !1)
        }
        if (a[this.header.stateField] = e, this.options.multipleSelectRow) {
          if (this.multipleSelectRowShiftKey && 0
              <= this.multipleSelectRowLastSelectedIndex) {
            for (var u = [this.multipleSelectRowLastSelectedIndex,
              t].sort(), h = u[0] + 1; h < u[1];
                h++) {
              this.data[h][this.header.stateField] = !0, this.$selectItem.filter(
                  "[data-index=\"".concat(h, "\"]")).prop("checked", !0);
            }
          }
          this.multipleSelectRowCtrlKey = !1, this.multipleSelectRowShiftKey = !1, this.multipleSelectRowLastSelectedIndex = e
              ? t : -1
        }
        o.prop("checked", e), this.updateSelected(), this.trigger(
            e ? "check" : "uncheck", this.data[t], o)
      }
    }, {
      key: "checkBy", value: function (e) {
        this._toggleCheckBy(!0, e)
      }
    }, {
      key: "uncheckBy", value: function (e) {
        this._toggleCheckBy(!1, e)
      }
    }, {
      key: "_toggleCheckBy", value: function (e, t) {
        var o = this;
        if (t.hasOwnProperty("field") && t.hasOwnProperty("values")) {
          var a = [];
          this.data.forEach(function (n, s) {
            if (!n.hasOwnProperty(t.field)) {
              return !1;
            }
            if (t.values.includes(n[t.field])) {
              var i = o.$selectItem.filter(":enabled").filter(
                  yi.sprintf("[data-index=\"%s\"]", s)).prop("checked", e);
              n[o.header.stateField] = e, a.push(n), o.trigger(
                  e ? "check" : "uncheck", n, i)
            }
          }), this.updateSelected(), this.trigger(
              e ? "check-some" : "uncheck-some", a)
        }
      }
    }, {
      key: "refresh", value: function (e) {
        e && e.url && (this.options.url = e.url), e && e.pageNumber
        && (this.options.pageNumber = e.pageNumber), e && e.pageSize
        && (this.options.pageSize = e.pageSize), this.trigger("refresh",
            this.initServer(e && e.silent, e && e.query, e && e.url))
      }
    }, {
      key: "destroy", value: function () {
        this.$el.insertBefore(this.$container), t(
            this.options.toolbar).insertBefore(
            this.$el), this.$container.next().remove(), this.$container.remove(), this.$el.html(
            this.$el_.html()).css("margin-top", "0").attr("class",
            this.$el_.attr("class") || "")
      }
    }, {
      key: "resetView", value: function (e) {
        var t = 0;
        if (e && e.height
        && (this.options.height = e.height), this.$selectAll.prop("checked",
            0 < this.$selectItem.length && this.$selectItem.length
            === this.$selectItem.filter(
            ":checked").length), this.$tableContainer.toggleClass(
            "has-card-view", this.options.cardView), !this.options.cardView
        && this.options.showHeader && this.options.height
            ? (this.$tableHeader.show(), this.resetHeader(), t += this.$header.outerHeight(
                !0)) : (this.$tableHeader.hide(), this.trigger(
                "post-header")), !this.options.cardView
        && this.options.showFooter
        && (this.$tableFooter.show(), this.fitFooter(), this.options.height
        && (t += this.$tableFooter.outerHeight(!0))), this.options.height) {
          var o = this.$toolbar.outerHeight(!0),
              a = this.$pagination.outerHeight(!0),
              n = this.options.height - o - a,
              i = this.$tableBody.find("table").outerHeight(!0);
          this.$tableContainer.css("height",
              "".concat(n, "px")), this.$tableBorder && this.$tableBorder.css(
              "height", "".concat(n - i - t - 1, "px"))
        }
        this.options.cardView ? (this.$el.css("margin-top",
            "0"), this.$tableContainer.css("padding-bottom",
            "0"), this.$tableFooter.hide())
            : (this.getCaret(), this.$tableContainer.css("padding-bottom",
            "".concat(t, "px"))), this.trigger("reset-view")
      }
    }, {
      key: "resetWidth", value: function () {
        this.options.showHeader && this.options.height
        && this.fitHeader(), this.options.showFooter && !this.options.cardView
        && this.fitFooter()
      }
    }, {
      key: "showLoading", value: function () {
        this.$tableLoading.css("display", "flex")
      }
    }, {
      key: "hideLoading", value: function () {
        this.$tableLoading.css("display", "none")
      }
    }, {
      key: "togglePagination", value: function () {
        this.options.pagination = !this.options.pagination;
        var e = this.options.showButtonIcons ? this.options.pagination
            ? this.options.icons.paginationSwitchDown
            : this.options.icons.paginationSwitchUp : "",
            t = this.options.showButtonText ? this.options.pagination
                ? this.options.formatPaginationSwitchUp()
                : this.options.formatPaginationSwitchDown() : "";
        this.$toolbar.find("button[name=\"paginationSwitch\"]").html(
            yi.sprintf(this.constants.html.icon, this.options.iconsPrefix, e)
            + " " + t), this.updatePagination()
      }
    }, {
      key: "toggleFullscreen", value: function () {
        this.$el.closest(".bootstrap-table").toggleClass(
            "fullscreen"), this.resetView()
      }
    }, {
      key: "toggleView", value: function () {
        this.options.cardView = !this.options.cardView, this.initHeader();
        var e = this.options.showButtonIcons ? this.options.cardView
            ? this.options.icons.toggleOn : this.options.icons.toggleOff : "",
            t = this.options.showButtonText ? this.options.cardView
                ? this.options.formatToggleOff() : this.options.formatToggleOn()
                : "";
        this.$toolbar.find("button[name=\"toggle\"]").html(
            yi.sprintf(this.constants.html.icon, this.options.iconsPrefix, e)
            + " " + t), this.initBody(), this.trigger("toggle",
            this.options.cardView)
      }
    }, {
      key: "resetSearch", value: function (e) {
        var t = this.$toolbar.find(".search input");
        t.val(e || ""), this.onSearch({currentTarget: t})
      }
    }, {
      key: "filterBy", value: function (e, o) {
        this.filterOptions = yi.isEmptyObject(o) ? this.options.filterOptions
            : t.extend(this.options.filterOptions,
                o), this.filterColumns = yi.isEmptyObject(e) ? {}
            : e, this.options.pageNumber = 1, this.initSearch(), this.updatePagination()
      }
    }, {
      key: "scrollTo", value: function e(o) {
        if ("undefined" == typeof o) {
          return this.$tableBody.scrollTop();
        }
        var n = {unit: "px", value: 0};
        "object" === a(o) ? n = Object.assign(n, o) : "string" == typeof o
        && "bottom" === o ? n.value = this.$tableBody[0].scrollHeight : "string"
            == typeof o && (n.value = o);
        var e = n.value;
        "rows" === n.unit && (e = 0, this.$body.find(
            "> tr:lt(".concat(n.value, ")")).each(function (o, a) {
          e += t(a).outerHeight(!0)
        })), this.$tableBody.scrollTop(e)
      }
    }, {
      key: "getScrollPosition", value: function () {
        return this.scrollTo()
      }
    }, {
      key: "selectPage", value: function (e) {
        0 < e && e <= this.options.totalPages
        && (this.options.pageNumber = e, this.updatePagination())
      }
    }, {
      key: "prevPage", value: function () {
        1 < this.options.pageNumber
        && (this.options.pageNumber--, this.updatePagination())
      }
    }, {
      key: "nextPage", value: function () {
        this.options.pageNumber < this.options.totalPages
        && (this.options.pageNumber++, this.updatePagination())
      }
    }, {
      key: "toggleDetailView", value: function (e, t) {
        var o = this.$body.find(yi.sprintf("> tr[data-index=\"%s\"]", e));
        o.next().is("tr.detail-view") ? this.collapseRow(e) : this.expandRow(e,
            t), this.resetView()
      }
    }, {
      key: "expandRow", value: function (e, t) {
        var o = this.data[e], a = this.$body.find(
            yi.sprintf("> tr[data-index=\"%s\"][data-has-detail-view]", e));
        if (!a.next().is("tr.detail-view")) {
          this.options.detailViewIcon && a.find("a.detail-icon").html(
              yi.sprintf(this.constants.html.icon, this.options.iconsPrefix,
                  this.options.icons.detailClose)), a.after(yi.sprintf(
              "<tr class=\"detail-view\"><td colspan=\"%s\"></td></tr>",
              a.children("td").length));
          var n = a.next().find("td"), i = t || this.options.detailFormatter,
              s = yi.calculateObjectValue(this.options, i, [e, o, n], "");
          1 === n.length && n.append(s), this.trigger("expand-row", e, o, n)
        }
      }
    }, {
      key: "collapseRow", value: function (e) {
        var t = this.data[e], o = this.$body.find(
            yi.sprintf("> tr[data-index=\"%s\"][data-has-detail-view]", e));
        o.next().is("tr.detail-view") && (this.options.detailViewIcon && o.find(
            "a.detail-icon").html(
            yi.sprintf(this.constants.html.icon, this.options.iconsPrefix,
                this.options.icons.detailOpen)), this.trigger("collapse-row", e,
            t, o.next()), o.next().remove())
      }
    }, {
      key: "expandAllRows", value: function () {
        for (var e = this.$body.find("> tr[data-index][data-has-detail-view]"),
            o = 0; o < e.length; o++) {
          this.expandRow(t(e[o]).data("index"))
        }
      }
    }, {
      key: "collapseAllRows", value: function () {
        for (var e = this.$body.find("> tr[data-index][data-has-detail-view]"),
            o = 0; o < e.length; o++) {
          this.collapseRow(t(e[o]).data("index"))
        }
      }
    }, {
      key: "updateColumnTitle", value: function (e) {
        if (e.hasOwnProperty("field") && e.hasOwnProperty("title")
            && (this.columns[this.fieldsColumnsIndex[e.field]].title = this.options.escape
                ? yi.escapeHTML(e.title)
                : e.title, this.columns[this.fieldsColumnsIndex[e.field]].visible)) {
          var o = void 0 === this.options.height ? this.$header
              : this.$tableHeader;
          o.find("th[data-field]").each(function (o, a) {
            if (t(a).data("field") === e.field) {
              return t(
                  t(a).find(".th-inner")[0]).text(e.title), !1
            }
          })
        }
      }
    }, {
      key: "updateFormatText", value: function (e, t) {
        /^format/.test(e) && this.options[e] && ("string" == typeof t
            ? this.options[e] = function () {
              return t
            } : "function" == typeof t
            && (this.options[e] = t), this.initToolbar(), this.initPagination(), this.initBody())
      }
    }]), e
  }();
  return xi.VERSION = fi.VERSION, xi.DEFAULTS = fi.DEFAULTS, xi.LOCALES = fi.LOCALES, xi.COLUMN_DEFAULTS = fi.COLUMN_DEFAULTS, xi.METHODS = fi.METHODS, xi.EVENTS = fi.EVENTS, t.BootstrapTable = xi, t.fn.bootstrapTable = function (e) {
    for (var o = arguments.length, n = Array(1 < o ? o - 1 : 0), i = 1; i < o;
        i++) {
      n[i - 1] = arguments[i];
    }
    var s;
    return this.each(function (o, i) {
      var l = t(i).data("bootstrap.table"),
          r = t.extend({}, xi.DEFAULTS, t(i).data(), "object" === a(e) && e);
      if ("string" == typeof e) {
        var c;
        if (!fi.METHODS.includes(e)) {
          throw new Error(
              "Unknown method: ".concat(e));
        }
        if (!l) {
          return;
        }
        s = (c = l)[e].apply(c, n), "destroy" == e && t(i).removeData(
            "bootstrap.table")
      }
      l || t(i).data("bootstrap.table", l = new t.BootstrapTable(i, r))
    }), "undefined" == typeof s ? this : s
  }, t.fn.bootstrapTable.Constructor = xi, t.fn.bootstrapTable.theme = fi.THEME, t.fn.bootstrapTable.VERSION = fi.VERSION, t.fn.bootstrapTable.defaults = xi.DEFAULTS, t.fn.bootstrapTable.columnDefaults = xi.COLUMN_DEFAULTS, t.fn.bootstrapTable.events = xi.EVENTS, t.fn.bootstrapTable.locales = xi.LOCALES, t.fn.bootstrapTable.methods = xi.METHODS, t.fn.bootstrapTable.utils = yi, t(
      function () {
        t("[data-toggle=\"table\"]").bootstrapTable()
      }), xi
});
