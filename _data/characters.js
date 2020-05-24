const https = require('https');

module.exports = async () => {
  const res = await getCharacters();
  return res.results;
}


function getCharacters() {
  return new Promise((resolve, rejects) => {
    https.get('https://rickandmortyapi.com/api/character/', (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      resolve(JSON.parse(data))
    });

  }).on("error", (err) => {
    rejects("Error: " + err.message);
  });
  })
}

