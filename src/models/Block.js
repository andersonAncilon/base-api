const moongose = require('mongoose');

const Block = moongose.Schema({
	index: {
		type: Number,
	},
	hash: {
		type: String,
		required: true,
	},
	previousHash: {
		type: String,
		default: null,
	},
	timestamp: {
		type: Date,
		default: new Date().toLocaleString('pt-BR'),
	},
	payload: {
		type: Object,
	},
});

module.exports = moongose.model('Block', Block);
