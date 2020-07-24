const withCSS = require('@zeit/next-css')

module.exports = withCSS(
    env: {
    	NODE_ENV: 'production'
    }
);