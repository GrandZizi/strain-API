const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controllers/StrainRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/strains', controller);
app.set('port', process.env.PORT || 420);

app.listen(app.get('port'), () => {
	console.log('connected to strainAPI ' + app.get('port'));
	console.log(process.env);
});
