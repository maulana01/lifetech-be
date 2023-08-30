/** @format */

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 4001;

app.use(cors());

const routes = require('./src/v1/routes');

app.get('/', (req, res) => res.send('Hello World'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1/users', routes.userRoute);
app.listen(port, () => console.log(`listening on port ${port}`));
