module.exports = {
    displayName: "test",
    testEnvironment: "node",
    transform: {
        "^.+\\.tsx?$": ["ts-jest", { tsConfig: "__tests__/tsconfig.json" }]
    },
    testRegex: ".*\\.test\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js"],
    reporters: ["default", "jest-junit"]
}
