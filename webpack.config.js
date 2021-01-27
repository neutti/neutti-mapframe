const path = require('path');
const copy = require('copy-webpack-plugin');
var jsConfig = {
    name: "js",
    entry: {
        js : './src/js/map.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'map.min.js'
    },
    plugins: [
        new copy({
            patterns: [
                { from: './src/index.html', to: 'index.html'},
                { from: './src/css/style.css', to: 'style.css'}
            ]
        })
    ],
}
module.exports = [
    jsConfig
]