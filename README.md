How to deploy / instructions to get project running go here

===Server for Testing===
https://www.npmjs.com/package/simplehttpserver

In Terminal @ backEnd directory: (Could this have gone in frontEnd directory? Same difference?)
$ npm install simplehttpserver -g

In Terminal @ ./frontEnd/dist directory (the directory where file that needs to run is):
$ simplehttpserver [directory]
$ simplehttpserver .    <-- (. all at this directory)

[directory] is used as web root and is by default current working directory

Server listens port 8000. Navigate to http://localhost:8000 to view
