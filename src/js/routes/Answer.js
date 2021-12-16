const express = require('express');
const answerController = require('../controllers/Answer.js');
const answerRouter = express.Router();

answerRouter
  .route('/')
  .get(answerController.getAllAnswer)
  .post(answerController.createAnswer);

  answerRouter
  .route('/:id')
  .get(answerController.getAnswer)
  .delete(answerController.deleteAnswer)
  .patch(answerController.updateAnswer);

module.exports = answerRouter;