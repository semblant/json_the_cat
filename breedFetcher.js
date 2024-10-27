const needle = require('needle');

/**
 * Function returns description for a provided, valid, cat breed via a callback
 *
 * @param {string} breedName - the breed name to find the description for
 * @param {Function} callback - the call back that is used to return either the description or error
 */
const fetchBreedDescription = (breedName, callback) => {
  needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error.message, null);
    } else {
      try {
        callback(null, body[0].description);
      } catch (e) {
        callback('Breed not found.', null);
      }
    }
  });
};
module.exports = { fetchBreedDescription };