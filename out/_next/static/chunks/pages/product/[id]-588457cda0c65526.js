;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [360],
  {
    8871: function (e, s, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/product/[id]',
        function () {
          return n(7531)
        },
      ])
    },
    3438: function (e, s, n) {
      'use strict'
      n.d(s, {
        Z: function () {
          return g
        },
      })
      var t = n(5893),
        a = (n(7294), n(5712)),
        r = n(357),
        i = n.n(r),
        c = n(1664),
        o = n.n(c),
        d = n(1163),
        l = n(3018),
        h = function (e) {
          var s = e.size,
            n = void 0 === s ? '40px' : s
          return (0, t.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            width: n,
            height: n,
            viewBox: '0 0 640 640',
            children: (0, t.jsx)('path', {
              d: 'M0 204.2V48c0-8.8 7.2-16 16-16H72c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h80c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h56c8.8 0 16 7.2 16 16V204.2c0 12.1-6.8 23.2-17.7 28.6l-28.6 14.3c-10.8 5.4-17.7 16.5-17.5 28.6C322.2 360.7 336 416 336 416H48s13.8-55.3 15.8-140.2c.3-12.1-6.6-23.2-17.5-28.6L17.7 232.8C6.8 227.4 0 216.3 0 204.2zM176 320h32c8.8 0 16-7.2 16-16V256c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 8.8 7.2 16 16 16zM32 448H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z',
            }),
          })
        },
        x = function (e) {
          var s = e.size,
            n = void 0 === s ? '25px' : s
          return (0, t.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            width: n,
            height: n,
            viewBox: '0 0 640 640',
            children: (0, t.jsx)('path', {
              d: 'M24 0H0V48H24 76.1l60.3 316.5 3.7 19.5H160 488h24V336H488 179.9l-9.1-48H496L576 32H122l-2.4-12.5L115.9 0H96 24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z',
            }),
          })
        },
        j = function (e) {
          var s = e.cartCount,
            n = e.name
          return (0, t.jsxs)('div', {
            className: 'jsx-934684e760d8ad77 container',
            children: [
              (0, t.jsx)(x, {}),
              (0, t.jsxs)('div', {
                className: 'jsx-934684e760d8ad77 text',
                children: [
                  ' '.concat(n, ' '),
                  s
                    ? s > 9
                      ? (0, t.jsxs)('span', {
                          children: ['9', (0, t.jsx)('sup', { children: '+' })],
                        })
                      : '('.concat(s, ')')
                    : '(0)',
                ],
              }),
              (0, t.jsx)(i(), {
                id: '934684e760d8ad77',
                children:
                  '.container.jsx-934684e760d8ad77{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.text.jsx-934684e760d8ad77{margin-left:.5rem}.text.jsx-934684e760d8ad77 span.jsx-934684e760d8ad77{font-size:smaller}',
              }),
            ],
          })
        },
        u = n(6013),
        m = function () {
          var e = (0, d.useRouter)().pathname,
            s = (0, u.jD)().count
          return (0, t.jsxs)(l.Z, {
            size: 'huge',
            borderless: !0,
            pointing: !0,
            as: 'header',
            children: [
              (0, t.jsxs)(a.Z, {
                text: !0,
                children: [
                  (0, t.jsx)(o(), {
                    href: '/',
                    passHref: !0,
                    children: (0, t.jsxs)(l.Z.Item, {
                      active: '/' === e,
                      title: 'Inicio | Todos los productos',
                      children: [(0, t.jsx)(h, {}), 'Game Store'],
                    }),
                  }),
                  (0, t.jsx)(l.Z.Menu, {
                    position: 'right',
                    children: (0, t.jsx)(o(), {
                      href: '/cart',
                      passHref: !0,
                      children: (0, t.jsx)(l.Z.Item, {
                        active: '/cart' === e,
                        children: (0, t.jsx)(j, {
                          cartCount: s,
                          name: 'Canasta',
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              (0, t.jsx)(i(), {
                id: '7a17582783d732cb',
                children: '.ui.menu.huge{font-size:.5rem}',
              }),
            ],
          })
        },
        p = n(4623),
        f = n(8005),
        v = n(3623),
        w = n(7027),
        Z = function () {
          return (0, t.jsxs)(p.Z, {
            vertical: !0,
            as: 'footer',
            style: {
              padding: '4em 0em',
              marginTop: '3em',
              borderTop: '1px solid #f2f2f2',
            },
            children: [
              (0, t.jsxs)(a.Z, {
                text: !0,
                children: [
                  (0, t.jsx)(f.Z, {
                    stackable: !0,
                    children: (0, t.jsxs)(f.Z.Row, {
                      children: [
                        (0, t.jsxs)(f.Z.Column, {
                          width: 4,
                          children: [
                            (0, t.jsx)(v.Z, { as: 'h4', content: 'Nosotros' }),
                            (0, t.jsx)(w.Z, {
                              children: (0, t.jsx)(w.Z.Item, {
                                children: (0, t.jsx)(o(), {
                                  href: '/about',
                                  children: (0, t.jsx)('a', {
                                    className: 'jsx-6808d52a5ad79573',
                                    children: 'Conoce m\xe1s',
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsxs)(f.Z.Column, {
                          width: 5,
                          children: [
                            (0, t.jsx)(v.Z, { as: 'h4', content: 'Servicios' }),
                            (0, t.jsx)(w.Z, {
                              children: (0, t.jsx)(w.Z.Item, {
                                children: (0, t.jsx)(o(), {
                                  href: '/',
                                  children: (0, t.jsx)('a', {
                                    className: 'jsx-6808d52a5ad79573',
                                    children: 'Todos los productos',
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsxs)(f.Z.Column, {
                          width: 7,
                          children: [
                            (0, t.jsx)(v.Z, {
                              as: 'h4',
                              children: 'Hecho para',
                            }),
                            (0, t.jsxs)('p', {
                              className: 'jsx-6808d52a5ad79573',
                              children: [
                                (0, t.jsx)('a', {
                                  href: 'https://platzi.com/',
                                  className: 'jsx-6808d52a5ad79573',
                                  children: 'Platzi y su curso de Next.JS',
                                }),
                                ' de Platzi dictado por',
                                ' ',
                                (0, t.jsx)('a', {
                                  href: 'https://twitter.com/jonalvarezz',
                                  className: 'jsx-6808d52a5ad79573',
                                  children: '@jonalvarezz',
                                }),
                              ],
                            }),
                            (0, t.jsxs)(w.Z, {
                              horizontal: !0,
                              style: { display: 'flex' },
                              children: [
                                (0, t.jsx)(w.Z.Item, {
                                  icon: 'twitter',
                                  style: { display: 'flex' },
                                  content: (0, t.jsx)('a', {
                                    href: 'https://twitter.com/jonalvarezz',
                                    className: 'jsx-6808d52a5ad79573',
                                    children: 'Twitter',
                                  }),
                                }),
                                (0, t.jsx)(w.Z.Item, {
                                  icon: 'github',
                                  style: { display: 'flex' },
                                  content: (0, t.jsx)('a', {
                                    href: 'https://github.com/jonalvarezz/platzi-nextjs',
                                    className: 'jsx-6808d52a5ad79573',
                                    children: 'GitHub',
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsxs)('div', {
                    className: 'jsx-6808d52a5ad79573 colophon',
                    children: [
                      (0, t.jsxs)('p', {
                        className: 'jsx-6808d52a5ad79573 colophon-entry',
                        children: [
                          'Icons made by',
                          ' ',
                          (0, t.jsx)('a', {
                            target: '_blank',
                            href: 'https://www.flaticon.com/authors/freepik',
                            title: 'Freepik',
                            className: 'jsx-6808d52a5ad79573',
                            children: 'Freepik',
                          }),
                          ' from ',
                          (0, t.jsx)('a', {
                            target: '_blank',
                            href: 'https://www.flaticon.com/',
                            title: 'Flaticon',
                            className: 'jsx-6808d52a5ad79573',
                            children: 'www.flaticon.com',
                          }),
                        ],
                      }),
                      (0, t.jsxs)('p', {
                        className: 'jsx-6808d52a5ad79573 colophon-entry',
                        children: [
                          'Avocado images taken from',
                          ' ',
                          (0, t.jsx)('a', {
                            target: '_blank',
                            href: 'https://www.californiaavocado.com/avocado101/avocado-varieties',
                            title: 'California Avocado',
                            className: 'jsx-6808d52a5ad79573 acnor',
                            children: 'Avocado 101',
                          }),
                          ' at ',
                          (0, t.jsx)('a', {
                            target: '_blank',
                            href: 'https://www.californiaavocado.com',
                            title: 'Flaticon',
                            className: 'jsx-6808d52a5ad79573',
                            children: 'California Avocado',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(i(), {
                id: '6808d52a5ad79573',
                children:
                  '.colophon.jsx-6808d52a5ad79573{text-align:center;margin-top:3.2rem;font-size:.8rem}.colophon-entry.jsx-6808d52a5ad79573{color:grey;margin-bottom:0}',
              }),
            ],
          })
        },
        g = function (e) {
          var s = e.children
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(m, {}),
              (0, t.jsx)(a.Z, { as: 'main', children: s }),
              (0, t.jsx)(Z, {}),
            ],
          })
        }
    },
    7531: function (e, s, n) {
      'use strict'
      n.r(s),
        n.d(s, {
          default: function () {
            return N
          },
        })
      var t = n(5893),
        a = n(7294),
        r = n(1163),
        i = n(3438),
        c = n(6042),
        o = n(3819),
        d = n(5142),
        l = n(7568),
        h = n(655),
        x = n(416),
        j = n(5891),
        u = n(5150),
        m = n(6013),
        p = function (e) {
          var s = e.product,
            n = (0, a.useState)(!1),
            r = n[0],
            i = n[1],
            c = (0, a.useState)(''),
            o = c[0],
            d = c[1],
            p = (0, a.useState)(1),
            f = p[0],
            v = p[1],
            w = (0, a.useState)(!1),
            Z = w[0],
            g = w[1],
            b = (0, m.mS)().addToCart,
            z = (function () {
              var e = (0, l.Z)(function () {
                var e
                return (0, h.__generator)(this, function (n) {
                  return (
                    (e = (function (e) {
                      var s = ''
                      return e < 1 && (s = "Can't be blank"), s
                    })(f)),
                    d(e),
                    e ||
                      (i(!0),
                      new Promise(function (e, s) {
                        window.setTimeout(e, 600)
                      })
                        .then(function () {
                          b(s, f),
                            i(!1),
                            v(f),
                            g(!0),
                            setTimeout(function () {
                              g(!1)
                            }, 1e3)
                        })
                        .catch(function (e) {
                          d('Error: '.concat(e) || 0), i(!1)
                        })),
                    [2]
                  )
                })
              })
              return function () {
                return e.apply(this, arguments)
              }
            })()
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(x.Z, {
                type: 'number',
                placeholder: 'Quantity',
                value: f,
                min: 1,
                step: 1,
                error: !!o,
                onChange: function (e) {
                  var s = e.target
                  return v(parseInt(s.value, 10))
                },
                action: {
                  color: 'green',
                  content: 'Add to Cart',
                  icon: 'plus cart',
                  onClick: z,
                  loading: r,
                  disabled: r,
                },
              }),
              o &&
                (0, t.jsx)('div', {
                  style: { color: 'red', position: 'absolute' },
                  children: o,
                }),
              (0, t.jsx)(j.Z, {
                duration: { hide: 500, show: 500 },
                visible: Z,
                children: (0, t.jsxs)('div', {
                  style: { color: 'green', position: 'absolute' },
                  children: [
                    (0, t.jsx)(u.Z, { name: 'check' }),
                    'Added to cart',
                  ],
                }),
              }),
            ],
          })
        },
        f = n(9534),
        v = n(357),
        w = n.n(v),
        Z = n(3623),
        g = n(345),
        b = n(5927),
        z = function (e) {
          var s = e.description,
            n = (0, f.Z)(e, ['description'])
          return (0, t.jsxs)('section', {
            className: 'jsx-acd9185d52a95830 container',
            children: [
              (0, t.jsx)(Z.Z, { as: 'h3', children: 'About this avocado' }),
              (0, t.jsx)('p', {
                className: 'jsx-acd9185d52a95830',
                children: s,
              }),
              (0, t.jsx)(g.Z, {}),
              (0, t.jsxs)(b.Z, {
                celled: !0,
                children: [
                  (0, t.jsx)(b.Z.Header, {
                    children: (0, t.jsx)(b.Z.Row, {
                      children: (0, t.jsx)(b.Z.HeaderCell, {
                        colSpan: '2',
                        children: 'Attributes',
                      }),
                    }),
                  }),
                  (0, t.jsx)(b.Z.Body, {
                    children: Object.keys(n).map(function (e) {
                      return (0,
                      t.jsxs)(b.Z.Row, { children: [(0, t.jsx)(b.Z.Cell, { className: 'attr-name', children: e }), (0, t.jsx)(b.Z.Cell, { children: n[e] })] }, e)
                    }),
                  }),
                ],
              }),
              (0, t.jsx)(w(), {
                id: 'acd9185d52a95830',
                children:
                  '.container.jsx-acd9185d52a95830 .attr-name{text-transform:capitalize}',
              }),
            ],
          })
        },
        y = function (e) {
          var s = e.product
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(o.Z.Group, {
                as: 'section',
                children: (0, t.jsxs)(o.Z, {
                  style: { alignItems: 'center' },
                  children: [
                    (0, t.jsx)(o.Z.Image, {
                      size: 'medium',
                      children: (0, t.jsx)('img', {
                        src: s.image,
                        alt: s.name,
                      }),
                    }),
                    (0, t.jsxs)(o.Z.Content, {
                      children: [
                        (0, t.jsx)(o.Z.Header, { as: 'h1', children: s.name }),
                        (0, t.jsxs)(o.Z.Description, {
                          children: [
                            (0, t.jsx)('p', { children: s.price }),
                            (0, t.jsx)(d.Z, {
                              children: 'SKU: '.concat(s.sku),
                            }),
                          ],
                        }),
                        (0, t.jsx)(o.Z.Extra, {
                          children: (0, t.jsx)(p, { product: s }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, t.jsx)(z, (0, c.Z)({}, s.attributes)),
            ],
          })
        },
        N = function () {
          var e = (0, r.useRouter)().query,
            s = (0, a.useState)(null),
            n = s[0],
            c = s[1]
          return (
            (0, a.useEffect)(
              function () {
                e.id &&
                  window
                    .fetch('/api/avo/'.concat(e.id))
                    .then(function (e) {
                      return e.json()
                    })
                    .then(function (e) {
                      c(e)
                    })
              },
              [e.id]
            ),
            (0, t.jsx)(i.Z, {
              children: null == n ? null : (0, t.jsx)(y, { product: n }),
            })
          )
        }
    },
  },
  function (e) {
    e.O(0, [774, 454, 732, 377, 888, 179], function () {
      return (s = 8871), e((e.s = s))
      var s
    })
    var s = e.O()
    _N_E = s
  },
])
