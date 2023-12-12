import "dotenv/config";

import OpenAI from "openai";

const openAI = new OpenAI();
const results = await openAI.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "system",
      //priming the system - ai's origin story
      content:
        "you are an ai assistant, answer any questions to the best of your ability",
    },
    { role: "user", content: "hey" },
  ], 
});

console.log(results);
