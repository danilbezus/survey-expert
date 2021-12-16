const express = require('express');
const app = express();

const questionFeedbackRouter = require('./routes/Questionfeedback.js');
const answerRouter = require('./routes/Answer.js');

app.use(express.json());
app.use('/questionfeedback', questionFeedbackRouter);
app.use('/answer', answerRouter);

module.exports = app;