const cors = require('cors');
const path = require('path');

const app = require('./setup-express');
const routes = require('./routes');
const { PORT, NODE_ENV } = require('./config');
const setAuthor = require('./middlewares/setAuthor');

app.use(cors());
app.use('/api', [setAuthor, routes]);

if (NODE_ENV !== 'development') {
	app.use('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'build', 'index.html'));
	});
}

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

module.exports = {
	app
};
