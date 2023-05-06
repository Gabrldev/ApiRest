const discordWebhook = require("webhook-discord");
const ulrhook = process.env.WEBHOOK_URl;
const Hook = new discordWebhook.Webhook(ulrhook);
const logger = {
  write: (messagge) => {
    Hook.err("ERROR API REST", messagge);
  },
};
module.exports = logger
