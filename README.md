# debug-any-level

**[debug]** with any custom level using **ES6 Proxy**.

**Requires** Node v6+.

[debug]: https://github.com/visionmedia/debug

## Install

```sh
npm i debug-any-level
```

## Usage

It can be used in a variety of ways:

```js
import debug from 'debug-any-level'

// without a namespace
debug.log('hello world!')
// => log hello world!
debug.error('something went wrong')
// => error something went wrong
debug.custom('watch this!')
// => custom watch this!

// with a namespace
const app = debug('app')
app.log('hello world!')
// => app:log hello world!
// ...

// access the original debug object (and its properties) from anywhere
debug.enable('log,error')
app.enable('app:*')
```

