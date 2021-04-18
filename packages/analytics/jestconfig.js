// Jest configuration for api
const base = require('../../jestconfig-base.js')

module.exports = {
    ...base,
    name: '@f-giphy-pfft/js-analytics',
    displayName: 'analytics',
    automock: false,
    setupFiles: ['./set-up-jest.ts'],
}
