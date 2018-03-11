const withTypescript = require('@zeit/next-typescript');
const withImages = require('next-images');
const compose = require('compose-function');

module.exports = compose(withTypescript, withImages)();
