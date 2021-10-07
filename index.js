const saintsRoutes = require("./routes/saints");
const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

saintsRoutes(app);

app.listen(PORT);

console.log(`Tu api está en el puerto ${PORT}`);
