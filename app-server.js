const express = require('express');
const app = express();
const path = require('path'); // enables us to serve unix/windows w/o having to write multiple paths
const favicon = require('serve-favicon');
const logger = require('morgan');

const usersRoutes = require('./routes/api/users');
const ordersRoutes = require('./routes/api/orders');
const itemsRoutes = require('./routes/api/items');

app.use(express.json());
app.use((req, res, next) => {
	res.locals.data = {};
	next();
});
app.use(logger('dev'));
app.use(favicon(path.join(__dirname, 'public', 'img', 'favicon.ico')));

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./config/checkToken'));
app.use('/api/users', usersRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/items', itemsRoutes);

// catch all -> if url doesn't match with any routes
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;
