//This file configures Babel
//(transcompiler to convert code into older versions of JavaScript)
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
