;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    6840: function (t, e, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return n(5656)
        },
      ])
    },
    5656: function (t, e, n) {
      'use strict'
      n.r(e)
      var r = n(6042),
        u = n(5893),
        i = (n(3014), n(7088), n(6013))
      e.default = function (t) {
        var e = t.Component,
          n = t.pageProps
        return (0, u.jsx)(i.ZP, { children: (0, u.jsx)(e, (0, r.Z)({}, n)) })
      }
    },
    6013: function (t, e, n) {
      'use strict'
      n.d(e, {
        ZP: function () {
          return b
        },
        jD: function () {
          return l
        },
        mS: function () {
          return v
        },
      })
      var r = n(4924),
        u = n(6042)
      function i(t, e) {
        return (
          (e = null != e ? e : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                var n = Object.keys(t)
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(t)
                  e &&
                    (r = r.filter(function (e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })),
                    n.push.apply(n, r)
                }
                return n
              })(Object(e)).forEach(function (n) {
                Object.defineProperty(
                  t,
                  n,
                  Object.getOwnPropertyDescriptor(e, n)
                )
              }),
          t
        )
      }
      var o = n(5893),
        c = n(7294),
        a = {},
        f = c.createContext(a),
        s = c.createContext(function () {})
      function d(t, e) {
        var n = e.item,
          o = e.type,
          c = e.quantity,
          a = void 0 === c ? 1 : c,
          f = t[n.id]
        switch (o) {
          case 'add':
            if (void 0 != f) {
              var s = f.quantity + a
              return i(
                (0, u.Z)({}, t),
                (0, r.Z)({}, n.id, i((0, u.Z)({}, f), { quantity: s }))
              )
            }
            return i(
              (0, u.Z)({}, t),
              (0, r.Z)({}, n.id, i((0, u.Z)({}, n), { quantity: a }))
            )
          case 'remove':
            if (void 0 == f) return t
            var d = f.quantity - 1
            if (d > 0)
              return i(
                (0, u.Z)({}, t),
                (0, r.Z)({}, n.id, i((0, u.Z)({}, f), { quantity: d }))
              )
            var p = (0, u.Z)({}, t)
            return delete p[n.id], p
          default:
            throw new Error('Unhandled action type: '.concat(o))
        }
      }
      var p = function (t, e) {
          return (t += e.price * e.quantity)
        },
        y = function (t, e) {
          return t + e.quantity
        },
        l = function () {
          var t = (0, c.useContext)(f),
            e = Object.values(t),
            n = e.reduce(y, 0),
            r = e.reduce(p, 0)
          return { items: e, itemsById: t, count: n, subTotal: r }
        },
        v = function () {
          var t = (0, c.useContext)(s)
          return {
            addToCart: function (e, n) {
              return t({ type: 'add', item: e, quantity: n })
            },
            removeFromCart: function (e) {
              return t({ type: 'remove', item: e })
            },
          }
        },
        b = function (t) {
          var e = t.children,
            n = (0, c.useReducer)(d, a),
            r = n[0],
            u = n[1]
          return (0, o.jsx)(f.Provider, {
            value: r,
            children: (0, o.jsx)(s.Provider, { value: u, children: e }),
          })
        }
    },
    3014: function () {},
    7088: function () {},
    4924: function (t, e, n) {
      'use strict'
      function r(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        )
      }
      n.d(e, {
        Z: function () {
          return r
        },
      })
    },
    6042: function (t, e, n) {
      'use strict'
      n.d(e, {
        Z: function () {
          return u
        },
      })
      var r = n(4924)
      function u(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            u = Object.keys(n)
          'function' === typeof Object.getOwnPropertySymbols &&
            (u = u.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
              })
            )),
            u.forEach(function (e) {
              ;(0, r.Z)(t, e, n[e])
            })
        }
        return t
      }
    },
  },
  function (t) {
    var e = function (e) {
      return t((t.s = e))
    }
    t.O(0, [774, 179], function () {
      return e(6840), e(387)
    })
    var n = t.O()
    _N_E = n
  },
])
