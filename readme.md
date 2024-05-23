# Primer servidor

Clase donde aprendemos a crear nuestro primer poryecto de node y el primer servidor en express.

## Paso 1

 
Crear una carpeta llamada primer-servidor y abrirla en visual studio.

## Iniciar un proyecto en node

`npm init ->crea un proyecto en node`

Inicia un nuevo proyecto en node, pero pregunta por cada detalle que ira en el package.json

Crea un archivo llamado el package.json

## Evitar las preguntas

`npm init -y`

Responde que si (yes) a todas las preguntas.

## Express

Express es un framework minimalista para node js.

Para Iinstalalo necesitas ejecutar el siguiente comando

`npm install exprees --save`

Se creara una carpeta de node_modules que contendrá toda la información de la dependencia instalada 

### Ignorar node_modules

Para no subir al repositorio esta carpeta debemos crear un achivo llamado .gitignore. Dentro de el escribimos

## Hola mundo -- Express

### Importar -- Express
common js -> javascript común

imports
`const name = require('package_name');`

export
`module.exports = jfabkfjagkjf`

OJO --- se puede usar ES6 -> javascript moderno (modulo ECMASScript 6)

en package.json agregar lo siguiente
`"type": "module" `

### Crear una instancia de express para nuestra applicación

`const app = express();`

Servidor se mata con ctrl + c