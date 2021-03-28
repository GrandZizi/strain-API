const mongoose = require('mongoose');

mongoURI =
	process.env.NODE_ENV === 'production'
		? process.env.DB_URL
		: 'mongodb://localhost/strains';

mongoose
	.connect(mongoURI, {
		useNewUrlParser: true,
		useFindAndModify: true,
		useUnifiedTopology: true,
	})
	.then((conn) => {
		console.log('connected to ' + conn.connections[0].name);
	})
	.catch(console.error);

module.exports = mongoose;
