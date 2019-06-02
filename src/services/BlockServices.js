const sha256 = require('crypto-js/sha256');

class BlockService {
	generateHash(payload, previousHash) {
		return sha256(previousHash + JSON.stringify(payload)).toString();
	}
}

module.exports = new BlockService();
