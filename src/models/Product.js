import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide the product title'],
  },
  price: {
    type: Number,
    required: true,
  },
  images: [String],
  qty: Number,
});

export default mongoose.model('Product', productSchema);
