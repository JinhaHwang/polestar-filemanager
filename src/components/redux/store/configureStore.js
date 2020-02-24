/* eslint global-require: 0 */
// build 단계에서 환경변수를 읽어 import할 모듈을 결정
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./configureStore.prod')
} else {
    module.exports = require('./configureStore.dev')
}
