const saintsRoutes = require("./routes/saints");
const express = require("express");
const dbConnector = require("./db/dbConnection");
const app = express();
const PORT = process.env.PORT;
const DB = process.env.MAIN_DB;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

saintsRoutes(app);
dbConnector.connect(DB);
app.listen(PORT);

console.log(`Tu api está en el puerto ${PORT}`);
