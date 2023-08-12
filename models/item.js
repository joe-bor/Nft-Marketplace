const { model } = require('mongoose');
// Ensure the Category model is processed by Mongoose
require('./category'); //! not sure about this either

const itemSchema = require('./itemSchema');

module.exports = model('Item', itemSchema);
