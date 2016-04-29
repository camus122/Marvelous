//REFERENCIAS: https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications

var mongodb=require('./db/mongoDefinition');
var User=mongodb.schemas.user; //recupera el schema

//Crea un elemento
var chris = new User({
  name: 'Chris',
  username: 'sevilayha2',
  password: 'password'
});

// call the custom method. this will just add -dude to his name
// user will now be Chris-dude
chris.dudify(function(err, name) {
  if (err) throw err;

  console.log('Your new name is ' + name);
});

// call the built-in save method to save to the database
chris.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});

// get all the users
User.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);
});
console.log("es una prueba");
console.log("es una prueba");
