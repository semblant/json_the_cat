const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('#fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned desc
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns an error message if an invalid/non-existent breed is called', (done) => {
    fetchBreedDescription('CoolCat', (err, desc) => {
      const breedNotFound = 'Breed not found.';
      assert.equal(err, breedNotFound);

      // we expect no description
      assert.equal(desc, null);

      done();
    });
  });
});