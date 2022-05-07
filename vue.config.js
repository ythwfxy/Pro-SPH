module.exports = {
    productionSourceMap:false,
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://gmall-h5-api.atguigu.cn',
                // pathRewrite: { '^/api': '' },
            },
        },
    },
}