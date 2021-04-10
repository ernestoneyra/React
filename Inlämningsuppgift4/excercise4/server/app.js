const express = require("express");
const app = express();
const port = 5000;
//var apiGamesRouter = require('./routes/api/games');

/* app.get("/:urlSlug", function (req, res, next) {
  const urlSlug = req.params.id; // (id) måste vara samma som ovan. Behöver inte vara id kan vara x, men måste vara samma

  const games = req.app.locals.games;

  const game = games.find((game) => game.urlSlug == urlSlug);

  res.json( game);

}) */

app.get("/", function (req, res, next) {
  

  res.json( [
    {
      id: 1,
      game: "Tetris",
      genre: "Genre: Puzzle",
      urlSlug: "tetris",
      release_year: "Release Year: 1984",
      description:
        "Allows players to rotate falling blocks strategically to clear levels. ",
      imageUrl:
        "https://assets.partyking.org/img/products/1300/tetris-lampa-1.jpg",
    },
    {
      id: 2,
      game: "Pacman",
      genre: "Genre: Platform",
      urlSlug: "pacman",
      release_year: "Release Year: 1980",
      description:
        "The player controls Pac-Man, who must eat all the dots inside an enclosed maze while avoiding four colored ghosts. Eating large flashing dots called Power Pellets causes the ghosts to turn blue, allowing Pac-Man to eat them for bonus points.",
      imageUrl: "https://thumbs.dreamstime.com/z/pacman-symboler-128515491.jpg",
    },
    {
      id: 3,
      game: "Asteroids",
      urlSlug: "asteroids",
      genre: "Genre: Shooter",
      release_year: "Relase Year: 1979",
      description:
        "The object of the game is to shoot and destroy the asteroids and saucers, while not colliding with either, or being hit by the saucers' counter-fire.",
      imageUrl:
        "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_350/MTc0MDExMjc3NTI4NTQxMDUx/asteroids-game.webp",
    },
  ]);

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

/* app.locals.games = [
  {
    id: 1,
    game: "Tetris",
    genre: "Genre: Puzzle",
    urlSlug: "tetris",
    release_year: "Release Year: 1984",
    description:
      "Allows players to rotate falling blocks strategically to clear levels. ",
    imageUrl:
      "https://assets.partyking.org/img/products/1300/tetris-lampa-1.jpg",
  },
  {
    id: 2,
    game: "Pacman",
    genre: "Genre: Platform",
    urlSlug: "pacman",
    release_year: "Release Year: 1980",
    description:
      "The player controls Pac-Man, who must eat all the dots inside an enclosed maze while avoiding four colored ghosts. Eating large flashing dots called Power Pellets causes the ghosts to turn blue, allowing Pac-Man to eat them for bonus points.",
    imageUrl: "https://thumbs.dreamstime.com/z/pacman-symboler-128515491.jpg",
  },
  {
    id: 3,
    game: "Asteroids",
    urlSlug: "asteroids",
    genre: "Genre: Shooter",
    release_year: "Relase Year: 1979",
    description:
      "The object of the game is to shoot and destroy the asteroids and saucers, while not colliding with either, or being hit by the saucers' counter-fire.",
    imageUrl:
      "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_350/MTc0MDExMjc3NTI4NTQxMDUx/asteroids-game.webp",
  },
];  */


/*app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/search', searchRouter);
app.use('/admin/products', adminProductsRouter); */

//API = Application Programming Interface
//JSON
// GET http://localhost:3000/api/products/1
//GET http://localhost:3000/api/products
//app.use('/api/games', apiGamesRouter)
