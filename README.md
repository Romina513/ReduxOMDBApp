How to deploy / instructions to get project running:

Dependencies I already had installed globally that will be needed:
express (if using express generator, it will be installed for you), webpack, mongoose

===Front End===

$ npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev

$ npm install react react-dom --save

$ npm install react-redux redux react-router react-router-redux --save
(* Note: Used react-router version 3.0.5. The latest version is 4.1.1, so that will be what downloads. There might be significant enough changes that the code here will not be compatible with latest version)

$ npm install css-loader style-loader --save

(If using Thunk Middleware)
$ npm install redux-thunk --save
$ npm install redux-logger --save


===Back End===

In Console/Terminal @ your project’s directory (the shell/outer directory of where you want this project to be, because generator will create a folder)

$ express -e backEnd
(express-generator, used to create application skeleton)
(https://expressjs.com/en/starter/generator.html)

Next...To install dependencies:
     $ cd backEnd && then npm install

$ npm install
(generator creates a skeleton with a read-only package.json with (some of/initial) dependencies you will need without installing them. You run install to install those dependencies)

These are the dependencies in the package.json of express-generator (7/2017):
"dependencies": {
    "body-parser": "~1.17.1",
    "cookie-parser": "~1.4.3",
    "debug": "~2.6.3",
    "ejs": "~2.5.6",
    "express": "~4.15.2",
    "morgan": "~1.8.1",
    "serve-favicon": "~2.4.2"
  }

Next steps specific to this project:

$ npm install mongoose --save

$ npm install passport passport-local --save

$ npm install passport-local-mongoose --save


===Mongoose/Mongo Database===

Mongoose/Mongo

* Database (db) will be created when you run:
mongoose.connect('mongodb://localhost/nameYouWantForYourDatabase’);
from your code (This will probably be in routes (such as index.js or users) or app.js file (where routing or server configuration goes)
* (Should come before define routes)

* mongodb and mongo should be up for this to work
(Open with Terminal)

> Show dbs
(Will list all your databases. Check that yours was created)

> use nameOfDatabaseYouWantToUse

To create a collection within your database (if needed):

> db.createCollection(name, [options])

> show collections
(Show collections you have)

Useful commands:

> db.nameOfCollection.find({})
(Show all items in a collection)

> db.nameOfCollection.remove({condition})


===Server for Testing===
https://www.npmjs.com/package/simplehttpserver

In Terminal @ backEnd directory: (Could this have gone in frontEnd directory? Same difference?)
$ npm install simplehttpserver -g

In Terminal @ ./frontEnd/dist directory (the directory where file that needs to run is):
$ simplehttpserver [directory]
$ simplehttpserver .    <-- (. all at this directory)

[directory] is used as web root and is by default current working directory

Server listens port 8000. Navigate to http://localhost:8000 to view

=========
# base image
FROM node:alpine

# run this directory. Here a directory will be made in your docker container
RUN mkdir app

# Woking directory
WORKDIR app

# adding these to directory app in my container
ADD ./bin/www www
# first is reference to path in my files, second is what the file will be called in container
ADD ./package.json package.json

# will install all dependencies
RUN npm install

ADD .backEnd/app.js app.js

# the port number the container should expose
EXPOSE 3000
