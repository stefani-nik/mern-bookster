var mongoose = require('mongoose');

const connection = 'mongodb+srv://stef:stefi0904@cluster0-nlxs0.mongodb.net/test?retryWrites=true';

mongoose.connect(connection);
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB error:'));