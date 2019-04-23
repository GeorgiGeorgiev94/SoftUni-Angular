const mongoose = require('mongoose')

let orderSchema = mongoose.Schema({
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  dog: { type: mongoose.Schema.Types.ObjectId, ref:'Dog' ,required: true },
  date: { type: mongoose.Schema.Types.Date, default: Date.now },
  quantity: { type: mongoose.Schema.Types.Number, required: true },
  price: { type: mongoose.Schema.Types.Number, required: true },
  finalPrice: { type: mongoose.Schema.Types.Number, required: true },

})

let Order = mongoose.model('Order', orderSchema)

module.exports = Order