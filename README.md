# TerminalGPT (chat with gpt-4 in your terminal)

### A super simple starter kit to get you quickly prototyping  
### Using:
- Node 20.10.0
- dotenv
- OpenAI
- macOS: Sonoma 14.3
- bash / zsh


## 🔎 Quick Start

### Add your OpenAI API key
- create a `.env` file in the root directory
- [create an OpenAI developer account](https://platform.openai.com/login?launch)
- create an OpenAI API key
- add your API key to the `.env` file using the following format: `OPENAI_API_KEY="<APIKey>"`

### Install dependencies

```bash
$ npm -i
```

### Start the chat

```bash
$ node chat.js
```

### Tweak the AI model if needed
In `chat.js`, you can: 
- change the model (currently using gpt-4)
- change the initial context given to the model

