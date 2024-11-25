import mongoose from 'mongoose';

const StudioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  amenities: [{
    type: String,
  }],
  operatingHours: {
    start: String,
    end: String,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Studio || mongoose.model('Studio', StudioSchema);