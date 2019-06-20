import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/ft_organisations', {
  useNewUrlParser: true,
  useCreateIndex: true
});
