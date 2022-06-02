const express = require('express');
const app = express();
require('dotenv').config();
const chalk = require('chalk');
const ProgressBar = require('progress');
const Reservation = require('./reservations/reservation')
const Files = require('edacy-files-walk');

const { DB_USERNAME, DB_PASS, NODE_ENV, PORT } = process.env;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.post('/reservations', (req, res) => {
    Reservation.insertOne(req.body);
    res.send(req.body);
})

app.get('/reservations', (req, res) => {
    const reservations = Reservation.findAll();
    res.send(reservations)
});

app.get('/reservations/:id', (req, res) => {
    const reservation = Reservation.findOne(req.params.id);
    res.send(reservation);
});

app.delete('/reservations/:id', (req, res) => {
    const result = Reservation.deleteOne(req.params.id);
    res.send(result);
});

// require('./api/modules/products/products.routes')(app);
  //AUTOLOAD ROUTES
  var routes = Files.walk(__dirname + '/api/modules');
  for (var i = 0; i < routes.length; i++)
    if (routes[i].indexOf('routes') !== -1)

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
