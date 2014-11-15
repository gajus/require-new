/**
 * @see http://nodejs.org/docs/v0.11.14/api/all.html#all_require
 * @see http://stackoverflow.com/questions/9210542/node-js-require-cache-possible-to-invalidate/11477602
 */
module.exports = function requireNew (module) {
    var modulePath = require.resolve(module),
        cachedModule,
        newModule;

    cachedModule = require.cache[modulePath];

    delete require.cache[modulePath];

    newModule = require(modulePath);

    if (cachedModule) {
        require.cache[modulePath] = cachedModule;
    } else {
        delete require.cache[modulePath];
    }

    return newModule;
};