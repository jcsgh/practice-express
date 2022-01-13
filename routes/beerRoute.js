/*
- On the home page (`get "/"`), users should see:
  - "99 Bottles of beer on the wall"
  - a link that says "take one down, pass it around"
  - this should link to `/98`, where the number represents the number of bottles left.
- When a number is given in the url (`get "/:number_of_bottles"`), users should see:
  - The number of bottles of beer on the wall (i.e. `98 Bottles of beer on the wall.`)
  - a link to "take one down, pass it around", where the href is number of bottles in the parameter minus 1.
- If there are 0 bottles left, do not show a link to "take one down"
  - Add a link to start over, which directs the user back to the home page.
*/

let beers = 99;
const express = require("express");
const beerRouter = express.Router()

beerRouter.get('/', (req, res)=>{
    if (beers === 0 || beers < 0) {
        res.status(200).json({message: `No more beers left!`})
    }
    res.status(200).json({message: `${beers} Bottles of beer on the wall. Take one down, pass it around.`})
    beers--;
})

module.exports = beerRouter;