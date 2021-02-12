const collectAmpDemos = require('./collect-amp-demos');

module.exports = (options, loaderContext) => {
    return { code: `module.exports = ${JSON.stringify(collectAmpDemos())};` };
};