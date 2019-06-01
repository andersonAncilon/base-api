const express = require('express');
const cors = require('cors');
const { connection } = require('./helpers/dbConnect');

const server = express();

connection();

server.listen(process.env.PORT || 3000, () => {
	console.log('Server is running');
});

server.get('/', (req, res) => {
	res.send('Welcome to the motherfucking jesus API');
});

server.use(cors);
server.use(express.json());
