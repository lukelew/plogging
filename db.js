var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/plogging',{ useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
  console.log('Mongodb connected!')
})

module.exports = mongoose;
