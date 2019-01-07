module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/public/bundles"
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        preset: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
