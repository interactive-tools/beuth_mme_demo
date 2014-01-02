beuth\_mme\_demo
==============

This is a demo CRUD app. It consists of a fat client frontend app and a backend offering a rest API.

The client was made with:

- HTML5 / CSS3
- Twitter Bootstrap
- AngularJS 
- Restangular

The backend app is based on:

- NodeJs
- Express
- Mongoose
- MongoDB

## Installation ##

### Requirements ###

Both apps client and backend require nodejs.

The backend app assumes that you have a working MongoDB installation on your machine which is running on `localhost` using the MongoDB default port `27018`.

The frontend app was made with [YEOMAN](http://yeoman.io/) and requires at least `bower`and `grunt` for dependency management and as a preview server.

### Backend ###

After cloning the repository, cd into the `backend/` directory and run:

    npm install;

In order to start the server call:

    nodejs app.js;

This will start the backend app.

__Note!__

You can adjust the connection settings to the MongoDB in `model/db.js` by changing the following line:

    mongoose.connect( 'mongodb://localhost/rest_example' );

### Client ###

After cloning the repository, cd into the `frontend/` directory and run:

    npm install;
    bower install;

This will install all dependencies like AngularJS, Restangular etc. 

Client and backend app are completely independent. Therefore you have to inform the client app where to find the backend. In order to do this, please check the address of the backend app (this might very well be `http://localhost:3000/`) and adjust the main configuration file `app/scripts/app.js` by changing the following line:

    ...
    .config(function(RestangularProvider) {
	    RestangularProvider.setBaseUrl('http://[BACKEND-URL]:[PORT]');
    })
	...

In order to start the server call:

    grunt serve;

This will start the grunt server which is used here as a runtime environment for development.

If everything worked well, please open the following URL: `http://127.0.0.1:9000/#/users/list`


