const debug = require('debug');

const cache = {};

function get(t, k, r, name) {
  const defProp = Reflect.get(t, k, r) || Reflect.get(debug, k, r);
  if (defProp && defProp !== debug) {
    return defProp;
  } else {
    if (name) {
      k = `${name}:${k}`;
    }
    return cache[k] || (cache[k] = debugAny(k));
  }
}

const debugAny = new Proxy((name, ...rest) => new Proxy(debug(name, ...rest), { get: (...args) => get(...args, name) }), { get });

module.exports = debugAny;
