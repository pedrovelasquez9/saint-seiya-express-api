const saintsRoutes = require('rutas/saints');
const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended:false}));
app.use(express.json());

saintsRoutes(app);

app.listen(port);

console.log("Bienvenido a tu primera api con nodejs y express");