const { Schema, model } = require('mongoose');

const categorySchema = new Schema(
	{
		name: { type: String, required: true },
		sortOrder: Number
	},
	{
		timestamps: true
	}
);

module.exports = model('Category', categorySchema);
