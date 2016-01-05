/*!
 * jQuery JavaScript Library v2.1.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-01-23T21:10Z
 */
! function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = e.length,
            n = ee.type(e);
        return "function" === n || ee.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t, n) {
        if (ee.isFunction(t)) return ee.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return ee.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ae.test(t)) return ee.filter(t, e, n);
            t = ee.filter(t, e)
        }
        return ee.grep(e, function (e) {
            return X.call(t, e) >= 0 !== n
        })
    }

    function r(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = he[e] = {};
        return ee.each(e.match(pe) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        J.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), ee.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = ee.expando + Math.random()
    }

    function c(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(_e, "-$1").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : be.test(n) ? ee.parseJSON(n) : n
                } catch (r) {}
                ye.set(e, t, n)
            } else n = void 0;
        return n
    }

    function u() {
        return !0
    }

    function l() {
        return !1
    }

    function d() {
        try {
            return J.activeElement
        } catch (e) {}
    }

    function f(e, t) {
        return ee.nodeName(e, "table") && ee.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function p(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function h(e) {
        var t = Pe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function g(e, t) {
        for (var n = 0, i = e.length; i > n; n++) ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
    }

    function m(e, t) {
        var n, i, r, o, s, a, c, u;
        if (1 === t.nodeType) {
            if (ve.hasData(e) && (o = ve.access(e), s = ve.set(t, o), u = o.events)) {
                delete s.handle, s.events = {};
                for (r in u)
                    for (n = 0, i = u[r].length; i > n; n++) ee.event.add(t, r, u[r][n])
            }
            ye.hasData(e) && (a = ye.access(e), c = ee.extend({}, a), ye.set(t, c))
        }
    }

    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && ee.nodeName(e, t) ? ee.merge([e], n) : n
    }

    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ce.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function b(t, n) {
        var i = ee(n.createElement(t)).appendTo(n.body),
            r = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(i[0]).display : ee.css(i[0], "display");
        return i.detach(), r
    }

    function _(e) {
        var t = J,
            n = Ie[e];
        return n || (n = b(e, t), "none" !== n && n || (Le = (Le || ee("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Le[0].contentDocument, t.write(), t.close(), n = b(e, t), Le.detach()), Ie[e] = n), n
    }

    function x(e, t, n) {
        var i, r, o, s, a = e.style;
        return n = n || Be(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || ee.contains(e.ownerDocument, e) || (s = ee.style(e, t)), $e.test(s) && He.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function w(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function A(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), i = t, r = Ye.length; r--;)
            if (t = Ye[r] + n, t in e) return t;
        return i
    }

    function C(e, t, n) {
        var i = Ue.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function k(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += ee.css(e, n + we[o], !0, r)), i ? ("content" === n && (s -= ee.css(e, "padding" + we[o], !0, r)), "margin" !== n && (s -= ee.css(e, "border" + we[o] + "Width", !0, r))) : (s += ee.css(e, "padding" + we[o], !0, r), "padding" !== n && (s += ee.css(e, "border" + we[o] + "Width", !0, r)));
        return s
    }

    function T(e, t, n) {
        var i = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Be(e),
            s = "border-box" === ee.css(e, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = x(e, t, o), (0 > r || null == r) && (r = e.style[t]), $e.test(r)) return r;
            i = s && (Z.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + k(e, t, n || (s ? "border" : "content"), i, o) + "px"
    }

    function E(e, t) {
        for (var n, i, r, o = [], s = 0, a = e.length; a > s; s++) i = e[s], i.style && (o[s] = ve.get(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ae(i) && (o[s] = ve.access(i, "olddisplay", _(i.nodeName)))) : o[s] || (r = Ae(i), (n && "none" !== n || !r) && ve.set(i, "olddisplay", r ? n : ee.css(i, "display"))));
        for (s = 0; a > s; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function S(e, t, n, i, r) {
        return new S.prototype.init(e, t, n, i, r)
    }

    function j() {
        return setTimeout(function () {
            Ge = void 0
        }), Ge = ee.now()
    }

    function F(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = we[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function M(e, t, n) {
        for (var i, r = (nt[t] || []).concat(nt["*"]), o = 0, s = r.length; s > o; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function D(e, t, n) {
        var i, r, o, s, a, c, u, l = this,
            d = {},
            f = e.style,
            p = e.nodeType && Ae(e),
            h = ve.get(e, "fxshow");
        n.queue || (a = ee._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, c = a.empty.fire, a.empty.fire = function () {
            a.unqueued || c()
        }), a.unqueued++, l.always(function () {
            l.always(function () {
                a.unqueued--, ee.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = ee.css(e, "display"), "none" === u && (u = _(e.nodeName)), "inline" === u && "none" === ee.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", l.always(function () {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (r = t[i], Je.exec(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                    if ("show" !== r || !h || void 0 === h[i]) continue;
                    p = !0
                }
                d[i] = h && h[i] || ee.style(e, i)
            }
        if (!ee.isEmptyObject(d)) {
            h ? "hidden" in h && (p = h.hidden) : h = ve.access(e, "fxshow", {}), o && (h.hidden = !p), p ? ee(e).show() : l.done(function () {
                ee(e).hide()
            }), l.done(function () {
                var t;
                ve.remove(e, "fxshow");
                for (t in d) ee.style(e, t, d[t])
            });
            for (i in d) s = M(p ? h[i] : 0, i, l), i in h || (h[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function N(e, t) {
        var n, i, r, o, s;
        for (n in e)
            if (i = ee.camelCase(n), r = t[i], o = e[n], ee.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), s = ee.cssHooks[i], s && "expand" in s) {
                o = s.expand(o), delete e[i];
                for (n in o) n in e || (e[n] = o[n], t[n] = r)
            } else t[i] = r
    }

    function q(e, t, n) {
        var i, r, o = 0,
            s = tt.length,
            a = ee.Deferred().always(function () {
                delete c.elem
            }),
            c = function () {
                if (r) return !1;
                for (var t = Ge || j(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, s = 0, c = u.tweens.length; c > s; s++) u.tweens[s].run(o);
                return a.notifyWith(e, [u, o, n]), 1 > o && c ? n : (a.resolveWith(e, [u]), !1)
            },
            u = a.promise({
                elem: e,
                props: ee.extend({}, t),
                opts: ee.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ge || j(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = ee.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) u.tweens[n].run(1);
                    return t ? a.resolveWith(e, [u, t]) : a.rejectWith(e, [u, t]), this
                }
            }),
            l = u.props;
        for (N(l, u.opts.specialEasing); s > o; o++)
            if (i = tt[o].call(u, e, l, u.opts)) return i;
        return ee.map(l, M, u), ee.isFunction(u.opts.start) && u.opts.start.call(e, u), ee.fx.timer(ee.extend(c, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function z(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(pe) || [];
            if (ee.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function P(e, t, n, i) {
        function r(a) {
            var c;
            return o[a] = !0, ee.each(e[a] || [], function (e, a) {
                var u = a(t, n, i);
                return "string" != typeof u || s || o[u] ? s ? !(c = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
            }), c
        }
        var o = {},
            s = e === xt;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function O(e, t) {
        var n, i, r = ee.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && ee.extend(!0, e, i), e
    }

    function R(e, t, n) {
        for (var i, r, o, s, a = e.contents, c = e.dataTypes;
            "*" === c[0];) c.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) {
                    c.unshift(r);
                    break
                }
        if (c[0] in n) o = c[0];
        else {
            for (r in n) {
                if (!c[0] || e.converters[r + " " + c[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        return o ? (o !== c[0] && c.unshift(o), n[o]) : void 0
    }

    function L(e, t, n, i) {
        var r, o, s, a, c, u = {},
            l = e.dataTypes.slice();
        if (l[1])
            for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
        for (o = l.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = o, o = l.shift())
                if ("*" === o) o = c;
                else if ("*" !== c && c !== o) {
            if (s = u[c + " " + o] || u["* " + o], !s)
                for (r in u)
                    if (a = r.split(" "), a[1] === o && (s = u[c + " " + a[0]] || u["* " + a[0]])) {
                        s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0], l.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: s ? d : "No conversion from " + c + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function I(e, t, n, i) {
        var r;
        if (ee.isArray(t)) ee.each(t, function (t, r) {
            n || kt.test(e) ? i(e, r) : I(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== ee.type(t)) i(e, t);
        else
            for (r in t) I(e + "[" + r + "]", t[r], n, i)
    }

    function H(e) {
        return ee.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var $ = [],
        B = $.slice,
        W = $.concat,
        U = $.push,
        X = $.indexOf,
        V = {},
        Q = V.toString,
        Y = V.hasOwnProperty,
        G = "".trim,
        Z = {},
        J = e.document,
        K = "2.1.0",
        ee = function (e, t) {
            return new ee.fn.init(e, t)
        },
        te = /^-ms-/,
        ne = /-([\da-z])/gi,
        ie = function (e, t) {
            return t.toUpperCase()
        };
    ee.fn = ee.prototype = {
        jquery: K,
        constructor: ee,
        selector: "",
        length: 0,
        toArray: function () {
            return B.call(this)
        },
        get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : B.call(this)
        },
        pushStack: function (e) {
            var t = ee.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return ee.each(this, e, t)
        },
        map: function (e) {
            return this.pushStack(ee.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(B.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: U,
        sort: $.sort,
        splice: $.splice
    }, ee.extend = ee.fn.extend = function () {
        var e, t, n, i, r, o, s = arguments[0] || {},
            a = 1,
            c = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || ee.isFunction(s) || (s = {}), a === c && (s = this, a--); c > a; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], i = e[t], s !== i && (u && i && (ee.isPlainObject(i) || (r = ee.isArray(i))) ? (r ? (r = !1, o = n && ee.isArray(n) ? n : []) : o = n && ee.isPlainObject(n) ? n : {}, s[t] = ee.extend(u, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }, ee.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isFunction: function (e) {
            return "function" === ee.type(e)
        },
        isArray: Array.isArray,
        isWindow: function (e) {
            return null != e && e === e.window
        },
        isNumeric: function (e) {
            return e - parseFloat(e) >= 0
        },
        isPlainObject: function (e) {
            if ("object" !== ee.type(e) || e.nodeType || ee.isWindow(e)) return !1;
            try {
                if (e.constructor && !Y.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (t) {
                return !1
            }
            return !0
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Q.call(e)] || "object" : typeof e
        },
        globalEval: function (e) {
            var t, n = eval;
            e = ee.trim(e), e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function (e) {
            return e.replace(te, "ms-").replace(ne, ie)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, i) {
            var r, o = 0,
                s = e.length,
                a = n(e);
            if (i) {
                if (a)
                    for (; s > o && (r = t.apply(e[o], i), r !== !1); o++);
                else
                    for (o in e)
                        if (r = t.apply(e[o], i), r === !1) break
            } else if (a)
                for (; s > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
            else
                for (o in e)
                    if (r = t.call(e[o], o, e[o]), r === !1) break; return e
        },
        trim: function (e) {
            return null == e ? "" : G.call(e)
        },
        makeArray: function (e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? ee.merge(i, "string" == typeof e ? [e] : e) : U.call(i, e)), i
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : X.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; n > i; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function (e, t, n) {
            for (var i, r = [], o = 0, s = e.length, a = !n; s > o; o++) i = !t(e[o], o), i !== a && r.push(e[o]);
            return r
        },
        map: function (e, t, i) {
            var r, o = 0,
                s = e.length,
                a = n(e),
                c = [];
            if (a)
                for (; s > o; o++) r = t(e[o], o, i), null != r && c.push(r);
            else
                for (o in e) r = t(e[o], o, i), null != r && c.push(r);
            return W.apply([], c)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, i, r;
            return "string" == typeof t && (n = e[t], t = e, e = n), ee.isFunction(e) ? (i = B.call(arguments, 2), r = function () {
                return e.apply(t || this, i.concat(B.call(arguments)))
            }, r.guid = e.guid = e.guid || ee.guid++, r) : void 0
        },
        now: Date.now,
        support: Z
    }), ee.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        V["[object " + t + "]"] = t.toLowerCase()
    });
    var re =
        /*!
         * Sizzle CSS Selector Engine v1.10.16
         * http://sizzlejs.com/
         *
         * Copyright 2013 jQuery Foundation, Inc. and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2014-01-13
         */
        function (e) {
            function t(e, t, n, i) {
                var r, o, s, a, c, u, d, h, g, m;
                if ((t ? t.ownerDocument || t : I) !== D && M(t), t = t || D, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (a = t.nodeType) && 9 !== a) return [];
                if (q && !i) {
                    if (r = ye.exec(e))
                        if (s = r[1]) {
                            if (9 === a) {
                                if (o = t.getElementById(s), !o || !o.parentNode) return n;
                                if (o.id === s) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && R(t, o) && o.id === s) return n.push(o), n
                        } else {
                            if (r[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                            if ((s = r[3]) && A.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(s)), n
                        }
                    if (A.qsa && (!z || !z.test(e))) {
                        if (h = d = L, g = t, m = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                            for (u = f(e), (d = t.getAttribute("id")) ? h = d.replace(_e, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", c = u.length; c--;) u[c] = h + p(u[c]);
                            g = be.test(e) && l(t.parentNode) || t, m = u.join(",")
                        }
                        if (m) try {
                            return K.apply(n, g.querySelectorAll(m)), n
                        } catch (v) {} finally {
                            d || t.removeAttribute("id")
                        }
                    }
                }
                return x(e.replace(ce, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[L] = !0, e
            }

            function r(e) {
                var t = D.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function o(e, t) {
                for (var n = e.split("|"), i = e.length; i--;) C.attrHandle[n[i]] = t
            }

            function s(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function a(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function c(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function u(e) {
                return i(function (t) {
                    return t = +t, i(function (n, i) {
                        for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function l(e) {
                return e && typeof e.getElementsByTagName !== V && e
            }

            function d() {}

            function f(e, n) {
                var i, r, o, s, a, c, u, l = W[e + " "];
                if (l) return n ? 0 : l.slice(0);
                for (a = e, c = [], u = C.preFilter; a;) {
                    (!i || (r = ue.exec(a))) && (r && (a = a.slice(r[0].length) || a), c.push(o = [])), i = !1, (r = le.exec(a)) && (i = r.shift(), o.push({
                        value: i,
                        type: r[0].replace(ce, " ")
                    }), a = a.slice(i.length));
                    for (s in C.filter) !(r = he[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: s,
                        matches: r
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return n ? a.length : a ? t.error(e) : W(e, c).slice(0)
            }

            function p(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                return i
            }

            function h(e, t, n) {
                var i = t.dir,
                    r = n && "parentNode" === i,
                    o = $++;
                return t.first ? function (t, n, o) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) return e(t, n, o)
                } : function (t, n, s) {
                    var a, c, u = [H, o];
                    if (s) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || r) && e(t, n, s)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || r) {
                                if (c = t[L] || (t[L] = {}), (a = c[i]) && a[0] === H && a[1] === o) return u[2] = a[2];
                                if (c[i] = u, u[2] = e(t, n, s)) return !0
                            }
                }
            }

            function g(e) {
                return e.length > 1 ? function (t, n, i) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function m(e, t, n, i, r) {
                for (var o, s = [], a = 0, c = e.length, u = null != t; c > a; a++)(o = e[a]) && (!n || n(o, i, r)) && (s.push(o), u && t.push(a));
                return s
            }

            function v(e, t, n, r, o, s) {
                return r && !r[L] && (r = v(r)), o && !o[L] && (o = v(o, s)), i(function (i, s, a, c) {
                    var u, l, d, f = [],
                        p = [],
                        h = s.length,
                        g = i || _(t || "*", a.nodeType ? [a] : a, []),
                        v = !e || !i && t ? g : m(g, f, e, a, c),
                        y = n ? o || (i ? e : h || r) ? [] : s : v;
                    if (n && n(v, y, a, c), r)
                        for (u = m(y, p), r(u, [], a, c), l = u.length; l--;)(d = u[l]) && (y[p[l]] = !(v[p[l]] = d));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (u = [], l = y.length; l--;)(d = y[l]) && u.push(v[l] = d);
                                o(null, y = [], u, c)
                            }
                            for (l = y.length; l--;)(d = y[l]) && (u = o ? te.call(i, d) : f[l]) > -1 && (i[u] = !(s[u] = d))
                        }
                    } else y = m(y === s ? y.splice(h, y.length) : y), o ? o(null, s, y, c) : K.apply(s, y)
                })
            }

            function y(e) {
                for (var t, n, i, r = e.length, o = C.relative[e[0].type], s = o || C.relative[" "], a = o ? 1 : 0, c = h(function (e) {
                        return e === t
                    }, s, !0), u = h(function (e) {
                        return te.call(t, e) > -1
                    }, s, !0), l = [function (e, n, i) {
                        return !o && (i || n !== S) || ((t = n).nodeType ? c(e, n, i) : u(e, n, i))
                    }]; r > a; a++)
                    if (n = C.relative[e[a].type]) l = [h(g(l), n)];
                    else {
                        if (n = C.filter[e[a].type].apply(null, e[a].matches), n[L]) {
                            for (i = ++a; r > i && !C.relative[e[i].type]; i++);
                            return v(a > 1 && g(l), a > 1 && p(e.slice(0, a - 1).concat({
                                value: " " === e[a - 2].type ? "*" : ""
                            })).replace(ce, "$1"), n, i > a && y(e.slice(a, i)), r > i && y(e = e.slice(i)), r > i && p(e))
                        }
                        l.push(n)
                    }
                return g(l)
            }

            function b(e, n) {
                var r = n.length > 0,
                    o = e.length > 0,
                    s = function (i, s, a, c, u) {
                        var l, d, f, p = 0,
                            h = "0",
                            g = i && [],
                            v = [],
                            y = S,
                            b = i || o && C.find.TAG("*", u),
                            _ = H += null == y ? 1 : Math.random() || .1,
                            x = b.length;
                        for (u && (S = s !== D && s); h !== x && null != (l = b[h]); h++) {
                            if (o && l) {
                                for (d = 0; f = e[d++];)
                                    if (f(l, s, a)) {
                                        c.push(l);
                                        break
                                    }
                                u && (H = _)
                            }
                            r && ((l = !f && l) && p--, i && g.push(l))
                        }
                        if (p += h, r && h !== p) {
                            for (d = 0; f = n[d++];) f(g, v, s, a);
                            if (i) {
                                if (p > 0)
                                    for (; h--;) g[h] || v[h] || (v[h] = Z.call(c));
                                v = m(v)
                            }
                            K.apply(c, v), u && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(c)
                        }
                        return u && (H = _, S = y), g
                    };
                return r ? i(s) : s
            }

            function _(e, n, i) {
                for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
                return i
            }

            function x(e, t, n, i) {
                var r, o, s, a, c, u = f(e);
                if (!i && 1 === u.length) {
                    if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && A.getById && 9 === t.nodeType && q && C.relative[o[1].type]) {
                        if (t = (C.find.ID(s.matches[0].replace(xe, we), t) || [])[0], !t) return n;
                        e = e.slice(o.shift().value.length)
                    }
                    for (r = he.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !C.relative[a = s.type]);)
                        if ((c = C.find[a]) && (i = c(s.matches[0].replace(xe, we), be.test(o[0].type) && l(t.parentNode) || t))) {
                            if (o.splice(r, 1), e = i.length && p(o), !e) return K.apply(n, i), n;
                            break
                        }
                }
                return E(e, u)(i, t, !q, n, be.test(e) && l(t.parentNode) || t), n
            }
            var w, A, C, k, T, E, S, j, F, M, D, N, q, z, P, O, R, L = "sizzle" + -new Date,
                I = e.document,
                H = 0,
                $ = 0,
                B = n(),
                W = n(),
                U = n(),
                X = function (e, t) {
                    return e === t && (F = !0), 0
                },
                V = "undefined",
                Q = 1 << 31,
                Y = {}.hasOwnProperty,
                G = [],
                Z = G.pop,
                J = G.push,
                K = G.push,
                ee = G.slice,
                te = G.indexOf || function (e) {
                    for (var t = 0, n = this.length; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ie = "[\\x20\\t\\r\\n\\f]",
                re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                oe = re.replace("w", "w#"),
                se = "\\[" + ie + "*(" + re + ")" + ie + "*(?:([*^$|!~]?=)" + ie + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + oe + ")|)|)" + ie + "*\\]",
                ae = ":(" + re + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + se.replace(3, 8) + ")*)|.*)\\)|)",
                ce = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
                ue = new RegExp("^" + ie + "*," + ie + "*"),
                le = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
                de = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
                fe = new RegExp(ae),
                pe = new RegExp("^" + oe + "$"),
                he = {
                    ID: new RegExp("^#(" + re + ")"),
                    CLASS: new RegExp("^\\.(" + re + ")"),
                    TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + se),
                    PSEUDO: new RegExp("^" + ae),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ne + ")$", "i"),
                    needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
                },
                ge = /^(?:input|select|textarea|button)$/i,
                me = /^h\d$/i,
                ve = /^[^{]+\{\s*\[native \w/,
                ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                be = /[+~]/,
                _e = /'|\\/g,
                xe = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
                we = function (e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                };
            try {
                K.apply(G = ee.call(I.childNodes), I.childNodes), G[I.childNodes.length].nodeType
            } catch (Ae) {
                K = {
                    apply: G.length ? function (e, t) {
                        J.apply(e, ee.call(t))
                    } : function (e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            A = t.support = {}, T = t.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, M = t.setDocument = function (e) {
                var t, n = e ? e.ownerDocument || e : I,
                    i = n.defaultView;
                return n !== D && 9 === n.nodeType && n.documentElement ? (D = n, N = n.documentElement, q = !T(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function () {
                    M()
                }, !1) : i.attachEvent && i.attachEvent("onunload", function () {
                    M()
                })), A.attributes = r(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), A.getElementsByTagName = r(function (e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), A.getElementsByClassName = ve.test(n.getElementsByClassName) && r(function (e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), A.getById = r(function (e) {
                    return N.appendChild(e).id = L, !n.getElementsByName || !n.getElementsByName(L).length
                }), A.getById ? (C.find.ID = function (e, t) {
                    if (typeof t.getElementById !== V && q) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, C.filter.ID = function (e) {
                    var t = e.replace(xe, we);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete C.find.ID, C.filter.ID = function (e) {
                    var t = e.replace(xe, we);
                    return function (e) {
                        var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), C.find.TAG = A.getElementsByTagName ? function (e, t) {
                    return typeof t.getElementsByTagName !== V ? t.getElementsByTagName(e) : void 0
                } : function (e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, C.find.CLASS = A.getElementsByClassName && function (e, t) {
                    return typeof t.getElementsByClassName !== V && q ? t.getElementsByClassName(e) : void 0
                }, P = [], z = [], (A.qsa = ve.test(n.querySelectorAll)) && (r(function (e) {
                    e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && z.push("[*^$]=" + ie + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || z.push("\\[" + ie + "*(?:value|" + ne + ")"), e.querySelectorAll(":checked").length || z.push(":checked")
                }), r(function (e) {
                    var t = n.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && z.push("name" + ie + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || z.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), z.push(",.*:")
                })), (A.matchesSelector = ve.test(O = N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && r(function (e) {
                    A.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), P.push("!=", ae)
                }), z = z.length && new RegExp(z.join("|")), P = P.length && new RegExp(P.join("|")), t = ve.test(N.compareDocumentPosition), R = t || ve.test(N.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function (e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, X = t ? function (e, t) {
                    if (e === t) return F = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !A.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === I && R(I, e) ? -1 : t === n || t.ownerDocument === I && R(I, t) ? 1 : j ? te.call(j, e) - te.call(j, t) : 0 : 4 & i ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return F = !0, 0;
                    var i, r = 0,
                        o = e.parentNode,
                        a = t.parentNode,
                        c = [e],
                        u = [t];
                    if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : j ? te.call(j, e) - te.call(j, t) : 0;
                    if (o === a) return s(e, t);
                    for (i = e; i = i.parentNode;) c.unshift(i);
                    for (i = t; i = i.parentNode;) u.unshift(i);
                    for (; c[r] === u[r];) r++;
                    return r ? s(c[r], u[r]) : c[r] === I ? -1 : u[r] === I ? 1 : 0
                }, n) : D
            }, t.matches = function (e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function (e, n) {
                if ((e.ownerDocument || e) !== D && M(e), n = n.replace(de, "='$1']"), !(!A.matchesSelector || !q || P && P.test(n) || z && z.test(n))) try {
                    var i = O.call(e, n);
                    if (i || A.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (r) {}
                return t(n, D, null, [e]).length > 0
            }, t.contains = function (e, t) {
                return (e.ownerDocument || e) !== D && M(e), R(e, t)
            }, t.attr = function (e, t) {
                (e.ownerDocument || e) !== D && M(e);
                var n = C.attrHandle[t.toLowerCase()],
                    i = n && Y.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;
                return void 0 !== i ? i : A.attributes || !q ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function (e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (F = !A.detectDuplicates, j = !A.sortStable && e.slice(0), e.sort(X), F) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return j = null, e
            }, k = t.getText = function (e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += k(t);
                return n
            }, C = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: he,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(xe, we), e[3] = (e[4] || e[5] || "").replace(xe, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[5] && e[2];
                        return he.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && fe.test(n) && (t = f(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(xe, we).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = B[e + " "];
                        return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && B(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (e, n, i) {
                        return function (r) {
                            var o = t.attr(r, e);
                            return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function (e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === i && 0 === r ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, c) {
                            var u, l, d, f, p, h, g = o !== s ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = a && t.nodeName.toLowerCase(),
                                y = !c && !a;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (d = t; d = d[g];)
                                            if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                    for (l = m[L] || (m[L] = {}), u = l[e] || [], p = u[0] === H && u[1], f = u[0] === H && u[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (f = p = 0) || h.pop();)
                                        if (1 === d.nodeType && ++f && d === t) {
                                            l[e] = [H, p, f];
                                            break
                                        }
                                } else if (y && (u = (t[L] || (t[L] = {}))[e]) && u[0] === H) f = u[1];
                                else
                                    for (;
                                        (d = ++p && d && d[g] || (f = p = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[L] || (d[L] = {}))[e] = [H, f]), d !== t)););
                                return f -= r, f === i || f % i === 0 && f / i >= 0
                            }
                        }
                    },
                    PSEUDO: function (e, n) {
                        var r, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[L] ? o(n) : o.length > 1 ? (r = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                            for (var i, r = o(e, n), s = r.length; s--;) i = te.call(e, r[s]), e[i] = !(t[i] = r[s])
                        }) : function (e) {
                            return o(e, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function (e) {
                        var t = [],
                            n = [],
                            r = E(e.replace(ce, "$1"));
                        return r[L] ? i(function (e, t, n, i) {
                            for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                        }) : function (e, i, o) {
                            return t[0] = e, r(t, null, o, n), !n.pop()
                        }
                    }),
                    has: i(function (e) {
                        return function (n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function (e) {
                        return function (t) {
                            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                        }
                    }),
                    lang: i(function (e) {
                        return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, we).toLowerCase(),
                            function (t) {
                                var n;
                                do
                                    if (n = q ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function (e) {
                        return e === N
                    },
                    focus: function (e) {
                        return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function (e) {
                        return e.disabled === !1
                    },
                    disabled: function (e) {
                        return e.disabled === !0
                    },
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !C.pseudos.empty(e)
                    },
                    header: function (e) {
                        return me.test(e.nodeName)
                    },
                    input: function (e) {
                        return ge.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: u(function () {
                        return [0]
                    }),
                    last: u(function (e, t) {
                        return [t - 1]
                    }),
                    eq: u(function (e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: u(function (e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: u(function (e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: u(function (e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: u(function (e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, C.pseudos.nth = C.pseudos.eq;
            for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) C.pseudos[w] = a(w);
            for (w in {
                    submit: !0,
                    reset: !0
                }) C.pseudos[w] = c(w);
            return d.prototype = C.filters = C.pseudos, C.setFilters = new d, E = t.compile = function (e, t) {
                var n, i = [],
                    r = [],
                    o = U[e + " "];
                if (!o) {
                    for (t || (t = f(e)), n = t.length; n--;) o = y(t[n]), o[L] ? i.push(o) : r.push(o);
                    o = U(e, b(r, i))
                }
                return o
            }, A.sortStable = L.split("").sort(X).join("") === L, A.detectDuplicates = !!F, M(), A.sortDetached = r(function (e) {
                return 1 & e.compareDocumentPosition(D.createElement("div"))
            }), r(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function (e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), A.attributes && r(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || o("value", function (e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), r(function (e) {
                return null == e.getAttribute("disabled")
            }) || o(ne, function (e, t, n) {
                var i;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
    ee.find = re, ee.expr = re.selectors, ee.expr[":"] = ee.expr.pseudos, ee.unique = re.uniqueSort, ee.text = re.getText, ee.isXMLDoc = re.isXML, ee.contains = re.contains;
    var oe = ee.expr.match.needsContext,
        se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ae = /^.[^:#\[\.,]*$/;
    ee.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ee.find.matchesSelector(i, e) ? [i] : [] : ee.find.matches(e, ee.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, ee.fn.extend({
        find: function (e) {
            var t, n = this.length,
                i = [],
                r = this;
            if ("string" != typeof e) return this.pushStack(ee(e).filter(function () {
                for (t = 0; n > t; t++)
                    if (ee.contains(r[t], this)) return !0
            }));
            for (t = 0; n > t; t++) ee.find(e, r[t], i);
            return i = this.pushStack(n > 1 ? ee.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function (e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function (e) {
            return !!i(this, "string" == typeof e && oe.test(e) ? ee(e) : e || [], !1).length
        }
    });
    var ce, ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        le = ee.fn.init = function (e, t) {
            var n, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ue.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ce).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof ee ? t[0] : t, ee.merge(this, ee.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), se.test(n[1]) && ee.isPlainObject(t))
                        for (n in t) ee.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return i = J.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = J, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ee.isFunction(e) ? "undefined" != typeof ce.ready ? ce.ready(e) : e(ee) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ee.makeArray(e, this))
        };
    le.prototype = ee.fn, ce = ee(J);
    var de = /^(?:parents|prev(?:Until|All))/,
        fe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ee.extend({
        dir: function (e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && ee(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), ee.fn.extend({
        has: function (e) {
            var t = ee(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; n > e; e++)
                    if (ee.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            for (var n, i = 0, r = this.length, o = [], s = oe.test(e) || "string" != typeof e ? ee(e, t || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ee.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? ee.unique(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? X.call(ee(e), this[0]) : X.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(ee.unique(ee.merge(this.get(), ee(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ee.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return ee.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return ee.dir(e, "parentNode", n)
        },
        next: function (e) {
            return r(e, "nextSibling")
        },
        prev: function (e) {
            return r(e, "previousSibling")
        },
        nextAll: function (e) {
            return ee.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return ee.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return ee.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return ee.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return ee.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return ee.sibling(e.firstChild)
        },
        contents: function (e) {
            return e.contentDocument || ee.merge([], e.childNodes)
        }
    }, function (e, t) {
        ee.fn[e] = function (n, i) {
            var r = ee.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = ee.filter(i, r)), this.length > 1 && (fe[e] || ee.unique(r), de.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var pe = /\S+/g,
        he = {};
    ee.Callbacks = function (e) {
        e = "string" == typeof e ? he[e] || o(e) : ee.extend({}, e);
        var t, n, i, r, s, a, c = [],
            u = !e.once && [],
            l = function (o) {
                for (t = e.memory && o, n = !0, a = r || 0, r = 0, s = c.length, i = !0; c && s > a; a++)
                    if (c[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                i = !1, c && (u ? u.length && l(u.shift()) : t ? c = [] : d.disable())
            },
            d = {
                add: function () {
                    if (c) {
                        var n = c.length;
                        ! function o(t) {
                            ee.each(t, function (t, n) {
                                var i = ee.type(n);
                                "function" === i ? e.unique && d.has(n) || c.push(n) : n && n.length && "string" !== i && o(n)
                            })
                        }(arguments), i ? s = c.length : t && (r = n, l(t))
                    }
                    return this
                },
                remove: function () {
                    return c && ee.each(arguments, function (e, t) {
                        for (var n;
                            (n = ee.inArray(t, c, n)) > -1;) c.splice(n, 1), i && (s >= n && s--, a >= n && a--)
                    }), this
                },
                has: function (e) {
                    return e ? ee.inArray(e, c) > -1 : !(!c || !c.length)
                },
                empty: function () {
                    return c = [], s = 0, this
                },
                disable: function () {
                    return c = u = t = void 0, this
                },
                disabled: function () {
                    return !c
                },
                lock: function () {
                    return u = void 0, t || d.disable(), this
                },
                locked: function () {
                    return !u
                },
                fireWith: function (e, t) {
                    return !c || n && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? u.push(t) : l(t)), this
                },
                fire: function () {
                    return d.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!n
                }
            };
        return d
    }, ee.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", ee.Callbacks("once memory"), "resolved"], ["reject", "fail", ee.Callbacks("once memory"), "rejected"], ["notify", "progress", ee.Callbacks("memory")]],
                n = "pending",
                i = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return ee.Deferred(function (n) {
                            ee.each(t, function (t, o) {
                                var s = ee.isFunction(e[t]) && e[t];
                                r[o[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && ee.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? ee.extend(e, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, ee.each(t, function (e, o) {
                var s = o[2],
                    a = o[3];
                i[o[1]] = s.add, a && s.add(function () {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function () {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = s.fireWith
            }), i.promise(r), e && e.call(r, r), r
        },
        when: function (e) {
            var t, n, i, r = 0,
                o = B.call(arguments),
                s = o.length,
                a = 1 !== s || e && ee.isFunction(e.promise) ? s : 0,
                c = 1 === a ? e : ee.Deferred(),
                u = function (e, n, i) {
                    return function (r) {
                        n[e] = this, i[e] = arguments.length > 1 ? B.call(arguments) : r, i === t ? c.notifyWith(n, i) : --a || c.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && ee.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(c.reject).progress(u(r, n, t)) : --a;
            return a || c.resolveWith(i, o), c.promise()
        }
    });
    var ge;
    ee.fn.ready = function (e) {
        return ee.ready.promise().done(e), this
    }, ee.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? ee.readyWait++ : ee.ready(!0)
        },
        ready: function (e) {
            (e === !0 ? --ee.readyWait : ee.isReady) || (ee.isReady = !0, e !== !0 && --ee.readyWait > 0 || (ge.resolveWith(J, [ee]), ee.fn.trigger && ee(J).trigger("ready").off("ready")))
        }
    }), ee.ready.promise = function (t) {
        return ge || (ge = ee.Deferred(), "complete" === J.readyState ? setTimeout(ee.ready) : (J.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), ge.promise(t)
    }, ee.ready.promise();
    var me = ee.access = function (e, t, n, i, r, o, s) {
        var a = 0,
            c = e.length,
            u = null == n;
        if ("object" === ee.type(n)) {
            r = !0;
            for (a in n) ee.access(e, t, a, n[a], !0, o, s)
        } else if (void 0 !== i && (r = !0, ee.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
                return u.call(ee(e), n)
            })), t))
            for (; c > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : u ? t.call(e) : c ? t(e[0], n) : o
    };
    ee.acceptData = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, a.uid = 1, a.accepts = ee.acceptData, a.prototype = {
        key: function (e) {
            if (!a.accepts(e)) return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (i) {
                    t[this.expando] = n, ee.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function (e, t, n) {
            var i, r = this.key(e),
                o = this.cache[r];
            if ("string" == typeof t) o[t] = n;
            else if (ee.isEmptyObject(o)) ee.extend(this.cache[r], t);
            else
                for (i in t) o[i] = t[i];
            return o
        },
        get: function (e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function (e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, ee.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, i, r, o = this.key(e),
                s = this.cache[o];
            if (void 0 === t) this.cache[o] = {};
            else {
                ee.isArray(t) ? i = t.concat(t.map(ee.camelCase)) : (r = ee.camelCase(t), t in s ? i = [t, r] : (i = r, i = i in s ? [i] : i.match(pe) || [])), n = i.length;
                for (; n--;) delete s[i[n]]
            }
        },
        hasData: function (e) {
            return !ee.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function (e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ve = new a,
        ye = new a,
        be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        _e = /([A-Z])/g;
    ee.extend({
        hasData: function (e) {
            return ye.hasData(e) || ve.hasData(e)
        },
        data: function (e, t, n) {
            return ye.access(e, t, n)
        },
        removeData: function (e, t) {
            ye.remove(e, t)
        },
        _data: function (e, t, n) {
            return ve.access(e, t, n)
        },
        _removeData: function (e, t) {
            ve.remove(e, t)
        }
    }), ee.fn.extend({
        data: function (e, t) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = ye.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) i = s[n].name, 0 === i.indexOf("data-") && (i = ee.camelCase(i.slice(5)), c(o, i, r[i]));
                    ve.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function () {
                ye.set(this, e)
            }) : me(this, function (t) {
                var n, i = ee.camelCase(e);
                if (o && void 0 === t) {
                    if (n = ye.get(o, e), void 0 !== n) return n;
                    if (n = ye.get(o, i), void 0 !== n) return n;
                    if (n = c(o, i, void 0), void 0 !== n) return n
                } else this.each(function () {
                    var n = ye.get(this, i);
                    ye.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                ye.remove(this, e)
            })
        }
    }), ee.extend({
        queue: function (e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = ve.get(e, t), n && (!i || ee.isArray(n) ? i = ve.access(e, t, ee.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = ee.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = ee._queueHooks(e, t),
                s = function () {
                    ee.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return ve.get(e, n) || ve.access(e, n, {
                empty: ee.Callbacks("once memory").add(function () {
                    ve.remove(e, [t + "queue", n])
                })
            })
        }
    }), ee.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ee.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = ee.queue(this, e, t);
                ee._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ee.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                ee.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, i = 1,
                r = ee.Deferred(),
                o = this,
                s = this.length,
                a = function () {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = ve.get(o[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        we = ["Top", "Right", "Bottom", "Left"],
        Ae = function (e, t) {
            return e = t || e, "none" === ee.css(e, "display") || !ee.contains(e.ownerDocument, e)
        },
        Ce = /^(?:checkbox|radio)$/i;
    ! function () {
        var e = J.createDocumentFragment(),
            t = e.appendChild(J.createElement("div"));
        t.innerHTML = "<input type='radio' checked='checked' name='t'/>", Z.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Z.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var ke = "undefined";
    Z.focusinBubbles = "onfocusin" in e;
    var Te = /^key/,
        Ee = /^(?:mouse|contextmenu)|click/,
        Se = /^(?:focusinfocus|focusoutblur)$/,
        je = /^([^.]*)(?:\.(.+)|)$/;
    ee.event = {
        global: {},
        add: function (e, t, n, i, r) {
            var o, s, a, c, u, l, d, f, p, h, g, m = ve.get(e);
            if (m)
                for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = ee.guid++), (c = m.events) || (c = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
                        return typeof ee !== ke && ee.event.triggered !== t.type ? ee.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(pe) || [""], u = t.length; u--;) a = je.exec(t[u]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p && (d = ee.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, d = ee.event.special[p] || {}, l = ee.extend({
                    type: p,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && ee.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, o), (f = c[p]) || (f = c[p] = [], f.delegateCount = 0, d.setup && d.setup.call(e, i, h, s) !== !1 || e.addEventListener && e.addEventListener(p, s, !1)), d.add && (d.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, l) : f.push(l), ee.event.global[p] = !0)
        },
        remove: function (e, t, n, i, r) {
            var o, s, a, c, u, l, d, f, p, h, g, m = ve.hasData(e) && ve.get(e);
            if (m && (c = m.events)) {
                for (t = (t || "").match(pe) || [""], u = t.length; u--;)
                    if (a = je.exec(t[u]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p) {
                        for (d = ee.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, f = c[p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--;) l = f[o], !r && g !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || i && i !== l.selector && ("**" !== i || !l.selector) || (f.splice(o, 1), l.selector && f.delegateCount--, d.remove && d.remove.call(e, l));
                        s && !f.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || ee.removeEvent(e, p, m.handle), delete c[p])
                    } else
                        for (p in c) ee.event.remove(e, p + t[u], n, i, !0);
                ee.isEmptyObject(c) && (delete m.handle, ve.remove(e, "events"))
            }
        },
        trigger: function (t, n, i, r) {
            var o, s, a, c, u, l, d, f = [i || J],
                p = Y.call(t, "type") ? t.type : t,
                h = Y.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || J, 3 !== i.nodeType && 8 !== i.nodeType && !Se.test(p + ee.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), u = p.indexOf(":") < 0 && "on" + p, t = t[ee.expando] ? t : new ee.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : ee.makeArray(n, [t]), d = ee.event.special[p] || {}, r || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                if (!r && !d.noBubble && !ee.isWindow(i)) {
                    for (c = d.delegateType || p, Se.test(c + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), a = s;
                    a === (i.ownerDocument || J) && f.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = f[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? c : d.bindType || p, l = (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle"), l && l.apply(s, n), l = u && s[u], l && l.apply && ee.acceptData(s) && (t.result = l.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = p, r || t.isDefaultPrevented() || d._default && d._default.apply(f.pop(), n) !== !1 || !ee.acceptData(i) || u && ee.isFunction(i[p]) && !ee.isWindow(i) && (a = i[u], a && (i[u] = null), ee.event.triggered = p, i[p](), ee.event.triggered = void 0, a && (i[u] = a)), t.result
            }
        },
        dispatch: function (e) {
            e = ee.event.fix(e);
            var t, n, i, r, o, s = [],
                a = B.call(arguments),
                c = (ve.get(this, "events") || {})[e.type] || [],
                u = ee.event.special[e.type] || {};
            if (a[0] = e,
                e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (s = ee.event.handlers.call(this, e, c), t = 0;
                    (r = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, i = ((ee.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, i, r, o, s = [],
                a = t.delegateCount,
                c = e.target;
            if (a && c.nodeType && (!e.button || "click" !== e.type))
                for (; c !== this; c = c.parentNode || this)
                    if (c.disabled !== !0 || "click" !== e.type) {
                        for (i = [], n = 0; a > n; n++) o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? ee(r, this).index(c) >= 0 : ee.find(r, this, null, [c]).length), i[r] && i.push(o);
                        i.length && s.push({
                            elem: c,
                            handlers: i
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, i, r, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[ee.expando]) return e;
            var t, n, i, r = e.type,
                o = e,
                s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Ee.test(r) ? this.mouseHooks : Te.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new ee.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
            return e.target || (e.target = J), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== d() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === d() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && ee.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function (e) {
                    return ee.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, i) {
            var r = ee.extend(new ee.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? ee.event.trigger(r, null, t) : ee.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, ee.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, ee.Event = function (e, t) {
        return this instanceof ee.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.getPreventDefault && e.getPreventDefault() ? u : l) : this.type = e, t && ee.extend(this, t), this.timeStamp = e && e.timeStamp || ee.now(), void(this[ee.expando] = !0)) : new ee.Event(e, t)
    }, ee.Event.prototype = {
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = u, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = u, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = u, this.stopPropagation()
        }
    }, ee.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        ee.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return (!r || r !== i && !ee.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), Z.focusinBubbles || ee.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            ee.event.simulate(t, e.target, ee.event.fix(e), !0)
        };
        ee.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this,
                    r = ve.access(i, t);
                r || i.addEventListener(e, n, !0), ve.access(i, t, (r || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this,
                    r = ve.access(i, t) - 1;
                r ? ve.access(i, t, r) : (i.removeEventListener(e, n, !0), ve.remove(i, t))
            }
        }
    }), ee.fn.extend({
        on: function (e, t, n, i, r) {
            var o, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (s in e) this.on(s, t, n, e[s], r);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = l;
            else if (!i) return this;
            return 1 === r && (o = i, i = function (e) {
                return ee().off(e), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = ee.guid++)), this.each(function () {
                ee.event.add(this, e, i, n, t)
            })
        },
        one: function (e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ee(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = l), this.each(function () {
                ee.event.remove(this, e, n, t)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                ee.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            return n ? ee.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Me = /<([\w:]+)/,
        De = /<|&#?\w+;/,
        Ne = /<(?:script|style|link)/i,
        qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ze = /^$|\/(?:java|ecma)script/i,
        Pe = /^true\/(.*)/,
        Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Re = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Re.optgroup = Re.option, Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead, Re.th = Re.td, ee.extend({
        clone: function (e, t, n) {
            var i, r, o, s, a = e.cloneNode(!0),
                c = ee.contains(e.ownerDocument, e);
            if (!(Z.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ee.isXMLDoc(e)))
                for (s = v(a), o = v(e), i = 0, r = o.length; r > i; i++) y(o[i], s[i]);
            if (t)
                if (n)
                    for (o = o || v(e), s = s || v(a), i = 0, r = o.length; r > i; i++) m(o[i], s[i]);
                else m(e, a);
            return s = v(a, "script"), s.length > 0 && g(s, !c && v(e, "script")), a
        },
        buildFragment: function (e, t, n, i) {
            for (var r, o, s, a, c, u, l = t.createDocumentFragment(), d = [], f = 0, p = e.length; p > f; f++)
                if (r = e[f], r || 0 === r)
                    if ("object" === ee.type(r)) ee.merge(d, r.nodeType ? [r] : r);
                    else if (De.test(r)) {
                for (o = o || l.appendChild(t.createElement("div")), s = (Me.exec(r) || ["", ""])[1].toLowerCase(), a = Re[s] || Re._default, o.innerHTML = a[1] + r.replace(Fe, "<$1></$2>") + a[2], u = a[0]; u--;) o = o.lastChild;
                ee.merge(d, o.childNodes), o = l.firstChild, o.textContent = ""
            } else d.push(t.createTextNode(r));
            for (l.textContent = "", f = 0; r = d[f++];)
                if ((!i || -1 === ee.inArray(r, i)) && (c = ee.contains(r.ownerDocument, r), o = v(l.appendChild(r), "script"), c && g(o), n))
                    for (u = 0; r = o[u++];) ze.test(r.type || "") && n.push(r);
            return l
        },
        cleanData: function (e) {
            for (var t, n, i, r, o, s, a = ee.event.special, c = 0; void 0 !== (n = e[c]); c++) {
                if (ee.acceptData(n) && (o = n[ve.expando], o && (t = ve.cache[o]))) {
                    if (i = Object.keys(t.events || {}), i.length)
                        for (s = 0; void 0 !== (r = i[s]); s++) a[r] ? ee.event.remove(n, r) : ee.removeEvent(n, r, t.handle);
                    ve.cache[o] && delete ve.cache[o]
                }
                delete ye.cache[n[ye.expando]]
            }
        }
    }), ee.fn.extend({
        text: function (e) {
            return me(this, function (e) {
                return void 0 === e ? ee.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = f(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = f(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var n, i = e ? ee.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || ee.cleanData(v(n)), n.parentNode && (t && ee.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ee.cleanData(v(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return ee.clone(this, e, t)
            })
        },
        html: function (e) {
            return me(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !Re[(Me.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Fe, "<$1></$2>");
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (ee.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, ee.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t) {
            e = W.apply([], e);
            var n, i, r, o, s, a, c = 0,
                u = this.length,
                l = this,
                d = u - 1,
                f = e[0],
                g = ee.isFunction(f);
            if (g || u > 1 && "string" == typeof f && !Z.checkClone && qe.test(f)) return this.each(function (n) {
                var i = l.eq(n);
                g && (e[0] = f.call(this, n, i.html())), i.domManip(e, t)
            });
            if (u && (n = ee.buildFragment(e, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                for (r = ee.map(v(n, "script"), p), o = r.length; u > c; c++) s = n, c !== d && (s = ee.clone(s, !0, !0), o && ee.merge(r, v(s, "script"))), t.call(this[c], s, c);
                if (o)
                    for (a = r[r.length - 1].ownerDocument, ee.map(r, h), c = 0; o > c; c++) s = r[c], ze.test(s.type || "") && !ve.access(s, "globalEval") && ee.contains(a, s) && (s.src ? ee._evalUrl && ee._evalUrl(s.src) : ee.globalEval(s.textContent.replace(Oe, "")))
            }
            return this
        }
    }), ee.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        ee.fn[e] = function (e) {
            for (var n, i = [], r = ee(e), o = r.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), ee(r[s])[t](n), U.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Le, Ie = {},
        He = /^margin/,
        $e = new RegExp("^(" + xe + ")(?!px)[a-z%]+$", "i"),
        Be = function (e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        };
    ! function () {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", o.appendChild(s);
            var t = e.getComputedStyle(a, null);
            n = "1%" !== t.top, i = "4px" === t.width, o.removeChild(s)
        }
        var n, i, r = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
            o = J.documentElement,
            s = J.createElement("div"),
            a = J.createElement("div");
        a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", Z.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(a), e.getComputedStyle && ee.extend(Z, {
            pixelPosition: function () {
                return t(), n
            },
            boxSizingReliable: function () {
                return null == i && t(), i
            },
            reliableMarginRight: function () {
                var t, n = a.appendChild(J.createElement("div"));
                return n.style.cssText = a.style.cssText = r, n.style.marginRight = n.style.width = "0", a.style.width = "1px", o.appendChild(s), t = !parseFloat(e.getComputedStyle(n, null).marginRight), o.removeChild(s), a.innerHTML = "", t
            }
        })
    }(), ee.swap = function (e, t, n, i) {
        var r, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        r = n.apply(e, i || []);
        for (o in t) e.style[o] = s[o];
        return r
    };
    var We = /^(none|table(?!-c[ea]).+)/,
        Ue = new RegExp("^(" + xe + ")(.*)$", "i"),
        Xe = new RegExp("^([+-])=(" + xe + ")", "i"),
        Ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qe = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Ye = ["Webkit", "O", "Moz", "ms"];
    ee.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = x(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = ee.camelCase(t),
                    c = e.style;
                return t = ee.cssProps[a] || (ee.cssProps[a] = A(c, a)), s = ee.cssHooks[t] || ee.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t] : (o = typeof n, "string" === o && (r = Xe.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(ee.css(e, t)), o = "number"), void(null != n && n === n && ("number" !== o || ee.cssNumber[a] || (n += "px"), Z.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (c[t] = "", c[t] = n))))
            }
        },
        css: function (e, t, n, i) {
            var r, o, s, a = ee.camelCase(t);
            return t = ee.cssProps[a] || (ee.cssProps[a] = A(e.style, a)), s = ee.cssHooks[t] || ee.cssHooks[a], s && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = x(e, t, i)), "normal" === r && t in Qe && (r = Qe[t]), "" === n || n ? (o = parseFloat(r), n === !0 || ee.isNumeric(o) ? o || 0 : r) : r
        }
    }), ee.each(["height", "width"], function (e, t) {
        ee.cssHooks[t] = {
            get: function (e, n, i) {
                return n ? 0 === e.offsetWidth && We.test(ee.css(e, "display")) ? ee.swap(e, Ve, function () {
                    return T(e, t, i)
                }) : T(e, t, i) : void 0
            },
            set: function (e, n, i) {
                var r = i && Be(e);
                return C(e, n, i ? k(e, t, i, "border-box" === ee.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), ee.cssHooks.marginRight = w(Z.reliableMarginRight, function (e, t) {
        return t ? ee.swap(e, {
            display: "inline-block"
        }, x, [e, "marginRight"]) : void 0
    }), ee.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        ee.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + we[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, He.test(e) || (ee.cssHooks[e + t].set = C)
    }), ee.fn.extend({
        css: function (e, t) {
            return me(this, function (e, t, n) {
                var i, r, o = {},
                    s = 0;
                if (ee.isArray(t)) {
                    for (i = Be(e), r = t.length; r > s; s++) o[t[s]] = ee.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? ee.style(e, t, n) : ee.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function () {
            return E(this, !0)
        },
        hide: function () {
            return E(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Ae(this) ? ee(this).show() : ee(this).hide()
            })
        }
    }), ee.Tween = S, S.prototype = {
        constructor: S,
        init: function (e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ee.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = S.propHooks[this.prop];
            return e && e.get ? e.get(this) : S.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = S.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ee.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : S.propHooks._default.set(this), this
        }
    }, S.prototype.init.prototype = S.prototype, S.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ee.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                ee.fx.step[e.prop] ? ee.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ee.cssProps[e.prop]] || ee.cssHooks[e.prop]) ? ee.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, S.propHooks.scrollTop = S.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ee.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ee.fx = S.prototype.init, ee.fx.step = {};
    var Ge, Ze, Je = /^(?:toggle|show|hide)$/,
        Ke = new RegExp("^(?:([+-])=|)(" + xe + ")([a-z%]*)$", "i"),
        et = /queueHooks$/,
        tt = [D],
        nt = {
            "*": [function (e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    r = Ke.exec(t),
                    o = r && r[3] || (ee.cssNumber[e] ? "" : "px"),
                    s = (ee.cssNumber[e] || "px" !== o && +i) && Ke.exec(ee.css(n.elem, e)),
                    a = 1,
                    c = 20;
                if (s && s[3] !== o) {
                    o = o || s[3], r = r || [], s = +i || 1;
                    do a = a || ".5", s /= a, ee.style(n.elem, e, s + o); while (a !== (a = n.cur() / i) && 1 !== a && --c)
                }
                return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
            }]
        };
    ee.Animation = ee.extend(q, {
            tweener: function (e, t) {
                ee.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, r = e.length; r > i; i++) n = e[i], nt[n] = nt[n] || [], nt[n].unshift(t)
            },
            prefilter: function (e, t) {
                t ? tt.unshift(e) : tt.push(e)
            }
        }), ee.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? ee.extend({}, e) : {
                complete: n || !n && t || ee.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ee.isFunction(t) && t
            };
            return i.duration = ee.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ee.fx.speeds ? ee.fx.speeds[i.duration] : ee.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                ee.isFunction(i.old) && i.old.call(this), i.queue && ee.dequeue(this, i.queue)
            }, i
        }, ee.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(Ae).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function (e, t, n, i) {
                var r = ee.isEmptyObject(e),
                    o = ee.speed(t, n, i),
                    s = function () {
                        var t = q(this, ee.extend({}, e), o);
                        (r || ve.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = ee.timers,
                        s = ve.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && et.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    (t || !n) && ee.dequeue(this, e)
                })
            },
            finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, n = ve.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = ee.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, ee.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ee.each(["toggle", "show", "hide"], function (e, t) {
            var n = ee.fn[t];
            ee.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, i, r)
            }
        }), ee.each({
            slideDown: F("show"),
            slideUp: F("hide"),
            slideToggle: F("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            ee.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), ee.timers = [], ee.fx.tick = function () {
            var e, t = 0,
                n = ee.timers;
            for (Ge = ee.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || ee.fx.stop(), Ge = void 0
        }, ee.fx.timer = function (e) {
            ee.timers.push(e), e() ? ee.fx.start() : ee.timers.pop()
        }, ee.fx.interval = 13, ee.fx.start = function () {
            Ze || (Ze = setInterval(ee.fx.tick, ee.fx.interval))
        }, ee.fx.stop = function () {
            clearInterval(Ze), Ze = null
        }, ee.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ee.fn.delay = function (e, t) {
            return e = ee.fx ? ee.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var i = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(i)
                }
            })
        },
        function () {
            var e = J.createElement("input"),
                t = J.createElement("select"),
                n = t.appendChild(J.createElement("option"));
            e.type = "checkbox", Z.checkOn = "" !== e.value, Z.optSelected = n.selected, t.disabled = !0, Z.optDisabled = !n.disabled, e = J.createElement("input"), e.value = "t", e.type = "radio", Z.radioValue = "t" === e.value
        }();
    var it, rt, ot = ee.expr.attrHandle;
    ee.fn.extend({
        attr: function (e, t) {
            return me(this, ee.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                ee.removeAttr(this, e)
            })
        }
    }), ee.extend({
        attr: function (e, t, n) {
            var i, r, o = e.nodeType;
            return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === ke ? ee.prop(e, t, n) : (1 === o && ee.isXMLDoc(e) || (t = t.toLowerCase(), i = ee.attrHooks[t] || (ee.expr.match.bool.test(t) ? rt : it)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = ee.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void ee.removeAttr(e, t)) : void 0
        },
        removeAttr: function (e, t) {
            var n, i, r = 0,
                o = t && t.match(pe);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) i = ee.propFix[n] || n, ee.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!Z.radioValue && "radio" === t && ee.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), rt = {
        set: function (e, t, n) {
            return t === !1 ? ee.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, ee.each(ee.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ot[t] || ee.find.attr;
        ot[t] = function (e, t, i) {
            var r, o;
            return i || (o = ot[t], ot[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, ot[t] = o), r
        }
    });
    var st = /^(?:input|select|textarea|button)$/i;
    ee.fn.extend({
        prop: function (e, t) {
            return me(this, ee.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[ee.propFix[e] || e]
            })
        }
    }), ee.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (e, t, n) {
            var i, r, o, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? (o = 1 !== s || !ee.isXMLDoc(e), o && (t = ee.propFix[t] || t, r = ee.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), Z.optSelected || (ee.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), ee.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ee.propFix[this.toLowerCase()] = this
    });
    var at = /[\t\r\n\f]/g;
    ee.fn.extend({
        addClass: function (e) {
            var t, n, i, r, o, s, a = "string" == typeof e && e,
                c = 0,
                u = this.length;
            if (ee.isFunction(e)) return this.each(function (t) {
                ee(this).addClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(pe) || []; u > c; c++)
                    if (n = this[c], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : " ")) {
                        for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        s = ee.trim(i), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function (e) {
            var t, n, i, r, o, s, a = 0 === arguments.length || "string" == typeof e && e,
                c = 0,
                u = this.length;
            if (ee.isFunction(e)) return this.each(function (t) {
                ee(this).removeClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(pe) || []; u > c; c++)
                    if (n = this[c], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : "")) {
                        for (o = 0; r = t[o++];)
                            for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                        s = e ? ee.trim(i) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(ee.isFunction(e) ? function (n) {
                ee(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function () {
                if ("string" === n)
                    for (var t, i = 0, r = ee(this), o = e.match(pe) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else(n === ke || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var ct = /\r/g;
    ee.fn.extend({
        val: function (e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = ee.isFunction(e), this.each(function (n) {
                var r;
                1 === this.nodeType && (r = i ? e.call(this, n, ee(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : ee.isArray(r) && (r = ee.map(r, function (e) {
                    return null == e ? "" : e + ""
                })), t = ee.valHooks[this.type] || ee.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = ee.valHooks[r.type] || ee.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(ct, "") : null == n ? "" : n)) : void 0
        }
    }), ee.extend({
        valHooks: {
            select: {
                get: function (e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, c = 0 > r ? a : o ? r : 0; a > c; c++)
                        if (n = i[c], !(!n.selected && c !== r || (Z.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ee.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ee(n).val(), o) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function (e, t) {
                    for (var n, i, r = e.options, o = ee.makeArray(t), s = r.length; s--;) i = r[s], (i.selected = ee.inArray(ee(i).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), ee.each(["radio", "checkbox"], function () {
        ee.valHooks[this] = {
            set: function (e, t) {
                return ee.isArray(t) ? e.checked = ee.inArray(ee(e).val(), t) >= 0 : void 0
            }
        }, Z.checkOn || (ee.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), ee.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        ee.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ee.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var ut = ee.now(),
        lt = /\?/;
    ee.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, ee.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (i) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && ee.error("Invalid XML: " + e), t
    };
    var dt, ft, pt = /#.*$/,
        ht = /([?&])_=[^&]*/,
        gt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        mt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        vt = /^(?:GET|HEAD)$/,
        yt = /^\/\//,
        bt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        _t = {},
        xt = {},
        wt = "*/".concat("*");
    try {
        ft = location.href
    } catch (At) {
        ft = J.createElement("a"), ft.href = "", ft = ft.href
    }
    dt = bt.exec(ft.toLowerCase()) || [], ee.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ft,
            type: "GET",
            isLocal: mt.test(dt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": wt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ee.parseJSON,
                "text xml": ee.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? O(O(e, ee.ajaxSettings), t) : O(ee.ajaxSettings, e)
        },
        ajaxPrefilter: z(_t),
        ajaxTransport: z(xt),
        ajax: function (e, t) {
            function n(e, t, n, s) {
                var c, l, v, y, _, w = t;
                2 !== b && (b = 2, a && clearTimeout(a), i = void 0, o = s || "", x.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, n && (y = R(d, x, n)), y = L(d, y, x, c), c ? (d.ifModified && (_ = x.getResponseHeader("Last-Modified"), _ && (ee.lastModified[r] = _), _ = x.getResponseHeader("etag"), _ && (ee.etag[r] = _)), 204 === e || "HEAD" === d.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = y.state, l = y.data, v = y.error, c = !v)) : (v = w, (e || !w) && (w = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || w) + "", c ? h.resolveWith(f, [l, w, x]) : h.rejectWith(f, [x, w, v]), x.statusCode(m), m = void 0, u && p.trigger(c ? "ajaxSuccess" : "ajaxError", [x, d, c ? l : v]), g.fireWith(f, [x, w]), u && (p.trigger("ajaxComplete", [x, d]), --ee.active || ee.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, r, o, s, a, c, u, l, d = ee.ajaxSetup({}, t),
                f = d.context || d,
                p = d.context && (f.nodeType || f.jquery) ? ee(f) : ee.event,
                h = ee.Deferred(),
                g = ee.Callbacks("once memory"),
                m = d.statusCode || {},
                v = {},
                y = {},
                b = 0,
                _ = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === b) {
                            if (!s)
                                for (s = {}; t = gt.exec(o);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? o : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return b || (d.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) m[t] = [m[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || _;
                        return i && i.abort(t), n(0, t), this
                    }
                };
            if (h.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || ft) + "").replace(pt, "").replace(yt, dt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = ee.trim(d.dataType || "*").toLowerCase().match(pe) || [""], null == d.crossDomain && (c = bt.exec(d.url.toLowerCase()), d.crossDomain = !(!c || c[1] === dt[1] && c[2] === dt[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (dt[3] || ("http:" === dt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ee.param(d.data, d.traditional)), P(_t, d, t, x), 2 === b) return x;
            u = d.global, u && 0 === ee.active++ && ee.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !vt.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (lt.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = ht.test(r) ? r.replace(ht, "$1_=" + ut++) : r + (lt.test(r) ? "&" : "?") + "_=" + ut++)), d.ifModified && (ee.lastModified[r] && x.setRequestHeader("If-Modified-Since", ee.lastModified[r]), ee.etag[r] && x.setRequestHeader("If-None-Match", ee.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + wt + "; q=0.01" : "") : d.accepts["*"]);
            for (l in d.headers) x.setRequestHeader(l, d.headers[l]);
            if (d.beforeSend && (d.beforeSend.call(f, x, d) === !1 || 2 === b)) return x.abort();
            _ = "abort";
            for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[l](d[l]);
            if (i = P(xt, d, t, x)) {
                x.readyState = 1, u && p.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (a = setTimeout(function () {
                    x.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, i.send(v, n)
                } catch (w) {
                    if (!(2 > b)) throw w;
                    n(-1, w)
                }
            } else n(-1, "No Transport");
            return x
        },
        getJSON: function (e, t, n) {
            return ee.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return ee.get(e, void 0, t, "script")
        }
    }), ee.each(["get", "post"], function (e, t) {
        ee[t] = function (e, n, i, r) {
            return ee.isFunction(n) && (r = r || i, i = n, n = void 0), ee.ajax({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            })
        }
    }), ee.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        ee.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), ee._evalUrl = function (e) {
        return ee.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ee.fn.extend({
        wrapAll: function (e) {
            var t;
            return ee.isFunction(e) ? this.each(function (t) {
                ee(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = ee(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function (e) {
            return this.each(ee.isFunction(e) ? function (t) {
                ee(this).wrapInner(e.call(this, t))
            } : function () {
                var t = ee(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = ee.isFunction(e);
            return this.each(function (n) {
                ee(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                ee.nodeName(this, "body") || ee(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ee.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, ee.expr.filters.visible = function (e) {
        return !ee.expr.filters.hidden(e)
    };
    var Ct = /%20/g,
        kt = /\[\]$/,
        Tt = /\r?\n/g,
        Et = /^(?:submit|button|image|reset|file)$/i,
        St = /^(?:input|select|textarea|keygen)/i;
    ee.param = function (e, t) {
        var n, i = [],
            r = function (e, t) {
                t = ee.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = ee.ajaxSettings && ee.ajaxSettings.traditional), ee.isArray(e) || e.jquery && !ee.isPlainObject(e)) ee.each(e, function () {
            r(this.name, this.value)
        });
        else
            for (n in e) I(n, e[n], t, r);
        return i.join("&").replace(Ct, "+")
    }, ee.fn.extend({
        serialize: function () {
            return ee.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = ee.prop(this, "elements");
                return e ? ee.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !ee(this).is(":disabled") && St.test(this.nodeName) && !Et.test(e) && (this.checked || !Ce.test(e))
            }).map(function (e, t) {
                var n = ee(this).val();
                return null == n ? null : ee.isArray(n) ? ee.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Tt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Tt, "\r\n")
                }
            }).get()
        }
    }), ee.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var jt = 0,
        Ft = {},
        Mt = {
            0: 200,
            1223: 204
        },
        Dt = ee.ajaxSettings.xhr();
    e.ActiveXObject && ee(e).on("unload", function () {
        for (var e in Ft) Ft[e]()
    }), Z.cors = !!Dt && "withCredentials" in Dt, Z.ajax = Dt = !!Dt, ee.ajaxTransport(function (e) {
        var t;
        return Z.cors || Dt && !e.crossDomain ? {
            send: function (n, i) {
                var r, o = e.xhr(),
                    s = ++jt;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (r in e.xhrFields) o[r] = e.xhrFields[r];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (r in n) o.setRequestHeader(r, n[r]);
                t = function (e) {
                    return function () {
                        t && (delete Ft[s], t = o.onload = o.onerror = null,
                            "abort" === e ? o.abort() : "error" === e ? i(o.status, o.statusText) : i(Mt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                                text: o.responseText
                            } : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), o.onerror = t("error"), t = Ft[s] = t("abort"), o.send(e.hasContent && e.data || null)
            },
            abort: function () {
                t && t()
            }
        } : void 0
    }), ee.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return ee.globalEval(e), e
            }
        }
    }), ee.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), ee.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, r) {
                    t = ee("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), J.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var Nt = [],
        qt = /(=)\?(?=&|$)|\?\?/;
    ee.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Nt.pop() || ee.expando + "_" + ut++;
            return this[e] = !0, e
        }
    }), ee.ajaxPrefilter("json jsonp", function (t, n, i) {
        var r, o, s, a = t.jsonp !== !1 && (qt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && qt.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = ee.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(qt, "$1" + r) : t.jsonp !== !1 && (t.url += (lt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
            return s || ee.error(r + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
            s = arguments
        }, i.always(function () {
            e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Nt.push(r)), s && ee.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), ee.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || J;
        var i = se.exec(e),
            r = !n && [];
        return i ? [t.createElement(i[1])] : (i = ee.buildFragment([e], t, r), r && r.length && ee(r).remove(), ee.merge([], i.childNodes))
    };
    var zt = ee.fn.load;
    ee.fn.load = function (e, t, n) {
        if ("string" != typeof e && zt) return zt.apply(this, arguments);
        var i, r, o, s = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a), e = e.slice(0, a)), ee.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && ee.ajax({
            url: e,
            type: r,
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, s.html(i ? ee("<div>").append(ee.parseHTML(e)).find(i) : e)
        }).complete(n && function (e, t) {
            s.each(n, o || [e.responseText, t, e])
        }), this
    }, ee.expr.filters.animated = function (e) {
        return ee.grep(ee.timers, function (t) {
            return e === t.elem
        }).length
    };
    var Pt = e.document.documentElement;
    ee.offset = {
        setOffset: function (e, t, n) {
            var i, r, o, s, a, c, u, l = ee.css(e, "position"),
                d = ee(e),
                f = {};
            "static" === l && (e.style.position = "relative"), a = d.offset(), o = ee.css(e, "top"), c = ee.css(e, "left"), u = ("absolute" === l || "fixed" === l) && (o + c).indexOf("auto") > -1, u ? (i = d.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(c) || 0), ee.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, ee.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                ee.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                o = i && i.ownerDocument;
            return o ? (t = o.documentElement, ee.contains(t, i) ? (typeof i.getBoundingClientRect !== ke && (r = i.getBoundingClientRect()), n = H(o), {
                top: r.top + n.pageYOffset - t.clientTop,
                left: r.left + n.pageXOffset - t.clientLeft
            }) : r) : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === ee.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ee.nodeName(e[0], "html") || (i = e.offset()), i.top += ee.css(e[0], "borderTopWidth", !0), i.left += ee.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - ee.css(n, "marginTop", !0),
                    left: t.left - i.left - ee.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || Pt; e && !ee.nodeName(e, "html") && "static" === ee.css(e, "position");) e = e.offsetParent;
                return e || Pt
            })
        }
    }), ee.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, n) {
        var i = "pageYOffset" === n;
        ee.fn[t] = function (r) {
            return me(this, function (t, r, o) {
                var s = H(t);
                return void 0 === o ? s ? s[n] : t[r] : void(s ? s.scrollTo(i ? e.pageXOffset : o, i ? o : e.pageYOffset) : t[r] = o)
            }, t, r, arguments.length, null)
        }
    }), ee.each(["top", "left"], function (e, t) {
        ee.cssHooks[t] = w(Z.pixelPosition, function (e, n) {
            return n ? (n = x(e, t), $e.test(n) ? ee(e).position()[t] + "px" : n) : void 0
        })
    }), ee.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        ee.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, i) {
            ee.fn[i] = function (i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || r === !0 ? "margin" : "border");
                return me(this, function (t, n, i) {
                    var r;
                    return ee.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? ee.css(t, n, s) : ee.style(t, n, i, s)
                }, t, o ? i : void 0, o, null)
            }
        })
    }), ee.fn.size = function () {
        return this.length
    }, ee.fn.andSelf = ee.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ee
    });
    var Ot = e.jQuery,
        Rt = e.$;
    return ee.noConflict = function (t) {
        return e.$ === ee && (e.$ = Rt), t && e.jQuery === ee && (e.jQuery = Ot), ee
    }, typeof t === ke && (e.jQuery = e.$ = ee), ee
}), window.Modernizr = function (e, t, n) {
        function i(e) {
            h.cssText = e
        }

        function r(e, t) {
            return typeof e === t
        }
        var o, s, a, c = "2.6.2",
            u = {},
            l = !0,
            d = t.documentElement,
            f = "modernizr",
            p = t.createElement(f),
            h = p.style,
            g = {}.toString,
            m = " -webkit- -moz- -o- -ms- ".split(" "),
            v = {
                svg: "http://www.w3.org/2000/svg"
            },
            y = {},
            b = [],
            _ = b.slice,
            x = function (e, n, i, r) {
                var o, s, a, c, u = t.createElement("div"),
                    l = t.body,
                    p = l || t.createElement("body");
                if (parseInt(i, 10))
                    for (; i--;) a = t.createElement("div"), a.id = r ? r[i] : f + (i + 1), u.appendChild(a);
                return o = ["&#173;", '<style id="s', f, '">', e, "</style>"].join(""), u.id = f, (l ? u : p).innerHTML += o, p.appendChild(u), l || (p.style.background = "", p.style.overflow = "hidden", c = d.style.overflow, d.style.overflow = "hidden", d.appendChild(p)), s = n(u, e), l ? u.parentNode.removeChild(u) : (p.parentNode.removeChild(p), d.style.overflow = c), !!s
            },
            w = function (t) {
                var n = e.matchMedia || e.msMatchMedia;
                if (n) return n(t).matches;
                var i;
                return x("@media " + t + " { #" + f + " { position: absolute; } }", function (t) {
                    i = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
                }), i
            },
            A = {}.hasOwnProperty;
        a = r(A, "undefined") || r(A.call, "undefined") ? function (e, t) {
            return t in e && r(e.constructor.prototype[t], "undefined")
        } : function (e, t) {
            return A.call(e, t)
        }, Function.prototype.bind || (Function.prototype.bind = function (e) {
            var t = this;
            if ("function" != typeof t) throw new TypeError;
            var n = _.call(arguments, 1),
                i = function () {
                    if (this instanceof i) {
                        var r = function () {};
                        r.prototype = t.prototype;
                        var o = new r,
                            s = t.apply(o, n.concat(_.call(arguments)));
                        return Object(s) === s ? s : o
                    }
                    return t.apply(e, n.concat(_.call(arguments)))
                };
            return i
        }), y.touch = function () {
            var n;
            return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : x(["@media (", m.join("touch-enabled),("), f, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (e) {
                n = 9 === e.offsetTop
            }), n
        }, y.svg = function () {
            return !!t.createElementNS && !!t.createElementNS(v.svg, "svg").createSVGRect
        }, y.inlinesvg = function () {
            var e = t.createElement("div");
            return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == v.svg
        }, y.svgclippaths = function () {
            return !!t.createElementNS && /SVGClipPath/.test(g.call(t.createElementNS(v.svg, "clipPath")))
        };
        for (var C in y) a(y, C) && (s = C.toLowerCase(), u[s] = y[C](), b.push((u[s] ? "" : "no-") + s));
        return u.addTest = function (e, t) {
                if ("object" == typeof e)
                    for (var i in e) a(e, i) && u.addTest(i, e[i]);
                else {
                    if (e = e.toLowerCase(), u[e] !== n) return u;
                    t = "function" == typeof t ? t() : t, "undefined" != typeof l && l && (d.className += " " + (t ? "" : "no-") + e), u[e] = t
                }
                return u
            }, i(""), p = o = null,
            function (e, t) {
                function n(e, t) {
                    var n = e.createElement("p"),
                        i = e.getElementsByTagName("head")[0] || e.documentElement;
                    return n.innerHTML = "x<style>" + t + "</style>", i.insertBefore(n.lastChild, i.firstChild)
                }

                function i() {
                    var e = v.elements;
                    return "string" == typeof e ? e.split(" ") : e
                }

                function r(e) {
                    var t = m[e[h]];
                    return t || (t = {}, g++, e[h] = g, m[g] = t), t
                }

                function o(e, n, i) {
                    if (n || (n = t), l) return n.createElement(e);
                    i || (i = r(n));
                    var o;
                    return o = i.cache[e] ? i.cache[e].cloneNode() : p.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e), o.canHaveChildren && !f.test(e) ? i.frag.appendChild(o) : o
                }

                function s(e, n) {
                    if (e || (e = t), l) return e.createDocumentFragment();
                    n = n || r(e);
                    for (var o = n.frag.cloneNode(), s = 0, a = i(), c = a.length; c > s; s++) o.createElement(a[s]);
                    return o
                }

                function a(e, t) {
                    t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                        return v.shivMethods ? o(n, e, t) : t.createElem(n)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/\w+/g, function (e) {
                        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(v, t.frag)
                }

                function c(e) {
                    e || (e = t);
                    var i = r(e);
                    return v.shivCSS && !u && !i.hasCSS && (i.hasCSS = !!n(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), l || a(e, i), e
                }
                var u, l, d = e.html5 || {},
                    f = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    h = "_html5shiv",
                    g = 0,
                    m = {};
                ! function () {
                    try {
                        var e = t.createElement("a");
                        e.innerHTML = "<xyz></xyz>", u = "hidden" in e, l = 1 == e.childNodes.length || function () {
                            t.createElement("a");
                            var e = t.createDocumentFragment();
                            return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                        }()
                    } catch (n) {
                        u = !0, l = !0
                    }
                }();
                var v = {
                    elements: d.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: d.shivCSS !== !1,
                    supportsUnknownElements: l,
                    shivMethods: d.shivMethods !== !1,
                    type: "default",
                    shivDocument: c,
                    createElement: o,
                    createDocumentFragment: s
                };
                e.html5 = v, c(t)
            }(this, t), u._version = c, u._prefixes = m, u.mq = w, u.testStyles = x, d.className = d.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (l ? " js " + b.join(" ") : ""), u
    }(this, this.document),
    function (e, t, n) {
        function i(e) {
            return "[object Function]" == m.call(e)
        }

        function r(e) {
            return "string" == typeof e
        }

        function o() {}

        function s(e) {
            return !e || "loaded" == e || "complete" == e || "uninitialized" == e
        }

        function a() {
            var e = v.shift();
            y = 1, e ? e.t ? h(function () {
                ("c" == e.t ? f.injectCss : f.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
            }, 0) : (e(), a()) : y = 0
        }

        function c(e, n, i, r, o, c, u) {
            function l(t) {
                if (!p && s(d.readyState) && (b.r = p = 1, !y && a(), d.onload = d.onreadystatechange = null, t)) {
                    "img" != e && h(function () {
                        x.removeChild(d)
                    }, 50);
                    for (var i in T[n]) T[n].hasOwnProperty(i) && T[n][i].onload()
                }
            }
            var u = u || f.errorTimeout,
                d = t.createElement(e),
                p = 0,
                m = 0,
                b = {
                    t: i,
                    s: n,
                    e: o,
                    a: c,
                    x: u
                };
            1 === T[n] && (m = 1, T[n] = []), "object" == e ? d.data = n : (d.src = n, d.type = e), d.width = d.height = "0", d.onerror = d.onload = d.onreadystatechange = function () {
                l.call(this, m)
            }, v.splice(r, 0, b), "img" != e && (m || 2 === T[n] ? (x.insertBefore(d, _ ? null : g), h(l, u)) : T[n].push(d))
        }

        function u(e, t, n, i, o) {
            return y = 0, t = t || "j", r(e) ? c("c" == t ? A : w, e, t, this.i++, n, i, o) : (v.splice(this.i++, 0, e), 1 == v.length && a()), this
        }

        function l() {
            var e = f;
            return e.loader = {
                load: u,
                i: 0
            }, e
        }
        var d, f, p = t.documentElement,
            h = e.setTimeout,
            g = t.getElementsByTagName("script")[0],
            m = {}.toString,
            v = [],
            y = 0,
            b = "MozAppearance" in p.style,
            _ = b && !!t.createRange().compareNode,
            x = _ ? p : g.parentNode,
            p = e.opera && "[object Opera]" == m.call(e.opera),
            p = !!t.attachEvent && !p,
            w = b ? "object" : p ? "script" : "img",
            A = p ? "script" : w,
            C = Array.isArray || function (e) {
                return "[object Array]" == m.call(e)
            },
            k = [],
            T = {},
            E = {
                timeout: function (e, t) {
                    return t.length && (e.timeout = t[0]), e
                }
            };
        f = function (e) {
            function t(e) {
                var t, n, i, e = e.split("!"),
                    r = k.length,
                    o = e.pop(),
                    s = e.length,
                    o = {
                        url: o,
                        origUrl: o,
                        prefixes: e
                    };
                for (n = 0; s > n; n++) i = e[n].split("="), (t = E[i.shift()]) && (o = t(o, i));
                for (n = 0; r > n; n++) o = k[n](o);
                return o
            }

            function s(e, r, o, s, a) {
                var c = t(e),
                    u = c.autoCallback;
                c.url.split(".").pop().split("?").shift(), c.bypass || (r && (r = i(r) ? r : r[e] || r[s] || r[e.split("/").pop().split("?")[0]]), c.instead ? c.instead(e, r, o, s, a) : (T[c.url] ? c.noexec = !0 : T[c.url] = 1, o.load(c.url, c.forceCSS || !c.forceJS && "css" == c.url.split(".").pop().split("?").shift() ? "c" : n, c.noexec, c.attrs, c.timeout), (i(r) || i(u)) && o.load(function () {
                    l(), r && r(c.origUrl, a, s), u && u(c.origUrl, a, s), T[c.url] = 2
                })))
            }

            function a(e, t) {
                function n(e, n) {
                    if (e) {
                        if (r(e)) n || (d = function () {
                            var e = [].slice.call(arguments);
                            f.apply(this, e), p()
                        }), s(e, d, t, 0, u);
                        else if (Object(e) === e)
                            for (c in a = function () {
                                    var t, n = 0;
                                    for (t in e) e.hasOwnProperty(t) && n++;
                                    return n
                                }(), e) e.hasOwnProperty(c) && (!n && !--a && (i(d) ? d = function () {
                                var e = [].slice.call(arguments);
                                f.apply(this, e), p()
                            } : d[c] = function (e) {
                                return function () {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t), p()
                                }
                            }(f[c])), s(e[c], d, t, c, u))
                    } else !n && p()
                }
                var a, c, u = !!e.test,
                    l = e.load || e.both,
                    d = e.callback || o,
                    f = d,
                    p = e.complete || o;
                n(u ? e.yep : e.nope, !!l), l && n(l)
            }
            var c, u, d = this.yepnope.loader;
            if (r(e)) s(e, 0, d, 0);
            else if (C(e))
                for (c = 0; c < e.length; c++) u = e[c], r(u) ? s(u, 0, d, 0) : C(u) ? f(u) : Object(u) === u && a(u, d);
            else Object(e) === e && a(e, d)
        }, f.addPrefix = function (e, t) {
            E[e] = t
        }, f.addFilter = function (e) {
            k.push(e)
        }, f.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", d = function () {
            t.removeEventListener("DOMContentLoaded", d, 0), t.readyState = "complete"
        }, 0)), e.yepnope = l(), e.yepnope.executeStack = a, e.yepnope.injectJs = function (e, n, i, r, c, u) {
            var l, d, p = t.createElement("script"),
                r = r || f.errorTimeout;
            p.src = e;
            for (d in i) p.setAttribute(d, i[d]);
            n = u ? a : n || o, p.onreadystatechange = p.onload = function () {
                !l && s(p.readyState) && (l = 1, n(), p.onload = p.onreadystatechange = null)
            }, h(function () {
                l || (l = 1, n(1))
            }, r), c ? p.onload() : g.parentNode.insertBefore(p, g)
        }, e.yepnope.injectCss = function (e, n, i, r, s, c) {
            var u, r = t.createElement("link"),
                n = c ? a : n || o;
            r.href = e, r.rel = "stylesheet", r.type = "text/css";
            for (u in i) r.setAttribute(u, i[u]);
            s || (g.parentNode.insertBefore(r, g), h(n, 0))
        }
    }(this, document), Modernizr.load = function () {
        yepnope.apply(window, [].slice.call(arguments, 0))
    }, Modernizr.addTest("ie8compat", function () {
        return !window.addEventListener && document.documentMode && 7 === document.documentMode
    }),
    /*
     * Foundation Responsive Library
     * http://foundation.zurb.com
     * Copyright 2014, ZURB
     * Free to use under the MIT license.
     * http://www.opensource.org/licenses/mit-license.php
     */
    function (e, t, n, i) {
        "use strict";

        function r(e) {
            return ("string" == typeof e || e instanceof String) && (e = e.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")), e
        }
        var o = function (t) {
            for (var n = t.length, i = e("head"); n--;) 0 === i.has("." + t[n]).length && i.append('<meta class="' + t[n] + '" />')
        };
        o(["foundation-mq-small", "foundation-mq-medium", "foundation-mq-large", "foundation-mq-xlarge", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]), e(function () {
            "undefined" != typeof FastClick && "undefined" != typeof n.body && FastClick.attach(n.body)
        });
        var s = function (t, i) {
                if ("string" == typeof t) {
                    if (i) {
                        var r;
                        if (i.jquery) {
                            if (r = i[0], !r) return i
                        } else r = i;
                        return e(r.querySelectorAll(t))
                    }
                    return e(n.querySelectorAll(t))
                }
                return e(t, i)
            },
            a = function (e) {
                var t = [];
                return e || t.push("data"), this.namespace.length > 0 && t.push(this.namespace), t.push(this.name), t.join("-")
            },
            c = function (e) {
                for (var t = e.split("-"), n = t.length, i = []; n--;) 0 !== n ? i.push(t[n]) : this.namespace.length > 0 ? i.push(this.namespace, t[n]) : i.push(t[n]);
                return i.reverse().join("-")
            },
            u = function (t, n) {
                var i = this,
                    r = !s(this).data(this.attr_name(!0));
                return "string" == typeof t ? this[t].call(this, n) : void(s(this.scope).is("[" + this.attr_name() + "]") ? (s(this.scope).data(this.attr_name(!0) + "-init", e.extend({}, this.settings, n || t, this.data_options(s(this.scope)))), r && this.events(this.scope)) : s("[" + this.attr_name() + "]", this.scope).each(function () {
                    var r = !s(this).data(i.attr_name(!0) + "-init");
                    s(this).data(i.attr_name(!0) + "-init", e.extend({}, i.settings, n || t, i.data_options(s(this)))), r && i.events(this)
                }))
            },
            l = function (e, t) {
                function n() {
                    t(e[0])
                }

                function i() {
                    if (this.one("load", n), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                        var e = this.attr("src"),
                            t = e.match(/\?/) ? "&" : "?";
                        t += "random=" + (new Date).getTime(), this.attr("src", e + t)
                    }
                }
                return e.attr("src") ? void(e[0].complete || 4 === e[0].readyState ? n() : i.call(e)) : void n()
            };
        t.matchMedia = t.matchMedia || function (e) {
                var t, n = e.documentElement,
                    i = n.firstElementChild || n.firstChild,
                    r = e.createElement("body"),
                    o = e.createElement("div");
                return o.id = "mq-test-1", o.style.cssText = "position:absolute;top:-100em", r.style.background = "none", r.appendChild(o),
                    function (e) {
                        return o.innerHTML = '&shy;<style media="' + e + '"> #mq-test-1 { width: 42px; }</style>', n.insertBefore(r, i), t = 42 === o.offsetWidth, n.removeChild(r), {
                            matches: t,
                            media: e
                        }
                    }
            }(n),
            function (e) {
                function n() {
                    i && (s(n), c && jQuery.fx.tick())
                }
                for (var i, r = 0, o = ["webkit", "moz"], s = t.requestAnimationFrame, a = t.cancelAnimationFrame, c = "undefined" != typeof jQuery.fx; r < o.length && !s; r++) s = t[o[r] + "RequestAnimationFrame"], a = a || t[o[r] + "CancelAnimationFrame"] || t[o[r] + "CancelRequestAnimationFrame"];
                s ? (t.requestAnimationFrame = s, t.cancelAnimationFrame = a, c && (jQuery.fx.timer = function (e) {
                    e() && jQuery.timers.push(e) && !i && (i = !0, n())
                }, jQuery.fx.stop = function () {
                    i = !1
                })) : (t.requestAnimationFrame = function (e) {
                    var n = (new Date).getTime(),
                        i = Math.max(0, 16 - (n - r)),
                        o = t.setTimeout(function () {
                            e(n + i)
                        }, i);
                    return r = n + i, o
                }, t.cancelAnimationFrame = function (e) {
                    clearTimeout(e)
                })
            }(jQuery), t.Foundation = {
                name: "Foundation",
                version: "5.2.2",
                media_queries: {
                    small: s(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                    medium: s(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                    large: s(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                    xlarge: s(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                    xxlarge: s(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
                },
                stylesheet: e("<style></style>").appendTo("head")[0].sheet,
                global: {
                    namespace: i
                },
                init: function (e, t, n, i, r) {
                    var o = [e, n, i, r],
                        a = [];
                    if (this.rtl = /rtl/i.test(s("html").attr("dir")), this.scope = e || this.scope, this.set_namespace(), t && "string" == typeof t && !/reflow/i.test(t)) this.libs.hasOwnProperty(t) && a.push(this.init_lib(t, o));
                    else
                        for (var c in this.libs) a.push(this.init_lib(c, t));
                    return e
                },
                init_lib: function (t, n) {
                    return this.libs.hasOwnProperty(t) ? (this.patch(this.libs[t]), n && n.hasOwnProperty(t) ? ("undefined" != typeof this.libs[t].settings ? e.extend(!0, this.libs[t].settings, n[t]) : "undefined" != typeof this.libs[t].defaults && e.extend(!0, this.libs[t].defaults, n[t]), this.libs[t].init.apply(this.libs[t], [this.scope, n[t]])) : (n = n instanceof Array ? n : new Array(n), this.libs[t].init.apply(this.libs[t], n))) : function () {}
                },
                patch: function (e) {
                    e.scope = this.scope, e.namespace = this.global.namespace, e.rtl = this.rtl, e.data_options = this.utils.data_options, e.attr_name = a, e.add_namespace = c, e.bindings = u, e.S = this.utils.S
                },
                inherit: function (e, t) {
                    for (var n = t.split(" "), i = n.length; i--;) this.utils.hasOwnProperty(n[i]) && (e[n[i]] = this.utils[n[i]])
                },
                set_namespace: function () {
                    var t = this.global.namespace === i ? e(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
                    this.global.namespace = t === i || /false/i.test(t) ? "" : t
                },
                libs: {},
                utils: {
                    S: s,
                    throttle: function (e, t) {
                        var n = null;
                        return function () {
                            var i = this,
                                r = arguments;
                            null == n && (n = setTimeout(function () {
                                e.apply(i, r), n = null
                            }, t))
                        }
                    },
                    debounce: function (e, t, n) {
                        var i, r;
                        return function () {
                            var o = this,
                                s = arguments,
                                a = function () {
                                    i = null, n || (r = e.apply(o, s))
                                },
                                c = n && !i;
                            return clearTimeout(i), i = setTimeout(a, t), c && (r = e.apply(o, s)), r
                        }
                    },
                    data_options: function (t) {
                        function n(e) {
                            return !isNaN(e - 0) && null !== e && "" !== e && e !== !1 && e !== !0
                        }

                        function i(t) {
                            return "string" == typeof t ? e.trim(t) : t
                        }
                        var r, o, s, a = {},
                            c = function (e) {
                                var t = Foundation.global.namespace;
                                return t.length > 0 ? e.data(t + "-options") : e.data("options")
                            },
                            u = c(t);
                        if ("object" == typeof u) return u;
                        for (s = (u || ":").split(";"), r = s.length; r--;) o = s[r].split(":"), /true/i.test(o[1]) && (o[1] = !0), /false/i.test(o[1]) && (o[1] = !1), n(o[1]) && (-1 === o[1].indexOf(".") ? o[1] = parseInt(o[1], 10) : o[1] = parseFloat(o[1])), 2 === o.length && o[0].length > 0 && (a[i(o[0])] = i(o[1]));
                        return a
                    },
                    register_media: function (t, n) {
                        Foundation.media_queries[t] === i && (e("head").append('<meta class="' + n + '">'), Foundation.media_queries[t] = r(e("." + n).css("font-family")))
                    },
                    add_custom_rule: function (e, t) {
                        if (t === i && Foundation.stylesheet) Foundation.stylesheet.insertRule(e, Foundation.stylesheet.cssRules.length);
                        else {
                            var n = Foundation.media_queries[t];
                            n !== i && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[t] + "{ " + e + " }")
                        }
                    },
                    image_loaded: function (e, t) {
                        var n = this,
                            i = e.length;
                        0 === i && t(e), e.each(function () {
                            l(n.S(this), function () {
                                i -= 1, 0 === i && t(e)
                            })
                        })
                    },
                    random_str: function () {
                        return this.fidx || (this.fidx = 0), this.prefix = this.prefix || [this.name || "F", (+new Date).toString(36)].join("-"), this.prefix + (this.fidx++).toString(36)
                    }
                }
            }, e.fn.foundation = function () {
                var e = Array.prototype.slice.call(arguments, 0);
                return this.each(function () {
                    return Foundation.init.apply(Foundation, [this].concat(e)), this
                })
            }
    }(jQuery, this, this.document),
    function (e, t, n, i) {
        "use strict";
        Foundation.libs.slider = {
            name: "slider",
            version: "5.2.2",
            settings: {
                start: 0,
                end: 100,
                step: 1,
                initial: null,
                display_selector: "",
                on_change: function () {}
            },
            cache: {},
            init: function (e, t, n) {
                Foundation.inherit(this, "throttle"), this.bindings(t, n), this.reflow()
            },
            events: function () {
                var n = this;
                e(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider", "[" + n.attr_name() + "] .range-slider-handle", function (t) {
                    n.cache.active || (t.preventDefault(), n.set_active_slider(e(t.target)))
                }).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider", function (e) {
                    !n.cache.active || (e.preventDefault(), n.calculate_position(n.cache.active, e.pageX || e.originalEvent.clientX || e.originalEvent.touches[0].clientX || e.currentPoint.x))
                }).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider", function (e) {
                    n.remove_active_slider()
                }).on("change.fndtn.slider", function (e) {
                    n.settings.on_change()
                }), n.S(t).on("resize.fndtn.slider", n.throttle(function (e) {
                    n.reflow()
                }, 300))
            },
            set_active_slider: function (e) {
                this.cache.active = e
            },
            remove_active_slider: function () {
                this.cache.active = null
            },
            calculate_position: function (t, n) {
                var i = this,
                    r = e.extend({}, i.settings, i.data_options(t.parent())),
                    o = (e.data(t[0], "handle_w"), e.data(t[0], "handle_o"), e.data(t[0], "bar_w")),
                    s = e.data(t[0], "bar_o");
                requestAnimationFrame(function () {
                    var e;
                    e = Foundation.rtl ? i.limit_to((s + o - n) / o, 0, 1) : i.limit_to((n - s) / o, 0, 1);
                    var a = i.normalized_value(e, r.start, r.end, r.step);
                    i.set_ui(t, a)
                })
            },
            set_ui: function (t, n) {
                var i = e.extend({}, this.settings, this.data_options(t.parent())),
                    r = e.data(t[0], "handle_w"),
                    o = e.data(t[0], "bar_w"),
                    s = this.normalized_percentage(n, i.start, i.end),
                    a = s * (o - r) - 1,
                    c = 100 * s;
                Foundation.rtl && (a = -a), this.set_translate(t, a), t.siblings(".range-slider-active-segment").css("width", c + "%"), t.parent().attr(this.attr_name(), n), t.parent().trigger("change"), t.parent().children("input[type=hidden]").val(n), "" != i.input_id && e(i.display_selector).each(function () {
                    this.hasOwnProperty("value") ? e(this).val(n) : e(this).text(n)
                })
            },
            normalized_percentage: function (e, t, n) {
                return (e - t) / (n - t)
            },
            normalized_value: function (e, t, n, i) {
                var r = n - t,
                    i = i,
                    o = e * r,
                    s = (o - o % i) / i,
                    a = o % i,
                    c = a >= .5 * i ? i : 0;
                return s * i + c + t
            },
            set_translate: function (t, n, i) {
                i ? e(t).css("-webkit-transform", "translateY(" + n + "px)").css("-moz-transform", "translateY(" + n + "px)").css("-ms-transform", "translateY(" + n + "px)").css("-o-transform", "translateY(" + n + "px)").css("transform", "translateY(" + n + "px)") : e(t).css("-webkit-transform", "translateX(" + n + "px)").css("-moz-transform", "translateX(" + n + "px)").css("-ms-transform", "translateX(" + n + "px)").css("-o-transform", "translateX(" + n + "px)").css("transform", "translateX(" + n + "px)")
            },
            limit_to: function (e, t, n) {
                return Math.min(Math.max(e, t), n)
            },
            initialize_settings: function (t) {
                e.data(t, "bar", e(t).parent()), e.data(t, "bar_o", e(t).parent().offset().left), e.data(t, "bar_w", e(t).parent().outerWidth()), e.data(t, "handle_o", e(t).offset().left), e.data(t, "handle_w", e(t).outerWidth()), e.data(t, "settings", e.extend({}, this.settings, this.data_options(e(t).parent())))
            },
            set_initial_position: function (t) {
                var n = e.data(t.children(".range-slider-handle")[0], "settings"),
                    i = n.initial ? n.initial : Math.floor(.5 * (n.end - n.start) / n.step) * n.step + n.start,
                    r = t.children(".range-slider-handle");
                this.set_ui(r, i)
            },
            set_value: function (t) {
                var n = this;
                e("[" + n.attr_name() + "]", this.scope).each(function () {
                    e(this).attr(n.attr_name(), t)
                }), !e(this.scope).attr(n.attr_name()) || e(this.scope).attr(n.attr_name(), t), n.reflow()
            },
            reflow: function () {
                var t = this;
                t.S("[" + this.attr_name() + "]").each(function () {
                    var n = e(this).children(".range-slider-handle")[0],
                        i = e(this).attr(t.attr_name());
                    t.initialize_settings(n), i ? t.set_ui(e(n), parseFloat(i)) : t.set_initial_position(e(this))
                })
            }
        }
    }(jQuery, this, this.document),
    function (e, t, n, i) {
        "use strict";
        var r = r || !1;
        Foundation.libs.joyride = {
            name: "joyride",
            version: "5.2.2",
            defaults: {
                expose: !1,
                modal: !0,
                tip_location: "bottom",
                nub_position: "auto",
                scroll_speed: 1500,
                scroll_animation: "linear",
                timer: 0,
                start_timer_on_click: !0,
                start_offset: 0,
                next_button: !0,
                tip_animation: "fade",
                pause_after: [],
                exposed: [],
                tip_animation_fade_speed: 300,
                cookie_monster: !1,
                cookie_name: "joyride",
                cookie_domain: !1,
                cookie_expires: 365,
                tip_container: "body",
                abort_on_close: !0,
                tip_location_patterns: {
                    top: ["bottom"],
                    bottom: [],
                    left: ["right", "top", "bottom"],
                    right: ["left", "top", "bottom"]
                },
                post_ride_callback: function () {},
                post_step_callback: function () {},
                pre_step_callback: function () {},
                pre_ride_callback: function () {},
                post_expose_callback: function () {},
                template: {
                    link: '<a href="#close" class="joyride-close-tip">&times;</a>',
                    timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
                    tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
                    wrapper: '<div class="joyride-content-wrapper"></div>',
                    button: '<a href="#" class="small button joyride-next-tip"></a>',
                    modal: '<div class="joyride-modal-bg"></div>',
                    expose: '<div class="joyride-expose-wrapper"></div>',
                    expose_cover: '<div class="joyride-expose-cover"></div>'
                },
                expose_add_class: ""
            },
            init: function (t, n, i) {
                Foundation.inherit(this, "throttle random_str"), this.settings = this.settings || e.extend({}, this.defaults, i || n), this.bindings(n, i)
            },
            events: function () {
                var n = this;
                e(this.scope).off(".joyride").on("click.fndtn.joyride", ".joyride-next-tip, .joyride-modal-bg", function (e) {
                    e.preventDefault(), this.settings.$li.next().length < 1 ? this.end() : this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(), this.startTimer()) : (this.hide(), this.show())
                }.bind(this)).on("click.fndtn.joyride", ".joyride-close-tip", function (e) {
                    e.preventDefault(), this.end(this.settings.abort_on_close)
                }.bind(this)), e(t).off(".joyride").on("resize.fndtn.joyride", n.throttle(function () {
                    if (e("[" + n.attr_name() + "]").length > 0 && n.settings.$next_tip) {
                        if (n.settings.exposed.length > 0) {
                            var t = e(n.settings.exposed);
                            t.each(function () {
                                var t = e(this);
                                n.un_expose(t), n.expose(t)
                            })
                        }
                        n.is_phone() ? n.pos_phone() : n.pos_default(!1, !0)
                    }
                }, 100))
            },
            start: function () {
                var t = this,
                    n = e("[" + this.attr_name() + "]", this.scope),
                    i = ["timer", "scrollSpeed", "startOffset", "tipAnimationFadeSpeed", "cookieExpires"],
                    r = i.length;
                !n.length > 0 || (this.settings.init || this.events(), this.settings = n.data(this.attr_name(!0) + "-init"), this.settings.$content_el = n, this.settings.$body = e(this.settings.tip_container), this.settings.body_offset = e(this.settings.tip_container).position(), this.settings.$tip_content = this.settings.$content_el.find("> li"), this.settings.paused = !1, this.settings.attempts = 0, "function" != typeof e.cookie && (this.settings.cookie_monster = !1), (!this.settings.cookie_monster || this.settings.cookie_monster && !e.cookie(this.settings.cookie_name)) && (this.settings.$tip_content.each(function (n) {
                    var o = e(this);
                    this.settings = e.extend({}, t.defaults, t.data_options(o));
                    for (var s = r; s--;) t.settings[i[s]] = parseInt(t.settings[i[s]], 10);
                    t.create({
                        $li: o,
                        index: n
                    })
                }), !this.settings.start_timer_on_click && this.settings.timer > 0 ? (this.show("init"), this.startTimer()) : this.show("init")))
            },
            resume: function () {
                this.set_li(), this.show()
            },
            tip_template: function (t) {
                var n, i;
                return t.tip_class = t.tip_class || "", n = e(this.settings.template.tip).addClass(t.tip_class), i = e.trim(e(t.li).html()) + this.button_text(t.button_text) + this.settings.template.link + this.timer_instance(t.index), n.append(e(this.settings.template.wrapper)), n.first().attr(this.add_namespace("data-index"), t.index), e(".joyride-content-wrapper", n).append(i), n[0]
            },
            timer_instance: function (t) {
                var n;
                return n = 0 === t && this.settings.start_timer_on_click && this.settings.timer > 0 || 0 === this.settings.timer ? "" : e(this.settings.template.timer)[0].outerHTML
            },
            button_text: function (t) {
                return this.settings.next_button ? (t = e.trim(t) || "Next", t = e(this.settings.template.button).append(t)[0].outerHTML) : t = "", t
            },
            create: function (t) {
                var n = t.$li.attr(this.add_namespace("data-button")) || t.$li.attr(this.add_namespace("data-text")),
                    i = t.$li.attr("class"),
                    r = e(this.tip_template({
                        tip_class: i,
                        index: t.index,
                        button_text: n,
                        li: t.$li
                    }));
                e(this.settings.tip_container).append(r)
            },
            show: function (t) {
                var n = null;
                this.settings.$li === i || -1 === e.inArray(this.settings.$li.index(), this.settings.pause_after) ? (this.settings.paused ? this.settings.paused = !1 : this.set_li(t), this.settings.attempts = 0, this.settings.$li.length && this.settings.$target.length > 0 ? (t && (this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.show_modal()), this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.settings.expose && this.expose(), this.settings.tip_settings = e.extend({}, this.settings, this.data_options(this.settings.$li)), this.settings.timer = parseInt(this.settings.timer, 10), this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location], /body/i.test(this.settings.$target.selector) || this.scroll_to(), this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0), n = this.settings.$next_tip.find(".joyride-timer-indicator"), /pop/i.test(this.settings.tip_animation) ? (n.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.show(), setTimeout(function () {
                    n.animate({
                        width: n.parent().width()
                    }, this.settings.timer, "linear")
                }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.show()) : /fade/i.test(this.settings.tip_animation) && (n.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(), setTimeout(function () {
                    n.animate({
                        width: n.parent().width()
                    }, this.settings.timer, "linear")
                }.bind(this), this.settings.tip_animation_fadeSpeed)) : this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)), this.settings.$current_tip = this.settings.$next_tip) : this.settings.$li && this.settings.$target.length < 1 ? this.show() : this.end()) : this.settings.paused = !0
            },
            is_phone: function () {
                return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
            },
            hide: function () {
                this.settings.modal && this.settings.expose && this.un_expose(), this.settings.modal || e(".joyride-modal-bg").hide(), this.settings.$current_tip.css("visibility", "hidden"), setTimeout(e.proxy(function () {
                    this.hide(), this.css("visibility", "visible")
                }, this.settings.$current_tip), 0), this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip)
            },
            set_li: function (e) {
                e ? (this.settings.$li = this.settings.$tip_content.eq(this.settings.start_offset), this.set_next_tip(), this.settings.$current_tip = this.settings.$next_tip) : (this.settings.$li = this.settings.$li.next(), this.set_next_tip()), this.set_target()
            },
            set_next_tip: function () {
                this.settings.$next_tip = e(".joyride-tip-guide").eq(this.settings.$li.index()), this.settings.$next_tip.data("closed", "")
            },
            set_target: function () {
                var t = this.settings.$li.attr(this.add_namespace("data-class")),
                    i = this.settings.$li.attr(this.add_namespace("data-id")),
                    r = function () {
                        return i ? e(n.getElementById(i)) : t ? e("." + t).first() : e("body")
                    };
                this.settings.$target = r()
            },
            scroll_to: function () {
                var n, i;
                n = e(t).height() / 2, i = Math.ceil(this.settings.$target.offset().top - n + this.settings.$next_tip.outerHeight()), 0 != i && e("html, body").animate({
                    scrollTop: i
                }, this.settings.scroll_speed, "swing")
            },
            paused: function () {
                return -1 === e.inArray(this.settings.$li.index() + 1, this.settings.pause_after)
            },
            restart: function () {
                this.hide(), this.settings.$li = i, this.show("init")
            },
            pos_default: function (n, i) {
                var r = (Math.ceil(e(t).height() / 2), this.settings.$next_tip.offset(), this.settings.$next_tip.find(".joyride-nub")),
                    o = Math.ceil(r.outerWidth() / 2),
                    s = Math.ceil(r.outerHeight() / 2),
                    a = n || !1;
                a && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), "undefined" == typeof i && (i = !1), /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(r) : (this.bottom() ? (this.rtl ? this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top + s + this.settings.$target.outerHeight(),
                    left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()
                }) : this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top + s + this.settings.$target.outerHeight(),
                    left: this.settings.$target.offset().left
                }), this.nub_position(r, this.settings.tip_settings.nub_position, "top")) : this.top() ? (this.rtl ? this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - s,
                    left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()
                }) : this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - s,
                    left: this.settings.$target.offset().left
                }), this.nub_position(r, this.settings.tip_settings.nub_position, "bottom")) : this.right() ? (this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top,
                    left: this.settings.$target.outerWidth() + this.settings.$target.offset().left + o
                }), this.nub_position(r, this.settings.tip_settings.nub_position, "left")) : this.left() && (this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top,
                    left: this.settings.$target.offset().left - this.settings.$next_tip.outerWidth() - o
                }), this.nub_position(r, this.settings.tip_settings.nub_position, "right")), !this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length && (r.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts], this.settings.attempts++, this.pos_default())), a && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
            },
            pos_phone: function (t) {
                var n = this.settings.$next_tip.outerHeight(),
                    i = (this.settings.$next_tip.offset(), this.settings.$target.outerHeight()),
                    r = e(".joyride-nub", this.settings.$next_tip),
                    o = Math.ceil(r.outerHeight() / 2),
                    s = t || !1;
                r.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), s && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(r) : this.top() ? (this.settings.$next_tip.offset({
                    top: this.settings.$target.offset().top - n - o
                }), r.addClass("bottom")) : (this.settings.$next_tip.offset({
                    top: this.settings.$target.offset().top + i + o
                }), r.addClass("top")), s && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
            },
            pos_modal: function (e) {
                this.center(), e.hide(), this.show_modal()
            },
            show_modal: function () {
                if (!this.settings.$next_tip.data("closed")) {
                    var t = e(".joyride-modal-bg");
                    t.length < 1 && e("body").append(this.settings.template.modal).show(), /pop/i.test(this.settings.tip_animation) ? t.show() : t.fadeIn(this.settings.tip_animation_fade_speed)
                }
            },
            expose: function () {
                var n, i, r, o, s, a = "expose-" + this.random_str(6);
                if (arguments.length > 0 && arguments[0] instanceof e) r = arguments[0];
                else {
                    if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
                    r = this.settings.$target
                }
                return r.length < 1 ? (t.console && console.error("element not valid", r), !1) : (n = e(this.settings.template.expose), this.settings.$body.append(n), n.css({
                    top: r.offset().top,
                    left: r.offset().left,
                    width: r.outerWidth(!0),
                    height: r.outerHeight(!0)
                }), i = e(this.settings.template.expose_cover), o = {
                    zIndex: r.css("z-index"),
                    position: r.css("position")
                }, s = null == r.attr("class") ? "" : r.attr("class"), r.css("z-index", parseInt(n.css("z-index")) + 1), "static" == o.position && r.css("position", "relative"), r.data("expose-css", o), r.data("orig-class", s), r.attr("class", s + " " + this.settings.expose_add_class), i.css({
                    top: r.offset().top,
                    left: r.offset().left,
                    width: r.outerWidth(!0),
                    height: r.outerHeight(!0)
                }), this.settings.modal && this.show_modal(), this.settings.$body.append(i), n.addClass(a), i.addClass(a), r.data("expose", a), this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, r), this.add_exposed(r), void 0)
            },
            un_expose: function () {
                var n, i, r, o, s, a = !1;
                if (arguments.length > 0 && arguments[0] instanceof e) i = arguments[0];
                else {
                    if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
                    i = this.settings.$target
                }
                return i.length < 1 ? (t.console && console.error("element not valid", i), !1) : (n = i.data("expose"), r = e("." + n), arguments.length > 1 && (a = arguments[1]), a === !0 ? e(".joyride-expose-wrapper,.joyride-expose-cover").remove() : r.remove(), o = i.data("expose-css"), "auto" == o.zIndex ? i.css("z-index", "") : i.css("z-index", o.zIndex), o.position != i.css("position") && ("static" == o.position ? i.css("position", "") : i.css("position", o.position)), s = i.data("orig-class"), i.attr("class", s), i.removeData("orig-classes"), i.removeData("expose"), i.removeData("expose-z-index"), this.remove_exposed(i), void 0)
            },
            add_exposed: function (t) {
                this.settings.exposed = this.settings.exposed || [], t instanceof e || "object" == typeof t ? this.settings.exposed.push(t[0]) : "string" == typeof t && this.settings.exposed.push(t)
            },
            remove_exposed: function (t) {
                var n, i;
                for (t instanceof e ? n = t[0] : "string" == typeof t && (n = t), this.settings.exposed = this.settings.exposed || [], i = this.settings.exposed.length; i--;)
                    if (this.settings.exposed[i] == n) return void this.settings.exposed.splice(i, 1)
            },
            center: function () {
                var n = e(t);
                return this.settings.$next_tip.css({
                    top: (n.height() - this.settings.$next_tip.outerHeight()) / 2 + n.scrollTop(),
                    left: (n.width() - this.settings.$next_tip.outerWidth()) / 2 + n.scrollLeft()
                }), !0
            },
            bottom: function () {
                return /bottom/i.test(this.settings.tip_settings.tip_location)
            },
            top: function () {
                return /top/i.test(this.settings.tip_settings.tip_location)
            },
            right: function () {
                return /right/i.test(this.settings.tip_settings.tip_location)
            },
            left: function () {
                return /left/i.test(this.settings.tip_settings.tip_location)
            },
            corners: function (n) {
                var i = e(t),
                    r = i.height() / 2,
                    o = Math.ceil(this.settings.$target.offset().top - r + this.settings.$next_tip.outerHeight()),
                    s = i.width() + i.scrollLeft(),
                    a = i.height() + o,
                    c = i.height() + i.scrollTop(),
                    u = i.scrollTop();
                return u > o && (u = 0 > o ? 0 : o), a > c && (c = a), [n.offset().top < u, s < n.offset().left + n.outerWidth(), c < n.offset().top + n.outerHeight(), i.scrollLeft() > n.offset().left]
            },
            visible: function (e) {
                for (var t = e.length; t--;)
                    if (e[t]) return !1;
                return !0
            },
            nub_position: function (e, t, n) {
                "auto" === t ? e.addClass(n) : e.addClass(t)
            },
            startTimer: function () {
                this.settings.$li.length ? this.settings.automate = setTimeout(function () {
                    this.hide(), this.show(), this.startTimer()
                }.bind(this), this.settings.timer) : clearTimeout(this.settings.automate)
            },
            end: function (t) {
                this.settings.cookie_monster && e.cookie(this.settings.cookie_name, "ridden", {
                    expires: this.settings.cookie_expires,
                    domain: this.settings.cookie_domain
                }), this.settings.timer > 0 && clearTimeout(this.settings.automate), this.settings.modal && this.settings.expose && this.un_expose(), this.settings.$next_tip.data("closed", !0), e(".joyride-modal-bg").hide(), this.settings.$current_tip.hide(), "undefined" == typeof t && (this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip), this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip)), e(".joyride-tip-guide").remove()
            },
            off: function () {
                e(this.scope).off(".joyride"), e(t).off(".joyride"), e(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"), e(".joyride-tip-guide, .joyride-modal-bg").remove(), clearTimeout(this.settings.automate), this.settings = {}
            },
            reflow: function () {}
        }
    }(jQuery, this, this.document),
    function (e, t, n, i) {
        "use strict";
        Foundation.libs.equalizer = {
            name: "equalizer",
            version: "5.2.2",
            settings: {
                use_tallest: !0,
                before_height_change: e.noop,
                after_height_change: e.noop
            },
            init: function (e, t, n) {
                Foundation.inherit(this, "image_loaded"), this.bindings(t, n), this.reflow()
            },
            events: function () {
                this.S(t).off(".equalizer").on("resize.fndtn.equalizer", function (e) {
                    this.reflow()
                }.bind(this))
            },
            equalize: function (t) {
                var n = !1,
                    i = t.find("[" + this.attr_name() + "-watch]:visible"),
                    r = i.first().offset().top,
                    o = t.data(this.attr_name(!0) + "-init");
                if (0 !== i.length && (o.before_height_change(), t.trigger("before-height-change"), i.height("inherit"), i.each(function () {
                        var t = e(this);
                        t.offset().top !== r && (n = !0)
                    }), !n)) {
                    var s = i.map(function () {
                        return e(this).outerHeight()
                    }).get();
                    if (o.use_tallest) {
                        var a = Math.max.apply(null, s);
                        i.css("height", a)
                    } else {
                        var c = Math.min.apply(null, s);
                        i.css("height", c)
                    }
                    o.after_height_change(), t.trigger("after-height-change")
                }
            },
            reflow: function () {
                var t = this;
                this.S("[" + this.attr_name() + "]", this.scope).each(function () {
                    var n = e(this);
                    t.image_loaded(t.S("img", this), function () {
                        t.equalize(n)
                    })
                })
            }
        }
    }(jQuery, this, this.document),
    function (e, t, n, i) {
        "use strict";
        Foundation.libs.dropdown = {
            name: "dropdown",
            version: "5.2.2",
            settings: {
                active_class: "open",
                align: "bottom",
                is_hover: !1,
                opened: function () {},
                closed: function () {}
            },
            init: function (e, t, n) {
                Foundation.inherit(this, "throttle"), this.bindings(t, n)
            },
            events: function (n) {
                var i = this,
                    r = i.S;
                r(this.scope).off(".dropdown").on("click.fndtn.dropdown", "[" + this.attr_name() + "]", function (t) {
                    var n = r(this).data(i.attr_name(!0) + "-init") || i.settings;
                    (!n.is_hover || Modernizr.touch) && (t.preventDefault(), i.toggle(e(this)))
                }).on("mouseenter.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function (e) {
                    var t = r(this);
                    if (clearTimeout(i.timeout), t.data(i.data_attr())) var n = r("#" + t.data(i.data_attr())),
                        o = t;
                    else {
                        var n = t;
                        o = r("[" + i.attr_name() + "='" + n.attr("id") + "']")
                    }
                    var s = o.data(i.attr_name(!0) + "-init") || i.settings;
                    r(e.target).data(i.data_attr()) && s.is_hover && i.closeall.call(i), s.is_hover && i.open.apply(i, [n, o])
                }).on("mouseleave.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function (e) {
                    var t = r(this);
                    i.timeout = setTimeout(function () {
                        if (t.data(i.data_attr())) {
                            var e = t.data(i.data_attr(!0) + "-init") || i.settings;
                            e.is_hover && i.close.call(i, r("#" + t.data(i.data_attr())))
                        } else {
                            var n = r("[" + i.attr_name() + '="' + r(this).attr("id") + '"]'),
                                e = n.data(i.attr_name(!0) + "-init") || i.settings;
                            e.is_hover && i.close.call(i, t)
                        }
                    }.bind(this), 150)
                }).on("click.fndtn.dropdown", function (t) {
                    var n = r(t.target).closest("[" + i.attr_name() + "-content]");
                    if (!r(t.target).data(i.data_attr()) && !r(t.target).parent().data(i.data_attr())) return !r(t.target).data("revealId") && n.length > 0 && (r(t.target).is("[" + i.attr_name() + "-content]") || e.contains(n.first()[0], t.target)) ? void t.stopPropagation() : void i.close.call(i, r("[" + i.attr_name() + "-content]"))
                }).on("opened.fndtn.dropdown", "[" + i.attr_name() + "-content]", function () {
                    i.settings.opened.call(this)
                }).on("closed.fndtn.dropdown", "[" + i.attr_name() + "-content]", function () {
                    i.settings.closed.call(this)
                }), r(t).off(".dropdown").on("resize.fndtn.dropdown", i.throttle(function () {
                    i.resize.call(i)
                }, 50)), this.resize()
            },
            close: function (e) {
                var t = this;
                e.each(function () {
                    t.S(this).hasClass(t.settings.active_class) && (t.S(this).css(Foundation.rtl ? "right" : "left", "-99999px").removeClass(t.settings.active_class).prev("[" + t.attr_name() + "]").removeClass(t.settings.active_class), t.S(this).trigger("closed", [e]))
                })
            },
            closeall: function () {
                var t = this;
                e.each(t.S("[" + this.attr_name() + "-content]"), function () {
                    t.close.call(t, t.S(this))
                })
            },
            open: function (e, t) {
                this.css(e.addClass(this.settings.active_class), t), e.prev("[" + this.attr_name() + "]").addClass(this.settings.active_class), e.trigger("opened", [e, t])
            },
            data_attr: function () {
                return this.namespace.length > 0 ? this.namespace + "-" + this.name : this.name
            },
            toggle: function (e) {
                var t = this.S("#" + e.data(this.data_attr()));
                0 !== t.length && (this.close.call(this, this.S("[" + this.attr_name() + "-content]").not(t)), t.hasClass(this.settings.active_class) ? this.close.call(this, t) : (this.close.call(this, this.S("[" + this.attr_name() + "-content]")), this.open.call(this, t, e)))
            },
            resize: function () {
                var e = this.S("[" + this.attr_name() + "-content].open"),
                    t = this.S("[" + this.attr_name() + "='" + e.attr("id") + "']");
                e.length && t.length && this.css(e, t)
            },
            css: function (e, t) {
                if (this.clear_idx(), this.small()) {
                    var n = this.dirs.bottom.call(e, t);
                    e.attr("style", "").removeClass("drop-left drop-right drop-top").css({
                        position: "absolute",
                        width: "95%",
                        "max-width": "none",
                        top: n.top
                    }), e.css(Foundation.rtl ? "right" : "left", "2.5%")
                } else {
                    var i = t.data(this.attr_name(!0) + "-init") || this.settings;
                    this.style(e, t, i)
                }
                return e
            },
            style: function (t, n, i) {
                var r = e.extend({
                    position: "absolute"
                }, this.dirs[i.align].call(t, n, i));
                t.attr("style", "").css(r)
            },
            dirs: {
                _base: function (e) {
                    var t = this.offsetParent(),
                        n = t.offset(),
                        i = e.offset();
                    return i.top -= n.top, i.left -= n.left, i
                },
                top: function (e, t) {
                    var n = Foundation.libs.dropdown,
                        i = n.dirs._base.call(this, e),
                        r = e.outerWidth() / 2 - 8;
                    return this.addClass("drop-top"), (e.outerWidth() < this.outerWidth() || n.small()) && n.adjust_pip(r, i), Foundation.rtl ? {
                        left: i.left - this.outerWidth() + e.outerWidth(),
                        top: i.top - this.outerHeight()
                    } : {
                        left: i.left,
                        top: i.top - this.outerHeight()
                    }
                },
                bottom: function (e, t) {
                    var n = Foundation.libs.dropdown,
                        i = n.dirs._base.call(this, e),
                        r = e.outerWidth() / 2 - 8;
                    return (e.outerWidth() < this.outerWidth() || n.small()) && n.adjust_pip(r, i), n.rtl ? {
                        left: i.left - this.outerWidth() + e.outerWidth(),
                        top: i.top + e.outerHeight()
                    } : {
                        left: i.left,
                        top: i.top + e.outerHeight()
                    }
                },
                left: function (e, t) {
                    var n = Foundation.libs.dropdown.dirs._base.call(this, e);
                    return this.addClass("drop-left"), {
                        left: n.left - this.outerWidth(),
                        top: n.top
                    }
                },
                right: function (e, t) {
                    var n = Foundation.libs.dropdown.dirs._base.call(this, e);
                    return this.addClass("drop-right"), {
                        left: n.left + e.outerWidth(),
                        top: n.top
                    }
                }
            },
            adjust_pip: function (e, t) {
                var n = Foundation.stylesheet;
                this.small() && (e += t.left - 8), this.rule_idx = n.cssRules.length;
                var i = ".f-dropdown.open:before",
                    r = ".f-dropdown.open:after",
                    o = "left: " + e + "px;",
                    s = "left: " + (e - 1) + "px;";
                n.insertRule ? (n.insertRule([i, "{", o, "}"].join(" "), this.rule_idx), n.insertRule([r, "{", s, "}"].join(" "), this.rule_idx + 1)) : (n.addRule(i, o, this.rule_idx), n.addRule(r, s, this.rule_idx + 1))
            },
            clear_idx: function () {
                var e = Foundation.stylesheet;
                this.rule_idx && (e.deleteRule(this.rule_idx), e.deleteRule(this.rule_idx), delete this.rule_idx)
            },
            small: function () {
                return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
            },
            off: function () {
                this.S(this.scope).off(".fndtn.dropdown"), this.S("html, body").off(".fndtn.dropdown"), this.S(t).off(".fndtn.dropdown"), this.S("[data-dropdown-content]").off(".fndtn.dropdown")
            },
            reflow: function () {}
        }
    }(jQuery, this, this.document),
    function (e, t, n, i) {
        "use strict";
        Foundation.libs.clearing = {
            name: "clearing",
            version: "5.2.2",
            settings: {
                templates: {
                    viewing: '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>'
                },
                close_selectors: ".clearing-close",
                touch_label: "",
                init: !1,
                locked: !1
            },
            init: function (e, t, n) {
                var i = this;
                Foundation.inherit(this, "throttle image_loaded"), this.bindings(t, n), i.S(this.scope).is("[" + this.attr_name() + "]") ? this.assemble(i.S("li", this.scope)) : i.S("[" + this.attr_name() + "]", this.scope).each(function () {
                    i.assemble(i.S("li", this))
                })
            },
            events: function (i) {
                var r = this,
                    o = r.S;
                e(".scroll-container").length > 0 && (this.scope = e(".scroll-container")), o(this.scope).off(".clearing").on("click.fndtn.clearing", "ul[" + this.attr_name() + "] li", function (e, t, n) {
                    var t = t || o(this),
                        n = n || t,
                        i = t.next("li"),
                        s = t.closest("[" + r.attr_name() + "]").data(r.attr_name(!0) + "-init"),
                        a = o(e.target);
                    e.preventDefault(), s || (r.init(), s = t.closest("[" + r.attr_name() + "]").data(r.attr_name(!0) + "-init")), n.hasClass("visible") && t[0] === n[0] && i.length > 0 && r.is_open(t) && (n = i, a = o("img", n)), r.open(a, t, n), r.update_paddles(n)
                }).on("click.fndtn.clearing", ".clearing-main-next", function (e) {
                    r.nav(e, "next")
                }).on("click.fndtn.clearing", ".clearing-main-prev", function (e) {
                    r.nav(e, "prev")
                }).on("click.fndtn.clearing", this.settings.close_selectors, function (e) {
                    Foundation.libs.clearing.close(e, this)
                }), e(n).on("keydown.fndtn.clearing", function (e) {
                    r.keydown(e)
                }), o(t).off(".clearing").on("resize.fndtn.clearing", function () {
                    r.resize()
                }), this.swipe_events(i)
            },
            swipe_events: function (e) {
                var t = this,
                    n = t.S;
                n(this.scope).on("touchstart.fndtn.clearing", ".visible-img", function (e) {
                    e.touches || (e = e.originalEvent);
                    var t = {
                        start_page_x: e.touches[0].pageX,
                        start_page_y: e.touches[0].pageY,
                        start_time: (new Date).getTime(),
                        delta_x: 0,
                        is_scrolling: i
                    };
                    n(this).data("swipe-transition", t), e.stopPropagation()
                }).on("touchmove.fndtn.clearing", ".visible-img", function (e) {
                    if (e.touches || (e = e.originalEvent), !(e.touches.length > 1 || e.scale && 1 !== e.scale)) {
                        var i = n(this).data("swipe-transition");
                        if ("undefined" == typeof i && (i = {}), i.delta_x = e.touches[0].pageX - i.start_page_x, "undefined" == typeof i.is_scrolling && (i.is_scrolling = !!(i.is_scrolling || Math.abs(i.delta_x) < Math.abs(e.touches[0].pageY - i.start_page_y))), !i.is_scrolling && !i.active) {
                            e.preventDefault();
                            var r = i.delta_x < 0 ? "next" : "prev";
                            i.active = !0, t.nav(e, r)
                        }
                    }
                }).on("touchend.fndtn.clearing", ".visible-img", function (e) {
                    n(this).data("swipe-transition", {}), e.stopPropagation()
                })
            },
            assemble: function (t) {
                var n = t.parent();
                if (!n.parent().hasClass("carousel")) {
                    n.after('<div id="foundationClearingHolder"></div>');
                    var i = n.detach(),
                        r = "";
                    if (null != i[0]) {
                        r = i[0].outerHTML;
                        var o = this.S("#foundationClearingHolder"),
                            s = n.data(this.attr_name(!0) + "-init"),
                            i = n.detach(),
                            a = {
                                grid: '<div class="carousel">' + r + "</div>",
                                viewing: s.templates.viewing
                            },
                            c = '<div class="clearing-assembled"><div>' + a.viewing + a.grid + "</div></div>",
                            u = this.settings.touch_label;
                        Modernizr.touch && (c = e(c).find(".clearing-touch-label").html(u).end()), o.after(c).remove()
                    }
                }
            },
            open: function (t, i, r) {
                function o() {
                    setTimeout(function () {
                        this.image_loaded(f, function () {
                            1 !== f.outerWidth() || h ? s.call(this, f) : o.call(this)
                        }.bind(this))
                    }.bind(this), 50)
                }

                function s(t) {
                    e(t);
                    t.css("visibility", "visible"), c.css("overflow", "hidden"), u.addClass("clearing-blackout"), l.addClass("clearing-container"), d.show(), this.fix_height(r).caption(a.S(".clearing-caption", d), a.S("img", r)).center_and_label(t, p).shift(i, r, function () {
                        r.siblings().removeClass("visible"), r.addClass("visible")
                    })
                }
                var a = this,
                    c = e(n.body),
                    u = r.closest(".clearing-assembled"),
                    l = a.S("div", u).first(),
                    d = a.S(".visible-img", l),
                    f = a.S("img", d).not(t),
                    p = a.S(".clearing-touch-label", l),
                    h = !1;
                f.error(function () {
                    h = !0
                }), this.locked() || (f.attr("src", this.load(t)).css("visibility", "hidden"), o.call(this))
            },
            close: function (t, i) {
                t.preventDefault();
                var r, o, s = function (e) {
                        return /blackout/.test(e.selector) ? e : e.closest(".clearing-blackout")
                    }(e(i)),
                    a = e(n.body);
                return i === t.target && s && (a.css("overflow", ""), r = e("div", s).first(), o = e(".visible-img", r), this.settings.prev_index = 0, e("ul[" + this.attr_name() + "]", s).attr("style", "").closest(".clearing-blackout").removeClass("clearing-blackout"), r.removeClass("clearing-container"), o.hide()), !1
            },
            is_open: function (e) {
                return e.parent().prop("style").length > 0
            },
            keydown: function (t) {
                var n = e(".clearing-blackout ul[" + this.attr_name() + "]"),
                    i = this.rtl ? 37 : 39,
                    r = this.rtl ? 39 : 37,
                    o = 27;
                t.which === i && this.go(n, "next"), t.which === r && this.go(n, "prev"), t.which === o && this.S("a.clearing-close").trigger("click")
            },
            nav: function (t, n) {
                var i = e("ul[" + this.attr_name() + "]", ".clearing-blackout");
                t.preventDefault(), this.go(i, n)
            },
            resize: function () {
                var t = e("img", ".clearing-blackout .visible-img"),
                    n = e(".clearing-touch-label", ".clearing-blackout");
                t.length && this.center_and_label(t, n)
            },
            fix_height: function (e) {
                var t = e.parent().children(),
                    n = this;
                return t.each(function () {
                    var e = n.S(this),
                        t = e.find("img");
                    e.height() > t.outerHeight() && e.addClass("fix-height")
                }).closest("ul").width(100 * t.length + "%"), this
            },
            update_paddles: function (e) {
                var t = e.closest(".carousel").siblings(".visible-img");
                e.next().length > 0 ? this.S(".clearing-main-next", t).removeClass("disabled") : this.S(".clearing-main-next", t).addClass("disabled"), e.prev().length > 0 ? this.S(".clearing-main-prev", t).removeClass("disabled") : this.S(".clearing-main-prev", t).addClass("disabled")
            },
            center_and_label: function (e, t) {
                return this.rtl ? (e.css({
                    marginRight: -(e.outerWidth() / 2),
                    marginTop: -(e.outerHeight() / 2),
                    left: "auto",
                    right: "50%"
                }), t.length > 0 && t.css({
                    marginRight: -(t.outerWidth() / 2),
                    marginTop: -(e.outerHeight() / 2) - t.outerHeight() - 10,
                    left: "auto",
                    right: "50%"
                })) : (e.css({
                    marginLeft: -(e.outerWidth() / 2),
                    marginTop: -(e.outerHeight() / 2)
                }), t.length > 0 && t.css({
                    marginLeft: -(t.outerWidth() / 2),
                    marginTop: -(e.outerHeight() / 2) - t.outerHeight() - 10
                })), this
            },
            load: function (e) {
                if ("A" === e[0].nodeName) var t = e.attr("href");
                else var t = e.parent().attr("href");
                return this.preload(e), t ? t : e.attr("src")
            },
            preload: function (e) {
                this.img(e.closest("li").next()).img(e.closest("li").prev())
            },
            img: function (e) {
                if (e.length) {
                    var t = new Image,
                        n = this.S("a", e);
                    n.length ? t.src = n.attr("href") : t.src = this.S("img", e).attr("src")
                }
                return this
            },
            caption: function (e, t) {
                var n = t.attr("data-caption");
                return n ? e.html(n).show() : e.text("").hide(), this
            },
            go: function (e, t) {
                var n = this.S(".visible", e),
                    i = n[t]();
                i.length && this.S("img", i).trigger("click", [n, i])
            },
            shift: function (e, t, n) {
                var i, r = t.parent(),
                    o = this.settings.prev_index || t.index(),
                    s = this.direction(r, e, t),
                    a = this.rtl ? "right" : "left",
                    c = parseInt(r.css("left"), 10),
                    u = t.outerWidth(),
                    l = {};
                t.index() === o || /skip/.test(s) ? /skip/.test(s) && (i = t.index() - this.settings.up_count, this.lock(), i > 0 ? (l[a] = -(i * u), r.animate(l, 300, this.unlock())) : (l[a] = 0, r.animate(l, 300, this.unlock()))) : /left/.test(s) ? (this.lock(), l[a] = c + u, r.animate(l, 300, this.unlock())) : /right/.test(s) && (this.lock(), l[a] = c - u, r.animate(l, 300, this.unlock())), n()
            },
            direction: function (e, t, n) {
                var i, r = this.S("li", e),
                    o = r.outerWidth() + r.outerWidth() / 4,
                    s = Math.floor(this.S(".clearing-container").outerWidth() / o) - 1,
                    a = r.index(n);
                return this.settings.up_count = s, i = this.adjacent(this.settings.prev_index, a) ? a > s && a > this.settings.prev_index ? "right" : a > s - 1 && a <= this.settings.prev_index ? "left" : !1 : "skip", this.settings.prev_index = a, i
            },
            adjacent: function (e, t) {
                for (var n = t + 1; n >= t - 1; n--)
                    if (n === e) return !0;
                return !1
            },
            lock: function () {
                this.settings.locked = !0
            },
            unlock: function () {
                this.settings.locked = !1
            },
            locked: function () {
                return this.settings.locked
            },
            off: function () {
                this.S(this.scope).off(".fndtn.clearing"), this.S(t).off(".fndtn.clearing")
            },
            reflow: function () {
                this.init()
            }
        }
    }(jQuery, this, this.document),
    function (e, t, n, i) {
        "use strict";
        var r = function () {},
            o = function (i, r) {
                if (i.hasClass(r.slides_container_class)) return this;
                var o, c, u, l, d, f = this,
                    p = i,
                    h = 0,
                    g = p.find("." + r.active_slide_class).length > 0;
                f.cache = {}, f.slides = function () {
                    return p.children(r.slide_selector)
                }, g || f.slides().first().addClass(r.active_slide_class), f.update_slide_number = function (t) {
                    r.slide_number && (c.find("span:first").text(parseInt(t) + 1), c.find("span:last").text(f.slides().length)), r.bullets && (u.children().removeClass(r.bullets_active_class), e(u.children().get(t)).addClass(r.bullets_active_class))
                }, f.update_active_link = function (t) {
                    var n = e('[data-orbit-link="' + f.slides().eq(t).attr("data-orbit-slide") + '"]');
                    n.siblings().removeClass(r.bullets_active_class), n.addClass(r.bullets_active_class)
                }, f.build_markup = function () {
                    p.wrap('<div class="' + r.container_class + '"></div>'), o = p.parent(), p.addClass(r.slides_container_class), p.addClass(r.animation), r.stack_on_small && o.addClass(r.stack_on_small_class), r.navigation_arrows && (o.append(e('<a href="#"><span></span></a>').addClass(r.prev_class)), o.append(e('<a href="#"><span></span></a>').addClass(r.next_class))), r.timer && (l = e("<div>").addClass(r.timer_container_class), l.append("<span>"), r.timer_show_progress_bar && l.append(e("<div>").addClass(r.timer_progress_class)), l.addClass(r.timer_paused_class), o.append(l)), r.slide_number && (c = e("<div>").addClass(r.slide_number_class), c.append("<span></span> " + r.slide_number_text + " <span></span>"), o.append(c)), r.bullets && (u = e("<ol>").addClass(r.bullets_container_class), o.append(u), u.wrap('<div class="orbit-bullets-container"></div>'), f.slides().each(function (t, n) {
                        var i = e("<li>").attr("data-orbit-slide", t);
                        u.append(i)
                    }))
                }, f._prepare_direction = function (t, n) {
                    var i = "next";
                    h >= t && (i = "prev"), "slide" === r.animation && setTimeout(function () {
                        p.removeClass("swipe-prev swipe-next"), "next" === i ? p.addClass("swipe-next") : "prev" === i && p.addClass("swipe-prev")
                    }, 0);
                    var o = f.slides();
                    if (t >= o.length) {
                        if (!r.circular) return !1;
                        t = 0
                    } else if (0 > t) {
                        if (!r.circular) return !1;
                        t = o.length - 1
                    }
                    var s = e(o.get(h)),
                        a = e(o.get(t));
                    return [i, s, a, t]
                }, f._goto = function (e, t) {
                    if (null === e) return !1;
                    if (f.cache.animating) return !1;
                    if (e === h) return !1;
                    "object" == typeof f.cache.timer && f.cache.timer.restart();
                    var n = f.slides();
                    f.cache.animating = !0;
                    var i = f._prepare_direction(e),
                        o = i[0],
                        s = i[1],
                        a = i[2],
                        e = i[3];
                    if (i === !1) return !1;
                    p.trigger("before-slide-change.fndtn.orbit"), r.before_slide_change(), h = e, s.css("transitionDuration", r.animation_speed + "ms"), a.css("transitionDuration", r.animation_speed + "ms");
                    var c = function () {
                        var i = function () {
                            t === !0 && f.cache.timer.restart(), f.update_slide_number(h), a.addClass(r.active_slide_class), f.update_active_link(e), p.trigger("after-slide-change.fndtn.orbit", [{
                                slide_number: h,
                                total_slides: n.length
                            }]), r.after_slide_change(h, n.length), setTimeout(function () {
                                f.cache.animating = !1
                            }, 100)
                        };
                        p.height() != a.height() && r.variable_height ? p.animate({
                            height: a.height()
                        }, 250, "linear", i) : i()
                    };
                    if (1 === n.length) return c(), !1;
                    var u = function () {
                        "next" === o && d.next(s, a, c), "prev" === o && d.prev(s, a, c)
                    };
                    a.height() > p.height() && r.variable_height ? p.animate({
                        height: a.height()
                    }, 250, "linear", u) : u()
                }, f.next = function (e) {
                    e.stopImmediatePropagation(), e.preventDefault(), f._prepare_direction(h + 1), setTimeout(function () {
                        f._goto(h + 1)
                    }, 100)
                }, f.prev = function (e) {
                    e.stopImmediatePropagation(), e.preventDefault(), f._prepare_direction(h - 1), setTimeout(function () {
                        f._goto(h - 1)
                    }, 100)
                }, f.link_custom = function (t) {
                    t.preventDefault();
                    var n = e(this).attr("data-orbit-link");
                    if ("string" == typeof n && "" != (n = e.trim(n))) {
                        var i = o.find("[data-orbit-slide=" + n + "]"); - 1 != i.index() && setTimeout(function () {
                            f._goto(i.index())
                        }, 100)
                    }
                }, f.link_bullet = function (t) {
                    var n = e(this).attr("data-orbit-slide");
                    if ("string" == typeof n && "" != (n = e.trim(n)))
                        if (isNaN(parseInt(n))) {
                            var i = o.find("[data-orbit-slide=" + n + "]"); - 1 != i.index() && setTimeout(function () {
                                f._goto(i.index() + 1)
                            }, 100)
                        } else setTimeout(function () {
                            f._goto(parseInt(n))
                        }, 100)
                }, f.timer_callback = function () {
                    f._goto(h + 1, !0)
                }, f.compute_dimensions = function () {
                    var t = e(f.slides().get(h)),
                        n = t.height();
                    r.variable_height || f.slides().each(function () {
                        e(this).height() > n && (n = e(this).height())
                    }), p.height(n)
                }, f.create_timer = function () {
                    var e = new s(o.find("." + r.timer_container_class), r, f.timer_callback);
                    return e
                }, f.stop_timer = function () {
                    "object" == typeof f.cache.timer && f.cache.timer.stop()
                }, f.toggle_timer = function () {
                    var e = o.find("." + r.timer_container_class);
                    e.hasClass(r.timer_paused_class) ? ("undefined" == typeof f.cache.timer && (f.cache.timer = f.create_timer()), f.cache.timer.start()) : "object" == typeof f.cache.timer && f.cache.timer.stop()
                }, f.init = function () {
                    if (f.build_markup(), r.timer && (f.cache.timer = f.create_timer(), Foundation.utils.image_loaded(this.slides().children("img"), f.cache.timer.start)), d = new a(r, p), g) {
                        var i = p.find("." + r.active_slide_class),
                            s = r.animation_speed;
                        r.animation_speed = 1, i.removeClass("active"), f._goto(i.index()), r.animation_speed = s
                    }
                    o.on("click", "." + r.next_class, f.next), o.on("click", "." + r.prev_class, f.prev), r.next_on_click && o.on("click", "[data-orbit-slide]", f.link_bullet), o.on("click", f.toggle_timer), r.swipe && p.on("touchstart.fndtn.orbit", function (e) {
                        f.cache.animating || (e.touches || (e = e.originalEvent), e.preventDefault(), e.stopPropagation(), f.cache.start_page_x = e.touches[0].pageX, f.cache.start_page_y = e.touches[0].pageY, f.cache.start_time = (new Date).getTime(), f.cache.delta_x = 0, f.cache.is_scrolling = null, f.cache.direction = null, f.stop_timer())
                    }).on("touchmove.fndtn.orbit", function (e) {
                        Math.abs(f.cache.delta_x) > 5 && (e.preventDefault(), e.stopPropagation()), f.cache.animating || requestAnimationFrame(function () {
                            if (e.touches || (e = e.originalEvent), !(e.touches.length > 1 || e.scale && 1 !== e.scale || (f.cache.delta_x = e.touches[0].pageX - f.cache.start_page_x, null === f.cache.is_scrolling && (f.cache.is_scrolling = !!(f.cache.is_scrolling || Math.abs(f.cache.delta_x) < Math.abs(e.touches[0].pageY - f.cache.start_page_y))), f.cache.is_scrolling))) {
                                var t = f.cache.delta_x < 0 ? h + 1 : h - 1;
                                if (f.cache.direction !== t) {
                                    var n = f._prepare_direction(t);
                                    f.cache.direction = t, f.cache.dir = n[0], f.cache.current = n[1], f.cache.next = n[2]
                                }
                                if ("slide" === r.animation) {
                                    var i, s;
                                    i = f.cache.delta_x / o.width() * 100, s = i >= 0 ? -(100 - i) : 100 + i, f.cache.current.css("transform", "translate3d(" + i + "%,0,0)"), f.cache.next.css("transform", "translate3d(" + s + "%,0,0)")
                                }
                            }
                        })
                    }).on("touchend.fndtn.orbit", function (e) {
                        f.cache.animating || (e.preventDefault(), e.stopPropagation(), setTimeout(function () {
                            f._goto(f.cache.direction)
                        }, 50))
                    }), o.on("mouseenter.fndtn.orbit", function (e) {
                        r.timer && r.pause_on_hover && f.stop_timer()
                    }).on("mouseleave.fndtn.orbit", function (e) {
                        r.timer && r.resume_on_mouseout && f.cache.timer.start()
                    }), e(n).on("click", "[data-orbit-link]", f.link_custom), e(t).on("load resize", f.compute_dimensions);
                    var c = this.slides().find("img");
                    Foundation.utils.image_loaded(c, f.compute_dimensions), Foundation.utils.image_loaded(c, function () {
                        o.prev("." + r.preloader_class).css("display", "none"), f.update_slide_number(h), f.update_active_link(h), p.trigger("ready.fndtn.orbit")
                    })
                }, f.init()
            },
            s = function (e, t, n) {
                var i, r, o = this,
                    s = t.timer_speed,
                    a = e.find("." + t.timer_progress_class),
                    c = a && "none" != a.css("display"),
                    u = -1;
                this.update_progress = function (e) {
                    var t = a.clone();
                    t.attr("style", ""), t.css("width", e + "%"), a.replaceWith(t), a = t
                }, this.restart = function () {
                    clearTimeout(r), e.addClass(t.timer_paused_class), u = -1, c && o.update_progress(0), o.start()
                }, this.start = function () {
                    return e.hasClass(t.timer_paused_class) ? (u = -1 === u ? s : u, e.removeClass(t.timer_paused_class), c && (i = (new Date).getTime(), a.animate({
                        width: "100%"
                    }, u, "linear")), r = setTimeout(function () {
                        o.restart(), n()
                    }, u), e.trigger("timer-started.fndtn.orbit"), void 0) : !0
                }, this.stop = function () {
                    if (e.hasClass(t.timer_paused_class)) return !0;
                    if (clearTimeout(r), e.addClass(t.timer_paused_class), c) {
                        var n = (new Date).getTime();
                        u -= n - i;
                        var a = 100 - u / s * 100;
                        o.update_progress(a)
                    }
                    e.trigger("timer-stopped.fndtn.orbit")
                }
            },
            a = function (e, t) {
                var n = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend";
                this.next = function (i, r, o) {
                    Modernizr.csstransitions ? r.on(n, function (e) {
                        r.unbind(n), i.removeClass("active animate-out"), r.removeClass("animate-in"), t.children().css({
                            transform: "",
                            "-ms-transform": "",
                            "-webkit-transition-duration": "",
                            "-moz-transition-duration": "",
                            "-o-transition-duration": "",
                            "transition-duration": ""
                        }), o()
                    }) : setTimeout(function () {
                        i.removeClass("active animate-out"), r.removeClass("animate-in"), t.children().css({
                            transform: "",
                            "-ms-transform": "",
                            "-webkit-transition-duration": "",
                            "-moz-transition-duration": "",
                            "-o-transition-duration": "",
                            "transition-duration": ""
                        }), o()
                    }, e.animation_speed), t.children().css({
                        transform: "",
                        "-ms-transform": "",
                        "-webkit-transition-duration": "",
                        "-moz-transition-duration": "",
                        "-o-transition-duration": "",
                        "transition-duration": ""
                    }), i.addClass("animate-out"), r.addClass("animate-in")
                }, this.prev = function (i, r, o) {
                    Modernizr.csstransitions ? r.on(n, function (e) {
                        r.unbind(n), i.removeClass("active animate-out"), r.removeClass("animate-in"), t.children().css({
                            transform: "",
                            "-ms-transform": "",
                            "-webkit-transition-duration": "",
                            "-moz-transition-duration": "",
                            "-o-transition-duration": "",
                            "transition-duration": ""
                        }), o()
                    }) : setTimeout(function () {
                        i.removeClass("active animate-out"), r.removeClass("animate-in"), t.children().css({
                            transform: "",
                            "-ms-transform": "",
                            "-webkit-transition-duration": "",
                            "-moz-transition-duration": "",
                            "-o-transition-duration": "",
                            "transition-duration": ""
                        }), o()
                    }, e.animation_speed), t.children().css({
                        transform: "",
                        "-ms-transform": "",
                        "-webkit-transition-duration": "",
                        "-moz-transition-duration": "",
                        "-o-transition-duration": "",
                        "transition-duration": ""
                    }), i.addClass("animate-out"), r.addClass("animate-in")
                }
            };
        Foundation.libs = Foundation.libs || {}, Foundation.libs.orbit = {
            name: "orbit",
            version: "5.2.2",
            settings: {
                animation: "slide",
                timer_speed: 1e4,
                pause_on_hover: !0,
                resume_on_mouseout: !1,
                next_on_click: !0,
                animation_speed: 500,
                stack_on_small: !1,
                navigation_arrows: !0,
                slide_number: !0,
                slide_number_text: "of",
                container_class: "orbit-container",
                stack_on_small_class: "orbit-stack-on-small",
                next_class: "orbit-next",
                prev_class: "orbit-prev",
                timer_container_class: "orbit-timer",
                timer_paused_class: "paused",
                timer_progress_class: "orbit-progress",
                timer_show_progress_bar: !0,
                slides_container_class: "orbit-slides-container",
                preloader_class: "preloader",
                slide_selector: "*",
                bullets_container_class: "orbit-bullets",
                bullets_active_class: "active",
                slide_number_class: "orbit-slide-number",
                caption_class: "orbit-caption",
                active_slide_class: "active",
                orbit_transition_class: "orbit-transitioning",
                bullets: !0,
                circular: !0,
                timer: !0,
                variable_height: !1,
                swipe: !0,
                before_slide_change: r,
                after_slide_change: r
            },
            init: function (e, t, n) {
                this.bindings(t, n)
            },
            events: function (e) {
                var t = new o(this.S(e), this.S(e).data("orbit-init"));
                this.S(e).data(self.name + "-instance", t)
            },
            reflow: function () {
                var e = this;
                if (e.S(e.scope).is("[data-orbit]")) {
                    var t = e.S(e.scope),
                        n = t.data(e.name + "-instance");
                    n.compute_dimensions()
                } else e.S("[data-orbit]", e.scope).each(function (t, n) {
                    var i = e.S(n),
                        r = (e.data_options(i), i.data(e.name + "-instance"));
                    r.compute_dimensions()
                })
            }
        }
    }(jQuery, this, this.document),
    function (e, t, n, i) {
        "use strict";
        Foundation.libs.offcanvas = {
            name: "offcanvas",
            version: "5.2.2",
            settings: {},
            init: function (e, t, n) {
                this.events()
            },
            events: function () {
                var e = this,
                    t = e.S;
                t(this.scope).off(".offcanvas").on("click.fndtn.offcanvas", ".left-off-canvas-toggle", function (t) {
                    e.click_toggle_class(t, "move-right")
                }).on("click.fndtn.offcanvas", ".left-off-canvas-menu a", function (e) {
                    t(".off-canvas-wrap").removeClass("move-right")
                }).on("click.fndtn.offcanvas", ".right-off-canvas-toggle", function (t) {
                    e.click_toggle_class(t, "move-left")
                }).on("click.fndtn.offcanvas", ".right-off-canvas-menu a", function (e) {
                    t(".off-canvas-wrap").removeClass("move-left")
                }).on("click.fndtn.offcanvas", ".exit-off-canvas", function (t) {
                    e.click_remove_class(t, "move-left"), e.click_remove_class(t, "move-right")
                })
            },
            click_toggle_class: function (e, t) {
                e.preventDefault(), this.S(e.target).closest(".off-canvas-wrap").toggleClass(t)
            },
            click_remove_class: function (e, t) {
                e.preventDefault(), this.S(".off-canvas-wrap").removeClass(t)
            },
            reflow: function () {}
        }
    }(jQuery, this, this.document),
    function (e, t, n, i) {
        "use strict";
        Foundation.libs.alert = {
            name: "alert",
            version: "5.2.2",
            settings: {
                callback: function () {}
            },
            init: function (e, t, n) {
                this.bindings(t, n)
            },
            events: function () {
                var n = this,
                    i = this.S;
                e(this.scope).off(".alert").on("click.fndtn.alert", "[" + this.attr_name() + "] a.close", function (e) {
                    var r = i(this).closest("[" + n.attr_name() + "]"),
                        o = r.data(n.attr_name(!0) + "-init") || n.settings;
                    e.preventDefault(), "transitionend" in t || "webkitTransitionEnd" in t || "oTransitionEnd" in t ? (r.addClass("alert-close"), r.on("transitionend webkitTransitionEnd oTransitionEnd", function (e) {
                        i(this).trigger("close").remove(), o.callback()
                    })) : r.fadeOut(300, function () {
                        i(this).trigger("close").remove(), o.callback()
                    })
                })
            },
            reflow: function () {}
        }
    }(jQuery, this, this.document),
    function (e, t, n, i) {
        "use strict";

        function r(e) {
            var t = /fade/i.test(e),
                n = /pop/i.test(e);
            return {
                animate: t || n,
                pop: n,
                fade: t
            }
        }
        Foundation.libs.reveal = {
            name: "reveal",
            version: "5.2.2",
            locked: !1,
            settings: {
                animation: "fadeAndPop",
                animation_speed: 250,
                close_on_background_click: !0,
                close_on_esc: !0,
                dismiss_modal_class: "close-reveal-modal",
                bg_class: "reveal-modal-bg",
                open: function () {},
                opened: function () {},
                close: function () {},
                closed: function () {},
                bg: e(".reveal-modal-bg"),
                css: {
                    open: {
                        opacity: 0,
                        visibility: "visible",
                        display: "block"
                    },
                    close: {
                        opacity: 1,
                        visibility: "hidden",
                        display: "none"
                    }
                }
            },
            init: function (t, n, i) {
                e.extend(!0, this.settings, n, i), this.bindings(n, i)
            },
            events: function (e) {
                var t = this,
                    i = t.S;
                return i(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]", function (e) {
                    if (e.preventDefault(), !t.locked) {
                        var n = i(this),
                            r = n.data(t.data_attr("reveal-ajax"));
                        if (t.locked = !0, "undefined" == typeof r) t.open.call(t, n);
                        else {
                            var o = r === !0 ? n.attr("href") : r;
                            t.open.call(t, n, {
                                url: o
                            })
                        }
                    }
                }), i(n).on("touchend.fndtn.reveal click.fndtn.reveal", this.close_targets(), function (e) {
                    if (e.preventDefault(), !t.locked) {
                        var n = i("[" + t.attr_name() + "].open").data(t.attr_name(!0) + "-init"),
                            r = i(e.target)[0] === i("." + n.bg_class)[0];
                        if (r) {
                            if (!n.close_on_background_click) return;
                            e.stopPropagation()
                        }
                        t.locked = !0, t.close.call(t, r ? i("[" + t.attr_name() + "].open") : i(this).closest("[" + t.attr_name() + "]"))
                    }
                }), i("[" + t.attr_name() + "]", this.scope).length > 0 ? i(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video) : i(this.scope).on("open.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + t.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + t.attr_name() + "]", this.close_video), !0
            },
            key_up_on: function (e) {
                var t = this;
                return t.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function (e) {
                    var n = t.S("[" + t.attr_name() + "].open"),
                        i = n.data(t.attr_name(!0) + "-init");
                    i && 27 === e.which && i.close_on_esc && !t.locked && t.close.call(t, n)
                }), !0
            },
            key_up_off: function (e) {
                return this.S("body").off("keyup.fndtn.reveal"), !0
            },
            open: function (t, n) {
                var i = this;
                if (t)
                    if ("undefined" != typeof t.selector) var r = i.S("#" + t.data(i.data_attr("reveal-id")));
                    else {
                        var r = i.S(this.scope);
                        n = t
                    } else var r = i.S(this.scope);
                var o = r.data(i.attr_name(!0) + "-init");
                if (!r.hasClass("open")) {
                    var s = i.S("[" + i.attr_name() + "].open");
                    if ("undefined" == typeof r.data("css-top") && r.data("css-top", parseInt(r.css("top"), 10)).data("offset", this.cache_offset(r)), this.key_up_on(r), r.trigger("open"), s.length < 1 && this.toggle_bg(r), "string" == typeof n && (n = {
                            url: n
                        }), "undefined" != typeof n && n.url) {
                        var a = "undefined" != typeof n.success ? n.success : null;
                        e.extend(n, {
                            success: function (t, n, c) {
                                e.isFunction(a) && a(t, n, c), r.html(t), i.S(r).foundation("section", "reflow"), s.length > 0 && i.hide(s, o.css.close), i.show(r, o.css.open)
                            }
                        }), e.ajax(n)
                    } else s.length > 0 && this.hide(s, o.css.close), this.show(r, o.css.open)
                }
            },
            close: function (e) {
                var e = e && e.length ? e : this.S(this.scope),
                    t = this.S("[" + this.attr_name() + "].open"),
                    n = e.data(this.attr_name(!0) + "-init");
                t.length > 0 && (this.locked = !0, this.key_up_off(e), e.trigger("close"), this.toggle_bg(e), this.hide(t, n.css.close, n))
            },
            close_targets: function () {
                var e = "." + this.settings.dismiss_modal_class;
                return this.settings.close_on_background_click ? e + ", ." + this.settings.bg_class : e
            },
            toggle_bg: function (t) {
                t.data(this.attr_name(!0));
                0 === this.S("." + this.settings.bg_class).length && (this.settings.bg = e("<div />", {
                    "class": this.settings.bg_class
                }).appendTo("body").hide()), this.settings.bg.filter(":visible").length > 0 ? this.hide(this.settings.bg) : this.show(this.settings.bg)
            },
            show: function (n, i) {
                if (i) {
                    var o = n.data(this.attr_name(!0) + "-init");
                    if (0 === n.parent("body").length) {
                        var s = n.wrap('<div style="display: none;" />').parent(),
                            a = this.settings.rootElement || "body";
                        n.on("closed.fndtn.reveal.wrapped", function () {
                            n.detach().appendTo(s), n.unwrap().unbind("closed.fndtn.reveal.wrapped")
                        }), n.detach().appendTo(a)
                    }
                    var c = r(o.animation);
                    if (c.animate || (this.locked = !1), c.pop) {
                        i.top = e(t).scrollTop() - n.data("offset") + "px";
                        var u = {
                            top: e(t).scrollTop() + n.data("css-top") + "px",
                            opacity: 1
                        };
                        return setTimeout(function () {
                            return n.css(i).animate(u, o.animation_speed, "linear", function () {
                                this.locked = !1, n.trigger("opened")
                            }.bind(this)).addClass("open")
                        }.bind(this), o.animation_speed / 2)
                    }
                    if (c.fade) {
                        i.top = e(t).scrollTop() + n.data("css-top") + "px";
                        var u = {
                            opacity: 1
                        };
                        return setTimeout(function () {
                            return n.css(i).animate(u, o.animation_speed, "linear", function () {
                                this.locked = !1, n.trigger("opened")
                            }.bind(this)).addClass("open")
                        }.bind(this), o.animation_speed / 2)
                    }
                    return n.css(i).show().css({
                        opacity: 1
                    }).addClass("open").trigger("opened")
                }
                var o = this.settings;
                return r(o.animation).fade ? n.fadeIn(o.animation_speed / 2) : (this.locked = !1, n.show())
            },
            hide: function (n, i) {
                if (i) {
                    var o = n.data(this.attr_name(!0) + "-init"),
                        s = r(o.animation);
                    if (s.animate || (this.locked = !1), s.pop) {
                        var a = {
                            top: -e(t).scrollTop() - n.data("offset") + "px",
                            opacity: 0
                        };
                        return setTimeout(function () {
                            return n.animate(a, o.animation_speed, "linear", function () {
                                this.locked = !1, n.css(i).trigger("closed")
                            }.bind(this)).removeClass("open")
                        }.bind(this), o.animation_speed / 2)
                    }
                    if (s.fade) {
                        var a = {
                            opacity: 0
                        };
                        return setTimeout(function () {
                            return n.animate(a, o.animation_speed, "linear", function () {
                                this.locked = !1, n.css(i).trigger("closed")
                            }.bind(this)).removeClass("open")
                        }.bind(this), o.animation_speed / 2)
                    }
                    return n.hide().css(i).removeClass("open").trigger("closed")
                }
                var o = this.settings;
                return r(o.animation).fade ? n.fadeOut(o.animation_speed / 2) : n.hide()
            },
            close_video: function (t) {
                var n = e(".flex-video", t.target),
                    i = e("iframe", n);
                i.length > 0 && (i.attr("data-src", i[0].src), i.attr("src", "about:blank"), n.hide())
            },
            open_video: function (t) {
                var n = e(".flex-video", t.target),
                    r = n.find("iframe");
                if (r.length > 0) {
                    var o = r.attr("data-src");
                    if ("string" == typeof o) r[0].src = r.attr("data-src");
                    else {
                        var s = r[0].src;
                        r[0].src = i, r[0].src = s
                    }
                    n.show()
                }
            },
            data_attr: function (e) {
                return this.namespace.length > 0 ? this.namespace + "-" + e : e
            },
            cache_offset: function (e) {
                var t = e.show().height() + parseInt(e.css("top"), 10);
                return e.hide(), t
            },
            off: function () {
                e(this.scope).off(".fndtn.reveal")
            },
            reflow: function () {}
        }
    }(jQuery, this, this.document),
    function (e, t, n, i) {
        "use strict";
        Foundation.libs.interchange = {
            name: "interchange",
            version: "5.2.2",
            cache: {},
            images_loaded: !1,
            nodes_loaded: !1,
            settings: {
                load_attr: "interchange",
                named_queries: {
                    "default": "only screen",
                    small: Foundation.media_queries.small,
                    medium: Foundation.media_queries.medium,
                    large: Foundation.media_queries.large,
                    xlarge: Foundation.media_queries.xlarge,
                    xxlarge: Foundation.media_queries.xxlarge,
                    landscape: "only screen and (orientation: landscape)",
                    portrait: "only screen and (orientation: portrait)",
                    retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"
                },
                directives: {
                    replace: function (t, n, i) {
                        if (/IMG/.test(t[0].nodeName)) {
                            var r = t[0].src;
                            if (new RegExp(n, "i").test(r)) return;
                            return t[0].src = n, i(t[0].src)
                        }
                        var o = t.data(this.data_attr + "-last-path");
                        if (o != n) return /\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(n) ? (e(t).css("background-image", "url(" + n + ")"), t.data("interchange-last-path", n), i(n)) : e.get(n, function (e) {
                            t.html(e), t.data(this.data_attr + "-last-path", n), i()
                        })
                    }
                }
            },
            init: function (t, n, i) {
                Foundation.inherit(this, "throttle random_str"), this.data_attr = this.set_data_attr(), e.extend(!0, this.settings, n, i), this.bindings(n, i), this.load("images"), this.load("nodes")
            },
            get_media_hash: function () {
                var e = "";
                for (var t in this.settings.named_queries) e += matchMedia(this.settings.named_queries[t]).matches.toString();
                return e
            },
            events: function () {
                var n, i = this;
                return e(t).off(".interchange").on("resize.fndtn.interchange", i.throttle(function () {
                    var e = i.get_media_hash();
                    e !== n && i.resize(), n = e
                }, 50)), this
            },
            resize: function () {
                var t = this.cache;
                if (!this.images_loaded || !this.nodes_loaded) return void setTimeout(e.proxy(this.resize, this), 50);
                for (var n in t)
                    if (t.hasOwnProperty(n)) {
                        var i = this.results(n, t[n]);
                        i && this.settings.directives[i.scenario[1]].call(this, i.el, i.scenario[0], function () {
                            if (arguments[0] instanceof Array) var e = arguments[0];
                            else var e = Array.prototype.slice.call(arguments, 0);
                            i.el.trigger(i.scenario[1], e)
                        })
                    }
            },
            results: function (e, t) {
                var n = t.length;
                if (n > 0)
                    for (var i = this.S("[" + this.add_namespace("data-uuid") + '="' + e + '"]'); n--;) {
                        var r, o = t[n][2];
                        if (r = this.settings.named_queries.hasOwnProperty(o) ? matchMedia(this.settings.named_queries[o]) : matchMedia(o), r.matches) return {
                            el: i,
                            scenario: t[n]
                        }
                    }
                return !1
            },
            load: function (e, t) {
                return ("undefined" == typeof this["cached_" + e] || t) && this["update_" + e](), this["cached_" + e]
            },
            update_images: function () {
                var e = this.S("img[" + this.data_attr + "]"),
                    t = e.length,
                    n = t,
                    i = 0,
                    r = this.data_attr;
                for (this.cache = {}, this.cached_images = [], this.images_loaded = 0 === t; n--;) {
                    if (i++, e[n]) {
                        var o = e[n].getAttribute(r) || "";
                        o.length > 0 && this.cached_images.push(e[n])
                    }
                    i === t && (this.images_loaded = !0, this.enhance("images"))
                }
                return this
            },
            update_nodes: function () {
                var e = this.S("[" + this.data_attr + "]").not("img"),
                    t = e.length,
                    n = t,
                    i = 0,
                    r = this.data_attr;
                for (this.cached_nodes = [], this.nodes_loaded = 0 === t; n--;) {
                    i++;
                    var o = e[n].getAttribute(r) || "";
                    o.length > 0 && this.cached_nodes.push(e[n]), i === t && (this.nodes_loaded = !0, this.enhance("nodes"))
                }
                return this
            },
            enhance: function (n) {
                for (var i = this["cached_" + n].length; i--;) this.object(e(this["cached_" + n][i]));
                return e(t).trigger("resize")
            },
            parse_params: function (e, t, n) {
                return [this.trim(e), this.convert_directive(t), this.trim(n)]
            },
            convert_directive: function (e) {
                var t = this.trim(e);
                return t.length > 0 ? t : "replace"
            },
            object: function (e) {
                var t = this.parse_data_attr(e),
                    n = [],
                    i = t.length;
                if (i > 0)
                    for (; i--;) {
                        var r = t[i].split(/\((.*?)(\))$/);
                        if (r.length > 1) {
                            var o = r[0].split(","),
                                s = this.parse_params(o[0], o[1], r[1]);
                            n.push(s)
                        }
                    }
                return this.store(e, n)
            },
            store: function (e, t) {
                var n = this.random_str(),
                    i = e.data(this.add_namespace("uuid", !0));
                return this.cache[i] ? this.cache[i] : (e.attr(this.add_namespace("data-uuid"), n), this.cache[n] = t)
            },
            trim: function (t) {
                return "string" == typeof t ? e.trim(t) : t
            },
            set_data_attr: function (e) {
                return e ? this.namespace.length > 0 ? this.namespace + "-" + this.settings.load_attr : this.settings.load_attr : this.namespace.length > 0 ? "data-" + this.namespace + "-" + this.settings.load_attr : "data-" + this.settings.load_attr
            },
            parse_data_attr: function (e) {
                for (var t = e.attr(this.attr_name()).split(/\[(.*?)\]/), n = t.length, i = []; n--;) t[n].replace(/[\W\d]+/, "").length > 4 && i.push(t[n]);
                return i
            },
            reflow: function () {
                this.load("images", !0), this.load("nodes", !0)
            }
        }
    }(jQuery, this, this.document),
    function (e, t, n, i) {
        "use strict";
        Foundation.libs["magellan-expedition"] = {
            name: "magellan-expedition",
            version: "5.2.2",
            settings: {
                active_class: "active",
                threshold: 0,
                destination_threshold: 20,
                throttle_delay: 30
            },
            init: function (e, t, n) {
                Foundation.inherit(this, "throttle"), this.bindings(t, n)
            },
            events: function () {
                var n = this,
                    i = n.S,
                    r = n.settings;
                n.set_expedition_position(), i(n.scope).off(".magellan").on("click.fndtn.magellan", "[" + n.add_namespace("data-magellan-arrival") + '] a[href^="#"]', function (t) {
                    t.preventDefault();
                    var i = e(this).closest("[" + n.attr_name() + "]"),
                        r = (i.data("magellan-expedition-init"), this.hash.split("#").join("")),
                        o = e("a[name='" + r + "']");
                    0 === o.length && (o = e("#" + r));
                    var s = o.offset().top;
                    s -= i.outerHeight(), e("html, body").stop().animate({
                        scrollTop: s
                    }, 700, "swing", function () {
                        history.pushState ? history.pushState(null, null, "#" + r) : location.hash = "#" + r
                    })
                }).on("scroll.fndtn.magellan", n.throttle(this.check_for_arrivals.bind(this), r.throttle_delay)), e(t).on("resize.fndtn.magellan", n.throttle(this.set_expedition_position.bind(this), r.throttle_delay))
            },
            check_for_arrivals: function () {
                var e = this;
                e.update_arrivals(), e.update_expedition_positions()
            },
            set_expedition_position: function () {
                var t = this;
                e("[" + this.attr_name() + "=fixed]", t.scope).each(function (n, i) {
                    var r, o = e(this),
                        s = o.attr("styles");
                    o.attr("style", ""), r = o.offset().top, o.data(t.data_attr("magellan-top-offset"), r), o.attr("style", s)
                })
            },
            update_expedition_positions: function () {
                var n = this,
                    i = e(t).scrollTop();
                e("[" + this.attr_name() + "=fixed]", n.scope).each(function () {
                    var t = e(this),
                        r = t.data("magellan-top-offset");
                    if (i >= r) {
                        var o = t.prev("[" + n.add_namespace("data-magellan-expedition-clone") + "]");
                        0 === o.length && (o = t.clone(), o.removeAttr(n.attr_name()), o.attr(n.add_namespace("data-magellan-expedition-clone"), ""), t.before(o)), t.css({
                            position: "fixed",
                            top: 0
                        })
                    } else t.prev("[" + n.add_namespace("data-magellan-expedition-clone") + "]").remove(),
                        t.attr("style", "")
                })
            },
            update_arrivals: function () {
                var n = this,
                    i = e(t).scrollTop();
                e("[" + this.attr_name() + "]", n.scope).each(function () {
                    var t = e(this),
                        r = r = t.data(n.attr_name(!0) + "-init"),
                        o = n.offsets(t, i),
                        s = t.find("[" + n.add_namespace("data-magellan-arrival") + "]"),
                        a = !1;
                    o.each(function (e, i) {
                        if (i.viewport_offset >= i.top_offset) {
                            var o = t.find("[" + n.add_namespace("data-magellan-arrival") + "]");
                            return o.not(i.arrival).removeClass(r.active_class), i.arrival.addClass(r.active_class), a = !0, !0
                        }
                    }), a || s.removeClass(r.active_class)
                })
            },
            offsets: function (t, n) {
                var i = this,
                    r = t.data(i.attr_name(!0) + "-init"),
                    o = n;
                return t.find("[" + i.add_namespace("data-magellan-arrival") + "]").map(function (n, s) {
                    var a = e(this).data(i.data_attr("magellan-arrival")),
                        c = e("[" + i.add_namespace("data-magellan-destination") + "=" + a + "]");
                    if (c.length > 0) {
                        var u = c.offset().top - r.destination_threshold - t.outerHeight();
                        return {
                            destination: c,
                            arrival: e(this),
                            top_offset: u,
                            viewport_offset: o
                        }
                    }
                }).sort(function (e, t) {
                    return e.top_offset < t.top_offset ? -1 : e.top_offset > t.top_offset ? 1 : 0
                })
            },
            data_attr: function (e) {
                return this.namespace.length > 0 ? this.namespace + "-" + e : e
            },
            off: function () {
                this.S(this.scope).off(".magellan"), this.S(t).off(".magellan")
            },
            reflow: function () {
                var t = this;
                e("[" + t.add_namespace("data-magellan-expedition-clone") + "]", t.scope).remove()
            }
        }
    }(jQuery, this, this.document),
    function (e, t, n, i) {
        "use strict";
        Foundation.libs.accordion = {
            name: "accordion",
            version: "5.2.2",
            settings: {
                active_class: "active",
                multi_expand: !1,
                toggleable: !0
            },
            init: function (e, t, n) {
                this.bindings(t, n)
            },
            events: function () {
                var t = this,
                    n = this.S;
                n(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion", "[" + this.attr_name() + "] dd > a", function (i) {
                    var r = n(this).closest("[" + t.attr_name() + "]"),
                        o = n("#" + this.href.split("#")[1]),
                        s = n("dd > .content", r),
                        a = e("dd", r),
                        c = r.data(t.attr_name(!0) + "-init"),
                        u = n("dd > .content." + c.active_class, r),
                        l = n("dd." + c.active_class, r);
                    return i.preventDefault(), n(this).closest("dl").is(r) ? c.toggleable && o.is(u) ? (l.toggleClass(c.active_class, !1), o.toggleClass(c.active_class, !1)) : (c.multi_expand || (s.removeClass(c.active_class), a.removeClass(c.active_class)), void o.addClass(c.active_class).parent().addClass(c.active_class)) : void 0
                })
            },
            off: function () {},
            reflow: function () {}
        }
    }(jQuery, this, this.document),
    function (e, t, n, i) {
        "use strict";
        Foundation.libs.topbar = {
            name: "topbar",
            version: "5.2.2",
            settings: {
                index: 0,
                sticky_class: "sticky",
                custom_back_text: !0,
                back_text: "Back",
                is_hover: !0,
                mobile_show_parent_link: !1,
                scrolltop: !0,
                sticky_on: "all"
            },
            init: function (t, n, i) {
                Foundation.inherit(this, "add_custom_rule register_media throttle");
                var r = this;
                r.register_media("topbar", "foundation-mq-topbar"), this.bindings(n, i), r.S("[" + this.attr_name() + "]", this.scope).each(function () {
                    var t = e(this),
                        n = t.data(r.attr_name(!0) + "-init");
                    r.S("section", this), t.children().filter("ul").first();
                    t.data("index", 0);
                    var i = t.parent();
                    i.hasClass("fixed") || r.is_sticky(t, i, n) ? (r.settings.sticky_class = n.sticky_class, r.settings.sticky_topbar = t, t.data("height", i.outerHeight()), t.data("stickyoffset", i.offset().top)) : t.data("height", t.outerHeight()), n.assembled || r.assemble(t), n.is_hover ? r.S(".has-dropdown", t).addClass("not-click") : r.S(".has-dropdown", t).removeClass("not-click"), r.add_custom_rule(".f-topbar-fixed { padding-top: " + t.data("height") + "px }"), i.hasClass("fixed") && r.S("body").addClass("f-topbar-fixed")
                })
            },
            is_sticky: function (e, t, n) {
                var i = t.hasClass(n.sticky_class);
                return i && "all" === n.sticky_on ? !0 : i && this.small() && "small" === n.sticky_on ? !0 : i && this.medium() && "medium" === n.sticky_on ? !0 : i && this.large() && "large" === n.sticky_on ? !0 : !1
            },
            toggle: function (n) {
                var i = this;
                if (n) var r = i.S(n).closest("[" + this.attr_name() + "]");
                else var r = i.S("[" + this.attr_name() + "]");
                var o = r.data(this.attr_name(!0) + "-init"),
                    s = i.S("section, .section", r);
                i.breakpoint() && (i.rtl ? (s.css({
                    right: "0%"
                }), e(">.name", s).css({
                    right: "100%"
                })) : (s.css({
                    left: "0%"
                }), e(">.name", s).css({
                    left: "100%"
                })), i.S("li.moved", s).removeClass("moved"), r.data("index", 0), r.toggleClass("expanded").css("height", "")), o.scrolltop ? r.hasClass("expanded") ? r.parent().hasClass("fixed") && (o.scrolltop ? (r.parent().removeClass("fixed"), r.addClass("fixed"), i.S("body").removeClass("f-topbar-fixed"), t.scrollTo(0, 0)) : r.parent().removeClass("expanded")) : r.hasClass("fixed") && (r.parent().addClass("fixed"), r.removeClass("fixed"), i.S("body").addClass("f-topbar-fixed")) : (i.is_sticky(r, r.parent(), o) && r.parent().addClass("fixed"), r.parent().hasClass("fixed") && (r.hasClass("expanded") ? (r.addClass("fixed"), r.parent().addClass("expanded"), i.S("body").addClass("f-topbar-fixed")) : (r.removeClass("fixed"), r.parent().removeClass("expanded"), i.update_sticky_positioning())))
            },
            timer: null,
            events: function (n) {
                var i = this,
                    r = this.S;
                r(this.scope).off(".topbar").on("click.fndtn.topbar", "[" + this.attr_name() + "] .toggle-topbar", function (e) {
                    e.preventDefault(), i.toggle(this)
                }).on("click.fndtn.topbar", '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function (t) {
                    var n = e(this).closest("li");
                    i.breakpoint() && !n.hasClass("back") && !n.hasClass("has-dropdown") && i.toggle()
                }).on("click.fndtn.topbar", "[" + this.attr_name() + "] li.has-dropdown", function (t) {
                    var n = r(this),
                        o = r(t.target),
                        s = n.closest("[" + i.attr_name() + "]"),
                        a = s.data(i.attr_name(!0) + "-init");
                    return o.data("revealId") ? void i.toggle() : void(i.breakpoint() || (!a.is_hover || Modernizr.touch) && (t.stopImmediatePropagation(), n.hasClass("hover") ? (n.removeClass("hover").find("li").removeClass("hover"), n.parents("li.hover").removeClass("hover")) : (n.addClass("hover"), e(n).siblings().removeClass("hover"), "A" === o[0].nodeName && o.parent().hasClass("has-dropdown") && t.preventDefault())))
                }).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown>a", function (e) {
                    if (i.breakpoint()) {
                        e.preventDefault();
                        var t = r(this),
                            n = t.closest("[" + i.attr_name() + "]"),
                            o = n.find("section, .section"),
                            s = (t.next(".dropdown").outerHeight(), t.closest("li"));
                        n.data("index", n.data("index") + 1), s.addClass("moved"), i.rtl ? (o.css({
                            right: -(100 * n.data("index")) + "%"
                        }), o.find(">.name").css({
                            right: 100 * n.data("index") + "%"
                        })) : (o.css({
                            left: -(100 * n.data("index")) + "%"
                        }), o.find(">.name").css({
                            left: 100 * n.data("index") + "%"
                        })), n.css("height", t.siblings("ul").outerHeight(!0) + n.data("height"))
                    }
                }), r(t).off(".topbar").on("resize.fndtn.topbar", i.throttle(function () {
                    i.resize.call(i)
                }, 50)).trigger("resize"), r("body").off(".topbar").on("click.fndtn.topbar touchstart.fndtn.topbar", function (e) {
                    var t = r(e.target).closest("li").closest("li.hover");
                    t.length > 0 || r("[" + i.attr_name() + "] li.hover").removeClass("hover")
                }), r(this.scope).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown .back", function (e) {
                    e.preventDefault();
                    var t = r(this),
                        n = t.closest("[" + i.attr_name() + "]"),
                        o = n.find("section, .section"),
                        s = (n.data(i.attr_name(!0) + "-init"), t.closest("li.moved")),
                        a = s.parent();
                    n.data("index", n.data("index") - 1), i.rtl ? (o.css({
                        right: -(100 * n.data("index")) + "%"
                    }), o.find(">.name").css({
                        right: 100 * n.data("index") + "%"
                    })) : (o.css({
                        left: -(100 * n.data("index")) + "%"
                    }), o.find(">.name").css({
                        left: 100 * n.data("index") + "%"
                    })), 0 === n.data("index") ? n.css("height", "") : n.css("height", a.outerHeight(!0) + n.data("height")), setTimeout(function () {
                        s.removeClass("moved")
                    }, 300)
                })
            },
            resize: function () {
                var e = this;
                e.S("[" + this.attr_name() + "]").each(function () {
                    var t, i = e.S(this),
                        r = i.data(e.attr_name(!0) + "-init"),
                        o = i.parent("." + e.settings.sticky_class);
                    if (!e.breakpoint()) {
                        var s = i.hasClass("expanded");
                        i.css("height", "").removeClass("expanded").find("li").removeClass("hover"), s && e.toggle(i)
                    }
                    e.is_sticky(i, o, r) && (o.hasClass("fixed") ? (o.removeClass("fixed"), t = o.offset().top, e.S(n.body).hasClass("f-topbar-fixed") && (t -= i.data("height")), i.data("stickyoffset", t), o.addClass("fixed")) : (t = o.offset().top, i.data("stickyoffset", t)))
                })
            },
            breakpoint: function () {
                return !matchMedia(Foundation.media_queries.topbar).matches
            },
            small: function () {
                return matchMedia(Foundation.media_queries.small).matches
            },
            medium: function () {
                return matchMedia(Foundation.media_queries.medium).matches
            },
            large: function () {
                return matchMedia(Foundation.media_queries.large).matches
            },
            assemble: function (t) {
                var n = this,
                    i = t.data(this.attr_name(!0) + "-init"),
                    r = n.S("section", t);
                e(this).children().filter("ul").first();
                r.detach(), n.S(".has-dropdown>a", r).each(function () {
                    var t = n.S(this),
                        r = t.siblings(".dropdown"),
                        o = t.attr("href");
                    if (!r.find(".title.back").length) {
                        if (i.mobile_show_parent_link && o && o.length > 1) var s = e('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li><a class="parent-link js-generated" href="' + o + '">' + t.text() + "</a></li>");
                        else var s = e('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li>');
                        1 == i.custom_back_text ? e("h5>a", s).html(i.back_text) : e("h5>a", s).html("&laquo; " + t.html()), r.prepend(s)
                    }
                }), r.appendTo(t), this.sticky(), this.assembled(t)
            },
            assembled: function (t) {
                t.data(this.attr_name(!0), e.extend({}, t.data(this.attr_name(!0)), {
                    assembled: !0
                }))
            },
            height: function (t) {
                var n = 0,
                    i = this;
                return e("> li", t).each(function () {
                    n += i.S(this).outerHeight(!0)
                }), n
            },
            sticky: function () {
                var e = (this.S(t), this);
                this.S(t).on("scroll", function () {
                    e.update_sticky_positioning()
                })
            },
            update_sticky_positioning: function () {
                var e = "." + this.settings.sticky_class,
                    n = this.S(t),
                    i = this;
                if (i.settings.sticky_topbar && i.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings)) {
                    var r = this.settings.sticky_topbar.data("stickyoffset");
                    i.S(e).hasClass("expanded") || (n.scrollTop() > r ? i.S(e).hasClass("fixed") || (i.S(e).addClass("fixed"), i.S("body").addClass("f-topbar-fixed")) : n.scrollTop() <= r && i.S(e).hasClass("fixed") && (i.S(e).removeClass("fixed"), i.S("body").removeClass("f-topbar-fixed")))
                }
            },
            off: function () {
                this.S(this.scope).off(".fndtn.topbar"), this.S(t).off(".fndtn.topbar")
            },
            reflow: function () {}
        }
    }(jQuery, this, this.document),
    function (e, t, n, i) {
        "use strict";
        Foundation.libs.tab = {
            name: "tab",
            version: "5.2.2",
            settings: {
                active_class: "active",
                callback: function () {},
                deep_linking: !1,
                scroll_to_content: !0,
                is_hover: !1
            },
            default_tab_hashes: [],
            init: function (e, t, n) {
                var i = this,
                    r = this.S;
                this.bindings(t, n), this.handle_location_hash_change(), r("[" + this.attr_name() + "] > dd.active > a", this.scope).each(function () {
                    i.default_tab_hashes.push(this.hash)
                })
            },
            events: function () {
                var e = this,
                    n = this.S;
                n(this.scope).off(".tab").on("click.fndtn.tab", "[" + this.attr_name() + "] > dd > a", function (t) {
                    var i = n(this).closest("[" + e.attr_name() + "]").data(e.attr_name(!0) + "-init");
                    (!i.is_hover || Modernizr.touch) && (t.preventDefault(), t.stopPropagation(), e.toggle_active_tab(n(this).parent()))
                }).on("mouseenter.fndtn.tab", "[" + this.attr_name() + "] > dd > a", function (t) {
                    var i = n(this).closest("[" + e.attr_name() + "]").data(e.attr_name(!0) + "-init");
                    i.is_hover && e.toggle_active_tab(n(this).parent())
                }), n(t).on("hashchange.fndtn.tab", function (t) {
                    t.preventDefault(), e.handle_location_hash_change()
                })
            },
            handle_location_hash_change: function () {
                var t = this,
                    n = this.S;
                n("[" + this.attr_name() + "]", this.scope).each(function () {
                    var r = n(this).data(t.attr_name(!0) + "-init");
                    if (r.deep_linking) {
                        var o = t.scope.location.hash;
                        if ("" != o) {
                            var s = n(o);
                            if (s.hasClass("content") && s.parent().hasClass("tab-content")) t.toggle_active_tab(e("[" + t.attr_name() + "] > dd > a[href=" + o + "]").parent());
                            else {
                                var a = s.closest(".content").attr("id");
                                a != i && t.toggle_active_tab(e("[" + t.attr_name() + "] > dd > a[href=#" + a + "]").parent(), o)
                            }
                        } else
                            for (var c in t.default_tab_hashes) t.toggle_active_tab(e("[" + t.attr_name() + "] > dd > a[href=" + t.default_tab_hashes[c] + "]").parent())
                    }
                })
            },
            toggle_active_tab: function (n, r) {
                var o = this.S,
                    s = n.closest("[" + this.attr_name() + "]"),
                    a = n.children("a").first(),
                    c = "#" + a.attr("href").split("#")[1],
                    u = o(c),
                    l = n.siblings(),
                    d = s.data(this.attr_name(!0) + "-init");
                if (o(this).data(this.data_attr("tab-content")) && (c = "#" + o(this).data(this.data_attr("tab-content")).split("#")[1], u = o(c)), d.deep_linking) {
                    var f = e("body,html").scrollTop();
                    r != i ? t.location.hash = r : t.location.hash = c, d.scroll_to_content ? r == i || r == c ? n.parent()[0].scrollIntoView() : o(c)[0].scrollIntoView() : (r == i || r == c) && e("body,html").scrollTop(f)
                }
                n.addClass(d.active_class).triggerHandler("opened"), l.removeClass(d.active_class), u.siblings().removeClass(d.active_class).end().addClass(d.active_class), d.callback(n), u.triggerHandler("toggled", [n]), s.triggerHandler("toggled", [u])
            },
            data_attr: function (e) {
                return this.namespace.length > 0 ? this.namespace + "-" + e : e
            },
            off: function () {},
            reflow: function () {}
        }
    }(jQuery, this, this.document),
    function (e, t, n, i) {
        "use strict";
        Foundation.libs.abide = {
            name: "abide",
            version: "5.2.2",
            settings: {
                live_validate: !0,
                focus_on_invalid: !0,
                error_labels: !0,
                timeout: 1e3,
                patterns: {
                    alpha: /^[a-zA-Z]+$/,
                    alpha_numeric: /^[a-zA-Z0-9]+$/,
                    integer: /^[-+]?\d+$/,
                    number: /^[-+]?\d*(?:\.\d+)?$/,
                    card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                    cvv: /^([0-9]){3,4}$/,
                    email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                    url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
                    domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,
                    datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
                    date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
                    time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
                    dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
                    month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d$/,
                    color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
                },
                validators: {
                    equalTo: function (e, t, i) {
                        var r = n.getElementById(e.getAttribute(this.add_namespace("data-equalto"))).value,
                            o = e.value,
                            s = r === o;
                        return s
                    }
                }
            },
            timer: null,
            init: function (e, t, n) {
                this.bindings(t, n)
            },
            events: function (t) {
                var n = this,
                    i = n.S(t).attr("novalidate", "novalidate"),
                    r = i.data(this.attr_name(!0) + "-init") || {};
                this.invalid_attr = this.add_namespace("data-invalid"), i.off(".abide").on("submit.fndtn.abide validate.fndtn.abide", function (e) {
                    var t = /ajax/i.test(n.S(this).attr(n.attr_name()));
                    return n.validate(n.S(this).find("input, textarea, select").get(), e, t)
                }).on("reset", function () {
                    return n.reset(e(this))
                }).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide", function (e) {
                    n.validate([this], e)
                }).on("keydown.fndtn.abide", function (e) {
                    r.live_validate === !0 && (clearTimeout(n.timer), n.timer = setTimeout(function () {
                        n.validate([this], e)
                    }.bind(this), r.timeout))
                })
            },
            reset: function (t) {
                t.removeAttr(this.invalid_attr), e(this.invalid_attr, t).removeAttr(this.invalid_attr), e(".error", t).not("small").removeClass("error")
            },
            validate: function (e, t, n) {
                var i = this.parse_patterns(e),
                    r = i.length,
                    o = this.S(e[0]).closest("[data-" + this.attr_name(!0) + "]"),
                    s = o.data(this.attr_name(!0) + "-init") || {},
                    a = /submit/.test(t.type);
                o.trigger("validated");
                for (var c = 0; r > c; c++)
                    if (!i[c] && (a || n)) return s.focus_on_invalid && e[c].focus(), o.trigger("invalid"), this.S(e[c]).closest("[data-" + this.attr_name(!0) + "]").attr(this.invalid_attr, ""), !1;
                return (a || n) && o.trigger("valid"), o.removeAttr(this.invalid_attr), n ? !1 : !0
            },
            parse_patterns: function (e) {
                for (var t = e.length, n = []; t--;) n.push(this.pattern(e[t]));
                return this.check_validation_and_apply_styles(n)
            },
            pattern: function (e) {
                var t = e.getAttribute("type"),
                    n = "string" == typeof e.getAttribute("required"),
                    i = e.getAttribute("pattern") || "";
                return this.settings.patterns.hasOwnProperty(i) && i.length > 0 ? [e, this.settings.patterns[i], n] : i.length > 0 ? [e, new RegExp("^" + i + "$"), n] : this.settings.patterns.hasOwnProperty(t) ? [e, this.settings.patterns[t], n] : (i = /.*/, [e, i, n])
            },
            check_validation_and_apply_styles: function (t) {
                for (var n = t.length, i = [], r = this.S(t[0][0]).closest("[data-" + this.attr_name(!0) + "]"), o = r.data(this.attr_name(!0) + "-init") || {}; n--;) {
                    var s, a, c = t[n][0],
                        u = t[n][2],
                        l = c.value,
                        d = this.S(c).parent(),
                        f = c.getAttribute(this.add_namespace("data-abide-validator")),
                        p = "radio" === c.type,
                        h = "checkbox" === c.type,
                        g = this.S('label[for="' + c.getAttribute("id") + '"]'),
                        m = u ? c.value.length > 0 : !0;
                    c.getAttribute(this.add_namespace("data-equalto")) && (f = "equalTo"), s = d.is("label") ? d.parent() : d, p && u ? i.push(this.valid_radio(c, u)) : h && u ? i.push(this.valid_checkbox(c, u)) : f ? (a = this.settings.validators[f].apply(this, [c, u, s]), i.push(a), a ? (this.S(c).removeAttr(this.invalid_attr), s.removeClass("error")) : (this.S(c).attr(this.invalid_attr, ""), s.addClass("error"))) : t[n][1].test(l) && m || !u && c.value.length < 1 || e(c).attr("disabled") ? (this.S(c).removeAttr(this.invalid_attr), s.removeClass("error"), g.length > 0 && o.error_labels && g.removeClass("error"), i.push(!0), e(c).triggerHandler("valid")) : (this.S(c).attr(this.invalid_attr, ""), s.addClass("error"), g.length > 0 && o.error_labels && g.addClass("error"), i.push(!1), e(c).triggerHandler("invalid"))
                }
                return i
            },
            valid_checkbox: function (e, t) {
                var e = this.S(e),
                    n = e.is(":checked") || !t;
                return n ? e.removeAttr(this.invalid_attr).parent().removeClass("error") : e.attr(this.invalid_attr, "").parent().addClass("error"), n
            },
            valid_radio: function (e, t) {
                for (var n = e.getAttribute("name"), i = this.S(e).closest("[data-" + this.attr_name(!0) + "]").find("[name=" + n + "]"), r = i.length, o = !1, s = 0; r > s; s++) i[s].checked && (o = !0);
                for (var s = 0; r > s; s++) o ? this.S(i[s]).removeAttr(this.invalid_attr).parent().removeClass("error") : this.S(i[s]).attr(this.invalid_attr, "").parent().addClass("error");
                return o
            },
            valid_equal: function (e, t, i) {
                var r = n.getElementById(e.getAttribute(this.add_namespace("data-equalto"))).value,
                    o = e.value,
                    s = r === o;
                return s ? (this.S(e).removeAttr(this.invalid_attr), i.removeClass("error")) : (this.S(e).attr(this.invalid_attr, ""), i.addClass("error")), s
            },
            valid_oneof: function (e, t, n, i) {
                var e = this.S(e),
                    r = this.S("[" + this.add_namespace("data-oneof") + "]"),
                    o = r.filter(":checked").length > 0;
                if (o ? e.removeAttr(this.invalid_attr).parent().removeClass("error") : e.attr(this.invalid_attr, "").parent().addClass("error"), !i) {
                    var s = this;
                    r.each(function () {
                        s.valid_oneof.call(s, this, null, null, !0)
                    })
                }
                return o
            }
        }
    }(jQuery, this, this.document),
    function (e, t, n, i) {
        "use strict";
        Foundation.libs.tooltip = {
            name: "tooltip",
            version: "5.2.2",
            settings: {
                additional_inheritable_classes: [],
                tooltip_class: ".tooltip",
                append_to: "body",
                touch_close_text: "Tap To Close",
                disable_for_touch: !1,
                hover_delay: 200,
                tip_template: function (e, t) {
                    return '<span data-selector="' + e + '" class="' + Foundation.libs.tooltip.settings.tooltip_class.substring(1) + '">' + t + '<span class="nub"></span></span>'
                }
            },
            cache: {},
            init: function (e, t, n) {
                Foundation.inherit(this, "random_str"), this.bindings(t, n)
            },
            events: function (t) {
                var n = this,
                    i = n.S;
                n.create(this.S(t)), e(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "]", function (t) {
                    var r = i(this),
                        o = e.extend({}, n.settings, n.data_options(r)),
                        s = !1;
                    if (Modernizr.touch && /touchstart|MSPointerDown/i.test(t.type) && i(t.target).is("a")) return !1;
                    if (/mouse/i.test(t.type) && n.ie_touch(t)) return !1;
                    if (r.hasClass("open")) Modernizr.touch && /touchstart|MSPointerDown/i.test(t.type) && t.preventDefault(), n.hide(r);
                    else {
                        if (o.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(t.type)) return;
                        !o.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(t.type) && (t.preventDefault(), i(o.tooltip_class + ".open").hide(), s = !0), /enter|over/i.test(t.type) ? this.timer = setTimeout(function () {
                            n.showTip(r)
                        }.bind(this), n.settings.hover_delay) : "mouseout" === t.type || "mouseleave" === t.type ? (clearTimeout(this.timer), n.hide(r)) : n.showTip(r)
                    }
                }).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "].open", function (t) {
                    return /mouse/i.test(t.type) && n.ie_touch(t) ? !1 : void(("touch" != e(this).data("tooltip-open-event-type") || "mouseleave" != t.type) && ("mouse" == e(this).data("tooltip-open-event-type") && /MSPointerDown|touchstart/i.test(t.type) ? n.convert_to_touch(e(this)) : n.hide(e(this))))
                }).on("DOMNodeRemoved DOMAttrModified", "[" + this.attr_name() + "]:not(a)", function (e) {
                    n.hide(i(this))
                })
            },
            ie_touch: function (e) {
                return !1
            },
            showTip: function (e) {
                this.getTip(e);
                return this.show(e)
            },
            getTip: function (t) {
                var n = this.selector(t),
                    i = e.extend({}, this.settings, this.data_options(t)),
                    r = null;
                return n && (r = this.S('span[data-selector="' + n + '"]' + i.tooltip_class)), "object" == typeof r ? r : !1
            },
            selector: function (e) {
                var t = e.attr("id"),
                    n = e.attr(this.attr_name()) || e.attr("data-selector");
                return (t && t.length < 1 || !t) && "string" != typeof n && (n = this.random_str(6), e.attr("data-selector", n)), t && t.length > 0 ? t : n
            },
            create: function (n) {
                var i = this,
                    r = e.extend({}, this.settings, this.data_options(n)),
                    o = this.settings.tip_template;
                "string" == typeof r.tip_template && t.hasOwnProperty(r.tip_template) && (o = t[r.tip_template]);
                var s = e(o(this.selector(n), e("<div></div>").html(n.attr("title")).html())),
                    a = this.inheritable_classes(n);
                s.addClass(a).appendTo(r.append_to), Modernizr.touch && (s.append('<span class="tap-to-close">' + r.touch_close_text + "</span>"), s.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", function (e) {
                    i.hide(n)
                })), n.removeAttr("title").attr("title", "")
            },
            reposition: function (t, n, i) {
                var r, o, s, a, c;
                if (n.css("visibility", "hidden").show(), r = t.data("width"), o = n.children(".nub"), s = o.outerHeight(), a = o.outerHeight(), this.small() ? n.css({
                        width: "100%"
                    }) : n.css({
                        width: r ? r : "auto"
                    }), (c = function (e, t, n, i, r, o) {
                        return e.css({
                            top: t ? t : "auto",
                            bottom: i ? i : "auto",
                            left: r ? r : "auto",
                            right: n ? n : "auto"
                        }).end()
                    })(n, t.offset().top + t.outerHeight() + 10, "auto", "auto", t.offset().left), this.small()) c(n, t.offset().top + t.outerHeight() + 10, "auto", "auto", 12.5, e(this.scope).width()), n.addClass("tip-override"), c(o, -s, "auto", "auto", t.offset().left);
                else {
                    var u = t.offset().left;
                    Foundation.rtl && (o.addClass("rtl"), u = t.offset().left + t.outerWidth() - n.outerWidth()), c(n, t.offset().top + t.outerHeight() + 10, "auto", "auto", u), n.removeClass("tip-override"), i && i.indexOf("tip-top") > -1 ? (Foundation.rtl && o.addClass("rtl"), c(n, t.offset().top - n.outerHeight(), "auto", "auto", u).removeClass("tip-override")) : i && i.indexOf("tip-left") > -1 ? (c(n, t.offset().top + t.outerHeight() / 2 - n.outerHeight() / 2, "auto", "auto", t.offset().left - n.outerWidth() - s).removeClass("tip-override"), o.removeClass("rtl")) : i && i.indexOf("tip-right") > -1 && (c(n, t.offset().top + t.outerHeight() / 2 - n.outerHeight() / 2, "auto", "auto", t.offset().left + t.outerWidth() + s).removeClass("tip-override"), o.removeClass("rtl"))
                }
                n.css("visibility", "visible").hide()
            },
            small: function () {
                return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
            },
            inheritable_classes: function (t) {
                var n = e.extend({}, this.settings, this.data_options(t)),
                    i = ["tip-top", "tip-left", "tip-bottom", "tip-right", "radius", "round"].concat(n.additional_inheritable_classes),
                    r = t.attr("class"),
                    o = r ? e.map(r.split(" "), function (t, n) {
                        return -1 !== e.inArray(t, i) ? t : void 0
                    }).join(" ") : "";
                return e.trim(o)
            },
            convert_to_touch: function (t) {
                var n = this,
                    i = n.getTip(t),
                    r = e.extend({}, n.settings, n.data_options(t));
                0 === i.find(".tap-to-close").length && (i.append('<span class="tap-to-close">' + r.touch_close_text + "</span>"), i.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose", function (e) {
                    n.hide(t)
                })), t.data("tooltip-open-event-type", "touch")
            },
            show: function (e) {
                var t = this.getTip(e);
                "touch" == e.data("tooltip-open-event-type") && this.convert_to_touch(e), this.reposition(e, t, e.attr("class")), e.addClass("open"), t.fadeIn(150)
            },
            hide: function (e) {
                var t = this.getTip(e);
                t.fadeOut(150, function () {
                    t.find(".tap-to-close").remove(), t.off("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"), e.removeClass("open")
                })
            },
            off: function () {
                var t = this;
                this.S(this.scope).off(".fndtn.tooltip"), this.S(this.settings.tooltip_class).each(function (n) {
                    e("[" + t.attr_name() + "]").eq(n).attr("title", e(this).text())
                }).remove()
            },
            reflow: function () {}
        }
    }(jQuery, this, this.document), ! function () {
        "use strict";

        function e(e, t) {
            var n;
            for (n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        }

        function t(e) {
            if (!this || this.find !== t.prototype.find) return new t(e);
            if (this.length = 0, e)
                if ("string" == typeof e && (e = this.find(e)), e.nodeType || e === e.window) this.length = 1, this[0] = e;
                else {
                    var n = e.length;
                    for (this.length = n; n;) n -= 1, this[n] = e[n]
                }
        }
        t.extend = e, t.contains = function (e, t) {
            do
                if (t = t.parentNode, t === e) return !0;
            while (t);
            return !1
        }, t.parseJSON = function (e) {
            return window.JSON && JSON.parse(e)
        }, e(t.prototype, {
            find: function (e) {
                var n = this[0] || document;
                return "string" == typeof e && (e = n.querySelectorAll ? n.querySelectorAll(e) : "#" === e.charAt(0) ? n.getElementById(e.slice(1)) : n.getElementsByTagName(e)), new t(e)
            },
            hasClass: function (e) {
                return this[0] ? new RegExp("(^|\\s+)" + e + "(\\s+|$)").test(this[0].className) : !1
            },
            addClass: function (e) {
                for (var t, n = this.length; n;) {
                    if (n -= 1, t = this[n], !t.className) return t.className = e, this;
                    if (this.hasClass(e)) return this;
                    t.className += " " + e
                }
                return this
            },
            removeClass: function (e) {
                for (var t, n = new RegExp("(^|\\s+)" + e + "(\\s+|$)"), i = this.length; i;) i -= 1, t = this[i], t.className = t.className.replace(n, " ");
                return this
            },
            on: function (e, t) {
                for (var n, i, r = e.split(/\s+/); r.length;)
                    for (e = r.shift(), n = this.length; n;) n -= 1, i = this[n], i.addEventListener ? i.addEventListener(e, t, !1) : i.attachEvent && i.attachEvent("on" + e, t);
                return this
            },
            off: function (e, t) {
                for (var n, i, r = e.split(/\s+/); r.length;)
                    for (e = r.shift(), n = this.length; n;) n -= 1, i = this[n], i.removeEventListener ? i.removeEventListener(e, t, !1) : i.detachEvent && i.detachEvent("on" + e, t);
                return this
            },
            empty: function () {
                for (var e, t = this.length; t;)
                    for (t -= 1, e = this[t]; e.hasChildNodes();) e.removeChild(e.lastChild);
                return this
            },
            first: function () {
                return new t(this[0])
            }
        }), "function" == typeof define && define.amd ? define(function () {
            return t
        }) : (window.blueimp = window.blueimp || {}, window.blueimp.helper = t)
    }(),
    function (e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["./blueimp-helper"], e) : (window.blueimp = window.blueimp || {}, window.blueimp.Gallery = e(window.blueimp.helper || window.jQuery))
    }(function (e) {
        "use strict";

        function t(e, n) {
            return e && e.length && void 0 !== document.body.style.maxHeight ? this && this.options === t.prototype.options ? (this.list = e, this.num = e.length, this.initOptions(n), void this.initialize()) : new t(e, n) : null
        }
        return e.extend(t.prototype, {
            options: {
                container: "#blueimp-gallery",
                slidesContainer: "div",
                titleElement: "h3",
                displayClass: "blueimp-gallery-display",
                controlsClass: "blueimp-gallery-controls",
                singleClass: "blueimp-gallery-single",
                leftEdgeClass: "blueimp-gallery-left",
                rightEdgeClass: "blueimp-gallery-right",
                playingClass: "blueimp-gallery-playing",
                slideClass: "slide",
                slideLoadingClass: "slide-loading",
                slideErrorClass: "slide-error",
                slideContentClass: "slide-content",
                toggleClass: "toggle",
                prevClass: "prev",
                nextClass: "next",
                closeClass: "close",
                playPauseClass: "play-pause",
                typeProperty: "type",
                titleProperty: "title",
                urlProperty: "href",
                displayTransition: !0,
                clearSlides: !0,
                stretchImages: !1,
                toggleControlsOnReturn: !0,
                toggleSlideshowOnSpace: !0,
                enableKeyboardNavigation: !0,
                closeOnEscape: !0,
                closeOnSlideClick: !0,
                closeOnSwipeUpOrDown: !0,
                emulateTouchEvents: !0,
                hidePageScrollbars: !0,
                disableScroll: !0,
                carousel: !1,
                continuous: !0,
                unloadElements: !0,
                startSlideshow: !1,
                slideshowInterval: 5e3,
                index: 0,
                preloadRange: 2,
                transitionSpeed: 400,
                slideshowTransitionSpeed: void 0,
                event: void 0,
                onopen: void 0,
                onopened: void 0,
                onslide: void 0,
                onslideend: void 0,
                onslidecomplete: void 0,
                onclose: void 0,
                onclosed: void 0
            },
            carouselOptions: {
                hidePageScrollbars: !1,
                toggleControlsOnReturn: !1,
                toggleSlideshowOnSpace: !1,
                enableKeyboardNavigation: !1,
                closeOnEscape: !1,
                closeOnSlideClick: !1,
                closeOnSwipeUpOrDown: !1,
                disableScroll: !1,
                startSlideshow: !0
            },
            support: function (t) {
                var n = {
                        touch: void 0 !== window.ontouchstart || window.DocumentTouch && document instanceof DocumentTouch
                    },
                    i = {
                        webkitTransition: {
                            end: "webkitTransitionEnd",
                            prefix: "-webkit-"
                        },
                        MozTransition: {
                            end: "transitionend",
                            prefix: "-moz-"
                        },
                        OTransition: {
                            end: "otransitionend",
                            prefix: "-o-"
                        },
                        transition: {
                            end: "transitionend",
                            prefix: ""
                        }
                    },
                    r = function () {
                        var e, i, r = n.transition;
                        document.body.appendChild(t), r && (e = r.name.slice(0, -9) + "ransform", void 0 !== t.style[e] && (t.style[e] = "translateZ(0)", i = window.getComputedStyle(t).getPropertyValue(r.prefix + "transform"), n.transform = {
                            prefix: r.prefix,
                            name: e,
                            translate: !0,
                            translateZ: !!i && "none" !== i
                        })), void 0 !== t.style.backgroundSize && (n.backgroundSize = {}, t.style.backgroundSize = "contain", n.backgroundSize.contain = "contain" === window.getComputedStyle(t).getPropertyValue("background-size"), t.style.backgroundSize = "cover", n.backgroundSize.cover = "cover" === window.getComputedStyle(t).getPropertyValue("background-size")), document.body.removeChild(t)
                    };
                return function (e, n) {
                    var i;
                    for (i in n)
                        if (n.hasOwnProperty(i) && void 0 !== t.style[i]) {
                            e.transition = n[i], e.transition.name = i;
                            break
                        }
                }(n, i), document.body ? r() : e(document).on("DOMContentLoaded", r), n
            }(document.createElement("div")),
            requestAnimationFrame: window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame,
            initialize: function () {
                return this.initStartIndex(), this.initWidget() === !1 ? !1 : (this.initEventListeners(), this.onslide(this.index), this.ontransitionend(), void(this.options.startSlideshow && this.play()))
            },
            slide: function (e, t) {
                window.clearTimeout(this.timeout);
                var n, i, r, o = this.index;
                if (o !== e && 1 !== this.num) {
                    if (t || (t = this.options.transitionSpeed), this.support.transition) {
                        for (this.options.continuous || (e = this.circle(e)), n = Math.abs(o - e) / (o - e), this.options.continuous && (i = n, n = -this.positions[this.circle(e)] / this.slideWidth, n !== i && (e = -n * this.num + e)), r = Math.abs(o - e) - 1; r;) r -= 1, this.move(this.circle((e > o ? e : o) - r - 1), this.slideWidth * n, 0);
                        e = this.circle(e), this.move(o, this.slideWidth * n, t), this.move(e, 0, t), this.options.continuous && this.move(this.circle(e - n), -(this.slideWidth * n), 0)
                    } else e = this.circle(e), this.animate(o * -this.slideWidth, e * -this.slideWidth, t);
                    this.onslide(e)
                }
            },
            getIndex: function () {
                return this.index
            },
            getNumber: function () {
                return this.num
            },
            prev: function () {
                (this.options.continuous || this.index) && this.slide(this.index - 1)
            },
            next: function () {
                (this.options.continuous || this.index < this.num - 1) && this.slide(this.index + 1)
            },
            play: function (e) {
                var t = this;
                window.clearTimeout(this.timeout), this.interval = e || this.options.slideshowInterval, this.elements[this.index] > 1 && (this.timeout = this.setTimeout(!this.requestAnimationFrame && this.slide || function (e, n) {
                    t.animationFrameId = t.requestAnimationFrame.call(window, function () {
                        t.slide(e, n)
                    })
                }, [this.index + 1, this.options.slideshowTransitionSpeed], this.interval)), this.container.addClass(this.options.playingClass)
            },
            pause: function () {
                window.clearTimeout(this.timeout), this.interval = null, this.container.removeClass(this.options.playingClass)
            },
            add: function (e) {
                var t;
                for (e.concat || (e = Array.prototype.slice.call(e)), this.list.concat || (this.list = Array.prototype.slice.call(this.list)), this.list = this.list.concat(e), this.num = this.list.length, this.num > 2 && null === this.options.continuous && (this.options.continuous = !0, this.container.removeClass(this.options.leftEdgeClass)), this.container.removeClass(this.options.rightEdgeClass).removeClass(this.options.singleClass), t = this.num - e.length; t < this.num; t += 1) this.addSlide(t), this.positionSlide(t);
                this.positions.length = this.num, this.initSlides(!0)
            },
            resetSlides: function () {
                this.slidesContainer.empty(), this.slides = []
            },
            handleClose: function () {
                var e = this.options;
                this.destroyEventListeners(), this.pause(), this.container[0].style.display = "none", this.container.removeClass(e.displayClass).removeClass(e.singleClass).removeClass(e.leftEdgeClass).removeClass(e.rightEdgeClass), e.hidePageScrollbars && (document.body.style.overflow = this.bodyOverflowStyle), this.options.clearSlides && this.resetSlides(), this.options.onclosed && this.options.onclosed.call(this)
            },
            close: function () {
                var e = this,
                    t = function (n) {
                        n.target === e.container[0] && (e.container.off(e.support.transition.end, t), e.handleClose())
                    };
                this.options.onclose && this.options.onclose.call(this), this.support.transition && this.options.displayTransition ? (this.container.on(this.support.transition.end, t), this.container.removeClass(this.options.displayClass)) : this.handleClose();
            },
            circle: function (e) {
                return (this.num + e % this.num) % this.num
            },
            move: function (e, t, n) {
                this.translateX(e, t, n), this.positions[e] = t
            },
            translate: function (e, t, n, i) {
                var r = this.slides[e].style,
                    o = this.support.transition,
                    s = this.support.transform;
                r[o.name + "Duration"] = i + "ms", r[s.name] = "translate(" + t + "px, " + n + "px)" + (s.translateZ ? " translateZ(0)" : "")
            },
            translateX: function (e, t, n) {
                this.translate(e, t, 0, n)
            },
            translateY: function (e, t, n) {
                this.translate(e, 0, t, n)
            },
            animate: function (e, t, n) {
                if (!n) return void(this.slidesContainer[0].style.left = t + "px");
                var i = this,
                    r = (new Date).getTime(),
                    o = window.setInterval(function () {
                        var s = (new Date).getTime() - r;
                        return s > n ? (i.slidesContainer[0].style.left = t + "px", i.ontransitionend(), void window.clearInterval(o)) : void(i.slidesContainer[0].style.left = (t - e) * (Math.floor(s / n * 100) / 100) + e + "px")
                    }, 4)
            },
            preventDefault: function (e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            },
            onresize: function () {
                this.initSlides(!0)
            },
            onmousedown: function (e) {
                e.which && 1 === e.which && "VIDEO" !== e.target.nodeName && ((e.originalEvent || e).touches = [{
                    pageX: e.pageX,
                    pageY: e.pageY
                }], this.ontouchstart(e))
            },
            onmousemove: function (e) {
                this.touchStart && ((e.originalEvent || e).touches = [{
                    pageX: e.pageX,
                    pageY: e.pageY
                }], this.ontouchmove(e))
            },
            onmouseup: function (e) {
                this.touchStart && (this.ontouchend(e), delete this.touchStart)
            },
            onmouseout: function (t) {
                if (this.touchStart) {
                    var n = t.target,
                        i = t.relatedTarget;
                    (!i || i !== n && !e.contains(n, i)) && this.onmouseup(t)
                }
            },
            ontouchstart: function (e) {
                var t = (e.originalEvent || e).touches[0];
                this.touchStart = {
                    x: t.pageX,
                    y: t.pageY,
                    time: Date.now()
                }, this.isScrolling = void 0, this.touchDelta = {}
            },
            ontouchmove: function (e) {
                var t, n, i = (e.originalEvent || e).touches[0],
                    r = (e.originalEvent || e).scale,
                    o = this.index;
                if (!(i.length > 1 || r && 1 !== r))
                    if (this.options.disableScroll && e.preventDefault(), this.touchDelta = {
                            x: i.pageX - this.touchStart.x,
                            y: i.pageY - this.touchStart.y
                        }, t = this.touchDelta.x, void 0 === this.isScrolling && (this.isScrolling = this.isScrolling || Math.abs(t) < Math.abs(this.touchDelta.y)), this.isScrolling) this.options.closeOnSwipeUpOrDown && this.translateY(o, this.touchDelta.y + this.positions[o], 0);
                    else
                        for (e.preventDefault(), window.clearTimeout(this.timeout), this.options.continuous ? n = [this.circle(o + 1), o, this.circle(o - 1)] : (this.touchDelta.x = t /= !o && t > 0 || o === this.num - 1 && 0 > t ? Math.abs(t) / this.slideWidth + 1 : 1, n = [o], o && n.push(o - 1), o < this.num - 1 && n.unshift(o + 1)); n.length;) o = n.pop(), this.translateX(o, t + this.positions[o], 0)
            },
            ontouchend: function () {
                var e, t, n, i, r, o = this.index,
                    s = this.options.transitionSpeed,
                    a = this.slideWidth,
                    c = Number(Date.now() - this.touchStart.time) < 250,
                    u = c && Math.abs(this.touchDelta.x) > 20 || Math.abs(this.touchDelta.x) > a / 2,
                    l = !o && this.touchDelta.x > 0 || o === this.num - 1 && this.touchDelta.x < 0,
                    d = !u && this.options.closeOnSwipeUpOrDown && (c && Math.abs(this.touchDelta.y) > 20 || Math.abs(this.touchDelta.y) > this.slideHeight / 2);
                this.options.continuous && (l = !1), e = this.touchDelta.x < 0 ? -1 : 1, this.isScrolling ? d ? this.close() : this.translateY(o, 0, s) : u && !l ? (t = o + e, n = o - e, i = a * e, r = -a * e, this.options.continuous ? (this.move(this.circle(t), i, 0), this.move(this.circle(o - 2 * e), r, 0)) : t >= 0 && t < this.num && this.move(t, i, 0), this.move(o, this.positions[o] + i, s), this.move(this.circle(n), this.positions[this.circle(n)] + i, s), o = this.circle(n), this.onslide(o)) : this.options.continuous ? (this.move(this.circle(o - 1), -a, s), this.move(o, 0, s), this.move(this.circle(o + 1), a, s)) : (o && this.move(o - 1, -a, s), this.move(o, 0, s), o < this.num - 1 && this.move(o + 1, a, s))
            },
            ontransitionend: function (e) {
                var t = this.slides[this.index];
                e && t !== e.target || (this.interval && this.play(), this.setTimeout(this.options.onslideend, [this.index, t]))
            },
            oncomplete: function (t) {
                var n, i = t.target || t.srcElement,
                    r = i && i.parentNode;
                i && r && (n = this.getNodeIndex(r), e(r).removeClass(this.options.slideLoadingClass), "error" === t.type ? (e(r).addClass(this.options.slideErrorClass), this.elements[n] = 3) : this.elements[n] = 2, i.clientHeight > this.container[0].clientHeight && (i.style.maxHeight = this.container[0].clientHeight), this.interval && this.slides[this.index] === r && this.play(), this.setTimeout(this.options.onslidecomplete, [n, r]))
            },
            onload: function (e) {
                this.oncomplete(e)
            },
            onerror: function (e) {
                this.oncomplete(e)
            },
            onkeydown: function (e) {
                switch (e.which || e.keyCode) {
                case 13:
                    this.options.toggleControlsOnReturn && (this.preventDefault(e), this.toggleControls());
                    break;
                case 27:
                    this.options.closeOnEscape && this.close();
                    break;
                case 32:
                    this.options.toggleSlideshowOnSpace && (this.preventDefault(e), this.toggleSlideshow());
                    break;
                case 37:
                    this.options.enableKeyboardNavigation && (this.preventDefault(e), this.prev());
                    break;
                case 39:
                    this.options.enableKeyboardNavigation && (this.preventDefault(e), this.next())
                }
            },
            handleClick: function (t) {
                var n = this.options,
                    i = t.target || t.srcElement,
                    r = i.parentNode,
                    o = function (t) {
                        return e(i).hasClass(t) || e(r).hasClass(t)
                    };
                o(n.toggleClass) ? (this.preventDefault(t), this.toggleControls()) : o(n.prevClass) ? (this.preventDefault(t), this.prev()) : o(n.nextClass) ? (this.preventDefault(t), this.next()) : o(n.closeClass) ? (this.preventDefault(t), this.close()) : o(n.playPauseClass) ? (this.preventDefault(t), this.toggleSlideshow()) : r === this.slidesContainer[0] ? (this.preventDefault(t), n.closeOnSlideClick ? this.close() : this.toggleControls()) : r.parentNode && r.parentNode === this.slidesContainer[0] && (this.preventDefault(t), this.toggleControls())
            },
            onclick: function (e) {
                return this.options.emulateTouchEvents && this.touchDelta && (Math.abs(this.touchDelta.x) > 20 || Math.abs(this.touchDelta.y) > 20) ? void delete this.touchDelta : this.handleClick(e)
            },
            updateEdgeClasses: function (e) {
                e ? this.container.removeClass(this.options.leftEdgeClass) : this.container.addClass(this.options.leftEdgeClass), e === this.num - 1 ? this.container.addClass(this.options.rightEdgeClass) : this.container.removeClass(this.options.rightEdgeClass)
            },
            handleSlide: function (e) {
                this.options.continuous || this.updateEdgeClasses(e), this.loadElements(e), this.options.unloadElements && this.unloadElements(e), this.setTitle(e)
            },
            onslide: function (e) {
                this.index = e, this.handleSlide(e), this.setTimeout(this.options.onslide, [e, this.slides[e]])
            },
            setTitle: function (e) {
                var t = this.slides[e].firstChild.title,
                    n = this.titleElement;
                n.length && (this.titleElement.empty(), t && n[0].appendChild(document.createTextNode(t)))
            },
            setTimeout: function (e, t, n) {
                var i = this;
                return e && window.setTimeout(function () {
                    e.apply(i, t || [])
                }, n || 0)
            },
            imageFactory: function (t, n) {
                var i, r, o, s = this,
                    a = this.imagePrototype.cloneNode(!1),
                    c = t,
                    u = this.options.stretchImages,
                    l = function (t) {
                        if (!i) {
                            if (t = {
                                    type: t.type,
                                    target: r
                                }, !r.parentNode) return s.setTimeout(l, [t]);
                            i = !0, e(a).off("load error", l), u && "load" === t.type && (r.style.background = 'url("' + c + '") center no-repeat', r.style.backgroundSize = u), n(t)
                        }
                    };
                return "string" != typeof c && (c = this.getItemProperty(t, this.options.urlProperty), o = this.getItemProperty(t, this.options.titleProperty)), u === !0 && (u = "contain"), u = this.support.backgroundSize && this.support.backgroundSize[u] && u, u ? r = this.elementPrototype.cloneNode(!1) : (r = a, a.draggable = !1), o && (r.title = o), e(a).on("load error", l), a.src = c, r
            },
            createElement: function (t, n) {
                var i = t && this.getItemProperty(t, this.options.typeProperty),
                    r = i && this[i.split("/")[0] + "Factory"] || this.imageFactory,
                    o = t && r.call(this, t, n);
                return o || (o = this.elementPrototype.cloneNode(!1), this.setTimeout(n, [{
                    type: "error",
                    target: o
                }])), e(o).addClass(this.options.slideContentClass), o
            },
            loadElement: function (t) {
                this.elements[t] || (this.slides[t].firstChild ? this.elements[t] = e(this.slides[t]).hasClass(this.options.slideErrorClass) ? 3 : 2 : (this.elements[t] = 1, e(this.slides[t]).addClass(this.options.slideLoadingClass), this.slides[t].appendChild(this.createElement(this.list[t], this.proxyListener))))
            },
            loadElements: function (e) {
                var t, n = Math.min(this.num, 2 * this.options.preloadRange + 1),
                    i = e;
                for (t = 0; n > t; t += 1) i += t * (t % 2 === 0 ? -1 : 1), i = this.circle(i), this.loadElement(i)
            },
            unloadElements: function (e) {
                var t, n, i;
                for (t in this.elements) this.elements.hasOwnProperty(t) && (i = Math.abs(e - t), i > this.options.preloadRange && i + this.options.preloadRange < this.num && (n = this.slides[t], n.removeChild(n.firstChild), delete this.elements[t]))
            },
            addSlide: function (e) {
                var t = this.slidePrototype.cloneNode(!1);
                t.setAttribute("data-index", e), this.slidesContainer[0].appendChild(t), this.slides.push(t)
            },
            positionSlide: function (e) {
                var t = this.slides[e];
                t.style.width = this.slideWidth + "px", this.support.transition && (t.style.left = e * -this.slideWidth + "px", this.move(e, this.index > e ? -this.slideWidth : this.index < e ? this.slideWidth : 0, 0))
            },
            initSlides: function (t) {
                var n, i;
                for (t || (this.positions = [], this.positions.length = this.num, this.elements = {}, this.imagePrototype = document.createElement("img"), this.elementPrototype = document.createElement("div"), this.slidePrototype = document.createElement("div"), e(this.slidePrototype).addClass(this.options.slideClass), this.slides = this.slidesContainer[0].children, n = this.options.clearSlides || this.slides.length !== this.num), this.slideWidth = this.container[0].offsetWidth, this.slideHeight = this.container[0].offsetHeight, this.slidesContainer[0].style.width = this.num * this.slideWidth + "px", n && this.resetSlides(), i = 0; i < this.num; i += 1) n && this.addSlide(i), this.positionSlide(i);
                this.options.continuous && this.support.transition && (this.move(this.circle(this.index - 1), -this.slideWidth, 0), this.move(this.circle(this.index + 1), this.slideWidth, 0)), this.support.transition || (this.slidesContainer[0].style.left = this.index * -this.slideWidth + "px")
            },
            toggleControls: function () {
                var e = this.options.controlsClass;
                this.container.hasClass(e) ? this.container.removeClass(e) : this.container.addClass(e)
            },
            toggleSlideshow: function () {
                this.interval ? this.pause() : this.play()
            },
            getNodeIndex: function (e) {
                return parseInt(e.getAttribute("data-index"), 10)
            },
            getNestedProperty: function (e, t) {
                return t.replace(/\[(?:'([^']+)'|"([^"]+)"|(\d+))\]|(?:(?:^|\.)([^\.\[]+))/g, function (t, n, i, r, o) {
                    var s = o || n || i || r && parseInt(r, 10);
                    t && e && (e = e[s])
                }), e
            },
            getDataProperty: function (t, n) {
                if (t.getAttribute) {
                    var i = t.getAttribute("data-" + n.replace(/([A-Z])/g, "-$1").toLowerCase());
                    if ("string" == typeof i) {
                        if (/^(true|false|null|-?\d+(\.\d+)?|\{[\s\S]*\}|\[[\s\S]*\])$/.test(i)) try {
                            return e.parseJSON(i)
                        } catch (r) {}
                        return i
                    }
                }
            },
            getItemProperty: function (e, t) {
                var n = e[t];
                return void 0 === n && (n = this.getDataProperty(e, t), void 0 === n && (n = this.getNestedProperty(e, t))), n
            },
            initStartIndex: function () {
                var e, t = this.options.index,
                    n = this.options.urlProperty;
                if (t && "number" != typeof t)
                    for (e = 0; e < this.num; e += 1)
                        if (this.list[e] === t || this.getItemProperty(this.list[e], n) === this.getItemProperty(t, n)) {
                            t = e;
                            break
                        }
                this.index = this.circle(parseInt(t, 10) || 0)
            },
            initEventListeners: function () {
                var t = this,
                    n = this.slidesContainer,
                    i = function (e) {
                        var n = t.support.transition && t.support.transition.end === e.type ? "transitionend" : e.type;
                        t["on" + n](e)
                    };
                e(window).on("resize", i), e(document.body).on("keydown", i), this.container.on("click", i), this.support.touch ? n.on("touchstart touchmove touchend", i) : this.options.emulateTouchEvents && this.support.transition && n.on("mousedown mousemove mouseup mouseout", i), this.support.transition && n.on(this.support.transition.end, i), this.proxyListener = i
            },
            destroyEventListeners: function () {
                var t = this.slidesContainer,
                    n = this.proxyListener;
                e(window).off("resize", n), e(document.body).off("keydown", n), this.container.off("click", n), this.support.touch ? t.off("touchstart touchmove touchend", n) : this.options.emulateTouchEvents && this.support.transition && t.off("mousedown mousemove mouseup mouseout", n), this.support.transition && t.off(this.support.transition.end, n)
            },
            handleOpen: function () {
                this.options.onopened && this.options.onopened.call(this)
            },
            initWidget: function () {
                var t = this,
                    n = function (e) {
                        e.target === t.container[0] && (t.container.off(t.support.transition.end, n), t.handleOpen())
                    };
                return this.container = e(this.options.container), this.container.length ? (this.slidesContainer = this.container.find(this.options.slidesContainer).first(), this.slidesContainer.length ? (this.titleElement = this.container.find(this.options.titleElement).first(), 1 === this.num && this.container.addClass(this.options.singleClass), this.options.onopen && this.options.onopen.call(this), this.support.transition && this.options.displayTransition ? this.container.on(this.support.transition.end, n) : this.handleOpen(), this.options.hidePageScrollbars && (this.bodyOverflowStyle = document.body.style.overflow, document.body.style.overflow = "hidden"), this.container[0].style.display = "block", this.initSlides(), void this.container.addClass(this.options.displayClass)) : !1) : !1
            },
            initOptions: function (t) {
                this.options = e.extend({}, this.options), (t && t.carousel || this.options.carousel && (!t || t.carousel !== !1)) && e.extend(this.options, this.carouselOptions), e.extend(this.options, t), this.num < 3 && (this.options.continuous = this.options.continuous ? null : !1), this.support.transition || (this.options.emulateTouchEvents = !1), this.options.event && this.preventDefault(this.options.event)
            }
        }), t
    }),
    function (e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery"], e) : e(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
    }(function (e, t) {
        "use strict";
        e.extend(t.prototype.options, {
            fullScreen: !1
        });
        var n = t.prototype.initialize,
            i = t.prototype.handleClose;
        return e.extend(t.prototype, {
            getFullScreenElement: function () {
                return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement
            },
            requestFullScreen: function (e) {
                e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.mozRequestFullScreen && e.mozRequestFullScreen()
            },
            exitFullScreen: function () {
                document.exitFullscreen ? document.exitFullscreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.mozCancelFullScreen && document.mozCancelFullScreen()
            },
            initialize: function () {
                n.call(this), this.options.fullScreen && !this.getFullScreenElement() && this.requestFullScreen(this.container[0])
            },
            handleClose: function () {
                this.getFullScreenElement() === this.container[0] && this.exitFullScreen(), i.call(this)
            }
        }), t
    }),
    function (e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery"], e) : e(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
    }(function (e, t) {
        "use strict";
        e.extend(t.prototype.options, {
            indicatorContainer: "ol",
            activeIndicatorClass: "active",
            thumbnailProperty: "thumbnail",
            thumbnailIndicators: !0
        });
        var n = t.prototype.initSlides,
            i = t.prototype.addSlide,
            r = t.prototype.resetSlides,
            o = t.prototype.handleClick,
            s = t.prototype.handleSlide,
            a = t.prototype.handleClose;
        return e.extend(t.prototype, {
            createIndicator: function (t) {
                var n, i, r = this.indicatorPrototype.cloneNode(!1),
                    o = this.getItemProperty(t, this.options.titleProperty),
                    s = this.options.thumbnailProperty;
                return this.options.thumbnailIndicators && (i = t.getElementsByTagName && e(t).find("img")[0], i ? n = i.src : s && (n = this.getItemProperty(t, s)), n && (r.style.backgroundImage = 'url("' + n + '")')), o && (r.title = o), r
            },
            addIndicator: function (e) {
                if (this.indicatorContainer.length) {
                    var t = this.createIndicator(this.list[e]);
                    t.setAttribute("data-index", e), this.indicatorContainer[0].appendChild(t), this.indicators.push(t)
                }
            },
            setActiveIndicator: function (t) {
                this.indicators && (this.activeIndicator && this.activeIndicator.removeClass(this.options.activeIndicatorClass), this.activeIndicator = e(this.indicators[t]), this.activeIndicator.addClass(this.options.activeIndicatorClass))
            },
            initSlides: function (e) {
                e || (this.indicatorContainer = this.container.find(this.options.indicatorContainer), this.indicatorContainer.length && (this.indicatorPrototype = document.createElement("li"), this.indicators = this.indicatorContainer[0].children)), n.call(this, e)
            },
            addSlide: function (e) {
                i.call(this, e), this.addIndicator(e)
            },
            resetSlides: function () {
                r.call(this), this.indicatorContainer.empty(), this.indicators = []
            },
            handleClick: function (e) {
                var t = e.target || e.srcElement,
                    n = t.parentNode;
                if (n === this.indicatorContainer[0]) this.preventDefault(e), this.slide(this.getNodeIndex(t));
                else {
                    if (n.parentNode !== this.indicatorContainer[0]) return o.call(this, e);
                    this.preventDefault(e), this.slide(this.getNodeIndex(n))
                }
            },
            handleSlide: function (e) {
                s.call(this, e), this.setActiveIndicator(e)
            },
            handleClose: function () {
                this.activeIndicator && this.activeIndicator.removeClass(this.options.activeIndicatorClass), a.call(this)
            }
        }), t
    }),
    function (e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery"], e) : e(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
    }(function (e, t) {
        "use strict";
        return e.extend(t.prototype.options, {
            videoContentClass: "video-content",
            videoLoadingClass: "video-loading",
            videoPlayingClass: "video-playing",
            videoPosterProperty: "poster",
            videoSourcesProperty: "sources"
        }), t.prototype.videoFactory = function (t, n, i) {
            var r, o, s, a, c, u = this,
                l = this.options,
                d = this.elementPrototype.cloneNode(!1),
                f = e(d),
                p = [{
                    type: "error",
                    target: d
                }],
                h = i || document.createElement("video"),
                g = this.getItemProperty(t, l.urlProperty),
                m = this.getItemProperty(t, l.typeProperty),
                v = this.getItemProperty(t, l.titleProperty),
                y = this.getItemProperty(t, l.videoPosterProperty),
                b = this.getItemProperty(t, l.videoSourcesProperty);
            if (f.addClass(l.videoContentClass), v && (d.title = v), h.canPlayType)
                if (g && m && h.canPlayType(m)) h.src = g;
                else
                    for (; b && b.length;)
                        if (o = b.shift(), g = this.getItemProperty(o, l.urlProperty), m = this.getItemProperty(o, l.typeProperty), g && m && h.canPlayType(m)) {
                            h.src = g;
                            break
                        }
            return y && (h.poster = y, r = this.imagePrototype.cloneNode(!1), e(r).addClass(l.toggleClass), r.src = y, r.draggable = !1, d.appendChild(r)), s = document.createElement("a"), s.setAttribute("target", "_blank"), i || s.setAttribute("download", v), s.href = g, h.src && (h.controls = !0, (i || e(h)).on("error", function () {
                u.setTimeout(n, p)
            }).on("pause", function () {
                a = !1, f.removeClass(u.options.videoLoadingClass).removeClass(u.options.videoPlayingClass), c && u.container.addClass(u.options.controlsClass), u.interval && u.play()
            }).on("playing", function () {
                a = !1, f.removeClass(u.options.videoLoadingClass).addClass(u.options.videoPlayingClass), u.container.hasClass(u.options.controlsClass) ? (c = !0, u.container.removeClass(u.options.controlsClass)) : c = !1
            }).on("play", function () {
                window.clearTimeout(u.timeout), a = !0, f.addClass(u.options.videoLoadingClass)
            }), e(s).on("click", function (e) {
                u.preventDefault(e), a ? h.pause() : h.play()
            }), d.appendChild(i && i.element || h)), d.appendChild(s), this.setTimeout(n, [{
                type: "load",
                target: d
            }]), d
        }, t
    }),
    function (e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery-video"], e) : e(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
    }(function (e, t) {
        "use strict";
        if (!window.postMessage) return t;
        e.extend(t.prototype.options, {
            vimeoVideoIdProperty: "vimeo",
            vimeoPlayerUrl: "//player.vimeo.com/video/VIDEO_ID?api=1&player_id=PLAYER_ID",
            vimeoPlayerIdPrefix: "vimeo-player-",
            vimeoClickToPlay: !0
        });
        var n = t.prototype.textFactory || t.prototype.imageFactory,
            i = function (e, t, n, i) {
                this.url = e, this.videoId = t, this.playerId = n, this.clickToPlay = i, this.element = document.createElement("div"), this.listeners = {}
            },
            r = 0;
        return e.extend(i.prototype, {
            canPlayType: function () {
                return !0
            },
            on: function (e, t) {
                return this.listeners[e] = t, this
            },
            loadAPI: function () {
                for (var t, n, i = this, r = "//" + ("https" === location.protocol ? "secure-" : "") + "a.vimeocdn.com/js/froogaloop2.min.js", o = document.getElementsByTagName("script"), s = o.length, a = function () {
                        !n && i.playOnReady && i.play(), n = !0
                    }; s;)
                    if (s -= 1, o[s].src === r) {
                        t = o[s];
                        break
                    }
                t || (t = document.createElement("script"), t.src = r), e(t).on("load", a), o[0].parentNode.insertBefore(t, o[0]), /loaded|complete/.test(t.readyState) && a()
            },
            onReady: function () {
                var e = this;
                this.ready = !0, this.player.addEvent("play", function () {
                    e.hasPlayed = !0, e.onPlaying()
                }), this.player.addEvent("pause", function () {
                    e.onPause()
                }), this.player.addEvent("finish", function () {
                    e.onPause()
                }), this.playOnReady && this.play()
            },
            onPlaying: function () {
                this.playStatus < 2 && (this.listeners.playing(), this.playStatus = 2)
            },
            onPause: function () {
                this.listeners.pause(), delete this.playStatus
            },
            insertIframe: function () {
                var e = document.createElement("iframe");
                e.src = this.url.replace("VIDEO_ID", this.videoId).replace("PLAYER_ID", this.playerId), e.id = this.playerId, this.element.parentNode.replaceChild(e, this.element), this.element = e
            },
            play: function () {
                var e = this;
                this.playStatus || (this.listeners.play(), this.playStatus = 1), this.ready ? !this.hasPlayed && (this.clickToPlay || window.navigator && /iP(hone|od|ad)/.test(window.navigator.platform)) ? this.onPlaying() : this.player.api("play") : (this.playOnReady = !0, window.$f ? this.player || (this.insertIframe(), this.player = $f(this.element), this.player.addEvent("ready", function () {
                    e.onReady()
                })) : this.loadAPI())
            },
            pause: function () {
                this.ready ? this.player.api("pause") : this.playStatus && (delete this.playOnReady, this.listeners.pause(), delete this.playStatus)
            }
        }), e.extend(t.prototype, {
            VimeoPlayer: i,
            textFactory: function (e, t) {
                var o = this.getItemProperty(e, this.options.vimeoVideoIdProperty);
                return o ? (r += 1, this.videoFactory(e, t, new i(this.options.vimeoPlayerUrl, o, this.options.vimeoPlayerIdPrefix + r, this.options.vimeoClickToPlay))) : n.call(this, e, t)
            }
        }), t
    }),
    function (e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery-video"], e) : e(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
    }(function (e, t) {
        "use strict";
        if (!window.postMessage) return t;
        e.extend(t.prototype.options, {
            youTubeVideoIdProperty: "youtube",
            youTubePlayerVars: {
                wmode: "transparent"
            },
            youTubeClickToPlay: !0
        });
        var n = t.prototype.textFactory || t.prototype.imageFactory,
            i = function (e, t, n) {
                this.videoId = e, this.playerVars = t, this.clickToPlay = n, this.element = document.createElement("div"), this.listeners = {}
            };
        return e.extend(i.prototype, {
            canPlayType: function () {
                return !0
            },
            on: function (e, t) {
                return this.listeners[e] = t, this
            },
            loadAPI: function () {
                var e, t = this,
                    n = window.onYouTubeIframeAPIReady,
                    i = "//www.youtube.com/iframe_api",
                    r = document.getElementsByTagName("script"),
                    o = r.length;
                for (window.onYouTubeIframeAPIReady = function () {
                        n && n.apply(this), t.playOnReady && t.play()
                    }; o;)
                    if (o -= 1, r[o].src === i) return;
                e = document.createElement("script"), e.src = i, r[0].parentNode.insertBefore(e, r[0])
            },
            onReady: function () {
                this.ready = !0, this.playOnReady && this.play()
            },
            onPlaying: function () {
                this.playStatus < 2 && (this.listeners.playing(), this.playStatus = 2)
            },
            onPause: function () {
                t.prototype.setTimeout.call(this, this.checkSeek, null, 2e3)
            },
            checkSeek: function () {
                (this.stateChange === YT.PlayerState.PAUSED || this.stateChange === YT.PlayerState.ENDED) && (this.listeners.pause(), delete this.playStatus)
            },
            onStateChange: function (e) {
                switch (e.data) {
                case YT.PlayerState.PLAYING:
                    this.hasPlayed = !0, this.onPlaying();
                    break;
                case YT.PlayerState.PAUSED:
                case YT.PlayerState.ENDED:
                    this.onPause()
                }
                this.stateChange = e.data
            },
            onError: function (e) {
                this.listeners.error(e)
            },
            play: function () {
                var e = this;
                this.playStatus || (this.listeners.play(), this.playStatus = 1), this.ready ? !this.hasPlayed && (this.clickToPlay || window.navigator && /iP(hone|od|ad)/.test(window.navigator.platform)) ? this.onPlaying() : this.player.playVideo() : (this.playOnReady = !0, window.YT && YT.Player ? this.player || (this.player = new YT.Player(this.element, {
                    videoId: this.videoId,
                    playerVars: this.playerVars,
                    events: {
                        onReady: function () {
                            e.onReady()
                        },
                        onStateChange: function (t) {
                            e.onStateChange(t)
                        },
                        onError: function (t) {
                            e.onError(t)
                        }
                    }
                })) : this.loadAPI())
            },
            pause: function () {
                this.ready ? this.player.pauseVideo() : this.playStatus && (delete this.playOnReady, this.listeners.pause(), delete this.playStatus)
            }
        }), e.extend(t.prototype, {
            YouTubePlayer: i,
            textFactory: function (e, t) {
                var r = this.getItemProperty(e, this.options.youTubeVideoIdProperty);
                return r ? this.videoFactory(e, t, new i(r, this.options.youTubePlayerVars, this.options.youTubeClickToPlay)) : n.call(this, e, t)
            }
        }), t
    }),
    function () {
        function e(e, t) {
            if (e !== t) {
                var n = e === e,
                    i = t === t;
                if (e > t || !n || "undefined" == typeof e && i) return 1;
                if (t > e || !i || "undefined" == typeof t && n) return -1
            }
            return 0
        }

        function t(e, t, n) {
            if (t !== t) return p(e, n);
            for (var i = (n || 0) - 1, r = e.length; ++i < r;)
                if (e[i] === t) return i;
            return -1
        }

        function n(e) {
            return "function" == typeof e || !1
        }

        function i(e, t) {
            var n = e.length;
            for (e.sort(t); n--;) e[n] = e[n].value;
            return e
        }

        function r(e) {
            return "string" == typeof e ? e : null == e ? "" : e + ""
        }

        function o(e) {
            return e.charCodeAt(0)
        }

        function s(e, t) {
            for (var n = -1, i = e.length; ++n < i && t.indexOf(e.charAt(n)) > -1;);
            return n
        }

        function a(e, t) {
            for (var n = e.length; n-- && t.indexOf(e.charAt(n)) > -1;);
            return n
        }

        function c(t, n) {
            return e(t.criteria, n.criteria) || t.index - n.index
        }

        function u(t, n) {
            for (var i = -1, r = t.criteria, o = n.criteria, s = r.length; ++i < s;) {
                var a = e(r[i], o[i]);
                if (a) return a
            }
            return t.index - n.index
        }

        function l(e) {
            return Le[e]
        }

        function d(e) {
            return Ie[e]
        }

        function f(e) {
            return "\\" + Be[e]
        }

        function p(e, t, n) {
            for (var i = e.length, r = n ? t || i : (t || 0) - 1; n ? r-- : ++r < i;) {
                var o = e[r];
                if (o !== o) return r
            }
            return -1
        }

        function h(e) {
            return e && "object" == typeof e || !1
        }

        function g(e) {
            return 160 >= e && e >= 9 && 13 >= e || 32 == e || 160 == e || 5760 == e || 6158 == e || e >= 8192 && (8202 >= e || 8232 == e || 8233 == e || 8239 == e || 8287 == e || 12288 == e || 65279 == e)
        }

        function m(e, t) {
            for (var n = -1, i = e.length, r = -1, o = []; ++n < i;) e[n] === t && (e[n] = H, o[++r] = n);
            return o
        }

        function v(e, t) {
            for (var n, i = -1, r = e.length, o = -1, s = []; ++i < r;) {
                var a = e[i],
                    c = t ? t(a, i, e) : a;
                i && n === c || (n = c, s[++o] = a)
            }
            return s
        }

        function y(e) {
            for (var t = -1, n = e.length; ++t < n && g(e.charCodeAt(t)););
            return t
        }

        function b(e) {
            for (var t = e.length; t-- && g(e.charCodeAt(t)););
            return t
        }

        function _(e) {
            return He[e]
        }

        function x(g) {
            function Q(e) {
                if (h(e) && !Js(e) && !(e instanceof Le)) {
                    if (e instanceof ee) return e;
                    if (ns.call(e, "__chain__") && ns.call(e, "__wrapped__")) return On(e)
                }
                return new ee(e)
            }

            function J() {}

            function ee(e, t, n) {
                this.__wrapped__ = e, this.__actions__ = n || [], this.__chain__ = !!t
            }

            function Le(e) {
                this.__wrapped__ = e, this.__actions__ = null, this.__dir__ = 1, this.__dropCount__ = 0, this.__filtered__ = !1, this.__iteratees__ = null, this.__takeCount__ = Ds, this.__views__ = null
            }

            function Ie() {
                var e = this.__actions__,
                    t = this.__iteratees__,
                    n = this.__views__,
                    i = new Le(this.__wrapped__);
                return i.__actions__ = e ? Ke(e) : null, i.__dir__ = this.__dir__, i.__dropCount__ = this.__dropCount__, i.__filtered__ = this.__filtered__, i.__iteratees__ = t ? Ke(t) : null, i.__takeCount__ = this.__takeCount__, i.__views__ = n ? Ke(n) : null, i
            }

            function He() {
                if (this.__filtered__) {
                    var e = new Le(this);
                    e.__dir__ = -1, e.__filtered__ = !0
                } else e = this.clone(), e.__dir__ *= -1;
                return e
            }

            function $e() {
                var e = this.__wrapped__.value();
                if (!Js(e)) return Gt(e, this.__actions__);
                var t = this.__dir__,
                    n = 0 > t,
                    i = _n(0, e.length, this.__views__),
                    r = i.start,
                    o = i.end,
                    s = o - r,
                    a = this.__dropCount__,
                    c = Ts(s, this.__takeCount__),
                    u = n ? o : r - 1,
                    l = this.__iteratees__,
                    d = l ? l.length : 0,
                    f = 0,
                    p = [];
                e: for (; s-- && c > f;) {
                    u += t;
                    for (var h = -1, g = e[u]; ++h < d;) {
                        var m = l[h],
                            v = m.iteratee,
                            y = v(g, u, e),
                            b = m.type;
                        if (b == R) g = y;
                        else if (!y) {
                            if (b == O) continue e;
                            break e
                        }
                    }
                    a ? a-- : p[f++] = g
                }
                return p
            }

            function Be() {
                this.__data__ = {}
            }

            function Ue(e) {
                return this.has(e) && delete this.__data__[e]
            }

            function Xe(e) {
                return "__proto__" == e ? w : this.__data__[e]
            }

            function Ve(e) {
                return "__proto__" != e && ns.call(this.__data__, e)
            }

            function Qe(e, t) {
                return "__proto__" != e && (this.__data__[e] = t), this
            }

            function Ge(e) {
                var t = e ? e.length : 0;
                for (this.data = {
                        hash: ws(null),
                        set: new gs
                    }; t--;) this.push(e[t])
            }

            function Ze(e, t) {
                var n = e.data,
                    i = "string" == typeof t || Sr(t) ? n.set.has(t) : n.hash[t];
                return i ? 0 : -1
            }

            function Je(e) {
                var t = this.data;
                "string" == typeof e || Sr(e) ? t.set.add(e) : t.hash[e] = !0
            }

            function Ke(e, t) {
                var n = -1,
                    i = e.length;
                for (t || (t = Ho(i)); ++n < i;) t[n] = e[n];
                return t
            }

            function et(e, t) {
                for (var n = -1, i = e.length; ++n < i && t(e[n], n, e) !== !1;);
                return e
            }

            function tt(e, t) {
                for (var n = e.length; n-- && t(e[n], n, e) !== !1;);
                return e
            }

            function nt(e, t) {
                for (var n = -1, i = e.length; ++n < i;)
                    if (!t(e[n], n, e)) return !1;
                return !0
            }

            function it(e, t) {
                for (var n = -1, i = e.length, r = -1, o = []; ++n < i;) {
                    var s = e[n];
                    t(s, n, e) && (o[++r] = s)
                }
                return o
            }

            function rt(e, t) {
                for (var n = -1, i = e.length, r = Ho(i); ++n < i;) r[n] = t(e[n], n, e);
                return r
            }

            function ot(e) {
                for (var t = -1, n = e.length, i = Ms; ++t < n;) {
                    var r = e[t];
                    r > i && (i = r)
                }
                return i
            }

            function st(e) {
                for (var t = -1, n = e.length, i = Ds; ++t < n;) {
                    var r = e[t];
                    i > r && (i = r)
                }
                return i
            }

            function at(e, t, n, i) {
                var r = -1,
                    o = e.length;
                for (i && o && (n = e[++r]); ++r < o;) n = t(n, e[r], r, e);
                return n
            }

            function ct(e, t, n, i) {
                var r = e.length;
                for (i && r && (n = e[--r]); r--;) n = t(n, e[r], r, e);
                return n
            }

            function ut(e, t) {
                for (var n = -1, i = e.length; ++n < i;)
                    if (t(e[n], n, e)) return !0;
                return !1
            }

            function lt(e, t) {
                return "undefined" == typeof e ? t : e
            }

            function dt(e, t, n, i) {
                return "undefined" != typeof e && ns.call(i, n) ? e : t
            }

            function ft(e, t, n) {
                var i = ia(t);
                if (!n) return ht(t, e, i);
                for (var r = -1, o = i.length; ++r < o;) {
                    var s = i[r],
                        a = e[s],
                        c = n(a, t[s], s, e, t);
                    (c === c ? c === a : a !== a) && ("undefined" != typeof a || s in e) || (e[s] = c)
                }
                return e
            }

            function pt(e, t) {
                for (var n = -1, i = e.length, r = En(i), o = t.length, s = Ho(o); ++n < o;) {
                    var a = t[n];
                    r ? (a = parseFloat(a), s[n] = kn(a, i) ? e[a] : w) : s[n] = e[a]
                }
                return s
            }

            function ht(e, t, n) {
                n || (n = t, t = {});
                for (var i = -1, r = n.length; ++i < r;) {
                    var o = n[i];
                    t[o] = e[o]
                }
                return t
            }

            function gt(e, t) {
                for (var n = -1, i = t.length; ++n < i;) {
                    var r = t[n];
                    e[r] = pn(e[r], C, e)
                }
                return e
            }

            function mt(e, t, n) {
                var i = typeof e;
                return "function" == i ? "undefined" != typeof t && Cn(e) ? Kt(e, t, n) : e : null == e ? Fo : "object" == i ? Rt(e) : "undefined" == typeof t ? $t(e + "") : Lt(e + "", t)
            }

            function vt(e, t, n, i, r, o, s) {
                var a;
                if (n && (a = r ? n(e, i, r) : n(e)), "undefined" != typeof a) return a;
                if (!Sr(e)) return e;
                var c = Js(e);
                if (c) {
                    if (a = xn(e), !t) return Ke(e, a)
                } else {
                    var u = rs.call(e),
                        l = u == V;
                    if (u != G && u != $ && (!l || r)) return Oe[u] ? An(e, u, t) : r ? e : {};
                    if (a = wn(l ? {} : e), !t) return ht(e, a, ia(e))
                }
                o || (o = []), s || (s = []);
                for (var d = o.length; d--;)
                    if (o[d] == e) return s[d];
                return o.push(e), s.push(a), (c ? et : Ft)(e, function (i, r) {
                    a[r] = vt(i, t, n, r, e, o, s)
                }), a
            }

            function yt(e, t, n, i) {
                if ("function" != typeof e) throw new Go(I);
                return ms(function () {
                    e.apply(w, Xt(n, i))
                }, t)
            }

            function bt(e, n) {
                var i = e ? e.length : 0,
                    r = [];
                if (!i) return r;
                var o = -1,
                    s = bn(),
                    a = s == t,
                    c = a && n.length >= 200 ? $s(n) : null,
                    u = n.length;
                c && (s = Ze, a = !1, n = c);
                e: for (; ++o < i;) {
                    var l = e[o];
                    if (a && l === l) {
                        for (var d = u; d--;)
                            if (n[d] === l) continue e;
                        r.push(l)
                    } else s(n, l) < 0 && r.push(l)
                }
                return r
            }

            function _t(e, t) {
                var n = e ? e.length : 0;
                if (!En(n)) return Ft(e, t);
                for (var i = -1, r = Pn(e); ++i < n && t(r[i], i, r) !== !1;);
                return e
            }

            function xt(e, t) {
                var n = e ? e.length : 0;
                if (!En(n)) return Mt(e, t);
                for (var i = Pn(e); n-- && t(i[n], n, i) !== !1;);
                return e
            }

            function wt(e, t) {
                var n = !0;
                return _t(e, function (e, i, r) {
                    return n = !!t(e, i, r)
                }), n
            }

            function At(e, t, n, i) {
                var r = e.length;
                for (n = null == n ? 0 : +n || 0, 0 > n && (n = -n > r ? 0 : r + n), i = "undefined" == typeof i || i > r ? r : +i || 0, 0 > i && (i += r), r = n > i ? 0 : i >>> 0, n >>>= 0; r > n;) e[n++] = t;
                return e
            }

            function Ct(e, t) {
                var n = [];
                return _t(e, function (e, i, r) {
                    t(e, i, r) && n.push(e)
                }), n
            }

            function kt(e, t, n, i) {
                var r;
                return n(e, function (e, n, o) {
                    return t(e, n, o) ? (r = i ? n : e, !1) : void 0
                }), r
            }

            function Tt(e, t, n, i) {
                for (var r = (i || 0) - 1, o = e.length, s = -1, a = []; ++r < o;) {
                    var c = e[r];
                    if (h(c) && En(c.length) && (Js(c) || xr(c))) {
                        t && (c = Tt(c, t, n));
                        var u = -1,
                            l = c.length;
                        for (a.length += l; ++u < l;) a[++s] = c[u]
                    } else n || (a[++s] = c)
                }
                return a
            }

            function Et(e, t, n) {
                for (var i = -1, r = Pn(e), o = n(e), s = o.length; ++i < s;) {
                    var a = o[i];
                    if (t(r[a], a, r) === !1) break
                }
                return e
            }

            function St(e, t, n) {
                for (var i = Pn(e), r = n(e), o = r.length; o--;) {
                    var s = r[o];
                    if (t(i[s], s, i) === !1) break
                }
                return e
            }

            function jt(e, t) {
                return Et(e, t, Zr)
            }

            function Ft(e, t) {
                return Et(e, t, ia)
            }

            function Mt(e, t) {
                return St(e, t, ia)
            }

            function Dt(e, t) {
                for (var n = -1, i = t.length, r = -1, o = []; ++n < i;) {
                    var s = t[n];
                    ea(e[s]) && (o[++r] = s)
                }
                return o
            }

            function Nt(e, t, n) {
                var i = -1,
                    r = "function" == typeof t,
                    o = e ? e.length : 0,
                    s = En(o) ? Ho(o) : [];
                return _t(e, function (e) {
                    var o = r ? t : null != e && e[t];
                    s[++i] = o ? o.apply(e, n) : w
                }), s
            }

            function qt(e, t, n, i, r, o) {
                if (e === t) return 0 !== e || 1 / e == 1 / t;
                var s = typeof e,
                    a = typeof t;
                return "function" != s && "object" != s && "function" != a && "object" != a || null == e || null == t ? e !== e && t !== t : zt(e, t, qt, n, i, r, o)
            }

            function zt(e, t, n, i, r, o, s) {
                var a = Js(e),
                    c = Js(t),
                    u = B,
                    l = B;
                a || (u = rs.call(e), u == $ ? u = G : u != G && (a = Pr(e))), c || (l = rs.call(t), l == $ ? l = G : l != G && (c = Pr(t)));
                var d = u == G,
                    f = l == G,
                    p = u == l;
                if (p && !a && !d) return gn(e, t, u);
                var h = d && ns.call(e, "__wrapped__"),
                    g = f && ns.call(t, "__wrapped__");
                if (h || g) return n(h ? e.value() : e, g ? t.value() : t, i, r, o, s);
                if (!p) return !1;
                o || (o = []), s || (s = []);
                for (var m = o.length; m--;)
                    if (o[m] == e) return s[m] == t;
                o.push(e), s.push(t);
                var v = (a ? hn : mn)(e, t, n, i, r, o, s);
                return o.pop(), s.pop(), v
            }

            function Pt(e, t, n, i, r) {
                var o = t.length;
                if (null == e) return !o;
                for (var s = -1, a = !r; ++s < o;)
                    if (a && i[s] ? n[s] !== e[t[s]] : !ns.call(e, t[s])) return !1;
                for (s = -1; ++s < o;) {
                    var c = t[s];
                    if (a && i[s]) var u = ns.call(e, c);
                    else {
                        var l = e[c],
                            d = n[s];
                        u = r ? r(l, d, c) : w, "undefined" == typeof u && (u = qt(d, l, r, !0))
                    }
                    if (!u) return !1
                }
                return !0
            }

            function Ot(e, t) {
                var n = [];
                return _t(e, function (e, i, r) {
                    n.push(t(e, i, r))
                }), n
            }

            function Rt(e) {
                var t = ia(e),
                    n = t.length;
                if (1 == n) {
                    var i = t[0],
                        r = e[i];
                    if (Sn(r)) return function (e) {
                        return null != e && e[i] === r && ns.call(e, i)
                    }
                }
                for (var o = Ho(n), s = Ho(n); n--;) r = e[t[n]], o[n] = r, s[n] = Sn(r);
                return function (e) {
                    return Pt(e, t, o, s)
                }
            }

            function Lt(e, t) {
                return Sn(t) ? function (n) {
                    return null != n && n[e] === t
                } : function (n) {
                    return null != n && qt(t, n[e], null, !0)
                }
            }

            function It(e, t, n, i, r) {
                if (!Sr(e)) return e;
                var o = En(t.length) && (Js(t) || Pr(t));
                return (o ? et : Ft)(t, function (t, s, a) {
                    if (h(t)) return i || (i = []), r || (r = []), Ht(e, a, s, It, n, i, r);
                    var c = e[s],
                        u = n ? n(c, t, s, e, a) : w,
                        l = "undefined" == typeof u;
                    l && (u = t), !o && "undefined" == typeof u || !l && (u === u ? u === c : c !== c) || (e[s] = u)
                }), e
            }

            function Ht(e, t, n, i, r, o, s) {
                for (var a = o.length, c = t[n]; a--;)
                    if (o[a] == c) return void(e[n] = s[a]);
                var u = e[n],
                    l = r ? r(u, c, n, e, t) : w,
                    d = "undefined" == typeof l;
                d && (l = c, En(c.length) && (Js(c) || Pr(c)) ? l = Js(u) ? u : u ? Ke(u) : [] : ta(c) || xr(c) ? l = xr(u) ? Lr(u) : ta(u) ? u : {} : d = !1), o.push(c), s.push(l), d ? e[n] = i(l, c, r, o, s) : (l === l ? l !== u : u === u) && (e[n] = l)
            }

            function $t(e) {
                return function (t) {
                    return null == t ? w : t[e]
                }
            }

            function Bt(t, n) {
                var i = n.length,
                    r = pt(t, n);
                for (n.sort(e); i--;) {
                    var o = parseFloat(n[i]);
                    if (o != s && kn(o)) {
                        var s = o;
                        vs.call(t, o, 1)
                    }
                }
                return r
            }

            function Wt(e, t) {
                return e + ds(Fs() * (t - e + 1))
            }

            function Ut(e, t, n, i, r) {
                return r(e, function (e, r, o) {
                    n = i ? (i = !1, e) : t(n, e, r, o)
                }), n
            }

            function Xt(e, t, n) {
                var i = -1,
                    r = e.length;
                t = null == t ? 0 : +t || 0, 0 > t && (t = -t > r ? 0 : r + t), n = "undefined" == typeof n || n > r ? r : +n || 0, 0 > n && (n += r), r = t > n ? 0 : n - t >>> 0, t >>>= 0;
                for (var o = Ho(r); ++i < r;) o[i] = e[i + t];
                return o
            }

            function Vt(e, t) {
                var n;
                return _t(e, function (e, i, r) {
                    return n = t(e, i, r), !n
                }), !!n
            }

            function Qt(e, n) {
                var i = -1,
                    r = bn(),
                    o = e.length,
                    s = r == t,
                    a = s && o >= 200,
                    c = a ? $s() : null,
                    u = [];
                c ? (r = Ze, s = !1) : (a = !1, c = n ? [] : u);
                e: for (; ++i < o;) {
                    var l = e[i],
                        d = n ? n(l, i, e) : l;
                    if (s && l === l) {
                        for (var f = c.length; f--;)
                            if (c[f] === d) continue e;
                        n && c.push(d), u.push(l)
                    } else r(c, d) < 0 && ((n || a) && c.push(d), u.push(l))
                }
                return u
            }

            function Yt(e, t) {
                for (var n = -1, i = t.length, r = Ho(i); ++n < i;) r[n] = e[t[n]];
                return r
            }

            function Gt(e, t) {
                var n = e;
                n instanceof Le && (n = n.value());
                for (var i = -1, r = t.length; ++i < r;) {
                    var o = [n],
                        s = t[i];
                    ps.apply(o, s.args), n = s.func.apply(s.thisArg, o)
                }
                return n
            }

            function Zt(e, t, n) {
                var i = 0,
                    r = e ? e.length : i;
                if ("number" == typeof t && t === t && zs >= r) {
                    for (; r > i;) {
                        var o = i + r >>> 1,
                            s = e[o];
                        (n ? t >= s : t > s) ? i = o + 1: r = o
                    }
                    return r
                }
                return Jt(e, t, Fo, n)
            }

            function Jt(e, t, n, i) {
                t = n(t);
                for (var r = 0, o = e ? e.length : 0, s = t !== t, a = "undefined" == typeof t; o > r;) {
                    var c = ds((r + o) / 2),
                        u = n(e[c]),
                        l = u === u;
                    if (s) var d = l || i;
                    else d = a ? l && (i || "undefined" != typeof u) : i ? t >= u : t > u;
                    d ? r = c + 1 : o = c
                }
                return Ts(o, qs)
            }

            function Kt(e, t, n) {
                if ("function" != typeof e) return Fo;
                if ("undefined" == typeof t) return e;
                switch (n) {
                case 1:
                    return function (n) {
                        return e.call(t, n)
                    };
                case 3:
                    return function (n, i, r) {
                        return e.call(t, n, i, r)
                    };
                case 4:
                    return function (n, i, r, o) {
                        return e.call(t, n, i, r, o)
                    };
                case 5:
                    return function (n, i, r, o, s) {
                        return e.call(t, n, i, r, o, s)
                    }
                }
                return function () {
                    return e.apply(t, arguments)
                }
            }

            function en(e) {
                return cs.call(e, 0)
            }

            function tn(e, t, n) {
                for (var i = n.length, r = -1, o = ks(e.length - i, 0), s = -1, a = t.length, c = Ho(o + a); ++s < a;) c[s] = t[s];
                for (; ++r < i;) c[n[r]] = e[r];
                for (; o--;) c[s++] = e[r++];
                return c
            }

            function nn(e, t, n) {
                for (var i = -1, r = n.length, o = -1, s = ks(e.length - r, 0), a = -1, c = t.length, u = Ho(s + c); ++o < s;) u[o] = e[o];
                for (var l = o; ++a < c;) u[l + a] = t[a];
                for (; ++i < r;) u[l + n[i]] = e[o++];
                return u
            }

            function rn(e, t) {
                return function (n, i, r) {
                    var o = t ? t() : {};
                    if (i = yn(i, r, 3), Js(n))
                        for (var s = -1, a = n.length; ++s < a;) {
                            var c = n[s];
                            e(o, c, i(c, s, n), n)
                        } else _t(n, function (t, n, r) {
                            e(o, t, i(t, n, r), r)
                        });
                    return o
                }
            }

            function on(e) {
                return function () {
                    var t = arguments.length,
                        n = arguments[0];
                    if (2 > t || null == n) return n;
                    if (t > 3 && Tn(arguments[1], arguments[2], arguments[3]) && (t = 2), t > 3 && "function" == typeof arguments[t - 2]) var i = Kt(arguments[--t - 1], arguments[t--], 5);
                    else t > 2 && "function" == typeof arguments[t - 1] && (i = arguments[--t]);
                    for (var r = 0; ++r < t;) {
                        var o = arguments[r];
                        o && e(n, o, i)
                    }
                    return n
                }
            }

            function sn(e, t) {
                function n() {
                    return (this instanceof n ? i : e).apply(t, arguments)
                }
                var i = cn(e);
                return n
            }

            function an(e) {
                return function (t) {
                    for (var n = -1, i = To(uo(t)), r = i.length, o = ""; ++n < r;) o = e(o, i[n], n);
                    return o
                }
            }

            function cn(e) {
                return function () {
                    var t = Is(e.prototype),
                        n = e.apply(t, arguments);
                    return Sr(n) ? n : t
                }
            }

            function un(e, t) {
                return function (n, i, r) {
                    r && Tn(n, i, r) && (i = null);
                    var s = yn(),
                        a = null == i;
                    if (s === mt && a || (a = !1, i = s(i, r, 3)), a) {
                        var c = Js(n);
                        if (c || !zr(n)) return e(c ? n : zn(n));
                        i = o
                    }
                    return vn(n, i, t)
                }
            }

            function ln(e, t, n, i, r, o, s, a, c, u) {
                function l() {
                    for (var _ = arguments.length, x = _, w = Ho(_); x--;) w[x] = arguments[x];
                    if (i && (w = tn(w, i, r)), o && (w = nn(w, o, s)), h || v) {
                        var A = l.placeholder,
                            T = m(w, A);
                        if (_ -= T.length, u > _) {
                            var E = a ? Ke(a) : null,
                                S = ks(u - _, 0),
                                M = h ? T : null,
                                D = h ? null : T,
                                N = h ? w : null,
                                q = h ? null : w;
                            t |= h ? j : F, t &= ~(h ? F : j), g || (t &= ~(C | k));
                            var z = ln(e, t, n, N, M, q, D, E, c, S);
                            return z.placeholder = A, z
                        }
                    }
                    var P = f ? n : this;
                    return p && (e = P[b]), a && (w = Dn(w, a)), d && c < w.length && (w.length = c), (this instanceof l ? y || cn(e) : e).apply(P, w)
                }
                var d = t & D,
                    f = t & C,
                    p = t & k,
                    h = t & E,
                    g = t & T,
                    v = t & S,
                    y = !p && cn(e),
                    b = e;
                return l
            }

            function dn(e, t, n) {
                var i = e.length;
                if (t = +t, i >= t || !As(t)) return "";
                var r = t - i;
                return n = null == n ? " " : n + "", yo(n, us(r / n.length)).slice(0, r)
            }

            function fn(e, t, n, i) {
                function r() {
                    for (var t = -1, a = arguments.length, c = -1, u = i.length, l = Ho(a + u); ++c < u;) l[c] = i[c];
                    for (; a--;) l[c++] = arguments[++t];
                    return (this instanceof r ? s : e).apply(o ? n : this, l)
                }
                var o = t & C,
                    s = cn(e);
                return r
            }

            function pn(e, t, n, i, r, o, s, a) {
                var c = t & k;
                if (!c && "function" != typeof e) throw new Go(I);
                var u = i ? i.length : 0;
                if (u || (t &= ~(j | F), i = r = null), u -= r ? r.length : 0, t & F) {
                    var l = i,
                        d = r;
                    i = r = null
                }
                var f = !c && Bs(e),
                    p = [e, t, n, i, r, l, d, o, s, a];
                if (f && f !== !0 && (jn(p, f), t = p[1], a = p[9]), p[9] = null == a ? c ? 0 : e.length : ks(a - u, 0) || 0, t == C) var h = sn(p[0], p[2]);
                else h = t != j && t != (C | j) || p[4].length ? ln.apply(w, p) : fn.apply(w, p);
                var g = f ? Hs : Ws;
                return g(h, p)
            }

            function hn(e, t, n, i, r, o, s) {
                var a = -1,
                    c = e.length,
                    u = t.length,
                    l = !0;
                if (c != u && !(r && u > c)) return !1;
                for (; l && ++a < c;) {
                    var d = e[a],
                        f = t[a];
                    if (l = w, i && (l = r ? i(f, d, a) : i(d, f, a)), "undefined" == typeof l)
                        if (r)
                            for (var p = u; p-- && (f = t[p], !(l = d && d === f || n(d, f, i, r, o, s))););
                        else l = d && d === f || n(d, f, i, r, o, s)
                }
                return !!l
            }

            function gn(e, t, n) {
                switch (n) {
                case W:
                case U:
                    return +e == +t;
                case X:
                    return e.name == t.name && e.message == t.message;
                case Y:
                    return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
                case Z:
                case K:
                    return e == t + ""
                }
                return !1
            }

            function mn(e, t, n, i, r, o, s) {
                var a = ia(e),
                    c = a.length,
                    u = ia(t),
                    l = u.length;
                if (c != l && !r) return !1;
                for (var d, f = -1; ++f < c;) {
                    var p = a[f],
                        h = ns.call(t, p);
                    if (h) {
                        var g = e[p],
                            m = t[p];
                        h = w, i && (h = r ? i(m, g, p) : i(g, m, p)), "undefined" == typeof h && (h = g && g === m || n(g, m, i, r, o, s))
                    }
                    if (!h) return !1;
                    d || (d = "constructor" == p)
                }
                if (!d) {
                    var v = e.constructor,
                        y = t.constructor;
                    if (v != y && "constructor" in e && "constructor" in t && !("function" == typeof v && v instanceof v && "function" == typeof y && y instanceof y)) return !1
                }
                return !0
            }

            function vn(e, t, n) {
                var i = n ? Ds : Ms,
                    r = i,
                    o = r;
                return _t(e, function (e, s, a) {
                    var c = t(e, s, a);
                    ((n ? r > c : c > r) || c === i && c === o) && (r = c, o = e)
                }), o
            }

            function yn(e, t, n) {
                var i = Q.callback || So;
                return i = i === So ? mt : i, n ? i(e, t, n) : i
            }

            function bn(e, n, i) {
                var r = Q.indexOf || Zn;
                return r = r === Zn ? t : r, e ? r(e, n, i) : r
            }

            function _n(e, t, n) {
                for (var i = -1, r = n ? n.length : 0; ++i < r;) {
                    var o = n[i],
                        s = o.size;
                    switch (o.type) {
                    case "drop":
                        e += s;
                        break;
                    case "dropRight":
                        t -= s;
                        break;
                    case "take":
                        t = Ts(t, e + s);
                        break;
                    case "takeRight":
                        e = ks(e, t - s)
                    }
                }
                return {
                    start: e,
                    end: t
                }
            }

            function xn(e) {
                var t = e.length,
                    n = new e.constructor(t);
                return t && "string" == typeof e[0] && ns.call(e, "index") && (n.index = e.index, n.input = e.input), n
            }

            function wn(e) {
                var t = e.constructor;
                return "function" == typeof t && t instanceof t || (t = Vo), new t
            }

            function An(e, t, n) {
                var i = e.constructor;
                switch (t) {
                case te:
                    return en(e);
                case W:
                case U:
                    return new i(+e);
                case ne:
                case ie:
                case re:
                case oe:
                case se:
                case ae:
                case ce:
                case ue:
                case le:
                    var r = e.buffer;
                    return new i(n ? en(r) : r, e.byteOffset, e.length);
                case Y:
                case K:
                    return new i(e);
                case Z:
                    var o = new i(e.source, we.exec(e));
                    o.lastIndex = e.lastIndex
                }
                return o
            }

            function Cn(e) {
                var t = Q.support,
                    n = !(t.funcNames ? e.name : t.funcDecomp);
                if (!n) {
                    var i = es.call(e);
                    t.funcNames || (n = !Ae.test(i)), n || (n = Fe.test(i) || Mr(e), Hs(e, n))
                }
                return n
            }

            function kn(e, t) {
                return e = +e, t = null == t ? Os : t, e > -1 && e % 1 == 0 && t > e
            }

            function Tn(e, t, n) {
                if (!Sr(n)) return !1;
                var i = typeof t;
                if ("number" == i) var r = n.length,
                    o = En(r) && kn(t, r);
                else o = "string" == i && t in n;
                if (o) {
                    var s = n[t];
                    return e === e ? e === s : s !== s
                }
                return !1
            }

            function En(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && Os >= e
            }

            function Sn(e) {
                return e === e && (0 === e ? 1 / e > 0 : !Sr(e))
            }

            function jn(e, t) {
                var n = e[1],
                    i = t[1],
                    r = n | i,
                    o = D | M,
                    s = C | k,
                    a = o | s | T | S,
                    c = n & D && !(i & D),
                    u = n & M && !(i & M),
                    l = (u ? e : t)[7],
                    d = (c ? e : t)[8],
                    f = !(n >= M && i > s || n > s && i >= M),
                    p = r >= o && a >= r && (M > n || (u || c) && l.length <= d);
                if (!f && !p) return e;
                i & C && (e[2] = t[2], r |= n & C ? 0 : T);
                var h = t[3];
                if (h) {
                    var g = e[3];
                    e[3] = g ? tn(g, h, t[4]) : Ke(h), e[4] = g ? m(e[3], H) : Ke(t[4])
                }
                return h = t[5], h && (g = e[5], e[5] = g ? nn(g, h, t[6]) : Ke(h), e[6] = g ? m(e[5], H) : Ke(t[6])), h = t[7], h && (e[7] = Ke(h)), i & D && (e[8] = null == e[8] ? t[8] : Ts(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = r, e
            }

            function Fn(e, t) {
                e = Pn(e);
                for (var n = -1, i = t.length, r = {}; ++n < i;) {
                    var o = t[n];
                    o in e && (r[o] = e[o])
                }
                return r
            }

            function Mn(e, t) {
                var n = {};
                return jt(e, function (e, i, r) {
                    t(e, i, r) && (n[i] = e)
                }), n
            }

            function Dn(e, t) {
                for (var n = e.length, i = Ts(t.length, n), r = Ke(e); i--;) {
                    var o = t[i];
                    e[i] = kn(o, n) ? r[o] : w
                }
                return e
            }

            function Nn(e) {
                var t;
                Q.support;
                if (!h(e) || rs.call(e) != G || !ns.call(e, "constructor") && (t = e.constructor, "function" == typeof t && !(t instanceof t))) return !1;
                var n;
                return jt(e, function (e, t) {
                    n = t
                }), "undefined" == typeof n || ns.call(e, n)
            }

            function qn(e) {
                for (var t = Zr(e), n = t.length, i = n && e.length, r = Q.support, o = i && En(i) && (Js(e) || r.nonEnumArgs && xr(e)), s = -1, a = []; ++s < n;) {
                    var c = t[s];
                    (o && kn(c, i) || ns.call(e, c)) && a.push(c)
                }
                return a
            }

            function zn(e) {
                return null == e ? [] : En(e.length) ? Sr(e) ? e : Vo(e) : ro(e)
            }

            function Pn(e) {
                return Sr(e) ? e : Vo(e)
            }

            function On(e) {
                return e instanceof Le ? e.clone() : new ee(e.__wrapped__, e.__chain__, Ke(e.__actions__))
            }

            function Rn(e, t, n) {
                t = (n ? Tn(e, t, n) : null == t) ? 1 : ks(+t || 1, 1);
                for (var i = 0, r = e ? e.length : 0, o = -1, s = Ho(us(r / t)); r > i;) s[++o] = Xt(e, i, i += t);
                return s
            }

            function Ln(e) {
                for (var t = -1, n = e ? e.length : 0, i = -1, r = []; ++t < n;) {
                    var o = e[t];
                    o && (r[++i] = o)
                }
                return r
            }

            function In() {
                for (var e = -1, t = arguments.length; ++e < t;) {
                    var n = arguments[e];
                    if (Js(n) || xr(n)) break
                }
                return bt(n, Tt(arguments, !1, !0, ++e))
            }

            function Hn(e, t, n) {
                var i = e ? e.length : 0;
                return i ? ((n ? Tn(e, t, n) : null == t) && (t = 1), Xt(e, 0 > t ? 0 : t)) : []
            }

            function $n(e, t, n) {
                var i = e ? e.length : 0;
                return i ? ((n ? Tn(e, t, n) : null == t) && (t = 1), t = i - (+t || 0), Xt(e, 0, 0 > t ? 0 : t)) : []
            }

            function Bn(e, t, n) {
                var i = e ? e.length : 0;
                if (!i) return [];
                for (t = yn(t, n, 3); i-- && t(e[i], i, e););
                return Xt(e, 0, i + 1)
            }

            function Wn(e, t, n) {
                var i = e ? e.length : 0;
                if (!i) return [];
                var r = -1;
                for (t = yn(t, n, 3); ++r < i && t(e[r], r, e););
                return Xt(e, r)
            }

            function Un(e, t, n, i) {
                var r = e ? e.length : 0;
                return r ? (n && "number" != typeof n && Tn(e, t, n) && (n = 0, i = r), At(e, t, n, i)) : []
            }

            function Xn(e, t, n) {
                var i = -1,
                    r = e ? e.length : 0;
                for (t = yn(t, n, 3); ++i < r;)
                    if (t(e[i], i, e)) return i;
                return -1
            }

            function Vn(e, t, n) {
                var i = e ? e.length : 0;
                for (t = yn(t, n, 3); i--;)
                    if (t(e[i], i, e)) return i;
                return -1
            }

            function Qn(e) {
                return e ? e[0] : w
            }

            function Yn(e, t, n) {
                var i = e ? e.length : 0;
                return n && Tn(e, t, n) && (t = !1), i ? Tt(e, t) : []
            }

            function Gn(e) {
                var t = e ? e.length : 0;
                return t ? Tt(e, !0) : []
            }

            function Zn(e, n, i) {
                var r = e ? e.length : 0;
                if (!r) return -1;
                if ("number" == typeof i) i = 0 > i ? ks(r + i, 0) : i || 0;
                else if (i) {
                    var o = Zt(e, n),
                        s = e[o];
                    return (n === n ? n === s : s !== s) ? o : -1
                }
                return t(e, n, i)
            }

            function Jn(e) {
                return $n(e, 1)
            }

            function Kn() {
                for (var e = [], n = -1, i = arguments.length, r = [], o = bn(), s = o == t; ++n < i;) {
                    var a = arguments[n];
                    (Js(a) || xr(a)) && (e.push(a), r.push(s && a.length >= 120 ? $s(n && a) : null))
                }
                i = e.length;
                var c = e[0],
                    u = -1,
                    l = c ? c.length : 0,
                    d = [],
                    f = r[0];
                e: for (; ++u < l;)
                    if (a = c[u], (f ? Ze(f, a) : o(d, a)) < 0) {
                        for (n = i; --n;) {
                            var p = r[n];
                            if ((p ? Ze(p, a) : o(e[n], a)) < 0) continue e
                        }
                        f && f.push(a), d.push(a)
                    }
                return d
            }

            function ei(e) {
                var t = e ? e.length : 0;
                return t ? e[t - 1] : w
            }

            function ti(e, t, n) {
                var i = e ? e.length : 0;
                if (!i) return -1;
                var r = i;
                if ("number" == typeof n) r = (0 > n ? ks(i + n, 0) : Ts(n || 0, i - 1)) + 1;
                else if (n) {
                    r = Zt(e, t, !0) - 1;
                    var o = e[r];
                    return (t === t ? t === o : o !== o) ? r : -1
                }
                if (t !== t) return p(e, r, !0);
                for (; r--;)
                    if (e[r] === t) return r;
                return -1
            }

            function ni() {
                var e = arguments[0];
                if (!e || !e.length) return e;
                for (var t = 0, n = bn(), i = arguments.length; ++t < i;)
                    for (var r = 0, o = arguments[t];
                        (r = n(e, o, r)) > -1;) vs.call(e, r, 1);
                return e
            }

            function ii(e) {
                return Bt(e || [], Tt(arguments, !1, !1, 1))
            }

            function ri(e, t, n) {
                var i = -1,
                    r = e ? e.length : 0,
                    o = [];
                for (t = yn(t, n, 3); ++i < r;) {
                    var s = e[i];
                    t(s, i, e) && (o.push(s), vs.call(e, i--, 1), r--)
                }
                return o
            }

            function oi(e) {
                return Hn(e, 1)
            }

            function si(e, t, n) {
                var i = e ? e.length : 0;
                return i ? (n && "number" != typeof n && Tn(e, t, n) && (t = 0, n = i), Xt(e, t, n)) : []
            }

            function ai(e, t, n, i) {
                var r = yn(n);
                return r === mt && null == n ? Zt(e, t) : Jt(e, t, r(n, i, 1))
            }

            function ci(e, t, n, i) {
                var r = yn(n);
                return r === mt && null == n ? Zt(e, t, !0) : Jt(e, t, r(n, i, 1), !0)
            }

            function ui(e, t, n) {
                var i = e ? e.length : 0;
                return i ? ((n ? Tn(e, t, n) : null == t) && (t = 1), Xt(e, 0, 0 > t ? 0 : t)) : []
            }

            function li(e, t, n) {
                var i = e ? e.length : 0;
                return i ? ((n ? Tn(e, t, n) : null == t) && (t = 1), t = i - (+t || 0), Xt(e, 0 > t ? 0 : t)) : []
            }

            function di(e, t, n) {
                var i = e ? e.length : 0;
                if (!i) return [];
                for (t = yn(t, n, 3); i-- && t(e[i], i, e););
                return Xt(e, i + 1)
            }

            function fi(e, t, n) {
                var i = e ? e.length : 0;
                if (!i) return [];
                var r = -1;
                for (t = yn(t, n, 3); ++r < i && t(e[r], r, e););
                return Xt(e, 0, r)
            }

            function pi() {
                return Qt(Tt(arguments, !1, !0))
            }

            function hi(e, n, i, r) {
                var o = e ? e.length : 0;
                if (!o) return [];
                null != n && "boolean" != typeof n && (r = i, i = Tn(e, n, r) ? null : n, n = !1);
                var s = yn();
                return (s !== mt || null != i) && (i = s(i, r, 3)), n && bn() == t ? v(e, i) : Qt(e, i)
            }

            function gi(e) {
                for (var t = -1, n = (e && e.length && ot(rt(e, ts))) >>> 0, i = Ho(n); ++t < n;) i[t] = rt(e, $t(t));
                return i
            }

            function mi(e) {
                return bt(e, Xt(arguments, 1))
            }

            function vi() {
                for (var e = -1, t = arguments.length; ++e < t;) {
                    var n = arguments[e];
                    if (Js(n) || xr(n)) var i = i ? bt(i, n).concat(bt(n, i)) : n
                }
                return i ? Qt(i) : []
            }

            function yi() {
                for (var e = arguments.length, t = Ho(e); e--;) t[e] = arguments[e];
                return gi(t)
            }

            function bi(e, t) {
                var n = -1,
                    i = e ? e.length : 0,
                    r = {};
                for (!i || t || Js(e[0]) || (t = []); ++n < i;) {
                    var o = e[n];
                    t ? r[o] = t[n] : o && (r[o[0]] = o[1])
                }
                return r
            }

            function _i(e) {
                var t = Q(e);
                return t.__chain__ = !0, t
            }

            function xi(e, t, n) {
                return t.call(n, e), e
            }

            function wi(e, t, n) {
                return t.call(n, e)
            }

            function Ai() {
                return _i(this)
            }

            function Ci() {
                return new ee(this.value(), this.__chain__)
            }

            function ki(e) {
                for (var t, n = this; n instanceof J;) {
                    var i = On(n);
                    t ? r.__wrapped__ = i : t = i;
                    var r = i;
                    n = n.__wrapped__
                }
                return r.__wrapped__ = e, t
            }

            function Ti() {
                var e = this.__wrapped__;
                return e instanceof Le ? (this.__actions__.length && (e = new Le(this)), new ee(e.reverse(), this.__chain__)) : this.thru(function (e) {
                    return e.reverse()
                })
            }

            function Ei() {
                return this.value() + ""
            }

            function Si() {
                return Gt(this.__wrapped__, this.__actions__)
            }

            function ji(e) {
                var t = e ? e.length : 0;
                return En(t) && (e = zn(e)), pt(e, Tt(arguments, !1, !1, 1))
            }

            function Fi(e, t, n) {
                var i = Js(e) ? nt : wt;
                return ("function" != typeof t || "undefined" != typeof n) && (t = yn(t, n, 3)), i(e, t)
            }

            function Mi(e, t, n) {
                var i = Js(e) ? it : Ct;
                return t = yn(t, n, 3), i(e, t)
            }

            function Di(e, t, n) {
                if (Js(e)) {
                    var i = Xn(e, t, n);
                    return i > -1 ? e[i] : w
                }
                return t = yn(t, n, 3), kt(e, t, _t)
            }

            function Ni(e, t, n) {
                return t = yn(t, n, 3), kt(e, t, xt)
            }

            function qi(e, t) {
                return Di(e, Rt(t))
            }

            function zi(e, t, n) {
                return "function" == typeof t && "undefined" == typeof n && Js(e) ? et(e, t) : _t(e, Kt(t, n, 3))
            }

            function Pi(e, t, n) {
                return "function" == typeof t && "undefined" == typeof n && Js(e) ? tt(e, t) : xt(e, Kt(t, n, 3))
            }

            function Oi(e, t, n) {
                var i = e ? e.length : 0;
                return En(i) || (e = ro(e), i = e.length), i ? (n = "number" == typeof n ? 0 > n ? ks(i + n, 0) : n || 0 : 0, "string" == typeof e || !Js(e) && zr(e) ? i > n && e.indexOf(t, n) > -1 : bn(e, t, n) > -1) : !1
            }

            function Ri(e, t) {
                return Nt(e, t, Xt(arguments, 2))
            }

            function Li(e, t, n) {
                var i = Js(e) ? rt : Ot;
                return t = yn(t, n, 3), i(e, t)
            }

            function Ii(e, t) {
                return Li(e, $t(t))
            }

            function Hi(e, t, n, i) {
                var r = Js(e) ? at : Ut;
                return r(e, yn(t, i, 4), n, arguments.length < 3, _t)
            }

            function $i(e, t, n, i) {
                var r = Js(e) ? ct : Ut;
                return r(e, yn(t, i, 4), n, arguments.length < 3, xt)
            }

            function Bi(e, t, n) {
                var i = Js(e) ? it : Ct;
                return t = yn(t, n, 3), i(e, function (e, n, i) {
                    return !t(e, n, i)
                })
            }

            function Wi(e, t, n) {
                if (n ? Tn(e, t, n) : null == t) {
                    e = zn(e);
                    var i = e.length;
                    return i > 0 ? e[Wt(0, i - 1)] : w
                }
                var r = Ui(e);
                return r.length = Ts(0 > t ? 0 : +t || 0, r.length), r
            }

            function Ui(e) {
                e = zn(e);
                for (var t = -1, n = e.length, i = Ho(n); ++t < n;) {
                    var r = Wt(0, t);
                    t != r && (i[t] = i[r]), i[r] = e[t]
                }
                return i
            }

            function Xi(e) {
                var t = e ? e.length : 0;
                return En(t) ? t : ia(e).length
            }

            function Vi(e, t, n) {
                var i = Js(e) ? ut : Vt;
                return ("function" != typeof t || "undefined" != typeof n) && (t = yn(t, n, 3)), i(e, t)
            }

            function Qi(e, t, n) {
                var r = -1,
                    o = e ? e.length : 0,
                    s = En(o) ? Ho(o) : [];
                return n && Tn(e, t, n) && (t = null), t = yn(t, n, 3), _t(e, function (e, n, i) {
                    s[++r] = {
                        criteria: t(e, n, i),
                        index: r,
                        value: e
                    }
                }), i(s, c)
            }

            function Yi(e) {
                var t = arguments;
                t.length > 3 && Tn(t[1], t[2], t[3]) && (t = [e, t[1]]);
                var n = -1,
                    r = e ? e.length : 0,
                    o = Tt(t, !1, !1, 1),
                    s = En(r) ? Ho(r) : [];
                return _t(e, function (e) {
                    for (var t = o.length, i = Ho(t); t--;) i[t] = null == e ? w : e[o[t]];
                    s[++n] = {
                        criteria: i,
                        index: n,
                        value: e
                    }
                }), i(s, u)
            }

            function Gi(e, t) {
                return Mi(e, Rt(t))
            }

            function Zi(e, t) {
                if ("function" != typeof t) {
                    if ("function" != typeof e) throw new Go(I);
                    var n = e;
                    e = t, t = n
                }
                return e = As(e = +e) ? e : 0,
                    function () {
                        return --e < 1 ? t.apply(this, arguments) : void 0
                    }
            }

            function Ji(e, t, n) {
                return n && Tn(e, t, n) && (t = null), t = e && null == t ? e.length : ks(+t || 0, 0), pn(e, D, null, null, null, null, t)
            }

            function Ki(e, t) {
                var n;
                if ("function" != typeof t) {
                    if ("function" != typeof e) throw new Go(I);
                    var i = e;
                    e = t, t = i
                }
                return function () {
                    return --e > 0 ? n = t.apply(this, arguments) : t = null, n
                }
            }

            function er(e, t) {
                var n = C;
                if (arguments.length > 2) {
                    var i = Xt(arguments, 2),
                        r = m(i, er.placeholder);
                    n |= j
                }
                return pn(e, n, t, i, r)
            }

            function tr(e) {
                return gt(e, arguments.length > 1 ? Tt(arguments, !1, !1, 1) : Qr(e))
            }

            function nr(e, t) {
                var n = C | k;
                if (arguments.length > 2) {
                    var i = Xt(arguments, 2),
                        r = m(i, nr.placeholder);
                    n |= j
                }
                return pn(t, n, e, i, r)
            }

            function ir(e, t, n) {
                n && Tn(e, t, n) && (t = null);
                var i = pn(e, E, null, null, null, null, null, t);
                return i.placeholder = ir.placeholder, i
            }

            function rr(e, t, n) {
                n && Tn(e, t, n) && (t = null);
                var i = pn(e, S, null, null, null, null, null, t);
                return i.placeholder = rr.placeholder, i
            }

            function or(e, t, n) {
                function i() {
                    f && ls(f), c && ls(c), c = f = p = w
                }

                function r() {
                    var n = t - (Zs() - l);
                    if (0 >= n || n > t) {
                        c && ls(c);
                        var i = p;
                        c = f = p = w, i && (h = Zs(), u = e.apply(d, a), f || c || (a = d = null))
                    } else f = ms(r, n)
                }

                function o() {
                    f && ls(f), c = f = p = w, (m || g !== t) && (h = Zs(), u = e.apply(d, a), f || c || (a = d = null))
                }

                function s() {
                    if (a = arguments, l = Zs(), d = this, p = m && (f || !v), g === !1) var n = v && !f;
                    else {
                        c || v || (h = l);
                        var i = g - (l - h),
                            s = 0 >= i || i > g;
                        s ? (c && (c = ls(c)), h = l, u = e.apply(d, a)) : c || (c = ms(o, i))
                    }
                    return s && f ? f = ls(f) : f || t === g || (f = ms(r, t)), n && (s = !0, u = e.apply(d, a)), !s || f || c || (a = d = null), u
                }
                var a, c, u, l, d, f, p, h = 0,
                    g = !1,
                    m = !0;
                if ("function" != typeof e) throw new Go(I);
                if (t = 0 > t ? 0 : +t || 0, n === !0) {
                    var v = !0;
                    m = !1
                } else Sr(n) && (v = n.leading, g = "maxWait" in n && ks(+n.maxWait || 0, t), m = "trailing" in n ? n.trailing : m);
                return s.cancel = i, s
            }

            function sr(e) {
                return yt(e, 1, arguments, 1)
            }

            function ar(e, t) {
                return yt(e, t, arguments, 2)
            }

            function cr() {
                var e = arguments,
                    t = e.length;
                if (!t) return function () {
                    return arguments[0]
                };
                if (!nt(e, n)) throw new Go(I);
                return function () {
                    for (var n = 0, i = e[n].apply(this, arguments); ++n < t;) i = e[n].call(this, i);
                    return i
                }
            }

            function ur() {
                var e = arguments,
                    t = e.length - 1;
                if (0 > t) return function () {
                    return arguments[0]
                };
                if (!nt(e, n)) throw new Go(I);
                return function () {
                    for (var n = t, i = e[n].apply(this, arguments); n--;) i = e[n].call(this, i);
                    return i
                }
            }

            function lr(e, t) {
                if ("function" != typeof e || t && "function" != typeof t) throw new Go(I);
                var n = function () {
                    var i = n.cache,
                        r = t ? t.apply(this, arguments) : arguments[0];
                    if (i.has(r)) return i.get(r);
                    var o = e.apply(this, arguments);
                    return i.set(r, o), o
                };
                return n.cache = new lr.Cache, n
            }

            function dr(e) {
                if ("function" != typeof e) throw new Go(I);
                return function () {
                    return !e.apply(this, arguments)
                }
            }

            function fr(e) {
                return Ki(e, 2)
            }

            function pr(e) {
                var t = Xt(arguments, 1),
                    n = m(t, pr.placeholder);
                return pn(e, j, null, t, n)
            }

            function hr(e) {
                var t = Xt(arguments, 1),
                    n = m(t, hr.placeholder);
                return pn(e, F, null, t, n)
            }

            function gr(e) {
                var t = Tt(arguments, !1, !1, 1);
                return pn(e, M, null, null, null, t)
            }

            function mr(e) {
                if ("function" != typeof e) throw new Go(I);
                return function (t) {
                    return e.apply(this, t)
                }
            }

            function vr(e, t, n) {
                var i = !0,
                    r = !0;
                if ("function" != typeof e) throw new Go(I);
                return n === !1 ? i = !1 : Sr(n) && (i = "leading" in n ? !!n.leading : i, r = "trailing" in n ? !!n.trailing : r), Re.leading = i, Re.maxWait = +t, Re.trailing = r, or(e, t, Re)
            }

            function yr(e, t) {
                return t = null == t ? Fo : t, pn(t, j, null, [e], [])
            }

            function br(e, t, n, i) {
                return t && "boolean" != typeof t && Tn(e, t, n) ? t = !1 : "function" == typeof t && (i = n, n = t, t = !1), n = "function" == typeof n && Kt(n, i, 1), vt(e, t, n)
            }

            function _r(e, t, n) {
                return t = "function" == typeof t && Kt(t, n, 1), vt(e, !0, t)
            }

            function xr(e) {
                var t = h(e) ? e.length : w;
                return En(t) && rs.call(e) == $ || !1
            }

            function wr(e) {
                return e === !0 || e === !1 || h(e) && rs.call(e) == W || !1
            }

            function Ar(e) {
                return h(e) && rs.call(e) == U || !1
            }

            function Cr(e) {
                return e && 1 === e.nodeType && h(e) && rs.call(e).indexOf("Element") > -1 || !1
            }

            function kr(e) {
                if (null == e) return !0;
                var t = e.length;
                return En(t) && (Js(e) || zr(e) || xr(e) || h(e) && ea(e.splice)) ? !t : !ia(e).length
            }

            function Tr(e, t, n, i) {
                if (n = "function" == typeof n && Kt(n, i, 3), !n && Sn(e) && Sn(t)) return e === t;
                var r = n ? n(e, t) : w;
                return "undefined" == typeof r ? qt(e, t, n) : !!r
            }

            function Er(e) {
                return h(e) && "string" == typeof e.message && rs.call(e) == X || !1
            }

            function Sr(e) {
                var t = typeof e;
                return "function" == t || e && "object" == t || !1
            }

            function jr(e, t, n, i) {
                var r = ia(t),
                    o = r.length;
                if (n = "function" == typeof n && Kt(n, i, 3), !n && 1 == o) {
                    var s = r[0],
                        a = t[s];
                    if (Sn(a)) return null != e && a === e[s] && ns.call(e, s)
                }
                for (var c = Ho(o), u = Ho(o); o--;) a = c[o] = t[r[o]], u[o] = Sn(a);
                return Pt(e, r, c, u, n)
            }

            function Fr(e) {
                return Nr(e) && e != +e
            }

            function Mr(e) {
                return null == e ? !1 : rs.call(e) == V ? ss.test(es.call(e)) : h(e) && ke.test(e) || !1
            }

            function Dr(e) {
                return null === e
            }

            function Nr(e) {
                return "number" == typeof e || h(e) && rs.call(e) == Y || !1
            }

            function qr(e) {
                return h(e) && rs.call(e) == Z || !1
            }

            function zr(e) {
                return "string" == typeof e || h(e) && rs.call(e) == K || !1
            }

            function Pr(e) {
                return h(e) && En(e.length) && Pe[rs.call(e)] || !1
            }

            function Or(e) {
                return "undefined" == typeof e
            }

            function Rr(e) {
                var t = e ? e.length : 0;
                return En(t) ? t ? Ke(e) : [] : ro(e)
            }

            function Lr(e) {
                return ht(e, Zr(e))
            }

            function Ir(e, t, n) {
                var i = Is(e);
                return n && Tn(e, t, n) && (t = null), t ? ht(t, i, ia(t)) : i
            }

            function Hr(e) {
                if (null == e) return e;
                var t = Ke(arguments);
                return t.push(lt), na.apply(w, t)
            }

            function $r(e, t, n) {
                return t = yn(t, n, 3), kt(e, t, Ft, !0)
            }

            function Br(e, t, n) {
                return t = yn(t, n, 3), kt(e, t, Mt, !0)
            }

            function Wr(e, t, n) {
                return ("function" != typeof t || "undefined" != typeof n) && (t = Kt(t, n, 3)), Et(e, t, Zr)
            }

            function Ur(e, t, n) {
                return t = Kt(t, n, 3), St(e, t, Zr)
            }

            function Xr(e, t, n) {
                return ("function" != typeof t || "undefined" != typeof n) && (t = Kt(t, n, 3)), Ft(e, t)
            }

            function Vr(e, t, n) {
                return t = Kt(t, n, 3), St(e, t, ia)
            }

            function Qr(e) {
                return Dt(e, Zr(e))
            }

            function Yr(e, t) {
                return e ? ns.call(e, t) : !1
            }

            function Gr(e, t, n) {
                n && Tn(e, t, n) && (t = null);
                for (var i = -1, r = ia(e), o = r.length, s = {}; ++i < o;) {
                    var a = r[i],
                        c = e[a];
                    t ? ns.call(s, c) ? s[c].push(a) : s[c] = [a] : s[c] = a
                }
                return s
            }

            function Zr(e) {
                if (null == e) return [];
                Sr(e) || (e = Vo(e));
                var t = e.length;
                t = t && En(t) && (Js(e) || Ls.nonEnumArgs && xr(e)) && t || 0;
                for (var n = e.constructor, i = -1, r = "function" == typeof n && n.prototype === e, o = Ho(t), s = t > 0; ++i < t;) o[i] = i + "";
                for (var a in e) s && kn(a, t) || "constructor" == a && (r || !ns.call(e, a)) || o.push(a);
                return o
            }

            function Jr(e, t, n) {
                var i = {};
                return t = yn(t, n, 3), Ft(e, function (e, n, r) {
                    i[n] = t(e, n, r)
                }), i
            }

            function Kr(e, t, n) {
                if (null == e) return {};
                if ("function" != typeof t) {
                    var i = rt(Tt(arguments, !1, !1, 1), Yo);
                    return Fn(e, bt(Zr(e), i))
                }
                return t = Kt(t, n, 3), Mn(e, function (e, n, i) {
                    return !t(e, n, i)
                })
            }

            function eo(e) {
                for (var t = -1, n = ia(e), i = n.length, r = Ho(i); ++t < i;) {
                    var o = n[t];
                    r[t] = [o, e[o]]
                }
                return r
            }

            function to(e, t, n) {
                return null == e ? {} : "function" == typeof t ? Mn(e, Kt(t, n, 3)) : Fn(e, Tt(arguments, !1, !1, 1))
            }

            function no(e, t, n) {
                var i = null == e ? w : e[t];
                return "undefined" == typeof i && (i = n), ea(i) ? i.call(e) : i
            }

            function io(e, t, n, i) {
                var r = Js(e) || Pr(e);
                if (t = yn(t, i, 4), null == n)
                    if (r || Sr(e)) {
                        var o = e.constructor;
                        n = r ? Js(e) ? new o : [] : Is(ea(o) && o.prototype)
                    } else n = {};
                return (r ? et : Ft)(e, function (e, i, r) {
                    return t(n, e, i, r)
                }), n
            }

            function ro(e) {
                return Yt(e, ia(e))
            }

            function oo(e) {
                return Yt(e, Zr(e))
            }

            function so(e, t, n) {
                return t = +t || 0, "undefined" == typeof n ? (n = t, t = 0) : n = +n || 0, e >= t && n > e
            }

            function ao(e, t, n) {
                n && Tn(e, t, n) && (t = n = null);
                var i = null == e,
                    r = null == t;
                if (null == n && (r && "boolean" == typeof e ? (n = e, e = 1) : "boolean" == typeof t && (n = t, r = !0)), i && r && (t = 1, r = !1), e = +e || 0, r ? (t = e, e = 0) : t = +t || 0, n || e % 1 || t % 1) {
                    var o = Fs();
                    return Ts(e + o * (t - e + parseFloat("1e-" + ((o + "").length - 1))), t)
                }
                return Wt(e, t)
            }

            function co(e) {
                return e = r(e), e && e.charAt(0).toUpperCase() + e.slice(1)
            }

            function uo(e) {
                return e = r(e), e && e.replace(Te, l)
            }

            function lo(e, t, n) {
                e = r(e), t += "";
                var i = e.length;
                return n = ("undefined" == typeof n ? i : Ts(0 > n ? 0 : +n || 0, i)) - t.length, n >= 0 && e.indexOf(t, n) == n
            }

            function fo(e) {
                return e = r(e), e && ve.test(e) ? e.replace(ge, d) : e
            }

            function po(e) {
                return e = r(e), e && je.test(e) ? e.replace(Se, "\\$&") : e
            }

            function ho(e, t, n) {
                e = r(e), t = +t;
                var i = e.length;
                if (i >= t || !As(t)) return e;
                var o = (t - i) / 2,
                    s = ds(o),
                    a = us(o);
                return n = dn("", a, n), n.slice(0, s) + e + n
            }

            function go(e, t, n) {
                return e = r(e), e && dn(e, t, n) + e
            }

            function mo(e, t, n) {
                return e = r(e), e && e + dn(e, t, n)
            }

            function vo(e, t, n) {
                return n && Tn(e, t, n) && (t = 0), js(e, t)
            }

            function yo(e, t) {
                var n = "";
                if (e = r(e), t = +t, 1 > t || !e || !As(t)) return n;
                do t % 2 && (n += e), t = ds(t / 2), e += e; while (t);
                return n
            }

            function bo(e, t, n) {
                return e = r(e), n = null == n ? 0 : Ts(0 > n ? 0 : +n || 0, e.length), e.lastIndexOf(t, n) == n
            }

            function _o(e, t, n) {
                var i = Q.templateSettings;
                n && Tn(e, t, n) && (t = n = null), e = r(e), t = ft(ft({}, n || t), i, dt);
                var o, s, a = ft(ft({}, t.imports), i.imports, dt),
                    c = ia(a),
                    u = Yt(a, c),
                    l = 0,
                    d = t.interpolate || Ee,
                    p = "__p += '",
                    h = Qo((t.escape || Ee).source + "|" + d.source + "|" + (d === _e ? xe : Ee).source + "|" + (t.evaluate || Ee).source + "|$", "g"),
                    g = "//# sourceURL=" + ("sourceURL" in t ? t.sourceURL : "lodash.templateSources[" + ++ze + "]") + "\n";
                e.replace(h, function (t, n, i, r, a, c) {
                    return i || (i = r), p += e.slice(l, c).replace(Me, f), n && (o = !0, p += "' +\n__e(" + n + ") +\n'"), a && (s = !0, p += "';\n" + a + ";\n__p += '"), i && (p += "' +\n((__t = (" + i + ")) == null ? '' : __t) +\n'"), l = c + t.length, t
                }), p += "';\n";
                var m = t.variable;
                m || (p = "with (obj) {\n" + p + "\n}\n"), p = (s ? p.replace(de, "") : p).replace(fe, "$1").replace(pe, "$1;"), p = "function(" + (m || "obj") + ") {\n" + (m ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (s ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + p + "return __p\n}";
                var v = Eo(function () {
                    return Wo(c, g + "return " + p).apply(w, u)
                });
                if (v.source = p, Er(v)) throw v;
                return v
            }

            function xo(e, t, n) {
                var i = e;
                return (e = r(e)) ? (n ? Tn(i, t, n) : null == t) ? e.slice(y(e), b(e) + 1) : (t += "", e.slice(s(e, t), a(e, t) + 1)) : e
            }

            function wo(e, t, n) {
                var i = e;
                return e = r(e), e ? (n ? Tn(i, t, n) : null == t) ? e.slice(y(e)) : e.slice(s(e, t + "")) : e
            }

            function Ao(e, t, n) {
                var i = e;
                return e = r(e), e ? (n ? Tn(i, t, n) : null == t) ? e.slice(0, b(e) + 1) : e.slice(0, a(e, t + "") + 1) : e
            }

            function Co(e, t, n) {
                n && Tn(e, t, n) && (t = null);
                var i = N,
                    o = q;
                if (null != t)
                    if (Sr(t)) {
                        var s = "separator" in t ? t.separator : s;
                        i = "length" in t ? +t.length || 0 : i, o = "omission" in t ? r(t.omission) : o
                    } else i = +t || 0;
                if (e = r(e), i >= e.length) return e;
                var a = i - o.length;
                if (1 > a) return o;
                var c = e.slice(0, a);
                if (null == s) return c + o;
                if (qr(s)) {
                    if (e.slice(a).search(s)) {
                        var u, l, d = e.slice(0, a);
                        for (s.global || (s = Qo(s.source, (we.exec(s) || "") + "g")), s.lastIndex = 0; u = s.exec(d);) l = u.index;
                        c = c.slice(0, null == l ? a : l)
                    }
                } else if (e.indexOf(s, a) != a) {
                    var f = c.lastIndexOf(s);
                    f > -1 && (c = c.slice(0, f))
                }
                return c + o
            }

            function ko(e) {
                return e = r(e), e && me.test(e) ? e.replace(he, _) : e
            }

            function To(e, t, n) {
                return n && Tn(e, t, n) && (t = null), e = r(e), e.match(t || De) || []
            }

            function Eo() {
                var e = arguments.length,
                    t = arguments[0];
                try {
                    for (var n = Ho(e ? e - 1 : 0); --e > 0;) n[e - 1] = arguments[e];
                    return t.apply(w, n)
                } catch (i) {
                    return Er(i) ? i : new Bo(i)
                }
            }

            function So(e, t, n) {
                return n && Tn(e, t, n) && (t = null), h(e) ? Mo(e) : mt(e, t)
            }

            function jo(e) {
                return function () {
                    return e
                }
            }

            function Fo(e) {
                return e
            }

            function Mo(e) {
                return Rt(vt(e, !0))
            }

            function Do(e, t) {
                return Lt(e + "", vt(t, !0))
            }

            function No(e, t, n) {
                if (null == n) {
                    var i = Sr(t),
                        r = i && ia(t),
                        o = r && r.length && Dt(t, r);
                    (o ? o.length : i) || (o = !1, n = t, t = e, e = this)
                }
                o || (o = Dt(t, ia(t)));
                var s = !0,
                    a = -1,
                    c = ea(e),
                    u = o.length;
                n === !1 ? s = !1 : Sr(n) && "chain" in n && (s = n.chain);
                for (; ++a < u;) {
                    var l = o[a],
                        d = t[l];
                    e[l] = d, c && (e.prototype[l] = function (t) {
                        return function () {
                            var n = this.__chain__;
                            if (s || n) {
                                var i = e(this.__wrapped__);
                                return (i.__actions__ = Ke(this.__actions__)).push({
                                    func: t,
                                    args: arguments,
                                    thisArg: e
                                }), i.__chain__ = n, i
                            }
                            var r = [this.value()];
                            return ps.apply(r, arguments), t.apply(e, r)
                        }
                    }(d))
                }
                return e
            }

            function qo() {
                return g._ = os, this
            }

            function zo() {}

            function Po(e) {
                return $t(e + "")
            }

            function Oo(e) {
                return function (t) {
                    return null == e ? w : e[t]
                }
            }

            function Ro(e, t, n) {
                n && Tn(e, t, n) && (t = n = null), e = +e || 0, n = null == n ? 1 : +n || 0, null == t ? (t = e, e = 0) : t = +t || 0;
                for (var i = -1, r = ks(us((t - e) / (n || 1)), 0), o = Ho(r); ++i < r;) o[i] = e, e += n;
                return o
            }

            function Lo(e, t, n) {
                if (e = +e, 1 > e || !As(e)) return [];
                var i = -1,
                    r = Ho(Ts(e, Ns));
                for (t = Kt(t, n, 1); ++i < e;) Ns > i ? r[i] = t(i) : t(i);
                return r
            }

            function Io(e) {
                var t = ++is;
                return r(e) + t
            }
            g = g ? Ye.defaults(We.Object(), g, Ye.pick(We, qe)) : We;
            var Ho = g.Array,
                $o = g.Date,
                Bo = g.Error,
                Wo = g.Function,
                Uo = g.Math,
                Xo = g.Number,
                Vo = g.Object,
                Qo = g.RegExp,
                Yo = g.String,
                Go = g.TypeError,
                Zo = Ho.prototype,
                Jo = Vo.prototype,
                Ko = (Ko = g.window) && Ko.document,
                es = Wo.prototype.toString,
                ts = $t("length"),
                ns = Jo.hasOwnProperty,
                is = 0,
                rs = Jo.toString,
                os = g._,
                ss = Qo("^" + po(rs).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                as = Mr(as = g.ArrayBuffer) && as,
                cs = Mr(cs = as && new as(0).slice) && cs,
                us = Uo.ceil,
                ls = g.clearTimeout,
                ds = Uo.floor,
                fs = Mr(fs = Vo.getPrototypeOf) && fs,
                ps = Zo.push,
                hs = Jo.propertyIsEnumerable,
                gs = Mr(gs = g.Set) && gs,
                ms = g.setTimeout,
                vs = Zo.splice,
                ys = Mr(ys = g.Uint8Array) && ys,
                bs = Mr(bs = g.WeakMap) && bs,
                _s = function () {
                    try {
                        var e = Mr(e = g.Float64Array) && e,
                            t = new e(new as(10), 0, 1) && e
                    } catch (n) {}
                    return t
                }(),
                xs = Mr(xs = Ho.isArray) && xs,
                ws = Mr(ws = Vo.create) && ws,
                As = g.isFinite,
                Cs = Mr(Cs = Vo.keys) && Cs,
                ks = Uo.max,
                Ts = Uo.min,
                Es = Mr(Es = $o.now) && Es,
                Ss = Mr(Ss = Xo.isFinite) && Ss,
                js = g.parseInt,
                Fs = Uo.random,
                Ms = Xo.NEGATIVE_INFINITY,
                Ds = Xo.POSITIVE_INFINITY,
                Ns = Uo.pow(2, 32) - 1,
                qs = Ns - 1,
                zs = Ns >>> 1,
                Ps = _s ? _s.BYTES_PER_ELEMENT : 0,
                Os = Uo.pow(2, 53) - 1,
                Rs = bs && new bs,
                Ls = Q.support = {};
            ! function (e) {
                Ls.funcDecomp = !Mr(g.WinRTError) && Fe.test(x), Ls.funcNames = "string" == typeof Wo.name;
                try {
                    Ls.dom = 11 === Ko.createDocumentFragment().nodeType
                } catch (t) {
                    Ls.dom = !1
                }
                try {
                    Ls.nonEnumArgs = !hs.call(arguments, 1)
                } catch (t) {
                    Ls.nonEnumArgs = !0
                }
            }(0, 0), Q.templateSettings = {
                escape: ye,
                evaluate: be,
                interpolate: _e,
                variable: "",
                imports: {
                    _: Q
                }
            };
            var Is = function () {
                    function e() {}
                    return function (t) {
                        if (Sr(t)) {
                            e.prototype = t;
                            var n = new e;
                            e.prototype = null
                        }
                        return n || g.Object()
                    }
                }(),
                Hs = Rs ? function (e, t) {
                    return Rs.set(e, t), e
                } : Fo;
            cs || (en = as && ys ? function (e) {
                var t = e.byteLength,
                    n = _s ? ds(t / Ps) : 0,
                    i = n * Ps,
                    r = new as(t);
                if (n) {
                    var o = new _s(r, 0, n);
                    o.set(new _s(e, 0, n))
                }
                return t != i && (o = new ys(r, i), o.set(new ys(e, i))), r
            } : jo(null));
            var $s = ws && gs ? function (e) {
                    return new Ge(e)
                } : jo(null),
                Bs = Rs ? function (e) {
                    return Rs.get(e)
                } : zo,
                Ws = function () {
                    var e = 0,
                        t = 0;
                    return function (n, i) {
                        var r = Zs(),
                            o = P - (r - t);
                        if (t = r, o > 0) {
                            if (++e >= z) return n
                        } else e = 0;
                        return Hs(n, i)
                    }
                }(),
                Us = rn(function (e, t, n) {
                    ns.call(e, n) ? ++e[n] : e[n] = 1
                }),
                Xs = rn(function (e, t, n) {
                    ns.call(e, n) ? e[n].push(t) : e[n] = [t]
                }),
                Vs = rn(function (e, t, n) {
                    e[n] = t
                }),
                Qs = un(ot),
                Ys = un(st, !0),
                Gs = rn(function (e, t, n) {
                    e[n ? 0 : 1].push(t)
                }, function () {
                    return [[], []]
                }),
                Zs = Es || function () {
                    return (new $o).getTime()
                },
                Js = xs || function (e) {
                    return h(e) && En(e.length) && rs.call(e) == B || !1
                };
            Ls.dom || (Cr = function (e) {
                return e && 1 === e.nodeType && h(e) && !ta(e) || !1
            });
            var Ks = Ss || function (e) {
                    return "number" == typeof e && As(e)
                },
                ea = n(/x/) || ys && !n(ys) ? function (e) {
                    return rs.call(e) == V
                } : n,
                ta = fs ? function (e) {
                    if (!e || rs.call(e) != G) return !1;
                    var t = e.valueOf,
                        n = Mr(t) && (n = fs(t)) && fs(n);
                    return n ? e == n || fs(e) == n : Nn(e)
                } : Nn,
                na = on(ft),
                ia = Cs ? function (e) {
                    if (e) var t = e.constructor,
                        n = e.length;
                    return "function" == typeof t && t.prototype === e || "function" != typeof e && n && En(n) ? qn(e) : Sr(e) ? Cs(e) : []
                } : qn,
                ra = on(It),
                oa = an(function (e, t, n) {
                    return t = t.toLowerCase(), e + (n ? t.charAt(0).toUpperCase() + t.slice(1) : t)
                }),
                sa = an(function (e, t, n) {
                    return e + (n ? "-" : "") + t.toLowerCase()
                });
            8 != js(Ne + "08") && (vo = function (e, t, n) {
                return (n ? Tn(e, t, n) : null == t) ? t = 0 : t && (t = +t), e = xo(e), js(e, t || (Ce.test(e) ? 16 : 10))
            });
            var aa = an(function (e, t, n) {
                    return e + (n ? "_" : "") + t.toLowerCase()
                }),
                ca = an(function (e, t, n) {
                    return e + (n ? " " : "") + (t.charAt(0).toUpperCase() + t.slice(1))
                });
            return Q.prototype = J.prototype, ee.prototype = Is(J.prototype), ee.prototype.constructor = ee, Le.prototype = Is(J.prototype), Le.prototype.constructor = Le, Be.prototype["delete"] = Ue, Be.prototype.get = Xe, Be.prototype.has = Ve, Be.prototype.set = Qe, Ge.prototype.push = Je, lr.Cache = Be, Q.after = Zi, Q.ary = Ji, Q.assign = na, Q.at = ji, Q.before = Ki, Q.bind = er, Q.bindAll = tr, Q.bindKey = nr, Q.callback = So, Q.chain = _i, Q.chunk = Rn, Q.compact = Ln, Q.constant = jo, Q.countBy = Us, Q.create = Ir, Q.curry = ir, Q.curryRight = rr, Q.debounce = or, Q.defaults = Hr, Q.defer = sr, Q.delay = ar, Q.difference = In, Q.drop = Hn, Q.dropRight = $n, Q.dropRightWhile = Bn, Q.dropWhile = Wn, Q.fill = Un, Q.filter = Mi, Q.flatten = Yn, Q.flattenDeep = Gn, Q.flow = cr, Q.flowRight = ur, Q.forEach = zi, Q.forEachRight = Pi, Q.forIn = Wr, Q.forInRight = Ur, Q.forOwn = Xr, Q.forOwnRight = Vr, Q.functions = Qr, Q.groupBy = Xs, Q.indexBy = Vs, Q.initial = Jn, Q.intersection = Kn, Q.invert = Gr, Q.invoke = Ri, Q.keys = ia, Q.keysIn = Zr, Q.map = Li, Q.mapValues = Jr, Q.matches = Mo, Q.matchesProperty = Do, Q.memoize = lr, Q.merge = ra, Q.mixin = No, Q.negate = dr, Q.omit = Kr, Q.once = fr, Q.pairs = eo, Q.partial = pr, Q.partialRight = hr, Q.partition = Gs, Q.pick = to, Q.pluck = Ii, Q.property = Po, Q.propertyOf = Oo, Q.pull = ni, Q.pullAt = ii, Q.range = Ro, Q.rearg = gr, Q.reject = Bi, Q.remove = ri, Q.rest = oi, Q.shuffle = Ui, Q.slice = si, Q.sortBy = Qi, Q.sortByAll = Yi, Q.spread = mr, Q.take = ui, Q.takeRight = li, Q.takeRightWhile = di, Q.takeWhile = fi, Q.tap = xi, Q.throttle = vr, Q.thru = wi, Q.times = Lo, Q.toArray = Rr, Q.toPlainObject = Lr, Q.transform = io, Q.union = pi, Q.uniq = hi, Q.unzip = gi, Q.values = ro, Q.valuesIn = oo, Q.where = Gi, Q.without = mi, Q.wrap = yr, Q.xor = vi, Q.zip = yi, Q.zipObject = bi, Q.backflow = ur, Q.collect = Li, Q.compose = ur, Q.each = zi, Q.eachRight = Pi, Q.extend = na, Q.iteratee = So, Q.methods = Qr, Q.object = bi, Q.select = Mi, Q.tail = oi, Q.unique = hi, No(Q, Q), Q.attempt = Eo, Q.camelCase = oa, Q.capitalize = co, Q.clone = br, Q.cloneDeep = _r, Q.deburr = uo, Q.endsWith = lo, Q.escape = fo, Q.escapeRegExp = po, Q.every = Fi, Q.find = Di, Q.findIndex = Xn, Q.findKey = $r, Q.findLast = Ni, Q.findLastIndex = Vn, Q.findLastKey = Br, Q.findWhere = qi, Q.first = Qn, Q.has = Yr, Q.identity = Fo, Q.includes = Oi, Q.indexOf = Zn, Q.inRange = so, Q.isArguments = xr, Q.isArray = Js, Q.isBoolean = wr, Q.isDate = Ar, Q.isElement = Cr, Q.isEmpty = kr, Q.isEqual = Tr, Q.isError = Er, Q.isFinite = Ks, Q.isFunction = ea, Q.isMatch = jr, Q.isNaN = Fr, Q.isNative = Mr, Q.isNull = Dr, Q.isNumber = Nr, Q.isObject = Sr, Q.isPlainObject = ta, Q.isRegExp = qr, Q.isString = zr, Q.isTypedArray = Pr, Q.isUndefined = Or, Q.kebabCase = sa, Q.last = ei, Q.lastIndexOf = ti, Q.max = Qs, Q.min = Ys, Q.noConflict = qo, Q.noop = zo, Q.now = Zs, Q.pad = ho, Q.padLeft = go, Q.padRight = mo, Q.parseInt = vo, Q.random = ao, Q.reduce = Hi, Q.reduceRight = $i, Q.repeat = yo, Q.result = no, Q.runInContext = x, Q.size = Xi, Q.snakeCase = aa, Q.some = Vi, Q.sortedIndex = ai, Q.sortedLastIndex = ci, Q.startCase = ca, Q.startsWith = bo, Q.template = _o, Q.trim = xo, Q.trimLeft = wo, Q.trimRight = Ao, Q.trunc = Co, Q.unescape = ko, Q.uniqueId = Io, Q.words = To, Q.all = Fi, Q.any = Vi, Q.contains = Oi, Q.detect = Di, Q.foldl = Hi, Q.foldr = $i, Q.head = Qn, Q.include = Oi, Q.inject = Hi, No(Q, function () {
                var e = {};
                return Ft(Q, function (t, n) {
                    Q.prototype[n] || (e[n] = t)
                }), e
            }(), !1), Q.sample = Wi, Q.prototype.sample = function (e) {
                return this.__chain__ || null != e ? this.thru(function (t) {
                    return Wi(t, e)
                }) : Wi(this.value())
            }, Q.VERSION = A, et(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (e) {
                Q[e].placeholder = Q
            }), et(["filter", "map", "takeWhile"], function (e, t) {
                var n = t == O || t == L;
                Le.prototype[e] = function (e, i) {
                    var r = this.clone(),
                        o = r.__iteratees__ || (r.__iteratees__ = []);
                    return r.__filtered__ = r.__filtered__ || n, o.push({
                        iteratee: yn(e, i, 3),
                        type: t
                    }), r
                }
            }), et(["drop", "take"], function (e, t) {
                var n = "__" + e + "Count__",
                    i = e + "While";
                Le.prototype[e] = function (i) {
                    i = null == i ? 1 : ks(ds(i) || 0, 0);
                    var r = this.clone();
                    if (r.__filtered__) {
                        var o = r[n];
                        r[n] = t ? Ts(o, i) : o + i
                    } else {
                        var s = r.__views__ || (r.__views__ = []);
                        s.push({
                            size: i,
                            type: e + (r.__dir__ < 0 ? "Right" : "")
                        })
                    }
                    return r
                }, Le.prototype[e + "Right"] = function (t) {
                    return this.reverse()[e](t).reverse()
                }, Le.prototype[e + "RightWhile"] = function (e, t) {
                    return this.reverse()[i](e, t).reverse()
                }
            }), et(["first", "last"], function (e, t) {
                var n = "take" + (t ? "Right" : "");
                Le.prototype[e] = function () {
                    return this[n](1).value()[0]
                }
            }), et(["initial", "rest"], function (e, t) {
                var n = "drop" + (t ? "" : "Right");
                Le.prototype[e] = function () {
                    return this[n](1)
                }
            }), et(["pluck", "where"], function (e, t) {
                var n = t ? "filter" : "map",
                    i = t ? Rt : $t;
                Le.prototype[e] = function (e) {
                    return this[n](i(e))
                }
            }), Le.prototype.compact = function () {
                return this.filter(Fo)
            }, Le.prototype.dropWhile = function (e, t) {
                var n, i, r = this.__dir__ < 0;
                return e = yn(e, t, 3), this.filter(function (t, o, s) {
                    return n = n && (r ? i > o : o > i), i = o, n || (n = !e(t, o, s))
                })
            }, Le.prototype.reject = function (e, t) {
                return e = yn(e, t, 3), this.filter(function (t, n, i) {
                    return !e(t, n, i)
                })
            }, Le.prototype.slice = function (e, t) {
                e = null == e ? 0 : +e || 0;
                var n = 0 > e ? this.takeRight(-e) : this.drop(e);
                return "undefined" != typeof t && (t = +t || 0, n = 0 > t ? n.dropRight(-t) : n.take(t - e)), n
            }, Le.prototype.toArray = function () {
                return this.drop(0)
            }, Ft(Le.prototype, function (e, t) {
                var n = Q[t],
                    i = /^(?:first|last)$/.test(t);
                Q.prototype[t] = function () {
                    var t = this.__wrapped__,
                        r = arguments,
                        o = this.__chain__,
                        s = !!this.__actions__.length,
                        a = t instanceof Le,
                        c = a && !s;
                    if (i && !o) return c ? e.call(t) : n.call(Q, this.value());
                    var u = function (e) {
                        var t = [e];
                        return ps.apply(t, r), n.apply(Q, t)
                    };
                    if (a || Js(t)) {
                        var l = c ? t : new Le(this),
                            d = e.apply(l, r);
                        if (!i && (s || d.__actions__)) {
                            var f = d.__actions__ || (d.__actions__ = []);
                            f.push({
                                func: wi,
                                args: [u],
                                thisArg: Q
                            })
                        }
                        return new ee(d, o)
                    }
                    return this.thru(u)
                }
            }), et(["concat", "join", "pop", "push", "shift", "sort", "splice", "unshift"], function (e) {
                var t = Zo[e],
                    n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                    i = /^(?:join|pop|shift)$/.test(e);
                Q.prototype[e] = function () {
                    var e = arguments;
                    return i && !this.__chain__ ? t.apply(this.value(), e) : this[n](function (n) {
                        return t.apply(n, e)
                    })
                }
            }), Le.prototype.clone = Ie, Le.prototype.reverse = He, Le.prototype.value = $e, Q.prototype.chain = Ai, Q.prototype.commit = Ci, Q.prototype.plant = ki, Q.prototype.reverse = Ti, Q.prototype.toString = Ei, Q.prototype.run = Q.prototype.toJSON = Q.prototype.valueOf = Q.prototype.value = Si, Q.prototype.collect = Q.prototype.map, Q.prototype.head = Q.prototype.first, Q.prototype.select = Q.prototype.filter, Q.prototype.tail = Q.prototype.rest, Q
        }
        var w, A = "3.3.1",
            C = 1,
            k = 2,
            T = 4,
            E = 8,
            S = 16,
            j = 32,
            F = 64,
            M = 128,
            D = 256,
            N = 30,
            q = "...",
            z = 150,
            P = 16,
            O = 0,
            R = 1,
            L = 2,
            I = "Expected a function",
            H = "__lodash_placeholder__",
            $ = "[object Arguments]",
            B = "[object Array]",
            W = "[object Boolean]",
            U = "[object Date]",
            X = "[object Error]",
            V = "[object Function]",
            Q = "[object Map]",
            Y = "[object Number]",
            G = "[object Object]",
            Z = "[object RegExp]",
            J = "[object Set]",
            K = "[object String]",
            ee = "[object WeakMap]",
            te = "[object ArrayBuffer]",
            ne = "[object Float32Array]",
            ie = "[object Float64Array]",
            re = "[object Int8Array]",
            oe = "[object Int16Array]",
            se = "[object Int32Array]",
            ae = "[object Uint8Array]",
            ce = "[object Uint8ClampedArray]",
            ue = "[object Uint16Array]",
            le = "[object Uint32Array]",
            de = /\b__p \+= '';/g,
            fe = /\b(__p \+=) '' \+/g,
            pe = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            he = /&(?:amp|lt|gt|quot|#39|#96);/g,
            ge = /[&<>"'`]/g,
            me = RegExp(he.source),
            ve = RegExp(ge.source),
            ye = /<%-([\s\S]+?)%>/g,
            be = /<%([\s\S]+?)%>/g,
            _e = /<%=([\s\S]+?)%>/g,
            xe = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            we = /\w*$/,
            Ae = /^\s*function[ \n\r\t]+\w/,
            Ce = /^0[xX]/,
            ke = /^\[object .+?Constructor\]$/,
            Te = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
            Ee = /($^)/,
            Se = /[.*+?^${}()|[\]\/\\]/g,
            je = RegExp(Se.source),
            Fe = /\bthis\b/,
            Me = /['\n\r\u2028\u2029\\]/g,
            De = function () {
                var e = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
                    t = "[a-z\\xdf-\\xf6\\xf8-\\xff]+";
                return RegExp(e + "{2,}(?=" + e + t + ")|" + e + "?" + t + "|" + e + "+|[0-9]+", "g")
            }(),
            Ne = " 	\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",
            qe = ["Array", "ArrayBuffer", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Math", "Number", "Object", "RegExp", "Set", "String", "_", "clearTimeout", "document", "isFinite", "parseInt", "setTimeout", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "window", "WinRTError"],
            ze = -1,
            Pe = {};
        Pe[ne] = Pe[ie] = Pe[re] = Pe[oe] = Pe[se] = Pe[ae] = Pe[ce] = Pe[ue] = Pe[le] = !0, Pe[$] = Pe[B] = Pe[te] = Pe[W] = Pe[U] = Pe[X] = Pe[V] = Pe[Q] = Pe[Y] = Pe[G] = Pe[Z] = Pe[J] = Pe[K] = Pe[ee] = !1;
        var Oe = {};
        Oe[$] = Oe[B] = Oe[te] = Oe[W] = Oe[U] = Oe[ne] = Oe[ie] = Oe[re] = Oe[oe] = Oe[se] = Oe[Y] = Oe[G] = Oe[Z] = Oe[K] = Oe[ae] = Oe[ce] = Oe[ue] = Oe[le] = !0, Oe[X] = Oe[V] = Oe[Q] = Oe[J] = Oe[ee] = !1;
        var Re = {
                leading: !1,
                maxWait: 0,
                trailing: !1
            },
            Le = {
                "\xc0": "A",
                "\xc1": "A",
                "\xc2": "A",
                "\xc3": "A",
                "\xc4": "A",
                "\xc5": "A",
                "\xe0": "a",
                "\xe1": "a",
                "\xe2": "a",
                "\xe3": "a",
                "\xe4": "a",
                "\xe5": "a",
                "\xc7": "C",
                "\xe7": "c",
                "\xd0": "D",
                "\xf0": "d",
                "\xc8": "E",
                "\xc9": "E",
                "\xca": "E",
                "\xcb": "E",
                "\xe8": "e",
                "\xe9": "e",
                "\xea": "e",
                "\xeb": "e",
                "\xcc": "I",
                "\xcd": "I",
                "\xce": "I",
                "\xcf": "I",
                "\xec": "i",
                "\xed": "i",
                "\xee": "i",
                "\xef": "i",
                "\xd1": "N",
                "\xf1": "n",
                "\xd2": "O",
                "\xd3": "O",
                "\xd4": "O",
                "\xd5": "O",
                "\xd6": "O",
                "\xd8": "O",
                "\xf2": "o",
                "\xf3": "o",
                "\xf4": "o",
                "\xf5": "o",
                "\xf6": "o",
                "\xf8": "o",
                "\xd9": "U",
                "\xda": "U",
                "\xdb": "U",
                "\xdc": "U",
                "\xf9": "u",
                "\xfa": "u",
                "\xfb": "u",
                "\xfc": "u",
                "\xdd": "Y",
                "\xfd": "y",
                "\xff": "y",
                "\xc6": "Ae",
                "\xe6": "ae",
                "\xde": "Th",
                "\xfe": "th",
                "\xdf": "ss"
            },
            Ie = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "`": "&#96;"
            },
            He = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'",
                "&#96;": "`"
            },
            $e = {
                "function": !0,
                object: !0
            },
            Be = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            We = $e[typeof window] && window !== (this && this.window) ? window : this,
            Ue = $e[typeof exports] && exports && !exports.nodeType && exports,
            Xe = $e[typeof module] && module && !module.nodeType && module,
            Ve = Ue && Xe && "object" == typeof global && global;
        !Ve || Ve.global !== Ve && Ve.window !== Ve && Ve.self !== Ve || (We = Ve);
        var Qe = Xe && Xe.exports === Ue && Ue,
            Ye = x();
        "function" == typeof define && "object" == typeof define.amd && define.amd ? (We._ = Ye, define(function () {
            return Ye
        })) : Ue && Xe ? Qe ? (Xe.exports = Ye)._ = Ye : Ue._ = Ye : We._ = Ye
    }.call(this),
    function () {
        $(function () {
            return $("body.docs .side-nav a").each(function (e) {
                return function (e, t) {
                    var n;
                    return t.attributes.href.value === window.location.pathname ? (n = $(t), n.closest("li").addClass("active"), n.addClass("active")) : void 0
                }
            }(this)), $(".top-bar-section a").each(function (e) {
                return function (e, t) {
                    var n;
                    return t.attributes.href.value === window.location.pathname ? (n = $(t), n.parents("li").addClass("active")) : void 0
                }
            }(this)), $(".gallary-image").click(function (e) {
                var t;
                return t = {
                    index: this,
                    event: e
                }, blueimp.Gallery($(".gallary-image"), t)
            }), $("[data-download-button]").click(function (e) {
                var t;
                return t = $(this).data("download-button"), ga("send", "event", "download", "download", t)
            }), $(document).foundation()
        })
    }.call(this);