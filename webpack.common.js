const MiniCssExtractPlugin = require("mini-css-extract-plugin").default;

module.exports = {
        entry: './src/app.js',
        plugins: [new MiniCssExtractPlugin()],
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                {
                    test: /\.s?css$/,
                    use: [
                            MiniCssExtractPlugin.loader,
                            'css-loader',
                            'sass-loader'
                        ]
                }
            ]
        }
};