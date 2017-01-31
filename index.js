const fs = require('fs');
const path = require('path');

module.exports = function factory(schema) {
  return function SCHEMA() {
    const options = schema.document();
    const output = Object.keys(options).map((key) => {
      const option = options[key];

      const content = [
        `* **${key}** (${option.type}) - ${option.description}`,
      ];

      return content.concat(
        Object
          .keys(option)
          .filter(
            optionKey => ['type', 'description'].indexOf(optionKey) === -1
          )
          .map(optionKey => `  * *${optionKey}* - ${option[optionKey]}`)
      ).join('\n');
    });

    return output.join('\n');
  }
}
