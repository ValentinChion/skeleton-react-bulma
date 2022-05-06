const {useBabelRc, addExternalBabelPlugin, override} = require('customize-cra');

module.exports = override(addExternalBabelPlugin('@babel/plugin-syntax-export-default-from'));
