var vidbg = function (e) {
  var t = {};

  function r(n) {
    if (t[n]) return t[n].exports;
    var o = t[n] = {i: n, l: !1, exports: {}};
    return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
  }

  return r.m = e, r.c = t, r.d = function (e, t, n) {
    r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n});
  }, r.r = function (e) {
    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}), Object.defineProperty(e, '__esModule', {value: !0});
  }, r.t = function (e, t) {
    if (1 & t && (e = r(e)), 8 & t) return e;
    if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, 'default', {
      enumerable: !0,
      value: e
    }), 2 & t && 'string' != typeof e) for (var o in e) r.d(n, o, function (t) {
      return e[t];
    }.bind(null, o));
    return n;
  }, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return r.d(t, 'a', t), t;
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, r.p = '', r(r.s = 1);
}([function (e, t, r) {
  'use strict';
  var n = '#?['.concat('a-f\\d', ']{3}[').concat('a-f\\d', ']?'),
    o = '#?['.concat('a-f\\d', ']{6}([').concat('a-f\\d', ']{2})?'), i = new RegExp('[^#'.concat('a-f\\d', ']'), 'gi'),
    a = new RegExp('^'.concat(n, '$|^').concat(o, '$'), 'i');
  e.exports = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if ('string' != typeof e || i.test(e) || !a.test(e)) throw new TypeError('Expected a valid hex string');
    var r = 1;
    8 === (e = e.replace(/^#/, '')).length && (r = parseInt(e.slice(6, 8), 16) / 255, e = e.slice(0, 6)), 4 === e.length && (r = parseInt(e.slice(3, 4).repeat(2), 16) / 255, e = e.slice(0, 3)), 3 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
    var n = parseInt(e, 16), o = n >> 16, l = n >> 8 & 255, c = 255 & n;
    return 'array' === t.format ? [o, l, c, r] : {red: o, green: l, blue: c, alpha: r};
  };
}, function (e, t, r) {
  'use strict';
  r.r(t);
  var n = r(0), o = r.n(n);

  function i(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {}, n = Object.keys(r);
      'function' == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function (e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable;
      })))), n.forEach((function (t) {
        c(e, t, r[t]);
      }));
    }
    return e;
  }

  function a(e, t) {
    return function (e) {
      if (Array.isArray(e)) return e;
    }(e) || function (e, t) {
      var r = [], n = !0, o = !1, i = void 0;
      try {
        for (var a, l = e[Symbol.iterator](); !(n = (a = l.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0) ;
      } catch (e) {
        o = !0, i = e;
      } finally {
        try {
          n || null == l.return || l.return();
        } finally {
          if (o) throw i;
        }
      }
      return r;
    }(e, t) || function () {
      throw new TypeError('Invalid attempt to destructure non-iterable instance');
    }();
  }

  function l(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }

  function c(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e;
  }

  /*!
   * vidbg.js v2.0.1 (https://github.com/blakewilson/vidbg)
   * vidbg.js By Blake Wilson
   * @license Licensed Under MIT (https://github.com/blakewilson/vidbg/blob/master/LICENSE)
   */
  var s = function () {
    function e(t, r, n) {
      var l = this;
      if (function (e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }(this, e), c(this, 'createContainer', (function () {
        l.containerEl = document.createElement('div'), l.containerEl.className = 'vidbg-container', l.createPoster(), l.el.appendChild(l.containerEl);
      })), c(this, 'createOverlay', (function () {
        if (l.overlayEl = document.createElement('div'), l.overlayEl.className = 'vidbg-overlay', l.options.overlay) {
          var e = a(o()(l.options.overlayColor, {format: 'array'}), 3), t = [e[0], e[1], e[2], l.options.overlayAlpha];
          l.overlayEl.style.backgroundColor = 'rgba('.concat(t.join(', '), ')');
        }
        l.containerEl.appendChild(l.overlayEl);
      })), c(this, 'createPoster', (function () {
        l.options.poster && (l.containerEl.style.backgroundImage = 'url('.concat(l.options.poster, ')'));
      })), c(this, 'createVideo', (function () {
        for (var e in l.videoEl = document.createElement('video'), l.videoEl.addEventListener('playing', l.onPlayEvent), l.attributes) l.videoEl[e] = l.attributes[e];
        if (l.options.mp4) {
          var t = document.createElement('source');
          t.src = l.options.mp4, t.type = 'video/mp4', l.videoEl.appendChild(t);
        }
        if (l.options.webm) {
          var r = document.createElement('source');
          r.src = l.options.webm, r.type = 'video/webm', l.videoEl.appendChild(r);
        }
        l.containerEl.appendChild(l.videoEl);
        var n = l.videoEl.play();
        void 0 !== n && n.catch((function (e) {
          console.error(e), console.error('Autoplay is not supported'), l.removeVideo();
        }));
      })), c(this, 'onPlayEvent', (function (e) {
        l.resize(), l.videoEl.style.opacity = 1;
      })), c(this, 'removeVideo', (function () {
        l.videoEl.remove();
      })), c(this, 'getVideo', (function () {
        return l.videoEl;
      })), c(this, 'destroy', (function () {
        l.containerEl.remove();
      })), c(this, 'resize', (function () {
        var e = l.containerEl.offsetWidth, t = l.containerEl.offsetHeight;
        e / l.videoEl.videoWidth > t / l.videoEl.videoHeight ? (l.videoEl.style.width = ''.concat(e, 'px'), l.videoEl.style.height = 'auto') : (l.videoEl.style.width = 'auto', l.videoEl.style.height = ''.concat(t, 'px'));
      })), !t) return console.error('Please provide a selector'), !1;
      if (this.el = document.querySelector(t), !this.el) return console.error('The selector you specified, "'.concat(t, '", does not exist!')), !1;
      this.options = i({}, {
        mp4: null,
        webm: null,
        poster: null,
        overlay: !1,
        overlayColor: '#000',
        overlayAlpha: .3
      }, r);
      if (this.attributes = i({}, {
        controls: !1,
        loop: !0,
        muted: !0,
        playsInline: !0
      }, n), !this.options.mp4 && !this.options.webm) return console.error('Please provide an mp4, webm, or both.'), !1;
      this.init();
    }

    var t, r, n;
    return t = e, (r = [{
      key: 'init', value: function () {
        this.el.style.position = 'relative', this.el.style.zIndex = 1, this.createContainer(), this.createVideo(), this.createOverlay(), window.addEventListener('resize', this.resize);
      }
    }]) && l(t.prototype, r), n && l(t, n), e;
  }();
  t.default = s;
}]).default;