const debug = require('debug');

const cache = {};

const debugAny = new Proxy((name, ...rest) => new Proxy(debug(name, ...rest), {
  get: (t, k, r) =>
    Reflect.get(t, k, r)
    || Reflect.get(debug, k, r)
    || cache[k]
    || (cache[k] = debugAny(`${name}:${k}`, ...rest))
}), {
  get: (t, k, r) =>
    Reflect.get(t, k, r)
    || Reflect.get(debug, k, r)
    || cache[k]
    || (cache[k] = debugAny(k))
});

module.exports = debugAny;
