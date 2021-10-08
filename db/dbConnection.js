const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;

const connect = async (db) => {
  await mongoose.connect(MONGO_URL + db);
};

module.exports = { connect };
