
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/graduation/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/graduation"
  },
  {
    "renderMode": 0,
    "route": "/graduation/login"
  },
  {
    "renderMode": 0,
    "route": "/graduation/signup"
  },
  {
    "renderMode": 0,
    "route": "/graduation/home"
  },
  {
    "renderMode": 0,
    "route": "/graduation/ourProduct"
  },
  {
    "renderMode": 0,
    "route": "/graduation/give"
  },
  {
    "renderMode": 0,
    "route": "/graduation/about"
  },
  {
    "renderMode": 0,
    "route": "/graduation/contact"
  },
  {
    "renderMode": 0,
    "route": "/graduation/cart"
  },
  {
    "renderMode": 0,
    "route": "/graduation/fav"
  },
  {
    "renderMode": 0,
    "route": "/graduation/chat"
  },
  {
    "renderMode": 0,
    "route": "/graduation/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 10024, hash: 'ed8644a2a682a900b328b0d925d6696aafae6ee8a62c0099fe48cae1f23830fd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1071, hash: '76b059345199f62354d4daedcf0bb9f7ea8468196828cab359d1b9b7bbcc2802', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ROM4AU3P.css': {size: 397474, hash: 'vTm6j2/1eK0', text: () => import('./assets-chunks/styles-ROM4AU3P_css.mjs').then(m => m.default)}
  },
};
