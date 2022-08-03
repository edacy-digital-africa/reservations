const express = require('express');
const app = express();
require('dotenv').config();
const chalk = require('chalk');
const ProgressBar = require('progress');
const Files = require('edacy-files-walk');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const { DB_USERNAME, DB_PASS, NODE_ENV, PORT } = process.env;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

console.log('Connecting to db...');
// mongoose.connect(process.env.DB_URL)
// .then((result) => {
//     console.log('App is connected to Atlas db');
//     initApp();
// })
// .catch((error) => {
//     console.log('Error when connecting to db \n'+error);
// });



function initApp() {
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
    });
}

initApp()

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

// const fs = require('fs');
// app.get('/stat', (req, res) => {
//     fs.readFile('./statistiques.pdf', (err, file) => {
//         res.send(file)
//     }) 
// })

// app.get('/stat2', (req, res) => {
//     const readable = fs.createReadStream(`${__dirname}/statistiques.pdf`);
//     readable.pipe(res);
// })

// const stream = require('stream');
// // Readable

// Writable

// Duplex

// Transform

// const readable = new stream.Readable();
// readable._read = () => {
//     console.log('reading')
// }

// readable.push('Ousmane');
// readable.push('Sakho');

// const writable = new stream.Writable();

// writable._write = (chunk, encoding, next) => {
//     console.log(chunk.toString())
//     next()
// }

// readable.pipe(writable);

// app.get('/stdout', (req, res) => {
//     readable.push(req.query.name);
//     readable.pipe(process.stdout);
//     res.send(req.query.name)
// })