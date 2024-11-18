const mongoose = require('mongoose');

const grocerySchema = new mongoose.Schema({
    item: { type: String, required: [true, "pass the item name"] },
    food_group: { type: String, required:[true, 'food_group is required'], enum: ['fruits', 'dairy','proteins', 'vegetables', 'nuts', 'grains'] },
    price_in_usd: {type: Number, required: [true, 'Please enter a number for price in usd FOR THE LOVE OF GOD'], min: [0, 'Price must be positive number']}
});

module.exports = mongoose.model('GroceryItem', grocerySchema);