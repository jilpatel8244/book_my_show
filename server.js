const express = require('express');
const router = require('./routes/index.route');
const app = express();
require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`app is listening on port: ${PORT}`);
})