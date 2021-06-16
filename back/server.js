const app = require('./setup-express');
const routes = require('./routes');
const { PORT } = require('./config');

app.get('/', (_, res) => res.send('App is working'));

app.use('/api', routes);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

module.exports = {
	app
};
