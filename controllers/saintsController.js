const Saints = require("../models/saints").Saint;

const getSaints = async (req, res) => {
  const saints = await Saints.find();
  return res.json(saints);
};

const createSaint = async (req, res) => {
  const saint = await Saints.create(req.body);
  return res.json(saint);
};

const updateSaint = async (req, res) => {
  let parameters = req.params;
  let { id } = parameters;
  let saintUpdateResult = [];
  try {
    saintUpdateResult = await Saints.findOneAndUpdate(
      { _id: id },
      { $set: req.body },
      { returnOriginal: false }
    );
  } catch (err) {
    console.error(err);
  }

  return res.json(saintUpdateResult);
};

const deleteSaint = async (req, res) => {
  let parameters = req.params;
  let { id } = parameters;
  saints = await Saints.findOneAndDelete({ _id: id }, { rawResult: true });
  return res.json(saints);
};

module.exports = { getSaints, createSaint, updateSaint, deleteSaint };
