var mongoose = require( 'mongoose' );
var dbURI = 'mongodb://localhost/Loc8r';
mongoose.connect(dbURI);

var db = mongoose.connection;
db.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});
db.on('error',function (err) {
  console.log('Mongoose connection error: ' + err);
});
db.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

var gracefulShutdown = function(msg, callback) {
  db.close(function() {
    console.log('Mongoose disconnected through' + msg);
    callback();
  });
};

process.once('SIGUSR2', function(){
  gracefulShutdown('nodemon restart', function(){
    process.kill(process.pid, 'SIGUSR2');
  });
});

process.on('SIGINT', function(){
  gracefulShutdown('app termination', function(){
    process.exit(0);
  });
});

process.on('SIGTERM', function(){
  gracefulShutdown('Heroku app shutdown', function(){
    process.exit(0);
  });
});
