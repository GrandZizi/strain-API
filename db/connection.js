const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/strains',{
    useNewUrlParser: true,
	useFindAndModify: true,
	useUnifiedTopology: true,
})
.then(conn => {
    console.log('connected to '+ conn.connections[0].name);
})

module.exports = mongoose