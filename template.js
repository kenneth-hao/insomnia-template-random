var stringRandom = require('string-random');

module.exports.templateTags = [{
    name: 'Random',
    displayName: 'Random String',
    description: 'Generate a random string',
    args: [
        {
            displayName: 'Length',
            description: 'Length',
            type: 'number',
            defaultValue: 0
        }
    ],
    async run (context, length) {
        return stringRandom(length);
    }
}];
