// Jest configuration for api
const base = require('../../jestconfig-base.js')

module.exports = {
    ...base,
    name: '@f-giphy/js-util',
    displayName: 'util',
    setupFiles: ['./browser-mock.ts'],
}
