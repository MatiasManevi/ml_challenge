const cors = require('cors');

const app = require('./setup-express');
const routes = require('./routes');
const { PORT } = require('./config');
const setAuthor = require('./middlewares/setAuthor');

app.use(cors());
app.use('/api', setAuthor);
app.use('/api', routes);
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

module.exports = {
	app
};
