
# Minimal Node.js Server

Academic project on how to implement a functional web application with [Node.js](https://nodejs.org/) with as few dependencies as possible. It is a minimal framework for website development. The purpose is for students to have contact with web applications with Node.js before developing professional applications with Express, Axios, or other frameworks, from the Node.js ecosystem.

[Clique aqui para README em português](README.md)


## Installation
Download the project in the latest version and:
```bash
$ npm install
```


## Structure
The structure of this minimal framework seeks to be guided by the [MVC](https://pt.wikipedia.org/wiki/MVC) architecture:

- /app: has implementations of controllers, models and some helpers to help with data processing;
- /views: contains the application's HTML pages.
- routes.js: implements a part of the application's route processing, calling the controllers;
- server.js: application settings and activation.



## How to use
This project already has pages of examples. To create a page:

1. Create your HTML in the /views directory, the files have the .ejs extension;
2. Create an entry in the routes.js file to handle the HTTP request and call a responsible controller;
3. Create the responsible controller in /app/controllers that finishes processing the request (URL + HTTP verb) and returns the desired view (created in step 1). 



## Template

For this project, [EJS](https://ejs.co/) is used for template management. In /app/helpers/pageProcess.js there is an example of how to perform an HTTP response by calling the EJS to inform data to HTML. From this file, you can easily switch to other template managers


## Session

For session management, the [client-sessions](https://github.com/mozilla/node-client-sessions) component is the choice. Set the session and cookies as shown in server.js. Then you can create and access objects in the session, in addition to destroying it. Check the examples in /app/controllers/user.js.


## Prerequisites and Compatibility
- Node.js 12+;


## Contributing

It is not necessary to open an issue to have discussions before submitting your pull request. But it's just important to let others know that you're working on something. Improvement suggestions for this project:

- Mechanism to return a 404 page when a non-existent request is requested;
- Better error handling;
- Improved code quality;
- Improve the application architecture;
- Improved documentation;
- Others, feel free to contribute.
