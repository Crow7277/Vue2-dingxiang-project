const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://apis.juhe.cn',
                ws: true,
                changeOrigin: true,
                pathRewrite: { '^/api': '' },
            },
        },
    },
});
