const { Schema, model } = require('mongoose');
const itemSchema = require('./itemSchema');

const lineItemSchema = new Schema(
	{
		qty: { type: Number, default: 1 },
		item: itemSchema
	},
	{
		timestamps: true,
		toJSON: { virtuals: true }
	}
);

lineItemSchema.virtual('extPrice').get(function () {
	// 'this' is bound to the lineItem subdoc
	return this.qty * this.item.price;
});

const orderSchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: 'User' },
		lineItems: [lineItemSchema],
		isPaid: { type: Boolean, default: false }
	},
	{
		timestamps: true,
		toJSON: { virtuals: true }
	}
);

orderSchema.virtual('orderTotal').get(function () {
	return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});

//! sum item qty
orderSchema.virtual('totalQty').get(function () {
	return this.lineItems.reduce((total, item) => total + item.qty, 0);
});

//! instance's  _id in mongo
orderSchema.virtual('orderId').get(function () {
	return this.id.slice(-6).toUpperCase();
});

//!
orderSchema.statics.getCart = function (userId) {
	// 'this' is the Order model
	return this.findOneAndUpdate(
		// query
		{ user: userId, isPaid: false },
		// update
		{ user: userId },
		// upsert option will create the doc if
		// it doesn't exist
		{ upsert: true, new: true }
	);
};

orderSchema.methods.addItemToCart = async function (itemId) {
	const cart = this;
	// Check if item already in cart
	//! returns the elem found, else null
	const lineItem = cart.lineItems.find((lineItem) =>
		lineItem.item._id.equals(itemId)
	);
	if (lineItem) {
		lineItem.qty += 1;
	} else {
		// query the Items db and add it to cart
		const item = await model('Item').findById(itemId);
		// console.log(item);
		cart.lineItems.addToSet({ item }); //! changed push to addToSet
	}
	return cart.save();
};

// Instance method to set an item's qty in the cart (will add item if does not exist)
orderSchema.methods.setItemQty = function (itemId, newQty) {
	// this keyword is bound to the cart (order doc)
	const cart = this;
	// Find the line item in the cart for the menu item
	const lineItem = cart.lineItems.find((lineItem) =>
		lineItem.item._id.equals(itemId)
	);
	//! I added this
	const lineItemIndex = cart.lineItems.findIndex((lineItem) =>
		lineItem.item._id.equals(itemId)
	);
	if (lineItem && newQty <= 0) {
		// Calling remove, removes itself from the cart.lineItems array
		// console.log(cart.lineItems);
		console.log(lineItemIndex);
		console.log(lineItem);
		cart.lineItems.splice(lineItemIndex, 1); // ! would it matter if it changes the index of other items in current order
		// lineItem.remove(); //!splice this ?
	} else if (lineItem) {
		// Set the new qty - positive value is assured thanks to prev if
		lineItem.qty = newQty;
	}
	// return the save() method's promise
	return cart.save();
};

module.exports = model('Order', orderSchema);
