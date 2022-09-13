const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/beers', async (req, res, next) => {
  const data = {
    beers: await punkAPI.getBeers()
  }

  console.log(data.beers);

  res.render('beers', data);
});

app.get('/random-beer', async (req, res, next) => {


  const data = {
randomBeer: (await punkAPI.getRandom())[0]
  }

  console.log(data.randomBeer);
  
  res.render('random-beer', data);
});

app.listen(3000, () => console.log('🏃‍ on port 3000'));
