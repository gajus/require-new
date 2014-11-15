## `require-new`

[![Build Status](https://travis-ci.org/gajus/require-new.png?branch=master&decache1)](https://travis-ci.org/gajus/require-new)
[![NPM version](https://badge.fury.io/js/require-new.svg)](http://badge.fury.io/js/require-new)

> Modules are cached after the first time they are loaded. This means (among other things) that every call to require('foo') will get exactly the same object returned, if it would resolve to the same file.

– http://nodejs.org/api/modules.html#modules_caching

`require-new` requires a new module object.

Using `require-new` will not affect the state or behavior of `require` method.

## Usage

```js
var requireNew = require('require-new'),
    myModule = requireNew('my-module');
```

## Node

Download using NPM:

```sh
npm install require-new
```