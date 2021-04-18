// Jest configuration for api
const base = require('../../jestconfig-base.js')

module.exports = {
    ...base,
    name: '@f-giphy/js-fetch-api',
    displayName: 'fetch-api',
    automock: false,
    setupFiles: ['./set-up-jest.ts'],
}
