require('dotenv').config();
require('./config/database');
const cors = require('cors');
const express = require('express');
const fileUpload = require('express-fileupload');
const indexRouter = require('./routes/index');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(fileUpload());
app.use(express.json());

indexRouter(app);

app.listen(port, () => {
    console.log('SERVER READY ON PORT: ' + port);
});