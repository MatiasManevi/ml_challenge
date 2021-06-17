const mung = require('express-mung');
const { author } = require('../../utils/constants');

module.exports = mung.json((body) => {
	return { author, ...body };
});
