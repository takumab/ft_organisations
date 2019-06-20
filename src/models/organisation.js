import mongoose from 'mongoose';

const { Schema } = mongoose;

const organisationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  revenue: {
    type: Number,
    required: true
  }
});

const Organisation = mongoose.model('Organisation', organisationSchema);

export default Organisation;
