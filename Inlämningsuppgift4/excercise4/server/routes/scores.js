var express = require('express');
var router = express.Router();

let scores = [
    {
      id: 1,
      game: {
        id: 1,
        title: "Tetris",
      },
      player: "John Doe",
      date: "2019-01-01",
      highscore: "130 000",
      urlSlug: "tetris",
    },
    {
      id: 2,
      game: {
        id: 2,
        title: "Pacman",
      },
      player: "Jane Doe",
      date: "2019-02-02 ",
      highscore: "120 000",
      urlSlug: "pacman",
    },
    {
      id: 3,
      game: {
        id: 3,
        title: "Asteroids",
      },
      player: "Jan Doe",
      date: "2019-03-03",
      highscore: "200 000",
      urlSlug: "asteroids",
    },
  ];

  /* GET users listing. */
router.get('/', function(req, res, next) {
    res.send(scores);
  });
 

  router.post('/', function(req, res) {
    var player = req.body.player;
    var date = req.body.date;
    var highscore = req.body.highscore;
    var urlSlug = req.body.urlSlug;

    res.send(player + ' ' + date + ' ' + highscore + '' + urlSlug);
});
  
  module.exports = router;
  