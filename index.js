const debug = require('debug');

const cache = {};

module.exports = new Proxy((name, ...rest) => new Proxy(debug(name, ...rest), {
  get: (t, k, r) =>
    Reflect.get(t, k, r)
    || Reflect.get(debug, k, r)
    || cache[k]
    || (cache[k] = debug(`${name}:${k}`, ...rest))
}), {
  get: (t, k, r) =>
    Reflect.get(t, k, r)
    || Reflect.get(debug, k, r)
    || cache[k]
    || (cache[k] = debug(k))
});
