;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [521],
  {
    8318: function (e, a, t) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/about',
        function () {
          return t(4178)
        },
      ])
    },
    3438: function (e, a, t) {
      'use strict'
      t.d(a, {
        Z: function () {
          return v
        },
      })
      var s = t(5893),
        i = (t(7294), t(5712)),
        n = t(357),
        r = t.n(n),
        c = t(1664),
        o = t.n(c),
        d = t(1163),
        l = t(3018),
        h = function (e) {
          var a = e.size,
            t = void 0 === a ? '40px' : a
          return (0, s.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            width: t,
            height: t,
            viewBox: '0 0 640 640',
            children: (0, s.jsx)('path', {
              d: 'M0 204.2V48c0-8.8 7.2-16 16-16H72c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h80c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h56c8.8 0 16 7.2 16 16V204.2c0 12.1-6.8 23.2-17.7 28.6l-28.6 14.3c-10.8 5.4-17.7 16.5-17.5 28.6C322.2 360.7 336 416 336 416H48s13.8-55.3 15.8-140.2c.3-12.1-6.6-23.2-17.5-28.6L17.7 232.8C6.8 227.4 0 216.3 0 204.2zM176 320h32c8.8 0 16-7.2 16-16V256c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 8.8 7.2 16 16 16zM32 448H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z',
            }),
          })
        },
        x = function (e) {
          var a = e.size,
            t = void 0 === a ? '25px' : a
          return (0, s.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            width: t,
            height: t,
            viewBox: '0 0 640 640',
            children: (0, s.jsx)('path', {
              d: 'M24 0H0V48H24 76.1l60.3 316.5 3.7 19.5H160 488h24V336H488 179.9l-9.1-48H496L576 32H122l-2.4-12.5L115.9 0H96 24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z',
            }),
          })
        },
        f = function (e) {
          var a = e.cartCount,
            t = e.name
          return (0, s.jsxs)('div', {
            className: 'jsx-934684e760d8ad77 container',
            children: [
              (0, s.jsx)(x, {}),
              (0, s.jsxs)('div', {
                className: 'jsx-934684e760d8ad77 text',
                children: [
                  ' '.concat(t, ' '),
                  a
                    ? a > 9
                      ? (0, s.jsxs)('span', {
                          children: ['9', (0, s.jsx)('sup', { children: '+' })],
                        })
                      : '('.concat(a, ')')
                    : '(0)',
                ],
              }),
              (0, s.jsx)(r(), {
                id: '934684e760d8ad77',
                children:
                  '.container.jsx-934684e760d8ad77{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.text.jsx-934684e760d8ad77{margin-left:.5rem}.text.jsx-934684e760d8ad77 span.jsx-934684e760d8ad77{font-size:smaller}',
              }),
            ],
          })
        },
        m = t(6013),
        j = function () {
          var e = (0, d.useRouter)().pathname,
            a = (0, m.jD)().count
          return (0, s.jsxs)(l.Z, {
            size: 'huge',
            borderless: !0,
            pointing: !0,
            as: 'header',
            children: [
              (0, s.jsxs)(i.Z, {
                text: !0,
                children: [
                  (0, s.jsx)(o(), {
                    href: '/',
                    passHref: !0,
                    children: (0, s.jsxs)(l.Z.Item, {
                      active: '/' === e,
                      title: 'Inicio | Todos los productos',
                      children: [(0, s.jsx)(h, {}), 'Game Store'],
                    }),
                  }),
                  (0, s.jsx)(l.Z.Menu, {
                    position: 'right',
                    children: (0, s.jsx)(o(), {
                      href: '/cart',
                      passHref: !0,
                      children: (0, s.jsx)(l.Z.Item, {
                        active: '/cart' === e,
                        children: (0, s.jsx)(f, {
                          cartCount: a,
                          name: 'Canasta',
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              (0, s.jsx)(r(), {
                id: '7a17582783d732cb',
                children: '.ui.menu.huge{font-size:.5rem}',
              }),
            ],
          })
        },
        u = t(4623),
        p = t(8005),
        b = t(3623),
        g = t(7027),
        w = function () {
          return (0, s.jsxs)(u.Z, {
            vertical: !0,
            as: 'footer',
            style: {
              padding: '4em 0em',
              marginTop: '3em',
              borderTop: '1px solid #f2f2f2',
            },
            children: [
              (0, s.jsxs)(i.Z, {
                text: !0,
                children: [
                  (0, s.jsx)(p.Z, {
                    stackable: !0,
                    children: (0, s.jsxs)(p.Z.Row, {
                      children: [
                        (0, s.jsxs)(p.Z.Column, {
                          width: 4,
                          children: [
                            (0, s.jsx)(b.Z, { as: 'h4', content: 'Nosotros' }),
                            (0, s.jsx)(g.Z, {
                              children: (0, s.jsx)(g.Z.Item, {
                                children: (0, s.jsx)(o(), {
                                  href: '/about',
                                  children: (0, s.jsx)('a', {
                                    className: 'jsx-6808d52a5ad79573',
                                    children: 'Conoce m\xe1s',
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, s.jsxs)(p.Z.Column, {
                          width: 5,
                          children: [
                            (0, s.jsx)(b.Z, { as: 'h4', content: 'Servicios' }),
                            (0, s.jsx)(g.Z, {
                              children: (0, s.jsx)(g.Z.Item, {
                                children: (0, s.jsx)(o(), {
                                  href: '/',
                                  children: (0, s.jsx)('a', {
                                    className: 'jsx-6808d52a5ad79573',
                                    children: 'Todos los productos',
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, s.jsxs)(p.Z.Column, {
                          width: 7,
                          children: [
                            (0, s.jsx)(b.Z, {
                              as: 'h4',
                              children: 'Hecho para',
                            }),
                            (0, s.jsxs)('p', {
                              className: 'jsx-6808d52a5ad79573',
                              children: [
                                (0, s.jsx)('a', {
                                  href: 'https://platzi.com/',
                                  className: 'jsx-6808d52a5ad79573',
                                  children: 'Platzi y su curso de Next.JS',
                                }),
                                ' de Platzi dictado por',
                                ' ',
                                (0, s.jsx)('a', {
                                  href: 'https://twitter.com/jonalvarezz',
                                  className: 'jsx-6808d52a5ad79573',
                                  children: '@jonalvarezz',
                                }),
                              ],
                            }),
                            (0, s.jsxs)(g.Z, {
                              horizontal: !0,
                              style: { display: 'flex' },
                              children: [
                                (0, s.jsx)(g.Z.Item, {
                                  icon: 'twitter',
                                  style: { display: 'flex' },
                                  content: (0, s.jsx)('a', {
                                    href: 'https://twitter.com/jonalvarezz',
                                    className: 'jsx-6808d52a5ad79573',
                                    children: 'Twitter',
                                  }),
                                }),
                                (0, s.jsx)(g.Z.Item, {
                                  icon: 'github',
                                  style: { display: 'flex' },
                                  content: (0, s.jsx)('a', {
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
                  (0, s.jsxs)('div', {
                    className: 'jsx-6808d52a5ad79573 colophon',
                    children: [
                      (0, s.jsxs)('p', {
                        className: 'jsx-6808d52a5ad79573 colophon-entry',
                        children: [
                          'Icons made by',
                          ' ',
                          (0, s.jsx)('a', {
                            target: '_blank',
                            href: 'https://www.flaticon.com/authors/freepik',
                            title: 'Freepik',
                            className: 'jsx-6808d52a5ad79573',
                            children: 'Freepik',
                          }),
                          ' from ',
                          (0, s.jsx)('a', {
                            target: '_blank',
                            href: 'https://www.flaticon.com/',
                            title: 'Flaticon',
                            className: 'jsx-6808d52a5ad79573',
                            children: 'www.flaticon.com',
                          }),
                        ],
                      }),
                      (0, s.jsxs)('p', {
                        className: 'jsx-6808d52a5ad79573 colophon-entry',
                        children: [
                          'Avocado images taken from',
                          ' ',
                          (0, s.jsx)('a', {
                            target: '_blank',
                            href: 'https://www.californiaavocado.com/avocado101/avocado-varieties',
                            title: 'California Avocado',
                            className: 'jsx-6808d52a5ad79573 acnor',
                            children: 'Avocado 101',
                          }),
                          ' at ',
                          (0, s.jsx)('a', {
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
              (0, s.jsx)(r(), {
                id: '6808d52a5ad79573',
                children:
                  '.colophon.jsx-6808d52a5ad79573{text-align:center;margin-top:3.2rem;font-size:.8rem}.colophon-entry.jsx-6808d52a5ad79573{color:grey;margin-bottom:0}',
              }),
            ],
          })
        },
        v = function (e) {
          var a = e.children
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(j, {}),
              (0, s.jsx)(i.Z, { as: 'main', children: a }),
              (0, s.jsx)(w, {}),
            ],
          })
        }
    },
    4178: function (e, a, t) {
      'use strict'
      t.r(a)
      var s = t(5893),
        i = t(357),
        n = t.n(i),
        r = (t(7294), t(3623)),
        c = t(5956),
        o = t(3438),
        d = [
          {
            title: 'Most avocados come from Mexico',
            content:
              'While avocados are grown in California and Florida, the majority sold in grocery stores come from south central Mexico. The main reason for the abundance of \u201csouth of the border\u201d avocados is that Mexico is blessed with a year-round growing climate. The avocado is believed to have originated in the state of Puebla, Mexico, as far back as 10,000 B.C.',
          },
          {
            title: 'The conquistadors were huge fans.',
            content:
              'Spanish explorers arriving in Mexico during the 16th century survived on avocados and were the first Europeans to consume them. As a result of the Spanish Conquest, avocados spread to South America and Central America. ',
          },
          {
            title: '\u201cAvocado\u201d wasn\u2019t its original name.',
            content:
              'Irishman Sir Hans Sloane called it an avocado in 1696 in a Jamaican-plants catalog. He also dubbed the avocado tree the \u201calligator pear tree.\u201d',
          },
          {
            title: 'It\u2019s actually a fruit.',
            content:
              'Did you know that an avocado is a fruit? While definitely not sweet, it falls firmly in the fruit-not the vegetable-family. That\u2019s because the avocado tree is part of the flowering-plant family Lauraceae.',
          },
          {
            title: 'There\u2019s a secret trick to ripening them up quick',
            content:
              'Need to ripen that avocado ASAP? Place it in a brown paper bag with a banana or two. The bananas will release ethylene gas, a natural plant hormone that aids in ripening fruit. On the other hand, check out this guide to learn how to store them for later.',
          },
        ]
      a.default = function () {
        return (0, s.jsxs)(o.Z, {
          children: [
            (0, s.jsxs)('section', {
              className: 'jsx-5c09bd467d1f6bcf',
              children: [
                (0, s.jsx)(r.Z, {
                  as: 'h1',
                  textAlign: 'center',
                  children: '13 Surprising Facts About Avocados',
                }),
                (0, s.jsxs)('figure', {
                  className: 'jsx-5c09bd467d1f6bcf',
                  children: [
                    (0, s.jsx)(c.Z, {
                      src: '/images/avocados.jpg',
                      alt: 'Avocados on a table',
                    }),
                    (0, s.jsxs)('figcaption', {
                      className: 'jsx-5c09bd467d1f6bcf',
                      children: [
                        'Originally from',
                        ' ',
                        (0, s.jsx)('a', {
                          target: '_blank',
                          href: 'https://www.tasteofhome.com/article/13-surprising-facts-about-avocados/',
                          className: 'jsx-5c09bd467d1f6bcf',
                          children: 'Taste of Home',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)('ol', {
                  className: 'jsx-5c09bd467d1f6bcf',
                  children: d.map(function (e) {
                    var a = e.title,
                      t = e.content
                    return (0,
                    s.jsxs)('li', { className: 'jsx-5c09bd467d1f6bcf', children: [(0, s.jsx)('h3', { className: 'jsx-5c09bd467d1f6bcf ui header', children: a }), (0, s.jsx)('p', { className: 'jsx-5c09bd467d1f6bcf', children: t })] }, a)
                  }),
                }),
              ],
            }),
            (0, s.jsx)(n(), {
              id: '5c09bd467d1f6bcf',
              children:
                'figure.jsx-5c09bd467d1f6bcf,ol.jsx-5c09bd467d1f6bcf{padding:0;margin:0}figure.jsx-5c09bd467d1f6bcf{margin:2rem auto 3rem;text-align:center}figcaption.jsx-5c09bd467d1f6bcf{margin-top:.5rem;font-site:.7rem;color:grey}ol.jsx-5c09bd467d1f6bcf{list-style:none;display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));grid-gap:4.5rem 3rem;counter-reset:orderedlist}li.jsx-5c09bd467d1f6bcf::before{counter-increment:orderedlist;content:counter(orderedlist);position:absolute;top:-43px;left:-5px;color:#cecece;font-size:5rem;font-weight:bold}li.jsx-5c09bd467d1f6bcf{position:relative}h3.jsx-5c09bd467d1f6bcf:first-child{padding-left:40px;margin-bottom:2rem}',
            }),
          ],
        })
      }
    },
  },
  function (e) {
    e.O(0, [774, 454, 888, 179], function () {
      return (a = 8318), e((e.s = a))
      var a
    })
    var a = e.O()
    _N_E = a
  },
])
