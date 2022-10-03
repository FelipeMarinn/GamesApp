;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, a, s) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return s(8307)
        },
      ])
    },
    3438: function (e, a, s) {
      'use strict'
      s.d(a, {
        Z: function () {
          return v
        },
      })
      var t = s(5893),
        n = (s(7294), s(5712)),
        r = s(357),
        c = s.n(r),
        i = s(1664),
        o = s.n(i),
        d = s(1163),
        l = s(3018),
        x = function (e) {
          var a = e.size,
            s = void 0 === a ? '40px' : a
          return (0, t.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            width: s,
            height: s,
            viewBox: '0 0 640 640',
            children: (0, t.jsx)('path', {
              d: 'M0 204.2V48c0-8.8 7.2-16 16-16H72c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h80c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h56c8.8 0 16 7.2 16 16V204.2c0 12.1-6.8 23.2-17.7 28.6l-28.6 14.3c-10.8 5.4-17.7 16.5-17.5 28.6C322.2 360.7 336 416 336 416H48s13.8-55.3 15.8-140.2c.3-12.1-6.6-23.2-17.5-28.6L17.7 232.8C6.8 227.4 0 216.3 0 204.2zM176 320h32c8.8 0 16-7.2 16-16V256c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 8.8 7.2 16 16 16zM32 448H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z',
            }),
          })
        },
        h = function (e) {
          var a = e.size,
            s = void 0 === a ? '25px' : a
          return (0, t.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            width: s,
            height: s,
            viewBox: '0 0 640 640',
            children: (0, t.jsx)('path', {
              d: 'M24 0H0V48H24 76.1l60.3 316.5 3.7 19.5H160 488h24V336H488 179.9l-9.1-48H496L576 32H122l-2.4-12.5L115.9 0H96 24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z',
            }),
          })
        },
        j = function (e) {
          var a = e.cartCount,
            s = e.name
          return (0, t.jsxs)('div', {
            className: 'jsx-934684e760d8ad77 container',
            children: [
              (0, t.jsx)(h, {}),
              (0, t.jsxs)('div', {
                className: 'jsx-934684e760d8ad77 text',
                children: [
                  ' '.concat(s, ' '),
                  a
                    ? a > 9
                      ? (0, t.jsxs)('span', {
                          children: ['9', (0, t.jsx)('sup', { children: '+' })],
                        })
                      : '('.concat(a, ')')
                    : '(0)',
                ],
              }),
              (0, t.jsx)(c(), {
                id: '934684e760d8ad77',
                children:
                  '.container.jsx-934684e760d8ad77{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.text.jsx-934684e760d8ad77{margin-left:.5rem}.text.jsx-934684e760d8ad77 span.jsx-934684e760d8ad77{font-size:smaller}',
              }),
            ],
          })
        },
        m = s(6013),
        p = function () {
          var e = (0, d.useRouter)().pathname,
            a = (0, m.jD)().count
          return (0, t.jsxs)(l.Z, {
            size: 'huge',
            borderless: !0,
            pointing: !0,
            as: 'header',
            children: [
              (0, t.jsxs)(n.Z, {
                text: !0,
                children: [
                  (0, t.jsx)(o(), {
                    href: '/',
                    passHref: !0,
                    children: (0, t.jsxs)(l.Z.Item, {
                      active: '/' === e,
                      title: 'Inicio | Todos los productos',
                      children: [(0, t.jsx)(x, {}), 'Game Store'],
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
                          cartCount: a,
                          name: 'Canasta',
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              (0, t.jsx)(c(), {
                id: '7a17582783d732cb',
                children: '.ui.menu.huge{font-size:.5rem}',
              }),
            ],
          })
        },
        u = s(4623),
        f = s(8005),
        w = s(3623),
        b = s(7027),
        g = function () {
          return (0, t.jsxs)(u.Z, {
            vertical: !0,
            as: 'footer',
            style: {
              padding: '4em 0em',
              marginTop: '3em',
              borderTop: '1px solid #f2f2f2',
            },
            children: [
              (0, t.jsxs)(n.Z, {
                text: !0,
                children: [
                  (0, t.jsx)(f.Z, {
                    stackable: !0,
                    children: (0, t.jsxs)(f.Z.Row, {
                      children: [
                        (0, t.jsxs)(f.Z.Column, {
                          width: 4,
                          children: [
                            (0, t.jsx)(w.Z, { as: 'h4', content: 'Nosotros' }),
                            (0, t.jsx)(b.Z, {
                              children: (0, t.jsx)(b.Z.Item, {
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
                            (0, t.jsx)(w.Z, { as: 'h4', content: 'Servicios' }),
                            (0, t.jsx)(b.Z, {
                              children: (0, t.jsx)(b.Z.Item, {
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
                            (0, t.jsx)(w.Z, {
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
                            (0, t.jsxs)(b.Z, {
                              horizontal: !0,
                              style: { display: 'flex' },
                              children: [
                                (0, t.jsx)(b.Z.Item, {
                                  icon: 'twitter',
                                  style: { display: 'flex' },
                                  content: (0, t.jsx)('a', {
                                    href: 'https://twitter.com/jonalvarezz',
                                    className: 'jsx-6808d52a5ad79573',
                                    children: 'Twitter',
                                  }),
                                }),
                                (0, t.jsx)(b.Z.Item, {
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
              (0, t.jsx)(c(), {
                id: '6808d52a5ad79573',
                children:
                  '.colophon.jsx-6808d52a5ad79573{text-align:center;margin-top:3.2rem;font-size:.8rem}.colophon-entry.jsx-6808d52a5ad79573{color:grey;margin-bottom:0}',
              }),
            ],
          })
        },
        v = function (e) {
          var a = e.children
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(p, {}),
              (0, t.jsx)(n.Z, { as: 'main', children: a }),
              (0, t.jsx)(g, {}),
            ],
          })
        }
    },
    8307: function (e, a, s) {
      'use strict'
      s.r(a),
        s.d(a, {
          __N_SSP: function () {
            return f
          },
          default: function () {
            return w
          },
        })
      var t = s(5893),
        n = s(357),
        r = s.n(n),
        c = s(5712),
        i = s(3623),
        o = s(967),
        d = s(5150),
        l = function () {
          return (0, t.jsxs)('div', {
            className: 'jsx-7a13cadbb63d4a9d container',
            children: [
              (0, t.jsxs)(c.Z, {
                textAlign: 'center',
                children: [
                  (0, t.jsx)(i.Z, {
                    as: 'h1',
                    content: 'Imagine-a-Company',
                    inverted: !0,
                    style: {
                      textShadow: '-2px 1px 6px black',
                      fontSize: '4em',
                      fontWeight: 'normal',
                      marginBottom: 0,
                      paddingTop: '1.5em',
                    },
                  }),
                  (0, t.jsx)(i.Z, {
                    as: 'h2',
                    content: 'Do whatever you want when you want to.',
                    inverted: !0,
                    style: {
                      textShadow: '-2px 1px 4px black',
                      fontSize: '1.7em',
                      fontWeight: 'normal',
                      marginTop: '1em',
                    },
                  }),
                  (0, t.jsxs)(o.Z, {
                    size: 'huge',
                    color: 'violet',
                    children: [
                      'Get Started',
                      (0, t.jsx)(d.Z, { name: 'arrow alternate circle right' }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(r(), {
                id: '7a13cadbb63d4a9d',
                children:
                  '.container.jsx-7a13cadbb63d4a9d{margin:2rem 0 3rem;background:url('.concat(
                    'https://assets.xboxservices.com/assets/3d/1a/3d1af36a-b0b2-41c8-95b7-e4e71c146674.jpg?n=Forza-Horizon-5_GLP-Page-Hero-0_1083x609_03.jpg',
                    ')no-repeat center;height:400px;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover}.container.jsx-7a13cadbb63d4a9d .header{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}'
                  ),
              }),
            ],
          })
        },
        x = s(3438),
        h = (s(7294), s(2256)),
        j = s(1664),
        m = s.n(j),
        p = function (e) {
          return e.map(function (e) {
            var a = e.name,
              s = e.id,
              n = e.price,
              r = e.image
            return (0,
            t.jsx)(m(), { href: '/product/[id]', as: '/product/'.concat(s), passHref: !0, children: (0, t.jsx)(h.Z, { as: 'a', header: a, image: r, meta: (0, t.jsx)(h.Z.Meta, { style: { color: 'dimgray' }, children: n }) }) }, s)
          })
        },
        u = function (e) {
          var a = e.products
          return (0, t.jsx)(h.Z.Group, {
            itemsPerRow: 4,
            stackable: !0,
            children: p(a),
          })
        },
        f = !0,
        w = function (e) {
          var a = e.productList
          return (0, t.jsxs)(x.Z, {
            children: [(0, t.jsx)(l, {}), (0, t.jsx)(u, { products: a })],
          })
        }
    },
  },
  function (e) {
    e.O(0, [774, 454, 54, 888, 179], function () {
      return (a = 8312), e((e.s = a))
      var a
    })
    var a = e.O()
    _N_E = a
  },
])
