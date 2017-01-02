const express    = require('express');        // call express
const app        = express();                 // define our app using express
const bodyParser = require('body-parser');
const request    = require("request");
var path         = require('path');

var server = require('http').createServer(app);

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;        // set our port

// ROUTES FOR OUR API
// =============================================================================
const router = express.Router();              // get an instance of the express Router

app.use('/', express.static(path.join(__dirname, 'dist')))

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/playerStats', function(req, res) {
  const gameID = req.query.gameID;

  res.writeHead(200, {'Content-Type': 'application/json'});

  if (gameID) {
    request(`https://mrest.protrade.com/api/v7/game/${gameID}/playerStats`, function(error, response, body) {
      res.end(body);
    });
  }
});

router.get('/games', function(req, res) {
  const gameID = req.query.gameID;

  res.writeHead(200, {'Content-Type': 'application/json'});

  const sport = req.query.sport || 'nba';
  const date = req.query.date || '2016-12-25';
  const timezone = req.query.timezone || 'America%2FLos_Angeles';

  request(`https://mrest.protrade.com/api/v7/sport/${sport}/games?date=${date}&tz=${timezone}`, function(error, response, body) {
    res.end(body);
  });
});

router.get('/gameDetails', function(req, res) {
  const gameID = req.query.gameID;

  res.writeHead(200, {'Content-Type': 'application/json'});

  if (gameID) {
    request(`https://mrest.protrade.com/api/v7/game/${gameID}/details`, function(error, response, body) {
      res.end(body);
    });
  }
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
server.listen(port);
console.log('Magic happens on port ' + port);
