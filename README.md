# Schema plugin

Add install command to markdown files via [markdown-magic](https://github.com/DavidWells/markdown-magic)

## Install

```
npm i markdown-magic markdown-magic-install-command --save-dev
```

## Adding the plugin

See `example.js` for usage.

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./example.js) -->
<!-- The below code snippet is automatically added from ./example.js -->
```js
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
```
<!-- AUTO-GENERATED-CONTENT:END *-->

## Usage in markdown

<!-- AUTO-GENERATED-CONTENT:START (SCHEMA) -->
* **host** (string) - Host for the server
  * *default* - localhost
  * *argv* - host
* **port** (number) - Port for dev server to run on
  * *default* - 3000
  * *env* - PORT
<!-- AUTO-GENERATED-CONTENT:END -->
