module.exports = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: './js/index.js',

  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/js`,
    // 出力ファイル名
    filename: "main2.js"
  },

  mode: "development",
  watch: true
};