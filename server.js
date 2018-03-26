const app = require('express')();
const bodyParser = require('body-parser'); // parses json sent in request bodies
const db = require('./database/main'); // this module has all our database functions

app.use(bodyParser.json());

// get a user by username
app.get('/user/:username', function(req, res) {
  db.getUser(req.params.username)
    .then(function(user) {
      res.json(user);
    })
    .catch(function(error) {
      res.status(500).send(error.stack);
    });
})

// add a user to database
app.post('/user/add', function(req, res) {
  db.addUser(req.body.username, req.body.password, req.body.age)
    .then(function(user) {
      res.json(user);
    })
    .catch(function(error) {
      res.status(500).send(error.stack);
    });
})

// update a user's info
app.put('/user/:username', function(req, res) {
  db.updateUser(req.params.username, req.body)
    .then(function(updatedUser) {
      res.json(updatedUser);
    })
    .catch(function(error) {
      res.status(500).send(error.stack);
    });

})

// delete a user from the database
app.delete('/user/:username', function(req, res) {
  db.deleteUser(req.params.username)
    .then(function(success) {
      res.json(success);
    })
    .catch(function(error) {
      res.status(500).send(error.stack);
    })
})

// run the server
app.listen(3000, function() {
  console.log('server running at http://localhost:3000');
})
