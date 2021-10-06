const saintsController = require("controladores/saintsController");
module.exports = (app) => {
  app.route("/saints").get(saintsController.getSaints);
  app.route("/saint").post(saintsController.createSaint);
  app.route("/saint/:id").put(saintsController.updateSaint);
  app.route("/saint/:id").delete(saintsController.deleteSaint);
};
