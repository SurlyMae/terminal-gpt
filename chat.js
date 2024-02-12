import "dotenv/config";
import readline from "node:readline";
import { openAI } from "./openai.js";

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const newMessage = async (history, message) => {
  const chatCompletion = await openAI.chat.completions.create({
    messages: [...history, message],
    model: "gpt-4",
  });

  return chatCompletion.choices[0].message;
};

const formatMessage = (userInput) => ({ role: "user", content: userInput });

const chat = () => {
  const history = [
    {
      role: "system",
      content:
        "You are a helpful AI assistant. Answer questions to the best of your ability",
    },
  ];
  const start = () => {
    readLine.question("you: ", async (userInput) => {
      if (userInput.toLowerCase() === "exit") {
        readLine.close();
        return;
      }

      const userMessage = formatMessage(userInput);
      const response = await newMessage(history, userMessage);

      history.push(userMessage, response);
      console.log(`\n\nai: ${response.content}\n\n`);
      start();
    });
  };
  start();
};

console.log("chat initialized; type exit to end");
chat();
