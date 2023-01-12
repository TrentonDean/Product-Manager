const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({         // sets up a schema where a product has a title, price, and description
    title: { type: String },
    price: { type: Number },
    description: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);