const { QuestionFeedback } = require("../models/model");

exports.getAllQuestionfeedback = async (req, res) => {
  try {
    const Questionfeedback = await Questionfeedback.findAll();
    return res.json(Questionfeedback);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.getQuestionfeedback = async (req, res) => {
  try {
    const id = req.params.id;
    const Questionfeedback = await Questionfeedback.findOne({
      where: {
        id,
      },
    });
    return res.json(Questionfeedback);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.updateQuestionfeedback = async (req, res) => {
  try {
    const id = req.params.id;
    const Questionfeedback = await Questionfeedback.findOne({
      where: {
        id,
      },
    });
    Questionfeedback.update(req.body);
    Questionfeedback.save();
    return res.json(Questionfeedback);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.deleteQuestionfeedback = async (req, res) => {
  try {
    const id = req.params.id;
    const Questionfeedback = await Questionfeedback.destroy({
      where: {
        id,
      },
    });
    return res.json(Questionfeedback);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.createQuestionfeedback = async (req, res) => {
  try {
    const Questionfeedback = await Questionfeedback.create(req.body);

    return res.json(Questionfeedback);
  } catch (e) {
    return res.json({ message: e.message });
  }
};