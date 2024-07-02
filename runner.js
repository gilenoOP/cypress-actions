const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImViMDgyYmIzLTk0MGQtNDkxYS1iNDNmLWJlODlkY2Q4MTcxZC0xNzE5ODg4NTQ2MDkxIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiYWI0NTE2MWItMmE1OS00MzMyLTg0MGYtNmU1M2NkYjcyM2IwIiwidHlwZSI6InQifQ.s58Nav88tUlcf8nfV7vhRPmfeAz3zilcYq_xbya9xyk'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
