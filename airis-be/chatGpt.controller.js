const {Configuration, OpenAIApi} = require("openai");
require("dotenv").config();

const askToChatGpt = async function (req, res) {
    const configuration = new Configuration({
        apiKey: process.env.CHATGPT_TOKEN,
        organization: "org-FO4ywCBKoSlPd6MjVCFgki68",
    });
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: req.body.message,
        max_tokens: 256,
        temperature: 0.7,
        presence_penalty: 0
    })
    res.send({from: "chatGpt", data: completion.data.choices[0].message});
};

module.exports = {
    askToChatGpt,
};