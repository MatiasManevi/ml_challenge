const app = require('./setup-express');
const routes = require('./routes');
const port = process.env.PORT || 5000;

app.get('/', (_, res) => res.send('App is working'));

app.use('/api', routes);

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = {
	app
};
