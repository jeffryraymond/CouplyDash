// Grab firestore db instance
const { db } = require('./../util/admin');

// Example call
const hello = (request, response, next) => {
  response.status(200).json({
        body: 'Hello from the server!'
  });
}

// Get analytics function
const getAnalytics = (request, response, next) => {
  db
    .collection('users')
    .get()
    .then((data) => {
      let users = [];
      data.forEach((doc) => {
        users.push(doc);
      })
      return response.status(200).json(users);
    })
    .catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
}

module.exports.getAnalytics = getAnalytics;
module.exports.hello = hello;
