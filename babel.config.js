module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "babel-plugin-react-docgen-typescript",
        // "@babel/plugin-proposal-export-namespace-from",
        "react-native-reanimated/plugin",
        { exclude: "node_modules" },
      ],
    ],
  };
};
