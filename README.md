# Prueba técnica MEVN

## Configuración IDE recomendada

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Cómo empezar

### En primer lugar, debe clonar el repositorio en la carpeta que desee:

```sh
git clone https://github.com/emazou/estefaniaMazo_ptmevn.git
```

### Configure las variables de entorno del servidor .env, tal cual como se ve en el .env.example:

```sh
PORT= #puerto
MONGO_URL= #URL de la base de datos en https://www.mongodb.com/cloud/atlas
CLIENT_URL= #'http://localhost:puertocliente'
SERVER_URL= #'http://localhost:puertoservidor' o 'https://pt-mevn-server.herokuapp.com/'
GOOGLE_USER = #Correo electrónico con el que se crearon las credenciales de google
##Credenciales de google https://console.cloud.google.com/
GOOGLE_ID= 
GOOGLE_SECRET= 
##OAUTH2
GOOGLE_REFRESH= 
GOOGLE_URL = ## https://developers.google.com/oauthplayground
KEY_JWT= #Crea tu propia llave secreta
```

### Una vez haya clonado el repositorio en su máquina local y haya configurado las variables de entorno:

```sh
npm install
```

```sh
npm run dev
```
[API](https://pt-mevn-server.herokuapp.com/)
### Despues de que el servidor este listo es hora de ejecutar el cliente, en la terminal ejecute lo siguiente:

```sh
cd frontend
```
### Configure las variables de entorno del cliente .env, tal cual como se ve en el .env.example:

```sh
VITE_API_URL = #'http://localhost:puertoservidor' o 'https://pt-mevn-server.herokuapp.com/'
```

### Una vez haya configurado las variables de entorno del cliente:

```sh
npm install
```

```sh
npm run dev
```

## Descripción

El usuario podrá registrarse, verificar su cuenta e iniciar sesión con sus credenciales, podrá gestionar sus productos con funcionalidades como eliminar, editar y crear, cada acción requerirá autenticación.

Ver demo: [App](https://estefania-mazo-ptmevn.vercel.app/)
#### Puede utilizar las siguientes credenciales de prueba si no desea registrarse:

```sh
email: usuario@gmail.com
password: admin1234
```



