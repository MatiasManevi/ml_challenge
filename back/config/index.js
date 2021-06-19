const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	MELI_BASE_URL: process.env.MELI_BASE_URL,
	PORT: process.env.PORT,
	NODE_ENV: process.env.NODE_ENV
};
