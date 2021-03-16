const Command = require('../../Structures/Command');
const version = require('../../../package.json').version;

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            aliases: ['ver'],
            description: "Shows more informations about the bot",
            category: "Information"
        });
    }

    async run(message) {
        let verMsg = "__**Express Source " + version +"**__\n";
        verMsg += "xd";
        verMsg += "lol";
        verMsg += "lamoo";
        verMsg += "XD";
        verMsg += "XD";
        verMsg += "XD"
        return message.channel.send(verMsg);
    }
}
