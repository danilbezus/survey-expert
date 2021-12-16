const { QuestionFeedback } = require("../models/model");

exports.getAllQuestionfeedback = async (req, res) => {
  try {
    const aQuestionfeedback = await QuestionFeedback.findAll();
    return res.json(aQuestionfeedback);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.getQuestionfeedback = async (req, res) => {
  try {
    const id = req.params.id;
    const aQuestionfeedback = await QuestionFeedback.findOne({
      where: {
        id,
      },
    });
    return res.json(aQuestionfeedback);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.updateQuestionfeedback = async (req, res) => {
  try {
    const id = req.params.id;
    const aQuestionfeedback = await QuestionFeedback.findOne({
      where: {
        id,
      },
    });
    aQuestionfeedback.update(req.body);
    aQuestionfeedback.save();
    return res.json(aQuestionfeedback);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.deleteQuestionfeedback = async (req, res) => {
  try {
    const id = req.params.id;
    const aQuestionfeedback = await QuestionFeedback.destroy({
      where: {
        id,
      },
    });
    return res.json(aQuestionfeedback);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.createQuestionfeedback = async (req, res) => {
  try {
    const aQuestionfeedback = await QuestionFeedback.create(req.body);

    return res.json(aQuestionfeedback);
  } catch (e) {
    return res.json({ message: e.message });
  }
};