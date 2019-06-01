const mongoose = require('mongoose');

const { userName } = require('../consts/config');
const { password } = require('../consts/config');

module.exports = {
	async connection() {
		try {
			await mongoose.connect(`mongodb://${userName}:${password}@ds231207.mlab.com:31207/urpay-hack-db`, {
				useNewUrlParser: true,
				useCreateIndex: true,
			});
			console.log('DB connection done!');
		} catch (err) {
			console.log('Fuck this god damn shit, something gone wrong!');
			console.error(err);
		}
	},
};
