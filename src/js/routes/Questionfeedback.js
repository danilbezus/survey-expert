const express = require('express');
const questionFeedbackController = require('../controllers/Questionfeedback.js');
const questionFeedbackRouter = express.Router();

questionFeedbackRouter
    .route('/')
    .get(questionFeedbackController.getAllQuestionfeedback)
    .post(questionFeedbackController.createQuestionfeedback);

questionFeedbackRouter
    .route('/:id')
    .get(questionFeedbackController.getQuestionfeedback)
    .delete(questionFeedbackController.deleteQuestionfeedback)
    .patch(questionFeedbackController.updateQuestionfeedback);

module.exports = questionFeedbackRouter; 