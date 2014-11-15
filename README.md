## `require-new`

[![Build Status](https://travis-ci.org/gajus/require-new.png?branch=master&decache1)](https://travis-ci.org/gajus/require-new)
[![NPM version](https://badge.fury.io/js/require-new.svg)](http://badge.fury.io/js/require-new)

> Modules are cached after the first time they are loaded. This means (among other things) that every call to require('foo') will get exactly the same object returned, if it would resolve to the same file.

– http://nodejs.org/api/modules.html#modules_caching

`require-new` requires a new module object.

`require-new` does not affect the state or behavior of `require` method.

## Usage

Load `require-new` module and use it to load a module just as you would with `require`:

```js
var requireNew = require('require-new'),
    myModule = requireNew('my-module');
```

### Example

If you have a module `rand.js`:

```js
module.exports = Math.random();
```

Then requiring this module several times will result in the same response:

```js
require('./rand.js'); // 0.697190385311842
require('./rand.js'); // 0.697190385311842
```

Modules are cached in a [`require.cache`](http://nodejs.org/api/globals.html#globals_require_cache) object when they are required. 

`require-new` deletes the key value from the `require.cache` object associated with the module you are requesting, making the module reload:

```js
requireNew('./rand.js'); // 0.2123227424453944
requireNew('./rand.js'); // 0.5403654584661126
```

It then restores the state of the `require.cache` object to ensure that it does not affect the behavior of `require`:

```js
require('./rand.js'); // 0.48205413995310664
requireNew('./rand.js'); // 0.12475096038542688
requireNew('./rand.js'); // 0.2615479789674282
require('./rand.js'); // 0.48205413995310664
```

## Node

Download using NPM:

```sh
npm install require-new
```