![ss_home](https://github.com/WillBlackney/AI-Chat-Bot/assets/44806865/1a58aea6-5738-444d-a70c-4dcf48b4c46d)# AI Chat Bot Template: A Free Video Chat Room Web App!
![ai_bot_example](https://github.com/WillBlackney/AI-Chat-Bot/assets/44806865/f34b3744-3673-4bf3-994d-ca24002ea8dd)

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🚀 [Installation](#installation)
5. 🤸 [Screenshots](#screenshots)

## <a name="introduction">🤖 Introduction</a>

AI Chat Bot Template is a free full stack web application project template for building AI chat bot web apps like Chat-GPT. The project comes with deployment ready front end and back end solutions, as well as instructions on how to configure it with your own relevant keys and mongoDB database. The project uses the MERN stack (mongoDB, Express, React and Node), JWT tokens and authentication, and has a responsive design that will run well on mobile or desktop. This is a free project for anyone interested in learning the MERN stack, or implementing AI chatbot functionality into their own projects.

## <a name="tech-stack">⚙️ Tech Stack</a>

- <a href="https://react.dev/" target="_blank"><b>React</b></a>. 
- <a href="https://nodejs.org/en" target="_blank"><b>Node</b></a>. 
- <a href="https://expressjs.com/" target="_blank"><b>Express</b></a>. 
- <a href="https://www.mongodb.com/" target="_blank"><b>MongoDB</b></a>. 
- <a href="https://jwt.io/" target="_blank"><b>JWT</b></a>.
- <a href="https://vitejs.dev/" target="_blank"><b>Vite</b></a>. 
- <a href="https://www.typescriptlang.org/" target="_blank"><b>Typescript</b></a>. 
- <a href="https://tailwindcss.com/" target="_blank"><b>Tailwind CSS</b></a>. 

## <a name="features">🔋 Features</a>

👉 **Chap-GPT like Conversations**: Ask questions and converse with a powerful AI chat bot powered by OpenAI’s ‘Chat-GPT-3.5-Turbo’ model. Conversation data is saved between sessions in a MongoDB database. Conversation history can also be deleted to clear the context of the conversation. The chat bot’s response model also supports code markdown in javascript and typescript, allowing you to use it as a coding companion!

👉 **JWT Authentication**: Implements authentication and authorization features using JWT. The tokens are stored as a ‘HTTP only’ cookie in the user’s browser for 7 days. As a result, users are only required to login and authenticate once every seven days instead of everytime they visit the platform, while ensuring appropriate access levels and permissions across the platform in a secure way.


👉 **Password encryption and security middleware with Express.js**: Passwords and data sent to the MongoDB and securely encrypted. The express service implements several middleware validators to ensure data security and input sanitation during the user signup and authentication processes.

👉 **Responsive Design**: Follows responsive design principles to ensure optimal user experience across devices, adapting seamlessly to different screen sizes and resolutions.


## <a name="installation">🚀 Installation</a>

### Clone the repository, then navigate to the root directory.
```bash
git clone https://github.com/WillBlackney/AI-Chat-Bot.git
cd chat-bot
```

### Install the front end packages and run it locally
```bash
cd ./frontend
npm install
npm run dev
```


### Install the backend packages, and run it locally
```bash
cd ..
cd ./backend
npm install
npm run dev
```

### Create an account at [OpenAI](https://platform.openai.com/docs/overview) and set up an organization ID + secret key.

### Create a [MongoDB](https://www.mongodb.com/) account and database.


### Set up the project  .env file

In the backend folder, create a new file called .env and setup the following key/pair values
```bash
OPEN_AI_SECRET=[Your own open AI secret string]
OPEN_AI_ORGANIZATION_ID=[Your own organisation id string]
MONGODB_URL= [The url of your mongoDB]
JWT_SECRET= [This can be anything you’d like, but should ideally be at least 10 random characters long]
COOKIE_SECRET=[This can be anything you’d like, but should ideally be at least 10 random characters long]
PORT=[The port number you want to use, 5000 is a safe bet]
```
And that’s it! You can test the app out locally! Small tip: use [Postman](https://www.postman.com/) to test the REST API endpoints while it runs locally, which are:

1. (Get All Users): http://localhost:5000/api/v1/user

2. (Sign up User): http://localhost:5000/api/v1/user/signup
This requires a body in raw json format like below
```bash
{
	“name”: “John Doe”,
	“email”: “johndoe@email.com”,
	“password”: “123456”
}
```
3. (Login User): http://localhost:5000/api/v1/user/login
This requires a body in raw json format like below
```bash
{
	“email”: “johndoe@email.com”,
	“password”: “123456”
}
```


## <a name="screenshots">🤸 Screenshots</a>

### Home Page
![ss_home](https://github.com/WillBlackney/AI-Chat-Bot/assets/44806865/c48ede2f-e951-4f5b-8d0b-8c2dca8778de)

### Chat Page
![ss_chat_example](https://github.com/WillBlackney/AI-Chat-Bot/assets/44806865/b7090ae0-45b3-4157-9aca-364cd1b6ca29)

### Login / Signup
![ss_signup](https://github.com/WillBlackney/AI-Chat-Bot/assets/44806865/3fe070c7-20c6-409f-9ba0-c0ca19f78342)

