// module.exports = {
//   webpack: (config, options) => {
//     config.module.rules.push({
//       test: /\.mdx/,
//       use: [
//         options.defaultLoaders.babel,
//         {
//           loader: "style-loader!css-loader",
//           options: pluginOptions.options,
//         },
//       ],
//     });

//     return config;
//   },
// };
const withImages = require("next-images");
module.exports = withImages({
  webpack(config, options) {
    return config;
  },
});

module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            outputPath: "static/webfonts/",
            publicPath: "../webfonts/",
            // optional, just to prettify file names
            name: "[name].[ext]",
          },
        ],
      }
      // ...
    );
    return config;
  },
  // ...
};
