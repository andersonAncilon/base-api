const Api = require('axios');

const Block = require('../models/Block');

const BlockService = require('../services/BlockServices');

class BlockController {
	async store(req, res) {
		const { body } = req;

		const count = await Block.countDocuments({});

		const lastBlock = await Block.find()
			.sort({ timestamp: -1 })
			.limit(1);

		const hash = await BlockService.generateHash(req.body.payload, lastBlock[0].hash);

		await Api.post('http://localhost:3001/checkTransaction', {
			payload: req.body.payload,
			previousHash: lastBlock[0].hash,
		}).then(response => {
			console.log(response.data + ' / ' + hash);

			if (response.data === hash) {
				console.log('bateu kkk');
			}
		});

		const newBody = {
			...body,
			index: count + 1,
			hash: hash,
			previousHash: lastBlock[0].hash,
		};

		await Block.create(newBody);
		res.status('200').send({ validated: true });
	}
}

module.exports = new BlockController();
