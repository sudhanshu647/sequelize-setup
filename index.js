const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
// This will be our application entry. We'll setup our server here.
const http = require('http');
// Set up the express app
const app = express();
// Log requests to the console.
app.use(logger('dev'));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Setup a default catch-all route that sends back a welcome message in JSON format."
var models = require('./models');
const port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);
console.log("server started on ",port)
models.sequelize.sync().then(function () {
    app.listen(port);
});

require('./routes')(app);
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;