# MEVN Technical Test

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Getting Started

### First, you should clone the repository into the directory of your choice:

```sh
git clone https://github.com/emazou/estefaniaMazo_ptmevn.git
```

### Set up the server's .env environment variables, just as you see in the .env.example:

```sh
PORT= #port
MONGO_URL= #Database URL at https://www.mongodb.com/cloud/atlas
CLIENT_URL= #'http://localhost:clientport'
SERVER_URL= #'http://localhost:serverport' or 'https://pt-mevn-server.herokuapp.com/'
GOOGLE_USER = #Email used to create Google credentials
##Google credentials https://console.cloud.google.com/
GOOGLE_ID= 
GOOGLE_SECRET= 
##OAUTH2
GOOGLE_REFRESH= 
GOOGLE_URL = ## https://developers.google.com/oauthplayground
KEY_JWT= #Create your own secret key
```

### Once you have cloned the repository on your local machine and set up the environment variables:

```sh
npm install
```

```sh
npm run dev
```

### After the server is ready, it's time to run the client, in the terminal execute the following:

```sh
cd frontend
```
### Set up the client's .env environment variables, just as you see in the .env.example:

```sh
VITE_API_URL = #'http://localhost:serverport' or 'https://pt-mevn-server.herokuapp.com/'
```

### Once you have set up the client's environment variables:

```sh
npm install
```

```sh
npm run dev
```

## Description

Users will be able to register, verify their account, and log in with their credentials. They will be able to manage their products with functionalities such as delete, edit, and create, each action will require authentication.



