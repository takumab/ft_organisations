import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/ft_organisations', {
  useNewUrlParser: true,
  useCreateIndex: true
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('successfully connected');
});

export default db;
