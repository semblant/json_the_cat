const needle = require('needle');

//GET https://api.thecatapi.com/v1/breeds/search


const getBreed = () => {
  const args = process.argv.slice(2).toString();
  breedFetcher(args);
};

const breedFetcher = (breed) => {
  needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      console.log('Error fetching URL: ', error.message);
    } else {
      try {
        console.log(body[0].description);
      } catch (e) {
        console.log('Breed not found.');
      }
    }
  });
};

getBreed();