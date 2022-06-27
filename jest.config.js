module.exports = {
  preset: "ts-jest",
  roots: ["<rootDir>/src"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "\\.[jt]sx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|scss|svg)$": "identity-obj-proxy",
  },
  testPathIgnorePatterns: [
    "<rootDir>/.dist/",
    "<rootDir>/.build/",
    "<rootDir>/node_modules/",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleDirectories: ["node_modules", "src"],
};
