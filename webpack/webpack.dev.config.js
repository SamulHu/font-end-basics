// 用于开发环境的 Webpack 配置
const webpack = require('webpack');

// 读取同一目录下的base config
const config = require('./webpack.base.config');

// 添加webpack-dev-server相关的配置项
config.devServer = {
    contentBase: './',
    hot: true,
    publicPath: '/assets/'
}

config.module.rules.push(
    {
        test: /\.less$/,
        use: [
            'style-loader',
            'css-loader',
            'less-loader'
        ],
        exclude: /node_modules/
    }
);

// 真实场景中，React、jQuery等优先走全站的CDN，所以要放在externals中
config.externals = {
    react: 'React',
    'react-dom': 'ReactDOM'
}

// 添加Sourcemap支持
config.plugins.push(
    new webpack.SourceMapDevToolPlugin({
        filename: '[file].map',
        exclude: ['vendor.js'] // vendor通常不需要sourcemap
    })
)

// hot module replacement
Object.keys(config.entry).forEach((key) => {
    // 这里有一个私有的约定，如果entry是一个数组，则证明它需要被hot module replacement
    if(Array.isArray(config.entry[key])) {
        config.entry[key].unshift(
            'webpack-dev-server/client?http://0.0.0.0:8080',
            'webpack/hot/only-dev-server'
        );
    }
});
config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
);

module.exports = config;