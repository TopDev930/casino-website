webpackJsonp([5], {
    2: function(t, e, n) {
        t.exports = n("Nf6k")
    },
    HNiq: function(t, e, n) {
        "use strict";
        e.a = function(t) {
            return void 0 !== window.i18n ? s(window.i18n, t, t) : t
        }, e.b = function(t) {
            return void 0 !== window.cfg ? s(window.cfg, t) : t
        }, e.c = function(t) {
            t.select();
            try {
                document.execCommand("copy")
            } catch (t) {}
            document.getSelection().removeAllRanges(), document.activeElement.blur()
        }, e.f = function(t, e, n, i) {
            new(a.a.extend(t))({
                propsData: i,
                parent: e
            }).$mount(n)
        }, e.d = function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        }, e.g = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = Math.pow(10, e);
            return Math.round(t * n) / n
        }, e.e = function(t, e, n) {
            t = "" + t;
            for (; t.length < n;) t = e + t;
            return t
        }, e.h = function(t) {
            document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement ? document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen() : t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullScreen ? t.webkitRequestFullScreen() : t.msRequestFullscreen && t.msRequestFullscreen()
        };
        var i = n("I3G/"),
            a = n.n(i),
            o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            };

        function s(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return e.split(".").reduce(function(t, e) {
                return t && void 0 != o(t[e]) && null != t[e] ? t[e] : n
            }, t)
        }
    },
    Lokx: function(t, e, n) {
        var i, a;
        ! function(o) {
            "use strict";
            void 0 === (a = "function" == typeof(i = o) ? i.call(e, n, e, t) : i) || (t.exports = a)
        }(function() {
            "use strict";
            if ("undefined" == typeof window || !window.document) return function() {
                throw new Error("Sortable.js requires a window with a document")
            };
            var t, e, n, i, a, o, s, l, r, d, c, u, m, h, p, f, v, g, _, y, b, w, x, E, D, C = [],
                T = !1,
                S = !1,
                N = !1,
                B = /\s+/g,
                I = "Sortable" + (new Date).getTime(),
                L = window,
                k = L.document,
                F = L.parseInt,
                R = L.setTimeout,
                A = L.jQuery || L.Zepto,
                M = L.Polymer,
                O = {
                    capture: !1,
                    passive: !1
                },
                P = "draggable" in k.createElement("div"),
                X = !navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i) && ((E = k.createElement("x")).style.cssText = "pointer-events:auto", "auto" === E.style.pointerEvents),
                Y = !1,
                j = !1,
                H = Math.abs,
                q = Math.min,
                U = [],
                z = [],
                W = function(t, e) {
                    var n = at(t),
                        i = F(n.width),
                        a = ct(t, 0, e),
                        o = ct(t, 1, e),
                        s = a && at(a),
                        l = o && at(o),
                        r = s && F(s.marginLeft) + F(s.marginRight) + a.getBoundingClientRect().width,
                        d = l && F(l.marginLeft) + F(l.marginRight) + o.getBoundingClientRect().width;
                    return "flex" === n.display ? "column" === n.flexDirection || "column-reverse" === n.flexDirection ? "vertical" : "horizontal" : a && ("block" === s.display || "grid" === s.display || r >= i && "none" === n.float || o && "none" === n.float && r + d > i) ? "vertical" : "horizontal"
                },
                J = function(t, e) {
                    if (!t || !t.getBoundingClientRect) return L;
                    var n = t,
                        i = !1;
                    do {
                        if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
                            var a = at(n);
                            if (n.clientWidth < n.scrollWidth && ("auto" == a.overflowX || "scroll" == a.overflowX) || n.clientHeight < n.scrollHeight && ("auto" == a.overflowY || "scroll" == a.overflowY)) {
                                if (!n || !n.getBoundingClientRect || n === k.body) return L;
                                if (i || e) return n;
                                i = !0
                            }
                        }
                    } while (n = n.parentNode);
                    return L
                },
                G = ft(function(t, e, n, i) {
                    if (e.scroll) {
                        var a, o, s, c, u = n ? n[I] : window,
                            m = e.scrollSensitivity,
                            h = e.scrollSpeed,
                            p = t.clientX,
                            f = t.clientY,
                            v = window.innerWidth,
                            g = window.innerHeight,
                            y = !1;
                        r !== n && (V(), l = e.scroll, d = e.scrollFn, !0 === l && (l = J(n, !0), r = l));
                        var b = 0,
                            w = l;
                        do {
                            var x;
                            if (w && w !== L ? (o = at(x = w), a = w.getBoundingClientRect(), s = x.clientWidth < x.scrollWidth && ("auto" == o.overflowX || "scroll" == o.overflowX) && (H(a.right - p) <= m) - (H(a.left - p) <= m), c = x.clientHeight < x.scrollHeight && ("auto" == o.overflowY || "scroll" == o.overflowY) && (H(a.bottom - f) <= m) - (H(a.top - f) <= m)) : w === L && (x = L, s = (v - p <= m) - (p <= m), c = (g - f <= m) - (f <= m)), !C[b])
                                for (var E = 0; E <= b; E++) C[E] || (C[E] = {});
                            C[b].vx == s && C[b].vy == c && C[b].el === x || (C[b].el = x, C[b].vx = s, C[b].vy = c, clearInterval(C[b].pid), !x || 0 == s && 0 == c || (y = !0, C[b].pid = setInterval(function() {
                                i && 0 === this.layer && $.active._emulateDragOver(!0);
                                var e = C[this.layer].vy ? C[this.layer].vy * h : 0,
                                    n = C[this.layer].vx ? C[this.layer].vx * h : 0;
                                "function" == typeof d && "continue" !== d.call(u, n, e, t, _, C[this.layer].el) || (C[this.layer].el === L ? L.scrollTo(L.pageXOffset + n, L.pageYOffset + e) : (C[this.layer].el.scrollTop += e, C[this.layer].el.scrollLeft += n))
                            }.bind({
                                layer: b
                            }), 24))), b++
                        } while (e.bubbleScroll && w !== L && (w = J(w, !1)));
                        T = y
                    }
                }, 30),
                V = function() {
                    C.forEach(function(t) {
                        clearInterval(t.pid)
                    }), C = []
                },
                Z = function(t) {
                    function e(t, e) {
                        return function(n, i, a, o) {
                            var s;
                            if (null == t && e) s = !0;
                            else if (null == t || !1 === t) s = !1;
                            else if (e && "clone" === t) s = t;
                            else if ("function" == typeof t) s = t(n, i, a, o);
                            else {
                                var l = (e ? n : i).options.group.name;
                                s = !0 === t || "string" == typeof t && t === l || t.join && t.indexOf(l) > -1
                            }
                            return s || n.options.group.name && i.options.group.name && n.options.group.name === i.options.group.name
                        }
                    }
                    var n = {},
                        i = t.group;
                    i && "object" == typeof i || (i = {
                        name: i
                    }), n.name = i.name, n.checkPull = e(i.pull, !0), n.checkPut = e(i.put), n.revertClone = i.revertClone, t.group = n
                },
                Q = function(e) {
                    t && t.parentNode[I] && t.parentNode[I]._computeIsAligned(e)
                };

            function $(t, e) {
                if (!t || !t.nodeType || 1 !== t.nodeType) throw "Sortable: `el` must be HTMLElement, and not " + {}.toString.call(t);
                this.el = t, this.options = e = vt({}, e), t[I] = this;
                var n = {
                    group: null,
                    sort: !0,
                    disabled: !1,
                    store: null,
                    handle: null,
                    scroll: !0,
                    scrollSensitivity: 30,
                    scrollSpeed: 10,
                    bubbleScroll: !0,
                    draggable: /[uo]l/i.test(t.nodeName) ? "li" : ">*",
                    swapThreshold: 1,
                    invertSwap: !1,
                    invertedSwapThreshold: null,
                    ghostClass: "sortable-ghost",
                    chosenClass: "sortable-chosen",
                    dragClass: "sortable-drag",
                    ignore: "a, img",
                    filter: null,
                    preventOnFilter: !0,
                    animation: 0,
                    setData: function(t, e) {
                        t.setData("Text", e.textContent)
                    },
                    dropBubble: !1,
                    dragoverBubble: !1,
                    dataIdAttr: "data-id",
                    delay: 0,
                    touchStartThreshold: F(window.devicePixelRatio, 10) || 1,
                    forceFallback: !1,
                    fallbackClass: "sortable-fallback",
                    fallbackOnBody: !1,
                    fallbackTolerance: 0,
                    fallbackOffset: {
                        x: 0,
                        y: 0
                    },
                    supportPointer: !1 !== $.supportPointer && ("PointerEvent" in window || window.navigator && "msPointerEnabled" in window.navigator)
                };
                for (var i in n) !(i in e) && (e[i] = n[i]);
                for (var a in "direction" in e || (e.direction = function() {
                        return W(t, e)
                    }), Z(e), null == e.invertedSwapThreshold && (e.invertedSwapThreshold = e.swapThreshold), this) "_" === a.charAt(0) && "function" == typeof this[a] && (this[a] = this[a].bind(this));
                this.nativeDraggable = !e.forceFallback && P, et(t, "mousedown", this._onTapStart), et(t, "touchstart", this._onTapStart), e.supportPointer && et(t, "pointerdown", this._onTapStart), this.nativeDraggable && (et(t, "dragover", this), et(t, "dragenter", this)), z.push(this._onDragOver), e.store && e.store.get && this.sort(e.store.get(this) || [])
            }

            function K(t, e, n, i) {
                if (t) {
                    n = n || k;
                    do {
                        if (">*" === e && t.parentNode === n || pt(t, e) || i && t === n) return t;
                        if (t === n) break
                    } while (t = tt(t))
                }
                return null
            }

            function tt(t) {
                return t.host && t !== k && t.host.nodeType ? t.host : t.parentNode
            }

            function et(t, e, n) {
                t.addEventListener(e, n, O)
            }

            function nt(t, e, n) {
                t.removeEventListener(e, n, O)
            }

            function it(t, e, n) {
                if (t && e)
                    if (t.classList) t.classList[n ? "add" : "remove"](e);
                    else {
                        var i = (" " + t.className + " ").replace(B, " ").replace(" " + e + " ", " ");
                        t.className = (i + (n ? " " + e : "")).replace(B, " ")
                    }
            }

            function at(t, e, n) {
                var i = t && t.style;
                if (i) {
                    if (void 0 === n) return k.defaultView && k.defaultView.getComputedStyle ? n = k.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), void 0 === e ? n : n[e];
                    e in i || (e = "-webkit-" + e), i[e] = n + ("string" == typeof n ? "" : "px")
                }
            }

            function ot(t, e, n) {
                if (t) {
                    var i = t.getElementsByTagName(e),
                        a = 0,
                        o = i.length;
                    if (n)
                        for (; a < o; a++) n(i[a], a);
                    return i
                }
                return []
            }

            function st(t, e, n, a, o, s, l, r, d) {
                var c, u = (t = t || e[I]).options,
                    m = "on" + n.charAt(0).toUpperCase() + n.substr(1);
                window.CustomEvent ? c = new CustomEvent(n, {
                    bubbles: !0,
                    cancelable: !0
                }) : (c = k.createEvent("Event")).initEvent(n, !0, !0), c.to = o || e, c.from = s || e, c.item = a || e, c.clone = i, c.oldIndex = l, c.newIndex = r, c.originalEvent = d, e.dispatchEvent(c), u[m] && u[m].call(t, c)
            }

            function lt(t, e, n, i, a, o, s, l) {
                var r, d, c = t[I],
                    u = c.options.onMove;
                return window.CustomEvent ? r = new CustomEvent("move", {
                    bubbles: !0,
                    cancelable: !0
                }) : (r = k.createEvent("Event")).initEvent("move", !0, !0), r.to = e, r.from = t, r.dragged = n, r.draggedRect = i, r.related = a || e, r.relatedRect = o || e.getBoundingClientRect(), r.willInsertAfter = l, r.originalEvent = s, t.dispatchEvent(r), u && (d = u.call(c, r, s)), d
            }

            function rt(t) {
                t.draggable = !1
            }

            function dt() {
                Y = !1
            }

            function ct(e, i, a) {
                for (var o = 0, s = 0, l = e.children; s < l.length;) {
                    if ("none" !== l[s].style.display && l[s] !== n && l[s] !== t && K(l[s], a.draggable, e, !1)) {
                        if (o === i) return l[s];
                        o++
                    }
                    s++
                }
                return null
            }

            function ut(t) {
                var e = t.lastElementChild;
                return e === n && (e = t.children[t.childElementCount - 2]), e || null
            }

            function mt(t) {
                for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, i = 0; n--;) i += e.charCodeAt(n);
                return i.toString(36)
            }

            function ht(t, e) {
                var n = 0;
                if (!t || !t.parentNode) return -1;
                for (; t && (t = t.previousElementSibling);) "TEMPLATE" === t.nodeName.toUpperCase() || ">*" !== e && !pt(t, e) || n++;
                return n
            }

            function pt(t, e) {
                if (t) try {
                    if (t.matches) return t.matches(e);
                    if (t.msMatchesSelector) return t.msMatchesSelector(e)
                } catch (t) {
                    return !1
                }
                return !1
            }

            function ft(t, e) {
                return function() {
                    if (!D) {
                        var n = arguments,
                            i = this;
                        D = R(function() {
                            1 === n.length ? t.call(i, n[0]) : t.apply(i, n), D = void 0
                        }, e)
                    }
                }
            }

            function vt(t, e) {
                if (t && e)
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                return t
            }

            function gt(t) {
                return M && M.dom ? M.dom(t).cloneNode(!0) : A ? A(t).clone(!0)[0] : t.cloneNode(!0)
            }

            function _t(t) {
                return R(t, 0)
            }

            function yt(t) {
                return clearTimeout(t)
            }

            function bt(t) {
                $.active && t.cancelable && t.preventDefault()
            }
            return $.prototype = {
                constructor: $,
                _isAligned: !0,
                _computeIsAligned: function(e, n) {
                    var i, a, o, s, l, r, d;
                    j || t && t.parentNode === this.el && (!0 !== n && !1 !== n && (n = !!K(e.target, null, t, !0)), this._isAligned = !T && (n || this._isAligned && (i = e.clientX, a = e.clientY, this.el, o = this._getDirection(e, null), this.options, s = x || t.getBoundingClientRect(), l = "vertical" === o ? s.left : s.top, r = "vertical" === o ? s.right : s.bottom, l < (d = "vertical" === o ? i : a) && d < r)), j = !0, R(function() {
                        j = !1
                    }, 30))
                },
                _getDirection: function(e, n) {
                    return "function" == typeof this.options.direction ? this.options.direction.call(this, e, n, t) : this.options.direction
                },
                _onTapStart: function(e) {
                    var n, i = this,
                        a = this.el,
                        o = this.options,
                        l = o.preventOnFilter,
                        r = e.type,
                        d = e.touches && e.touches[0],
                        c = (d || e).target,
                        u = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || c,
                        m = o.filter;
                    if (function(t) {
                            U.length = 0;
                            var e = t.getElementsByTagName("input"),
                                n = e.length;
                            for (; n--;) {
                                var i = e[n];
                                i.checked && U.push(i)
                            }
                        }(a), !t && !(/mousedown|pointerdown/.test(r) && 0 !== e.button || o.disabled) && !u.isContentEditable && (c = K(c, o.draggable, a, !0)) && s !== c) {
                        if (n = ht(c, o.draggable), "function" == typeof m) {
                            if (m.call(this, e, c, this)) return st(i, u, "filter", c, a, a, n), void(l && e.cancelable && e.preventDefault())
                        } else if (m && (m = m.split(",").some(function(t) {
                                if (t = K(u, t.trim(), a, !1)) return st(i, t, "filter", c, a, a, n), !0
                            }))) return void(l && e.cancelable && e.preventDefault());
                        o.handle && !K(u, o.handle, a, !1) || this._prepareDragStart(e, d, c, n)
                    }
                },
                _handleAutoScroll: function(e, n) {
                    if (t && this.options.scroll) {
                        var i = e.clientX,
                            a = e.clientY,
                            o = k.elementFromPoint(i, a),
                            s = this;
                        if (n || window.navigator && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
                            G(e, s.options, o, !0);
                            var l = J(o, !0);
                            !T || p && i === f && a === v || (p && clearInterval(p), p = setInterval(function() {
                                if (t) {
                                    var n = J(k.elementFromPoint(i, a), !0);
                                    n !== l && (l = n, V(), G(e, s.options, l, !0))
                                }
                            }, 10), f = i, v = a)
                        } else {
                            if (!s.options.bubbleScroll || J(o, !0) === window) return void V();
                            G(e, s.options, J(o, !1))
                        }
                    }
                },
                _prepareDragStart: function(n, i, l, r) {
                    var d, u = this,
                        h = u.el,
                        p = u.options,
                        f = h.ownerDocument;
                    l && !t && l.parentNode === h && (g = n, a = h, e = (t = l).parentNode, o = t.nextSibling, s = l, m = p.group, c = r, this._lastX = (i || n).clientX, this._lastY = (i || n).clientY, t.style["will-change"] = "all", d = function() {
                        u._disableDelayedDrag(), t.draggable = u.nativeDraggable, u._triggerDragStart(n, i), st(u, a, "choose", t, a, a, c), it(t, p.chosenClass, !0)
                    }, p.ignore.split(",").forEach(function(e) {
                        ot(t, e.trim(), rt)
                    }), et(f, "mouseup", u._onDrop), et(f, "touchend", u._onDrop), et(f, "touchcancel", u._onDrop), p.supportPointer && et(f, "pointercancel", u._onDrop), p.delay ? (et(f, "mouseup", u._disableDelayedDrag), et(f, "touchend", u._disableDelayedDrag), et(f, "touchcancel", u._disableDelayedDrag), et(f, "mousemove", u._delayedDragTouchMoveHandler), et(f, "touchmove", u._delayedDragTouchMoveHandler), p.supportPointer && et(f, "pointermove", u._delayedDragTouchMoveHandler), u._dragStartTimer = R(d.bind(u), p.delay)) : d())
                },
                _delayedDragTouchMoveHandler: function(t) {
                    var e = t.touches ? t.touches[0] : t;
                    q(H(e.clientX - this._lastX), H(e.clientY - this._lastY)) >= this.options.touchStartThreshold && this._disableDelayedDrag()
                },
                _disableDelayedDrag: function() {
                    var t = this.el.ownerDocument;
                    clearTimeout(this._dragStartTimer), nt(t, "mouseup", this._disableDelayedDrag), nt(t, "touchend", this._disableDelayedDrag), nt(t, "touchcancel", this._disableDelayedDrag), nt(t, "mousemove", this._delayedDragTouchMoveHandler), nt(t, "touchmove", this._delayedDragTouchMoveHandler), nt(t, "pointermove", this._delayedDragTouchMoveHandler)
                },
                _triggerDragStart: function(e, n) {
                    (n = n || ("touch" == e.pointerType ? e : null)) ? (g = {
                        target: t,
                        clientX: n.clientX,
                        clientY: n.clientY
                    }, this._onDragStart(g, "touch")) : this.nativeDraggable ? (et(t, "dragend", this), et(a, "dragstart", this._onDragStart)) : this._onDragStart(g, !0);
                    try {
                        k.selection ? _t(function() {
                            k.selection.empty()
                        }) : window.getSelection().removeAllRanges()
                    } catch (t) {}
                },
                _dragStarted: function() {
                    if (a && t) {
                        this.nativeDraggable && (et(k, "dragover", this._handleAutoScroll), et(k, "dragover", Q));
                        var e = this.options;
                        it(t, e.dragClass, !1), it(t, e.ghostClass, !0), at(t, "transform", ""), $.active = this, this._isAligned = !0, st(this, a, "start", t, a, a, c)
                    } else this._nulling()
                },
                _emulateDragOver: function(e) {
                    if (_) {
                        if (this._lastX === _.clientX && this._lastY === _.clientY && !e) return;
                        this._lastX = _.clientX, this._lastY = _.clientY, X || at(n, "display", "none");
                        for (var i = k.elementFromPoint(_.clientX, _.clientY), a = i, o = !!K(i, null, t, !0); i && i.shadowRoot;) a = i = i.shadowRoot.elementFromPoint(_.clientX, _.clientY);
                        if (a)
                            do {
                                if (a[I]) {
                                    for (var s = z.length; s--;) z[s]({
                                        clientX: _.clientX,
                                        clientY: _.clientY,
                                        target: i,
                                        rootEl: a
                                    });
                                    if (!this.options.dragoverBubble) break
                                }
                                i = a
                            } while (a = a.parentNode);
                        t.parentNode[I]._computeIsAligned(_, o), X || at(n, "display", "")
                    }
                },
                _onTouchMove: function(t) {
                    if (g) {
                        var e = this.options,
                            i = e.fallbackTolerance,
                            a = e.fallbackOffset,
                            o = t.touches ? t.touches[0] : t,
                            s = o.clientX - g.clientX + a.x,
                            l = o.clientY - g.clientY + a.y,
                            r = t.touches ? "translate3d(" + s + "px," + l + "px,0)" : "translate(" + s + "px," + l + "px)";
                        if (this.options.supportPointer && "touchmove" === t.type) return;
                        if (!$.active) {
                            if (i && q(H(o.clientX - this._lastX), H(o.clientY - this._lastY)) < i) return;
                            this._dragStarted()
                        }
                        this._appendGhost(), this._handleAutoScroll(o, !0), y = !0, _ = o, at(n, "webkitTransform", r), at(n, "mozTransform", r), at(n, "msTransform", r), at(n, "transform", r), t.cancelable && t.preventDefault()
                    }
                },
                _appendGhost: function() {
                    if (!n) {
                        var e, i = t.getBoundingClientRect(),
                            o = at(t),
                            s = this.options;
                        it(n = t.cloneNode(!0), s.ghostClass, !1), it(n, s.fallbackClass, !0), it(n, s.dragClass, !0), at(n, "top", i.top - F(o.marginTop, 10)), at(n, "left", i.left - F(o.marginLeft, 10)), at(n, "width", i.width), at(n, "height", i.height), at(n, "opacity", "0.8"), at(n, "position", "fixed"), at(n, "zIndex", "100000"), at(n, "pointerEvents", "none"), s.fallbackOnBody && k.body.appendChild(n) || a.appendChild(n), e = n.getBoundingClientRect(), at(n, "width", 2 * i.width - e.width), at(n, "height", 2 * i.height - e.height)
                    }
                },
                _onDragStart: function(e, n) {
                    var o = this,
                        s = e.dataTransfer,
                        l = o.options;
                    o._offUpEvents(), m.checkPull(o, o, t, e) && ((i = gt(t)).draggable = !1, i.style["will-change"] = "", this._hideClone(), it(i, o.options.chosenClass, !1), o._cloneId = _t(function() {
                        a.insertBefore(i, t), st(o, a, "clone", t)
                    })), it(t, l.dragClass, !0), n ? ("touch" === n ? (et(k, "touchmove", bt), et(k, "touchmove", o._onTouchMove), et(k, "touchend", o._onDrop), et(k, "touchcancel", o._onDrop), l.supportPointer && (et(k, "pointermove", o._onTouchMove), et(k, "pointerup", o._onDrop))) : (et(k, "mousemove", o._onTouchMove), et(k, "mouseup", o._onDrop)), o._loopId = setInterval(o._emulateDragOver, 50), it(t, l.dragClass, !1)) : (s && (s.effectAllowed = "move", l.setData && l.setData.call(o, s, t)), et(k, "drop", o), at(t, "transform", "translateZ(0)"), o._dragStartId = _t(o._dragStarted)), et(k, "selectstart", o)
                },
                _onDragOver: function(s) {
                    var l, r, d, c, u = this.el,
                        p = this.options,
                        f = p.group,
                        v = $.active,
                        g = m === f,
                        _ = p.sort;
                    if ((void 0 === s.rootEl || s.rootEl === this.el) && (p.dragoverBubble || s.rootEl || (this._handleAutoScroll(s), t.parentNode[I]._computeIsAligned(s)), void 0 !== s.preventDefault && (s.cancelable && s.preventDefault(), !p.dragoverBubble && s.stopPropagation()), y = !0, l = K(s.target, p.draggable, u, !0), !(t.animated && l === t || l.animated || Y) && (l !== b && (N = !1, S = !1, b = null), v && !p.disabled && (g ? _ || (c = !a.contains(t)) : h === this || (this.lastPutMode = m.checkPull(this, v, t, s)) && f.checkPut(this, v, t, s))))) {
                        var E, D = this._getDirection(s, l);
                        if (r = t.getBoundingClientRect(), h !== this && this !== $.active ? (h = this, !0) : this === $.active && (!1, h = null), c) return this._hideClone(), e = a, void(i || o ? a.insertBefore(t, i || o) : _ || a.appendChild(t));
                        if (0 === u.children.length || u.children[0] === n || u === s.target && function(t, e, n) {
                                var i = ut(n).getBoundingClientRect(),
                                    a = "vertical" === e ? t.clientY : t.clientX,
                                    o = "vertical" === e ? t.clientX : t.clientY,
                                    s = "vertical" === e ? i.bottom : i.right,
                                    l = "vertical" === e ? i.left : i.top,
                                    r = "vertical" === e ? i.right : i.bottom;
                                return o > l && o < r && a > s
                            }(s, D, u)) {
                            if (0 !== u.children.length && u.children[0] !== n && u === s.target && (l = ut(u)), l) {
                                if (l.animated) return;
                                d = l.getBoundingClientRect()
                            }
                            g ? v._hideClone() : v._showClone(this), !1 !== lt(a, u, t, r, l, d, s, !!l) && (t.contains(u) || (u.appendChild(t), e = u, this._isAligned = !0, x = null), this._animate(r, t), l && this._animate(d, l))
                        } else if (l && !l.animated && l !== t && void 0 !== l.parentNode[I] && l !== u) {
                            if (N = N || p.invertSwap || t.parentNode !== u || !this._isAligned, 0 === (E = function(e, n, i, a, o, s, l) {
                                    var r = n.getBoundingClientRect(),
                                        d = "vertical" === i ? e.clientY : e.clientX,
                                        c = "vertical" === i ? r.height : r.width,
                                        u = "vertical" === i ? r.top : r.left,
                                        m = "vertical" === i ? r.bottom : r.right,
                                        h = t.getBoundingClientRect(),
                                        p = "vertical" === i ? h.height : h.width,
                                        f = !1,
                                        v = at(t);
                                    if (p += F(v.marginLeft) + F(v.marginRight), !s)
                                        if (l && p < c * a)
                                            if (!S && (1 === w ? d > u + c * o / 2 : d < m - c * o / 2) && (S = !0), S) f = !0;
                                            else {
                                                "vertical" === i ? h.top : h.left, "vertical" === i ? h.bottom : h.right;
                                                if (1 === w ? d < u + p : d > m - p) return -1 * w
                                            }
                                    else if (d > u + c * (1 - a) / 2 && d < m - c * (1 - a) / 2) return d > u + c / 2 ? -1 : 1;
                                    if ((f = f || s) && (d < u + c * o / 2 || d > m - c * o / 2)) return d > u + c / 2 ? 1 : -1;
                                    return 0
                                }(s, l, D, p.swapThreshold, p.invertedSwapThreshold, N, b === l))) return;
                            x = null, this._isAligned = !0, b && (b === l || l && l.animated) || (S = !1, b = l), w = E, d = l.getBoundingClientRect();
                            var C = l.nextElementSibling,
                                T = !1,
                                B = lt(a, u, t, r, l, d, s, T = 1 === E);
                            !1 !== B && (1 !== B && -1 !== B || (T = 1 === B), Y = !0, R(dt, 30), g ? v._hideClone() : v._showClone(this), t.contains(u) || (T && !C ? u.appendChild(t) : l.parentNode.insertBefore(t, T ? C : l)), e = t.parentNode, this._animate(r, t), this._animate(d, l))
                        }
                    }
                },
                _animate: function(e, n) {
                    var i = this.options.animation;
                    if (i) {
                        var a = n.getBoundingClientRect();
                        if (n === t && (x = a), 1 === e.nodeType && (e = e.getBoundingClientRect()), e.left + e.width / 2 === a.left + a.width / 2 && e.top + e.height / 2 === a.top + a.height / 2) return;
                        at(n, "transition", "none"), at(n, "transform", "translate3d(" + (e.left - a.left) + "px," + (e.top - a.top) + "px,0)"), n.offsetWidth, at(n, "transition", "all " + i + "ms"), at(n, "transform", "translate3d(0,0,0)"), clearTimeout(n.animated), n.animated = R(function() {
                            at(n, "transition", ""), at(n, "transform", ""), n.animated = !1
                        }, i)
                    }
                },
                _offUpEvents: function() {
                    var t = this.el.ownerDocument;
                    nt(k, "touchmove", bt), nt(k, "touchmove", this._onTouchMove), nt(k, "pointermove", this._onTouchMove), nt(t, "mouseup", this._onDrop), nt(t, "touchend", this._onDrop), nt(t, "pointerup", this._onDrop), nt(t, "touchcancel", this._onDrop), nt(t, "pointercancel", this._onDrop), nt(k, "selectstart", this)
                },
                _onDrop: function(s) {
                    var l = this.el,
                        r = this.options;
                    T = !1, N = !1, S = !1, clearInterval(this._loopId), clearInterval(p), V(), clearTimeout(D), D = void 0, clearTimeout(this._dragStartTimer), yt(this._cloneId), yt(this._dragStartId), nt(k, "mousemove", this._onTouchMove), this.nativeDraggable && (nt(k, "drop", this), nt(l, "dragstart", this._onDragStart), nt(k, "dragover", this._handleAutoScroll), nt(k, "dragover", Q)), this._offUpEvents(), s && (y && (s.cancelable && s.preventDefault(), !r.dropBubble && s.stopPropagation()), n && n.parentNode && n.parentNode.removeChild(n), (a === e || h && "clone" !== h.lastPutMode) && i && i.parentNode && i.parentNode.removeChild(i), t && (this.nativeDraggable && nt(t, "dragend", this), rt(t), t.style["will-change"] = "", it(t, this.options.ghostClass, !1), it(t, this.options.chosenClass, !1), st(this, a, "unchoose", t, e, a, c, null, s), a !== e ? ((u = ht(t, r.draggable)) >= 0 && (st(null, e, "add", t, e, a, c, u, s), st(this, a, "remove", t, e, a, c, u, s), st(null, e, "sort", t, e, a, c, u, s), st(this, a, "sort", t, e, a, c, u, s)), h && h.save()) : t.nextSibling !== o && (u = ht(t, r.draggable)) >= 0 && (st(this, a, "update", t, e, a, c, u, s), st(this, a, "sort", t, e, a, c, u, s)), $.active && (null != u && -1 !== u || (u = c), st(this, a, "end", t, e, a, c, u, s), this.save()))), this._nulling()
                },
                _nulling: function() {
                    a = t = e = n = o = i = s = l = r = C.length = p = f = v = g = _ = y = u = c = b = w = x = h = m = $.active = null, U.forEach(function(t) {
                        t.checked = !0
                    }), U.length = 0
                },
                handleEvent: function(e) {
                    switch (e.type) {
                        case "drop":
                        case "dragend":
                            this._onDrop(e);
                            break;
                        case "dragenter":
                        case "dragover":
                            t && (this._onDragOver(e), function(t) {
                                t.dataTransfer && (t.dataTransfer.dropEffect = "move");
                                t.cancelable && t.preventDefault()
                            }(e));
                            break;
                        case "selectstart":
                            e.preventDefault()
                    }
                },
                toArray: function() {
                    for (var t, e = [], n = this.el.children, i = 0, a = n.length, o = this.options; i < a; i++) K(t = n[i], o.draggable, this.el, !1) && e.push(t.getAttribute(o.dataIdAttr) || mt(t));
                    return e
                },
                sort: function(t) {
                    var e = {},
                        n = this.el;
                    this.toArray().forEach(function(t, i) {
                        var a = n.children[i];
                        K(a, this.options.draggable, n, !1) && (e[t] = a)
                    }, this), t.forEach(function(t) {
                        e[t] && (n.removeChild(e[t]), n.appendChild(e[t]))
                    })
                },
                save: function() {
                    var t = this.options.store;
                    t && t.set && t.set(this)
                },
                closest: function(t, e) {
                    return K(t, e || this.options.draggable, this.el, !1)
                },
                option: function(t, e) {
                    var n = this.options;
                    if (void 0 === e) return n[t];
                    n[t] = e, "group" === t && Z(n)
                },
                destroy: function() {
                    var t = this.el;
                    t[I] = null, nt(t, "mousedown", this._onTapStart), nt(t, "touchstart", this._onTapStart), nt(t, "pointerdown", this._onTapStart), this.nativeDraggable && (nt(t, "dragover", this), nt(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(t) {
                        t.removeAttribute("draggable")
                    }), z.splice(z.indexOf(this._onDragOver), 1), this._onDrop(), this.el = t = null
                },
                _hideClone: function() {
                    i.cloneHidden || (at(i, "display", "none"), i.cloneHidden = !0)
                },
                _showClone: function(e) {
                    "clone" === e.lastPutMode ? i.cloneHidden && (a.contains(t) && !this.options.group.revertClone ? a.insertBefore(i, t) : o ? a.insertBefore(i, o) : a.appendChild(i), this.options.group.revertClone && this._animate(t, i), at(i, "display", ""), i.cloneHidden = !1) : this._hideClone()
                }
            }, $.utils = {
                on: et,
                off: nt,
                css: at,
                find: ot,
                is: function(t, e) {
                    return !!K(t, e, t, !1)
                },
                extend: vt,
                throttle: ft,
                closest: K,
                toggleClass: it,
                clone: gt,
                index: ht,
                nextTick: _t,
                cancelNextTick: yt,
                detectDirection: W,
                getChild: ct
            }, $.create = function(t, e) {
                return new $(t, e)
            }, $.version = "1.8.0-rc1", $
        })
    },
    Nf6k: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n("mtWM"),
            a = n.n(i),
            o = n("Lokx"),
            s = n.n(o),
            l = n("HNiq"),
            r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            };
        window.game_multi_slots_config = function(t) {
            var e = {
                symbols: []
            };
            return e.game_multi_slots_symbols = document.getElementById("game_multi_slots_symbols_" + t), !!e.game_multi_slots_symbols && (e.bind = function() {
                for (var n in e.game_multi_slots_symbols_items = document.getElementById("game_multi_slots_symbols_items_" + t), e.game_multi_slots_symbols_place = document.getElementById("game_multi_slots_symbols_place_" + t), e.game_multi_slots_symbols_place_input = e.game_multi_slots_symbols_place.getElementsByTagName("input")[0], e.symbols_input = document.getElementById("game_multi_slots_symbols_input_" + t), e.reel_input = document.getElementById("game_multi_slots_reel_input_" + t), e.game_multi_slots_reel_symbols = document.getElementById("game_multi_slots_reel_symbols_" + t), e.game_multi_slots_reels = document.getElementById("game_multi_slots_reels_" + t), e.storage = e.game_multi_slots_symbols.dataset.storage, e.token = e.game_multi_slots_symbols.dataset.token, e.url = e.game_multi_slots_symbols.dataset.url, e.reels_cont = [], e.reels = [
                        [],
                        [],
                        [],
                        [],
                        []
                    ], e.game_multi_slots_reels.children) "object" == r(e.game_multi_slots_reels.children[n]) && (e.reels_cont[e.game_multi_slots_reels.children[n].dataset.idx] = e.game_multi_slots_reels.children[n], e.game_multi_slots_reels.children[n].addEventListener("dragover", e.reel_drop_over, !1), e.game_multi_slots_reels.children[n].addEventListener("drop", e.reel_drop, !1));
                e.game_multi_slots_symbols_place.addEventListener("click", function() {
                    e.game_multi_slots_symbols_place_input.click()
                }), e.game_multi_slots_symbols_place_input.addEventListener("change", function(t) {
                    var n = [];
                    for (var i in this.files) "object" == r(this.files[i]) && n.push(this.files[i]);
                    e.files_add_process(n), this.value = ""
                }), e.game_multi_slots_symbols_place.addEventListener("dragleave", function(t) {
                    e.game_multi_slots_symbols_place.classList.remove("dropover"), t.preventDefault()
                }, !1), e.game_multi_slots_symbols_place.addEventListener("dragover", function(t) {
                    e.game_multi_slots_symbols_place.classList.add("dropover"), t.preventDefault()
                }, !1), e.game_multi_slots_symbols_place.addEventListener("drop", function(t) {
                    t.preventDefault();
                    var n = [];
                    if (e.game_multi_slots_symbols_place.classList.remove("dropover"), t.dataTransfer.items)
                        for (var i = 0; i < t.dataTransfer.items.length; i++) {
                            if ("file" !== t.dataTransfer.items[i].kind) return e.showFileError();
                            n.push(t.dataTransfer.items[i].getAsFile())
                        } else
                            for (i = 0; i < t.dataTransfer.files.length; i++) n.push(t.dataTransfer.files[i]);
                    e.files_add_process(n)
                }, !1)
            }, e.files_add_process = function(t) {
                for (var n in t)
                    if ("image/png" != t[n].type) return e.showFileError();
                e.game_multi_slots_symbols_place.classList.add("loading");
                var i = new FormData;
                for (var n in i.append("_token", e.token), t) i.append("files[" + n + "]", t[n]);
                var o = [];
                for (var n in e.symbols) o.push(e.symbols[n].filename);
                i.append("used", o), a.a.post(e.url, i, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }).then(function(t) {
                    var n = t.data;
                    if (n.success)
                        for (var i in n.files) e.append_symbol(n.files[i]);
                    else e.showFileError();
                    e.game_multi_slots_symbols_place.classList.remove("loading")
                }).catch(function(t) {
                    return console.error(t)
                })
            }, e.reel_drag_start = function(t) {
                t.dataTransfer.setData("idx", this.dataset.idx)
            }, e.reel_drop_over = function(t) {
                t.preventDefault()
            }, e.reel_drop = function(t) {
                "string" == typeof t.dataTransfer.getData("idx") && 0 != t.dataTransfer.getData("idx").length && (t.preventDefault(), e.append_reel(this.dataset.idx, t.dataTransfer.getData("idx")), e.updateReelsInput())
            }, e.append_reel = function(t, n) {
                "object" == r(e.reels_cont[t].sortable) && "function" == typeof e.reels_cont[t].sortable.destroy && (e.reels_cont[t].sortable.destroy(), delete e.reels_cont[t].sortable), t = parseInt(t), n = parseInt(n);
                var i = e.reels[t].length;
                e.reels[t].push(n);
                var a = document.createElement("div");
                a.classList.add("symbol"), a.dataset.sym = n, a.dataset.idx = i, a.dataset.reel = t, a.innerHTML = '<i class="remove fa fa-times-circle"></i><img draggable="false" src="' + (e.storage + e.symbols[n].filename) + '">', a.getElementsByClassName("remove")[0].addEventListener("click", e.reel_sym_remove), e.reels_cont[t].appendChild(a), e.reels_cont[t].sortable = s.a.create(e.reels_cont[t], {
                    animation: 150,
                    onUpdate: e.reel_sort_update
                })
            }, e.reel_sort_update = function() {
                var t = this.el.dataset.idx;
                e.reels[t] = [];
                var n = 0;
                for (var i in this.el.children) "object" == r(this.el.children[i]) && (this.el.children[i].dataset.idx = n, e.reels[t][n] = parseInt(this.el.children[i].dataset.sym), n++);
                e.updateReelsInput()
            }, e.reel_sym_remove = function() {
                var t = this.parentNode,
                    n = t.parentNode;
                for (var i in n.children) "object" == r(n.children[i]) && parseInt(n.children[i].dataset.idx) > t.dataset.idx && n.children[i].dataset.idx--;
                e.reels[t.dataset.reel].splice(t.dataset.idx, 1), t.remove(), e.updateReelsInput()
            }, e.append_symbol = function(t) {
                "object" != (void 0 === t ? "undefined" : r(t)) && ((t = {
                    filename: t,
                    scatter: !1,
                    wild: !1,
                    w1: 0,
                    w1t: "x",
                    w2: 0,
                    w2t: "x",
                    w3: 0,
                    w3t: "x",
                    w4: 0,
                    w4t: "x",
                    w5: 0,
                    w5t: "x"
                }).idx = e.symbols.length);
                var n = document.createElement("div");
                t.el = n, e.symbols[t.idx] = t, n.classList.add("symbol"), n.dataset.idx = t.idx, n.innerHTML = '\n\t\t\t\t\t\t<div data-idx="' + t.idx + '" class="image">\n\t\t\t\t\t\t\t<img src="' + (e.storage + t.filename) + '">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div data-idx="' + t.idx + '" class="scatter ' + (t.scatter ? "active" : "") + '">' + Object(l.a)("scatter") + '</div>\n\t\t\t\t\t\t<div data-idx="' + t.idx + '" class="wild \t' + (t.wild ? "active" : "") + '">' + Object(l.a)("wild") + '</div>\n\t\t\t\t\t\t<div class="value">\n\t\t\t\t\t\t\t<div class="label">x1 ' + Object(l.a)("pays") + '</div>\n\t\t\t\t\t\t\t<div data-idx="' + t.idx + '" data-win="1" class="type">' + t.w1t + '</div>\n\t\t\t\t\t\t\t<input data-idx="' + t.idx + '" data-win="1" type="number" value="' + t.w1 + '">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="value">\n\t\t\t\t\t\t\t<div class="label">x2 ' + Object(l.a)("pays") + '</div>\n\t\t\t\t\t\t\t<div data-idx="' + t.idx + '" data-win="2" class="type">' + t.w2t + '</div>\n\t\t\t\t\t\t\t<input data-idx="' + t.idx + '" data-win="2" type="number" value="' + t.w2 + '">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="value">\n\t\t\t\t\t\t\t<div class="label">x3 ' + Object(l.a)("pays") + '</div>\n\t\t\t\t\t\t\t<div data-idx="' + t.idx + '" data-win="3" class="type">' + t.w3t + '</div>\n\t\t\t\t\t\t\t<input data-idx="' + t.idx + '" data-win="3" type="number" value="' + t.w3 + '">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="value">\n\t\t\t\t\t\t\t<div class="label">x4 ' + Object(l.a)("pays") + '</div>\n\t\t\t\t\t\t\t<div data-idx="' + t.idx + '" data-win="4" class="type">' + t.w4t + '</div>\n\t\t\t\t\t\t\t<input data-idx="' + t.idx + '" data-win="4" type="number" value="' + t.w4 + '">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="value">\n\t\t\t\t\t\t\t<div class="label">x5 ' + Object(l.a)("pays") + '</div>\n\t\t\t\t\t\t\t<div data-idx="' + t.idx + '" data-win="5" class="type">' + t.w5t + '</div>\n\t\t\t\t\t\t\t<input data-idx="' + t.idx + '" data-win="5" type="number" value="' + t.w5 + '">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div data-idx="' + t.idx + '" class="remove"><i class="fa fa-times-circle"></i></div>\n\t\t\t\t\t\t', e.game_multi_slots_symbols_items.appendChild(n);
                var i = n.getElementsByClassName("image")[0];
                for (var a in i.addEventListener("dragleave", e.sym_image_leave), i.addEventListener("dragover", e.sym_image_over), i.addEventListener("drop", e.sym_image_drop), n.getElementsByClassName("scatter")[0].addEventListener("click", e.sym_ch_scatter), n.getElementsByClassName("wild")[0].addEventListener("click", e.sym_ch_wild), i = n.getElementsByClassName("type")) "object" == r(i[a]) && i[a].addEventListener("click", e.sym_ch_type);
                for (var a in i = n.getElementsByTagName("input")) "object" == r(i[a]) && i[a].addEventListener("change", e.sym_ch_win);
                n.getElementsByClassName("remove")[0].addEventListener("click", e.sym_rem), e.updateUI(), e.updateSymInput()
            }, e.sym_image_leave = function(t) {
                this.classList.remove("dropover"), t.preventDefault()
            }, e.sym_image_over = function(t) {
                this.classList.add("dropover"), t.preventDefault()
            }, e.sym_image_drop = function(t) {
                t.preventDefault();
                var n = this;
                n.classList.remove("dropover");
                var i = function() {
                        n.classList.add("error"), setTimeout(function() {
                            n.classList.remove("error")
                        }, 1e3)
                    },
                    o = [];
                if (t.dataTransfer.items)
                    for (var s = 0; s < t.dataTransfer.items.length; s++) {
                        if ("file" !== t.dataTransfer.items[s].kind) return i();
                        o.push(t.dataTransfer.items[s].getAsFile())
                    } else
                        for (s = 0; s < t.dataTransfer.files.length; s++) o.push(t.dataTransfer.files[s]);
                var l = o[0];
                if (!l || "image/png" != l.type) return i();
                e.symbols[this.dataset.idx].filename = "", this.getElementsByTagName("img")[0].src = "", e.updateSymInput();
                var r = new FormData;
                r.append("_token", e.token), r.append("files[0]", l);
                var d = [];
                for (var s in e.symbols) d.push(e.symbols[s].filename);
                r.append("used", d), a.a.post(e.url, r, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }).then(function(t) {
                    var a = t.data;
                    a.success ? (e.symbols[n.dataset.idx].filename = a.files[0], n.getElementsByTagName("img")[0].src = e.storage + a.files[0], e.updateUI(), e.updateSymInput()) : i()
                }).catch(function(t) {
                    return console.error(t)
                })
            }, e.sym_ch_type = function() {
                e.symbols[this.dataset.idx]["w" + this.dataset.win + "t"] = "x" == e.symbols[this.dataset.idx]["w" + this.dataset.win + "t"] ? "+" : "x", this.textContent = e.symbols[this.dataset.idx]["w" + this.dataset.win + "t"], e.updateSymInput()
            }, e.sym_ch_win = function() {
                e.symbols[this.dataset.idx]["w" + this.dataset.win] = this.value, e.updateSymInput()
            }, e.ch_scatter = function(t) {
                e.symbols[t].wild && e.ch_wild(t), e.symbols[t].scatter = !e.symbols[t].scatter, e.symbols[t].scatter ? e.symbols[t].el.getElementsByClassName("scatter")[0].classList.add("active") : e.symbols[t].el.getElementsByClassName("scatter")[0].classList.remove("active")
            }, e.ch_wild = function(t) {
                e.symbols[t].scatter && e.ch_scatter(t), e.symbols[t].wild = !e.symbols[t].wild, e.symbols[t].wild ? e.symbols[t].el.getElementsByClassName("wild")[0].classList.add("active") : e.symbols[t].el.getElementsByClassName("wild")[0].classList.remove("active")
            }, e.sym_ch_scatter = function() {
                e.ch_scatter(this.dataset.idx), e.updateSymInput()
            }, e.sym_ch_wild = function() {
                e.ch_wild(this.dataset.idx), e.updateSymInput()
            }, e.sym_rem = function() {
                var t, n = this.dataset.idx;
                for (var i in e.symbols[n].el.remove(), e.symbols.splice(n, 1), e.symbols) {
                    for (var a in e.symbols[i].el.dataset.idx = i, e.symbols[i].idx = i, t = e.symbols[i].el.getElementsByClassName("image")) "object" == r(t[a]) && (t[a].dataset.idx = i);
                    for (var a in t = e.symbols[i].el.getElementsByClassName("scatter")) "object" == r(t[a]) && (t[a].dataset.idx = i);
                    for (var a in t = e.symbols[i].el.getElementsByClassName("wild")) "object" == r(t[a]) && (t[a].dataset.idx = i);
                    for (var a in t = e.symbols[i].el.getElementsByClassName("remove")) "object" == r(t[a]) && (t[a].dataset.idx = i);
                    for (var a in t = e.symbols[i].el.getElementsByClassName("type")) "object" == r(t[a]) && (t[a].dataset.idx = i);
                    for (var a in t = e.symbols[i].el.getElementsByTagName("input")) "object" == r(t[a]) && (t[a].dataset.idx = i)
                }
                for (var i in e.reels) {
                    var o = [];
                    for (var a in e.reels[i]) e.reels[i][a] == n ? o.push(a) : e.reels[i][a] > n && e.reels[i][a]--;
                    for (; 0 != o.length;) e.reels[i].splice(o.pop(), 1)
                }
                var s = e.reels;
                for (var i in e.reels = [
                        [],
                        [],
                        [],
                        [],
                        []
                    ], s)
                    for (var a in e.reels_cont[i].innerHTML = "", s[i]) e.append_reel(i, s[i][a]);
                e.updateReelsInput(), e.updateSymInput(), e.updateUI()
            }, e.updateSymInput = function() {
                e.symbols_input.value = JSON.stringify(e.symbols)
            }, e.updateReelsInput = function() {
                e.reel_input.value = JSON.stringify(e.reels)
            }, e.showFileError = function() {
                e.game_multi_slots_symbols_place.classList.add("error"), setTimeout(function() {
                    e.game_multi_slots_symbols_place.classList.remove("error")
                }, 5e3)
            }, e.updateUI = function() {
                e.game_multi_slots_reel_symbols.innerHTML = "";
                for (var t in e.symbols) {
                    var n = document.createElement("div");
                    n.classList.add("symbol"), n.dataset.idx = t, n.draggable = !0, n.innerHTML = '<img src="' + (e.storage + e.symbols[t].filename) + '">', n.addEventListener("dragstart", e.reel_drag_start), e.game_multi_slots_reel_symbols.appendChild(n)
                }
            }, e.bind(), e.init = function() {
                try {
                    var t = JSON.parse(e.symbols_input.value);
                    for (var n in t) e.append_symbol(t[n]);
                    var i = JSON.parse(e.reel_input.value);
                    for (var n in i)
                        for (var a in i[n]) e.append_reel(n, i[n][a]);
                    var o = new FormData;
                    o.append("_token", e.token);
                    var s = [];
                    for (var n in e.symbols) s.push(e.symbols[n].filename);
                    o.append("used", s), e.updateUI()
                } catch (t) {}
            }, e.init(), e)
        }
    }
}, [2]);