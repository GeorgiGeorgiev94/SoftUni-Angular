const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = new Schema({
  name: { type: Schema.Types.String, required: true },
  imageUrl: { type: Schema.Types.String, required: true },
  breed: { type: Schema.Types.String, required: true },
  dogAge: { type: Schema.Types.String, required: true },
  description: { type: Schema.Types.String, required: true },
  size: { type: Schema.Types.String, required: true },
  price: { type: Schema.Types.Number, required: true }
});

module.exports = mongoose.model('Dog', dogSchema);