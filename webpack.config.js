module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        path: __dirname + '/public/bundles/',
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    }
};
