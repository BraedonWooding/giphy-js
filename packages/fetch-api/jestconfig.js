// Jest configuration for api
const base = require('../../jestconfig-base.js')

module.exports = {
    ...base,
    name: '@f-giphy-pfft/js-fetch-api',
    displayName: 'fetch-api',
    automock: false,
    setupFiles: ['./set-up-jest.ts'],
}
