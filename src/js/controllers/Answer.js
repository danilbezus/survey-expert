const { Answer } = require('../models/model');

exports.getAllAnswer = async (req, res) => {
  try {
    const aAnswer = await Answer.findAll();
    return res.json(aAnswer);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.createAnswer = async (req, res) => {
  try {
    const aAnswer = await Answer.create(req.body);

    return res.json(aAnswer);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.getAnswer = async (req, res) => {
  try {
    const id = req.params.id;
    const aAnswer = await Answer.findOne({
      where: {
        id,
      },
    });
    return res.json(aAnswer);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.updateAnswer = async (req, res) => {
  try {
    const id = req.params.id;
    const aAnswer = await Answer.findOne({
      where: {
        id,
      },
    });
    aAnswer.update(req.body);
    aAnswer.save();
    return res.json(aAnswer);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.deleteAnswer = async (req, res) => {
  try {
    const id = req.params.id;
    const aAnswer = await Answer.destroy({
      where: {
        id,
      },
    });
    return res.json(aAnswer);
  } catch (e) {
    return res.json({ message: e.message });
  }
};