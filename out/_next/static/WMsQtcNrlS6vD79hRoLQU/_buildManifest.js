;(self.__BUILD_MANIFEST = (function (s, a) {
  return {
    __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
    '/': [
      s,
      'static/chunks/54-fc6ffbd2df7a5858.js',
      'static/chunks/pages/index-996c18ac50570f46.js',
    ],
    '/_error': ['static/chunks/pages/_error-a4ba2246ff8fb532.js'],
    '/about': [s, 'static/chunks/pages/about-f6c31e777c3ba43b.js'],
    '/cart': [s, a, 'static/chunks/pages/cart-f13979efce4a8b1a.js'],
    '/product/[id]': [
      s,
      a,
      'static/chunks/377-e947bbd9d6460ac2.js',
      'static/chunks/pages/product/[id]-588457cda0c65526.js',
    ],
    sortedPages: ['/', '/_app', '/_error', '/about', '/cart', '/product/[id]'],
  }
})(
  'static/chunks/454-c3c053083fddb1b0.js',
  'static/chunks/732-d888dea22ecaafec.js'
)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()
