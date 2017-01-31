const Pulpo = require('pulpo');
const path = require('path');
const markdownMagic = require('markdown-magic');

const config = {
  transforms: {
    SCHEMA: require('./index.js')(new Pulpo({
      host: {
        description: 'Host for the server',
        type: 'string',
        default: 'localhost',
        argv: 'host'
      },
      port: {
        description: 'Port for dev server to run on',
        type: 'number',
        default: '3000',
        env: 'PORT'
      }
    }))
  }
}

const markdownPath = path.join(__dirname, 'README.md');
markdownMagic(markdownPath, config);
