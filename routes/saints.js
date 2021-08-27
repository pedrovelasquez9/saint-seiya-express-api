const saintsController = require("controladores/saintsController");
module.exports = (app) => {
    app.route('/saints').get(saintsController.getSaints);
    app.route('/saint').post(saintsController.createSaint);
}