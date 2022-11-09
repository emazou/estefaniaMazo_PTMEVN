require('dotenv').config();
require('./config/database');
const cors = require('cors');
const express = require('express');

const indexRouter = require('./routes/index');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(logger('dev'));
indexRouter(app);

app.listen(port, () => {
    console.log('SERVER READY ON PORT: ' + port);
});