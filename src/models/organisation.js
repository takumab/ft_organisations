import mongoose from 'mongoose';

const { Schema } = mongoose;

const organisationSchema = new Schema('Orgnaisation', {
  name: String,
  year: Number,
  revenue: Number
});

const Organisation = mongoose.Model('Organisation', organisationSchema);

export default Organisation;
