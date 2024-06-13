module.exports = {
  moduleFileExtensions: [
    "js",
    "jsx",
    "json",
    // tell Jest to handle `*.vue` files
    "vue",
  ],
  transform: {
    // process `*.vue` files with `vue-jest`
    ".*\\.(vue)$": "vue-jest",
    // process js with `babel-jest`
    "^.+\\.js$": "babel-jest",
  },
  // support the same @ -> src alias mapping in source code
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mocks/fileMock.js",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  moduleFileExtensions: ["vue", "js", "json", "jsx", "ts", "tsx", "node"],
};
