const express = require('express');
const {PORT} = require('../src/configEnv');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./routes/userRoutes')(app);
require('./routes/docRoutes')(app);

app.listen(PORT);