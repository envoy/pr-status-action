/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 450:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 177:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const core = __nccwpck_require__(450);
const github = __nccwpck_require__(177);

const main = async() => {
    try {
        const repository = core.getInput('repository', {required: true});
        const prNumber = core.getInput('pr-number', {required: true});
        const context = core.getInput('context', {required: true});
        const state = core.getInput('state', {required: true});
        const description = core.getInput('description', {required: true});
        const targetURL = core.getInput('target-url', {required: false});
        const token = core.getInput('GITHUB_TOKEN', {required: true});
        const payload = JSON.stringify(github.context.payload, undefined, 2)
        
        const octokit = new github.getOctokit(token);

        const data = await octokit.request('GET /repos/{repository}/pulls/{pull_number}', {
            repository,
            pull_number: prNumber
        });
        console.log(data);
        console.log(payload);
        console.log(repository);
        console.log(token)
      } catch (error) {
        core.setFailed(error.message);
      }
}

main();

})();

module.exports = __webpack_exports__;
/******/ })()
;