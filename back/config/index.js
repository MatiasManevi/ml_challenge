const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	MELI_BASE_URL: process.env.API_KEY,
	port: process.env.PORT
};
