/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testPathIgnorePatterns: ["<rootDir>/src"],
  testEnvironment: "node",
  clearMocks: true,
};
