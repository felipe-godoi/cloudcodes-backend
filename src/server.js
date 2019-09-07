const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://feehgodoi08:feehgodoi08@cluster0-xxmdl.mongodb.net/users?retryWrites=true&w=majority', {
	useNewUrlParser: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);