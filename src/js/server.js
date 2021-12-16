const express = require('express');
const app = express();
const typeRouter = require('./routes/type');
const mDKeyRouter = require('./routes/metaDataKey');

app.use(express.json());
app.use('/type', typeRouter);
app.use('/metadatakey', mDKeyRouter);

module.exports = app;
