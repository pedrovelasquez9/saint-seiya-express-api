const Saints = require("../models/saints").Saint;
let saints = [
  {
    id: 1,
    saint: "Seiya",
    star: "Pegaso",
  },
  {
    id: 2,
    saint: "Hyoga",
    star: "Cisne",
  },
  {
    id: 3,
    saint: "Shiryu",
    star: "Dragón",
  },
  {
    id: 4,
    saint: "Ikky",
    star: "Fénix",
  },
  {
    id: 5,
    saint: "Shun",
    star: "Andrómeda",
  },
];

const getSaints = async (req, res) => {
  const saints = await Saints.find();
  return res.json(saints);
};

const createSaint = async (req, res) => {
  const saint = await Saints.create(req.body);
  return res.json(saint);
};

const updateSaint = (req, res) => {
  let parameters = req.params;
  let { id } = parameters;
  let saintToUpdate = saints.find((saint) => saint.id === parseInt(id));
  let saintResult = { ...saintToUpdate, ...req.body };
  saints = saints.map((saint) => {
    saint.id === parseInt(id);
    saint = saintResult;
  });

  return res.json(saintResult);
};

const deleteSaint = (req, res) => {
  console.log(req.params);
  let parameters = req.params;
  let { id } = parameters;
  saints = saints.filter((saint) => saint.id !== parseInt(id));
  return res.json(saints);
};

module.exports = { getSaints, createSaint, updateSaint, deleteSaint };
