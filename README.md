# Web Chat Application with React!

This simple repo shows how to easily add chat functionality into a React project with [Chat Engine](https://chatengine.io).


## Setup Steps

### 1 - Setup a Chat Engine server

Go to [Chat Engine](https://chatengine.io) to setup your own chat server.

- Click "New Project" and follow the steps
- Your `Project ID` and `Private Key` will be required for step 2

### 2 - Connect `.env` to Chat Engine

Chatengine.io will connect to your Chat Engine server with environment varibles.

This allows you to connect to different chat-servers in local vs staging vs production.

Replace the UUID below with your own. In `.env` write:

```
REACT_APP_CHAT_ENGINE_PROJECT_ID=xxxxxxx-xxxxxx-xxxxxxx-xxxxxx
```

### 3 - Install & Start Backend

Run the following two lines of code in `Backend/`.

```
npm install
npm run start
```
### 4 - Install & Start Frontend

Run the following two lines of code in `Frontend/`.

```
npm install
npm run dev
```

Done! Your Express server is on `localhost:3000` and connected to Chat Engine!

All new "Sign Up" users are on Chat Engine, and their credentiuals are found upon "Login".

To understand this application, please watch [this video](https://www.youtube.com/watch?v=xUkA2EvzlMU)!
