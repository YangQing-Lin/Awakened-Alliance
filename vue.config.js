const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        // No need for aplitting
        optimization: {
            splitChunks: false
        }
    }
})
