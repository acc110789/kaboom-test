module.exports = {
    entry: "./index.ts",
    output: {
        filename: "index.js"
    },
    module: {
      rules: [
          {
              test: /\.tsx?$/,
              loader: 'ts-loader',
              exclude: /node_modules/,
          }
      ]
    },
    resolve: {   // 需要打包的文件后缀
        extensions: [".tsx", ".ts", ".js"]
    },
    "mode": "development"
};