const express = require('express');
const app = express();
require('dotenv').config();
const chalk = require('chalk');
const ProgressBar = require('progress');
const Reservation = require('./reservations/reservation')
const bodyParser = require('body-parser');

const { DB_USERNAME, DB_PASS, NODE_ENV, PORT } = process.env;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
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


app.listen(PORT, () => {
    console.log('Server Listening');
})

// const bar = new ProgressBar(':bar', { total: 50 });
// const timer = setInterval(() => {
//     bar.tick();
//     if(bar.complete) {
//         clearInterval(timer);
//     }
// }, 100);

// console.log(chalk.bold(chalk.underline(chalk.red(DB_PASS))))

// const function2 = () => { console.trace() };
// const function1 = () => function2();

// function1();