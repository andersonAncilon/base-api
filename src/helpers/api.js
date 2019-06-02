const axios = require('axios');

const Api = axios.create({
	baseURL: 'https://localhost:3001/',
});

module.exports = Api;
