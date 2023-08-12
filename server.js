require('dotenv').config();
require('./config/database'); // runs the file because it gets compiled as an IIFE

const app = require('./app-server');
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Listening on PORT ${PORT}. We in the building`);
});
