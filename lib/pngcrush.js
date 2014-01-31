'use strict';

var Bin = require('bin-wrapper');
var path = require('path');

var options = {
  name: 'pngcrush',
  bin: 'pngcrush',
  path: path.join(__dirname, '../vendor'),
  src: 'http://downloads.sourceforge.net/project/pmt/pngcrush/1.7.70/pngcrush-1.7.70.tar.gz',
  buildScript: 'make && mv pngcrush ' + path.join(__dirname, '../vendor'),
  platform: {
    darwin: {
      url: 'https://raw.github.com/1000ch/node-pngcrush-bin/master/vendor/osx/pngcrush'
    },
    linux: {
      url: 'https://raw.github.com/1000ch/node-pngcrush-bin/master/vendor/linux/x86/pngcrush',
      arch: {
        x64: {
          url: 'https://raw.github.com/1000ch/node-pngcrush-bin/master/vendor/linux/x64/pngcrush'
        }
      }
    }
  }
};
var bin = new Bin(options);

exports.bin = bin;
exports.options = options;
exports.path = bin.path;