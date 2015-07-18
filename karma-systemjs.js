// Prevent Karma from starting synchronously
// by overriding the default handler.
__karma__.loaded = function(){};


// SystemJS configuration.
System.config({
  baseURL: '/base/',
  defaultJSExtensions: true
});


// Load test files, then start Karma.
Promise
  .all(loadTestFiles())
  .then(
  function(){
    __karma__.start();
  },
  function(error){
    console.error(error.stack || error);
    __karma__.start();
  }
);


/**
 * @param {string} path
 * @returns {boolean}
 */
function filterTestFiles(path) {
  return /\.spec\.js$/.test(path);
}


/**
 * @param {string} path
 * @returns {Promise}
 */
function importTestFiles(path) {
  return System.import(path);
}


/**
 * @returns {Promise[]}
 */
function loadTestFiles(){
  return Object
    .keys(window.__karma__.files)
    .filter(filterTestFiles)
    .map(importTestFiles);
}
