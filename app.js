const express = require('express');
const app = express();
require('dotenv').config();
const chalk = require('chalk');
const ProgressBar = require('progress');
const Files = require('edacy-files-walk');

const { DB_USERNAME, DB_PASS, NODE_ENV, PORT } = process.env;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

  //AUTOLOAD ROUTES
var routes = Files.walk(__dirname + '/api/modules');

// IMPORT PUBLIC ROUTES
for (var i = 0; i < routes.length; i++)
    if (routes[i].indexOf('public.routes') !== -1)
        require(routes[i])(app);


// USE GUARD MIDDLEWARE
require('./api/modules/auth/auth.guard')(app);


// IMPORT PRIVATE ROUTES
for (var i = 0; i < routes.length; i++)
    if (routes[i].indexOf('routes') !== -1 && routes[i].indexOf('public.routes') === -1)
        require(routes[i])(app);

app.listen(PORT, () => {
    console.log('Server Listening');
})

// const bar = new ProgressBar(':bar', { total: 100 });
// const timer = setInterval(() => {
//     bar.tick();
//     if(bar.complete) {
//         clearInterval(timer);
//     }
// }, 40);

// console.log(chalk.bold(chalk.underline(chalk.red(DB_PASS))))

// const function2 = () => { console.trace() };
// const function1 = () => function2();

// function1();
