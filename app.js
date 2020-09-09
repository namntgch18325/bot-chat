const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const QnA_Routes = require("./Routes/get.definition.routes.js");
const Covid_routes = require("./Routes/covid.19.routes.js");
const testRoutes = require("./Routes/test.routes.js");
const register_routes  = require("./Routes/register.routes.js");
const webApp = require("./Routes/app.routes.js");

const dotenv = require('dotenv').config();
const corsList = {
    origin: "http://localhost:8080"
};
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsList));

app.use("/",webApp);
app.use("/",register_routes);
app.use("/",QnA_Routes);
app.use("/",Covid_routes);
app.use("/",testRoutes);
app.listen(3000,() =>{
    console.log("Server Is Running");
})
//https://api.covid19api.com/dayone/country/viet-nam/status/confirmed/live