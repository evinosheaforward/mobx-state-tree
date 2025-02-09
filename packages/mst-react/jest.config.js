const mstJestConfig = require("../../jest.config.js")

module.exports = {
    ...mstJestConfig,
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"]
}
